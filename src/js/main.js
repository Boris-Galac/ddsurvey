///// HAM BTN AND NAV OPEN/CLOSEDS

const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");

hamBtn.addEventListener("click", (e) => {
  if (nav.getAttribute("aria-expanded") === "false") {
    nav.setAttribute("aria-expanded", "true");
    hamBtn.setAttribute("data-active", "true");
  } else {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  }
});

const navLink = document.querySelectorAll(".header .nav__link");
navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  });
});

///////// INTERSECTION OBSERVER

const observere = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      //  else {
      //   entry.target.classList.remove("active");
      // }
    });
  },
  { threshold: 0.2 }
);

// left
const left = document.querySelectorAll(".hidden-left");
left.forEach((el) => observere.observe(el));
// right
const right = document.querySelectorAll(".hidden-right");
right.forEach((el) => observere.observe(el));
// bottom
const fade = document.querySelectorAll(".hidden-fade");
fade.forEach((el) => observere.observe(el));
// clippy circle
const clippyCircle = document.querySelectorAll(".circle-clip-animation");
clippyCircle.forEach((el) => observere.observe(el));

// 👉 LANGUAGE

// const selectElement = (selector) => {
//   const element = document.querySelector(selector);
//   if (element) return element;
//   throw new Error(
//     `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
//   );
// };

// const langBtn = document.querySelectorAll(".lang-btn");

// langBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let targetLanguage = e.currentTarget.getAttribute("data-lang");
//     // 👉 ITA
//     if (targetLanguage === "ita") {
//       // about us section
//       selectElement(".about-us-ita-heading").innerText = "CHI SIAMO";
//       selectElement(
//         ".about-us__paragraph-ita-paragraph"
//       ).innerText = `Rappresentanza esclusiva dell'armatore, indipendente da broker, agenti o operatori di marketing. Offriamo soluzioni chiavi in mano trasparenti che salvaguardano il valore, garantiscono prestazioni impeccabili e proteggono lo yacht a lungo termine. Il nostro team è composto da marinai altamente qualificati con ampie conoscenze e diplomi professionali, che apportano competenza ed esperienza pratica senza pari a ogni progetto.`;
//       // our services section
//       selectElement(".services-ita-heading").innerText = "SERVIZI";
//       selectElement(".one-btn-ita-heading").innerText =
//         "RAPPRESENTANZA DELL'ARMATORE";
//       selectElement(".one-btn-ita-paragraph").innerText =
//         "Rappresentanza esclusiva uno-a-uno dell'armatore in ogni fase — dalle negoziazioni e rapporti con i cantieri alla supervisione tecnica di capitani, ingegneri e rappresentanti dei marchi. Durante la costruzione, ogni sistema di bordo viene perfezionato per garantire funzionalità, perfezione visiva e prestazioni a lungo termine, migliorando il funzionameto complessivo dell'imbarcazione. Le soluzioni avanzate vengono integrate precocemente, evitando modifiche costose e preservando il valore dello yacht a lungo termine. Alla consegna, l'armatore riceve un rapporto dettagliato scritto e digitale, inclusa documentazione fotografica e analisi tecnica complete che garantisce piena trasparenza e chiarezza assoluta in ogni fase.";
//       selectElement(".two-btn-ita-heading").innerText = `PERIZIA PRE-ACQUISTO`;

//       selectElement(
//         ".two-btn-ita-paragraph"
//       ).innerText = `Ispezioni tecniche meticolose che offrono completa chiarezza prima dell'acquisto. Dall'integrità strutturale alle apparecchiature di navigazione, ogni dettaglio viene verificato affinché possiate investire con fiducia. Navigatori esperti, concentrandosi su affidabilità tecnica, sicurezza e prestazioni a lungo termine, esaminano anche dettagli interni, funzionalità, praticità e precisione di esecuzione. Questo approccio garantisce una valutazione realistica e completa dello yacht. Quando necessario, i risultati vengono presentati con completa trasparenza per proteggere gli interessi dell'armatore.`;
//       selectElement(
//         ".three-btn-ita-heading"
//       ).innerText = `PREPARAZIONE BANDIERA/CLASSE COMMERCIALE (RINA/ MCA / IACS)`;
//       selectElement(
//         ".three-btn-ita-paragraph"
//       ).innerText = `L'intero processo per portare uno yacht in piena conformità con i regolamenti dello Stato di bandiera viene eseguito con precisione e discrezione. La registrazione e tutti i requisiti COD associati sono monitorati attentamente, con ogni passaggio gestito in anticipo per evitare costi o ritardi non necessari. Garantiamo che l'imbarcazione sia sempre in regola con tutta la documentazione obbligatoria, registri, giornali di bordo e certificati, mantenendo lo yacht pienamente conforme e pronto per un'operatività commerciale sicura in ogni momento. Ogni requisito viene soddisfatto con efficienza e trasparenza, garantendo certificazione impeccabile e affidabilità a lungo termine.`;
//       selectElement(".four-btn-ita-heading").innerText = `SUPERVISIONE REFIT`;
//       selectElement(
//         ".four-btn-ita-paragraph"
//       ).innerText = `Gestiamo tutti i tipi di refit, con particolare esperienza nei refit di yacht in alluminio. Dal coordinamento con i cantieri alla consegna finale, ogni fase è controllata per garantire i più alti standard tecnici ed estetici. I budget vengono programmati con precisione, fornendo agli armatori piena trasparenza finanziaria, mentre rapporti regolari informano costantemente sullo stato dell'imbarcazione e assicurano l'ottimizzazione degli investimenti futuri. Ogni fase è supervisionata da professionisti esperti e trasparenti che forniscono una valutazione accurata dei progressi e della qualita.`;
//       selectElement(
//         ".five-btn-ita-heading"
//       ).innerText = `CONTROLLO STAGIONALE/ANNUALE E RAPPORTO SULLE CONDIZIONI`;

//       selectElement(
//         ".five-btn-ita-paragraph"
//       ).innerText = `Ispezioni complete e rapporti dettagliati consegnati prima della stagione, del ciclo annuale o del periodo di charter. Questo servizio salvaguarda prontezza, prestazioni e valore, fornendo ad armatori e gestori completa tranquillità.`;
//       selectElement(
//         ".six-btn-ita-heading"
//       ).innerText = `CONSEGNA E FORMAZIONE EQUIPAGGIO`;
//       selectElement(
//         ".six-btn-ita-paragraph"
//       ).innerText = `Transizione fluida dello yacht dal cantiere o dalla proprietà precedente all'operazione attiva. Ogni sistema di bordo viene accuratamente spiegato e dimostrato all'equipaggio, garantendo che sia pienamente preparato a gestire i sistemi e le aspettative dell'armatore. La formazione che include sicurezza, operazioni tecniche e standard di servizio, assicura che ogni membro dell'equipaggio sia completamente competente e pronto a operare fin dal primo giorno. Tutto il processo di consegna viene condotto con precisione e transparenza.`;
//       selectElement(
//         ".seven-btn-ita-heading"
//       ).innerText = `VERIFICA PERIZIE E AUDIT OPERATIVO`;
//       selectElement(
//         ".seven-btn-ita-paragraph"
//       ).innerText = `In collaborazione con l'armatore, esaminiamo e verifichiamo i rapporti di perizia esistenti per garantire accuratezza e completezza. Questo processo include un audit dettagliato delle operazioni dello yacht, identificando aree di miglioramento per ridurre i rischi operativi e proteggere l'investimento dell'armatore.`;
//       selectElement(".eight-btn-ita-heading").innerText = `SICUREZZA`;
//       selectElement(
//         ".eight-btn-ita-paragraph"
//       ).innerText = `Forniamo soluzioni di sicurezza su misura per yacht, armatori ed equipaggio, guidati da un team d'élite di Agenti di Protezione Ravvicinata con licenze internazionali.`;
//       selectElement(
//         ".security-list-ita-li-one"
//       ).innerText = `Protezione ravvicinata, scorta e sorveglianza armata o non armata 24/7 in mare e in porto`;

//       selectElement(
//         ".security-list-ita-li-two"
//       ).innerText = `Monitoraggio continuo dello yacht 24/7 e tracciamento remoto per una sicurezza senza compromessi`;

//       selectElement(
//         ".security-list-ita-li-three"
//       ).innerText = `Verifiche approfondite e controlli sul background dell’equipaggio`;

//       selectElement(
//         ".security-list-ita-li-four"
//       ).innerText = `Supporto di sicurezza per armatori, ospiti e operazioni`;

//       selectElement(
//         ".security-list-ita-li-five"
//       ).innerText = `Test con poligrafo disponibili su richiesta`;

//       selectElement(
//         ".security-list-ita-li-six"
//       ).innerText = `Formazione specializzata nel riconoscimento delle minacce e nella risposta alle emergenze`;

//       selectElement(
//         ".security-list-ita-li-seven"
//       ).innerText = `Addestramento e implementazione delle apparecchiature di sicurezza`;

//       selectElement(
//         ".security-list-ita-li-eight"
//       ).innerText = `Protezione elettronica e informatica avanzata: rilevamento spyware, sicurezza mobile/cloud, anti-intercettazione, difesa contro droni`;

//       selectElement(
//         ".security-list-ita-li-nine"
//       ).innerText = `Trasporto discreto di oggetti di valore e fornitura di attrezzature tattiche su misura`;

//       selectElement(
//         ".security-list-ita-li-ten"
//       ).innerText = `Protezione continua, riservata e ininterrotta ai massimi livelli.`;

