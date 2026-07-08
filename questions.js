// Cyber Security Exam Simulator - Database
const QUIZ_QUESTIONS = [
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 1
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 2
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 3
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 4
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 5
  },
  {
    "code": "M1.1.5.3",
    "question": "\"Morris Worm\"",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 6
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 7
  },
  {
    "code": "M1.3.1.3",
    "question": "Il livello 2 del",
    "options": [
      {
        "option_text": "Modello ISO/OSI Utilizza indirizzamento MAC Address",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 8
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 9
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 10
  },
  {
    "code": "M1.3.2_2.12",
    "question": "La subnet 145.13.24.64/15:",
    "options": [
      {
        "option_text": "Ha 131.072 di indirizzamenti disponibili",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di broadcast 145.13.255.255",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 11
  },
  {
    "code": "M1.3.3.7.1",
    "question": "Il Gateway:",
    "options": [
      {
        "option_text": "È un dispositivo hardware che funge da raccordo tra due reti, solitamente una rete remota e quella che la ospita",
        "answer": true
      },
      {
        "option_text": "È un convertitore di protocolli di rete, capace di unire due reti in modo che i dispositivi presenti su un dato network possano comunicare con quelli presenti in un altro",
        "answer": true
      },
      {
        "option_text": "Può essere realizzato da: Un router, un server, un firewall, ecc.",
        "answer": true
      },
      {
        "option_text": "Di solito non converte mai protocolli di rete",
        "answer": false
      },
      {
        "option_text": "Può realizzare la funzionalità NAT (Network Address Translation)",
        "answer": true
      },
      {
        "option_text": "Differentemente dal router ha il compito di gestire un traffico simile e connettere dispositivi che condividono un’interfaccia comune",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 12
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 13
  },
  {
    "code": "M1.3.4.11",
    "question": "La Tipologia di Rete MAN (Metropolitan Area Network)",
    "options": [
      {
        "option_text": "È una rete di telecomunicazione a banda larga, che collega più LAN geograficamente vicine",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 14
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 15
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 16
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 17
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 18
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 19
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 20
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 21
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 22
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 23
  },
  {
    "code": "M3.2.1_2.11",
    "question": "Il controllo ISO/IEC 27001:",
    "options": [
      {
        "option_text": "2022 \"Information security during disruption\" ovvero che l'organizzazione deve mantenere la sicurezza delle informazioni a un livello appropriato durante un'interruzione E' un controllo solo Preventivo",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 24
  },
  {
    "code": "M3.2.1_2.19",
    "question": "Il controllo ISO/IEC 27001:",
    "options": [
      {
        "option_text": "2022 \"Remote working\" per l'implementazione di misure di sicurezza quando si lavora da remoto Indica che, per il lavoro da remoto, devono essere implementate misure di sicurezza per proteggere le informazioni a cui si accede, che vengono elaborate o che vengono archiviate dal di fuori dei locali dell’organizzazione.",
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
        "option_text": "È un requisito Preventivo e Investigativo",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 25
  },
  {
    "code": "M3.2.6.12",
    "question": "Lo SCADA",
    "options": [
      {
        "option_text": "È l'acronimo di Supervisory Control and Data Acquisition",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 26
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 27
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 28
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 29
  },
  {
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
        "option_text": "Definire il percorso più sicuro per la comunicazione tra due nodi in rete",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 30
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 31
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 32
  },
  {
    "code": "M1.2.4.3.2",
    "question": "Il Furto di Identità Digitale",
    "options": [
      {
        "option_text": "È punito dal Codice Penale Italiano come “Sostituzione della propria all'altrui persona” e “Frode Informatica”",
        "answer": true
      },
      {
        "option_text": "Può essere associato al solo reato di “Truffa”",
        "answer": false
      },
      {
        "option_text": "Può avvenire mediante operazioni di Phishing",
        "answer": true
      },
      {
        "option_text": "È relativo all’uso illecito dell’insieme dei dati e delle informazioni che definiscono un individuo e costituiscono la rappresentazione virtuale dell'identità reale utilizzabile durante interazioni elettroniche",
        "answer": true
      },
      {
        "option_text": "È relativo ai soli dati biometrici che definiscono un individuo e costituiscono una delle rappresentazioni virtuali dell'identità reale utilizzabile durante interazioni elettroniche",
        "answer": false
      },
      {
        "option_text": "È un reato amministrativo secondo l’ordinamento italiano",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 33
  },
  {
    "code": "M1.3.1.7",
    "question": "Il livello 6 del",
    "options": [
      {
        "option_text": "Modello ISO/OSI Trasforma i dati forniti dalle applicazioni in un formato standardizzato",
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
        "option_text": "Utilizza tecniche di multiplazione (multiplexing)",
        "answer": false
      },
      {
        "option_text": "Si occupa di rendere compatibili le rappresentazioni dei dati negli scambi tra computer che utilizzano codifiche diverse",
        "answer": true
      },
      {
        "option_text": "Rende la comunicazione delle applicazioni indipendente dai sistemi operativi",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 34
  },
  {
    "code": "M1.3.1.16",
    "question": "Quali delle seguenti funzioni appartengono al livello ISO/OSI di Rete (3)",
    "options": [
      {
        "option_text": "Correggere gli errori mediante ritrasmissione",
        "answer": false
      },
      {
        "option_text": "Incapsulamento del Pacchetto",
        "answer": true
      },
      {
        "option_text": "Gestione Errore e Diagnostica",
        "answer": true
      },
      {
        "option_text": "Frammentazione e Riassemblaggio",
        "answer": true
      },
      {
        "option_text": "Gestione delle Connessioni",
        "answer": true
      },
      {
        "option_text": "Servizio orientato alla connessione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 35
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 36
  },
  {
    "code": "M1.3.2.9",
    "question": "Nella comunicazione con il protocollo Ethernet in caso di avvenuta collisione:",
    "options": [
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette una sequenza di jamming",
        "answer": true
      },
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette una sequenza composta dalla parte di pacchetto già trasmessa e un codice identificativo in coda al pacchetto",
        "answer": true
      },
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette e un codice identificativo in testa e la parte di pacchetto già trasmessa in coda al pacchetto",
        "answer": false
      },
      {
        "option_text": "La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione dopo un tempo pseudocasuale",
        "answer": true
      },
      {
        "option_text": "La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione con una frequenza fissa",
        "answer": false
      },
      {
        "option_text": "La stazione trasmittente interrompe le trasmissioni e attende sino a che tutte le trasmissioni sul bus siano ultimate",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 37
  },
  {
    "code": "M1.3.2_2.14",
    "question": "La subnet 132.234.110.173/12:",
    "options": [
      {
        "option_text": "Ha 4.096 indirizzamenti disponibili",
        "answer": false
      },
      {
        "option_text": "Ha come indirizzo di broadcast 132.239.255.255",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 38
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 39
  },
  {
    "code": "M2.1.2.4",
    "question": "Le aziende di produzione",
    "options": [
      {
        "option_text": "Hanno obiettivi primari legati alla stessa sopravvivenza dell’impresa",
        "answer": true
      },
      {
        "option_text": "Sono solo le aziende che assemblano direttamente i beni o forniscono direttamente i servizi",
        "answer": false
      },
      {
        "option_text": "Sono sia le aziende che producono direttamente beni o servizi sia quelle che creano valore aggiunto a beni e servizi già esistenti",
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 40
  },
  {
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
        "option_text": "Esegue anche la post analysis che consente di delineare la reale portata dell’incidente",
        "answer": true
      },
      {
        "option_text": "È un insieme di procedure documentate che descrivono in dettaglio i passaggi da intraprendere in ciascuna fase della risposta agli incidenti",
        "answer": true
      },
      {
        "option_text": "Se ben strutturato e documentato può non essere aggiornato frequentemente",
        "answer": false
      },
      {
        "option_text": "Dovrebbe includere linee guida per ruoli e responsabilità, piani di comunicazione e processi di risposta standardizzati",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 41
  },
  {
    "code": "M3.1.1.4",
    "question": "Quali dei seguenti sono Processi di Cyber Security?",
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
        "option_text": "La gestione delle vulnerabilità",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 42
  },
  {
    "code": "M3.2.1_1.4",
    "question": "L'area tematica dei requisiti ISO/IEC 27001 \"Supporto\" definisce che:",
    "options": [
      {
        "option_text": "L'organizzazione abbia le persone, le competenze, le infrastrutture e l'ambiente di lavoro necessari per supportare il SGSI",
        "answer": true
      },
      {
        "option_text": "Siano identificati i requisiti di competenza per il personale coinvolto nella gestione della sicurezza delle informazioni e assicurare che siano soddisfatti",
        "answer": true
      },
      {
        "option_text": "Il personale sia sesnibilizzato sulla politica di sicurezza delle informazioni, i contributi individuali alla sicurezza delle informazioni, e le implicazioni della mancata conformità ai requisiti del SGSI",
        "answer": true
      },
      {
        "option_text": "Siano stabiliti processi di comunicazione efficaci per garantire che le informazioni rilevanti sulla sicurezza siano condivise internamente ed esternamente",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 43
  },
  {
    "code": "M3.2.3.11",
    "question": "I Riferimenti Informativi nel Framework Core del NIST CSF",
    "options": [
      {
        "option_text": "Sono esaustivi, ovvero rappresentano regole precise da applicare.",
        "answer": false
      },
      {
        "option_text": "Sono collegamenti a fonti esterne che forniscono ulteriori dettagli e orientamenti su come implementare le attività di sicurezza descritte nelle sottocategorie",
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
        "option_text": "Sono obbligatori",
        "answer": false
      },
      {
        "option_text": "Forniscono un ponte tra le sottocategorie del framework e le pratiche di sicurezza specifiche del settore o della regolamentazione",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 44
  },
  {
    "code": "M3.2.6.25",
    "question": "Zone e conduit secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "Sono elementi chiave per la segmentazione della rete e la gestione della sicurezza negli ambienti di controllo industriale",
        "answer": true
      },
      {
        "option_text": "Sono elementi chiave per la segmentazione della rete e la gestione della sicurezza anche fuori dagli ambiti industriali",
        "answer": true
      },
      {
        "option_text": "Aiutano a ridurre l'impatto di eventuali violazioni della sicurezza, limitando la propagazione di attacchi.",
        "answer": true
      },
      {
        "option_text": "Sono definiti mediante un approccio basato sul rischio, valutando cioè le minacce e i potenziali impatti di ogni area",
        "answer": true
      },
      {
        "option_text": "Sono definiti mediante un approccio basato unicamente sul rischio di perdita dei dati sensibili",
        "answer": false
      },
      {
        "option_text": "Sono definiti indipendentemente dall' inventario degli asset e dei loro ruoli all'interno delle rete industriale.",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 45
  },
  {
    "code": "M3.2.6.26",
    "question": "Per cosa differiscono i sistemi di controllo e automazione industriale (IACS) rispetto ai sistemi IT?",
    "options": [
      {
        "option_text": "I sistemi IACS mirano a controllare e automatizzare processi fisici, i sistemi IT, invece, si concentrano sulla gestione dell'informazione e della comunicazione",
        "answer": true
      },
      {
        "option_text": "I sistemi IACS hanno un funzionamento real time e deterministico, quasi mai i sistemi IT hanno caratteristiche così stringenti.",
        "answer": true
      },
      {
        "option_text": "I sistemi IACS hanno sistemi operativi standard MS Windows o Linux i sistemi IT solamente MS Windows",
        "answer": false
      },
      {
        "option_text": "I rischi di Cybersecurity relativi agli IACS possono riguardare la business continuity e la safety, i sistemi IT hanno come rischi primari la perdita della triade CIA",
        "answer": true
      },
      {
        "option_text": "I sistemi IACS necessitano di hardware industriale dedicato e specifico, almento per la parte di controllo, i sistemi di IT utilizzano prevalentemente hardware di mercato",
        "answer": true
      },
      {
        "option_text": "Gli ambienti di configurazione e i linguaggi di programmazione per entrambe le tipologie dei sistemi sono identici.",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 46
  },
  {
    "code": "M3.3.1.4",
    "question": "Perché è importante la regolamentazione GDPR per l’Information Technology?",
    "options": [
      {
        "option_text": "Perché i sistemi informativi conservano, gestiscono e permettono di trasferire i dati riservati e sensibili delle persone",
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
        "option_text": "Perché una gestione dei dati senza regole può mettere a repentaglio le regole principali del vivere civile ed è quindi necessario regolamentare la gestione dei dati: ovviamente solamente l’autorizzazione al trattamento e al trasferimento",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 47
  },
  {
    "code": "M3.3.4.2",
    "question": "Le fasi dell'Informatica",
    "options": [
      {
        "option_text": "Forense Nella fase Identificazione si identificano i dati digitali rilevanti, operando sui dispositivi di memorizzazione dei dati digitali",
        "answer": true
      },
      {
        "option_text": "Nella fase di Raccolta si acquisicono i sistemi che contengono i dati e si procede alla messa in sicurezza dei supporti di memorizzazione.",
        "answer": true
      },
      {
        "option_text": "Nella fase di Acquisizione si realizza una copia di tutti i dati, tramite appositi strumenti è possibile produrre una copia \"legale\" dei dati digitali che si intende utilizzare come prova",
        "answer": true
      },
      {
        "option_text": "Nella fase di Analisi si estraggono da tutti dati acquisiti solo quelli rilevanti, aggregandoli e valutando le strategie a sostegno di un’ipotesi accusatoria o di una strategia difensiva",
        "answer": true
      },
      {
        "option_text": "Nella fase di Elaborazione si estraggono le informazioni dai dati \"grezzi\" come completamento della fase di analisi",
        "answer": false
      },
      {
        "option_text": "Nella fase di Presentazione si produce una relazione tecnica per presentare ciò che è emerso nel corso dell’attività tecnica in formato \"legale\"",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 48
  },
  {
    "code": "M3.3.6.10",
    "question": "Quali tipologie di Dati sono previsti dal Regolamento Europeo 2016/679 GDPR?",
    "options": [
      {
        "option_text": "Dati personali, ovvero le informazioni relative a persona fisica identificata o identificabile",
        "answer": true
      },
      {
        "option_text": "Dati personali, ovvero le informazioni relative a persona fisica identificabile anche indirettamente (ad esempio mediante la raccolta di varie informazioni che possano identificarla)",
        "answer": true
      },
      {
        "option_text": "Dati personali particolari, come l'origine razziale o etnica, le opinioni politiche, le convinzioni religiose o filosofiche e altro",
        "answer": true
      },
      {
        "option_text": "Dati personali particolari (o sensibili secondo il codice italiano), come i riferimenti dei dati bancari o i dati finanziari in genere",
        "answer": false
      },
      {
        "option_text": "Dati personali relativi a condanne penali o reati, con il controllo dell'Autorità Pubblica o autorizzato dal Diritto dell'UE",
        "answer": true
      },
      {
        "option_text": "Dati di persone giuriche con riferimenti all'interno dell'Unione Europea",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 49
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 50
  },
  {
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
        "option_text": "Non è responsabile delle misure di sicurezza per proteggere i dati",
        "answer": false
      },
      {
        "option_text": "È il titolare che stabilisce le finalità del trattamento, cioè per quale scopo vengono raccolti e utilizzati i dati",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 51
  },
  {
    "code": "M3.4.3.9",
    "question": "La valutazione del",
    "options": [
      {
        "option_text": "Rischio Viene effettuata facendo riferimento a classi omogenee per tipologia",
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
        "option_text": "Si effettua solamente nell'ambito della sicurezza informatica",
        "answer": false
      },
      {
        "option_text": "Viene rappresentata graficamente con un diagramma multidimensionale (X,Y,Z) con gradazioni di colori differenti",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 52
  },
  {
    "code": "M3.4.4.3",
    "question": "I sistemi IT e OT differiscono (dal punto di vista dei fattori critici per la Cyber Security) per:",
    "options": [
      {
        "option_text": "Perdita o manomissione di dati e informazioni per IT e business continuity e sicurezza fisica per l'OT",
        "answer": true
      },
      {
        "option_text": "Per le possibilità di intervento: senza grossi vincoli temporali per l'IT con grossi vincoli legati al continuità del processo per l'OT",
        "answer": true
      },
      {
        "option_text": "Per le modalità e i tempi di risposta: non deterministiche-non real time per l'IT, deterministiche- real time per l'OT",
        "answer": true
      },
      {
        "option_text": "Per la tipologia dei sistemi operativi: standard di mercato per l'IT e prevalentemente non standard e real time per l'OT",
        "answer": true
      },
      {
        "option_text": "Per le possibili conseguenze in caso di incidenti che nel caso dell'OT può portare, nel caso peggiore, alla perdita di dati",
        "answer": false
      },
      {
        "option_text": "Per il livello di disponibilità necessario: molto elevato per l'IT, più contenuto per l'OT",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 53
  },
  {
    "code": "M3.4.4.5",
    "question": "Si parla di",
    "options": [
      {
        "option_text": "Convergenza IT-OT Per identificare il tentativo di ridurre il GAP organizzativo, tecnologico e culturale tra l'IT e l'OT.",
        "answer": true
      },
      {
        "option_text": "Nelle organizzazioni in cui è necessaria una integrazione informatica tra il governo dell''azienda e la produzione",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 54
  },
  {
    "code": "M3.4.5.4",
    "question": "L’Endpoint",
    "options": [
      {
        "option_text": "Protection Realizza il tunneling nella comunicazione dall’interno all’esterno dell’azienda",
        "answer": false
      },
      {
        "option_text": "Si riferisce alla protezione di qualsiasi dispositivo o connessione che abbia accesso alla rete aziendale",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 55
  },
  {
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
        "option_text": "Perché lo impongono le normative europee",
        "answer": false
      },
      {
        "option_text": "Perché è necessario aggiornare costantemente l'impatto che può avere l'IT con la business continuity",
        "answer": true
      },
      {
        "option_text": "Perché il budget di spesa IT deriva dal valore che l'IT riesce esprimere nel Piano Strategico aziendale",
        "answer": true
      },
      {
        "option_text": "Perché il Portfolio IT (insieme degli asset IT) deve allineare la strategia ICT",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 56
  },
  {
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
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 57
  },
  {
    "code": "M4.2.2.3",
    "question": "Perché è importante formare i dipendenti di un'azienda sul rischio di cybersecurity?",
    "options": [
      {
        "option_text": "Perché renderli consapevoli dei rischi degli incidenti e attacchi informatici è la principale arma di difesa che può essere messa in campo",
        "answer": true
      },
      {
        "option_text": "Perché le tecnologie di protezione informatica non sono strumenti isolati ma devono essere di supporto alle persone che devono imparare a conoscerli",
        "answer": true
      },
      {
        "option_text": "Perché le minacce evolvono costantemente e le vulnerabilità non sono solo tecnologiche",
        "answer": true
      },
      {
        "option_text": "Perché permette di ridurre drasticamente gli investimenti nelle tecnologie di protezione",
        "answer": false
      },
      {
        "option_text": "Perché la sicurezza informatica non è appannaggio del solo ufficio IT: ogni funzione o reparto devono essere coivolti",
        "answer": true
      },
      {
        "option_text": "Perché permette all'organizzazione di ridurre il personale nel reparto IT",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 58
  },
  {
    "code": "M4.2.3.10",
    "question": "Per ridurre i dati archiviati in cloud un'azienda riduce la frequenza di archiviazione da 1 secondo a 2 minuti. Quanti dati trasmetterà rispetto a prima?",
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
        "option_text": "Una quantità economicamente non rilevante",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 59
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 60
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 61
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 62
  },
  {
    "code": "M1.1.3.2.1",
    "question": "Il Routing Statico",
    "options": [
      {
        "option_text": ", prevede che le rotte debbano essere configurate manualmente e non si aggiornino automaticamente in caso di guasto",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 63
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 64
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 65
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 66
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 67
  },
  {
    "code": "M1.3.2_2.9",
    "question": "L’indirizzo di Broadcast della sottorete 243.123.23.45/29 è:",
    "options": [
      {
        "option_text": "243.123.23.40",
        "answer": false
      },
      {
        "option_text": "123.23.47",
        "answer": true
      },
      {
        "option_text": "123.23.45",
        "answer": false
      },
      {
        "option_text": "123.23.41",
        "answer": false
      },
      {
        "option_text": "123.23.46",
        "answer": false
      },
      {
        "option_text": "255.255.248",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 68
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 69
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 70
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 71
  },
  {
    "code": "M2.1.3.6",
    "question": "Quale dei seguenti servizi può erogare un’azienda di tipo",
    "options": [
      {
        "option_text": "Utility Fornitura di acqua e smaltimento acque reflue",
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 72
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 73
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 74
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 75
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 76
  },
  {
    "code": "M3.2.1_2.20",
    "question": "Il controllo ISO/IEC 27001:",
    "options": [
      {
        "option_text": "2022 \"Data Masking\" per l'implementazione del mascheramento dei dati Indica che Il mascheramento dei dati ha come unico vincolo la legislazione internazionale applicabile",
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
        "option_text": "È un requisito Preventivo e Investigativo",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 77
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 78
  },
  {
    "code": "M3.2.3.2.2",
    "question": "Il Framework Core del NIST CSF E' organizzato in cinque Funzioni principali:",
    "options": [
      {
        "option_text": "Identify, Protect, Detect, Respond, Recover.",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 79
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 80
  },
  {
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
        "option_text": "Fa parte della serie di pubblicazioni speciali relative alla computer security",
        "answer": true
      },
      {
        "option_text": "Fa parte della serie di pubblicazioni speciali che propongono guide pratiche e usabili di",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 81
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 82
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 83
  },
  {
    "code": "M3.3.5_1.7",
    "question": "La nuova direttiva",
    "options": [
      {
        "option_text": "NIS 2 Deve essere recepita da ciascun membro dell'unione",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 84
  },
  {
    "code": "M3.3.6.7",
    "question": "Il regolamento",
    "options": [
      {
        "option_text": "GDPR (General Data Protection Regulation) Disciplina solamente le persone fisiche",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 85
  },
  {
    "code": "M3.3.7.3",
    "question": "Il Titolo II del Regolamento Europeo 2019/881 (Cybersecurity Act)",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 86
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 87
  },
  {
    "code": "M4.1.1.18",
    "question": "La Struttura Organizzativa",
    "options": [
      {
        "option_text": "permette di Costruire una \"spina dorsale\" dell’impresa attraverso la sola analisi delle attività attuali dell'organizzazione",
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
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 88
  },
  {
    "code": "M4.1.5.5",
    "question": "Il CISO (Chief Information Security Officer)",
    "options": [
      {
        "option_text": "È il direttore aziendale della sicurezza informatica",
        "answer": true
      },
      {
        "option_text": "È una figura la cui responsabilità è di sviluppare una strategia aziendale perché i beni d'informazione e le tecnologie aziendali siano adeguatamente protetti",
        "answer": true
      },
      {
        "option_text": "Ha tra le competenze una forte conoscenza dei processi produttivi industriali",
        "answer": false
      },
      {
        "option_text": "Ha tra le competenze una forte leadership in modo da interagire bene con il consiglio di amministrazione",
        "answer": true
      },
      {
        "option_text": "Ha tra le competenze il pensiero strategico: per generare e implementare idee innovative e in linea con gli obiettivi aziendali",
        "answer": true
      },
      {
        "option_text": "Non necessità della conoscenza delle regolamentazioni in vigore nei singoli stati perché collabora con il DPO",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 89
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 90
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 91
  },
  {
    "code": "M1.1.3.6",
    "question": "",
    "options": [
      {
        "option_text": "Il Subnetting È una suddivisione dello spazio di indirizzi riservato ad una rete",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 92
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 93
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 94
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 95
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 96
  },
  {
    "code": "M1.3.1.4",
    "question": "Il livello 3 del",
    "options": [
      {
        "option_text": "Modello ISO/OSI Rende i livelli superiori (4,5...) indipendenti dai mezzi fisici",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 97
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 98
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 99
  },
  {
    "code": "M1.3.2.8",
    "question": "Un cavo in fibra ottica monomodale Prevede una sola modalità di propagazione:",
    "options": [
      {
        "option_text": "un'unica lunghezza d'onda della luce nel nucleo della fibra",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 100
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 101
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 102
  },
  {
    "code": "M1.3.2_2.16",
    "question": "L'indirizzo di",
    "options": [
      {
        "option_text": "Broadcast Serve per inviare un messaggio a tutti gli host di una stessa rete",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 103
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 104
  },
  {
    "code": "M1.3.4.5",
    "question": "In una topologia di rete ad",
    "options": [
      {
        "option_text": "Anello L'informazione trasmessa può viaggiare in entrambi i versi/sensi dell'anello per raggiungere una certa destinazione",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 105
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 106
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 107
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 108
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 109
  },
  {
    "code": "M3.1.1.8",
    "question": "Quali sono le possibili cause di un",
    "options": [
      {
        "option_text": "Incidente Informatico Vulnerabilità informatiche",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 110
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 111
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 112
  },
  {
    "code": "M3.2.1_2.14",
    "question": "Il controllo ISO/IEC 27001:",
    "options": [
      {
        "option_text": "2022 “Data leakage prevention” ovvero orientato alla prevenzione della divulgazione deliberata di informazioni riservate Indica che le misure di prevenzione della fuga di dati si devono applicare ai sistemi, alle reti e a qualsiasi altro dispositivo che tratta, memorizza o trasmette informazioni sensibili",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 113
  },
  {
    "code": "M3.2.4.1",
    "question": "I Documenti",
    "options": [
      {
        "option_text": "NIST Special Publications sono raggruppati nelle serie SP 800 Computer security",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 114
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 115
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 116
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 117
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 118
  },
  {
    "code": "M4.3.1.2",
    "question": "Una grande",
    "options": [
      {
        "option_text": "Azienda Multiutility Si occupa di fornire un solo servizio essenziale, ad esempio solo elettricità, in maniera monopolistica",
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
        "option_text": "E' sempre un'azienda privata senza alcuna partecipazione pubblica",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 119
  },
  {
    "code": "M1.1.1.1",
    "question": "Quali dei seguenti componenti erano costituenti il telegrafo? (barrare solo le risposte giuste)",
    "options": [
      {
        "option_text": "Un cavo di trasmissione",
        "answer": true
      },
      {
        "option_text": "Una batteria",
        "answer": true
      },
      {
        "option_text": "Un’antenna",
        "answer": false
      },
      {
        "option_text": "Una valvola rilevatrice",
        "answer": false
      },
      {
        "option_text": "Un selettore a due posizioni",
        "answer": true
      },
      {
        "option_text": "Una elettrocalamita",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 120
  },
  {
    "code": "M1.1.1.2",
    "question": "Quali dei seguenti componenti erano costituenti il trasmettitore di G.Marconi del 1.900?",
    "options": [
      {
        "option_text": "Un circuito di amplificazione di tensione",
        "answer": true
      },
      {
        "option_text": "Una bobina",
        "answer": true
      },
      {
        "option_text": "Un triodo",
        "answer": false
      },
      {
        "option_text": "Una valvola rivelatrice",
        "answer": false
      },
      {
        "option_text": "Una capacità varabile",
        "answer": false
      },
      {
        "option_text": "Un diodo",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 121
  },
  {
    "code": "M1.1.1.3",
    "question": "Cos’è la crittografia?",
    "options": [
      {
        "option_text": "È una tecnica di rappresentazione",
        "answer": true
      },
      {
        "option_text": "È una tecnica di trasmissione",
        "answer": false
      },
      {
        "option_text": "È una tecnica per impedire che l’informazione contenuta in un messaggio possa essere recepita da chi non ha la chiave di decriptazione.",
        "answer": true
      },
      {
        "option_text": "È una tecnica per introdurre errore nella comunicazione",
        "answer": false
      },
      {
        "option_text": "È una tecnica per rendere più sicura la trasmissione dei dati o dei segnali.",
        "answer": true
      },
      {
        "option_text": "È una tecnica per cifrare trasmissioni analogiche.",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 122
  },
  {
    "code": "M1.1.1.4",
    "question": "La cifratura della parola “Mondo” con il cifrario di Cesare che parola genera?",
    "options": [
      {
        "option_text": "pragr",
        "answer": false
      },
      {
        "option_text": "rpqga",
        "answer": false
      },
      {
        "option_text": "prqgr",
        "answer": true
      },
      {
        "option_text": "ptugt",
        "answer": false
      },
      {
        "option_text": "praor",
        "answer": false
      },
      {
        "option_text": "rgkig",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 123
  },
  {
    "code": "M1.1.1.5",
    "question": "La macchina enigma era?",
    "options": [
      {
        "option_text": "Un dispositivo elettronico",
        "answer": false
      },
      {
        "option_text": "Un dispositivo elettromeccanico",
        "answer": true
      },
      {
        "option_text": "Un dispositivo a scambiatori interscambiabili",
        "answer": true
      },
      {
        "option_text": "Un dispositivo di criptazione con oltre 1.5*1020 possibili combinazioni",
        "answer": true
      },
      {
        "option_text": "Un dispositivo di criptazione con oltre 1.5*1010 possibili combinazioni",
        "answer": false
      },
      {
        "option_text": "Un dispositivo di criptazione e di decriptazione Mario Testino",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 124
  },
  {
    "code": "M1.1.1.6",
    "question": "Avendo a disposizioni 5 rotori e dovendone selezionare 3 per il corretto funzionamento della macchina Enigma quant’è il numero massimo delle combinazioni possibili dei rotori?",
    "options": [
      {
        "option_text": "26",
        "answer": false
      },
      {
        "option_text": "66",
        "answer": false
      },
      {
        "option_text": "60",
        "answer": true
      },
      {
        "option_text": "86",
        "answer": false
      },
      {
        "option_text": "28",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 125
  },
  {
    "code": "M1.1.2.1",
    "question": "La modulazione telefonica consente:",
    "options": [
      {
        "option_text": "Di adattare il segnale elettrico da trasmettere al canale",
        "answer": true
      },
      {
        "option_text": "Di adattare la frequenza del segnale da trasmettere con la banda del canale",
        "answer": true
      },
      {
        "option_text": "Di adattare la banda del canale con la frequenza del segnale da trasmettere.",
        "answer": false
      },
      {
        "option_text": "Di trasmettere segnali multipli su un unico canale trasmissivo",
        "answer": true
      },
      {
        "option_text": "Di trasmettere segnali su più canali contemporaneamente",
        "answer": false
      },
      {
        "option_text": "Di permettere ad un’onda elettromagnetica di un segnale di arrivare integra alla destinazione.",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 126
  },
  {
    "code": "M1.1.2.2",
    "question": "Le onde lunghe (ovvero le onde a bassa frequenza):",
    "options": [
      {
        "option_text": "Riescono a trasmettere maggiori informazioni rispetto alle onde corte",
        "answer": false
      },
      {
        "option_text": "Riescono a trasmettere minori informazioni rispetto alle onde corte",
        "answer": true
      },
      {
        "option_text": "Hanno bisogno di una potenza più elevata rispetto alle onde corte per essere trasmesse",
        "answer": false
      },
      {
        "option_text": "Hanno bisogno di una potenza meno elevata rispetto alle onde corte per essere trasmesse",
        "answer": true
      },
      {
        "option_text": "Possono trasmettere segnali sino a 1000 chilometri",
        "answer": true
      },
      {
        "option_text": "Si misurano in KHz",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 127
  },
  {
    "code": "M1.1.2.3",
    "question": "La PAM (Pulse Amplitude Modulation) è:",
    "options": [
      {
        "option_text": "Una modulazione analogica",
        "answer": false
      },
      {
        "option_text": "Una modulazione digitale",
        "answer": true
      },
      {
        "option_text": "Una modulazione digitale a traslazione di ampiezza",
        "answer": true
      },
      {
        "option_text": "Una modulazione di ampiezza",
        "answer": false
      },
      {
        "option_text": "Una modulazione a traslazione di frequenza",
        "answer": false
      },
      {
        "option_text": "Una modulazione digitale con banda a doppio lato",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 128
  },
  {
    "code": "M1.1.2.4",
    "question": "Cos’è la larghezza di banda di un canale di comunicazione?",
    "options": [
      {
        "option_text": "La misura dell'ampiezza della gamma di frequenze che possono passare per quel canale",
        "answer": true
      },
      {
        "option_text": "Un parametro inversamente proporzionale alla quantità di dati che possono essere trasmessi in un canale nell’unità di tempo",
        "answer": false
      },
      {
        "option_text": "Un parametro proporzionale alla quantità di dati che possono essere trasmessi in un canale nell’unità di tempo",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 129
  },
  {
    "code": "M1.2.1.1",
    "question": "I Cybercriminali di solito:",
    "options": [
      {
        "option_text": "Sono tendenzialmente non violenti ma possono nutrire forti risentimenti verso l’establishment",
        "answer": true
      },
      {
        "option_text": "Hanno caratteristiche del sociopatico",
        "answer": true
      },
      {
        "option_text": "Hanno buone capacità di organizzazione e pianificazione",
        "answer": true
      },
      {
        "option_text": "Lavorano in gruppi molto coesi",
        "answer": false
      },
      {
        "option_text": "Hanno un livello socioculturale non sempre elevato",
        "answer": false
      },
      {
        "option_text": "Hanno scarsa tendenza a percepirsi come criminale",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 130
  },
  {
    "code": "M1.2.1.2",
    "question": "Le vittime di attacchi cyber di solito:",
    "options": [
      {
        "option_text": "Sfruttano molto gli automatismi delle applicazioni web, senza fare valutazioni approfondite",
        "answer": true
      },
      {
        "option_text": "Hanno molta fiducia del computer perché non da contatto fisico con le persone",
        "answer": true
      },
      {
        "option_text": "Manifestano altruismo e lo vogliono dimostrare",
        "answer": false
      },
      {
        "option_text": "Hanno paura e stress che rivelano disagio personale e necessità di aiuto",
        "answer": true
      },
      {
        "option_text": "Sono sole e hanno necessità di relazioni interpersonali",
        "answer": true
      },
      {
        "option_text": "Hanno voglia di visibilità, ricchezza e fama senza grosso sforzo.",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 131
  },
  {
    "code": "M1.2.1.3",
    "question": "Il social engineering:",
    "options": [
      {
        "option_text": "Sono attività finalizzate ad impossessarsi di informazioni personali per scopi estorsivi",
        "answer": true
      },
      {
        "option_text": "Sono tecniche che rendono più facile ottenere credenziali personali di accesso rispetto a tecniche di hacking",
        "answer": true
      },
      {
        "option_text": "Sono tecniche che ingegnerizzano attacchi persistenti",
        "answer": false
      },
      {
        "option_text": "Può permettere l’installazione di software dannosi",
        "answer": true
      },
      {
        "option_text": "Sfrutta la vanità, l'avidità, la curiosità, l'altruismo delle persone",
        "answer": true
      },
      {
        "option_text": "Qualcosa che può essere rimosso con un buon antivirus",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 132
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
        "option_text": "Si è evoluto in",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 133
  },
  {
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
        "option_text": "È un’azienda appartenente al terziario in genere",
        "answer": false
      },
      {
        "option_text": "In europa rientra verosimilmente nella tassonomia dei soggetti altamente critici e critici presente nella normativa NIS 2VERO Italiana, per tipologia, è sicuramente critica anche in un paese extra-europeo",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 134
  },
  {
    "code": "M1.2.3.2",
    "question": "Quali di questi sono i maggiori rischi percepite legati ad un Attacco Cyber",
    "options": [
      {
        "option_text": "Fake news",
        "answer": false
      },
      {
        "option_text": "Danno di immagine (brand reputation)",
        "answer": true
      },
      {
        "option_text": "Furto dei dati e della proprietà intellettuale",
        "answer": true
      },
      {
        "option_text": "Reati amministrativi",
        "answer": false
      },
      {
        "option_text": "Business Continuity",
        "answer": true
      },
      {
        "option_text": "Danno alla salute pubblica",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 135
  },
  {
    "code": "M1.2.3.3",
    "question": "Un attacco alla Supply Chain",
    "options": [
      {
        "option_text": "Può essere un attacco diretto ad un’azienda produttrice che rifornisce un’azienda bersaglio dell’attacco.",
        "answer": true
      },
      {
        "option_text": "Un attacco indiretto ad una azienda bersaglio",
        "answer": true
      },
      {
        "option_text": "Un attacco ad un’azienda produttrice di materie prime",
        "answer": false
      },
      {
        "option_text": "Un attacco multiplo ad aziende fornitrici un’azienda obiettivo",
        "answer": true
      },
      {
        "option_text": "Un attacco ad un cliente di un’azienda bersaglio",
        "answer": true
      },
      {
        "option_text": "Un attacco ad un’azienda produttrice di un componente in regime di monopolio",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 136
  },
  {
    "code": "M1.2.4.1",
    "question": "Gli attacchi opportunistici",
    "options": [
      {
        "option_text": "Sono attacchi che hanno una durata limitata nel tempo",
        "answer": true
      },
      {
        "option_text": "Sfruttano sempre vulnerabilità standardizzate (CVE)",
        "answer": false
      },
      {
        "option_text": "Hanno obiettivi prevalentemente economici",
        "answer": true
      },
      {
        "option_text": "Possono chiedere il riscatto dopo aver bloccato dei file di sistema",
        "answer": true
      },
      {
        "option_text": "Sono un fenomeno in crescita negli ultimi anni",
        "answer": true
      },
      {
        "option_text": "Possono sfruttare porte aperte o non configurate",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 137
  },
  {
    "code": "M1.2.4.2",
    "question": "Gli attacchi di tipo DoS",
    "options": [
      {
        "option_text": "Provocano l’esaurimento delle risorse di sistema",
        "answer": true
      },
      {
        "option_text": "Sono attacchi in cui l’aggressore cerca di impedire agli utenti di accedere ad una rete o alle risorse di un computer.",
        "answer": true
      },
      {
        "option_text": "Possono avere caratteristiche distribuite (ovvero possono essere provenienti da più computer)",
        "answer": true
      },
      {
        "option_text": "Si possono verificare accidentalmente",
        "answer": true
      },
      {
        "option_text": "Sfruttano tipicamente la latenza di rete",
        "answer": false
      },
      {
        "option_text": "Possono bombardare i server della vittima con enormi quantità di messaggi",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 138
  },
  {
    "code": "M1.2.4.3",
    "question": "Il Furto di Identità Digitale",
    "options": [
      {
        "option_text": "È un reato secondo l’ordinamento italiano",
        "answer": true
      },
      {
        "option_text": "È relativo all’uso illecito dell’insieme dei dati e delle informazioni che definiscono un individuo e costituiscono la rappresentazione virtuale dell'identità reale utilizzabile durante interazioni elettroniche.",
        "answer": true
      },
      {
        "option_text": "È relativo all’uso illecito dell'insieme dei dati e delle informazioni che definiscono un individuo e costituiscono la rappresentazione fisica utilizzabile durante interazioni elettroniche.",
        "answer": false
      },
      {
        "option_text": "È relativo all'insieme dei dati e delle informazioni che definiscono un individuo e costituiscono una o delle rappresentazioni virtuali dell'identità reale utilizzabile durante interazioni elettroniche.",
        "answer": false
      },
      {
        "option_text": "Può essere associato al reato di “Frode Informatica” secondo l’art. 494 del CP",
        "answer": true
      },
      {
        "option_text": "Può essere associato al reato di “Frode Informatica” secondo l’art. 640 del CP Mario Testino",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 139
  },
  {
    "code": "M1.2.4.4",
    "question": "Cos’è un APT?",
    "options": [
      {
        "option_text": "Una minaccia persistente e anonima",
        "answer": false
      },
      {
        "option_text": "Una minaccia persistente e avanzata",
        "answer": true
      },
      {
        "option_text": "Una minaccia portata avanti da un avversario dotato di notevole bagaglio tecnico e grandi risorse",
        "answer": true
      },
      {
        "option_text": "Un potenziale atto di guerra",
        "answer": true
      },
      {
        "option_text": "Di solito è organizzata da singoli o da piccole organizzazioni",
        "answer": false
      },
      {
        "option_text": "Una minaccia portata avanti per periodi di tempo molto lunghi e che può sfruttare vettori di attacco multipli.",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 140
  },
  {
    "code": "M1.2.4.5",
    "question": "Cryptojacking",
    "options": [
      {
        "option_text": "È una minaccia che utilizza le risorse della macchina per “generare” criptovalute",
        "answer": true
      },
      {
        "option_text": "È una minaccia che utilizza le risorse della macchina per criptare dei file",
        "answer": false
      },
      {
        "option_text": "Si tratta di una minaccia in grado di infiltrarsi nei browser web e di compromettere ogni tipo di dispositivo informatico",
        "answer": true
      },
      {
        "option_text": "Il funzionamento sfrutta la tecnologia Blockchain e i meccanismi alla base delle criptovalute",
        "answer": true
      },
      {
        "option_text": "Il funzionamento sfrutta il meccanismo di compensazione dei “Miners”",
        "answer": true
      },
      {
        "option_text": "Si tratta di una minaccia in grado di infiltrarsi nei DNS e di compromettere solo i server.",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 141
  },
  {
    "code": "M1.2.4.6",
    "question": "Phishing",
    "options": [
      {
        "option_text": "È un illecito civile e penale secondo la legge Italiana",
        "answer": true
      },
      {
        "option_text": "È un illecito civile ma non penale secondo la legge italiana",
        "answer": false
      },
      {
        "option_text": "Consiste in una truffa su internet attraverso la quale si cerca di ingannare la vittima con lo scopo di carpire informazioni sensibili",
        "answer": true
      },
      {
        "option_text": "Può avvenire attraverso una mail realizzata appositamente per favorire l'inserimento di informazioni personali",
        "answer": true
      },
      {
        "option_text": "Consiste nell'impersonare qualcuno per ottenere l'accesso a dati privilegiati",
        "answer": false
      },
      {
        "option_text": "Si realizza offrendo qualcosa al fine di consentire il download di un file dannoso",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 142
  },
  {
    "code": "M1.2.4.7",
    "question": "Gli attacchi ransomware",
    "options": [
      {
        "option_text": "Si realizzano, ad esempio, criptando i files di un dispositivo, richiedendo un riscatto da pagare per rimuovere la limitazione",
        "answer": true
      },
      {
        "option_text": "Sono di solito attacchi mirati e persistenti",
        "answer": false
      },
      {
        "option_text": "Sono, di solito, automatizzati e indirizzati verso target multipli",
        "answer": true
      },
      {
        "option_text": "Una volta infettato un computer tendono a propagarsi all’interno della rete LAN.",
        "answer": true
      },
      {
        "option_text": "Sono di solito attacchi opportunistici",
        "answer": true
      },
      {
        "option_text": "Una volta infettato il computer tendono a propagarsi all’esterno attraverso e-mail autogenerate.",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 143
  },
  {
    "code": "M1.3.1.1",
    "question": "Il Modello ISO/OSI",
    "options": [
      {
        "option_text": "Il modello è stato realizzato negli anni Settanta da OSI (Open Systems Interconnect)",
        "answer": true
      },
      {
        "option_text": "Il modello è stato realizzato negli anni Settanta da ISO (International Organization for Standardization)",
        "answer": false
      },
      {
        "option_text": "Il modello è stato adottato per la prima volta nel 1978. 4. Il modello è stato realizzato per far fronte alla crescente necessità di standardizzazione dei dispositivi in rete 5. È costituito da una “pila” o “stack” di livelli 6. È costituito da una “coda” o “queue” di fasi Mario Testino",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 144
  },
  {
    "code": "M1.3.1.2",
    "question": "Il livello 1 del Modello ISO/OSI",
    "options": [
      {
        "option_text": "Si occupa della codifica dei bit e dei segnali elettrici di trasmissione",
        "answer": true
      },
      {
        "option_text": "Il suo obiettivo è quello di gestire il mezzo trasmissivo (cavo coassiale, fibra ottica, doppini telefonici, ecc.)",
        "answer": true
      },
      {
        "option_text": "È un livello logico",
        "answer": false
      },
      {
        "option_text": "Ha la funzione di mettere in comunicazione il sistema di elaborazione al canale di comunicazione",
        "answer": true
      },
      {
        "option_text": "Genera messaggi non strutturati",
        "answer": true
      },
      {
        "option_text": "Permette ai livelli superiori l’indipendenza dai mezzi fisici",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 145
  },
  {
    "code": "M1.3.1.5",
    "question": "Il livello 4 del",
    "options": [
      {
        "option_text": "Modello ISO/OSI Si occupa del Trasporto dei dati mediante specifici protocolli",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 146
  },
  {
    "code": "M1.3.1.6",
    "question": "Il livello 5 del Modello ISO/OSI",
    "options": [
      {
        "option_text": "Definisce le regole per aprire e chiudere una connessione logica",
        "answer": true
      },
      {
        "option_text": "Coordina il dialogo tra utenti basandosi sul servizio del livello di trasporto",
        "answer": true
      },
      {
        "option_text": "Permette agli utenti di stabilire dei collegamenti logici o sessioni di lavoro che consentono il corretto trasferimento di informazioni",
        "answer": true
      },
      {
        "option_text": "Utilizza il protocollo IP per la comunicazione",
        "answer": false
      },
      {
        "option_text": "Permette ai processi di dividere (logicamente) il flusso dati in unità più piccole in modo che, in caso di interruzione della sessione, non sia necessario inviare nuovamente tutto il flusso ma solo una parte.",
        "answer": true
      },
      {
        "option_text": "Gestisce l’instradamento o Routing Mario Testino",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 147
  },
  {
    "code": "M1.3.1.9",
    "question": "La comunicazione logica tra due Host",
    "options": [
      {
        "option_text": "Può avvenire tra tutti i livelli dello stack ISO/OSI",
        "answer": false
      },
      {
        "option_text": "Avviene solo tra livelli omologhi dello stack ISO/OSI",
        "answer": true
      },
      {
        "option_text": "Utilizza sempre fisicamente il livello 1",
        "answer": true
      },
      {
        "option_text": "Percorre gerarchicamente lo stack in discesa e salita rispettivamente dal mittente al destinatario.",
        "answer": true
      },
      {
        "option_text": "Si realizza anche fisicamente tra livelli omologhi dello stack ISO/OSI",
        "answer": false
      },
      {
        "option_text": "Semplifica la comunicazione tra due Host",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 148
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
        "option_text": "Permette ad ogni checkpoint che entrambi gli host effettuino il backup dei dati, salvino la configurazione della rete e del clock, ed annotino il punto in cui è arrivata la conversazione",
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
    "id": 149
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 150
  },
  {
    "code": "M1.3.1.12",
    "question": "L’incapsulamento",
    "options": [
      {
        "option_text": "Introduce un “Header” (ovvero una parte iniziale informativa aggiunta al pacchetto) differente per ogni livello ISO/OSI",
        "answer": true
      },
      {
        "option_text": "Introduce uno stesso “Header” per ogni livello ISO/OSI",
        "answer": false
      },
      {
        "option_text": "Introduce un “Header” e un “Trailer” (ovvero una parte finale informativa aggiunta al pacchetto) solo a livello 2",
        "answer": true
      },
      {
        "option_text": "Il “Trailer” di livello 2 è utilizzato per il controllo degli errori",
        "answer": true
      },
      {
        "option_text": "Non introduce “Header” a nessun livello ISO/OSI",
        "answer": false
      },
      {
        "option_text": "L’Header introduce le informazioni e i riferimenti specifici necessari a ciascuno dei livelli ISO/OSI Mario Testino",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 151
  },
  {
    "code": "M1.3.1.10.1",
    "question": "L’incapsulamento ISO/OSI",
    "options": [
      {
        "option_text": "È un principio per cui in corrispondenza di ogni livello della struttura che il pacchetto dell'Host mittente attraversa, si incorporano le informazioni che sono proprie e uniche del livello attraversato",
        "answer": true
      },
      {
        "option_text": "È un prin cipio per cui in corrispondenza di ogni livello della struttura che il pacchetto dell'Host mittente e destinatario attraversa, si incorporano le informazioni che sono proprie e uniche del livello attraversato",
        "answer": false
      },
      {
        "option_text": "È un principio per cui in corrispondenza di ogni livello della struttura che il pacchetto dell'Host Mittente attraversa si incorporano le informazioni che poi vengono eliminate man mano che si risalgono i livelli dell’Host Destinatario sino ad estrarre il messaggio originario",
        "answer": true
      },
      {
        "option_text": "È un principio per cui ad ogni livello ISO/OSI viene effettuato un controllo di congruenze attraverso un CRC",
        "answer": false
      },
      {
        "option_text": "Per funzionare necessità che ogni livello ISO/OSI offra il proprio \"servizio\" solamente al livello sottostante in maniera corretta",
        "answer": false
      },
      {
        "option_text": "Conferisce robustez za e sicurezza delle trasmissioni al modello ISO/OSI",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 152
  },
  {
    "code": "M1.3.2.8.1",
    "question": "Un cavo in fibra ottica Monomodale",
    "options": [
      {
        "option_text": "Prevede una sola modalità di propagazione: un'unica lunghezza d'onda della luce nel nucleo della fibra",
        "answer": true
      },
      {
        "option_text": "Ha un nucleo di vetro molto più piccolo del cavo multimodale",
        "answer": true
      },
      {
        "option_text": "Prevede varie modalità di propagazione, con varie lunghezze d’onda",
        "answer": false
      },
      {
        "option_text": "Garantisce l'assenza di interferenza o sovrapposizione tra diverse lunghezze d'onda sulle lunghe distanze",
        "answer": true
      },
      {
        "option_text": "Ha un nucleo di vetro da almeno 50 mm (nella tipologia OS1 e OS2)",
        "answer": false
      },
      {
        "option_text": "Può essere usato, indipendentemente dalla tipologia, sia al chiuso che all’aperto",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 153
  },
  {
    "code": "M1.3.2.11.1",
    "question": "L’astrazione Socket TCP è:",
    "options": [
      {
        "option_text": "Un’istruzione software standardizzata progettata per essere utilizzabile nei programmi applicativi che permette la trasmissione e la ricezione di dati attraverso una rete",
        "answer": true
      },
      {
        "option_text": "La principale responsabile nello stabilire la connessione tra due host e mantenere la sessione per poi rigenerare la connessione all'invio di ulteriori pacchetti",
        "answer": true
      },
      {
        "option_text": "Indirettamente responsabile dello hand shake a tre livelli del TCP/IP",
        "answer": false
      },
      {
        "option_text": "Configurata diversamente sul client e sul server",
        "answer": true
      },
      {
        "option_text": "Configurata in modo che lato client e lato server abbia no identiche funzionalità",
        "answer": false
      },
      {
        "option_text": "Parametrizzata con due parametri Seq (Numero Sequenza) e Ack (Riconoscimento) in tre passaggi stabilisce una connessione",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 154
  },
  {
    "code": "M1.3.3.5.1",
    "question": "Il Firewall:",
    "options": [
      {
        "option_text": "È un dispositivo solamente hardware che funziona a livello 2",
        "answer": false
      },
      {
        "option_text": "Monitora il traffico in entrata e in uscita utilizzando una serie predefinita di regole di sicurezza per consentire o bloccar e gli eventi",
        "answer": true
      },
      {
        "option_text": "Che utilizza il criterio di applicazione “Default -Deny” permette solo ciò che viene au torizzato esplicitamente, mentre il resto viene vietato",
        "answer": true
      },
      {
        "option_text": "Che utilizza il criterio di applicazione “Default -Deny” blocca solo ciò che viene vietato esplicitamente, mentre il resto viene permesso",
        "answer": false
      },
      {
        "option_text": "Utilizza normalmente per la configurazione delle reg ole: indirizzo IP sorgente, IP di destinazione e l’indirizzo MAC",
        "answer": false
      },
      {
        "option_text": "Se funziona a livello 7 può mettere in sicurezza le applicazioni Web",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 155
  },
  {
    "code": "M3.2.1.1.1",
    "question": "Lo standard ISO/IEC 27000 -series",
    "options": [
      {
        "option_text": "È una serie di norme internazionali fuse in un unico documento che costituiscono uno standard relativo alla sicurezza delle informazioni",
        "answer": false
      },
      {
        "option_text": "È una serie di norme internazionali che costituiscono uno standard relativo alla sicurezza informatica",
        "answer": true
      },
      {
        "option_text": "È denominato \"Information Security Management Systems (ISMS) Family of Standards\" e si prefigge di proteggere le informazioni che vengono mantenute ed elaborate da un’organizzazione",
        "answer": true
      },
      {
        "option_text": "Permette alle organizzazioni di sviluppare ed implementare un proprio sistema per la gestione d ella sicurezza delle informazioni (SGSI)",
        "answer": true
      },
      {
        "option_text": "È stato generato dagli standard British Standard BS 7799 -1 e -2",
        "answer": true
      },
      {
        "option_text": "Si focalizza sulla protezione dei dati esclusivamente attraverso il consolidamento della tecnologia di rete",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 156
  },
  {
    "code": "M3.2.1.5.1",
    "question": "ISO/IEC 27002 permette di strutturare in controlli secondo uno schema che prevede i seguenti livelli (indicare solo quelli effettivamente presenti)",
    "options": [
      {
        "option_text": "Aree di Controllo",
        "answer": true
      },
      {
        "option_text": "Aree di Rischio",
        "answer": false
      },
      {
        "option_text": "Zone Locali e Remote",
        "answer": false
      },
      {
        "option_text": "Categorie di Controllo",
        "answer": true
      },
      {
        "option_text": "Contromisure (Controlli)",
        "answer": true
      },
      {
        "option_text": "Categorie di Allarme",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 157
  },
  {
    "code": "M3.2.6.2.1",
    "question": "La struttura di ISA/IEC 62443",
    "options": [
      {
        "option_text": "È rappresentabile in quattro gruppi di standard che possono rappresentare: “Modelli”, “Gestione”, “Sistema” e “Componente”",
        "answer": true
      },
      {
        "option_text": "È costituita da tre famiglie di standard con vari livelli di approfondimento più uno non ancora pubblicato",
        "answer": false
      },
      {
        "option_text": "È composta dalle famiglie: “Modelli”, “Gestione”, “Organizzazione” e “Componente”",
        "answer": false
      },
      {
        "option_text": "È composta dalle famiglie: “General”, “Policy & Procedures”, “System” e “Component”",
        "answer": true
      },
      {
        "option_text": "È costituita da famiglie di standard con documenti ancora in fase di sviluppo",
        "answer": true
      },
      {
        "option_text": "È costituita da famiglie di standard con analogo numero di documenti in ogni famiglia",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 158
  },
  {
    "code": "M3.2.6.5.1",
    "question": "I conduits secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "Raggruppano gli elementi che consentono la comunicazione peer to peer tra due zone",
        "answer": false
      },
      {
        "option_text": "Forniscono funzioni di sicurezza che consentono una comunicazione sicura e permettono la coesistenza di zone con livelli differenti",
        "answer": true
      },
      {
        "option_text": "Possono essere usati per fare comunicare due o più zone fra di loro",
        "answer": true
      },
      {
        "option_text": "Consistono nel raggruppamento di cyber asset dedicati esclusivamente alle comunicazioni, e che condividono gli stessi requisiti di cybersecurity",
        "answer": true
      },
      {
        "option_text": "Possono a ttraversare più di una zona in siti con differenti locazioni geografiche",
        "answer": false
      },
      {
        "option_text": "Possono avere sotto -conduits per una difesa in profondità",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 159
  },
  {
    "code": "M3.3.5.1.1",
    "question": "La Direttiva NIS (Network and Information Security)",
    "options": [
      {
        "option_text": "È il primo atto legislativo sulla sicurezza informatica approvato dall’Unione Europea",
        "answer": true
      },
      {
        "option_text": "È entrata in vigore in Italia 24 giugno 2018 mediante il D.L. n. 65 del 24 18 maggio 2018",
        "answer": true
      },
      {
        "option_text": "Impone la notifica obbligatoria degli incidenti all'Autorità nazionale istituita allo scopo",
        "answer": true
      },
      {
        "option_text": "Impone la nascita di CSIRT (Computer Security Incident Response Team) nazionali, sulla base del CERT -UE",
        "answer": true
      },
      {
        "option_text": "Stabilisce l’obiettivo dell’adozione di una serie di misure di sicurezza comuni che potranno essere adottate discrezional mente dai singoli paesi",
        "answer": false
      },
      {
        "option_text": "Impone di realizzare un network nei singoli paesi che si occupi della sicurezza delle reti critiche",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 160
  },
  {
    "code": "M3.4.5.2",
    "question": "Un sistema di Anomaly Detection",
    "options": [
      {
        "option_text": "Permette di trovare e correggere gli incidenti non appena iniziano a verificarsi e prima che possano causare danno per l’organizzazione",
        "answer": true
      },
      {
        "option_text": "Permette di trovare e correggere gli incidenti dopo che si sono verificati in modo da minimizzare i danni all’organizzazione",
        "answer": false
      },
      {
        "option_text": "Utilizza un approccio di Machine Learning per monitorare l’insieme dei dati, apprendere il comportamento di ogni dispositivo e fornire avvisi puntuali sugli errori critici",
        "answer": true
      },
      {
        "option_text": "Utilizza un approccio con logiche algoritmiche tradizi onali basate su modelli predefiniti",
        "answer": false
      },
      {
        "option_text": "Realizza il “deep packed inspection”",
        "answer": true
      },
      {
        "option_text": "Definisce la “Baseline” ovvero la “conoscenza o linea di base” di quella specifica architettura di rete",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 161
  },
  {
    "code": "M4.1.1.1",
    "question": "Quali tra le seguenti caratteristiche rientrano nel modello di Burocrazia secondo Max Weber",
    "options": [
      {
        "option_text": "Fedeltà al marchio",
        "answer": false
      },
      {
        "option_text": "Competenza disciplinata",
        "answer": true
      },
      {
        "option_text": "Diritto di licenziare",
        "answer": false
      },
      {
        "option_text": "Gerarchia degli uffici",
        "answer": true
      },
      {
        "option_text": "Preparazione specializzata",
        "answer": true
      },
      {
        "option_text": "Concorsi pubblici per l’assunzione",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 162
  },
  {
    "code": "M4.1.1.3",
    "question": "Chi tra questi personaggi ha posto le basi degli attuali modelli organizzativi",
    "options": [
      {
        "option_text": "Karl Marx",
        "answer": false
      },
      {
        "option_text": "Alessandro Volta",
        "answer": false
      },
      {
        "option_text": "Karl Emil Maximilian Weber",
        "answer": true
      },
      {
        "option_text": "Enrico Fermi",
        "answer": false
      },
      {
        "option_text": "Thomas Robert Malthus",
        "answer": false
      },
      {
        "option_text": "Adam Smith",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 163
  },
  {
    "code": "M4.1.1.5",
    "question": "Quali di questi sono principi fondamentali di organizzazione aziendale (indicare )",
    "options": [
      {
        "option_text": "Dividere l’azienda per raggruppamenti funzionali omogenei (dipartimenti, divisioni, ecc.)",
        "answer": true
      },
      {
        "option_text": "Dividere l’azienda per raggruppamenti verticali o orizzontali",
        "answer": false
      },
      {
        "option_text": "Definire ruoli e mansioni nei singoli raggruppamenti",
        "answer": true
      },
      {
        "option_text": "Accentrare la responsabilità in poche figure che evitano massimamente la delega",
        "answer": false
      },
      {
        "option_text": "Modellizzare i processi aziendali in una prospettiva di miglioramento continuo",
        "answer": true
      },
      {
        "option_text": "Standardizzare i processi",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 164
  },
  {
    "code": "M4.1.1.7",
    "question": "Quali di questi sono principi fondamentali di organizzazione aziendale (indicare )",
    "options": [
      {
        "option_text": "Pianificazione aziendale e Pianificazione strategica",
        "answer": true
      },
      {
        "option_text": "Gestire gli obiettivi, le priorità e i carichi di lavoro correttamente",
        "answer": true
      },
      {
        "option_text": "Ogni persona che fa parte dell’organizzazione deve aver chiaro in mente il proprio compito",
        "answer": true
      },
      {
        "option_text": "Ogni dipendente deve agire sempre e solo con il coordinamento del supervisore",
        "answer": false
      },
      {
        "option_text": "Ogni persona deve avere responsabilità e obiettivi ben definiti",
        "answer": true
      },
      {
        "option_text": "Ogni risorsa umana deve aver chiaro i limiti del proprio ruolo",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 165
  },
  {
    "code": "M4.1.1.9",
    "question": "Cosa significa Costruire una Struttura Organizzativa?",
    "options": [
      {
        "option_text": "Scegliere l’assetto legale che si ritiene più appropriato rispetto al numero e le capacità dei dipendenti (impresa individual e o impresa di capitali o altro)",
        "answer": false
      },
      {
        "option_text": "Scegliere l’assetto legale che si ritiene più appropriato rispetto allo scopo aziendale (impresa individuale o impresa di capitali o altro)",
        "answer": true
      },
      {
        "option_text": "Dare «ordine» alle parti e ai loro compiti; creando un assetto organizzativo stabile, ancorché modificabile",
        "answer": true
      },
      {
        "option_text": "Definire «regole» e «pro cedure» di comportamento delle parti e dei partecipanti",
        "answer": true
      },
      {
        "option_text": "Definire «regole» e «procedure» di comportamento dei fornitori e dei “competitors”",
        "answer": false
      },
      {
        "option_text": "Progettare il modello, ovvero la configurazione, dell’assetto organizzativo che è rappresentato dall’organigramma dell’impresa",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 166
  },
  {
    "code": "M4.1.1.11",
    "question": "L’Organigramma",
    "options": [
      {
        "option_text": "Rappresenta i dipendenti e le posizioni attraverso caselle o altre forme su vari livelli, linee dritte o a gomito collegano insieme tali livelli",
        "answer": true
      },
      {
        "option_text": "Riproduce parzialmente la struttura interna di un'organizzazione o un’azienda",
        "answer": false
      },
      {
        "option_text": "È una rappresentazione visiva della gerarchia e dei ranghi delle persone, delle aree funzionali o dei raggruppamenti che compongono l'organizzazione",
        "answer": true
      },
      {
        "option_text": "Può rappresentare strutture organizzative Iper-dimensionali",
        "answer": false
      },
      {
        "option_text": "Può rappresentare strutture organizzative per Area Geografica",
        "answer": true
      },
      {
        "option_text": "Può rappresentare strutture organizzative Divisionali",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 167
  },
  {
    "code": "M4.1.1.15",
    "question": "La Struttura Organizzativa Divisionale per Area Geografica",
    "options": [
      {
        "option_text": "Prevede che ogni divisione corrisponda ad una unità organizzativa che fa parte di un gruppo",
        "answer": true
      },
      {
        "option_text": "Prevede che ogni divisione sia strettamente e rigidamente legata alla direzione generale centrale",
        "answer": false
      },
      {
        "option_text": "Facilita la comunicazione tra le unità operative dell’area",
        "answer": true
      },
      {
        "option_text": "Riduce i costi di trasporto, permettendo ma ggiore efficienza nella distribuzione",
        "answer": true
      },
      {
        "option_text": "Permette di adattare il prodotto alle specificità locali e interpretare rapidamente i cambiamenti nei gusti dei consumatori",
        "answer": true
      },
      {
        "option_text": "Non ha sostanziali svantaggi o rischi essendo gli uffici di direzione (centrale di a rea) decentralizzati",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 168
  },
  {
    "code": "M4.1.2.1",
    "question": "Il modello Weil Broadbent per l’allineamento tra reparto IT e il Business:",
    "options": [
      {
        "option_text": "Illustra come il Piano Strategico Aziendale può influenzare la Strategia ICT che ne rimane completamente indipendente",
        "answer": false
      },
      {
        "option_text": "Illustra come il Piano Strategico Aziendale guidi la Strategia ICT per un vantaggio competitivo",
        "answer": true
      },
      {
        "option_text": "Delinea come la Strategia ICT allinei il Portfolio IT",
        "answer": true
      },
      {
        "option_text": "Delinea come il Portfolio IT allinei la Strategia ICT",
        "answer": false
      },
      {
        "option_text": "Delinea come i v incoli (normativi, concorrenza, tecnologia, ecc.) influenzino il Piano Strategico e il Portfolio IT",
        "answer": true
      },
      {
        "option_text": "Delinea come il Portfolio IT abiliti e informi il piano strategico aziendale",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 169
  },
  {
    "code": "M4.1.3.2",
    "question": "Indicare con  quali dei seguenti sono compiti del CIO (Chief Information Officer)",
    "options": [
      {
        "option_text": "Contribuire all’analisi e alla definizione dei processi aziendali, raccogliendo e razionalizzando le esigenze dei vari compar ti",
        "answer": true
      },
      {
        "option_text": "Definire, insieme alla di rezione, gli obiettivi aziendali ed il contributo dell’informatica per il loro raggiungimento",
        "answer": true
      },
      {
        "option_text": "Definire il Safety Plan (SP) per l’azienda",
        "answer": false
      },
      {
        "option_text": "Definire e gestire il budget destinato ai Sistemi Informativi e coordinare il reparto IT",
        "answer": true
      },
      {
        "option_text": "Avere competen ze sulla tecnologia anche se non approfondite",
        "answer": false
      },
      {
        "option_text": "Partecipare alla definizione dei requisiti funzionali e architetturali degli strumenti informativi da introdurre in azienda",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 170
  },
  {
    "code": "M4.1.3.4",
    "question": "Indicare con  quali dei seguenti sono compiti del CISO (Chief Information Security Officer)",
    "options": [
      {
        "option_text": "Realizzare assessment della sicurezza: per valutare lo stato dell’arte della sicurezza in azienda e individuare un piano strategico per aumentare la capacità di reagire alle cyber minacce",
        "answer": true
      },
      {
        "option_text": "La definizione delle policy di sicurezza : definire regole e standard per la gestione della sicurezza",
        "answer": true
      },
      {
        "option_text": "La definizione delle policy e degli standard informatici : per le architetture tecnologiche di rete e di s istema",
        "answer": false
      },
      {
        "option_text": "L’analisi del rischio cyber: comprendere le vulnerabilità e le minacce per l’azienda per compiere scelte adeguate alla gestione del rischio cyber in termini di politiche e strumenti",
        "answer": true
      },
      {
        "option_text": "La definizione delle architetture di sicurezza : disegnar e l’architettura per la gestione della sicurezza e monitoraggio delle scelte strutturali",
        "answer": true
      },
      {
        "option_text": "Condurre ricerche ed eseguire",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 171
  },
  {
    "code": "M4.1.3.6",
    "question": "Il DPO (Data Protection Officer) secondo il GDPR",
    "options": [
      {
        "option_text": "È responsabile del monitoraggio della conformità dell’organizzazione per la quale lavora e svolge il ruolo di punto di contatto tra gli interessati e l’autorità di controllo competente",
        "answer": true
      },
      {
        "option_text": "Inform a e consiglia l’organizzazione ed i suoi dipendenti circa gli obblighi di protezione dei dati ai sensi del GDPR",
        "answer": true
      },
      {
        "option_text": "Monitora la conformità dell’organizzazione al Regolamento ed alle policy e procedure interne in materia di protezione dei dati",
        "answer": true
      },
      {
        "option_text": "Deve es sere obbligatoriamente nominato, sia per le aziende pubbliche che per quelle private",
        "answer": false
      },
      {
        "option_text": "Funge da punto di contatto per l’autorità di controllo per tutte le questioni inerenti alla protezione dei dati, come la segnalazione di violazioni dei dati",
        "answer": true
      },
      {
        "option_text": "Deve essere obbligatoriamente un dipendente dell’organizzazione",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 172
  },
  {
    "code": "M4.1.5.2",
    "question": "Il Security Analyst",
    "options": [
      {
        "option_text": "Previene, rileva e gestisce le minacce informatiche, nell’ottica di proteggere computer, dati, reti e programmi delle aziende",
        "answer": true
      },
      {
        "option_text": "Conosce le tecniche crittografiche",
        "answer": true
      },
      {
        "option_text": "Conosce i protocolli di comunicazione",
        "answer": true
      },
      {
        "option_text": "Conosce i sistemi di autenticazione e controllo",
        "answer": true
      },
      {
        "option_text": "Non si occupa degli aspetti giuridici e delle normative internazionali (in carico al DPO)",
        "answer": false
      },
      {
        "option_text": "Si appoggia a consulenti esterni per quel che riguarda l’Intrusion Detection",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 173
  },
  {
    "code": "M4.1.5.4",
    "question": "L’Informatico Forense",
    "options": [
      {
        "option_text": "È un tecnico coinvolto nella raccolta di dati circa l’utilizzo di sistemi, reti e applicazioni e analisi degli stessi in rela zione ad incidenti di cybersecurity",
        "answer": true
      },
      {
        "option_text": "Si appoggia sempre alla polizia per le indagini",
        "answer": false
      },
      {
        "option_text": "Si occupa anche di redigere una docu mentazione idonea alla presentazione in sede processuale",
        "answer": true
      },
      {
        "option_text": "È conosciuto formalmente anche come “Analista forense”",
        "answer": true
      },
      {
        "option_text": "È conosciuto formalmente anche come “Analista processuale”",
        "answer": false
      },
      {
        "option_text": "Ha competenze IT e degli strumenti software per le indagini forensi",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 174
  },
  {
    "code": "M4.2.2.2",
    "question": "Quali di questi elementi fanno parte di un buon piano operativo per diffondere la sicurezza informatica (indicare con )",
    "options": [
      {
        "option_text": "Definire gli obiettivi di sicurezza",
        "answer": true
      },
      {
        "option_text": "Realizzare attacchi di Phishing simulati",
        "answer": true
      },
      {
        "option_text": "Predisporre corsi di formazione e test di valutazione",
        "answer": true
      },
      {
        "option_text": "Pianificare accuratamente attività a lungo termine",
        "answer": false
      },
      {
        "option_text": "Coinvolgere solo chi è coinvolto direttamente con incarichi critici",
        "answer": false
      },
      {
        "option_text": "Prepararsi adeguatamente in caso di errori umani",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 175
  },
  {
    "code": "M4.2.3.2",
    "question": "Outsourcing",
    "options": [
      {
        "option_text": "È una strategia aziendale in base alla quale un progetto, parte di esso o in generale un’attività o un servizio viene trasfer ita a un'azienda esterna",
        "answer": true
      },
      {
        "option_text": "Si realizza per concentrarsi meglio sugli aspetti centrali del business",
        "answer": true
      },
      {
        "option_text": "Si realizza per concentrarsi meglio sugli aspetti centrali della cyber security",
        "answer": false
      },
      {
        "option_text": "Può migliorare l'efficienza e la produttività",
        "answer": true
      },
      {
        "option_text": "Può provocare perdita di controllo su conoscenze specifiche (know How) e generare rischi di tipo organizzativo",
        "answer": true
      },
      {
        "option_text": "Può generare rischi di tipo organizzativo ma non la perdita di controllo su conoscenze specifiche (know How)",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 176
  },
  {
    "code": "M4.2.3.4",
    "question": "Esternalizzare l’infrastruttura IT (CED)",
    "options": [
      {
        "option_text": "Può essere necessario per contenere i costi dell’infrastruttura informatica al crescere dell’azienda",
        "answer": true
      },
      {
        "option_text": "Il costo del servizio può diventare molto oneroso se non sono dimensionati correttamente i requisiti (funzioni, latenza e disponibilità)",
        "answer": true
      },
      {
        "option_text": "Non porta mai a sorprese in relazione al livello, la qualità e la modalità di erogazione del servizio",
        "answer": false
      },
      {
        "option_text": "Può es sere problematico se non è correttamente definito il contratto, quello che non è chiaramente scritto non si ritrova quando è necessario",
        "answer": true
      },
      {
        "option_text": "È sempre sinonimo di messa in sicurezza del dato anche in relazione alla sua proprietà, mai nessun leak",
        "answer": false
      },
      {
        "option_text": "Può p ortare a difficoltà di coordinazione tra le attività interne ed estern alizzate",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 177
  },
  {
    "code": "M4.2.3.8",
    "question": "La servitizzazione PaaS prevede",
    "options": [
      {
        "option_text": "Networking gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "Storage gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "Server gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "Virtualizzazione gestit a internamente",
        "answer": false
      },
      {
        "option_text": "Sistema Operativo gestito internamente",
        "answer": false
      },
      {
        "option_text": "Applicazione gestita internamente",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 178
  },
  {
    "code": "M1.3.1.12.1",
    "question": "L’incapsulamento ISO/OSI",
    "options": [
      {
        "option_text": "Introduce un “Header” con le stesse informazioni per ogni livello ISO/OSI",
        "answer": false
      },
      {
        "option_text": "Introduce un “Trailer” (ovvero una ”coda” aggiunta al pacchetto) specifica per ogni livello ISO/OSI",
        "answer": false
      },
      {
        "option_text": "Introduce un “Header ” (ovvero un’”intestazione” iniziale aggiunta al pacchetto) specifica per ogni livello ISO/OSI",
        "answer": true
      },
      {
        "option_text": "Introduce un “Header” per ogni livello e un “Trailer” ( una “coda ” informativa aggiunta al pacchetto) solo a livello 2",
        "answer": true
      },
      {
        "option_text": "Il “Trailer” di livello 2 è util izzato per il controllo degli errori",
        "answer": true
      },
      {
        "option_text": "L’Header introduce le informazioni e i riferimenti necessari a ciascuno dei livelli ISO/OSI",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 179
  },
  {
    "code": "M1.3.2.9.1",
    "question": "Nella comunicazione con il protocollo Ethernet in caso di avvenuta collisione:",
    "options": [
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette una sequenza composta dalla parte di pacchetto già trasmessa e un codice identificativo in coda al pacchetto",
        "answer": true
      },
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette una se quenza denominata “jamming”",
        "answer": true
      },
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette e un codice identificativo in testa e la parte di pacchetto già trasmessa in coda al pacchetto",
        "answer": false
      },
      {
        "option_text": "La stazione trasmittente interrompe le trasmissioni e attend e sino a quando un nodo in rete inizia a ritrasmettere",
        "answer": false
      },
      {
        "option_text": "La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione dopo un tempo pseudocasuale",
        "answer": true
      },
      {
        "option_text": "La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione dopo un tempo prefissato",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 180
  },
  {
    "code": "M1.3.3.3.1",
    "question": "Lo switch di rete",
    "options": [
      {
        "option_text": "Può essere virtualizzato",
        "answer": true
      },
      {
        "option_text": "Se di tipo “cut -through” viene calcolato il CRC per il controllo degli errori",
        "answer": false
      },
      {
        "option_text": "Può avere una latenza non sempre trascurabile (compatibilmente con le applicazioni)",
        "answer": true
      },
      {
        "option_text": "Se di tipo “unmanaged” permette la configurazione delle porte",
        "answer": false
      },
      {
        "option_text": "Può gestire funzioni dei livelli 3,4 e 7 dello stack ISO/OSI",
        "answer": true
      },
      {
        "option_text": "Se di tipo “managed” permette di duplicare le trasmissioni su canali differenti (mirroring)",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 181
  },
  {
    "code": "M3.2.1.3.1",
    "question": "Quale di queste aree non è un requisito di un ISMS ISO 27001",
    "options": [
      {
        "option_text": "Leadership",
        "answer": true
      },
      {
        "option_text": "Pianificazione",
        "answer": true
      },
      {
        "option_text": "Attività Operative",
        "answer": true
      },
      {
        "option_text": "Disaster Recovery",
        "answer": false
      },
      {
        "option_text": "Supporto",
        "answer": true
      },
      {
        "option_text": "Data Entry",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 182
  },
  {
    "code": "M3.2.1.10",
    "question": "Il ciclo PDCA",
    "options": [
      {
        "option_text": "È il ciclo Plan Do Check Act detto anche ciclo di Deming o ciclo di Shewhart",
        "answer": true
      },
      {
        "option_text": "È il ciclo Process Do Control Alert detto anche ciclo di Deming o ciclo di Shewhart",
        "answer": false
      },
      {
        "option_text": "È un approccio al miglioramento continuo dei processi aziendali",
        "answer": true
      },
      {
        "option_text": "È esplicitamente indicato in ambito ISO 27000 per rappresentare il meccanismo ciclico di monitora ggio e miglioramento del sistema di gestione",
        "answer": true
      },
      {
        "option_text": "È esplicitamente indicato in ambito ISO 27000 per monitorare i cicli di manutenzione programmata dei sistemi",
        "answer": false
      },
      {
        "option_text": "Non è esplicitamente indicato in ambito ISO 27000 ma tutto lo standard è ispirato ad esso",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 183
  },
  {
    "code": "M3.2.6.4.1",
    "question": "Le zone secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "Dividono un sistema in aree omogenee raggruppando le risorse (logiche o fisiche) con requisiti di sicurezza comuni",
        "answer": true
      },
      {
        "option_text": "Dividono un sistema in aree omogenee raggruppando le risorse fisiche con requisiti di sicurezza comuni",
        "answer": false
      },
      {
        "option_text": "Possono includere indifferentemente impianti presenti in uno stesso sito o in differenti locazioni geografiche",
        "answer": false
      },
      {
        "option_text": "Hanno requisiti di sicurezza definiti da Security Level (SL), il livello richiesto per una zona è determinato dall'analisi del rischio",
        "answer": true
      },
      {
        "option_text": "Hanno confini che separano gli elementi fisici da quelli virtualizzati",
        "answer": false
      },
      {
        "option_text": "Possono essere suddivise in sottozone che definiscono diversi livelli di sicurezza e quindi consentono una difesa in profondità",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 184
  },
  {
    "code": "M3.3.3.1.1",
    "question": "La Brand Reputation",
    "options": [
      {
        "option_text": "Si riferisce al modo in cui il brand o il marchio viene valutato da parte del pubblico",
        "answer": true
      },
      {
        "option_text": "È detta anche Brand Image ovvero la reale percezione del marchio da parte del pubblico",
        "answer": false
      },
      {
        "option_text": "Deve essere differenziata dalla Brand Image che risulta costruita dall’azienda in maniera strategica e può non corrispondere alla reale percezione del pubblico",
        "answer": true
      },
      {
        "option_text": "Può essere migliorata migliorando i contenuti pubblicati e con buone recensioni on -line",
        "answer": true
      },
      {
        "option_text": "Impatta direttamente l’immagine dell’azienda proprietaria del marchio",
        "answer": false
      },
      {
        "option_text": "Può non impattare direttamente l’immagine dell’azienda proprietaria del marchio",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 185
  },
  {
    "code": "M3.4.5.1.1",
    "question": "Il SIEM",
    "options": [
      {
        "option_text": "E’ l’acronimo di Security Impact and Event Management)",
        "answer": false
      },
      {
        "option_text": "E’ l’acronimo di Security Integrated and Evaluation Management)",
        "answer": false
      },
      {
        "option_text": "È una",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 186
  },
  {
    "code": "M3.4.5.3",
    "question": "È l’acronimo di",
    "options": [
      {
        "option_text": "Virtual Private Network",
        "answer": true
      },
      {
        "option_text": "È l’acronimo di Verified Private Network",
        "answer": false
      },
      {
        "option_text": "È una tecnologia che si realizza attraverso un canale di comunicazione criptato (o tunnel VPN)",
        "answer": true
      },
      {
        "option_text": "Consente di creare una rete privata virtuale",
        "answer": true
      },
      {
        "option_text": "Per il suo funzionamento p uò usare i protocolli IPSec (Internet Protocol Security)",
        "answer": true
      },
      {
        "option_text": "Per il suo funzionamento p uò usare i protocolli Modbus",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 187
  },
  {
    "code": "M3.4.5.5",
    "question": "Gli Instrusion Detection/Prevention",
    "options": [
      {
        "option_text": "Sono sistemi che si integrano con i Firewall per offrire una protezione più completa",
        "answer": true
      },
      {
        "option_text": "Sono sistemi che non si integrano con i Firewall ma che offrono lo stesso una protezione completa",
        "answer": false
      },
      {
        "option_text": "Vengono posizionati “a valle” del firewall (rispetto alla connessione Internet) ed analizzano i pacchetti di dati ed i comportamenti da loro generati",
        "answer": true
      },
      {
        "option_text": "Vengono posizionali “a monte” del fir ewall (rispetto alla connessione Internet) ed analizzano i pacchetti di dati ed i comportamenti da loro generati",
        "answer": false
      },
      {
        "option_text": "Per la rilevazione delle minacce possono usare la metodologia del “Misuse Detection”",
        "answer": true
      },
      {
        "option_text": "Per la rilevazione delle minacce possono usare la metodologia del “Deny Anomaly”",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 188
  },
  {
    "code": "M4.1.1.2",
    "question": "Quali tra le seguenti caratteristiche rientrano nel modello di Burocrazia secondo Max Weber",
    "options": [
      {
        "option_text": "Sviluppo di carriera",
        "answer": true
      },
      {
        "option_text": "Attività a tempo pieno",
        "answer": true
      },
      {
        "option_text": "Segreto di ufficio",
        "answer": true
      },
      {
        "option_text": "Stipendio monetario fisso",
        "answer": true
      },
      {
        "option_text": "Rimborso delle spese sostenute",
        "answer": false
      },
      {
        "option_text": "Non possesso strumenti del proprio lavoro",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 189
  },
  {
    "code": "M4.1.1.4",
    "question": "Perché organizzare l’azienda?",
    "options": [
      {
        "option_text": "Per pianificare, aumentare la produttività e di conseguenza fatturato e crescita",
        "answer": true
      },
      {
        "option_text": "Per sviluppare solo la parte dell’azienda più profittevole",
        "answer": false
      },
      {
        "option_text": "Per sincronizzare processi e sistemi costituiti da una parte sociale (risorse umane) e una parte tecnica (risorse economiche a supporto)",
        "answer": true
      },
      {
        "option_text": "Per aumentare il valore del prodotto o servizio che l’azienda offre ai propri clienti",
        "answer": true
      },
      {
        "option_text": "Per moderare la performance quando i costi superano i ricavi",
        "answer": false
      },
      {
        "option_text": "Per evitare problematiche dovute alla mancata collabo razione, integrazione o coordinamento di dipartimenti e risorse",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 190
  },
  {
    "code": "M4.1.1.6",
    "question": "Quali di questi sono principi fondamentali di organizzazione aziendale (indicare )",
    "options": [
      {
        "option_text": "Definire chiaramente indicatori di performance per misurazione",
        "answer": true
      },
      {
        "option_text": "Scegliere e creare gli strumenti di controllo di gestione adeguati come l’organigramma, il mansionario aziendale e i cruscotti aziendali",
        "answer": true
      },
      {
        "option_text": "Gestire il flusso d’informazioni e la comunicazione interna",
        "answer": true
      },
      {
        "option_text": "Lasciare l’iniziativa ai singoli",
        "answer": false
      },
      {
        "option_text": "Informare massimamente e primariamente solo il management",
        "answer": false
      },
      {
        "option_text": "Gestire l’innovazione",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 191
  },
  {
    "code": "M4.1.1.8",
    "question": "Il Controllo di Gestione",
    "options": [
      {
        "option_text": "È il meccanismo operativo volto a guidare il management verso il conseguimento degli obiettivi stabiliti in sede di pianificazione operativa",
        "answer": true
      },
      {
        "option_text": "Si utilizza unicamente nelle aziende pubbliche",
        "answer": false
      },
      {
        "option_text": "Rileva, attraverso la misurazione di appositi indicatori, lo scostamento tra obiettivi pianificati e risultati conseguiti e informando di tali scostamenti gli organi responsabili",
        "answer": true
      },
      {
        "option_text": "Rileva, grazie alle fluttuazioni della pianificazione operativa, gli elementi di scostamento con gli obiettivi ipotizzati",
        "answer": false
      },
      {
        "option_text": "Permette che gli organi responsabili possano decidere e attuare le a zioni correttive ove necessario",
        "answer": true
      },
      {
        "option_text": "Può essere utilizzato nelle aziende pubbliche e nelle aziende private",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 192
  },
  {
    "code": "M4.1.1.10",
    "question": "L’Organigramma",
    "options": [
      {
        "option_text": "Riproduce la struttura interna di un'organizzazione o un’azienda",
        "answer": true
      },
      {
        "option_text": "Rappresenta i dipendenti e le posizioni attraverso caselle o altre forme su vari livelli, linee dritte o a gomito collegano insieme tali livelli",
        "answer": true
      },
      {
        "option_text": "È una rappresentazione parziale della gerarchia e dei ranghi delle persone, delle aree funzionali o dei raggruppamenti c he compongono l'organizzazione",
        "answer": false
      },
      {
        "option_text": "Può rappresentare strutture organizzative Funzionali",
        "answer": true
      },
      {
        "option_text": "Può rappresentare strutture organizzative Vettoriali",
        "answer": false
      },
      {
        "option_text": "Può rappresentare strutture organizzative Matriciali",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 193
  },
  {
    "code": "M4.1.1.16",
    "question": "La Struttura Organizzativa a Matrice",
    "options": [
      {
        "option_text": "Presenta responsabili distinti per funzioni e per prodotti / progetti",
        "answer": true
      },
      {
        "option_text": "Presenta un manager di funzione per l’allocazione delle risorse a ciascun progetto (finanziamenti, impianti, ecc.) e un manager con la responsabilità della conduzione e dei risultati dei singoli prodotti/progetti",
        "answer": true
      },
      {
        "option_text": "Presenta una minore chiarezza dei ruoli nel processo decisionale rispetto alle altre strutture",
        "answer": false
      },
      {
        "option_text": "Presenta una maggiore efficienza e velocità nella comunic azione e nelle decisioni",
        "answer": true
      },
      {
        "option_text": "Presenta m aggiori possibilità di conflitti (alle intersezioni delle linee) poiché esistono due manager allo stesso livello con lo stesso grado di autorità",
        "answer": true
      },
      {
        "option_text": "Permette una maggiore acquisizione di “potere” da parte di chi riesce a risolvere i conflitti, pur non ric oprendo il ruolo di responsabile",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 194
  },
  {
    "code": "M4.1.3.1",
    "question": "La figura del CISO (Chief Information Security Officer)",
    "options": [
      {
        "option_text": "Ha responsabilità diretta sulla sicurezza fisica delle persone",
        "answer": false
      },
      {
        "option_text": "Ha responsabilità diretta sulla Cyber Security di reti e sistemi",
        "answer": true
      },
      {
        "option_text": "Ha maggiore focalizzazione sulla tecnologia del DPO (Data Protection Officer)",
        "answer": true
      },
      {
        "option_text": "Ha minore focalizzazione sulla tecnologia del DPO (Data Protection Officer)",
        "answer": false
      },
      {
        "option_text": "Ha sempre una forte focalizzazione sulla protezione dei dati e delle informazi oni",
        "answer": true
      },
      {
        "option_text": "Ha una maggiore focalizzazione sugli aspetti legali rispetto al DPO (Data Protection Officer)",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 195
  },
  {
    "code": "M4.1.3.3",
    "question": "Indicare con  quali dei seguenti sono compiti del CIO (Chief Information Officer)",
    "options": [
      {
        "option_text": "Contribuire alla gestione del cambiamento in seguito all’introduzione di nuovi strumenti informativi",
        "answer": true
      },
      {
        "option_text": "Contribuire alla gestione del cambiamento proponendo l’introduzione di nuovi macchinari o tecnologie produttive",
        "answer": false
      },
      {
        "option_text": "Partecipare alla definizione della Business Impac t Analysis (BIA)",
        "answer": true
      },
      {
        "option_text": "Definire KPI e SLA per la valutazione sia dell’efficienza interna, sia di quella dei fornitori di software e servizi",
        "answer": true
      },
      {
        "option_text": "Progettare e gestire il funzionamento quotidiano dei sistemi informativi, ottimizzando le risorse interne e i co ntratti con i fornitori esterni",
        "answer": true
      },
      {
        "option_text": "Gestire e organizzare il flusso delle informazioni agevolando l’uso della tecnologia",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 196
  },
  {
    "code": "M4.1.3.5",
    "question": "Indicare con  quali dei seguenti sono compiti del CISO (Chief Information Security Officer)",
    "options": [
      {
        "option_text": "Il monitoraggio della sicurezza: controllare il traffico sui diversi canali sviluppando un Security Operation Center (SOC) interno all’azienda o collaborando con un provider esterno",
        "answer": true
      },
      {
        "option_text": "La risposta agli incidenti: rispondere in tempi brevi in caso di data breach o, in generale incidenti, per limitarne gli effe tti",
        "answer": true
      },
      {
        "option_text": "Progettare e gestire il funzionamento quotid iano dei sistemi informativi",
        "answer": false
      },
      {
        "option_text": "L’identificazione delle minacce: essere aggiornati sulle tipologie di minacce e di attacco",
        "answer": true
      },
      {
        "option_text": "L’investigazione forense: condurre indagini forensi in caso di incidenti, collaborando con risorse interne o specialisti este rni",
        "answer": true
      },
      {
        "option_text": "Assicurarsi che l’azienda sia conforme alle normative locali, nazionali e globali, in particolare in aree come la salute e la sicurezza",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 197
  },
  {
    "code": "M4.1.5.3",
    "question": "L’Ethical Hacker",
    "options": [
      {
        "option_text": "È un esperto di sicurezza informatica capace di simulare, anticipare e prevenire attacchi informatici",
        "answer": true
      },
      {
        "option_text": "L’Ethical Hacker simula attacchi al sistema informatico dell’azienda di riferimento al fine di individuare eventuali falle",
        "answer": true
      },
      {
        "option_text": "È sempre un dipendente dell’azienda o dell’organizzazione che ne richiede il servizio",
        "answer": false
      },
      {
        "option_text": "Fa uso dei principali linguaggi di programmazione",
        "answer": true
      },
      {
        "option_text": "Ha conoscenza delle tecniche di Vulnerability Assessment",
        "answer": true
      },
      {
        "option_text": "Conosce tools e framework per la simulazione del processo industriale",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 198
  },
  {
    "code": "M4.2.2.1",
    "question": "Il Security Awareness",
    "options": [
      {
        "option_text": "Indica la consapevolezza del personale in relazione alla Cyber Security",
        "answer": true
      },
      {
        "option_text": "Indica la consapevolezza del personale in relazione alla sicurezza fisica (Safety) e logica",
        "answer": false
      },
      {
        "option_text": "Può essere migliorato attraverso la formazione e sensibilizzazione continua dei dipendenti per renderli consapevoli delle minacce cyber",
        "answer": true
      },
      {
        "option_text": "Può essere migliorato cercando di ridurre l’incidenza degli errori umani e i costi legati a un eventuale danno repu tazionale",
        "answer": true
      },
      {
        "option_text": "Può essere migliorato attraverso l’educazione dei fornitori e dei clienti in merito alle policy e procedure già definite dall’organizzazione ma che non vengono rispettate adeguatamente",
        "answer": false
      },
      {
        "option_text": "Può essere migliorato attraverso l’innalzamento del livello di sicurezza e di notifica dei dispositivi informatici in dotazione",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 199
  },
  {
    "code": "M4.2.3.1",
    "question": "Insourcing",
    "options": [
      {
        "option_text": "Vuole dire svolgere un progetto, parte di esso o in generale un’attività o un servizio all'interno dell'azienda stessa, sia e ssa una sussidiaria o una consociata",
        "answer": true
      },
      {
        "option_text": "Può voler dire portare o riportare un’attività, normalmente svolta all’esterno, internamente all’azienda",
        "answer": true
      },
      {
        "option_text": "Si distingue nettamente dall’attività di verticalizzazione",
        "answer": false
      },
      {
        "option_text": "Può essere una strategia competitiva nel ca so di progetti o attività strategiche, a forte valore aggiunto che richiedano il mantenimento (o il trasferimento) del know -how entro il perimetro aziendale",
        "answer": true
      },
      {
        "option_text": "Può essere una strategia competitiva nel caso di progetti o attività, a basso valore aggiunto ma rilevanti nelle economie di scala",
        "answer": false
      },
      {
        "option_text": "Deve considerare correttamente i costi relativi alla realizzazione dei nuovi impianti produttivi",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 200
  },
  {
    "code": "M4.2.3.3",
    "question": "Esternalizzazione l’infrastruttura IT (CED)",
    "options": [
      {
        "option_text": "Può essere necessario vista crescente complessità dei sistemi informatici",
        "answer": true
      },
      {
        "option_text": "Vuole dire una riduzione dei costi a canone",
        "answer": false
      },
      {
        "option_text": "Vuole dire eliminare i tempi morti del personale, tutto è gestito contrattualmente a corpo",
        "answer": true
      },
      {
        "option_text": "Vuole dire assistenza continua: Il contratto prevede l’assistenza continua che può arrivare a 7 giorni su 7 e 24h su 24",
        "answer": true
      },
      {
        "option_text": "Vuole dire scalabilità più semplice ma economicamente più onerosa se gestita con una infrastruttura esternalizzata",
        "answer": false
      },
      {
        "option_text": "Vuole dire Disaster Recovery ge stito dal contratto",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 201
  },
  {
    "code": "M4.2.3.7",
    "question": "La servitizzazione IaaS prevede",
    "options": [
      {
        "option_text": "Networking gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "Storage gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "Server s gestit i internamente",
        "answer": false
      },
      {
        "option_text": "Virtualizzazione gestit a internamente",
        "answer": false
      },
      {
        "option_text": "Sistema Operativo gestito internamente",
        "answer": true
      },
      {
        "option_text": "Applicazione gestita internamente",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 202
  },
  {
    "code": "M4.2.3.9",
    "question": "La servitizzazione SaaS prevede",
    "options": [
      {
        "option_text": "Networking gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "Storage gestito dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "Server s gestit i dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "Virtualizzazione gestit a dal cloud service provider",
        "answer": true
      },
      {
        "option_text": "Sistema Operativo gestito internamente",
        "answer": false
      },
      {
        "option_text": "Applicazione gestito internamente",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 203
  },
  {
    "code": "M1.1.3.1",
    "question": "Il Packet Switching",
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
        "option_text": "Prevede che se un messaggio arriva mancante di pacchetti o danneggiato, verrà inviata una notifica per inviare nuovamente il messaggio, se invece viene raggiunto l'ordine corretto dei pacchetti, verrà inviata notifica di conferma",
        "answer": true
      },
      {
        "option_text": "Prevede che se un messaggio arriva mancante di pacchetti o danneggiato il messaggio verrà considerato comunque corretto perché verrà corretto da un meccanismo di completamento automatico a correzione di errore",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 204
  },
  {
    "code": "M1.1.3.3",
    "question": "Il Routing Statico",
    "options": [
      {
        "option_text": "Può essere utilizzato anche quando il numero di dispositivi è elevato",
        "answer": false
      },
      {
        "option_text": "Può utilizzare l’algoritmo OSPF (Open Shortest Path First)",
        "answer": false
      },
      {
        "option_text": "Può utilizzare l’algoritmo RIP (Routing Information Protocol)",
        "answer": false
      },
      {
        "option_text": "Richiede l’intervento umano nella scelta delle rotte, attraverso la configurazione manuale delle rotte",
        "answer": true
      },
      {
        "option_text": "È gestito dai routers mediante la collaborazione con gli altri routers attraverso degli speciali protocolli",
        "answer": false
      },
      {
        "option_text": "Identifica i path migliori e provvedere di riempire automaticamente le tabelle di routing",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 205
  },
  {
    "code": "M1.1.3.4",
    "question": "Un indirizzo IPv6 ha la dimensione di",
    "options": [
      {
        "option_text": "32 bits, divisi in 4 ottetti binari",
        "answer": false
      },
      {
        "option_text": "32 bits, divisi in 8 gruppi da 4 bits",
        "answer": false
      },
      {
        "option_text": "128 bits, divisi in 8 gruppi da 16 bits",
        "answer": true
      },
      {
        "option_text": "128 bits, divisi in 16 gruppi da 8 bits",
        "answer": false
      },
      {
        "option_text": "256 bits, divisi in 32 gruppi da 8 bits",
        "answer": false
      },
      {
        "option_text": "256 bits, divisi in 8 gruppi da 32 bits",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 206
  },
  {
    "code": "M1.1.4.3",
    "question": "L’HyperText Markup Language (HTML)",
    "options": [
      {
        "option_text": "È un linguaggio di markup, ovvero che permette di indicare come disporre gli elementi all’interno di una pagina web",
        "answer": true
      },
      {
        "option_text": "Fornisce indicazioni sulla disposizione degli elementi attraverso degli appositi marcatori, detti tag",
        "answer": true
      },
      {
        "option_text": "Fornisce indicazioni sulla disposizione degli elementi attraverso dei marcatori che hanno la caratteristica di essere inclusi tra parentesi quadre",
        "answer": false
      },
      {
        "option_text": "Non può essere utilizzato liberamente ma bisogna riconoscere determinate royalties al W3C",
        "answer": false
      },
      {
        "option_text": "Permettere di disaccoppiare la struttura logica di una pagina web (definita appunto dal markup) e la sua rappresentazione grafica, una volta che la pagina è caricata dal browser",
        "answer": true
      },
      {
        "option_text": "Fornisce le indicazioni attraverso un file binario, di solito, con estensione HTML, spesso detto “Pagina HTML“",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 207
  },
  {
    "code": "M1.1.4.4",
    "question": "Il World Wide Web (WWW)",
    "options": [
      {
        "option_text": "È un servizio che permette l’accesso a contenuti ipertestuali (leggi documenti in formato ipertesto), e multimediali, sfruttando l'infrastruttura di Internet",
        "answer": true
      },
      {
        "option_text": "È un servizio che permette di visualizzare pagine web che hanno contenuti presenti solo sul server che gestisce il servizio",
        "answer": false
      },
      {
        "option_text": "È costituito da tre elementi o tecnologie fondamentali: l’URL, l’http e l’html",
        "answer": true
      },
      {
        "option_text": "Originariamente prevedeva la visualizzazione di sole pagine ipertestuali statiche",
        "answer": true
      },
      {
        "option_text": "L’evoluzione della tecnologia ha permesso di introdurre specifici software e linguaggi che permettono la realizzazione di effetti dinamici e interattivi",
        "answer": true
      },
      {
        "option_text": "Può funzionare anche senza un “Browser”",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 208
  },
  {
    "code": "M1.1.5.1",
    "question": "Il Virus Informatico",
    "options": [
      {
        "option_text": "È un frammento di codice eseguibile, anche autonomamente, da un programma ospite",
        "answer": false
      },
      {
        "option_text": "Deve appoggiarsi necessariamente ad un altro programma/eseguibile per essere attivato",
        "answer": true
      },
      {
        "option_text": "È auto-replicante, ovvero è in grado di creare la copia di sé stesso all'interno di altri file o computer senza il consenso o l'intervento di un utente",
        "answer": true
      },
      {
        "option_text": "Necessita del consenso o dell'intervento di un utente per gestire la duplicazione all’interno di altri file o computer",
        "answer": false
      },
      {
        "option_text": "È comparso per la prima volta negli anni 90",
        "answer": false
      },
      {
        "option_text": "Può essere considerato un “Worm”",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 209
  },
  {
    "code": "M1.2.1.4",
    "question": "Il Cyberspazio",
    "options": [
      {
        "option_text": "Può essere considerato la quinta dimensione bellica: Terra, mare, cielo, spazio e cyberspazio",
        "answer": true
      },
      {
        "option_text": "Può essere considerato la quarta dimensione bellica: Terra, mare, cielo e cyberspazio",
        "answer": false
      },
      {
        "option_text": "Può essere il “terreno” per cyber attacchi volti ad ottenere informazioni militari riservate e strategiche (ad esempio di natura tecnologica)",
        "answer": true
      },
      {
        "option_text": "Di non solito non riguarda o non è influenzato da problematiche di carattere geopolitico",
        "answer": false
      },
      {
        "option_text": "Può essere il “terreno” per cyber attacchi finalizzati a limitare o ad ostacolare l’accessibilità al web",
        "answer": true
      },
      {
        "option_text": "Può essere il “terreno” per cyber attacchi che minacciano l’integrità di programmi ed informazioni mettendo a repentaglio la vita di diverse persone e di minacciare gli interessi nazionali di un paese",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 210
  },
  {
    "code": "M1.2.2.2",
    "question": "Le organizzazioni Cyber «Criminali» Possono essere tre tipologie di organizzazioni:",
    "options": [
      {
        "option_text": "sovvenzionate da Governi (più o meno «canaglia»), a scopo di Lucro oppure organizzazioni “hacktiviste”",
        "answer": true
      },
      {
        "option_text": "Possono essere quattro tipologie di organizzazioni: sovvenzionate da Governi (più o meno «canaglia»), a scopo di Lucro, “hacktiviste” oppure organizzazioni “ethical”",
        "answer": false
      },
      {
        "option_text": "Se sovvenzionate dai governi hanno come obiettivo lo sviluppo e il test di vere e proprie armi di natura cyber",
        "answer": true
      },
      {
        "option_text": "A scopo di lucro sono organizzate come vere e proprie organizzazioni mafiose, utilizzano società terze per riciclare il denaro proveniente dalle attività illecite",
        "answer": true
      },
      {
        "option_text": "A scopo di lucro utilizzano criptovalute perché non è possibile tracciare transazioni effettuate",
        "answer": true
      },
      {
        "option_text": "Utilizzano massimamente il deep and dark web ma non sembrano esserci “specializzazioni” nei vari stati o aree geografiche",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 211
  },
  {
    "code": "M1.3.1.14",
    "question": "Quali di questi livelli ISO/OSI sono livelli logici legati agli Host",
    "options": [
      {
        "option_text": "Livello 2 – Collegamento",
        "answer": false
      },
      {
        "option_text": "Livello 3 – Rete",
        "answer": false
      },
      {
        "option_text": "Livello 4 – Trasporto",
        "answer": true
      },
      {
        "option_text": "Livello 5 – Sessione",
        "answer": true
      },
      {
        "option_text": "Livello 6 – Presentazione",
        "answer": true
      },
      {
        "option_text": "Livello 7 – Applicazione",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 212
  },
  {
    "code": "M1.3.1.17",
    "question": "Quali delle seguenti funzioni appartengono al livello ISO/OSI di Trasporto (4)",
    "options": [
      {
        "option_text": "Servizio orientato alla connessione",
        "answer": true
      },
      {
        "option_text": "Corretto ordine di consegna",
        "answer": true
      },
      {
        "option_text": "Trasferimento affidabile",
        "answer": true
      },
      {
        "option_text": "Controllo di flusso",
        "answer": true
      },
      {
        "option_text": "Controllo di congestione",
        "answer": true
      },
      {
        "option_text": "Definizione della sessione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 213
  },
  {
    "code": "M1.3.1.20",
    "question": "Cosa sono gli “Open System”?",
    "options": [
      {
        "option_text": "Sono sistemi che pur avendo sistemi operativi differenti riescono ad interagire tra loro grazie a standard predefiniti",
        "answer": true
      },
      {
        "option_text": "Sono sistemi che avendo gli stessi sistemi operativi ma hardware differenti riescono ad interagire tra loro grazie a standard predefiniti",
        "answer": false
      },
      {
        "option_text": "Sono sistemi aperti che hanno come elemento che gli accomuna il sistema operativo UNIX",
        "answer": false
      },
      {
        "option_text": "Sono gli elementi chiave alla base della standardizzazione effettuata da ISO per la comunicazione delle reti di calcolatori",
        "answer": true
      },
      {
        "option_text": "Sono gli elementi chiave dell’operazione di standardizzazione OSI (Open System Interconnection) di ISO",
        "answer": true
      },
      {
        "option_text": "Hanno permesso allo standard ISO/OSI di diventare uno standard “de facto” grazie anche all’approccio pragmatico dell’insieme di protocolli TCP/IP",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 214
  },
  {
    "code": "M1.3.2.13",
    "question": "Le Fibre Ottiche multimodali Prevedono una sola modalità di propagazione:",
    "options": [
      {
        "option_text": "un'unica lunghezza d'onda della luce nel nucleo della fibra",
        "answer": false
      },
      {
        "option_text": "Prevedono nuclei di due dimensioni e almeno cinque varianti",
        "answer": true
      },
      {
        "option_text": "Ha una distanza massima di trasmissione molto maggiore rispetto alla fibra monomodale",
        "answer": false
      },
      {
        "option_text": "Si utilizza maggiormente nelle connessioni a breve raggio",
        "answer": true
      },
      {
        "option_text": "Ha un nucleo di diametro esteso per consentire il passaggio della luce a diverse frequenze o lunghezze d’onda, in modo da trasmettere simultaneamente più canali di dati",
        "answer": true
      },
      {
        "option_text": "Ha un nucleo di vetro di dimensioni maggiori o uguali a 50 microm",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 215
  },
  {
    "code": "M1.3.4.1",
    "question": "La rete LAN (Local Area Network)",
    "options": [
      {
        "option_text": "Collega assieme più computer per un uso privato come per uso aziendale senza vincoli sul numero di connessioni",
        "answer": true
      },
      {
        "option_text": "Utilizza uno standard ampiamente e uniformemente diffuso ovvero l’Ethernet",
        "answer": true
      },
      {
        "option_text": "Utilizza per la trasmissione dati cavi in rame, o fibra ottica",
        "answer": true
      },
      {
        "option_text": "Ha una portata che dipende dagli standard e dal mezzo di trasmissione utilizzati; tuttavia, è possibile aumentarla attraverso un ripetitore (repeater)",
        "answer": true
      },
      {
        "option_text": "Con lo standard Ethernet Gigabit (100 Mbit/s), tramite cavo di rame, è possibile ottenere un raggio d’azione di diversi chilometri",
        "answer": false
      },
      {
        "option_text": "Di solito si estende per più complessi edilizi, sino ad interi quartieri",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 216
  },
  {
    "code": "M1.3.4.3",
    "question": "Quali delle seguenti sono Topologie di Rete",
    "options": [
      {
        "option_text": "Stella",
        "answer": true
      },
      {
        "option_text": "Maglia Parziale",
        "answer": true
      },
      {
        "option_text": "Maglia Completa",
        "answer": true
      },
      {
        "option_text": "Catena",
        "answer": false
      },
      {
        "option_text": "Bus",
        "answer": true
      },
      {
        "option_text": "Foglia",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 217
  },
  {
    "code": "M1.3.4.4",
    "question": "In un sistema informatico il SPOF (Single Point of Failure)",
    "options": [
      {
        "option_text": "È una parte del sistema hardware il cui malfunzionamento può portare ad anomalie o alla cessazione del servizio di tutto il sistema",
        "answer": false
      },
      {
        "option_text": "È una parte del sistema, hardware o software, il cui malfunzionamento può portare ad anomalie o alla cessazione del servizio di tutto il sistema",
        "answer": true
      },
      {
        "option_text": "È particolarmente critico nei sistemi che devono essere costantemente attivi",
        "answer": true
      },
      {
        "option_text": "Può essere evitato attraverso l’uso di componenti ridondanti, considerando che anche uno solo punto di vulnerabilità può compromettere un intero sistema",
        "answer": true
      },
      {
        "option_text": "Può essere evitato migliorando l’affidabilità dei componenti singoli",
        "answer": false
      },
      {
        "option_text": "Può riguardare anche un servizio acquisito esternamente",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 218
  },
  {
    "code": "M2.1.1.4",
    "question": "L’Azienda:",
    "options": [
      {
        "option_text": "È un organismo composto di persone e beni economici, diretto al raggiungimento di un fine economico, d'interesse sia pubblico sia privato",
        "answer": true
      },
      {
        "option_text": "È costituita di persone e beni economici ovvero quei beni ottenibili mediante l'attività umana o disponibili in quantità limitata",
        "answer": true
      },
      {
        "option_text": "È valutata anche in base ai marchi e i brevetti di proprietà, due tipici esempi di beni materiali",
        "answer": false
      },
      {
        "option_text": "È organizzata dall’imprenditore per l’",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 219
  },
  {
    "code": "M2.1.2.5",
    "question": "Le aziende di produzione indiretta",
    "options": [
      {
        "option_text": "Creano un valore aggiunto a beni e servizi già esistenti mediante un processo di trasformazione economica e di valorizzazione che ne aumenta l'utilità finale o ne agevola lo scambio",
        "answer": true
      },
      {
        "option_text": "Producono beni e servizi mediante un processo di produzione materiale",
        "answer": false
      },
      {
        "option_text": "Possono essere imprese bancarie, assicuratrici, commerciali ecc.",
        "answer": true
      },
      {
        "option_text": "Possono essere industrie manifatturiere, imprese agricole, ecc.",
        "answer": false
      },
      {
        "option_text": "Possono essere aziende di trasporto",
        "answer": true
      },
      {
        "option_text": "Sono aziende il cui sia il soggetto giuridico che quello economico sono solo di diritto privato",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 220
  },
  {
    "code": "M2.1.2.6",
    "question": "Le aziende di produzione hanno obiettivi",
    "options": [
      {
        "option_text": "Primari ovvero legati alla stessa sopravvivenza dell'impresa",
        "answer": true
      },
      {
        "option_text": "Primari che sono collegati ai processi produttivi e alla vendita dei prodotti sul mercato",
        "answer": true
      },
      {
        "option_text": "Secondari ovvero obiettivi di importanza secondaria",
        "answer": false
      },
      {
        "option_text": "Secondari ovvero il cui raggiungimento permette di conseguire, nel modo più economico possibile, gli obiettivi primari",
        "answer": true
      },
      {
        "option_text": "Collaterali ovvero obiettivi economici come il rendimento e la massimizzazione del profitto",
        "answer": true
      },
      {
        "option_text": "Collaterali ovvero obiettivi incidentali, non previsti preventivamente",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 221
  },
  {
    "code": "M2.1.2.7",
    "question": "Le società di capitali",
    "options": [
      {
        "option_text": "Per legge hanno un importo minimo per il capitale sociale",
        "answer": true
      },
      {
        "option_text": "Per legge non hanno un importo minimo per il capitale sociale",
        "answer": false
      },
      {
        "option_text": "Se di piccole-medie dimensioni e con pochi soci coinvolti nell’attività sono S.r.l.",
        "answer": true
      },
      {
        "option_text": "Prevedono più organi sociali ognuno con le proprie competenze",
        "answer": true
      },
      {
        "option_text": "In linea generale hanno un amministratore unico o un consiglio di amministrazione",
        "answer": true
      },
      {
        "option_text": "Hanno autonomia patrimoniale imperfetta: i creditori sociali possono agire sul patrimonio personale dei singoli soci ma solo dopo aver escusso infruttuosamente sul patrimonio sociale",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 222
  },
  {
    "code": "M2.2.1.2",
    "question": "Quali dei seguenti possono essere considerati asset aziendali",
    "options": [
      {
        "option_text": "Sistemi informativi Gestionali (Contabilità, Bilancio, Tesoreria, Cassa, Controllo di Gestione)",
        "answer": true
      },
      {
        "option_text": "Conoscenza commerciale: clienti, storico degli ordini, pagamenti & insoluti",
        "answer": true
      },
      {
        "option_text": "Impianti produttivi",
        "answer": true
      },
      {
        "option_text": "Facility produttivi in affitto",
        "answer": false
      },
      {
        "option_text": "Know-how aziendale",
        "answer": true
      },
      {
        "option_text": "Brevetti",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 223
  },
  {
    "code": "M3.4.2.1",
    "question": "Il posizionamento dello standard ISA/IEC 62443 nello stack ISA 95 (Purdue Model)",
    "options": [
      {
        "option_text": "È tra il livello 1 e il livello 2",
        "answer": false
      },
      {
        "option_text": "È tra il livello 0 e il livello 3",
        "answer": true
      },
      {
        "option_text": "È tra il livello 2 e il livello 4",
        "answer": false
      },
      {
        "option_text": "È tra il livello 3 e il livello 4",
        "answer": false
      },
      {
        "option_text": "È tra il livello 0 e il livello 2",
        "answer": false
      },
      {
        "option_text": "È tra il livello 1 e il livello 5",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 224
  },
  {
    "code": "M3.4.4.2",
    "question": "Il Paradigma Operazionale",
    "options": [
      {
        "option_text": "Prevede i seguenti elementi in ordine di importanza: Affidabilità-> Sicurezza Fisica->Impatto sul Prodotto o sul Servizio",
        "answer": false
      },
      {
        "option_text": "Prevede i seguenti elementi in ordine di importanza: Affidabilità ->Impatto sul Prodotto o sul Servizio->Sicurezza Fisica",
        "answer": false
      },
      {
        "option_text": "Prevede i seguenti elementi in ordine di importanza: Sicurezza Fisica->Affidabilità->Impatto sul Prodotto o sul Servizio",
        "answer": true
      },
      {
        "option_text": "Prevede un diverso ordine di importanza per i fattori CIA: Disponibilità (Accessibilità)-> Integrità-> Riservatezza",
        "answer": true
      },
      {
        "option_text": "Prevede un diverso ordine di importanza per i fattori CIA: Integrità-> Riservatezza-> Disponibilità (Accessibilità)",
        "answer": false
      },
      {
        "option_text": "Prevede un diverso ordine di importanza per i fattori CIA: Riservatezza-> Disponibilità (Accessibilità)-> Integrità",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 225
  },
  {
    "code": "M4.2.1.1",
    "question": "Quali sono i maggiori rischi cyber per le Organizzazioni Bancarie e Finanziarie?",
    "options": [
      {
        "option_text": "Finanziario e di mancanza di erogazione del servizio al pubblico",
        "answer": false
      },
      {
        "option_text": "Finanziario e di continuità del business",
        "answer": true
      },
      {
        "option_text": "Finanziario e di diffusione di dati sensibili",
        "answer": false
      },
      {
        "option_text": "Fisico e di continuità di erogazione del servizio al pubblico",
        "answer": false
      },
      {
        "option_text": "Reputazionale e di continuità del business",
        "answer": false
      },
      {
        "option_text": "Terroristico e di possibile bersaglio strategico",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 226
  },
  {
    "code": "M1.3.1.21",
    "question": "Quali funzioni prevede il livello ISO/OSI Applicazione (7)",
    "options": [
      {
        "option_text": "Scambio di e-mail",
        "answer": true
      },
      {
        "option_text": "Compressione dei dati",
        "answer": false
      },
      {
        "option_text": "Accesso ai database",
        "answer": true
      },
      {
        "option_text": "Accesso ai siti Web",
        "answer": true
      },
      {
        "option_text": "Gestione remota di applicazioni distribuite",
        "answer": true
      },
      {
        "option_text": "Formattazione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 227
  },
  {
    "code": "M1.3.1.22",
    "question": "Quali di questi livelli ISO/OSI sono livelli logici legati ai mezzi di trasmissione",
    "options": [
      {
        "option_text": "Livello 1 – Fisico",
        "answer": true
      },
      {
        "option_text": "Livello 2 – Collegamento",
        "answer": true
      },
      {
        "option_text": "Livello 3 – Rete",
        "answer": true
      },
      {
        "option_text": "Livello 4 – Trasporto",
        "answer": false
      },
      {
        "option_text": "Livello 5 – Sessione",
        "answer": false
      },
      {
        "option_text": "Livello 6 – Presentazione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 228
  },
  {
    "code": "M1.3.1.23",
    "question": "La comunicazione tra gli omologhi livelli dello stack ISO/OSI",
    "options": [
      {
        "option_text": "È Sempre una comunicazione logica",
        "answer": false
      },
      {
        "option_text": "È sempre una comunicazione fisica",
        "answer": false
      },
      {
        "option_text": "È una comunicazione logica per i livelli dal 2 al 7 e fisica per il livello 1",
        "answer": true
      },
      {
        "option_text": "È una comunicazione logica per i livelli dal 1 al 6 e fisica per il livello 7",
        "answer": false
      },
      {
        "option_text": "È una comunicazione logica per i livelli dal 1 al 3 e fisica per i livelli dal 4 al 7",
        "answer": false
      },
      {
        "option_text": "È sempre tra un Host mittente e un Host destinatario",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 229
  },
  {
    "code": "M4.1.1.17",
    "question": "La Pianificazione Operativa",
    "options": [
      {
        "option_text": "La pianificazione operativa è il processo attraverso il quale l’impresa definisce gli obiettivi da raggiungere e le azioni per raggiungere tali scopi nel breve periodo",
        "answer": true
      },
      {
        "option_text": "Può essere rappresentata dagli obiettivi strategici che si intendono raggiungere nel medio periodo",
        "answer": false
      },
      {
        "option_text": "Può essere rappresentata dagli obiettivi che si vogliono raggiungere nell’anno di attività dell’azienda",
        "answer": true
      },
      {
        "option_text": "È sempre rappresentata dalla mission dell’azienda a lungo termine",
        "answer": false
      },
      {
        "option_text": "Si distingue da Pianificazione Tattica e Strategica che definiscono gli obiettivi, rispettivamente di medio e lungo periodo",
        "answer": true
      },
      {
        "option_text": "Può essere denominata anche Pianificazione Sinergica o Evolutiva",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 230
  },
  {
    "code": "M2.1.2.8",
    "question": "Le Società di Persone",
    "options": [
      {
        "option_text": "Per legge non hanno un importo minimo per il capitale sociale",
        "answer": true
      },
      {
        "option_text": "Per legge hanno un importo minimo per il capitale sociale",
        "answer": false
      },
      {
        "option_text": "Non prevedono organi sociali, ogni socio illimitatamente responsabile può amministrare",
        "answer": true
      },
      {
        "option_text": "Possono prevedere più organi sociali ognuno con le proprie competenze",
        "answer": false
      },
      {
        "option_text": "Hanno un’autonomia patrimoniale definita “perfetta”: i soci sono personalmente responsabili delle obbligazioni sociali, solo i beni conferiti sono formalmente di proprietà della società",
        "answer": false
      },
      {
        "option_text": "Hanno un’autonomia patrimoniale definita “imperfetta”: i creditori sociali possono agire sul patrimonio personale dei singoli soci ma solo dopo aver escusso infruttuosamente sul patrimonio sociale",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 231
  },
  {
    "code": "M2.1.2.9",
    "question": "Le Società S.p.A.",
    "options": [
      {
        "option_text": "Sono Società di Persone",
        "answer": false
      },
      {
        "option_text": "Sono Società di Capitali",
        "answer": true
      },
      {
        "option_text": "Sono Società a responsabilità illimitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "Sono Società a responsabilità limitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "Sono Società a responsabilità dei soci limitata al capitale sottoscritto",
        "answer": true
      },
      {
        "option_text": "Sono Società a responsabilità dei soci illimitata oltre al capitale sottoscritto",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 232
  },
  {
    "code": "M2.1.3.5",
    "question": "Un’azienda che distribuisce gas ed elettricità",
    "options": [
      {
        "option_text": "Appartiene al settore delle Utility",
        "answer": true
      },
      {
        "option_text": "Può essere definita anche Multiutility",
        "answer": true
      },
      {
        "option_text": "Può essere un’infrastruttura critica",
        "answer": true
      },
      {
        "option_text": "Può essere un Operatore di Servizi Essenziali",
        "answer": true
      },
      {
        "option_text": "È un’azienda manifatturiera",
        "answer": false
      },
      {
        "option_text": "Appartiene al settore secondario",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 233
  },
  {
    "code": "M2.2.1.4",
    "question": "A che tipi di rischio può si incorrere in caso di attacco Cyber al sistema gestionale aziendale?",
    "options": [
      {
        "option_text": "Rischio generale per la salute umana",
        "answer": false
      },
      {
        "option_text": "Rischio di emissioni nocive per l’ambiente",
        "answer": false
      },
      {
        "option_text": "Rischio violazione dati sensibili e Privacy",
        "answer": true
      },
      {
        "option_text": "Rischio Business Continuity",
        "answer": true
      },
      {
        "option_text": "Rischio Service Continuity",
        "answer": true
      },
      {
        "option_text": "Rischio economico",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 234
  },
  {
    "code": "M2.2.2.3",
    "question": "Il Vettore di Attacco può sfruttare tipicamente",
    "options": [
      {
        "option_text": "Vulnerabilità informatiche e mancato aggiornamento del software",
        "answer": true
      },
      {
        "option_text": "Gestione di identità e permessi non adeguata",
        "answer": true
      },
      {
        "option_text": "Meccanismi di autenticazione deboli",
        "answer": true
      },
      {
        "option_text": "App malevole",
        "answer": false
      },
      {
        "option_text": "Obsolescenza",
        "answer": true
      },
      {
        "option_text": "Mancanza di conoscenza da parte del personale",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 235
  },
  {
    "code": "M3.1.1.7",
    "question": "Quali sono le fasi del processo di monitoraggio e gestione degli incidenti informatici?",
    "options": [
      {
        "option_text": "Una fase di Preparazione Iniziale e poi un ciclo composto da due fasi consecutive, Contenimento-Eradicazione-Ripristino e Rilevamento-Analisi ed in ultimo una fase di Analisi Post-Incidente",
        "answer": false
      },
      {
        "option_text": "Una fase di Preparazione Iniziale e poi una fase ciclica composta da due parti: Rilevamento-Analisi e Contenimento- Eradicazione-Ripristino ed in ultimo una fase di Analisi Post-Incidente",
        "answer": true
      },
      {
        "option_text": "Un ciclo composto da due fasi, Rilevamento-Analisi e Contenimento-Eradicazione-ripristino e una fase di Analisi Post- Incidente",
        "answer": false
      },
      {
        "option_text": "Una fase di Preparazione Iniziale, una fase di Rilevamento-Analisi, una fase di Contenimento-Eradicazione-Ripristino ed in ultimo una fase di Analisi Post-Incidente",
        "answer": false
      },
      {
        "option_text": "Una fase prima dell’incidente, una fase durante l’incidente e una fase dopo l’incidente",
        "answer": true
      },
      {
        "option_text": "Una fase di Rilevamento dell’Incidente e di Verifica dei danni dopo l’incidente",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 236
  },
  {
    "code": "M3.1.2.4",
    "question": "L’Action Workflow",
    "options": [
      {
        "option_text": "È un tipo di modellizzazione basata sulle attività",
        "answer": false
      },
      {
        "option_text": "È un tipo di modellizzazione basata sull’interazione o la negoziazione",
        "answer": true
      },
      {
        "option_text": "È un tipo di modellizzazione basata sui dati",
        "answer": false
      },
      {
        "option_text": "È particolarmente adatto a rappresentare processi in cui gli elementi di decisione sono particolarmente importanti",
        "answer": true
      },
      {
        "option_text": "Mette al centro del modello le condizioni di soddisfazione (o di accordo) tra un cliente e un operatore/realizzatore",
        "answer": true
      },
      {
        "option_text": "Mette al centro del modello le informazioni sulla sequenza delle attività da realizzare",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 237
  },
  {
    "code": "M3.1.3.5",
    "question": "Lo Standard Internazionale",
    "options": [
      {
        "option_text": "ISO 45001:2018 è relativo alla sicurezza del lavoro",
        "answer": true
      },
      {
        "option_text": "ISO 14001:2015 è relativo all’ambiente ovvero sui sistemi di gestione ambientale",
        "answer": true
      },
      {
        "option_text": "ISO 26000:2010 è relativo alla contabilità aziendale",
        "answer": false
      },
      {
        "option_text": "ISO 9001:2015 è relativo alla qualità",
        "answer": true
      },
      {
        "option_text": "ISO 27001:2013 è relativo alla sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "ISA/IEC 62443 è relativo alla sicurezza delle reti informatiche aziendali in generale",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 238
  },
  {
    "code": "M3.2.1.12",
    "question": "La macroarea “Linee Guida” della famiglia di standard ISO/IEC 27000 include le norme",
    "options": [
      {
        "option_text": "27002",
        "answer": true
      },
      {
        "option_text": "27003",
        "answer": true
      },
      {
        "option_text": "27006",
        "answer": false
      },
      {
        "option_text": "27007",
        "answer": true
      },
      {
        "option_text": "27011",
        "answer": false
      },
      {
        "option_text": "27021",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 239
  },
  {
    "code": "M3.2.1.13",
    "question": "La macroarea “Requisiti” della famiglia di standard ISO/IEC 27000 include le norme",
    "options": [
      {
        "option_text": "27001",
        "answer": true
      },
      {
        "option_text": "27006",
        "answer": true
      },
      {
        "option_text": "27009",
        "answer": true
      },
      {
        "option_text": "27002",
        "answer": false
      },
      {
        "option_text": "27003",
        "answer": false
      },
      {
        "option_text": "27011",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 240
  },
  {
    "code": "M3.2.1.14",
    "question": "Nell’ISO/IEC 27000 il ciclo di Deming o PDCA si associa",
    "options": [
      {
        "option_text": "Il PLAN alla pianificazione in un ISMS",
        "answer": false
      },
      {
        "option_text": "Il PLAN all’istituzione di un ISMS",
        "answer": true
      },
      {
        "option_text": "Il DO all’implementazione e conduzione dell’ISMS",
        "answer": true
      },
      {
        "option_text": "Il CHECK al monitoraggio e alla revisione dell’ISMS",
        "answer": true
      },
      {
        "option_text": "L’ACT all’attuazione dell’ISMS",
        "answer": false
      },
      {
        "option_text": "L’ACT alla manutenzione e al miglioramento dell’ISMS",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 241
  },
  {
    "code": "M3.2.1.15",
    "question": "Nell’area tematica di criticità “Supporto” dell’ISO/IEC 27001 sono presenti i seguenti requisiti",
    "options": [
      {
        "option_text": "Risorse",
        "answer": true
      },
      {
        "option_text": "Politica",
        "answer": false
      },
      {
        "option_text": "Consapevolezza",
        "answer": true
      },
      {
        "option_text": "Comunicazione",
        "answer": true
      },
      {
        "option_text": "Informazioni documentate",
        "answer": true
      },
      {
        "option_text": "Leadership e impegno",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 242
  },
  {
    "code": "M3.2.1.17",
    "question": "Nell’area tematica di criticità “Contesto dell’Organizzazione” dell’ISO/IEC 27001 sono presenti i seguenti requisiti",
    "options": [
      {
        "option_text": "Comprendere l’organizzazione e il suo contesto",
        "answer": true
      },
      {
        "option_text": "Comprendere le necessità e le aspettative delle parti interessate",
        "answer": true
      },
      {
        "option_text": "Comprendere le necessità di sicurezza del profilo di business",
        "answer": false
      },
      {
        "option_text": "Determinare il campo di applicazione del sistema di gestione per la sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "Sistema di gestione per la sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "Sistema di gestione della sicurezza di reti e sistemi",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 243
  },
  {
    "code": "M3.2.1.16",
    "question": "Quali delle seguenti sono Aree di Controllo secondo ISO 27001 2013?",
    "options": [
      {
        "option_text": "Politiche per la sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "Politiche per la sicurezza dei dati",
        "answer": false
      },
      {
        "option_text": "Sicurezza fisica e ambientale",
        "answer": true
      },
      {
        "option_text": "Sicurezza logica e fisica",
        "answer": false
      },
      {
        "option_text": "Gestione dei Fornitori",
        "answer": false
      },
      {
        "option_text": "Gestione dei clienti",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 244
  },
  {
    "code": "M3.2.2.1",
    "question": "L’Area di Controllo 7 dell’ISO 27001 2013 Annex A “Sicurezza delle Risorse Umane” include le seguenti Categorie di Controllo",
    "options": [
      {
        "option_text": "Prima dell’Impiego",
        "answer": true
      },
      {
        "option_text": "Selezione del Personale",
        "answer": false
      },
      {
        "option_text": "Durante l’impiego",
        "answer": true
      },
      {
        "option_text": "Formazione del Personale",
        "answer": false
      },
      {
        "option_text": "Discontinuità del rapporto di lavoro",
        "answer": false
      },
      {
        "option_text": "Cessazione e variazione del rapporto di lavoro",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 245
  },
  {
    "code": "M3.2.2.2",
    "question": "L’Area di Controllo 9 dell’ISO 27001 2013 Annex A “Controllo degli Accessi (logici)” include le seguenti Categorie di Controllo",
    "options": [
      {
        "option_text": "Requisiti di business per il controllo degli accessi",
        "answer": true
      },
      {
        "option_text": "Gestione degli accessi degli utenti",
        "answer": true
      },
      {
        "option_text": "Responsabilità dell’utente",
        "answer": true
      },
      {
        "option_text": "Responsabilità del manager",
        "answer": false
      },
      {
        "option_text": "Controllo degli accessi ai sistemi e alle applicazioni",
        "answer": true
      },
      {
        "option_text": "Controllo degli accessi fisici ai sistemi e alle applicazioni",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 246
  },
  {
    "code": "M3.2.3.8",
    "question": "Nel Framework Core di NIST CF la funzione “Identify” è costituta dalle seguenti Categorie:",
    "options": [
      {
        "option_text": "Asset management",
        "answer": true
      },
      {
        "option_text": "Business Environment",
        "answer": true
      },
      {
        "option_text": "Analysis",
        "answer": false
      },
      {
        "option_text": "Risk Mitigation",
        "answer": false
      },
      {
        "option_text": "Risk Management Strategy",
        "answer": true
      },
      {
        "option_text": "Supply Chain Risk Management",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 247
  },
  {
    "code": "M3.2.3.9",
    "question": "Nel Framework Core di NIST CF la funzione “Protect” è costituta dalle seguenti Categorie:",
    "options": [
      {
        "option_text": "Identity Management and Access Control",
        "answer": true
      },
      {
        "option_text": "Awareness and Training",
        "answer": true
      },
      {
        "option_text": "Data Security",
        "answer": true
      },
      {
        "option_text": "Information Protection Processes & Procedures",
        "answer": true
      },
      {
        "option_text": "Anomalies and Events",
        "answer": false
      },
      {
        "option_text": "Protective Technology",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 248
  },
  {
    "code": "M3.2.6.10",
    "question": "Ciascun elemento di un SCMS secondo l’ISA/IEC 62443 ha",
    "options": [
      {
        "option_text": "Un Obiettivo per Identificare chiaramente gli obiettivi dei requisiti dell’elemento",
        "answer": true
      },
      {
        "option_text": "Un Fondamento Logico che fornisce una guida per chiarire la logica dei requisiti dell’elemento",
        "answer": true
      },
      {
        "option_text": "Una Descrizione estesa dell’elemento e dei requisiti che sono contenuti",
        "answer": true
      },
      {
        "option_text": "Un link a documenti associati",
        "answer": false
      },
      {
        "option_text": "Associati una lista di requisiti",
        "answer": true
      },
      {
        "option_text": "Associato un solo requisito specifico",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 249
  },
  {
    "code": "M3.2.6.11",
    "question": "Quali dei seguenti sono Fondational Requirements secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "Identification and authentication control (IAC)",
        "answer": true
      },
      {
        "option_text": "User Controller (UCR)",
        "answer": false
      },
      {
        "option_text": "System Integrity (SI)",
        "answer": true
      },
      {
        "option_text": "Data Confidentiality (DC)",
        "answer": true
      },
      {
        "option_text": "Restrict Data Flow (RDF)",
        "answer": true
      },
      {
        "option_text": "Resource Providing (RP)",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 250
  },
  {
    "code": "M1.1.2.9",
    "question": "La banda di trasmissione SHF 1",
    "options": [
      {
        "option_text": "Identifica una banda di frequenze dove si trovano anche le microonde",
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
        "option_text": "6 È utilizzata dai Radar, dai link a microonde e dalle comunicazioni satellitari",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 251
  },
  {
    "code": "M1.1.3.2",
    "question": "Il Routing",
    "options": [
      {
        "option_text": "Il Routing è l'instradamento effettuato tra reti differenti con l’ausilio delle tabelle di instradamento configurate a livello dei router",
        "answer": true
      },
      {
        "option_text": "Il Routing è l'instradamento effettuato all’interno della stessa rete con l’ausilio delle tabelle di instradamento configurate a livello dei router",
        "answer": false
      },
      {
        "option_text": "Per il suo funzionamento considera che i router siano a conoscenza degli indirizzi solo delle reti a cui sono direttamente collegati",
        "answer": true
      },
      {
        "option_text": "Per il suo funzionamento considera che i router siano a conoscenza degli indirizzi delle reti a cui sono direttamente o indirettamente collegati",
        "answer": false
      },
      {
        "option_text": "Nella tabella di instradamento ogni riga corrisponde a una regola e le regole vengono esaminate dalla prima all’ultima, se ci sono più regole che corrispondono all'indirizzo fornito, viene scelta la regola che ha più bit in comune con l'indirizzo fornito",
        "answer": true
      },
      {
        "option_text": "Nella tabella di instradamento ogni riga corrisponde a una regola e le regole vengono esaminate dalla prima all’ultima, se ci sono più regole che corrispondono all'indirizzo fornito, viene scelta la prima regola che viene esaminata",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 252
  },
  {
    "code": "M1.1.3.5",
    "question": "Un indirizzo IPv4",
    "options": [
      {
        "option_text": "Ha la dimensione di 32 bits, divisi in 4 gruppi da 8 bits",
        "answer": true
      },
      {
        "option_text": "Ha la dimensione di 32 bits, divisi in 8 gruppi da 4 bits",
        "answer": false
      },
      {
        "option_text": "Ha la dimensione di 128 bits, divisi in 8 gruppi da 16 bits",
        "answer": false
      },
      {
        "option_text": "Ha la dimensione di 256 bits, divisi in 8 gruppi da 32 bits",
        "answer": false
      },
      {
        "option_text": "Può essere assegnato solo dall’ InterNIC (InterNetwork Information Center)",
        "answer": true
      },
      {
        "option_text": "Può essere assegnato da chiunque",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 253
  },
  {
    "code": "M1.1.4.2",
    "question": "L’Uniform Resource Locator (URL)",
    "options": [
      {
        "option_text": "È una sequenza di caratteri che identifica univocamente l'indirizzo di una risorsa presente su un host (server) che fa parte di una rete di computer e resa accessibile a un client",
        "answer": true
      },
      {
        "option_text": "È una sequenza di caratteri esclusivamente alfanumerici",
        "answer": false
      },
      {
        "option_text": "Identifica univocamente gli indirizzi delle risorse come documenti, un'immagini, video, tipicamente presente sui server",
        "answer": true
      },
      {
        "option_text": "Può utilizzare protocolli http, https, ftp o mms",
        "answer": true
      },
      {
        "option_text": "Si avvale del DNS (Domain Name System) per “risolvere” l’URL in indirizzo IP",
        "answer": true
      },
      {
        "option_text": "Nel caso utilizzi il protocollo https realizza una comunicazione client server non criptata",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 254
  },
  {
    "code": "M1.1.6.1",
    "question": "Una Minaccia alla sicurezza informatica",
    "options": [
      {
        "option_text": "Può essere definita come un codice eseguibile che, utilizzando un vettore esterno o interno al perimetro aziendale, ha la capacità di compiere operazioni dannose per la macchina in cui si trova, per il sistema informatico in cui si è inserito o per i dati in esso contenuti o gestiti",
        "answer": true
      },
      {
        "option_text": "Si propaga e si concretizza sempre indipendentemente dal fattore umano",
        "answer": false
      },
      {
        "option_text": "Utilizza un vettore che può essere un attacco diretto o indiretto da parte di qualche malintenzionato o un incidente anche accidentale",
        "answer": true
      },
      {
        "option_text": "Può essere eliminata mediante l’installazione di un buon antivirus",
        "answer": false
      },
      {
        "option_text": "Può penetrare qualsiasi tipo di file eseguibile e diffondersi nel momento in cui il file viene copiato e inviato da un utente all'altro",
        "answer": true
      },
      {
        "option_text": "Può essere costituita dai Ramsomware",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 255
  },
  {
    "code": "M1.3.1.18",
    "question": "Quali delle seguenti funzioni appartengono al livello ISO/OSI Sessione (5)",
    "options": [
      {
        "option_text": "Servizio orientato alla connessione",
        "answer": false
      },
      {
        "option_text": "Corretto ordine di consegna",
        "answer": false
      },
      {
        "option_text": "Trasferimento affidabile",
        "answer": false
      },
      {
        "option_text": "Definizione della sessione",
        "answer": true
      },
      {
        "option_text": "Frammentazione e Riassemblaggio",
        "answer": false
      },
      {
        "option_text": "Sincronizzazione",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 256
  },
  {
    "code": "M1.3.1.19",
    "question": "Quali delle seguenti funzioni appartengono al livello ISO/OSI Presentazione (6)",
    "options": [
      {
        "option_text": "Crittografia",
        "answer": true
      },
      {
        "option_text": "Controllare il flusso",
        "answer": false
      },
      {
        "option_text": "Formattazione",
        "answer": true
      },
      {
        "option_text": "Accesso condiviso al canale MAC (Medium Access Control)",
        "answer": false
      },
      {
        "option_text": "Data Framing",
        "answer": false
      },
      {
        "option_text": "Compressione dei dati",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 257
  },
  {
    "code": "M1.3.4.2",
    "question": "La rete MAN (Metropolitan Area Network)",
    "options": [
      {
        "option_text": "È una rete di telecomunicazione a banda stretta, che collega più LAN geograficamente vicine",
        "answer": false
      },
      {
        "option_text": "È di solito utilizzata da singole filiali di un’azienda che vengono connesse ad una MAN attraverso l’affitto di linee dedicate",
        "answer": true
      },
      {
        "option_text": "Utilizza connessioni in fibra ottica, che consentono prestazioni migliori",
        "answer": true
      },
      {
        "option_text": "Ha una velocità di trasferimento tra due nodi distanti molto più lenta della comunicazione interna di una LAN",
        "answer": false
      },
      {
        "option_text": "Ha un’infrastruttura che viene messa a disposizione da provider che operano a livello internazionale",
        "answer": true
      },
      {
        "option_text": "A livello cittadino si collega a reti sovraregionali e internazionali, chiamate Wide Area Network (WAN)",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 258
  },
  {
    "code": "M2.2.1.3",
    "question": "Quali strategie posso utilizzare per mitigare i possibili danni da un attacco cyber ad una linea produttiva?",
    "options": [
      {
        "option_text": "Ridondare e rendere indipendenti le architetture di rete e i dispositivi informatici che gestiscono le macchine di produzione",
        "answer": true
      },
      {
        "option_text": "Realizzare un adeguato sistema di segmentazione e segregazione delle reti e degli apparati di controllo",
        "answer": true
      },
      {
        "option_text": "Aumentare gli stock delle materie prime",
        "answer": false
      },
      {
        "option_text": "Valutare, compatibilmente con i costi, la realizzazione di una linea produttiva parallela analoga",
        "answer": true
      },
      {
        "option_text": "Aumentare considerevolmente la quantità di prodotti finiti in magazzino",
        "answer": false
      },
      {
        "option_text": "Isolare completamente la rete industriale dalla rete office",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 259
  },
  {
    "code": "M2.3.1.4",
    "question": "Nella Gestione Aziendale le Operazioni Soggettive possono essere:",
    "options": [
      {
        "option_text": "Reperimento di mezzi finanziari",
        "answer": false
      },
      {
        "option_text": "Attività decisionali",
        "answer": true
      },
      {
        "option_text": "Investimenti",
        "answer": false
      },
      {
        "option_text": "Attività di controllo",
        "answer": true
      },
      {
        "option_text": "Attività di produzione",
        "answer": false
      },
      {
        "option_text": "Disinvestimento",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 260
  },
  {
    "code": "M2.3.1.5",
    "question": "L’ERP aziendale",
    "options": [
      {
        "option_text": "È l’Enterprise Resource Planning",
        "answer": true
      },
      {
        "option_text": "È Il Sistema Gestionale Aziendale",
        "answer": true
      },
      {
        "option_text": "Non fa parte del sistema informativo aziendale",
        "answer": false
      },
      {
        "option_text": "È un software",
        "answer": true
      },
      {
        "option_text": "È un hardware",
        "answer": false
      },
      {
        "option_text": "Può essere un servizio in cloud",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 261
  },
  {
    "code": "M2.3.2.3",
    "question": "L’Organigramma",
    "options": [
      {
        "option_text": "È la rappresentazione grafica della struttura di una organizzazione",
        "answer": true
      },
      {
        "option_text": "Rappresenta i legami funzionali e gerarchici che tengono unite le persone all’interno dell’organizzazione stessa",
        "answer": true
      },
      {
        "option_text": "Rappresenta solamente i legami funzionali che tengono unite le persone all’interno dell’organizzazione stessa",
        "answer": false
      },
      {
        "option_text": "Può essere di tipo Funzionale",
        "answer": true
      },
      {
        "option_text": "Può essere di tipo Perimetrale",
        "answer": false
      },
      {
        "option_text": "Può essere Matriciale",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 262
  },
  {
    "code": "M2.3.2.4",
    "question": "In ogni Organizzazione",
    "options": [
      {
        "option_text": "La Mansione deve essere assegnata a ogni individuo",
        "answer": true
      },
      {
        "option_text": "Può non essere associata una Mansione specifica ad un individuo",
        "answer": false
      },
      {
        "option_text": "Il Ruolo è l’insieme dei comportamenti previsti da una specifica figura professionale",
        "answer": true
      },
      {
        "option_text": "La Posizione è lo stato o il grado assegnato ad una figura professionale",
        "answer": true
      },
      {
        "option_text": "Ad ogni risorsa vanno assegnate delle responsabilità per raggiungere degli obiettivi aziendali comuni",
        "answer": true
      },
      {
        "option_text": "Le stesse mansioni i ruoli e le posizioni aziendali possono essere attribuite a più persone contemporaneamente",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 263
  },
  {
    "code": "M3.1.1.5",
    "question": "Quali dei seguenti sono i principali processi di Cyber Security (indicare )",
    "options": [
      {
        "option_text": "Monitoraggio degli Incidenti Informatici",
        "answer": true
      },
      {
        "option_text": "Gestione delle performance di rete",
        "answer": false
      },
      {
        "option_text": "Gestione degli incidenti informatici",
        "answer": true
      },
      {
        "option_text": "Gestione delle vulnerabilità",
        "answer": true
      },
      {
        "option_text": "Gestione delle obsolescenze",
        "answer": true
      },
      {
        "option_text": "Gestione delle risorse",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 264
  },
  {
    "code": "M3.1.1.6",
    "question": "Il SOC",
    "options": [
      {
        "option_text": "È il Security Operations Center",
        "answer": true
      },
      {
        "option_text": "È il Security Organization Center",
        "answer": false
      },
      {
        "option_text": "È un centro da cui vengono forniti servizi finalizzati alla sicurezza dei sistemi informativi dell'azienda stessa",
        "answer": true
      },
      {
        "option_text": "Può essere solo interno all’organizzazione",
        "answer": false
      },
      {
        "option_text": "Può anche fornire servizi di Incident Response, in questo caso svolge la funzione di CERT (Computer Emergency Response Team)",
        "answer": true
      },
      {
        "option_text": "Può avere anche funzioni di CSIRT (Computer Security Incident Response Team)",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 265
  },
  {
    "code": "M3.1.2.3",
    "question": "Quali sono le tipologie di Modellizzazione?",
    "options": [
      {
        "option_text": "Basata sui dati",
        "answer": true
      },
      {
        "option_text": "Basata su attività",
        "answer": true
      },
      {
        "option_text": "Basata su informazioni",
        "answer": false
      },
      {
        "option_text": "Basata su transizioni",
        "answer": false
      },
      {
        "option_text": "Basata su messaggi",
        "answer": false
      },
      {
        "option_text": "Basata su comunicazione",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 266
  },
  {
    "code": "M3.1.3.4",
    "question": "Perché le SOP (Standard Operating Procedure) sono importanti?",
    "options": [
      {
        "option_text": "Aiutano l’organizzazione a soddisfare gli standard di conformità",
        "answer": true
      },
      {
        "option_text": "Supportano ma non garantiscono che le attività aziendali non abbiano impatti ambientali negativi",
        "answer": false
      },
      {
        "option_text": "Semplificano e massimizzano la produzione/output",
        "answer": true
      },
      {
        "option_text": "Stabiliscono degli standard di sicurezza (fisica e logica)",
        "answer": true
      },
      {
        "option_text": "Supportano la formazione e la crescita professionale del personale",
        "answer": true
      },
      {
        "option_text": "Garantiscono sempre risultati coerenti",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 267
  },
  {
    "code": "M3.2.1.11",
    "question": "Quali dei seguenti gruppi di norme fanno parte della famiglia degli Standard ISO/IEC 27000? T1",
    "options": [
      {
        "option_text": "Norme che descrivono una panoramica e la terminologia o vocabolario",
        "answer": true
      },
      {
        "option_text": "Norme che specificano i requisiti",
        "answer": true
      },
      {
        "option_text": "Norme che identificano i processi",
        "answer": false
      },
      {
        "option_text": "Norme che descrivono le linee guida dettagliate",
        "answer": false
      },
      {
        "option_text": "Norme che descrivono le linee guida negli specifici ambiti/settori",
        "answer": true
      },
      {
        "option_text": "Norme aggiunte che descrivono delle direttive specializzate",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 268
  },
  {
    "code": "M3.2.5.1",
    "question": "Quali delle seguenti sono effettive differenze tra NIST Cyber Security Framework e ISO 27001",
    "options": [
      {
        "option_text": "Il NIST è stato creato principalmente per la gestione del rischio sulle informazioni, ISO 27001 è invece un approccio riconosciuto a livello internazionale per la creazione e il mantenimento di un ISMS",
        "answer": true
      },
      {
        "option_text": "ISO 27001 è volontario, mentre il NIST CSF prevede la certificazione",
        "answer": false
      },
      {
        "option_text": "I framework NIST hanno vari cataloghi di controllo e cinque funzioni per personalizzare i controlli di sicurezza informatica, mentre l'allegato A ISO 27001 (2013) fornisce 14 categorie di controllo con 114 controlli e 7 clausole di gestione per guidare le organizzazioni attraverso i loro ISMS",
        "answer": true
      },
      {
        "option_text": "La ISO 27001 è meno tecnica, con maggiore enfasi sulla gestione basata sul rischio",
        "answer": true
      },
      {
        "option_text": "La ISO 27001 è più tecnica, con minore enfasi sulla gestione basata sul rischio",
        "answer": false
      },
      {
        "option_text": "La ISO 27001 è una buona scelta per certificare le organizzazioni che hanno maturità operativa, mentre il NIST CSF può essere più adatto per le organizzazioni che si trovano nelle fasi iniziali dello sviluppo di un programma di rischio per la sicurezza informatica",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 269
  },
  {
    "code": "M3.3.1.2",
    "question": "Quali sono le origini legislative del diritto alla privacy italiano?",
    "options": [
      {
        "option_text": "Costituzione Italiana, articoli 14, 15 e 21, riguardanti il domicilio, la libertà e segretezza della corrispondenza, e la libertà di manifestazione del pensiero",
        "answer": true
      },
      {
        "option_text": "Costituzione Italiana articolo 2, come anche sostenuto la Corte Costituzionale con la sentenza n. 38 del 1973",
        "answer": true
      },
      {
        "option_text": "Sentenza della Corte di Cassazione n. 4487 del 1961",
        "answer": false
      },
      {
        "option_text": "Sentenza della Corte di Cassazione n. 4487 del 1956",
        "answer": true
      },
      {
        "option_text": "Prima legge italiana di tutela della privacy, Legge 675 del 1996, come attuazione della direttiva 95/46/CE",
        "answer": true
      },
      {
        "option_text": "Prima legge italiana di tutela della privacy, Legge 675 del 1998, come attuazione della direttiva 95/46/CE",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 270
  },
  {
    "code": "M3.3.1.3",
    "question": "Quali sono le attuali leggi italiane sulla privacy?",
    "options": [
      {
        "option_text": "Il decreto 198 del 2004 “Codice in materia di protezione dei dati personali” detto anche “Testo unico sulla Privacy”, entrato in vigore dal 1° gennaio 2004",
        "answer": false
      },
      {
        "option_text": "Il decreto 196 del 2003 “Codice in materia di protezione dei dati personali” detto anche “Testo unico sulla Privacy”, entrato in vigore dal 1° gennaio 2004",
        "answer": true
      },
      {
        "option_text": "Il decreto 196 del 2003 “Codice in materia di protezione dei dati personali” detto anche “Testo unico sulla Privacy”, entrato in vigore dal 1° gennaio 2006",
        "answer": false
      },
      {
        "option_text": "Il Regolamento UE 2016/697 del Parlamento Europeo e del Consiglio del 27 aprile 2016, cosiddetto GDPR (General Data Protection Regulation) attraverso il D. L. di adeguamento 10 agosto 2018, n. 101, dal D.M. n. 15 marzo 2019 e dal D.L. 14 giugno 2019, n. 53",
        "answer": false
      },
      {
        "option_text": "Il Regolamento UE 2016/679 del Parlamento Europeo e del Consiglio del 25 aprile 2016, cosiddetto GDPR (General Data Protection Regulation) attraverso il D.L. di adeguamento 10 agosto 2018, n. 101, dal D.M. n. 15 marzo 2019 e dal D.L. 14 giugno 2019, n. 53",
        "answer": false
      },
      {
        "option_text": "Il Regolamento UE 2016/679 del Parlamento Europeo e del Consiglio del 27 aprile 2016, cosiddetto GDPR (General Data Protection Regulation) attraverso il D.L. di adeguamento 10 agosto 2018, n. 101, dal D.M. n. 15 marzo 2019 e dal D.L. 14 giugno 2019, n. 53",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 271
  },
  {
    "code": "M3.3.2.3",
    "question": "Il Patent Infringement",
    "options": [
      {
        "option_text": "È inteso come la violazione dei diritti di proprietà intellettuale o di brevetto",
        "answer": true
      },
      {
        "option_text": "Per la legge italiana è assimilato al reato di furto",
        "answer": false
      },
      {
        "option_text": "Per la legge italiana è assimilato al reato di contraffazione",
        "answer": true
      },
      {
        "option_text": "È in costante aumento grazie al grande sviluppo dell’e-commerce e l’utilizzo dei social media per finalità di marketing",
        "answer": true
      },
      {
        "option_text": "Riguarda beni di lusso e griffati, alimentari, farmaci (con tutte le implicazioni relative alla salute pubblica), ecc.",
        "answer": true
      },
      {
        "option_text": "Anche se non arreca un enorme danno economico sia ai titolari dei diritti che ai consumatori e comunque un fenomeno sotto osservazione",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 272
  },
  {
    "code": "M3.3.5.4",
    "question": "Quali dei seguenti sono effettivamente Operatori di Servizi Essenziali (OES) secondo NIS",
    "options": [
      {
        "option_text": "Impresa elettrica",
        "answer": true
      },
      {
        "option_text": "Distributore locale di carburante per autotrazione",
        "answer": false
      },
      {
        "option_text": "Gestori del sistema di distribuzione energia elettrica",
        "answer": true
      },
      {
        "option_text": "Gestori del sistema di trasmissione energia elettrica",
        "answer": true
      },
      {
        "option_text": "Gestori del sistema di distribuzione gas",
        "answer": true
      },
      {
        "option_text": "Gestori del sistema di tele-trasmissione gas",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 273
  },
  {
    "code": "M3.3.5.5",
    "question": "Quali delle seguenti sono funzioni del CSIRT (Computer Security Incident Response Team) nazionale?",
    "options": [
      {
        "option_text": "Il monitoraggio degli incidenti a livello nazionale ed internazionale",
        "answer": false
      },
      {
        "option_text": "L’emissione di preallarmi, allerte, annunci e divulgazione di informazioni alle parti interessate in merito a rischi e incidenti",
        "answer": true
      },
      {
        "option_text": "La delega dell’attività di intervento in caso di incidente",
        "answer": false
      },
      {
        "option_text": "L’analisi dinamica dei rischi e degli incidenti",
        "answer": true
      },
      {
        "option_text": "La sensibilizzazione situazionale",
        "answer": true
      },
      {
        "option_text": "La partecipazione alla rete europea dei CSIRT",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 274
  },
  {
    "code": "M3.3.5.6",
    "question": "Chi sono i DSP (Digital Service Providers) secondo la Direttiva NIS?",
    "options": [
      {
        "option_text": "Cloud Computing Services",
        "answer": true
      },
      {
        "option_text": "Cloud Virtual Machines",
        "answer": false
      },
      {
        "option_text": "Online Market Places",
        "answer": true
      },
      {
        "option_text": "Online Search Engines",
        "answer": true
      },
      {
        "option_text": "Online products e-commerce",
        "answer": false
      },
      {
        "option_text": "Online people recruitments",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 275
  },
  {
    "code": "M3.3.6.6",
    "question": "Il principio di “Accountability” del GDPR",
    "options": [
      {
        "option_text": "È un concetto che può essere tradotto in italiano come responsabilizzazione/rendicontazione",
        "answer": true
      },
      {
        "option_text": "È un concetto che può essere tradotto in italiano come contabilità",
        "answer": false
      },
      {
        "option_text": "Dispone che il titolare del trattamento adotti politiche e attui misure adeguate a garantire che il trattamento dei dati personali sia conforme allo stesso Regolamento",
        "answer": false
      },
      {
        "option_text": "Prevede l’adozione di comportamenti proattivi e tali da dimostrare la concreta adozione di misure finalizzate ad assicurare la corretta applicazione del regolamento",
        "answer": true
      },
      {
        "option_text": "Prevede l’adozione di criteri di \"data protection by default and by design\" ovvero che la protezione dei dati deve essere da progetto e indipendente dall’eventuale autorizzazione al trattamento",
        "answer": true
      },
      {
        "option_text": "Dispone che il titolare del trattamento adotti politiche e attui misure adeguate a garantire ed essere in grado di dimostrare che il trattamento dei dati personali effettuato sia conforme allo stesso Regolamento",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 276
  },
  {
    "code": "M3.4.1.1",
    "question": "Quali dei seguenti requisiti ISO 27001 possono rappresentare la fase PLAN del ciclo PDCA",
    "options": [
      {
        "option_text": "Contesto",
        "answer": true
      },
      {
        "option_text": "Leadership",
        "answer": true
      },
      {
        "option_text": "Pianificazione",
        "answer": true
      },
      {
        "option_text": "Supporto",
        "answer": true
      },
      {
        "option_text": "Attività Operative",
        "answer": false
      },
      {
        "option_text": "Valutazione delle Prestazioni",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 277
  },
  {
    "code": "M1.1.2.3.1",
    "question": "La PAM (Pulse Amplitude Modulation) è:",
    "options": [
      {
        "option_text": "Una modulazione di ampiezza",
        "answer": false
      },
      {
        "option_text": "Una modulazione digitale a traslazione di ampiezza",
        "answer": true
      },
      {
        "option_text": "Una modulazione digitale in cui le informazioni del messaggio sono codificate nell'ampiezza di una serie di impulsi di segnale",
        "answer": true
      },
      {
        "option_text": "Una modulazione analogica a traslazione di ampiezza",
        "answer": false
      },
      {
        "option_text": "Una modulazione a traslazione di frequenza",
        "answer": false
      },
      {
        "option_text": "Una modulazione digitale con banda a doppio lato",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 278
  },
  {
    "code": "M1.1.2.4.1",
    "question": "Cos’è la larghezza di banda di un canale (satellitare, radio, via cavo)?",
    "options": [
      {
        "option_text": "La misura dell’ampiezza dello spettro che passa in un canale",
        "answer": true
      },
      {
        "option_text": "Un parametro inversamente proporzionale alla quantità di dati che possono essere trasmessi in un canale nell’unità di tempo",
        "answer": false
      },
      {
        "option_text": "Un parametro proporzionale alla quantità di dati che possono essere trasmessi in un canale nell’unità di tempo",
        "answer": true
      },
      {
        "option_text": "Un parametro indipendente dalla quantità di dati trasmessi in un canale",
        "answer": false
      },
      {
        "option_text": "La misura dell'ampiezza della gamma di frequenze che possono passare per quel canale",
        "answer": true
      },
      {
        "option_text": "La capacità di un qualsiasi canale digitale di trasmettere dati",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 279
  },
  {
    "code": "M1.2.4.3.1",
    "question": "Il Furto di Identità Digitale",
    "options": [
      {
        "option_text": "È associato agli articoli 494 e 640 del CP “Sostituzione della propria all'altrui persona” e “Frode Informatica”",
        "answer": true
      },
      {
        "option_text": "È relativo all’uso illecito dell'insieme dei dati e delle informazioni che definiscono un individuo e costituiscono la rappresentazione fisica utilizzabile durante interazioni elettroniche",
        "answer": false
      },
      {
        "option_text": "È relativo all’uso illecito dell’insieme dei dati e delle informazioni che definiscono un individuo e costituiscono la rappresentazione virtuale dell'identità reale utilizzabile durante interazioni elettroniche",
        "answer": true
      },
      {
        "option_text": "È relativo ai soli dati biometrici che definiscono un individuo e costituiscono una delle rappresentazioni virtuali dell'identità reale utilizzabile durante interazioni elettroniche",
        "answer": false
      },
      {
        "option_text": "È un reato penale secondo l’ordinamento italiano",
        "answer": true
      },
      {
        "option_text": "Può essere associato al solo reato di “Truffa” l’art. 620 del CP",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 280
  },
  {
    "code": "M1.2.4.8",
    "question": "Quali delle seguenti sono tecniche di Social Engineering:",
    "options": [
      {
        "option_text": "Il “baiting” (offrire qualcosa al fine di consentire il download di un file dannoso)",
        "answer": true
      },
      {
        "option_text": "Il “phishing” (una mail realizzata appositamente per favorire l'inserimento di informazioni personali)",
        "answer": true
      },
      {
        "option_text": "Il “cryptojacking” (bloccare un servizio o un programma per poi chiedere le credenziali per lo sblocco)",
        "answer": false
      },
      {
        "option_text": "Il “pretexting” (l'impersonare qualcuno per ottenere l'accesso a dati privilegiati)",
        "answer": true
      },
      {
        "option_text": "Lo “scareware” (spingere l'utente a credere che il proprio computer sia infetto per poi offrire una",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 281
  },
  {
    "code": "M1.2.4.9",
    "question": "L’Avanced Persistent Threat (APT)",
    "options": [
      {
        "option_text": "È una minaccia perpetrata da un avversario dotato di notevole bagaglio tecnico e grandi risorse, in grado di effettuare attacchi su vasta scala, utilizzando molteplici vettori, e per periodi di tempo molto estesi",
        "answer": true
      },
      {
        "option_text": "È di solito gestita da gruppi organizzati e/o da stati sovrani",
        "answer": true
      },
      {
        "option_text": "Di solito utilizza software pubblicamente disponibili per riuscire meglio a propagarsi",
        "answer": false
      },
      {
        "option_text": "È in grado utilizzare non solo software pubblicamente disponibili ma anche creati ad hoc, più versatili e complessi da rilevare",
        "answer": true
      },
      {
        "option_text": "Per raccogliere informazioni sui propri obiettivi può utilizzare tool estremamente sofisticati, e, potenzialmente, anche appoggiarsi ai servizi di intelligence del paese di provenienza",
        "answer": true
      },
      {
        "option_text": "Raccoglie tutte le informazioni sui propri obiettivi attraverso tecniche di social engineering",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 282
  },
  {
    "code": "M1.3.1.24",
    "question": "Il livello 1 – Fisico -del Modello ISO/OSI",
    "options": [
      {
        "option_text": "Ha tra le funzioni l’adeguamento alle caratteristiche degli apparati trasmissivi (cavi, fibra ottica, delle prese, dei connettori ecc.)",
        "answer": true
      },
      {
        "option_text": "Ha tra le funzioni l’adeguamento alla tensione scelta per rappresentare i bit",
        "answer": true
      },
      {
        "option_text": "Può utilizzare protocolli Bluetooth",
        "answer": true
      },
      {
        "option_text": "Può utilizzare protocolli IP",
        "answer": false
      },
      {
        "option_text": "Ha la funzione di interfacciare il software con l’hardware di comunicazione",
        "answer": true
      },
      {
        "option_text": "Una volta definito e configurato tende a vincolare i livelli superiori agli specifici mezzi fisici di comunicazione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 283
  },
  {
    "code": "M1.3.1.25",
    "question": "Il livello 7 – Applicazione – Del livello ISO/OSI",
    "options": [
      {
        "option_text": "Può avere tra i protocolli di servizio il Dynamic Host Configuration Protocol - (DHCP)",
        "answer": true
      },
      {
        "option_text": "Può avere tra i protocolli di servzio RPC (Remote Procedure Call)",
        "answer": false
      },
      {
        "option_text": "Può avere tra i protocolli di servizio il Network Time Protocol - (NTP)",
        "answer": true
      },
      {
        "option_text": "Può avere tra i protocolli di servizio il Lightweight Directory Access Protocol - (LDAP)",
        "answer": true
      },
      {
        "option_text": "Può avere tra i protocolli di accesso a terminali remoti Secure Shell (SSH)",
        "answer": true
      },
      {
        "option_text": "Può avere tra i protocolli di accesso a terminali remoti (Digital Network Architecture Session Control Protocol) DNA SCP",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 284
  },
  {
    "code": "M1.3.1.26",
    "question": "Il servizio di Sincronizzazione del livello ISO/OSI 5 - Sessione",
    "options": [
      {
        "option_text": "Permette ai processi coinvolti nella comunicazione di inserire dei checkpoint (punti di sincronizzazione) in un flusso dati",
        "answer": true
      },
      {
        "option_text": "Permette di sincronizzare la comunicazione attraverso pacchetti di durata temporale sempre uguale",
        "answer": false
      },
      {
        "option_text": "Permette di dividere (logicamente) il flusso dei dati in unità più piccole in modo che, in caso di interruzione della sessione, non sia necessario inviare nuovamente tutto il flusso ma solo i dati dall’ultimo checkpoint in poi",
        "answer": true
      },
      {
        "option_text": "Permette di dividere (temporalmente) il flusso dei dati in unità più piccole in modo che, in caso di interruzione della sessione, non sia necessario inviare nuovamente tutto il flusso ma solo l’ultimo pacchetto di lunghezza temporale prefissata",
        "answer": false
      },
      {
        "option_text": "Permette di effettuare, ad ogni checkpoint, il back up dei dati di entrambi host in comunicazione, annotando il punto in cui è arrivata la conversazione; in tal modo, se durante il trasferimento dei dati la sessione si interrompe, la sessione successiva potrà sincronizzarsi riprendendo la trasmissione dal punto in cui è stata interrotta",
        "answer": true
      },
      {
        "option_text": "Permette di effettuare, ad ogni checkpoint, il back up dei dati dell’host che trasmette, annotando il punto in cui è arrivata la conversazione; in tal modo, se durante il trasferimento dei dati la sessione si interrompe, la sessione successiva potrà sincronizzarsi riprendendo la trasmissione dal punto in cui è stata interrotta",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 285
  },
  {
    "code": "M1.3.2.14",
    "question": "I protocolli seriali multipunto",
    "options": [
      {
        "option_text": "Sono protocolli seriali punto-punto che possono collegare ulteriori unità attraverso una connessione multi-drop",
        "answer": true
      },
      {
        "option_text": "Possono utilizzare lo standard RS-422 e RS-485",
        "answer": true
      },
      {
        "option_text": "Possono utilizzare lo standard RS-232",
        "answer": false
      },
      {
        "option_text": "In una configurazione con molte unità connesse solo un paio possono effettivamente comunicare",
        "answer": true
      },
      {
        "option_text": "Sia nel caso di RS-422 che di RS-485 possono essere contemporaneamente bidirezionali",
        "answer": false
      },
      {
        "option_text": "Solo nel caso dello standard RS-422 possono essere contemporaneamente bidirezionali",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 286
  },
  {
    "code": "M1.3.2.15",
    "question": "Lo standard elettrico RJ45 Se CAT 5:",
    "options": [
      {
        "option_text": "ha velocità massima di 100 Mbps",
        "answer": true
      },
      {
        "option_text": "Se CAT 5e: ha velocità massima di 1000 Mbps (Gigabit)",
        "answer": true
      },
      {
        "option_text": "Se CAT 6: ha velocità massima di 10 Gbps (banda 250Hz)",
        "answer": true
      },
      {
        "option_text": "Se CAT 6A: ha velocità massima di 10 Gbps (banda 500Hz)",
        "answer": true
      },
      {
        "option_text": "Se CAT 7: ha velocità massima di 100 Gbps (banda 600Hz)",
        "answer": false
      },
      {
        "option_text": "Può gestire comunicazioni multipunto per distanze superiori ai 100m",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 287
  },
  {
    "code": "M1.3.2.16",
    "question": "Lo standard elettrico RS-422",
    "options": [
      {
        "option_text": "Utilizza 4 fili, due in ricezione (TX+ e TX-) e due in trasmissione (RX+ e RX-)",
        "answer": true
      },
      {
        "option_text": "Utilizza due fili, uno per ricezione e uno per trasmissione",
        "answer": false
      },
      {
        "option_text": "Utilizza solamente un filo in ricezione e trasmissione",
        "answer": false
      },
      {
        "option_text": "Non può comunicare in configurazione multi-drop",
        "answer": false
      },
      {
        "option_text": "Può comunicare in configurazione multi-drop",
        "answer": true
      },
      {
        "option_text": "Realizza comunicazioni Full-Duplex",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 288
  },
  {
    "code": "M1.3.3.6",
    "question": "Lo Switch",
    "options": [
      {
        "option_text": "È un dispositivo intelligente ovvero dotato di CPU",
        "answer": true
      },
      {
        "option_text": "È un dispositivo elettrico non dotato di CPU",
        "answer": false
      },
      {
        "option_text": "Può segmentare il dominio di broadcast attraverso le VLAN",
        "answer": true
      },
      {
        "option_text": "Può avere una gestione “Unmanaged” o “Managed”",
        "answer": true
      },
      {
        "option_text": "Può avere un instradamento “store-and-forward”",
        "answer": true
      },
      {
        "option_text": "Può avere un instradamento “pass-by”",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 289
  },
  {
    "code": "M1.3.3.7",
    "question": "Il Gateway",
    "options": [
      {
        "option_text": "È un dispositivo di rete che funziona come punto di ingresso tra una rete e un’altra",
        "answer": true
      },
      {
        "option_text": "È un convertitore di protocolli di rete, capace di unire due reti in modo che i dispositivi presenti su un dato network possano comunicare con quelli presenti in un altro",
        "answer": true
      },
      {
        "option_text": "È una funzionalità che è sempre separata “fisicamente” dal Router",
        "answer": false
      },
      {
        "option_text": "Può essere considerato semplicemente come un convertitore di protocolli di rete",
        "answer": true
      },
      {
        "option_text": "Può realizzare la funzionalità NAT (Network Address Translation)",
        "answer": true
      },
      {
        "option_text": "Differentemente dal router ha il compito di gestire un traffico simile e connettere dispositivi che condividono un’interfaccia comune",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 290
  },
  {
    "code": "M1.3.4.6",
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
        "option_text": "N-1",
        "answer": false
      },
      {
        "option_text": "N/2*(N-1)",
        "answer": true
      },
      {
        "option_text": "N/(N-1)",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 291
  },
  {
    "code": "M1.3.4.7",
    "question": "Quanti sono i rami di una topologia di rete Lineare Aperta?",
    "options": [
      {
        "option_text": "(N-1)/2",
        "answer": false
      },
      {
        "option_text": "N*(N-1)/2",
        "answer": false
      },
      {
        "option_text": "N-1",
        "answer": true
      },
      {
        "option_text": "N/2*(N-1)",
        "answer": false
      },
      {
        "option_text": "N/(N-1)",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 292
  },
  {
    "code": "M2.1.2.10",
    "question": "Le Società S.r.l.",
    "options": [
      {
        "option_text": "Sono Società di Persone",
        "answer": false
      },
      {
        "option_text": "Sono Società di Capitali",
        "answer": true
      },
      {
        "option_text": "Sono Società a responsabilità illimitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "Sono Società a responsabilità limitata dell’imprenditore",
        "answer": false
      },
      {
        "option_text": "Sono Società a responsabilità dei soci limitata al capitale sottoscritto",
        "answer": true
      },
      {
        "option_text": "Sono Società a responsabilità dei soci illimitata oltre al capitale sottoscritto",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 293
  },
  {
    "code": "M2.2.2.4",
    "question": "Nel Sistema Informativo aziendale l’ERP (Enterprise Resource Planning)",
    "options": [
      {
        "option_text": "È una piattaforma software che raggruppa i sistemi del reparto amministrativo, delle vendite, del magazzino e la logistica",
        "answer": true
      },
      {
        "option_text": "Può gestire gli ordini dai clienti, la fatturazione e le paghe dei dipendenti",
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
        "option_text": "Può includere alcune funzioni o integrare completamente le funzioni del CRM (Customer Relationship Management)",
        "answer": true
      },
      {
        "option_text": "Permette di progettare o simulare il funzionamento di un determinato oggetto meccanico",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 294
  },
  {
    "code": "M2.3.2.5",
    "question": "L’Organizzazione Aziendale",
    "options": [
      {
        "option_text": "Può essere definita come l’insieme dei processi, dei materiali, degli strumenti e delle persone che li operano e li gestiscono, in maniera coordinata, per il raggiungimento di uno scopo comune o un obiettivo di impresa",
        "answer": true
      },
      {
        "option_text": "Può essere considerata come la “struttura produttiva” di un’azienda",
        "answer": true
      },
      {
        "option_text": "Può essere considerata come la “struttura amministrativa” di un’azienda",
        "answer": false
      },
      {
        "option_text": "Ha come elementi fondanti gli obiettivi, l’assegnazione dei compiti e dei ruoli, e la tecnologia che realizza la struttura produttiva",
        "answer": true
      },
      {
        "option_text": "Ha come primo elemento fondativo la cosiddetta “mission aziendale” che, a livello operativo, si declina in obiettivi concretamente raggiungibili e misurabili",
        "answer": true
      },
      {
        "option_text": "Attraverso la distribuzione di responsabilità e poteri crea l’ossatura dell’azienda; i compiti individuano il workflow (il flusso di lavoro) produttivo",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 295
  },
  {
    "code": "M3.1.1.2.1",
    "question": "L’Incident Response Plan (Piano di risposta agli incidenti)",
    "options": [
      {
        "option_text": "Permette di rispondere all’esigenza di individuare gli attacchi e mitigare il danno",
        "answer": true
      },
      {
        "option_text": "Esegue anche la pre-analysis che consente di delineare preventivamente la reale portata dell’incidente",
        "answer": false
      },
      {
        "option_text": "Permette di rispondere ad un attacco esterno mediante misure controffensive verso l’attaccante",
        "answer": false
      },
      {
        "option_text": "È un insieme di procedure documentate che descrivono in dettaglio i passaggi da intraprendere in ciascuna fase della risposta agli incidenti",
        "answer": true
      },
      {
        "option_text": "Può essere strutturato in sette fasi standardizzate: Detection, Response, Mitigation, Reporting, Recovery, Remediation e Lesson Learned",
        "answer": true
      },
      {
        "option_text": "Può essere strutturato in cinque fasi standardizzate: Response, Mitigation, Reporting, Repudiation e Lesson Learned",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 296
  },
  {
    "code": "M3.2.1.11.1",
    "question": "Quali dei seguenti gruppi di norme fanno parte della famiglia degli Standard ISO/IEC 27000?",
    "options": [
      {
        "option_text": "Norme che descrivono una panoramica e la terminologia o vocabolario",
        "answer": true
      },
      {
        "option_text": "Norme che specificano i requisiti di un SGSI, degli organismi di audit e certificazione e per la creazione di standard specifici di settore",
        "answer": true
      },
      {
        "option_text": "Norme che descrivono le linee guida generali per la verifica puntuale di un SGSI",
        "answer": false
      },
      {
        "option_text": "Norme che descrivono le linee guida negli specifici ambiti/settori (ad esempio telecomunicazioni, servizi energetici, ecc.)",
        "answer": true
      },
      {
        "option_text": "Norme aggiunte che descrivono delle direttive specializzate (ad esempio sicurezza della rete o delle applicazioni)",
        "answer": true
      },
      {
        "option_text": "Norme che descrivono come realizzare le procedure standard in un SGSI",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 297
  },
  {
    "code": "M3.2.1.18",
    "question": "Un ISMS per ISO/IEC 27000 è un insieme di regole che un’azienda deve stabilire per:",
    "options": [
      {
        "option_text": "Identificare gli stakeholder e le loro aspettative nei confronti dell'azienda in termini di sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "Identificare quali rischi logici e fisici esistono per le persone all’interno dell’organizzazione",
        "answer": false
      },
      {
        "option_text": "Definire i controlli e altri metodi di mitigazione per soddisfare le aspettative (al punto 1) identificate e gestire i rischi",
        "answer": true
      },
      {
        "option_text": "Fissare obiettivi qualitativi e generici su ciò che deve essere raggiunto con la sicurezza delle informazioni",
        "answer": false
      },
      {
        "option_text": "Attuare tutte le contromisure e gli altri metodi per il trattamento del rischio",
        "answer": true
      },
      {
        "option_text": "Misurare continuamente se i controlli implementati funzionano come previsto",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 298
  },
  {
    "code": "M3.2.2.4",
    "question": "L’Area di Controllo 8 dell’ISO 27001 2013 Annex A “Gestione degli asset”",
    "options": [
      {
        "option_text": "Ha tra gli obiettivi l’identificazione degli asset dell’organizzazione e definire adeguate responsabilità per la loro protezione",
        "answer": true
      },
      {
        "option_text": "Ha tra gli obiettivi l’assicurare che le informazioni ricevano un adeguato livello di protezione in linea con la loro importanza per l’organizzazione",
        "answer": true
      },
      {
        "option_text": "Ha tra gli obiettivi il prevenire la divulgazione non autorizzata, la modifica, la rimozione o la distruzione delle informazioni archiviate sui supporti",
        "answer": true
      },
      {
        "option_text": "Ha tra i controlli la “Sicurezza delle informazioni nella gestione dei progetti”",
        "answer": false
      },
      {
        "option_text": "Ha tra i controlli la “Classificazione delle informazioni”",
        "answer": true
      },
      {
        "option_text": "Ha tra i controlli la “Non memorizzazione delle informazioni”",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 299
  },
  {
    "code": "M3.2.3.2.1",
    "question": "Nel NIST CSF il Framework Core",
    "options": [
      {
        "option_text": "È un insieme di attività di sicurezza informatica, risultati desiderati e riferimenti applicabili comuni a tutti i settori delle infrastrutture critiche ma anche per le altre organizzazioni",
        "answer": true
      },
      {
        "option_text": "Presenta standard, linee guida e pratiche del settore che consentono la comunicazione di attività e risultati inerenti alla sicurezza anche fisica in tutta l'organizzazione",
        "answer": false
      },
      {
        "option_text": "È costituito da cinque funzioni concorrenti e continue: Identifica, Reagisci, Rileva, Rispondi, Recupera",
        "answer": false
      },
      {
        "option_text": "È costituito da quattro funzioni concorrenti e continue: Identifica, Proteggi, Rileva, Rispondi",
        "answer": false
      },
      {
        "option_text": "Identifica le categorie e le sottocategorie chiave associate a ciascuna funzione e le abbina a riferimenti informativi di esempio come standard, linee guida e pratiche esistenti per ciascuna sottocategoria",
        "answer": true
      },
      {
        "option_text": "Associa a ciascuna funzione le categorie ovvero le suddivisioni di una funzione in gruppi di risultati di sicurezza informatica strettamente legati alle esigenze programmatiche e ad attività particolari",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 300
  },
  {
    "code": "M3.2.4.3",
    "question": "Il NIST Special Publication SP 800-82 Rev. 2",
    "options": [
      {
        "option_text": "È un documento che fornisce una guida su come proteggere i sistemi di controllo industriale (ICS)",
        "answer": true
      },
      {
        "option_text": "È una pubblicazione che fornisce un catalogo integrativo di controlli di sicurezza e privacy per i sistemi informativi e le organizzazioni",
        "answer": false
      },
      {
        "option_text": "È il documento di punta della serie di standard e linee guida per la sicurezza delle informazioni sviluppati dal NIST in risposta alla FISMA della Cybersecurity & Infrastructure Security Agency americana",
        "answer": false
      },
      {
        "option_text": "Fa parte della serie di pubblicazioni speciali relative alla computer security",
        "answer": true
      },
      {
        "option_text": "Fa parte della serie di pubblicazioni speciali che propongono guide pratiche e usabili di",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 301
  },
  {
    "code": "M1.1.4.5",
    "question": "L’ Uniform Resource Locator (in acronimo URL)",
    "options": [
      {
        "option_text": "Identifica univocamente l’indirizzo di una risorsa su una rete di computer",
        "answer": true
      },
      {
        "option_text": "Necessita di una “risoluzione” in indirizzo IP per l’instradamento con l’analogo protocollo",
        "answer": true
      },
      {
        "option_text": "È un indirizzo composto da vari parametri che possono essere opzionali",
        "answer": true
      },
      {
        "option_text": "Può essere una sequenza alfanumerica o binaria",
        "answer": false
      },
      {
        "option_text": "In nessun caso può utilizzare un protocollo criptato",
        "answer": false
      },
      {
        "option_text": "È nato per facilitare la consultazione delle risorse on-line siano esse interi siti web, pagine HTML, foto o video",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 302
  },
  {
    "code": "M1.3.2.9-23",
    "question": "Nella comunicazione con il protocollo Ethernet in caso di avvenuta collisione:",
    "options": [
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette una sequenza composta dalla parte di pacchetto già trasmessa e un codice identificativo in coda al pacchetto",
        "answer": true
      },
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette e un codice identificativo in testa e la parte di pacchetto già trasmessa in coda al pacchetto",
        "answer": false
      },
      {
        "option_text": "La stazione trasmittente sospende la trasmissione e trasmette una sequenza (detta di Jamming) per avvisare che il canale è occupato",
        "answer": true
      },
      {
        "option_text": "La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione per un numero di volte non superiore a 5",
        "answer": false
      },
      {
        "option_text": "La stazione di trasmissione, dopo l’invio della sequenza di jamming, ripete il tentativo di trasmissione dopo un tempo pseudocasuale, per evitare la ripetizione della collisione",
        "answer": true
      },
      {
        "option_text": "La stazione trasmittente interrompe le trasmissioni e attende un segnale di Restart da parte di una altra stazione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 303
  },
  {
    "code": "M1.3.2.12-23",
    "question": "La comunicazione deterministica real-time:",
    "options": [
      {
        "option_text": "È una qualsiasi forma di comunicazione per cui gli utenti possono scambiarsi informazioni anche non nell’esatta sequenza che sono state generate ma con una latenza prevedibile o comunque predefinita",
        "answer": false
      },
      {
        "option_text": "È una qualsiasi forma di comunicazione per cui gli utenti possono scambiarsi informazioni in maniera deterministica, istantaneamente o con una latenza trascurabile o comunque predefinita",
        "answer": true
      },
      {
        "option_text": "Ha, di solito, necessità di garantire la sincronizzazione tra due o più dispostivi (es. dispositivo di comando e di attuazione)",
        "answer": true
      },
      {
        "option_text": "Deve garantire tempi di comunicazione sempre sotto il nanosecondo",
        "answer": false
      },
      {
        "option_text": "Può permette il controllo di macchinari senza una connessione meccanica",
        "answer": true
      },
      {
        "option_text": "Deve garantire tempi di trasmissione compatibili con le dinamiche dei dispositivi o i processi coinvolti",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 304
  },
  {
    "code": "M1.3.3.10",
    "question": "Le regole configurabili nel firewall",
    "options": [
      {
        "option_text": "Hanno tra le impostazioni di base l'indirizzo IP sorgente",
        "answer": true
      },
      {
        "option_text": "Hanno tra le impostazioni di base l'indirizzo IP di destinazione",
        "answer": true
      },
      {
        "option_text": "Hanno tra le impostazioni di base la porta attraverso la quale viene erogato il servizio",
        "answer": true
      },
      {
        "option_text": "Non possono abilitare o disabilitare solo uno specifico protocollo (Es. UPD, TCP, ecc.)",
        "answer": false
      },
      {
        "option_text": "Possono utilizzare un criterio di applicazione di tipo “Default-reject”",
        "answer": false
      },
      {
        "option_text": "Possono utilizzare un criterio di applicazione di tipo “Default-allow”",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 305
  },
  {
    "code": "M2.1.1.1-23",
    "question": "L’Azienda:",
    "options": [
      {
        "option_text": "È un’organizzazione di persone e beni economici",
        "answer": true
      },
      {
        "option_text": "È un’organizzazione di persone e beni economici ma non beni strumentali",
        "answer": false
      },
      {
        "option_text": "Ha al suo interno anche beni strumentali, ovvero beni economici utilizzati per la produzione di altri beni",
        "answer": true
      },
      {
        "option_text": "Ha al suo interno solo persone e beni materiali, ovvero che hanno consistenza fisica",
        "answer": false
      },
      {
        "option_text": "Esercita l’insieme delle funzioni aziendali per il raggiungimento degli obiettivi prefissati",
        "answer": true
      },
      {
        "option_text": "Realizza l’attività aziendale attraverso i processi aziendali, nell'ambito della sua gestione operativa",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 306
  },
  {
    "code": "M2.1.2.4-23",
    "question": "Le aziende di produzione",
    "options": [
      {
        "option_text": "Possono essere solo le aziende che assemblano direttamente i beni o forniscono direttamente i servizi",
        "answer": false
      },
      {
        "option_text": "Hanno obiettivi primari legati alla stessa sopravvivenza dell’impresa",
        "answer": true
      },
      {
        "option_text": "Possono essere sia di produzione diretta dei beni o servizi sia di produzione indiretta ovvero che creano valore aggiunto a beni e servizi già esistenti",
        "answer": true
      },
      {
        "option_text": "Hanno come scopo quello di realizzare uno scambio con altre aziende, amministrazioni pubbliche e consumatori finali. Tale scambio ha per oggetto beni o servizi in cambio dei quali l’impresa riceve un compenso",
        "answer": true
      },
      {
        "option_text": "Hanno tra gli obiettivi solo la soddisfazione di un limitato gruppo di persone",
        "answer": false
      },
      {
        "option_text": "Non possono essere aziende di capitali",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 307
  },
  {
    "code": "M2.2.2.5",
    "question": "Il vettore di attacco",
    "options": [
      {
        "option_text": "Sfrutta debolezze o vulnerabilità solamente tecnologiche",
        "answer": false
      },
      {
        "option_text": "È la tecnica di attacco unicamente diretta e frontale verso un firewall perimetrale",
        "answer": false
      },
      {
        "option_text": "Per esteso può essere la tecnica utilizzata per l'accesso non autorizzato da parte di un malintenzionato ad un dispositivo o una rete per scopi nefasti",
        "answer": true
      },
      {
        "option_text": "Può sfruttare meccanismi di autenticazione deboli",
        "answer": true
      },
      {
        "option_text": "Può sfruttare debolezze umane come mancanza di conoscenza o attenzione",
        "answer": true
      },
      {
        "option_text": "Può utilizzare e-mail di phishing, app malevole, chiavette USB infette, botnet, ecc.",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 308
  },
  {
    "code": "M2.3.1.1-23",
    "question": "La Gestione Aziendale",
    "options": [
      {
        "option_text": "È l’insieme coordinato di operazioni soggettive e oggettive che l’azienda compie per raggiungere gli obiettivi prefissati",
        "answer": true
      },
      {
        "option_text": "È l’insieme delle operazioni soggettive di conduzione che il manager compie per raggiungere gli obiettivi prefissati",
        "answer": false
      },
      {
        "option_text": "Realizza operazioni soggettive, ovvero le attività svolte dagli organi aziendali, decisioni e controlli, da effettuare al fine di raggiungere gli obiettivi fissati",
        "answer": true
      },
      {
        "option_text": "Definisce i piani strategici e organizzativi di lungo periodo",
        "answer": false
      },
      {
        "option_text": "Realizza operazioni oggettive e soggettive per il raggiungimento della soddisfazione del cliente e dei fornitori",
        "answer": false
      },
      {
        "option_text": "Si caratterizza in operazioni di: acquisizione dei mezzi monetari, acquisizione di fattori produttivi col capitale monetario e trasformazione di fattori in prodotti o servizi finiti",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 309
  },
  {
    "code": "M2.3.2.1-23",
    "question": "I Processi Aziendali",
    "options": [
      {
        "option_text": "Possono essere definiti come un insieme di attività, non necessariamente collegate, che possono portare a diversi obiettivi a carattere strategico",
        "answer": false
      },
      {
        "option_text": "Possono essere definiti come un insieme di attività interdipendenti, svolte all'interno dell'azienda che creano valore trasformando delle risorse in un prodotto o servizio finale a valore aggiunto",
        "answer": true
      },
      {
        "option_text": "Devono prevedere un solo input chiaramente definito e più risultati finali",
        "answer": false
      },
      {
        "option_text": "Devono prevedere input, chiaramente ben definiti, e un singolo risultato finale",
        "answer": true
      },
      {
        "option_text": "Hanno input che sono costituiti da tutti i fattori che contribuiscono (direttamente e indirettamente) al valore aggiunto di un servizio o di un prodotto",
        "answer": true
      },
      {
        "option_text": "I processi si possono modellizzare attraverso l’uso dei diagrammi di flusso",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 310
  },
  {
    "code": "M3.1.2.1-23",
    "question": "Nella Business Transaction rappresentata utilizzando il modello WIDE qui sotto:",
    "options": [
      {
        "option_text": "Una volta entrati per il punto A i task Cancellazione Albergo e Cancellazione Volo vengono eseguiti contemporaneamente",
        "answer": true
      },
      {
        "option_text": "Una volta Entrati per il punto A i task Cancellazione Albergo e Cancellazione Volo vengono eseguiti uno successivo all’altro (terminato Cancellazione Albergo viene eseguito Cancellazione Volo)",
        "answer": false
      },
      {
        "option_text": "Si giunge al punto B solo dopo che entrambi i task Cancellazione Albergo e Cancellazione Volo sono stati eseguiti completamente",
        "answer": true
      },
      {
        "option_text": "Si giunge al punto B anche se nessuno tra i task Cancellazione Albergo e Cancellazione Volo è stato eseguito completamente",
        "answer": false
      },
      {
        "option_text": "Si giunge al punto B solo se i task Cancellazione Albergo e Cancellazione Volo si concludono contemporaneamente",
        "answer": false
      },
      {
        "option_text": "Il punto B può anche non essere mai raggiunto",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 311
  },
  {
    "code": "M3.1.3.3",
    "question": "La certificazione aziendale",
    "options": [
      {
        "option_text": "È la dichiarazione di un ente indipendente o accreditato che il prodotto fornito o le politiche messe in atto dall'azienda sono conformi ad una certa normativa o standard di riferimento",
        "answer": true
      },
      {
        "option_text": "È la dichiarazione di un ente indipendente o accreditato che si formalizza attraverso l’emissione di un certificato con validità illimitata",
        "answer": false
      },
      {
        "option_text": "È la dichiarazione di un ente terzo che il prodotto fornito o le politiche messe in atto dall'azienda sono conformi ad una certa normativa o standard di riferimento",
        "answer": true
      },
      {
        "option_text": "Se di sistema, permette di stabilire un meccanismo continuo di verifica della conformità ad uno standard ed il miglioramento continuo di un sistema di gestione",
        "answer": true
      },
      {
        "option_text": "Se di sistema, permette di stabilire un meccanismo di verifica puntuale della conformità ad uno standard ma non permette la verifica periodica del sistema di gestione",
        "answer": false
      },
      {
        "option_text": "Può essere uno strumento per rispondere alle richieste sempre più pressanti del mercato per differenziarsi dai competitors ed entrare, in nuovi mercati, mai esplorati prima",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 312
  },
  {
    "code": "M3.2.1.6-23",
    "question": "Quali delle seguenti sono Aree di Controllo secondo ISO 27001 2013?",
    "options": [
      {
        "option_text": "Gestione dei Fornitori",
        "answer": true
      },
      {
        "option_text": "Organizzazione della sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "Sicurezza dei sistemi negli impianti di produzione",
        "answer": false
      },
      {
        "option_text": "Gestione dell’infrastruttura di rete",
        "answer": false
      },
      {
        "option_text": "Aspetti di sicurezza per la gestione della Business Continuity",
        "answer": true
      },
      {
        "option_text": "Crittometria",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 313
  },
  {
    "code": "M3.2.1.9-23",
    "question": "Secondo ISO 27002 2013 una Categoria di Controllo è:",
    "options": [
      {
        "option_text": "Il controllo stesso",
        "answer": false
      },
      {
        "option_text": "È la dichiarazione estesa dell’obiettivo che si vuole raggiungere",
        "answer": true
      },
      {
        "option_text": "È di fatto l’Area del Controllo",
        "answer": false
      },
      {
        "option_text": "È l’appropriata contromisura in esame",
        "answer": false
      },
      {
        "option_text": "È la descrizione della finalità dello specifico controllo",
        "answer": true
      },
      {
        "option_text": "Uno dei tre livelli dello schema con cui sono strutturati i controlli",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 314
  },
  {
    "code": "M3.2.3.3",
    "question": "Nel Framework Core (di NIST CSF) le Categorie",
    "options": [
      {
        "option_text": "Sono le suddivisioni di ciascuna delle Funzioni Concorrenti in gruppi di possibili fattori di rischio di sicurezza informatica legati alle esigenze programmatiche e ad attività generiche",
        "answer": false
      },
      {
        "option_text": "Sono le suddivisioni di ciascuna delle Funzioni Concorrenti in gruppi di risultati di sicurezza informatica strettamente legati alle esigenze programmatiche e ad attività particolari",
        "answer": true
      },
      {
        "option_text": "Possono includere, ad esempio, \"Gestione degli asset\", \"Gestione dell'identità e controllo degli accessi\" e \"Processi di rilevamento\"",
        "answer": true
      },
      {
        "option_text": "Sono ulteriormente suddivise in sottocategorie le quali forniscono una serie di risultati che, sebbene non esaustivi, aiutano a supportare il raggiungimento degli obiettivi (risultati o outcomes) in ciascuna categoria",
        "answer": true
      },
      {
        "option_text": "Sono ulteriormente suddivise in sottocategorie che possono includere, ad esempio, \"I sistemi di informazione esterni sono catalogati\", \"I dati inattivi sono protetti\" o \"Le notifiche dai sistemi di rilevamento vengono esaminate\"",
        "answer": true
      },
      {
        "option_text": "Sono ulteriormente suddivise in sottocategorie che sono associate a Riferimenti Informativi: esempi assolutamente esaustivi basati sulle esperienze dirette sul campo",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 315
  },
  {
    "code": "M3.2.4.2",
    "question": "NIST Special Publication 800-53 Rev. 5",
    "options": [
      {
        "option_text": "Fornisce un catalogo di controlli di sicurezza e privacy per i sistemi informativi e le organizzazioni per proteggere le operazioni e le risorse organizzative, gli individui, le aziende e la nazione da una serie diversificata di minacce e rischi di varia natura",
        "answer": true
      },
      {
        "option_text": "Fornisce un catalogo di controlli di sicurezza e privacy per i sistemi informativi e le aziende per proteggere le operations e le risorse organizzative, gli individui, le aziende e la nazione da minacce e rischi di varia natura",
        "answer": true
      },
      {
        "option_text": "Sono un catalogo di controlli, ovvero contromisure, estratti direttamente e senza variazioni dal FISMA (Federal Information Security Modernization Act)",
        "answer": false
      },
      {
        "option_text": "Ha come titolo: “Security and Privacy Controls for Information Systems and Organizations”",
        "answer": true
      },
      {
        "option_text": "Ha come titolo: “Security Controls for Information Systems and Organizations”",
        "answer": false
      },
      {
        "option_text": "Ha come titolo: “Security and Privacy Controls for the Government Information Systems”",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 316
  },
  {
    "code": "M3.2.6.3",
    "question": "In un CSMS (Cyber Security Management System) secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "I requisiti sono associati agli elementi costitutivi del CSMS raggruppati in macrocategorie",
        "answer": true
      },
      {
        "option_text": "Le macrocategorie sono: “Risk Analysis”, “Indirizzare il rischio con il CSMS”, “Monitorare e migliorare il CSMS”",
        "answer": true
      },
      {
        "option_text": "Ad ogni elemento è associato un elenco di requisiti specifici",
        "answer": true
      },
      {
        "option_text": "Gli elementi non sono ulteriormente raggruppati all’interno delle macrocategorie",
        "answer": false
      },
      {
        "option_text": "Ad ogni elemento è associato solamente un requisito specifico",
        "answer": false
      },
      {
        "option_text": "Per ciascun elemento sono rappresentati gli obiettivi, la descrizione e il fondamento logico (razionale) dell’elemento",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 317
  },
  {
    "code": "M3.2.6.6-23",
    "question": "I Foundational Requirements secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "Sono stati definiti dal momento che il classico modello CIA (Confidentiality, Integrity e Availability) non si adatta interamente ai requisiti richiesti per gli IACS (Industrial Automation and Control Systems)",
        "answer": true
      },
      {
        "option_text": "Sono stati definiti dal momento che il classico modello CIA (Confidentiality, Integrity e Availability) si adatta ai requisiti industriali necessari per il funzionamento degli apparati sulle reti OT",
        "answer": true
      },
      {
        "option_text": "Sono sette requisiti di base",
        "answer": true
      },
      {
        "option_text": "Sono quattordici requisiti di base",
        "answer": false
      },
      {
        "option_text": "Sono otto requisiti di base",
        "answer": false
      },
      {
        "option_text": "Focalizzano gli aspetti di cyber sicurezza in relazione al funzionamento degli IACS",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 318
  },
  {
    "code": "M3.2.6.13",
    "question": "Gli IACS secondo l’IEC 62443?",
    "options": [
      {
        "option_text": "Sono gli Industrial Automation and Control Systems ovvero i sistemi di controllo e di automazione industriali",
        "answer": true
      },
      {
        "option_text": "Possono essere gli SCADA (Supervisory Control and Data Acquisition) ovvero i sistemi di supervisione e acquisizione dati",
        "answer": true
      },
      {
        "option_text": "Possono essere le telecamere del sistema perimetrale di sicurezza",
        "answer": false
      },
      {
        "option_text": "Possono essere i PLC (Programmable Logic Controller) ovvero i sistemi di controllo a logica programmabile",
        "answer": true
      },
      {
        "option_text": "Possono essere i DCS (Distributed control system) ovvero i sistemi di Controllo Distribuito di processo",
        "answer": true
      },
      {
        "option_text": "Possono essere gli strumenti di analisi della produzione presenti nella rete office",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 319
  },
  {
    "code": "M3.4.3.2-23",
    "question": "Il Rischio Informatico può essere valutato come",
    "options": [
      {
        "option_text": "Impatto x Probabilità",
        "answer": true
      },
      {
        "option_text": "Impatto elevato alla Probabilità",
        "answer": false
      },
      {
        "option_text": "Impatto x Frequenza",
        "answer": false
      },
      {
        "option_text": "Un numero compreso tra un valore minimo e uno massimo in funzione dell’incertezza del rischio",
        "answer": true
      },
      {
        "option_text": "Un numero sempre compreso tra 1 (Rischio Molto Basso) e 4 (Rischio Molto Alto) in funzione dell’incertezza del rischio",
        "answer": false
      },
      {
        "option_text": "Un numero che è funzione dell’incertezza e fa riferimento a classi omogenee di eventi, per natura e gravità",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 320
  },
  {
    "code": "M3.4.1.2",
    "question": "Perché la leadership aziendale è fondamentale per la definizione di un SGSI (Sistema di Gestione della Sicurezza Informatica)?",
    "options": [
      {
        "option_text": "Perché altrimenti possono non essere garantiti gli investimenti necessari per la sua realizzazione",
        "answer": true
      },
      {
        "option_text": "Perché senza il benestare chiaro, motivato e comunicato della leadership aziendale non si riuscirà a coinvolgere efficacemente tutto il personale aziendale",
        "answer": true
      },
      {
        "option_text": "Perché altrimenti non si riusciranno a portare a termine i cambiamenti nelle politiche, nei processi e nelle procedure necessari",
        "answer": true
      },
      {
        "option_text": "Perché solo una leadership consapevole può capire sino in fondo l’impatto possibile della sicurezza informatica con il funzionamento dell’organizzazione",
        "answer": true
      },
      {
        "option_text": "Così è chiara la responsabilità in caso di cattivo funzionamento del sistema di gestione",
        "answer": false
      },
      {
        "option_text": "Così è possibile creare nuove figure e ruoli che altrimenti sarebbe impossibile definire",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 321
  },
  {
    "code": "M4.3.3.1",
    "question": "Nell’organigramma apicale di una grande multiutility",
    "options": [
      {
        "option_text": "L’Information Technology è di solito collocata nell’area di responsabilità della direzione dell’innovazione o della direzione tecnica o tecnologica",
        "answer": true
      },
      {
        "option_text": "L’Information Technology di solito risponde al vicepresidente esecutivo",
        "answer": false
      },
      {
        "option_text": "La sicurezza informatica di solito riceve input dalla direzione o dai comitati che si occupano di risk management",
        "answer": true
      },
      {
        "option_text": "In nessun caso il CISO risponde direttamente al CEO",
        "answer": true
      },
      {
        "option_text": "Il CISO (o figura equivalente) di solito risponde al responsabile/direttore dei sistemi informativi (CIO o equivalente)",
        "answer": true
      },
      {
        "option_text": "Il CISO (o figura equivalente) non risponde mai al responsabile/direttore dei sistemi informativi (CIO o equivalente)",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 322
  },
  {
    "code": "M1.1.4.1/23",
    "question": "L’HyperText Transfer Protocol (HTTP)",
    "options": [
      {
        "option_text": "Permette la comunicazione tra il client, ovvero il browser, ed il server, la macchina su cui risiede il sito web",
        "answer": true
      },
      {
        "option_text": "È un protocollo di livello 6 dello stack ISO/OSI",
        "answer": false
      },
      {
        "option_text": "Ha come caratteristica peculiare che terminato lo scambio di messaggi la connessione si sgancia, rendendo il protocollo molto flessibile e dinamico",
        "answer": true
      },
      {
        "option_text": "Esiste anche la versione criptata HTTPS",
        "answer": true
      },
      {
        "option_text": "Dispone di comandi, i più comuni sono: Get, Head, Post, Put, Delete",
        "answer": true
      },
      {
        "option_text": "Di “default” utilizza la porta 60 per la comunicazione da client a host (server)",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 323
  },
  {
    "code": "M1.2.3.3.1",
    "question": "Un attacco cyber alla Supply Chain",
    "options": [
      {
        "option_text": "Può essere diretto ad un’azienda produttrice che rifornisce un’azienda bersaglio dell’attacco",
        "answer": true
      },
      {
        "option_text": "Può essere realizzato mediante del codice software malevolo realizzato (anche involontariamente) da un consulente esterno",
        "answer": true
      },
      {
        "option_text": "Può essere una conseguenza dell’internalizzazione delle attività di sviluppo del software",
        "answer": false
      },
      {
        "option_text": "Può essere vettorizzato dal fornitore di servizi Cloud",
        "answer": true
      },
      {
        "option_text": "Di solito rivela una postura di cybersicurezza peggiore del bersaglio rispetto al fornitore, origine del vettore d’attacco",
        "answer": false
      },
      {
        "option_text": "Può mirare non solamente alla disponibilità del sistema informativo del bersaglio ma anche al blocco o rallentamento della produzione dello stesso",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 324
  },
  {
    "code": "M1.3.2.14.1",
    "question": "I protocolli seriali multipunto",
    "options": [
      {
        "option_text": "Sono protocolli seriali punto-punto che possono collegare ulteriori unità attraverso una connessione multi-drop",
        "answer": true
      },
      {
        "option_text": "Possono utilizzare lo standard RS-422 e RS-485",
        "answer": true
      },
      {
        "option_text": "In una configurazione con molte unità connesse solo un paio possono effettivamente comunicare",
        "answer": true
      },
      {
        "option_text": "Possono utilizzare lo standard Bluetooth",
        "answer": false
      },
      {
        "option_text": "Sia nel caso di RS-422 che di RS-485 possono essere contemporaneamente bidirezionali",
        "answer": false
      },
      {
        "option_text": "Solo nel caso dello standard RS-422 possono essere contemporaneamente bidirezionali",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 325
  },
  {
    "code": "M1.3.2_2.5",
    "question": "Il modello di comunicazione Broadcast:",
    "options": [
      {
        "option_text": "Identifica la comunicazione uno a tutti",
        "answer": true
      },
      {
        "option_text": "Identifica la comunicazione ad ampio spettro, uno a ad alcuni",
        "answer": false
      },
      {
        "option_text": "Può avvenire a livello 2 dello stack ISO (indirizzamento MAC)",
        "answer": true
      },
      {
        "option_text": "Può avvenire a livello 3 dello stack ISO (Indirizzamento IP)",
        "answer": true
      },
      {
        "option_text": "Può peggiorare la latenza nella rete",
        "answer": true
      },
      {
        "option_text": "Può migliorare la latenza di rete",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 326
  },
  {
    "code": "M1.3.2_2.6*",
    "question": "La subnet 160.12.32.100/18:",
    "options": [
      {
        "option_text": "Ha come indirizzo di rete 160.12.0.0",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di broadcast 160.12.63.255",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di broadcast 160.12.63.254",
        "answer": false
      },
      {
        "option_text": "Ha come maschera di sottorete 255.255.192.0",
        "answer": true
      },
      {
        "option_text": "Ha come maschera di sottorete 255.255.186.0",
        "answer": false
      },
      {
        "option_text": "Lo spazio di indirizzamento arriva sino a (Host Max) 160.12.63.254",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 327
  },
  {
    "code": "M1.3.2_2.7",
    "question": "Il modello di comunicazione su rete Ethernet di tipo Broadcast",
    "options": [
      {
        "option_text": "Trasmette un messaggio a tutti i partecipanti di una rete e non richiede una risposta",
        "answer": true
      },
      {
        "option_text": "Trasmette un messaggio a tutti i partecipanti di una rete locale senza conoscere gli indirizzi individuali dei singoli host",
        "answer": true
      },
      {
        "option_text": "Trasmette un messaggio solamente ad alcuni partecipanti di una rete",
        "answer": false
      },
      {
        "option_text": "Può trasmettere a Livello 2 e a Livello 3 dello stack ISO/OSI",
        "answer": true
      },
      {
        "option_text": "Può trasmettere solo a Livello 3 dello stack ISO/OSI",
        "answer": false
      },
      {
        "option_text": "Non introduce maggiori collisioni e quindi una maggiore latenza nella trasmissione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 328
  },
  {
    "code": "M1.3.2.15.1",
    "question": "Lo standard elettrico RJ45",
    "options": [
      {
        "option_text": "Prevede un cablaggio con 8 fili",
        "answer": true
      },
      {
        "option_text": "Prevede un cablaggio con 10 fili",
        "answer": false
      },
      {
        "option_text": "Prevede varie categorie da 100 Mbps sino a 10 Gbps",
        "answer": true
      },
      {
        "option_text": "Prevede varie categorie da 100 Mbps sino a 100 Gbps",
        "answer": false
      },
      {
        "option_text": "Permette la connessione di un numero massimo di 4 dispositivi",
        "answer": false
      },
      {
        "option_text": "Può gestire comunicazioni multipunto per distanze superiori ai 100m",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 329
  },
  {
    "code": "M1.3.2.17",
    "question": "La modalità di trasmissione Half-Duplex",
    "options": [
      {
        "option_text": "È un tipo di modalità di comunicazione che supporta la comunicazione a due vie ma con ritardo",
        "answer": true
      },
      {
        "option_text": "È un tipo di modalità di comunicazione in cui i dati possono viaggiare solo in una direzione alla volta",
        "answer": true
      },
      {
        "option_text": "Ha come esempio della modalità di funzionamento la comunicazione tramite Walkie-talkie",
        "answer": true
      },
      {
        "option_text": "Prevede due cavi uno per la trasmissione e uno per la ricezione",
        "answer": false
      },
      {
        "option_text": "Prevede un solo cavo per la trasmissione e ricezione",
        "answer": true
      },
      {
        "option_text": "È più efficiente della modalità Full-Duplex",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 330
  },
  {
    "code": "M1.3.4.6.1*",
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
        "option_text": "(N-1)!",
        "answer": false
      },
      {
        "option_text": "N/2*(N-1)",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 331
  },
  {
    "code": "M1.3.4.8",
    "question": "Una rete peer to peer",
    "options": [
      {
        "option_text": "Ha nodi che, diversamente dalla rete client-server, possono richiedere e fornire servizi",
        "answer": true
      },
      {
        "option_text": "Ha nodi che, analogamente alla rete client-server, condividono lo stesso network",
        "answer": true
      },
      {
        "option_text": "Ha nodi che, diversamente dalla rete client-server, sono specializzati per richiedere o fornire servizi",
        "answer": false
      },
      {
        "option_text": "Può essere considerata come una rete logica da “pari” a “pari”",
        "answer": true
      },
      {
        "option_text": "È un’architettura “fisica”",
        "answer": false
      },
      {
        "option_text": "È un’architettura “logica”",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 332
  },
  {
    "code": "M2.3.2.5/23",
    "question": "L’Organizzazione Aziendale",
    "options": [
      {
        "option_text": "Può essere definita come l’insieme dei processi, dei materiali, degli strumenti e delle persone che li operano e li gestiscono, in maniera coordinata, per il raggiungimento di uno scopo comune o un obiettivo di impresa",
        "answer": true
      },
      {
        "option_text": "Può essere considerata come la “struttura amministrativa” di un’azienda",
        "answer": false
      },
      {
        "option_text": "Possono essere considerati l’insieme degli elementi che permettono la funzione produttiva di un’azienda",
        "answer": true
      },
      {
        "option_text": "Ha come elementi fondanti: gli obiettivi, l’assegnazione dei compiti e dei ruoli e la tecnologia che realizza la struttura produttiva",
        "answer": true
      },
      {
        "option_text": "Definisce come siano suddivise le attività fra le persone coinvolte e i meccanismi di coordinamento",
        "answer": true
      },
      {
        "option_text": "È l’insieme delle procedure operative aziendali",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 333
  },
  {
    "code": "M3.1.1.2.2",
    "question": "L’Incident Response Plan (Piano di risposta agli incidenti) può essere composto da:",
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
        "option_text": "L’investigazione sul problema che ha portato all’incidente (Remediation)",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 334
  },
  {
    "code": "M3.2.1.18/23",
    "question": "Un ISMS per ISO/IEC 27000 è un insieme di regole che un’azienda deve stabilire per:",
    "options": [
      {
        "option_text": "Identificare gli stakeholder e le loro aspettative nei confronti dell'azienda in termini di sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "Identificare quali rischi logici e fisici esistono per le persone all’interno dell’organizzazione",
        "answer": false
      },
      {
        "option_text": "Definire i controlli e altri metodi di mitigazione per soddisfare le aspettative (al punto 1) identificate e gestire i rischi",
        "answer": true
      },
      {
        "option_text": "Fissare obiettivi qualitativi e generici su ciò che deve essere raggiunto con la sicurezza delle informazioni",
        "answer": false
      },
      {
        "option_text": "Misurare continuamente che i controlli implementati siano effettivamente efficaci",
        "answer": true
      },
      {
        "option_text": "Migliorare continuativamente la postura dell’organizzazione relativamente alle problematiche di Cybersecurity",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 335
  },
  {
    "code": "M3.2.1_2.5",
    "question": "I nuovi controlli di ISO 27001 Rev. 2022 sono specializzati per:",
    "options": [
      {
        "option_text": "Una maggior sicurezza nella gestione dei servizi Cloud",
        "answer": true
      },
      {
        "option_text": "Preparazione dell’ICT in relazione alle problematiche di Business Continuity",
        "answer": true
      },
      {
        "option_text": "L’utilizzo prevalente di software di prodotto solo da determinati fornitori",
        "answer": false
      },
      {
        "option_text": "Migliorare la protezione dei dati anche in relazione del loro trattamento in funzione del GDPR",
        "answer": true
      },
      {
        "option_text": "Il miglioramento dell’Internet Browsing attraverso l’uso del filtraggio dei siti",
        "answer": true
      },
      {
        "option_text": "Lo sviluppo sicuro del codice software",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 336
  },
  {
    "code": "M3.2.1_2.6",
    "question": "I controlli ISO 27001 nella Rev. 2022 sono raccolti nei seguenti gruppi:",
    "options": [
      {
        "option_text": "Le persone",
        "answer": true
      },
      {
        "option_text": "I fornitori",
        "answer": false
      },
      {
        "option_text": "Gli oggetti fisici",
        "answer": true
      },
      {
        "option_text": "La tecnologia",
        "answer": true
      },
      {
        "option_text": "Gli aspetti organizzativi",
        "answer": true
      },
      {
        "option_text": "Supply Chain",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 337
  },
  {
    "code": "M3.2.1_2.7",
    "question": "Nella revisione 2022 del documento ISO 27001:",
    "options": [
      {
        "option_text": "Il nuovo nome è: “Information security, cybersecurity and breach protection-Information security management systems- Requirements”",
        "answer": false
      },
      {
        "option_text": "Il nuovo nome è: “Information security, cybersecurity and privacy protection-Information security management systems- Requirements”",
        "answer": true
      },
      {
        "option_text": "Un certo numero di controlli è rimasto invariato",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 338
  },
  {
    "code": "M4.3.2.2",
    "question": "In una Multiutility",
    "options": [
      {
        "option_text": "La gestione del cyber rischio è di solito gestito da una commissione o un comitato che risponde al consiglio di amministrazione",
        "answer": true
      },
      {
        "option_text": "Di solito la responsabilità operativa sulla cybersecurity è in carico ad un CISO che risponde, talvolta indirettamente, ad una direzione di tecnologia o innovazione",
        "answer": true
      },
      {
        "option_text": "Di solito Presidente, Vicepresidente e Amministratore Delegato hanno uno stesso livello gerarchico",
        "answer": true
      },
      {
        "option_text": "Di solito solo l’Amministratore delegato risponde al consiglio di amministrazione, mentre il Vicepresidente risponde solo al Presidente",
        "answer": false
      },
      {
        "option_text": "La proprietà è solo pubblica",
        "answer": false
      },
      {
        "option_text": "In alcuni casi i sistemi informativi sono esternalizzati in società che rimangono di proprietà dell’azienda",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 339
  },
  {
    "code": "M1.1.3.1.1",
    "question": "Nel Packet Switching (la tecnica di commutazione):",
    "options": [
      {
        "option_text": "Il messaggio viene diviso in parti più piccole (packets) che vengono gestite singolarmente",
        "answer": true
      },
      {
        "option_text": "I messaggi vengono raggruppati in pacchetti (packets) che vengono trasmessi insieme",
        "answer": false
      },
      {
        "option_text": "Ai pacchetti (packets) viene assegnato nell’intestazione Indirizzo Sorgente, la Destinazione ed altri dati",
        "answer": true
      },
      {
        "option_text": "I pacchetti viaggiano attraverso la rete, prendendo il percorso più breve possibile (routing)",
        "answer": true
      },
      {
        "option_text": "I pacchetti vengono suddivisi e trasmessi in maniera indipendente e riassemblati all'estremità ricevente nell'ordine di arrivo",
        "answer": false
      },
      {
        "option_text": "Se un messaggio arriva mancante di pacchetti o danneggiato verrà inviata una notifica per inviare nuovamente il messaggio, se invece viene raggiunto l'ordine corretto dei pacchetti, verrà inviata notifica di conferma",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 340
  },
  {
    "code": "M1.2.4.9.1",
    "question": "L’Avanced Persistent Threat (APT)",
    "options": [
      {
        "option_text": "È una minaccia perpetrata da un avversario dotato di notevole bagaglio tecnico e grandi risorse, in grado di effettuare attacchi su vasta scala, utilizzando molteplici vettori, e per periodi di tempo molto estesi",
        "answer": true
      },
      {
        "option_text": "È una minaccia che colpisce aziende molto grandi",
        "answer": false
      },
      {
        "option_text": "È di solito gestita da gruppi organizzati e/o da stati sovrani",
        "answer": true
      },
      {
        "option_text": "Utilizza software pubblicamente disponibili per riuscire meglio a propagarsi",
        "answer": false
      },
      {
        "option_text": "Può utilizzare software creati ad hoc, più versatili e complessi da rilevare",
        "answer": true
      },
      {
        "option_text": "Per raccogliere informazioni sui propri obiettivi può utilizzare tool estremamente sofisticati, e, potenzialmente, anche appoggiarsi ai servizi di intelligence del paese di provenienza",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 341
  },
  {
    "code": "M1.3.1.24.1",
    "question": "Il livello 1 del Modello ISO/OSI",
    "options": [
      {
        "option_text": "Converte i bit in un pacchetto in un segnale fisico per il mezzo di trasmissione",
        "answer": true
      },
      {
        "option_text": "Ha tra le funzioni l’adeguamento elettrico degli apparati trasmissivi",
        "answer": true
      },
      {
        "option_text": "Può utilizzare protocolli Bluetooth",
        "answer": true
      },
      {
        "option_text": "Può utilizzare il protocollo IP",
        "answer": false
      },
      {
        "option_text": "È l’interfaccia tra software e hardware nello stack ISO/OSI",
        "answer": true
      },
      {
        "option_text": "Vincola i livelli superiori agli specifici mezzi fisici di comunicazione",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 342
  },
  {
    "code": "M1.3.2_2.6",
    "question": "La subnet 160.12.32.128/19:",
    "options": [
      {
        "option_text": "Ha come indirizzo di rete 160.12.32.0",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di broadcast 160.12.63.255",
        "answer": true
      },
      {
        "option_text": "Ha come indirizzo di broadcast 160.12.63.64",
        "answer": false
      },
      {
        "option_text": "Ha come maschera di sottorete 255.255.224.0",
        "answer": true
      },
      {
        "option_text": "Ha come maschera di sottorete 255.255.32.0",
        "answer": false
      },
      {
        "option_text": "Lo spazio di indirizzamento arriva sino a (HostMax) 160.12.63.254",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 343
  },
  {
    "code": "M1.1.1.8",
    "question": "Il Triodo (o valvola Termoionica)",
    "options": [
      {
        "option_text": "Ha permesso di perfezionare e migliorare il circuito elettrico originario di Guglielmo Marconi",
        "answer": true
      },
      {
        "option_text": "Era utilizzato per migliorare la “sintonizzazione” tra trasmettitore e ricevitore",
        "answer": false
      },
      {
        "option_text": "Ha permesso di migliorare il circuito elettrico di Guglielmo Marconi grazie alla sua capacità di rilevazione delle frequenze radio e di amplificazione del segnale",
        "answer": true
      },
      {
        "option_text": "Può essere considerato l’antesignano del transistor",
        "answer": true
      },
      {
        "option_text": "Può essere considerato l’antesignano del condensatore a capacità variabile",
        "answer": false
      },
      {
        "option_text": "È di fatto una tecnologia derivata dalla lampadina ad incandescenza",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 344
  },
  {
    "code": "M1.1.6.4",
    "question": "Incidenti e attacchi informatici",
    "options": [
      {
        "option_text": "Sono sostanzialmente la stessa cosa",
        "answer": false
      },
      {
        "option_text": "La classe statistica dei primi (gli incidenti) include i secondi (gli attacchi)",
        "answer": true
      },
      {
        "option_text": "La classe statistica dei secondi (gli attacchi) include i primi (gli incidenti)",
        "answer": false
      },
      {
        "option_text": "Possono provocare perdite economiche ad un’organizzazione",
        "answer": true
      },
      {
        "option_text": "Necessitano entrambi di strumenti di protezione aggiornati",
        "answer": true
      },
      {
        "option_text": "Sono entrambi commessi da individui o organizzazioni che mirano volontariamente un altro individuo o un’azienda",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 345
  },
  {
    "code": "M1.2.1.5",
    "question": "Il Social Engineering",
    "options": [
      {
        "option_text": "È una tecnica di attacco che può sfruttare anche strumenti non informatici",
        "answer": true
      },
      {
        "option_text": "Può utilizzare i siti “social” su cui sono esposte direttamente o indirettamente informazioni personali",
        "answer": true
      },
      {
        "option_text": "Può utilizzare il Baiting",
        "answer": true
      },
      {
        "option_text": "Può utilizzare un attacco tipo “forza bruta”",
        "answer": false
      },
      {
        "option_text": "Può utilizzare il Phishing",
        "answer": true
      },
      {
        "option_text": "È diretto prevalentemente contro le aziende",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 346
  },
  {
    "code": "M1.2.4.10",
    "question": "Il ransomware",
    "options": [
      {
        "option_text": "Si diffonde di solito via e-mail, sistemi di messaggistica o chat",
        "answer": true
      },
      {
        "option_text": "Si diffonde sempre tramite sofisticate forme di attacco informatico",
        "answer": false
      },
      {
        "option_text": "Utilizza messaggi che sembrano provenire da soggetti conosciuti oppure da persone fidate",
        "answer": true
      },
      {
        "option_text": "Una volta effettuato il contagio si suggerisce di pagare il riscatto",
        "answer": false
      },
      {
        "option_text": "Una volta effettuato il contagio di un computer non si propaga in rete",
        "answer": false
      },
      {
        "option_text": "Si può mitigare con la formazione del personale, l’aggiornamento dei sw e l’uso periodico e frequente di backup dei dati e dei sistemi",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 347
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
    "id": 348
  },
  {
    "code": "M1.3.1.27",
    "question": "L’Incapsulamento secondo il modello ISO/OSI",
    "options": [
      {
        "option_text": "Permette a ciascun livello dello stack di comunicare con un proprio e specifico “protocollo”",
        "answer": true
      },
      {
        "option_text": "Permette di fatto il funzionamento del modello stesso",
        "answer": true
      },
      {
        "option_text": "Avviene dal Livello Applicazione (7) al livello Collegamento (2) in trasmissione",
        "answer": true
      },
      {
        "option_text": "Avviene dal Livello Applicazione (7) al livello Fisico (1) in trasmissione",
        "answer": false
      },
      {
        "option_text": "Avviene dal Livello Collegamento (2) al livello Applicazione (7) in ricezione (Decapsulamento)",
        "answer": true
      },
      {
        "option_text": "Avviene dal Livello Applicazione (7) al livello Fisico (1) in ricezione (Decapsulamento)",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 349
  },
  {
    "code": "M1.3.1.28",
    "question": "Il Livello ISO/OSI 3 (Rete)",
    "options": [
      {
        "option_text": "Permette di rendere i livelli superiori indipendenti dai mezzi fisici",
        "answer": true
      },
      {
        "option_text": "Permette l’implementazione del Routing",
        "answer": true
      },
      {
        "option_text": "Permette l’indirizzamento logico, univoco su tutta la rete",
        "answer": true
      },
      {
        "option_text": "Permette l’indirizzamento fisico, univoco su tutta la rete",
        "answer": false
      },
      {
        "option_text": "Diversamente dal livello 4 non effettua nessuna gestione degli errori e diagnostica",
        "answer": false
      },
      {
        "option_text": "Permette la compressione dei dati",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 350
  },
  {
    "code": "M1.3.2.18",
    "question": "Quali sono le ragioni che hanno portato alla creazione del protocollo TCP/IP",
    "options": [
      {
        "option_text": "Realizzare una trasmissione stabile tra due host",
        "answer": true
      },
      {
        "option_text": "Realizzare una trasmissione veloce tra due host",
        "answer": false
      },
      {
        "option_text": "Realizzare una trasmissione monodirezionale affidabile",
        "answer": false
      },
      {
        "option_text": "Stabilire una connessione tra un'origine e una destinazione, assicurandosi che rimanga attiva fino alla fine della comunicazione",
        "answer": true
      },
      {
        "option_text": "Realizzare uno standard per il Packet Switching ovvero la suddivisione di un messaggio in pacchetti piccoli trasmessi indipendentemente, funzionamento alla base di internet",
        "answer": true
      },
      {
        "option_text": "Realizzare un protocollo affidabile, deterministico e realtime",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 351
  },
  {
    "code": "M1.3.2.19",
    "question": "Il protocollo Ethernet a livello ISO/OSI 2 (Collegamento) è basato sui seguenti comportamenti o fasi:",
    "options": [
      {
        "option_text": "Rilevazione della Trasmissione: Ogni stazione che deve trasmettere ascolta il bus e decide di trasmettere solo se questo è libero",
        "answer": true
      },
      {
        "option_text": "Rilevazione della Trasmissione: Ogni stazione che deve trasmettere invia un messaggio di prova per testare se il bus è libero",
        "answer": false
      },
      {
        "option_text": "Accesso Multiplo: Due stazioni, trovando il mezzo trasmissivo libero, possono decidere di trasmettere contemporaneamente",
        "answer": true
      },
      {
        "option_text": "Accesso Multiplo: Due stazioni, trovando il mezzo trasmissivo libero, devono attendere un determinato tempo prima di trasmettere per evitare collisioni",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 352
  },
  {
    "code": "M1.3.2.20",
    "question": "Quali dei seguenti standard seriali elettrici sono multipunto (o multi-drop):",
    "options": [
      {
        "option_text": "RS232",
        "answer": false
      },
      {
        "option_text": "RS422",
        "answer": true
      },
      {
        "option_text": "RS485",
        "answer": true
      },
      {
        "option_text": "USB",
        "answer": false
      },
      {
        "option_text": "RJ45",
        "answer": false
      },
      {
        "option_text": "Bluetooth",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 353
  },
  {
    "code": "M1.3.2.21",
    "question": "Gli obiettivi dello standard USB sono:",
    "options": [
      {
        "option_text": "Comunicazione seriale standardizzata",
        "answer": true
      },
      {
        "option_text": "Semplificazione della configurazione dei software dei dispositivi collegati",
        "answer": true
      },
      {
        "option_text": "Sostituzione delle interfacce wi-fi",
        "answer": false
      },
      {
        "option_text": "Standardizzazione dei connettori di interfaccia",
        "answer": true
      },
      {
        "option_text": "Alimentazione dei dispositivi collegati (USB Power Delivery)",
        "answer": true
      },
      {
        "option_text": "Connettività multi-drop",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 354
  },
  {
    "code": "M1.3.2_2.8",
    "question": "L’indirizzo di Broadcast della sottorete 243.123.23.45/29 è:",
    "options": [
      {
        "option_text": "123.23.40",
        "answer": false
      },
      {
        "option_text": "123.23.47",
        "answer": true
      },
      {
        "option_text": "123.23.45",
        "answer": false
      },
      {
        "option_text": "123.23.41",
        "answer": false
      },
      {
        "option_text": "123.23.46",
        "answer": false
      },
      {
        "option_text": "255.255.248",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 355
  },
  {
    "code": "M2.2.1.6",
    "question": "Il valore associato ad un asset in un’azienda di produzione",
    "options": [
      {
        "option_text": "Può essere stimato in proporzione all’impatto sul valore della produzione in caso di fermata o interruzione dello stesso",
        "answer": true
      },
      {
        "option_text": "È certamente sempre lo stesso durante tutto il ciclo di vita (dell’asset stesso)",
        "answer": false
      },
      {
        "option_text": "Non si può calcolare se l’asset è informatico",
        "answer": false
      },
      {
        "option_text": "Non necessariamente deve essere un valore numerico, può essere riportato su una scala di criticità",
        "answer": true
      },
      {
        "option_text": "Si associa solo agli asset tangibili",
        "answer": false
      },
      {
        "option_text": "Si può assegnare agli asset tangibili ed intangibili",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 356
  },
  {
    "code": "M2.2.2.6",
    "question": "Il vettore di attacco",
    "options": [
      {
        "option_text": "Sfrutta debolezze informatiche e umane",
        "answer": true
      },
      {
        "option_text": "Nella stragrande maggioranza dei casi è frontale, diretto verso i firewall perimetrali",
        "answer": false
      },
      {
        "option_text": "È il veicolo che trasporta gli strumenti per l’attacco",
        "answer": true
      },
      {
        "option_text": "Tipicamente sfrutta e-mail di phishing, app malevole o chiavette USB infette",
        "answer": true
      },
      {
        "option_text": "Non è quasi mai legato alla disattenzione delle persone",
        "answer": false
      },
      {
        "option_text": "È la tecnologia che realizza l’attacco stesso all’interno di una organizzazione",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 357
  },
  {
    "code": "M2.3.1.7",
    "question": "Nella gestione aziendale le operazioni Oggettive possono essere:",
    "options": [
      {
        "option_text": "Il reperimento di mezzi finanziari",
        "answer": true
      },
      {
        "option_text": "Le attività decisionali",
        "answer": false
      },
      {
        "option_text": "Gli Investimenti per lo sviluppo del business",
        "answer": true
      },
      {
        "option_text": "Le attività di controllo",
        "answer": false
      },
      {
        "option_text": "La produzione ovvero la trasformazione in prodotti finiti o semilavorati",
        "answer": true
      },
      {
        "option_text": "Il disinvestimento di asset obsoleti",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 358
  },
  {
    "code": "3.1.1.8",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 359
  },
  {
    "code": "3.1.3.6",
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
        "option_text": "Di solito le regole e le procedure sono definite secondo uno standard creato dall’azienda stessa",
        "answer": false
      },
      {
        "option_text": "Riguardano tutti i livelli dell’organizzazione",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 360
  },
  {
    "code": "3.2.1.20",
    "question": "I Controlli secondo ISO/IEC 27001",
    "options": [
      {
        "option_text": "Sono le appropriate contromisure selezionate per affrontare i rischi per la cyber security",
        "answer": true
      },
      {
        "option_text": "Sono pratiche da attuare per annullare completamente i rischi di cyber sicurezza",
        "answer": false
      },
      {
        "option_text": "Sono strutturati secondo uno schema a tre livelli (edizione 2013)",
        "answer": true
      },
      {
        "option_text": "Sono strutturati secondo uno schema a quattro livelli (edizione 2013)",
        "answer": false
      },
      {
        "option_text": "Sono riuniti in quattro gruppi di controlli (edizione 2022)",
        "answer": true
      },
      {
        "option_text": "Di solito non si modificano nelle varie revisioni dello standard",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 361
  },
  {
    "code": "3.2.3.10",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 362
  },
  {
    "code": "3.3.6.7",
    "question": "Il Regolamento (UE) 2016/679 GDPR si applica",
    "options": [
      {
        "option_text": "Al trattamento dei dati personali delle persone fisiche e al trattamento non automatizzato dei dati conservati in un «archivio»",
        "answer": true
      },
      {
        "option_text": "Ad imprese enti, ed organizzazioni in generale con sede legale all’interno dell’UE",
        "answer": false
      },
      {
        "option_text": "A prescindere dal luogo ove sono collocati i sistemi di archiviazione e di elaborazione",
        "answer": true
      },
      {
        "option_text": "Solo se i sistemi di archiviazione e di elaborazione sono collocati all’interno degli stati dell’unione",
        "answer": false
      },
      {
        "option_text": "Si occupa anche dei dati personali per attività di sicurezza nazionale o di ordine pubblico",
        "answer": false
      },
      {
        "option_text": "A qualunque dato personale: nomi, foto, indirizzi e-mail, dettagli bancari, interventi su siti web di social network, informazioni mediche o indirizzi IP di computer",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 363
  },
  {
    "code": "M1.3.2.1/24",
    "question": "I protocoll i di comunicazione",
    "options": [
      {
        "option_text": "Sono un insieme di regole definite mediante specifiche sequenze di istruzioni standardizzate , di varia tipologia e finalità in base alle entità interessate e al mezzo di comunicazione",
        "answer": true
      },
      {
        "option_text": "Possono essere raccolti in famiglie in base ai vari marchi commerciali",
        "answer": false
      },
      {
        "option_text": "Permett ono la comunicazione tra due o più entità connesse su una architettura di rete o di comunicazione",
        "answer": true
      },
      {
        "option_text": "Sono un insieme di regole definite mediante specifiche sequenze di istruzioni che possono di fferenti nelle varie entità interessate alla specifica comunicazione",
        "answer": false
      },
      {
        "option_text": "Possono essere uno standard con cui sono definiti la sintassi, la semantica e la sincronizzazione della comunicazione",
        "answer": true
      },
      {
        "option_text": "Possono essere implementat i con hardware o software o in una combinazione di entrambi",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 364
  },
  {
    "code": "M1.3.2.4/24",
    "question": "L’interfaccia USB",
    "options": [
      {
        "option_text": "Può raggiungere una velocità di trasmissione di 20Gbit/sec",
        "answer": true
      },
      {
        "option_text": "È utilizzata principalmente come interfaccia punto -punto",
        "answer": true
      },
      {
        "option_text": "Può gestire al massimo 10 Hub concentratori",
        "answer": false
      },
      {
        "option_text": "Ha tra le caratteristiche fondamentali la capacità di alimentare i dispositivi collegati",
        "answer": true
      },
      {
        "option_text": "Può trasmette sino ad una distanza non superiore ai 5 metri",
        "answer": true
      },
      {
        "option_text": "Può memorizzare sino a 10 0 Gbyte",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 365
  },
  {
    "code": "M1.3.2.7",
    "question": "La modalità di trasmissione su canali in fibra ottica (WDM) è",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 366
  },
  {
    "code": "M1.3.2.10",
    "question": "Il Dominio di Collisione o Collision Domain nella trasmissione Ethernet:",
    "options": [
      {
        "option_text": "È un insieme di nodi, ridotto rispetto al dominio dell’intera rete locale, che concorrono per accedere allo stesso mezzo trasmissivo e quindi trasmettere",
        "answer": true
      },
      {
        "option_text": "È una tecnica per ridurre la probabilità di collisioni al crescere del numero di stazioni e/o del traffico all’interno di una LAN",
        "answer": true
      },
      {
        "option_text": "Una tecnica per evitare che in una rete LAN il mezzo trasmissivo sia condiviso e conteso per la trasmissione tra tutte le stazioni",
        "answer": true
      },
      {
        "option_text": "Una tecnica per eliminare completamente le collisioni in una comunicazione all’interno di un’unica LAN",
        "answer": false
      },
      {
        "option_text": "Una tecnica statistica per gestire le collisioni all’interno di una LAN",
        "answer": true
      },
      {
        "option_text": "La suddivisione della rete in più sottoreti in modo che la contesa del mezzo avvenga soltanto tra le stazioni appartenenti ad una singola sottorete",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 367
  },
  {
    "code": "M1.3.3.4",
    "question": "Il Router:",
    "options": [
      {
        "option_text": "Gestisce il traffico trasmesso su mezzi trasmissivi differenti (esempio fibra, doppino telefonico o wi -fi)",
        "answer": true
      },
      {
        "option_text": "Attraverso l’instradamento (routing) connette dispositivi su reti differenti",
        "answer": true
      },
      {
        "option_text": "Può funzionare solo a livello 2 dello stack ISO -OSI",
        "answer": false
      },
      {
        "option_text": "Funziona normalmente a livello 3 dello stack ISO -OSI",
        "answer": true
      },
      {
        "option_text": "Gestisce il traffico attraverso l’uso degli indirizzi IP",
        "answer": true
      },
      {
        "option_text": "Gestisce il traffico attraverso l’uso degli indirizz i MAC",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 368
  },
  {
    "code": "M2.1.1.6",
    "question": "Quali sono le differenze tra beni di consumo e beni strumentali?",
    "options": [
      {
        "option_text": "I beni di consumo , diversamente dai beni strumentali, vengono utilizzati direttamente per soddisfare un bisogno",
        "answer": true
      },
      {
        "option_text": "I beni di consumo possono essere le materie prime che vengono trasformate per ottenere un semilavorato o un prodotto finito",
        "answer": true
      },
      {
        "option_text": "Bene di consumo p uò essere il marchio di un determinato prodotto",
        "answer": false
      },
      {
        "option_text": "Bene di consumo può essere l’energia elettrica che alimenta il sistema informativo",
        "answer": true
      },
      {
        "option_text": "I beni strumentali sono tutti quei beni materiali e immateriali che le imprese utilizzano per realizzare la propria attività ma che non sono parte costituente del prodotto o del servizio",
        "answer": true
      },
      {
        "option_text": "I beni strumentali sono tutti quei beni materiali e immateriali che le imprese utilizzano per realizzare la propria attività ma che possono essere parte costituente del prodotto o del servizio",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 369
  },
  {
    "code": "M2.1.2.2",
    "question": "Il Soggetto Giuridico",
    "options": [
      {
        "option_text": "È la persona nel cui nome l’attività aziendale è esercitata",
        "answer": true
      },
      {
        "option_text": "È la persona che assume solo gli obblighi derivanti dalle operazioni aziendali",
        "answer": false
      },
      {
        "option_text": "È la persona alla quale sono riferiti i diritti e gli obblighi che nascono dalla costituzione dell’azienda e dal suo",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 370
  },
  {
    "code": "M2.1.3.1",
    "question": "Le aziende nel settore terziario",
    "options": [
      {
        "option_text": "Possono realizzare attività di intermediazione, o di produzione indiretta di beni, attraverso il commercio degli stessi",
        "answer": true
      },
      {
        "option_text": "Possono realizzare attività di produzione diretta di beni",
        "answer": false
      },
      {
        "option_text": "Possono essere quelle attività complementari e di ausilio ai settori primario e secondario",
        "answer": true
      },
      {
        "option_text": "Possono realizzare produzione diretta o indiretta di servizi (ad esempio le aziende bancarie, assicurative, di trasporto, ecc .)",
        "answer": true
      },
      {
        "option_text": "Possono essere le aziende che gestiscono i trasporti e le comunicazioni",
        "answer": true
      },
      {
        "option_text": "Possono basare il proprio core business sul know -how e sui servizi intellettuali (R&D, formazione, consulenza, ecc.)",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 371
  },
  {
    "code": "M2.3.1.2",
    "question": "Il Sistema di Gestione aziendale",
    "options": [
      {
        "option_text": "Sono modelli organizzativi aziendali adottati su base volontaria e realizzati mediante l'applicazione organica e sistematica di regole e procedure",
        "answer": true
      },
      {
        "option_text": "Sono regole e procedure che una azienda fa proprie solamente a livello di top management e di consiglio di amministrazione allo scopo di raggiungere specifici obiettivi",
        "answer": false
      },
      {
        "option_text": "Può avere come obiettivo il tenere sotto controllo l’attività dell’azienda affinché sia in grado di soddisfare le esigenze del Cliente",
        "answer": true
      },
      {
        "option_text": "Può avere come obiettivo il miglioramento progressivo delle prestazioni aziendali",
        "answer": true
      },
      {
        "option_text": "Non rigu arda specificamente il controllo dei processi aziendali",
        "answer": false
      },
      {
        "option_text": "Può dimostrare a terzi, soprattutto a Organismi di controllo e potenziali clienti, la propria capacità di mantenere i propri impegni (conformità normativa)",
        "answer": true
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 372
  },
  {
    "code": "M3.2.1.1",
    "question": "Lo standard ISO/IEC 27000 -series",
    "options": [
      {
        "option_text": "È una serie di norme internazionali che costituiscono uno standard relativo alla sicurezza informatica",
        "answer": true
      },
      {
        "option_text": "È uno standard monolitico costituito da un solo documento che unisce insieme una serie di norme internazionali",
        "answer": false
      },
      {
        "option_text": "È denominato \"Information Security Management Systems (ISMS) Family of Standards\" e si prefigge di proteggere le informazioni che vengono mantenute ed elaborate da un’organizzazione",
        "answer": true
      },
      {
        "option_text": "Permette alle organizzazioni di sviluppare ed implementare un proprio sistema per la gestione della sicurezza informatica per le informazioni finanziarie, la proprietà intellettuale ed i dati dei dipendenti, di clienti o di terzi",
        "answer": true
      },
      {
        "option_text": "Ha generato altri standard, tra cui il British Standard BS 7799 -1 e -2",
        "answer": false
      },
      {
        "option_text": "Si focalizza sulla protezione dei dati unicamente attraverso il consolidamento tecnologico",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 373
  },
  {
    "code": "M3.2.1.21",
    "question": "Nell’Area Tematica dei Requisiti ISO 27001 “ Pianificazione ”",
    "options": [
      {
        "option_text": "L'organizzazione deve determinare i rischi e le opportunità che devono essere affrontati per garantire che il sistema di gestione della sicurezza delle informazioni possa raggiungere i risultati previsti",
        "answer": true
      },
      {
        "option_text": "L'organizzazione deve determinare i rischi e le opportunità che devono essere affrontati per prevenire, o ridurre, effetti indesiderati nel raggiungimen to dei risultati previsti",
        "answer": true
      },
      {
        "option_text": "L'organizzazione deve determinare i rischi e le opportunità che devono essere affrontati per mantenere almeno costante il livello di sicurezza",
        "answer": false
      },
      {
        "option_text": "L'organizzazione deve definire e applicare un processo di valutazione del rischio per la sicurezza delle informazioni che stabilisce e aggiorna i criteri di rischio per la sicurezza delle informazioni",
        "answer": true
      },
      {
        "option_text": "L'organizzazione deve definire e applicare un processo di valutazione del rischio per la sicurezza delle informazioni in maniera indipendente, senza prendere in considerazioni altre normative come il GDPR",
        "answer": false
      },
      {
        "option_text": "L'organizzazione deve determinare i rischi e le opportunità che garantisce che ripetute valutazioni del rischio per la sicurezza delle informazioni producano risultati coerenti, validi e comparabili",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 374
  },
  {
    "code": "M3.2.1.4",
    "question": "I Controlli ISO/IEC 27001 (Allegato A)",
    "options": [
      {
        "option_text": "Sono le appropriate contromisure selezionate dalle organizzazioni per affrontare i rischi per la cyber security identificati",
        "answer": true
      },
      {
        "option_text": "Come indicato nel documento ISO/IEC 27002 associato all’ Annex A di ISO 27001 sono strutturati secondo uno schema a 3 livelli",
        "answer": true
      },
      {
        "option_text": "Come indicato nel documento ISO/IEC 27002 associato all’ Annex A di ISO 27001 sono strutturati secondo uno schema a 2 livelli",
        "answer": false
      },
      {
        "option_text": "Sono 114 secondo l’edizione ISO/IEC 27001/2 2013",
        "answer": true
      },
      {
        "option_text": "Sono 116 secondo l’edizione ISO/IEC 27001/2 2016",
        "answer": false
      },
      {
        "option_text": "Sono 93 secondo l’edizione ISO/IEC 27002 2022",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 375
  },
  {
    "code": "M3.2.1.7",
    "question": "Quali delle seguenti sono Aree di Controllo secondo ISO 27001 2013?",
    "options": [
      {
        "option_text": "Sicurezza logica e ambientale",
        "answer": false
      },
      {
        "option_text": "Sicurezza delle attività operative",
        "answer": true
      },
      {
        "option_text": "Sicurezza delle reti e dei sistemi di comunicazione",
        "answer": true
      },
      {
        "option_text": "Acquisizione, sviluppo e manutenzione dei sistemi",
        "answer": true
      },
      {
        "option_text": "Gestione della catena di fornitura",
        "answer": false
      },
      {
        "option_text": "Gestione deli incidenti relativi alla sicurezza delle informazioni",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 376
  },
  {
    "code": "M3.2.3.4",
    "question": "Nel NIST CSF i livelli di implementazione del framework (\"Tier\")",
    "options": [
      {
        "option_text": "Forniscono un contesto su come un'organizzazione considera il rischio di sicurezza informatica e i processi in atto per gestirlo",
        "answer": true
      },
      {
        "option_text": "Descrivono il grado in cui le pratiche di gestione del rischio di sicurezza informatica di un'organizzazione esibiscono le caratteristiche definite nel Framework (ad esempio, consapevole del rischio e delle minacce, ripetibile e adattivo)",
        "answer": true
      },
      {
        "option_text": "Caratterizzano le pratiche di un'organizzazione in un intervallo, da Parziale (Tier 1) ad Ada ttativo (Tier 5)",
        "answer": false
      },
      {
        "option_text": "Riflettono una progressione da risposte informali e reattive (Tier 1) ad approcci agili e informati sui rischi (Tier 5)",
        "answer": false
      },
      {
        "option_text": "Durante il processo di selezione del livello, un'organizzazione dovrebbe considerare le sue attuali pratiche di gestione del rischio, l'ambiente delle minacce, i requisiti legali e normativi, gli obiettivi aziendali/della missione e i vincoli organiz zativi",
        "answer": true
      },
      {
        "option_text": "Sono valutati considerando tre parametri che permettono di verificare il livello di sviluppo del Processo di Gestione del Rischio (1), l’Integrazione del Programma di Gestione del Rischio (2) all’interno della realtà aziendale e la capacità dell’organizzaz ione di partecipare ad un ecosistema di gestione del rischio più ampio della singola realtà aziendale (3)",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 377
  },
  {
    "code": "M3.2.3.7",
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
        "option_text": "È l'insieme delle attività necessarie per gestire il rischio di sicurezza informatica associato a soggetti esterni",
        "answer": true
      },
      {
        "option_text": "Può includere le attività di verifica che i requisiti di sicurezza informatica siano soddisfatti attraverso una varietà di metodologie di valutazione per i soggetti interni",
        "answer": false
      },
      {
        "option_text": "Può includere le attività di comunicazione ai fornitori di come saranno verificati e convalidati i requisiti di qualità del prodotto",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 378
  },
  {
    "code": "M3.2.6.1",
    "question": "La serie ISA/IEC 62443",
    "options": [
      {
        "option_text": "Fornisce un quadro flessibile per affrontare e mitigare le vulnerabilità di sicurezza attuali e future nei sistemi di control lo e automazione industriale (IACS)",
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
    "id": 379
  },
  {
    "code": "M3.3.1.1",
    "question": "Il Diritto alla Privacy",
    "options": [
      {
        "option_text": "Nasce negli Stati Uniti nel 1910 dall’istituto «diritto a essere lasciato solo» ( right to be let alone ) e viene elaborato in Italia dagli anni ‘60 -’70",
        "answer": false
      },
      {
        "option_text": "Attualmente viene inteso solo nel senso di protezione dei dati personali",
        "answer": false
      },
      {
        "option_text": "Originariamente significava libertà “nel fare quello che si vuole con i propri affari privati che non coinvolgono gli altri” principio che deve confrontarsi con gli altri che impediscono all’individuo di agire da solo",
        "answer": true
      },
      {
        "option_text": "Originariamente significava libertà “nel fare quello che si vuole con i propri affari privati ” senza confrontarsi con gli altri",
        "answer": false
      },
      {
        "option_text": "Attualmente viene inteso non solo nel senso di protezione dei dati personali ma anche come diritto a esprimere liberamente le proprie aspirazioni",
        "answer": true
      },
      {
        "option_text": "Nasce negli Stati Uniti nel 1890 dall’istituto «diritto a essere lasciato solo» ( right to be let alone ) e viene elaborato in Italia dagli anni ‘60 -’70",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 380
  },
  {
    "code": "M3.3.3.1",
    "question": "La Brand Reputation",
    "options": [
      {
        "option_text": "Si riferisce al modo in cui il brand (Marchio) viene valutato da parte del pubblico",
        "answer": true
      },
      {
        "option_text": "Deve essere differenziata dalla Brand Image che risulta sviluppata e costruita dall’azienda in maniera strategica e può non corrispondere alla reale percezione del pubblico",
        "answer": true
      },
      {
        "option_text": "Si sovrappone al concetto di Brand Image che corrispondere alla reale percezione del pubblico",
        "answer": false
      },
      {
        "option_text": "Impatta direttamente l’immagine dell’azienda proprietaria del marchio",
        "answer": false
      },
      {
        "option_text": "Può non impattare direttamente l’immagine dell’azienda proprietaria del marchio",
        "answer": true
      },
      {
        "option_text": "Presuppone e dipende da “azioni concrete” che si prestano ad essere rendicontate",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 381
  },
  {
    "code": "M3.3.5.1",
    "question": "La Direttiva NIS (Network and Information Security)",
    "options": [
      {
        "option_text": "È il primo atto legislativo sulla sicurezza informatica approvato dall’Unione Europea",
        "answer": true
      },
      {
        "option_text": "È entrata in vigore il 6 luglio 201 7",
        "answer": false
      },
      {
        "option_text": "Stabilisce l’obiettivo dell’adozione di una serie di misure di sicurezza comuni che verranno successivamente definit e a discrezione dei singoli paesi",
        "answer": false
      },
      {
        "option_text": "Impone la notifica obbligatoria degli incidenti all'Autorità nazionale istituita allo scopo",
        "answer": true
      },
      {
        "option_text": "Impone la nascita di CSIRT (Computer Security Incident Response Team) nazionali, sulla base del CERT -UE",
        "answer": true
      },
      {
        "option_text": "Impone di realizzare un network nei singoli paesi che si occupi della sicurezza delle reti critiche",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 382
  },
  {
    "code": "M3.3.6.1/24",
    "question": "Il Regolamento (UE) 2016/679 GDPR",
    "options": [
      {
        "option_text": "È un regolamento dell'Unione europea in materia di trattamento dei dati personali e di privacy",
        "answer": true
      },
      {
        "option_text": "Necessità di essere recepito dai singoli stati , ovvero i singoli stati devono prendere provvedimenti di natura legislativa per conformarsi",
        "answer": false
      },
      {
        "option_text": "Ha come obiettivo primario il rafforzamento della protezione dei dati personali di cittadini dell'Unione europea (UE) e dei residenti nell'UE, solo all'interno dei confini dell'UE",
        "answer": false
      },
      {
        "option_text": "Si applica al trattamento dei dati personali delle persone fisiche e al trattamento non automatizzato dei dati conservati in un «archivio»",
        "answer": true
      },
      {
        "option_text": "Il regolamento non si applica ad imprese ed enti, organizzazioni con sede legale fuori dall’UE che trattano dati di residenti dell’Unione Europea",
        "answer": false
      },
      {
        "option_text": "Il regolamento si occupa anche dei dati personali per attività di sicurezza nazionale o di ordine pubblico",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 383
  },
  {
    "code": "M3.3.6.4",
    "question": "Le Figure di Riferimento per il trattamento dei dati, ai sensi del “Codice della Privacy” , sono le seguenti:",
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
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 384
  },
  {
    "code": "M3.3.7.2",
    "question": "La futura certificazione della cybersicurezza secondo il Regolamento (UE) 2019/881",
    "options": [
      {
        "option_text": "Quattro livelli di certificazione con diverse “affidabilità”",
        "answer": false
      },
      {
        "option_text": "Tre livelli di certificazione con diverse “affidabilità”",
        "answer": true
      },
      {
        "option_text": "Un livello di affidabilità “di base”, per il quale può bastare un riesame della documentazione tecnica, attività di valutazio ne sostitutive di effetto equivalente. Il livello base è l’unico per il quale il produttore/fornitore può ricorrere all’autocertifi cazione, ove prevista",
        "answer": true
      },
      {
        "option_text": "Un livello di affidabilità “sostanziale”, per il quale la valutazione di sicurezza è effettuata a un livello inteso a ridurre al minimo i rischi di incidenti ed attacchi informatici commessi da soggetti che dispongono di abilità e risorse limitate",
        "answer": true
      },
      {
        "option_text": "Un livello di affidabilità “elevato, per il quale la valutazione di sicurezza è effettuata a un livello inteso a ridurre al m inimo il rischio di attacchi informatici avanzati commessi da attori che dispongono di abilità e risorse significative",
        "answer": true
      },
      {
        "option_text": "Un livello di affidabilità “critico“, per il quale la valutazione di sicurezza è effettuata a un livello inteso ad annullare il rischio di attacchi informatici avanzati commessi da attori che dispongono di abilità e risorse significative",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 385
  },
  {
    "code": "M3.4.3.3",
    "question": "Il Risk Apetite",
    "options": [
      {
        "option_text": "Può essere tradotto come Propensione al Rischio",
        "answer": true
      },
      {
        "option_text": "Delimita inferiormente l’aerea dei rischi che devono essere assolutamente evitati o massimamente ridotti, mediante tutti gli strumenti disponibili (Area Rossa)",
        "answer": true
      },
      {
        "option_text": "Delimita superiormente l’aerea dei rischi che devono essere assolutamente evitati o massimamente ridotti, mediante tutti gli strumenti disponibili (Area Rossa)",
        "answer": false
      },
      {
        "option_text": "Delimita superiormente l’aerea dei rischi che devono essere monitorati e gestiti costantemente dall’azienda (Area Gialla)",
        "answer": true
      },
      {
        "option_text": "Indica il livello e il tipo di rischio che un’organizzazione è in grado di assumere coerentemente con gli obiettivi strategic i perseguiti",
        "answer": true
      },
      {
        "option_text": "Delimita l'area di rischio entro cui l'azienda desidera muoversi",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 386
  },
  {
    "code": "M1.2.4.39",
    "question": "Advanced Persistent Threat (APT)",
    "options": [
      {
        "option_text": "È una minaccia perpetrata da un avversario dotato di notevole bagaglio tecnico e grandi risorse, in grado di effettuare attacchi su vasta scala, utilizzando molteplici vettori, e per periodi di tempo molto estesi",
        "answer": true
      },
      {
        "option_text": "È di solito gestita da gruppi organizzati e/o da stati sovrani",
        "answer": true
      },
      {
        "option_text": "Utilizza prevalentemente software pubblicamente disponibili per riuscire meglio a propagarsi",
        "answer": false
      },
      {
        "option_text": "Di solito utilizza software creati ad hoc, più versatili e complessi da rilevare",
        "answer": true
      },
      {
        "option_text": "Per raccogliere informazioni sui propri obiettivi può utilizzare tool estremamente sofisticati, e, potenzialmente, anche appoggiarsi ai servizi di intelligence del paese di provenienza",
        "answer": true
      },
      {
        "option_text": "Di solito è realizzata da piccole organizzazioni con obiettivi di basso profilo, prevalentemente economici",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 387
  },
  {
    "code": "M1.2.3.5",
    "question": "Un attacco Cyber alla Supply Chain",
    "options": [
      {
        "option_text": "Può essere conseguito introducendo malware in un sistema software realizzato da un fornitore esterno",
        "answer": true
      },
      {
        "option_text": "Può essere un attacco indiretto, ovvero attuato ad un elemento della catena di fornitura",
        "answer": true
      },
      {
        "option_text": "Prende di mira i fornitori invece di puntare direttamente ad aziende target per renderne più difficile l'identificazione",
        "answer": true
      },
      {
        "option_text": "Di solito colpisce le Grandi Aziende",
        "answer": false
      },
      {
        "option_text": "Può essere causato dalla differente postura di sicurezza informatica di fornitore e cliente",
        "answer": true
      },
      {
        "option_text": "È una minaccia emergente destinata solamente a sviluppatori e fornitori di software",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 388
  },
  {
    "code": "M3.2.6.14",
    "question": "La serie ISA/IEC 62443",
    "options": [
      {
        "option_text": "È stata sviluppata dal comitato ISA99 e rilasciata con lo stesso nome, successivamente è stata adottata dalla Commissione elettrotecnica internazionale (IEC)",
        "answer": true
      },
      {
        "option_text": "Continua ad essere sviluppata dal comitato ISA99 che si avvale del contributo e delle conoscenze degli esperti di sicurezza IACS di tutto il mondo",
        "answer": true
      },
      {
        "option_text": "Originariamente è stata sviluppata da ISA99 ed ora è in gestione dal comitato IEC che non sviluppa nuove parti",
        "answer": false
      },
      {
        "option_text": "Fornisce un quadro flessibile per affrontare e mitigare le vulnerabilità di sicurezza attuali e future nei sistemi di controllo e automazione industriale (IACS)",
        "answer": true
      },
      {
        "option_text": "Attualmente è costituito da quattro famiglie di standard corrispondenti a quattro profili di approfondimento",
        "answer": true
      },
      {
        "option_text": "Attualmente è costituito da tre famiglie di standard corrispondenti a tre profili di approfondimento",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 389
  },
  {
    "code": "M.3.3.2.4",
    "question": "Il Brevetto",
    "options": [
      {
        "option_text": "È un titolo in forza del quale si conferisce al titolare un monopolio di sfruttamento di un’invenzione, per un periodo di tempo limitato",
        "answer": true
      },
      {
        "option_text": "Consiste nel diritto esclusivo di realizzare un’invenzione, disporne e farne un uso commerciale, vietando tali attività ad altri soggetti non autorizzati",
        "answer": true
      },
      {
        "option_text": "Attribuisce al titolare un’autorizzazione al libero uso dell’invenzione coperta dal brevetto",
        "answer": false
      },
      {
        "option_text": "Attribuisce al titolare il diritto di escludere altri soggetti dall’utilizzo della stessa",
        "answer": true
      },
      {
        "option_text": "Conferisce un diritto esclusivo di sfruttamento dell'invenzione, in un territorio e per un periodo ben determinato",
        "answer": true
      },
      {
        "option_text": "Conferisce un diritto esclusivo di sfruttamento dell'invenzione, globalmente e per un periodo illimitato",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 390
  },
  {
    "code": "M.3.3.2.5",
    "question": "Gli Asset informatici",
    "options": [
      {
        "option_text": "Sono le casseforti aziendali a cui deve essere attribuito il valore effettivo in base a adeguate valutazioni",
        "answer": true
      },
      {
        "option_text": "Sono i contenitori dei patrimoni conoscitivi dell’azienda, che permettono di realizzare in maniera costante e ripetitiva o, altresì, di evolvere un prodotto o un servizio",
        "answer": true
      },
      {
        "option_text": "Sono unicamente i sistemi gestionali che permettono di gestire gli ordini dai clienti e quindi il vero valore per l’azienda",
        "answer": false
      },
      {
        "option_text": "Sono quei sistemi informatici che non richiedono un onere di gestione e manutenzione grazie al forte ritorno economico",
        "answer": false
      },
      {
        "option_text": "Devono essere protetti con una strategia di protezione crescente e stratificata, dall’esterno verso il cuore della proprietà intellettuale",
        "answer": true
      },
      {
        "option_text": "Possono essere i Sistemi CAD/CAM Computer Aided Design e Manufacturing presso gli uffici di ingegneria e progettazione",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 391
  },
  {
    "code": "M.3.3.3.3",
    "question": "I Data Breach",
    "options": [
      {
        "option_text": "Sono violazioni di sicurezza che comportano la distruzione, la perdita, la modifica, la divulgazione non autorizzata o l’accesso ai dati personali trasmessi, conservati o comunque trattati",
        "answer": true
      },
      {
        "option_text": "Sono violazioni dei dati personali che possono compromettere la riservatezza, l’integrità o la disponibilità di dati personali",
        "answer": true
      },
      {
        "option_text": "Possono essere, ad esempio, l’accesso o l’acquisizione dei dati da parte di terzi non autorizzati",
        "answer": true
      },
      {
        "option_text": "Possono essere, ad esempio, il furto o la perdita di dispositivi informatici contenenti dati personali",
        "answer": true
      },
      {
        "option_text": "Possono essere, ad esempio, l’impossibilità di accedere ai dati per aver dimenticato o perso le credenziali",
        "answer": false
      },
      {
        "option_text": "Possono essere, ad esempio, la deliberata alterazione di dati personali",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 392
  },
  {
    "code": "M3.3.5.2",
    "question": "Secondo la direttiva NIS (Network and Information Security) il CSIRT Nazionale include i seguenti compiti:",
    "options": [
      {
        "option_text": "Il monitoraggio degli incidenti a livello nazionale Vero 1. L’emissione di preallarmi, allerte, annunci e divulgazione di informazioni alle parti interessate in merito a rischi e incidenti",
        "answer": true
      },
      {
        "option_text": "L’intervento in caso di incidente",
        "answer": true
      },
      {
        "option_text": "L’analisi a posteriori dei rischi e degli incidenti",
        "answer": false
      },
      {
        "option_text": "La partecipazione economica agli investimenti in cybersecurity",
        "answer": false
      },
      {
        "option_text": "La partecipazione alla rete dei CSIRT europei",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 393
  },
  {
    "code": "M3.3.5.3",
    "question": "NIS2 (Network and Information Security) rispetto alla prima direttiva NIS:",
    "options": [
      {
        "option_text": "Elimina la distinzione tra fornitori di servizi essenziali e fornitori di servizi digitali, le aziende vengono classificate in “essenziali” e/o “importanti” a seconda della criticità dei servizi che offrono",
        "answer": true
      },
      {
        "option_text": "Prevede che le nuove categorie dei sevizi essenziali e importanti siano sottoposte a regimi di vigilanza diversi",
        "answer": true
      },
      {
        "option_text": "Entrerà direttamente in forza senza il recepimento dei singoli stati dell’UE",
        "answer": false
      },
      {
        "option_text": "Amplia l’ambito di applicazione comprendendo più servizi, come la produzione di prodotti farmaceutici, dispositivi medici e prodotti chimici, il settore alimentare, la gestione delle acque reflue e dei rifiuti, i servizi postali, nonché la pubblica amministrazione",
        "answer": true
      },
      {
        "option_text": "Prevede il nuovo obiettivo di rafforzare la sicurezza informatica lungo la catena di approvvigionamento",
        "answer": true
      },
      {
        "option_text": "Non è ancora entra in vigore",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 394
  },
  {
    "code": "M3.3.6.8",
    "question": "Per il Regolamento UE 2016/679 GDPR",
    "options": [
      {
        "option_text": "L’informativa deve essere fornita dal titolare del trattamento agli interessati, prima del trattamento",
        "answer": true
      },
      {
        "option_text": "L’informativa deve essere fornita dal titolare del trattamento sulle finalità e le modalità dei trattamenti operati",
        "answer": true
      },
      {
        "option_text": "L'informativa disciplina due diversi casi: dati raccolti presso l'interessato e dati raccolti presso altri soggetti",
        "answer": true
      },
      {
        "option_text": "L'informativa disciplina diversi casi: dall’Art. 13 sino all’articolo 16",
        "answer": false
      },
      {
        "option_text": "Una volta fornita l’informativa deve essere poi esplicitamente dato un valido consenso per la raccolta dei dati e per i propositi per i quali sono usati da parte dell’interessato",
        "answer": true
      },
      {
        "option_text": "Il consenso può essere fornito in maniera unica anche su molti punti informativi anche non distinti e specificati",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 395
  },
  {
    "code": "M3.4.1.3",
    "question": "Il Contesto di un’Organizzazione secondo ISO 27001?",
    "options": [
      {
        "option_text": "Fa riferimento alla comprensione dell’organizzazione nel suo insieme, il modello di business e i suoi rischi, le aspettative degli “stake holder”, il management e tutte le parti che ne compongono la struttura",
        "answer": true
      },
      {
        "option_text": "Deve essere considerato a partire dall’alto (approccio Top-Down)",
        "answer": true
      },
      {
        "option_text": "Deve essere considerato a partire dalle strutture operative (approccio Bottom-Up)",
        "answer": false
      },
      {
        "option_text": "Deve essere utilizzato per definire il campo di applicazione e gli obiettivi del sistema di gestione che si vuole implementare",
        "answer": true
      },
      {
        "option_text": "Deve considerare lo stato attuale dell’azienda e l’obiettivo futuro, dopodiché permettere di definire il progetto di cambiamento",
        "answer": true
      },
      {
        "option_text": "Supporta, nella definizione del progetto di cambiamento, la quantizzazione dei possibili investimenti",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 396
  },
  {
    "code": "M3.4.3.4",
    "question": "Come si può definire una strategia di mitigazione del rischio?",
    "options": [
      {
        "option_text": "Si può delimitare, coerentemente con gli obiettivi strategici stabiliti, aree di gestione differenti",
        "answer": true
      },
      {
        "option_text": "Si associano le varie aree di gestione ad azioni di mitigazione diversificate",
        "answer": true
      },
      {
        "option_text": "Si possono delimitare, ad esempio, tre aree di gestioni (attenzione, monitoraggio e divieto)",
        "answer": true
      },
      {
        "option_text": "Si possono delimitare le aree con soglie associate al livello e la tipologia del rischio",
        "answer": true
      },
      {
        "option_text": "Si definisce un’area di divieto che richiede un monitoraggio continuo",
        "answer": false
      },
      {
        "option_text": "Si definisce sempre una soglia di Risk Apetite ovvero una soglia che deve essere sempre superata",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 397
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
    "id": 398
  },
  {
    "code": "M4.1.4.1",
    "question": "Quali possono essere le ragioni per investire in Digitalizzazione?",
    "options": [
      {
        "option_text": "Migliore qualità: Controlli automatici e ripetitivi, segnalazione anomalie in tempo reale",
        "answer": true
      },
      {
        "option_text": "Risparmio di tempo: Riduzione dei tempi di produzione e di consegna, riduzione dei fermi",
        "answer": true
      },
      {
        "option_text": "Riduzione dei magazzini: Integrazione della supply chain, riordino automatico dei componenti solo quando serve effettivamente",
        "answer": true
      },
      {
        "option_text": "Risparmio di costi di infrastruttura, grazie all’utilizzo prevalente delle affidabili connessioni internet pubbliche",
        "answer": false
      },
      {
        "option_text": "Maggiore sostenibilità: minori consumi ed emissioni, riduzione dei supporti cartacei per la documentazione",
        "answer": true
      },
      {
        "option_text": "Smart working: maggiore flessibilità lavorativa e migliore produttività",
        "answer": true
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 399
  },
  {
    "code": "M4.2.1.2",
    "question": "I seguenti settori di attività e il relativo rischio:",
    "options": [
      {
        "option_text": "Le organizzazioni bancarie e finanziarie: il rischio cyber è relativo alla continuità del servizio e quindi del business",
        "answer": true
      },
      {
        "option_text": "Le aziende industriali: il rischio cyber può portare a un danno reputazionale",
        "answer": true
      },
      {
        "option_text": "Le aziende industriali: il rischio cyber può influire sulla continuità del business",
        "answer": true
      },
      {
        "option_text": "I servizi sanitari (ambulatori, strutture ospedaliere, ecc.): in cui il rischio è la diffusione dei dati sensibili dei pazienti",
        "answer": true
      },
      {
        "option_text": "I servizi sanitari (ambulatori, strutture ospedaliere, ecc.): in cui il rischio è il possibile impatto sulla salute pubblica",
        "answer": true
      },
      {
        "option_text": "Le infrastrutture critiche: il rischio primario è quello finanziario",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 400
  },
  {
    "code": "M4.1.3.7",
    "question": "Verificare la correttezza del significato delle sigle corrispondenti alle seguenti figure professionali:",
    "options": [
      {
        "option_text": "CIO = Chief Information Officer",
        "answer": true
      },
      {
        "option_text": "CSO = Chief Security Officer",
        "answer": true
      },
      {
        "option_text": "CSO = Chief Safety Officer",
        "answer": false
      },
      {
        "option_text": "CISO = Chief Information Security Officer",
        "answer": true
      },
      {
        "option_text": "DPO = Data Prevention Officer",
        "answer": false
      },
      {
        "option_text": "CTO = Chief Transiction Officer",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 401
  },
  {
    "code": "M1.1.2.12",
    "question": "La trasmissione telefonica su rete cablata 1",
    "options": [
      {
        "option_text": "È tecnicamente più complessa rispetto alla trasmissione telegrafica perché deve trasmettere la voce umana",
        "answer": true
      },
      {
        "option_text": "2 Necessita della modulazione (trasformazione) del segnale da trasmettere",
        "answer": true
      },
      {
        "option_text": "3 Attraverso la modulazione in frequenza si adatta alla banda di frequenze che possono essere trasmesse sul canale",
        "answer": true
      },
      {
        "option_text": "4 Dall’inizio ha permesso il collegamento di tutti gli utenti in rete senza l’intervento umano",
        "answer": false
      },
      {
        "option_text": "5 Ha utilizzato dall’inizio un sistema di commutazione automatica che permetteva di collegare gli utenti componendo un numero su un selettore a disco",
        "answer": false
      },
      {
        "option_text": "6 Ha utilizzato dapprima la commutazione automatica solamente per le chiamate locali",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 402
  },
  {
    "code": "M2.2.1.3.1",
    "question": "Quali strategie posso utilizzare per mitigare i possibili danni da un attacco cyber ai sistemi che gestiscono una linea produttiva (l’unica che produce un determinato prodotto molto costoso)?",
    "options": [
      {
        "option_text": "Ridondare e rendere indipendenti le architetture di rete e i dispositivi informatici che gestiscono le linee di produzione",
        "answer": true
      },
      {
        "option_text": "Realizzare un adeguato sistema di segmentazione e segregazione delle reti e degli apparati di controllo",
        "answer": true
      },
      {
        "option_text": "Aumentare gli stock delle materie prime",
        "answer": false
      },
      {
        "option_text": "Controllare strettamente e monitorare gli accessi logici diretti ai sistemi di produzione dall’esterno all’azienda",
        "answer": true
      },
      {
        "option_text": "Aumentare considerevolmente la quantità di prodotti finiti in magazzino",
        "answer": false
      },
      {
        "option_text": "Scollegare fisicamente e isolare la rete industriale di produzione dalla rete office",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 403
  },
  {
    "code": "M3.2.1_2.9",
    "question": "Nella revisione 2022 di ISO 27001",
    "options": [
      {
        "option_text": "Compare per la prima volta la parola Cybersecurity nel titolo",
        "answer": true
      },
      {
        "option_text": "Il numero dei controlli è inferiore rispetto alla versione precedente del 2013",
        "answer": true
      },
      {
        "option_text": "Molti controlli sono stati accorpati e non ne sono stati introdotti di nuovi",
        "answer": false
      },
      {
        "option_text": "Molti controlli sono rimasti invariati",
        "answer": true
      },
      {
        "option_text": "Un certo numero di controlli è stato semplicemente rinominato",
        "answer": true
      },
      {
        "option_text": "Un certo numero di controlli è completamente nuovo",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 404
  },
  {
    "code": "M3.2.1_2.8",
    "question": "Il nuovo Controllo ISO 27001 Rev. 2022 “Data leakage prevention”",
    "options": [
      {
        "option_text": "Indica che le misure di prevenzione della fuga di dati si applicano ai sistemi, alle reti e a qualsiasi altro dispositivo che tratta, memorizza o trasmette informazioni sensibili",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 405
  },
  {
    "code": "M3.3.1.2.1",
    "question": "Quali sono le origini legislative del diritto alla privacy italiano?",
    "options": [
      {
        "option_text": "La Costituzione Italiana, con gli articoli riguardanti il domicilio, la libertà e segretezza della corrispondenza, e la libertà di manifestazione del pensiero",
        "answer": true
      },
      {
        "option_text": "La Costituzione Italiana con l’articolo che incorpora la privacy nei diritti inviolabili dell’uomo, come anche sostenuto dalla sentenza della Corte costituzionale",
        "answer": true
      },
      {
        "option_text": "La prima sentenza della Corte di Cassazione degli anni ’50 sul “caso del tenore Enrico Caruso”",
        "answer": true
      },
      {
        "option_text": "La prima sentenza della Corte di Cassazione degli anni ’50 che identificava il diritto alla privacy nella tutela delle situazioni e vicende personali e familiari solamente se riguardanti le vicende personali verificatesi entro il domicilio domestico",
        "answer": false
      },
      {
        "option_text": "La prima legge italiana di tutela della privacy come attuazione della vecchia direttiva europea della metà degli anni ‘90",
        "answer": true
      },
      {
        "option_text": "La prima legge italiana di tutela della privacy come attuazione del vecchio regolamento europeo della metà degli anni ‘90",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 406
  },
  {
    "code": "M3.3.1.3.1",
    "question": "Quali sono le attuali leggi italiane sulla privacy?",
    "options": [
      {
        "option_text": "Il \"Codice in materia di protezione dei dati personali” detto anche “Testo unico sulla Privacy”",
        "answer": true
      },
      {
        "option_text": "Il Codice anche detto “Codice della Privacy”",
        "answer": true
      },
      {
        "option_text": "Il Codice “Tutela delle persone e di altri soggetti rispetto al trattamento dei dati personali” del 1996",
        "answer": false
      },
      {
        "option_text": "Il Regolamento del Parlamento Europeo e del Consiglio cosiddetto GDPR (General Data Protection Regulation) attraverso i relativi D.M. e D.L. di adeguamento",
        "answer": true
      },
      {
        "option_text": "La Direttiva europea “Relativa alla tutela delle persone fisiche con riguardo al trattamento dei dati personali, nonché alla libera circolazione di tali dati”",
        "answer": false
      },
      {
        "option_text": "Il decreto-legge con le disposizioni che abrogano la vecchia direttiva europea relativa alla tutela delle persone fisiche con riguardo al trattamento dei dati personali, nonché alla libera circolazione di tali dati",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 407
  },
  {
    "code": "M3.3.5.7",
    "question": "NIS2 (Network and Information Security) rispetto alla prima direttiva NIS:",
    "options": [
      {
        "option_text": "Elimina la distinzione tra fornitori di servizi essenziali e fornitori di servizi digitali, le aziende vengono classificate in “essenziali” e/o “importanti” a seconda della criticità dei servizi che offrono",
        "answer": true
      },
      {
        "option_text": "Prevede che le nuove categorie dei sevizi essenziali e importanti siano sottoposte ad adempimenti differenti",
        "answer": true
      },
      {
        "option_text": "Come direttiva entrerà direttamente in forza senza il recepimento da parte dei singoli stati dell’UE",
        "answer": false
      },
      {
        "option_text": "Amplia l’ambito di applicazione comprendendo più servizi, come la produzione di prodotti farmaceutici, dispositivi medici e prodotti chimici, il settore alimentare, la gestione delle acque reflue e dei rifiuti, i servizi postali, nonché la pubblica amministrazione",
        "answer": true
      },
      {
        "option_text": "Prevede il nuovo obiettivo di rafforzare la sicurezza informatica nella Supply Chain",
        "answer": true
      },
      {
        "option_text": "Si prefigge di restringere il numero delle aziende coinvolte dalla normativa visto la grandissima ed eterogenea platea della prima versione della direttiva",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 408
  },
  {
    "code": "M3.2.1_1.2",
    "question": "L'area tematica dei requisiti ISO/IEC 27001 \"Attività Operative\" definisce che:",
    "options": [
      {
        "option_text": "L'organizzazione deve pianificare, implementare e controllare i processi necessari per soddisfare i requisiti e implementare le azioni predeterminate",
        "answer": true
      },
      {
        "option_text": "L'organizzazione deve esaminare anche le conseguenze dei cambiamenti non voluti",
        "answer": true
      },
      {
        "option_text": "L'organizzazione deve eseguire valutazioni periodiche del rischio per la sicurezza delle informazioni o quando si verificano cambiamenti significativi",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 409
  },
  {
    "code": "M3.2.3_1.1",
    "question": "Il futuro NIST CSF 2.0",
    "options": [
      {
        "option_text": "Ai cinque pilastri principali del programma del framework attuale, il NIST CSF 2.0 aggiunge la funzione di “ Governo”",
        "answer": true
      },
      {
        "option_text": "Ha di fatto cambiato completamente la logica delle funzioni previste dal NIST CSF 1.1",
        "answer": false
      },
      {
        "option_text": "Attraverso la funzione Governo sottolinea che la sicurezza informatica è una delle principali fonti di rischio aziendale come indicazione fondamentale per la leadership",
        "answer": true
      },
      {
        "option_text": "Introduce la nuova funzione \"Governo\" che, diversamente dalle altre funzioni, non mantiene la struttura con Categorie e Sottocategorie",
        "answer": false
      },
      {
        "option_text": "Mediante la nuova funzione Governo fornisce i risultati per informare ciò che un’organizzazione può fare per raggiungere e dare priorità ai risultati delle altre cinque funzioni",
        "answer": true
      },
      {
        "option_text": "Enfatizza che le attività di governance sono fondamentali per incorporare la cyber security nella più ampia strategia di gestione del rischio aziendale di un’organizzazione",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 410
  },
  {
    "code": "M2.2.1.7",
    "question": "Quali strategie posso utilizzare per proteggere da un possibile attacco cyber ad una linea produttiva (l’unica che produce uno specifico prodotto)?",
    "options": [
      {
        "option_text": "Identificare e proteggere (o eliminare) eventuali connessioni dirette alla rete pubblica (internet)",
        "answer": true
      },
      {
        "option_text": "Realizzare un adeguato sistema di segmentazione e segregazione delle reti e degli apparati di controllo",
        "answer": true
      },
      {
        "option_text": "Gestire gli accessi remoti ai sistemi informatici di linea con opportune procedure, autorizzazioni, tecnologie",
        "answer": true
      },
      {
        "option_text": "Valutare la realizzazione di una linea produttiva parallela analoga alla prima che utilizza la stessa",
        "answer": false
      },
      {
        "option_text": "Identificare eventuali obsolescenze software e hardware e vulnerabilità standardizzate (CVE) nei sistemi industriali",
        "answer": true
      },
      {
        "option_text": "Isolare completamente la rete industriale dalla rete office",
        "answer": false
      }
    ],
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 411
  },
  {
    "code": "M3.2.1_2.13",
    "question": "Il controllo ISO/IEC 27001:",
    "options": [
      {
        "option_text": "2022 \"Information security for use of cloud services\" ovvero che i processi relativi ai servizi cloud devono essere conformi con i requisiti di sicurezza delle informazioni dell'organizzazione E' un controllo solo Preventivo",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 412
  },
  {
    "code": "M3.2.6.5",
    "question": "Le zone secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "Dividono un sistema in zone omogenee raggruppando le risorse (logiche o fisiche) con requisiti di sicurezza comuni",
        "answer": true
      },
      {
        "option_text": "Dividono una architettura fisica (dispositivi di rete e connessioni) in zone omogenee raggruppando i dispositivi HW con requisiti di sicurezza comuni",
        "answer": false
      },
      {
        "option_text": "Hanno requisiti di sicurezza definiti da Security Level (SL), il livello richiesto per una zona è determinato dall'analisi del rischio",
        "answer": true
      },
      {
        "option_text": "Sono connesse attraverso i conduits che raggruppano gli elementi che ne consentono la comunicazione",
        "answer": true
      },
      {
        "option_text": "Possono essere suddivise in sottozone con livelli di sicurezza differenti consentendo una difesa in profondità",
        "answer": true
      },
      {
        "option_text": "Possono estendersi includendo impianti presenti in siti fisici differenti",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 413
  },
  {
    "code": "M3.2.6.6",
    "question": "I conduits secondo ISA/IEC 62443",
    "options": [
      {
        "option_text": "Consentono la comunicazione controllata e sicura tra due zone",
        "answer": true
      },
      {
        "option_text": "Non possono essere usati per fare comunicare più zone fra di loro",
        "answer": false
      },
      {
        "option_text": "Forniscono funzioni di sicurezza che permettono la coesistenza di zone con diversi livelli di",
        "answer": true
      },
      {
        "option_text": "Consistono nel raggruppamento di cyber asset, dedicati solamente alla comunicazione, e che condividono gli stessi requisiti di cybersecurity",
        "answer": true
      },
      {
        "option_text": "Possono avere sotto-conduits",
        "answer": false
      },
      {
        "option_text": "Possono essere realizzati con l’ausilio di tecnologie per il controllo del traffico e di anomaly",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 414
  },
  {
    "code": "M3.4.1.4",
    "question": "Perché la leadership aziendale è fondamentale per la definizione di un SGSI (Sistema di Gestione della Sicurezza Informatica)?",
    "options": [
      {
        "option_text": "Perché altrimenti possono non essere garantiti gli investimenti necessari per la sua realizzazione",
        "answer": true
      },
      {
        "option_text": "Perché senza il benestare chiaro, motivato e comunicato della leadership aziendale non si riuscirà a coinvolgere efficacemente tutto il personale aziendale",
        "answer": true
      },
      {
        "option_text": "Perché altrimenti non si riusciranno a portare a termine i cambiamenti nelle politiche, nei processi e nelle procedure necessari",
        "answer": true
      },
      {
        "option_text": "Perché solo una leadership consapevole può capire sino in fondo l’impatto possibile della sicurezza informatica con il funzionamento dell’organizzazione",
        "answer": true
      },
      {
        "option_text": "Così è chiara la responsabilità in caso di cattivo funzionamento del sistema di gestione",
        "answer": false
      },
      {
        "option_text": "Così è possibile creare nuove figure e ruoli che altrimenti sarebbe impossibile definire",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 415
  },
  {
    "code": "M3.4.1.5",
    "question": "Si associano per costruire un sistema di gestione adattabile, in grado di proteggere le informazioni aziendali ai cambiamenti.",
    "options": [
      {
        "option_text": "Requisiti ISO 27001 e ciclo PDCA Possono essere associati per creare un ciclo virtuoso di miglioramento continuo dell'ISMS",
        "answer": true
      },
      {
        "option_text": "Sono associati prevalentemente per rappresentazione graficamente i requisiti",
        "answer": false
      },
      {
        "option_text": "Permettono di raggruppare ed associare le aree tematiche dei requisiti a fasi specifiche e definite",
        "answer": true
      },
      {
        "option_text": "Associano alla fase Plan la comprensione del contesto dell'organizzazione, della leadership, la pianificazione e gli elementi di supporto",
        "answer": true
      },
      {
        "option_text": "Associano alla fase Do la valutazione delle prestazioni del sistema",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 416
  },
  {
    "code": "M3.4.4.4",
    "question": "L’Assessment del Rischio",
    "options": [
      {
        "option_text": "Prevede una fase di identificazione che mira ad individuare le minacce esistenti e a stabilirne le caratteristiche",
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
        "option_text": "Può realizzare l’identificazione con un approccio probabilità -> impatto",
        "answer": false
      },
      {
        "option_text": "Prevede una fase di valutazione che mira alla determinazione dell’entità del rischio (probabilità- impatto)",
        "answer": true
      },
      {
        "option_text": "Prevede una fase di valutazione che viene espressa di solito in forma complessa utilizzabile mediante appositi strumenti",
        "answer": false
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 417
  },
  {
    "code": "M3.4.5.7",
    "question": "La VPN (Virtual Private Network)",
    "options": [
      {
        "option_text": "Si realizza attraverso un canale di comunicazione criptato creato per gestire la privacy nelle comunicazioni",
        "answer": true
      },
      {
        "option_text": "Si realizza attraverso un canale di comunicazione criptato che può essere creato anche sopra una LAN aziendale",
        "answer": true
      },
      {
        "option_text": "La criptazione fornisce garanzie che i pacchetti non contengano potenziali minacce rendendo il sistema intrinsecamente sicuro",
        "answer": false
      },
      {
        "option_text": "Utilizza sempre e solo una tiplogia di protocollo di criptazione, il",
        "answer": true
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 418
  },
  {
    "code": "M1.3.3.1",
    "question": "La convergenza funzionale nei dispositivi di rete",
    "options": [
      {
        "option_text": "È la tendenza ad aumentare le funzionalità dei dispostivi di rete «inglobando» funzionalità di altre tipologie di dispositivi",
        "answer": true
      },
      {
        "option_text": "È un fenomeno causato dalla forte concorrenza sul mercato dei dispositivi di rete e dall’aumento delle prestazioni delle piattaforme di elaborazione",
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 419
  },
  {
    "code": "M3.2.6.7",
    "question": "I Livelli di Sicurezza secondo ISA/IEC 62443-3-3 Sono quattro:",
    "options": [
      {
        "option_text": "Da SL1= Protezione contro violazioni casuali a SL4=Protezione contro violazioni con mezzi sofisticati, risorse estese, skill specifici e alta motivazione",
        "answer": true
      },
      {
        "option_text": "Rappresentano un metodo qualitativo per identificare la sicurezza in ciascuna zona",
        "answer": false
      },
      {
        "option_text": "Sono tre: da SL1= Protezione contro violazioni casuali a SL3=Protezione contro violazioni con mezzi sofisticati, risorse estese, skill specifici e alta motivazione",
        "answer": false
      },
      {
        "option_text": "Per la corretta definizione dei requisiti di sicurezza vengono declinati per ciascuno dei requisiti derivati dai requisiti di base o fondazionali",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 420
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 421
  },
  {
    "code": "M3.3.5.10",
    "question": "In cosa la normativa",
    "options": [
      {
        "option_text": "GDPR differisce dalla NIS 2 GDPR è orientato primariamente alla Privacy e alla protezione del dato dall'origine, NIS 2 alla continuità del servizio",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 422
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 423
  },
  {
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
        "option_text": "Rischio di service continuity",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 424
  },
  {
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
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 425
  },
  {
    "code": "M1.3.3.6.3",
    "question": "Lo Switch di rete:",
    "options": [
      {
        "option_text": "Se di Layer 3 può effettuare operazioni di routing",
        "answer": true
      },
      {
        "option_text": "Non può fare mai operazioni di Routing",
        "answer": false
      },
      {
        "option_text": "Se di Layer 3 può indirizzare pacchetti su VLAN differenti",
        "answer": true
      },
      {
        "option_text": "Può effettuare operazioni di \"mirroring\" se di tipo \"Managed\"",
        "answer": true
      },
      {
        "option_text": "Se di Layer 2 può dividere il dominio di broadcast attraverso le VLAN",
        "answer": true
      },
      {
        "option_text": "Se di tipo “Unmanaged” permette la configurazione delle VLAN",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 426
  },
  {
    "code": "M1.3.3.13",
    "question": "Il Firewall:",
    "options": [
      {
        "option_text": "E' un dispositivo di sicurezza perimetrale utilizzato solamente per difendere la connessione alla rete pubblica (untrusted)",
        "answer": false
      },
      {
        "option_text": "È un dispositivo di rete che può essere utilizzato per separare zone con livelli di sicurezza differenti",
        "answer": true
      },
      {
        "option_text": "E' un dispostivo che può operare sino al livello 7 dello stack ISO/OSI",
        "answer": true
      },
      {
        "option_text": "E' un dispositivo che può operare anche a livello 2, il livello MAC",
        "answer": true
      },
      {
        "option_text": "E' un dispositivo bilaterale configurabile a regole di sicurezza che permette di abilitare o bloccare messaggi in transito",
        "answer": true
      },
      {
        "option_text": "Di ultima generazione permettono di analizzare l'intero pacchetto trasmesso e non solo l'intestazione",
        "answer": true
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 427
  },
  {
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 428
  },
  {
    "code": "M2.2.2.5.1",
    "question": "Quali dei seguenti elementi possono essere considerati",
    "options": [
      {
        "option_text": "Vettori di Attacco Politiche di sicurezza non aggiornate",
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
    "category": "Organizzazione e Gestione Aziendale (M2)",
    "id": 429
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 430
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 431
  },
  {
    "code": "M3.2.1_2.17",
    "question": "Il controllo ISO/IEC 27001:",
    "options": [
      {
        "option_text": "2022 “Privileged access rights” ovvero che l'assegnazione e l'uso dei diritti di accesso privilegiati devono essere limitati e gestiti Indica che l'assegnazione e l'uso dei diritti di accesso privilegiati deve essere assegnato in base al ruolo e la responsabilità all'interno dell'organizzazione",
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
        "option_text": "È un requisito Preventivo e Investigativo",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 432
  },
  {
    "code": "M3.2.1_2.18",
    "question": "L'attributo dei controlli",
    "options": [
      {
        "option_text": "ISO/IEC 27001:2022 Cybersecurity Concepts Permettono di associare, e quindi etichettare, un controllo ad una funzione del NIST CSF Core",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 433
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 434
  },
  {
    "code": "M3.2.3_1.3",
    "question": "I Framework",
    "options": [
      {
        "option_text": "Profile del NIST CSF Possono essere visti come una fotografia dello stato corrente di implementazione del Framework Core all'interno dell'organizzazione",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 435
  },
  {
    "code": "M3.2.3_1.4",
    "question": "Il risultato atteso NIST CSF ID.AM-08:",
    "options": [
      {
        "option_text": "Sistemi, hardware, software, servizi e dati vengono gestiti durante tutto il loro ciclo di vita vuole significare Che per tutti i sistemi, gli hardware i software i sevizi e i dati è necessario gestire la configurazione e identificare la durata del ciclo di vita",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 436
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 437
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 438
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 439
  },
  {
    "code": "M3.2.6.20",
    "question": "Come si può migliorare i livello di sicurezza di un Conduit secondo ISO/IEC 62443 Migliorando l'Access Control:",
    "options": [
      {
        "option_text": "restingendo l'accesso al Conduit in base al ruolo dell'utente e i suoi relativi privilegi",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 440
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 441
  },
  {
    "code": "M3.3.5_1.2",
    "question": "I principali elementi che differenziano la prima edizione della",
    "options": [
      {
        "option_text": "NIS e NIS2 sono Viene eliminata la distinzione tra fornitori di servizi essenziali e fornitori di servizi digitali",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 442
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 443
  },
  {
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 444
  },
  {
    "code": "M3.3.5_1.5",
    "question": "Qual è il punto di contatto unico competente",
    "options": [
      {
        "option_text": "NIS relativamente alla direttiva (UE) 2022/2555 CERT-UE",
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
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 445
  },
  {
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
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 446
  },
  {
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
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 447
  },
  {
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
        "option_text": "Secondo le normative deve prevedere un sistema di gestione",
        "answer": true
      },
      {
        "option_text": "Nello topografia indicata nello schema sopra sono rappresentate Zone (con differenti colori in base alla specifica funzione) e dispositivi di rete numerati progressivamente. Indicare quali dei segmenti di rete (indicati con l'insieme dei dispositivi) sono Conduit secondo ISA-IEC 62443 selezionando",
        "answer": true
      },
      {
        "option_text": "2-3-4-5-6-7",
        "answer": true
      },
      {
        "option_text": "2-3-4-5",
        "answer": false
      },
      {
        "option_text": "9-10-11",
        "answer": true
      },
      {
        "option_text": "13-14-15",
        "answer": true
      },
      {
        "option_text": "9-10-11-12-13-14-15",
        "answer": false
      },
      {
        "option_text": "17-18",
        "answer": true
      },
      {
        "option_text": "17-18-19-20-21-22-23-24",
        "answer": false
      },
      {
        "option_text": "20-21",
        "answer": true
      },
      {
        "option_text": "23-24",
        "answer": true
      },
      {
        "option_text": "26-27-28-29-30-31-32-33-34-35-36",
        "answer": false
      },
      {
        "option_text": "38-39-40-41-42-43-44-45-46-47-48",
        "answer": false
      },
      {
        "option_text": "26-27-28",
        "answer": true
      },
      {
        "option_text": "30-31-32",
        "answer": true
      },
      {
        "option_text": "34-35-36",
        "answer": true
      },
      {
        "option_text": "38-39-40",
        "answer": true
      },
      {
        "option_text": "42-43-44",
        "answer": true
      },
      {
        "option_text": "46-47-48",
        "answer": true
      },
      {
        "option_text": "Un'azienda di produzione ha necessità di aumentare il livello di sicurezza degli accessi esterni da parte di fornitori di servizi di assistenza e manutenzione. Per fare questo è stato deciso di migliorare il sistema di gestione esistente utilizzando alcuni controlli ISO/IEC 27001: 2022 e IEC 62443. Indicare",
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
        "option_text": "ISA/IEC 62443-3-3 SR 4.2 - Information persistence - RE 1 Purging of shared memory resoruce {1:MC:~Vero~=Falso}",
        "answer": false
      },
      {
        "option_text": "ISA/IEC 62443-3-3 SR 5.3 – General purpose person-to-person communication restrictions {1:MC:~Vero~=Falso}",
        "answer": false
      },
      {
        "option_text": "ISA/IEC 62443-3-3 SR 7.5 – Emergency power {1:MC:~Vero~=Falso}",
        "answer": false
      }
    ],
    "category": "Risk Management, Legal & Compliance (M4)",
    "id": 448
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
    "id": 449
  },
  {
    "code": "M1.3.3.16",
    "question": "Il Firewall:",
    "options": [
      {
        "option_text": "Basato su zone impedisce il traffico tra due zone diverse se non esiste una policy esplicita che lo consenta",
        "answer": true
      },
      {
        "option_text": "Valuta le regole di configurazione dall’alto verso il basso e, in assenza di una regola di match, viene applicata la policy di default.",
        "answer": true
      },
      {
        "option_text": "NGFW (Next-Generation Firewall) può integrare funzionalità come IDS/IPS",
        "answer": true
      },
      {
        "option_text": "Correttamente configurato elimina la necessità di aggiornare i sistemi operativi degli Host di rete",
        "answer": false
      },
      {
        "option_text": "Valuta sempre tutte le regole prima di decidere se consentire o bloccare un pacchetto",
        "answer": false
      },
      {
        "option_text": "Di livello applicativo opera esclusivamente sul livello 3 del modello OSI",
        "answer": false
      }
    ],
    "category": "Reti, Internet e Cyber Security (M1)",
    "id": 450
  },
  {
    "code": "M2.2.2.7",
    "question": "Quali delle seguenti",
    "options": [
      {
        "option_text": "Debolezze Tecnologiche possono essere sfruttate da un Vettore d'attacco Vulnerabilità informatiche e mancato aggiornamento del software",
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
    "id": 451
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
    "id": 452
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
    "id": 453
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
    "id": 454
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
    "id": 455
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
    "id": 456
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
        "option_text": "Ha di fatto ampliato l'ambito di applicazione riconoscendo che la cybersecurity riguarda l'intera organizzazione e le sue interazioni",
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
    "id": 457
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
    "id": 458
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
    "id": 459
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
    "id": 460
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
        "option_text": "Sono reti di neuroni artificiali addestrate mediante la taratura dei parametri che propagano o meno il segnale (spike) ai neuroni successivi.",
        "answer": true
      }
    ],
    "category": "Crittografia e Sicurezza dei Dati (M3)",
    "id": 461
  }
];
