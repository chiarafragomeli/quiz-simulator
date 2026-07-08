// app.js - Core Logic for Cyber Security Quiz Simulator

class CyberQuestApp {
    constructor() {
        // App State
        this.questions = QUIZ_QUESTIONS; // Loaded from questions.js
        this.progress = {
            studyState: {}, // questionId -> 'notstarted' | 'inprogress' | 'mastered'
            examHistory: [] // list of simulated exams
        };
        
        // Active Session States
        this.study = {
            questions: [],
            index: 0,
            selections: {}, // optionIdx -> 'VERO' | 'FALSO'
            verified: false
        };
        
        this.exam = {
            questions: [],
            index: 0,
            answers: {}, // questionId -> { optionIdx -> 'VERO' | 'FALSO' }
            timerId: null,
            timeRemaining: 0,
            totalTime: 0,
            penalty: 'standard'
        };
        
        this.currentSection = 'dashboard';
        
        // Gemini AI Tutor states
        this.geminiApiKey = '';
        this.chatHistory = [];
        this.currentExplainingQuestion = null;
        
        // Bind UI Elements & Event Listeners
        this.init();
    }
    
    init() {
        this.loadProgress();
        this.loadGeminiKey();
        this.setupNavigation();
        this.bindEvents();
        this.updateDashboard();
        this.setupArchive();
    }
    
    // Progress Data Management
    loadProgress() {
        const saved = localStorage.getItem('cyberquest_progress');
        if (saved) {
            try {
                this.progress = JSON.parse(saved);
                if (!this.progress.studyState) this.progress.studyState = {};
                if (!this.progress.examHistory) this.progress.examHistory = [];
            } catch (e) {
                console.error("Error loading progress, resetting:", e);
            }
        }
    }
    
    saveProgress() {
        localStorage.setItem('cyberquest_progress', JSON.stringify(this.progress));
        this.updateDashboard();
    }
    
    resetProgress() {
        if (confirm("Sei sicuro di voler cancellare tutti i tuoi progressi di studio e la cronologia degli esami? Questa operazione è irreversibile.")) {
            this.progress = {
                studyState: {},
                examHistory: []
            };
            this.saveProgress();
            this.updateDashboard();
            this.setupArchive();
            this.navTo('dashboard');
            alert("Progressi resettati con successo.");
        }
    }
    