//       // ceo section
//       selectElement(
//         ".ceo-ita-paragraph"
//       ).innerText = `La Sig.ra Dina Jelaska proviene da una lunga stirpe di navigatori, con generazioni di capitani che hanno stabilito una tradizione di eccellenza in mare. Dopo essersi diplomata presso una scuola nautica, ha trascorso quindici anni in una posizione di alto livello presso la Famiglia Reale (EAU), dove le è stato affidato il protocollo e l'accoglienza di ospiti illustri. In quel ruolo ha lavorato a stretto contatto con capi di Stato, membri di famiglie reali e VIP provenienti da tutto il mondo, affinando i valori di precisione, discrezione ed eccellenza.
// L'esperienza con i mega yacht, parte integrante dello stile di vita della Famiglia Reale, le ha fornito una profonda comprensione della loro complessità, degli standard rigorosi e delle aspettative personalizzate dei proprietari.
// Forte di questa esperienza unica e supportata da una rete fidata di professionisti esperti, Dina ha fondato un'azienda specializzata in perizie di yacht e superyacht. Il suo lavoro combina competenza tecnica, standard di sicurezza senza compromessi e design d'interni raffinato, fornito attraverso un servizio su misura definito da fiducia, discrezione e prestigio.`;
//       // contact section
//       selectElement(".contact-ita-heading").innerText = `contattaci`;
//       selectElement(
//         ".contact-ita-paragraph"
//       ).innerText = `Se hai bisogno di supporto esperto per ispezioni di yacht, supervisione di refitting, preparazione di corsi o qualsiasi altro aspetto della gestione dell'imbarcazione, siamo qui per aiutarti. Contattaci direttamente per discutere delle tue esigenze e ti forniremo un servizio personalizzato, progettato per proteggere il tuo investimento e offrirti la massima tranquillità.`;
//     }
//     // 👉 ENG
//     /* about us */
//     if (targetLanguage === "eng") {
//       selectElement(".about-us--heading").innerText = "About us";
//       selectElement(
//         ".about-us__paragraph"
//       ).innerText = `Exclusively representing the yacht owner, independent of brokers, agents, or marketers. We deliver transparent, turnkey solutions that safeguard value, ensure flawless performance, and protect your yacht for the long term. Our team is composed of highly educated seafarers with extensive nautical miles and professional diplomas, bringing unmatched expertise and practical insight to every project.
// `;
//       // our services
//       selectElement(".services--heading").innerText = "our services";
//       selectElement(".one-btn-eng-heading").innerText = "OWNER REPRESENTATION";
//       selectElement(
//         ".one-btn-eng-paragraph"
//       ).innerText = `Exclusive one-to-one representation of the yacht owner at every stage—from negotiations and shipyard dealings to technical supervision of captains, engineers, and brand representatives. During construction, every onboard system is refined to ensure functionality, visual perfection, and long-term performance, enhancing the vessel's overall operation. Advanced solutions are integrated early, eliminating costly modifications and preserving the yacht's long-term value. After each assignment, owners receive a detailed written and digital report, including photographic documentation and comprehensive technical analysis, ensuring full transparency and complete clarity at every stage.`;
//       selectElement(".two-btn-eng-heading").innerText = "PRE-PURCHASE SURVEY";
//       selectElement(
//         ".two-btn-eng-paragraph"
//       ).innerText = `Meticulous technical inspections that deliver complete clarity before purchase. From structural integrity to operational performance, every detail is revealed, allowing you to invest with confidence and avoid unexpected issues. Surveys are conducted from the perspective of an experienced seafarer, focusing on technical reliability, safety, and long-term performance, while also examining interior details, functionality, practicality, and the accuracy of execution. This balanced approach ensures a realistic and comprehensive evaluation of the yacht. When necessary, findings are presented with complete transparency to protect your interests.`;
//       selectElement(".three-btn-eng-heading").innerText =
//         "FLAG/COMMERCIAL CLASS PREPARATION (RINA / MCA /IACS)";
//       selectElement(
//         ".three-btn-eng-paragraph"
//       ).innerText = `The entire process of bringing a yacht into full compliance with its flag state regulations is handled with precision and discretion. Registration and all associated COD requirements are closely monitored, with every step anticipated and managed in advance to avoid unnecessary costs or delays. We ensure the vessel is always equipped with all mandatory documentation, registers, logbooks, and certificates, keeping the yacht fully compliant and ready for safe commercial operation at all times. Every requirement is fulfilled with efficiency and transparency, guaranteeing flawless certification and long-term reliability.`;
//       selectElement(".four-btn-eng-heading").innerText = "REFIT SUPERVISION";
//       selectElement(
//         ".four-btn-eng-paragraph"
//       ).innerText = `We manage all types of refits, with particular expertise in aluminum yacht refits. From shipyard coordination to final handover, every stage is controlled to ensure the highest technical and aesthetic standards. Budgets are prepared with precision, providing owners with complete financial clarity, while comprehensive reports outline the vessel's condition and identify potential future investment opportunities. Each phase is closely monitored, with transparent updates that give you an accurate assessment of progress and quality.`;
//       selectElement(
//         ".five-btn-eng-heading"
//       ).innerText = `SEASONAL / YEARLY CHECK & CONDITION REPORT`;
//       selectElement(
//         ".five-btn-eng-paragraph"
//       ).innerText = `Comprehensive inspections and detailed reports delivered ahead of the season, yearly cycle, or charter period. This service safeguards readiness, performance, and value, providing owners and managers with complete peace of mind.`;
//       selectElement(
//         ".six-btn-eng-heading"
//       ).innerText = `HANDOVER & CREW TRAINING`;
//       selectElement(
//         ".six-btn-eng-paragraph"
//       ).innerText = `In collaboration with the owner, we review and verify existing survey reports to ensure accuracy and completeness. This process involves a detailed audit of yacht operations, identifying areas for improvement, mitigating operational risks, and safeguarding the owner's investme`;
//       selectElement(
//         ".seven-btn-eng-heading"
//       ).innerText = `SURVEY VERIFICATION & OPERATIONAL AUDIT`;
//       selectElement(
//         ".seven-btn-eng-paragraph"
//       ).innerText = `In collaboration with the owner, we review and verify existing survey reports to ensure accuracy and completeness. This process includes a detailed audit of yacht operations, identifying areas for improvement, reducing operational risks, and protecting the owner’s investment.`;
//       selectElement(".eight-btn-eng-heading").innerText = `SECURITY`;
//       selectElement(
//         ".eight-btn-eng-paragraph"
//       ).innerText = `We deliver bespoke security solutions for yachts, owners, and crew, led by an elite team of Close Protection Officers holding worldwide licenses.`;
//       selectElement(
//         ".security-list-eng-li-one"
//       ).innerText = `Close protection, escort, and 24/7 armed or unarmed supervision at sea and in port`;

//       selectElement(
//         ".security-list-eng-li-two"
//       ).innerText = `Continuous 24/7 yacht monitoring and remote tracking for uncompromising safety
// `;

//       selectElement(
//         ".security-list-eng-li-three"
//       ).innerText = `Comprehensive crew background checks and screenings
// `;

//       selectElement(
//         ".security-list-eng-li-four"
//       ).innerText = `Background support for owners, guests, and operations
// `;

//       selectElement(
//         ".security-list-eng-li-five"
//       ).innerText = `Polygraph testing available upon request
// `;

//       selectElement(
//         ".security-list-eng-li-six"
//       ).innerText = `Specialized training in threat recognition and emergency response
// `;

//       selectElement(
//         ".security-list-eng-li-seven"
//       ).innerText = `Security equipment training and implementation
// `;

//       selectElement(
//         ".security-list-eng-li-eight"
//       ).innerText = `Advanced electronic and cyber protection: spyware detection, mobile/cloud security, anti-eavesdropping, drone defence
// `;

//       selectElement(
//         ".security-list-eng-li-nine"
//       ).innerText = `Discreet transport of valuables and supply of bespoke tactical equipment
// `;
//       selectElement(
//         ".security-list-eng-li-ten"
//       ).innerText = `Seamless, confidential, and uninterrupted protection at the highest level.
// `;
//       // ceo section
//       selectElement(
//         ".ceo-eng-paragraph"
//       ).innerText = `Mrs. Dina Jelaska comes from a long line of seafarers, with generations of captains establishing a tradition of excellence at sea. After graduating from a maritime school, she spent fifteen years in a senior position with the Royal Family (UAE), where she was entrusted with protocol and the hosting of distinguished guests. In that role, she worked closely with heads of state, members of royal families, and VIPs from across the globe, honing the values of precision, discretion, and excellence.

// Experience with mega yachts, integral to the Royal Family's lifestyle, gave her deep insight into their complexity, rigorous standards, and the bespoke expectations of ownership. Building on this unique experience and supported by a trusted network of accomplished professionals, Dina established a company specializing in yacht and superyacht surveying. Her work combines technical expertise, uncompromising safety standards, and refined interior design, delivered through a bespoke service defined by trust, discretion, and prestige.`;
//       // contact section
//       selectElement(".contact-eng-heading").innerText = `contact us
// `;
//       selectElement(
//         ".contact-eng-paragraph"
//       ).innerText = `If you require expert support with yacht inspections, refit supervision, class preparation, or any other aspect of vessel management, we are here to help. Contact us directly to discuss your needs, and we will provide a tailored service designed to protect your investment and deliver complete peace of mind.
// `;
//     }
//     // 👉 GER
//     /* about us section */
//     if (targetLanguage === "ger") {
//       selectElement(".about-us-ger-heading").innerText = "Über uns";
//       selectElement(
//         ".about-us__paragraph-ger-paragraph"
//       ).innerText = `Exklusive Vertretung des Yachtbesitzers, unabhängig von Maklern, Agenten oder Vermarktern. Wir bieten transparente, schlüsselfertige Lösungen, die den Wert bewahren, einwandfreie Leistung gewährleisten und Ihre Yacht langfristig schützen. Unser Team besteht aus hochqualifizierten Seeleuten mit umfangreicher nautischer Erfahrung und professionellen Abschlüssen, die in jedes Projekt außergewöhnliches Fachwissen und praktische Kompetenz einbringen.`;

