// Cyber Security Exam Simulator - Database
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "code": "M1.1.2.11",
    "question": "Le reti telefoniche cellulari:",
    "options": [
      {
        "option_text": "Sono di fatto reti di comunicazione wireless",
        "answer": true
      },
      {
        "option_text": "Derivano il proprio nome dalla cella (o cubicolo) dove sono installati gli apparati elettronici",
        "answer": false
      },
      {
        "option_text": "Derivano il proprio nome dalle celle, porzioni di territorio con stazioni radio fisse, a cui si collegano gli apparati mobili",
        "answer": true
      },
      {
        "option_text": "Utilizzano canali di trasmissione con frequenze differenti tra celle adiacenti",
        "answer": true
      },
      {
        "option_text": "A causa del grosso frazionamento sul territorio hanno bisogno di un’elevata potenza di trasmissione",
        "answer": false
      },
      {
        "option_text": "Scambiano continuamente segnali con gli apparati mobili per migliorare la qualità di trasmissione",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 2,
    "code": "M1.1.2.6",
    "question": "Quali sono le ragioni che hanno decretato il successo della fibra ottica?",
    "options": [
      {
        "option_text": "Perché peremette di incrementare la banda di trasmissione dei dati",
        "answer": true
      },
      {
        "option_text": "Perché permette di aumentare e migliorare i servizi gestiti dal canale",
        "answer": true
      },
      {
        "option_text": "Perché è immune ai disturbi elettromagnetici",
        "answer": true
      },
      {
        "option_text": "Perché aumenta la velocità di trasmissione",
        "answer": true
      },
      {
        "option_text": "Perché è completamente esente dai fenomeni di disturbo",
        "answer": false
      },
      {
        "option_text": "Perché la cablatura costa poco",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 3,
    "code": "M1.1.2.7",
    "question": "Perché si utilizza la fibra ottica anche su breve distanza e con poca banda?",
    "options": [
      {
        "option_text": "Perché è immune alle interferenze elettromagnetiche",
        "answer": true
      },
      {
        "option_text": "Per l'alta resistenza elettrica che la rende sicura se utilizzata vicino a strumenti ad alto voltaggio",
        "answer": true
      },
      {
        "option_text": "Per la maggiore sicurezza: non produce scintille (che possono provocare incendi o esplosioni in zona critiche)",
        "answer": true
      },
      {
        "option_text": "Per la maggiore leggerezza, utile ad esempio negli aeroplani",
        "answer": true
      },
      {
        "option_text": "Per i minori costi per i materiali anche quando si desiderano quantità non molto elevate",
        "answer": false
      },
      {
        "option_text": "Per il costo minore di trasmettitori e ricevitori",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 4,
    "code": "M1.1.3.7",
    "question": "Il Longest Prefix Matching",
    "options": [
      {
        "option_text": "È un criterio di scelta utilizzato dal Firewall se ci sono più regole che corrispondono all'indirizzo fornito",
        "answer": true
      },
      {
        "option_text": "È un criterio con cui il Firewall sceglie la regola che ha più bit in comune con l'indirizzo fornito",
        "answer": true
      },
      {
        "option_text": "È un criterio con cui uno Switch sceglie la regola che ha più bit in comune con l'indirizzo fornito",
        "answer": false
      },
      {
        "option_text": "È un algoritmo, di livello 4 dello stack ISO/OSI, utilizzato dai router per selezionare una voce della tabella di routing",
        "answer": false
      },
      {
        "option_text": "È un algoritmo utilizzato dai router nelle reti IP per selezionare una voce della tabella di routing",
        "answer": true
      },
      {
        "option_text": "È un algoritmo, di livello 3 dello stack ISO/OSI",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 5,
    "code": "M1.1.4.6",
    "question": "Il World Wide Web (WWW)",
    "options": [
      {
        "option_text": "Coincide perfettamente con Internet",
        "answer": false
      },
      {
        "option_text": "Utilizza il protocollo HTTP (Hypertext Transfer Protocol) per trasferire dati tra server e client",
        "answer": true
      },
      {
        "option_text": "E' di fatto una rete decentralizzata",
        "answer": true
      },
      {
        "option_text": "Utilizza il linguaggio HTML (Hypertext Markup Language) per comporre pagine web",
        "answer": true
      },
      {
        "option_text": "Permette di ospitare i siti web solo su server dedicati",
        "answer": false
      },
      {
        "option_text": "E' stato inventato da Tim Berners-Lee",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 6,
    "code": "M1.1.5.3",
    "question": "“Morris Worm”",
    "options": [
      {
        "option_text": "È stato uno dei primi worm distribuiti via Internet",
        "answer": true
      },
      {
        "option_text": "Ha funzionato, di fatto, come un attacco denial-of-service",
        "answer": true
      },
      {
        "option_text": "È stato creato intenzionalmente per causare danni alle macchine in rete internet",
        "answer": false
      },
      {
        "option_text": "È stato ideato da uno studente della Cornell University per capire quando fosse grande e insicura la rete Internet",
        "answer": true
      },
      {
        "option_text": "Ha sfruttato alcune vulnerabilità di Windows",
        "answer": false
      },
      {
        "option_text": "È stato così efficace a causa di un’anomalia di funzionamento del codice del worm stesso",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 7,
    "code": "M1.2.4.12",
    "question": "Una vittima di Pretexting",
    "options": [
      {
        "option_text": "E' stata manipolata, mediante una finta e-mail dal proprio capo, ed ha fornito i numeri e le credenziali della carta di credito aziendale",
        "answer": true
      },
      {
        "option_text": "Ha inviato le proprie credenziali di accesso dopo aver ricevuto una finta e-mail (dal bancario conosciuto) con la richiesta di conferma per evitare che l'account venisse disattivato",
        "answer": true
      },
      {
        "option_text": "E' stata costretta a scaricare un software infetto dopo che è avvenuta una segnalazione che il computer era stato compromesso",
        "answer": false
      },
      {
        "option_text": "Ha installato uno specifico software, di cui effettivamente aveva necessità, gratuitamente anche se tutti gli altri siti lo fornivano a pagamento",
        "answer": false
      },
      {
        "option_text": "Ha installato una chiave USB corredata di logo aziendale, trovata casualmente, riportante la scritta “prossimi aumenti”",
        "answer": false
      },
      {
        "option_text": "Ha ricevuto una e-mail dal sito della propria carta di credito che riproduce perfettamente la pagina di log-in del proprio account",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 8,
    "code": "M1.3.1.3",
    "question": "Il livello 2 del Modello ISO/OSI",
    "options": [
      {
        "option_text": "Utilizza indirizzamento MAC Address",
        "answer": true
      },
      {
        "option_text": "Realizza il Data Framing (inserimento di Header e Tail al messaggio) e relativa interpretazione dei bit contenuti negli Header e Tail",
        "answer": true
      },
      {
        "option_text": "Utilizza un sottolivello superiore (LLC - Logical Link Control) per la rilevazione (o correzione) degli errori",
        "answer": true
      },
      {
        "option_text": "Utilizza indirizzi di tipo IP per l’indirizzamento in rete",
        "answer": false
      },
      {
        "option_text": "Può utilizzare protocolli wi-fi",
        "answer": true
      },
      {
        "option_text": "Realizza la Frammentazione e il Riasseblaggio",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 9,
    "code": "M1.3.2_2.11",
    "question": "La subnet 128.22.15.134/17:",
    "options": [
      {
        "option_text": "Ha 32.766 host disponibili",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di rete 128.22.0.0",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di rete 128.22.15.0",
        "answer": false
      },
      {
        "option_text": "Ha come indirizzo di Broadcast 128.22.127.255",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di Broadcast 128.22.126.255",
        "answer": false
      },
      {
        "option_text": "Ha come indirizzo del primo Host disponibile 128.22.0.1",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 10,
    "code": "M1.3.2_2.1",
    "question": "I modelli di comunicazione su rete Ethernet possono essere:",
    "options": [
      {
        "option_text": "Unicast (uno ad uno), tipicamente utilizzata da TCP/IP e UDP (quindi a livello ISO/OSI 4)",
        "answer": true
      },
      {
        "option_text": "Unicast (uno ad uno), tipicamente utilizzata da TCP/IP e UDP (quindi a livello ISO/OSI 3)",
        "answer": false
      },
      {
        "option_text": "Broadcast (uno a Tutti), realizzata a livello 3 mediante il protocollo IP con l’indirizzamento MAC",
        "answer": false
      },
      {
        "option_text": "Broadcast (uno a Tutti), realizzata a livello 2 dal Data-Link con l’indirizzamento MAC",
        "answer": true
      },
      {
        "option_text": "Multicast (uno ad alcuni), utilizzata tipicamente mediante una specifica configurazione di TCP/IP a livello 4",
        "answer": false
      },
      {
        "option_text": "Multicast (uno ad alcuni), utilizzata tipicamente mediante una specifica configurazione di UDP a livello 4",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 11,
    "code": "M1.3.2_2.12",
    "question": "La subnet 145.13.24.64/15:",
    "options": [
      {
        "option_text": "Ha 131.072 di indirizzamenti disponibili",
        "answer": true
      },
      {
        "option_text": "Ha come  indirizzo di broadcast 145.13.255.255",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di rete 145.12.0.0",
        "answer": true
      },
      {
        "option_text": "Ha come netmask 255.253.0.0",
        "answer": false
      },
      {
        "option_text": "Il primo indirizzo Host disponibile è 145.12.0.1",
        "answer": true
      },
      {
        "option_text": "L'ultimo indirizzo disponibile è 145.13.255.128",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 12,
    "code": "M1.3.3.7.1",
    "question": "Il Gateway",
    "options": [
      {
        "option_text": "1. È un dispositivo hardware che funge da raccordo tra due reti, solitamente una rete remota e quella che la ospita 2. È un convertitore di protocolli di rete, capace di unire due reti in modo che i dispositivi presenti su un dato network possano",
        "answer": true
      },
      {
        "option_text": "comunicare con quelli presenti in un altro",
        "answer": true
      },
      {
        "option_text": "3. Può essere realizzato da: Un router, un server, un firewall, ecc.",
        "answer": true
      },
      {
        "option_text": "4. Di solito non converte mai protocolli di rete",
        "answer": false
      },
      {
        "option_text": "5. Può realizzare la funzionalità NAT (Network Address Translation) 6. Differentemente dal router ha il compito di gestire un traffico simile e connettere dispositivi che condividono un’interfaccia",
        "answer": true
      },
      {
        "option_text": "comune 15- (M1.3.4.6.1*) Quanti sono i rami di una topologia di rete a Maglia Completa?",
        "answer": false
      },
      {
        "option_text": "1. (N-1)/2",
        "answer": false
      },
      {
        "option_text": "2. N*(N-1)/2",
        "answer": true
      },
      {
        "option_text": "3. (N-1)2",
        "answer": false
      },
      {
        "option_text": "4. N-1",
        "answer": false
      },
      {
        "option_text": "5. (N-1)!",
        "answer": false
      },
      {
        "option_text": "6. N/2*(N-1)",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 13,
    "code": "M1.3.4.10",
    "question": "Che differenze esistono tra architetture logiche di rete peer to peer e client server?",
    "options": [
      {
        "option_text": "Nelle reti P2P la sicurezza è più difficile da garantire perché ogni nodo può essere un potenziale punto di attacco",
        "answer": true
      },
      {
        "option_text": "Nelle reti Client-server le prestazioni della rete dipendono principalmente dalla capacità e dalla configurazione dei soli server e non di tutti i nodi.",
        "answer": true
      },
      {
        "option_text": "Nelle reti P2P tutti i nodi della rete hanno lo stesso ruolo e possono agire sia come client che come server.",
        "answer": true
      },
      {
        "option_text": "Nelle reti P2P i nodi della rete non hanno lo stesso ruolo, possono agire unicamente come client o come server.",
        "answer": false
      },
      {
        "option_text": "Nelle reti P2P le risorse sono distribuite tra i nodi della rete e ogni nodo può condividere le proprie risorse con gli altri nodi.",
        "answer": true
      },
      {
        "option_text": "Nelle reti P2P le risorse sono centralizzate sui server e i client accedono alle risorse richieste attraverso i server.",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 14,
    "code": "M1.3.4.11",
    "question": "La Tipologia di Rete",
    "options": [
      {
        "option_text": "MAN (Metropolitan Area Network) è una rete di telecomunicazione a banda larga, che collega più LAN geograficamente vicine",
        "answer": true
      },
      {
        "option_text": "WAN (Wide Area Network) si può estendere ad un territorio nazionale, sovranazionale sino ad coprire interi continenti.",
        "answer": true
      },
      {
        "option_text": "PAN (Private Area Network) è una rete LAN di tipo privato",
        "answer": false
      },
      {
        "option_text": "LAN (Local Area Network) si estende raramente più in là di un complesso edilizio",
        "answer": true
      },
      {
        "option_text": "LAN (Local Area Network) solitamente collega assieme più computer in aziende pubbliche",
        "answer": false
      },
      {
        "option_text": "WAN (Wide Area Network) può essere assimilata alla rete Internet",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 15,
    "code": "M2.1.2.11",
    "question": "La Società S.a.S.",
    "options": [
      {
        "option_text": "È una società di Persone",
        "answer": true
      },
      {
        "option_text": "È una società di Capitali",
        "answer": false
      },
      {
        "option_text": "È una società a responsabilità illimitata dell’imprenditore accomandatario",
        "answer": true
      },
      {
        "option_text": "È una società a responsabilità limitata solo per i soci accomandanti",
        "answer": true
      },
      {
        "option_text": "E' una società a responsabilità dei soci limitata al capitale effettivamente sottoscritto",
        "answer": false
      },
      {
        "option_text": "E' una società a responsabilità dei soci illimitata oltre al capitale sottoscritto",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 16,
    "code": "M2.1.2.3",
    "question": "Il Soggetto Economico",
    "options": [
      {
        "option_text": "È chi, in un’azienda, possiede il potere decisionale o di conduzione dell’azienda",
        "answer": true
      },
      {
        "option_text": "È chi ha privilegi economici nell’azienda",
        "answer": false
      },
      {
        "option_text": "È chi ha il potere di indirizzo dell'attività aziendale",
        "answer": true
      },
      {
        "option_text": "È presente solo nelle aziende di produzione",
        "answer": false
      },
      {
        "option_text": "È chi riceve gli utili dell’attività aziendale anche se non partecipa alle decisioni o alla conduzione dell’azienda",
        "answer": false
      },
      {
        "option_text": "Può essere associato sia ad una persona fisica che a un gruppo di persone all’interno dell’azienda",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 17,
    "code": "M2.1.3.2",
    "question": "Le aziende industriali",
    "options": [
      {
        "option_text": "Producono beni tangibili attraverso processi di trasformazione di materie prime e risorse.",
        "answer": true
      },
      {
        "option_text": "Richiedono investimenti significativi in impianti, attrezzature e tecnologie per garantire la produzione di beni di alta qualità",
        "answer": true
      },
      {
        "option_text": "Devono gestire correttamente la catena di approvvigionamento, poiché consente di procurare materie prime e componenti necessari per la produzione",
        "answer": true
      },
      {
        "option_text": "Sono sempre piccole e medie imprese",
        "answer": false
      },
      {
        "option_text": "Sono società pubbliche",
        "answer": false
      },
      {
        "option_text": "Non sono soggette a normative e regolamentazioni",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 18,
    "code": "M2.2.1.10",
    "question": "Una linea di assemblaggio produce 1.000 pezzi ora per 8h al giorno, 5 giorni a settimana, ogni pezzo vale 100€.",
    "options": [
      {
        "option_text": "L'azienda da quella linea ricava un fatturato teorico annuo pari a 192.000.000 €",
        "answer": true
      },
      {
        "option_text": "Considerando un efficienza di linea pari all'70% il fatturato annuale atteso è di 134.400.000 €",
        "answer": true
      },
      {
        "option_text": "Grazie un miglioramento nel sistema di controllo ho migliorato il rendimento del 5% pari a 8.600.000 €",
        "answer": false
      },
      {
        "option_text": "Un incidente informatico ha bloccato la linea per una giornata produttiva e mezza causando una mancata produzione pari a 940.000 €",
        "answer": false
      },
      {
        "option_text": "Un incidente informatico ha bloccato la linea per una giornata produttiva e mezza causando una mancata produzione pari a 840.000 €",
        "answer": true
      },
      {
        "option_text": "Un incidente informatico ha bloccato la linea per una giornata produttiva e mezza causando una mancata produzione pari a 1.200.000 €",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 19,
    "code": "M2.3.2.1",
    "question": "Un Processo Aziendale",
    "options": [
      {
        "option_text": "Può essere definito come un insieme di attività, non necessariamente collegate, che possono portare a diversi obiettivi a carattere strategico",
        "answer": false
      },
      {
        "option_text": "Può essere definito come un insieme di attività collegate tese al raggiungimento di un obiettivo specifico",
        "answer": true
      },
      {
        "option_text": "Può essere modellizzato in modo che sia possibile verificare eventuali anomalie del processo stesso ed apportarne miglioramenti",
        "answer": true
      },
      {
        "option_text": "Una volta strutturato e testato non deve essere modificato nel tempo",
        "answer": false
      },
      {
        "option_text": "Ha input che sono costituiti da fattori che contribuiscono (direttamente e indirettamente) al valore aggiunto di un servizio o di un prodotto",
        "answer": true
      },
      {
        "option_text": "Si può modellizzare attraverso l’uso di specifici diagrammi di flusso",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 20,
    "code": "M2.3.2.7",
    "question": "L'organigramma in un'organizzazione",
    "options": [
      {
        "option_text": "E' un documento statico che non richiede mai aggiornamenti",
        "answer": false
      },
      {
        "option_text": "E' una rappresentazione grafica della struttura organizzativa di un'azienda",
        "answer": true
      },
      {
        "option_text": "E' uno strumento utile per la gestione delle risorse umane e per la pianificazione strategica",
        "answer": true
      },
      {
        "option_text": "Può aiutare a chiarire ruoli e responsabilità all'interno di un'organizzazione",
        "answer": true
      },
      {
        "option_text": "Può essere utilizzato per identificare aree di sovrapposizione o di conflitto all'interno di un'organizzazione",
        "answer": true
      },
      {
        "option_text": "E' un documento riservato che non può essere condiviso con nessuno all'interno o all'esterno dell'azienda.",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 21,
    "code": "M3.1.1.3",
    "question": "Quali delle segueti fasi possono costituire l’Incident Response Plan (Piano di risposta agli incidenti):",
    "options": [
      {
        "option_text": "Una fase di rilevamento dell’incidente (Detect)",
        "answer": true
      },
      {
        "option_text": "La Riproduzione dell’incidente rilevato (Response)",
        "answer": false
      },
      {
        "option_text": "La Mitigazione degli effetti dell’incidente (Mitigation)",
        "answer": true
      },
      {
        "option_text": "La Registrazione dell’evento (Reporting)",
        "answer": true
      },
      {
        "option_text": "Il ripristino del sistema colpito (Recovery)",
        "answer": true
      },
      {
        "option_text": "L’investigazione relativamente al problema che ha portato all’incidente (Remediation)",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 22,
    "code": "M3.1.3.6",
    "question": "I Sistemi di Gestione Standardizzati",
    "options": [
      {
        "option_text": "Sono modelli organizzativi aziendali adottati su base volontaria",
        "answer": true
      },
      {
        "option_text": "Sono modelli organizzativi aziendali obbligatori in certi ambiti",
        "answer": false
      },
      {
        "option_text": "Sono applicati maggiormente nelle aree critiche e sensibili dell’organizzazione",
        "answer": true
      },
      {
        "option_text": "Sono realizzati mediante l'applicazione organica e sistematica di regole e procedure per raggiungere uno specifico obiettivo",
        "answer": true
      },
      {
        "option_text": "Hanno sempre regole e procedure definite secondo uno standard creato dall’azienda stessa",
        "answer": false
      },
      {
        "option_text": "Riguardano tutti i livelli dell’organizzazione",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 23,
    "code": "M3.2.1.19",
    "question": "I requisiti di un ISMS secondo ISO/IEC 27001",
    "options": [
      {
        "option_text": "Sono necessari per stabilire, attuare, mantenere e migliorare, in modo continuo, un sistema di gestione per la sicurezza delle informazioni nel contesto di un’organizzazione",
        "answer": true
      },
      {
        "option_text": "Includono i criteri per la valutazione e il trattamento dei rischi relativi alla sicurezza delle informazioni adattati alla necessità dell’organizzazione",
        "answer": true
      },
      {
        "option_text": "Sono indipendenti dai controlli (ovvero le contromisure) presenti nell'Allegato A dello stesso documento",
        "answer": false
      },
      {
        "option_text": "Sono necessari per certificare la conformità di un sistema informativo a questo standard",
        "answer": true
      },
      {
        "option_text": "Utilizzano il risk management come base per decidere azioni e quali contromisure (controlli) mettere in atto",
        "answer": true
      },
      {
        "option_text": "Possono essere utilizzati per decidere le strategie per gestire la sicurezza delle informazioni in base a criteri deterministici",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 24,
    "code": "M3.2.1_2.11",
    "question": "Il controllo ISO/IEC 27001: 2022 \"Information security during disruption\" ovvero che l'organizzazione deve mantenere la sicurezza delle informazioni a un livello appropriato durante un'interruzione",
    "options": [
      {
        "option_text": "E' un controllo solo Preventivo",
        "answer": false
      },
      {
        "option_text": "E' un controllo di tipo Investigativo",
        "answer": false
      },
      {
        "option_text": "E' un controllo sia Preventivo che Correttivo",
        "answer": true
      },
      {
        "option_text": "Migliora Riservatezza, Integrità e Disponibilità",
        "answer": true
      },
      {
        "option_text": "Migliora solo la Disponibilità",
        "answer": false
      },
      {
        "option_text": "Migliora l'Integrità e la Riservatezza",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 25,
    "code": "M3.2.1_2.19",
    "question": "Il controllo ISO/IEC 27001: 2022 \"Remote working\" per l'implementazione di misure di sicurezza quando si lavora da remoto",
    "options": [
      {
        "option_text": "Indica che, per il lavoro da remoto, devono essere implementate misure di sicurezza per proteggere le informazioni a cui si accede, che vengono elaborate o che vengono archiviate dal di fuori dei locali dell’organizzazione.",
        "answer": true
      },
      {
        "option_text": "Indica che quando il personale lavora da remoto, devono essere implementate misure di sicurezza per proteggere le informazioni a cui si accede solamente se si utilizzano dispositivi appartenenti all'oganizzazione stessa.",
        "answer": false
      },
      {
        "option_text": "È un requisito solo Preventivo",
        "answer": true
      },
      {
        "option_text": "È un  requisito Preventivo e Investigativo",
        "answer": false
      },
      {
        "option_text": "È un controllo solamente Correttivo",
        "answer": false
      },
      {
        "option_text": "È un controllo che appartiene solamente all'ambito dei requisiti di Integrità e Disponibilità",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 26,
    "code": "M3.2.6.12",
    "question": "Lo SCADA",
    "options": [
      {
        "option_text": "È l’acronimo di Supervisory Control and Data Acquisition",
        "answer": true
      },
      {
        "option_text": "È l’acronimo di Supervisory Classification and Data Analysis",
        "answer": false
      },
      {
        "option_text": "È un sistema di Supervisione e di Acquisizione dei Dati",
        "answer": true
      },
      {
        "option_text": "È un sistema (stand-alone o basato su architetture di computer) che permette la conduzione di un impianto, una linea o una macchina industriale da parte degli operatori",
        "answer": true
      },
      {
        "option_text": "È un sistema unicamente stand-alone che permette la conduzione di un impianto, una linea o una macchina industriale da parte degli operatori",
        "answer": false
      },
      {
        "option_text": "Richiede strategie di protezione particolari perché utilizza protocolli di comunicazione realtime di solito non gestiti dai principali firewall ed endpoint protection",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 27,
    "code": "M3.2.6.16",
    "question": "Il DCS (Distributed Control System)",
    "options": [
      {
        "option_text": "E' un sistema integrato di HMI (Human Machine Interface) e PLC (sistema di controllo programmabile)",
        "answer": true
      },
      {
        "option_text": "E' una tecnologia utilizzata principalmente in impianti di processo (ad esempio Chimico e Oil&Gas)",
        "answer": true
      },
      {
        "option_text": "E' una tecnologia utilizzata principalmente in impianti manufatturieri discreti (ad esempio Meccanico ed Elettronico)",
        "answer": false
      },
      {
        "option_text": "Ha tra le sue caratteristiche la semplicità di configurazione complessiva dei sistemi integrati HMI e PLC",
        "answer": true
      },
      {
        "option_text": "E' una tecnologia di gran lunga più utilizzata della tecnologia SCADA-PLC",
        "answer": false
      },
      {
        "option_text": "Esistono un numero molto ristretto di costruttori ed i prezzi dei sistemi sono molto elevati",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 28,
    "code": "M3.3.1.5",
    "question": "Perché è importante il Regolamento GDPR per l'Information Technology?",
    "options": [
      {
        "option_text": "Perché i sistemi informativi conservano, gestiscono e permettono di trasferire i dati riservati e sensibili delle persone.",
        "answer": true
      },
      {
        "option_text": "Perché i dati sono archiviati e mantenuti per periodi di tempo indeterminati, potenzialmente senza possibilità di controllo dalle persone stesse",
        "answer": true
      },
      {
        "option_text": "Perché una gestione dei dati senza regole può mettere a repentaglio le regole principali del vivere civile ed è quindi necessario regolamentare la gestione dei dati nel suo insieme",
        "answer": true
      },
      {
        "option_text": "Perché una gestione dei dati senza regole può mettere a repentaglio le regole principali del vivere civile ed è quindi necessario regolamentare la gestione dei dati: almeno l’autorizzazione al trattamento e al trasferimento",
        "answer": false
      },
      {
        "option_text": "Perché una gestione dei dati senza regole può mettere a repentaglio le regole principali del vivere civile ed è quindi necessario regolamentare la gestione dei dati: dall’autorizzazione al trattamento, il trasferimento sino al tempo massimo di mantenimento",
        "answer": true
      },
      {
        "option_text": "Perché bisogna salvaguardare gli aspetti formali del trattamento dei dati",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 29,
    "code": "M3.3.5.9",
    "question": "Quale delle seguenti normative europee ha, tra gli obiettivi primari, la business continuity delle organizzazioni",
    "options": [
      {
        "option_text": "Il Regolamento (EU) 2016/1148 GDPR",
        "answer": false
      },
      {
        "option_text": "Il Regolamento (EU) 2019/881 - Cybersecurity Act",
        "answer": false
      },
      {
        "option_text": "La direttiva (EU) 2016/1148 - Network and Information Security (NIS)",
        "answer": true
      },
      {
        "option_text": "La Direttiva (EU) 2022/2555 - Network and Information Security 2 (NIS 2)",
        "answer": true
      },
      {
        "option_text": "NIST CyberSecurity Framework",
        "answer": false
      },
      {
        "option_text": "ENISA",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 30,
    "code": "M3.4.5.6",
    "question": "Quali sono le funzioni di un SIEM (Security Information and Event Management)?",
    "options": [
      {
        "option_text": "Ridurre l'impatto del rumore sulla grande quantità di dati consentendo maggiore visibilità degli eventi",
        "answer": true
      },
      {
        "option_text": "Fornire un'unica interfaccia per la notifica delle informazioni e degli eventi di sicurezza per i vari dispositivi e sistemi presenti nella rete",
        "answer": true
      },
      {
        "option_text": "Fornire un'interfaccia per informazioni ed eventi di cybersecurity ad un SOC (Security Operation Center)",
        "answer": true
      },
      {
        "option_text": "Bloccare, senza l'uso di altri dispositivi, la comunicazione tra nodi in caso di situazioni anomale",
        "answer": false
      },
      {
        "option_text": "Allertare i responsabili della sicurezza quando vengono individuate situazioni anomale",
        "answer": true
      },
      {
        "option_text": "Definire il percorso più sicuro per la comunicazione tra due nodi in rete Esercizio 1 Attraverso il canale di trasmissione criptato con cifratura a traslazione 4 (A=E) che utilizza codifica binaria a 5 bit (00000=A), con alfabeto inglese, viene trasmessa la parola \"HELLO\". Per una distorsione il canale di comunicazione introduce un errore di trasmissione ad ogni bit meno significativo (LSB) di ciascuna lettera trasmessa. Avendo X(t) = H E L L O Definire: X'(t) =  L I P P S X2(t) =  01011 01000 01111 01111 10010 Y2(t) = 01010 01001 01110 01110 10011 Y'(t) = K J O O T Y(t) = O N S S X Nel tentativo di migliorare la rilevazione dell'errore si inerisce prima della trasmissione un bit di parità pari, indicare quale dei messaggi è quello corretto sia per la cifratura che per il bit di parità: X2e(t) = 01011 01000 01111 01111 10010 0  Esercizio 2 Attraverso il Router in figura è necessario partizionare la rete 160.201.126.0 in 4 sottoreti così costituite: •        Sottorete A: 125 Host •        Sottorete B: 61 Host •        Sottorete C: 12 Host •        Sottorete D: 12 Host Compilare la tabella seguente con tutti i dati richiesti:",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 31,
    "code": "M1.1.2.5",
    "question": "Quali dei seguenti elementi costituiscono un cavo in fibra ottica?",
    "options": [
      {
        "option_text": "Core",
        "answer": true
      },
      {
        "option_text": "Cladding",
        "answer": true
      },
      {
        "option_text": "Buffer",
        "answer": true
      },
      {
        "option_text": "Wrapping",
        "answer": false
      },
      {
        "option_text": "Jacket",
        "answer": true
      },
      {
        "option_text": "Sheathing",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 32,
    "code": "M1.1.7.2",
    "question": "Quali dei seguenti sono crimini informatici o cyber crimini secondo l’ordinamento italiano",
    "options": [
      {
        "option_text": "Frodi tramite e-mail e Internet",
        "answer": true
      },
      {
        "option_text": "Tutti i casi di Hacktivismo",
        "answer": false
      },
      {
        "option_text": "Furto d'identità (vengono sottratte e poi utilizzate le informazioni personali)",
        "answer": true
      },
      {
        "option_text": "Furto dei dati finanziari o dei dettagli delle carte di credito",
        "answer": true
      },
      {
        "option_text": "Furto di valuta da sportelli ATM (Bancomat)",
        "answer": false
      },
      {
        "option_text": "Cyber-estorsione (richiesta di denaro per disinnescare un attacco preannunciato)",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 33,
    "code": "M1.2.4.3.2",
    "question": "Il Furto di Identità Digitale È punito dal Codice Penale Italiano come “Sostituzione della propria all'altrui persona” e “Frode",
    "options": [
      {
        "option_text": "Informatica”",
        "answer": true
      },
      {
        "option_text": "Può essere associato al solo reato di “Truffa”",
        "answer": false
      },
      {
        "option_text": "Può avvenire mediante operazioni di Phishing È relativo all’uso illecito dell’insieme dei dati e delle informazioni che definiscono un individuo e costituiscono la rappresentazione virtuale dell'identità reale utilizzabile durante interazioni",
        "answer": true
      },
      {
        "option_text": "elettroniche È relativo ai soli dati biometrici che definiscono un individuo e costituiscono una delle",
        "answer": true
      },
      {
        "option_text": "rappresentazioni virtuali dell'identità reale utilizzabile durante interazioni elettroniche",
        "answer": false
      },
      {
        "option_text": "È un reato amministrativo secondo l’ordinamento italiano",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 34,
    "code": "M1.3.1.7",
    "question": "Il livello 6 del Modello ISO/OSI",
    "options": [
      {
        "option_text": "Trasforma i dati forniti dalle applicazioni in un formato standardizzato",
        "answer": true
      },
      {
        "option_text": "Realizza Routing di livello presentazione",
        "answer": false
      },
      {
        "option_text": "Offre servizi di comunicazione comuni, come la crittografia, la compressione, ecc.",
        "answer": true
      },
      {
        "option_text": "Utilizza tecniche di multiplazione (multiplexing) Si occupa di rendere compatibili le rappresentazioni dei dati negli scambi tra computer che",
        "answer": false
      },
      {
        "option_text": "utilizzano codifiche diverse",
        "answer": true
      },
      {
        "option_text": "Rende la comunicazione delle applicazioni indipendente dai sistemi operativi",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 35,
    "code": "M1.3.1.16",
    "question": "La comunicazione logica tra due Host nello stack ISO/OSI",
    "options": [
      {
        "option_text": "Può avvenire tra livelli ISO/OSI differenti di mittente e destinatario",
        "answer": false
      },
      {
        "option_text": "Avviene tra livelli omologhi dello stack ad eccezione del livello 1.",
        "answer": true
      },
      {
        "option_text": "Utilizza sempre fisicamente il livello 1",
        "answer": true
      },
      {
        "option_text": "Percorre i livelli dello stack in discesa e salita rispettivamente dal mittente al destinatario",
        "answer": true
      },
      {
        "option_text": "Si realizza mediante l'interazione di ciascun livello solamente con i livelli superiori dello stack Semplifica la comunicazione tra due Host VEROAppello Aspetti Organizzativi e Gestionali della CS - 5 Settembre 2025",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 36,
    "code": "M1.3.1.15",
    "question": "Il Protocollo TCP/IP",
    "options": [
      {
        "option_text": "E' un protocollo orientato alla connessione",
        "answer": true
      },
      {
        "option_text": "Mediante TCP assicura che i dati vengano trasmessi in modo affidabile, ordinato e senza errori",
        "answer": true
      },
      {
        "option_text": "Mediante IP si occupa dell'instradamento dei pacchetti dati attraverso la rete",
        "answer": true
      },
      {
        "option_text": "Non effettua la verifica che tutti i pacchetti siano arrivati correttamente.",
        "answer": false
      },
      {
        "option_text": "E' l'acronimo di Transmission Control Protocol/Internet Protocol",
        "answer": true
      },
      {
        "option_text": "E' l'acronimo di Transmission Control Packets/Internet Protocol",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 37,
    "code": "M1.3.2.9",
    "question": "Nella comunicazione con il protocollo Ethernet in caso di avvenuta collisione:",
    "options": [
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette una sequenza di jamming La stazione trasmittente sospende la trasmissione e trasmette una sequenza composta dalla parte",
        "answer": true
      },
      {
        "option_text": "di pacchetto già trasmessa e un codice identificativo in coda al pacchetto La stazione trasmittente sospende la trasmissione e trasmette e un codice identificativo in testa e la",
        "answer": true
      },
      {
        "option_text": "parte di pacchetto già trasmessa in coda al pacchetto La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di",
        "answer": false
      },
      {
        "option_text": "trasmissione dopo un tempo pseudocasuale La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di",
        "answer": true
      },
      {
        "option_text": "trasmissione con una frequenza fissa La stazione trasmittente interrompe le trasmissioni e attende sino a che tutte le trasmissioni sul bus",
        "answer": false
      },
      {
        "option_text": "siano ultimate",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 38,
    "code": "M1.3.2_2.14",
    "question": "La subnet 132.234.110.173/12:",
    "options": [
      {
        "option_text": "Ha 4.096 indirizzamenti disponibili",
        "answer": false
      },
      {
        "option_text": "Ha come  indirizzo di broadcast 132.239.255.255",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di rete 132.224.0.0",
        "answer": true
      },
      {
        "option_text": "Ha come netmask 255.240.0.0",
        "answer": true
      },
      {
        "option_text": "Il primo indirizzo Host disponibile è 132.224.0.1",
        "answer": true
      },
      {
        "option_text": "L'ultimo indirizzo disponibile è 132.234.255.254",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 39,
    "code": "M1.3.4.6.1",
    "question": "Quanti sono i rami di una topologia di rete a Maglia Completa?",
    "options": [
      {
        "option_text": "(N-1)/2",
        "answer": false
      },
      {
        "option_text": "N*(N-1)/2",
        "answer": true
      },
      {
        "option_text": "(N-1)2",
        "answer": false
      },
      {
        "option_text": "N-1",
        "answer": false
      },
      {
        "option_text": "N/2*(N-1)",
        "answer": true
      },
      {
        "option_text": "(N-1)!",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 40,
    "code": "M2.1.2.4",
    "question": "Le aziende di produzione",
    "options": [
      {
        "option_text": "Hanno obiettivi primari legati alla stessa sopravvivenza dell’impresa",
        "answer": true
      },
      {
        "option_text": "Sono solo le aziende che assemblano direttamente i beni o forniscono direttamente i servizi Sono sia le aziende che producono direttamente beni o servizi sia quelle che creano valore aggiunto",
        "answer": false
      },
      {
        "option_text": "a beni e servizi già esistenti",
        "answer": true
      },
      {
        "option_text": "Hanno tra gli obiettivi la massimizzazione del profitto",
        "answer": true
      },
      {
        "option_text": "Hanno tra gli obiettivi la soddisfazione di un limitato gruppo di persone",
        "answer": false
      },
      {
        "option_text": "Non possono essere aziende individuali",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 41,
    "code": "M3.1.1.2",
    "question": "L’Incident Response Plan (Piano di risposta agli incidenti)",
    "options": [
      {
        "option_text": "Permette di rispondere ad un attacco esterno mediante misure controffensive verso l’attaccante",
        "answer": false
      },
      {
        "option_text": "Permette di rispondere all’esigenza di individuare incidenti o attacchi e mitigarne il danno",
        "answer": true
      },
      {
        "option_text": "Esegue anche la post analysis che consente di delineare la reale portata dell’incidente È un insieme di procedure documentate che descrivono in dettaglio i passaggi da intraprendere in",
        "answer": true
      },
      {
        "option_text": "ciascuna fase della risposta agli incidenti",
        "answer": true
      },
      {
        "option_text": "Se ben strutturato e documentato può non essere aggiornato frequentemente Dovrebbe includere linee guida per ruoli e responsabilità, piani di comunicazione e processi di",
        "answer": false
      },
      {
        "option_text": "risposta standardizzati",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 42,
    "code": "M3.1.1.4",
    "question": "Quali dei seguenti sono Processi di Cyber Security",
    "options": [
      {
        "option_text": "Il monitoraggio degli Incidenti Informatici",
        "answer": true
      },
      {
        "option_text": "La gestione degli incidenti informatici",
        "answer": true
      },
      {
        "option_text": "La gestione delle patch di sistema",
        "answer": false
      },
      {
        "option_text": "la gestione delle vulnerabilità",
        "answer": true
      },
      {
        "option_text": "La gestione delle obsolescenze",
        "answer": true
      },
      {
        "option_text": "La disponibilità delle risorse",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 43,
    "code": "M3.2.1_1.4",
    "question": "L'area tematica dei requisiti ISO/IEC 27001 \"Supporto\" definisce che: L'organizzazione abbia le persone, le competenze, le infrastrutture e l'ambiente di lavoro necessari",
    "options": [
      {
        "option_text": "per supportare il SGSI Siano identificati i requisiti di competenza per il personale coinvolto nella gestione della sicurezza",
        "answer": true
      },
      {
        "option_text": "delle informazioni e assicurare che siano soddisfatti Il personale sia sesnibilizzato sulla politica di sicurezza delle informazioni, i contributi individuali alla",
        "answer": true
      },
      {
        "option_text": "sicurezza delle informazioni, e le implicazioni della mancata conformità ai requisiti del SGSI Siano stabiliti processi di comunicazione efficaci per garantire che le informazioni rilevanti sulla",
        "answer": true
      },
      {
        "option_text": "sicurezza siano condivise internamente ed esternamente",
        "answer": true
      },
      {
        "option_text": "Esistano le basi per l'implementazione di un SGSI ma non per il suo mantenimento",
        "answer": false
      },
      {
        "option_text": "Le attività operative per l'istituzione e il mantenimento di un SGSI siano completamente realizzate",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 44,
    "code": "M3.2.3.11",
    "question": "I Riferimenti Informativi nel Framework Core del NIST CSF",
    "options": [
      {
        "option_text": "Sono esaustivi, ovvero rappresentano regole precise da applicare. Sono collegamenti a fonti esterne che forniscono ulteriori dettagli e orientamenti su come",
        "answer": false
      },
      {
        "option_text": "implementare le attività di sicurezza descritte nelle sottocategorie",
        "answer": true
      },
      {
        "option_text": "Possono fare riferimento ad altri standard internazionali",
        "answer": true
      },
      {
        "option_text": "Sono solo illustrativi",
        "answer": true
      },
      {
        "option_text": "Sono obbligatori Forniscono un ponte tra le sottocategorie del framework e le pratiche di sicurezza specifiche del",
        "answer": false
      },
      {
        "option_text": "settore o della regolamentazione",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 45,
    "code": "M3.2.6.25",
    "question": "Zone e conduit secondo ISA/IEC 62443 Sono elementi chiave per la segmentazione della rete e la gestione della sicurezza negli ambienti di",
    "options": [
      {
        "option_text": "controllo industriale Sono elementi chiave per la segmentazione della rete e la gestione della sicurezza anche fuori dagli",
        "answer": true
      },
      {
        "option_text": "ambiti industriali Aiutano a ridurre l'impatto di eventuali violazioni della sicurezza, limitando la propagazione di",
        "answer": true
      },
      {
        "option_text": "attacchi. Sono definiti mediante un approccio basato sul rischio, valutando cioè le minacce e i potenziali",
        "answer": true
      },
      {
        "option_text": "impatti di ogni area",
        "answer": true
      },
      {
        "option_text": "Sono definiti mediante un approccio basato unicamente sul rischio di perdita dei dati sensibili Sono definiti indipendentemente dall' inventario degli asset e dei loro ruoli all'interno delle rete",
        "answer": false
      },
      {
        "option_text": "industriale.",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 46,
    "code": "M3.2.6.26",
    "question": "Per cosa differiscono i sistemi di controllo e automazione industriale (IACS) rispetto ai sistemi IT? I sistemi IACS mirano a controllare e automatizzare processi fisici, i sistemi IT, invece, si",
    "options": [
      {
        "option_text": "concentrano sulla gestione dell'informazione e della comunicazione I sistemi IACS hanno un funzionamento real time e deterministico, quasi mai i sistemi IT hanno",
        "answer": true
      },
      {
        "option_text": "caratteristiche così stringenti. I sistemi IACS hanno sistemi operativi standard MS Windows o Linux i sistemi IT solamente MS",
        "answer": true
      },
      {
        "option_text": "Windows I rischi di Cybersecurity relativi agli IACS possono riguardare la business continuity e la safety, i",
        "answer": false
      },
      {
        "option_text": "sistemi IT hanno come rischi primari la perdita della triade CIA I sistemi IACS necessitano di hardware industriale dedicato e specifico, almento per la parte di",
        "answer": true
      },
      {
        "option_text": "controllo, i sistemi di IT utilizzano prevalentemente hardware di mercato Gli ambienti di configurazione e i linguaggi di programmazione per entrambe le tipologie dei",
        "answer": true
      },
      {
        "option_text": "sistemi sono identici.",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 47,
    "code": "M3.3.1.4",
    "question": "Il Diritto alla Privacy",
    "options": [
      {
        "option_text": "Nasce negli Stati Uniti nel 1890 come «diritto a essere lasciato solo» (right to be let alone) Ovvero l'originario “Diritto all'essere lasciati soli” che significava libertà “nel fare quello che si vuole",
        "answer": true
      },
      {
        "option_text": "con i propri affari privati   anche se coinvolgono gli altri\" Viene elaborato in Italia dagli anni ‘60-’70 (del 1900) come generico diritto alla libera",
        "answer": false
      },
      {
        "option_text": "determinazione nello svolgimento della propria personalità Attualmente si parla di privacy anche come diritto a esprimere liberamente le proprie aspirazioni,",
        "answer": true
      },
      {
        "option_text": "quindi in relazione all’autodeterminazione Con l'avvento dell'era elettronica e digitale, si parla di privacy anche come diritto di impedire la",
        "answer": true
      },
      {
        "option_text": "rilevazione di informazioni personali",
        "answer": true
      },
      {
        "option_text": "E' stato elaborato in Europa negli anni '60 (del 1900)",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 48,
    "code": "M3.3.4.2",
    "question": "Le fasi dell'Informatica Forense Nella fase Identificazione  si identificano i dati digitali rilevanti, operando sui dispositivi di",
    "options": [
      {
        "option_text": "memorizzazione dei dati digitali Nella fase di Raccolta si acquisicono i sistemi che contengono i dati e si procede alla messa in",
        "answer": true
      },
      {
        "option_text": "sicurezza dei supporti di memorizzazione. Nella fase di Acquisizione  si realizza una copia di tutti i dati, tramite appositi strumenti è possibile",
        "answer": true
      },
      {
        "option_text": "produrre una copia \"legale\" dei dati digitali che si intende utilizzare come prova Nella fase di Analisi si estraggono da tutti dati acquisiti solo quelli rilevanti, aggregandoli e",
        "answer": true
      },
      {
        "option_text": "valutando le strategie a sostegno di un’ipotesi accusatoria o di una strategia difensiva Nella fase di Elaborazione  si estraggono le informazioni dai dati \"grezzi\" come completamento",
        "answer": true
      },
      {
        "option_text": "della fase di analisi Nella fase di Presentazione  si produce una relazione tecnica per presentare ciò che è emerso nel",
        "answer": false
      },
      {
        "option_text": "corso dell’attività tecnica in formato \"legale\"",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 49,
    "code": "M3.3.6.10",
    "question": "Quali tipologie di Dati sono previsti dal Regolamento Europeo 2016/679 GDPR?",
    "options": [
      {
        "option_text": "Dati personali, ovvero le informazioni relative a persona fisica identificata o identificabile Dati personali, ovvero le informazioni relative a persona fisica identificabile anche indirettamente",
        "answer": true
      },
      {
        "option_text": "(ad esempio mediante la raccolta di varie informazioni che possano identificarla) Dati personali particolari, come l'origine razziale o etnica, le opinioni politiche, le convinzioni",
        "answer": true
      },
      {
        "option_text": "religiose o filosofiche e altro Dati personali particolari (o sensibili secondo il codice italiano), come i riferimenti dei dati bancari o",
        "answer": true
      },
      {
        "option_text": "i dati finanziari in genere Dati personali relativi a condanne penali o reati, con il controllo dell'Autorità Pubblica o autorizzato",
        "answer": false
      },
      {
        "option_text": "dal Diritto dell'UE",
        "answer": true
      },
      {
        "option_text": "Dati di persone giuriche con riferimenti all'interno dell'Unione Europea",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 50,
    "code": "M3.3.6.11",
    "question": "Le Figure di Riferimento per il trattamento dei dati, ai sensi del “Codice della Privacy”, sono le seguenti:",
    "options": [
      {
        "option_text": "Titolare del trattamento",
        "answer": true
      },
      {
        "option_text": "Responsabile del trattamento",
        "answer": true
      },
      {
        "option_text": "Preposto",
        "answer": false
      },
      {
        "option_text": "Destinatario del trattamento",
        "answer": true
      },
      {
        "option_text": "Terzi",
        "answer": true
      },
      {
        "option_text": "Competente",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 51,
    "code": "M3.3.6.12",
    "question": "Il \"Titolare del Trattamento\" secondo il Regolamento Europeo 2016/679 GDPR:",
    "options": [
      {
        "option_text": "Può essere un'azienda",
        "answer": true
      },
      {
        "option_text": "Può essere un'organizzazione in genere",
        "answer": true
      },
      {
        "option_text": "Può essere un'autorità pubblica o organo o istituzione dello stato",
        "answer": true
      },
      {
        "option_text": "Può essere una persona fisica",
        "answer": true
      },
      {
        "option_text": "Non è responsabile delle misure di sicurezza per proteggere i dati È il titolare che stabilisce le finalità del trattamento, cioè per quale scopo vengono raccolti e",
        "answer": false
      },
      {
        "option_text": "utilizzati i dati",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 52,
    "code": "M3.4.3.9",
    "question": "La valutazione del Rischio",
    "options": [
      {
        "option_text": "Viene effettuata facendo riferimento a classi omogenee per tipologia",
        "answer": true
      },
      {
        "option_text": "Viene effettuata da due prospettive: Impatto (o Gravità) e Probabilità",
        "answer": true
      },
      {
        "option_text": "Utilizza un indice numerico che è dato dal prodotto dell'Impatto moltiplicato la probabilità",
        "answer": true
      },
      {
        "option_text": "Di solito si associa a Probabilità e Impatto un valore numerico compreso tra 1 e 10",
        "answer": false
      },
      {
        "option_text": "Si effettua solamente nell'ambito della sicurezza informatica Viene rappresentata graficamente con un diagramma multidimensionale (X,Y,Z) con gradazioni di",
        "answer": false
      },
      {
        "option_text": "colori differenti",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 53,
    "code": "M3.4.4.3",
    "question": "I sistemi IT e OT differiscono (dal punto di vista dei fattori critici per la Cybesecurity) Per i fattori di rischio: perdita o manomissione di dati e informazioni per IT e business continuity e",
    "options": [
      {
        "option_text": "sicurezza fisica per l'OT Per le possibilità di intervento: senza grossi vincoli temporali per l'IT con grossi vincoli legati al",
        "answer": true
      },
      {
        "option_text": "continuità del processo per l'OT Per le modalità e i tempi di risposta: non deterministiche-non real time per l'IT, deterministiche-",
        "answer": true
      },
      {
        "option_text": "real time per l'OT Per la tipologia dei sistemi operativi: standard di mercato per l'IT e prevalentemente non standard",
        "answer": true
      },
      {
        "option_text": "e real time per l'OT Per le possibili conseguenze in caso di incidenti che nel caso dell'OT può portare, nel caso peggiore,",
        "answer": true
      },
      {
        "option_text": "alla perdita di dati",
        "answer": false
      },
      {
        "option_text": "Per il livello di disponibilità necessario: molto elevato per l'IT, più contenuto per l'OT",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 54,
    "code": "M3.4.4.5",
    "question": "Si parla di Convergenza IT-OT",
    "options": [
      {
        "option_text": "Per identificare il tentativo di ridurre il GAP organizzativo, tecnologico e culturale tra l'IT e l'OT. Nelle organizzazioni in cui è necessaria una integrazione informatica tra il governo dell''azienda e la",
        "answer": true
      },
      {
        "option_text": "produzione",
        "answer": true
      },
      {
        "option_text": "Solamente nei casi in cui la tecnologia informatica (IT) è equivalmente a quella operazionale (OT)",
        "answer": false
      },
      {
        "option_text": "Nei casi in cui non esiste un reparto che gestisce la tecnologia OT",
        "answer": false
      },
      {
        "option_text": "Nei casi in cui non esiste un reparto che gestisce la tecnologia IT",
        "answer": false
      },
      {
        "option_text": "Solamente nelle aziende che producono prodotti informatici",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 55,
    "code": "M3.4.5.4",
    "question": "L’Endpoint Protection",
    "options": [
      {
        "option_text": "Realizza il tunneling nella comunicazione dall’interno all’esterno dell’azienda Si riferisce alla protezione di qualsiasi dispositivo o connessione che abbia accesso alla rete",
        "answer": false
      },
      {
        "option_text": "aziendale",
        "answer": true
      },
      {
        "option_text": "Può utilizzare tecniche di Machine learning per rilevare le minacce zero-day",
        "answer": true
      },
      {
        "option_text": "Realizza la protezione antimalware e antivirus",
        "answer": true
      },
      {
        "option_text": "Non ha mai un firewall integrato",
        "answer": false
      },
      {
        "option_text": "Può realizzare la security dei dispositivi Mobile",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 56,
    "code": "M4.1.1.12",
    "question": "La Struttura Organizzativa Funzionale È la soluzione organizzativa dove le attività sono divise per “specialità”, ovvero le operazioni della",
    "options": [
      {
        "option_text": "medesima natura sono raggruppate tra loro È la soluzione organizzativa dove le attività sono divise per “specialità”, ovvero le operazioni della",
        "answer": true
      },
      {
        "option_text": "medesima natura sono raggruppate per area geografica Ha come vantaggio l’incremento dell’efficienza della direzione poiché i manager possono",
        "answer": false
      },
      {
        "option_text": "concentrare la loro attività in un solo settore di attività Ha come svantaggio il minore coordinamento all’interno della funzione a causa dell’assegnazione",
        "answer": true
      },
      {
        "option_text": "del potere decisionale ad un solo general manager per tutte le funzioni Ha come vantaggio la moltiplicazione dei livelli gerarchici, rendendo più semplice il coordinamento",
        "answer": false
      },
      {
        "option_text": "tra le funzioni Ha come rischio l’eccessiva focalizzazione da parte del manager sulla propria funzione, dandole",
        "answer": false
      },
      {
        "option_text": "eccessiva rilevanza rispetto alle altre attività aziendali",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 57,
    "code": "M4.1.2.2",
    "question": "Perché è necessario mantenere allineati gli obiettivi IT e il business aziendale?",
    "options": [
      {
        "option_text": "Per massimizzare gli effetti degli investimenti nel reparto e le infrastrutture IT",
        "answer": true
      },
      {
        "option_text": "Perché il processo di digitalizzazione può diventare un vantaggio competitivo per le organizzazioni",
        "answer": true
      },
      {
        "option_text": "Perché lo impongono le normative europee Perché è necessario aggiornare costantemente l'impatto che può avere l'IT con la business",
        "answer": false
      },
      {
        "option_text": "continuity Perché il budget di spesa IT deriva dal valore che l'IT riesce esprimere nel Piano Strategico",
        "answer": true
      },
      {
        "option_text": "aziendale",
        "answer": true
      },
      {
        "option_text": "Perché il Portfolio IT (insieme degli asset IT) deve allineare la strategia ICT",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 58,
    "code": "M4.3.3.2",
    "question": "La Gestione del Rischio di cybersecurity nelle organizzazioni",
    "options": [
      {
        "option_text": "Può essere indirizzata da una specifica commissione che risponde al Consiglio di Amministrazione",
        "answer": true
      },
      {
        "option_text": "Può essere coordinata dal responsabile del rischio",
        "answer": true
      },
      {
        "option_text": "Viene assegnata come responsabilità al CISO (se esiste)",
        "answer": true
      },
      {
        "option_text": "Si realizza mediante la sola identificazione dei rischi più probabili",
        "answer": false
      },
      {
        "option_text": "E' un fattore rilevante solo per le infrastrutture critiche",
        "answer": false
      },
      {
        "option_text": "Non fa riferimento a nessuno standard",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 59,
    "code": "M4.2.2.3",
    "question": "Perché è importante formare i dipendenti di un'azienda sul rischio di cybersecurity? Perché renderli consapevoli dei rischi degli incidenti e attacchi informatici è la principale arma di",
    "options": [
      {
        "option_text": "difesa che può essere messa in campo Perché le tecnologie di protezione informatica non sono strumenti isolati ma devono essere di",
        "answer": true
      },
      {
        "option_text": "supporto alle persone che devono imparare a conoscerli",
        "answer": true
      },
      {
        "option_text": "Perché le minacce evolvono costantemente e le vulnerabilità non sono solo tecnologiche",
        "answer": true
      },
      {
        "option_text": "Perché permette di ridurre drasticamente gli investimenti nelle tecnologie di protezione Perché la sicurezza informatica non è appannaggio del solo ufficio IT: ogni funzione o reparto",
        "answer": false
      },
      {
        "option_text": "devono essere coivolti",
        "answer": true
      },
      {
        "option_text": "Perché permette all'organizzazione di ridurre il personale nel reparto IT",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 60,
    "code": "M4.2.3.10",
    "question": "Per ridurre i dati archiviati in cloud un'azienda riduce la frequenza di archiviazione di 10.000 registri (da 32 byte) da 1 sec a 1 minuto quanto spazio di archiviazione risparmia in un mese (30 gg)?",
    "options": [
      {
        "option_text": "Meno del 30% dei dati trasmessi prima della riduzione",
        "answer": false
      },
      {
        "option_text": "Più del 98% dei dati trasmessi prima della riduzione",
        "answer": true
      },
      {
        "option_text": "Circa 760 Gbyte al mese",
        "answer": true
      },
      {
        "option_text": "Circa 760 Mbyte al mese",
        "answer": false
      },
      {
        "option_text": "Circa 760 Kbyte al mese",
        "answer": false
      },
      {
        "option_text": "Una quantità economicamente non rilevante Esercizio 1 Definire le tabelle di routing considerando i costi di trasmissione per ogni singola connessione: Esercizio 2 Router1 Router2 Router3 Router4 Router5 Router6  Nell'immagine sovrastante è rappresentata la topologia per la realizzazione di una DMZ (Demilitarized Zone) ovvero una sottorete che contiene ed espone i servizi Internet, mantenendoli segregati, per proteggere la rete locale (LAN) interna. Associare al numero indicato nel box rappresentato la lettera del corretto dispositivo tra quelli presenti. Che differenza esiste tra il concetto di Zona secondo IEC 62443 e una Demilitarized Zone (DMZ)? R: La Zona IEC 62443 è un concetto più ampio della DMZ Quali sono i criteri per differenziare due Zone secondo IEC 62443? R: Le zone vengono differenziate in base alle funzioni e ai requisiti di sicurezza, in relazione al rischio, che devono soddisfare  Soluzioni Appello Aspetti Organizzativi e Gestionali della C.S. del19 Settembre 2025",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 61,
    "code": "M1.1.1.3.1",
    "question": "Cos’è la crittografia?",
    "options": [
      {
        "option_text": "È una tecnica di rappresentazione di dati o informazioni",
        "answer": true
      },
      {
        "option_text": "E' una tecnica che impedisce in assoluto che i dati vengano intercettati",
        "answer": false
      },
      {
        "option_text": "E' una tecnica che viene usata solo in ambito militare e non ha applicazioni nella vita quotidiana",
        "answer": false
      },
      {
        "option_text": "È una tecnica per impedire che l’informazione contenuta in un messaggio possa essere recepita da chi non ha la chiave di decriptazione",
        "answer": true
      },
      {
        "option_text": "È una tecnica per rendere più sicura la trasmissione dei dati o dei segnali",
        "answer": true
      },
      {
        "option_text": "È una tecnica per cifrare trasmissioni analogiche",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 62,
    "code": "M1.1.2.10",
    "question": "La quantità di informazioni che è possibile trasmettere nell’unità di tempo in un canale",
    "options": [
      {
        "option_text": "È inversamente proporzionale alla larghezza di banda del canale",
        "answer": false
      },
      {
        "option_text": "È proporzionale alla larghezza di banda del canale",
        "answer": true
      },
      {
        "option_text": "È maggiore al crescere dell'ampiezza dello spettro delle frequenze che possono passare per quel canale",
        "answer": true
      },
      {
        "option_text": "Dipende dalla tipologia del canale",
        "answer": true
      },
      {
        "option_text": "È indipendente dalla tipologia del canale",
        "answer": false
      },
      {
        "option_text": "Dipende solo dalla velocità del trasmettitore e non dalla larghezza di banda del canale",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 63,
    "code": "M1.1.2.8",
    "question": "Perché si utilizza la fibra ottica?",
    "options": [
      {
        "option_text": "Perché ha una maggiore sicurezza contro intercettazioni rispetto ai cavi in rame.",
        "answer": true
      },
      {
        "option_text": "Perché non richiede nessuna infrastruttura dedicata",
        "answer": false
      },
      {
        "option_text": "Perché è immune ai disturbi elettromagnetici",
        "answer": true
      },
      {
        "option_text": "Perché consente di coprire grandi distanze senza perdita significativa di segnale",
        "answer": true
      },
      {
        "option_text": "Perché è completamente esente dai fenomeni di disturbo",
        "answer": false
      },
      {
        "option_text": "Perché è più economica del doppino di rame in ogni situazione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 64,
    "code": "M1.1.3.2.1",
    "question": "Il Routing",
    "options": [
      {
        "option_text": "Statico, prevede che le rotte debbano essere configurate manualmente e non si aggiornino automaticamente in caso di guasto",
        "answer": true
      },
      {
        "option_text": "Dinamico, prevede che le rotte apprese da un protocollo non possano mai essere inserite manualmente",
        "answer": false
      },
      {
        "option_text": "Definisce le decisioni di instradamento basandosi solo sugli indirizzi MAC",
        "answer": false
      },
      {
        "option_text": "Statico prevede che le rotte si aggiornino automaticamente quando cambia la topologia della rete",
        "answer": false
      },
      {
        "option_text": "Dinamico prevede che i router si scambino informazioni per adattarsi a variazioni della rete",
        "answer": true
      },
      {
        "option_text": "Determina il percorso che i pacchetti devono seguire per raggiungere la loro destinazione attraverso reti diverse",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 65,
    "code": "M1.1.3.8",
    "question": "L'indirizzamento IPv4",
    "options": [
      {
        "option_text": "E' composto da 32 bit, solitamente rappresentati in 4 ottetti in notazione decimale puntata",
        "answer": true
      },
      {
        "option_text": "Può assumere per ogni ottetto di un indirizzo IPv4 valori compresi tra 0 e 255",
        "answer": true
      },
      {
        "option_text": "Utilizza subnet mask per distinguere la parte di indirizzo che indica la rete da quella che indica l’host",
        "answer": true
      },
      {
        "option_text": "Prevede che un'indirizzo possa avere una lunghezza variabile di 64 o 128 bit",
        "answer": false
      },
      {
        "option_text": "Gli indirizzi 0.0.0.0 e 255.255.255.255 hanno significati speciali e non identificano un host specifico",
        "answer": true
      },
      {
        "option_text": "Ogni ottetto di un indirizzo IPv4 può assumere di fatto valori compresi tra 0 e 1024",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 66,
    "code": "M1.2.3.5.1",
    "question": "Verificare quale delle seguenti affermazioni sulla Cyber Security nella Supply Chain sono vere o false:",
    "options": [
      {
        "option_text": "Un attacco alla supply chain può avvenire compromettendo software di terze parti o aggiornamenti distribuiti ai clienti (es. attacchi a fornitori di software)",
        "answer": true
      },
      {
        "option_text": "La sicurezza della supply chain riguarda solo i fornitori diretti e non quelli di secondo o terzo livello",
        "answer": false
      },
      {
        "option_text": "La gestione degli accessi dei fornitori a sistemi interni è un punto critico nella protezione della supply chain.",
        "answer": true
      },
      {
        "option_text": "Gli standard di sicurezza come ISO 27001 non si applicano ai rapporti con i partner della catena di fornitura",
        "answer": false
      },
      {
        "option_text": "Il rischio di supply chain può derivare non solo da vulnerabilità informatiche, ma anche da processi organizzativi e da carenze nei controlli di sicurezza dei fornitori",
        "answer": true
      },
      {
        "option_text": "Una volta verificata la sicurezza di un fornitore al momento della stipula del contratto, non è necessario riesaminarla in futuro.",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 67,
    "code": "M1.3.1.8",
    "question": "Il livello 7 del Modello ISO/OSI",
    "options": [
      {
        "option_text": "Fornisce un insieme di protocolli che operano a stretto contatto con le applicazioni utente",
        "answer": true
      },
      {
        "option_text": "Gestisce funzioni come scambio di e-mail, trasferimento di file, accesso ai database, ecc.",
        "answer": true
      },
      {
        "option_text": "Utilizza protocolli TCP/IP e UDP",
        "answer": false
      },
      {
        "option_text": "Utilizza protocolli di trasferimento file come FTP, http, ecc.",
        "answer": true
      },
      {
        "option_text": "Utilizza protocolli di servizio come DHCP, DNS, ecc.",
        "answer": true
      },
      {
        "option_text": "Può gestisce l’interazione tra gli utenti Istagram o Facebook e i livelli ISO/OSI sottostanti",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 68,
    "code": "M1.3.2.23",
    "question": "Una trasmissione non-deterministica",
    "options": [
      {
        "option_text": "Può avvenire quando due nodi possono iniziare a trasmettere contemporaneamente causando una collisione",
        "answer": true
      },
      {
        "option_text": "Garantisce sempre un tempo massimo di attesa fisso per ogni nodo",
        "answer": false
      },
      {
        "option_text": "Elimina completamente il rischio di collisione",
        "answer": false
      },
      {
        "option_text": "Non permette di stabilire un limite superiore certo al tempo di accesso al mezzo",
        "answer": true
      },
      {
        "option_text": "Diminuisce l’efficienza del canale con l’aumentare del numero di nodi attivi, a causa della maggiore probabilità di collisione",
        "answer": true
      },
      {
        "option_text": "Prevede che l’ordine di consegna dei pacchetti sia sempre garantito dal livello MAC.",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 69,
    "code": "M1.3.2_2.9",
    "question": "L’indirizzo di Broadcast della sottorete 243.123.23.45/29 è:",
    "options": [
      {
        "option_text": "243.123.23.40",
        "answer": false
      },
      {
        "option_text": "243.123.23.47",
        "answer": true
      },
      {
        "option_text": "243.123.23.45",
        "answer": false
      },
      {
        "option_text": "243.123.23.41",
        "answer": false
      },
      {
        "option_text": "243.123.23.46",
        "answer": false
      },
      {
        "option_text": "255.255.255.248",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 70,
    "code": "M1.3.3.9",
    "question": "Il Firewall:",
    "options": [
      {
        "option_text": "Monitora il traffico in entrata e in uscita attraverso regole di sicurezza configurabili per autorizzare o bloccare gli eventi",
        "answer": true
      },
      {
        "option_text": "È un dispositivo, esclusivamente implementato su speciali appliance hardware, per la sicurezza della rete",
        "answer": false
      },
      {
        "option_text": "Nella configurazione “Default-Deny” abilita l’accesso solo di ciò che viene autorizzato esplicitamente, mentre il resto viene vietato",
        "answer": true
      },
      {
        "option_text": "Nella configurazione “Default-Deny” blocca l’accesso solo di ciò che viene vietato esplicitamente, mentre il resto viene permesso",
        "answer": false
      },
      {
        "option_text": "Se NGFW (Next Generation Firewall) è dotato di funzioni di prevenzione delle intrusioni (IPS) e di funzionalità di prevenzione delle minacce e protezione antivirus",
        "answer": true
      },
      {
        "option_text": "È un dispositivo che funziona solo a livello ISO/OSI 4",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 71,
    "code": "M2.1.1.5",
    "question": "Quali dei seguenti elementi (o funzioni aziendali) sono di solito interni ad un’azienda:",
    "options": [
      {
        "option_text": "Risorse Umane (HR)",
        "answer": true
      },
      {
        "option_text": "Produzione",
        "answer": true
      },
      {
        "option_text": "Vendite",
        "answer": true
      },
      {
        "option_text": "Fornitura materie prime",
        "answer": false
      },
      {
        "option_text": "Marketing",
        "answer": true
      },
      {
        "option_text": "Servizio Cloud",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 72,
    "code": "M2.1.3.3",
    "question": "Le aziende nel settore terziario avanzato",
    "options": [
      {
        "option_text": "Sono imprese che realizzano attività di intermediazione, o di produzione indiretta di beni, tramite il commercio degli stessi",
        "answer": false
      },
      {
        "option_text": "Sono imprese di servizio che basano il proprio core business sul know-how e sui servizi intellettuali",
        "answer": true
      },
      {
        "option_text": "Possono essere le aziende che gestiscono i trasporti e le comunicazioni",
        "answer": false
      },
      {
        "option_text": "Possono essere le società di Ingegneria",
        "answer": true
      },
      {
        "option_text": "Possono essere le aziende che realizzano attività di ricerca e sviluppo di una nuova tecnologia",
        "answer": true
      },
      {
        "option_text": "Possono essere le aziende ICT",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 73,
    "code": "M2.1.3.6",
    "question": "Quale dei seguenti servizi può erogare un’azienda di tipo Utility",
    "options": [
      {
        "option_text": "Fornitura di acqua e smaltimento acque reflue",
        "answer": true
      },
      {
        "option_text": "Fornitura di servizi web",
        "answer": true
      },
      {
        "option_text": "Raccolta e riciclo/smaltimento rifiuti",
        "answer": true
      },
      {
        "option_text": "Fornitura energia (elettricità, gas)",
        "answer": true
      },
      {
        "option_text": "Fornitura riscaldamento",
        "answer": true
      },
      {
        "option_text": "Fornitura di telefonia fissa",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 74,
    "code": "M2.2.2.4.1",
    "question": "Il Sistema Informativo aziendale l’ERP (Enterprise Resource Planning)",
    "options": [
      {
        "option_text": "È una piattaforma software che raggruppa i sistemi del reparto amministrativo, delle vendite, del magazzino e la logistica",
        "answer": true
      },
      {
        "option_text": "Permette che i dati provenienti da molteplici parti dell'azienda vengono raccolti e gestiti in maniera centralizzata",
        "answer": true
      },
      {
        "option_text": "Può gestire l’invio dei dettagli relativi alla realizzazione di un prodotto verso i sistemi produttivi",
        "answer": false
      },
      {
        "option_text": "Può gestire l’inventario dei materiali, le scorte e la movimentazione delle merci",
        "answer": true
      },
      {
        "option_text": "Permette di progettare o simulare il funzionamento di un determinato oggetto meccanico",
        "answer": false
      },
      {
        "option_text": "Può essere costituito da una piattaforma SaaS in Cloud",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 75,
    "code": "M2.3.2.6",
    "question": "L’Organizzazione Aziendale",
    "options": [
      {
        "option_text": "Può essere definita come tutti quegli elementi (materiali, strumentali e umani) che permettono di ottenere, attraverso un’azione strutturata, codificata e documentata, gli obiettivi aziendali",
        "answer": true
      },
      {
        "option_text": "E' l'insieme di operazioni coordinate (soggettive e oggettive) che l'azienda compie per ottenere gli obiettivi predefiniti",
        "answer": false
      },
      {
        "option_text": "Deve declinare la “mission” aziendale in obiettivi concretamente raggiungibili e misurabili",
        "answer": true
      },
      {
        "option_text": "Deve assegnare in maniera non ambigua compiti e ruoli a tutto il personale",
        "answer": true
      },
      {
        "option_text": "Non riguarda specificatamente la tecnologia e la struttura produttiva",
        "answer": false
      },
      {
        "option_text": "Attraverso l’assegnazione dei compiti realizza il workflow produttivo",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 76,
    "code": "M3.2.1.20",
    "question": "Quali delle seguenti sono aree tematiche dei requisiti di un ISMS secondo ISO/IEC 27001:2022?",
    "options": [
      {
        "option_text": "Context of the organization (Comprensione del contesto dell’organizzazione)",
        "answer": true
      },
      {
        "option_text": "Leadership (Leadership, coinvolgimento e focalizzazione del top management su CS)",
        "answer": true
      },
      {
        "option_text": "Planning (Corretta pianificazione delle operations di CS)",
        "answer": true
      },
      {
        "option_text": "Supporto Tecnico (Disponibilità del reparto tecnico di supporto)",
        "answer": false
      },
      {
        "option_text": "Operation (Attività operative: pianificazione e controllo, valutazione del rischio…)",
        "answer": true
      },
      {
        "option_text": "Performance Evaluation (Monitoraggio e Audit delle prestazioni di CS)",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 77,
    "code": "M3.2.1.23",
    "question": "Un Sistema di Gestione della Cybersecurity",
    "options": [
      {
        "option_text": "Serve a definire processi, ruoli e misure per proteggere le informazioni e i sistemi aziendali",
        "answer": true
      },
      {
        "option_text": "Deve essere aggiornato e migliorato in modo continuo per restare efficace contro nuove minacce",
        "answer": true
      },
      {
        "option_text": "Si concentra esclusivamente sulla protezione delle reti informatiche, senza considerare persone e processi.",
        "answer": false
      },
      {
        "option_text": "Elimina completamente ogni rischio di attacco informatico",
        "answer": false
      },
      {
        "option_text": "Può essere conforme a standard internazionali come la ISO/IEC 27001",
        "answer": true
      },
      {
        "option_text": "La sola realizzazione permette di essere conforme con le normative internazionali",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 78,
    "code": "M3.2.1_2.20",
    "question": "Il controllo ISO/IEC 27001: 2022 \"Data Masking\" per l'implementazione del mascheramento dei dati",
    "options": [
      {
        "option_text": "Indica che Il mascheramento dei dati ha come unico vincolo la legislazione internazionale applicabile",
        "answer": false
      },
      {
        "option_text": "Indica che Il mascheramento dei dati deve essere utilizzato in conformità con la politica specifica dell'organizzazione in materia di controllo degli accessi e altre politiche specifiche correlate",
        "answer": true
      },
      {
        "option_text": "È un requisito solo Preventivo",
        "answer": true
      },
      {
        "option_text": "È un  requisito Preventivo e Investigativo",
        "answer": false
      },
      {
        "option_text": "Ha come Concept NIST CSF \"Detect\"",
        "answer": false
      },
      {
        "option_text": "È un controllo che appartiene solamente all'ambito della Riservatezza",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 79,
    "code": "M3.2.3.10",
    "question": "Il NIST Cyber Security Framework",
    "options": [
      {
        "option_text": "È uno standard che non è mai stato revisionato dalla prima pubblicazione",
        "answer": false
      },
      {
        "option_text": "Rispetto all’ISO/IEC 27001 non parla di contromisure ma di risultati o effetti ottenuti realizzando determinate attività",
        "answer": true
      },
      {
        "option_text": "Prevede la certificazione come l’ISO 27001",
        "answer": false
      },
      {
        "option_text": "Prevede solamente un livello di implementazione",
        "answer": false
      },
      {
        "option_text": "Contiene numerosi riferimenti informativi ad altri standard",
        "answer": true
      },
      {
        "option_text": "Prevede quattro livelli implementativi o Tiers",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 80,
    "code": "M3.2.3.2.2",
    "question": "Il Framework Core del NIST CSF",
    "options": [
      {
        "option_text": "E' organizzato in cinque Funzioni principali: Identify, Protect, Detect, Respond, Recover.",
        "answer": true
      },
      {
        "option_text": "E' strutturato con specifiche Funzioni che rappresentano un elenco di controlli tecnici obbligatori da implementare",
        "answer": false
      },
      {
        "option_text": "Il Core è specifico solo per le infrastrutture critiche degli Stati Uniti e non può essere adattato ad altri settori o Paesi.",
        "answer": false
      },
      {
        "option_text": "Le Funzioni del Core seguono un ciclo che copre prevenzione, rilevamento e risposta agli incidenti di sicurezza informatica.",
        "answer": true
      },
      {
        "option_text": "Il Core fornisce una lista dettagliata di strumenti software da utilizzare per ciascuna Sottocategoria.",
        "answer": false
      },
      {
        "option_text": "Ogni Funzione del Core si articola in Categorie e Sottocategorie e Riferimenti Informativi che collegano le attività a standard e pratiche esistenti.",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 81,
    "code": "M3.2.3.7.1",
    "question": "Nel NIST CSF il Supply Chain Risk Management (SCRM)",
    "options": [
      {
        "option_text": "Affronta sia l'effetto di sicurezza informatica che un'organizzazione ha sulle parti esterne sia l'effetto di sicurezza informatica che le parti esterne hanno su un'organizzazione",
        "answer": true
      },
      {
        "option_text": "Può includere le attività di determinazione dei requisiti di sicurezza informatica per i fornitori",
        "answer": true
      },
      {
        "option_text": "Può includere le attività di attuazione dei requisiti di sicurezza informatica attraverso accordi formali (ad es. contratti)",
        "answer": true
      },
      {
        "option_text": "È l'insieme delle attività necessarie per gestire il rischio di sicurezza informatica associato solamente ai fornitori",
        "answer": false
      },
      {
        "option_text": "Può includere le attività di verifica che i requisiti di sicurezza informatica dei fornitori siano soddisfatti attraverso una varietà di metodologie di valutazione",
        "answer": true
      },
      {
        "option_text": "Può includere le attività di comunicazione ai clienti di come saranno verificati e convalidati i requisiti di sicurezza dei prodotti realizzati",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 82,
    "code": "M3.2.4.3.1",
    "question": "Il documento NIST Special Publication SP 800-82 Rev. 2",
    "options": [
      {
        "option_text": "Fornisce una guida su come proteggere i sistemi di controllo industriale (ICS)",
        "answer": true
      },
      {
        "option_text": "Fornisce un catalogo integrativo di controlli di sicurezza e privacy per i sistemi informativi e le organizzazioni",
        "answer": false
      },
      {
        "option_text": "Fa parte della serie 800, pubblicazioni speciali relative alla computer security",
        "answer": true
      },
      {
        "option_text": "Fa parte della serie 800, pubblicazioni speciali che propongono guide pratiche e usabili di soluzioni per la cybersecurity",
        "answer": false
      },
      {
        "option_text": "Fa parte della serie 800, pubblicazioni speciali che sono documenti rilevanti di Information Technology",
        "answer": false
      },
      {
        "option_text": "Come tutti i documenti NIST può essere solamente acquistato nell’apposito sito",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 83,
    "code": "M3.2.6.4",
    "question": "Le zone secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "Dividono una architettura fisica (dispositivi di rete e connessioni) in zone omogenee raggruppando i dispositivi con requisiti di sicurezza comuni",
        "answer": false
      },
      {
        "option_text": "Dividono un sistema in zone omogenee raggruppando le risorse (logiche o fisiche) con requisiti di sicurezza comuni",
        "answer": true
      },
      {
        "option_text": "Hanno requisiti di sicurezza definiti da Security Level (SL), il livello richiesto per una zona è determinato dall'analisi del rischio",
        "answer": true
      },
      {
        "option_text": "Hanno confini che separano gli elementi all'interno della zona da quelli esterni",
        "answer": true
      },
      {
        "option_text": "Possono includere impianti presenti in siti fisici differenti",
        "answer": false
      },
      {
        "option_text": "Possono essere suddivise in sottozone che definiscono diversi livelli di sicurezza e quindi consentono una difesa in profondità",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 84,
    "code": "M3.3.3.4",
    "question": "Il Data Breach",
    "options": [
      {
        "option_text": "E' una violazione di sicurezza che comporta la manomissione o impedisce l’accesso ai dati personali trasmessi, conservati o comunque trattati.",
        "answer": true
      },
      {
        "option_text": "E' una violazione di sicurezza non accidentale anche se non altera le caratteristiche di riservatezza, integrità o disponibilità dei dati personali.",
        "answer": false
      },
      {
        "option_text": "Può essere l’accesso o l’acquisizione dei dati da parte di terzi non autorizzati",
        "answer": true
      },
      {
        "option_text": "Può essere la deliberata alterazione di dati personali",
        "answer": true
      },
      {
        "option_text": "Può essere la divulgazione dei dati personali anche se autorizzata",
        "answer": false
      },
      {
        "option_text": "Può essere l’impossibilità di accedere ai dati personali per cause accidentali o deliberate",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 85,
    "code": "M3.3.5_1.7",
    "question": "La nuova direttiva NIS 2",
    "options": [
      {
        "option_text": "Deve essere recepita da ciascun membro dell'unione",
        "answer": true
      },
      {
        "option_text": "Prevede che debbano essere creati CSIRT nazionali in ogni singolo stato che collaborano tra di loro coordinati da ENISA",
        "answer": true
      },
      {
        "option_text": "Prevede che ENISA definisca per tutta l'UE le aziende e le organizzazioni che rientrano nel perimento di compliance",
        "answer": false
      },
      {
        "option_text": "In quanto Direttiva UE non necessita di un recepimento ma solo di una verifica di eventuali sovrapposizioni legislative locali",
        "answer": false
      },
      {
        "option_text": "Ha tempi di recepimento e implementazione non definiti",
        "answer": false
      },
      {
        "option_text": "Prevede che debbano essere definite le Autorità Competenti NIS in ogni singolo stato dell'unione",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 86,
    "code": "M3.3.6.7",
    "question": "Il regolamento GDPR (General Data Protection Regulation)",
    "options": [
      {
        "option_text": "Disciplina solamente le persone fisiche",
        "answer": true
      },
      {
        "option_text": "Disciplina le organizzazioni con personalità giuridica",
        "answer": false
      },
      {
        "option_text": "Disciplina le organizzazioni in genere anche senza personalità giuridica",
        "answer": false
      },
      {
        "option_text": "Si applica anche ai titolari del trattamento dei dati con sede legale fuori dall'UE che trattano dati personali di residenti nell'Unione Europea",
        "answer": true
      },
      {
        "option_text": "Non è specifico per tipologia di supporto, ciò significa che le informazioni e i relativi dati possono essere anche orali o verbali",
        "answer": true
      },
      {
        "option_text": "Si applica a prescindere dal luogo o dai luoghi ove sono collocati i sistemi di archiviazione (storage) e di elaborazione (server)",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 87,
    "code": "M3.3.7.3",
    "question": "Il Titolo II del Regolamento Europeo 2019/881 (Cybersecurity Act) definisce il ruolo di ENISA ovvero:",
    "options": [
      {
        "option_text": "Di conseguire un elevato livello comune di cibersicurezza in tutta l’Unione, sostenendo attivamente gli Stati membri, le istituzioni, gli organi e gli organismi dell’Unione nel miglioramento della cibersicurezza.",
        "answer": true
      },
      {
        "option_text": "Di conseguire un elevato livello comune di cibersicurezza in tutta l’Unione, sostituendo gli organismi degli Stati membri, le istituzioni dell’Unione nei processi di gestione della cibersicurezza",
        "answer": false
      },
      {
        "option_text": "Stabilire le misure per il ravvicinamento delle disposizioni legislative, regolamentari e amministrative degli Stati membri relative alla cibersicurezza",
        "answer": true
      },
      {
        "option_text": "Agire in maniera indipendente, evitando nel contempo la duplicazione delle attività degli Stati membri e tenendo conto delle competenze esistenti degli Stati membri",
        "answer": true
      },
      {
        "option_text": "Sviluppare le proprie risorse, incluse le capacità e abilità tecniche e umane, necessarie al fine di svolgere i compiti attribuitile ai sensi del presente regolamento",
        "answer": true
      },
      {
        "option_text": "Contribuire a rafforzare le capacità di cibersicurezza a livello di Unione solo nel caso di incidenti transfrontalieri",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 88,
    "code": "M3.4.3.2.1",
    "question": "Il Rischio Informatico può essere valutato",
    "options": [
      {
        "option_text": "Con una formula costituita da Impatto (Inteso come danno possibile) / Probabilità",
        "answer": false
      },
      {
        "option_text": "Con una formula costituita da Impatto (Inteso come danno possibile) x Probabilità",
        "answer": true
      },
      {
        "option_text": "Con una formula costituita da Impatto (Inteso come danno possibile) + Probabilità",
        "answer": false
      },
      {
        "option_text": "Con un valore numerico compreso tra un valore minimo e uno massimo in funzione delle sole classi uniformi del danno",
        "answer": false
      },
      {
        "option_text": "Con un valore numerico sempre compreso tra 1 (Rischio Molto Alto) e 4 (Rischio Molto Basso) in funzione dell’incertezza del rischio",
        "answer": false
      },
      {
        "option_text": "Con un valore numerico che è funzione dell’incertezza e fa riferimento a classi omogenee di eventi dannosi, per natura e gravità",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 89,
    "code": "M4.1.1.18",
    "question": "La Struttura Organizzativa permette di",
    "options": [
      {
        "option_text": "Costruire una \"spina dorsale\" dell’impresa attraverso la sola analisi delle attività attuali dell'organizzazione",
        "answer": false
      },
      {
        "option_text": "Scegliere l’assetto legale che si ritiene più appropriato rispetto allo scopo aziendale (impresa individuale, impresa di capitali o altro)",
        "answer": true
      },
      {
        "option_text": "Dare «ordine» alle parti e ai loro compiti; creando un assetto organizzativo fisso e invariabile",
        "answer": false
      },
      {
        "option_text": "Dare «ordine» alle parti e ai loro compiti; creando un assetto organizzativo stabile, ancorché modificabile",
        "answer": true
      },
      {
        "option_text": "Definire «regole» e «procedure» di comportamento delle parti e dei partecipanti.",
        "answer": true
      },
      {
        "option_text": "Progettare il modello, ovvero la configurazione, dell’assetto organizzativo che è rappresentato dall’organigramma dell’impresa",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 90,
    "code": "M4.1.5.5",
    "question": "La figura del CISO",
    "options": [
      {
        "option_text": "Ha la responsabilità aziendale della Sicurezza Informatica",
        "answer": true
      },
      {
        "option_text": "Ha la responsabilità aziendale della Sicurezza",
        "answer": false
      },
      {
        "option_text": "Ha la responsabilità di sviluppare una strategia aziendale perché i beni e le tecnologie d'informazione aziendali siano adeguatamente protetti",
        "answer": true
      },
      {
        "option_text": "Ha responsabilità aziendale sui Sistemi Informativi",
        "answer": false
      },
      {
        "option_text": "Necessita di buone doti di comunicazione per comunicare le scelte per la gestione del rischio e spiegare le soluzioni tecnologiche adottate",
        "answer": true
      },
      {
        "option_text": "E' di solito un professionista esterno all'organizzazione  Esercizio 1 1. Identificare correttamente, nello schema topologico in figura, i dispositivi rappresentati con le lettere: 2. Qual è il nome dei segmenti di rete con collegamenti colorati in rosso, verde, azzurro e giallo?  VLAN Esercizio 2 Il controllo ISO/IEC 27001: 2022  \"Secure authentication\". Indica che le devono essere implementate tecnologie e procedure di autenticazione sicure in base alle restrizioni di accesso alle informazioni e alla politica di controllo degli accessi generale dell'azienda. Tale controllo si concentra su: S: La verifica dell'identità di un utente o di un processo Come si riesce a migliorare l'efficacia del controllo?: S: Utilizzando l'autenticazione multifattore (MFA) Tale Controllo è di tipo: S: Preventivo Considerando il paradigma CIA (o RID) quali delle proprietà elencate possono essere implementare con il controllo? S: Confidentiality, Integrity e Availability Quali Concetti del NIST Cyber Security Framework possono essere associati al controllo? S: Protect Il Controllo è stato concepito primariamente per: S: Creare una politica di sicurezza delle informazioni che includa la gestione degli accessi e le tecnologie di autenticazione Quali delle seguenti procedure possono essere implementate per realizzare correttamente il Controllo? S: Realizzare una Policy di gestione degli accessi alle informazioni in base allo specifico ruolo del personale A.Router con FirewallH. Switch B.Router con FirewallI. Firewall C. Switch L. Router D. Switch M.Router con Firewall E.Anomaly DetectionN. VPN F. Switch O.Anomaly Detection G. Firewall P. Switch  Appello di Aspetti Organizzativi e Gestionali della CS 10 Ottobre 2025",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 91,
    "code": "M1.1.2.13",
    "question": "La trasmissione telefonica su rete cablata",
    "options": [
      {
        "option_text": "È tecnicamente più complessa rispetto alla trasmissione telegrafica perché deve trasmettere la voce umana",
        "answer": true
      },
      {
        "option_text": "Necessita della modulazione (trasformazione) del segnale da trasmettere",
        "answer": true
      },
      {
        "option_text": "Attraverso la modulazione in frequenza si adatta alla banda di frequenze che possono essere trasmesse sul canale",
        "answer": true
      },
      {
        "option_text": "Dall’inizio ha permesso il collegamento di tutti gli utenti in rete senza l’intervento umano",
        "answer": false
      },
      {
        "option_text": "Ha utilizzato dall’inizio un sistema di commutazione automatica che permetteva di collegare gli utenti componendo un numero su un selettore a disco",
        "answer": false
      },
      {
        "option_text": "Ha utilizzato dapprima la commutazione automatica solamente per le chiamate locali",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 92,
    "code": "M1.1.2.14",
    "question": "La banda di trasmissione VHF",
    "options": [
      {
        "option_text": "E' utilizzata esclusivamente per comunicazioni satellitari",
        "answer": false
      },
      {
        "option_text": "E' ampiamente usata per la radiodiffusione FM (88–108 MHz)",
        "answer": true
      },
      {
        "option_text": "La banda VHF copre in genere frequenze da 30 MHz a 300 MHz",
        "answer": true
      },
      {
        "option_text": "Penetra facilmente sottoterra ed è ideale per le comunicazioni nei tunnel",
        "answer": false
      },
      {
        "option_text": "E' utilizzata anche per comunicazioni marittime e aeronautiche",
        "answer": true
      },
      {
        "option_text": "Per le trasmissioni sono necessarie antenne lunghe centinaia di metri",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 93,
    "code": "M1.1.3.6",
    "question": "Il Subnetting",
    "options": [
      {
        "option_text": "È una suddivisione dello spazio di indirizzi riservato ad una rete",
        "answer": true
      },
      {
        "option_text": "È una tecnica che permette di dividere una rete in sottoreti",
        "answer": true
      },
      {
        "option_text": "È utilizzato per risolvere al problema del numero limitato degli indirizzi IP pubblici, permettendo ad ogni azienda avere a disposizione un gran numero di indirizzi IP privati",
        "answer": true
      },
      {
        "option_text": "Si realizza attraverso l’utilizzo (nella versione IPv4) della mascheratura degli ottetti binari dell’indirizzo",
        "answer": true
      },
      {
        "option_text": "Si realizza attraverso l’utilizzo (nella versione IPv4) della mascheratura dei quartetti binari dell’indirizzo",
        "answer": false
      },
      {
        "option_text": "Si realizza utilizzando una parte dei bit del prefisso di rete dell’indirizzo in maschera di sottorete",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 94,
    "code": "M1.1.4.1",
    "question": "L’HyperText Transfer Protocol (HTTP)",
    "options": [
      {
        "option_text": "È un linguaggio di testo che consente la comunicazione tra client e server attraverso internet per recuperare tutte le risorse collegate",
        "answer": true
      },
      {
        "option_text": "È un linguaggio compilato che consente la comunicazione tra client e server attraverso internet per recuperare tutte le risorse collegate",
        "answer": false
      },
      {
        "option_text": "Ha come caratteristica peculiare che terminato lo scambio di messaggi la connessione si sgancia, rendendo il protocollo molto flessibile e dinamico",
        "answer": true
      },
      {
        "option_text": "Dispone dei seguenti comandi: Get, Head, Post, Put, Delete",
        "answer": true
      },
      {
        "option_text": "È un protocollo di livello 6 dello stack ISO/OSI",
        "answer": false
      },
      {
        "option_text": "Di “default” utilizza la porta 80 per la comunicazione da client a host (server)",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 95,
    "code": "M1.1.6.2",
    "question": "Le vulnerabilità informatiche",
    "options": [
      {
        "option_text": "Sono malfunzionamenti, configurazioni sbagliate o semplicemente errori (bugs) presenti in un sistema che lo espongono a dei rischi",
        "answer": true
      },
      {
        "option_text": "Rendono un sistema vulnerabile ed esposto a potenziali minacce",
        "answer": true
      },
      {
        "option_text": "Sono esclusivamente relative al codice software o firmware embedded in una determinata motherboard",
        "answer": false
      },
      {
        "option_text": "Possono presentarsi all’interno del codice stesso, in una configurazione o addirittura nel processo di installazione",
        "answer": true
      },
      {
        "option_text": "Sono raggruppabili tre macro-categorie: software, protocolli e hardware",
        "answer": true
      },
      {
        "option_text": "Sono raggruppabili tre macro-categorie: software, protocolli e firmware",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 96,
    "code": "M1.2.3.4",
    "question": "La Supply Chain o catena di fornitura",
    "options": [
      {
        "option_text": "Può essere il bersaglio per un attacco indiretto ad un determinato obiettivo",
        "answer": true
      },
      {
        "option_text": "Permette attacchi di più difficile individuazione e, di solito, di più semplice realizzazione",
        "answer": true
      },
      {
        "option_text": "Può essere il bersaglio di Cyber Attacchi di solito nelle PMI (Piccole e Medie Aziende)",
        "answer": true
      },
      {
        "option_text": "Può essere il bersaglio di Cyber Attacchi di solito nelle Grandi Aziende",
        "answer": false
      },
      {
        "option_text": "Non è a rischio di Cyber Attacchi solamente se elimina l’integrazione informatica cliente-fornitore",
        "answer": false
      },
      {
        "option_text": "Riduce il rischio di Cyber Attacchi se implementa una corretta politica di gestione dei fornitori, ad esempio, richiedendo specifici requisiti di sicurezza informatica",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 97,
    "code": "M1.2.4.5.1",
    "question": "Cryptojacking",
    "options": [
      {
        "option_text": "È una minaccia in grado di infiltrarsi nei browser web e di compromettere ogni tipo di dispositivo informatico",
        "answer": true
      },
      {
        "option_text": "È una minaccia che utilizza le risorse di un computer o un dispositivo mobile per criptare dei file",
        "answer": false
      },
      {
        "option_text": "È una minaccia che utilizza le risorse di un computer o un dispositivo mobile per “generare” criptovalute",
        "answer": true
      },
      {
        "option_text": "Utilizza malware che funzionano da processi in background sottraendo risorse hardware a danno dell’utente",
        "answer": true
      },
      {
        "option_text": "Sfrutta il meccanismo di compensazione dei “Miners” delle Blockchain delle criptovalute",
        "answer": true
      },
      {
        "option_text": "È una minaccia in grado di infiltrarsi nei DNS e di compromettere solo i server",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 98,
    "code": "M1.3.1.4",
    "question": "Il livello 3 del Modello ISO/OSI",
    "options": [
      {
        "option_text": "Rende i livelli superiori (4,5...) indipendenti dai mezzi fisici",
        "answer": true
      },
      {
        "option_text": "Utilizza l’indirizzamento IP",
        "answer": true
      },
      {
        "option_text": "Ha il compito di rendere il trasferimento del messaggio affidabile",
        "answer": false
      },
      {
        "option_text": "Gestisce l’instradamento o Routing",
        "answer": true
      },
      {
        "option_text": "Realizza il “framing” dei dati",
        "answer": false
      },
      {
        "option_text": "Gestisce la frammentazione e il riassemblaggio dei pacchetti di dimensione eccessiva per la rete",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 99,
    "code": "M1.3.1.13",
    "question": "A cosa serve il modello ISO/OSI?",
    "options": [
      {
        "option_text": "Per far fronte ad una crescente necessità di standardizzazione nella comunicazione dei sistemi informatici",
        "answer": true
      },
      {
        "option_text": "Per risolvere il problema delle reti di computer single “brand”, ovvero in grado di comunicare solo con apparati dello stesso produttore",
        "answer": true
      },
      {
        "option_text": "Per realizzare una comunicazione multilivello, che permetta di adattarsi alle specifiche reti di telecomunicazione che si intende realizzare",
        "answer": true
      },
      {
        "option_text": "Per rendere indipendenti il mezzo fisico di trasmissione dal livello logico",
        "answer": true
      },
      {
        "option_text": "Per legare indissolubilmente e in maniera standardizzata il mezzo fisico al software che lo gestisce",
        "answer": false
      },
      {
        "option_text": "Per realizzare una comunicazione multilivello, che permetta di utilizzare lo stesso tipo di protocollo di comunicazione e relativo algoritmo di elaborazione, in tutti i livelli dello stack",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 100,
    "code": "M1.3.2.24",
    "question": "Lo standard USB",
    "options": [
      {
        "option_text": "Permette il collegamento a caldo (hot plugging) senza riavviare il computer",
        "answer": true
      },
      {
        "option_text": "E' stato progettato per resistere ad un numero elevatissimo di inserimenti e rimozioni del connettore",
        "answer": true
      },
      {
        "option_text": "Può raggiungere una velocità di trasferimento massima teorica di oltre 20 Gbps",
        "answer": true
      },
      {
        "option_text": "Con il connettore USB-C non è reversibile, cioè non può essere inserito in entrambi i versi",
        "answer": false
      },
      {
        "option_text": "Prevede una distanza massima per un cavo standard di 20 metri",
        "answer": false
      },
      {
        "option_text": "Prevede che tutti i connettori servano solo per il trasferimento dati.",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 101,
    "code": "M1.3.2.8",
    "question": "Un cavo in fibra ottica monomodale",
    "options": [
      {
        "option_text": "Prevede una sola modalità di propagazione: un'unica lunghezza d'onda della luce nel nucleo della fibra",
        "answer": true
      },
      {
        "option_text": "Prevede una solo modalità di propagazione: una lunghezza d’onda modulata nel tempo",
        "answer": false
      },
      {
        "option_text": "E' ideale per collegamenti di rete a lungo raggio con larghezza di banda elevata",
        "answer": true
      },
      {
        "option_text": "Ha un nucleo di vetro molto più grande del cavo multimodale per garantire minore interferenza",
        "answer": false
      },
      {
        "option_text": "Ha un nucleo di vetro da 8-10 micronm (nella tipologia OS1 e OS2)",
        "answer": true
      },
      {
        "option_text": "In nessun caso può essere usato per collegamenti locali",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 102,
    "code": "M1.3.2_2.3",
    "question": "La Maschera di sottorete in una rete TCP/IP",
    "options": [
      {
        "option_text": "È un parametro di configurazione che definisce l’intervallo di indirizzi di una sottorete IP a cui appartiene un host",
        "answer": true
      },
      {
        "option_text": "È utilizzata per ridurre il traffico di rete e facilitare la ricerca e il raggiungimento di un determinato host",
        "answer": true
      },
      {
        "option_text": "Permette con un solo indirizzo IP «pubblico» e la maschera stessa di identificare e indirizzare una famiglia di indirizzi «privati» (quindi invisibili dalla rete pubblica)",
        "answer": true
      },
      {
        "option_text": "Permette di mantenere la capacità di indirizzamento aumentando il numero di indirizzi “pubblici”",
        "answer": false
      },
      {
        "option_text": "È un numero che denota quale parte di un indirizzo IP identifica la sottorete e quale l'host",
        "answer": true
      },
      {
        "option_text": "Di fatto non è più utilizzata dopo l’arrivo dell’IPV6 e la conseguente obsolescenza dell’IPV4",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 103,
    "code": "M1.3.2_2.15",
    "question": "La subnet di rete",
    "options": [
      {
        "option_text": "Ha un indirizzo di rete e un indirizzo di broadcast dedicati",
        "answer": true
      },
      {
        "option_text": "Ha una subnet mask che serve a distinguere la parte di indirizzo usata per identificare la rete da quella per gli host",
        "answer": true
      },
      {
        "option_text": "/24 ha sempre 256 host disponibili",
        "answer": false
      },
      {
        "option_text": "Permette di ridurre il traffico di rete segmentando i domini di broadcast",
        "answer": true
      },
      {
        "option_text": "Può avere un host che appartiene a più subnet contemporaneamente senza configurazioni particolari",
        "answer": false
      },
      {
        "option_text": "E' fondamentale per un’assegnazione più efficiente degli indirizzi IP",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 104,
    "code": "M1.3.2_2.16",
    "question": "L'indirizzo di Broadcast",
    "options": [
      {
        "option_text": "Serve per inviare un messaggio a tutti gli host di una stessa rete",
        "answer": true
      },
      {
        "option_text": "Coincide sempre con 255.255.255.255",
        "answer": false
      },
      {
        "option_text": "Si ottiene ponendo a 1 tutti i bit della parte host dell’indirizzo IP",
        "answer": true
      },
      {
        "option_text": "Non può essere assegnato a un singolo host",
        "answer": true
      },
      {
        "option_text": "Varia in base alla subnet mask della rete",
        "answer": true
      },
      {
        "option_text": "Permette ai pacchetti con il suo indirizzamento di essere inoltrati da una subnet ad un'altra",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 105,
    "code": "M1.3.3.6.2",
    "question": "Lo Switch di rete:",
    "options": [
      {
        "option_text": "È un dispositivo elettronico intelligente, dotato di porte di interfaccia di varie tipologie",
        "answer": true
      },
      {
        "option_text": "Può essere un dispositivo elettrico non dotato di CPU e, se “Unmanaged”, configurabile",
        "answer": false
      },
      {
        "option_text": "Può segmentare il dominio di broadcast attraverso le VPN",
        "answer": false
      },
      {
        "option_text": "Può avere una gestione “Unmanaged” o “Managed”",
        "answer": true
      },
      {
        "option_text": "Può avere un instradamento di tipo “store-and-forward”",
        "answer": true
      },
      {
        "option_text": "Se “Unmanaged” non permette la configurazione delle VLAN",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 106,
    "code": "M1.3.4.5",
    "question": "In una topologia di rete ad Anello",
    "options": [
      {
        "option_text": "L'informazione trasmessa può viaggiare in entrambi i versi/sensi dell'anello per raggiungere una certa destinazione",
        "answer": true
      },
      {
        "option_text": "È necessario un nodo centrale per gestire la connessione tra i computer",
        "answer": false
      },
      {
        "option_text": "È possibile ottimizzare l'utilizzo della banda disponibile inviando alcuni pacchetti in un verso e altri pacchetti nel verso opposto",
        "answer": true
      },
      {
        "option_text": "Le caratteristiche di scalabilità sono scarse dato che l'aggiunta o la rimozione di un nodo presuppone una variazione della velocità della rete",
        "answer": true
      },
      {
        "option_text": "Sono presenti caratteristiche intrinseche di ridondanza e quindi di affidabilità e robustezza",
        "answer": true
      },
      {
        "option_text": "Sono presenti un numero di rami pari al numero dei nodi meno uno",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 107,
    "code": "M2.1.2.12",
    "question": "La Socierà S.p.A.",
    "options": [
      {
        "option_text": "È una società di Persone",
        "answer": false
      },
      {
        "option_text": "È una società di Capitali",
        "answer": true
      },
      {
        "option_text": "Può avere un'azionariato diffuso",
        "answer": true
      },
      {
        "option_text": "Ha autonomia patrimoniale perfetta: gli azionisti non hanno responsabilità personale sulle obbligazioni sociali",
        "answer": true
      },
      {
        "option_text": "Ha autonomia patrimoniale imperfetta: gli azionisti possono avere responsabilità personale sulle obbligazioni sociali",
        "answer": false
      },
      {
        "option_text": "Di solito ha dimensioni medio-piccole",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 108,
    "code": "M2.1.3.4",
    "question": "Le Aziende di Erogazione",
    "options": [
      {
        "option_text": "Non mirano al profitto, ma piuttosto a raggiungere un equilibrio economico o un fine sociale, etico o morale",
        "answer": true
      },
      {
        "option_text": "Sono istituzioni il cui scopo principale è il soddisfacimento diretto dei bisogni umani e collettivi, invece del profitto",
        "answer": true
      },
      {
        "option_text": "Possono essere organismi come l'INPS, l'INAIL, le ASL, e la pubblica amministrazione in generale, che erogano servizi essenziali alla cittadinanza.",
        "answer": true
      },
      {
        "option_text": "Possono essere classificate in base alla loro natura giuridica solamente pubbliche",
        "answer": false
      },
      {
        "option_text": "Possono in ultimo generare un utile una volta raggiunti gli obiettivi sociali ed etici dello statuto",
        "answer": false
      },
      {
        "option_text": "Hanno come attività prevalente l'impiego delle risorse per l'acquisto e l'utilizzo di beni e servizi, o la loro erogazione diretta",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 109,
    "code": "M2.2.1.5",
    "question": "Come posso identificare il valore (da proteggere) all'interno un azienda o un organizzazione?",
    "options": [
      {
        "option_text": "Identificando tutti gli elementi (tangibili e intangibili) che contribuiscono proporzionalmente al fatturato dell'azienda",
        "answer": true
      },
      {
        "option_text": "Identificando solo gli elementi tangibili che contribuiscono proporzionalmente al fatturato dell'azienda",
        "answer": false
      },
      {
        "option_text": "Identificando solo gli asset che sono dotati o hanno a che fare con sistemi computerizzati",
        "answer": false
      },
      {
        "option_text": "Intervistando il responsabile IT dell'azienda o dell'organizzazione",
        "answer": false
      },
      {
        "option_text": "Intervistando il TOP, e il middle management nonché le persone chiave che gestiscono i processi aziendali",
        "answer": true
      },
      {
        "option_text": "Intervistando solo il TOP managament",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 110,
    "code": "M2.2.2.2",
    "question": "Un incidente informatico interno all’organizzazione",
    "options": [
      {
        "option_text": "Può essere qualsiasi evento che sottintende una violazione delle politiche di sicurezza IT fonte di danno per gli asset IT",
        "answer": true
      },
      {
        "option_text": "Può essere un incidente collegato ad un attacco con obiettivi economici e può avere come obiettivi i sistemi Amministrativi e gestionali o i sistemi di progettazione",
        "answer": true
      },
      {
        "option_text": "In ogni caso è di rilevanza inferiore rispetto ad un attacco diretto",
        "answer": false
      },
      {
        "option_text": "Può essere collegato ad un attacco avente come obiettivo l’interruzione del servizio mediante il blocco dei sistemi amministrativi e gestionali, i portali web e di e-commerce o i sistemi di produzione",
        "answer": true
      },
      {
        "option_text": "Ha come caratteristica la facilità di verifica del nesso causa-effetto tra evento rilevato e danno subito",
        "answer": false
      },
      {
        "option_text": "Può essere un evento casuale legato ad un’operazione o una procedura errata",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 111,
    "code": "M3.1.1.8",
    "question": "Quali sono le possibili cause di un Incidente Informatico",
    "options": [
      {
        "option_text": "Vulnerabilità informatiche",
        "answer": true
      },
      {
        "option_text": "Massivo utilizzo di tecnologie cloud",
        "answer": false
      },
      {
        "option_text": "Debolezze umane",
        "answer": true
      },
      {
        "option_text": "Obsolescenza",
        "answer": true
      },
      {
        "option_text": "Mancanza degli aggiornamenti di sicurezza",
        "answer": true
      },
      {
        "option_text": "Utilizzo di software di terze parti",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 112,
    "code": "M3.1.2.2",
    "question": "Perché è necessario modellizzare i processi aziendali?",
    "options": [
      {
        "option_text": "Per fornire una descrizione di una sequenza di attività comprensibile ad un osservatore esterno al processo",
        "answer": true
      },
      {
        "option_text": "Perché la legislazione lo richiede obbligatoriamente",
        "answer": false
      },
      {
        "option_text": "Per usare un modello grafico standardizzato con l’obiettivo di presentare un documento in un formato facilmente comprensibile ad organizzazioni different",
        "answer": true
      },
      {
        "option_text": "Per descrivere cosa attualmente succede durante un processo",
        "answer": true
      },
      {
        "option_text": "Per descrivere anche cosa si desidererebbe far succedere durante un processo in futuro",
        "answer": true
      },
      {
        "option_text": "Per creare la base e i presupposti all’analisi per l’innovazione di processo",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 113,
    "code": "M3.2.1_1.5",
    "question": "L'area tematica dei requisiti ISO/IEC 27001 \"Pianificazione\" :",
    "options": [
      {
        "option_text": "Contiene la definizione delle azioni per affrontare rischi e opportunità",
        "answer": true
      },
      {
        "option_text": "Contiene la definizione degli obiettivi di sicurezza delle informazioni e la pianificazione per raggiungerli",
        "answer": true
      },
      {
        "option_text": "Definisce le risorse che sono necessarie per istituire e manutenere un Sistema di Gestione della Sicurezza Informatica",
        "answer": false
      },
      {
        "option_text": "Definisce la pianificazione dei cambiamenti",
        "answer": true
      },
      {
        "option_text": "Definisce la pianificazione e il controllo operativo dei processi necessari per soddisfare i requisiti e implementare le azioni correttive",
        "answer": false
      },
      {
        "option_text": "Definisce la politica di sicurezza delle informazioni",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 114,
    "code": "M3.2.1_2.14",
    "question": "Il controllo ISO/IEC 27001: 2022 “Data leakage prevention” ovvero orientato alla prevenzione della divulgazione deliberata di informazioni riservate",
    "options": [
      {
        "option_text": "Indica che le misure di prevenzione della fuga di dati si devono applicare ai sistemi, alle reti e a qualsiasi altro dispositivo che tratta, memorizza o trasmette informazioni sensibili",
        "answer": true
      },
      {
        "option_text": "Indica che le misure di prevenzione della fuga di dati si applicano ai soli sistemi abilitati al trattamento dei dati di terzi",
        "answer": false
      },
      {
        "option_text": "È stato pensato, insieme ad altri nuovi controlli, in funzione della normativa europea GDPR",
        "answer": true
      },
      {
        "option_text": "È un controllo solo di tipo “Preventivo",
        "answer": false
      },
      {
        "option_text": "È un controllo di tipo “Preventivo” e “Investigativo”",
        "answer": true
      },
      {
        "option_text": "È un controllo solo di tipo “Correttivo”",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 115,
    "code": "M3.2.4.1",
    "question": "I Documenti NIST Special Publications sono raggruppati nelle serie",
    "options": [
      {
        "option_text": "SP 800 Computer security",
        "answer": true
      },
      {
        "option_text": "SP 1800 Cybersecurity Practice Guides",
        "answer": true
      },
      {
        "option_text": "SP 1700 Cybersecurity Development Guides",
        "answer": false
      },
      {
        "option_text": "SP 500 Information technology (relevant documents)",
        "answer": true
      },
      {
        "option_text": "SP 300 Information technology (relevant documents)",
        "answer": false
      },
      {
        "option_text": "SP 600 Computer system management",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 116,
    "code": "M3.2.6.28",
    "question": "Il Requisito Fondazionale Restrict Data Flow (RDF) di ISA/IEC 62443",
    "options": [
      {
        "option_text": "Richiede che il flusso di dati sia limitato solo a ciò che è necessario per la funzione operativa prevista.",
        "answer": true
      },
      {
        "option_text": "Consente qualsiasi comunicazione tra zone e condotti purché siano cifrati.",
        "answer": false
      },
      {
        "option_text": "Significa definire zone e conduit e stabilire regole di comunicazione ammesse tra di essi.",
        "answer": true
      },
      {
        "option_text": "Riguarda soltanto la protezione dei dati a riposo nei dispositivi di automazione",
        "answer": false
      },
      {
        "option_text": "E' uno dei sette Requisiti Fondazionali (Foundational Requirements) definiti dalla IEC 62443",
        "answer": true
      },
      {
        "option_text": "Può essere implementato con l’ausili di firewall industriali per permettono la comunicazione solo attraverso le porte e mediante i protocolli strettamente necessari",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 117,
    "code": "M3.2.6.27",
    "question": "La struttura di ISA/IEC 62443",
    "options": [
      {
        "option_text": "E' composta da quattro famiglie di standard corrispondenti a quattro profili di approfondimento",
        "answer": true
      },
      {
        "option_text": "E' composta da una solo gruppo organico di standard in cui sono sviluppati diversi livelli di approfondimento",
        "answer": false
      },
      {
        "option_text": "Prevede livelli di approfondimento che vanno dal livello generale ed arrivano sino al livello del componente inteso come prodotto utilizzato all'interno di un sistema.",
        "answer": true
      },
      {
        "option_text": "Prevede un livello Generale dove sono presenti le informazioni introduttive, vocabolari, modelli, concetti e casi d'uso",
        "answer": true
      },
      {
        "option_text": "Prevede un livello Sistema ovvero approcci di valutazione, livelli di requisiti di sicurezza e tecnologie dei prodotti utilizzati",
        "answer": false
      },
      {
        "option_text": "E' immutabile sia nelle famiglie che nel numero dei documenti presenti in ciascuna famiglia",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 118,
    "code": "M3.3.5_1.8",
    "question": "I Soggetti Essenziali e Importanti secondo la direttiva NIS 2",
    "options": [
      {
        "option_text": "Sono contenuti nell'insieme dei soggetti che costituiscono l'Ambito di Applicazione del Decreto Legge 138",
        "answer": true
      },
      {
        "option_text": "Sono soggetti che operano in settori considerati ad alta criticità oppure entità che operano in settori critici ma non ad alta criticità, fornendo servizi che, se interrotti, potrebbero avere conseguenze significative.",
        "answer": true
      },
      {
        "option_text": "Sono soggetti che devono essere qualificati dall'Agenzia Nazionale di Cybersicurezza (ACN)",
        "answer": true
      },
      {
        "option_text": "Sono differenziati anche per le caratteristiche dimensionali delle aziende",
        "answer": true
      },
      {
        "option_text": "Non sono differenziati per le caratteristiche dimensionali della aziende",
        "answer": false
      },
      {
        "option_text": "Sono tutti i soggetti che superano i massimali di fatturato per le medie imprese ovvero i 50 milioni Euro",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 119,
    "code": "M3.3.5_1.9",
    "question": "Perché i reparti IT e OT dovranno collaborare maggiornente per effetto della Direttiva NIS 2?",
    "options": [
      {
        "option_text": "Perché è espressamente indicato nella normativa",
        "answer": false
      },
      {
        "option_text": "Perché la nuova direttiva ha obiettivi focalizzati sulla continuità del business o del servizio erogato dall'azienda nel suo insieme",
        "answer": true
      },
      {
        "option_text": "Perché nella direttiva non si parla solamente di salvaguardare dati, informazioni e conoscenza ma anche il prodotto o il servizio finale offerto, all'interno della supply chain",
        "answer": true
      },
      {
        "option_text": "Prechè tutti gli incidenti di sicurezza dovranno essere gestiti e comunicati in tempi stretti, questo richiede procedure condivise tra IT e OT per garantire rapidità e coordinamento.",
        "answer": true
      },
      {
        "option_text": "Perché, nonostante i sistemi OT non siano mai connessi alle reti IT, il reparto IT dovrà dimostrare di averne qualche conoscenza",
        "answer": false
      },
      {
        "option_text": "Perché la conformità alla normativa richiede valutazioni del rischio e misure di protezione su tutta la catena di fornitura, coinvolgendo sia IT che OT",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 120,
    "code": "M4.3.1.2",
    "question": "Una grande Azienda Multiutility",
    "options": [
      {
        "option_text": "Si occupa di fornire un solo servizio essenziale, ad esempio solo elettricità, in maniera monopolistica",
        "answer": false
      },
      {
        "option_text": "Opera spesso in regime regolamentato, con tariffe stabilite o controllate da autorità pubbliche",
        "answer": true
      },
      {
        "option_text": "Agisce principalmente nei settori di energia, acqua e gestione dei rifiuti",
        "answer": true
      },
      {
        "option_text": "Non ha alcun ruolo nella transizione energetica e ambientale",
        "answer": false
      },
      {
        "option_text": "Può nascere dall’aggregazione di più aziende locali che gestiscono singoli servizi",
        "answer": true
      },
      {
        "option_text": "E' sempre un'azienda privata senza alcuna partecipazione pubblica  Esercizio 1 Considerando la rappresentazione dei seguenti Incidenti di Cybersecurity: Configurare la seguente tabella del rischio (Probabilità-Impatto) posizionando gli incidenti in base alla valutazione effettuata mediante la loro descrizione, utilizzando le scala di valori indicata nella tabella (La probabilità di verificarsi dell'incidente e la gravità dell'impatto sono espressi in una scala da 1-5, 1 basso, 5 alto). Configurare tutte le 25 celle inserendo --- nelle celle vuote (quelle non utilizzate per inserire l'incidente). Esercizio 2 Data la seguente rete LAN con 254 hosts 1. Qual è l'indirizzo di rete con notazione dei bit di maschera 15.128.21.0/24 2. Qual è l'indirizzo di Broadcast 15.128.21.255 3. Qual è l'indirizzo di Maschera di Rete 255.255.255.0 4. Qual è l'indirizzo Subnet 1 15.128.21.0/26 5. Qual è l'indizizzo Subnet 2 15.128.21.65/26 6. Qual è l'indirizzo Subnet 3 15.128.21.129/27 7. Qual è l'indirizzo Subnet 4 15.128.21.160/27 8. Attraverso quale dispositivo riesco a configurare la comunicazione dalla Subnet 1 alla 3? A  Mario Testino                                               Corso Aspetti Gestionale e Organizzativi della Cyber Security 1 Test di verifica",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 121,
    "code": "M1.3.1.10.1",
    "question": "L’incapsulamento ISO/OSI 1. È un principio per cui in corrispondenza di ogni livello della struttura che il pacchetto dell'Host mittente attraversa, si",
    "options": [
      {
        "option_text": "incorporano le informazioni che sono proprie e uniche del livello attraversato 2. È un prin cipio per cui in corrispondenza di ogni livello della struttura che il pacchetto dell'Host mittente e destinatario",
        "answer": true
      },
      {
        "option_text": "attraversa, si incorporano le informazioni che sono proprie e uniche del livello attraversato 3. È un principio per cui in corrispondenza di ogni livello della struttura che il pacchetto dell'Host Mittente attraversa si incorporano le informazioni che poi vengono eliminate man mano che si risalgono i livelli dell’Host Destinatario sino ad",
        "answer": false
      },
      {
        "option_text": "estrarre il messaggio originario",
        "answer": true
      },
      {
        "option_text": "4. È un principio per cui ad ogni livello ISO/OSI viene effettuato un controllo di congruenze  attraverso  un CRC 5. Per funzionare necessità che ogni livello ISO/OSI offra il proprio \"servizio\" solamente al livello sottostante in maniera",
        "answer": false
      },
      {
        "option_text": "corretta",
        "answer": false
      },
      {
        "option_text": "6. Conferisce robustez za e sicurezza delle trasmissioni al modello ISO/OSI 2 -",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 122,
    "code": "M1.3.2.11.1",
    "question": "L’astrazione Socket TCP è: 1. Un’istruzione software standardizzata progettata per essere utilizzabile nei programmi applicativi che permette la",
    "options": [
      {
        "option_text": "trasmissione e la ricezione di dati attraverso una rete 2. La principale responsabile nello stabilire la connessione tra due host e mantenere la sessione per poi rigenerare la",
        "answer": true
      },
      {
        "option_text": "connessione all'invio di ulteriori pacchetti",
        "answer": true
      },
      {
        "option_text": "3. Indirettamente responsabile dello hand shake a tre livelli del TCP/IP",
        "answer": false
      },
      {
        "option_text": "4. Configurata diversamente sul client e sul server",
        "answer": true
      },
      {
        "option_text": "5. Configurata in modo che lato client e lato server abbia no identiche funzionalità 6. Parametrizzata con due parametri Seq (Numero Sequenza) e Ack (Riconoscimento) in tre passaggi stabilisce una",
        "answer": false
      },
      {
        "option_text": "connessione 4 -",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 123,
    "code": "M3.2.1.1.1",
    "question": "Lo standard ISO/IEC 27000 -series 1. È una serie di norme internazionali fuse in un unico documento che costituiscono uno standard relativo alla sicurezza delle",
    "options": [
      {
        "option_text": "informazioni",
        "answer": false
      },
      {
        "option_text": "2. È una serie di norme internazionali che costituiscono uno standard relativo alla sicurezza informatica 3. È denominato \"Information Security Management Systems (ISMS) Family of Standards\" e si prefigge di proteggere le",
        "answer": true
      },
      {
        "option_text": "informazioni che vengono mantenute ed elaborate da un’organizzazione 4. Permette alle organizzazioni di sviluppare ed implementare un proprio sistema per la gestione d ella sicurezza delle",
        "answer": true
      },
      {
        "option_text": "informazioni (SGSI)",
        "answer": true
      },
      {
        "option_text": "5. È stato generato dagli standard British Standard BS 7799 -1 e -2",
        "answer": true
      },
      {
        "option_text": "6. Si focalizza sulla protezione dei dati esclusivamente attraverso il consolidamento della tecnologia di rete 6 - (M3.2.1. 5.1) ISO/IEC 27002 permette di strutturare in controlli secondo uno schema che prevede i seguenti livelli (indicare solo quelli effettivamente presenti)",
        "answer": false
      },
      {
        "option_text": "1. Aree di Controllo",
        "answer": true
      },
      {
        "option_text": "2. Aree di Rischio",
        "answer": false
      },
      {
        "option_text": "3. Zone Locali e Remote",
        "answer": false
      },
      {
        "option_text": "4. Categorie di Controllo",
        "answer": true
      },
      {
        "option_text": "5. Contromisure (Controlli)",
        "answer": true
      },
      {
        "option_text": "6. Categorie di Allarme 7 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 124,
    "code": "M3.2.6.2.1",
    "question": "La struttura di ISA/IEC 62443 1. È rappresentabile in quattro gruppi di standard che possono rappresentare: “Modelli”, “Gestione”, “Sistema” e",
    "options": [
      {
        "option_text": "“Componente”",
        "answer": true
      },
      {
        "option_text": "2. È costituita da tre famiglie di standard con vari livelli di approfondimento più uno non ancora pubblicato",
        "answer": false
      },
      {
        "option_text": "3. È composta dalle famiglie: “Modelli”, “Gestione”, “Organizzazione” e “Componente”",
        "answer": false
      },
      {
        "option_text": "4. È composta dalle famiglie: “General”,  “Policy & Procedures”, “System” e “Component”",
        "answer": true
      },
      {
        "option_text": "5. È costituita da famiglie di standard con documenti ancora in fase di sviluppo",
        "answer": true
      },
      {
        "option_text": "6. È costituita da famiglie di standard con analogo numero di documenti in ogni famiglia 8 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 125,
    "code": "M3.2.6.5.1",
    "question": "I conduits secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "1. Raggruppano gli elementi che consentono la comunicazione peer to peer tra due zone 2. Forniscono funzioni di sicurezza che consentono una comunicazione sicura e permettono la coesistenza di zone con livelli",
        "answer": false
      },
      {
        "option_text": "differenti",
        "answer": true
      },
      {
        "option_text": "3. Possono essere usati per fare comunicare due o più zone fra di loro 4. Consistono nel raggruppamento di cyber asset dedicati esclusivamente alle comunicazioni, e che condividono gli stessi",
        "answer": true
      },
      {
        "option_text": "requisiti di cybersecurity",
        "answer": true
      },
      {
        "option_text": "5. Possono a ttraversare più di una zona in siti con differenti locazioni geografiche",
        "answer": false
      },
      {
        "option_text": "6. Possono avere sotto -conduits per una difesa in profondità 9 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 126,
    "code": "M3.3.5.1.1",
    "question": "La Direttiva NIS (Network and Information Security)",
    "options": [
      {
        "option_text": "1. È il primo atto legislativo sulla sicurezza informatica approvato dall’Unione Europea",
        "answer": true
      },
      {
        "option_text": "2. È entrata in vigore in Italia 24 giugno 2018 mediante il D.L. n. 65 del 24 18 maggio 2018",
        "answer": true
      },
      {
        "option_text": "3. Impone la notifica obbligatoria degli incidenti all'Autorità nazionale istituita allo scopo",
        "answer": true
      },
      {
        "option_text": "4. Impone la nascita di CSIRT (Computer Security Incident Response Team) nazionali, sulla base del CERT -UE 5. Stabilisce l’obiettivo dell’adozione di una serie di misure di sicurezza comuni che potranno essere adottate",
        "answer": true
      },
      {
        "option_text": "discrezional mente dai singoli paesi",
        "answer": false
      },
      {
        "option_text": "6. Impone di realizzare un network nei singoli paesi che si occupi della sicurezza delle reti critiche 10 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 127,
    "code": "M3.4.5.2",
    "question": "Un sistema di Anomaly Detection  F V V V V F V F F V V F V F F V V F F V V V F F V V V V F F  3 T1 – 8 Luglio 2022  1. Permette di trovare e correggere gli incidenti non appena iniziano a verificarsi e prima che possano causare danno per",
    "options": [
      {
        "option_text": "l’organizzazione 2. Permette di trovare e correggere gli incidenti dopo che si sono verificati in modo da minimizzare i danni all’organizzazione Falso 3. Utilizza un approccio di Machine Learning per monitorare l’insieme dei dati, apprendere il comportamento di ogni",
        "answer": true
      },
      {
        "option_text": "dispositivo e fornire avvisi puntuali sugli errori critici",
        "answer": true
      },
      {
        "option_text": "4. Utilizza un approccio con logiche algoritmiche tradizi onali basate su modelli predefiniti",
        "answer": false
      },
      {
        "option_text": "5. Realizza il “deep packed inspection”",
        "answer": true
      },
      {
        "option_text": "6. Definisce la “Baseline” ovvero la “conoscenza o linea di base” di quella specifica architettura di rete 11 -",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 128,
    "code": "M4.1.1.1",
    "question": "Quali tra le seguenti caratteristiche rientrano nel modello di Burocrazia secondo Max Weber",
    "options": [
      {
        "option_text": "1. Fedeltà al marchio",
        "answer": false
      },
      {
        "option_text": "2. Competenza disciplinata",
        "answer": true
      },
      {
        "option_text": "3. Diritto di licenziare",
        "answer": false
      },
      {
        "option_text": "4. Gerarchia degli uffici",
        "answer": true
      },
      {
        "option_text": "5. Preparazione specializzata",
        "answer": true
      },
      {
        "option_text": "6. Concorsi pubblici per l’assunzione 13 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 129,
    "code": "M4.1.1.3",
    "question": "Chi tra questi personaggi ha posto le basi degli attuali modelli organizzativi",
    "options": [
      {
        "option_text": "1. Karl Marx",
        "answer": false
      },
      {
        "option_text": "2. Alessandro Volta",
        "answer": false
      },
      {
        "option_text": "3. Karl Emil Maximilian Weber",
        "answer": true
      },
      {
        "option_text": "4. Enrico Fermi",
        "answer": false
      },
      {
        "option_text": "5. Thomas Robert Malthus",
        "answer": false
      },
      {
        "option_text": "6. Adam Smith 14 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 130,
    "code": "M4.1.1.5",
    "question": "Quali di questi sono principi fondamentali di organizzazione aziendale (indicare vero)",
    "options": [
      {
        "option_text": "1. Dividere l’azienda per raggruppamenti funzionali omogenei (dipartimenti, divisioni, ecc.)",
        "answer": true
      },
      {
        "option_text": "2. Dividere l’azienda per raggruppamenti verticali o orizzontali",
        "answer": false
      },
      {
        "option_text": "3. Definire ruoli e mansioni nei singoli raggruppamenti",
        "answer": true
      },
      {
        "option_text": "4. Accentrare la responsabilità in poche figure che evitano massimamente la delega",
        "answer": false
      },
      {
        "option_text": "5. Modellizzare i processi aziendali in una prospettiva di miglioramento continuo",
        "answer": true
      },
      {
        "option_text": "6. Standardizzare i processi 15 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 131,
    "code": "M4.1.1.9",
    "question": "Cosa significa Costruire una Struttura Organizzativa? 1. Scegliere l’assetto legale che si ritiene più appropriato rispetto al numero e le capacità dei dipendenti (impresa individual e",
    "options": [
      {
        "option_text": "o impresa di capitali o altro) 2. Scegliere l’assetto legale  che si ritiene più appropriato rispetto allo scopo aziendale (impresa individuale o impresa di",
        "answer": false
      },
      {
        "option_text": "capitali o altro)",
        "answer": true
      },
      {
        "option_text": "3. Dare «ordine» alle parti e ai loro compiti; creando un assetto organizzativo stabile, ancorché modificabile",
        "answer": true
      },
      {
        "option_text": "4. Definire «regole» e «pro cedure» di comportamento delle parti e dei partecipanti",
        "answer": true
      },
      {
        "option_text": "5. Definire «regole» e «procedure» di comportamento dei fornitori e dei “competitors” 6. Progettare il modello, ovvero la configurazione, dell’assetto organizzativo che è rappresentato dall’organigramma",
        "answer": false
      },
      {
        "option_text": "dell’impresa 17 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 132,
    "code": "M4.1.1.11",
    "question": "L’Organigramma 1. Rappresenta i dipendenti e le posizioni attraverso caselle o altre forme su vari livelli, linee dritte o a gomito collegano",
    "options": [
      {
        "option_text": "insieme tali livelli",
        "answer": true
      },
      {
        "option_text": "2. Riproduce parzialmente la struttura interna di un'organizzazione o un’azienda 3. È una rappresentazione visiva della gerarchia e dei ranghi delle persone, delle aree funzionali o dei raggruppamenti che",
        "answer": false
      },
      {
        "option_text": "compongono l'organizzazione",
        "answer": true
      },
      {
        "option_text": "4. Può rappresentare strutture organizzative Iper-dimensionali",
        "answer": false
      },
      {
        "option_text": "5. Può rappresentare strutture organizzative per Area Geografica",
        "answer": true
      },
      {
        "option_text": "6. Può rappresentare strutture organizzative Divisionali 18 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 133,
    "code": "M4.1.1.13",
    "question": "La Struttura Organizzativa Divisionale 1. È la soluzione organizzativa dove tutte le attività (produzione, marketing, finanza, ecc.) vengono raggruppate in una unica",
    "options": [
      {
        "option_text": "divisione aziendale 2. È la soluzione organizzativa dove tutte le attività (p roduzione, marketing, finanza, ecc.) inerenti a un prodotto o servizio",
        "answer": false
      },
      {
        "option_text": "vengono raggruppate in una divisione",
        "answer": true
      },
      {
        "option_text": "3. È la soluzione organizzativa dove ogni divisione corrisponde ad una unità organizzativa",
        "answer": true
      },
      {
        "option_text": "4. Facilita la realizzazione della strategia di diver sificazione produttiva 5. Permette la concentrazione delle attività relative ad uno specifico prodotto o servizio permettendo una maggiore flessibilità",
        "answer": true
      },
      {
        "option_text": "delle operazioni 6. Permette un migliore coordinamento delle attività della divisione ma rende più c omplessa la misurazione delle",
        "answer": true
      },
      {
        "option_text": "performance di ciascuna divisione rispetto alle altre 19 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "code": "M4.1.1.19",
    "question": "La Struttura organizzativa Divisionale per Area Geografica",
    "options": [
      {
        "option_text": "Definisce ogni divisione corrispondente ad una unità organizzativa (facente parte di un gruppo) con responsabilità su uno specifico territorio.",
        "answer": true
      },
      {
        "option_text": "Identifica, tra i vantaggi, una minore autonomia decisionale decentrata",
        "answer": false
      },
      {
        "option_text": "Identifica, tra i vantaggi, la possibilità di adattare il prodotto/servizio alle specificità locali e interpretare rapidamente i cambiamenti nei gusti dei consumatori",
        "answer": true
      },
      {
        "option_text": "Identifica, tra i vantaggi, la riduzione dei costi di trasporto e la maggiore efficienza nella distribuzione",
        "answer": true
      },
      {
        "option_text": "Può facilitare la comunicazione tra le unità operative (ad esempio commerciali e della supply chain) nella specifica area",
        "answer": true
      },
      {
        "option_text": "Permette di evitare i conflitti tra lo staff dell'amministrazione centrale e lo staff della divisione d'area",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 134
  },
  {
    "id": 135,
    "code": "M4.1.2.1",
    "question": "Il modello Weil Broadbent per l’allineamento tra reparto IT e il Business: 1. Illustra come il Piano Strategico Aziendale può influenzare la Strategia ICT che ne rimane completamente indipendente Falso",
    "options": [
      {
        "option_text": "2. Illustra come il Piano Strategico Aziendale guidi la Strategia ICT per un vantaggio competitivo",
        "answer": true
      },
      {
        "option_text": "3. Delinea come la Strategia ICT allinei il Portfolio IT",
        "answer": true
      },
      {
        "option_text": "4. Delinea come il Portfolio IT allinei la Strategia ICT 5. Delinea come i v incoli (normativi, concorrenza, tecnologia, ecc.) influenzino il Piano Strategico e il Portfolio IT  Vero  V V V F V V F V V V F V V F V F V V F V V V V F V F V V V F  5",
        "answer": false
      },
      {
        "option_text": "T1 – 8 Luglio 2022  6. Delinea come il Portfolio IT abiliti e informi il piano strategico aziendale 21 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 136,
    "code": "M4.1.3.2",
    "question": "Indicare con vero quali dei seguenti sono compiti del CIO (Chief Information Officer) 1. Contribuire all’analisi e alla definizione dei processi aziendali, raccogliendo e razionalizzando le esigenze dei vari compar ti Vero",
    "options": [
      {
        "option_text": "2. Definire, insieme alla di rezione, gli obiettivi aziendali ed il contributo dell’informatica per il loro raggiungimento",
        "answer": true
      },
      {
        "option_text": "3. Definire il Safety Plan (SP) per l’azienda",
        "answer": false
      },
      {
        "option_text": "4. Definire e gestire il budget destinato ai Sistemi Informativi e coordinare il reparto IT",
        "answer": true
      },
      {
        "option_text": "5. Avere competen ze sulla tecnologia anche se non approfondite 6. Partecipare alla definizione dei requisiti funzionali e architetturali degli strumenti informativi da introdurre in azienda Vero 22 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 137,
    "code": "M4.1.3.4",
    "question": "Indicare con vero quali dei seguenti sono compiti del CISO (Chief Information Security Officer) 1. Realizzare assessment della sicurezza: per valutare lo stato dell’arte della sicurezza in azienda e individuare un piano",
    "options": [
      {
        "option_text": "strategico per aumentare la  capacità di reagire alle cyber minacce",
        "answer": true
      },
      {
        "option_text": "2. La definizione delle policy  di sicurezza : definire regole e standard per la gestione della sicurezza",
        "answer": true
      },
      {
        "option_text": "3. La definizione delle policy e degli standard  informatici : per le architetture tecnologiche di rete e di s istema 4. L’analisi del rischio cyber: comprendere le vulnerabilità e le minacce per l’azienda per compiere scelte adeguate alla",
        "answer": false
      },
      {
        "option_text": "gestione del rischio cyber in termini di politiche e strumenti 5. La definizione delle architetture  di sicurezza : disegnar e l’architettura per la gestione della sicurezza e monitoraggio delle",
        "answer": true
      },
      {
        "option_text": "scelte strutturali 6. Condurre ricerche ed eseguire soluzioni di gestione della Sicurezza (Safety) per aiutare a mantenere al sicuro le persone Falso 23 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 138,
    "code": "M4.1.3.6",
    "question": "Il DPO (Data Protection Officer) secondo il GDPR 1. È responsabile del monitoraggio della conformità dell’organizzazione per la quale lavora e svolge il ruolo di punto di",
    "options": [
      {
        "option_text": "contatto tra gli interessati e l’autorità di controllo competente",
        "answer": true
      },
      {
        "option_text": "2. Inform a e consiglia l’organizzazione ed i suoi dipendenti circa gli obblighi di protezione dei dati ai sensi del GDPR 3. Monitora la conformità dell’organizzazione al Regolamento ed alle policy e procedure interne in materia di protezione dei",
        "answer": true
      },
      {
        "option_text": "dati",
        "answer": true
      },
      {
        "option_text": "4. Deve es sere obbligatoriamente nominato, sia per le aziende pubbliche che per quelle private 5. Funge da punto di contatto per l’autorità di controllo per tutte le questioni inerenti alla protezione dei dati, come la",
        "answer": false
      },
      {
        "option_text": "segnalazione di violazioni dei dati",
        "answer": true
      },
      {
        "option_text": "6. Deve essere obbligatoriamente un dipendente dell’organizzazione 24 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 139,
    "code": "M4.1.5.2",
    "question": "Il Security Analyst 1. Previene, rileva e gestisce le minacce informatiche, nell’ottica di proteggere computer, dati, reti e programmi delle aziende Vero",
    "options": [
      {
        "option_text": "2. Conosce le tecniche crittografiche",
        "answer": true
      },
      {
        "option_text": "3. Conosce i protocolli di comunicazione",
        "answer": true
      },
      {
        "option_text": "4. Conosce i sistemi di autenticazione e controllo",
        "answer": true
      },
      {
        "option_text": "5. Non si occupa degli aspetti giuridici e delle normative internazionali (in carico al DPO)",
        "answer": false
      },
      {
        "option_text": "6. Si appoggia a consulenti esterni per quel che riguarda l’Intrusion Detection 25 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 140,
    "code": "M4.1.5.4",
    "question": "L’Informatico Forense 1. È un tecnico coinvolto nella raccolta di dati circa l’utilizzo di sistemi, reti e applicazioni e analisi degli stessi in rela zione ad",
    "options": [
      {
        "option_text": "incidenti di cybersecurity",
        "answer": true
      },
      {
        "option_text": "2. Si appoggia sempre alla polizia per le indagini",
        "answer": false
      },
      {
        "option_text": "3. Si occupa anche di redigere una docu mentazione idonea alla presentazione in sede processuale 4. È conosciuto formalmente anche come “Analista forense”  Vero   F V V F V V V V F V F V V V F V V F V V V F V F V V V V F F  6",
        "answer": true
      },
      {
        "option_text": "T1 – 8 Luglio 2022  5. È conosciuto formalmente anche come “Analista processuale”",
        "answer": false
      },
      {
        "option_text": "6. Ha competenze IT e degli strumenti software per le indagini forensi 26 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 141,
    "code": "M4.2.2.2",
    "question": "Quali di questi elementi fanno parte di un buon piano operativo per diffondere la sicurezza informatica  (indicare con vero)",
    "options": [
      {
        "option_text": "1. Definire gli obiettivi di sicurezza",
        "answer": true
      },
      {
        "option_text": "2. Realizzare attacchi di Phishing simulati",
        "answer": true
      },
      {
        "option_text": "3. Predisporre corsi di formazione e test di valutazione",
        "answer": true
      },
      {
        "option_text": "4. Pianificare accuratamente attività a lungo termine",
        "answer": false
      },
      {
        "option_text": "5. Coinvolgere solo chi è coinvolto direttamente con incarichi critici",
        "answer": false
      },
      {
        "option_text": "6. Prepararsi adeguatamente in caso di errori umani 27 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 142,
    "code": "M4.2.3.2",
    "question": "Outsourcing 1. È una strategia aziendale in base alla quale un progetto, parte di esso o in generale un’attività o un servizio viene trasfer ita",
    "options": [
      {
        "option_text": "a un'azienda esterna",
        "answer": true
      },
      {
        "option_text": "2. Si realizza per concentrarsi meglio sugli aspetti centrali del business",
        "answer": true
      },
      {
        "option_text": "3. Si realizza per concentrarsi meglio sugli aspetti centrali della cyber security",
        "answer": false
      },
      {
        "option_text": "4. Può migliorare l'efficienza e la produttività",
        "answer": true
      },
      {
        "option_text": "5. Può provocare perdita di controllo su conoscenze specifiche (know How) e generare rischi di tipo organizzativo 6. Può generare rischi di tipo organizzativo ma non la perdita di controllo su conoscenze specifiche (know How) Falso 28 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 143,
    "code": "M4.2.3.4",
    "question": "Esternalizzare l’infrastruttura IT (CED)",
    "options": [
      {
        "option_text": "1. Può essere necessario per contenere i costi dell’infrastruttura informatica al crescere dell’azienda 2. Il costo del servizio può diventare molto oneroso se non sono dimensionati correttamente i requisiti (funzioni, latenza e",
        "answer": true
      },
      {
        "option_text": "disponibilità)",
        "answer": true
      },
      {
        "option_text": "3. Non porta mai a sorprese in relazione al livello, la qualità e la modalità di erogazione del servizio 4. Può es sere problematico se non è correttamente definito il contratto, quello che non è chiaramente scritto non si ritrova",
        "answer": false
      },
      {
        "option_text": "quando è necessario",
        "answer": true
      },
      {
        "option_text": "5. È sempre sinonimo di messa in sicurezza del dato anche in relazione alla sua proprietà, mai nessun leak",
        "answer": false
      },
      {
        "option_text": "6. Può p ortare a difficoltà di coordinazione tra le attività interne ed estern alizzate 29 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 144,
    "code": "M4.2.3.6",
    "question": "Esternalizzare i servizi informatici in Cloud",
    "options": [
      {
        "option_text": "1. Può essere una soluzione per focalizzare le risorse del CED sui servizi principali e critici per l’azienda",
        "answer": true
      },
      {
        "option_text": "2. Riduce l’onere di elaborazione in carico al CED aziendale",
        "answer": true
      },
      {
        "option_text": "3. Di solito richiede un’implementazione più lunga rispetto alle soluzioni on -premise (in loco)",
        "answer": false
      },
      {
        "option_text": "4. Ha sempre un costo del servizio molto basso e competitivo",
        "answer": false
      },
      {
        "option_text": "5. Necessità di connessione ad Internet sempre attiva, con tutto quello che ne consegue",
        "answer": true
      },
      {
        "option_text": "6. Necessità un’architettura di sicurezza più complessa (es. cloud to cloud) 30 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 145,
    "code": "M4.2.3.8",
    "question": "La servitizzazione PaaS prevede",
    "options": [
      {
        "option_text": "1. Networking gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "2. Storage gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "3. Server gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "4. Virtualizzazione gestit a internamente",
        "answer": false
      },
      {
        "option_text": "5. Sistema Operativo gestito internamente",
        "answer": false
      },
      {
        "option_text": "6. Applicazione gestita internamente V F V V F V V V V F F V V V F V V F V V F V F V V V F F V V V V V F F V  7 T1 – 8 Luglio 2022 Esercizio 1 Un’azienda ha realizzato la topologia di rete  indicat a nello schema, determinare  la tipologia degl i apparati di rete e dei presidi di protezione , per ciascun punto da A ad N, considerando  gli standard ISO/IEC 27001 e ISA/IEC 62443 . Esercizio 2 È necessario partizionare  la rete 1 85.152.20.0 in 4 sottoreti così costituite: • Sottorete A: 30 Host • Sottorete B: 58 Host • Sottorete C: 20 Host • Sottorete D: 22 Host Compilare la tabella seguente con i dati richiesti: Sottorete  Indirizzo  di sottorete  Numero  Totale  Host Disponibili A 185.152.20.0/ 27 30 (Utilizzati 30) B 185.152.20.32/26  62 (Utilizzati 58) C 185.152.20.96/ 27 30 (Utilizzati 20) D 185.152.20. 128/27  30 (Utilizzati 22) A=Router  G=Switch B=VPN  H=Firewall C=Firewall  I=Switch D=IPS (Intrusion Prevention S ystem)  L=Firewall E=Switch  M=Switch F=Firewall  N=Switch  1 T2 – 8 Luglio 2022  Corso Aspetti Gestional i e Organizzativi della Cyber Security Appello 20 giugno 2022 Indicare vero [V] o falso [F] alle seguenti affermazioni : 1 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 146,
    "code": "M1.3.1.12.1",
    "question": "L’incapsulamento ISO/OSI",
    "options": [
      {
        "option_text": "1. Introduce un “Header” con le stesse informazioni per ogni livello ISO/OSI",
        "answer": false
      },
      {
        "option_text": "2. Introduce un “Trailer” (ovvero una ”coda” aggiunta al pacchetto) specifica per ogni livello ISO/OSI",
        "answer": false
      },
      {
        "option_text": "3. Introduce un “Header ” (ovvero un’”intestazione” iniziale aggiunta al pacchetto) specifica per ogni livello ISO/OSI",
        "answer": true
      },
      {
        "option_text": "4. Introduce un “Header” per ogni livello e un “Trailer” ( una “coda ” informativa aggiunta al pacchetto) solo a livello 2",
        "answer": true
      },
      {
        "option_text": "5. Il “Trailer” di livello 2 è util izzato per il controllo degli errori",
        "answer": true
      },
      {
        "option_text": "6. L’Header introduce le informazioni e i riferimenti necessari a ciascuno dei livelli ISO/OSI 2 -",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 147,
    "code": "M1.3.2.9.1",
    "question": "Nella comunicazione con il protocollo Ethernet in caso di avvenuta collisione: 1. La stazione trasmittente sospende la trasmissione e trasmette una sequenza composta dalla parte di pacchetto già",
    "options": [
      {
        "option_text": "trasmessa e un codice identificativo in coda al pacchetto",
        "answer": true
      },
      {
        "option_text": "2. La stazione trasmittente sospende la trasmissione e trasmette una se quenza denominata “jamming” 3. La stazione trasmittente sospende la trasmissione e trasmette e un codice identificativo in testa e la parte di pacchetto già",
        "answer": true
      },
      {
        "option_text": "trasmessa in coda al pacchetto",
        "answer": false
      },
      {
        "option_text": "4. La stazione trasmittente interrompe le trasmissioni e attend e sino a quando un nodo in rete inizia a ritrasmettere 5. La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione dopo un tempo",
        "answer": false
      },
      {
        "option_text": "pseudocasuale 6. La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione dopo un tempo",
        "answer": true
      },
      {
        "option_text": "prefissato 3 -",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 148,
    "code": "M2.1.2.2.1",
    "question": "Il Soggetto Giuridico",
    "options": [
      {
        "option_text": "1. È il soggetto giuridicamente responsabile dell'attività svolta 2. È la persona alla quale sono riferiti i diritti e gli obblighi che nascono dalla costituzione dell’azienda e dal suo esercizio Vero",
        "answer": true
      },
      {
        "option_text": "3. È la persona che investe nel capitale privato dell’azienda",
        "answer": false
      },
      {
        "option_text": "4. Può essere una Persona Giuridica ovvero un ente, un’azienda o una società",
        "answer": true
      },
      {
        "option_text": "5. Può essere indifferentemente la Persona Fisic a o Giuridica, entrambe hanno capacità giuridica",
        "answer": true
      },
      {
        "option_text": "6. Può essere solo una Persona Fisica nel cui nome l’attività aziendale è esercitata 5 -",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 149,
    "code": "M3.2.1.3.1",
    "question": "Quale di queste aree non è un requisito di un ISMS ISO 27001",
    "options": [
      {
        "option_text": "1. Leadership",
        "answer": true
      },
      {
        "option_text": "2. Pianificazione 3. Attività Operative  Vero  Nome Cognome Matricola F F V V V V V V F F V F V F V F V V V V F V V F  2",
        "answer": true
      },
      {
        "option_text": "T2 – 8 Luglio 2022  4. Disaster Recovery",
        "answer": false
      },
      {
        "option_text": "5. Supporto",
        "answer": true
      },
      {
        "option_text": "6. Data Entry 6 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 150,
    "code": "M3.2.1.10",
    "question": "Il ciclo PDCA",
    "options": [
      {
        "option_text": "1. È il ciclo Plan Do Check Act detto anche ciclo di Deming o ciclo di  Shewhart",
        "answer": true
      },
      {
        "option_text": "2. È il ciclo Process Do Control Alert detto anche ciclo di Deming o ciclo di  Shewhart",
        "answer": false
      },
      {
        "option_text": "3. È un approccio al miglioramento continuo dei processi aziendali 4. È esplicitamente indicato in ambito ISO 27000 per rappresentare il meccanismo ciclico di monitora ggio e miglioramento",
        "answer": true
      },
      {
        "option_text": "del sistema di gestione",
        "answer": true
      },
      {
        "option_text": "5. È esplicitamente indicato in ambito ISO 27000 per monitorare i cicli di manutenzione programmata dei sistemi",
        "answer": false
      },
      {
        "option_text": "6. Non è esplicitamente indicato in ambito ISO 27000 ma tutto lo standard è ispirato ad esso 7 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 151,
    "code": "M3.3.3.1.1",
    "question": "La Brand Reputation",
    "options": [
      {
        "option_text": "1. Si riferisce al modo in cui il brand o il marchio viene valutato da parte del pubblico",
        "answer": true
      },
      {
        "option_text": "2. È detta anche Brand Image ovvero la reale percezione del marchio da parte del pubblico 3. Deve essere differenziata dalla Brand Image che risulta costruita dall’azienda in maniera strategica e può non corrispondere",
        "answer": false
      },
      {
        "option_text": "alla reale percezione del pubblico",
        "answer": true
      },
      {
        "option_text": "4. Può essere migliorata migliorando i contenuti pubblicati e con buone recensioni on -line",
        "answer": true
      },
      {
        "option_text": "5. Impatta direttamente l’immagine dell’azienda proprietaria del marchio",
        "answer": false
      },
      {
        "option_text": "6. Può non impattare direttamente l’immagine dell’azienda proprietaria del marchio 9 -",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 152,
    "code": "M3.4.5.1.1",
    "question": "Il SIEM",
    "options": [
      {
        "option_text": "1. E’ l’acronimo  di Security Impact and Event Management)",
        "answer": false
      },
      {
        "option_text": "2. E’ l’acronimo di Security Integrated and Evaluation Management) 3. È una soluzione software che, in tempo reale, provvede al monitoraggio e alla gestione degli eventi e delle informazioni che",
        "answer": false
      },
      {
        "option_text": "accadono all’ interno della rete e sui vari sistemi di sicurezza fornendo una correlazione e aggregazione tra essi 4. È una soluzione software offline che provvede alla visualizzazione e alla gestione degli eventi e delle informazioni che",
        "answer": true
      },
      {
        "option_text": "accadono all’interno della re te e sui vari sistemi di sicurezza fornendo una correlazione e aggregazione tra essi 5. Include le funzionalità offerte dai SIM (security information management) a quelle dei SEM (security event management) Vero 6. Ha come interfaccia una console centraliz zata, preposta ad attività di monitoraggio, segnalazione e risposta automatica a",
        "answer": false
      },
      {
        "option_text": "determinati eventi 10 -",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 153,
    "code": "M3.4.5.3",
    "question": "VPN",
    "options": [
      {
        "option_text": "1. È l’acronimo di Virtual Private Network",
        "answer": true
      },
      {
        "option_text": "2. È l’acronimo di Verified Private Network 3. È una tecnologia che si realizza attraverso un canale di comunicazione criptato (o tunnel VPN)  Vero  V V V F V F V F V V F F V F F V F V V F V V F V F F V F V V  3",
        "answer": false
      },
      {
        "option_text": "T2 – 8 Luglio 2022  4. Consente di creare una rete privata virtuale",
        "answer": true
      },
      {
        "option_text": "5. Per il suo funzionamento p uò usare i protocolli IPSec (Internet Protocol Security)",
        "answer": true
      },
      {
        "option_text": "6. Per il suo funzionamento p uò usare i protocolli Modbus 11 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 154,
    "code": "M3.4.5.5",
    "question": "Gli Instrusion Detection/Prevention",
    "options": [
      {
        "option_text": "1. Sono sistemi che si integrano con i Firewall per offrire una protezione più completa",
        "answer": true
      },
      {
        "option_text": "2. Sono sistemi che non si integrano con i Firewall ma che offrono lo stesso una protezione completa 3. Vengono posizionati “a valle” del firewall (rispetto alla connessione Internet) ed analizzano i pacchetti di dati ed i",
        "answer": false
      },
      {
        "option_text": "comportamenti da loro generati 4. Vengono posizionali “a monte” del fir ewall (rispetto alla connessione Internet) ed analizzano i pacchetti di dati ed i",
        "answer": true
      },
      {
        "option_text": "comportamenti da loro generati",
        "answer": false
      },
      {
        "option_text": "5. Per la rilevazione delle minacce possono usare la metodologia del “Misuse Detection”",
        "answer": true
      },
      {
        "option_text": "6. Per la rilevazione delle minacce possono usare la metodologia del “Deny Anomaly” 12 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 155,
    "code": "M4.1.1.4",
    "question": "Perché organizzare l’azienda?",
    "options": [
      {
        "option_text": "1. Per pianificare, aumentare la produttività e di conseguenza fatturato e crescita",
        "answer": true
      },
      {
        "option_text": "2. Per sviluppare solo la parte dell’azienda più profittevole 3. Per sincronizzare processi e sistemi costituiti da una parte sociale (risorse umane) e una parte tecnica (risorse economiche",
        "answer": false
      },
      {
        "option_text": "a supporto)",
        "answer": true
      },
      {
        "option_text": "4. Per aumentare il valore del prodotto o servizio che l’azienda offre ai propri clienti",
        "answer": true
      },
      {
        "option_text": "5. Per moderare la performance quando i costi superano i ricavi 6. Per evitare problematiche dovute alla mancata collabo razione, integrazione o coordinamento di dipartimenti e risorse Vero 14 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 156,
    "code": "M4.1.1.8",
    "question": "Il Controllo di Gestione 1. È il meccanismo operativo  volto a guidare il management  verso il conseguimento degli obiettivi stabiliti in sede",
    "options": [
      {
        "option_text": "di pianificazione operativa",
        "answer": true
      },
      {
        "option_text": "2. Si utilizza unicamente nelle aziende pubbliche 3. Rileva, attraverso la misurazione di appositi indicatori, lo scostamento tra obiettivi pianificati e risultati conseguiti e",
        "answer": false
      },
      {
        "option_text": "informando di tali scostamenti gli organi responsabili 4. Rileva, grazie alle fluttuazioni  della pianificazione operativa, gli elementi di scostamento con gli obiettivi ipotizzati  Falso  V F V V V F V F V F V F V V V V F V V F V V F V V V V F F V  4",
        "answer": true
      },
      {
        "option_text": "T2 – 8 Luglio 2022  5. Permette che gli organi responsabili possano decidere e attuare le a zioni correttive ove necessario",
        "answer": true
      },
      {
        "option_text": "6. Può essere utilizzato nelle aziende pubbliche e nelle aziende private 16 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 157,
    "code": "M4.1.1.10",
    "question": "L’Organigramma",
    "options": [
      {
        "option_text": "1. Riproduce la struttura interna di un'organizzazione o un’azienda 2. Rappresenta i dipendenti e le posizioni attraverso caselle o altre forme su vari livelli, linee dritte o a gomito collegano",
        "answer": true
      },
      {
        "option_text": "insieme tali livelli 3. È una rappresentazione parziale della gerarchia e dei ranghi delle persone, delle aree funzionali o dei raggruppamenti c he",
        "answer": true
      },
      {
        "option_text": "compongono l'organizzazione",
        "answer": false
      },
      {
        "option_text": "4. Può rappresentare strutture organizzative Funzionali",
        "answer": true
      },
      {
        "option_text": "5. Può rappresentare strutture organizzative Vettoriali",
        "answer": false
      },
      {
        "option_text": "6. Può rappresentare strutture organizzative Matriciali 17 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 158,
    "code": "M4.1.1.12",
    "question": "La Struttura Organizzativa Funzionale 1. È la soluzione organizzativa dove le attività sono divise per “specialità”, ovvero le operazioni della medesima natura sono",
    "options": [
      {
        "option_text": "raggruppate tra loro 2. È la soluzione organizzativa dove le attività sono divise per “specialità”, ovvero le operazioni della medesima natura sono",
        "answer": true
      },
      {
        "option_text": "raggruppate per area geografica 3. Ha come vantaggio l’incremento dell’efficienza della direzione poiché i manager possono concentrare la loro attività in un",
        "answer": false
      },
      {
        "option_text": "solo settore di attività 4. Ha come svantaggio il minore coordinamento all’interno della funzione a causa dell’assegnazione del potere decisionale ad",
        "answer": true
      },
      {
        "option_text": "un solo general manager per tutte le funzioni",
        "answer": false
      },
      {
        "option_text": "5. Ha come vantaggio la moltiplicazione dei livelli gerarchici, rendendo più semplice il  coordinamento tra le funzioni 6. Ha come rischio l’eccessiva focalizzazione da parte del manager sulla propria funzione, dandole eccessiva rilevanza rispetto",
        "answer": false
      },
      {
        "option_text": "alle altre attività aziendali 18 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 159,
    "code": "M4.1.1.14",
    "question": "La Struttura Organizzativa Divisionale 1. È la soluzione organizzativa dove tutte le attività (produzione, marketing, finanza, ecc.) inerenti a un prodotto o servizio",
    "options": [
      {
        "option_text": "vengono raggruppate in una divisione",
        "answer": true
      },
      {
        "option_text": "2. È la soluzione organizzativa dove ogni divisione corrisponde ad  una unità organizzativa 3. È la soluzione organizzativa dove tutte le attività (produzione, marketing, finanza, ecc.) vengono raggruppate in una unica",
        "answer": true
      },
      {
        "option_text": "divisione aziendale",
        "answer": false
      },
      {
        "option_text": "4. La struttura non facilita la realizzazione della strategia di diversificazione produttiva",
        "answer": false
      },
      {
        "option_text": "5. Ha come svantaggio il rischio di eccessiva focalizzazione da parte del manager per la propria divisione",
        "answer": true
      },
      {
        "option_text": "6. Può generare possibili conflitti tra staff dell’amministrazione generale e staff di divisione 19 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 160,
    "code": "M4.1.1.16",
    "question": "La Struttura Organizzativa a Matrice",
    "options": [
      {
        "option_text": "1. Presenta responsabili distinti per funzioni e per prodotti / progetti 2. Presenta un manager di funzione per l’allocazione delle risorse a ciascun progetto (finanziamenti, impianti, ecc.) e un",
        "answer": true
      },
      {
        "option_text": "manager con la responsabilità della conduzione e dei risultati dei singoli prodotti/progetti",
        "answer": true
      },
      {
        "option_text": "3. Presenta una minore chiarezza dei ruoli nel processo decisionale rispetto alle altre strutture",
        "answer": false
      },
      {
        "option_text": "4. Presenta una maggiore efficienza e velocità nella comunic azione e nelle decisioni 5. Presenta m aggiori possibilità di conflitti (alle intersezioni delle linee) poiché esistono due manager allo stesso livello con",
        "answer": true
      },
      {
        "option_text": "lo stesso grado di autorità 6. Permette una maggiore acquisizione di “potere” da parte di chi riesce a risolvere i conflitti, pur non ric oprendo il ruolo di",
        "answer": true
      },
      {
        "option_text": "responsabile 20 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 161,
    "code": "M4.1.3.1",
    "question": "La figura del CISO (Chief Information Security Officer)  V F V F V V V V F V F V V F V F F V V V F F V V V V F V V V  5",
    "options": [
      {
        "option_text": "T2 – 8 Luglio 2022  1. Ha responsabilità diretta sulla sicurezza fisica delle persone",
        "answer": false
      },
      {
        "option_text": "2. Ha responsabilità diretta sulla Cyber Security di reti e sistemi",
        "answer": true
      },
      {
        "option_text": "3. Ha maggiore focalizzazione sulla tecnologia del DPO (Data Protection Officer)",
        "answer": true
      },
      {
        "option_text": "4. Ha minore focalizzazione sulla tecnologia del DPO (Data Protection Officer)",
        "answer": false
      },
      {
        "option_text": "5. Ha sempre una forte focalizzazione sulla protezione dei dati e delle informazi oni",
        "answer": true
      },
      {
        "option_text": "6. Ha una maggiore focalizzazione sugli aspetti legali rispetto al DPO (Data Protection Officer) 21 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 162,
    "code": "M4.1.3.3",
    "question": "Indicare con vero quali dei seguenti sono compiti del CIO (Chief Information Officer)",
    "options": [
      {
        "option_text": "1. Contribuire alla gestione del cambiamento in seguito all’introduzione di nuovi strumenti informativi",
        "answer": true
      },
      {
        "option_text": "2. Contribuire alla gestione del cambiamento proponendo l’introduzione di nuovi macchinari o tecnologie produttive",
        "answer": false
      },
      {
        "option_text": "3. Partecipare alla definizione della Business Impac t Analysis (BIA)",
        "answer": true
      },
      {
        "option_text": "4. Definire KPI e SLA per la valutazione sia dell’efficienza interna, sia di quella dei fornitori di software e servizi 5. Progettare e gestire il funzionamento quotidiano dei sistemi informativi, ottimizzando le risorse interne e i co ntratti con i",
        "answer": true
      },
      {
        "option_text": "fornitori esterni",
        "answer": true
      },
      {
        "option_text": "6. Gestire e organizzare il flusso delle informazioni agevolando l’uso della tecnologia 22 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 163,
    "code": "M4.1.3.5",
    "question": "Indicare con vero quali dei seguenti sono compiti del CISO (Chief  Information Security Officer) 1. Il monitoraggio della sicurezza: controllare il traffico sui diversi canali sviluppando un Security Operation  Center (SOC)",
    "options": [
      {
        "option_text": "interno all’azienda o collaborando con un provider esterno 2. La risposta agli incidenti: rispondere in tempi brevi in caso di data breach o, in generale incidenti, per limitarne gli effe tti Vero",
        "answer": true
      },
      {
        "option_text": "3. Progettare e gestire il funzionamento quotid iano dei sistemi informativi",
        "answer": false
      },
      {
        "option_text": "4. L’identificazione delle minacce: essere aggiornati sulle tipologie di minacce e di attacco 5. L’investigazione forense: condurre indagini forensi in caso di incidenti, collaborando con risorse interne o specialisti",
        "answer": true
      },
      {
        "option_text": "este rni 6. Assicurarsi che l’azienda sia conforme alle normative locali, nazionali e globali, in particolare in aree come la salute e la",
        "answer": true
      },
      {
        "option_text": "sicurezza 23 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 164,
    "code": "M4.1.5.1",
    "question": "Il Security Auditor 1. È lo specialista che ispeziona/valuta l'efficacia delle soluzioni tecniche adottate per garantire la sicurezza di un sistema",
    "options": [
      {
        "option_text": "informativo",
        "answer": true
      },
      {
        "option_text": "2. Può lavorare in un gruppo di auditing interno all’azienda o può essere un consulente esterno",
        "answer": true
      },
      {
        "option_text": "3. Lavora solamente come dipendente in gruppi di auditing  interni all’azienda",
        "answer": false
      },
      {
        "option_text": "4. Fa uso dei principali  linguaggi di programmazione",
        "answer": true
      },
      {
        "option_text": "5. Ha un’approfondita conoscenza dei  software di sicurezza",
        "answer": true
      },
      {
        "option_text": "6. Ha dimestichezza in ambito  data mining 24 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 165,
    "code": "M4.1.5.3",
    "question": "L’Ethical Hacker",
    "options": [
      {
        "option_text": "1. È un esperto di sicurezza informatica capace di simulare, anticipare e prevenire attacchi informatici",
        "answer": true
      },
      {
        "option_text": "2. L’Ethical Hacker simula attacchi al sistema informatico dell’azienda di riferimento al fine di individuare eventuali falle",
        "answer": true
      },
      {
        "option_text": "3. È sempre un dipendente dell’azienda o dell’organizzazione che ne richiede il servizio",
        "answer": false
      },
      {
        "option_text": "4. Fa uso dei principali  linguaggi di programmazione",
        "answer": true
      },
      {
        "option_text": "5. Ha conoscenza delle tecniche di Vulnerability Assessment",
        "answer": true
      },
      {
        "option_text": "6. Conosce tools e framework per la simulazione del processo industriale 25 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 166,
    "code": "M4.2.2.1",
    "question": "Il Security Awareness",
    "options": [
      {
        "option_text": "1. Indica la consapevolezza del personale in relazione alla Cyber Security 2. Indica la consapevolezza del personale in relazione alla sicurezza fisica (Safety) e logica Falso  F V V F V F V F V V V V V V F V V F V V F V V V V V F V V F  6 T2 – 8 Luglio 2022  3. Può essere migliorato attraverso la formazione e sensibilizzazione continua dei dipendenti per renderli consapevoli delle",
        "answer": true
      },
      {
        "option_text": "minacce cyber 4. Può essere migliorato cercando di ridurre l’incidenza degli errori umani e i costi legati a un eventuale danno",
        "answer": true
      },
      {
        "option_text": "repu tazionale 5. Può essere migliorato attraverso l’educazione dei fornitori e dei clienti in merito alle policy e procedure già definite",
        "answer": true
      },
      {
        "option_text": "dall’organizzazione ma che non vengono rispettate adeguatamente 6. Può essere migliorato attraverso l’innalzamento del  livello di sicurezza e di notifica dei dispositivi informatici in dotazione Vero 26 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 167,
    "code": "M4.2.3.1",
    "question": "Insourcing 1. Vuole dire svolgere un progetto, parte di esso o in generale un’attività o un servizio all'interno dell'azienda stessa, sia e ssa",
    "options": [
      {
        "option_text": "una sussidiaria o una consociata",
        "answer": true
      },
      {
        "option_text": "2. Può voler dire portare o riportare un’attività, normalmente svolta all’esterno, internamente all’azienda",
        "answer": true
      },
      {
        "option_text": "3. Si distingue nettamente dall’attività di verticalizzazione 4. Può essere una strategia competitiva nel ca so di progetti o attività strategiche, a forte valore aggiunto che richiedano il",
        "answer": false
      },
      {
        "option_text": "mantenimento (o il trasferimento) del know -how entro il perimetro aziendale 5. Può essere una strategia competitiva nel caso di progetti o attività, a basso valore aggiunto ma rilevanti nelle economie di",
        "answer": true
      },
      {
        "option_text": "scala",
        "answer": false
      },
      {
        "option_text": "6. Deve considerare correttamente i costi relativi alla realizzazione dei nuovi impianti produttivi 27 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 168,
    "code": "M4.2.3.3",
    "question": "Esternalizzazione l’infrastruttura IT (CED)",
    "options": [
      {
        "option_text": "1. Può essere necessario vista crescente complessità dei sistemi informatici",
        "answer": true
      },
      {
        "option_text": "2. Vuole dire una riduzione dei costi a canone",
        "answer": false
      },
      {
        "option_text": "3. Vuole dire eliminare i tempi morti del personale, tutto è gestito contrattualmente a corpo",
        "answer": true
      },
      {
        "option_text": "4. Vuole dire assistenza continua: Il contratto prevede l’assistenza continua che può arrivare a 7 giorni su 7 e 24h su 24",
        "answer": true
      },
      {
        "option_text": "5. Vuole dire scalabilità più semplice ma economicamente più onerosa se gestita con una infrastruttura esternalizzata",
        "answer": false
      },
      {
        "option_text": "6. Vuole dire Disaster Recovery ge stito dal contratto 28 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 169,
    "code": "M4.2.3.7",
    "question": "La servitizzazione IaaS prevede",
    "options": [
      {
        "option_text": "1. Networking gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "2. Storage gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "3. Server s gestit i internamente",
        "answer": false
      },
      {
        "option_text": "4. Virtualizzazione gestit a internamente",
        "answer": false
      },
      {
        "option_text": "5. Sistema Operativo gestito internamente",
        "answer": true
      },
      {
        "option_text": "6. Applicazione gestita internamente 30 -",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 170,
    "code": "M4.2.3.9",
    "question": "La servitizzazione SaaS prevede",
    "options": [
      {
        "option_text": "1. Networking gestito  dal cloud service provider 2. Storage gestito dal cloud service provider  Vero  V F V V F V V V F V F V V F V V F V V V F V V F V V F F V V  7",
        "answer": true
      },
      {
        "option_text": "T2 – 8 Luglio 2022  3. Server s gestit i dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "4. Virtualizzazione gestit a dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "5. Sistema Operativo gestito internamente",
        "answer": false
      },
      {
        "option_text": "6. Applicazione gestito internamente V V V V F F  8 T2 – 8 Luglio 2022 Esercizio 1 Un’azienda ha realizzato la topologia di rete indicata nello schema, determinare la tipologia degli apparati di rete e dei presidi di protezione, per ciascun punto da A ad N, considerando gli standard ISO/IEC 27001 e ISA/IEC 62443. Esercizio  2 È necessario partizionare  la rete 1 63.122.10.0 in 4 sottoreti così costituite: • Sottorete A: 46 Host • Sottorete B: 34 Host • Sottorete C: 24 Host • Sottorete D: 30 Host Compilare la tabella seguente con i dati richiesti: Sottorete  Indirizzo di sottorete  Numero Totale di Host Disponibili A 163.122.10.0/ 26 62 (Utilizzati 46) B 163.122.10.64/ 26 62 (Utilizzati 34) C 163.122.10. 128/27  30 (Utilizzati 24) D 163.122.10. 160/27  30 (Utilizzati 30) A=Switch  G= IPS (Intrusion Prevention S ystem) B=IPS (Intrusion Prevention S ystem)  H=Switch C=Firewall  I= Router D=Router  L= Firewall E=Router  M= IPS (Intrusion Prevention S ystem) F=Firewall  N=Switch  1 T1 – 9 Settembre 2022 Corso Aspetti Gestionali e Organizzativi della Cyber Security Appello 9 Settembre 2022 Indicare vero [V] o falso [F] alle seguenti affermazioni: 1-",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 171,
    "code": "M1.1.3.1",
    "question": "Il Packet Switching 1. È una tecnica di commutazione in cui messaggi consecutivi vengono raggruppati in pacchetti (packets) che vengono trasmessi",
    "options": [
      {
        "option_text": "simultaneamente 2. È una tecnica di commutazione in cui il messaggio viene diviso in parti più piccole (packets) che vengono gestite singolarmente Vero 3. È una tecnica di commutazione in cui i pacchetti viaggiano attraverso la rete, prendendo il percorso più breve possibile",
        "answer": false
      },
      {
        "option_text": "(instradamento) 4. È una tecnica di commutazione in cui tutti i pacchetti vengono suddivisi e trasmessi in maniera indipendente e riassemblati",
        "answer": true
      },
      {
        "option_text": "all'estremità ricevente nell'ordine corretto 5. Prevede che se un messaggio arriva mancante di pacchetti o danneggiato, verrà inviata una notifica per inviare nuovamente il",
        "answer": true
      },
      {
        "option_text": "messaggio, se invece viene raggiunto l'ordine corretto dei pacchetti, verrà inviata notifica di conferma 6. Prevede che se un messaggio arriva mancante di pacchetti o danneggiato il messaggio verrà considerato comunque corretto",
        "answer": true
      },
      {
        "option_text": "perché verrà corretto da un meccanismo di completamento automatico a correzione di errore 4-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 172,
    "code": "M1.1.3.3",
    "question": "Il Routing Statico",
    "options": [
      {
        "option_text": "1. Può essere utilizzato anche quando il numero di dispositivi è elevato",
        "answer": false
      },
      {
        "option_text": "2. Può utilizzare l’algoritmo OSPF (Open Shortest Path First)",
        "answer": false
      },
      {
        "option_text": "3. Può utilizzare l’algoritmo RIP (Routing Information Protocol)",
        "answer": false
      },
      {
        "option_text": "4. Richiede l’intervento umano nella scelta delle rotte, attraverso la configurazione manuale delle rotte",
        "answer": true
      },
      {
        "option_text": "5. È gestito dai routers mediante la collaborazione con gli altri routers attraverso degli speciali protocolli",
        "answer": false
      },
      {
        "option_text": "6. Identifica i path migliori e provvedere di riempire automaticamente le tabelle di routing 5-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 173,
    "code": "M1.1.3.4",
    "question": "Un indirizzo IPv6 ha la dimensione di",
    "options": [
      {
        "option_text": "1. 32 bits, divisi in 4 ottetti binari",
        "answer": false
      },
      {
        "option_text": "2. 32 bits, divisi in 8 gruppi da 4 bits",
        "answer": false
      },
      {
        "option_text": "3. 128 bits, divisi in 8 gruppi da 16 bits 4. 128 bits, divisi in 16 gruppi da 8 bits Falso  Nome Cognome Matricola V F V V F F F V V V F V F V V V V F F F F V F F  2",
        "answer": true
      },
      {
        "option_text": "T1 – 9 Settembre 2022 5. 256 bits, divisi in 32 gruppi da 8 bits",
        "answer": false
      },
      {
        "option_text": "6. 256 bits, divisi in 8 gruppi da 32 bits 6-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 174,
    "code": "M1.1.4.1",
    "question": "L’HyperText Transfer Protocol (HTTP) 1. È un linguaggio di testo che consente la comunicazione tra client e server attraverso internet per recuperare tutte le risorse",
    "options": [
      {
        "option_text": "collegate 2. È un linguaggio compilato che consente la comunicazione tra client e server attraverso internet per recuperare tutte le risorse",
        "answer": true
      },
      {
        "option_text": "collegate 3. Ha come caratteristica peculiare che terminato lo scambio di messaggi la connessione si sgancia, rendendo il protocollo molto",
        "answer": false
      },
      {
        "option_text": "flessibile e dinamico",
        "answer": true
      },
      {
        "option_text": "4. Dispone di 5 comandi: Get, Head, Post, Put, Delete",
        "answer": true
      },
      {
        "option_text": "5. Dispone di 6 comandi: Get, Fetch, Head, Post, Put, Delete",
        "answer": false
      },
      {
        "option_text": "6. Di “default” utilizza la porta 80 per la comunicazione da client a host (server) 8-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 175,
    "code": "M1.1.4.3",
    "question": "L’HyperText Markup Language (HTML)",
    "options": [
      {
        "option_text": "1. È un linguaggio di markup, ovvero che permette di indicare come disporre gli elementi all’interno di una pagina web",
        "answer": true
      },
      {
        "option_text": "2. Fornisce indicazioni sulla disposizione degli elementi attraverso degli appositi marcatori, detti tag 3. Fornisce indicazioni sulla disposizione degli elementi attraverso dei marcatori che hanno la caratteristica di essere inclusi tra",
        "answer": true
      },
      {
        "option_text": "parentesi quadre",
        "answer": false
      },
      {
        "option_text": "4. Non può essere utilizzato liberamente ma bisogna riconoscere determinate royalties al W3C 5. Permettere di disaccoppiare la struttura logica di una pagina web (definita appunto dal markup) e la sua rappresentazione",
        "answer": false
      },
      {
        "option_text": "grafica, una volta che la pagina è caricata dal browser",
        "answer": true
      },
      {
        "option_text": "6. Fornisce le indicazioni attraverso un file binario, di solito, con estensione HTML, spesso detto “Pagina HTML“ 9-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 176,
    "code": "M1.1.4.4",
    "question": "Il World Wide Web (WWW) 1. È un servizio che permette l’accesso a contenuti ipertestuali (leggi documenti in formato ipertesto), e multimediali,",
    "options": [
      {
        "option_text": "sfruttando l'infrastruttura di Internet 2. È un servizio che permette di visualizzare pagine web che hanno contenuti presenti solo sul server che gestisce il servizio Falso",
        "answer": true
      },
      {
        "option_text": "3. È costituito da tre elementi o tecnologie fondamentali: l’URL, l’http e l’html",
        "answer": true
      },
      {
        "option_text": "4. Originariamente prevedeva la visualizzazione di sole pagine ipertestuali statiche 5. L’evoluzione della tecnologia ha permesso di introdurre specifici software e linguaggi che permettono la realizzazione di",
        "answer": true
      },
      {
        "option_text": "effetti dinamici e interattivi",
        "answer": true
      },
      {
        "option_text": "6. Può funzionare anche senza un “Browser” 10-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 177,
    "code": "M1.1.5.1",
    "question": "Il Virus Informatico",
    "options": [
      {
        "option_text": "1. È un frammento di codice eseguibile, anche autonomamente, da un programma ospite",
        "answer": false
      },
      {
        "option_text": "2. Deve appoggiarsi necessariamente ad un altro programma/eseguibile per essere attivato 3. È auto-replicante, ovvero è in grado di creare la copia di sé stesso all'interno di altri file o computer senza il consenso o",
        "answer": true
      },
      {
        "option_text": "l'intervento di un utente",
        "answer": true
      },
      {
        "option_text": "4. Necessita del consenso o dell'intervento di un utente per gestire la duplicazione all’interno di altri file o computer",
        "answer": false
      },
      {
        "option_text": "5. È comparso per la prima volta negli anni 90 6. Può essere considerato un “Worm” Falso F F V F F F V V V V F F V F V V F V V V F F V F V F V V V F  3 T1 – 9 Settembre 2022 11-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 178,
    "code": "M1.1.6.2",
    "question": "Le vulnerabilità informatiche 1. Sono malfunzionamenti, configurazioni sbagliate o semplicemente errori (bugs) presenti in un sistema che lo espongono a dei",
    "options": [
      {
        "option_text": "rischi",
        "answer": true
      },
      {
        "option_text": "2. Rendono un sistema vulnerabile ed esposto a potenziali minacce",
        "answer": true
      },
      {
        "option_text": "3. Sono esclusivamente relative al codice software o firmware embedded in una determinata motherboard",
        "answer": false
      },
      {
        "option_text": "4. Possono presentarsi all’interno del codice stesso, in una configurazione o addirittura nel processo di installazione",
        "answer": true
      },
      {
        "option_text": "5. Sono raggruppabili tre macro-categorie: software, protocolli e hardware",
        "answer": true
      },
      {
        "option_text": "6. Sono raggruppabili tre macro-categorie: software, protocolli e firmware 12-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 179,
    "code": "M1.2.1.4",
    "question": "Il Cyberspazio",
    "options": [
      {
        "option_text": "1. Può essere considerato la quinta dimensione bellica: Terra, mare, cielo, spazio e cyberspazio",
        "answer": true
      },
      {
        "option_text": "2. Può essere considerato la quarta dimensione bellica: Terra, mare, cielo e cyberspazio 3. Può essere il “terreno” per cyber attacchi volti ad ottenere informazioni militari riservate e strategiche (ad esempio di natura",
        "answer": false
      },
      {
        "option_text": "tecnologica)",
        "answer": true
      },
      {
        "option_text": "4. Di non solito non riguarda o non è influenzato da problematiche di carattere geopolitico",
        "answer": false
      },
      {
        "option_text": "5. Può essere il “terreno” per cyber attacchi finalizzati a limitare o ad ostacolare l’accessibilità al web 6. Può essere il “terreno” per cyber attacchi che minacciano l’integrità di programmi ed informazioni mettendo a repentaglio la",
        "answer": true
      },
      {
        "option_text": "vita di diverse persone e di minacciare gli interessi nazionali di un paese 13-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 180,
    "code": "M1.2.2.2",
    "question": "Le organizzazioni Cyber «Criminali» 1. Possono essere tre tipologie di organizzazioni: sovvenzionate da Governi (più o meno «canaglia»), a scopo di Lucro oppure",
    "options": [
      {
        "option_text": "organizzazioni “hacktiviste” 2. Possono essere quattro tipologie di organizzazioni: sovvenzionate da Governi (più o meno «canaglia»), a scopo di Lucro,",
        "answer": true
      },
      {
        "option_text": "“hacktiviste” oppure organizzazioni “ethical”",
        "answer": false
      },
      {
        "option_text": "3. Se sovvenzionate dai governi hanno come obiettivo lo sviluppo e il test di vere e proprie armi di natura cyber 4. A scopo di lucro sono organizzate come vere e proprie organizzazioni mafiose, utilizzano società terze per riciclare il denaro",
        "answer": true
      },
      {
        "option_text": "proveniente dalle attività illecite",
        "answer": true
      },
      {
        "option_text": "5. A scopo di lucro utilizzano criptovalute perché non è possibile tracciare transazioni effettuate 6. Utilizzano massimamente il deep and dark web ma non sembrano esserci “specializzazioni” nei vari stati o aree geografiche Falso 14-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 181,
    "code": "M1.3.1.14",
    "question": "Quali di questi livelli ISO/OSI sono livelli logici legati agli Host",
    "options": [
      {
        "option_text": "1. Livello 2 – Collegamento",
        "answer": false
      },
      {
        "option_text": "2. Livello 3 – Rete",
        "answer": false
      },
      {
        "option_text": "3. Livello 4 – Trasporto",
        "answer": true
      },
      {
        "option_text": "4. Livello 5 – Sessione",
        "answer": true
      },
      {
        "option_text": "5. Livello 6 – Presentazione",
        "answer": true
      },
      {
        "option_text": "6. Livello 7 – Applicazione 17-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 182,
    "code": "M1.3.1.16",
    "question": "Quali delle seguenti funzioni appartengono al livello ISO/OSI di Rete (3)",
    "options": [
      {
        "option_text": "1. Correggere gli errori mediante ritrasmissione",
        "answer": false
      },
      {
        "option_text": "2. Incapsulamento del Pacchetto",
        "answer": true
      },
      {
        "option_text": "3. Gestione Errore e Diagnostica",
        "answer": true
      },
      {
        "option_text": "4. Frammentazione e Riassemblaggio",
        "answer": true
      },
      {
        "option_text": "5. Gestione delle Connessioni",
        "answer": true
      },
      {
        "option_text": "6. Servizio orientato alla connessione 18-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 183,
    "code": "M1.3.1.17",
    "question": "Quali delle seguenti funzioni appartengono al livello ISO/OSI di Trasporto (4)",
    "options": [
      {
        "option_text": "1. Servizio orientato alla connessione",
        "answer": true
      },
      {
        "option_text": "2. Corretto ordine di consegna",
        "answer": true
      },
      {
        "option_text": "3. Trasferimento affidabile",
        "answer": true
      },
      {
        "option_text": "4. Controllo di flusso",
        "answer": true
      },
      {
        "option_text": "5. Controllo di congestione",
        "answer": true
      },
      {
        "option_text": "6. Definizione della sessione 19-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 184,
    "code": "M1.3.1.20",
    "question": "Cosa sono gli “Open System”?",
    "options": [
      {
        "option_text": "1. Sono sistemi che pur avendo sistemi operativi differenti riescono ad interagire tra loro grazie a standard predefiniti 2. Sono sistemi che avendo gli stessi sistemi operativi ma hardware differenti riescono ad interagire tra loro grazie a standard",
        "answer": true
      },
      {
        "option_text": "predefiniti",
        "answer": false
      },
      {
        "option_text": "3. Sono sistemi aperti che hanno come elemento che gli accomuna il sistema operativo UNIX",
        "answer": false
      },
      {
        "option_text": "4. Sono gli elementi chiave alla base della standardizzazione effettuata da ISO per la comunicazione delle reti di calcolatori",
        "answer": true
      },
      {
        "option_text": "5. Sono gli elementi chiave dell’operazione di standardizzazione OSI (Open System Interconnection) di ISO 6. Hanno permesso allo standard ISO/OSI di diventare uno standard “de facto” grazie anche all’approccio pragmatico",
        "answer": true
      },
      {
        "option_text": "dell’insieme di protocolli TCP/IP 20-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 185,
    "code": "M1.3.2.13",
    "question": "Le Fibre Ottiche multimodali",
    "options": [
      {
        "option_text": "1. Prevedono una sola modalità di propagazione: un'unica lunghezza d'onda della luce nel nucleo della fibra",
        "answer": false
      },
      {
        "option_text": "2. Prevedono nuclei di due dimensioni e almeno cinque varianti",
        "answer": true
      },
      {
        "option_text": "3. Ha una distanza massima di trasmissione molto maggiore rispetto alla fibra monomodale",
        "answer": false
      },
      {
        "option_text": "4. Si utilizza maggiormente nelle connessioni a breve raggio 5. Ha un nucleo di diametro esteso per consentire il passaggio della luce a diverse frequenze o lunghezze d’onda, in modo da",
        "answer": true
      },
      {
        "option_text": "trasmettere simultaneamente più canali di dati",
        "answer": true
      },
      {
        "option_text": "6. Ha un nucleo di vetro di dimensioni maggiori o uguali a 50 microm 21-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 186,
    "code": "M1.3.4.1",
    "question": "La rete LAN (Local Area Network)",
    "options": [
      {
        "option_text": "1. Collega assieme più computer per un uso privato come per uso aziendale senza vincoli sul numero di connessioni",
        "answer": true
      },
      {
        "option_text": "2. Utilizza uno standard ampiamente e uniformemente diffuso ovvero l’Ethernet",
        "answer": true
      },
      {
        "option_text": "3. Utilizza per la trasmissione dati cavi in rame, o fibra ottica 4. Ha una portata che dipende dagli standard e dal mezzo di trasmissione utilizzati; tuttavia, è possibile aumentarla attraverso",
        "answer": true
      },
      {
        "option_text": "un ripetitore (repeater) 5. Con lo standard Ethernet Gigabit (100 Mbit/s), tramite cavo di rame, è possibile ottenere un raggio d’azione di diversi",
        "answer": true
      },
      {
        "option_text": "chilometri 6. Di solito si estende per più complessi edilizi, sino ad interi quartieri Falso   F F V V V V F V V V V F V V V V V F V F F V V V F V F V V V  5 T1 – 9 Settembre 2022 22-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 187,
    "code": "M1.3.4.3",
    "question": "Quali delle seguenti sono Topologie di Rete",
    "options": [
      {
        "option_text": "1. Stella",
        "answer": true
      },
      {
        "option_text": "2. Maglia Parziale",
        "answer": true
      },
      {
        "option_text": "3. Maglia Completa",
        "answer": true
      },
      {
        "option_text": "4. Catena",
        "answer": false
      },
      {
        "option_text": "5. Bus",
        "answer": true
      },
      {
        "option_text": "6. Foglia 23-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 188,
    "code": "M1.3.4.4",
    "question": "In un sistema informatico il SPOF (Single Point of Failure) 1. È una parte del sistema hardware il cui malfunzionamento può portare ad anomalie o alla cessazione del servizio di tutto il",
    "options": [
      {
        "option_text": "sistema 2. È una parte del sistema, hardware o software, il cui malfunzionamento può portare ad anomalie o alla cessazione del servizio",
        "answer": false
      },
      {
        "option_text": "di tutto il sistema",
        "answer": true
      },
      {
        "option_text": "3. È particolarmente critico nei sistemi che devono essere costantemente attivi 4. Può essere evitato attraverso l’uso di componenti ridondanti, considerando che anche uno solo punto di vulnerabilità può",
        "answer": true
      },
      {
        "option_text": "compromettere un intero sistema",
        "answer": true
      },
      {
        "option_text": "5. Può essere evitato migliorando l’affidabilità dei componenti singoli",
        "answer": false
      },
      {
        "option_text": "6. Può riguardare anche un servizio acquisito esternamente 24-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 189,
    "code": "M1.3.4.5",
    "question": "In un sistema informatico la Ridondanza 1. È l'esistenza di più componenti o dispositivi dedicati ad una specifica funzione, organizzati in modo da evitare che un",
    "options": [
      {
        "option_text": "problema riguardante uno solo di essi determini il malfunzionamento generale dell'intero sistema 2. È uno strumento fondamentale, nelle fasi progettazione e di revisione di un’architettura o una topologia di rete, per",
        "answer": true
      },
      {
        "option_text": "aumentare l’affidabilità e la disponibilità complessiva dei sistemi",
        "answer": true
      },
      {
        "option_text": "3. Deve essere realizzata affiancando componenti o dispositivi rigorosamente dello stesso tipo",
        "answer": false
      },
      {
        "option_text": "4. Deve essere realizzata affiancando componenti o dispositivi che realizzino le stesse funzioni nello stesso modo",
        "answer": true
      },
      {
        "option_text": "5. È necessario che sia presente su tutta la catena dei dispositivi (end-to-end), evitando accuratamente gli SPOF",
        "answer": true
      },
      {
        "option_text": "6. Può essere realizzata solamente su una parte della catena dei dispositivi 25-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 190,
    "code": "M2.1.1.4",
    "question": "L’Azienda: 1. È un organismo composto di persone e beni economici, diretto al raggiungimento di un fine economico, d'interesse sia",
    "options": [
      {
        "option_text": "pubblico sia privato 2. È costituita di persone e beni economici ovvero  quei beni ottenibili mediante l'attività umana o disponibili in quantità limitata Vero",
        "answer": true
      },
      {
        "option_text": "3. È valutata anche in base ai marchi e i brevetti di proprietà, due tipici esempi di beni materiali 4. È organizzata dall’imprenditore per l’esercizio delle funzioni aziendali che permettono sempre di massimizzare il profitto Falso",
        "answer": false
      },
      {
        "option_text": "5. Ha al suo interno anche beni strumentali, ad esempio: attrezzature, impianti, marchi, brevetti",
        "answer": true
      },
      {
        "option_text": "6. Realizza la sua attività grazie alle funzioni aziendali ed è parte integrante della supply-chain 26-",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 191,
    "code": "M2.1.2.5",
    "question": "Le aziende di produzione indiretta 1. Creano un valore aggiunto a beni e servizi già esistenti mediante un processo di trasformazione economica e di valorizzazione",
    "options": [
      {
        "option_text": "che ne aumenta l'utilità finale o ne agevola lo scambio",
        "answer": true
      },
      {
        "option_text": "2. Producono beni e servizi mediante un processo di produzione materiale",
        "answer": false
      },
      {
        "option_text": "3. Possono essere imprese bancarie, assicuratrici, commerciali ecc.",
        "answer": true
      },
      {
        "option_text": "4. Possono essere industrie manifatturiere, imprese agricole, ecc.",
        "answer": false
      },
      {
        "option_text": "5. Possono essere aziende di trasporto",
        "answer": true
      },
      {
        "option_text": "6. Sono aziende il cui sia il soggetto giuridico che quello economico sono solo di diritto privato 27-",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 192,
    "code": "M2.1.2.6",
    "question": "Le aziende di produzione hanno obiettivi V V V V F F V V V F V F F V V V F V V V F V V F V V F F V V V F V F V F  6",
    "options": [
      {
        "option_text": "T1 – 9 Settembre 2022 1. Primari ovvero legati alla stessa sopravvivenza dell'impresa",
        "answer": true
      },
      {
        "option_text": "2. Primari che sono collegati ai processi produttivi e alla vendita dei prodotti sul mercato",
        "answer": true
      },
      {
        "option_text": "3. Secondari ovvero obiettivi di importanza secondaria",
        "answer": false
      },
      {
        "option_text": "4. Secondari ovvero il cui raggiungimento permette di conseguire, nel modo più economico possibile, gli obiettivi primari",
        "answer": true
      },
      {
        "option_text": "5. Collaterali ovvero obiettivi economici come il rendimento e la massimizzazione del profitto",
        "answer": true
      },
      {
        "option_text": "6. Collaterali ovvero obiettivi incidentali, non previsti preventivamente 28-",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 193,
    "code": "M2.1.2.7",
    "question": "Le società di capitali",
    "options": [
      {
        "option_text": "1. Per legge hanno un importo minimo per il capitale sociale",
        "answer": true
      },
      {
        "option_text": "2. Per legge non hanno un importo minimo per il capitale sociale",
        "answer": false
      },
      {
        "option_text": "3. Se di piccole-medie dimensioni e con pochi soci coinvolti nell’attività sono S.r.l.",
        "answer": true
      },
      {
        "option_text": "4. Prevedono più organi sociali ognuno con le proprie competenze",
        "answer": true
      },
      {
        "option_text": "5. In linea generale hanno un amministratore unico o un consiglio di amministrazione 6. Hanno autonomia patrimoniale imperfetta: i creditori sociali possono agire sul patrimonio personale dei singoli soci ma solo",
        "answer": true
      },
      {
        "option_text": "dopo aver escusso infruttuosamente sul patrimonio sociale 29-",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 194,
    "code": "M2.1.3.4",
    "question": "Quali dei seguenti sono Macrosettori di attività delle aziende di produzione",
    "options": [
      {
        "option_text": "1. Primario",
        "answer": true
      },
      {
        "option_text": "2. Produttivo diretto o Secondario",
        "answer": true
      },
      {
        "option_text": "3. Secondario avanzato",
        "answer": false
      },
      {
        "option_text": "4. Dei Servizi o Terziario",
        "answer": true
      },
      {
        "option_text": "5. Terziario avanzato o Quaternario",
        "answer": true
      },
      {
        "option_text": "6. Quinario 30-",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 195,
    "code": "M2.2.1.2",
    "question": "Quali dei seguenti possono essere considerati asset aziendali",
    "options": [
      {
        "option_text": "1. Sistemi informativi Gestionali (Contabilità, Bilancio, Tesoreria, Cassa, Controllo di Gestione)",
        "answer": true
      },
      {
        "option_text": "2. Conoscenza commerciale: clienti, storico degli ordini, pagamenti & insoluti",
        "answer": true
      },
      {
        "option_text": "3. Impianti produttivi",
        "answer": true
      },
      {
        "option_text": "4. Facility produttivi in affitto",
        "answer": false
      },
      {
        "option_text": "5. Know-how aziendale",
        "answer": true
      },
      {
        "option_text": "6. Brevetti V V F V V F V F V V V F V V F V V F V V V F V V  7 T1 – 9 Settembre 2022 Esercizio 1 Nello schema rappresentato in figura: 1. Indicare la tipologia del dispositivo A  Router 2. Indicare la tipologia del dispositivo B Firewall 3. Indicare la tipologia del dispositivo C Firewall 4. Secondo ISA/IEC 62443 come sono denominate le aree circoscritte in blu Zone 5. Secondo ISA/IEC 62443 come sono denominati i tratti di rete colorati in verde, giallo Conduits 6. Secondo ISA/IEC 62443 come sono denominati i tratti di rete colorati in azzurro e blu Conduits Esercizio 2 Definire le mappe di routing del seguente schema di rete:  1 T2 Corso Aspetti Gestionali e Organizzativi della Cyber Security Appello 23 settembre 2022 Indicare vero [V] o falso [F] alle seguenti affermazioni: 1",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 196,
    "code": "M3.4.2.1",
    "question": "Il posizionamento dello standard ISA/IEC 62443 nello stack ISA 95 (Purdue Model)",
    "options": [
      {
        "option_text": "1. È tra il livello 1 e il livello 2",
        "answer": false
      },
      {
        "option_text": "2. È tra il livello 0 e il livello 3",
        "answer": true
      },
      {
        "option_text": "3. È tra il livello 2 e il livello 4",
        "answer": false
      },
      {
        "option_text": "4. È tra il livello 3 e il livello 4",
        "answer": false
      },
      {
        "option_text": "5. È tra il livello 0 e il livello 2",
        "answer": false
      },
      {
        "option_text": "6. È tra il livello 1 e il livello 5 2",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 197,
    "code": "M3.4.4.2",
    "question": "Il Paradigma Operazionale 1. Prevede i seguenti elementi in ordine di importanza: Affidabilità-> Sicurezza Fisica->Impatto sul Prodotto o sul Servizio Falso 2. Prevede i seguenti elementi in ordine di importanza: Affidabilità ->Impatto sul Prodotto o sul Servizio->Sicurezza Fisica Falso 3. Prevede i seguenti elementi in ordine di importanza: Sicurezza Fisica->Affidabilità->Impatto sul Prodotto o sul Servizio Vero",
    "options": [
      {
        "option_text": "4. Prevede un diverso ordine di importanza per i fattori CIA: Disponibilità (Accessibilità)-> Integrità-> Riservatezza",
        "answer": true
      },
      {
        "option_text": "5. Prevede un diverso ordine di importanza per i fattori CIA: Integrità-> Riservatezza-> Disponibilità (Accessibilità)",
        "answer": false
      },
      {
        "option_text": "6. Prevede un diverso ordine di importanza per i fattori CIA: Riservatezza-> Disponibilità (Accessibilità)-> Integrità 3",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 198,
    "code": "M4.1.2.2",
    "question": "Quali sono le ragioni per cui il reparto di Information Technology può essere considerato come un centro di costo?",
    "options": [
      {
        "option_text": "1. Scarsa sensibilità e skill digitali del top management",
        "answer": true
      },
      {
        "option_text": "2. Scarse risorse da dedicare ai progetti digitali",
        "answer": false
      },
      {
        "option_text": "3. Scarsa capacità di ideare e portare a termine i progetti",
        "answer": true
      },
      {
        "option_text": "4. Scarso o nessun impatto della digitalizzazione sul business dell’azienda",
        "answer": false
      },
      {
        "option_text": "5. Scarsa propensione allo sviluppo commerciale globale, azienda fortemente locale",
        "answer": true
      },
      {
        "option_text": "6. Scarsa competitività dell’azienda (possibile azienda in regime di monopolio) 4",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 199,
    "code": "M4.2.1.1",
    "question": "Quali sono i maggiori rischi cyber per le Organizzazioni Bancarie e Finanziarie?",
    "options": [
      {
        "option_text": "1. Finanziario e di mancanza di erogazione del servizio al pubblico",
        "answer": false
      },
      {
        "option_text": "2. Finanziario e di continuità del business",
        "answer": true
      },
      {
        "option_text": "3. Finanziario e di diffusione di dati sensibili",
        "answer": false
      },
      {
        "option_text": "4. Fisico e di continuità di erogazione del servizio al pubblico",
        "answer": false
      },
      {
        "option_text": "5. Reputazionale e di continuità del business",
        "answer": false
      },
      {
        "option_text": "6. Terroristico e di possibile bersaglio strategico 5",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 200,
    "code": "M1.3.1.21",
    "question": "Quali funzioni prevede il livello ISO/OSI Applicazione (7)",
    "options": [
      {
        "option_text": "1. Scambio di e-mail",
        "answer": true
      },
      {
        "option_text": "2. Compressione dei dati",
        "answer": false
      },
      {
        "option_text": "3. Accesso ai database",
        "answer": true
      },
      {
        "option_text": "4. Accesso ai siti Web",
        "answer": true
      },
      {
        "option_text": "5. Gestione remota di applicazioni distribuite 6. Formattazione Falso Nome Cognome Matricola F V F F F F F F V V F F V F V F V V F V F F F F  2 T2 6",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 201,
    "code": "M1.3.1.22",
    "question": "Quali di questi livelli ISO/OSI sono livelli logici legati ai mezzi di trasmissione",
    "options": [
      {
        "option_text": "1. Livello 1 – Fisico",
        "answer": true
      },
      {
        "option_text": "2. Livello 2 – Collegamento",
        "answer": true
      },
      {
        "option_text": "3. Livello 3 – Rete",
        "answer": true
      },
      {
        "option_text": "4. Livello 4 – Trasporto",
        "answer": false
      },
      {
        "option_text": "5. Livello 5 – Sessione",
        "answer": false
      },
      {
        "option_text": "6. Livello 6 – Presentazione 7",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 202,
    "code": "M1.3.1.23",
    "question": "La comunicazione tra gli omologhi livelli dello stack ISO/OSI",
    "options": [
      {
        "option_text": "1. È Sempre una comunicazione logica",
        "answer": false
      },
      {
        "option_text": "2. È sempre una comunicazione fisica",
        "answer": false
      },
      {
        "option_text": "3. È una comunicazione logica per i livelli dal 2 al 7 e fisica per il livello 1",
        "answer": true
      },
      {
        "option_text": "4. È una comunicazione logica per i livelli dal 1 al 6 e fisica per il livello 7",
        "answer": false
      },
      {
        "option_text": "5. È una comunicazione logica per i livelli dal 1 al 3 e fisica per i livelli dal 4 al 7",
        "answer": false
      },
      {
        "option_text": "6. È sempre tra un Host mittente e un Host destinatario 8",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 203,
    "code": "M4.1.1.17",
    "question": "La Pianificazione Operativa 1. La pianificazione operativa è il processo attraverso il quale l’impresa definisce gli obiettivi da raggiungere e le azioni per",
    "options": [
      {
        "option_text": "raggiungere tali scopi nel breve periodo",
        "answer": true
      },
      {
        "option_text": "2. Può essere rappresentata dagli obiettivi strategici che si intendono raggiungere nel medio periodo",
        "answer": false
      },
      {
        "option_text": "3. Può essere rappresentata dagli obiettivi che si vogliono raggiungere nell’anno di attività dell’azienda",
        "answer": true
      },
      {
        "option_text": "4. È sempre rappresentata dalla mission dell’azienda a lungo termine 5. Si distingue da Pianificazione Tattica e Strategica che definiscono gli obiettivi, rispettivamente di medio e lungo periodo Vero",
        "answer": false
      },
      {
        "option_text": "6. Può essere denominata anche Pianificazione Sinergica o Evolutiva 9",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 204,
    "code": "M2.1.2.8",
    "question": "Le Società di Persone",
    "options": [
      {
        "option_text": "1. Per legge non hanno un importo minimo per il capitale sociale",
        "answer": true
      },
      {
        "option_text": "2. Per legge hanno un importo minimo per il capitale sociale",
        "answer": false
      },
      {
        "option_text": "3. Non prevedono organi sociali, ogni socio illimitatamente responsabile può amministrare",
        "answer": true
      },
      {
        "option_text": "4. Possono prevedere più organi sociali ognuno con le proprie competenze 5. Hanno un’autonomia patrimoniale definita “perfetta”: i soci sono personalmente responsabili delle obbligazioni sociali,",
        "answer": false
      },
      {
        "option_text": "solo i beni conferiti sono formalmente di proprietà della società 6. Hanno un’autonomia patrimoniale definita “imperfetta”: i creditori sociali possono agire sul patrimonio personale dei",
        "answer": false
      },
      {
        "option_text": "singoli soci ma solo dopo aver escusso infruttuosamente sul patrimonio sociale 10",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 205,
    "code": "M2.1.2.9",
    "question": "Le Società S.p.A.",
    "options": [
      {
        "option_text": "1. Sono Società di Persone",
        "answer": false
      },
      {
        "option_text": "2. Sono Società di Capitali",
        "answer": true
      },
      {
        "option_text": "3. Sono Società a responsabilità illimitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "4. Sono Società a responsabilità limitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "5. Sono Società a responsabilità dei soci limitata al capitale sottoscritto",
        "answer": true
      },
      {
        "option_text": "6. Sono Società a responsabilità dei soci illimitata oltre al capitale sottoscritto V F V V V F V V V F F F F F V F F V V F V F V F V F V F F V F V F F V F  3 T2 11",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 206,
    "code": "M2.1.3.5",
    "question": "Un’azienda che distribuisce gas ed elettricità",
    "options": [
      {
        "option_text": "1. Appartiene al settore delle Utility",
        "answer": true
      },
      {
        "option_text": "2. Può essere definita anche Multiutility",
        "answer": true
      },
      {
        "option_text": "3. Può essere un’infrastruttura critica",
        "answer": true
      },
      {
        "option_text": "4. Può essere un Operatore di Servizi Essenziali",
        "answer": true
      },
      {
        "option_text": "5. È un’azienda manifatturiera",
        "answer": false
      },
      {
        "option_text": "6. Appartiene al settore secondario 12",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 207,
    "code": "M2.2.1.4",
    "question": "A che tipi di rischio può si incorrere in caso di attacco Cyber al sistema gestionale aziendale?",
    "options": [
      {
        "option_text": "1. Rischio generale per la salute umana",
        "answer": false
      },
      {
        "option_text": "2. Rischio di emissioni nocive per l’ambiente",
        "answer": false
      },
      {
        "option_text": "3. Rischio violazione dati sensibili e Privacy",
        "answer": true
      },
      {
        "option_text": "4. Rischio Business Continuity",
        "answer": true
      },
      {
        "option_text": "5. Rischio Service Continuity",
        "answer": true
      },
      {
        "option_text": "6. Rischio economico 13",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 208,
    "code": "M2.2.2.3",
    "question": "Il Vettore di Attacco può sfruttare tipicamente",
    "options": [
      {
        "option_text": "1. Vulnerabilità informatiche e mancato aggiornamento del software",
        "answer": true
      },
      {
        "option_text": "2. Gestione di identità e permessi non adeguata",
        "answer": true
      },
      {
        "option_text": "3. Meccanismi di autenticazione deboli",
        "answer": true
      },
      {
        "option_text": "4. App malevole",
        "answer": false
      },
      {
        "option_text": "5. Obsolescenza",
        "answer": true
      },
      {
        "option_text": "6. Mancanza di conoscenza da parte del personale 14",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 209,
    "code": "M3.1.1.7",
    "question": "Quali sono le fasi del processo di monitoraggio e gestione degli incidenti informatici? 1. Una fase di Preparazione Iniziale e poi un ciclo composto da due fasi consecutive, Contenimento-Eradicazione-Ripristino e",
    "options": [
      {
        "option_text": "Rilevamento-Analisi ed in ultimo una fase di Analisi Post-Incidente 2. Una fase di Preparazione Iniziale e poi una fase ciclica composta da due parti: Rilevamento-Analisi e Contenimento-",
        "answer": false
      },
      {
        "option_text": "Eradicazione-Ripristino ed in ultimo una fase di Analisi Post-Incidente 3. Un ciclo composto da due fasi, Rilevamento-Analisi e Contenimento-Eradicazione-ripristino e una fase di Analisi Post-",
        "answer": true
      },
      {
        "option_text": "Incidente 4. Una fase di Preparazione Iniziale, una fase di Rilevamento-Analisi, una fase di Contenimento-Eradicazione-Ripristino ed in",
        "answer": false
      },
      {
        "option_text": "ultimo una fase di Analisi Post-Incidente",
        "answer": false
      },
      {
        "option_text": "5. Una fase prima dell’incidente, una fase durante l’incidente e una fase dopo l’incidente",
        "answer": true
      },
      {
        "option_text": "6. Una fase di Rilevamento dell’Incidente e di Verifica dei danni dopo l’incidente 15",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 210,
    "code": "M3.1.2.4",
    "question": "L’Action Workflow",
    "options": [
      {
        "option_text": "1. È un tipo di modellizzazione basata sulle attività",
        "answer": false
      },
      {
        "option_text": "2. È un tipo di modellizzazione basata sull’interazione o la negoziazione",
        "answer": true
      },
      {
        "option_text": "3. È un tipo di modellizzazione basata sui dati",
        "answer": false
      },
      {
        "option_text": "4. È particolarmente adatto a rappresentare processi in cui gli elementi di decisione sono particolarmente importanti",
        "answer": true
      },
      {
        "option_text": "5. Mette al centro del modello le condizioni di soddisfazione (o di accordo) tra un cliente e un operatore/realizzatore",
        "answer": true
      },
      {
        "option_text": "6. Mette al centro del modello le informazioni sulla sequenza delle attività da realizzare 16",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 211,
    "code": "M3.1.3.5",
    "question": "Lo Standard Internazionale 1. ISO 45001:2018 è relativo alla sicurezza del lavoro Vero V V V V F F F F V V V V V V V F V V F V F F V F F V F V V F  4",
    "options": [
      {
        "option_text": "T2 2. ISO 14001:2015 è relativo all’ambiente ovvero sui sistemi di gestione ambientale",
        "answer": true
      },
      {
        "option_text": "3. ISO 26000:2010 è relativo alla contabilità aziendale",
        "answer": false
      },
      {
        "option_text": "4. ISO 9001:2015 è relativo alla qualità",
        "answer": true
      },
      {
        "option_text": "5. ISO 27001:2013 è relativo alla sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "6. ISA/IEC 62443 è relativo alla sicurezza delle reti informatiche aziendali in generale 17",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 212,
    "code": "M3.2.1.12",
    "question": "La macroarea “Linee Guida” della famiglia di standard ISO/IEC 27000 include le norme",
    "options": [
      {
        "option_text": "1. 27002",
        "answer": true
      },
      {
        "option_text": "2. 27003",
        "answer": true
      },
      {
        "option_text": "3. 27006",
        "answer": false
      },
      {
        "option_text": "4. 27007",
        "answer": true
      },
      {
        "option_text": "5. 27011",
        "answer": false
      },
      {
        "option_text": "6. 27021 18",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 213,
    "code": "M3.2.1.13",
    "question": "La macroarea “Requisiti” della famiglia di standard ISO/IEC 27000 include le norme",
    "options": [
      {
        "option_text": "1. 27001",
        "answer": true
      },
      {
        "option_text": "2. 27006",
        "answer": true
      },
      {
        "option_text": "3. 27009",
        "answer": true
      },
      {
        "option_text": "4. 27002",
        "answer": false
      },
      {
        "option_text": "5. 27003",
        "answer": false
      },
      {
        "option_text": "6. 27011 19",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 214,
    "code": "M3.2.1.14",
    "question": "Nell’ISO/IEC 27000 il ciclo di Deming o PDCA si associa",
    "options": [
      {
        "option_text": "1. Il PLAN alla pianificazione in un ISMS",
        "answer": false
      },
      {
        "option_text": "2. Il PLAN all’istituzione di un ISMS",
        "answer": true
      },
      {
        "option_text": "3. Il DO all’implementazione e conduzione dell’ISMS",
        "answer": true
      },
      {
        "option_text": "4. Il CHECK al monitoraggio e alla revisione dell’ISMS",
        "answer": true
      },
      {
        "option_text": "5. L’ACT all’attuazione dell’ISMS",
        "answer": false
      },
      {
        "option_text": "6. L’ACT alla manutenzione e al miglioramento dell’ISMS 20",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 215,
    "code": "M3.2.1.15",
    "question": "Nell’area tematica di criticità “Supporto” dell’ISO/IEC 27001 sono presenti i seguenti requisiti",
    "options": [
      {
        "option_text": "1. Risorse",
        "answer": true
      },
      {
        "option_text": "2. Politica",
        "answer": false
      },
      {
        "option_text": "3. Consapevolezza",
        "answer": true
      },
      {
        "option_text": "4. Comunicazione",
        "answer": true
      },
      {
        "option_text": "5. Informazioni documentate",
        "answer": true
      },
      {
        "option_text": "6. Leadership e impegno 21",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 216,
    "code": "M3.2.1.17",
    "question": "Nell’area tematica di criticità “Contesto dell’Organizzazione” dell’ISO/IEC 27001 sono presenti i seguenti requisiti",
    "options": [
      {
        "option_text": "1. Comprendere l’organizzazione e il suo contesto",
        "answer": true
      },
      {
        "option_text": "2. Comprendere le necessità e le aspettative delle parti interessate",
        "answer": true
      },
      {
        "option_text": "3. Comprendere le necessità di sicurezza del profilo di business",
        "answer": false
      },
      {
        "option_text": "4. Determinare il campo di applicazione del sistema di gestione per la sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "5. Sistema di gestione per la sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "6. Sistema di gestione della sicurezza di reti e sistemi V V F V V F V V F V F V V V V F F F F V V V F V V F V V V F V V F V V F  5 T2 22",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 217,
    "code": "M3.2.1.16",
    "question": "Quali delle seguenti sono Aree di Controllo secondo ISO 27001 2013?",
    "options": [
      {
        "option_text": "1. Politiche per la sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "2. Politiche per la sicurezza dei dati",
        "answer": false
      },
      {
        "option_text": "3. Sicurezza fisica e ambientale",
        "answer": true
      },
      {
        "option_text": "4. Sicurezza logica e fisica",
        "answer": false
      },
      {
        "option_text": "5. Gestione dei Fornitori",
        "answer": false
      },
      {
        "option_text": "6. Gestione dei clienti 23",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 218,
    "code": "M3.2.2.1",
    "question": "L’Area di Controllo 7 dell’ISO 27001 2013 Annex A “Sicurezza delle Risorse Umane” include le seguenti Categorie di Controllo",
    "options": [
      {
        "option_text": "1. Prima dell’Impiego",
        "answer": true
      },
      {
        "option_text": "2. Selezione del Personale",
        "answer": false
      },
      {
        "option_text": "3. Durante l’impiego",
        "answer": true
      },
      {
        "option_text": "4. Formazione del Personale",
        "answer": false
      },
      {
        "option_text": "5. Discontinuità del rapporto di lavoro",
        "answer": false
      },
      {
        "option_text": "6. Cessazione e variazione del rapporto di lavoro 24",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 219,
    "code": "M3.2.2.2",
    "question": "L’Area di Controllo 9 dell’ISO 27001 2013 Annex A “Controllo degli Accessi (logici)” include le seguenti Categorie di Controllo",
    "options": [
      {
        "option_text": "1. Requisiti di business per il controllo degli accessi",
        "answer": true
      },
      {
        "option_text": "2. Gestione degli accessi degli utenti",
        "answer": true
      },
      {
        "option_text": "3. Responsabilità dell’utente",
        "answer": true
      },
      {
        "option_text": "4. Responsabilità del manager",
        "answer": false
      },
      {
        "option_text": "5. Controllo degli accessi ai sistemi e alle applicazioni",
        "answer": true
      },
      {
        "option_text": "6. Controllo degli accessi fisici ai sistemi e alle applicazioni 25",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 220,
    "code": "M3.2.3.8",
    "question": "Nel Framework Core di NIST CF la funzione “Identify” è costituta dalle seguenti Categorie:",
    "options": [
      {
        "option_text": "1. Asset management",
        "answer": true
      },
      {
        "option_text": "2. Business Environment",
        "answer": true
      },
      {
        "option_text": "3. Analysis",
        "answer": false
      },
      {
        "option_text": "4. Risk Mitigation",
        "answer": false
      },
      {
        "option_text": "5. Risk Management Strategy",
        "answer": true
      },
      {
        "option_text": "6. Supply Chain Risk Management 26",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 221,
    "code": "M3.2.3.9",
    "question": "Nel Framework Core di NIST CF la funzione “Protect” è costituta dalle seguenti Categorie:",
    "options": [
      {
        "option_text": "1. Identity Management and Access Control",
        "answer": true
      },
      {
        "option_text": "2. Awareness and Training",
        "answer": true
      },
      {
        "option_text": "3. Data Security",
        "answer": true
      },
      {
        "option_text": "4. Information Protection Processes & Procedures",
        "answer": true
      },
      {
        "option_text": "5. Anomalies and Events",
        "answer": false
      },
      {
        "option_text": "6. Protective Technology 27",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 222,
    "code": "M3.2.4.1",
    "question": "Le guide verticali NIST Special Publications sono raggruppate in:",
    "options": [
      {
        "option_text": "1. SP 800 Computer security",
        "answer": true
      },
      {
        "option_text": "2. SP 1800 Cybersecurity Practice Guides 3. SP 1700 Cybersecurity Development Guides Falso V F V F F F V F V F F V V V V F V F V V F F V V V V V V F V  6",
        "answer": true
      },
      {
        "option_text": "T2 4. SP 500 Information technology (relevant documents)",
        "answer": true
      },
      {
        "option_text": "5. SP 300 Information technology (relevant documents)",
        "answer": false
      },
      {
        "option_text": "6. SP 600 Computer system management 28",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 223,
    "code": "M3.2.6.10",
    "question": "Ciascun elemento di un SCMS secondo l’ISA/IEC 62443 ha",
    "options": [
      {
        "option_text": "1. Un Obiettivo per Identificare chiaramente gli obiettivi dei requisiti dell’elemento",
        "answer": true
      },
      {
        "option_text": "2. Un Fondamento Logico che fornisce una guida per chiarire la logica dei requisiti dell’elemento",
        "answer": true
      },
      {
        "option_text": "3. Una Descrizione estesa dell’elemento e dei requisiti che sono contenuti",
        "answer": true
      },
      {
        "option_text": "4. Un link a documenti associati",
        "answer": false
      },
      {
        "option_text": "5. Associati una lista di requisiti",
        "answer": true
      },
      {
        "option_text": "6. Associato un solo requisito specifico 29",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 224,
    "code": "M3.2.6.11",
    "question": "Quali dei seguenti sono Fondational Requirements secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "1. Identification and authentication control (IAC)",
        "answer": true
      },
      {
        "option_text": "2. User Controller (UCR)",
        "answer": false
      },
      {
        "option_text": "3. System Integrity (SI)",
        "answer": true
      },
      {
        "option_text": "4. Data Confidentiality (DC)",
        "answer": true
      },
      {
        "option_text": "5. Restrict Data Flow (RDF)",
        "answer": true
      },
      {
        "option_text": "6. Resource Providing (RP) 30",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 225,
    "code": "M3.3.1.4",
    "question": "Perché è importante la regolamentazione GDPR per l’Information Technology?",
    "options": [
      {
        "option_text": "1. Perché i sistemi informativi conservano, gestiscono e permettono di trasferire i dati riservati e sensibili delle persone 2. Perché i dati sono archiviati e mantenuti per periodi di tempo indeterminati, potenzialmente senza possibilità di controllo",
        "answer": true
      },
      {
        "option_text": "dalle persone stesse 3. Perché una gestione dei dati senza regole può mettere a repentaglio le regole principali del vivere civile ed è quindi",
        "answer": true
      },
      {
        "option_text": "necessario regolamentare la gestione dei dati nel suo insieme 4. Perché una gestione dei dati senza regole può mettere a repentaglio le regole principali del vivere civile ed è quindi necessario regolamentare la gestione dei dati: ovviamente solamente l’autorizzazione al trattamento e al trasferimento Falso 5. Perché una gestione dei dati senza regole può mettere a repentaglio le regole principali del vivere civile ed è quindi necessario regolamentare la gestione dei dati: dall’autorizzazione al trattamento, il trasferimento sino al tempo massimo",
        "answer": true
      },
      {
        "option_text": "di mantenimento",
        "answer": true
      },
      {
        "option_text": "6. Perché bisogna salvaguardare gli aspetti formali del trattamento dei dati V V F V F F V V V F V F V F V V V F V V V F V F  7 T2 Esercizio 1 Data la seguente topologia di rete: Indicare la tipologia degli apparati e sistemi nei quadrati e rettangoli: A B C D E F G H I Router VPN Firewall Anomaly Detection System Switch Firewall Router Router- Firewall Anomaly Detection System L M N O P Switch Router- Firewall Anomaly Detection System Switch Gateway Esercizio 2 Partizionare la rete 192.168.10.0 in 4 sottoreti così costituite, ogni sottorete deve essere suddivisa in due VLAN uguali. Rappresentare le sottoreti con la notazione /X ed esplicitare il numero totale degli Host della sottorete: Sottorete A: 68 Host Sottorete B: 26 Host Sottorete C: 12 Host Sottorete D: 58 Host VLAN N° Totale Host 192 168 10 0 /25 1 63 192 168 10 0 /25 2 63 192 168 10 128 /27 3 15 192 168 10 128 /27 4 15 192 168 10 160 /28 5 7 192 168 10 160 /28 6 7 192 168 10 176 /26 7 31 192 168 10 176 /26 8 31  1 T1 Corso Aspetti Gestionali e Organizzativi della Cyber Security Appello 23 settembre 2022 Indicare vero [V] o falso [F] alle seguenti affermazioni: 1",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 226,
    "code": "M1.1.2.9",
    "question": "La banda di trasmissione SHF",
    "options": [
      {
        "option_text": "1 Identifica una banda di frequenze dove si trovano anche le microonde",
        "answer": true
      },
      {
        "option_text": "2 Identifica una banda di frequenza super-lunghe",
        "answer": false
      },
      {
        "option_text": "3 Identifica una banda di frequenze super-alte",
        "answer": true
      },
      {
        "option_text": "4 Ha una banda di frequenze che va da 30 a 300MHz",
        "answer": false
      },
      {
        "option_text": "5 Ha una banda di frequenze che va da 3 a 30 Ghz",
        "answer": true
      },
      {
        "option_text": "6 È utilizzata dai Radar, dai link a microonde e dalle comunicazioni satellitari 2",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 227,
    "code": "M1.1.3.2",
    "question": "Il Routing 1. Il Routing è l'instradamento effettuato tra reti differenti con l’ausilio delle tabelle di instradamento configurate a livello",
    "options": [
      {
        "option_text": "dei router 2. Il Routing è l'instradamento effettuato all’interno della stessa rete con l’ausilio delle tabelle di instradamento configurate",
        "answer": true
      },
      {
        "option_text": "a livello dei router 3. Per il suo funzionamento considera che i router siano a conoscenza degli indirizzi solo delle reti a cui sono direttamente",
        "answer": false
      },
      {
        "option_text": "collegati 4. Per il suo funzionamento considera che i router siano a conoscenza degli indirizzi delle reti a cui sono direttamente o",
        "answer": true
      },
      {
        "option_text": "indirettamente collegati 5. Nella tabella di instradamento ogni riga corrisponde a una regola e le regole vengono esaminate dalla prima all’ultima, se ci sono più regole che corrispondono all'indirizzo fornito, viene scelta la regola che ha più bit in comune con l'indirizzo",
        "answer": false
      },
      {
        "option_text": "fornito 6. Nella tabella di instradamento ogni riga corrisponde a una regola e le regole vengono esaminate dalla prima all’ultima, se",
        "answer": true
      },
      {
        "option_text": "ci sono più regole che corrispondono all'indirizzo fornito, viene scelta la prima regola che viene esaminata 3",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 228,
    "code": "M1.1.3.5",
    "question": "Un indirizzo IPv4",
    "options": [
      {
        "option_text": "1. Ha la dimensione di 32 bits, divisi in 4 gruppi da 8 bits",
        "answer": true
      },
      {
        "option_text": "2. Ha la dimensione di 32 bits, divisi in 8 gruppi da 4 bits",
        "answer": false
      },
      {
        "option_text": "3. Ha la dimensione di 128 bits, divisi in 8 gruppi da 16 bits",
        "answer": false
      },
      {
        "option_text": "4. Ha la dimensione di 256 bits, divisi in 8 gruppi da 32 bits",
        "answer": false
      },
      {
        "option_text": "5. Può essere assegnato solo dall’ InterNIC (InterNetwork Information Center)",
        "answer": true
      },
      {
        "option_text": "6. Può essere assegnato da chiunque 4",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 229,
    "code": "M1.1.4.2",
    "question": "L’Uniform Resource Locator (URL) 1. È una sequenza di caratteri che identifica univocamente l'indirizzo di una risorsa presente su un host (server) che fa parte",
    "options": [
      {
        "option_text": "di una rete di computer e resa accessibile a un client",
        "answer": true
      },
      {
        "option_text": "2. È una sequenza di caratteri esclusivamente alfanumerici 3. Identifica univocamente gli indirizzi delle risorse come documenti, un'immagini, video, tipicamente presente sui server Vero",
        "answer": false
      },
      {
        "option_text": "4. Può utilizzare protocolli http, https, ftp o mms",
        "answer": true
      },
      {
        "option_text": "5. Si avvale del DNS (Domain Name System) per “risolvere” l’URL in indirizzo IP",
        "answer": true
      },
      {
        "option_text": "6. Nel caso utilizzi il protocollo https realizza una comunicazione client server non criptata Nome Cognome Matricola V F V F V V V F V F V F V F F F V F V F V V V F  2 T1 5",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 230,
    "code": "M1.1.6.1",
    "question": "Una Minaccia alla sicurezza informatica 1. Può essere definita come un codice eseguibile che, utilizzando un vettore esterno o interno al perimetro aziendale, ha la capacità di compiere operazioni dannose per la macchina in cui si trova, per il sistema informatico in cui si è inserito o per",
    "options": [
      {
        "option_text": "i dati in esso contenuti o gestiti",
        "answer": true
      },
      {
        "option_text": "2. Si propaga e si concretizza sempre indipendentemente dal fattore umano 3. Utilizza un vettore che può essere un attacco diretto o indiretto da parte di qualche malintenzionato o un incidente anche",
        "answer": false
      },
      {
        "option_text": "accidentale",
        "answer": true
      },
      {
        "option_text": "4. Può essere eliminata mediante l’installazione di un buon antivirus 5. Può penetrare qualsiasi tipo di file eseguibile e diffondersi nel momento in cui il file viene copiato e inviato da un utente",
        "answer": false
      },
      {
        "option_text": "all'altro",
        "answer": true
      },
      {
        "option_text": "6. Può essere costituita dai Ramsomware 6",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 231,
    "code": "M1.3.1.15",
    "question": "Quali delle seguenti funzioni appartengono al livello ISO/OSI di Collegamento (2)",
    "options": [
      {
        "option_text": "1. Identificare i nodi connessi",
        "answer": true
      },
      {
        "option_text": "2. Controllare gli errori",
        "answer": true
      },
      {
        "option_text": "3. Correggere gli errori mediante ritrasmissione",
        "answer": true
      },
      {
        "option_text": "4. Indirizzamento Logico",
        "answer": false
      },
      {
        "option_text": "5. Incapsulamento del Pacchetto",
        "answer": false
      },
      {
        "option_text": "6. Gestione delle Connessioni 7",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 232,
    "code": "M1.3.1.18",
    "question": "Quali delle seguenti funzioni appartengono al livello ISO/OSI Sessione (5)",
    "options": [
      {
        "option_text": "1. Servizio orientato alla connessione",
        "answer": false
      },
      {
        "option_text": "2. Corretto ordine di consegna",
        "answer": false
      },
      {
        "option_text": "3. Trasferimento affidabile",
        "answer": false
      },
      {
        "option_text": "4. Definizione della sessione",
        "answer": true
      },
      {
        "option_text": "5. Frammentazione e Riassemblaggio",
        "answer": false
      },
      {
        "option_text": "6. Sincronizzazione 8",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 233,
    "code": "M1.3.1.19",
    "question": "Quali delle seguenti funzioni appartengono al livello ISO/OSI Presentazione (6)",
    "options": [
      {
        "option_text": "1. Crittografia",
        "answer": true
      },
      {
        "option_text": "2. Controllare il flusso",
        "answer": false
      },
      {
        "option_text": "3. Formattazione",
        "answer": true
      },
      {
        "option_text": "4. Accesso condiviso al canale MAC (Medium Access Control)",
        "answer": false
      },
      {
        "option_text": "5. Data Framing",
        "answer": false
      },
      {
        "option_text": "6. Compressione dei dati 9",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 234,
    "code": "M1.3.4.2",
    "question": "La rete MAN (Metropolitan Area Network)",
    "options": [
      {
        "option_text": "1. È una rete di telecomunicazione a banda stretta, che collega più LAN geograficamente vicine 2. È di solito utilizzata da singole filiali di un’azienda che vengono connesse ad una MAN attraverso l’affitto di linee dedicate Vero",
        "answer": false
      },
      {
        "option_text": "3. Utilizza connessioni in fibra ottica, che consentono prestazioni migliori",
        "answer": true
      },
      {
        "option_text": "4. Ha una velocità di trasferimento tra due nodi distanti molto più lenta della comunicazione interna di una LAN",
        "answer": false
      },
      {
        "option_text": "5. Ha un’infrastruttura che viene messa a disposizione da provider che operano a livello internazionale",
        "answer": true
      },
      {
        "option_text": "6. A livello cittadino si collega a reti sovraregionali e internazionali, chiamate Wide Area Network (WAN) 10",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 235,
    "code": "M2.2.1.3",
    "question": "Quali strategie posso utilizzare per mitigare i possibili danni da un attacco cyber ad una linea produttiva (al momento l’unica che produce un determinato bene)? V F V F V V V V V F F F F F F V F V V F V F F V F V V F V V  3 T1 1. Ridondare e rendere indipendenti le architetture di rete e i dispositivi informatici che gestiscono le macchine di",
    "options": [
      {
        "option_text": "produzione",
        "answer": true
      },
      {
        "option_text": "2. Realizzare un adeguato sistema di segmentazione e segregazione delle reti e degli apparati di controllo",
        "answer": true
      },
      {
        "option_text": "3. Aumentare gli stock delle materie prime",
        "answer": false
      },
      {
        "option_text": "4. Valutare, compatibilmente con i costi, la realizzazione di una linea produttiva parallela analoga",
        "answer": true
      },
      {
        "option_text": "5. Aumentare considerevolmente la quantità di prodotti finiti in magazzino",
        "answer": false
      },
      {
        "option_text": "6. Isolare completamente la rete industriale dalla rete office 11",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 236,
    "code": "M2.2.2.2",
    "question": "Un incidente informatico interno all’organizzazione 1. Può essere qualsiasi evento che sottintende una violazione delle politiche di sicurezza IT fonte di danno per gli asset IT Vero 2. Può essere un incidente collegato ad un attacco con obiettivi economici e può avere come obiettivi i sistemi",
    "options": [
      {
        "option_text": "Amministrativi e gestionali o i sistemi di progettazione",
        "answer": true
      },
      {
        "option_text": "3. In ogni caso è di rilevanza inferiore rispetto ad un attacco diretto 4. Può essere un incidente collegato ad un attacco avente come obiettivo l’interruzione del servizio e come obiettivi i",
        "answer": false
      },
      {
        "option_text": "sistemi amministrativi e gestionali, i portali web e di e-commerce i sistemi di produzione",
        "answer": true
      },
      {
        "option_text": "5. Di solito è molto semplice verificare il nesso causa-effetto tra evento rilevato e danno subito",
        "answer": false
      },
      {
        "option_text": "6. Può essere un incidente informativo casuale legato ad un’operazione o una procedura errata 12",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 237,
    "code": "M2.3.1.4",
    "question": "Nella Gestione Aziendale le Operazioni Soggettive possono essere:",
    "options": [
      {
        "option_text": "1. Reperimento di mezzi finanziari",
        "answer": false
      },
      {
        "option_text": "2. Attività decisionali",
        "answer": true
      },
      {
        "option_text": "3. Investimenti",
        "answer": false
      },
      {
        "option_text": "4. Attività di controllo",
        "answer": true
      },
      {
        "option_text": "5. Attività di produzione",
        "answer": false
      },
      {
        "option_text": "6. Disinvestimento 13",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 238,
    "code": "M2.3.1.5",
    "question": "L’ERP aziendale",
    "options": [
      {
        "option_text": "1. È l’Enterprise Resource Planning",
        "answer": true
      },
      {
        "option_text": "2. È Il Sistema Gestionale Aziendale",
        "answer": true
      },
      {
        "option_text": "3. Non fa parte del sistema informativo aziendale",
        "answer": false
      },
      {
        "option_text": "4. È un software",
        "answer": true
      },
      {
        "option_text": "5. È un hardware",
        "answer": false
      },
      {
        "option_text": "6. Può essere un servizio in cloud 14",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 239,
    "code": "M2.3.2.4",
    "question": "In ogni Organizzazione",
    "options": [
      {
        "option_text": "1. La Mansione deve essere assegnata a ogni individuo",
        "answer": true
      },
      {
        "option_text": "2. Una Mansione specifica può non essere associata ad un individuo",
        "answer": false
      },
      {
        "option_text": "3. Il Ruolo è l’insieme dei comportamenti previsti da una specifica figura professionale",
        "answer": true
      },
      {
        "option_text": "4. La Posizione è lo stato o il grado assegnato ad una figura professionale",
        "answer": true
      },
      {
        "option_text": "5. Ad ogni risorsa vanno assegnate delle responsabilità per raggiungere degli obiettivi aziendali comuni",
        "answer": true
      },
      {
        "option_text": "6. Le stesse mansioni i ruoli e le posizioni aziendali possono essere attribuite a più persone contemporaneamente F V V F V V V V F V F F V V F V F V F V F V F F V V F V F V V F V V V F  4 T1 15",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 240,
    "code": "M3.1.1.5",
    "question": "Quali dei seguenti sono i principali processi di Cyber Security (indicare Vero)",
    "options": [
      {
        "option_text": "1. Monitoraggio degli Incidenti Informatici",
        "answer": true
      },
      {
        "option_text": "2. Gestione delle performance di rete",
        "answer": false
      },
      {
        "option_text": "3. Gestione degli incidenti informatici",
        "answer": true
      },
      {
        "option_text": "4. Gestione delle vulnerabilità",
        "answer": true
      },
      {
        "option_text": "5. Gestione delle obsolescenze",
        "answer": true
      },
      {
        "option_text": "6. Gestione delle risorse 17",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 241,
    "code": "M3.1.1.6",
    "question": "Il SOC",
    "options": [
      {
        "option_text": "1. È il Security Operations Center",
        "answer": true
      },
      {
        "option_text": "2. È il Security Organization Center",
        "answer": false
      },
      {
        "option_text": "3. È un centro da cui vengono forniti servizi finalizzati alla sicurezza dei sistemi informativi dell'azienda stessa",
        "answer": true
      },
      {
        "option_text": "4. Può essere solo interno all’organizzazione 5. Può anche fornire servizi di Incident Response, in questo caso svolge la funzione di CERT (Computer Emergency Response",
        "answer": false
      },
      {
        "option_text": "Team)",
        "answer": true
      },
      {
        "option_text": "6. Può avere anche funzioni di CSIRT (Computer Security Incident Response Team) 18",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 242,
    "code": "M3.1.2.2",
    "question": "Perché bisogna modellare (modellizzare) i processi aziendali?",
    "options": [
      {
        "option_text": "1. Per fornire una descrizione di una sequenza di attività comprensibile ad un osservatore esterno al processo",
        "answer": true
      },
      {
        "option_text": "2. Perché la legislazione lo richiede obbligatoriamente 3. Per usare un modello grafico standardizzato con l’obiettivo di presentare un documento in un formato facilmente",
        "answer": false
      },
      {
        "option_text": "comprensibile ad organizzazioni differenti",
        "answer": true
      },
      {
        "option_text": "4. Per descrivere cosa attualmente succede durante un processo",
        "answer": true
      },
      {
        "option_text": "5. Per descrivere anche cosa si desidererebbe far succedere durante un processo in futuro",
        "answer": true
      },
      {
        "option_text": "6. Per creare la base e i presupposti all’analisi per l’innovazione di processo 19",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 243,
    "code": "M3.1.2.3",
    "question": "Quali sono le tipologie di Modellizzazione?",
    "options": [
      {
        "option_text": "1. Basata sui dati",
        "answer": true
      },
      {
        "option_text": "2. Basata su attività",
        "answer": true
      },
      {
        "option_text": "3. Basata su informazioni",
        "answer": false
      },
      {
        "option_text": "4. Basata su transizioni",
        "answer": false
      },
      {
        "option_text": "5. Basata su messaggi",
        "answer": false
      },
      {
        "option_text": "6. Basata su comunicazione 20",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 244,
    "code": "M3.1.3.4",
    "question": "Perché le SOP (Standard Operating Procedure) sono importanti?",
    "options": [
      {
        "option_text": "1. Aiutano l’organizzazione a soddisfare gli standard di conformità",
        "answer": true
      },
      {
        "option_text": "2. Supportano ma non garantiscono che le attività aziendali non abbiano impatti ambientali negativi",
        "answer": false
      },
      {
        "option_text": "3. Semplificano e massimizzano la produzione/output",
        "answer": true
      },
      {
        "option_text": "4. Stabiliscono degli standard di sicurezza (fisica e logica)",
        "answer": true
      },
      {
        "option_text": "5. Supportano la formazione e la crescita professionale del personale",
        "answer": true
      },
      {
        "option_text": "6. Garantiscono sempre risultati coerenti 21",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 245,
    "code": "M3.2.1.11",
    "question": "Quali dei seguenti gruppi di norme fanno parte della famiglia degli Standard ISO/IEC 27000? V F V V V F V F V V V F V F V F V V V F V V V V V V F F F V V F V V V F  5",
    "options": [
      {
        "option_text": "T1 1. Norme che descrivono una panoramica e la terminologia o vocabolario",
        "answer": true
      },
      {
        "option_text": "2. Norme che specificano i requisiti",
        "answer": true
      },
      {
        "option_text": "3. Norme che identificano i processi",
        "answer": false
      },
      {
        "option_text": "4. Norme che descrivono le linee guida dettagliate",
        "answer": false
      },
      {
        "option_text": "5. Norme che descrivono le linee guida negli specifici ambiti/settori",
        "answer": true
      },
      {
        "option_text": "6. Norme aggiunte che descrivono delle direttive specializzate 22",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 246,
    "code": "M3.2.5.1",
    "question": "Quali delle seguenti sono effettive differenze tra NIST Cyber Security Framework e ISO 27001 1. Il NIST è stato creato principalmente per la gestione del rischio sulle informazioni, ISO 27001 è invece un approccio",
    "options": [
      {
        "option_text": "riconosciuto a livello internazionale per la creazione e il mantenimento di un ISMS",
        "answer": true
      },
      {
        "option_text": "2. ISO 27001 è volontario, mentre il NIST CSF prevede la certificazione 3. I framework NIST hanno vari cataloghi di controllo e cinque funzioni per personalizzare i controlli di sicurezza informatica, mentre l'allegato A ISO 27001 (2013) fornisce 14 categorie di controllo con 114 controlli e 7 clausole di gestione per",
        "answer": false
      },
      {
        "option_text": "guidare le organizzazioni attraverso i loro ISMS",
        "answer": true
      },
      {
        "option_text": "4. La ISO 27001 è meno tecnica, con maggiore enfasi sulla gestione basata sul rischio",
        "answer": true
      },
      {
        "option_text": "5. La ISO 27001 è più tecnica, con minore enfasi sulla gestione basata sul rischio 6. La ISO 27001 è una buona scelta per certificare le organizzazioni che hanno maturità operativa, mentre il NIST CSF può essere più adatto per le organizzazioni che si trovano nelle fasi iniziali dello sviluppo di un programma di rischio per la",
        "answer": false
      },
      {
        "option_text": "sicurezza informatica 23",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 247,
    "code": "M3.3.1.2",
    "question": "Quali sono le origini legislative del diritto alla privacy italiano? 1. Costituzione Italiana, articoli 14, 15 e 21, riguardanti il domicilio, la libertà e segretezza della corrispondenza, e la libertà",
    "options": [
      {
        "option_text": "di manifestazione del pensiero",
        "answer": true
      },
      {
        "option_text": "2. Costituzione Italiana articolo 2, come anche sostenuto la Corte Costituzionale con la sentenza n. 38 del 1973",
        "answer": true
      },
      {
        "option_text": "3. Sentenza della Corte di Cassazione n. 4487 del 1961",
        "answer": false
      },
      {
        "option_text": "4. Sentenza della Corte di Cassazione n. 4487 del 1956",
        "answer": true
      },
      {
        "option_text": "5. Prima legge italiana di tutela della privacy, Legge 675 del 1996, come attuazione della direttiva 95/46/CE",
        "answer": true
      },
      {
        "option_text": "6. Prima legge italiana di tutela della privacy, Legge 675 del 1998, come attuazione della direttiva 95/46/CE 24",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 248,
    "code": "M3.3.1.3",
    "question": "Quali sono le attuali leggi italiane sulla privacy? 1. Il decreto 198 del 2004 “Codice in materia di protezione dei dati personali” detto anche “Testo unico sulla Privacy”,",
    "options": [
      {
        "option_text": "entrato in vigore dal 1° gennaio 2004 2. Il decreto 196 del 2003 “Codice in materia di protezione dei dati personali” detto anche “Testo unico sulla Privacy”,",
        "answer": false
      },
      {
        "option_text": "entrato in vigore dal 1° gennaio 2004 3. Il decreto 196 del 2003 “Codice in materia di protezione dei dati personali” detto anche “Testo unico sulla Privacy”,",
        "answer": true
      },
      {
        "option_text": "entrato in vigore dal 1° gennaio 2006 4. Il Regolamento UE 2016/697 del Parlamento Europeo e del Consiglio del 27 aprile 2016, cosiddetto GDPR (General Data Protection Regulation) attraverso il D. L. di adeguamento 10 agosto 2018, n. 101, dal D.M. n. 15 marzo 2019 e dal D.L. 14",
        "answer": false
      },
      {
        "option_text": "giugno 2019, n. 53 5. Il Regolamento UE 2016/679 del Parlamento Europeo e del Consiglio del 25 aprile 2016, cosiddetto GDPR (General Data Protection Regulation) attraverso il D.L. di adeguamento 10 agosto 2018, n. 101, dal D.M. n. 15 marzo 2019 e dal D.L. 14",
        "answer": false
      },
      {
        "option_text": "giugno 2019, n. 53 6. Il Regolamento UE 2016/679 del Parlamento Europeo e del Consiglio del 27 aprile 2016, cosiddetto GDPR (General Data Protection Regulation) attraverso il D.L. di adeguamento 10 agosto 2018, n. 101, dal D.M. n. 15 marzo 2019 e dal D.L. 14",
        "answer": false
      },
      {
        "option_text": "giugno 2019, n. 53 25",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 249,
    "code": "M3.3.2.3",
    "question": "Il Patent Infringement",
    "options": [
      {
        "option_text": "1. È inteso come la violazione dei diritti di proprietà intellettuale o di brevetto",
        "answer": true
      },
      {
        "option_text": "2. Per la legge italiana è assimilato al reato di furto",
        "answer": false
      },
      {
        "option_text": "3. Per la legge italiana è assimilato al reato di contraffazione",
        "answer": true
      },
      {
        "option_text": "4. È in costante aumento grazie al grande sviluppo dell’e-commerce e l’utilizzo dei social media per finalità di marketing",
        "answer": true
      },
      {
        "option_text": "5. Riguarda beni di lusso e griffati, alimentari, farmaci (con tutte le implicazioni relative alla salute pubblica), ecc. 6. Anche se non arreca un enorme danno economico sia ai titolari dei diritti che ai consumatori e comunque un fenomeno",
        "answer": true
      },
      {
        "option_text": "sotto osservazione 26 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 250,
    "code": "M3.3.5.4",
    "question": "Quali dei seguenti sono effettivamente Operatori di Servizi Essenziali (OES) secondo NIS",
    "options": [
      {
        "option_text": "1. Impresa elettrica",
        "answer": true
      },
      {
        "option_text": "2. Distributore locale di carburante per autotrazione",
        "answer": false
      },
      {
        "option_text": "3. Gestori del sistema di distribuzione energia elettrica",
        "answer": true
      },
      {
        "option_text": "4. Gestori del sistema di trasmissione energia elettrica",
        "answer": true
      },
      {
        "option_text": "5. Gestori del sistema di distribuzione gas",
        "answer": true
      },
      {
        "option_text": "6. Gestori del sistema di tele-trasmissione gas 27",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 251,
    "code": "M3.3.5.5",
    "question": "Quali delle seguenti sono funzioni del CSIRT (Computer Security Incident Response Team) nazionale?",
    "options": [
      {
        "option_text": "1. Il monitoraggio degli incidenti a livello nazionale ed internazionale 2. L’emissione di preallarmi, allerte, annunci e divulgazione di informazioni alle parti interessate in merito a rischi e incidenti Vero",
        "answer": false
      },
      {
        "option_text": "3. La delega dell’attività di intervento in caso di incidente",
        "answer": false
      },
      {
        "option_text": "4. L’analisi dinamica dei rischi e degli incidenti",
        "answer": true
      },
      {
        "option_text": "5. La sensibilizzazione situazionale",
        "answer": true
      },
      {
        "option_text": "6. La partecipazione alla rete europea dei CSIRT 28",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 252,
    "code": "M3.3.5.6",
    "question": "Chi sono i DSP (Digital Service Providers) secondo la Direttiva NIS?",
    "options": [
      {
        "option_text": "1. Cloud Computing Services",
        "answer": true
      },
      {
        "option_text": "2. Cloud Virtual Machines",
        "answer": false
      },
      {
        "option_text": "3. Online Market Places",
        "answer": true
      },
      {
        "option_text": "4. Online Search Engines",
        "answer": true
      },
      {
        "option_text": "5. Online products e-commerce",
        "answer": false
      },
      {
        "option_text": "6. Online people recruitments 29",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 253,
    "code": "M3.3.6.6",
    "question": "Il principio di “Accountability” del GDPR",
    "options": [
      {
        "option_text": "1. È un concetto che può essere tradotto in italiano come responsabilizzazione/rendicontazione",
        "answer": true
      },
      {
        "option_text": "2. È un concetto che può essere tradotto in italiano come contabilità 3. Dispone che il titolare del trattamento adotti politiche e attui misure adeguate a garantire che il trattamento dei dati",
        "answer": false
      },
      {
        "option_text": "personali sia conforme allo stesso Regolamento 4. Prevede l’adozione di comportamenti proattivi e tali da dimostrare la concreta adozione di misure finalizzate ad",
        "answer": false
      },
      {
        "option_text": "assicurare la corretta applicazione del regolamento 5. Prevede l’adozione di criteri di \"data protection by default and by design\" ovvero che la protezione dei dati deve essere",
        "answer": true
      },
      {
        "option_text": "da progetto e indipendente dall’eventuale autorizzazione al trattamento 6. Dispone che il titolare del trattamento adotti politiche e attui misure adeguate a garantire ed essere in grado di",
        "answer": true
      },
      {
        "option_text": "dimostrare che il trattamento dei dati personali effettuato sia conforme allo stesso Regolamento 30",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 254,
    "code": "M3.4.1.1",
    "question": "Quali dei seguenti requisiti ISO 27001 possono rappresentare la fase PLAN del ciclo PDCA",
    "options": [
      {
        "option_text": "1. Contesto",
        "answer": true
      },
      {
        "option_text": "2. Leadership",
        "answer": true
      },
      {
        "option_text": "3. Pianificazione",
        "answer": true
      },
      {
        "option_text": "4. Supporto",
        "answer": true
      },
      {
        "option_text": "5. Attività Operative",
        "answer": false
      },
      {
        "option_text": "6. Valutazione delle Prestazioni Esercizio 1 Nello schema in basso è rappresentata una LAN con 128 indirizzi: Completare la seguente tabella indicando gli indirizzi richiesti, attraverso la notazione a bit di maschera e rispondendo alla domanda finale: Indirizzo di rete con notazione dei bit di maschera 135.124.20.0/23 Indirizzo di Broadcast 135.124.21.255 Indirizzo di Maschera di Rete 255.255.254.0 Indirizzo Subnet 1 135.124.20.0/25 Indizizzo Subnet 2  Non è possibile definire una subnet con 254 indirizzi disponibili a partire dall’indirizzo 135.124.20.129 Indirizzo Subnet 3  135.124.21.128/25 Qual è il nome del dispositivo di colore azzurro? Router Esercizio 2 Il controllo ISO 27001 Rev. 2022 “Configuration Management” (Gestione della Configurazione) deve essere applicato (indicare solo X sulle opzioni vere) A tutte le configurazioni, comprese le configurazioni di sicurezza, di hardware, software, servizi e reti che devono essere stabilite, documentate, implementate, monitorate e riviste V F F V V V V V V V F F  8 T1 Alle sole configurazioni di sicurezza, di hardware, software, servizi e reti che devono essere stabilite, documentate, implementate, monitorate e riviste Alle sole configurazioni del software che devono essere stabilite, documentate, implementate, monitorate e riviste Il controllo è di tipo: Preventivo Investigativo Correttivo Organizzativo Fisico Tecnologico  NumeroModulo Risposta 1 Nel Packet Switching (la tecnica di commutazione):",
        "answer": false
      },
      {
        "option_text": "1.1Il messaggio viene diviso in parti più piccole (packets) che vengono gestite singolarmente",
        "answer": true
      },
      {
        "option_text": "1.2I messaggi vengono raggruppati in pacchetti (packets) che vengono trasmessi insieme",
        "answer": false
      },
      {
        "option_text": "1.3Ai pacchetti (packets) viene assegnato nell’intestazione Indirizzo Sorgente, la Destinazione ed altri dati",
        "answer": true
      },
      {
        "option_text": "1.4I pacchetti viaggiano attraverso la rete, prendendo il percorso più breve possibile (routing)",
        "answer": true
      },
      {
        "option_text": "1.5I pacchetti vengono suddivisi e trasmessi in maniera indipendente e riassemblati all'estremità ricevente nell'ordine di arrivo",
        "answer": false
      },
      {
        "option_text": "1.6Se un messaggio arriva mancante di pacchetti o danneggiato verrà inviata una notifica per inviare nuovamente il messaggio, se invece viene raggiunto l'ordine corretto dei pacchetti, verrà inviata notifica di conferma 2 La sequenza di caratteri (dentro le virgolette): \"https://www.sitoesempio.it/indirizzo/?ref=NOME\"",
        "answer": true
      },
      {
        "option_text": "2.1Rappresenta un testo nel linguaggio http",
        "answer": false
      },
      {
        "option_text": "2.2Rappresenta un indirizzo URL (Uniform Resource Locator)",
        "answer": true
      },
      {
        "option_text": "2.3Identifica univocamente l’indirizzo della risorsa “sitoesempio”",
        "answer": true
      },
      {
        "option_text": "2.4Ha come percorso “indirizzo”",
        "answer": true
      },
      {
        "option_text": "2.6Ha come stringa di query “ref=NOME”",
        "answer": true
      },
      {
        "option_text": "2.6Esprime “in chiaro” l’indirizzo IP 3 Quali sono le ragioni della crescente diffusione della criminalità informatica",
        "answer": false
      },
      {
        "option_text": "3.1L’incessante sviluppo della tecnologia informatica e le nuove opportunità di aggressione ai beni e le proprietà",
        "answer": true
      },
      {
        "option_text": "3.2La difficoltà della ricerca delle prove e i non sempre adeguati strumenti normativi",
        "answer": true
      },
      {
        "option_text": "3.3Il forte radicamento dei fenomeni cyber criminosi con il loro territorio d’origine",
        "answer": false
      },
      {
        "option_text": "3.4La transnazionalità di fenomeni criminosi e la difformità degli strumenti normativi nei vari stati",
        "answer": true
      },
      {
        "option_text": "3.5La transizione del reato da un ambiente tangibile e materiale verso un ambiente intangibile e dematerializzato",
        "answer": true
      },
      {
        "option_text": "3.6La transizione del reato da un ambiente intangibile e dematerializzato verso un ambiente tangibile e materiale 4 Il Social Engineering",
        "answer": false
      },
      {
        "option_text": "4.1È una tecnica di attacco che può sfruttare anche strumenti non informatici",
        "answer": true
      },
      {
        "option_text": "4.2Può utilizzare i siti “social” su cui sono esposte direttamente o indirettamente informazioni personali",
        "answer": true
      },
      {
        "option_text": "4.3Può utilizzare il Baiting",
        "answer": true
      },
      {
        "option_text": "4.4Può utilizzare un attacco tipo “forza bruta”",
        "answer": false
      },
      {
        "option_text": "4.5Può utilizzare il Phishing",
        "answer": true
      },
      {
        "option_text": "4.6È diretto prevalentemente contro le aziende 5 L’Avanced Persistent Threat (APT)",
        "answer": false
      },
      {
        "option_text": "5.1È una minaccia perpetrata da un avversario dotato di notevole bagaglio tecnico e grandi risorse, in grado di effettuare attacchi su vasta scala, utilizzando molteplici vettori, e per periodi di tempo molto estesi",
        "answer": true
      },
      {
        "option_text": "5.2È una minaccia che colpisce aziende molto grandi",
        "answer": false
      },
      {
        "option_text": "5.3È di solito gestita da gruppi organizzati e/o da stati sovrani",
        "answer": true
      },
      {
        "option_text": "5.4Utilizza software largamente disponibili per riuscire meglio a propagarsi",
        "answer": false
      },
      {
        "option_text": "5.5Può utilizzare software creati ad hoc, più versatili e complessi da rilevare",
        "answer": true
      },
      {
        "option_text": "5.6Per raccogliere informazioni sui propri obiettivi può utilizzare tool estremamente sofisticati, e, potenzialmente, anche appoggiarsi ai servizi di intelligence del paese di provenienza 6 L’Incapsulamento secondo il modello ISO/OSI",
        "answer": true
      },
      {
        "option_text": "6.1Permette a ciascun livello dello stack di comunicare con un proprio e specifico “protocollo”",
        "answer": true
      },
      {
        "option_text": "6.2Permette di fatto il funzionamento del modello stesso",
        "answer": true
      },
      {
        "option_text": "6.3Avviene dal Livello Applicazione (7) al livello Collegamento (2) in trasmissione",
        "answer": true
      },
      {
        "option_text": "6.4Avviene dal Livello Applicazione (7) al livello Fisico (1) in trasmissione",
        "answer": false
      },
      {
        "option_text": "6.5Avviene dal Livello Collegamento (2) al livello Applicazione (7) in ricezione (Decapsulamento)",
        "answer": true
      },
      {
        "option_text": "6.6Avviene dal Livello Applicazione (7) al livello Fisico (1) in ricezione (Decapsulamento) 7 I protocolli seriali multipunto",
        "answer": false
      },
      {
        "option_text": "7.1Sono protocolli seriali punto-punto che possono collegare ulteriori unità attraverso una connessione multi-drop",
        "answer": true
      },
      {
        "option_text": "7.2Possono utilizzare lo standard RS-422 e RS-485",
        "answer": true
      },
      {
        "option_text": "7.3In una configurazione con molte unità connesse solo un paio possono effettivamente comunicare",
        "answer": true
      },
      {
        "option_text": "7.4Possono utilizzare lo standard Bluetooth",
        "answer": false
      },
      {
        "option_text": "7.5Nel caso utilizzino gli standard RS-422 che di RS-485 sono sempre contemporaneamente bidirezionali (full-duplex)",
        "answer": false
      },
      {
        "option_text": "7.6Nel caso utilizzino lo standard RS-422 sono contemporaneamente bidirezionali  8 Una trasmissione deterministica",
        "answer": true
      },
      {
        "option_text": "8.1Viene semplicemente realizzata rispettando la sequenza temporale degli eventi",
        "answer": true
      },
      {
        "option_text": "8.2Viene semplicemente realizzata trasmettendo i messaggi con una bassa latenza",
        "answer": false
      },
      {
        "option_text": "8.3Viene semplicemente realizzata rispettando il principio di causalità (il nesso causa-effetto)",
        "answer": true
      },
      {
        "option_text": "8.4Se non lo è, la trasmissione è casuale (o semi-casuale)",
        "answer": true
      },
      {
        "option_text": "8.5Concettualmente coincide con la trasmissione real-time",
        "answer": false
      },
      {
        "option_text": "8.6Si associa al concetto di real-time, in modo che la trasmissione avvenga secondo una sequenza predeterminata ed entro limiti temporali ben precisi 9 Quali sono le ragioni che hanno portato alla creazione del protocollo TCP/IP",
        "answer": true
      },
      {
        "option_text": "9.1Realizzare una trasmissione stabile tra due host",
        "answer": true
      },
      {
        "option_text": "9.2Realizzare una trasmissione veloce tra due host",
        "answer": false
      },
      {
        "option_text": "9.3Realizzare una trasmissione monodirezionale affidabile",
        "answer": false
      },
      {
        "option_text": "9.4Stabilire una connessione tra un'origine e una destinazione, assicurandosi che rimanga attiva fino alla fine della comunicazione",
        "answer": true
      },
      {
        "option_text": "9.5Realizzare uno standard per il Packet Switching ovvero la suddivisione di un messaggio in pacchetti piccoli trasmessi indipendentemente, funzionamento alla base di internet",
        "answer": true
      },
      {
        "option_text": "9.6Realizzare un protocollo affidabile, deterministico e realtime 10 Il modello di comunicazione Broadcast:",
        "answer": false
      },
      {
        "option_text": "10.1Identifica la comunicazione uno a tutti",
        "answer": true
      },
      {
        "option_text": "10.2Identifica la comunicazione ad ampio spettro, uno a ad alcuni",
        "answer": false
      },
      {
        "option_text": "10.3Può avvenire a livello 2 dello stack ISO (indirizzamento MAC)",
        "answer": true
      },
      {
        "option_text": "10.4Può avvenire a livello 3 dello stack ISO (Indirizzamento IP)",
        "answer": true
      },
      {
        "option_text": "10.5Può peggiorare la latenza nella rete",
        "answer": true
      },
      {
        "option_text": "10.6Può migliorare la latenza di rete 11 La subnet 160.12.32.128/19:",
        "answer": false
      },
      {
        "option_text": "11.1Ha come indirizzo di rete 160.12.32.0",
        "answer": true
      },
      {
        "option_text": "11.2Ha come indirizzo di broadcast 160.12.63.255",
        "answer": true
      },
      {
        "option_text": "11.3Ha come indirizzo di broadcast 160.12.63.64",
        "answer": false
      },
      {
        "option_text": "11.4Ha come maschera di sottorete 255.255.224.0",
        "answer": true
      },
      {
        "option_text": "11.5Ha come maschera di sottorete 255.255.32.0",
        "answer": false
      },
      {
        "option_text": "11.6Ha uno spazio di indirizzamento che arriva sino a (HostMax) 160.12.63.254 12 Lo Switch di rete:",
        "answer": true
      },
      {
        "option_text": "12.1È un dispositivo elettronico intelligente, dotato di porte di interfaccia di varie tipologie",
        "answer": true
      },
      {
        "option_text": "12.2Può essere un dispositivo elettrico non dotato di CPU e, se “Unmanaged”, configurabile",
        "answer": false
      },
      {
        "option_text": "12.3Può segmentare il dominio di broadcast attraverso le VPN",
        "answer": false
      },
      {
        "option_text": "12.4Può avere una gestione “Unmanaged” o “Managed”",
        "answer": true
      },
      {
        "option_text": "12.5Può avere un instradamento di tipo “store-and-forward”",
        "answer": true
      },
      {
        "option_text": "12.6Se “Unmanaged” non permette la configurazione delle VLAN 13 Una rete peer to peer",
        "answer": true
      },
      {
        "option_text": "13.1Ha nodi che, diversamente dalla rete client-server, possono richiedere e fornire servizi",
        "answer": true
      },
      {
        "option_text": "13.2Ha nodi che, analogamente alla rete client-server, condividono lo stesso network",
        "answer": true
      },
      {
        "option_text": "13.3Ha nodi che, diversamente dalla rete client-server, sono specializzati per richiedere o fornire servizi",
        "answer": false
      },
      {
        "option_text": "13.4Può essere considerata come una rete logica da “pari” a “pari”",
        "answer": true
      },
      {
        "option_text": "13.5È un’architettura “fisica”",
        "answer": false
      },
      {
        "option_text": "13.6È un’architettura “logica” 14 La Società S.r.l.",
        "answer": true
      },
      {
        "option_text": "14.1È una società in cui i soci rispondono delle obbligazioni sociali anche oltre i limiti di quanto hanno conferito",
        "answer": false
      },
      {
        "option_text": "14.2È una società di capitali le cui partecipazioni sono rappresentate da quote e non da azioni",
        "answer": true
      },
      {
        "option_text": "14.3È una società in cui per le obbligazioni sociali risponde solo la società stessa con il suo patrimonio",
        "answer": true
      },
      {
        "option_text": "14.4Sono sempre società a responsabilità limitata di un solo imprenditore",
        "answer": false
      },
      {
        "option_text": "14.5Sono Società a responsabilità dei soci limitata al capitale sottoscritto",
        "answer": true
      },
      {
        "option_text": "14.6Sono Società a responsabilità dei soci illimitata oltre al capitale sottoscritto 15 Gli asset aziendali",
        "answer": false
      },
      {
        "option_text": "15.1Sono quelle entità all’interno dell’azienda che generano valore",
        "answer": true
      },
      {
        "option_text": "15.2Possono essere solo tangibili, ovvero fisici",
        "answer": false
      },
      {
        "option_text": "15.3Possono essere tangibili o intangibili",
        "answer": true
      },
      {
        "option_text": "15.4Se non gestiti correttamente possono mettere a repentaglio l’esistenza dell’intera organizzazione",
        "answer": true
      },
      {
        "option_text": "15.5Di solito non sono informatici",
        "answer": false
      },
      {
        "option_text": "15.6Informatici sono soggetti a fattori di rischio costantemente in evoluzione 16 Una linea di assemblaggio produce 2.500 pezzi ora per 24h al giorno, 7 giorni a settimana, ogni pezzo vale 100€.",
        "answer": true
      },
      {
        "option_text": "16.1Nel caso di un fermo linea di 5 minuti, causato da un incidente, l'azienda ha una perdita di circa 20.800 €",
        "answer": true
      },
      {
        "option_text": "16.2Nel caso di un fermo linea di 5 minuti, causato da un indicente, l'azienda ha una perdita di circa 2.080 €",
        "answer": false
      },
      {
        "option_text": "16.3Nel caso di un fermo linea di 5 minuti, causato da un indicente, l'azienda ha una perdita di circa 208 €",
        "answer": false
      },
      {
        "option_text": "16.4Per limitare le perdite sotto i 50.000 €/anno si dovrebbe avere la linea attiva (quindi disponibile) per pi ù del 99.997% del tempo in un anno",
        "answer": true
      },
      {
        "option_text": "16.5Per limitare le perdite sotto i 50.000 €/anno si dovrebbe avere la linea attiva (quindi disponibile) per pi ù del 99.97% del tempo in un anno",
        "answer": false
      },
      {
        "option_text": "16.6Per limitare le perdite sotto i 50.000 €/anno si dovrebbe avere la linea attiva (quindi disponibile) per pi ù del 99.7% del tempo in un anno 17 Nella gestione aziendale le Operazioni Oggettive possono essere:",
        "answer": false
      },
      {
        "option_text": "17.1Il reperimento di mezzi finanziari",
        "answer": true
      },
      {
        "option_text": "17.2Le attività decisionali",
        "answer": false
      },
      {
        "option_text": "17.3Gli Investimenti per lo sviluppo del business",
        "answer": true
      },
      {
        "option_text": "17.4Le attività di controllo",
        "answer": false
      },
      {
        "option_text": "17.5La produzione ovvero la trasformazione in prodotti finiti o semilavorati",
        "answer": true
      },
      {
        "option_text": "17.6Il disinvestimento di asset obsoleti 18 Un ISMS per ISO/IEC 27000 è un insieme di regole che un’azienda deve stabilire per:",
        "answer": true
      },
      {
        "option_text": "18.1Identificare gli stakeholder e le loro aspettative nei confronti dell'azienda in termini di sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "18.2Identificare quali rischi logici e fisici esistono per le persone all’interno dell’organizzazione",
        "answer": false
      },
      {
        "option_text": "18.3Definire i controlli e altri metodi di mitigazione per soddisfare le aspettative (al punto 1) identificate e gestire i rischi",
        "answer": true
      },
      {
        "option_text": "18.4Fissare obiettivi qualitativi e generici su ciò che deve essere raggiunto con la sicurezza delle informazioni",
        "answer": false
      },
      {
        "option_text": "18.5Misurare continuamente che i controlli implementati siano effettivamente efficaci",
        "answer": true
      },
      {
        "option_text": "18.6Migliorare continuativamente la postura dell’organizzazione relativamente alle problematiche di Cybersecurity 19 Quale dei seguenti controlli ISO 27001:2022 sono stati creati a supporto della normativa GDPR?",
        "answer": true
      },
      {
        "option_text": "19.1Threat Intelligence",
        "answer": false
      },
      {
        "option_text": "19.2Data masking",
        "answer": true
      },
      {
        "option_text": "19.3Data leakage prevention",
        "answer": true
      },
      {
        "option_text": "19.4Monitoring activities;",
        "answer": false
      },
      {
        "option_text": "19.5ICT readiness for business continuity;",
        "answer": false
      },
      {
        "option_text": "19.6Information deletion 20 Gli Attributi associati ai Gruppi di Controlli nella revisione ISO 27001 del 2022",
        "answer": true
      },
      {
        "option_text": "20.1Possono essere utilizzati per filtrare, ordinare e presentare i controlli",
        "answer": true
      },
      {
        "option_text": "20.2Permettono di etichettare i controlli in base al tipo di controllo (Preventivo, Investigativo e Correttivo)",
        "answer": true
      },
      {
        "option_text": "20.3Permettono di etichettare i controlli in base alle Information Security Properties (Riservatezza, Integrità e Disponibilità)",
        "answer": true
      },
      {
        "option_text": "20.4Permettono di etichettare i controlli in base alla Criticità (da 1 a 100)",
        "answer": false
      },
      {
        "option_text": "20.5Permettono di etichettare i controlli in base ai Domini di Sicurezza (Governance & Ecosystem, Protection, Defence, Resilience)",
        "answer": true
      },
      {
        "option_text": "20.6Permettono di etichettare i controlli in base ai Concetti NIST CSF (Identify…) 21 I nuovi controlli di ISO 27001 Rev. 2022 sono specializzati per:",
        "answer": true
      },
      {
        "option_text": "21.1Una maggior sicurezza nella gestione dei servizi Cloud",
        "answer": true
      },
      {
        "option_text": "21.2Una migliore preparazione dell’ICT in relazione alle problematiche di Business Continuity",
        "answer": true
      },
      {
        "option_text": "21.3Per privilegiare l’utilizzo di software di prodotto solo da determinati fornitori",
        "answer": false
      },
      {
        "option_text": "21.4Migliore protezione dei dati anche in relazione del loro trattamento in funzione del GDPR",
        "answer": true
      },
      {
        "option_text": "21.5Il miglioramento dell’Internet Browsing attraverso l’uso del filtraggio dei siti",
        "answer": true
      },
      {
        "option_text": "21.6Lo sviluppo sicuro del codice software 22 I controlli ISO 27001 nella Rev. 2022 sono raccolti nei seguenti gruppi:",
        "answer": true
      },
      {
        "option_text": "22.1Le persone",
        "answer": true
      },
      {
        "option_text": "22.2I fornitori",
        "answer": false
      },
      {
        "option_text": "22.3Gli oggetti fisici",
        "answer": true
      },
      {
        "option_text": "22.4La tecnologia",
        "answer": true
      },
      {
        "option_text": "22.5Gli aspetti organizzativi",
        "answer": true
      },
      {
        "option_text": "22.6La Supply Chain 23 Il controllo ISO/IEC 27001 rev.2022 \"ICT readiness for business continuity\" ovvero la capacità dell'ICT di reagire a situazioni impreviste per garantire la continuità operativa",
        "answer": false
      },
      {
        "option_text": "23.1E' un controllo di tipo Correttivo",
        "answer": true
      },
      {
        "option_text": "23.2E' un controllo di tipo Investigativo",
        "answer": false
      },
      {
        "option_text": "23.3Migliora la disponibilità",
        "answer": true
      },
      {
        "option_text": "23.4Migliora l'integrità dei dati e delle informazioni",
        "answer": false
      },
      {
        "option_text": "23.5E' nel dominio di sicurezza della Resilienza",
        "answer": true
      },
      {
        "option_text": "23.6Prevede che le funzionalità dell'ICT siano mantenute e testate sulla base degli obiettivi di continuità operativa dell'azienda. 24 Le sottocategorie del NIST CSF Framcework Core",
        "answer": true
      },
      {
        "option_text": "24.1Sono i risultati che si possono ottenere",
        "answer": true
      },
      {
        "option_text": "24.2Fanno sempre riferimento ad esempi pratici presenti nei riferimenti informativi",
        "answer": true
      },
      {
        "option_text": "24.3Sono raggruppate in categorie che poi compongono le funzioni NIST CSF",
        "answer": true
      },
      {
        "option_text": "24.4Non sono assimilabili ai controlli ISO27001",
        "answer": false
      },
      {
        "option_text": "24.5Possono fare riferimento ad altri standard di settore",
        "answer": true
      },
      {
        "option_text": "24.6Di solito non fanno mai riferimento ad altri standard di settore 25 Nel Tier \"Consapevole\" del NIST CSF",
        "answer": false
      },
      {
        "option_text": "25.1Le pratiche di gestione del rischio sono approvate dalla direzione ma potrebbero non essere stabilite come politica a livello di organizzazione",
        "answer": true
      },
      {
        "option_text": "25.2Le pratiche di gestione del rischio dell'organizzazione sono formalmente approvate ed espresse come policy",
        "answer": false
      },
      {
        "option_text": "25.3Le politiche, i processi e le procedure informative sui rischi sono definiti, implementati come previsto e riesaminati",
        "answer": false
      },
      {
        "option_text": "25.4Non è stato stabilito un approccio a livello di organizzazione alla gestione del rischio di sicurezza informatica",
        "answer": true
      },
      {
        "option_text": "25.5L'organizzazione comprende il proprio ruolo nell'ecosistema più ampio rispetto ai rapporti dipendenti o di dipendenza, ma non a entrambi",
        "answer": true
      },
      {
        "option_text": "25.6L'organizzazione comprende completamente il proprio ruolo nel suo ecosistema e contribuisce alla comprensione dei rischi verso l'esterno 26 Perché è stato realizzato lo standard IEC 62443?",
        "answer": false
      },
      {
        "option_text": "26.1Perché all’interno di un’organizzazione esistono una molteplicità di sistemi intelligenti (dotati di CPU), rilevanti per la continuità del business, oltre ai comuni computer",
        "answer": true
      },
      {
        "option_text": "26.2Per avere solamente uno standard di sicurezza informatica all’interno delle aziende industriali",
        "answer": false
      },
      {
        "option_text": "26.3Formalmente per realizzare un sistema di gestione in grado di affrontare e mitigare le vulnerabilità di sicurezza nei sistemi di controllo e automazione industriale (IACS)",
        "answer": true
      },
      {
        "option_text": "26.4Perché gli standard di sicurezza informatica più diffusi non riescono a rispondere a tutti i paradigmi di funzionamento dei sistemi all’interno di un’organizzazione",
        "answer": true
      },
      {
        "option_text": "26.5Per avere uno standard con requisiti applicabili solamente nei reparti produttivi",
        "answer": false
      },
      {
        "option_text": "26.6Per avere uno standard che permetta di proteggere i reparti produttivi da vettori d’attacco provenienti anche dalla rete office 27 Il requisito \"Supporto\" nell'implementazione di un Sistema di Gestione della SI secondo lo standard ISO 27001",
        "answer": true
      },
      {
        "option_text": "27.1Definisce che l'organizzazione deve mettere a disposizione le risorse necessarie per l’istituire, implementare, manutenere e continuare a migliorare l'SGSI",
        "answer": true
      },
      {
        "option_text": "27.2Definisce che devono essere determinate le  competenze necessarie delle persone che influenzano le prestazioni SGSI",
        "answer": true
      },
      {
        "option_text": "27.3Definisce che è necessario garantire giusti livelli di competenza con adeguata istruzione, formazione, addestramento",
        "answer": true
      },
      {
        "option_text": "27.4Definisce che coloro che operano in azienda debbono conoscere la policy di sicurezza, le loro responsabilità specifiche e le implicazioni derivanti dalla non rispetto delle regole",
        "answer": true
      },
      {
        "option_text": "27.5Definisce i criteri da utilizzare per la comunicazione al solo management all’interno dell’azienda",
        "answer": false
      },
      {
        "option_text": "27.6Definisce le misure da adottare per acquisire le competenze in una prospettiva di minimizzazione dei costi di formazione 28 Perché è necessario analizzare il rischio?",
        "answer": false
      },
      {
        "option_text": "28.1L'analisi del  rischio può concretamente aiutare l'azienda a identificare l'impatto dei pericoli sulle risorse aziendali",
        "answer": true
      },
      {
        "option_text": "28.2L'analisi del rischio permette in ultimo di eliminare completamente l'impatto dei pericoli in tutti i comparti aziendali",
        "answer": false
      },
      {
        "option_text": "28.3L'analisi del rischio permette di mettere in atto le misure al fine di mitigare gli effetti di questo rischio sulle proprie risorse",
        "answer": true
      },
      {
        "option_text": "28.4L'analisi del rischio permette di individuare il livello massimo di rischio che un'organizzazione è in grado di sopprotare per raggiungere i propri obiettivi strategici",
        "answer": true
      },
      {
        "option_text": "28.5Una volta analizzato, identificato e opportunamento valutato è possibile gestire il rischio correttamente",
        "answer": true
      },
      {
        "option_text": "28.6L'analisi del rischio è uno strumento molto focalizzato sugli aspetti finanziari ed amministrativi 29 La Tassonomia dei Rischi Organizzativi",
        "answer": false
      },
      {
        "option_text": "29.1E' una corretta mappatura della tipologia dei rischi che ne permette una prima identificazione",
        "answer": true
      },
      {
        "option_text": "29.2Permette una prima identificazione che richiede ulteriori approfondimenti e valutazioni",
        "answer": true
      },
      {
        "option_text": "29.3Definisce due macro raggruppamenti contenenti i rischi Interni ed Esterni all'organizzazione",
        "answer": true
      },
      {
        "option_text": "29.4Definisce un primo macro raggruppamento contenente i rischi Strategici e Operativi",
        "answer": false
      },
      {
        "option_text": "29.5Suddivide i rischi interni in: Strategici, Operativi e Finanziari",
        "answer": true
      },
      {
        "option_text": "29.6Inserisce il rischio IT tra i rischi stragecici 30 Quali dei seguenti possono essere indicatori chiave del rischio informatico (KRI)?",
        "answer": false
      },
      {
        "option_text": "30.1Numero di attività critiche con vulnerabilità note",
        "answer": true
      },
      {
        "option_text": "30.2Vulnerabilità interne vs. vulnerabilità esterne",
        "answer": true
      },
      {
        "option_text": "30.3Tempo medio di rilascio del prodotto",
        "answer": false
      },
      {
        "option_text": "30.4Tempo medio di interruzione a seguito di un attacco",
        "answer": true
      },
      {
        "option_text": "30.5Numero di giorni per disattivare le credenziali degli ex dipendenti",
        "answer": true
      },
      {
        "option_text": "30.6Soddisfazione media del servizio IT Esercizio 1 Identificare correttamente, nello schema topologico in figura, i dispositivi rappresentati con le lettere: Risposte A Router B Firewall C Switch D Router E Firewall F Switch G Switch H Switch I Switch L Firewall M Anomaly Detection N Switch O Switch P Gateway Qual è il nome dei segmenti di rete con collegamenti colorati in verde e giallo? VLAN  Esercizio 2 Nello schema è rappresentata una LAN con 1024 indirizzi: Risposta Qual è l'indirizzo di rete con notazione dei bit di maschera 242.64.8.0/22 Qual è l'indirizzo di Broadcast 242.64.11.255 Qual è l'indirizzo di Maschera di Rete 255.255.252.0 Qual è l'indirizzo Subnet 1 242.64.8.0/25 Qual è l'indizizzo Subnet 2 242.64.8.128/25 Qual è l'indirizzo Subnet 3 242.64.9.0/24 Che tipologia è il Dispositivo A? Switch gestito  Risultati Appello 06 Settembre 2024",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 255,
    "code": "M1.1.2.3.1",
    "question": "La PAM (Pulse Amplitude Modulation) è:",
    "options": [
      {
        "option_text": "1. Una modulazione di ampiezza",
        "answer": false
      },
      {
        "option_text": "2. Una modulazione digitale a traslazione di ampiezza 3. Una modulazione digitale in cui le informazioni del messaggio sono codificate nell'ampiezza di una serie di impulsi di",
        "answer": true
      },
      {
        "option_text": "segnale",
        "answer": true
      },
      {
        "option_text": "4. Una modulazione analogica a traslazione di ampiezza",
        "answer": false
      },
      {
        "option_text": "5. Una modulazione a traslazione di frequenza",
        "answer": false
      },
      {
        "option_text": "6. Una modulazione digitale con banda a doppio lato 2-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 256,
    "code": "M1.1.2.4.1",
    "question": "Cos’è la larghezza di banda di un canale (satellitare, radio, via cavo)?",
    "options": [
      {
        "option_text": "1. La misura dell’ampiezza dello spettro che passa in un canale 2. Un parametro inversamente proporzionale alla quantità di dati che possono essere trasmessi in un canale nell’unità di",
        "answer": true
      },
      {
        "option_text": "tempo",
        "answer": false
      },
      {
        "option_text": "3. Un parametro proporzionale alla quantità di dati che possono essere trasmessi in un canale nell’unità di tempo",
        "answer": true
      },
      {
        "option_text": "4. Un parametro indipendente dalla quantità di dati trasmessi in un canale",
        "answer": false
      },
      {
        "option_text": "5. La misura dell'ampiezza della gamma di frequenze che possono passare per quel canale",
        "answer": true
      },
      {
        "option_text": "6. La capacità di un qualsiasi canale digitale di trasmettere dati 3-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 257,
    "code": "M1.2.4.3.1",
    "question": "Il Furto di Identità Digitale",
    "options": [
      {
        "option_text": "1. È associato agli articoli 494 e 640 del CP “Sostituzione della propria all'altrui persona” e “Frode Informatica” 2. È relativo all’uso illecito dell'insieme dei dati e delle informazioni che definiscono un individuo e costituiscono la",
        "answer": true
      },
      {
        "option_text": "rappresentazione fisica utilizzabile durante interazioni elettroniche 3. È relativo all’uso illecito dell’insieme dei dati e delle informazioni che definiscono un individuo e costituiscono la",
        "answer": false
      },
      {
        "option_text": "rappresentazione virtuale dell'identità reale utilizzabile durante interazioni elettroniche 4. È relativo ai soli dati biometrici che definiscono un individuo e costituiscono una delle rappresentazioni virtuali",
        "answer": true
      },
      {
        "option_text": "dell'identità reale utilizzabile durante interazioni elettroniche",
        "answer": false
      },
      {
        "option_text": "5. È un reato penale secondo l’ordinamento italiano",
        "answer": true
      },
      {
        "option_text": "6. Può essere associato al solo reato di “Truffa” l’art. 620 del CP 4-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 258,
    "code": "M1.2.4.5.1",
    "question": "Cryptojacking 1. Si tratta di una minaccia in grado di infiltrarsi nei browser web e di compromettere ogni tipo di dispositivo informatico Vero",
    "options": [
      {
        "option_text": "2. È una minaccia che utilizza le risorse di un computer o un dispositivo mobile per criptare dei file",
        "answer": false
      },
      {
        "option_text": "3. È una minaccia che utilizza le risorse di un computer o un dispositivo mobile per “generare” criptovalute",
        "answer": true
      },
      {
        "option_text": "4. Utilizza malware che funzionano da processi in background sottraendo risorse hardware a danno dell’utente",
        "answer": true
      },
      {
        "option_text": "5. Il funzionamento sfrutta il meccanismo di compensazione dei “Miners” delle Blockchain delle criptovalute",
        "answer": true
      },
      {
        "option_text": "6. Si tratta di una minaccia in grado di infiltrarsi nei DNS e di compromettere solo i server Nome Cognome Matricola F V V F F F V F V F V V V F V F V F V F V V V F  2 T1 5-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 259,
    "code": "M1.2.4.8",
    "question": "Quali delle seguenti sono tecniche di Social Engineering:",
    "options": [
      {
        "option_text": "1. Il “baiting” (offrire qualcosa al fine di consentire il download di un file dannoso)",
        "answer": true
      },
      {
        "option_text": "2. Il “phishing” (una mail realizzata appositamente per favorire l'inserimento di informazioni personali)",
        "answer": true
      },
      {
        "option_text": "3. Il “cryptojacking” (bloccare un servizio o un programma per poi chiedere le credenziali per lo sblocco)",
        "answer": false
      },
      {
        "option_text": "4. Il “pretexting” (l'impersonare qualcuno per ottenere l'accesso a dati privilegiati) 5. Lo “scareware” (spingere l'utente a credere che il proprio computer sia infetto per poi offrire una soluzione con cui",
        "answer": true
      },
      {
        "option_text": "infettarlo veramente)",
        "answer": true
      },
      {
        "option_text": "6. Lo “squidding” viene offerto un servizio (che non esiste) per ottenere in cambio dati o informazioni confidenziali 6-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 260,
    "code": "M1.2.4.9.1",
    "question": "L’Avanced Persistent Threat (APT) 1. È una minaccia perpetrata da un avversario dotato di notevole bagaglio tecnico e grandi risorse, in grado di effettuare",
    "options": [
      {
        "option_text": "attacchi su vasta scala, utilizzando molteplici vettori, e per periodi di tempo molto estesi",
        "answer": true
      },
      {
        "option_text": "2. È una minaccia che colpisce aziende molto grandi",
        "answer": false
      },
      {
        "option_text": "3. È di solito gestita da gruppi organizzati e/o da stati sovrani",
        "answer": true
      },
      {
        "option_text": "4. Utilizza software pubblicamente disponibili per riuscire meglio a propagarsi",
        "answer": false
      },
      {
        "option_text": "5. Può utilizzare software creati ad hoc, più versatili e complessi da rilevare 6. Per raccogliere informazioni sui propri obiettivi può utilizzare tool estremamente sofisticati, e, potenzialmente, anche",
        "answer": true
      },
      {
        "option_text": "appoggiarsi ai servizi di intelligence del paese di provenienza Nome Cognome Matricola",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 261,
    "code": "M1.3.1.24",
    "question": "Il livello 1 – Fisico -del Modello ISO/OSI 1. Ha tra le funzioni l’adeguamento alle caratteristiche degli apparati trasmissivi (cavi, fibra ottica, delle prese, dei",
    "options": [
      {
        "option_text": "connettori ecc.)",
        "answer": true
      },
      {
        "option_text": "2. Ha tra le funzioni l’adeguamento alla tensione scelta per rappresentare i bit",
        "answer": true
      },
      {
        "option_text": "3. Può utilizzare protocolli Bluetooth",
        "answer": true
      },
      {
        "option_text": "4. Può utilizzare protocolli IP",
        "answer": false
      },
      {
        "option_text": "5. Ha la funzione di interfacciare il software con l’hardware di comunicazione",
        "answer": true
      },
      {
        "option_text": "6. Una volta definito e configurato tende a vincolare i livelli superiori agli specifici mezzi fisici di comunicazione 8-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 262,
    "code": "M1.3.1.25",
    "question": "Il livello 7 – Applicazione – Del livello ISO/OSI",
    "options": [
      {
        "option_text": "1. Può avere tra i protocolli di servizio il Dynamic Host Configuration Protocol - (DHCP)",
        "answer": true
      },
      {
        "option_text": "2. Può avere tra i protocolli di servzio RPC (Remote Procedure Call)",
        "answer": false
      },
      {
        "option_text": "3. Può avere tra i protocolli di servizio il Network Time Protocol - (NTP)",
        "answer": true
      },
      {
        "option_text": "4. Può avere tra i protocolli di servizio il Lightweight Directory Access Protocol - (LDAP)",
        "answer": true
      },
      {
        "option_text": "5. Può avere tra i protocolli di accesso a terminali remoti Secure Shell (SSH) 6. Può avere tra i protocolli di accesso a terminali remoti (Digital Network Architecture Session Control Protocol) DNA SCP Falso 9-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 263,
    "code": "M1.3.1.26",
    "question": "Il servizio di Sincronizzazione del livello ISO/OSI 5 - Sessione 1. Permette ai processi coinvolti nella comunicazione di inserire dei checkpoint (punti di sincronizzazione) in un flusso dati Vero",
    "options": [
      {
        "option_text": "2. Permette di sincronizzare la comunicazione attraverso pacchetti di durata temporale sempre uguale 3. Permette di dividere (logicamente) il flusso dei dati in unità più piccole in modo che, in caso di interruzione della sessione,",
        "answer": false
      },
      {
        "option_text": "non sia necessario inviare nuovamente tutto il flusso ma solo i dati dall’ultimo checkpoint in poi 4. Permette di dividere (temporalmente) il flusso dei dati in unità più piccole in modo che, in caso di interruzione della sessione, non sia necessario inviare nuovamente tutto il flusso ma solo l’ultimo pacchetto di lunghezza temporale prefissata Falso V V F V V F V V F V V F V V V F V F V F V V V F  3 T1 5. Permette di effettuare, ad ogni checkpoint, il back up dei dati di entrambi host in comunicazione, annotando il punto in cui è arrivata la conversazione; in tal modo, se durante il trasferimento dei dati la sessione si interrompe, la sessione successiva",
        "answer": true
      },
      {
        "option_text": "potrà sincronizzarsi riprendendo la trasmissione dal punto in cui è stata interrotta 6. Permette di effettuare, ad ogni checkpoint, il back up dei dati dell’host che trasmette, annotando il punto in cui è arrivata la conversazione; in tal modo, se durante il trasferimento dei dati la sessione si interrompe, la sessione successiva potrà",
        "answer": true
      },
      {
        "option_text": "sincronizzarsi riprendendo la trasmissione dal punto in cui è stata interrotta 10-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 264,
    "code": "M1.3.2.14",
    "question": "I protocolli seriali multipunto",
    "options": [
      {
        "option_text": "1. Sono protocolli seriali punto-punto che possono collegare ulteriori unità attraverso una connessione multi-drop",
        "answer": true
      },
      {
        "option_text": "2. Possono utilizzare lo standard RS-422 e RS-485",
        "answer": true
      },
      {
        "option_text": "3. Possono utilizzare lo standard RS-232",
        "answer": false
      },
      {
        "option_text": "4. In una configurazione con molte unità connesse solo un paio possono effettivamente comunicare",
        "answer": true
      },
      {
        "option_text": "5. Sia nel caso di RS-422 che di RS-485 possono essere contemporaneamente bidirezionali",
        "answer": false
      },
      {
        "option_text": "6. Solo nel caso dello standard RS-422 possono essere contemporaneamente bidirezionali 11-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 265,
    "code": "M1.3.2.15",
    "question": "Lo standard elettrico RJ45",
    "options": [
      {
        "option_text": "1. Se CAT 5: ha velocità massima di 100 Mbps",
        "answer": true
      },
      {
        "option_text": "2. Se CAT 5e: ha velocità massima di 1000 Mbps (Gigabit)",
        "answer": true
      },
      {
        "option_text": "3. Se CAT 6: ha velocità massima di 10 Gbps (banda 250Hz)",
        "answer": true
      },
      {
        "option_text": "4. Se CAT 6A: ha velocità massima di 10 Gbps (banda 500Hz)",
        "answer": true
      },
      {
        "option_text": "5. Se CAT 7: ha velocità massima di 100 Gbps (banda 600Hz)",
        "answer": false
      },
      {
        "option_text": "6. Può gestire comunicazioni multipunto per distanze superiori ai 100m 12-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 266,
    "code": "M1.3.2.16",
    "question": "Lo standard elettrico RS-422",
    "options": [
      {
        "option_text": "1. Utilizza 4 fili, due in ricezione (TX+ e TX-) e due in trasmissione (RX+ e RX-)",
        "answer": true
      },
      {
        "option_text": "2. Utilizza due fili, uno per ricezione e uno per trasmissione",
        "answer": false
      },
      {
        "option_text": "3. Utilizza solamente un filo in ricezione e trasmissione",
        "answer": false
      },
      {
        "option_text": "4. Non può comunicare in configurazione multi-drop",
        "answer": false
      },
      {
        "option_text": "5. Può comunicare in configurazione multi-drop",
        "answer": true
      },
      {
        "option_text": "6. Realizza comunicazioni Full-Duplex 13-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 267,
    "code": "M1.3.3.6",
    "question": "Lo Switch",
    "options": [
      {
        "option_text": "1. È un dispositivo intelligente ovvero dotato di CPU",
        "answer": true
      },
      {
        "option_text": "2. È un dispositivo elettrico non dotato di CPU",
        "answer": false
      },
      {
        "option_text": "3. Può segmentare il dominio di broadcast attraverso le VLAN",
        "answer": true
      },
      {
        "option_text": "4. Può avere una gestione “Unmanaged” o “Managed”",
        "answer": true
      },
      {
        "option_text": "5. Può avere un instradamento “store-and-forward”",
        "answer": true
      },
      {
        "option_text": "6. Può avere un instradamento “pass-by” 14-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 268,
    "code": "M1.3.4.7",
    "question": "Quanti sono i rami di una topologia di rete Lineare Aperta?",
    "options": [
      {
        "option_text": "1. (N-1)/2",
        "answer": false
      },
      {
        "option_text": "2. N*(N-1)/2",
        "answer": false
      },
      {
        "option_text": "3. N-1",
        "answer": true
      },
      {
        "option_text": "4. N",
        "answer": false
      },
      {
        "option_text": "5. N/2*(N-1)",
        "answer": false
      },
      {
        "option_text": "6. N/(N-1) 17-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 269,
    "code": "M2.1.2.10",
    "question": "Le Società S.r.l.",
    "options": [
      {
        "option_text": "1. Sono Società di Persone",
        "answer": false
      },
      {
        "option_text": "2. Sono Società di Capitali",
        "answer": true
      },
      {
        "option_text": "3. Sono Società a responsabilità illimitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "4. Sono Società a responsabilità limitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "5. Sono Società a responsabilità dei soci limitata al capitale sottoscritto",
        "answer": true
      },
      {
        "option_text": "6. Sono Società a responsabilità dei soci illimitata oltre al capitale sottoscritto 18-",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 270,
    "code": "M2.1.2.11",
    "question": "Le Società S.a.S.",
    "options": [
      {
        "option_text": "1. Sono Società di Persone",
        "answer": true
      },
      {
        "option_text": "2. Sono Società di Capitali",
        "answer": false
      },
      {
        "option_text": "3. Sono Società a responsabilità illimitata dell’imprenditore",
        "answer": true
      },
      {
        "option_text": "4. Sono Società a responsabilità limitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "5. Sono Società a responsabilità dei soci limitata al capitale sottoscritto",
        "answer": false
      },
      {
        "option_text": "6. Sono Società a responsabilità dei soci illimitata oltre al capitale sottoscritto 19-",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 271,
    "code": "M2.2.2.4",
    "question": "Nel Sistema Informativo aziendale l’ERP (Enterprise Resource Planning) 1. È una piattaforma software che raggruppa i sistemi del reparto amministrativo, delle vendite, del magazzino e la logistica Vero",
    "options": [
      {
        "option_text": "2. Può gestire gli ordini dai clienti, la fatturazione e le paghe dei dipendenti",
        "answer": true
      },
      {
        "option_text": "3. Può gestire l’invio dei dettagli relativi alla realizzazione di un prodotto verso i sistemi produttivi",
        "answer": false
      },
      {
        "option_text": "4. Può gestire l’inventario dei materiali, le scorte e la movimentazione delle merci",
        "answer": true
      },
      {
        "option_text": "5. Può includere alcune funzioni o integrare completamente le funzioni del CRM (Customer Relationship Management)",
        "answer": true
      },
      {
        "option_text": "6. Permette di progettare o simulare il funzionamento di un determinato oggetto meccanico V V F V V F F V F F V F F F V F F F F V F F V F V F V F F F V V F V V F  5 T1 20-",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 272,
    "code": "M2.3.2.5",
    "question": "L’Organizzazione Aziendale 1. Può essere definita come l’insieme dei processi, dei materiali, degli strumenti e delle persone che li operano e li",
    "options": [
      {
        "option_text": "gestiscono, in maniera coordinata, per il raggiungimento di uno scopo comune o un obiettivo di impresa",
        "answer": true
      },
      {
        "option_text": "2. Può essere considerata come la “struttura produttiva” di un’azienda",
        "answer": true
      },
      {
        "option_text": "3. Può essere considerata come la “struttura amministrativa” di un’azienda 4. Ha come elementi fondanti gli obiettivi, l’assegnazione dei compiti e dei ruoli, e la tecnologia che realizza la struttura",
        "answer": false
      },
      {
        "option_text": "produttiva 5. Ha come primo elemento fondativo la cosiddetta “mission aziendale” che, a livello operativo, si declina in obiettivi",
        "answer": true
      },
      {
        "option_text": "concretamente raggiungibili e misurabili 6. Attraverso la distribuzione di responsabilità e poteri crea l’ossatura dell’azienda; i compiti individuano il workflow (il",
        "answer": true
      },
      {
        "option_text": "flusso di lavoro) produttivo 21-",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 273,
    "code": "M3.2.1.11.1",
    "question": "Quali dei seguenti gruppi di norme fanno parte della famiglia degli Standard ISO/IEC 27000?",
    "options": [
      {
        "option_text": "1. Norme che descrivono una panoramica e la terminologia o vocabolario 2. Norme che specificano i requisiti di un SGSI, degli organismi di audit e certificazione e per la creazione di standard",
        "answer": true
      },
      {
        "option_text": "specifici di settore",
        "answer": true
      },
      {
        "option_text": "3. Norme che descrivono le linee guida generali per la verifica puntuale di un SGSI 4. Norme che descrivono le linee guida negli specifici ambiti/settori (ad esempio telecomunicazioni, servizi energetici, ecc.) Vero",
        "answer": false
      },
      {
        "option_text": "5. Norme aggiunte che descrivono delle direttive specializzate (ad esempio sicurezza della rete o delle applicazioni)",
        "answer": true
      },
      {
        "option_text": "6. Norme che descrivono come realizzare le procedure standard in un SGSI 23-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 274,
    "code": "M3.2.1.18",
    "question": "Un ISMS per ISO/IEC 27000 è un insieme di regole che un’azienda deve stabilire per:",
    "options": [
      {
        "option_text": "1. Identificare gli stakeholder e le loro aspettative nei confronti dell'azienda in termini di sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "2. Identificare quali rischi logici e fisici esistono per le persone all’interno dell’organizzazione",
        "answer": false
      },
      {
        "option_text": "3. Definire i controlli e altri metodi di mitigazione per soddisfare le aspettative (al punto 1) identificate e gestire i rischi",
        "answer": true
      },
      {
        "option_text": "4. Fissare obiettivi qualitativi e generici su ciò che deve essere raggiunto con la sicurezza delle informazioni",
        "answer": false
      },
      {
        "option_text": "5. Attuare tutte le contromisure e gli altri metodi per il trattamento del rischio",
        "answer": true
      },
      {
        "option_text": "6. Misurare continuamente se i controlli implementati funzionano come previsto 24-",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 275,
    "code": "M3.2.1.19",
    "question": "I requisiti specificati da ISO/IEC 27001 1. Sono necessari per stabilire, attuare, mantenere e migliorare, in modo continuo, un sistema di gestione per la sicurezza",
    "options": [
      {
        "option_text": "delle informazioni nel contesto di un’organizzazione 2. Includono i criteri per la valutazione e il trattamento dei rischi relativi alla sicurezza delle informazioni adattati alla necessità",
        "answer": true
      },
      {
        "option_text": "dell’organizzazione 3. Includono unicamente i criteri per la valutazione e il trattamento dei rischi relativi alla sicurezza dei sistemi informativi in",
        "answer": true
      },
      {
        "option_text": "base alla necessità dell’organizzazione",
        "answer": false
      },
      {
        "option_text": "4. Sono necessari per certificare la conformità di un sistema informativo a questo standard 5. Utilizzano il risk management come base per decidere azioni e quali contromisure (controlli) mettere in atto Vero V V F V V V V F F V V F V V F V V F V F V F V V  6 T1 6. Possono essere utilizzati per prendere le decisioni su come e quanto investire nella sicurezza delle informazioni in base a",
        "answer": true
      },
      {
        "option_text": "criteri assolutamente deterministici 25-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 276,
    "code": "M3.2.2.3",
    "question": "L’Area di Controllo 6 dell’ISO 27001 2013 Annex A “Organizzazione della Sicurezza delle Informazioni” 1. Ha tra gli obiettivi lo stabilire un quadro di riferimento per intraprendere e controllare l’attuazione e l’esercizio della",
    "options": [
      {
        "option_text": "sicurezza delle informazioni all’interno dell’organizzazione",
        "answer": true
      },
      {
        "option_text": "2. Ha tra gli obiettivi l’assicurare la sicurezza del telelavoro e dell’uso di dispositivi portatili",
        "answer": true
      },
      {
        "option_text": "3. È composta da quattro gruppi di controlli",
        "answer": false
      },
      {
        "option_text": "4. È composta da due gruppi di controlli",
        "answer": true
      },
      {
        "option_text": "5. Ha tra i controlli la separazione dei compiti e le aree di responsabilità",
        "answer": true
      },
      {
        "option_text": "6. Ha tra i controlli la condivisione dei compiti e le aree di responsabilità 26-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 277,
    "code": "M3.2.2.4",
    "question": "L’Area di Controllo 8 dell’ISO 27001 2013 Annex A “Gestione degli asset” 1. Ha tra gli obiettivi l’identificazione degli asset dell’organizzazione e definire adeguate responsabilità per la loro protezione Vero 2. Ha tra gli obiettivi l’assicurare che le informazioni ricevano un adeguato livello di protezione in linea con la loro",
    "options": [
      {
        "option_text": "importanza per l’organizzazione 3. Ha tra gli obiettivi il prevenire la divulgazione non autorizzata, la modifica, la rimozione o la distruzione delle informazioni",
        "answer": true
      },
      {
        "option_text": "archiviate sui supporti",
        "answer": true
      },
      {
        "option_text": "4. Ha tra i controlli la “Sicurezza delle informazioni nella gestione dei progetti”",
        "answer": false
      },
      {
        "option_text": "5. Ha tra i controlli la “Classificazione delle informazioni”",
        "answer": true
      },
      {
        "option_text": "6. Ha tra i controlli la “Non memorizzazione delle informazioni” 27-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 278,
    "code": "M3.2.3.2.1",
    "question": "Nel NIST CSF il Framework Core 1. È un insieme di attività di sicurezza informatica, risultati desiderati e riferimenti applicabili comuni a tutti i settori delle",
    "options": [
      {
        "option_text": "infrastrutture critiche ma anche per le altre organizzazioni 2. Presenta standard, linee guida e pratiche del settore che consentono la comunicazione di attività e risultati inerenti alla",
        "answer": true
      },
      {
        "option_text": "sicurezza anche fisica in tutta l'organizzazione",
        "answer": false
      },
      {
        "option_text": "3. È costituito da cinque funzioni concorrenti e continue: Identifica, Reagisci, Rileva, Rispondi, Recupera",
        "answer": false
      },
      {
        "option_text": "4. È costituito da quattro funzioni concorrenti e continue: Identifica, Proteggi, Rileva, Rispondi 5. Identifica le categorie e le sottocategorie chiave associate a ciascuna funzione e le abbina a riferimenti informativi di",
        "answer": false
      },
      {
        "option_text": "esempio come standard, linee guida e pratiche esistenti per ciascuna sottocategoria 6. Associa a ciascuna funzione le categorie ovvero le suddivisioni di una funzione in gruppi di risultati di sicurezza",
        "answer": true
      },
      {
        "option_text": "informatica strettamente legati alle esigenze programmatiche e ad attività particolari 28-",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 279,
    "code": "M3.2.3.7.1",
    "question": "Nel NIST CSF il Supply Chain Risk Management (SCRM) 1. Affronta sia l'effetto di sicurezza informatica che un'organizzazione ha sulle parti esterne sia l'effetto di sicurezza",
    "options": [
      {
        "option_text": "informatica che le parti esterne hanno su un'organizzazione",
        "answer": true
      },
      {
        "option_text": "2. Può includere le attività di determinazione dei requisiti di sicurezza informatica per i fornitori 3. Può includere le attività di attuazione dei requisiti di sicurezza informatica attraverso accordi formali (ad es. contratti) Vero",
        "answer": true
      },
      {
        "option_text": "4. È l'insieme delle attività necessarie per gestire il rischio di sicurezza informatica associato solamente ai fornitori 5. Può includere le attività di verifica che i requisiti di sicurezza informatica dei fornitori siano soddisfatti attraverso una",
        "answer": false
      },
      {
        "option_text": "varietà di metodologie di valutazione 6. Può includere le attività di comunicazione ai fornitori di come saranno verificati e convalidati i requisiti di sicurezza fisica Falso V V F V V F V V F V V F V V V F V F V F F F V V V V V F V F  7 T1 29-",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 280,
    "code": "M3.2.4.3",
    "question": "Il NIST Special Publication SP 800-82 Rev. 2",
    "options": [
      {
        "option_text": "1. È un documento che fornisce una guida su come proteggere i sistemi di controllo industriale (ICS) 2. È una pubblicazione che fornisce un catalogo integrativo di controlli di sicurezza e privacy per i sistemi informativi e le",
        "answer": true
      },
      {
        "option_text": "organizzazioni 3. È il documento di punta della serie di standard e linee guida per la sicurezza delle informazioni sviluppati dal NIST in",
        "answer": false
      },
      {
        "option_text": "risposta alla FISMA della Cybersecurity & Infrastructure Security Agency americana",
        "answer": false
      },
      {
        "option_text": "4. Fa parte della serie di pubblicazioni speciali relative alla computer security",
        "answer": true
      },
      {
        "option_text": "5. Fa parte della serie di pubblicazioni speciali che propongono guide pratiche e usabili di soluzioni per la cybersecurity",
        "answer": false
      },
      {
        "option_text": "6. Fa parte della serie di pubblicazioni che sono documenti rilevanti di Information Technology 30-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 281,
    "code": "M1.1.4.5",
    "question": "L’ Uniform Resource Locator (in acronimo URL)",
    "options": [
      {
        "option_text": "1. Identifica univocamente l’indirizzo di una risorsa su una rete di computer",
        "answer": true
      },
      {
        "option_text": "2. Necessita di una “risoluzione” in indirizzo IP per l’instradamento con l’analogo protocollo",
        "answer": true
      },
      {
        "option_text": "3. È un indirizzo composto da vari parametri che possono essere opzionali",
        "answer": true
      },
      {
        "option_text": "4. Può essere una sequenza alfanumerica o binaria",
        "answer": false
      },
      {
        "option_text": "5. In nessun caso può utilizzare un protocollo criptato",
        "answer": false
      },
      {
        "option_text": "6. È nato per facilitare la consultazione delle risorse on-line siano esse interi siti web, pagine HTML, foto o video 1",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 282,
    "code": "M1.1.4.6",
    "question": "L’ Hypertext Transfer Protocol (in acronimo HTTP)",
    "options": [
      {
        "option_text": "1. Utilizza il comando PEEK che recupera una risorsa dal server (ad es. visitando una pagina)",
        "answer": false
      },
      {
        "option_text": "2. Utilizza il comando POST che invia una risorsa al server (ad es. compilando un modulo)",
        "answer": true
      },
      {
        "option_text": "3. Utilizza il comando DELETE che cancella una risorsa dal server (ad es. eliminando un file)",
        "answer": true
      },
      {
        "option_text": "4. Utilizza il comando POKE che forza una determinata area di memoria (ad es. caricando un valore in un registro)",
        "answer": false
      },
      {
        "option_text": "5. Utilizza il comando PUT che memorizza una risorsa sul server (ad es. caricando un file)",
        "answer": true
      },
      {
        "option_text": "6. Utilizza il comando HEAD che recupera solo l'header della risposta senza la risorsa 2",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 283,
    "code": "M1.1.4.6",
    "question": "F  V V F V V (3- M1.3.2.9 - 23) Nella comunicazione con il protocollo Ethernet in caso di avvenuta collisione: 1. La stazione trasmittente sospende la trasmissione e trasmette una sequenza composta dalla parte di pacchetto già",
    "options": [
      {
        "option_text": "trasmessa e un codice identificativo in coda al pacchetto 2. La stazione trasmittente sospende la trasmissione e trasmette e un codice identificativo in testa e la parte di pacchetto",
        "answer": true
      },
      {
        "option_text": "già trasmessa in coda al pacchetto 3. La stazione trasmittente sospende la trasmissione e trasmette una sequenza (detta di Jamming) per avvisare che il canale",
        "answer": false
      },
      {
        "option_text": "è occupato 4. La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione per un numero di",
        "answer": true
      },
      {
        "option_text": "volte non superiore a 5 5. La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione dopo un tempo",
        "answer": false
      },
      {
        "option_text": "pseudocasuale, per evitare la ripetizione della collisione",
        "answer": true
      },
      {
        "option_text": "6. La stazione trasmittente interrompe le trasmissioni e attende un segnale di Restart da parte di una altra stazione 3",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 284,
    "code": "M1.3.2.9",
    "question": "V  F V F V F (4- M1.3.2.12 -23) La comunicazione deterministica real-time: 1. È una qualsiasi forma di comunicazione per cui gli utenti possono scambiarsi informazioni anche non nell’esatta sequenza",
    "options": [
      {
        "option_text": "che sono state generate ma con una latenza prevedibile o comunque predefinita 2. È una qualsiasi forma di comunicazione per cui gli utenti possono scambiarsi informazioni in maniera deterministica,",
        "answer": false
      },
      {
        "option_text": "istantaneamente o con una latenza trascurabile o comunque predefinita 3. Ha, di solito, necessità di garantire la sincronizzazione tra due o più dispostivi (es. dispositivo di comando e di attuazione) Vero",
        "answer": true
      },
      {
        "option_text": "4. Deve garantire tempi di comunicazione sempre sotto il nanosecondo",
        "answer": false
      },
      {
        "option_text": "5. Può permette il controllo di macchinari senza una connessione meccanica",
        "answer": true
      },
      {
        "option_text": "6. Deve garantire tempi di trasmissione compatibili con le dinamiche dei dispositivi o i processi coinvolti 4",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 285,
    "code": "M1.3.3.10",
    "question": "Le regole configurabili nel firewall",
    "options": [
      {
        "option_text": "1. Hanno tra le impostazioni di base l'indirizzo IP sorgente",
        "answer": true
      },
      {
        "option_text": "2. Hanno tra le impostazioni di base l'indirizzo IP di destinazione",
        "answer": true
      },
      {
        "option_text": "3. Hanno tra le impostazioni di base la porta attraverso la quale viene erogato il servizio",
        "answer": true
      },
      {
        "option_text": "4. Non possono abilitare o disabilitare solo uno specifico protocollo (Es. UPD, TCP, ecc.)",
        "answer": false
      },
      {
        "option_text": "5. Possono utilizzare un criterio di applicazione di tipo  “Default-reject”",
        "answer": false
      },
      {
        "option_text": "6. Possono utilizzare un criterio di applicazione di tipo  “Default-allow” 5",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 286,
    "code": "M2.1.1.1-23",
    "question": "L’Azienda:",
    "options": [
      {
        "option_text": "1. È un’organizzazione di persone e beni economici",
        "answer": true
      },
      {
        "option_text": "2. È un’organizzazione di persone e beni economici ma non beni strumentali",
        "answer": false
      },
      {
        "option_text": "3. Ha al suo interno anche beni strumentali, ovvero beni economici utilizzati per la produzione di altri beni",
        "answer": true
      },
      {
        "option_text": "4. Ha al suo interno solo persone e beni materiali, ovvero che hanno consistenza fisica",
        "answer": false
      },
      {
        "option_text": "5. Esercita l’insieme delle funzioni aziendali per il raggiungimento degli obiettivi prefissati",
        "answer": true
      },
      {
        "option_text": "6. Realizza l’attività aziendale attraverso i processi aziendali, nell'ambito della sua gestione operativa 6",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 287,
    "code": "M2.2.1.5",
    "question": "Quali strategie posso utilizzare per proteggere da un possibile attacco cyber ad una linea produttiva (al momento l’unica che produce un determinato bene)?",
    "options": [
      {
        "option_text": "1. Identificare e proteggere (o eliminare) eventuali connessioni dirette alla rete pubblica (internet)",
        "answer": true
      },
      {
        "option_text": "2. Realizzare un adeguato sistema di segmentazione e segregazione delle reti e degli apparati di controllo",
        "answer": true
      },
      {
        "option_text": "3. Gestire gli accessi remoti ai sistemi informatici di linea con opportune procedure, autorizzazioni, tecnologie",
        "answer": true
      },
      {
        "option_text": "4. Valutare la realizzazione di una linea produttiva parallela analoga alla prima che utilizza la stessa rete",
        "answer": false
      },
      {
        "option_text": "5. Identificare eventuali obsolescenze software e hardware e vulnerabilità standardizzate (CVE) nei sistemi industriali",
        "answer": true
      },
      {
        "option_text": "6. Isolare completamente la rete industriale dalla rete office",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 288,
    "code": "M2.2.2.5",
    "question": "Il vettore di attacco",
    "options": [
      {
        "option_text": "1. Sfrutta debolezze o vulnerabilità solamente tecnologiche",
        "answer": false
      },
      {
        "option_text": "2. È la tecnica di attacco unicamente diretta e frontale verso un firewall perimetrale 3. Per esteso può essere la tecnica utilizzata per l'accesso non autorizzato da parte di un malintenzionato ad un dispositivo o",
        "answer": false
      },
      {
        "option_text": "una rete per scopi nefasti",
        "answer": true
      },
      {
        "option_text": "4. Può sfruttare meccanismi di autenticazione deboli",
        "answer": true
      },
      {
        "option_text": "5. Può sfruttare debolezze umane come mancanza di conoscenza o attenzione",
        "answer": true
      },
      {
        "option_text": "6. Può utilizzare e-mail di phishing, app malevole, chiavette USB infette, botnet, ecc. 9",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 289,
    "code": "M2.3.1.1-23",
    "question": "La Gestione Aziendale 1. È l’insieme coordinato di operazioni soggettive e oggettive che l’azienda compie per raggiungere gli obiettivi prefissati Vero",
    "options": [
      {
        "option_text": "2. È l’insieme delle operazioni soggettive di conduzione che il manager compie per raggiungere gli obiettivi prefissati 3. Realizza operazioni soggettive, ovvero le attività svolte dagli organi aziendali, decisioni e controlli, da effettuare al fine di",
        "answer": false
      },
      {
        "option_text": "raggiungere gli obiettivi fissati",
        "answer": true
      },
      {
        "option_text": "4. Definisce i piani strategici e organizzativi di lungo periodo",
        "answer": false
      },
      {
        "option_text": "5. Realizza operazioni oggettive e soggettive per il raggiungimento della soddisfazione del cliente e dei fornitori 6. Si caratterizza in operazioni di: acquisizione dei mezzi monetari, acquisizione di fattori produttivi col capitale monetario e",
        "answer": false
      },
      {
        "option_text": "trasformazione di fattori in prodotti o servizi finiti 10",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 290,
    "code": "M2.3.2.1-23",
    "question": "I Processi Aziendali 1. Possono essere definiti come un insieme di attività, non necessariamente collegate, che possono portare a diversi",
    "options": [
      {
        "option_text": "obiettivi a carattere strategico 2. Possono essere definiti come un insieme di attività interdipendenti, svolte all'interno dell'azienda che creano valore",
        "answer": false
      },
      {
        "option_text": "trasformando delle risorse in un prodotto o servizio finale a valore aggiunto",
        "answer": true
      },
      {
        "option_text": "3. Devono prevedere un solo input chiaramente definito e più risultati finali",
        "answer": false
      },
      {
        "option_text": "4. Devono prevedere input, chiaramente ben definiti, e un singolo risultato finale 5. Hanno input che sono costituiti da tutti i fattori che contribuiscono (direttamente e indirettamente) al valore aggiunto di",
        "answer": true
      },
      {
        "option_text": "un servizio o di un prodotto",
        "answer": true
      },
      {
        "option_text": "6. I processi si possono modellizzare attraverso l’uso dei diagrammi di flusso 11",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 291,
    "code": "M3.1.2.1-23",
    "question": "Nella Business Transaction rappresentata utilizzando il modello WIDE qui sotto: 1. Una volta entrati per il punto A i task Cancellazione Albergo  e Cancellazione Volo  vengono eseguiti contemporaneamente Vero 2. Una volta Entrati per il punto A i task Cancellazione Albergo  e Cancellazione Volo  vengono eseguiti uno successivo all’altro",
    "options": [
      {
        "option_text": "(terminato Cancellazione Albergo viene eseguito Cancellazione Volo) 3. Si giunge al punto B solo dopo che entrambi i task Cancellazione Albergo  e Cancellazione Volo  sono stati eseguiti",
        "answer": false
      },
      {
        "option_text": "completamente 4. Si giunge al punto B anche se nessuno tra i task Cancellazione Albergo  e Cancellazione Volo  è stato eseguito completamente Falso",
        "answer": true
      },
      {
        "option_text": "5. Si giunge al punto B solo se i task Cancellazione Albergo  e Cancellazione Volo  si concludono contemporaneamente",
        "answer": false
      },
      {
        "option_text": "6. Il punto B può anche non essere mai raggiunto  4 T3 13",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 292,
    "code": "M3.1.3.3",
    "question": "La certificazione aziendale 1. È la dichiarazione di un ente indipendente o accreditato che il prodotto fornito o le politiche messe in atto dall'azienda sono",
    "options": [
      {
        "option_text": "conformi ad una certa normativa o standard di riferimento 2. È la dichiarazione di un ente indipendente o accreditato che si formalizza attraverso l’emissione di un certificato con validità",
        "answer": true
      },
      {
        "option_text": "illimitata 3. È la dichiarazione di un ente terzo che il prodotto fornito o le politiche messe in atto dall'azienda sono conformi ad una",
        "answer": false
      },
      {
        "option_text": "certa normativa o standard di riferimento 4. Se di sistema, permette di stabilire un meccanismo continuo di verifica della conformità ad uno standard ed il",
        "answer": true
      },
      {
        "option_text": "miglioramento continuo di un sistema di gestione 5. Se di sistema, permette di stabilire un meccanismo di verifica puntuale della conformità ad uno standard ma non permette",
        "answer": true
      },
      {
        "option_text": "la verifica periodica del sistema di gestione 6. Può essere uno strumento per rispondere alle richieste sempre più pressanti del mercato per differenziarsi dai competitors",
        "answer": false
      },
      {
        "option_text": "ed entrare, in nuovi mercati, mai esplorati prima 14",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 293,
    "code": "M3.2.1.20",
    "question": "Cos’è un ISMS secondo ISO 27001",
    "options": [
      {
        "option_text": "1. Un insieme di regole che un'azienda deve stabilire per gestire la sicurezza delle informazioni 2. Un insieme di regole che, tra le altre cose, permettano di identificare gli stakeholder e le loro aspettative in termini di",
        "answer": true
      },
      {
        "option_text": "sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "3. Un insieme di regole che, tra le altre cose, permettano di identificare quali rischi fisici esistano per le persone 4. Un insieme di regole che, tra le altre cose, permettano di definire i controlli e altri metodi di mitigazione per soddisfare le",
        "answer": false
      },
      {
        "option_text": "aspettative identificate e gestire i rischi 5. Un insieme di regole che, tra le altre cose, permettano di fissare obiettivi chiari su ciò che deve essere raggiunto con la",
        "answer": true
      },
      {
        "option_text": "sicurezza delle informazioni 6. Un insieme di regole che, tra le altre cose, permettano di attuare tutte le contromisure e gli altri metodi per il",
        "answer": true
      },
      {
        "option_text": "trattamento dei vincoli di tipo normativo 15",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 294,
    "code": "M3.2.1.9-23",
    "question": "Secondo ISO 27002 2013 una Categoria di Controllo è:",
    "options": [
      {
        "option_text": "1. Il controllo stesso",
        "answer": false
      },
      {
        "option_text": "2. È la dichiarazione estesa dell’obiettivo che si vuole raggiungere",
        "answer": true
      },
      {
        "option_text": "3. È di fatto l’Area del Controllo",
        "answer": false
      },
      {
        "option_text": "4. È l’appropriata contromisura in esame",
        "answer": false
      },
      {
        "option_text": "5. È la descrizione della finalità dello specifico controllo",
        "answer": true
      },
      {
        "option_text": "6. Uno dei tre livelli dello schema con cui sono strutturati i controlli 17",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 295,
    "code": "M3.2.3.3",
    "question": "Nel Framework Core (di NIST CSF) le Categorie 1. Sono le suddivisioni di ciascuna delle Funzioni Concorrenti in gruppi di possibili fattori di rischio di sicurezza informatica",
    "options": [
      {
        "option_text": "legati alle esigenze programmatiche e ad attività generiche  5 T3 2. Sono le suddivisioni di ciascuna delle Funzioni Concorrenti in gruppi di risultati di sicurezza informatica strettamente legati",
        "answer": false
      },
      {
        "option_text": "alle esigenze programmatiche e ad attività particolari 3. Possono includere, ad esempio, \"Gestione degli asset\", \"Gestione dell'identità e controllo degli accessi\" e \"Processi di",
        "answer": true
      },
      {
        "option_text": "rilevamento\" 4. Sono ulteriormente suddivise in sottocategorie le quali forniscono una serie di risultati che, sebbene non esaustivi, aiutano",
        "answer": true
      },
      {
        "option_text": "a supportare il raggiungimento degli obiettivi (risultati o outcomes) in ciascuna categoria 5. Sono ulteriormente suddivise in sottocategorie che possono includere, ad esempio, \"I sistemi di informazione esterni sono",
        "answer": true
      },
      {
        "option_text": "catalogati\", \"I dati inattivi sono protetti\" o \"Le notifiche dai sistemi di rilevamento vengono esaminate\" 6. Sono ulteriormente suddivise in sottocategorie che sono associate a Riferimenti Informativi: esempi assolutamente",
        "answer": true
      },
      {
        "option_text": "esaustivi basati sulle esperienze dirette sul campo 18",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 296,
    "code": "M3.2.3.10",
    "question": "Nel NIST CSF Core le sottocategorie 1. Le sottocategorie dividono ulteriormente una Categoria in risultati ottenibili avendo intrapreso attività tecniche e/o",
    "options": [
      {
        "option_text": "gestionali 2. Forniscono una serie di risultati che, sebbene non esaustivi, aiutano a supportare il raggiungimento dei risultati in ciascuna",
        "answer": true
      },
      {
        "option_text": "categoria",
        "answer": true
      },
      {
        "option_text": "3. Non hanno mai associato nessun Riferimento Normativo",
        "answer": false
      },
      {
        "option_text": "4. Un esempio di sottocategoria può includere \"I sistemi di informazione esterni sono catalogati\"",
        "answer": true
      },
      {
        "option_text": "5. Un esempio di sottocategoria può includere \"Selezionare quali dati da proteggere\"",
        "answer": false
      },
      {
        "option_text": "6. Un esempio di sottocategoria può includere \"Le notifiche dai sistemi di rilevamento vengono esaminate\" 19",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 297,
    "code": "M3.2.4.2",
    "question": "NIST Special Publication 800-53 Rev. 5 1. Fornisce un catalogo di controlli di sicurezza e privacy per i sistemi informativi e le organizzazioni per proteggere le operazioni e le risorse organizzative, gli individui, le aziende e la nazione da una serie diversificata di minacce e rischi di",
    "options": [
      {
        "option_text": "varia natura 2. Fornisce un catalogo di controlli di sicurezza e privacy per i sistemi informativi e le aziende per proteggere le operations e",
        "answer": true
      },
      {
        "option_text": "le risorse organizzative, gli individui, le aziende e la nazione da minacce e rischi di varia natura 3. Sono un catalogo di controlli, ovvero contromisure, estratti direttamente e senza variazioni dal FISMA (Federal Information",
        "answer": true
      },
      {
        "option_text": "Security Modernization Act)",
        "answer": false
      },
      {
        "option_text": "4. Ha come titolo: “Security and Privacy Controls for Information Systems and Organizations”",
        "answer": true
      },
      {
        "option_text": "5. Ha come titolo: “Security Controls for Information Systems and Organizations”",
        "answer": false
      },
      {
        "option_text": "6. Ha come titolo: “Security and Privacy Controls for the Government Information Systems” 20",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 298,
    "code": "M3.2.6.3",
    "question": "In un CSMS (Cyber Security Management System) secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "1. I requisiti sono associati agli elementi costitutivi del CSMS raggruppati in macrocategorie",
        "answer": true
      },
      {
        "option_text": "2. Le macrocategorie sono: “Risk Analysis”, “Indirizzare il rischio con il CSMS”, “Monitorare e migliorare il CSMS”",
        "answer": true
      },
      {
        "option_text": "3. Ad ogni elemento è associato un elenco di requisiti specifici",
        "answer": true
      },
      {
        "option_text": "4. Gli elementi non sono ulteriormente raggruppati all’interno delle macrocategorie",
        "answer": false
      },
      {
        "option_text": "5. Ad ogni elemento è associato solamente un requisito specifico 6. Per ciascun elemento sono rappresentati gli obiettivi, la descrizione e il fondamento logico (razionale) dell’elemento Vero 21",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 299,
    "code": "M3.2.6.6-23",
    "question": "I Foundational Requirements secondo ISA/IEC 62443 1. Sono stati definiti dal momento che il classico modello CIA (Confidentiality, Integrity e Availability) non si adatta",
    "options": [
      {
        "option_text": "interamente ai requisiti richiesti per gli IACS (Industrial Automation and Control Systems) 2. Sono stati definiti dal momento che il classico modello CIA (Confidentiality, Integrity e Availability) si adatta  ai requisiti",
        "answer": true
      },
      {
        "option_text": "industriali necessari per il funzionamento degli apparati sulle reti OT",
        "answer": true
      },
      {
        "option_text": "3. Sono sette requisiti di base  6",
        "answer": true
      },
      {
        "option_text": "T3 4. Sono quattordici requisiti di base",
        "answer": false
      },
      {
        "option_text": "5. Sono otto requisiti di base",
        "answer": false
      },
      {
        "option_text": "6. Focalizzano gli aspetti di cyber sicurezza in relazione al funzionamento degli IACS 22",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 300,
    "code": "M3.2.6.13",
    "question": "Gli IACS secondo l’IEC 62443?",
    "options": [
      {
        "option_text": "1. Sono gli Industrial Automation and Control Systems ovvero i sistemi di controllo e di automazione industriali 2. Possono essere gli SCADA (Supervisory Control and Data Acquisition) ovvero i sistemi di supervisione e acquisizione dati Vero",
        "answer": true
      },
      {
        "option_text": "3. Possono essere le telecamere del sistema perimetrale di sicurezza",
        "answer": false
      },
      {
        "option_text": "4. Possono essere i PLC (Programmable Logic Controller) ovvero i sistemi di controllo a logica programmabile",
        "answer": true
      },
      {
        "option_text": "5. Possono essere i DCS (Distributed control system) ovvero i sistemi di Controllo Distribuito di processo",
        "answer": true
      },
      {
        "option_text": "6. Possono essere gli strumenti di analisi della produzione presenti nella rete office 23",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 301,
    "code": "M3.3.2.2",
    "question": "Si può brevettare 1. Un’invenzione se si tratta di una “soluzione nuova e originale ad un problema tecnico”, che rappresenti cioè un risultato",
    "options": [
      {
        "option_text": "dell’ingegno umano e del progresso tecnico 2. Un’invenzione se si tratta di una “soluzione nuova e originale ad un problema tecnico o scientifico”, che rappresenti cioè",
        "answer": true
      },
      {
        "option_text": "un risultato dell’ingegno umano e della ricerca tecnica, scientifica o matematica 3. Un’invenzione se ha requisito di “Novità”: L’invenzione è nuova se non è compresa nello stato della tecnica alla data di",
        "answer": false
      },
      {
        "option_text": "richiesta di brevetto 4. Un’invenzione se è il risultato di “Attività inventiva” ovvero se ha caratteristiche di originalità per un esperto del settore,",
        "answer": true
      },
      {
        "option_text": "non sono sufficienti quindi unicamente le caratteristiche di novità ma la novità non deve essere «banale» o «ovvia»",
        "answer": true
      },
      {
        "option_text": "5. Un’invenzione anche se contraria all’ordine pubblico e al buon costume ma che abbia caratteristiche innovative 6. Un’invenzione se ha requisito di “Industrialità“, cioè è considerata atta ad avere un'applicazione industriale ovvero se il suo",
        "answer": false
      },
      {
        "option_text": "oggetto può essere fabbricato o utilizzato in qualsiasi genere di industria, compresa quella agricola 24",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 302,
    "code": "M3.3.7.3",
    "question": "Quali delle seguenti sono caratteristiche della certificazione di cybersicurezza secondo il Regolamento (UE) 2019/881:",
    "options": [
      {
        "option_text": "1. Protezione dei dati dalla distruzione o dall’alterazione accidentale o non autorizzata",
        "answer": true
      },
      {
        "option_text": "2. Accesso garantito a tutti i dati, ai servizi o alle funzioni senza discontinuità operativa",
        "answer": false
      },
      {
        "option_text": "3. Nessuna registrazione storica degli accessi a dati, servizi o funzioni",
        "answer": false
      },
      {
        "option_text": "4. Ripristino tempestivo dell’accesso ai dati, ai servizi o alle funzioni in caso di incidente",
        "answer": true
      },
      {
        "option_text": "5. Utilizzo di criteri di security by design per la progettazione",
        "answer": true
      },
      {
        "option_text": "6. Aggiornamento costante di software e hardware 25",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 303,
    "code": "M3.4.3.2-23",
    "question": "Il Rischio Informatico può essere valutato come",
    "options": [
      {
        "option_text": "1. Impatto x Probabilità",
        "answer": true
      },
      {
        "option_text": "2. Impatto elevato alla Probabilità",
        "answer": false
      },
      {
        "option_text": "3. Impatto x Frequenza",
        "answer": false
      },
      {
        "option_text": "4. Un numero compreso tra un valore minimo e uno massimo in funzione dell’incertezza del rischio 5. Un numero sempre compreso tra 1 (Rischio Molto Basso) e 4 (Rischio Molto Alto) in funzione dell’incertezza del rischio Falso 6. Un numero che è funzione dell’incertezza e fa riferimento a classi omogenee di eventi, per natura e gravità Vero 26",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 304,
    "code": "M3.4.1.2",
    "question": "Perché la leadership aziendale è fondamentale per la definizione di un SGSI (Sistema di Gestione della Sicurezza Informatica)?",
    "options": [
      {
        "option_text": "1. Perché altrimenti possono non essere garantiti gli investimenti necessari per la sua realizzazione 2. Perché senza il benestare chiaro, motivato e comunicato della leadership aziendale non si riuscirà a coinvolgere",
        "answer": true
      },
      {
        "option_text": "efficacemente tutto il personale aziendale 3. Perché altrimenti non si riusciranno a portare a termine i cambiamenti nelle politiche, nei processi e nelle procedure",
        "answer": true
      },
      {
        "option_text": "necessari 4. Perché solo una leadership consapevole può capire sino in fondo l’impatto possibile della sicurezza informatica con il",
        "answer": true
      },
      {
        "option_text": "funzionamento dell’organizzazione",
        "answer": true
      },
      {
        "option_text": "5. Così è chiara la responsabilità in caso di cattivo funzionamento del sistema di gestione",
        "answer": false
      },
      {
        "option_text": "6. Così è possibile creare nuove figure e ruoli che altrimenti sarebbe impossibile definire 27",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 305,
    "code": "M4.2.2.3",
    "question": "Quali dei seguenti elementi possono migliorare la percezione del rischio cyber da parte dei dipendenti aziendali",
    "options": [
      {
        "option_text": "1. La formazione e sensibilizzazione continua dei dipendenti per renderli consapevoli delle minacce cyber 2. L’educazione dei dipendenti in merito alle policy e procedure già definite dall’organizzazione ma che non vengono",
        "answer": true
      },
      {
        "option_text": "rispettate adeguatamente",
        "answer": true
      },
      {
        "option_text": "3. La maggiore dotazione di dispositivi elettronici per semplificare le operazioni dei dipendenti",
        "answer": false
      },
      {
        "option_text": "4. L’innalzamento del livello di sicurezza e di notifica dei dispositivi informatici in dotazione",
        "answer": true
      },
      {
        "option_text": "5. Il maggior uso di sistemi as a service che utilizzano programmi in Cloud 6. Cercare di limitare le azioni ripetitive e automatiche sulle interfacce informatiche attraverso l’introduzione di blocchi che",
        "answer": false
      },
      {
        "option_text": "permettano una maggiore consapevolezza dell’azione che si sta realizzando 28",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 306,
    "code": "M4.2.2.3",
    "question": "V  V F V F V (29 – M4.2.1.2) L’organizzazione della Cybersicurezza in ambito bancario",
    "options": [
      {
        "option_text": "1. Ha tradizionalmente sviluppato strategie fortemente focalizzate sulla gestione del rischio 2. Tradizionalmente si occupa poco degli aspetti di sicurezza logica perché tali aspetti non possono avere impatto",
        "answer": true
      },
      {
        "option_text": "sull’andamento finanziario dell’azienda 3. Gestisce tipicamente le nuove minacce attraverso comitati di direzione per la gestione del rischio che rispondono",
        "answer": false
      },
      {
        "option_text": "all’amministratore delegato o al consiglio di amministrazione 4. In molti casi prevede che la figura del CSO (Chief of Security Officer) abbia responsabilità anche sulla sicurezza logica della",
        "answer": true
      },
      {
        "option_text": "banca",
        "answer": true
      },
      {
        "option_text": "5. In nessun caso la figura del CSO ha responsabilità anche sulla sicurezza logica della banca 6. Nei casi in cui il CISO (Chief Information Security Officer) non sia gerarchicamente subordinato al CSO le azioni sono dal lui",
        "answer": false
      },
      {
        "option_text": "coordinate anche indirettamente 29",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 307,
    "code": "M4.3.3.1",
    "question": "Nell’organigramma apicale di una grande multiutility 1. L’Information Technology è di solito collocata nell’area di responsabilità della direzione dell’innovazione o della direzione",
    "options": [
      {
        "option_text": "tecnica o tecnologica",
        "answer": true
      },
      {
        "option_text": "2. L’Information Technology di solito risponde al vicepresidente esecutivo",
        "answer": false
      },
      {
        "option_text": "3. La sicurezza informatica di solito riceve input dalla direzione o dai comitati che si occupano di risk management",
        "answer": true
      },
      {
        "option_text": "4. In nessun caso il CISO risponde direttamente al CEO",
        "answer": true
      },
      {
        "option_text": "5. Il CISO (o figura equivalente) di solito risponde al responsabile/direttore dei sistemi informativi (CIO o equivalente)",
        "answer": true
      },
      {
        "option_text": "6. Il CISO (o figura equivalente) non risponde mai al responsabile/direttore dei sistemi informativi (CIO o equivalente) 30",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 308,
    "code": "M1.1.4.5",
    "question": "La riga di testo nel linguaggio HTML:  <title>Esempio di codice</title>",
    "options": [
      {
        "option_text": "1. Identifica dove è posizionato il testo nella pagina visualizzata dal browser",
        "answer": true
      },
      {
        "option_text": "2. Identifica che il testo contenuto nei due comandi (di inizio e fine) è il titolo della pagina che sarà visualizzata",
        "answer": true
      },
      {
        "option_text": "3. Identifica che il testo contenuto sarà visualizzato con un formato grafico di tipo “title”",
        "answer": false
      },
      {
        "option_text": "4. Deve essere preceduta e seguita da altri comandi HTML di testo",
        "answer": true
      },
      {
        "option_text": "5. Può essere solo preceduta da altri comandi HTML di testo",
        "answer": false
      },
      {
        "option_text": "6. Può funzionare solo se attivata da un browser 2-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 309,
    "code": "M1.2.2.2",
    "question": "Il Deep Web",
    "options": [
      {
        "option_text": "1. È quella la parte di web che non è indicizzata dai motori di ricerca",
        "answer": true
      },
      {
        "option_text": "2. Si considerano, di solito, siti privati, interni aziendali, accademici o di ricerca",
        "answer": true
      },
      {
        "option_text": "3. Possono contenere informazioni riservate, strategiche o estremamente sensibili",
        "answer": true
      },
      {
        "option_text": "4. Si può accedere solamente mediante specifici browsers, determinate configurazioni e accessi autorizzativi",
        "answer": false
      },
      {
        "option_text": "5. Si può accedere conoscendo l’indirizzo URL dello specifico sito",
        "answer": true
      },
      {
        "option_text": "6. È di solito il territorio della criminalità organizzata 4-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 310,
    "code": "M1.2.3.5",
    "question": "Un attacco Cyber alla Supply Chain",
    "options": [
      {
        "option_text": "1. Può essere conseguito introducendo malware in un sistema software realizzato da un fornitore esterno",
        "answer": true
      },
      {
        "option_text": "2. Può essere un attacco indiretto, ovvero attuato ad un elemento della catena di fornitura",
        "answer": true
      },
      {
        "option_text": "3. Prende di mira i fornitori invece di puntare direttamente ad aziende target per renderne più difficile l'identificazione",
        "answer": true
      },
      {
        "option_text": "4. Di solito colpisce le Grandi Aziende",
        "answer": false
      },
      {
        "option_text": "5. Può essere causato dalla differente postura di sicurezza informatica di fornitore e cliente",
        "answer": true
      },
      {
        "option_text": "6. È una minaccia emergente destinata solamente a sviluppatori e fornitori di software 8-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 311,
    "code": "M1.2.3.3.1",
    "question": "V V F V F V  2",
    "options": [
      {
        "option_text": "T2 1. Converte i bit in un pacchetto in un segnale fisico per il mezzo di trasmissione",
        "answer": true
      },
      {
        "option_text": "2. Ha tra le funzioni l’adeguamento elettrico degli apparati trasmissivi",
        "answer": true
      },
      {
        "option_text": "3. Può utilizzare protocolli Bluetooth",
        "answer": true
      },
      {
        "option_text": "4. Può utilizzare protocolli IP",
        "answer": false
      },
      {
        "option_text": "5. È l’interfaccia tra software e hardware nello stack ISO/OSI",
        "answer": true
      },
      {
        "option_text": "6. Vincola i livelli superiori agli specifici mezzi fisici di comunicazione 6-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 312,
    "code": "M1.3.2_2.5",
    "question": "Il modello di comunicazione Broadcast:",
    "options": [
      {
        "option_text": "1. Identifica la comunicazione uno a tutti",
        "answer": true
      },
      {
        "option_text": "2. Identifica la comunicazione ad ampio spettro, uno a ad alcuni",
        "answer": false
      },
      {
        "option_text": "3. Può avvenire a livello 2 dello stack ISO (indirizzamento MAC)",
        "answer": true
      },
      {
        "option_text": "4. Può avvenire a livello 3 dello stack ISO (Indirizzamento IP)",
        "answer": true
      },
      {
        "option_text": "5. Può peggiorare la latenza nella rete",
        "answer": true
      },
      {
        "option_text": "6. Può migliorare la latenza di rete 8 – (M1.3.2_2.6*) La subnet 160.12.32.100/18:",
        "answer": false
      },
      {
        "option_text": "1. Ha come indirizzo di rete 160.12.0.0",
        "answer": true
      },
      {
        "option_text": "2. Ha come indirizzo di broadcast 160.12.63.255",
        "answer": true
      },
      {
        "option_text": "3. Ha come indirizzo di broadcast 160.12.63.254",
        "answer": false
      },
      {
        "option_text": "4. Ha come maschera di sottorete 255.255.192.0",
        "answer": true
      },
      {
        "option_text": "5. Ha come maschera di sottorete 255.255.186.0",
        "answer": false
      },
      {
        "option_text": "6. Lo spazio di indirizzamento arriva sino a (Host Max) 160.12.63.254 9-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 313,
    "code": "M1.3.2_2.7",
    "question": "La subnet 160.12.32.128/20",
    "options": [
      {
        "option_text": "1. Ha 4.096 indirizzamenti disponibili",
        "answer": true
      },
      {
        "option_text": "2. Può connettere 4.094 hosts",
        "answer": true
      },
      {
        "option_text": "3. Ha 220 (1.048.576) indirizzamenti possibili",
        "answer": false
      },
      {
        "option_text": "4. Ha un numero di indirizzamenti possibili maggiore della subnet 60.12.32.128/19",
        "answer": false
      },
      {
        "option_text": "5. Ha una maschera di rete composta da 20 bit, i più significativi, a 1",
        "answer": true
      },
      {
        "option_text": "6. Ha una maschera di rete composta da 12 bit, i più significativi, a 1 10-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 314,
    "code": "M1.3.2.17",
    "question": "La modalità di trasmissione Half-Duplex",
    "options": [
      {
        "option_text": "1. È un tipo di modalità di comunicazione che supporta la comunicazione a due vie ma con ritardo",
        "answer": true
      },
      {
        "option_text": "2. È un tipo di modalità di comunicazione in cui i dati possono viaggiare solo in una direzione alla volta",
        "answer": true
      },
      {
        "option_text": "3. Ha come esempio della modalità di funzionamento la comunicazione tramite Walkie-talkie",
        "answer": true
      },
      {
        "option_text": "4. Prevede due cavi uno per la trasmissione e uno per la ricezione",
        "answer": false
      },
      {
        "option_text": "5. Prevede un solo cavo per la trasmissione e ricezione",
        "answer": true
      },
      {
        "option_text": "6. È più efficiente della modalità Full-Duplex 12-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 315,
    "code": "M1.3.3.9",
    "question": "Il Firewall: 1. Monitora il traffico in entrata e in uscita attraverso regole di sicurezza configurabili per autorizzare o bloccare gli eventi Vero",
    "options": [
      {
        "option_text": "2. È un dispositivo, esclusivamente implementato su speciali appliance, per la sicurezza della rete 3. Nella configurazione “Default-Deny” abilita l’accesso solo di ciò che viene autorizzato esplicitamente, mentre il resto viene",
        "answer": false
      },
      {
        "option_text": "vietato 4. Nella configurazione “Default-Deny” blocca l’accesso solo di ciò che viene vietato esplicitamente, mentre il resto viene",
        "answer": true
      },
      {
        "option_text": "permesso 5. Se NGFW (Next Generation Firewall) è dotato di funzioni di prevenzione delle intrusioni (IPS) e di funzionalità di prevenzione",
        "answer": false
      },
      {
        "option_text": "delle minacce e protezione antivirus",
        "answer": true
      },
      {
        "option_text": "6. È un dispositivo che funziona solo a livello ISO/OSI 4 14-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 316,
    "code": "M1.3.4.8",
    "question": "Una rete peer to peer",
    "options": [
      {
        "option_text": "1. Ha nodi che, diversamente dalla rete client-server, possono richiedere e fornire servizi",
        "answer": true
      },
      {
        "option_text": "2. Ha nodi che, analogamente alla rete client-server, condividono lo stesso network",
        "answer": true
      },
      {
        "option_text": "3. Ha nodi che, diversamente dalla rete client-server, sono specializzati per richiedere o fornire servizi",
        "answer": false
      },
      {
        "option_text": "4. Può essere considerata come una rete logica da “pari” a “pari”",
        "answer": true
      },
      {
        "option_text": "5. È un’architettura “fisica”",
        "answer": false
      },
      {
        "option_text": "6. È un’architettura “logica” 17 –",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 317,
    "code": "M2.1.2.10",
    "question": "La Società S.r.l.",
    "options": [
      {
        "option_text": "1. È una società in cui i soci rispondono delle obbligazioni sociali anche oltre i limiti di quanto hanno conferito",
        "answer": false
      },
      {
        "option_text": "2. È una società di capitali le cui partecipazioni sono rappresentate da quote e non da azioni",
        "answer": true
      },
      {
        "option_text": "3. È una società in cui per le obbligazioni sociali risponde solo la società stessa con il suo patrimonio",
        "answer": true
      },
      {
        "option_text": "4. Sono Società a responsabilità limitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "5. Sono Società a responsabilità dei soci limitata al capitale sottoscritto",
        "answer": true
      },
      {
        "option_text": "6. Sono Società a responsabilità dei soci illimitata oltre al capitale sottoscritto 19-",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 318,
    "code": "M2.2.2.4.1",
    "question": "Il Sistema Informativo aziendale l’ERP (Enterprise Resource Planning) 1. È una piattaforma software che raggruppa i sistemi del reparto amministrativo, delle vendite, del magazzino e la logistica Vero",
    "options": [
      {
        "option_text": "2. Permette che i dati provenienti da molteplici parti dell'azienda vengono raccolti e gestiti in maniera centralizzata",
        "answer": true
      },
      {
        "option_text": "3. Può gestire l’invio dei dettagli relativi alla realizzazione di un prodotto verso i sistemi produttivi",
        "answer": false
      },
      {
        "option_text": "4. Può gestire l’inventario dei materiali, le scorte e la movimentazione delle merci",
        "answer": true
      },
      {
        "option_text": "5. Permette di progettare o simulare il funzionamento di un determinato oggetto meccanico",
        "answer": false
      },
      {
        "option_text": "6. Può essere costituito da una piattaforma SaaS in Cloud 20-",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 319,
    "code": "M3.1.1.2.2",
    "question": "L’Incident Response Plan (Piano di risposta agli incidenti) può essere composto da:",
    "options": [
      {
        "option_text": "1. Una fase di rilevamento dell’incidente (Detect)",
        "answer": true
      },
      {
        "option_text": "2. La Riproduzione dell’incidente rilevato (Response)",
        "answer": false
      },
      {
        "option_text": "3. La Mitigazione degli effetti dell’incidente (Mitigation)",
        "answer": true
      },
      {
        "option_text": "4. La Registrazione dell’evento (Reporting)",
        "answer": true
      },
      {
        "option_text": "5. Il ripristino del sistema colpito (Recovery)",
        "answer": true
      },
      {
        "option_text": "6. L’investigazione sul problema che ha portato all’incidente (Remediation) 22-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 320,
    "code": "M3.2.1_2.5",
    "question": "I nuovi controlli di ISO 27001 Rev. 2022 sono specializzati per:",
    "options": [
      {
        "option_text": "1. Una maggior sicurezza nella gestione dei servizi Cloud",
        "answer": true
      },
      {
        "option_text": "2. Preparazione dell’ICT in relazione alle problematiche di Business Continuity",
        "answer": true
      },
      {
        "option_text": "3. L’utilizzo prevalente di software di prodotto solo da determinati fornitori",
        "answer": false
      },
      {
        "option_text": "4. Migliorare la protezione dei dati anche in relazione del loro trattamento in funzione del GDPR",
        "answer": true
      },
      {
        "option_text": "5. Il miglioramento dell’Internet Browsing attraverso l’uso del filtraggio dei siti",
        "answer": true
      },
      {
        "option_text": "6. Lo sviluppo sicuro del codice software 25-",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 321,
    "code": "M3.2.1_2.6",
    "question": "I controlli ISO 27001 nella Rev. 2022 sono raccolti nei seguenti gruppi:",
    "options": [
      {
        "option_text": "1. Le persone",
        "answer": true
      },
      {
        "option_text": "2. I fornitori",
        "answer": false
      },
      {
        "option_text": "3. Gli oggetti fisici",
        "answer": true
      },
      {
        "option_text": "4. La tecnologia",
        "answer": true
      },
      {
        "option_text": "5. Gli aspetti organizzativi",
        "answer": true
      },
      {
        "option_text": "6. Supply Chain 26-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 322,
    "code": "M3.2.1_2.7",
    "question": "Nella revisione 2022 del documento ISO 27001: 1. Il nuovo nome è: “Information security, cybersecurity and breach protection-Information security management systems-",
    "options": [
      {
        "option_text": "Requirements” 2. Il nuovo nome è: “Information security, cybersecurity and privacy protection-Information security management systems-",
        "answer": false
      },
      {
        "option_text": "Requirements”",
        "answer": true
      },
      {
        "option_text": "3. Un certo numero di controlli è rimasto invariato",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 323,
    "code": "M3.2.1_2.6",
    "question": "V F V V V F  6",
    "options": [
      {
        "option_text": "T2 4. Molti controlli sono stati accorpati",
        "answer": true
      },
      {
        "option_text": "5. Nessun controllo è effettivamente nuovo",
        "answer": false
      },
      {
        "option_text": "6. Oltre il 50% di controlli sono nuovi 27-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 324,
    "code": "M3.2.3.2.1",
    "question": "Nel NIST CSF il Framework Core 1. È un insieme di attività di sicurezza informatica, effetti desiderati e riferimenti applicabili comuni a tutti i settori delle",
    "options": [
      {
        "option_text": "infrastrutture critiche ma anche per le altre organizzazioni 2. Presenta standard, linee guida e pratiche del settore che consentono la comunicazione di attività e risultati inerenti alla",
        "answer": true
      },
      {
        "option_text": "sicurezza anche fisica in tutta l'organizzazione",
        "answer": false
      },
      {
        "option_text": "3. È costituito da cinque funzioni concorrenti e continue: Identifica, Reagisci, Rileva, Rispondi, Recupera",
        "answer": false
      },
      {
        "option_text": "4. È costituito da quattro funzioni concorrenti e continue: Identifica, Proteggi, Rileva, Rispondi 5. Identifica le categorie e le sottocategorie chiave associate a ciascuna funzione e le abbina a riferimenti informativi di",
        "answer": false
      },
      {
        "option_text": "esempio come standard, linee guida e pratiche esistenti per ciascuna sottocategoria 6. Associa a ciascuna funzione le categorie ovvero le suddivisioni di una funzione in gruppi di risultati di sicurezza",
        "answer": true
      },
      {
        "option_text": "informatica strettamente legati alle esigenze programmatiche e ad attività particolari 28-",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 325,
    "code": "M4.3.2.2",
    "question": "In una Multiutility 1. La gestione del cyber rischio è di solito gestito da una commissione o un comitato che risponde al consiglio di",
    "options": [
      {
        "option_text": "amministrazione 2. Di solito la responsabilità operativa sulla cybersecurity è in carico ad un CISO che risponde, talvolta indirettamente, ad",
        "answer": true
      },
      {
        "option_text": "una direzione di tecnologia o innovazione",
        "answer": true
      },
      {
        "option_text": "3. Di solito Presidente, Vicepresidente e Amministratore Delegato hanno uno stesso livello gerarchico 4. Di solito solo l’Amministratore delegato risponde al consiglio di amministrazione, mentre il Vicepresidente risponde solo",
        "answer": true
      },
      {
        "option_text": "al Presidente",
        "answer": false
      },
      {
        "option_text": "5. La proprietà è solo pubblica",
        "answer": false
      },
      {
        "option_text": "6. In alcuni casi i sistemi informativi sono esternalizzati in società che rimangono di proprietà dell’azienda 30-",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 326,
    "code": "M3.2.6.13",
    "question": "Il PLC (Programmable Logic Controller)",
    "options": [
      {
        "option_text": "1. È un sistema di controllo a logica programmabile utilizzato per le sue caratteristiche real-time 2. Si interfaccia attraverso gli I/O con motori/attuatori e sensori a macchine e impianti permettendo di realizzare logiche di",
        "answer": true
      },
      {
        "option_text": "automazione",
        "answer": true
      },
      {
        "option_text": "3. Utilizza tipicamente sistemi operativi standard come, ad esempio MS Windows",
        "answer": false
      },
      {
        "option_text": "4. Utilizza tipicamente sistemi operativi con caratteristiche real-time o estensioni che permettano il determinismo",
        "answer": true
      },
      {
        "option_text": "5. Non è mai collegabile a internet",
        "answer": false
      },
      {
        "option_text": "6. Non ha mai problematiche di sicurezza informatica",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 327,
    "code": "M1.1.3.1.1",
    "question": "Nel Packet Switching (la tecnica di commutazione):",
    "options": [
      {
        "option_text": "1. Il messaggio viene diviso in parti più piccole (packets) che vengono gestite singolarmente",
        "answer": true
      },
      {
        "option_text": "2. I messaggi vengono raggruppati in pacchetti (packets) che vengono trasmessi insieme",
        "answer": false
      },
      {
        "option_text": "3. Ai pacchetti (packets) viene assegnato nell’intestazione Indirizzo Sorgente, la Destinazione ed altri dati",
        "answer": true
      },
      {
        "option_text": "4. I pacchetti viaggiano attraverso la rete, prendendo il percorso più breve possibile (routing) 5. I pacchetti vengono suddivisi e trasmessi in maniera indipendente e riassemblati all'estremità ricevente nell'ordine di",
        "answer": true
      },
      {
        "option_text": "arrivo 6. Se un messaggio arriva mancante di pacchetti o danneggiato verrà inviata una notifica per inviare nuovamente il",
        "answer": false
      },
      {
        "option_text": "messaggio, se invece viene raggiunto l'ordine corretto dei pacchetti, verrà inviata notifica di conferma 3-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 328,
    "code": "M1.3.1.24.1",
    "question": "Il livello 1 del Modello ISO/OSI",
    "options": [
      {
        "option_text": "1. Converte i bit in un pacchetto in un segnale fisico per il mezzo di trasmissione",
        "answer": true
      },
      {
        "option_text": "2. Ha tra le funzioni l’adeguamento elettrico degli apparati trasmissivi",
        "answer": true
      },
      {
        "option_text": "3. Può utilizzare protocolli Bluetooth",
        "answer": true
      },
      {
        "option_text": "4. Può utilizzare il protocollo IP",
        "answer": false
      },
      {
        "option_text": "5. È l’interfaccia tra software e hardware nello stack ISO/OSI",
        "answer": true
      },
      {
        "option_text": "6. Vincola i livelli superiori agli specifici mezzi fisici di comunicazione 6-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 329,
    "code": "M1.3.2_2.6",
    "question": "La subnet 160.12.32.128/19:",
    "options": [
      {
        "option_text": "1. Ha come indirizzo di rete 160.12.32.0",
        "answer": true
      },
      {
        "option_text": "2. Ha come indirizzo di broadcast 160.12.63.255",
        "answer": true
      },
      {
        "option_text": "3. Ha come indirizzo di broadcast 160.12.63.64",
        "answer": false
      },
      {
        "option_text": "4. Ha come maschera di sottorete 255.255.224.0",
        "answer": true
      },
      {
        "option_text": "5. Ha come maschera di sottorete 255.255.32.0",
        "answer": false
      },
      {
        "option_text": "6. Lo spazio di indirizzamento arriva sino a (HostMax) 160.12.63.254 9-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 330,
    "code": "M1.3.1.24.1",
    "question": "V V V F V F (M.1.3.2.14.1) V V V F F V (M.1.3.2.14.1) V F V V V F (M.1.3.2_2.6) V V F V F V (M.1.3.2_2.7) V V F F V F  3",
    "options": [
      {
        "option_text": "T1 5. Permette la connessione di un numero massimo di 4 dispositivi",
        "answer": false
      },
      {
        "option_text": "6. Può gestire comunicazioni multipunto per distanze superiori ai 100m 11 –",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 331,
    "code": "M1.3.3.7.1",
    "question": "V V V F V F  4",
    "options": [
      {
        "option_text": "T1 5. N/2*(N-1)",
        "answer": true
      },
      {
        "option_text": "6. (N-1)! 16 –",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 332,
    "code": "M3.2.1_2.6",
    "question": "V F V V V F  6 T1 2. Il nuovo nome è: “Information security, cybersecurity and privacy protection-Information security management systems-",
    "options": [
      {
        "option_text": "Requirements”",
        "answer": true
      },
      {
        "option_text": "3. Un certo numero di controlli è rimasto invariato",
        "answer": true
      },
      {
        "option_text": "4. Molti controlli sono stati accorpati",
        "answer": true
      },
      {
        "option_text": "5. Nessun controllo è effettivamente nuovo",
        "answer": false
      },
      {
        "option_text": "6. Oltre il 50% di controlli sono nuovi 27-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 333,
    "code": "M1.1.1.8",
    "question": "Il Triodo (o valvola Termoionica)",
    "options": [
      {
        "option_text": "1. Ha permesso di perfezionare e migliorare il circuito elettrico originario di Guglielmo Marconi",
        "answer": true
      },
      {
        "option_text": "2. Era utilizzato per migliorare la “sintonizzazione” tra trasmettitore e ricevitore 3. Ha permesso di migliorare il circuito elettrico di Guglielmo Marconi grazie alla sua capacità di rilevazione delle frequenze",
        "answer": false
      },
      {
        "option_text": "radio e di amplificazione del segnale",
        "answer": true
      },
      {
        "option_text": "4. Può essere considerato l’antesignano del transistor",
        "answer": true
      },
      {
        "option_text": "5. Può essere considerato l’antesignano del condensatore a capacità variabile",
        "answer": false
      },
      {
        "option_text": "6. È di fatto una tecnologia derivata dalla lampadina ad incandescenza",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 334,
    "code": "M1.1.4.5",
    "question": "La sequenza di caratteri: https://www.sitoesempio.it/indirizzo/?ref=NOME",
    "options": [
      {
        "option_text": "1. Rappresentano un testo nel linguaggio http",
        "answer": false
      },
      {
        "option_text": "2. Rappresentano un indirizzo URL (Uniform Resource Locator)",
        "answer": true
      },
      {
        "option_text": "3. Identifica univocamente l’indirizzo della risorsa “sitoesempio”",
        "answer": true
      },
      {
        "option_text": "4. Ha come percorso “indirizzo”",
        "answer": true
      },
      {
        "option_text": "5. Ha come stringa di query “ref=NOME”",
        "answer": true
      },
      {
        "option_text": "6. Esprime “in chiaro” l’indirizzo IP",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 335,
    "code": "M1.1.6.4",
    "question": "Incidenti e attacchi informatici",
    "options": [
      {
        "option_text": "1. Sono sostanzialmente la stessa cosa",
        "answer": false
      },
      {
        "option_text": "2. La classe statistica dei primi (gli incidenti) include i secondi (gli attacchi)",
        "answer": true
      },
      {
        "option_text": "3. La classe statistica dei secondi (gli attacchi) include i primi (gli incidenti)",
        "answer": false
      },
      {
        "option_text": "4. Possono provocare perdite economiche ad un’organizzazione",
        "answer": true
      },
      {
        "option_text": "5. Necessitano entrambi di strumenti di protezione aggiornati",
        "answer": true
      },
      {
        "option_text": "6. Sono entrambi commessi da individui o organizzazioni che mirano volontariamente un altro individuo o un’azienda",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 336,
    "code": "M1.1.7.1",
    "question": "Quali sono le ragioni della crescente diffusione della criminalità informatica",
    "options": [
      {
        "option_text": "1. L’incessante sviluppo della tecnologia informatica e le nuove opportunità di aggressione ai beni e le proprietà 2. La difficoltà della ricerca delle prove e i non sempre adeguati strumenti normativi Vero Nome Cognome Matricola 1",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 337,
    "code": "M1.1.6.4",
    "question": "F V F V V F  2",
    "options": [
      {
        "option_text": "T1 3. Il forte radicamento dei fenomeni cyber criminosi con il loro territorio d’origine",
        "answer": false
      },
      {
        "option_text": "4. La transnazionalità di fenomeni criminosi e la difformità degli strumenti normativi nei vari stati",
        "answer": true
      },
      {
        "option_text": "5. La transizione del reato da un ambiente tangibile e materiale verso un ambiente intangibile e dematerializzato",
        "answer": true
      },
      {
        "option_text": "6. La transizione del reato da un ambiente intangibile e dematerializzato verso un ambiente tangibile e materiale",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 338,
    "code": "M1.2.1.5",
    "question": "Il Social Engineering",
    "options": [
      {
        "option_text": "1. È una tecnica di attacco che può sfruttare anche strumenti non informatici",
        "answer": true
      },
      {
        "option_text": "2. Può utilizzare i siti “social” su cui sono esposte direttamente o indirettamente informazioni personali",
        "answer": true
      },
      {
        "option_text": "3. Può utilizzare il Baiting",
        "answer": true
      },
      {
        "option_text": "4. Può utilizzare un attacco tipo “forza bruta”",
        "answer": false
      },
      {
        "option_text": "5. Può utilizzare il Phishing",
        "answer": true
      },
      {
        "option_text": "6. È diretto prevalentemente contro le aziende",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 339,
    "code": "M1.2.4.10",
    "question": "Il ransomware",
    "options": [
      {
        "option_text": "1. Si diffonde di solito via e-mail, sistemi di messaggistica o chat",
        "answer": true
      },
      {
        "option_text": "2. Si diffonde sempre tramite sofisticate forme di attacco informatico",
        "answer": false
      },
      {
        "option_text": "3. Utilizza messaggi che sembrano provenire da soggetti conosciuti oppure da persone fidate",
        "answer": true
      },
      {
        "option_text": "4. Una volta effettuato il contagio si suggerisce di pagare il riscatto",
        "answer": false
      },
      {
        "option_text": "5. Una volta effettuato il contagio di un computer non si propaga in rete 6. Si può mitigare con la formazione del personale, l’aggiornamento dei sw e l’uso periodico e frequente di backup dei dati e",
        "answer": false
      },
      {
        "option_text": "dei sistemi",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 340,
    "code": "M1.2.4.11",
    "question": "Una Botnet 1. È una rete composta da dispositivi infettati da malware che agiscono sotto il controllo di un unico attore aumentando le",
    "options": [
      {
        "option_text": "risorse e le capacità offensive a sua disposizione 2. È una rete composta da dispositivi infettati da malware che agiscono sotto il controllo di attori multipli aumentando le",
        "answer": true
      },
      {
        "option_text": "risorse e capacità offensive a loro disposizione 3. È una rete composta da dispositivi infettati che permette di creare un sovraccarico anche nelle server farm che gestiscono",
        "answer": false
      },
      {
        "option_text": "siti capaci di grande traffico",
        "answer": true
      },
      {
        "option_text": "4. È lo strumento principale per realizzare un attacco di tipo Ransomware",
        "answer": false
      },
      {
        "option_text": "5. È lo strumento principale per realizzare un attacco di tipo DDoS (Distributed Denial of Service)",
        "answer": true
      },
      {
        "option_text": "6. Può utilizzare trojan specializzati che permettono il controllo remoto del sistema infettato 5",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 341,
    "code": "M1.3.1.27",
    "question": "L’Incapsulamento secondo il modello ISO/OSI",
    "options": [
      {
        "option_text": "1. Permette a ciascun livello dello stack di comunicare con un proprio e specifico “protocollo”",
        "answer": true
      },
      {
        "option_text": "2. Permette di fatto il funzionamento del modello stesso",
        "answer": true
      },
      {
        "option_text": "3. Avviene dal Livello Applicazione (7) al livello Collegamento (2) in trasmissione",
        "answer": true
      },
      {
        "option_text": "4. Avviene dal Livello Applicazione (7) al livello Fisico (1) in trasmissione",
        "answer": false
      },
      {
        "option_text": "5. Avviene dal Livello Collegamento (2) al livello Applicazione (7) in ricezione (Decapsulamento)",
        "answer": true
      },
      {
        "option_text": "6. Avviene dal Livello Applicazione (7) al livello Fisico (1) in ricezione (Decapsulamento)",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 342,
    "code": "M1.3.1.28",
    "question": "Il Livello ISO/OSI 3 (Rete)",
    "options": [
      {
        "option_text": "1. Permette di rendere i livelli superiori indipendenti dai mezzi fisici",
        "answer": true
      },
      {
        "option_text": "2. Permette l’implementazione del Routing",
        "answer": true
      },
      {
        "option_text": "3. Permette l’indirizzamento logico, univoco su tutta la rete",
        "answer": true
      },
      {
        "option_text": "4. Permette l’indirizzamento fisico, univoco su tutta la rete",
        "answer": false
      },
      {
        "option_text": "5. Diversamente dal livello 4 non effettua nessuna gestione degli errori e diagnostica",
        "answer": false
      },
      {
        "option_text": "6. Permette la compressione dei dati",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 343,
    "code": "M1.3.2.17",
    "question": "Una trasmissione deterministica",
    "options": [
      {
        "option_text": "1. Viene semplicemente realizzata rispettando la sequenza temporale degli eventi",
        "answer": true
      },
      {
        "option_text": "2. Viene semplicemente realizzata trasmettendo i messaggi con una bassa latenza",
        "answer": false
      },
      {
        "option_text": "3. Viene semplicemente realizzata rispettando il principio di causalità (il nesso causa-effetto)",
        "answer": true
      },
      {
        "option_text": "4. Se non lo è, la trasmissione è casuale (o semi-casuale)",
        "answer": true
      },
      {
        "option_text": "5. Concettualmente coincide con la trasmissione real-time 6. Si associa al concetto di real-time, in modo che la trasmissione avvenga secondo una sequenza predeterminata ed entro",
        "answer": false
      },
      {
        "option_text": "limiti temporali ben precisi",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 344,
    "code": "M1.3.2.18",
    "question": "Quali sono le ragioni che hanno portato alla creazione del protocollo TCP/IP",
    "options": [
      {
        "option_text": "1. Realizzare una trasmissione stabile tra due host",
        "answer": true
      },
      {
        "option_text": "2. Realizzare una trasmissione veloce tra due host",
        "answer": false
      },
      {
        "option_text": "3. Realizzare una trasmissione monodirezionale affidabile 4. Stabilire una connessione tra un'origine e una destinazione, assicurandosi che rimanga attiva fino alla fine della",
        "answer": false
      },
      {
        "option_text": "comunicazione 5. Realizzare uno standard per il Packet Switching ovvero la suddivisione di un messaggio in pacchetti piccoli trasmessi",
        "answer": true
      },
      {
        "option_text": "indipendentemente, funzionamento alla base di internet",
        "answer": true
      },
      {
        "option_text": "6. Realizzare un protocollo affidabile, deterministico e realtime",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 345,
    "code": "M1.3.2.19",
    "question": "Il protocollo Ethernet a livello ISO/OSI 2 (Collegamento) è basato sui seguenti comportamenti o fasi: 1. Rilevazione della Trasmissione: Ogni stazione che deve trasmettere ascolta il bus e decide di trasmettere solo se questo è",
    "options": [
      {
        "option_text": "libero 2. Rilevazione della Trasmissione: Ogni stazione che deve trasmettere invia un messaggio di prova per testare se il bus è",
        "answer": true
      },
      {
        "option_text": "libero 3. Accesso Multiplo: Due stazioni, trovando il mezzo trasmissivo libero, possono decidere di trasmettere",
        "answer": false
      },
      {
        "option_text": "contemporaneamente 4. Accesso Multiplo: Due stazioni, trovando il mezzo trasmissivo libero, devono attendere un determinato tempo prima di trasmettere per evitare collisioni Falso 10",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 346,
    "code": "M1.3.2.18",
    "question": "V F F V V F  4 T1 5. Rilevamento della Collisione: Ogni stazione, mentre trasmette un pacchetto, ascolta i segnali sul mezzo trasmissivo per",
    "options": [
      {
        "option_text": "rilevare eventuali collisioni e gestirle 6. Rilevamento della Collisione: Ogni stazione trasmette sempre insieme al pacchetto un codice di errore in modo che il",
        "answer": true
      },
      {
        "option_text": "ricevente percepisca l’eventuale collisione durante la trasmissione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 347,
    "code": "M1.3.2.20",
    "question": "Quali dei seguenti standard seriali elettrici sono multipunto (o multi-drop):",
    "options": [
      {
        "option_text": "1. RS232",
        "answer": false
      },
      {
        "option_text": "2. RS422",
        "answer": true
      },
      {
        "option_text": "3. RS485",
        "answer": true
      },
      {
        "option_text": "4. USB",
        "answer": false
      },
      {
        "option_text": "5. RJ45",
        "answer": false
      },
      {
        "option_text": "6. Bluetooth",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 348,
    "code": "M1.3.2.21",
    "question": "Gli obiettivi dello standard USB sono:",
    "options": [
      {
        "option_text": "1. Comunicazione seriale standardizzata",
        "answer": true
      },
      {
        "option_text": "2. Semplificazione della configurazione dei software dei dispositivi collegati",
        "answer": true
      },
      {
        "option_text": "3. Sostituzione delle interfacce wi-fi",
        "answer": false
      },
      {
        "option_text": "4. Standardizzazione dei connettori di interfaccia",
        "answer": true
      },
      {
        "option_text": "5. Alimentazione dei dispositivi collegati (USB Power Delivery)",
        "answer": true
      },
      {
        "option_text": "6. Connettività multi-drop",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 349,
    "code": "M1.3.2_2.7",
    "question": "Il modello di comunicazione su rete Ethernet di tipo Broadcast",
    "options": [
      {
        "option_text": "1. Trasmette un messaggio a tutti i partecipanti di una rete e non richiede una risposta 2. Trasmette un messaggio a tutti i partecipanti di una rete locale senza conoscere gli indirizzi individuali dei singoli host Vero",
        "answer": true
      },
      {
        "option_text": "3. Trasmette un messaggio solamente ad alcuni partecipanti di una rete",
        "answer": false
      },
      {
        "option_text": "4. Può trasmettere a Livello 2 e a Livello 3 dello stack ISO/OSI",
        "answer": true
      },
      {
        "option_text": "5. Può trasmettere solo a Livello 3 dello stack ISO/OSI",
        "answer": false
      },
      {
        "option_text": "6. Non introduce maggiori collisioni e quindi una maggiore latenza  nella trasmissione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 350,
    "code": "M1.3.2_2.8",
    "question": "F V F F F F  5",
    "options": [
      {
        "option_text": "T1 4. Fornitura energia (elettricità, gas)",
        "answer": true
      },
      {
        "option_text": "5. Fornitura riscaldamento",
        "answer": true
      },
      {
        "option_text": "6. Fornitura di telefonia fissa",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 351,
    "code": "M2.2.1.5",
    "question": "Gli asset aziendali",
    "options": [
      {
        "option_text": "1. Sono quelle entità all’interno dell’azienda che generano valore",
        "answer": true
      },
      {
        "option_text": "2. Possono essere solo tangibili, ovvero fisici",
        "answer": false
      },
      {
        "option_text": "3. Possono essere tangibili o intangibili",
        "answer": true
      },
      {
        "option_text": "4. Se non gestiti correttamente possono mettere a repentaglio l’esistenza dell’intera organizzazione",
        "answer": true
      },
      {
        "option_text": "5. Di solito non sono informatici",
        "answer": false
      },
      {
        "option_text": "6. Informatici sono soggetti a fattori di rischio costantemente in evoluzione",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 352,
    "code": "M2.2.1.6",
    "question": "Il valore associato ad un asset in un’azienda di produzione 1. Può essere stimato in proporzione all’impatto sul valore della produzione in caso di fermata o interruzione dello stesso Vero",
    "options": [
      {
        "option_text": "2. È certamente sempre lo stesso durante tutto il ciclo di vita (dell’asset stesso)",
        "answer": false
      },
      {
        "option_text": "3. Non si può calcolare se l’asset è informatico",
        "answer": false
      },
      {
        "option_text": "4. Non necessariamente deve essere un valore numerico, può essere riportato su una scala di criticità",
        "answer": true
      },
      {
        "option_text": "5. Si associa solo agli asset tangibili",
        "answer": false
      },
      {
        "option_text": "6. Si può assegnare agli asset tangibili ed intangibili",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 353,
    "code": "M2.3.1.7",
    "question": "Nella gestione aziendale le operazioni Oggettive possono essere:",
    "options": [
      {
        "option_text": "1. Il reperimento di mezzi finanziari",
        "answer": true
      },
      {
        "option_text": "2. Le attività decisionali",
        "answer": false
      },
      {
        "option_text": "3. Gli Investimenti per lo sviluppo del business",
        "answer": true
      },
      {
        "option_text": "4. Le attività di controllo",
        "answer": false
      },
      {
        "option_text": "5. La produzione ovvero la trasformazione in prodotti finiti o semilavorati",
        "answer": true
      },
      {
        "option_text": "6. Il disinvestimento di asset obsoleti (24-2.3.2.6) L’organizzazione aziendale 1. Può essere definita come tutti quegli elementi (materiali, strumentali e umani) che permettono di ottenere, attraverso un’azione strutturata, codificata e documentata, gli obiettivi aziendali Vero 19",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 354,
    "code": "M2.3.1.7",
    "question": "V F V F V V  6 T1 2. Può essere definita come tutte quelle operazioni coordinate (soggettive e oggettive) che permettono di ottenere degli",
    "options": [
      {
        "option_text": "obiettivi predefiniti",
        "answer": false
      },
      {
        "option_text": "3. Deve declinare la “mission” aziendale in obiettivi concretamente raggiungibili e misurabili",
        "answer": true
      },
      {
        "option_text": "4. Deve assegnare in maniera non ambigua compiti e ruoli a tutto il personale",
        "answer": true
      },
      {
        "option_text": "5. Non riguarda specificatamente la tecnologia e la struttura produttiva",
        "answer": false
      },
      {
        "option_text": "6. Attraverso l’assegnazione dei compiti realizza il workflow produttivo (25-3.1.1.8) Quali sono le possibili cause di un Incidente Informatico",
        "answer": true
      },
      {
        "option_text": "1. Vulnerabilità informatiche",
        "answer": true
      },
      {
        "option_text": "2. Massivo utilizzo di tecnologie cloud",
        "answer": false
      },
      {
        "option_text": "3. Debolezze umane",
        "answer": true
      },
      {
        "option_text": "4. Obsolescenza",
        "answer": true
      },
      {
        "option_text": "5. Mancanza degli aggiornamenti di sicurezza",
        "answer": true
      },
      {
        "option_text": "6. Utilizzo di software di terze parti (26-3.1.3.6) I Sistemi di Gestione Standardizzati",
        "answer": false
      },
      {
        "option_text": "1. Sono modelli organizzativi aziendali adottati su base volontaria",
        "answer": true
      },
      {
        "option_text": "2. Sono modelli organizzativi aziendali obbligatori in certi ambiti",
        "answer": false
      },
      {
        "option_text": "3. Sono applicati maggiormente nelle aree critiche e sensibili dell’organizzazione 4. Sono realizzati mediante l'applicazione organica e sistematica di regole e procedure per raggiungere uno specifico",
        "answer": true
      },
      {
        "option_text": "obiettivo",
        "answer": true
      },
      {
        "option_text": "5. Di solito le regole e le procedure sono definite secondo uno standard creato dall’azienda stessa",
        "answer": false
      },
      {
        "option_text": "6. Riguardano tutti i livelli dell’organizzazione (27-3.2.1.20) I Controlli secondo ISO/IEC 27001",
        "answer": true
      },
      {
        "option_text": "1. Sono le appropriate contromisure selezionate per affrontare i rischi per la cyber security",
        "answer": true
      },
      {
        "option_text": "2. Sono pratiche da attuare per annullare completamente i rischi di cyber sicurezza",
        "answer": false
      },
      {
        "option_text": "3. Sono strutturati secondo uno schema a tre livelli (edizione 2013)",
        "answer": true
      },
      {
        "option_text": "4. Sono strutturati secondo uno schema a quattro livelli (edizione 2013)",
        "answer": false
      },
      {
        "option_text": "5. Sono riuniti in quattro gruppi di controlli (edizione 2022)",
        "answer": true
      },
      {
        "option_text": "6. Di solito non si modificano nelle varie revisioni dello standard (28-3.2.3.10) Il NIST Cyber Security Framework",
        "answer": false
      },
      {
        "option_text": "1. È uno standard che non è mai stato revisionato dalla prima pubblicazione 2. Rispetto all’ISO/IEC 27001 non parla di contromisure ma di risultati o effetti ottenuti realizzando determinate attività Vero",
        "answer": false
      },
      {
        "option_text": "3. Prevede la certificazione come l’ISO 27001",
        "answer": false
      },
      {
        "option_text": "4. Prevede solamente un livello di implementazione",
        "answer": false
      },
      {
        "option_text": "5. Contiene numerosi riferimenti informativi ad altri standard",
        "answer": true
      },
      {
        "option_text": "6. Prevede quattro livelli implementativi o Tiers (29-3.2.6.13) Perché è stato realizzato lo standard IEC 62443? 24",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 355,
    "code": "M3.2.3.10",
    "question": "F V F F V V  7 T1 1. Perché all’interno di un’organizzazione esistono una molteplicità di sistemi intelligenti (dotati di CPU), rilevanti per la",
    "options": [
      {
        "option_text": "continuità del business, oltre ai comuni computer",
        "answer": true
      },
      {
        "option_text": "2. Per avere solamente uno standard di sicurezza informatica all’interno delle aziende industriali 3. Formalmente per realizzare un sistema di gestione in grado di affrontare e mitigare le vulnerabilità di sicurezza nei sistemi",
        "answer": false
      },
      {
        "option_text": "di controllo e automazione industriale (IACS) 4. Perché gli standard di sicurezza informatica più diffusi non riescono a rispondere a tutti i paradigmi di funzionamento dei",
        "answer": true
      },
      {
        "option_text": "sistemi all’interno di un’organizzazione",
        "answer": true
      },
      {
        "option_text": "5. Per avere uno standard con requisiti applicabili solamente nei reparti produttivi 6. Per avere uno standard che permetta di proteggere i reparti produttivi da vettori d’attacco provenienti anche dalla rete",
        "answer": false
      },
      {
        "option_text": "office (30-3.3.6.7) Il Regolamento (UE) 2016/679 GDPR si applica 1. Al trattamento dei dati personali delle persone fisiche e al trattamento non automatizzato dei dati conservati in un",
        "answer": true
      },
      {
        "option_text": "«archivio»",
        "answer": true
      },
      {
        "option_text": "2. Ad imprese enti, ed organizzazioni in generale con sede legale all’interno dell’UE",
        "answer": false
      },
      {
        "option_text": "3. A prescindere dal luogo ove sono collocati i sistemi di archiviazione e di elaborazione",
        "answer": true
      },
      {
        "option_text": "4. Solo se i sistemi di archiviazione e di elaborazione sono collocati all’interno degli stati dell’unione",
        "answer": false
      },
      {
        "option_text": "5. Si occupa anche dei dati personali per attività di sicurezza nazionale o di ordine pubblico 6. A qualunque dato personale: nomi, foto, indirizzi e-mail, dettagli bancari, interventi su siti web di social network,",
        "answer": false
      },
      {
        "option_text": "informazioni mediche o indirizzi IP di computer 29",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 356,
    "code": "M1.3.2.1",
    "question": "I protocoll i di comunicazione 1. Sono  un insieme di regole definite mediante specifiche sequenze di istruzioni  standardizzate , di varia tipologia e finalità in",
    "options": [
      {
        "option_text": "base alle entità interessate e al mezzo di comunicazione",
        "answer": true
      },
      {
        "option_text": "2. Possono essere raccolti in famiglie in base ai vari marchi commerciali",
        "answer": false
      },
      {
        "option_text": "3. Permett ono la comunicazione tra due o più entità connesse su una architettura di rete o di comunicazione 4. Sono  un insieme di regole definite mediante specifiche sequenze di istruzioni che possono di fferenti  nelle varie entità",
        "answer": true
      },
      {
        "option_text": "interessate alla specifica comunicazione",
        "answer": false
      },
      {
        "option_text": "5. Possono  essere uno standard con cui sono definiti la sintassi, la semantica e la sincronizzazione della comunicazione",
        "answer": true
      },
      {
        "option_text": "6. Possono  essere implementat i con hardware o software o in una combinazione di entrambi",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 357,
    "code": "M1.3.2.4",
    "question": "L’interfaccia USB",
    "options": [
      {
        "option_text": "1. Può raggiungere una velocità di trasmissione di 20Gbit/sec",
        "answer": true
      },
      {
        "option_text": "2. È utilizzata principalmente come interfaccia punto -punto",
        "answer": true
      },
      {
        "option_text": "3. Può gestire al massimo 10 Hub concentratori",
        "answer": false
      },
      {
        "option_text": "4. Ha tra le caratteristiche fondamentali la capacità di alimentare i dispositivi collegati",
        "answer": true
      },
      {
        "option_text": "5. Può trasmette sino ad una distanza non superiore ai 5 metri",
        "answer": true
      },
      {
        "option_text": "6. Può memorizzare sino a 10 0 Gbyte",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 358,
    "code": "M1.3.2.7",
    "question": "La modalità di trasmissione su canali in fibra ottica (WDM) è",
    "options": [
      {
        "option_text": "1. Una trasmissione bidirezionale simultanea su cavo singolo",
        "answer": true
      },
      {
        "option_text": "2. Una trasmissione bidirezionale non simultanea su cavo singolo",
        "answer": false
      },
      {
        "option_text": "3. Una modalità di trasmissione con fasci a lunghezza d’onda differente",
        "answer": true
      },
      {
        "option_text": "4. Una modalità di trasmissione con fasci di colori diversi ma con la stessa frequenza",
        "answer": false
      },
      {
        "option_text": "5. Una tecnica di trasmissione con multiplexing a divisione di ampiezza",
        "answer": false
      },
      {
        "option_text": "6. Una tecnica di trasmissione con multiplexing a divisione di lunghezza d’onda",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 359,
    "code": "M1.3.2.10",
    "question": "Il Dominio di Collisione o Collision Domain nella trasmissione Ethernet: 1. È un insieme di nodi, ridotto rispetto al dominio dell’intera rete locale, che concorrono per accedere allo stesso mezzo",
    "options": [
      {
        "option_text": "trasmissivo e quindi trasmettere 2. È una tecnica per ridurre la probabilità di collisioni al crescere del numero di stazioni e/o del traffico all’interno di una  LAN Vero 3. Una tecnica per evitare che in una rete LAN il mezzo trasmissivo sia condiviso e conteso per la trasmissione tra tutte le",
        "answer": true
      },
      {
        "option_text": "stazioni",
        "answer": true
      },
      {
        "option_text": "4. Una tecnica per eliminare completamente le collisioni in una comunicazione all’interno di un’unica LAN",
        "answer": false
      },
      {
        "option_text": "5. Una tecnica statistica per gestire le collisioni all’interno di una LAN 6. La suddivisione della rete in più sottoreti in modo che la contesa del mezzo avvenga soltanto tra le stazioni appartenenti",
        "answer": true
      },
      {
        "option_text": "ad una singola sottorete",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 360,
    "code": "M1.3.2.10",
    "question": "V V V F V V  2 T1 2. È un fenomeno causato dalla forte concorrenza sul mercato dei dispositivi di rete e dall’aumento delle prestazioni delle",
    "options": [
      {
        "option_text": "piattaforme di elaborazione",
        "answer": true
      },
      {
        "option_text": "3. È un fenomeno che non ha impatto sulla standardizzazione degli specifici brand commerciali",
        "answer": false
      },
      {
        "option_text": "4. È un fenomeno che ha portato all’obsolescenza di alcuni dispositivi 5. È un fenomeno che ha portato alcuni switch a gestire parzialmente o totalmente funzioni di routing (livello 3 ISO/OSI) Vero",
        "answer": true
      },
      {
        "option_text": "6. Ha provocato  l’obsolescenza de gli switches di rete",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 361,
    "code": "M1.3.3.4",
    "question": "Il Router:",
    "options": [
      {
        "option_text": "1. Gestisce il traffico trasmesso su mezzi trasmissivi differenti (esempio fibra, doppino telefonico o wi -fi)",
        "answer": true
      },
      {
        "option_text": "2. Attraverso l’instradamento (routing) connette dispositivi su reti differenti",
        "answer": true
      },
      {
        "option_text": "3. Può funzionare solo a livello 2 dello stack ISO -OSI",
        "answer": false
      },
      {
        "option_text": "4. Funziona normalmente a livello 3 dello stack ISO -OSI",
        "answer": true
      },
      {
        "option_text": "5. Gestisce il traffico attraverso l’uso degli indirizzi IP",
        "answer": true
      },
      {
        "option_text": "6. Gestisce il traffico attraverso l’uso degli indirizz i MAC (7-M2.1.1. 6) Quali sono le differenze tra beni di consumo e beni strumentali?",
        "answer": false
      },
      {
        "option_text": "1. I beni di consumo , diversamente dai beni strumentali, vengono utilizzati direttamente per soddisfare un bisogno 2. I beni di consumo possono essere le materie prime che vengono trasformate per ottenere un semilavorato o un prodotto",
        "answer": true
      },
      {
        "option_text": "finito",
        "answer": true
      },
      {
        "option_text": "3. Bene di consumo p uò essere il marchio di un determinato prodotto",
        "answer": false
      },
      {
        "option_text": "4. Bene di consumo può essere l’energia elettrica che alimenta il sistema informativo 5. I beni strumentali  sono  tutti quei beni materiali e immateriali che le imprese utilizzano per realizzare  la propria attività  ma",
        "answer": true
      },
      {
        "option_text": "che non sono parte costituente del prodotto o del servizio 6. I beni strumentali  sono  tutti quei beni materiali e immateriali che le imprese utilizzano per realizzare  la propria attività  ma",
        "answer": true
      },
      {
        "option_text": "che possono essere parte costituente del prodotto o del servizio",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 362,
    "code": "M2.1.3.1",
    "question": "Le aziende nel settore terziario",
    "options": [
      {
        "option_text": "1. Possono realizzare attività di intermediazione, o di produzione indiretta di beni, attraverso il commercio degli stessi",
        "answer": true
      },
      {
        "option_text": "2. Possono realizzare attività di produzione diretta di beni",
        "answer": false
      },
      {
        "option_text": "3. Possono essere quelle attività complementari e di ausilio ai settori primario e secondario 4. Possono realizzare produzione diretta o indiretta di servizi (ad esempio le aziende bancarie, assicurative, di trasporto, ecc .) Vero",
        "answer": true
      },
      {
        "option_text": "5. Possono essere le aziende che gestiscono i trasporti e le comunicazioni",
        "answer": true
      },
      {
        "option_text": "6. Possono basare il proprio core business sul know -how e sui servizi intellettuali (R&D, formazione, consulenza, ecc.) (10- M2.2.1. 6) Perché i  sistemi informati ci di R&D (Ricerca & Sviluppo) e in genere di Ingegneria rappresentano un valore da proteggere per l’azienda:",
        "answer": true
      },
      {
        "option_text": "1. Perché sono molto onerosi acquistare e da manutenere 2. Perché possono  racchiud ere i dettagli delle proprietà intellettuali  o dei brevetti  di quell’azienda o brand  Vero  5",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 363,
    "code": "M2.1.3.1",
    "question": "V F V V V V  3",
    "options": [
      {
        "option_text": "T1 3. Perché possono racchiudere informazioni sulle  formulazion i, risultati di test e di sperimentazioni effettuate",
        "answer": true
      },
      {
        "option_text": "4. Perché in generale racchiudono il know -how aziendale elaborato in anni di presenza su un determinato mercato",
        "answer": true
      },
      {
        "option_text": "5. Perché possono essere  oggetto di interesse da parte di competitor malintenzionati",
        "answer": true
      },
      {
        "option_text": "6. Perché in caso di anomali a o blocco vi può essere un impatto sulla Business Continuity  dell’azienda",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 364,
    "code": "M2.3.1.2",
    "question": "Il Sistema di Gestione aziendale 1. Sono modelli organizzativi  aziendali adottati su base volontaria e realizzati mediante l'applicazione organica e",
    "options": [
      {
        "option_text": "sistematica  di regole e procedure 2. Sono regole e procedure che una  azienda  fa proprie solamente a livello di top management e di consiglio di",
        "answer": true
      },
      {
        "option_text": "amministrazione allo scopo  di raggiungere specifici obiettivi 3. Può avere come obiettivo il tenere sotto controllo l’attività dell’azienda affinché sia in grado di soddisfare le esigenze del",
        "answer": false
      },
      {
        "option_text": "Cliente",
        "answer": true
      },
      {
        "option_text": "4. Può avere come obiettivo il miglioramento progressivo delle prestazioni aziendali",
        "answer": true
      },
      {
        "option_text": "5. Non rigu arda specificamente il controllo  dei processi aziendali 6. Può dimostrare a terzi, soprattutto a Organismi di controllo e potenziali clienti, la propria capacità di mantenere i propri",
        "answer": false
      },
      {
        "option_text": "impegni (conformità normativa)",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 365,
    "code": "M3.1.1.3",
    "question": "L’Evento di Sicurezza Informatica 1. Può essere considerato come qualsiasi situazione che si verifichi nell’ambito di un determinato asset informatico,",
    "options": [
      {
        "option_text": "comunque rilevata, la cui rilevanza è considerata significativa ai fini della salvaguardia dell’infrastruttura informatica 2. Può essere considerata qualsiasi situazione che sottintenda una violazione delle politiche di sicurezza IT fonte di danno per gli asset IT ovvero per il patrimonio informativo dell’organizzazione e per il quale si renda necessaria l’applicazione di mi sure",
        "answer": false
      },
      {
        "option_text": "di analisi e di contrasto e/o contenimento 3. Può essere considerato come qualsiasi situazione che si verifichi nell’ambito di un determinato asset informatico, comunque rilevata, la cui rilevanza è considerata significativa ai fini delle attività di gestione, controllo della sicurezza  e",
        "answer": false
      },
      {
        "option_text": "contenimento dei rischi ad essa correlati 4. Può essere a basso impatto  (non significativo): qualsiasi evento gestito in maniera silente dal sistema di sicurezza e che non",
        "answer": true
      },
      {
        "option_text": "richiede uno specifico trattamento 5. Può essere a impatto significativo: qualsiasi evento rilevato nell’ambito dei sistemi e delle infrastrutture IT, che non",
        "answer": true
      },
      {
        "option_text": "necessita di essere ulteriormente analizzato 6. Può essere a impatto critico: qualsiasi evento significativo che, a seguito delle analisi effettuale, potrebbe sottintendere,",
        "answer": false
      },
      {
        "option_text": "direttamente o indirettamente, una violazione delle politiche di sicurezza dell’azienda",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 366,
    "code": "M3.1.3.1",
    "question": "La Standardizzazione:",
    "options": [
      {
        "option_text": "1. Si può definire come un’attività che dà origine a soluzioni codificate e ripetibili a problemi in varie discipline",
        "answer": true
      },
      {
        "option_text": "2. Di solito non è orientata ad un ritorno economico e di immagine 3. L’attività, in generale, costituisce il processo di definizione (determinazione, formulazione e rilascio) e di implementazion e",
        "answer": false
      },
      {
        "option_text": "degli standard 4. Può essere il risultato di un’attività di razionalizzazione e può riguardare tutte le attività aziendali, a partire da quelle  più",
        "answer": true
      },
      {
        "option_text": "critiche",
        "answer": true
      },
      {
        "option_text": "5. Può essere applicata, con notevoli vantaggi , nell’area della sostenibilità ambientale",
        "answer": true
      },
      {
        "option_text": "6. Di solito, per problematiche di complessità e costi, tendenzialmente non si applica nell’ambito della qualità",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 367,
    "code": "M3.2.1.1",
    "question": "Lo standard ISO/IEC 27000 -series",
    "options": [
      {
        "option_text": "1. È una serie di norme internazionali che costituiscono uno standard relativo alla sicurezza informatica",
        "answer": true
      },
      {
        "option_text": "2. È uno standard monolitico costituito da un solo documento che unisce  insieme una serie di norme internazionali 3. È denominato \"Information Security Management Systems (ISMS) Family of Standards\" e si prefigge di proteggere le",
        "answer": false
      },
      {
        "option_text": "informazioni che vengono mantenute ed elaborate da un’organizzazione 4. Permette alle organizzazioni di sviluppare ed implementare un proprio sistema per la gestione della sicurezza informatica",
        "answer": true
      },
      {
        "option_text": "per le informazioni finanziarie, la proprietà intellettuale ed i dati dei dipendenti, di clienti o di terzi",
        "answer": true
      },
      {
        "option_text": "5. Ha generato altri standard, tra cui il British Standard BS 7799 -1 e -2",
        "answer": false
      },
      {
        "option_text": "6. Si focalizza sulla protezione dei dati unicamente attraverso il consolidamento tecnologico 10 (M2.2.1. 6) F V V V V F 11",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 368,
    "code": "M3.2.1.1",
    "question": "V  F  V V  F F  4 T1 (15-M3.2.1. 20) Nell’Area Tematica dei Requisiti ISO 27001 “Leadeship” 1. Si richiede  che l'alta direzione de bba dimostrare leadership e impegno in relazione al sistema di gestione della sicurezza",
    "options": [
      {
        "option_text": "delle informazioni 2. Si richiede  che l'alta direzione de bba dimostrare leadership e impegno in relazione al lo sviluppo del  sistema informativo Falso 3. Si richiede  che l'alta direzione deve dimostrare leadership e impegno per assicurare che siano disponibili le risorse",
        "answer": true
      },
      {
        "option_text": "necessarie per il sistema di gestione della sicurezza delle informazioni 4. L’alta direzione deve stabilire una politica di sicurezza delle informazioni che  sia adeguata allo scopo dell'organizzazione Vero 5. L'alta direzione deve garantire che le responsabilità e le autorità per i ruoli rilevanti per le informazioni  di sicurezza vengono",
        "answer": true
      },
      {
        "option_text": "assegnate e comunicate all'interno dell'organizzazione 6. L'alta direzione deve garantire che le responsabilità e le autorità per i ruoli rilevanti per le informazioni  di sicurezza vengono",
        "answer": true
      },
      {
        "option_text": "assegnate secondo criteri soggettivi (16-M3.2.1.2 1) Nell’Area Tematica dei Requisiti ISO 27001 “ Pianificazione ” 1. L'organizzazione deve determinare  i rischi e le opportunità che devono essere affrontati per garantire che il sistema di",
        "answer": false
      },
      {
        "option_text": "gestione della sicurezza delle informazioni possa raggiungere i risultati previsti 2. L'organizzazione deve determinare i rischi e le opportunità che devono essere affrontati per prevenire, o ridurre, effetti",
        "answer": true
      },
      {
        "option_text": "indesiderati  nel raggiungimen to dei risultati previsti 3. L'organizzazione deve determinare i rischi e le opportunità che devono essere affrontati per mantenere almeno costante  il",
        "answer": true
      },
      {
        "option_text": "livello di sicurezza 4. L'organizzazione deve definire e applicare un processo di valutazione del rischio per la sicurezza delle informazioni che",
        "answer": false
      },
      {
        "option_text": "stabilisce e  aggiorna i  criteri di rischio per la sicurezza delle informazioni 5. L'organizzazione deve definire e applicare un processo di valutazione del rischio per la sicurezza delle informazioni in",
        "answer": true
      },
      {
        "option_text": "maniera indipendente, senza prendere in considerazioni altre normative come il GDPR 6. L'organizzazione deve determinare i rischi e le opportunità che garantisce che ripetute valutazioni del rischio per la",
        "answer": false
      },
      {
        "option_text": "sicurezza delle informazioni producano risultati coerenti, validi e comparabili (17- M3.2.1. 4) I Controlli ISO/IEC 27001 (Allegato A) 1. Sono le appropriate contromisure selezionate dalle organizzazioni per affrontare i rischi per la cyber security identificati Vero 2. Come indicato nel documento ISO/IEC 27002 associato all’ Annex  A di ISO 27001 sono strutturati secondo uno schema a 3",
        "answer": true
      },
      {
        "option_text": "livelli 3. Come indicato nel documento ISO/IEC 27002 associato all’ Annex A di ISO 27001 sono strutturati secondo uno schema a 2",
        "answer": true
      },
      {
        "option_text": "livelli",
        "answer": false
      },
      {
        "option_text": "4. Sono 114 secondo l’edizione ISO/IEC 27001/2 2013",
        "answer": true
      },
      {
        "option_text": "5. Sono 116 secondo l’edizione ISO/IEC 27001/2 2016",
        "answer": false
      },
      {
        "option_text": "6. Sono 93 secondo l’edizione ISO/IEC 27002 2022 (18- M3.2.1. 7) Quali delle seguenti sono Aree di Controllo secondo ISO 27001 2013?",
        "answer": true
      },
      {
        "option_text": "1. Sicurezza logica e ambientale",
        "answer": false
      },
      {
        "option_text": "2. Sicurezza delle attività operative",
        "answer": true
      },
      {
        "option_text": "3. Sicurezza delle reti e dei sistemi di comunicazione",
        "answer": true
      },
      {
        "option_text": "4. Acquisizione, sviluppo e manutenzione dei sistemi",
        "answer": true
      },
      {
        "option_text": "5. Gestione della catena di fornitura",
        "answer": false
      },
      {
        "option_text": "6. Gestione deli incidenti relativi alla sicurezza delle informazioni",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 369,
    "code": "M3.2.1.7",
    "question": "F V V V F V  5 T1 3. È composto da quattro parti: Framework Core, Framework Implementation Tiers, Framework Profiles e Framework",
    "options": [
      {
        "option_text": "Deployment 4. Realizza un quadro che \"fornisce una tassonomia di alto livello dei risultati relativi alla sicurezza informatica e una",
        "answer": false
      },
      {
        "option_text": "metodologia per valutare e gestire tali risultati\" 5. Realizza un quadro che \"fornisce una tassonomia dettagliata dei risultati della sicurezza informatica e una valutazione di ta li",
        "answer": true
      },
      {
        "option_text": "risultati\" 6. Realizza un quadro che permette orientamenti sulla protezione della privacy e delle libertà civili in un contesto di sicurezz a",
        "answer": false
      },
      {
        "option_text": "informatica",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 370,
    "code": "M3.2.3.4",
    "question": "Nel NIST CSF i livelli di implementazione del framework (\"Tier\") 1. Forniscono un contesto su come un'organizzazione considera il rischio di sicurezza informatica e i processi in atto per",
    "options": [
      {
        "option_text": "gestirlo 2. Descrivono il grado in cui le pratiche di gestione del rischio di sicurezza informatica di un'organizzazione esibiscono le",
        "answer": true
      },
      {
        "option_text": "caratteristiche definite nel Framework (ad esempio, consapevole del rischio e delle minacce, ripetibile e adattivo)",
        "answer": true
      },
      {
        "option_text": "3. Caratterizzano le pratiche di un'organizzazione in un intervallo, da Parziale (Tier 1) ad Ada ttativo  (Tier 5)",
        "answer": false
      },
      {
        "option_text": "4. Riflettono una progressione da risposte informali e reattive (Tier 1) ad approcci agili e informati sui rischi (Tier 5) 5. Durante il processo di selezione del livello, un'organizzazione dovrebbe considerare le sue attuali pratiche di gestione del rischio, l'ambiente delle minacce, i requisiti legali e normativi, gli obiettivi aziendali/della missione e i vincoli organiz zativi Vero 6. Sono valutati considerando tre parametri che permettono di verificare il livello di sviluppo del Processo di Gestione del Rischio (1), l’Integrazione del Programma di Gestione del Rischio (2) all’interno della realtà aziendale e la capacità dell’organizzaz ione di partecipare ad un ecosistema di gestione del rischio più ampio della singola realtà aziendale (3) Vero (21- M3.2.3. 7) Nel NIST CSF il Supply Chain Risk Management (SCRM) 1. Affronta sia l'effetto di sicurezza informatica che un'organizzazione ha sulle parti esterne sia l'effetto di sicurezza",
        "answer": false
      },
      {
        "option_text": "informatica che le parti esterne hanno su un'organizzazione",
        "answer": true
      },
      {
        "option_text": "2. Può includere le attività di determinazione dei requisiti di sicurezza informatica per i fornitori 3. Può includere le attività di attuazione dei requisiti di sicurezza informatica attraverso accordi formali (ad es. contratti) Vero",
        "answer": true
      },
      {
        "option_text": "4. È l'insieme delle attività necessarie per gestire il rischio di sicurezza informatica associato a soggetti esterni 5. Può includere le attività di verifica che i requisiti di sicurezza informatica siano soddisfatti attraverso una varietà di",
        "answer": true
      },
      {
        "option_text": "metodologie di valutazione per i soggetti interni 6. Può includere le attività di comunicazione ai fornitori di come saranno verificati e convalidati i requisiti di qualità del",
        "answer": false
      },
      {
        "option_text": "prodotto",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 371,
    "code": "M3.2.6.1",
    "question": "La serie ISA/IEC 62443 1. Fornisce un quadro flessibile per affrontare e mitigare le vulnerabilità di sicurezza attuali e future nei sistemi di control lo e",
    "options": [
      {
        "option_text": "automazione industriale (IACS)",
        "answer": true
      },
      {
        "option_text": "2. Sono standard applicabili a tutti i settori industriali e alle infrastrutture critiche",
        "answer": true
      },
      {
        "option_text": "3. Ha un posizionamento che scende sino a livello dell’impianto 4. Ha un posizionamento che parte dal coinvolgimento dell’amministratore delegato e del consiglio di amministrazione Falso",
        "answer": true
      },
      {
        "option_text": "5. È costituita da quattro famiglie di standard ancora in aggiornamento",
        "answer": true
      },
      {
        "option_text": "6. Non riguarda direttamente gli SCADA",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 372,
    "code": "M3.2.6.4",
    "question": "Le zone secondo ISA/IEC 62443 1. Dividono una architettura fisica (dispositivi di rete e connessioni) in zone omogenee raggruppando i dispositivi HW con",
    "options": [
      {
        "option_text": "requisiti di sicurezza comuni",
        "answer": false
      },
      {
        "option_text": "2. Dividono un sistema in zone omogenee raggruppando le risorse (logiche o fisiche) con requisiti di sicurezza comuni 3. Hanno requisiti di sicurezza definiti da Security Level (SL), il livello richiesto per una zona è determinato dall'analisi de l",
        "answer": true
      },
      {
        "option_text": "rischio",
        "answer": true
      },
      {
        "option_text": "4. Hanno confini che separano gli elementi all'interno della zona da quelli esterni 5. Possono includere impianti presenti in siti fisici differenti  Falso  19",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 373,
    "code": "M3.2.6.1",
    "question": "V V V F V F  6 T1 6. Possono essere suddivise in sottozone che definiscono diversi livelli di sicurezza e quindi consentono una difesa in",
    "options": [
      {
        "option_text": "profondità",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 374,
    "code": "M3.3.1.1",
    "question": "Il Diritto alla Privacy 1. Nasce negli Stati Uniti nel 1910 dall’istituto «diritto a essere lasciato solo» ( right to be let alone ) e viene elaborato in Italia",
    "options": [
      {
        "option_text": "dagli anni ‘60 -’70",
        "answer": false
      },
      {
        "option_text": "2. Attualmente viene inteso solo nel senso di protezione dei dati personali 3. Originariamente significava libertà “nel fare quello che si vuole con i propri affari privati che non coinvolgono gli altri”",
        "answer": false
      },
      {
        "option_text": "principio che deve confrontarsi con gli altri che impediscono all’individuo di agire da solo 4. Originariamente significava libertà “nel fare quello che si vuole con i propri affari privati ” senza confrontarsi con gli altri Falso 5. Attualmente viene inteso non solo nel senso di protezione dei dati personali ma anche come diritto a esprimere",
        "answer": true
      },
      {
        "option_text": "liberamente le proprie aspirazioni 6. Nasce negli Stati Uniti nel 1890 dall’istituto «diritto a essere lasciato solo» ( right to be let alone ) e viene elaborato in Italia",
        "answer": true
      },
      {
        "option_text": "dagli anni ‘60 -’70",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 375,
    "code": "M3.3.6.1",
    "question": "Il Regolamento (UE) 2016/679 GDPR",
    "options": [
      {
        "option_text": "1. È un  regolamento dell'Unione europea  in materia di  trattamento dei dati personali  e di privacy 2. Necessità di essere recepito dai singoli stati , ovvero i singoli stati devono prendere provvedimenti di natura legislativa  per",
        "answer": true
      },
      {
        "option_text": "conformarsi 3. Ha come obiettivo primario il rafforzamento della protezione dei dati personali di cittadini dell'Unione europea  (UE) e dei",
        "answer": false
      },
      {
        "option_text": "residenti nell'UE, solo all'interno dei confini dell'UE 4. Si applica al trattamento dei dati personali delle persone fisiche e al trattamento non automatizzato dei dati conservati in",
        "answer": false
      },
      {
        "option_text": "un «archivio» 5. Il regolamento non si applica ad imprese ed enti, organizzazioni con sede legale fuori dall’UE che trattano dati di residenti",
        "answer": true
      },
      {
        "option_text": "dell’Unione Europea",
        "answer": false
      },
      {
        "option_text": "6. Il regolamento si occupa anche dei dati personali per attività di sicurezza nazionale o di ordine pubblico",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 376,
    "code": "M3.3.6.1",
    "question": "V F F V F F  7",
    "options": [
      {
        "option_text": "T1 5. Terzi",
        "answer": true
      },
      {
        "option_text": "6. Competente",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 377,
    "code": "M3.3.7.2",
    "question": "La futura certificazione della cybersicurezza secondo il Regolamento (UE) 2019/881",
    "options": [
      {
        "option_text": "1. Quattro livelli di certificazione con diverse “affidabilità”",
        "answer": false
      },
      {
        "option_text": "2. Tre livelli di certificazione con diverse “affidabilità” 3. Un livello di affidabilità “di base”, per il quale può bastare un riesame della documentazione tecnica, attività di valutazio ne sostitutive di effetto equivalente. Il livello base è l’unico per il quale il produttore/fornitore può ricorrere",
        "answer": true
      },
      {
        "option_text": "all’autocertifi cazione, ove prevista 4. Un livello di affidabilità “sostanziale”, per il quale la valutazione di sicurezza è effettuata a un livello inteso a ridurre  al",
        "answer": true
      },
      {
        "option_text": "minimo i rischi di incidenti ed  attacchi informatici commessi da soggetti che dispongono di abilità e risorse limitate 5. Un livello di affidabilità “elevato, per il quale la valutazione di sicurezza è effettuata a un livello inteso a ridurre al m inimo",
        "answer": true
      },
      {
        "option_text": "il rischio di  attacchi informatici avanzati commessi da attori che dispongono di abilità e risorse significative 6. Un livello di affidabilità “critico“, per il quale la valutazione di sicurezza è effettuata a un livello inteso ad annullare il rischio",
        "answer": true
      },
      {
        "option_text": "di attacchi informatici avanzati commessi da attori che dispongono di abilità e risorse significative",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 378,
    "code": "M3.4.3.3",
    "question": "Il Risk Apetite",
    "options": [
      {
        "option_text": "Può essere tradotto come Propensione al Rischio Delimita inferiormente l’aerea dei rischi che devono essere assolutamente evitati o massimamente ridotti, mediante tutti gli",
        "answer": true
      },
      {
        "option_text": "strumenti disponibili (Area Rossa) Delimita superiormente l’aerea dei rischi che devono essere assolutamente evitati o massimamente ridotti, mediante tutti",
        "answer": true
      },
      {
        "option_text": "gli strumenti disponibili (Area Rossa)",
        "answer": false
      },
      {
        "option_text": "Delimita superiormente l’aerea dei rischi che devono essere monitorati e gestiti costantemente dall’azienda (Area Gialla) Indica il livello e il tipo di rischio che un’organizzazione è in grado di assumere coerentemente con gli obiettivi strategici",
        "answer": true
      },
      {
        "option_text": "perseguiti",
        "answer": true
      },
      {
        "option_text": "Delimita l'area di rischio entro cui l'azienda desidera muoversi",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 379,
    "code": "M1.1.2.11",
    "question": "La comunicazione in Fibra Ottica",
    "options": [
      {
        "option_text": "1. Si realizza mediante cavi in Fibra di Vetro o di Silicio",
        "answer": true
      },
      {
        "option_text": "2. Si realizza mediante cavi in Materiali Polimerici",
        "answer": false
      },
      {
        "option_text": "3. Permette di raggiungere velocità di propagazione e larghezza di banda molto maggiori rispetto ai cavi tradizionali",
        "answer": true
      },
      {
        "option_text": "4. Visti i costi, di solito si utilizza per distanze brevi e medie",
        "answer": false
      },
      {
        "option_text": "5. Permette di trasmettere il segnale con frequenze da 300 a 107 GHz",
        "answer": true
      },
      {
        "option_text": "6. Può essere Monomodale o Multimodale 2-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 380,
    "code": "M1.1.2.2",
    "question": "Le onde lunghe (ovvero le onde a bassa frequenza):",
    "options": [
      {
        "option_text": "1. Riescono a trasmettere maggiori informazioni rispetto alle onde corte",
        "answer": false
      },
      {
        "option_text": "2. Riescono a trasmettere minori informazioni rispetto alle onde corte",
        "answer": true
      },
      {
        "option_text": "3. Hanno bisogno di una potenza più elevata rispetto alle onde corte per essere trasmesse",
        "answer": false
      },
      {
        "option_text": "4. Hanno bisogno di una potenza meno elevata rispetto alle onde corte per essere trasmesse",
        "answer": true
      },
      {
        "option_text": "5. Possono trasmettere segnali sino a 1000 chilometri",
        "answer": true
      },
      {
        "option_text": "6. Si misurano in KHz 3-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 381,
    "code": "M1.1.4.5",
    "question": "Un linguaggio di Markup",
    "options": [
      {
        "option_text": "1. È un linguaggio di marcatura o di formattazione",
        "answer": true
      },
      {
        "option_text": "2. È un insieme di regole che descrivono i meccanismi di rappresentazione o impaginazione di un testo",
        "answer": true
      },
      {
        "option_text": "3. È il linguaggio HTML",
        "answer": true
      },
      {
        "option_text": "4. È il protocollo http",
        "answer": false
      },
      {
        "option_text": "5. Mescola il testo di un documento con le istruzioni di markup nello stesso flusso di dati o file",
        "answer": true
      },
      {
        "option_text": "6. Non necessità di altri applicativi o strumenti per visualizzare correttamente il formato del testo 4-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 382,
    "code": "M1.1.4.6",
    "question": "Il DNS (Domain Name System)",
    "options": [
      {
        "option_text": "1. Può essere definito come la \"guida telefonica\" di Internet",
        "answer": true
      },
      {
        "option_text": "2. È uno standard che funziona solo con IPV4",
        "answer": false
      },
      {
        "option_text": "3. Traduce i nomi di dominio in indirizzi IP, in modo che il browser possa caricare le risorse Internet",
        "answer": true
      },
      {
        "option_text": "4. È un database distribuito di domini, ovvero insiemi di nomi formati da serie di stringhe separate da punti",
        "answer": true
      },
      {
        "option_text": "5. Utilizza nomi di dominio in cui la parte più importante è la prima stringa partendo da destra sino al punto",
        "answer": false
      },
      {
        "option_text": "6. Utilizza nomi di dominio univoci a livello globale 5-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 383,
    "code": "M1.2.4.39",
    "question": "Advanced Persistent Threat (APT) 1. È una minaccia perpetrata da un avversario dotato di notevole bagaglio tecnico e grandi risorse, in grado di effettuare",
    "options": [
      {
        "option_text": "attacchi su vasta scala, utilizzando molteplici vettori, e per periodi di tempo molto estesi",
        "answer": true
      },
      {
        "option_text": "2. È di solito gestita da gruppi organizzati e/o da stati sovrani",
        "answer": true
      },
      {
        "option_text": "3. Utilizza prevalentemente software pubblicamente disponibili per riuscire meglio a propagarsi",
        "answer": false
      },
      {
        "option_text": "4. Di solito utilizza software creati ad hoc, più versatili e complessi da rilevare 5. Per raccogliere informazioni sui propri obiettivi può utilizzare tool estremamente sofisticati, e, potenzialmente, anche",
        "answer": true
      },
      {
        "option_text": "appoggiarsi ai servizi di intelligence del paese di provenienza 6. Di solito è realizzata da piccole organizzazioni con obiettivi di basso profilo, prevalentemente economici Falso Nome Cognome Matricola V F V F V V F V F V V V V V V F V F V F V V F V  2 T2 – 22 Settembre 2022 6-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 384,
    "code": "M1.3.4.5",
    "question": "In un sistema informatico la Ridondanza V V F V V F V F V V V F V V V F V F V V V F V F V V V V V F V V V F V F  3 T2 – 22 Settembre 2022 1. È l'esistenza di più componenti o dispositivi dedicati ad una specifica funzione, organizzati in modo da evitare che un",
    "options": [
      {
        "option_text": "problema riguardante uno solo di essi determini il malfunzionamento generale dell'intero sistema 2. È uno strumento fondamentale, nelle fasi progettazione e di revisione di un’architettura o una topologia di rete, per",
        "answer": true
      },
      {
        "option_text": "aumentare l’affidabilità e la disponibilità complessiva dei sistemi",
        "answer": true
      },
      {
        "option_text": "3. Deve essere realizzata affiancando componenti o dispositivi rigorosamente dello stesso tipo",
        "answer": false
      },
      {
        "option_text": "4. Deve essere realizzata affiancando componenti o dispositivi che realizzino le stesse funzioni nello stesso modo",
        "answer": true
      },
      {
        "option_text": "5. È necessario che sia presente su tutta la catena dei dispositivi (end-to-end), evitando accuratamente gli SPOF",
        "answer": true
      },
      {
        "option_text": "6. Può essere realizzata solamente su una parte della catena dei dispositivi 12-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 385,
    "code": "M3.1.3.4",
    "question": "Il percorso di Certificazione Aziendale",
    "options": [
      {
        "option_text": "1. È composto di una prima fase (di solito) consulenziale di progettazione e implementazione del Sistema di Gestione 2. È composto di una prima fase in cui si realizzano manuali, procedure, istruzioni e moduli di registrazioni conformi alle norme",
        "answer": true
      },
      {
        "option_text": "dello schema di riferimento 3. Prevede un audit, ovvero una valutazione indipendente di un ente terzo di certificazione volta a ottenere le evidenze della",
        "answer": true
      },
      {
        "option_text": "soddisfazione dei criteri prefissati 4. Prevede un audit, ovvero una valutazione interna o da parte di terzi, volta a ottenere le evidenze della soddisfazione dei",
        "answer": true
      },
      {
        "option_text": "criteri prefissati 5. È composto di una seconda fase di richiesta della certificazione del Sistema di Gestione dopo l’esito positivo della valutazione",
        "answer": false
      },
      {
        "option_text": "interna 6. È composto di una seconda fase in cui si effettua la pianificazione dell’audit e del conseguimento del certificato a seguito del",
        "answer": false
      },
      {
        "option_text": "completamento positivo dell’audit da parte dell’ente di certificazione 14 -",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 386,
    "code": "M3.2.6.14",
    "question": "La serie ISA/IEC 62443 1. È stata sviluppata dal comitato ISA99 e rilasciata con lo stesso nome, successivamente è stata adottata dalla Commissione",
    "options": [
      {
        "option_text": "elettrotecnica internazionale (IEC) 2. Continua ad essere sviluppata dal comitato ISA99 che si avvale del contributo e delle conoscenze degli esperti di sicurezza",
        "answer": true
      },
      {
        "option_text": "IACS di tutto il mondo",
        "answer": true
      },
      {
        "option_text": "3. Originariamente è stata sviluppata da ISA99 ed ora è in gestione dal comitato IEC che non sviluppa nuove parti 4. Fornisce un quadro flessibile per affrontare e mitigare le vulnerabilità di sicurezza attuali e future nei sistemi di controllo e",
        "answer": false
      },
      {
        "option_text": "automazione industriale (IACS)",
        "answer": true
      },
      {
        "option_text": "5. Attualmente è costituito da quattro famiglie di standard corrispondenti a quattro profili di approfondimento",
        "answer": true
      },
      {
        "option_text": "6. Attualmente è costituito da tre famiglie di standard corrispondenti a tre profili di approfondimento 15 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 387,
    "code": "M3.3.1.5",
    "question": "Il Regolamento UE 2016/679 del Parlamento Europeo e del Consiglio del 27 aprile 2016, detto GDPR",
    "options": [
      {
        "option_text": "1. È un atto giuridico che è stato recepito da parte degli stati membri l’UE",
        "answer": true
      },
      {
        "option_text": "2. Ha sostituito una precedente direttiva relativa alla tutela delle persone fisiche riguardo il trattamento dei dati personali",
        "answer": true
      },
      {
        "option_text": "3. In Italia ha reso necessaria una modifica della legislazione esistente (il Codice della Privacy)",
        "answer": true
      },
      {
        "option_text": "4. È entrato vigore in Italia senza la necessità di essere recepito e senza modificare la legislazione esistente",
        "answer": false
      },
      {
        "option_text": "5. Disciplina il trattamento dei dati personali relativi ai cittadini dell'UE, da parte di persone, società o organizzazioni",
        "answer": true
      },
      {
        "option_text": "6. Disciplina il trattamento dei dati personali da parte di persone, società o organizzazioni facenti parte dell’UE 17 - (M.3.3.2.4) Il Brevetto 1. È un titolo in forza del quale si conferisce al titolare un monopolio di sfruttamento di un’invenzione, per un periodo di tempo",
        "answer": false
      },
      {
        "option_text": "limitato 2. Consiste nel diritto esclusivo di realizzare un’invenzione, disporne e farne un uso commerciale, vietando tali attività ad altri",
        "answer": true
      },
      {
        "option_text": "soggetti non autorizzati",
        "answer": true
      },
      {
        "option_text": "3. Attribuisce al titolare un’autorizzazione al libero uso dell’invenzione coperta dal brevetto",
        "answer": false
      },
      {
        "option_text": "4. Attribuisce al titolare il diritto di escludere altri soggetti dall’utilizzo della stessa",
        "answer": true
      },
      {
        "option_text": "5. Conferisce un diritto esclusivo di sfruttamento dell'invenzione, in un territorio e per un periodo ben determinato",
        "answer": true
      },
      {
        "option_text": "6. Conferisce un diritto esclusivo di sfruttamento dell'invenzione, globalmente e per un periodo illimitato 18 - (M.3.3.2.5) Gli Asset informatici",
        "answer": false
      },
      {
        "option_text": "1. Sono le casseforti aziendali a cui deve essere attribuito il valore effettivo in base a adeguate valutazioni 2. Sono i contenitori dei patrimoni conoscitivi dell’azienda, che permettono di realizzare in maniera costante e ripetitiva o,",
        "answer": true
      },
      {
        "option_text": "altresì, di evolvere un prodotto o un servizio",
        "answer": true
      },
      {
        "option_text": "3. Sono unicamente i sistemi gestionali che permettono di gestire gli ordini dai clienti e quindi il vero valore per l’azienda 4. Sono quei sistemi informatici che non richiedono un onere di gestione e manutenzione grazie al forte ritorno economico Falso",
        "answer": false
      },
      {
        "option_text": "5. Devono essere protetti con una strategia crescente e stratificata, dall’esterno verso il cuore della proprietà intellettuale 6. Possono essere i Sistemi CAD/CAM Computer Aided Design e Manufacturing presso gli uffici di ingegneria e progettazione Vero 19 - (M.3.3.3.3) I Data Breach 1. Sono violazioni di sicurezza che comportano la distruzione, la perdita, la modifica, la divulgazione non autorizzata o l’accesso",
        "answer": true
      },
      {
        "option_text": "ai dati personali trasmessi, conservati o comunque trattati 2. Sono violazioni dei dati personali che possono compromettere la riservatezza, l’integrità o la disponibilità di dati personali Vero",
        "answer": true
      },
      {
        "option_text": "3. Possono essere, ad esempio, gli accessi o le acquisizioni dei dati da parte di terzi non autorizzati",
        "answer": true
      },
      {
        "option_text": "4. Possono essere, ad esempio, i furti o le perdite di dispositivi informatici contenenti dati personali",
        "answer": true
      },
      {
        "option_text": "5. Possono essere, ad esempio, le impossibilità di accedere ai dati per aver dimenticato o perso le credenziali",
        "answer": false
      },
      {
        "option_text": "6. Possono essere, ad esempio, le deliberate alterazione di dati personali V V F V V F V V V F V F V V F V V F V V F F V V V V V V F V  5 T1 – 22 Settembre 2022 20 -",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 388,
    "code": "M3.3.5.2",
    "question": "Secondo la direttiva NIS (Network and Information Security) il CSIRT Nazionale include i seguenti compiti:",
    "options": [
      {
        "option_text": "1. Il monitoraggio degli incidenti a livello nazionale 1. L’emissione di preallarmi, allerte, annunci e divulgazione di informazioni alle parti interessate in merito a rischi e incidenti Vero",
        "answer": true
      },
      {
        "option_text": "2. L’intervento in caso di incidente",
        "answer": true
      },
      {
        "option_text": "3. L’analisi a posteriori dei rischi e degli incidenti",
        "answer": false
      },
      {
        "option_text": "4. La partecipazione economica agli investimenti in cybersecurity",
        "answer": false
      },
      {
        "option_text": "5. La partecipazione alla rete dei CSIRT europei 21 -",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 389,
    "code": "M3.3.5.3",
    "question": "NIS2 (Network and Information Security) rispetto alla prima direttiva NIS: 1. Elimina la distinzione tra fornitori di servizi essenziali e fornitori di servizi digitali, le aziende vengono classificate in",
    "options": [
      {
        "option_text": "“essenziali” e/o “importanti” a seconda della criticità dei servizi che offrono",
        "answer": true
      },
      {
        "option_text": "2. Prevede che le nuove categorie dei sevizi essenziali e importanti siano sottoposte a regimi di vigilanza diversi",
        "answer": true
      },
      {
        "option_text": "3. Entrerà direttamente in forza senza il recepimento dei singoli stati dell’UE 4. Amplia l’ambito di applicazione comprendendo più servizi, come la produzione di prodotti farmaceutici, dispositivi medici e prodotti chimici, il settore alimentare, la gestione delle acque reflue e dei rifiuti, i servizi postali, nonché la pubblica",
        "answer": false
      },
      {
        "option_text": "amministrazione",
        "answer": true
      },
      {
        "option_text": "5. Prevede il nuovo obiettivo di rafforzare la sicurezza informatica lungo la catena di approvvigionamento",
        "answer": true
      },
      {
        "option_text": "6. Non è ancora entra in vigore 21 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 390,
    "code": "M3.3.6.7",
    "question": "L’ambito di applicazione (SCOPE) del regolamento Europeo UE 2016/679 (General Data Protection) 1. È relativo al trattamento dei dati personali in genere, ed al trattamento manuale dei dati se conservati in un \"archivio\",",
    "options": [
      {
        "option_text": "definito in modo simile all'espressione \"banca di dati\", presente nel codice della privacy italiano 2. Riguarda anche a imprese ed enti, organizzazioni in generale, con sede legale fuori dall'UE che trattano dati personali di",
        "answer": true
      },
      {
        "option_text": "residenti nell'Unione Europea",
        "answer": true
      },
      {
        "option_text": "3. Prescinde dal luogo o dai luoghi ove sono collocati i sistemi di archiviazione (storage) e di elaborazione (server)",
        "answer": true
      },
      {
        "option_text": "4. Il regolamento riguarda anche la gestione di dati personali per attività di sicurezza nazionale o di ordine pubblico",
        "answer": false
      },
      {
        "option_text": "5. Riguarda specificatamente i dati memorizzati su supporto informatico",
        "answer": false
      },
      {
        "option_text": "6. Riguarda e disciplina il trattamento dei dati delle persone fisiche e giuridiche 22-",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 391,
    "code": "M3.3.6.8",
    "question": "Per il Regolamento UE 2016/679 GDPR",
    "options": [
      {
        "option_text": "1. L’informativa deve essere fornita dal titolare del trattamento agli interessati, prima del trattamento",
        "answer": true
      },
      {
        "option_text": "2. L’informativa deve essere fornita dal titolare del trattamento sulle finalità e le modalità dei trattamenti operati",
        "answer": true
      },
      {
        "option_text": "3. L'informativa disciplina due diversi casi: dati raccolti presso l'interessato e dati raccolti presso altri soggetti",
        "answer": true
      },
      {
        "option_text": "4. L'informativa disciplina diversi casi: dall’Art. 13 sino all’articolo 16 5. Una volta fornita l’informativa deve essere poi esplicitamente dato un valido consenso per la raccolta dei dati e per i propositi",
        "answer": false
      },
      {
        "option_text": "per i quali sono usati da parte dell’interessato",
        "answer": true
      },
      {
        "option_text": "6. Il consenso può essere fornito in maniera unica anche su molti punti informativi anche non distinti e specificati 23 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 392,
    "code": "M3.3.7.3",
    "question": "Il Cybersecurity Act (Regolamento EU 2019/881)",
    "options": [
      {
        "option_text": "1. È composto di due parti fondamentali (il Titolo II e Titolo III)",
        "answer": true
      },
      {
        "option_text": "2. Si occupa in primis di definire il ruolo dell’Agenzia Europea per la Cybersecurity 3. Si occupa nella seconda parte di definire un quadro di certificazione europea della cybersicurezza per i prodotti, i servizi e i",
        "answer": true
      },
      {
        "option_text": "processi TIC 4. Si occupa nella seconda parte di definire un quadro di certificazione europea della cybersicurezza esclusivamente per i",
        "answer": true
      },
      {
        "option_text": "prodotti TIC",
        "answer": false
      },
      {
        "option_text": "5. Prevede un quadro di certificazione a tre livelli di affidabilità: di base, sostanziale ed elevato",
        "answer": true
      },
      {
        "option_text": "6. Prevede un quadro di certificazione a quattro livelli di affidabilità: di base, moderato, elevato e critico 24 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 393,
    "code": "M3.4.1.2",
    "question": "I requisiti ISO 27001 nel ciclo di Deming (PDCA) sono associati: V V V F F V V V F V V F V V V F F F V V V F V F V V V F V F  6",
    "options": [
      {
        "option_text": "T2 – 22 Settembre 2022 1. Contesto, Leadership, Pianificazione e Supporto a PLAN",
        "answer": true
      },
      {
        "option_text": "2. Contesto, Leadership e Pianificazione a PLAN",
        "answer": false
      },
      {
        "option_text": "3. Attività Operative a DO",
        "answer": true
      },
      {
        "option_text": "4. Supporto e Attività Operative a DO",
        "answer": false
      },
      {
        "option_text": "5. Valutazione prestazioni a CHECK",
        "answer": true
      },
      {
        "option_text": "6. Miglioramento ad ACT 25 -",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 394,
    "code": "M3.4.1.3",
    "question": "Il Contesto di un’Organizzazione secondo ISO 27001? 1. Fa riferimento alla comprensione dell’organizzazione nel suo insieme, il modello di business e i suoi rischi, le aspettative degli",
    "options": [
      {
        "option_text": "“stake holder”, il management e tutte le parti che ne compongono la struttura",
        "answer": true
      },
      {
        "option_text": "2. Deve essere considerato a partire dall’alto (approccio Top-Down)",
        "answer": true
      },
      {
        "option_text": "3. Deve essere considerato a partire dalle strutture operative (approccio Bottom-Up) 4. Deve essere utilizzato per definire il campo di applicazione e gli obiettivi del sistema di gestione che si vuole implementare Vero 5. Deve considerare lo stato attuale dell’azienda e l’obiettivo futuro, dopodiché permettere di definire il progetto di",
        "answer": false
      },
      {
        "option_text": "cambiamento",
        "answer": true
      },
      {
        "option_text": "6. Supporta, nella definizione del progetto di cambiamento, la quantizzazione dei possibili investimenti 26 -",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 395,
    "code": "M3.4.3.4",
    "question": "Come si può definire una strategia di mitigazione del rischio?",
    "options": [
      {
        "option_text": "1. Si può delimitare, coerentemente con gli obiettivi strategici stabiliti, aree di gestione differenti",
        "answer": true
      },
      {
        "option_text": "2. Si associano le varie aree di gestione ad azioni di mitigazione diversificate",
        "answer": true
      },
      {
        "option_text": "3. Si possono delimitare, ad esempio, tre aree di gestioni (attenzione, monitoraggio e divieto)",
        "answer": true
      },
      {
        "option_text": "4. Si possono delimitare le aree con soglie associate al livello e la tipologia del rischio",
        "answer": true
      },
      {
        "option_text": "5. Si definisce un’area di divieto che richiede un monitoraggio continuo",
        "answer": false
      },
      {
        "option_text": "6. Si definisce sempre una soglia di Risk Apetite ovvero una soglia che deve essere sempre superata 27 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 396,
    "code": "M3.4.4.3",
    "question": "Perché il modello RID (Riservatezza-Integrità-Disponibilità) non va bene per i sistemi operazionali OT?",
    "options": [
      {
        "option_text": "1. Perché la Riservatezza è parzialmente rilevante*",
        "answer": true
      },
      {
        "option_text": "2. Perché la Riservatezza non è assolutamente rilevante*",
        "answer": false
      },
      {
        "option_text": "3. L’integrità è significativa* se è associata alla capacità di mantenere attivo il controllo sul processo",
        "answer": true
      },
      {
        "option_text": "4. Perché la disponibilità* è un fattore rilevante se la si considera dal punto di vista dell’impatto sulla business continuty",
        "answer": true
      },
      {
        "option_text": "5. Perché esistono parametri più rilevanti*, quali il Safety (Sicurezza Fisica) o la Reliability (Affidabilità)",
        "answer": true
      },
      {
        "option_text": "6. Perché esistono parametri più rilevanti*, quali l’Accountability (*) Per un sistema OT 28 -",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 397,
    "code": "M4.1.2.3",
    "question": "Come si riesce a trasformare il reparto IT da centro di costo a centro di profitto?",
    "options": [
      {
        "option_text": "1. Sensibilizzazione e formazione degli skills del top management verso il Digitale",
        "answer": true
      },
      {
        "option_text": "2. Utilizzo delle politiche economiche industriali e dei relativi incentivi, bonus o benefit",
        "answer": true
      },
      {
        "option_text": "3. Realizzare investimenti informatici che permettano la crescita commerciale sul mercato globale",
        "answer": true
      },
      {
        "option_text": "4. Realizzare investimenti informatici che permettano la maggiore competitività sul mercato",
        "answer": true
      },
      {
        "option_text": "5. Realizzare investimenti informatici che permettano l’internazionalizzazione dell’azienda",
        "answer": true
      },
      {
        "option_text": "6. Realizzare investimenti informatici che migliorino il rendimento produttivo riducendo gli sprechi V F V F V V V V F V V V V V V V F F V F V V V F V V V V V V  7 T2 – 22 Settembre 2022 29-",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 398,
    "code": "M4.1.4.1",
    "question": "Quali possono essere le ragioni per investire in Digitalizzazione?",
    "options": [
      {
        "option_text": "1. Migliore qualità: Controlli automatici e ripetitivi, segnalazione anomalie in tempo reale",
        "answer": true
      },
      {
        "option_text": "2. Risparmio di tempo: Riduzione dei tempi di produzione e di consegna, riduzione dei fermi 3. Riduzione dei magazzini: Integrazione della supply chain, riordino automatico dei componenti solo quando serve",
        "answer": true
      },
      {
        "option_text": "effettivamente",
        "answer": true
      },
      {
        "option_text": "4. Risparmio di costi di infrastruttura, grazie all’utilizzo prevalente delle affidabili connessioni internet pubbliche",
        "answer": false
      },
      {
        "option_text": "5. Maggiore sostenibilità: minori consumi ed emissioni, riduzione dei supporti cartacei per la documentazione",
        "answer": true
      },
      {
        "option_text": "6. Smart working: maggiore flessibilità lavorativa e migliore produttività 30 –",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 399,
    "code": "M4.2.1.2",
    "question": "I seguenti settori di attività e il relativo rischio:",
    "options": [
      {
        "option_text": "1. Le organizzazioni bancarie e finanziarie: il rischio cyber è relativo alla continuità del servizio e quindi del business",
        "answer": true
      },
      {
        "option_text": "2. Le aziende industriali: il rischio cyber può portare a un danno reputazionale",
        "answer": true
      },
      {
        "option_text": "3. Le aziende industriali: il rischio cyber può influire sulla continuità del business",
        "answer": true
      },
      {
        "option_text": "4. I servizi sanitari (ambulatori, strutture ospedaliere, ecc.): in cui il rischio è la diffusione dei dati sensibili dei pazienti",
        "answer": true
      },
      {
        "option_text": "5. I servizi sanitari (ambulatori, strutture ospedaliere, ecc.): in cui il rischio è il possibile impatto sulla salute pubblica",
        "answer": true
      },
      {
        "option_text": "6. Le infrastrutture critiche: il rischio primario è quello finanziario Esercizio 1 Nello schema topologico in figura identificare i dispositivi rappresentati con le lettere indicandoli negli appositi spazi nella tabella sotto lo schema, inoltre rispondere alle seguenti domante: Le connessioni colorate in rosso, verde, giallo e azzurro cosa rappresentano? (Risposta in R) Indicare la sigla del dispositivo più critico che andrebbe ridondato nell’architettura rappresentata (Risposta in S) A B C D E F G H I L Router Firewall Switch Router Firewall Switch Switch Anomaly Detection Firewall Router M N O P Q R S Cloud Router VPN Anomaly Detection Switch VLAN G V V V F V V V V V V V F  8 T2 – 22 Settembre 2022 Esercizio 2 Rappresentare attraverso la modellizzazione WIDE (mediante la descrizione formale con i componenti grafici wide del diagramma di flusso) un processo di controllo manutentivo del sistema UPS (gruppo di continuità elettrica): Il processo è così strutturato:  È necessario effettuare un controllo ciclico, per ciascuno degli N gruppi presenti in azienda, per verificare se le batterie sono in buono stato ed eventualmente sostituirle, in ogni caso è necessario sostituire i contatti elettrici.  Operazione di sostituzione dei contatti elettrici  Se necessita sostituzione, operazione di sostituzione della batteria e si itera al successivo UPS  Se non necessita sostituzione si itera il controllo al successivo UPS  1 T1 – 22 Settembre 2022 Corso Aspetti Gestionali e Organizzativi della Cyber Security Appello 22 Settembre 2023 Indicare vero [V] o falso [F] alle seguenti affermazioni: 1-",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 400,
    "code": "M1.1.2.4.1",
    "question": "Cos’è la larghezza di banda di un canale?",
    "options": [
      {
        "option_text": "1. La misura dell’ampiezza dello spettro che passa in un canale 2. Un parametro inversamente proporzionale alla quantità di dati che possono essere trasmessi in un canale nell’unità di tempo Falso",
        "answer": true
      },
      {
        "option_text": "3. Un parametro proporzionale alla quantità di dati che possono essere trasmessi in un canale nell’unità di tempo",
        "answer": true
      },
      {
        "option_text": "4. Un parametro indipendente dalla quantità di dati trasmessi in un canale",
        "answer": false
      },
      {
        "option_text": "5. La misura dell'ampiezza della gamma di frequenze che possono passare per quel canale",
        "answer": true
      },
      {
        "option_text": "6. La capacità di un qualsiasi canale digitale di trasmettere dati 2-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 401,
    "code": "M1.1.3.3",
    "question": "Il Packet Switching 1. È una tecnica di trasmissione in cui messaggi consecutivi vengono raggruppati in pacchetti (packets), trasmessi ripetutamente Falso",
    "options": [
      {
        "option_text": "2. È una tecnica di trasmissione in cui il messaggio viene diviso in parti più piccole (packets), gestite singolarmente",
        "answer": true
      },
      {
        "option_text": "3. È una tecnica di trasmissione in cui i pacchetti viaggiano attraverso la rete, attraverso un percorso casuale 4. È una tecnica di trasmissione in cui tutti i pacchetti vengono suddivisi e trasmessi in maniera indipendente e riassemblati in ricezione",
        "answer": false
      },
      {
        "option_text": "nell'ordine corretto 5. Prevede che, se un messaggio arriva mancante di pacchetti o danneggiato, viene inviata una notifica per inviare nuovamente il",
        "answer": true
      },
      {
        "option_text": "messaggio, se invece viene raggiunto l'ordine corretto dei pacchetti, verrà inviata notifica di conferma 6. Prevede che, se un messaggio arriva mancante di pacchetti o danneggiato il messaggio verrà considerato comunque corretto",
        "answer": true
      },
      {
        "option_text": "perché verrà corretto da un meccanismo di completamento automatico a correzione di errore 4-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 402,
    "code": "M1.1.4.2",
    "question": "L’Uniform Resource Locator (URL) 1. È una sequenza di caratteri che identifica univocamente l'indirizzo di una risorsa presente su un host (server) che fa parte di una",
    "options": [
      {
        "option_text": "rete di computer e resa accessibile a un client",
        "answer": true
      },
      {
        "option_text": "2. È una sequenza di caratteri esclusivamente alfanumerici",
        "answer": false
      },
      {
        "option_text": "3. Identifica univocamente gli indirizzi delle risorse come documenti, un'immagini, video, tipicamente presente sui server",
        "answer": true
      },
      {
        "option_text": "4. Può utilizzare protocolli http, https, ftp o mms",
        "answer": true
      },
      {
        "option_text": "5. Si avvale del DNS (Domain Name System) per “risolvere” l’URL in indirizzo IP",
        "answer": true
      },
      {
        "option_text": "6. Nel caso utilizzi il protocollo https realizza una comunicazione client server non criptata 5-",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 403,
    "code": "M1.3.1.14",
    "question": "Quali di questi livelli ISO/OSI sono livelli logici legati agli Host V V V F V F V F V V F V V F F V F V V V F V V F V V V F V F V V V F V F  3",
    "options": [
      {
        "option_text": "T1 – 22 Settembre 2022 1. Livello 2 – Collegamento",
        "answer": false
      },
      {
        "option_text": "2. Livello 3 – Rete",
        "answer": false
      },
      {
        "option_text": "3. Livello 4 – Trasporto",
        "answer": true
      },
      {
        "option_text": "4. Livello 5 – Sessione",
        "answer": true
      },
      {
        "option_text": "5. Livello 6 – Presentazione",
        "answer": true
      },
      {
        "option_text": "6. Livello 7 – Applicazione 12-",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 404,
    "code": "M4.1.3.7",
    "question": "Verificare la correttezza del significato delle sigle corrispondenti alle seguenti figure professionali:",
    "options": [
      {
        "option_text": "1. CIO = Chief Information Officer",
        "answer": true
      },
      {
        "option_text": "2. CSO = Chief Security Officer",
        "answer": true
      },
      {
        "option_text": "3. CSO = Chief Safety Officer",
        "answer": false
      },
      {
        "option_text": "4. CISO = Chief Information Security Officer",
        "answer": true
      },
      {
        "option_text": "5. DPO = Data Prevention Officer",
        "answer": false
      },
      {
        "option_text": "6. CTO = Chief Transiction Officer V V V F F V V V F V V V V F V V V F V V V V V V V V F V F F  7 T1 – 22 Settembre 2022 29 -",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 405,
    "code": "M4.1.5.5",
    "question": "Il CISO (Chief Information Security Officer)",
    "options": [
      {
        "option_text": "1. È il direttore aziendale della sicurezza informatica 2. È una figura la cui responsabilità è di sviluppare una strategia aziendale perché i beni d'informazione e le tecnologie aziendali",
        "answer": true
      },
      {
        "option_text": "siano adeguatamente protetti",
        "answer": true
      },
      {
        "option_text": "3. Ha tra le competenze una forte conoscenza dei processi produttivi industriali",
        "answer": false
      },
      {
        "option_text": "4. Ha tra le competenze una forte leadership in modo da interagire bene con il consiglio di amministrazione 5. Ha tra le competenze il pensiero strategico: per generare e implementare idee innovative e in linea con gli obiettivi aziendali Vero",
        "answer": true
      },
      {
        "option_text": "6. Non necessità della conoscenza delle regolamentazioni in vigore nei singoli stati perché collabora con il DPO Esercizio 1 Nello schema topologico in figura identificare i dispositivi rappresentati con le lettere indicandoli negli appositi spazi nella tabella sotto lo schema, inoltre rispondere alle seguenti domande: Le connessioni colorate in rosso, verde, giallo, azzurro e marrone cosa rappresentano? (Risposta in R) Indicare la sigla del dispositivo più critico che andrebbe ridondato nell’architettura rappresentata (Risposta in S) A B C D E F G H I L Router Firewall Switch Router Firewall Switch Switch Firewall Switch VPN M N O P Q R S Router Switch Switch Gateway Cloud VLAN G V V V F V V  8 T1 – 22 Settembre 2022 Esercizio 2 Rappresentare attraverso la modellizzazione WIDE (mediante la descrizione formale con i componenti grafici wide del diagramma di flusso) un processo di controllo manutentivo dei filtri associati ai sistemi di ventilazione dei server IT: Il processo è così strutturato:  È necessario effettuare un controllo ciclico, per ciascuno degli N filtri, per verificare se la condizione del filtro necessità la sostituzione o semplicemente una pulizia accurata.  Se necessita sostituzione, si effettua l’operazione e si itera al successivo filtro  Se non necessita sostituzione bisogna effettuare la pulizia accurata, e quindi si itera il controllo al successivo filtro.  1 T1 Corso Aspetti Gestionali e Organizzativi della Cyber Security Appello 13 Ottobre 2023 Indicare vero [V] o falso [F] alle seguenti affermazioni: 1",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 406,
    "code": "M1.1.3.2",
    "question": "Il Routing 1. Il Routing è l'instradamento effettuato tra reti differenti con l’ausilio delle tabelle di instradamento configurate sui vari",
    "options": [
      {
        "option_text": "Router 2. Il Routing è l'instradamento effettuato all’interno della stessa rete con l’ausilio delle tabelle di instradamento configurate",
        "answer": true
      },
      {
        "option_text": "sui vari Router 3. Per il suo funzionamento considera che i router siano a conoscenza degli indirizzi solo delle reti a cui sono direttamente",
        "answer": false
      },
      {
        "option_text": "collegati 4. Per il suo funzionamento considera che i router siano a conoscenza degli indirizzi delle reti a cui sono direttamente o",
        "answer": true
      },
      {
        "option_text": "indirettamente collegati 5. Nella tabella di instradamento ogni riga corrisponde a una regola e le regole vengono esaminate dalla prima all’ultima, se ci sono più regole che corrispondono all'indirizzo fornito, viene scelta la regola che ha più bit in comune con l'indirizzo",
        "answer": false
      },
      {
        "option_text": "fornito 6. Nella tabella di instradamento ogni riga corrisponde a una regola e le regole vengono esaminate dalla prima all’ultima, se",
        "answer": true
      },
      {
        "option_text": "ci sono più regole che corrispondono all'indirizzo fornito, viene scelta la prima regola che viene esaminata 3",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 407,
    "code": "M1.1.6.1",
    "question": "Una Minaccia alla sicurezza informatica 1. Può essere definita come un codice eseguibile che ha la capacità di compiere operazioni dannose per la macchina in cui si",
    "options": [
      {
        "option_text": "trova, per il sistema informatico in cui si è inserito o per i dati in esso contenuti o gestiti",
        "answer": true
      },
      {
        "option_text": "2. Si propaga e si concretizza sempre indipendentemente dal fattore umano 3. Utilizza un vettore (ovvero il percorso seguito dall'attacco) che può essere esterno, da parte di qualche malintenzionato, o",
        "answer": false
      },
      {
        "option_text": "interno all’organizzazione, anche incidentale",
        "answer": true
      },
      {
        "option_text": "4. Può essere eliminata mediante l’installazione di un buon antivirus 5. Può penetrare qualsiasi tipo di file eseguibile e diffondersi nel momento in cui il file viene copiato e inviato da un utente",
        "answer": false
      },
      {
        "option_text": "all'altro",
        "answer": true
      },
      {
        "option_text": "6. Può essere costituita dai Ramsomware 6",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 408,
    "code": "M2.2.1.3.1",
    "question": "Quali strategie posso utilizzare per mitigare i possibili danni da un attacco cyber ai sistemi che gestiscono una linea produttiva (l’unica che produce un determinato prodotto molto costoso)? 1. Ridondare e rendere indipendenti le architetture di rete e i dispositivi informatici che gestiscono le linee di produzione Vero",
    "options": [
      {
        "option_text": "2. Realizzare un adeguato sistema di segmentazione e segregazione delle reti e degli apparati di controllo",
        "answer": true
      },
      {
        "option_text": "3. Aumentare gli stock delle materie prime",
        "answer": false
      },
      {
        "option_text": "4. Controllare strettamente e monitorare gli accessi logici diretti ai sistemi di produzione dall’esterno  all’azienda",
        "answer": true
      },
      {
        "option_text": "5. Aumentare considerevolmente la quantità di prodotti finiti in magazzino",
        "answer": false
      },
      {
        "option_text": "6. Scollegare fisicamente e isolare la rete industriale di produzione dalla rete office 11",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 409,
    "code": "M3.1.2.3",
    "question": "Quali sono le principali tipologie di Modellizzazione dei Processi?",
    "options": [
      {
        "option_text": "1. Basate sui dati",
        "answer": true
      },
      {
        "option_text": "2. Basate sulle attività",
        "answer": true
      },
      {
        "option_text": "3. Basata sulle informazioni",
        "answer": false
      },
      {
        "option_text": "4. Basata sulle transizioni",
        "answer": false
      },
      {
        "option_text": "5. Basata sui messaggi",
        "answer": false
      },
      {
        "option_text": "6. Basata sulla comunicazione 19",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 410,
    "code": "M3.2.1_2.9",
    "question": "Nella revisione 2022 di ISO 27001",
    "options": [
      {
        "option_text": "1. Compare per la prima volta la parola Cybersecurity nel titolo 2. Il numero dei controlli è inferiore rispetto alla versione precedente del 2013 Vero V F V V V F F F V F V V V F V V V V V V F F F V V F V V V F  5",
        "answer": true
      },
      {
        "option_text": "T1 3. Molti controlli sono stati accorpati e non ne sono stati introdotti di nuovi",
        "answer": false
      },
      {
        "option_text": "4. Molti controlli sono rimasti invariati",
        "answer": true
      },
      {
        "option_text": "5. Un certo numero di controlli è stato semplicemente rinominato",
        "answer": true
      },
      {
        "option_text": "6. Un certo numero di controlli è completamente nuovo 21",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 411,
    "code": "M3.2.1_2.8",
    "question": "Il nuovo Controllo ISO 27001 Rev. 2022 “Data leakage prevention” 1. Indica che le misure di prevenzione della fuga di dati si applicano ai sistemi, alle reti e a qualsiasi altro dispositivo che",
    "options": [
      {
        "option_text": "tratta, memorizza o trasmette informazioni sensibili 2. Indica che le misure di prevenzione della fuga di dati si applicano ai soli sistemi abilitati al trattamento dei dati di terzi Falso",
        "answer": true
      },
      {
        "option_text": "3. È stato pensato, insieme ad altri nuovi controlli, in funzione della normativa europea GDPR",
        "answer": true
      },
      {
        "option_text": "4. È un controllo solo di tipo “Preventivo",
        "answer": false
      },
      {
        "option_text": "5. È un controllo di tipo “Preventivo” e “Investigativo”",
        "answer": true
      },
      {
        "option_text": "6. È un controllo solo di tipo “Correttivo” 22",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 412,
    "code": "M3.2.5.1",
    "question": "Quali delle seguenti sono effettive differenze tra NIST Cyber Security Framework e ISO 27001 1. Il NIST è stato creato originariamente per la gestione del rischio sulle informazioni, ISO 27001 è invece un approccio",
    "options": [
      {
        "option_text": "standardizzato per la creazione e il mantenimento di un sistema di gestione della sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "2. ISO 27001 è volontario, mentre il NIST CSF prevede la certificazione",
        "answer": false
      },
      {
        "option_text": "3. ISO 27001 è uno standard più rigido è prescrittivo del NIST, che ha una natura volontaria e gratuita",
        "answer": true
      },
      {
        "option_text": "4. La ISO 27001 è meno tecnica, con maggiore enfasi sulla gestione basata sul rischio",
        "answer": true
      },
      {
        "option_text": "5. La ISO 27001 è più tecnica, con minore enfasi sulla gestione basata sul rischio 6. La ISO 27001 è una buona scelta per certificare le organizzazioni che hanno maturità operativa, mentre il NIST CSF può essere più adatto per le organizzazioni che si trovano nelle fasi iniziali dello sviluppo di un programma di rischio per la",
        "answer": false
      },
      {
        "option_text": "sicurezza informatica 23",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 413,
    "code": "M3.3.1.2.1",
    "question": "Quali sono le origini legislative del diritto alla privacy italiano? 1. La Costituzione Italiana, con gli articoli riguardanti il domicilio, la libertà e segretezza della corrispondenza, e la libertà di",
    "options": [
      {
        "option_text": "manifestazione del pensiero 2. La Costituzione Italiana con l’articolo che incorpora la privacy nei diritti inviolabili dell’uomo, come anche sostenuto dalla",
        "answer": true
      },
      {
        "option_text": "sentenza della Corte costituzionale",
        "answer": true
      },
      {
        "option_text": "3. La prima sentenza della Corte di Cassazione degli anni ’50 sul “caso del tenore Enrico Caruso” 4. La prima sentenza della Corte di Cassazione degli anni ’50 che identificava il diritto alla privacy nella tutela delle situazioni e vicende personali e familiari solamente se riguardanti le vicende personali verificatesi entro il domicilio",
        "answer": true
      },
      {
        "option_text": "domestico 5. La prima legge italiana di tutela della privacy come attuazione della vecchia direttiva europea della metà degli anni ‘90 Vero 6. La prima legge italiana di tutela della privacy come attuazione del vecchio regolamento europeo della metà degli anni ‘90 Falso 24",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 414,
    "code": "M3.3.1.3.1",
    "question": "Quali sono le attuali leggi italiane sulla privacy?",
    "options": [
      {
        "option_text": "1. Il \"Codice in materia di protezione dei dati personali” detto anche “Testo unico sulla Privacy”",
        "answer": true
      },
      {
        "option_text": "2. Il Codice anche detto “Codice della Privacy”",
        "answer": true
      },
      {
        "option_text": "3. Il Codice “Tutela delle persone e di altri soggetti rispetto al trattamento dei dati personali” del 1996 4. Il Regolamento del Parlamento Europeo e del Consiglio cosiddetto GDPR (General Data Protection Regulation) attraverso i",
        "answer": false
      },
      {
        "option_text": "relativi D.M. e D.L. di adeguamento 5. La Direttiva europea “Relativa alla tutela delle persone fisiche con riguardo al trattamento dei dati personali, nonché alla libera circolazione di tali dati” Falso V V F V V V V F V F V F V F V V F V V V V F V F  6 T1 6. Il decreto-legge con le disposizioni che abrogano la vecchia direttiva europea relativa alla tutela delle persone fisiche con",
        "answer": true
      },
      {
        "option_text": "riguardo al trattamento dei dati personali, nonché alla libera circolazione di tali dati 25",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 415,
    "code": "M3.3.5.6",
    "question": "Chi sono i DSP (Digital Service Providers) secondo la Direttiva NIS nella prima versione?",
    "options": [
      {
        "option_text": "1. Cloud Computing Services",
        "answer": true
      },
      {
        "option_text": "2. Cloud Virtual Machines",
        "answer": false
      },
      {
        "option_text": "3. Online Marketplaces",
        "answer": true
      },
      {
        "option_text": "4. Online Search Engines",
        "answer": true
      },
      {
        "option_text": "5. Online products e-commerce",
        "answer": false
      },
      {
        "option_text": "6. Online people recruitments 29",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 416,
    "code": "M1.2.4.12",
    "question": "Una vittima di Pretexting E' stata manipolata, mediante una finta e-mail dal proprio capo, ed ha fornito i numeri e le credenziali della carta di credito",
    "options": [
      {
        "option_text": "aziendale Ha inviato le proprie credenziali di accesso dopo aver ricevuto una finta e-mail (dal bancario conosciuto) con la richiesta di",
        "answer": true
      },
      {
        "option_text": "conferma per evitare che l'account venisse disattivato",
        "answer": true
      },
      {
        "option_text": "E' stata costretta a scaricare un software infetto dopo che è avvenuta una segnalazione che il computer era stato compromesso Ha installato uno specifico software, di cui effettivamente aveva necessità, gratuitamente anche se tutti gli altri siti lo fornivano",
        "answer": false
      },
      {
        "option_text": "a pagamento",
        "answer": false
      },
      {
        "option_text": "Ha installato una chiave USB corredata di logo aziendale, trovata casualmente, riportante la scritta “prossimi aumenti”",
        "answer": false
      },
      {
        "option_text": "Ha ricevuto una e-mail dal sito della propria carta di credito che riproduce perfettamente la pagina di log-in del proprio account",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 417,
    "code": "M1.3.1.3",
    "question": "Il livello 2 del Modello ISO/OSI Utilizza indirizzamento MAC Address VERO Realizza il Data Framing (inserimento di Header e Tail al messaggio) e relativa interpretazione dei bit contenuti negli Header e",
    "options": [
      {
        "option_text": "Tail",
        "answer": true
      },
      {
        "option_text": "Utilizza un sottolivello superiore (LLC - Logical Link Control) per la rilevazione (o correzione) degli errori",
        "answer": true
      },
      {
        "option_text": "Utilizza indirizzi di tipo IP per l’indirizzamento in rete",
        "answer": false
      },
      {
        "option_text": "Può utilizzare protocolli wi-fi",
        "answer": true
      },
      {
        "option_text": "Realizza la Frammentazione e il Riasseblaggio",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 418,
    "code": "M2.3.2.1",
    "question": "Un Processo Aziendale Può essere definito come un insieme di attività, non necessariamente collegate, che possono portare a diversi obiettivi a",
    "options": [
      {
        "option_text": "carattere strategico",
        "answer": false
      },
      {
        "option_text": "Può essere definito come un insieme di attività collegate tese al raggiungimento di un obiettivo specifico Può essere modellizzato in modo che sia possibile verificare eventuali anomalie del processo stesso ed apportarne",
        "answer": true
      },
      {
        "option_text": "miglioramenti",
        "answer": true
      },
      {
        "option_text": "Una volta strutturato e testato non deve essere modificato nel tempo Ha input che sono costituiti da fattori che contribuiscono (direttamente e indirettamente) al valore aggiunto di un servizio o di",
        "answer": false
      },
      {
        "option_text": "un prodotto",
        "answer": true
      },
      {
        "option_text": "Si può modellizzare attraverso l’uso di specifici diagrammi di flusso",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 419,
    "code": "M3.2.1.19",
    "question": "I requisiti di un ISMS secondo ISO/IEC 27001 Sono necessari per stabilire, attuare, mantenere e migliorare, in modo continuo, un sistema di gestione per la sicurezza delle",
    "options": [
      {
        "option_text": "informazioni nel contesto di un’organizzazione Includono i criteri per la valutazione e il trattamento dei rischi relativi alla sicurezza delle informazioni adattati alla necessità",
        "answer": true
      },
      {
        "option_text": "dell’organizzazione",
        "answer": true
      },
      {
        "option_text": "Sono indipendenti dai controlli (ovvero le contromisure) presenti nell'Allegato A dello stesso documento",
        "answer": false
      },
      {
        "option_text": "Sono necessari per certificare la conformità di un sistema informativo a questo standard",
        "answer": true
      },
      {
        "option_text": "Utilizzano il risk management come base per decidere azioni e quali contromisure (controlli) mettere in atto",
        "answer": true
      },
      {
        "option_text": "Possono essere utilizzati per decidere le strategie per gestire la sicurezza delle informazioni in base a criteri deterministici",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 420,
    "code": "M3.2.1_1.2",
    "question": "L'area tematica dei requisiti ISO/IEC 27001 \"Attività Operative\" definisce che: L'organizzazione deve pianificare, implementare e controllare i processi necessari per soddisfare i requisiti e implementare le",
    "options": [
      {
        "option_text": "azioni predeterminate",
        "answer": true
      },
      {
        "option_text": "L'organizzazione deve esaminare anche le conseguenze dei cambiamenti non voluti L'organizzazione deve eseguire valutazioni periodiche del rischio per la sicurezza delle informazioni o quando si verificano",
        "answer": true
      },
      {
        "option_text": "cambiamenti significativi",
        "answer": true
      },
      {
        "option_text": "L'organizzazione deve determinare la necessità di comunicazioni interne ed esterne rilevanti per l'ISMS",
        "answer": false
      },
      {
        "option_text": "L'organizzazione deve attuare il piano di trattamento dei rischi per la sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "L'organizzazione deve effettuare il monitoraggio sull'efficacia dell' ISMS",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 421,
    "code": "M3.2.3_1.1",
    "question": "Il futuro NIST CSF 2.0",
    "options": [
      {
        "option_text": "Ai cinque pilastri principali del programma del framework attuale, il NIST CSF 2.0 aggiunge la funzione di “ Governo”",
        "answer": true
      },
      {
        "option_text": "Ha di fatto cambiato completamente la logica delle funzioni previste dal NIST CSF 1.1 Attraverso la funzione Governo sottolinea che la sicurezza informatica è una delle principali fonti di rischio aziendale come",
        "answer": false
      },
      {
        "option_text": "indicazione fondamentale per la leadership Introduce la nuova funzione \"Governo\" che, diversamente dalle altre funzioni, non mantiene la struttura con Categorie e",
        "answer": true
      },
      {
        "option_text": "Sottocategorie Mediante la nuova funzione Governo fornisce i risultati per informare ciò che un’organizzazione può fare per raggiungere e dare",
        "answer": false
      },
      {
        "option_text": "priorità ai risultati delle altre cinque funzioni Enfatizza che le attività di governance sono fondamentali per incorporare la cyber security nella più ampia strategia di gestione",
        "answer": true
      },
      {
        "option_text": "del rischio aziendale di un’organizzazione",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 422,
    "code": "M3.3.4.2",
    "question": "Le fasi dell'Informatica Forense",
    "options": [
      {
        "option_text": "Nella fase Identificazione  si identificano i dati digitali rilevanti, operando sui dispositivi di memorizzazione dei dati digitali Nella fase di Raccolta si acquisicono i sistemi che contengono i dati e si procede alla messa in sicurezza dei supporti di",
        "answer": true
      },
      {
        "option_text": "memorizzazione. Nella fase di Acquisizione  si realizza una copia di tutti i dati, tramite appositi strumenti è possibile produrre una copia \"legale\"",
        "answer": true
      },
      {
        "option_text": "dei dati digitali che si intende utilizzare come prova Nella fase di Analisi si estraggono da tutti dati acquisiti solo quelli rilevanti, aggregandoli e valutando le strategie a sostegno di",
        "answer": true
      },
      {
        "option_text": "un’ipotesi accusatoria o di una strategia difensiva",
        "answer": true
      },
      {
        "option_text": "Nella fase di Elaborazione  si estraggono le informazioni dai dati \"grezzi\" come completamento della fase di analisi Nella fase di Presentazione  si produce una relazione tecnica per presentare ciò che è emerso nel corso dell’attività tecnica in",
        "answer": false
      },
      {
        "option_text": "formato \"legale\"",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 423,
    "code": "M1.1.2.12",
    "question": "Il cavo di fibra ottica:",
    "options": [
      {
        "option_text": "È composto, in sezione da: core, buffer, cludding e jacket dall’interno verso l’esterno",
        "answer": false
      },
      {
        "option_text": "È composto, in sezione da: core, cludding, buffer e jacket dall’interno verso l’esterno",
        "answer": true
      },
      {
        "option_text": "Permette la trasmissione del raggio luminoso attraverso il core confinato dal cladding",
        "answer": true
      },
      {
        "option_text": "Utilizza raggi di luce sempre dello stesso colore",
        "answer": false
      },
      {
        "option_text": "Può avere una frequenza di trasmissione da 300 a 107 GHz",
        "answer": true
      },
      {
        "option_text": "Ha il Cladding con un indice di rifrazione inferiore rispetto al Core, che ha un indice superiore",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 424,
    "code": "M1.1.2.4",
    "question": "Cos’è la larghezza di banda di un canale di comunicazione?",
    "options": [
      {
        "option_text": "La misura dell'ampiezza della gamma di frequenze che possono passare per quel canale Un parametro inversamente proporzionale alla quantità di dati che possono essere trasmessi in",
        "answer": true
      },
      {
        "option_text": "un canale nell’unità di tempo Un parametro proporzionale alla quantità di dati che possono essere trasmessi in un canale",
        "answer": false
      },
      {
        "option_text": "nell’unità di tempo",
        "answer": true
      },
      {
        "option_text": "Un parametro indipendente dalla quantità di dati trasmessi in un canale",
        "answer": false
      },
      {
        "option_text": "La misura dell’ampiezza dello spettro che passa in un canale",
        "answer": true
      },
      {
        "option_text": "La capacità di un qualsiasi canale di trasmettere dati",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 425,
    "code": "M1.2.3.1",
    "question": "Un’Infrastruttura Critica",
    "options": [
      {
        "option_text": "Può essere un’azienda che concorre al mantenimento delle funzioni vitali di un paese",
        "answer": true
      },
      {
        "option_text": "Può fornire servizi per la salute pubblica",
        "answer": true
      },
      {
        "option_text": "Può fornire acqua potabile",
        "answer": true
      },
      {
        "option_text": "È un’azienda appartenente al terziario in genere In europa rientra verosimilmente nella tassonomia dei soggetti altamente critici e critici presente nella normativa NIS 2VERO",
        "answer": false
      },
      {
        "option_text": "Italiana, per tipologia, è sicuramente critica anche in un paese extra-europeo",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 426,
    "code": "M1.3.1.11",
    "question": "TCP e UDP sono protocolli",
    "options": [
      {
        "option_text": "Di livello due",
        "answer": false
      },
      {
        "option_text": "Di livello tre",
        "answer": false
      },
      {
        "option_text": "Di livello quattro",
        "answer": true
      },
      {
        "option_text": "Di livello quattro che utilizzano il protocollo IP di livello 3",
        "answer": true
      },
      {
        "option_text": "Di livello cinque",
        "answer": false
      },
      {
        "option_text": "Di livello sei",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 427,
    "code": "M1.3.1.13",
    "question": "A cosa serve il modello ISO/OSI? Per far fronte ad una crescente necessità di standardizzazione nella comunicazione dei sistemi informaticiVERO Per risolvere il problema delle reti di computer single “brand”, ovvero in grado di comunicare solo",
    "options": [
      {
        "option_text": "con apparati dello stesso produttore Per realizzare una comunicazione multilivello, che permetta di adattarsi alle specifiche reti di",
        "answer": true
      },
      {
        "option_text": "telecomunicazione che si intende realizzare",
        "answer": true
      },
      {
        "option_text": "Per rendere indipendenti il mezzo fisico di trasmissione dal livello logico",
        "answer": true
      },
      {
        "option_text": "Per legare indissolubilmente e in maniera standardizzata il mezzo fisico al software che lo gestisce Per realizzare una comunicazione multilivello, che permetta di utilizzare lo stesso tipo di",
        "answer": false
      },
      {
        "option_text": "protocollo di comunicazione e relativo algoritmo di elaborazione, in tutti i livelli dello stack",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 428,
    "code": "M1.3.2.11.1",
    "question": "Una Socket TCP è: Un’astrazione software standardizzata progettata per essere utilizzabile nei programmi applicativi che permette la trasmissione e la ricezione di dati attraverso una reteVERO È il mezzo attraverso il quale un pacchetto di destinazione viene dotato di tutte le informazioni",
    "options": [
      {
        "option_text": "necessarie per partire alla volta dell'host destinatario La principale responsabile nello stabilire la connessione tra due host e mantenere la sessione per poi rigenerare la connessione all'invio di ulteriori pacchettiFALSO",
        "answer": true
      },
      {
        "option_text": "Indirettamente responsabile dello hand shake a tre livelli del TCP/IP",
        "answer": false
      },
      {
        "option_text": "Direttamente responsabile dello hand shake a tre livelli del TCP/IP",
        "answer": true
      },
      {
        "option_text": "Configurata diversamente sul client e sul server",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 429,
    "code": "M1.3.4.4",
    "question": "In un sistema informatico il SPOF (Single Point of Failure) È una parte del solo sistema hardware il cui malfunzionamento può portare ad anomalie o alla",
    "options": [
      {
        "option_text": "cessazione del servizio di tutto il sistema È una parte del sistema, hardware o software, il cui malfunzionamento può portare ad anomalie o",
        "answer": false
      },
      {
        "option_text": "alla cessazione del servizio di tutto il sistema",
        "answer": true
      },
      {
        "option_text": "È particolarmente critico nei sistemi che devono essere costantemente attivi  Può essere evitato attraverso l’uso di componenti ridondanti, considerando che anche un solo",
        "answer": true
      },
      {
        "option_text": "punto di vulnerabilità può compromettere un intero sistema",
        "answer": true
      },
      {
        "option_text": "Può essere evitato migliorando l’affidabilità dei singoli componenti",
        "answer": false
      },
      {
        "option_text": "Può riguardare anche un servizio acquisito esternamente",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "code": "M2.1.1.6",
    "question": "Per realizzare un Prodotto o un Servizio un’azienda",
    "options": [
      {
        "option_text": "Può utilizzare solo i beni di consumo",
        "answer": false
      },
      {
        "option_text": "Può utilizzare solo i beni strumentali",
        "answer": false
      },
      {
        "option_text": "Ha necessità solo di beni materiali",
        "answer": false
      },
      {
        "option_text": "Necessità di beni strumentali, materiali e know-how",
        "answer": true
      },
      {
        "option_text": "Nel caso della realizzazione di un bene materiale, ha necessità di tutti i materiali costitutivi, gli strumenti o le macchine per l’assemblaggio e la conoscenza per finalizzare le attività produttive",
        "answer": true
      },
      {
        "option_text": "Può non essere necessaria la conoscenza specifica per finalizzarne le attività di produzione",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 430
  },
  {
    "id": 431,
    "code": "M2.2.1.7",
    "question": "Quali strategie posso utilizzare per proteggere da un possibile attacco cyber ad una linea produttiva (l’unica che produce uno specifico prodotto)?",
    "options": [
      {
        "option_text": "Identificare e proteggere (o eliminare) eventuali connessioni dirette alla rete pubblica (internet) Realizzare un adeguato sistema di segmentazione e segregazione delle reti e degli apparati di",
        "answer": true
      },
      {
        "option_text": "controllo Gestire gli accessi remoti ai sistemi informatici di linea con opportune procedure, autorizzazioni,",
        "answer": true
      },
      {
        "option_text": "tecnologie",
        "answer": true
      },
      {
        "option_text": "Valutare la realizzazione di una linea produttiva parallela analoga alla prima che utilizza la stessa Identificare eventuali obsolescenze software e hardware e vulnerabilità standardizzate (CVE) nei",
        "answer": false
      },
      {
        "option_text": "sistemi industriali",
        "answer": true
      },
      {
        "option_text": "Isolare completamente la rete industriale dalla rete office",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 432,
    "code": "M2.3.1.4",
    "question": "Il Sistema Informativo nella Gestione Aziendale È quell’insieme di elementi che raccolgono, elaborano, memorizzano e distribuiscono dati e",
    "options": [
      {
        "option_text": "informazioni a supporto delle varie attività aziendali",
        "answer": true
      },
      {
        "option_text": "Supporta le attività decisionali, di coordinamento e di controllo",
        "answer": true
      },
      {
        "option_text": "Identifica l’infrastruttura tecnologica ma non le persone che contribuiscono al suo funzionamento  È lo strumento che permette al personale aziendale l’analisi dei problemi e la visualizzazione delle possibili soluzioniVERO",
        "answer": false
      },
      {
        "option_text": "Non è mai integrato con gli impianti e le linee produttivi",
        "answer": false
      },
      {
        "option_text": "Supporta la definizione di strategie e la conduzione esecutiva dell’azienda",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 433,
    "code": "M3.1.3.3",
    "question": "La certificazione aziendale ad uno standard ISO È la dichiarazione di un ente indipendente o accreditato che il prodotto fornito o le politiche",
    "options": [
      {
        "option_text": "messe in atto dall'azienda sono conformi ad una certa normativa o standard di riferimento È la dichiarazione di un ente indipendente o accreditato che si formalizza attraverso l’emissione di",
        "answer": true
      },
      {
        "option_text": "un certificato con validità illimitata È la dichiarazione di un ente terzo che il prodotto fornito o le politiche messe in atto",
        "answer": false
      },
      {
        "option_text": "dall'azienda sono conformi ad una certa normativa o standard di riferimento Se di sistema, permette di stabilire un meccanismo continuo di verifica della conformità ad uno",
        "answer": true
      },
      {
        "option_text": "standard ed il miglioramento continuo di un sistema di gestione Se di sistema, permette di stabilire un meccanismo di verifica puntuale della conformità ad uno",
        "answer": true
      },
      {
        "option_text": "standard ma senza la verifica periodica del sistema di gestione Può essere uno strumento per rispondere alle richieste sempre più pressanti del mercato per",
        "answer": false
      },
      {
        "option_text": "differenziarsi dai competitors ed entrare in nuovi mercati, mai esplorati prima",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 434,
    "code": "M3.2.1_2.13",
    "question": "Il controllo ISO/IEC 27001: 2022 \"Information security for use of cloud services\" ovvero che i processi relativi ai servizi cloud devono essere conformi con i requisiti di sicurezza delle informazioni dell'organizzazione",
    "options": [
      {
        "option_text": "E' un controllo solo Preventivo",
        "answer": true
      },
      {
        "option_text": "E' un controllo di tipo Investigativo",
        "answer": false
      },
      {
        "option_text": "E' un controllo sia Preventivo che Correttivo",
        "answer": false
      },
      {
        "option_text": "Migliora Riservatezza, Integrità e Disponibilità",
        "answer": true
      },
      {
        "option_text": "Migliora solo la Disponibilità",
        "answer": false
      },
      {
        "option_text": "Migliora l'Integrità e la Riservatezza",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 435,
    "code": "M3.2.5.1",
    "question": "Quali delle seguenti sono le principali differenze tra NIST Cyber Security Framework e ISO 27001 Il NIST è stato creato principalmente per la gestione del rischio sulle informazioni, ISO 27001 è",
    "options": [
      {
        "option_text": "invece un approccio riconosciuto a livello internazionale per la creazione e il mantenimento di un",
        "answer": true
      },
      {
        "option_text": "ISO 27001 è volontario, mentre il NIST CSF prevede la certificazione Il framework NIST CSF ha vari cataloghi di controllo e cinque funzioni per personalizzare i controlli di sicurezza informatica, mentre ISO 27001: 2022 ha 93 controlli organizzati in 4 gruppi per",
        "answer": false
      },
      {
        "option_text": "guidare le organizzazioni attraverso i loro ISMS",
        "answer": true
      },
      {
        "option_text": "La ISO 27001 è meno tecnica, con maggiore enfasi sulla gestione basata sul rischio",
        "answer": true
      },
      {
        "option_text": "La ISO 27001 è più tecnica, con minore enfasi sulla gestione basata sul rischio La ISO 27001 è una buona scelta per certificare le organizzazioni che hanno maturità operativa, mentre il NIST CSF può essere più adatto per le organizzazioni che si trovano nelle fasi iniziali dello",
        "answer": false
      },
      {
        "option_text": "sviluppo di un programma di rischio per la sicurezza informatica",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 436,
    "code": "M3.2.6.5",
    "question": "Le zone secondo ISA/IEC 62443 Dividono un sistema in zone omogenee raggruppando le risorse (logiche o fisiche) con requisiti di",
    "options": [
      {
        "option_text": "sicurezza comuni Dividono una architettura fisica (dispositivi di rete e connessioni) in zone omogenee raggruppando i dispositivi HW con requisiti di sicurezza comuniFALSO Hanno requisiti di sicurezza definiti da Security Level (SL), il livello richiesto per una zona è",
        "answer": true
      },
      {
        "option_text": "determinato dall'analisi del rischio Sono connesse attraverso i conduits che raggruppano gli elementi che ne consentono la",
        "answer": true
      },
      {
        "option_text": "comunicazione  Possono essere suddivise in sottozone con livelli di sicurezza differenti consentendo una difesa in",
        "answer": true
      },
      {
        "option_text": "profondità",
        "answer": true
      },
      {
        "option_text": "Possono estendersi includendo impianti presenti in siti fisici differenti",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 437,
    "code": "M3.4.1.5",
    "question": "Requisiti ISO 27001 e ciclo PDCA",
    "options": [
      {
        "option_text": "Possono essere associati per creare un ciclo virtuoso di miglioramento continuo dell'ISMS",
        "answer": true
      },
      {
        "option_text": "Sono associati prevalentemente per rappresentazione graficamente i requisiti",
        "answer": false
      },
      {
        "option_text": "Permettono di raggruppare ed associare le aree tematiche dei requisiti a fasi specifiche e definite Si associano per costruire un sistema di gestione adattabile, in grado di proteggere le informazioni aziendali ai cambiamenti.VERO Associano alla fase Plan la comprensione del contesto dell'organizzazione, della leadership, la pianificazione e gli elementi di supportoVERO",
        "answer": true
      },
      {
        "option_text": "Associano alla fase Do la valutazione delle prestazioni del sistema",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 438,
    "code": "M3.4.4.4",
    "question": "L’Assessment del Rischio Prevede una fase di identificazione che mira ad individuare le minacce esistenti e a stabilirne le",
    "options": [
      {
        "option_text": "caratteristiche",
        "answer": true
      },
      {
        "option_text": "Può realizzare l’identificazione con un approccio cause -> effetti",
        "answer": true
      },
      {
        "option_text": "Può realizzare l’identificazione con un approccio effetti -> cause",
        "answer": true
      },
      {
        "option_text": "Può realizzare l’identificazione con un approccio probabilità -> impatto Prevede una fase di valutazione che mira alla determinazione dell’entità del rischio (probabilità-",
        "answer": false
      },
      {
        "option_text": "impatto) Prevede una fase di valutazione che viene espressa di solito in forma complessa utilizzabile mediante appositi strumentiFALSO",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 439,
    "code": "M3.4.5.7",
    "question": "La VPN (Virtual Private Network) Si realizza attraverso un canale di comunicazione criptato creato per gestire la privacy nelle comunicazioniVERO Si realizza attraverso un canale di comunicazione criptato che può essere creato anche sopra una LAN aziendaleVERO La criptazione fornisce garanzie che i pacchetti non contengano potenziali minacce rendendo il sistema intrinsecamente sicuroFALSO",
    "options": [
      {
        "option_text": "Utilizza sempre e solo una tiplogia di protocollo di criptazione, il vero limite della tecnologia",
        "answer": false
      },
      {
        "option_text": "Può utilizzare il protocollo SSTP (Secure Socket Tunneling Protocol)",
        "answer": true
      },
      {
        "option_text": "Può utilizzare il protocollo di criptazione UDP",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "code": "M4.1.2.3",
    "question": "Perché l'IT può essere considerato un centro di costo?",
    "options": [
      {
        "option_text": "Per la scarsa sensibilità e skills digitali del top management",
        "answer": true
      },
      {
        "option_text": "A causa della scarsa progettualità dell'azienda",
        "answer": true
      },
      {
        "option_text": "A causa della scarsa propensione allo sviluppo commerciale globale dell'azienda",
        "answer": true
      },
      {
        "option_text": "Perché l'informatica in quell'azienda di fatto non serve",
        "answer": false
      },
      {
        "option_text": "Perché si sono subiti attacchi informatici",
        "answer": false
      },
      {
        "option_text": "A causa della probabile scarsa propensione alla competitività dell'azienda (forse perché è un azienda che opera su un mercato monopolistico)",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 440
  },
  {
    "id": 441,
    "code": "M4.1.3.2",
    "question": "Quali dei seguenti sono compiti del CIO (Chief Information Officer)",
    "options": [
      {
        "option_text": "Contribuire all’analisi e alla definizione dei processi aziendali Definire, insieme alla direzione generale, gli obiettivi aziendali ed il contributo dell’informatica per il loro raggiungimentoVERO",
        "answer": true
      },
      {
        "option_text": "Definire e gestire il budget destinato ai Sistemi Informativi e coordinare il reparto IT",
        "answer": true
      },
      {
        "option_text": "Avere competenze ed essere costantemente aggiornato sulle nuove tecnologie",
        "answer": true
      },
      {
        "option_text": "Avere in tutte le organizzazione responsabilità sulla Cyber Sicurezza dei sistemi informativi",
        "answer": false
      },
      {
        "option_text": "Avere responsabilità diretta sulla sicurezza del business",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 442,
    "code": "M4.1.5.6",
    "question": "La figura del Security Auditor Valuta attraverso un'analisi documentale esterna l'efficacia delle soluzioni tecniche di sicurezza",
    "options": [
      {
        "option_text": "informatica adottate Ispeziona direttamente e valuta l'efficacia delle soluzioni tecniche adottate per garantire la sicurezza di un sistema informativoVERO",
        "answer": false
      },
      {
        "option_text": "Lavora unicamente in un gruppo di Auditing Interno alle dirette dipendenze dell'organizzazione",
        "answer": false
      },
      {
        "option_text": "Può essere un consulente esterno",
        "answer": true
      },
      {
        "option_text": "Di solito ha la certificazione ISO 27001",
        "answer": true
      },
      {
        "option_text": "Ha di solito una preparazione tecnica informatica sviluppata nell'area della programmazione",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 443,
    "code": "M4.2.1.2",
    "question": "L’organizzazione della Cybersicurezza in ambito bancario",
    "options": [
      {
        "option_text": "Ha tradizionalmente sviluppato strategie fortemente focalizzate sulla gestione del rischio Tradizionalmente si occupa poco degli aspetti di sicurezza logica perché tali aspetti non possono",
        "answer": true
      },
      {
        "option_text": "avere impatto sull’andamento finanziario dell’azienda  Gestisce tipicamente le nuove minacce attraverso comitati di direzione per la gestione del rischio",
        "answer": false
      },
      {
        "option_text": "che rispondono all’amministratore delegato o al consiglio di amministrazione In molti casi prevede che la figura del CSO (Chief of Security Officer) abbia responsabilità anche sulla sicurezza logica della bancaVERO",
        "answer": true
      },
      {
        "option_text": "In nessun caso la figura del CSO ha responsabilità anche sulla sicurezza logica della banca Nei casi in cui il CISO (Chief Information Security Officer) non sia gerarchicamente subordinato al",
        "answer": false
      },
      {
        "option_text": "CSO le azioni sono dal lui coordinate anche indirettamente Esercizio 1 Nello schema è rappresentata un'azienda di produzione con due stabilimenti remoti connessi alla sede principale con la dorsale pubblica Internet. Entrambi gli impianti produttivi producono su un turno singolo di 8 ore, il prezzo del bene A= € 50, del bene B=€ 70. Identificare la tipologia dei dispositivi rappresentati con le lettere (A-H) nello schema topologico sopraindicato selezionandolo nei relativi campi della seguente tabella: A= Router B= VPN C= Firewall D= Switch E= Router+Firewall F= Router+Firewall G= Switch H= Switch Per un'anomalia ai sistemi SCADA si bloccano entrambi gli impianti per mezza giornata, quanti pezzi effettivi o perso in totale? 2.982 Corrispondenti ad un fatturato? € 168.940 Nell'invio degli ordini di produzione delle h14.00 sono stati richiesti dei pezzi non necessari a causa dell'annullamento di un ordine cliente che corrispondono al 10% di tutta la produzione del pomeriggio, di quanti pezzi effettivi stiamo parlando? 298  Esercizio 2  Appello 11 Novembre Aspetti Organizzativie e Gestionali della C.S.",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 444,
    "code": "M1.1.3.2",
    "question": "Il Routing Il Routing è l'instradamento effettuato tra reti differenti con l’ausilio delle tabelle di instradamento configurate sui vari",
    "options": [
      {
        "option_text": "Router Il Routing è l'instradamento effettuato all’interno della stessa rete con l’ausilio delle tabelle di instradamento configurate sui vari RouterFALSO Per il suo funzionamento considera che i router siano a conoscenza degli indirizzi solo delle reti a cui sono direttamente",
        "answer": true
      },
      {
        "option_text": "collegati Per il suo funzionamento considera che i router siano a conoscenza degli indirizzi delle reti a cui sono direttamente o",
        "answer": true
      },
      {
        "option_text": "indirettamente collegati Nella tabella di instradamento ogni riga corrisponde a una regola e le regole vengono esaminate dalla prima all’ultima, se ci",
        "answer": false
      },
      {
        "option_text": "sono più regole che corrispondono all'indirizzo fornito, viene scelta la regola che ha più bit in comune con l'indirizzo fornito Nella tabella di instradamento ogni riga corrisponde a una regola e le regole vengono esaminate dalla prima all’ultima, se ci",
        "answer": true
      },
      {
        "option_text": "sono più regole che corrispondono all'indirizzo fornito, viene scelta la prima regola che viene esaminata",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 445,
    "code": "M1.1.4.1",
    "question": "L’HyperText Transfer Protocol (HTTP) È un linguaggio di testo che consente la comunicazione tra client e server attraverso internet per recuperare tutte le risorse",
    "options": [
      {
        "option_text": "collegate È un linguaggio compilato che consente la comunicazione tra client e server attraverso internet per recuperare tutte le",
        "answer": true
      },
      {
        "option_text": "risorse collegate Ha come caratteristica peculiare che terminato lo scambio di messaggi la connessione si sgancia, rendendo il protocollo",
        "answer": false
      },
      {
        "option_text": "molto flessibile e dinamico",
        "answer": true
      },
      {
        "option_text": "Dispone dei seguenti comandi: Get, Head, Post, Put, Delete",
        "answer": true
      },
      {
        "option_text": "È un protocollo di livello 6 dello stack ISO/OSI",
        "answer": false
      },
      {
        "option_text": "Di “default” utilizza la porta 80 per la comunicazione da client a host (server)",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 446,
    "code": "M1.1.6.1",
    "question": "Una Minaccia alla sicurezza informatica  Può essere definita come un codice eseguibile che ha la capacità di compiere operazioni dannose per la macchina in cui si",
    "options": [
      {
        "option_text": "trova, per il sistema informatico in cui si è inserito o per i dati in esso contenuti o gestiti",
        "answer": true
      },
      {
        "option_text": "Si propaga e si concretizza sempre indipendentemente dal fattore umano Utilizza un vettore (ovvero il percorso seguito dall'attacco) che può essere esterno, da parte di qualche malintenzionato, o",
        "answer": false
      },
      {
        "option_text": "interno all’organizzazione, anche incidentale",
        "answer": true
      },
      {
        "option_text": "Può essere eliminata mediante l’installazione di un buon antivirus Può penetrare qualsiasi tipo di file eseguibile e diffondersi nel momento in cui il file viene copiato e inviato da un utente",
        "answer": false
      },
      {
        "option_text": "all'altro",
        "answer": true
      },
      {
        "option_text": "Può essere costituita dai Ramsomware",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 447,
    "code": "M1.1.6.2",
    "question": "Le vulnerabilità informatiche Sono malfunzionamenti, configurazioni sbagliate o semplicemente errori (bugs) presenti in un sistema che lo espongono a",
    "options": [
      {
        "option_text": "dei rischi",
        "answer": true
      },
      {
        "option_text": "Rendono un sistema vulnerabile ed esposto a potenziali minacce",
        "answer": true
      },
      {
        "option_text": "Sono esclusivamente relative al codice software o firmware embedded in una determinata motherboard",
        "answer": false
      },
      {
        "option_text": "Possono presentarsi all’interno del codice stesso, in una configurazione o addirittura nel processo di installazione",
        "answer": true
      },
      {
        "option_text": "Sono raggruppabili tre macro-categorie: software, protocolli e hardware",
        "answer": true
      },
      {
        "option_text": "Sono raggruppabili tre macro-categorie: software, protocolli e firmware",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 448,
    "code": "M1.3.2.7",
    "question": "La modalità di trasmissione su canali in fibra ottica (WDM = Wavelength Division Multiplexing) è:",
    "options": [
      {
        "option_text": "Una trasmissione bidirezionale simultanea su cavo singolo",
        "answer": true
      },
      {
        "option_text": "Una trasmissione bidirezionale non simultanea su cavo singolo",
        "answer": false
      },
      {
        "option_text": "Una modalità di trasmissione con fasci a lunghezza d’onda differente",
        "answer": true
      },
      {
        "option_text": "Una modalità di trasmissione con fasci di colori diversi ma con la stessa frequenza",
        "answer": false
      },
      {
        "option_text": "Una tecnica di trasmissione con multiplexing a divisione di ampiezza",
        "answer": false
      },
      {
        "option_text": "Una tecnica di trasmissione con multiplexing a divisione di lunghezza d’onda",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 449,
    "code": "M1.3.3.1",
    "question": "La convergenza funzionale nei dispositivi di rete",
    "options": [
      {
        "option_text": "È la tendenza ad aumentare le funzionalità dei dispostivi di rete «inglobando» funzionalità di altre tipologie di dispositivi È un fenomeno causato dalla forte concorrenza sul mercato dei dispositivi di rete e dall’aumento delle prestazioni delle",
        "answer": true
      },
      {
        "option_text": "piattaforme di elaborazione",
        "answer": true
      },
      {
        "option_text": "È un fenomeno che non ha impatto sulla standardizzazione degli specifici brand commerciali",
        "answer": false
      },
      {
        "option_text": "È un fenomeno che ha portato all’obsolescenza di alcuni dispositivi",
        "answer": true
      },
      {
        "option_text": "È un fenomeno che ha portato alcuni switch a gestire parzialmente o totalmente funzioni di routing (livello 3 ISO/OSI)",
        "answer": true
      },
      {
        "option_text": "Ha causato l’obsolescenza dei router",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 450,
    "code": "M3.2.1_2.14",
    "question": "Il controllo ISO/IEC 27001: 2022 “Data leakage prevention” ovvero orientato alla prevenzione della divulgazione deliberata di informazioni riservate Indica che le misure di prevenzione della fuga di dati si devono applicare ai sistemi, alle reti e a qualsiasi altro dispositivo che tratta, memorizza o trasmette informazioni sensibiliVERO",
    "options": [
      {
        "option_text": "Indica che le misure di prevenzione della fuga di dati si applicano ai soli sistemi abilitati al trattamento dei dati di terzi",
        "answer": false
      },
      {
        "option_text": "È stato pensato, insieme ad altri nuovi controlli, in funzione della normativa europea GDPR",
        "answer": true
      },
      {
        "option_text": "È un controllo solo di tipo “Preventivo",
        "answer": false
      },
      {
        "option_text": "È un controllo di tipo “Preventivo” e “Investigativo”",
        "answer": true
      },
      {
        "option_text": "È un controllo solo di tipo “Correttivo”",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 451,
    "code": "M3.2.3.4",
    "question": "Nel NIST CSF i livelli di implementazione del framework (\"Tier\")",
    "options": [
      {
        "option_text": "Forniscono un contesto su come un'organizzazione considera il rischio di sicurezza informatica e i processi in atto per gestirlo Descrivono il grado in cui le pratiche di gestione del rischio di sicurezza informatica di un'organizzazione esibiscono le",
        "answer": true
      },
      {
        "option_text": "caratteristiche definite nel Framework",
        "answer": true
      },
      {
        "option_text": "Caratterizzano le pratiche di un'organizzazione in un intervallo, da Parziale (Tier 1) ad Adattativo (Tier 5)",
        "answer": false
      },
      {
        "option_text": "Riflettono una progressione da risposte informali e reattive (Tier 1) ad approcci agili e informati sui rischi (Tier 5) Sono selezionati da un'organizzazione considerando le sue attuali pratiche di gestione del rischio, l'ambiente delle minacce, i",
        "answer": false
      },
      {
        "option_text": "requisiti legali e normativi, gli obiettivi aziendali/della missione e i vincoli organizzativi Sono valutati considerando tre parametri che permettono di verificare il livello di sviluppo del Processo di Gestione del Rischio (1), l’Integrazione del Programma di Gestione del Rischio (2) all’interno della realtà aziendale e la capacità dell’organizzazione di partecipare ad un ecosistema di gestione del rischio più ampio della singola realtà aziendale (3)VERO",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 452,
    "code": "M3.2.6.1",
    "question": "La serie ISA/IEC 62443 Fornisce un quadro di norme per affrontare e mitigare le vulnerabilità di sicurezza nei sistemi di controllo e automazione",
    "options": [
      {
        "option_text": "industriale (IACS)",
        "answer": true
      },
      {
        "option_text": "Sono standard applicabili a tutti i settori industriali e alle infrastrutture critiche",
        "answer": true
      },
      {
        "option_text": "Ha un posizionamento che scende sino a livello dell’impianto",
        "answer": true
      },
      {
        "option_text": "Ha un posizionamento che parte dal coinvolgimento dell’amministratore delegato e del consiglio di amministrazione",
        "answer": false
      },
      {
        "option_text": "È costituita da quattro famiglie di standard ancora in aggiornamento",
        "answer": true
      },
      {
        "option_text": "Non riguarda direttamente gli SCADA",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 453,
    "code": "M3.2.6.7",
    "question": "I Livelli di Sicurezza secondo ISA/IEC 62443-3-3 Sono quattro: Da SL1= Protezione contro violazioni casuali a SL4=Protezione contro violazioni con mezzi sofisticati, risorse",
    "options": [
      {
        "option_text": "estese, skill specifici e alta motivazione",
        "answer": true
      },
      {
        "option_text": "Rappresentano un metodo qualitativo per identificare la sicurezza in ciascuna zona Sono tre: da SL1= Protezione contro violazioni casuali a SL3=Protezione contro violazioni con mezzi sofisticati, risorse estese,",
        "answer": false
      },
      {
        "option_text": "skill specifici e alta motivazione  Per la corretta definizione dei requisiti di sicurezza vengono declinati per ciascuno dei requisiti derivati dai requisiti di base o",
        "answer": false
      },
      {
        "option_text": "fondazionali",
        "answer": true
      },
      {
        "option_text": "Possono avere i requisiti di base più un certo numero di requisiti di rinforzo (Requirement Enhancement –RE)",
        "answer": true
      },
      {
        "option_text": "Hanno quattro tipologie di Livelli per la gestione continua: SL (Target), SL (Achieved), SL (Capability) e SL (Overflow)",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 454,
    "code": "M3.3.3.2",
    "question": "La Cybersecurity e la Brand Reputation",
    "options": [
      {
        "option_text": "Non hanno legami diretti",
        "answer": false
      },
      {
        "option_text": "Sono strettamente legati",
        "answer": true
      },
      {
        "option_text": "Hanno legami stretti perché gli incidenti di CyberSecurity comunicano inaffidabilità con immediata perdita di fiducia",
        "answer": true
      },
      {
        "option_text": "Hanno legami stretti perché gli incidenti di CyberSecurity comunicano scarsa qualità dei prodotti",
        "answer": false
      },
      {
        "option_text": "Hanno legami stretti perché gli incidenti di CyberSecurity comunicano fragilità e insicurezza",
        "answer": true
      },
      {
        "option_text": "Hanno legami stretti perché gli incidenti di CyberSecurity inadeguatezza tecnologica",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 455,
    "code": "M3.3.5.7",
    "question": "NIS2 (Network and Information Security) rispetto alla prima direttiva NIS Elimina la distinzione tra fornitori di servizi essenziali e fornitori di servizi digitali, le aziende vengono classificate in",
    "options": [
      {
        "option_text": "“essenziali” e/o “importanti” a seconda della criticità dei servizi che offrono",
        "answer": true
      },
      {
        "option_text": "Prevede che le nuove categorie dei sevizi essenziali e importanti siano sottoposte ad adempimenti differenti",
        "answer": true
      },
      {
        "option_text": "Come direttiva entrerà direttamente in forza senza il recepimento da parte dei singoli stati dell’UE Amplia l’ambito di applicazione comprendendo più servizi, come la produzione di prodotti farmaceutici, dispositivi medici e prodotti chimici, il settore alimentare, la gestione delle acque reflue e dei rifiuti, i servizi postali, nonché la pubblica",
        "answer": false
      },
      {
        "option_text": "amministrazione",
        "answer": true
      },
      {
        "option_text": "Prevede il nuovo obiettivo di rafforzare la sicurezza informatica nella Supply Chain Si prefigge di restringere il numero delle aziende coinvolte dalla normativa visto la grandissima ed eterogenea platea della",
        "answer": true
      },
      {
        "option_text": "prima versione della direttiva",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 456,
    "code": "M3.3.5.10",
    "question": "In cosa la normativa GDPR differisce dalla NIS 2",
    "options": [
      {
        "option_text": "GDPR è orientato primariamente alla Privacy e alla protezione del dato dall'origine, NIS 2 alla continuità del servizio",
        "answer": true
      },
      {
        "option_text": "NIS 2 non prende in considerazione la protezione del dato e dell'informazione, GDPR lo fa",
        "answer": false
      },
      {
        "option_text": "GDPR è un Regolamento Europeo, NIS 2 è una direttiva",
        "answer": true
      },
      {
        "option_text": "NIS 2 è un Regolamento Europeo, GDPR è una Direttiva",
        "answer": false
      },
      {
        "option_text": "NIS 2 necessità del recepimento negli ordinamenti dei singoli stati, GDPR è entrato direttamente in forza",
        "answer": true
      },
      {
        "option_text": "GDPR richiede la notifica degli incidenti di sicurezza all'autorità competente, NIS 2 no",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 457,
    "code": "M3.4.3.8",
    "question": "Il Rischio Informatico nelle aziende industriali",
    "options": [
      {
        "option_text": "Deve essere analizzato e ponderato in base alla criticità dei vari asset industriali",
        "answer": true
      },
      {
        "option_text": "Deve prendere in considerazione anche il possibile impatto fisico e sulla salute umana",
        "answer": true
      },
      {
        "option_text": "Ha a che fare anche con la business o service continuity",
        "answer": true
      },
      {
        "option_text": "Si deve focalizzare solamente sugli aspetti legati alla perdita di dati o di informazioni",
        "answer": false
      },
      {
        "option_text": "E' relativo principalmente al reparto IT e al CED",
        "answer": false
      },
      {
        "option_text": "Deve prendere in considerazione anche i sistemi informatici che non hanno standard \"office\"",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 458,
    "code": "M4.2.1.3",
    "question": "Quali dei seguenti sono i maggiori rischi di cyber security nelle aziende industriali di produzione di beni?",
    "options": [
      {
        "option_text": "Rischio reputazionale",
        "answer": true
      },
      {
        "option_text": "Rischio sulla continuità operativa o del business",
        "answer": true
      },
      {
        "option_text": "Rischio finanziario",
        "answer": false
      },
      {
        "option_text": "Rischio di perdita di dati sensibili",
        "answer": false
      },
      {
        "option_text": "Rischio di compliance",
        "answer": true
      },
      {
        "option_text": "Rischio di service continuity Esercizio 1 Data la seguente topologia di rete con una LAN costituita da 2048 indirizzi rispondete alle domante selezionando adeguatamente le opzioni indicate. 1. Qual è l'indirizzo di rete con notazione dei bit di maschera 223.128.8.0/21 2. Qual è l'indirizzo di Broadcast 223.128.15.255 3. Qual è l'indirizzo di Maschera di Rete 255.255.248.0 4. Qual è l'indirizzo Subnet 1 223.128.8.0/25 5. Qual è l'indizizzo Subnet 2  223.128.8.128/25 6. Qual è l'indirizzo Subnet 3    223.128.9.0/24 7. Qual è l'indirizzo Subnet 4 223.128.10.0/23 8. L’indirizzo 223.128.8.5 può comunicare con l’indirizzo 223.128.8.131?Se il router ha una regola che lo permette e il firewall lo consente Esercizio 2 Il controllo ISO/IEC 27001: 2022  \"Configuration management\". Indica che le configurazioni, comprese le configurazioni di sicurezza, di hardware, software, servizi e reti devono essere stabilite, documentate, implementate monitorate e revisionate. Tale Controllo appartiene al seguente gruppo di controlli: Technological (Inerente gli aspetti Tecnologici) Tale Controllo è di tipo: Preventivo Considerando il paradigma CIA (o RID) quali delle proprietà elencate possono essere implementare con il controllo?Confidentiality, Integrity e Availability  Quali Concetti del NIST Cyber Security Framework possono essere associati al controllo? Protect Il Controllo è stato concepito primariamente per:Reagire tempestivamente ad un possibile disastro Quali delle seguenti procedure possono essere implementate per realizzare il Controllo?Gestire l'inventario degli asset informatici e le relative configurazioni in maniera centralizzata  Soluzioni Appello Aspetti Organizzativi e Gestionali della Cybesecurity 13 Giugno 2025",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 459,
    "code": "M1.1.3.1.2",
    "question": "Il Packet Switching:",
    "options": [
      {
        "option_text": "È una tecnica di commutazione in cui messaggi consecutivi vengono raggruppati in pacchetti (packets) che vengono trasmessi simultaneamente",
        "answer": false
      },
      {
        "option_text": "È una tecnica di commutazione in cui il messaggio viene diviso in parti più piccole (packets) che vengono gestite singolarmente",
        "answer": true
      },
      {
        "option_text": "È una tecnica di commutazione in cui i pacchetti viaggiano attraverso la rete, prendendo il percorso più breve possibile (instradamento)",
        "answer": true
      },
      {
        "option_text": "È una tecnica di commutazione in cui tutti i pacchetti vengono suddivisi e trasmessi in maniera indipendente e riassemblati all'estremità ricevente nell'ordine corretto",
        "answer": true
      },
      {
        "option_text": "Prevede, se un messaggio è pervenuto mancante di pacchetti o danneggiato, che venga notificata un richiesta di rinvio del messaggio, se invece viene raggiunto l'ordine corretto dei pacchetti, si invia conferma",
        "answer": true
      },
      {
        "option_text": "Prevede, se un messaggio arriva mancante di pacchetti o danneggiato, che il messaggio possa essere corretto da un meccanismo di completamento automatico a correzione di errore",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 460,
    "code": "M1.2.3.5",
    "question": "La Cyber Security nella Supply Chain",
    "options": [
      {
        "option_text": "E' una tematica che riguarda esclusivamente le forniture di software applicativo",
        "answer": false
      },
      {
        "option_text": "E' una tematica che riguarda la cyber security delle forniture digitali e in generale l'integrazione informatica sicura di tutta la catena di fornitura",
        "answer": true
      },
      {
        "option_text": "Si migliora attraverso l'allineamento dei requisiti di Cyber Security con i fornitori",
        "answer": false
      },
      {
        "option_text": "Si migliora mediante assessment periodici con i fornitori diretti",
        "answer": true
      },
      {
        "option_text": "Può essere migliorata mediante la certificazioni di cybersecurity dei sistemi di gestione, di prodotto o di componente nella catena di fornitura",
        "answer": true
      },
      {
        "option_text": "E' un problema che riguarda solamente le aziende di produzione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 461,
    "code": "M1.3.1.5",
    "question": "Il livello 4 del Modello ISO/OSI",
    "options": [
      {
        "option_text": "Si occupa del Trasporto dei dati mediante specifici protocolli",
        "answer": true
      },
      {
        "option_text": "Attraverso la funzione di Multiplazione permette di stabilire diverse connessioni simultanee tra gli stessi due host",
        "answer": true
      },
      {
        "option_text": "Attraverso il servizio di Sincronizzazione inserisce Checkpoint nella flusso dei dati della comunicazione",
        "answer": false
      },
      {
        "option_text": "Attraverso il Servizio di Connessione si incarica di realizzare una connessione persistente per ogni connessione richiesta, che viene poi chiusa quando non è più necessaria",
        "answer": true
      },
      {
        "option_text": "Si occupa di evitare errori di over-running se gli host coinvolti nella comunicazione hanno velocità di trasmissione differenti",
        "answer": true
      },
      {
        "option_text": "Si occupa dell'indirizzamento logico dei pacchetti trasportati",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)"
  },
  {
    "id": 462,
    "code": "M2.1.2.13",
    "question": "La Società S.n.c.",
    "options": [
      {
        "option_text": "È una società in Nome Collettivo",
        "answer": true
      },
      {
        "option_text": "È una forma giuridica di società in cui tutti i soci sono responsabili solidalmente e illimitatamente per le obbligazioni della società",
        "answer": true
      },
      {
        "option_text": "È una forma giuridica di società che prevede un amminstratore unico",
        "answer": false
      },
      {
        "option_text": "E' una società di Capitali",
        "answer": false
      },
      {
        "option_text": "E' una società che prevede un capitale minimo da versare",
        "answer": false
      },
      {
        "option_text": "E' una società che prevede la mancanza di separazione tra patrimonio personale e aziendale",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 463,
    "code": "M2.2.2.5.1",
    "question": "Quali dei seguenti elementi possono essere considerati Vettori di Attacco",
    "options": [
      {
        "option_text": "Politiche di sicurezza non aggiornate",
        "answer": false
      },
      {
        "option_text": "Social Engineering",
        "answer": true
      },
      {
        "option_text": "Password deboli",
        "answer": true
      },
      {
        "option_text": "Attacchi DoS/DDoS",
        "answer": true
      },
      {
        "option_text": "Attacchi Man-in-the-middle",
        "answer": true
      },
      {
        "option_text": "Phishing",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)"
  },
  {
    "id": 464,
    "code": "M3.1.3.4",
    "question": "Il percorso che porta alla certificazione di un'azienda o un'organizzazione",
    "options": [
      {
        "option_text": "Prevede una prima fase (di solito) consulenziale di progettazione e implementazione del Sistema di Gestione",
        "answer": true
      },
      {
        "option_text": "Può prevedere una fase iniziale di assessment dell'azienda per capire meglio il contesto dell'organizzazione",
        "answer": true
      },
      {
        "option_text": "Prevede una fase di realizzazione di politiche, procedure, manuali, istruzioni e moduli di registrazioni conformi alle norme dello schema di riferimento",
        "answer": true
      },
      {
        "option_text": "Una volta progettato il Sistema di Gestione questo può essere certificato mediante un Audit interno",
        "answer": false
      },
      {
        "option_text": "Il percorso di Certificazione termina con l'Audit dell'Ente di Certificazione",
        "answer": false
      },
      {
        "option_text": "Il percorso di Certificazione prevede revisioni annuali",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 465,
    "code": "M3.1.3.5",
    "question": "Lo Standard Internazionale",
    "options": [
      {
        "option_text": "ISO 45001 è relativo alla sicurezza del lavoro",
        "answer": true
      },
      {
        "option_text": "ISO 31000 è relativo alla gestione del rischio",
        "answer": true
      },
      {
        "option_text": "ISO 14001 è relativo all’ambiente ovvero sui sistemi di gestione ambientale",
        "answer": true
      },
      {
        "option_text": "ISO 26000 è relativo alla qualità",
        "answer": false
      },
      {
        "option_text": "ISO 9001 è relativo alla qualità",
        "answer": true
      },
      {
        "option_text": "ISA/IEC 62443 è relativo alla sicurezza delle informazioni",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 466,
    "code": "M3.2.1.22",
    "question": "Un Sistema di Gestione della Sicurezza delle Informazioni (ISMS)",
    "options": [
      {
        "option_text": "E' un insieme di regole che un'azienda deve stabilire nell'ambito della cybersecurity utilizzando o meno uno standard di riferimento",
        "answer": true
      },
      {
        "option_text": "Deve necessariamente identificare gli stakeholder e le loro aspettative nei confronti dell'azienda in termini di sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "Deve Identificare gli asset dell'azienda o dell'organizzazione e quali rischi esistono per le informazioni",
        "answer": true
      },
      {
        "option_text": "Deve essere progettato con criteriti di security by design in modo che si possa mantenere inalterato il più possibile nel tempo",
        "answer": false
      },
      {
        "option_text": "Deve selezionare le contromisure necessarie (organizzative o tecnologiche) per mitigare il rischio di cybersecurity",
        "answer": true
      },
      {
        "option_text": "Può adottare lo standard ISO 27000 e deve, qundi, obbligatoriamente certificarsi",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 467,
    "code": "M3.2.1_1.3",
    "question": "L'area tematica dei requisiti ISO/IEC 27001 \"Leadership\" definisce che:",
    "options": [
      {
        "option_text": "L'alta direzione deve dimostrare leadership e impegno in relazione al sistema di gestione della sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "E' necessario garantire che la politica di sicurezza delle informazioni e gli obiettivi di sicurezza delle informazioni siano stabiliti e siano compatibili con la direzione strategica dell'organizzazione",
        "answer": true
      },
      {
        "option_text": "Bisogna garantire che Il sistema di gestione della sicurezza delle informazioni raggiunga i risultati attesi",
        "answer": true
      },
      {
        "option_text": "E' necessario garantire l'integrazione dei requisiti del sistema di gestione della sicurezza delle informazioni nei processi dell'organizzazione",
        "answer": true
      },
      {
        "option_text": "L'alta direzione può non essere a conoscenza delle problematiche di cyber security e deve quindi delegare esternamente le responsabilità",
        "answer": false
      },
      {
        "option_text": "L'alta direzione non ha in ultimo la responsabiltà in relazione alla cyber security se definisce correttamente un Responsabile della Sicurezza Informatica",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 468,
    "code": "M3.2.1_2.17",
    "question": "Il controllo ISO/IEC 27001: 2022 “Privileged access rights” ovvero che l'assegnazione e l'uso dei diritti di accesso privilegiati devono essere limitati e gestiti",
    "options": [
      {
        "option_text": "Indica che l'assegnazione e l'uso dei diritti di accesso privilegiati deve essere assegnato in base al ruolo e la responsabilità all'interno dell'organizzazione",
        "answer": true
      },
      {
        "option_text": "Indica che una volta definiti gli specifici diritti di accesso questi non saranno modificati sino alle dimissioni del dipendente",
        "answer": false
      },
      {
        "option_text": "È un requisito solo Preventivo",
        "answer": true
      },
      {
        "option_text": "È un  requisito Preventivo e Investigativo",
        "answer": false
      },
      {
        "option_text": "È un controllo solamente Correttivo",
        "answer": false
      },
      {
        "option_text": "È un controllo che appartiene solamente all'ambito dei requisiti di Integrità e Disponibilità",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 469,
    "code": "M3.2.1_2.18",
    "question": "L'attributo dei controlli ISO/IEC 27001:2022 Cybersecurity Concepts",
    "options": [
      {
        "option_text": "Permettono di associare, e quindi etichettare, un controllo ad una funzione del NIST CSF Core",
        "answer": true
      },
      {
        "option_text": "Permettono di associare, e quindi etichettare, un controllo ISO/IEC 27001 ad una funzione dell'IEC 62443-3-2",
        "answer": false
      },
      {
        "option_text": "Può essere associato alle funzioni: Identify, Protect, Detect, Respond e Recover",
        "answer": true
      },
      {
        "option_text": "Può assumere uno dei seguenti livelli di sicurezza: SL1, SL2, SL3 o SL4",
        "answer": false
      },
      {
        "option_text": "Può essere associato ai tipi: Preventive, Detective and Corrective",
        "answer": false
      },
      {
        "option_text": "Può essere associato alle proprietà: Confidentiality, Integrity and Avalability",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 470,
    "code": "M3.2.3_1.2",
    "question": "Le Funzioni del Framework Core",
    "options": [
      {
        "option_text": "Sono funzioni che organizzano le attività di sicurezza informatica di un'organizzazione",
        "answer": true
      },
      {
        "option_text": "Sono concorrenti tra di loro, nel senso che sono attive tutte contemporaneamente",
        "answer": true
      },
      {
        "option_text": "Sono sequenziali tra di loro, nel senso che sono attivate una dopo l'altra nel rispettivo ordine",
        "answer": false
      },
      {
        "option_text": "Sono suddivise in categorie, ovvero in gruppi di risultati di sicurezza informatica",
        "answer": true
      },
      {
        "option_text": "Sono divise in sottocategorie ovvero i controlli da effettuare",
        "answer": false
      },
      {
        "option_text": "Devono essere sempre attive",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 471,
    "code": "M3.2.3_1.3",
    "question": "I Framework Profile del NIST CSF",
    "options": [
      {
        "option_text": "Possono essere visti come una fotografia dello stato corrente di implementazione del Framework Core all'interno dell'organizzazione",
        "answer": true
      },
      {
        "option_text": "Possono essere utilizzati per definire un percorso a \"tappe\" (ogni tappa un determinato profilo) per raggiungere determinati obiettivi di sicurezza",
        "answer": true
      },
      {
        "option_text": "Racchiudono al loro interno obiettivi organizzativi in relazione al business",
        "answer": true
      },
      {
        "option_text": "Racchiudono la propensione al rischio dell’organizzazione in relazione alle minacce ambientali",
        "answer": true
      },
      {
        "option_text": "Riguardano unicamente le buone pratiche che l'organizzazione intende implementare",
        "answer": false
      },
      {
        "option_text": "Identificano solamente lo stato corrente e non permettono di implementare percorsi di miglioramento",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 472,
    "code": "M3.2.3_1.4",
    "question": "Il risultato atteso NIST CSF ID.AM-08: Sistemi, hardware, software, servizi e dati vengono gestiti durante tutto il loro ciclo di vita  vuole significare",
    "options": [
      {
        "option_text": "Che per tutti i sistemi, gli hardware i software i sevizi e i dati è necessario gestire la configurazione e identificare la durata del ciclo di vita",
        "answer": true
      },
      {
        "option_text": "Che per tutti i sistemi, gli hardware i software è necessario effettuare costantemente gli aggiornamenti di sicurezza durante tutto il ciclo di vita",
        "answer": true
      },
      {
        "option_text": "Che per tutti i sistemi, gli hardware i software fuori dal ciclo di vita, ovvero obsoleti, devono essere sostituti",
        "answer": true
      },
      {
        "option_text": "Che tutti i sistemi e i software installati devono avere una versione (o un riferimento di configurazione) che deve essere legata alla versione dei relativi sotto-componenti",
        "answer": true
      },
      {
        "option_text": "Che tutti i sistemi, gli hardware, i software, i sevizi e i dati deveono essere inventariati",
        "answer": false
      },
      {
        "option_text": "Che tutti i sistemi, gli hardware, i software, i sevizi e i dati devono essere gestite dagli operatori che hanno l'autorità per farlo",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 473,
    "code": "M3.2.4.3.2",
    "question": "ll documento NIST Special Publication SP 800-53 Rev. 5",
    "options": [
      {
        "option_text": "Fornisce un catalogo integrativo di controlli di sicurezza e privacy per i sistemi informativi per proteggere le operazioni e le risorse organizzative, gli individui, e le aziende dai rischi.",
        "answer": true
      },
      {
        "option_text": "Ha un numero di controlli molto maggiore rispetto a ISO/IEC 27001:2022",
        "answer": true
      },
      {
        "option_text": "Identifica i controlli come tecnologici \"s\", organizzativi \"o\" o la combinazione dei due \"o/s\"",
        "answer": true
      },
      {
        "option_text": "Permette la certificazione da parte di enti accreditati internazionalmente",
        "answer": false
      },
      {
        "option_text": "Si intitola \" Security and Privacy Controls for Information Systems and Organizations \"",
        "answer": true
      },
      {
        "option_text": "Si intitola \" Security and Privacy Controls for Information Systems, Organizations and People \"",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 474,
    "code": "M3.2.6.21",
    "question": "Il Documento ISA/IEC 62443-4-2",
    "options": [
      {
        "option_text": "E' relativo ai requisiti tecnici per i componenti IACS",
        "answer": true
      },
      {
        "option_text": "Contiene l'elenco dei System Requirement (SR)",
        "answer": false
      },
      {
        "option_text": "Contiene l'elenco dei Component Requirement (CR)",
        "answer": true
      },
      {
        "option_text": "Insieme alla norma ISA/IEC 62443-4-1 appartiene al Cluster Rosso",
        "answer": true
      },
      {
        "option_text": "Insieme alla norma ISA/IEC 62443-4-1 appartiene al Cluster Giallo",
        "answer": false
      },
      {
        "option_text": "E' relativo ai Componenti ovvero: Dispositivi embedded, componenti di rete, componenti host e applicazioni software",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 475,
    "code": "M3.2.6.19",
    "question": "I Requisiti di Sicurezza (SR) secondo ISO/IEC 62443-3-3",
    "options": [
      {
        "option_text": "Sono requisiti di sistema",
        "answer": true
      },
      {
        "option_text": "Sono requisiti di gestione",
        "answer": false
      },
      {
        "option_text": "Sono definiti e raggruppati per ciascuno dei sette Fondational Requirements",
        "answer": true
      },
      {
        "option_text": "Sono associati a quattro livelli di sicurezza (SL) crescenti (da SL1 a SL4)",
        "answer": true
      },
      {
        "option_text": "Possono avere un certo numero di requisiti di rinforzo RE (Requirement Enhancement)",
        "answer": true
      },
      {
        "option_text": "Sono esattamente equivalenti ai Component Requirements (CR) del ISA/IEC 62443 4-2",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 476,
    "code": "M3.2.6.20",
    "question": "Come si può migliorare i livello di sicurezza di un Conduit secondo ISO/IEC 62443",
    "options": [
      {
        "option_text": "Migliorando l'Access Control: restingendo l'accesso al Conduit in base al ruolo dell'utente e i suoi relativi privilegi",
        "answer": true
      },
      {
        "option_text": "Introducendo la criptazione dei messaggi",
        "answer": true
      },
      {
        "option_text": "Introducendo un sistema IDS/IPS (Intrusion Detection and Prevention System)",
        "answer": true
      },
      {
        "option_text": "Tracciando e monitorando costantemente la comunicazione nel Conduit",
        "answer": true
      },
      {
        "option_text": "Facendo attraversare al Conduit più di una Zona",
        "answer": false
      },
      {
        "option_text": "Riducendo il numero di regole del Firewall",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 477,
    "code": "M3.3.5_1.1",
    "question": "Il DL 138 di recepimento italiano della direttiva NIS 2",
    "options": [
      {
        "option_text": "Stabilisce misure volte a garantire un livello elevato di sicurezza informatica in ambito nazionale, contribuendo ad incrementare il livello comune il sicurezza nell’Unione europea",
        "answer": true
      },
      {
        "option_text": "Stabilisce misure volte a garantire un livello elevato di sicurezza informatica in ambito nazionale ed europeo in modo da migliorare il funzionamento del mercato interno",
        "answer": true
      },
      {
        "option_text": "Integra altresì la direttiva CER (Critical Entities Resilience Directive (UE) 2022/2557) relativa alla resilienza dei soggetti critici",
        "answer": true
      },
      {
        "option_text": "Trasforma il paradgma di cybersicurezza RID introducendo la continuità del business per migliorare le caratteristiche di resilienza cyber",
        "answer": true
      },
      {
        "option_text": "Trasforma il paradgma di cybersicurezza RID focalizzandosi unicamente sulla protezioni dei dati e delle informazioni",
        "answer": false
      },
      {
        "option_text": "Definisce un dominio focalizzato sull'Information Technology",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 478,
    "code": "M3.3.5_1.2",
    "question": "I principali elementi che differenziano la prima edizione della NIS e NIS2 sono",
    "options": [
      {
        "option_text": "Viene eliminata la distinzione tra fornitori di servizi essenziali e fornitori di servizi digitali",
        "answer": true
      },
      {
        "option_text": "Le aziende vengono classificare in essenziali e importanti a seconda della criticità dei servizi che offrono",
        "answer": true
      },
      {
        "option_text": "Le regole di ingaggio sono modificate: le aziende e le organizzazioni devono registrarsi per verificare se rientrano nel perimetro della normativa",
        "answer": true
      },
      {
        "option_text": "L’ambito di applicazione viene fortemente ampliato attraverso l'introduzione di una nuova tassonomia",
        "answer": false
      },
      {
        "option_text": "L'ambito di applicazione non viene modificato ma vengono introdotti nuovi limiti dimensionali per le aziende e organizzazioni",
        "answer": false
      },
      {
        "option_text": "Viene introdotto l'obiettivo strategico di rafforzare la sicurezza informatica lungo tutta la catena di approvvigionamento",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 479,
    "code": "M3.3.5_1.3",
    "question": "Quali obblighi in materia di gestione del rischio sono stati introdotti dalla normativa NIS 2?",
    "options": [
      {
        "option_text": "Realizzare politiche di analisi dei rischi e di sicurezza dei sistemi informativi e di rete",
        "answer": true
      },
      {
        "option_text": "Gestire gli incidenti informatici, ivi incluse le procedure e gli strumenti per eseguire le notifiche",
        "answer": true
      },
      {
        "option_text": "Gestire la continuità operativa, ivi inclusa la gestione di backup, il ripristino in caso di disastro, ove applicabile, e gestione delle crisi",
        "answer": true
      },
      {
        "option_text": "Soddisfare gli specifici requisiti di progettazione e rigidi criteri di certificazione di software e hardware elencati nella direttiva",
        "answer": false
      },
      {
        "option_text": "Gestire la sicurezza dell’acquisizione, dello sviluppo e della manutenzione dei sistemi informativi e di rete, ivi comprese la gestione e la divulgazione delle vulnerabilità",
        "answer": true
      },
      {
        "option_text": "Realizzare politiche e procedure per valutare l’efficacia delle misure di gestione dei rischi per la sicurezza informatica",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 480,
    "code": "M3.3.5_1.4",
    "question": "Quali obblighi di notifica prevede la direttiva NIS 2?",
    "options": [
      {
        "option_text": "Tutti i Soggetti notificano, senza ingiustificato ritardo, al CSIRT Italia ogni incidente che ha un impatto significativo sulla fornitura dei loro servizi",
        "answer": true
      },
      {
        "option_text": "Tutti i soggetti notificano senza ingiustificato ritardo, e comunque entro 24 ore da quando sono venuti a conoscenza dell’incidente significativo, una pre-notifica",
        "answer": true
      },
      {
        "option_text": "Tutti i soggetti notificano senza ingiustificato ritardo, e comunque entro 72 ore da quando sono venuti a conoscenza dell’incidente significativo, una notifica di aggiornamento e approfondimento",
        "answer": true
      },
      {
        "option_text": "Notificano senza ingiustificato ritardo, e comunque entro 96 ore da quando sono venuti a conoscenza dell’incidente significativo, se l'incidente non si è propagato ad organizzazioni esterne",
        "answer": false
      },
      {
        "option_text": "Si notifica una relazione finale al CSIRT non appena si sono ultimate le procedure di verifica",
        "answer": false
      },
      {
        "option_text": "Si notifica una relazione finale al CSIRT entro un mese dalla trasmissione della notifica dell’incidente",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 481,
    "code": "M3.3.5_1.5",
    "question": "Qual è il punto di contatto unico competente NIS relativamente alla direttiva (UE) 2022/2555",
    "options": [
      {
        "option_text": "CERT-UE",
        "answer": false
      },
      {
        "option_text": "ENISA",
        "answer": false
      },
      {
        "option_text": "CSIRT",
        "answer": false
      },
      {
        "option_text": "ACN",
        "answer": true
      },
      {
        "option_text": "In ultimo il Ministero dell'Interno",
        "answer": false
      },
      {
        "option_text": "In ultimo il Ministero della Difesa",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)"
  },
  {
    "id": 482,
    "code": "M4.1.1.1",
    "question": "Secondo il sociologo e filosofo Max Weber",
    "options": [
      {
        "option_text": "Prima del processo di industrializzazione le società erano organizzate sulla base del potere tradizione o sul potere carismatico",
        "answer": true
      },
      {
        "option_text": "La burocrazia è una nuova forma di autorità superiore a quelle precedenti",
        "answer": true
      },
      {
        "option_text": "La burocrazia è una nuova forma di autorità che però non è affatto migliore delle precedenti",
        "answer": false
      },
      {
        "option_text": "Il modello di burocrazia ha 10 caratteristiche che lo contraddistiguono",
        "answer": true
      },
      {
        "option_text": "Tra le caratteristiche attuali che contraddistiguono il modello di burocrazia c'è il Lavoro Part-Time",
        "answer": false
      },
      {
        "option_text": "Tra le caratteristiche attuali che contraddistiguono il modello di burocrazia c'è la Gerarchia degli Uffici",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 483,
    "code": "M4.1.1.13",
    "question": "La Struttura organizzativa Divisionale",
    "options": [
      {
        "option_text": "È una soluzione organizzativa dove tutte le attività (produzione, marketing, finanza, ecc.) inerenti un prodotto vengono raggruppate in una divisione",
        "answer": true
      },
      {
        "option_text": "È una soluzione organizzativa dove ogni divisione corrisponde ad una unità organizzativa",
        "answer": true
      },
      {
        "option_text": "Facilita la realizzazione di strategie per la diversificazione produttiva",
        "answer": true
      },
      {
        "option_text": "Permette di ridurre il numero di dipendenti nelle varie divisioni permettendo economie nelle risorse umane",
        "answer": false
      },
      {
        "option_text": "Riduce i possibili conflitti tra staff dell’amministrazione generale e staff delle divisioni",
        "answer": false
      },
      {
        "option_text": "Permette di raggruppare tutte le attività di uno specifico prodotto migliorando la flessibilità delle operazioni",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 484,
    "code": "M4.1.2.5",
    "question": "Un'anzienda che, relativamente alla cybersecurity, privilegia gli aspetti tecnologici ed infrastrutturali può prevedere una struttura organizzativa",
    "options": [
      {
        "option_text": "In cui il CISO dipende direttamente dal CIO",
        "answer": true
      },
      {
        "option_text": "In cui il CISO dipende direttamente dal CSO",
        "answer": false
      },
      {
        "option_text": "In cui il CISO dipende direttamente dal CRO",
        "answer": false
      },
      {
        "option_text": "In cui il CISO dipende direttamente dal Capo della Produzione",
        "answer": false
      },
      {
        "option_text": "In cui il CISO ha funzioni maggiormente orientate agli aspetti logici (software) e meno i fisici (hardware e persone)",
        "answer": true
      },
      {
        "option_text": "In cui il CISO risponde direttamente al CEO",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 485,
    "code": "M4.1.3.3",
    "question": "Quali dei seguenti sono compiti del CISO (Chief Information Security Officer)",
    "options": [
      {
        "option_text": "Realizzare assessment sulla \"postura\" di sicurezza informatica dell'organizzazione",
        "answer": true
      },
      {
        "option_text": "Analizzare in maniera attualizzata il rischio cyber",
        "answer": true
      },
      {
        "option_text": "Identificare tempestivamente le potenziali minacce per l'organizzazione di natura informatica e cyber",
        "answer": true
      },
      {
        "option_text": "Contribuire all’analisi e alla definizione dei processi aziendali",
        "answer": false
      },
      {
        "option_text": "Definire l'allineamento della strategia IT con il piano strategico aziendale",
        "answer": false
      },
      {
        "option_text": "Collaborare all'investigazione forense",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 486,
    "code": "M4.1.5.7",
    "question": "La figura aziendale dell'Informatico Forense",
    "options": [
      {
        "option_text": "È una funzione tecnica coinvolta nella raccolta di dati circa l’utilizzo di sistemi, reti e applicazioni e analisi degli stessi in relazione ad incidenti di cybersecurity",
        "answer": true
      },
      {
        "option_text": "Si occupa della raccolta e all’analisi dei dati e di redigere una documentazione idonea alla presentazione in sede processuale.",
        "answer": true
      },
      {
        "option_text": "Deve avere conoscenza delle tecniche di Vulnerability Assessment",
        "answer": false
      },
      {
        "option_text": "Deve saper utilizzare tool di reverse engineering",
        "answer": false
      },
      {
        "option_text": "Deve avere abilità di analisi e attenzione al dettaglio",
        "answer": true
      },
      {
        "option_text": "Deve conoscere tools e framework per la simulazione di attacchi Cyber",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "id": 487,
    "code": "M4.2.1.4",
    "question": "L’organizzazione della Cybersicurezza nelle Infrastrutture Critiche",
    "options": [
      {
        "option_text": "Nelle aziende più grandi può essere indirizzata da un comitato o una struttura di Risk Management",
        "answer": true
      },
      {
        "option_text": "Di solito prevede un CISO che risponde al CIO, o una figura analoga che, molto spesso, ha in carico l'innovazione digitale",
        "answer": true
      },
      {
        "option_text": "Non è soggetta a normative locali o internazionali",
        "answer": false
      },
      {
        "option_text": "A livello internazionale, globale non è regolata in maniera uniforme",
        "answer": true
      },
      {
        "option_text": "In Europa è soggetta a direttive comunitarie",
        "answer": true
      },
      {
        "option_text": "Secondo le normative deve prevedere un sistema di gestione  Nello topografia indicata nello schema sopra sono rappresentate  Zone (con differenti colori in base alla specifica funzione) e dispositivi di rete numerati progressivamente. Indicare quali dei segmenti di rete (indicati con l'insieme dei dispositivi) sono  Conduit  secondo ISA-IEC 62443 selezionando vero o falso nelle seguenti opzioni:",
        "answer": true
      },
      {
        "option_text": "0",
        "answer": true
      },
      {
        "option_text": "1-2-3-4-5-6-7",
        "answer": true
      },
      {
        "option_text": "1-2-3-4-5",
        "answer": false
      },
      {
        "option_text": "6-7",
        "answer": false
      },
      {
        "option_text": "8-9-10-11",
        "answer": true
      },
      {
        "option_text": "12-13-14-15",
        "answer": true
      },
      {
        "option_text": "8-9-10-11-12-13-14-15",
        "answer": false
      },
      {
        "option_text": "16-17-18",
        "answer": true
      },
      {
        "option_text": "16-17-18-19-20-21-22-23-24",
        "answer": false
      },
      {
        "option_text": "19-20-21",
        "answer": true
      },
      {
        "option_text": "22-23-24",
        "answer": true
      },
      {
        "option_text": "25-26-27-28-29-30-31-32-33-34-35-36",
        "answer": false
      },
      {
        "option_text": "37-38-39-40-41-42-43-44-45-46-47-48",
        "answer": false
      },
      {
        "option_text": "25-26-27-28",
        "answer": true
      },
      {
        "option_text": "29-30-31-32",
        "answer": true
      },
      {
        "option_text": "33-34-35-36",
        "answer": true
      },
      {
        "option_text": "37-38-39-40",
        "answer": true
      },
      {
        "option_text": "41-42-43-44",
        "answer": true
      },
      {
        "option_text": "45-46-47-48  Un'azienda di produzione ha necessità di aumentare il livello di sicurezza degli accessi esterni da parte di fornitori di servizi di assistenza e manutenzione. Per fare questo è stato deciso di migliorare il sistema di gestione esistente utilizzando alcuni controlli ISO/IEC 27001: 2022 e IEC 62443. Indicare vero o falso se ritenete che i controlli elencati siano adeguati o meno allo scopo:",
        "answer": true
      },
      {
        "option_text": "ISO 27001:2022 5.15 - Access control",
        "answer": true
      },
      {
        "option_text": "ISO 27001:2022 5.20 - Addressing information security within supplier agreements",
        "answer": true
      },
      {
        "option_text": "ISO 27001:2022 5.20 - Securing offices, rooms and facilities",
        "answer": false
      },
      {
        "option_text": "ISO 27001:2022 8.3 - Information access restriction",
        "answer": true
      },
      {
        "option_text": "ISO 27001:2022 8.5 - Secure authentication",
        "answer": true
      },
      {
        "option_text": "ISA/IEC 62443-3-3 SR 1.13 – Access via untrusted networks",
        "answer": true
      },
      {
        "option_text": "ISA/IEC 62443-3-3 SR 2.1 – Authorization enforcement - RE 4 Dual approval",
        "answer": true
      },
      {
        "option_text": "ISA/IEC 62443-3-3 SR 2.6 – Remote session termination",
        "answer": true
      },
      {
        "option_text": "ISA/IEC 62443-3-3 SR 3.1 – Communication integrity",
        "answer": true
      },
      {
        "option_text": "ISA/IEC 62443-3-3 SR 4.2 - Information persistence - RE 1 Purging of shared memory resoruce {1:MC:~Vero~=Falso}",
        "answer": false
      },
      {
        "option_text": "ISA/IEC 62443-3-3 SR 5.3 – General purpose person-to-person communication restrictions {1:MC:~Vero~=Falso}",
        "answer": false
      },
      {
        "option_text": "ISA/IEC 62443-3-3 SR 7.5 – Emergency power {1:MC:~Vero~=Falso}",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)"
  },
  {
    "code": "M1.2.2.1",
    "question": "Il Dark Web",
    "options": [
      {
        "option_text": "È accessibile solo tramite appositi browser e protocolli di anonimizzazione",
        "answer": true
      },
      {
        "option_text": "Rappresenta una porzione molto piccola di internet (meno dello 0,01%)",
        "answer": true
      },
      {
        "option_text": "Oltre a essere una \"centrale\" per il crimine informatico, l'anonimato che offre viene sfruttato da attivisti politici, giornalisti e informatori in paesi soggetti a censura.",
        "answer": true
      },
      {
        "option_text": "È sempre illegale proprio per le sue caratteristiche di anonimato",
        "answer": false
      },
      {
        "option_text": "Garantisce sempre l'inviolabilità delle informazioni personali",
        "answer": false
      },
      {
        "option_text": "Si è evoluto in vero e proprio e-commerce strutturati, completo di sistemi di recensioni, conti deposito e assistenza clienti",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 488
  },
  {
    "code": "M1.2.3.6",
    "question": "Un linguaggio di programmazione (es. C, C++, Python, ecc.)",
    "options": [
      {
        "option_text": "Può non essere nativamente cyber sicuro",
        "answer": true
      },
      {
        "option_text": "Può essere soggetto a standardizzazione nelle strutture logiche, funzionali o procedurali",
        "answer": true
      },
      {
        "option_text": "Deve essere considerato un requisito critico nella gestione dei fornitori del software",
        "answer": true
      },
      {
        "option_text": "Può avere vulnerabilità intrinseche",
        "answer": true
      },
      {
        "option_text": "Deve essere lasciato completamente libero da vincoli per permettere al programmatore di sfruttare tutte le sue capacità",
        "answer": false
      },
      {
        "option_text": "Se di recente realizzazione è sempre auto-esplicativo, nel senso che non necessità di pesanti descrizioni o commenti",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 489
  },
  {
    "code": "M1.2.4.11",
    "question": "Una Botnet",
    "options": [
      {
        "option_text": "È una rete composta da dispositivi infettati da malware che agiscono sotto il controllo di un unico attore aumentando le risorse e le capacità offensive a sua disposizione",
        "answer": true
      },
      {
        "option_text": "È una rete composta da dispositivi infettati da malware che agiscono sotto il controllo di attori multipli aumentando le risorse e capacità offensive a loro disposizione",
        "answer": false
      },
      {
        "option_text": "È una rete composta da dispositivi infettati che permette di creare un sovraccarico anche nelle server farm che gestiscono siti capaci di grande traffico",
        "answer": true
      },
      {
        "option_text": "È lo strumento principale per realizzare un attacco di tipo Ransomware",
        "answer": false
      },
      {
        "option_text": "È lo strumento principale per realizzare un attacco di tipo DDoS (Distributed Denial of Service)",
        "answer": true
      },
      {
        "option_text": "Può utilizzare trojan specializzati che permettono il controllo remoto del sistema infettato",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 490
  },
  {
    "code": "M1.3.1.10",
    "question": "Il Checkpoint (punto di sinctonizzazione) del Livello \"Sessione\" di ISO/OSI",
    "options": [
      {
        "option_text": "Permette ai processi coinvolti nella comunicazione di inserire dei controlli nel flusso dei dati",
        "answer": true
      },
      {
        "option_text": "Permette di dividere (logicamente) il flusso in unità più piccole",
        "answer": true
      },
      {
        "option_text": "Permette ad ogni checkpoint che entrambi gli host effettuino il backup dei dati, salvino la configurazione della rete e del clock, ed annotino il punto in cui è arrivata la conversazione",
        "answer": true
      },
      {
        "option_text": "In caso di interruzione della sessione, permette di non inviare nuovamente tutto il flusso dati ma solo dall'ultimo checkpoint in poi.",
        "answer": true
      },
      {
        "option_text": "Operano a Livello 4",
        "answer": false
      },
      {
        "option_text": "Non è gestito dal protocollo TCP/IP",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 491
  },
  {
    "code": "M2.2.2.7",
    "question": "Quali delle seguenti Debolezze Tecnologiche possono essere sfruttate da un Vettore d'attacco",
    "options": [
      {
        "option_text": "Vulnerabilità informatiche e mancato aggiornamento del software",
        "answer": true
      },
      {
        "option_text": "Vulnerabilità dell'hardware",
        "answer": true
      },
      {
        "option_text": "Gestione di identità e permessi non adeguata",
        "answer": true
      },
      {
        "option_text": "Tecnologia degli switches troppo complessa da configurare",
        "answer": false
      },
      {
        "option_text": "Firewall correttamente configurato e connesso ma a basso costo",
        "answer": false
      },
      {
        "option_text": "Meccanismi di autenticazione deboli (password deboli con singolo fattore di autenticazione)",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 492
  },
  {
    "code": "M2.2.2.8",
    "question": "La piattaforma ERP (Enterprise Resource Planning) quali Sistemi può gestire?",
    "options": [
      {
        "option_text": "Il portale Web del Procurement (Ufficio Acquisti)",
        "answer": true
      },
      {
        "option_text": "Il CRM (Customer Relationship Management)",
        "answer": true
      },
      {
        "option_text": "Il Gestionale della Logistica (Inventario materiali, Scorte, Movimentazione)",
        "answer": true
      },
      {
        "option_text": "Lo SCADA (Supervisory Control And Data Acquisition)",
        "answer": false
      },
      {
        "option_text": "Il CAD (Computer Aided Design)",
        "answer": false
      },
      {
        "option_text": "Il Gestionale (Ordini, Fatturazione, Paghe)",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 493
  },
  {
    "code": "M2.3.1.8",
    "question": "Nella gestione aziendale quali delle seguenti sono Operazioni Soggettive:",
    "options": [
      {
        "option_text": "Attività decisionali",
        "answer": true
      },
      {
        "option_text": "Reperimento di mezzi finanziari",
        "answer": false
      },
      {
        "option_text": "Attività esecutive per realizzare le decisioni prese",
        "answer": true
      },
      {
        "option_text": "Le attività di controllo",
        "answer": true
      },
      {
        "option_text": "La produzione ovvero la trasformazione in prodotti finiti o semilavorati",
        "answer": false
      },
      {
        "option_text": "Il disinvestimento di asset obsoleti",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 494
  },
  {
    "code": "M2.3.2.8",
    "question": "Nell'organizzazione aziendale il ruolo di una risorsa",
    "options": [
      {
        "option_text": "E' l'insieme delle mansioni, responsabilità e obiettivi assegnati a una specifica posizione",
        "answer": true
      },
      {
        "option_text": "Definisce esattamente cosa deve fare una persona, come deve farlo e quali risultati deve raggiungere",
        "answer": true
      },
      {
        "option_text": "Evita sovrapposizioni, riduce i conflitti interni e aumenta la produttività",
        "answer": true
      },
      {
        "option_text": "Permette al dipendente di sapere quali sono i suoi limiti di responsabilità e su cosa concentrarsi",
        "answer": true
      },
      {
        "option_text": "E' di fatto lo stato o il grado assegnato ad una figura professionale all’interno dell’organizzazione",
        "answer": false
      },
      {
        "option_text": "Richiede sempre un atteggiamento rigido da parte della risorsa che deve attenersi solamente ed unicamente alle proprie mansioni",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 495
  },
  {
    "code": "M3.2.1.24",
    "question": "Perché è necessario realizzare un Sistema di Gestione della Cybersecurity?",
    "options": [
      {
        "option_text": "Perché l'organizzazione rientra nella Tassonomia del nuova Direttiva NIS 2",
        "answer": true
      },
      {
        "option_text": "Perché ACN (Agenzia di Cybersecurity Nazionale) ha confermato che l'organizzazione è nel perimetro NIS",
        "answer": true
      },
      {
        "option_text": "Perchè è obbigatorio secondo la legislazione italiana indipendentemente dalla Direttiva NIS 2 e dal suo recepimento.",
        "answer": false
      },
      {
        "option_text": "Perché a seguito dell'analisi del rischio di business continuity si rende necessario irrobustire la postura di cybersecurity",
        "answer": true
      },
      {
        "option_text": "Perché è sempre necessario implementarlo e certificarlo, anche nei casi in cui il richio informatico impatta minimamente sulla business continuity",
        "answer": false
      },
      {
        "option_text": "Perché l'azienda è in un settore di mercato che richiede il vantaggio competitivo della certificazione in relazione alla cybersecurity.",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 496
  },
  {
    "code": "M3.2.1_1.6",
    "question": "L'area tematica dei requisiti ISO/IEC 27001 \"Valutazione delle Prestazioni\" :",
    "options": [
      {
        "option_text": "Definisce i criteri di valutazione del rischio operativo sulla sicurezza delle informazioni",
        "answer": false
      },
      {
        "option_text": "Definisce cosa deve essere monitorato e misurato, compresi i processi e i controlli sulla sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "Definisce quando devono essere eseguiti il ​​monitoraggio e la misurazione",
        "answer": true
      },
      {
        "option_text": "Definisce i metodi di monitoraggio, misurazione, analisi e valutazione, a seconda dei casi, per garantire risultati validi.",
        "answer": true
      },
      {
        "option_text": "Permette all'organizzazione di valutare le prestazioni di sicurezza delle informazioni e l'efficacia del sistema di gestione della sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "Non si occupa di definire i criteri e le modalità di ispezione (Audit Interno) delegati alle Attività Operative",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 497
  },
  {
    "code": "M3.2.3_1.5",
    "question": "Il NIST CSF 2.0",
    "options": [
      {
        "option_text": "Ha come principale differenza con il NIST CSF 1.1 l'aggiunta di una nuova funzione, \"Govern\" (GV) che si affianca alle quattro funzioni originali",
        "answer": false
      },
      {
        "option_text": "Ha come principale differenza con il NIST CSF 1.1 l'aggiunta di una nuova funzione, \"Govern\" (GV) che si affianca alle cinque funzioni originali",
        "answer": true
      },
      {
        "option_text": "E' stato adottato, con poche modifiche, da ACN (Agenzia di Cybersecurity Nazionale) come Framework di riferimento",
        "answer": true
      },
      {
        "option_text": "Ha di fatto ampliato  l'ambito di applicazione riconoscendo che la cybersecurity riguarda l'intera organizzazione e le sue interazioni",
        "answer": true
      },
      {
        "option_text": "Fornisce indicazioni più specifiche sul rischio di terze parti, integrando le linee guida sulla catena di fornitura del software nella funzione Govern",
        "answer": true
      },
      {
        "option_text": "Fornisce indicazioni più specifiche sul rischio di GDPR, integrando le linee guida sulla privacy e sul trattamento dei dati sensibili",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 498
  },
  {
    "code": "M3.2.6.1",
    "question": "La serie ISA/IEC 62443",
    "options": [
      {
        "option_text": "Fornisce un quadro di norme per affrontare e mitigare le vulnerabilità di sicurezza nei sistemi di controllo e automazione industriale (IACS)",
        "answer": true
      },
      {
        "option_text": "Sono standard applicabili a tutti i settori industriali e alle infrastrutture critiche",
        "answer": true
      },
      {
        "option_text": "Ha un posizionamento che scende sino a livello dell’impianto",
        "answer": true
      },
      {
        "option_text": "Ha un posizionamento che parte dal coinvolgimento dell’amministratore delegato e del consiglio di amministrazione",
        "answer": false
      },
      {
        "option_text": "È costituita da quattro famiglie di standard ancora in aggiornamento",
        "answer": true
      },
      {
        "option_text": "Non riguarda direttamente gli SCADA",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 499
  },
  {
    "code": "M3.2.6.34",
    "question": "Il Requisito Fondazionale \"Resouce Availability (RE)\" di ISA/IEC 62443-1-1",
    "options": [
      {
        "option_text": "Ha come obiettivo fondamentale assicurare che le risorse essenziali rimangano disponibili anche in caso di attacco informatico o guasto, per evitare il degrado dei servizi.",
        "answer": true
      },
      {
        "option_text": "Ha come obiettivo principale la disponibilità per quel che riguarda la sicurezza informatica IT, non OT.",
        "answer": false
      },
      {
        "option_text": "Richiede che per garantire le risorse durante un incidente si applichi il principio della Least Functionality (minima funzionalità), ovvero disabilitare o limitare servizi e funzioni non necessari",
        "answer": false
      },
      {
        "option_text": "Richiede che i componenti del sistema di controllo devono gestire attivamente l'allocazione delle risorse (es. memoria, banda di rete, cicli di CPU) per prevenire attacchi mirati all'esaurimento delle stesse",
        "answer": true
      },
      {
        "option_text": "Richiede che per ciascun sistema siano disponibili in backup della configurazione completa per consentire un ripristino completo del sistema in caso di guasto o compromissione",
        "answer": true
      },
      {
        "option_text": "Prevede che l'intensità e la robustezza richieste si basino sull'analisi dei rischi e sul livello di sicurezza desiderato (da SL 1 a SL 4)",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 500
  },
  {
    "code": "M4.1.1.3",
    "question": "Il Controllo di Gestione",
    "options": [
      {
        "option_text": "E' il meccanismo operativo volto a guidare la gestione verso il conseguimento degli obiettivi stabiliti in sede di pianificazione operativa",
        "answer": true
      },
      {
        "option_text": "Rileva, attraverso la misurazione di appositi indicatori, lo scostamento tra obiettivi pianificati e risultati conseguiti",
        "answer": true
      },
      {
        "option_text": "Informa degli scostamenti dagli obiettivi gli uffici e le persone che non stanno raggiungendo i risultati desiderati",
        "answer": false
      },
      {
        "option_text": "E' un processo aziendale che usa la raccolta e l'analisi di dati economico-finanziari e operativi",
        "answer": true
      },
      {
        "option_text": "Può contribuire a prevenire e gestire i rischi operativi e finanziari",
        "answer": true
      },
      {
        "option_text": "Non si occupa di valutare la redditività di progetti, prodotti o settori di vendita",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 501
  },
  {
    "code": "M4.2.3.11",
    "question": "Quali sono i vantaggi per passare a servizi informatici in Cloud?",
    "options": [
      {
        "option_text": "Riduzione dei costi fissi",
        "answer": true
      },
      {
        "option_text": "Maggiore velocità di installazione e accessibilità",
        "answer": true
      },
      {
        "option_text": "Riduzione dell’onere di elaborazione in carico al CED",
        "answer": true
      },
      {
        "option_text": "Migliore scalabilità",
        "answer": true
      },
      {
        "option_text": "Implementazione più rapida",
        "answer": true
      },
      {
        "option_text": "Miglior controllo dell'applicazione",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 502
  },
  {
    "code": "M3.4.6.3",
    "question": "Cos'è una rete neurale artificiale?",
    "options": [
      {
        "option_text": "Sono strati di \"neuroni\" artificiali interconnessi",
        "answer": true
      },
      {
        "option_text": "Sono modelli computazionali di intelligenza artificiale (IA) ispirati alla struttura del cervello umano",
        "answer": true
      },
      {
        "option_text": "Sono reti di neuroni artificiali che per la natura della funzione che esercitano non richiedono grandi capacità di elaborazione",
        "answer": false
      },
      {
        "option_text": "Sono una copia esatta del cervello umano",
        "answer": false
      },
      {
        "option_text": "Sono modelli matematici che elaborano in maniera ponderata i vari input che rivevono",
        "answer": true
      },
      {
        "option_text": "Sono reti di neuroni artificiali addestrate mediante la taratura dei parametri che propagano o meno il segnale (spike) ai neuroni successivi. Esercizio 1 1. Identificare correttamente, nello schema topologico in figura, i dispositivi rappresentati con le lettere: A. Router B. Firewall C. VPN D. Router E.Anomaly Detection F. Switch G. Switch H. Switch 2. Qual è il nome dei segmenti di rete con collegamenti colorati in verde e arancione?  VLAN 3. La presenza di due CED invece di uno",
        "answer": true
      },
      {
        "option_text": "Elimina il \"Single Point of Failure\"",
        "answer": true
      },
      {
        "option_text": "Aiuta a gestire il Disaster Recovery e protegge meglio i dati",
        "answer": true
      },
      {
        "option_text": "Aumenta la capacità di elaborazione complessiva senza aumentare troppo i costi",
        "answer": false
      },
      {
        "option_text": "Permette una ridondanza fisica se i due CED sono vicini tra di loro Esercizio 2 Un'azienda di produzione intende implementare alcuni System Requirement (SR) ANSI/ISA-62443 per innalzare la postura di sicurezza. Indicare quale delle seguenti affermazioni associate ai requisiti sono VERE o FALSE: L'identificatore (es. un nome utente, un ID di processo o un certificato digitale assegnato a un'entità) deve rimanere sempre associato",
        "answer": false
      },
      {
        "option_text": "all'entità fisica per tracciare le azioni; Il sistema di controllo deve fornire la capacità di supportare la gestione degli identificatori per utente, gruppo, ruolo o interfaccia del sistema di controllo.VERO Il sistema deve fornire la capacità di identificare in modo univoco non solo gli utenti umani, ma anche i processi software e i dispositivi.VEROSR 1.4 – Identifier management Indica che non è consentito un riutilizzo immediato dell'Identificatore subito dopo la disattivazione per evitare rischi di confusione o furto di identità all'interno dell'impianto industriale.FALSO Indica che le credenziali per l'accesso wireless possono essere condivise tra più utenti e dispositivi generici per velocizzare la manutenzioneFALSO Indica che il sistema di controllo deve essere in grado di identificare e autenticare tutti gli utenti (persone, processi software o dispositivi) coinvolti nella comunicazione wireless.VERO Definisce che l'ambito di applicazione non è solo l'Wi-Fi aziendale, ma qualsiasi mezzo di comunicazione wireless industriale (es. Bluetooth, ZigBee, packet radio)VERO Indica che, poiché si tratta di reti senza fili, lo standard permette che i dispositivi e i processi software possano non essere autenticati quando si collegano in wirelessFALSO Indica che il sistema di controllo, dopo aver verificato l'identità di un utente (persona, processo software o dispositivo), deve anche verificare che l'operazione richiesta sia effettivamente consentita in base alle policy e procedure di sicurezza definiteVERO Prevede che il sistema di controllo debba fornire la capacità di applicare le autorizzazioni assegnate a tutti gli utenti umani per controllare l'uso del sistema di controllo, al fine di supportare la separazione dei doveri e il privilegio minimoVERO Prevede che i privilegi amministrativi completi (di default) non siano consentiti; le autorizzazioni concesse devono essere limitate a quelle necessarie per lo svolgimento della specifica mansioneVERO Prevede che Il controllo delle autorizzazioni deve essere applicato su tutte le interfacce del sistema di controllo, non solo su quelle",
        "answer": false
      },
      {
        "option_text": "principali o dell'operatore. Assicura che sia sempre possibile capire chi o cosa ha eseguito un'azione (es. l'utente specifico, il software o il dispositivo che l'ha originata)VERO Prevede che il sistema di controllo deve essere in grado di generare record di audit rilevanti per la sicurezzaVERO Prevede che i singoli record di audit devono includere timestamp, origine (dispositivo di origine, processo software o account utente umano), categoria, tipo, ID evento e risultato dell'eventoVERO Prevede registrazioni di audit per le seguenti categorie: controllo degli accessi, errori di richiesta, eventi del sistema operativo, eventi del sistema di controllo, eventi di backup e ripristino, modifiche alla configurazione, potenziali attività di ricognizione ed eventi del registro di auditVERO Richiede che il sistema di controllo fornisca data e ora esatte per l'uso nella generazione dei record di auditVERO Non richiede particolare accuratezza del dato, l'accuratezza dei timestamp è infatti irrilevante per le analisi di sicurezzaFALSO Non richiede che i timestamp siano protetti se il file di log è archiviato in localeFALSO Può prevedere il requisito di miglioramento RE 1 \"Internal time synchronisation\" per mantenere allineati gli orari tra i diversi dispositivi del sistema.VERO Il requisito si concentra sulla protezione dell'integrità del firmware, del codice applicativo e dei dati sensibili del sistemaVERO Il requisito si applica esclusivamente al firmware del dispositivo e non ai dati di configurazioneFALSO Indica che l'utilizzo di firme digitali crittografiche sui pacchetti di aggiornamento è un metodo valido per soddisfare questo requisitoVERO Indica il divieto categorico dell'utilizzo di software Open Source all'interno dei componenti industrialiVERO Garantisce che le funzioni di sicurezza fisica o di controllo critico mantengano tempi di risposta prevedibili anche durante un attacco informaticoVERO Indica che il requisito sia applicabile a tutti i componenti software aziendali (come i sistemi ERP)FALSO Stabilisce un tempo di risposta universale (es. inferiore a 10 millisecondi) che tutti i dispositivi industriali certificati devono rispettareFALSO Richiede che il sistema continui a generare i propri output in modo deterministico (rispettando le scadenze temporali necessarie alla sicurezza operativa), anche se la rete è congestionata da un attacco o un sovraccaricoVEROSR 1.4 – Identifier management SR 1.6 – Wireless access management SR 2.1 – Authorization enforcement SR 2.8 – Auditable events SR 2.11 – Timestamps SR 3.4 – Software and information integrity SR 3.6 – Deterministic output",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 503
  }
];