    // Navigation
    setupNavigation() {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = item.getAttribute('data-target');
                this.navTo(target);
            });
        });
    }
    
    navTo(sectionId) {
        // Toggle active menu item
        document.querySelectorAll('.menu-item').forEach(item => {
            if (item.getAttribute('data-target') === sectionId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // Toggle section visibility
        document.querySelectorAll('.content-section').forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        
        this.currentSection = sectionId;
        
        // Update Title & Subtitle
        const titles = {
            dashboard: { title: "Dashboard Statistiche", subtitle: "Panoramica dei tuoi progressi e dello stato di studio." },
            study: { title: "Esercitazione / Studio", subtitle: "Modalità flashcard per l'apprendimento attivo." },
            exam: { title: "Simulazione d'Esame", subtitle: "Verifica le tue conoscenze in condizioni d'esame reali." },
            archive: { title: "Archivio Domande", subtitle: "Sfoglia, cerca e consulta il database di 487 domande." }
        };
        
        document.getElementById('section-title').textContent = titles[sectionId].title;
        document.getElementById('section-subtitle').textContent = titles[sectionId].subtitle;
        
        // Reset dynamic panels when entering sections if needed
        if (sectionId === 'dashboard') {
            this.updateDashboard();
        } else if (sectionId === 'study' && this.study.questions.length === 0) {
            this.resetStudySetup();
        } else if (sectionId === 'exam' && this.exam.questions.length === 0) {
            this.resetExamSetup();
        } else if (sectionId === 'archive') {
            this.filterArchive();
        }
    }
    
    // Dashboard Logic
    updateDashboard() {
        const total = this.questions.length;
        let mastered = 0;
        let inProgress = 0;
        
        // Count statuses
        Object.values(this.progress.studyState).forEach(state => {
            if (state === 'mastered') mastered++;
            if (state === 'inprogress') inProgress++;
        });
        
        const notStarted = total - mastered - inProgress;
        
        // Update DOM stats cards
        document.getElementById('total-questions-val').textContent = total;
        document.getElementById('not-started-val').textContent = notStarted;
        document.getElementById('in-progress-val').textContent = inProgress;
        document.getElementById('mastered-val').textContent = mastered;
        
        // Update overall progress percentage
        const progressPct = total > 0 ? Math.round((mastered / total) * 100) : 0;
        document.getElementById('overall-progress-badge').textContent = `${progressPct}% Completato`;
        
        // Category breakdown counters
        const categories = {
            "Reti, Internet e Cyber Security (M1)": { total: 0, mastered: 0 },
            "Organizzazione e Gestione Aziendale (M2)": { total: 0, mastered: 0 },
            "Crittografia e Sicurezza dei Dati (M3)": { total: 0, mastered: 0 },
            "Risk Management, Legal & Compliance (M4)": { total: 0, mastered: 0 }
        };
        
        this.questions.forEach(q => {
            if (categories[q.category] !== undefined) {
                categories[q.category].total++;
                if (this.progress.studyState[q.id] === 'mastered') {
                    categories[q.category].mastered++;
                }
            }
        });
        
        // Update Category bars
        const updateCatUI = (suffix, name) => {
            const cat = categories[name];
            const pct = cat.total > 0 ? Math.round((cat.mastered / cat.total) * 100) : 0;
            document.getElementById(`cat-pct-${suffix}`).textContent = `${pct}%`;
            document.getElementById(`cat-count-${suffix}`).textContent = `${cat.mastered} / ${cat.total} domande`;
            document.querySelector(`.fill-${suffix}`).style.width = `${pct}%`;
        };
        
        updateCatUI('m1', "Reti, Internet e Cyber Security (M1)");
        updateCatUI('m2', "Organizzazione e Gestione Aziendale (M2)");
        updateCatUI('m3', "Crittografia e Sicurezza dei Dati (M3)");
        updateCatUI('m4', "Risk Management, Legal & Compliance (M4)");
        
        // Update Exam Stats
        const history = this.progress.examHistory;
        const examsTaken = history.length;
        document.getElementById('exams-taken-val').textContent = examsTaken;
        
        if (examsTaken > 0) {
            let totalGrade = 0;
            let passedExams = 0;
            
            history.forEach(exam => {
                totalGrade += exam.score;
                if (exam.passed) passedExams++;
            });
            
            const avgGrade = (totalGrade / examsTaken).toFixed(1);
            document.getElementById('exam-avg-val').textContent = avgGrade;
            
            const successRate = Math.round((passedExams / examsTaken) * 100);
            document.getElementById('exam-success-rate').textContent = `${successRate}%`;
            
            const lastExam = history[history.length - 1];
            document.getElementById('last-exam-result').textContent = `${lastExam.score.toFixed(1)}/30 (${lastExam.passed ? 'Idoneo' : 'Respinto'})`;
            if (lastExam.passed) {
                document.getElementById('last-exam-result').className = "text-vero";
            } else {
                document.getElementById('last-exam-result').className = "text-falso";
            }
            
            // Render circular progress svg
            // 283 is the max dashoffset for radius 45 (2 * PI * r = 282.7)
            const circle = document.getElementById('exam-avg-circle');
            const percent = (avgGrade / 30) * 100;
            const offset = 283 - (283 * percent) / 100;
            circle.style.strokeDashoffset = offset;
        } else {
            document.getElementById('exam-avg-val').textContent = "-";
            document.getElementById('exam-success-rate').textContent = "0%";
            document.getElementById('last-exam-result').textContent = "-";
            document.getElementById('last-exam-result').className = "";
            document.getElementById('exam-avg-circle').style.strokeDashoffset = 283;
        }
    }
    
    // Study Mode Logic
    resetStudySetup() {
        document.getElementById('study-setup-view').classList.remove('hidden');
        document.getElementById('study-active-view').classList.add('hidden');
        document.getElementById('study-rating-container').classList.add('hidden');
    }
    
    startStudy() {
        const catSelect = document.getElementById('study-category-select').value;
        const incNotStarted = document.getElementById('filter-not-started').checked;
        const incInProgress = document.getElementById('filter-in-progress').checked;
        const incMastered = document.getElementById('filter-mastered').checked;
        
        // Filter questions by category and status
        this.study.questions = this.questions.filter(q => {
            // Category check
            if (catSelect !== 'all') {
                const catPrefix = catSelect.toUpperCase(); // 'M1', 'M2', 'M3', 'M4'
                if (!q.code.toUpperCase().startsWith(catPrefix) && !q.code.toUpperCase().startsWith(catPrefix.replace('M', 'M.'))) {
                    return false;
                }
            }
            
            // Status check
            const state = this.progress.studyState[q.id] || 'notstarted';
            if (state === 'notstarted' && !incNotStarted) return false;
            if (state === 'inprogress' && !incInProgress) return false;
            if (state === 'mastered' && !incMastered) return false;
            
            return true;
        });
        
        // Shuffle the selected questions
        this.study.questions.sort(() => Math.random() - 0.5);
        
        if (this.study.questions.length === 0) {
            alert("Nessuna domanda trovata con i filtri selezionati. Modifica la selezione e riprova.");
            return;
        }
        
        this.study.index = 0;
        this.showStudyQuestion();
        
        document.getElementById('study-setup-view').classList.add('hidden');
        document.getElementById('study-active-view').classList.remove('hidden');
    }
    
    showStudyQuestion() {
        const q = this.study.questions[this.study.index];
        this.study.selections = {};
        this.study.verified = false;
        
        // Set badges and codes
        document.getElementById('study-cat-badge').textContent = q.category.replace(' (M1)', '').replace(' (M2)', '').replace(' (M3)', '').replace(' (M4)', '');
        
        // Determine category color class
        const catClass = q.code.toUpperCase().includes('M2') ? 'badge-m2' : 
                          q.code.toUpperCase().includes('M3') ? 'badge-m3' : 
                          q.code.toUpperCase().includes('M4') ? 'badge-m4' : 'badge-m1';
        document.getElementById('study-cat-badge').className = `category-badge ${catClass}`;
        
        document.getElementById('study-q-code').textContent = q.code;
        document.getElementById('study-progress-idx').textContent = `Domanda ${this.study.index + 1} di ${this.study.questions.length}`;
        document.getElementById('study-q-title').textContent = q.question;
        
        // Render options list
        const container = document.getElementById('study-options-container');
        container.innerHTML = '';
        
        q.options.forEach((opt, idx) => {
            const optEl = document.createElement('div');
            optEl.className = 'option-item';
            optEl.id = `study-opt-${idx}`;
            
            optEl.innerHTML = `
                <div class="option-text">
                    <span class="option-number">${idx + 1}.</span> ${opt.option_text}
                </div>
                <div class="option-controls">
                    <button class="option-btn btn-v" onclick="app.selectStudyOption(${idx}, 'VERO')">V</button>
                    <button class="option-btn btn-f" onclick="app.selectStudyOption(${idx}, 'FALSO')">F</button>
                    <button class="option-btn btn-n" onclick="app.selectStudyOption(${idx}, 'NON_RISPONDO')">N</button>
                </div>
            `;
            container.appendChild(optEl);
        });
        
        // Reset study buttons
        document.getElementById('study-verify-btn').classList.remove('hidden');
        document.getElementById('study-rating-container').classList.add('hidden');
        document.getElementById('study-prev-btn').disabled = (this.study.index === 0);
        document.getElementById('study-next-btn').disabled = true; // disabled until verified
    }
    
    selectStudyOption(optIdx, val) {
        if (this.study.verified) return; // Cannot change after verification
        
        const itemEl = document.getElementById(`study-opt-${optIdx}`);
        const btnV = itemEl.querySelector('.btn-v');
        const btnF = itemEl.querySelector('.btn-f');
        const btnN = itemEl.querySelector('.btn-n');
        
        if (this.study.selections[optIdx] === val) {
            // Deselect
            delete this.study.selections[optIdx];
            btnV.classList.remove('selected-vero');
            btnF.classList.remove('selected-falso');
            btnN.classList.remove('selected-non-rispondo');
        } else {
            // Select
            this.study.selections[optIdx] = val;
            btnV.classList.remove('selected-vero');
            btnF.classList.remove('selected-falso');
            btnN.classList.remove('selected-non-rispondo');
            
            if (val === 'VERO') {
                btnV.classList.add('selected-vero');
            } else if (val === 'FALSO') {
                btnF.classList.add('selected-falso');
            } else if (val === 'NON_RISPONDO') {
                btnN.classList.add('selected-non-rispondo');
            }
        }
    }
    
    verifyStudyQuestion() {
        if (this.study.verified) return;
        
        const q = this.study.questions[this.study.index];
        this.study.verified = true;
        
        // Show correct / incorrect classes and icons
        q.options.forEach((opt, idx) => {
            const itemEl = document.getElementById(`study-opt-${idx}`);
            const userSelection = this.study.selections[idx]; // 'VERO', 'FALSO' or undefined
            const correctValue = opt.answer ? 'VERO' : 'FALSO';
            
            // Add correction indicator to options
            const textEl = itemEl.querySelector('.option-text');
            const feedbackIcon = document.createElement('i');
            
            if (userSelection === correctValue) {
                itemEl.classList.add('correct-match');
                feedbackIcon.className = "fa-solid fa-circle-check option-feedback-icon";
            } else {
                itemEl.classList.add('incorrect-match');
                feedbackIcon.className = "fa-solid fa-circle-xmark option-feedback-icon";
            }
            textEl.prepend(feedbackIcon);
            
            // Append correct answer label
            const labelBadge = document.createElement('span');
            labelBadge.className = `correct-badge ${correctValue === 'VERO' ? 'badge-vero' : 'badge-falso'}`;
            labelBadge.textContent = correctValue;
            textEl.appendChild(labelBadge);
            
            // Style the buttons to freeze them
            const btnV = itemEl.querySelector('.btn-v');
            const btnF = itemEl.querySelector('.btn-f');
            const btnN = itemEl.querySelector('.btn-n');
            btnV.style.cursor = 'default';
            btnF.style.cursor = 'default';
            btnN.style.cursor = 'default';
        });
        
        // Hide verify button, show Spaced Repetition Panel
        document.getElementById('study-verify-btn').classList.add('hidden');
        document.getElementById('study-rating-container').classList.remove('hidden');
        document.getElementById('study-next-btn').disabled = false;
        
        // Automatically label as "inprogress" if they made any error, else keep as is
        let allCorrect = true;
        q.options.forEach((opt, idx) => {
            const correctValue = opt.answer ? 'VERO' : 'FALSO';
            if (this.study.selections[idx] !== correctValue) {
                allCorrect = false;
            }
        });
        
        if (!allCorrect) {
            this.updateQuestionStatus(q.id, 'inprogress');
        }
    }
    
    updateQuestionStatus(qId, status) {
        this.progress.studyState[qId] = status;
        this.saveProgress();
    }
    
    rateStudyQuestion(rating) {
        const q = this.study.questions[this.study.index];
        const status = rating === 'easy' ? 'mastered' : 'inprogress';
        this.updateQuestionStatus(q.id, status);
        
        // Auto advance to next question
        setTimeout(() => {
            this.advanceStudy(1);
        }, 300);
    }
    
    advanceStudy(direction) {
        const nextIdx = this.study.index + direction;
        if (nextIdx >= 0 && nextIdx < this.study.questions.length) {
            this.study.index = nextIdx;
            this.showStudyQuestion();
        } else if (nextIdx >= this.study.questions.length) {
            alert("Hai completato la sessione di studio! Ottimo lavoro!");
            this.resetStudySetup();
        }
    }
    
    // Exam Mode Logic
    resetExamSetup() {
        document.getElementById('exam-setup-view').classList.remove('hidden');
        document.getElementById('exam-active-view').classList.add('hidden');
        document.getElementById('exam-results-view').classList.add('hidden');
    }
    
    startExam() {
        const count = parseInt(document.getElementById('exam-q-count').value);
        this.exam.penalty = document.getElementById('exam-penalty-select').value;
        
        const incM1 = document.getElementById('exam-inc-m1').checked;
        const incM2 = document.getElementById('exam-inc-m2').checked;
        const incM3 = document.getElementById('exam-inc-m3').checked;
        const incM4 = document.getElementById('exam-inc-m4').checked;
        
        if (!incM1 && !incM2 && !incM3 && !incM4) {
            alert("Devi selezionare almeno un modulo per iniziare l'esame.");
            return;
        }
        
        // Filter questions by module
        const available = this.questions.filter(q => {
            const code = q.code.toUpperCase();
            if (code.startsWith("M1") || code.startsWith("M.1")) return incM1;
            if (code.startsWith("M2") || code.startsWith("M.2")) return incM2;
            if (code.startsWith("M3") || code.startsWith("M.3")) return incM3;
            if (code.startsWith("M4") || code.startsWith("M.4")) return incM4;
            return false;
        });
        
        if (available.length < count) {
            alert(`Non ci sono abbastanza domande nel database (${available.length}) per la quantità richiesta (${count}). Riduci il numero di domande.`);
            return;
        }
        
        // Draw random questions
        available.sort(() => Math.random() - 0.5);
        this.exam.questions = available.slice(0, count);
        this.exam.index = 0;
        this.exam.answers = {};
        
        // Setup timer: 90 seconds per question
        this.exam.totalTime = count * 90;
        this.exam.timeRemaining = this.exam.totalTime;
        
        this.renderExamNavGrid();
        this.showExamQuestion();
        this.startExamTimer();
        
        document.getElementById('exam-setup-view').classList.add('hidden');
        document.getElementById('exam-active-view').classList.remove('hidden');
        document.getElementById('exam-results-view').classList.add('hidden');
    }
    
    startExamTimer() {
        if (this.exam.timerId) clearInterval(this.exam.timerId);
        
        const timerEl = document.getElementById('exam-timer-val');
        timerEl.classList.remove('danger');
        
        const updateTimerDisplay = () => {
            const mins = Math.floor(this.exam.timeRemaining / 60);
            const secs = this.exam.timeRemaining % 60;
            timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            
            if (this.exam.timeRemaining <= 60) {
                timerEl.classList.add('danger');
            }
        };
        
        updateTimerDisplay();
        
        this.exam.timerId = setInterval(() => {
            this.exam.timeRemaining--;
            if (this.exam.timeRemaining <= 0) {
                clearInterval(this.exam.timerId);
                alert("Tempo scaduto! L'esame verrà consegnato automaticamente.");
                this.submitExam();
            } else {
                updateTimerDisplay();
            }
        }, 1000);
    }
    
    renderExamNavGrid() {
        const grid = document.getElementById('exam-nav-grid');
        grid.innerHTML = '';
        
        this.exam.questions.forEach((q, idx) => {
            const btn = document.createElement('button');
            btn.className = 'nav-btn unanswered';
            btn.id = `exam-nav-btn-${idx}`;
            btn.textContent = idx + 1;
            btn.onclick = () => app.jumpToExamQuestion(idx);
            grid.appendChild(btn);
        });
    }
    
    updateExamNavStatus(idx) {
        const btn = document.getElementById(`exam-nav-btn-${idx}`);
        if (!btn) return;
        
        // Remove existing nav grid status classes
        btn.className = 'nav-btn';
        
        const qId = this.exam.questions[idx].id;
        const qAns = this.exam.answers[qId];
        
        // Check if user answered something in this question
        const isAnswered = qAns && Object.keys(qAns).length > 0;
        
        if (isAnswered) {
            btn.classList.add('answered');
        } else {
            btn.classList.add('unanswered');
        }
        
        if (idx === this.exam.index) {
            btn.classList.add('current');
        }
    }
    
    showExamQuestion() {
        const q = this.exam.questions[this.exam.index];
        const qId = q.id;
        
        // Badges and counters
        document.getElementById('exam-q-cat-badge').textContent = q.category.replace(' (M1)', '').replace(' (M2)', '').replace(' (M3)', '').replace(' (M4)', '');
        
        const catClass = q.code.toUpperCase().includes('M2') ? 'badge-m2' : 
                          q.code.toUpperCase().includes('M3') ? 'badge-m3' : 
                          q.code.toUpperCase().includes('M4') ? 'badge-m4' : 'badge-m1';
        document.getElementById('exam-q-cat-badge').className = `category-badge ${catClass}`;
        
        document.getElementById('exam-q-code').textContent = q.code;
        document.getElementById('exam-progress-idx').textContent = `Domanda ${this.exam.index + 1} di ${this.exam.questions.length}`;
        document.getElementById('exam-q-title').textContent = q.question;
        
        // Render options
        const container = document.getElementById('exam-options-container');
        container.innerHTML = '';
        
        const userAnswers = this.exam.answers[qId] || {};
        
        q.options.forEach((opt, idx) => {
            const optEl = document.createElement('div');
            optEl.className = 'option-item';
            optEl.id = `exam-opt-${idx}`;
            
            const btnVClass = userAnswers[idx] === 'VERO' ? 'selected-vero' : '';
            const btnFClass = userAnswers[idx] === 'FALSO' ? 'selected-falso' : '';
            const btnNClass = userAnswers[idx] === 'NON_RISPONDO' ? 'selected-non-rispondo' : '';
            
            optEl.innerHTML = `
                <div class="option-text">
                    <span class="option-number">${idx + 1}.</span> ${opt.option_text}
                </div>
                <div class="option-controls">
                    <button class="option-btn btn-v ${btnVClass}" onclick="app.selectExamOption(${idx}, 'VERO')">V</button>
                    <button class="option-btn btn-f ${btnFClass}" onclick="app.selectExamOption(${idx}, 'FALSO')">F</button>
                    <button class="option-btn btn-n ${btnNClass}" onclick="app.selectExamOption(${idx}, 'NON_RISPONDO')">N</button>
                </div>
            `;
            container.appendChild(optEl);
        });
        
        // Update nav grid selection states
        this.exam.questions.forEach((_, idx) => this.updateExamNavStatus(idx));
        
        // Footer buttons state
        document.getElementById('exam-prev-btn').disabled = (this.exam.index === 0);
        document.getElementById('exam-next-btn').disabled = (this.exam.index === this.exam.questions.length - 1);
    }
    
    selectExamOption(optIdx, val) {
        const qId = this.exam.questions[this.exam.index].id;
        
        if (!this.exam.answers[qId]) {
            this.exam.answers[qId] = {};
        }
        
        const userAnswers = this.exam.answers[qId];
        const itemEl = document.getElementById(`exam-opt-${optIdx}`);
        const btnV = itemEl.querySelector('.btn-v');
        const btnF = itemEl.querySelector('.btn-f');
        const btnN = itemEl.querySelector('.btn-n');
        
        if (userAnswers[optIdx] === val) {
            // Deselect
            delete userAnswers[optIdx];
            btnV.classList.remove('selected-vero');
            btnF.classList.remove('selected-falso');
            btnN.classList.remove('selected-non-rispondo');
        } else {
            // Select
            userAnswers[optIdx] = val;
            btnV.classList.remove('selected-vero');
            btnF.classList.remove('selected-falso');
            btnN.classList.remove('selected-non-rispondo');
            
            if (val === 'VERO') {
                btnV.classList.add('selected-vero');
            } else if (val === 'FALSO') {
                btnF.classList.add('selected-falso');
            } else if (val === 'NON_RISPONDO') {
                btnN.classList.add('selected-non-rispondo');
            }
        }
        
        // Clean empty answer blocks
        if (Object.keys(userAnswers).length === 0) {
            delete this.exam.answers[qId];
        }
        
        // Update current nav status
        this.updateExamNavStatus(this.exam.index);
    }
    
    jumpToExamQuestion(idx) {
        this.exam.index = idx;
        this.showExamQuestion();
    }
    
    advanceExam(direction) {
        const nextIdx = this.exam.index + direction;
        if (nextIdx >= 0 && nextIdx < this.exam.questions.length) {
            this.jumpToExamQuestion(nextIdx);
        }
    }
    
    showSubmitConfirmation() {
        // Count unanswered questions
        let unanswered = 0;
        this.exam.questions.forEach(q => {
            const userAns = this.exam.answers[q.id];
            if (!userAns || Object.keys(userAns).length < q.options.length) {
                // If some options are missing or the whole question is missing
                unanswered++;
            }
        });
        
        const modal = document.getElementById('confirm-submit-modal');
        const countBox = document.getElementById('unanswered-count-box');
        
        if (unanswered > 0) {
            countBox.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>Attenzione: hai ancora <strong>${unanswered}</strong> domande incomplete o in bianco.</span>`;
            countBox.className = "modal-info-box warning-box";
            countBox.style.color = "var(--color-warning)";
            countBox.style.backgroundColor = "rgba(245, 158, 11, 0.1)";
            countBox.style.borderColor = "rgba(245, 158, 11, 0.2)";
        } else {
            countBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Tutte le domande hanno ricevuto una risposta!</span>`;
            countBox.className = "modal-info-box success-box";
            countBox.style.color = "var(--color-success)";
            countBox.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
            countBox.style.borderColor = "rgba(16, 185, 129, 0.2)";
        }
        
        modal.classList.remove('hidden');
    }
    
    hideSubmitConfirmation() {
        document.getElementById('confirm-submit-modal').classList.add('hidden');
    }
    
    submitExam() {
        this.hideSubmitConfirmation();
        if (this.exam.timerId) clearInterval(this.exam.timerId);
        
        // Calculate points
        let totalPoints = 0;
        let correctCount = 0;
        let wrongCount = 0;
        let blankCount = 0;
        let totalOptionsChecked = 0;
        
        this.exam.questions.forEach(q => {
            const userAns = this.exam.answers[q.id] || {};
            const optCount = q.options.length;
            let questionCorrectOpts = 0;
            let questionWrongOpts = 0;
            let questionBlankOpts = 0;
            
            q.options.forEach((opt, optIdx) => {
                const userVal = userAns[optIdx]; // 'VERO', 'FALSO' or undefined
                const correctVal = opt.answer ? 'VERO' : 'FALSO';
                
                if (userVal === undefined || userVal === 'NON_RISPONDO') {
                    questionBlankOpts++;
                    blankCount++;
                } else if (userVal === correctVal) {
                    questionCorrectOpts++;
                    correctCount++;
                } else {
                    questionWrongOpts++;
                    wrongCount++;
                }
                totalOptionsChecked++;
            });
            
            // Points math depending on penalty
            if (this.exam.penalty === 'allornothing') {
                if (questionCorrectOpts === optCount) {
                    totalPoints += 1.0;
                }
            } else {
                // Per-option scoring
                // Max points for this question = 1.0
                // Correct yields +1/optCount, Wrong deducts penalty/optCount, Blank is 0
                let qPoints = 0;
                let penaltyVal = 0.5; // standard
                if (this.exam.penalty === 'light') penaltyVal = 0.25;
                if (this.exam.penalty === 'nopenalty') penaltyVal = 0;
                
                qPoints += (questionCorrectOpts / optCount) * 1.0;
                qPoints -= (questionWrongOpts / optCount) * penaltyVal;
                
                // Question score can't go below 0 (standard university exam rule)
                totalPoints += Math.max(0, qPoints);
            }
        });
        
        // Calculate score out of 30
        const examMaxPoints = this.exam.questions.length;
        let rawGrade = (totalPoints / examMaxPoints) * 30;
        // round to nearest 0.5 or 0.25 (standard university grading)
        rawGrade = Math.max(0, Math.round(rawGrade * 2) / 2);
        
        const passed = rawGrade >= 18;
        const gradeText = rawGrade >= 30 ? "30L" : rawGrade.toString();
        
        // Add to history
        const examSession = {
            date: new Date().toLocaleDateString('it-IT'),
            score: rawGrade,
            totalQuestions: this.exam.questions.length,
            correctCount: correctCount,
            wrongCount: wrongCount,
            blankCount: blankCount,
            passed: passed
        };
        
        this.progress.examHistory.push(examSession);
        this.saveProgress();
        
        // Show Results screen
        this.showExamResults(examSession, gradeText);
    }
    
    showExamResults(examSession, gradeText) {
        document.getElementById('exam-active-view').classList.add('hidden');
        document.getElementById('exam-results-view').classList.remove('hidden');
        
        const titleEl = document.getElementById('exam-results-title');
        const summaryEl = document.getElementById('exam-results-summary');
        const badgeEl = document.getElementById('exam-grade-badge');
        const headerCard = document.querySelector('.results-header-card');
        
        badgeEl.textContent = gradeText;
        
        if (examSession.passed) {
            headerCard.classList.remove('failed-exam');
            titleEl.textContent = "Congratulazioni, Esame Superato!";
            if (gradeText === "30L") {
                summaryEl.textContent = `Hai ottenuto il massimo dei voti (30 e Lode) rispondendo correttamente a ${examSession.correctCount} affermazioni su ${examSession.correctCount + examSession.wrongCount + examSession.blankCount}!`;
            } else {
                summaryEl.textContent = `Hai totalizzato un punteggio di ${examSession.score.toFixed(1)}/30 superando la prova d'esame.`;
            }
        } else {
            headerCard.classList.add('failed-exam');
            titleEl.textContent = "Esame Non Superato";
            summaryEl.textContent = `Hai totalizzato un punteggio di ${examSession.score.toFixed(1)}/30. Il voto minimo per superare l'esame è 18/30.`;
        }
        
        // Stats grid
        document.getElementById('res-score-val').textContent = `${examSession.score.toFixed(1)} / 30`;
        document.getElementById('res-correct-options-val').textContent = examSession.correctCount;
        document.getElementById('res-wrong-options-val').textContent = examSession.wrongCount;
        document.getElementById('res-blank-options-val').textContent = examSession.blankCount;
        
        // Load detailed review
        this.renderExamReview();
    }
    
    renderExamReview() {
        const list = document.getElementById('exam-review-list');
        list.innerHTML = '';
        
        this.exam.questions.forEach((q, qIdx) => {
            const userAns = this.exam.answers[q.id] || {};
            const qEl = document.createElement('div');
            
            // Check if user got any wrong in this question (excluding blanks/non-rispondo)
            let hasError = false;
            q.options.forEach((opt, optIdx) => {
                const userVal = userAns[optIdx];
                const correctVal = opt.answer ? 'VERO' : 'FALSO';
                if (userVal !== undefined && userVal !== 'NON_RISPONDO' && userVal !== correctVal) {
                    hasError = true;
                }
            });
            
            qEl.className = `review-q-item ${hasError ? 'has-error' : ''}`;
            
            // Build header
            const header = document.createElement('div');
            header.className = 'review-q-header';
            
            const catClass = q.code.toUpperCase().includes('M2') ? 'badge-m2' : 
                              q.code.toUpperCase().includes('M3') ? 'badge-m3' : 
                              q.code.toUpperCase().includes('M4') ? 'badge-m4' : 'badge-m1';
            
            header.innerHTML = `
                <span class="category-badge ${catClass}">${q.category.split(' ')[0]}</span>
                <span class="question-code">${q.code}</span>
                <button class="btn btn-secondary-outline btn-review-ai" style="margin-left: auto;" onclick="app.askGeminiExplanation(${q.id})">
                    <i class="fa-solid fa-wand-magic-sparkles"></i> Spiegazione AI ✨
                </button>
                <h4 class="review-q-title" style="width: 100%; margin-top: 4px;">${qIdx + 1}. ${q.question}</h4>
            `;
            qEl.appendChild(header);
            
            // Build options
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'review-options';
            
            q.options.forEach((opt, optIdx) => {
                const userVal = userAns[optIdx]; // 'VERO', 'FALSO', 'NON_RISPONDO' or undefined
                const correctVal = opt.answer ? 'VERO' : 'FALSO';
                const isCorrect = (userVal === correctVal);
                
                let rowClass = 'neutral';
                if (isCorrect) {
                    rowClass = 'correct';
                } else if (userVal === 'VERO' || userVal === 'FALSO') {
                    rowClass = 'incorrect';
                }
                
                const userValDisplay = (userVal === undefined || userVal === 'NON_RISPONDO') ? 'Non risposto' : userVal;
                
                const row = document.createElement('div');
                row.className = `review-opt-row ${rowClass}`;
                
                row.innerHTML = `
                    <div class="review-opt-text">${optIdx + 1}. ${opt.option_text}</div>
                    <div class="review-opt-answer-col">
                        <span class="user-tag">Tua: <strong class="${userVal === 'VERO' ? 'text-vero' : userVal === 'FALSO' ? 'text-falso' : ''}">${userValDisplay}</strong></span>
                        <span class="correct-tag">Corretta: <strong class="${correctVal === 'VERO' ? 'text-vero' : 'text-falso'}">${correctVal}</strong></span>
                    </div>
                `;
                optionsContainer.appendChild(row);
            });
            
            qEl.appendChild(optionsContainer);
            list.appendChild(qEl);
        });
        
        // Hide review list by default
        document.getElementById('exam-review-container').classList.add('hidden');
        document.getElementById('exam-review-toggle-btn').innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> Mostra Correzione Risposte`;
    }
    
    toggleExamReview() {
        const container = document.getElementById('exam-review-container');
        const btn = document.getElementById('exam-review-toggle-btn');
        
        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden');
            btn.innerHTML = `<i class="fa-solid fa-eye-slash"></i> Nascondi Correzione Risposte`;
            // Scroll to review
            container.scrollIntoView({ behavior: 'smooth' });
        } else {
            container.classList.add('hidden');
            btn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> Mostra Correzione Risposte`;
        }
    }
    
    // Archive Logic
    setupArchive() {
        const searchInput = document.getElementById('archive-search-input');
        const catSelect = document.getElementById('archive-cat-select');
        const statusSelect = document.getElementById('archive-status-select');
        
        searchInput.addEventListener('input', () => this.filterArchive());
        catSelect.addEventListener('change', () => this.filterArchive());
        statusSelect.addEventListener('change', () => this.filterArchive());
    }
    
    filterArchive() {
        const query = document.getElementById('archive-search-input').value.toLowerCase().trim();
        const categoryVal = document.getElementById('archive-cat-select').value;
        const statusVal = document.getElementById('archive-status-select').value;
        
        // Filter elements
        const filtered = this.questions.filter(q => {
            // Category Filter
            if (categoryVal !== 'all') {
                const prefix = categoryVal.toUpperCase();
                if (!q.code.toUpperCase().startsWith(prefix) && !q.code.toUpperCase().startsWith(prefix.replace('M', 'M.'))) {
                    return false;
                }
            }
            
            // Status Filter
            const state = this.progress.studyState[q.id] || 'notstarted';
            if (statusVal !== 'all' && state !== statusVal) {
                return false;
            }
            
            // Search Query Filter
            if (query) {
                const inTitle = q.question.toLowerCase().includes(query);
                const inCode = q.code.toLowerCase().includes(query);
                let inOptions = false;
                
                for (let i = 0; i < q.options.length; i++) {
                    if (q.options[i].option_text.toLowerCase().includes(query)) {
                        inOptions = true;
                        break;
                    }
                }
                
                if (!inTitle && !inCode && !inOptions) {
                    return false;
                }
            }
            
            return true;
        });
        
        // Update results counter
        document.getElementById('archive-results-count').textContent = `Trovate ${filtered.length} domande (su ${this.questions.length})`;
        
        // Render archive items
        const container = document.getElementById('archive-list-container');
        container.innerHTML = '';
        
        if (filtered.length === 0) {
            container.innerHTML = '<div class="no-results-box">Nessuna domanda corrisponde ai filtri selezionati.</div>';
            return;
        }
        
        filtered.forEach(q => {
            const item = document.createElement('div');
            item.className = 'archive-item';
            
            const catClass = q.code.toUpperCase().includes('M2') ? 'badge-m2' : 
                              q.code.toUpperCase().includes('M3') ? 'badge-m3' : 
                              q.code.toUpperCase().includes('M4') ? 'badge-m4' : 'badge-m1';
                              
            const state = this.progress.studyState[q.id] || 'notstarted';
            const stateText = state === 'mastered' ? 'Padroneggiata' : state === 'inprogress' ? 'In corso' : 'Nuova';
            const stateClass = state === 'mastered' ? 'badge-success' : state === 'inprogress' ? 'badge-warning' : 'badge-secondary';
            
            // Build options rows
            let optionsHTML = '';
            q.options.forEach((opt, idx) => {
                const isVero = opt.answer;
                optionsHTML += `
                    <div class="archive-option-row ${isVero ? 'vero-label' : 'falso-label'}">
                        <span>${idx + 1}. ${opt.option_text}</span>
                        <span class="archive-badge ${isVero ? 'text-vero' : 'text-falso'}">${isVero ? 'VERO' : 'FALSO'}</span>
                    </div>
                `;
            });
            
            item.innerHTML = `
                <div class="archive-item-header" onclick="app.toggleArchiveItem(this)">
                    <span class="category-badge ${catClass}">${q.category.split(' ')[0]}</span>
                    <span class="question-code">${q.code}</span>
                    <h4>${q.question}</h4>
                    <span class="badge ${stateClass}" style="margin-right: 10px; font-size:10px">${stateText}</span>
                    <i class="fa-solid fa-chevron-down archive-item-chevron"></i>
                </div>
                <div class="archive-item-body">
                    <h5>Opzioni e Risposte Corrette</h5>
                    <div class="archive-options-list">
                        ${optionsHTML}
                    </div>
                </div>
            `;
            container.appendChild(item);
        });
    }
    
    toggleArchiveItem(headerEl) {
        const item = headerEl.parentElement;
        item.classList.toggle('expanded');
    }
    
    // Bind Event Listeners
    bindEvents() {
        // Dashboard reset
        document.getElementById('reset-progress-btn').addEventListener('click', () => this.resetProgress());
        
        // Study page events
        document.getElementById('start-study-btn').addEventListener('click', () => this.startStudy());
        document.getElementById('study-verify-btn').addEventListener('click', () => this.verifyStudyQuestion());
        document.getElementById('study-prev-btn').addEventListener('click', () => this.advanceStudy(-1));
        document.getElementById('study-next-btn').addEventListener('click', () => this.advanceStudy(1));
        
        // Study rating click event
        const ratingButtons = document.querySelectorAll('#study-rating-container .rating-buttons button');
        ratingButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const rate = btn.getAttribute('data-rate');
                this.rateStudyQuestion(rate);
            });
        });
        
        // Exam page events
        document.getElementById('start-exam-btn').addEventListener('click', () => this.startExam());
        document.getElementById('exam-prev-btn').addEventListener('click', () => this.advanceExam(-1));
        document.getElementById('exam-next-btn').addEventListener('click', () => this.advanceExam(1));
        document.getElementById('exam-submit-early-btn').addEventListener('click', () => this.showSubmitConfirmation());
        document.getElementById('modal-cancel-btn').addEventListener('click', () => this.hideSubmitConfirmation());
        document.getElementById('modal-confirm-btn').addEventListener('click', () => this.submitExam());
        document.getElementById('exam-back-setup-btn').addEventListener('click', () => this.resetExamSetup());
        document.getElementById('exam-review-toggle-btn').addEventListener('click', () => this.toggleExamReview());
        
        // Gemini AI Tutor events
        document.getElementById('open-ai-settings-btn').addEventListener('click', () => this.openGeminiKeyModal());
        document.getElementById('gemini-key-close-btn').addEventListener('click', () => this.closeGeminiKeyModal());
        document.getElementById('gemini-key-save-btn').addEventListener('click', () => {
            const key = document.getElementById('gemini-api-key-input').value.trim();
            this.saveGeminiKey(key);
            this.closeGeminiKeyModal();
        });
        document.getElementById('gemini-key-delete-btn').addEventListener('click', () => {
            this.deleteGeminiKey();
            this.closeGeminiKeyModal();
        });
        document.getElementById('study-ai-explain-btn').addEventListener('click', () => {
            if (this.study.questions.length > 0) {
                this.askGeminiExplanation(this.study.questions[this.study.index].id);
            }
        });
        document.getElementById('chat-drawer-close-btn').addEventListener('click', () => this.closeChatDrawer());
        document.getElementById('chat-drawer-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'chat-drawer-overlay') this.closeChatDrawer();
        });
        document.getElementById('drawer-send-btn').addEventListener('click', () => this.sendChatMessage());
        document.getElementById('drawer-chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendChatMessage();
        });
    }
    
    // Gemini API Key Management
    loadGeminiKey() {
        this.geminiApiKey = localStorage.getItem('cyberquest_gemini_api_key') || '';
    }
    
    saveGeminiKey(key) {
        if (!key) return;
        this.geminiApiKey = key;
        localStorage.setItem('cyberquest_gemini_api_key', key);
    }
    
    deleteGeminiKey() {
        this.geminiApiKey = '';
        localStorage.removeItem('cyberquest_gemini_api_key');
        document.getElementById('gemini-api-key-input').value = '';
    }
    
    openGeminiKeyModal() {
        document.getElementById('gemini-api-key-input').value = this.geminiApiKey;
        document.getElementById('gemini-key-modal').classList.remove('hidden');
    }
    
    closeGeminiKeyModal() {
        document.getElementById('gemini-key-modal').classList.add('hidden');
    }
    
    openChatDrawer() {
        document.getElementById('chat-drawer-overlay').classList.remove('hidden');
        document.getElementById('drawer-chat-input').focus();
    }
    
    closeChatDrawer() {
        document.getElementById('chat-drawer-overlay').classList.add('hidden');
    }
    
    // Markdown Formatter (Simple Client-Side Parser)
    formatMarkdown(text) {
        if (!text) return '';
        
        let html = text;
        
        // Escape HTML tags to prevent XSS/broken layouts
        html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        // Fenced code blocks
        html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
            return `<pre><code>${code.trim()}</code></pre>`;
        });
        
        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Bold
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        
        // Italic
        html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        html = html.replace(/_([^_]+)_/g, '<em>$1</em>');
        
        // Unordered List Items (lines starting with - or *)
        let lines = html.split('\n');
        let inList = false;
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            if (line.startsWith('- ') || line.startsWith('* ')) {
                let content = line.substring(2);
                if (!inList) {
                    lines[i] = '<ul><li>' + content + '</li>';
                    inList = true;
                } else {
                    lines[i] = '<li>' + content + '</li>';
                }
            } else {
                if (inList) {
                    lines[i] = '</ul>' + (line ? `<p>${line}</p>` : '');
                    inList = false;
                } else {
                    if (line && !line.startsWith('<pre>') && !line.startsWith('</pre>') && !line.startsWith('<code>') && !line.startsWith('</code>')) {
                        lines[i] = `<p>${line}</p>`;
                    }
                }
            }
        }
        if (inList) {
            lines.push('</ul>');
        }
        
        html = lines.join('\n');
        
        // Clean double breaks and convert simple newlines that are not in tags
        html = html.replace(/\n\n/g, '<br><br>');
        
        return html;
    }
    
    // Call Gemini API
    async callGeminiAPI() {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.geminiApiKey}`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: this.chatHistory,
                    systemInstruction: {
                        parts: [{
                            text: "Sei un tutor accademico esperto in Cyber Security, Reti e Crittografia. Aiuta lo studente a comprendere appieno il concetto teorico o pratico dietro la domanda d'esame proposta. Sii incoraggiante, chiaro e schematico. Usa elenchi puntati per spiegare le opzioni e mantieni un tono amichevole ma professionale. Rispondi sempre in italiano."
                        }]
                    }
                })
            });
            
            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.error?.message || `HTTP ${response.status}`);
            }
            
            const data = await response.json();
            const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
            return replyText;
        } catch (error) {
            console.error("Gemini API Error:", error);
            throw error;
        }
    }
    
    // Send Chat Message
    async sendChatMessage() {
        const inputEl = document.getElementById('drawer-chat-input');
        const userText = inputEl.value.trim();
        if (!userText) return;
        
        // Append user message
        this.appendChatMessage('user', userText);
        inputEl.value = '';
        
        // Add to history
        this.chatHistory.push({
            role: 'user',
            parts: [{ text: userText }]
        });
        
        // Show loading
        const loadingEl = this.appendLoadingIndicator();
        
        try {
            const aiReply = await this.callGeminiAPI();
            loadingEl.remove();
            
            // Append AI message
            this.appendChatMessage('ai', aiReply);
            
            // Add to history
            this.chatHistory.push({
                role: 'model',
                parts: [{ text: aiReply }]
            });
        } catch (error) {
            loadingEl.remove();
            this.appendChatMessage('ai', `❌ Errore durante la comunicazione con Gemini: ${error.message}. Verifica la tua chiave API o la connessione internet.`);
        }
    }
    
    // Ask Explanation for a specific question
    async askGeminiExplanation(qId) {
        if (!this.geminiApiKey) {
            this.openGeminiKeyModal();
            alert("Per favore, inserisci una chiave API di Gemini per iniziare a ricevere spiegazioni dal tutor AI.");
            return;
        }
        
        const q = this.questions.find(item => item.id === qId);
        if (!q) return;
        
        this.currentExplainingQuestion = q;
        this.openChatDrawer();
        
        // Clear chat area
        const container = document.getElementById('drawer-messages-container');
        container.innerHTML = '';
        
        // Build the system prompt prompt to start history
        const optDescriptions = q.options.map((opt, idx) => {
            return `Opzione ${idx+1}: "${opt.option_text}" -> Risposta Corretta: ${opt.answer ? 'VERO' : 'FALSO'}`;
        }).join('\n');
        
        const initPrompt = `Spiegami questa domanda d'esame del modulo "${q.category}":