//       // our services section
//       selectElement(".services-ger-heading").innerText =
//         "UNSERE DIENSTLEISTUNGEN";
//       selectElement(".one-btn-ger-heading").innerText = "EIGENTÜMER­VERTRETUNG";
//       selectElement(
//         ".one-btn-ger-paragraph"
//       ).innerText = `Exklusive Eins-zu-eins-Vertretung des Yachtbesitzers in jeder Phase – von Verhandlungen und Werftkontakten bis hin zur technischen Überwachung von Kapitänen, Ingenieuren und Markenvertretern. Während des Baus wird jedes System an Bord sorgfältig optimiert, um Funktionalität, visuelle Perfektion und langfristige Leistung sicherzustellen und den Betrieb der Yacht insgesamt zu verbessern. Fortschrittliche Lösungen werden frühzeitig integriert, um kostspielige Änderungen zu vermeiden und den langfristigen Wert der Yacht zu erhalten. Nach jedem Auftrag erhält der Eigner einen detaillierten schriftlichen und digitalen Bericht, einschließlich fotografischer Dokumentation und umfassender technischer Analyse, um volle Transparenz in jeder Phase zu gewährleisten.`;

//       selectElement(".two-btn-ger-heading").innerText =
//         "KAUFVORBEREITENDE INSPEKTION";
//       selectElement(
//         ".two-btn-ger-paragraph"
//       ).innerText = `Sorgfältige technische Inspektionen, die vollständige Klarheit vor dem Kauf gewährleisten. Von der strukturellen Integrität bis zur betrieblichen Leistung wird jedes Detail geprüft, sodass Sie mit Vertrauen investieren und unerwartete Probleme vermeiden können. Die Untersuchungen werden aus der Perspektive erfahrener Seeleute durchgeführt, wobei der Schwerpunkt auf technischer Zuverlässigkeit, Sicherheit und langfristiger Leistungsfähigkeit liegt. Gleichzeitig werden Innenraumdetails, Funktionalität, Praktikabilität und Ausführungsqualität bewertet. Dieser ausgewogene Ansatz garantiert eine realistische und umfassende Beurteilung der Yacht. Bei Bedarf werden die Ergebnisse vollständig transparent präsentiert, um Ihre Interessen zu schützen.`;

//       selectElement(".three-btn-ger-heading").innerText =
//         "FLAGGEN- / KOMMERZIELLE KLASSENVORBEREITUNG (RINA / MCA / IACS)";
//       selectElement(
//         ".three-btn-ger-paragraph"
//       ).innerText = `Der gesamte Prozess, eine Yacht vollständig konform mit den Vorschriften ihres Flaggenstaates zu machen, wird präzise und diskret abgewickelt. Registrierung und alle zugehörigen COD-Anforderungen werden sorgfältig überwacht, wobei jeder Schritt im Voraus geplant und verwaltet wird, um unnötige Kosten oder Verzögerungen zu vermeiden. Wir stellen sicher, dass das Schiff stets über alle erforderlichen Dokumente, Register, Logbücher und Zertifikate verfügt, sodass die Yacht jederzeit sicher und betriebsbereit bleibt. Jede Anforderung wird effizient und transparent erfüllt, um eine einwandfreie Zertifizierung und langfristige Zuverlässigkeit zu gewährleisten.`;

//       selectElement(".four-btn-ger-heading").innerText = "REFIT-ÜBERWACHUNG";
//       selectElement(
//         ".four-btn-ger-paragraph"
//       ).innerText = `Wir betreuen alle Arten von Refits, insbesondere mit Expertise in Aluminiumyachten. Von der Koordination der Werft bis zur endgültigen Übergabe wird jede Phase überwacht, um höchste technische und ästhetische Standards sicherzustellen. Budgets werden präzise erstellt, um dem Eigner volle finanzielle Transparenz zu bieten, während umfassende Berichte den Zustand des Schiffes aufzeigen und mögliche zukünftige Investitionschancen identifizieren. Jeder Schritt wird sorgfältig dokumentiert, mit transparenten Updates, die eine genaue Einschätzung von Fortschritt und Qualität ermöglichen.`;

//       selectElement(".five-btn-ger-heading").innerText =
//         "SAISON- / JÄHRLICHER CHECK & ZUSTANDSBERICHT";
//       selectElement(
//         ".five-btn-ger-paragraph"
//       ).innerText = `Umfassende Inspektionen und detaillierte Berichte, die vor der Saison, dem Jahreszyklus oder der Charterperiode erstellt werden. Dieser Service gewährleistet Einsatzbereitschaft, Leistung und Werterhalt und gibt Eigentümern und Managern volle Sicherheit.`;

//       selectElement(".six-btn-ger-heading").innerText =
//         "ÜBERGABE & CREW-SCHULUNG";
//       selectElement(
//         ".six-btn-ger-paragraph"
//       ).innerText = `In Zusammenarbeit mit dem Eigentümer prüfen und verifizieren wir bestehende Inspektionsberichte, um Genauigkeit und Vollständigkeit sicherzustellen. Dieser Prozess umfasst eine detaillierte Überprüfung des Yachtbetriebs, identifiziert Verbesserungsmöglichkeiten, reduziert Betriebsrisiken und schützt die Investition des Eigentümers.`;

//       selectElement(".seven-btn-ger-heading").innerText =
//         "INSPEKTIONSVERIFIKATION & BETRIEBSAUDIT";
//       selectElement(
//         ".seven-btn-ger-paragraph"
//       ).innerText = `Gemeinsam mit dem Eigentümer überprüfen und validieren wir vorhandene Prüfberichte, um deren Genauigkeit sicherzustellen. Der Prozess beinhaltet eine gründliche Analyse der Yachtoperationen, die Schwachstellen aufzeigt, Risiken mindert und den langfristigen Werterhalt gewährleistet.`;

//       selectElement(".eight-btn-ger-heading").innerText = `SICHERHEIT`;
//       selectElement(
//         ".eight-btn-ger-paragraph"
//       ).innerText = `Wir bieten maßgeschneiderte Sicherheitslösungen für Yachten, Eigentümer und Besatzungen – geleitet von einem Elite-Team aus Personenschutzoffizieren mit weltweiten Lizenzen.`;

//       selectElement(
//         ".security-list-ger-li-one"
//       ).innerText = `Personenschutz, Begleitung und 24/7 bewaffnete oder unbewaffnete Überwachung auf See und im Hafen`;
//       selectElement(
//         ".security-list-ger-li-two"
//       ).innerText = `Kontinuierliche 24/7-Überwachung und Fernverfolgung der Yacht für kompromisslose Sicherheit`;
//       selectElement(
//         ".security-list-ger-li-three"
//       ).innerText = `Umfassende Hintergrundüberprüfungen und Sicherheitsprüfungen der Besatzung`;
//       selectElement(
//         ".security-list-ger-li-four"
//       ).innerText = `Hintergrundunterstützung für Eigentümer, Gäste und Betriebsabläufe`;
//       selectElement(
//         ".security-list-ger-li-five"
//       ).innerText = `Polygraphentests auf Anfrage verfügbar`;
//       selectElement(
//         ".security-list-ger-li-six"
//       ).innerText = `Spezialisierte Schulungen zur Bedrohungserkennung und Notfallbewältigung`;
//       selectElement(
//         ".security-list-ger-li-seven"
//       ).innerText = `Schulung und Implementierung von Sicherheitssystemen und -ausrüstung`;
//       selectElement(
//         ".security-list-ger-li-eight"
//       ).innerText = `Erweiterter elektronischer und cybernetischer Schutz: Spyware-Erkennung, mobile/cloud Sicherheit, Abhörschutz, Drohnenabwehr`;
//       selectElement(
//         ".security-list-ger-li-nine"
//       ).innerText = `Diskreter Transport von Wertgegenständen und Bereitstellung maßgeschneiderter taktischer Ausrüstung`;
//       selectElement(
//         ".security-list-ger-li-ten"
//       ).innerText = `Nahtloser, vertraulicher und ununterbrochener Schutz auf höchstem Niveau.`;

//       // CEO section
//       selectElement(
//         ".ceo-ger-paragraph"
//       ).innerText = `Frau Dina Jelaska entstammt einer langen Generation von Seeleuten, in der über Generationen hinweg Kapitäne eine Tradition maritimer Exzellenz aufgebaut haben. Nach ihrem Abschluss an einer Seefahrtschule war sie fünfzehn Jahre in leitender Position für die königliche Familie (VAE) tätig, wo sie mit Protokollfragen und der Betreuung hochrangiger Gäste betraut war. In dieser Rolle arbeitete sie eng mit Staatsoberhäuptern, Mitgliedern königlicher Familien und VIPs aus aller Welt zusammen und verinnerlichte Werte wie Präzision, Diskretion und Exzellenz.

// Die Erfahrung mit Megayachten, die ein integraler Bestandteil des Lebensstils der königlichen Familie sind, verschaffte ihr tiefes Verständnis für deren Komplexität, hohe Standards und maßgeschneiderte Erwartungen. Aufbauend auf dieser einzigartigen Erfahrung und unterstützt von einem bewährten Netzwerk erfahrener Fachleute gründete Dina ein Unternehmen, das sich auf die Inspektion und Bewertung von Yachten und Superyachten spezialisiert hat. Ihre Arbeit vereint technisches Know-how, kompromisslose Sicherheitsstandards und anspruchsvolles Innendesign – umgesetzt in einem maßgeschneiderten Service, der von Vertrauen, Diskretion und Prestige geprägt ist.`;

//       // contact section
//       selectElement(".contact-ger-heading").innerText = `Kontakt`;
//       selectElement(
//         ".contact-ger-paragraph"
//       ).innerText = `Wenn Sie professionelle Unterstützung bei Yachtinspektionen, Refit-Überwachung, Klassenvorbereitung oder einem anderen Aspekt des Schiffsmanagements benötigen, stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns direkt, um Ihre Anforderungen zu besprechen – wir bieten einen maßgeschneiderten Service, der Ihre Investition schützt und Ihnen volle Sicherheit und Ruhe garantiert.`;
//     }
//     // 👉 UAE
//     if (targetLanguage === "uae") {
//       selectElement(".about-us-uae-heading").innerText = "من نحن";
//       selectElement(
//         ".about-us__paragraph-uae-paragraph"
//       ).innerText = `نحن نمثل مالك اليخت بشكل حصري ومستقل تمامًا عن الوسطاء أو الوكلاء أو المسوّقين. نقدم حلولًا شاملة وشفافة تضمن الحفاظ على القيمة، والأداء المثالي، وحماية اليخت على المدى الطويل. يتكون فريقنا من بحّارة محترفين ذوي تعليم عالٍ وخبرة بحرية واسعة، يقدمون خبرة لا مثيل لها ومعرفة عملية متعمقة في كل مشروع.`;

//       // قسم الخدمات
//       selectElement(".services-uae-heading").innerText = "الخدمات";
//       selectElement(".one-btn-uae-heading").innerText = "تمثيل المالك";
//       selectElement(
//         ".one-btn-uae-paragraph"
//       ).innerText = `تمثيل حصري للمالك في جميع المراحل — من المفاوضات والتعامل مع أحواض السفن إلى الإشراف الفني على القباطنة والمهندسين وممثلي العلامات التجارية. أثناء عملية البناء، يتم تحسين كل نظام على متن اليخت لضمان الكفاءة، والكمال البصري، والأداء الطويل الأمد. ندمج الحلول المتقدمة في المراحل المبكرة لتجنب التعديلات المكلفة والحفاظ على القيمة طويلة المدى لليخت. بعد كل مهمة، يتلقى المالك تقريرًا مكتوبًا ورقميًا مفصلاً يتضمن توثيقًا مصورًا وتحليلًا فنيًا شاملاً لضمان الشفافية الكاملة في كل مرحلة.`;

//       selectElement(".two-btn-uae-heading").innerText = "فحص ما قبل الشراء";
//       selectElement(
//         ".two-btn-uae-paragraph"
//       ).innerText = `فحوصات تقنية دقيقة توفر وضوحًا تامًا قبل الشراء. من السلامة الهيكلية إلى الأداء التشغيلي، يتم فحص كل تفصيل بعناية لتمكينك من الاستثمار بثقة وتجنب أي مشكلات غير متوقعة. يتم إجراء الفحوصات من منظور بحّارة ذوي خبرة، مع التركيز على الموثوقية التقنية، والسلامة، والأداء على المدى الطويل، بالإضافة إلى تقييم التصميم الداخلي، والوظائف، وجودة التنفيذ. هذا النهج المتوازن يضمن تقييمًا واقعيًا وشاملاً لليخت. عند الحاجة، تُعرض النتائج بشفافية كاملة لحماية مصالحك.`;

//       selectElement(".three-btn-uae-heading").innerText =
//         "تحضير العلم / الفئة التجارية (RINA / MCA / IACS)";
//       selectElement(
//         ".three-btn-uae-paragraph"
//       ).innerText = `يُدار كامل إجراء مطابقة اليخت لأنظمة الدولة التي يرفع علمها بدقة وسرية تامة. تتم متابعة عملية التسجيل وجميع متطلبات الشهادات عن كثب، حيث يتم التخطيط لكل خطوة مسبقًا لتجنب أي تكاليف أو تأخيرات غير ضرورية. نضمن أن يكون اليخت مزودًا دائمًا بجميع الوثائق والسجلات والشهادات المطلوبة، ليبقى في حالة امتثال تام وجاهزًا للتشغيل التجاري الآمن في جميع الأوقات. تتم كل خطوة بكفاءة وشفافية لضمان الاعتماد المثالي والموثوقية طويلة الأمد.`;

//       selectElement(".four-btn-uae-heading").innerText =
//         "الإشراف على إعادة التجديد (Refit)";
//       selectElement(
//         ".four-btn-uae-paragraph"
//       ).innerText = `ندير جميع أنواع مشاريع إعادة التجديد، مع خبرة خاصة في يخوت الألمنيوم. من التنسيق مع أحواض السفن إلى التسليم النهائي، تتم مراقبة كل مرحلة بدقة لضمان أعلى المعايير التقنية والجمالية. يتم إعداد الميزانيات بعناية لتوفير وضوح مالي كامل للمالك، بينما تقدم التقارير المفصلة تقييمًا دقيقًا لحالة اليخت وتحدد فرص الاستثمار المستقبلية. يتم تتبع التقدم بشفافية تامة لتقديم صورة واضحة عن الجودة والإنجاز.`;

//       selectElement(".five-btn-uae-heading").innerText =
//         "الفحص الموسمي / السنوي وتقرير الحالة";
//       selectElement(
//         ".five-btn-uae-paragraph"
//       ).innerText = `عمليات تفتيش شاملة وتقارير مفصلة يتم إعدادها قبل بداية الموسم، أو الدورة السنوية، أو فترة التأجير. تضمن هذه الخدمة الجاهزية والأداء والحفاظ على القيمة، مما يمنح المالكين ومديريهم راحة البال الكاملة.`;

//       selectElement(".six-btn-uae-heading").innerText = "التسليم وتدريب الطاقم";
//       selectElement(
//         ".six-btn-uae-paragraph"
//       ).innerText = `بالتعاون مع المالك، نقوم بمراجعة وتدقيق تقارير الفحص الحالية لضمان الدقة والكمال. تشمل هذه العملية مراجعة شاملة لعمليات اليخت لتحديد مجالات التحسين، وتقليل المخاطر التشغيلية، وحماية استثمار المالك.`;

//       selectElement(".seven-btn-uae-heading").innerText =
//         "التحقق من الفحص والتدقيق التشغيلي";
//       selectElement(
//         ".seven-btn-uae-paragraph"
//       ).innerText = `نراجع ونتحقق من تقارير الفحص الحالية بالتعاون مع المالك لضمان الدقة والشفافية. تتضمن العملية تحليلًا دقيقًا لتشغيل اليخت، وتحديد نقاط الضعف، وتقليل المخاطر، وضمان استدامة الأداء على المدى الطويل.`;

//       selectElement(".eight-btn-uae-heading").innerText = `الأمن`;
//       selectElement(
//         ".eight-btn-uae-paragraph"
//       ).innerText = `نقدم حلول أمنية مصممة خصيصًا لليخوت والمالكين والطاقم، بإشراف فريق نخبة من ضباط الحماية الشخصية الحاصلين على تراخيص دولية.`;

//       selectElement(
//         ".security-list-uae-li-one"
//       ).innerText = `حماية شخصية، ومرافقة، ومراقبة مسلحة أو غير مسلحة على مدار الساعة في البحر والميناء`;
//       selectElement(
//         ".security-list-uae-li-two"
//       ).innerText = `مراقبة اليخت وتتبع موقعه عن بُعد على مدار 24/7 لضمان أقصى درجات الأمان`;
//       selectElement(
//         ".security-list-uae-li-three"
//       ).innerText = `فحوصات خلفية شاملة وتدقيقات أمنية لأفراد الطاقم`;
//       selectElement(
//         ".security-list-uae-li-four"
//       ).innerText = `دعم إداري وخلفي للمالكين والضيوف والعمليات`;
//       selectElement(
//         ".security-list-uae-li-five"
//       ).innerText = `اختبارات كشف الكذب متاحة عند الطلب`;
//       selectElement(
//         ".security-list-uae-li-six"
//       ).innerText = `تدريب متخصص في التعرف على التهديدات والاستجابة للطوارئ`;
//       selectElement(
//         ".security-list-uae-li-seven"
//       ).innerText = `تدريب وتنفيذ أنظمة ومعدات الأمن`;
//       selectElement(
//         ".security-list-uae-li-eight"
//       ).innerText = `حماية إلكترونية ومتقدمة ضد التجسس: كشف البرامج الخبيثة، أمان الهاتف والسحابة، الحماية من التنصت، والدفاع ضد الطائرات بدون طيار`;
//       selectElement(
//         ".security-list-uae-li-nine"
//       ).innerText = `نقل آمن وسري للقيم ومعدات تكتيكية مصممة حسب الطلب`;
//       selectElement(
//         ".security-list-uae-li-ten"
//       ).innerText = `حماية سلسة وسرية وغير منقطعة بأعلى مستوى من الاحتراف.`;

//       // قسم الرئيس التنفيذي
//       selectElement(
//         ".ceo-uae-paragraph"
//       ).innerText = `تنحدر السيدة دينا جلاسكا من عائلة بحرية عريقة يمتد تاريخها عبر أجيال من القباطنة الذين أسسوا تقاليد التميز في عالم البحر. بعد تخرجها من الأكاديمية البحرية، شغلت منصبًا رفيعًا لمدة خمسة عشر عامًا لدى العائلة الحاكمة في دولة الإمارات العربية المتحدة، حيث كانت مسؤولة عن البروتوكولات واستقبال الضيوف رفيعي المستوى. من خلال هذا الدور، تعاملت بشكل مباشر مع رؤساء دول وأفراد من العائلات الملكية وشخصيات عالمية بارزة، مما عزز قيم الدقة والسرية والتميز لديها.

// من خلال خبرتها مع اليخوت الضخمة، التي تشكل جزءًا أساسيًا من أسلوب حياة العائلة الحاكمة، اكتسبت فهمًا عميقًا لتعقيداتها ومعاييرها العالية وتوقعات الملكية المخصصة. وبالاعتماد على هذه الخبرة الفريدة، وبالتعاون مع شبكة من الخبراء الموثوقين، أسست شركة متخصصة في فحص وتقييم اليخوت واليخوت الفاخرة. يجمع عملها بين الخبرة التقنية والمعايير الصارمة للسلامة والتصميم الداخلي الراقي، لتقديم خدمة مصممة بعناية قائمة على الثقة والسرية والفخامة.`;