Codice Domanda: ${q.code}
Domanda principale: "${q.question}"

Opzioni da valutare:
${optDescriptions}

Fornisci una spiegazione strutturata ma concisa in italiano, analizzando perché ciascuna opzione è VERA o FALSA in base alla materia.`;
        
        // Reset chat history with first user message
        this.chatHistory = [
            {
                role: 'user',
                parts: [{ text: initPrompt }]
            }
        ];
        
        // Append initial system visual notice
        this.appendChatMessage('ai', `📖 **Analisi della domanda ${q.code}**:\n*${q.question}*\n\nSto formulando la spiegazione... 🧠✨`);
        
        // Show loading
        const loadingEl = this.appendLoadingIndicator();
        
        try {
            const aiReply = await this.callGeminiAPI();
            loadingEl.remove();
            
            // Append AI message
            this.appendChatMessage('ai', aiReply);
            
            // Add reply to history
            this.chatHistory.push({
                role: 'model',
                parts: [{ text: aiReply }]
            });
        } catch (error) {
            loadingEl.remove();
            this.appendChatMessage('ai', `❌ Errore durante la generazione della spiegazione: ${error.message}. Verifica che la chiave API sia valida.`);
        }
    }
    
    // Append Message to Chat UI
    appendChatMessage(sender, text) {
        const container = document.getElementById('drawer-messages-container');
        const msgEl = document.createElement('div');
        msgEl.className = `chat-msg ${sender}`;
        
        if (sender === 'ai') {
            msgEl.innerHTML = this.formatMarkdown(text);
        } else {
            msgEl.textContent = text;
        }
        
        container.appendChild(msgEl);
        container.scrollTop = container.scrollHeight;
    }
    
    // Append Loading indicator
    appendLoadingIndicator() {
        const container = document.getElementById('drawer-messages-container');
        const loadContainer = document.createElement('div');
        loadContainer.className = 'chat-msg ai';
        loadContainer.innerHTML = `
            <div class="ai-loading-container">
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
                <div class="loading-dot"></div>
            </div>
        `;
        container.appendChild(loadContainer);
        container.scrollTop = container.scrollHeight;
        return loadContainer;
    }
}

// Global App Instance
let app;
window.addEventListener('DOMContentLoaded', () => {
    app = new CyberQuestApp();
});