//       // قسم التواصل
//       selectElement(".contact-uae-heading").innerText = `جهة االتصال:`;
//       selectElement(
//         ".contact-uae-paragraph"
//       ).innerText = `إذا كنت بحاجة إلى دعم احترافي في عمليات فحص اليخوت، أو الإشراف على إعادة التجديد، أو التحضير للفئة أو التسجيل، أو أي جانب آخر من إدارة السفن، فإننا هنا لمساعدتك. تواصل معنا مباشرة لمناقشة احتياجاتك، وسنقدم لك خدمة مصممة خصيصًا لحماية استثمارك وضمان راحة بالك التامة.`;
//     }

//     const uaeElements = document.querySelectorAll("[class*='-uae-']");
//     uaeElements.forEach((el) => {
//       el.style.textAlign = "right";
//     });
//   });
// });

// 👉 LANGUAGE

// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

const langBtn = document.querySelectorAll(".lang-btn");

// Funkcija za promjenu jezika (skeleton)
const setLanguage = (targetLanguage) => {
  // Spremi jezik u localStorage
  localStorage.setItem("selectedLanguage", targetLanguage);

  // 👉 ITA
  if (targetLanguage === "ita") {
    // about us section
    selectElement(".about-us-ita-heading").innerText = "CHI SIAMO";
    selectElement(
      ".about-us__paragraph-ita-paragraph"
    ).innerText = `Rappresentanza esclusiva dell'armatore, indipendente da broker, agenti o operatori di marketing. Offriamo soluzioni chiavi in mano trasparenti che salvaguardano il valore, garantiscono prestazioni impeccabili e proteggono lo yacht a lungo termine. Il nostro team è composto da marinai altamente qualificati con ampie conoscenze e diplomi professionali, che apportano competenza ed esperienza pratica senza pari a ogni progetto.`;
    // our services section
    selectElement(".services-ita-heading").innerText = "SERVIZI";
    selectElement(".one-btn-ita-heading").innerText =
      "RAPPRESENTANZA DELL'ARMATORE";
    selectElement(".one-btn-ita-paragraph").innerText =
      "Rappresentanza esclusiva uno-a-uno dell'armatore in ogni fase — dalle negoziazioni e rapporti con i cantieri alla supervisione tecnica di capitani, ingegneri e rappresentanti dei marchi. Durante la costruzione, ogni sistema di bordo viene perfezionato per garantire funzionalità, perfezione visiva e prestazioni a lungo termine, migliorando il funzionameto complessivo dell'imbarcazione. Le soluzioni avanzate vengono integrate precocemente, evitando modifiche costose e preservando il valore dello yacht a lungo termine. Alla consegna, l'armatore riceve un rapporto dettagliato scritto e digitale, inclusa documentazione fotografica e analisi tecnica complete che garantisce piena trasparenza e chiarezza assoluta in ogni fase.";
    selectElement(".two-btn-ita-heading").innerText = `PERIZIA PRE-ACQUISTO`;

    selectElement(
      ".two-btn-ita-paragraph"
    ).innerText = `Ispezioni tecniche meticolose che offrono completa chiarezza prima dell'acquisto. Dall'integrità strutturale alle apparecchiature di navigazione, ogni dettaglio viene verificato affinché possiate investire con fiducia. Navigatori esperti, concentrandosi su affidabilità tecnica, sicurezza e prestazioni a lungo termine, esaminano anche dettagli interni, funzionalità, praticità e precisione di esecuzione. Questo approccio garantisce una valutazione realistica e completa dello yacht. Quando necessario, i risultati vengono presentati con completa trasparenza per proteggere gli interessi dell'armatore.`;
    selectElement(
      ".three-btn-ita-heading"
    ).innerText = `PREPARAZIONE BANDIERA/CLASSE COMMERCIALE (RINA/ MCA / IACS)`;
    selectElement(
      ".three-btn-ita-paragraph"
    ).innerText = `L'intero processo per portare uno yacht in piena conformità con i regolamenti dello Stato di bandiera viene eseguito con precisione e discrezione. La registrazione e tutti i requisiti COD associati sono monitorati attentamente, con ogni passaggio gestito in anticipo per evitare costi o ritardi non necessari. Garantiamo che l'imbarcazione sia sempre in regola con tutta la documentazione obbligatoria, registri, giornali di bordo e certificati, mantenendo lo yacht pienamente conforme e pronto per un'operatività commerciale sicura in ogni momento. Ogni requisito viene soddisfatto con efficienza e trasparenza, garantendo certificazione impeccabile e affidabilità a lungo termine.`;
    selectElement(".four-btn-ita-heading").innerText = `SUPERVISIONE REFIT`;
    selectElement(
      ".four-btn-ita-paragraph"
    ).innerText = `Gestiamo tutti i tipi di refit, con particolare esperienza nei refit di yacht in alluminio. Dal coordinamento con i cantieri alla consegna finale, ogni fase è controllata per garantire i più alti standard tecnici ed estetici. I budget vengono programmati con precisione, fornendo agli armatori piena trasparenza finanziaria, mentre rapporti regolari informano costantemente sullo stato dell'imbarcazione e assicurano l'ottimizzazione degli investimenti futuri. Ogni fase è supervisionata da professionisti esperti e trasparenti che forniscono una valutazione accurata dei progressi e della qualita.`;
    selectElement(
      ".five-btn-ita-heading"
    ).innerText = `CONTROLLO STAGIONALE/ANNUALE E RAPPORTO SULLE CONDIZIONI`;

    selectElement(
      ".five-btn-ita-paragraph"
    ).innerText = `Ispezioni complete e rapporti dettagliati consegnati prima della stagione, del ciclo annuale o del periodo di charter. Questo servizio salvaguarda prontezza, prestazioni e valore, fornendo ad armatori e gestori completa tranquillità.`;
    selectElement(
      ".six-btn-ita-heading"
    ).innerText = `CONSEGNA E FORMAZIONE EQUIPAGGIO`;
    selectElement(
      ".six-btn-ita-paragraph"
    ).innerText = `Transizione fluida dello yacht dal cantiere o dalla proprietà precedente all'operazione attiva. Ogni sistema di bordo viene accuratamente spiegato e dimostrato all'equipaggio, garantendo che sia pienamente preparato a gestire i sistemi e le aspettative dell'armatore. La formazione che include sicurezza, operazioni tecniche e standard di servizio, assicura che ogni membro dell'equipaggio sia completamente competente e pronto a operare fin dal primo giorno. Tutto il processo di consegna viene condotto con precisione e transparenza.`;
    selectElement(
      ".seven-btn-ita-heading"
    ).innerText = `VERIFICA PERIZIE E AUDIT OPERATIVO`;
    selectElement(
      ".seven-btn-ita-paragraph"
    ).innerText = `In collaborazione con l'armatore, esaminiamo e verifichiamo i rapporti di perizia esistenti per garantire accuratezza e completezza. Questo processo include un audit dettagliato delle operazioni dello yacht, identificando aree di miglioramento per ridurre i rischi operativi e proteggere l'investimento dell'armatore.`;
    selectElement(".eight-btn-ita-heading").innerText = `SICUREZZA`;
    selectElement(
      ".eight-btn-ita-paragraph"
    ).innerText = `Forniamo soluzioni di sicurezza su misura per yacht, armatori ed equipaggio, guidati da un team d'élite di Agenti di Protezione Ravvicinata con licenze internazionali.`;
    selectElement(
      ".security-list-ita-li-one"
    ).innerText = `Protezione ravvicinata, scorta e sorveglianza armata o non armata 24/7 in mare e in porto`;

    selectElement(
      ".security-list-ita-li-two"
    ).innerText = `Monitoraggio continuo dello yacht 24/7 e tracciamento remoto per una sicurezza senza compromessi`;

    selectElement(
      ".security-list-ita-li-three"
    ).innerText = `Verifiche approfondite e controlli sul background dell’equipaggio`;

    selectElement(
      ".security-list-ita-li-four"
    ).innerText = `Supporto di sicurezza per armatori, ospiti e operazioni`;

    selectElement(
      ".security-list-ita-li-five"
    ).innerText = `Test con poligrafo disponibili su richiesta`;

    selectElement(
      ".security-list-ita-li-six"
    ).innerText = `Formazione specializzata nel riconoscimento delle minacce e nella risposta alle emergenze`;

    selectElement(
      ".security-list-ita-li-seven"
    ).innerText = `Addestramento e implementazione delle apparecchiature di sicurezza`;

    selectElement(
      ".security-list-ita-li-eight"
    ).innerText = `Protezione elettronica e informatica avanzata: rilevamento spyware, sicurezza mobile/cloud, anti-intercettazione, difesa contro droni`;

    selectElement(
      ".security-list-ita-li-nine"
    ).innerText = `Trasporto discreto di oggetti di valore e fornitura di attrezzature tattiche su misura`;

    selectElement(
      ".security-list-ita-li-ten"
    ).innerText = `Protezione continua, riservata e ininterrotta ai massimi livelli.`;

    // ceo section
    selectElement(
      ".ceo-ita-paragraph"
    ).innerText = `La Sig.ra Dina Jelaska proviene da una lunga stirpe di navigatori, con generazioni di capitani che hanno stabilito una tradizione di eccellenza in mare. Dopo essersi diplomata presso una scuola nautica, ha trascorso quindici anni in una posizione di alto livello presso la Famiglia Reale (EAU), dove le è stato affidato il protocollo e l'accoglienza di ospiti illustri. In quel ruolo ha lavorato a stretto contatto con capi di Stato, membri di famiglie reali e VIP provenienti da tutto il mondo, affinando i valori di precisione, discrezione ed eccellenza.
L'esperienza con i mega yacht, parte integrante dello stile di vita della Famiglia Reale, le ha fornito una profonda comprensione della loro complessità, degli standard rigorosi e delle aspettative personalizzate dei proprietari.
Forte di questa esperienza unica e supportata da una rete fidata di professionisti esperti, Dina ha fondato un'azienda specializzata in perizie di yacht e superyacht. Il suo lavoro combina competenza tecnica, standard di sicurezza senza compromessi e design d'interni raffinato, fornito attraverso un servizio su misura definito da fiducia, discrezione e prestigio.`;
    // contact section
    selectElement(".contact-ita-heading").innerText = `contattaci`;
    selectElement(
      ".contact-ita-paragraph"
    ).innerText = `Se hai bisogno di supporto esperto per ispezioni di yacht, supervisione di refitting, preparazione di corsi o qualsiasi altro aspetto della gestione dell'imbarcazione, siamo qui per aiutarti. Contattaci direttamente per discutere delle tue esigenze e ti forniremo un servizio personalizzato, progettato per proteggere il tuo investimento e offrirti la massima tranquillità.`;
  }
  // 👉 ENG
  /* about us */
  if (targetLanguage === "eng") {
    selectElement(".about-us--heading").innerText = "About us";
    selectElement(
      ".about-us__paragraph"
    ).innerText = `Exclusively representing the yacht owner, independent of brokers, agents, or marketers. We deliver transparent, turnkey solutions that safeguard value, ensure flawless performance, and protect your yacht for the long term. Our team is composed of highly educated seafarers with extensive nautical miles and professional diplomas, bringing unmatched expertise and practical insight to every project.
`;
    // our services
    selectElement(".services--heading").innerText = "our services";
    selectElement(".one-btn-eng-heading").innerText = "OWNER REPRESENTATION";
    selectElement(
      ".one-btn-eng-paragraph"
    ).innerText = `Exclusive one-to-one representation of the yacht owner at every stage—from negotiations and shipyard dealings to technical supervision of captains, engineers, and brand representatives. During construction, every onboard system is refined to ensure functionality, visual perfection, and long-term performance, enhancing the vessel's overall operation. Advanced solutions are integrated early, eliminating costly modifications and preserving the yacht's long-term value. After each assignment, owners receive a detailed written and digital report, including photographic documentation and comprehensive technical analysis, ensuring full transparency and complete clarity at every stage.`;
    selectElement(".two-btn-eng-heading").innerText = "PRE-PURCHASE SURVEY";
    selectElement(
      ".two-btn-eng-paragraph"
    ).innerText = `Meticulous technical inspections that deliver complete clarity before purchase. From structural integrity to operational performance, every detail is revealed, allowing you to invest with confidence and avoid unexpected issues. Surveys are conducted from the perspective of an experienced seafarer, focusing on technical reliability, safety, and long-term performance, while also examining interior details, functionality, practicality, and the accuracy of execution. This balanced approach ensures a realistic and comprehensive evaluation of the yacht. When necessary, findings are presented with complete transparency to protect your interests.`;
    selectElement(".three-btn-eng-heading").innerText =
      "FLAG/COMMERCIAL CLASS PREPARATION (RINA / MCA /IACS)";
    selectElement(
      ".three-btn-eng-paragraph"
    ).innerText = `The entire process of bringing a yacht into full compliance with its flag state regulations is handled with precision and discretion. Registration and all associated COD requirements are closely monitored, with every step anticipated and managed in advance to avoid unnecessary costs or delays. We ensure the vessel is always equipped with all mandatory documentation, registers, logbooks, and certificates, keeping the yacht fully compliant and ready for safe commercial operation at all times. Every requirement is fulfilled with efficiency and transparency, guaranteeing flawless certification and long-term reliability.`;
    selectElement(".four-btn-eng-heading").innerText = "REFIT SUPERVISION";
    selectElement(
      ".four-btn-eng-paragraph"
    ).innerText = `We manage all types of refits, with particular expertise in aluminum yacht refits. From shipyard coordination to final handover, every stage is controlled to ensure the highest technical and aesthetic standards. Budgets are prepared with precision, providing owners with complete financial clarity, while comprehensive reports outline the vessel's condition and identify potential future investment opportunities. Each phase is closely monitored, with transparent updates that give you an accurate assessment of progress and quality.`;
    selectElement(
      ".five-btn-eng-heading"
    ).innerText = `SEASONAL / YEARLY CHECK & CONDITION REPORT`;
    selectElement(
      ".five-btn-eng-paragraph"
    ).innerText = `Comprehensive inspections and detailed reports delivered ahead of the season, yearly cycle, or charter period. This service safeguards readiness, performance, and value, providing owners and managers with complete peace of mind.`;
    selectElement(
      ".six-btn-eng-heading"
    ).innerText = `HANDOVER & CREW TRAINING`;
    selectElement(
      ".six-btn-eng-paragraph"
    ).innerText = `In collaboration with the owner, we review and verify existing survey reports to ensure accuracy and completeness. This process involves a detailed audit of yacht operations, identifying areas for improvement, mitigating operational risks, and safeguarding the owner's investme`;
    selectElement(
      ".seven-btn-eng-heading"
    ).innerText = `SURVEY VERIFICATION & OPERATIONAL AUDIT`;
    selectElement(
      ".seven-btn-eng-paragraph"
    ).innerText = `In collaboration with the owner, we review and verify existing survey reports to ensure accuracy and completeness. This process includes a detailed audit of yacht operations, identifying areas for improvement, reducing operational risks, and protecting the owner’s investment.`;
    selectElement(".eight-btn-eng-heading").innerText = `SECURITY`;
    selectElement(
      ".eight-btn-eng-paragraph"
    ).innerText = `We deliver bespoke security solutions for yachts, owners, and crew, led by an elite team of Close Protection Officers holding worldwide licenses.`;
    selectElement(
      ".security-list-eng-li-one"
    ).innerText = `Close protection, escort, and 24/7 armed or unarmed supervision at sea and in port`;

    selectElement(
      ".security-list-eng-li-two"
    ).innerText = `Continuous 24/7 yacht monitoring and remote tracking for uncompromising safety
`;

    selectElement(
      ".security-list-eng-li-three"
    ).innerText = `Comprehensive crew background checks and screenings
`;

    selectElement(
      ".security-list-eng-li-four"
    ).innerText = `Background support for owners, guests, and operations
`;

    selectElement(
      ".security-list-eng-li-five"
    ).innerText = `Polygraph testing available upon request
`;

    selectElement(
      ".security-list-eng-li-six"
    ).innerText = `Specialized training in threat recognition and emergency response
`;

    selectElement(
      ".security-list-eng-li-seven"
    ).innerText = `Security equipment training and implementation
`;

    selectElement(
      ".security-list-eng-li-eight"
    ).innerText = `Advanced electronic and cyber protection: spyware detection, mobile/cloud security, anti-eavesdropping, drone defence
`;

    selectElement(
      ".security-list-eng-li-nine"
    ).innerText = `Discreet transport of valuables and supply of bespoke tactical equipment
`;
    selectElement(
      ".security-list-eng-li-ten"
    ).innerText = `Seamless, confidential, and uninterrupted protection at the highest level.
`;
    // ceo section
    selectElement(
      ".ceo-eng-paragraph"
    ).innerText = `Mrs. Dina Jelaska comes from a long line of seafarers, with generations of captains establishing a tradition of excellence at sea. After graduating from a maritime school, she spent fifteen years in a senior position with the Royal Family (UAE), where she was entrusted with protocol and the hosting of distinguished guests. In that role, she worked closely with heads of state, members of royal families, and VIPs from across the globe, honing the values of precision, discretion, and excellence.

Experience with mega yachts, integral to the Royal Family's lifestyle, gave her deep insight into their complexity, rigorous standards, and the bespoke expectations of ownership. Building on this unique experience and supported by a trusted network of accomplished professionals, Dina established a company specializing in yacht and superyacht surveying. Her work combines technical expertise, uncompromising safety standards, and refined interior design, delivered through a bespoke service defined by trust, discretion, and prestige.`;
    // contact section
    selectElement(".contact-eng-heading").innerText = `contact us
`;
    selectElement(
      ".contact-eng-paragraph"
    ).innerText = `If you require expert support with yacht inspections, refit supervision, class preparation, or any other aspect of vessel management, we are here to help. Contact us directly to discuss your needs, and we will provide a tailored service designed to protect your investment and deliver complete peace of mind.
`;
  }
  // 👉 GER
  /* about us section */
  if (targetLanguage === "ger") {
    selectElement(".about-us-ger-heading").innerText = "Über uns";
    selectElement(
      ".about-us__paragraph-ger-paragraph"
    ).innerText = `Exklusive Vertretung des Yachtbesitzers, unabhängig von Maklern, Agenten oder Vermarktern. Wir bieten transparente, schlüsselfertige Lösungen, die den Wert bewahren, einwandfreie Leistung gewährleisten und Ihre Yacht langfristig schützen. Unser Team besteht aus hochqualifizierten Seeleuten mit umfangreicher nautischer Erfahrung und professionellen Abschlüssen, die in jedes Projekt außergewöhnliches Fachwissen und praktische Kompetenz einbringen.`;

    // our services section
    selectElement(".services-ger-heading").innerText =
      "UNSERE DIENSTLEISTUNGEN";
    selectElement(".one-btn-ger-heading").innerText = "EIGENTÜMER­VERTRETUNG";
    selectElement(
      ".one-btn-ger-paragraph"
    ).innerText = `Exklusive Eins-zu-eins-Vertretung des Yachtbesitzers in jeder Phase – von Verhandlungen und Werftkontakten bis hin zur technischen Überwachung von Kapitänen, Ingenieuren und Markenvertretern. Während des Baus wird jedes System an Bord sorgfältig optimiert, um Funktionalität, visuelle Perfektion und langfristige Leistung sicherzustellen und den Betrieb der Yacht insgesamt zu verbessern. Fortschrittliche Lösungen werden frühzeitig integriert, um kostspielige Änderungen zu vermeiden und den langfristigen Wert der Yacht zu erhalten. Nach jedem Auftrag erhält der Eigner einen detaillierten schriftlichen und digitalen Bericht, einschließlich fotografischer Dokumentation und umfassender technischer Analyse, um volle Transparenz in jeder Phase zu gewährleisten.`;

    selectElement(".two-btn-ger-heading").innerText =
      "KAUFVORBEREITENDE INSPEKTION";
    selectElement(
      ".two-btn-ger-paragraph"
    ).innerText = `Sorgfältige technische Inspektionen, die vollständige Klarheit vor dem Kauf gewährleisten. Von der strukturellen Integrität bis zur betrieblichen Leistung wird jedes Detail geprüft, sodass Sie mit Vertrauen investieren und unerwartete Probleme vermeiden können. Die Untersuchungen werden aus der Perspektive erfahrener Seeleute durchgeführt, wobei der Schwerpunkt auf technischer Zuverlässigkeit, Sicherheit und langfristiger Leistungsfähigkeit liegt. Gleichzeitig werden Innenraumdetails, Funktionalität, Praktikabilität und Ausführungsqualität bewertet. Dieser ausgewogene Ansatz garantiert eine realistische und umfassende Beurteilung der Yacht. Bei Bedarf werden die Ergebnisse vollständig transparent präsentiert, um Ihre Interessen zu schützen.`;

    selectElement(".three-btn-ger-heading").innerText =
      "FLAGGEN- / KOMMERZIELLE KLASSENVORBEREITUNG (RINA / MCA / IACS)";
    selectElement(
      ".three-btn-ger-paragraph"
    ).innerText = `Der gesamte Prozess, eine Yacht vollständig konform mit den Vorschriften ihres Flaggenstaates zu machen, wird präzise und diskret abgewickelt. Registrierung und alle zugehörigen COD-Anforderungen werden sorgfältig überwacht, wobei jeder Schritt im Voraus geplant und verwaltet wird, um unnötige Kosten oder Verzögerungen zu vermeiden. Wir stellen sicher, dass das Schiff stets über alle erforderlichen Dokumente, Register, Logbücher und Zertifikate verfügt, sodass die Yacht jederzeit sicher und betriebsbereit bleibt. Jede Anforderung wird effizient und transparent erfüllt, um eine einwandfreie Zertifizierung und langfristige Zuverlässigkeit zu gewährleisten.`;

    selectElement(".four-btn-ger-heading").innerText = "REFIT-ÜBERWACHUNG";
    selectElement(
      ".four-btn-ger-paragraph"
    ).innerText = `Wir betreuen alle Arten von Refits, insbesondere mit Expertise in Aluminiumyachten. Von der Koordination der Werft bis zur endgültigen Übergabe wird jede Phase überwacht, um höchste technische und ästhetische Standards sicherzustellen. Budgets werden präzise erstellt, um dem Eigner volle finanzielle Transparenz zu bieten, während umfassende Berichte den Zustand des Schiffes aufzeigen und mögliche zukünftige Investitionschancen identifizieren. Jeder Schritt wird sorgfältig dokumentiert, mit transparenten Updates, die eine genaue Einschätzung von Fortschritt und Qualität ermöglichen.`;

    selectElement(".five-btn-ger-heading").innerText =
      "SAISON- / JÄHRLICHER CHECK & ZUSTANDSBERICHT";
    selectElement(
      ".five-btn-ger-paragraph"
    ).innerText = `Umfassende Inspektionen und detaillierte Berichte, die vor der Saison, dem Jahreszyklus oder der Charterperiode erstellt werden. Dieser Service gewährleistet Einsatzbereitschaft, Leistung und Werterhalt und gibt Eigentümern und Managern volle Sicherheit.`;

    selectElement(".six-btn-ger-heading").innerText =
      "ÜBERGABE & CREW-SCHULUNG";
    selectElement(
      ".six-btn-ger-paragraph"
    ).innerText = `In Zusammenarbeit mit dem Eigentümer prüfen und verifizieren wir bestehende Inspektionsberichte, um Genauigkeit und Vollständigkeit sicherzustellen. Dieser Prozess umfasst eine detaillierte Überprüfung des Yachtbetriebs, identifiziert Verbesserungsmöglichkeiten, reduziert Betriebsrisiken und schützt die Investition des Eigentümers.`;

    selectElement(".seven-btn-ger-heading").innerText =
      "INSPEKTIONSVERIFIKATION & BETRIEBSAUDIT";
    selectElement(
      ".seven-btn-ger-paragraph"
    ).innerText = `Gemeinsam mit dem Eigentümer überprüfen und validieren wir vorhandene Prüfberichte, um deren Genauigkeit sicherzustellen. Der Prozess beinhaltet eine gründliche Analyse der Yachtoperationen, die Schwachstellen aufzeigt, Risiken mindert und den langfristigen Werterhalt gewährleistet.`;

    selectElement(".eight-btn-ger-heading").innerText = `SICHERHEIT`;
    selectElement(
      ".eight-btn-ger-paragraph"
    ).innerText = `Wir bieten maßgeschneiderte Sicherheitslösungen für Yachten, Eigentümer und Besatzungen – geleitet von einem Elite-Team aus Personenschutzoffizieren mit weltweiten Lizenzen.`;

    selectElement(
      ".security-list-ger-li-one"
    ).innerText = `Personenschutz, Begleitung und 24/7 bewaffnete oder unbewaffnete Überwachung auf See und im Hafen`;
    selectElement(
      ".security-list-ger-li-two"
    ).innerText = `Kontinuierliche 24/7-Überwachung und Fernverfolgung der Yacht für kompromisslose Sicherheit`;
    selectElement(
      ".security-list-ger-li-three"
    ).innerText = `Umfassende Hintergrundüberprüfungen und Sicherheitsprüfungen der Besatzung`;
    selectElement(
      ".security-list-ger-li-four"
    ).innerText = `Hintergrundunterstützung für Eigentümer, Gäste und Betriebsabläufe`;
    selectElement(
      ".security-list-ger-li-five"
    ).innerText = `Polygraphentests auf Anfrage verfügbar`;
    selectElement(
      ".security-list-ger-li-six"
    ).innerText = `Spezialisierte Schulungen zur Bedrohungserkennung und Notfallbewältigung`;
    selectElement(
      ".security-list-ger-li-seven"
    ).innerText = `Schulung und Implementierung von Sicherheitssystemen und -ausrüstung`;
    selectElement(
      ".security-list-ger-li-eight"
    ).innerText = `Erweiterter elektronischer und cybernetischer Schutz: Spyware-Erkennung, mobile/cloud Sicherheit, Abhörschutz, Drohnenabwehr`;
    selectElement(
      ".security-list-ger-li-nine"
    ).innerText = `Diskreter Transport von Wertgegenständen und Bereitstellung maßgeschneiderter taktischer Ausrüstung`;
    selectElement(
      ".security-list-ger-li-ten"
    ).innerText = `Nahtloser, vertraulicher und ununterbrochener Schutz auf höchstem Niveau.`;

    // CEO section
    selectElement(
      ".ceo-ger-paragraph"
    ).innerText = `Frau Dina Jelaska entstammt einer langen Generation von Seeleuten, in der über Generationen hinweg Kapitäne eine Tradition maritimer Exzellenz aufgebaut haben. Nach ihrem Abschluss an einer Seefahrtschule war sie fünfzehn Jahre in leitender Position für die königliche Familie (VAE) tätig, wo sie mit Protokollfragen und der Betreuung hochrangiger Gäste betraut war. In dieser Rolle arbeitete sie eng mit Staatsoberhäuptern, Mitgliedern königlicher Familien und VIPs aus aller Welt zusammen und verinnerlichte Werte wie Präzision, Diskretion und Exzellenz.

Die Erfahrung mit Megayachten, die ein integraler Bestandteil des Lebensstils der königlichen Familie sind, verschaffte ihr tiefes Verständnis für deren Komplexität, hohe Standards und maßgeschneiderte Erwartungen. Aufbauend auf dieser einzigartigen Erfahrung und unterstützt von einem bewährten Netzwerk erfahrener Fachleute gründete Dina ein Unternehmen, das sich auf die Inspektion und Bewertung von Yachten und Superyachten spezialisiert hat. Ihre Arbeit vereint technisches Know-how, kompromisslose Sicherheitsstandards und anspruchsvolles Innendesign – umgesetzt in einem maßgeschneiderten Service, der von Vertrauen, Diskretion und Prestige geprägt ist.`;

    // contact section
    selectElement(".contact-ger-heading").innerText = `Kontakt`;
    selectElement(
      ".contact-ger-paragraph"
    ).innerText = `Wenn Sie professionelle Unterstützung bei Yachtinspektionen, Refit-Überwachung, Klassenvorbereitung oder einem anderen Aspekt des Schiffsmanagements benötigen, stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns direkt, um Ihre Anforderungen zu besprechen – wir bieten einen maßgeschneiderten Service, der Ihre Investition schützt und Ihnen volle Sicherheit und Ruhe garantiert.`;
  }
  // 👉 UAE
  if (targetLanguage === "uae") {
    selectElement(".about-us-uae-heading").innerText = "من نحن";
    selectElement(
      ".about-us__paragraph-uae-paragraph"
    ).innerText = `نحن نمثل مالك اليخت بشكل حصري ومستقل تمامًا عن الوسطاء أو الوكلاء أو المسوّقين. نقدم حلولًا شاملة وشفافة تضمن الحفاظ على القيمة، والأداء المثالي، وحماية اليخت على المدى الطويل. يتكون فريقنا من بحّارة محترفين ذوي تعليم عالٍ وخبرة بحرية واسعة، يقدمون خبرة لا مثيل لها ومعرفة عملية متعمقة في كل مشروع.`;

    // قسم الخدمات
    selectElement(".services-uae-heading").innerText = "الخدمات";
    selectElement(".one-btn-uae-heading").innerText = "تمثيل المالك";
    selectElement(
      ".one-btn-uae-paragraph"
    ).innerText = `تمثيل حصري للمالك في جميع المراحل — من المفاوضات والتعامل مع أحواض السفن إلى الإشراف الفني على القباطنة والمهندسين وممثلي العلامات التجارية. أثناء عملية البناء، يتم تحسين كل نظام على متن اليخت لضمان الكفاءة، والكمال البصري، والأداء الطويل الأمد. ندمج الحلول المتقدمة في المراحل المبكرة لتجنب التعديلات المكلفة والحفاظ على القيمة طويلة المدى لليخت. بعد كل مهمة، يتلقى المالك تقريرًا مكتوبًا ورقميًا مفصلاً يتضمن توثيقًا مصورًا وتحليلًا فنيًا شاملاً لضمان الشفافية الكاملة في كل مرحلة.`;

    selectElement(".two-btn-uae-heading").innerText = "فحص ما قبل الشراء";
    selectElement(
      ".two-btn-uae-paragraph"
    ).innerText = `فحوصات تقنية دقيقة توفر وضوحًا تامًا قبل الشراء. من السلامة الهيكلية إلى الأداء التشغيلي، يتم فحص كل تفصيل بعناية لتمكينك من الاستثمار بثقة وتجنب أي مشكلات غير متوقعة. يتم إجراء الفحوصات من منظور بحّارة ذوي خبرة، مع التركيز على الموثوقية التقنية، والسلامة، والأداء على المدى الطويل، بالإضافة إلى تقييم التصميم الداخلي، والوظائف، وجودة التنفيذ. هذا النهج المتوازن يضمن تقييمًا واقعيًا وشاملاً لليخت. عند الحاجة، تُعرض النتائج بشفافية كاملة لحماية مصالحك.`;

    selectElement(".three-btn-uae-heading").innerText =
      "تحضير العلم / الفئة التجارية (RINA / MCA / IACS)";
    selectElement(
      ".three-btn-uae-paragraph"
    ).innerText = `يُدار كامل إجراء مطابقة اليخت لأنظمة الدولة التي يرفع علمها بدقة وسرية تامة. تتم متابعة عملية التسجيل وجميع متطلبات الشهادات عن كثب، حيث يتم التخطيط لكل خطوة مسبقًا لتجنب أي تكاليف أو تأخيرات غير ضرورية. نضمن أن يكون اليخت مزودًا دائمًا بجميع الوثائق والسجلات والشهادات المطلوبة، ليبقى في حالة امتثال تام وجاهزًا للتشغيل التجاري الآمن في جميع الأوقات. تتم كل خطوة بكفاءة وشفافية لضمان الاعتماد المثالي والموثوقية طويلة الأمد.`;

    selectElement(".four-btn-uae-heading").innerText =
      "الإشراف على إعادة التجديد (Refit)";
    selectElement(
      ".four-btn-uae-paragraph"
    ).innerText = `ندير جميع أنواع مشاريع إعادة التجديد، مع خبرة خاصة في يخوت الألمنيوم. من التنسيق مع أحواض السفن إلى التسليم النهائي، تتم مراقبة كل مرحلة بدقة لضمان أعلى المعايير التقنية والجمالية. يتم إعداد الميزانيات بعناية لتوفير وضوح مالي كامل للمالك، بينما تقدم التقارير المفصلة تقييمًا دقيقًا لحالة اليخت وتحدد فرص الاستثمار المستقبلية. يتم تتبع التقدم بشفافية تامة لتقديم صورة واضحة عن الجودة والإنجاز.`;

    selectElement(".five-btn-uae-heading").innerText =
      "الفحص الموسمي / السنوي وتقرير الحالة";
    selectElement(
      ".five-btn-uae-paragraph"
    ).innerText = `عمليات تفتيش شاملة وتقارير مفصلة يتم إعدادها قبل بداية الموسم، أو الدورة السنوية، أو فترة التأجير. تضمن هذه الخدمة الجاهزية والأداء والحفاظ على القيمة، مما يمنح المالكين ومديريهم راحة البال الكاملة.`;

    selectElement(".six-btn-uae-heading").innerText = "التسليم وتدريب الطاقم";
    selectElement(
      ".six-btn-uae-paragraph"
    ).innerText = `بالتعاون مع المالك، نقوم بمراجعة وتدقيق تقارير الفحص الحالية لضمان الدقة والكمال. تشمل هذه العملية مراجعة شاملة لعمليات اليخت لتحديد مجالات التحسين، وتقليل المخاطر التشغيلية، وحماية استثمار المالك.`;

    selectElement(".seven-btn-uae-heading").innerText =
      "التحقق من الفحص والتدقيق التشغيلي";
    selectElement(
      ".seven-btn-uae-paragraph"
    ).innerText = `نراجع ونتحقق من تقارير الفحص الحالية بالتعاون مع المالك لضمان الدقة والشفافية. تتضمن العملية تحليلًا دقيقًا لتشغيل اليخت، وتحديد نقاط الضعف، وتقليل المخاطر، وضمان استدامة الأداء على المدى الطويل.`;

    selectElement(".eight-btn-uae-heading").innerText = `الأمن`;
    selectElement(
      ".eight-btn-uae-paragraph"
    ).innerText = `نقدم حلول أمنية مصممة خصيصًا لليخوت والمالكين والطاقم، بإشراف فريق نخبة من ضباط الحماية الشخصية الحاصلين على تراخيص دولية.`;

    selectElement(
      ".security-list-uae-li-one"
    ).innerText = `حماية شخصية، ومرافقة، ومراقبة مسلحة أو غير مسلحة على مدار الساعة في البحر والميناء`;
    selectElement(
      ".security-list-uae-li-two"
    ).innerText = `مراقبة اليخت وتتبع موقعه عن بُعد على مدار 24/7 لضمان أقصى درجات الأمان`;
    selectElement(
      ".security-list-uae-li-three"
    ).innerText = `فحوصات خلفية شاملة وتدقيقات أمنية لأفراد الطاقم`;
    selectElement(
      ".security-list-uae-li-four"
    ).innerText = `دعم إداري وخلفي للمالكين والضيوف والعمليات`;
    selectElement(
      ".security-list-uae-li-five"
    ).innerText = `اختبارات كشف الكذب متاحة عند الطلب`;
    selectElement(
      ".security-list-uae-li-six"
    ).innerText = `تدريب متخصص في التعرف على التهديدات والاستجابة للطوارئ`;
    selectElement(
      ".security-list-uae-li-seven"
    ).innerText = `تدريب وتنفيذ أنظمة ومعدات الأمن`;
    selectElement(
      ".security-list-uae-li-eight"
    ).innerText = `حماية إلكترونية ومتقدمة ضد التجسس: كشف البرامج الخبيثة، أمان الهاتف والسحابة، الحماية من التنصت، والدفاع ضد الطائرات بدون طيار`;
    selectElement(
      ".security-list-uae-li-nine"
    ).innerText = `نقل آمن وسري للقيم ومعدات تكتيكية مصممة حسب الطلب`;
    selectElement(
      ".security-list-uae-li-ten"
    ).innerText = `حماية سلسة وسرية وغير منقطعة بأعلى مستوى من الاحتراف.`;

    // قسم الرئيس التنفيذي
    selectElement(
      ".ceo-uae-paragraph"
    ).innerText = `تنحدر السيدة دينا جلاسكا من عائلة بحرية عريقة يمتد تاريخها عبر أجيال من القباطنة الذين أسسوا تقاليد التميز في عالم البحر. بعد تخرجها من الأكاديمية البحرية، شغلت منصبًا رفيعًا لمدة خمسة عشر عامًا لدى العائلة الحاكمة في دولة الإمارات العربية المتحدة، حيث كانت مسؤولة عن البروتوكولات واستقبال الضيوف رفيعي المستوى. من خلال هذا الدور، تعاملت بشكل مباشر مع رؤساء دول وأفراد من العائلات الملكية وشخصيات عالمية بارزة، مما عزز قيم الدقة والسرية والتميز لديها.

من خلال خبرتها مع اليخوت الضخمة، التي تشكل جزءًا أساسيًا من أسلوب حياة العائلة الحاكمة، اكتسبت فهمًا عميقًا لتعقيداتها ومعاييرها العالية وتوقعات الملكية المخصصة. وبالاعتماد على هذه الخبرة الفريدة، وبالتعاون مع شبكة من الخبراء الموثوقين، أسست شركة متخصصة في فحص وتقييم اليخوت واليخوت الفاخرة. يجمع عملها بين الخبرة التقنية والمعايير الصارمة للسلامة والتصميم الداخلي الراقي، لتقديم خدمة مصممة بعناية قائمة على الثقة والسرية والفخامة.`;

    // قسم التواصل
    selectElement(".contact-uae-heading").innerText = `جهة االتصال:`;
    selectElement(
      ".contact-uae-paragraph"
    ).innerText = `إذا كنت بحاجة إلى دعم احترافي في عمليات فحص اليخوت، أو الإشراف على إعادة التجديد، أو التحضير للفئة أو التسجيل، أو أي جانب آخر من إدارة السفن، فإننا هنا لمساعدتك. تواصل معنا مباشرة لمناقشة احتياجاتك، وسنقدم لك خدمة مصممة خصيصًا لحماية استثمارك وضمان راحة بالك التامة.`;
  }

  // za svaki jezik kada želiš dodati stvarne tekstove
  console.log("Promijenjen jezik na:", targetLanguage);

  // Posebna prilagodba za UAE (textAlign right)
  if (targetLanguage === "uae") {
    const uaeElements = document.querySelectorAll("[class*='-uae-']");
    uaeElements.forEach((el) => (el.style.textAlign = "right"));
  }
};

// Event listeneri za jezik
langBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const lang = e.currentTarget.getAttribute("data-lang");
    setLanguage(lang);
  });
});

// Provjera jezika pri učitavanju stranice
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) {
    setLanguage(savedLang);
  }
});
