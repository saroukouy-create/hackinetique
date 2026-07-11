// PHASE 4 — DÉFENSE & PROFESSIONNALISATION (S19 à S24)
const PHASE4 = [
{
  id: "S19", week: 19, phase: 4,
  title: "Le SOC et le SIEM",
  level: "expert",
  duration: "Semaine 19 · ~10h",
  intro: "Après avoir appris à attaquer, place à la défense structurée. Le Security Operations Center (SOC) est le cœur battant de toute organisation mature en cybersécurité : une équipe et des outils qui surveillent, détectent et réagissent 24h/24. Cette semaine installe votre premier SIEM et pose les bases du métier d'analyste SOC.",
  objectives: [
    "Expliquer le rôle, l'organisation et les niveaux d'un SOC (analystes N1/N2/N3).",
    "Installer et configurer une stack SIEM (Wazuh ou ELK) sur une infrastructure de test.",
    "Déployer des collecteurs de logs (agents Wazuh, Filebeat) sur plusieurs sources.",
    "Construire des tableaux de bord de supervision exploitables.",
    "Définir des règles d'alerte pertinentes alignées sur des cas d'usage de détection réels."
  ],
  definition: "Un SOC (Security Operations Center) est l'entité opérationnelle chargée de la surveillance continue, de la détection et de la première réponse aux incidents de sécurité d'une organisation. Son outil central est le SIEM (Security Information and Event Management), qui centralise, corrèle et met en alerte à partir des journaux collectés sur l'ensemble du système d'information. Cette semaine couvre l'installation d'une stack Wazuh (ou ELK — Elasticsearch, Logstash, Kibana), la configuration des collecteurs de logs, la construction de tableaux de bord et la mise en place d'alertes.",
  analogy: { title: "🚨 Le SOC comme tour de contrôle aéroportuaire", text: "Un aiguilleur du ciel ne regarde pas un seul avion : il surveille en permanence des dizaines de vols sur un radar centralisé et déclenche une alerte dès qu'une trajectoire sort de la norme. Le SIEM joue exactement ce rôle pour le système d'information : il agrège tous les « vols » (connexions, processus, fichiers) sur un seul écran radar." },
  keyTerms: [
    { term: "SOC", def: "Security Operations Center : équipe et infrastructure dédiées à la surveillance continue et à la réponse aux incidents." },
    { term: "SIEM", def: "Security Information and Event Management : plateforme qui collecte, corrèle et met en alerte à partir des journaux (logs) du système d'information." },
    { term: "Agent de collecte", def: "Programme léger installé sur une machine surveillée qui transmet ses journaux au serveur SIEM." },
    { term: "Corrélation", def: "Analyse croisée de plusieurs événements distincts pour détecter un comportement suspect qu'un seul log ne révélerait pas." },
    { term: "MTTD / MTTR", def: "Mean Time To Detect / Mean Time To Respond : indicateurs clés de performance d'un SOC mesurant la rapidité de détection et de réponse." }
  ],
  lesson: [
    { heading: "Le rôle d'un SOC dans l'organisation", html: "<p>Un SOC assure une surveillance continue (idéalement 24h/24, 7j/7) des systèmes, réseaux et applications. Il s'organise généralement en niveaux :</p><ul><li><strong>Analyste N1</strong> — tri des alertes, premier diagnostic, escalade.</li><li><strong>Analyste N2</strong> — investigation approfondie, corrélation d'événements, qualification de l'incident.</li><li><strong>Analyste N3 / Threat Hunter</strong> — recherche proactive de menaces, réponse aux incidents complexes, amélioration des règles de détection.</li></ul><p>Ces activités relèvent directement des fonctions <strong>Detect</strong> et <strong>Respond</strong> du NIST Cybersecurity Framework.</p>" },
    { heading: "Architecture d'une stack SIEM", html: "<p>Deux stacks open source dominent le marché de la formation et des PME :</p><ul><li><strong>Wazuh</strong> — plateforme XDR/SIEM tout-en-un intégrant collecte, analyse, détection d'intrusion hôte (HIDS) et conformité.</li><li><strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana) — brique par brique : Logstash collecte et transforme, Elasticsearch indexe et recherche, Kibana visualise.</li></ul><p>Wazuh s'appuie d'ailleurs sur Elasticsearch/OpenSearch et Kibana en arrière-plan, ce qui en fait un excellent point d'entrée pour découvrir les deux mondes.</p>" },
    { heading: "Installation et configuration de Wazuh", html: "<p>Sur une VM Ubuntu Server dédiée (4 Go de RAM minimum), l'installation du manager Wazuh se fait via le script officiel :</p><pre><code>curl -sO https://packages.wazuh.com/4.7/wazuh-install.sh\nsudo bash wazuh-install.sh -a\n# Récupérer le mot de passe admin généré\nsudo tar -O -xvf wazuh-install-files.tar wazuh-install-files/wazuh-passwords.txt</code></pre><p>L'interface Wazuh Dashboard est ensuite accessible en HTTPS sur le port 443 du manager.</p>" },
    { heading: "Configuration des collecteurs de logs (agents)", html: "<p>Chaque machine à surveiller reçoit un agent Wazuh qui remonte ses journaux vers le manager. Extrait de fichier d'agent <code>ossec.conf</code> ciblant les logs d'authentification et un dossier applicatif :</p><pre><code>&lt;ossec_config&gt;\n  &lt;client&gt;\n    &lt;server&gt;\n      &lt;address&gt;10.0.0.5&lt;/address&gt;\n    &lt;/server&gt;\n  &lt;/client&gt;\n  &lt;localfile&gt;\n    &lt;log_format&gt;syslog&lt;/log_format&gt;\n    &lt;location&gt;/var/log/auth.log&lt;/location&gt;\n  &lt;/localfile&gt;\n&lt;/ossec_config&gt;</code></pre><p>Sous une stack ELK classique, cette collecte est assurée par <strong>Filebeat</strong>, qui expédie les logs vers Logstash ou directement vers Elasticsearch.</p>" },
    { heading: "Construction de tableaux de bord et règles d'alerte", html: "<p>Une fois les données indexées, on construit des visualisations Kibana (échecs de connexion par heure, top des IP sources, alertes par criticité) puis on définit des règles de corrélation. Exemple simplifié de règle Wazuh détectant des tentatives de connexion SSH répétées :</p><pre><code>&lt;rule id=\"100010\" level=\"10\"&gt;\n  &lt;if_matched_sid&gt;5716&lt;/if_matched_sid&gt;\n  &lt;same_source_ip/&gt;\n  &lt;frequency&gt;6&lt;/frequency&gt;\n  &lt;timeframe&gt;120&lt;/timeframe&gt;\n  &lt;description&gt;Tentative de brute force SSH détectée&lt;/description&gt;\n  &lt;group&gt;authentication_failures,&lt;/group&gt;\n&lt;/rule&gt;</code></pre><p>Cette approche illustre directement les techniques de détection cataloguées dans <strong>MITRE ATT&amp;CK</strong> (technique T1110 — Brute Force).</p>" }
  ],
  standards: ["NIST Cybersecurity Framework — fonction Detect (DE)", "NIST SP 800-61 — Computer Security Incident Handling Guide", "CompTIA CySA+ — Domaine 2 : Adversary Tactics, Techniques and Procedures"],
  steps: [
    { text: "Découvrir le rôle et l'organisation d'un SOC (analystes N1/N2/N3).", color: "green" },
    { text: "Installer une stack SIEM (Wazuh ou ELK) sur une VM dédiée.", color: "green" },
    { text: "Configurer les collecteurs (agents Wazuh, Filebeat) sur les sources de logs.", color: "green" },
    { text: "Créer des tableaux de bord de supervision (Kibana / Wazuh dashboards).", color: "green" },
    { text: "Mettre en place des règles d'alerte et de corrélation.", color: "green" },
    { text: "Livrable : Tableau de bord SIEM opérationnel avec alertes configurées.", color: "red" }
  ],
  deliverable: "Un manager Wazuh (ou stack ELK) fonctionnel, au moins deux agents remontant leurs logs, un tableau de bord Kibana/Wazuh avec au moins trois visualisations, et une règle d'alerte personnalisée déclenchée avec succès.",
  tp: {
    title: "TP S19 — Déployer un mini-SOC avec Wazuh",
    objectif: "Installer une stack SIEM complète, collecter des logs réels et construire un tableau de bord de supervision avec alertes.",
    duree: "3 à 4 heures",
    materiel: ["VM Ubuntu Server 22.04 (manager Wazuh, 4 Go RAM min)", "Une ou deux VM agents (Linux et/ou Windows)", "Accès internet pour les paquets d'installation", "Navigateur pour accéder au dashboard"],
    consignes: [
      "Installer le manager Wazuh sur la VM dédiée via le script officiel et récupérer les identifiants du dashboard.",
      "Se connecter à Wazuh Dashboard et vérifier l'état du cluster (Elasticsearch/OpenSearch, indexeur, manager).",
      "Installer un agent Wazuh sur une seconde VM et l'enregistrer auprès du manager.",
      "Vérifier dans le dashboard que les événements de l'agent (connexions, processus, intégrité de fichiers) remontent correctement.",
      "Créer un tableau de bord personnalisé avec au moins trois visualisations (alertes par sévérité, top IP sources, événements par agent).",
      "Générer volontairement plusieurs échecs d'authentification SSH sur l'agent pour déclencher une règle de détection de brute force.",
      "Documenter, captures d'écran à l'appui, le trajet complet d'un événement : de la génération du log jusqu'à l'alerte affichée dans le dashboard."
    ],
    livrable: "Rapport avec captures d'écran du dashboard, des visualisations créées et de l'alerte de brute force déclenchée.",
    criteres: ["Manager Wazuh installé et accessible", "Au moins un agent enregistré et remontant des logs en continu", "Tableau de bord avec au moins trois visualisations pertinentes", "Alerte de sécurité déclenchée et documentée"]
  },
  quiz: [
    { q: "Quel est le rôle principal d'un analyste SOC de niveau N1 ?", options: ["Rédiger la politique de sécurité de l'entreprise", "Trier les alertes et effectuer un premier diagnostic avant escalade", "Développer les applications métier", "Négocier les contrats fournisseurs"], correct: 1, explanation: "L'analyste N1 est en première ligne : il trie le flux d'alertes, effectue un premier diagnostic et escalade les cas complexes vers le N2." },
    { q: "Que signifie l'acronyme SIEM ?", options: ["Security Incident and Event Monitoring", "Security Information and Event Management", "System Information and Encryption Module", "Secure Internet Exchange Manager"], correct: 1, explanation: "SIEM signifie Security Information and Event Management : une plateforme qui collecte, corrèle et met en alerte à partir des journaux système." },
    { q: "Quel composant de la stack ELK est responsable de la visualisation des données ?", options: ["Elasticsearch", "Logstash", "Kibana", "Filebeat"], correct: 2, explanation: "Kibana est l'interface de visualisation et de création de tableaux de bord de la stack ELK ; Elasticsearch indexe, Logstash transforme, Filebeat collecte." },
    { q: "À quelle fonction du NIST Cybersecurity Framework les activités d'un SOC sont-elles principalement rattachées ?", options: ["Identify et Protect uniquement", "Detect et Respond", "Recover uniquement", "Aucune, le SOC est hors périmètre du NIST CSF"], correct: 1, explanation: "La surveillance continue et la réaction aux incidents relèvent directement des fonctions Detect (DE) et Respond (RS) du NIST CSF." },
    { q: "Dans une règle Wazuh de détection de brute force SSH, à quoi sert la balise <frequency> ?", options: ["À définir la version du protocole SSH", "À indiquer le nombre d'occurrences de l'événement nécessaires pour déclencher l'alerte", "À chiffrer le mot de passe de l'agent", "À planifier la sauvegarde des logs"], correct: 1, explanation: "La balise <frequency> combinée à <timeframe> définit le seuil de répétition d'un événement (ex. 6 échecs en 120 secondes) qui déclenche la corrélation et l'alerte." }
  ]
},
{
  id: "S20", week: 20, phase: 4,
  title: "Détection d'intrusion avec Snort",
  level: "expert",
  duration: "Semaine 20 · ~10h",
  intro: "Un SIEM centralise les logs, mais encore faut-il générer des événements de sécurité pertinents au niveau réseau. Cette semaine met les mains dans Snort, l'un des IDS/IPS open source les plus utilisés au monde, pour écrire vos propres règles de détection et analyser des alertes réelles.",
  objectives: [
    "Différencier un IDS d'un IPS et comprendre leur positionnement dans une architecture réseau.",
    "Installer et configurer Snort en mode détection (IDS).",
    "Écrire des règles Snort personnalisées ciblant des comportements suspects.",
    "Générer du trafic malveillant contrôlé (scan Nmap) et valider la détection.",
    "Analyser et documenter des alertes issues d'un journal Snort."
  ],
  definition: "Un IDS (Intrusion Detection System) analyse le trafic réseau ou l'activité d'un hôte pour repérer des signatures ou comportements suspects, et déclenche une alerte sans bloquer le trafic ; un IPS (Intrusion Prevention System) va plus loin en bloquant activement la menace détectée. Cette semaine couvre l'installation de Snort en mode IDS, l'écriture de règles de détection et l'analyse des alertes générées.",
  analogy: { title: "🐕 Snort comme chien de garde", text: "Un IDS agit comme un chien de garde bien dressé : il ne mord pas l'intrus (contrairement à un IPS), mais il aboie systématiquement dès qu'il reconnaît une odeur suspecte, laissant à l'humain le soin de décider de la suite." },
  keyTerms: [
    { term: "IDS", def: "Intrusion Detection System : système de détection qui analyse le trafic et alerte sans bloquer." },
    { term: "IPS", def: "Intrusion Prevention System : système de prévention qui détecte ET bloque activement le trafic malveillant." },
    { term: "Règle Snort", def: "Instruction structurée (action, protocole, adresses, port, contenu) qui définit un motif de détection." },
    { term: "Signature", def: "Motif caractéristique (chaîne, séquence d'octets, comportement) permettant d'identifier une attaque connue." },
    { term: "Faux positif", def: "Alerte déclenchée à tort sur un trafic légitime, à distinguer d'un faux négatif (attaque non détectée)." }
  ],
  lesson: [
    { heading: "IDS vs IPS : positionnement et modes", html: "<p>Un <strong>IDS</strong> est généralement placé en écoute passive (mode SPAN/mirroring) et se contente d'alerter. Un <strong>IPS</strong> est placé en coupure (inline) sur le flux réseau et peut bloquer un paquet en temps réel. Snort peut fonctionner dans les deux modes ; cette semaine se concentre volontairement sur le mode IDS, plus adapté à l'apprentissage de la détection sans risque de coupure de service.</p>" },
    { heading: "Installation et configuration de Snort", html: "<p>Sur une distribution Debian/Ubuntu :</p><pre><code>sudo apt update &amp;&amp; sudo apt install snort -y\n# Identifier l'interface réseau à surveiller\nip a\n# Lancer Snort en mode sniffer/IDS avec le fichier de règles local\nsudo snort -A console -q -c /etc/snort/snort.conf -i eth0</code></pre><p>Le fichier <code>snort.conf</code> centralise les variables réseau (HOME_NET, EXTERNAL_NET) et les chemins vers les fichiers de règles à charger.</p>" },
    { heading: "Anatomie d'une règle Snort", html: "<p>Une règle Snort se compose d'un en-tête (action, protocole, IP/port source et destination) et d'options entre parenthèses (contenu recherché, message, identifiant unique). Exemple de règle détectant un scan Nmap de type SYN :</p><pre><code>alert tcp any any -&gt; $HOME_NET any (msg:\"POSSIBLE NMAP SYN SCAN\"; flags:S; \\\nthreshold: type threshold, track by_src, count 20, seconds 3; \\\nsid:1000001; rev:1;)</code></pre><p>Cette règle déclenche une alerte si plus de 20 paquets SYN proviennent de la même source en 3 secondes — signature typique d'un scan de ports.</p>" },
    { heading: "Écrire une règle ciblant une signature applicative", html: "<p>Snort peut aussi inspecter le contenu des paquets. Exemple de règle détectant une tentative d'accès à une page d'administration sensible en clair sur HTTP :</p><pre><code>alert tcp any any -&gt; $HOME_NET 80 (msg:\"ACCES SUSPECT /admin\"; \\\ncontent:\"GET /admin\"; nocase; sid:1000002; rev:1;)</code></pre><p>Ce type de règle illustre la détection par signature, complémentaire de la détection par seuil (threshold) vue précédemment.</p>" },
    { heading: "Tester et analyser les alertes", html: "<p>Depuis une machine attaquante, un scan Nmap classique permet de valider les règles :</p><pre><code>nmap -sS -T4 192.168.1.10</code></pre><p>Les alertes générées sont journalisées dans <code>/var/log/snort/alert</code>. Chaque ligne doit être analysée avec méthode : horodatage, IP source/destination, règle déclenchée (SID), et niveau de criticité — la base de tout journal d'alertes commenté transmis à un analyste SOC de niveau supérieur.</p>" }
  ],
  standards: ["MITRE ATT&CK — technique T1046 (Network Service Discovery) et T1595 (Active Scanning)", "NIST Cybersecurity Framework — fonction Detect (DE.CM : Security Continuous Monitoring)", "CompTIA CySA+ — Domaine 1 : Security Operations"],
  steps: [
    { text: "Installer Snort sur une VM Ubuntu Server.", color: "green" },
    { text: "Configurer Snort en mode IDS (snort.conf, interface d'écoute).", color: "green" },
    { text: "Écrire des règles Snort personnalisées.", color: "green" },
    { text: "Tester la détection avec des scans Nmap contrôlés.", color: "green" },
    { text: "Analyser les alertes générées dans le journal Snort.", color: "green" },
    { text: "Livrable : Journal d'alertes commenté.", color: "red" }
  ],
  deliverable: "Une instance Snort fonctionnelle en mode IDS, au moins trois règles personnalisées validées, et un journal d'alertes commenté expliquant chaque détection (source, règle déclenchée, interprétation).",
  tp: {
    title: "TP S20 — Détecter un scan réseau avec Snort",
    objectif: "Configurer Snort en mode IDS, écrire des règles de détection personnalisées et produire un journal d'alertes analysé.",
    duree: "2 à 3 heures",
    materiel: ["VM Ubuntu Server avec Snort installé", "VM attaquante avec Nmap installé", "Accès réseau entre les deux VM (réseau interne isolé)"],
    consignes: [
      "Installer Snort et identifier l'interface réseau à surveiller avec `ip a`.",
      "Configurer le fichier snort.conf avec les variables HOME_NET correspondant au réseau de la VM cible.",
      "Écrire une règle personnalisée détectant un scan SYN basé sur un seuil de fréquence.",
      "Écrire une deuxième règle personnalisée détectant une signature applicative (ex. tentative d'accès à /admin en HTTP).",
      "Lancer Snort en mode console sur l'interface surveillée.",
      "Depuis la VM attaquante, exécuter un scan Nmap SYN puis une requête HTTP ciblant /admin.",
      "Extraire et commenter chaque alerte du journal /var/log/snort/alert : horodatage, IP source, règle déclenchée, interprétation."
    ],
    livrable: "Journal d'alertes Snort exporté et commenté (fichier texte ou capture), accompagné des deux règles personnalisées écrites.",
    criteres: ["Snort fonctionnel en mode IDS sur l'interface correcte", "Au moins deux règles personnalisées écrites et validées", "Alertes générées avec succès lors des tests", "Journal d'alertes clairement commenté et interprété"]
  },
  quiz: [
    { q: "Quelle est la différence fondamentale entre un IDS et un IPS ?", options: ["L'IDS chiffre le trafic, l'IPS ne le fait pas", "L'IDS détecte et alerte, l'IPS détecte et bloque activement", "L'IDS fonctionne uniquement sur Windows", "Il n'y a aucune différence"], correct: 1, explanation: "L'IDS est passif : il alerte sans intervenir sur le trafic. L'IPS est actif (inline) et peut bloquer un paquet identifié comme malveillant." },
    { q: "Dans une règle Snort, à quoi correspond le champ `sid` ?", options: ["Le sous-réseau surveillé", "Un identifiant unique de la règle", "La sévérité de l'alerte", "Le port source"], correct: 1, explanation: "Le SID (Snort ID) est un identifiant unique qui permet de référencer et de suivre chaque règle individuellement." },
    { q: "Quelle option Snort permet de détecter un grand nombre de paquets SYN en peu de temps (scan de ports) ?", options: ["content", "nocase", "threshold", "msg"], correct: 2, explanation: "L'option `threshold` (avec track, count et seconds) définit un seuil de répétition d'événement, typique de la détection de scans." },
    { q: "Selon MITRE ATT&CK, un scan de ports réalisé avec Nmap correspond principalement à quelle technique ?", options: ["T1059 — Command and Scripting Interpreter", "T1046 — Network Service Discovery", "T1486 — Data Encrypted for Impact", "T1078 — Valid Accounts"], correct: 1, explanation: "T1046 (Network Service Discovery) couvre la découverte de services réseau, dont les scans de ports réalisés via des outils comme Nmap." },
    { q: "Où sont journalisées par défaut les alertes générées par Snort sur une installation Linux classique ?", options: ["/etc/snort/rules", "/var/log/snort/alert", "/home/snort/log", "/tmp/snort.conf"], correct: 1, explanation: "Le fichier /var/log/snort/alert (ou le répertoire /var/log/snort/) contient par défaut le journal des alertes générées par Snort." }
  ]
},
{
  id: "S21", week: 21, phase: 4,
  title: "Introduction au forensics numérique",
  level: "expert",
  duration: "Semaine 21 · ~10h",
  intro: "Quand une intrusion a eu lieu, il faut reconstituer les faits avec la rigueur d'un enquêteur : sans altérer la preuve, sans supposition, sans raccourci. Cette semaine initie à l'investigation numérique (forensics), depuis la chaîne de custody jusqu'à l'analyse d'une image disque avec Autopsy.",
  objectives: [
    "Expliquer le principe et l'importance de la chaîne de custody (chain of custody) en investigation numérique.",
    "Acquérir une image disque de manière forensiquement saine (bit-à-bit, avec hachage).",
    "Analyser une image disque avec Autopsy / The Sleuth Kit.",
    "Récupérer des fichiers supprimés et identifier des artefacts numériques.",
    "Reconstituer une chronologie d'incident et rédiger un rapport d'investigation."
  ],
  definition: "Le forensics numérique (investigation numérique légale) consiste à identifier, préserver, analyser et documenter des preuves numériques dans le respect d'une chaîne de custody rigoureuse, afin qu'elles restent exploitables et opposables. Cette semaine couvre l'acquisition d'une image disque, son analyse avec Autopsy, la récupération de fichiers et la reconstitution d'une chronologie d'incident.",
  analogy: { title: "🔎 Le forensics comme scène de crime", text: "Un enquêteur ne touche jamais une scène de crime à mains nues et note chaque geste sur un procès-verbal : c'est exactement le principe de la chaîne de custody appliquée à un disque dur. Une preuve numérique manipulée sans traçabilité perd toute valeur devant un tribunal ou un comité de direction." },
  keyTerms: [
    { term: "Chaîne de custody", def: "Traçabilité complète et documentée de toutes les manipulations d'une preuve, de sa collecte à sa présentation finale." },
    { term: "Image disque bit-à-bit", def: "Copie exacte, secteur par secteur, d'un support de stockage, incluant l'espace non alloué et les fichiers supprimés." },
    { term: "Hachage (empreinte)", def: "Valeur cryptographique (MD5, SHA-256) calculée sur une preuve pour prouver son intégrité et sa non-altération." },
    { term: "Artefact numérique", def: "Trace laissée par une activité (fichier, entrée de registre, log) exploitable comme élément de preuve." },
    { term: "Timeline forensique", def: "Reconstitution chronologique des événements d'un système à partir des métadonnées et journaux collectés." }
  ],
  lesson: [
    { heading: "La chaîne de custody : le socle de toute investigation recevable", html: "<p>Sans chaîne de custody documentée (qui a touché la preuve, quand, comment), une preuve numérique perd sa valeur juridique et probante. Chaque étape — acquisition, transport, stockage, analyse — doit être tracée avec horodatage, identité de l'opérateur et empreinte cryptographique de la preuve. C'est le principe fondamental défendu par la norme <strong>ISO/IEC 27037</strong> sur l'identification, la collecte et la préservation des preuves numériques.</p>" },
    { heading: "Acquisition d'une image disque", html: "<p>L'acquisition doit être bit-à-bit, sans jamais écrire sur le support original (idéalement via un bloqueur en écriture). Sous Linux, la commande <code>dd</code> (ou son équivalent forensique <code>dc3dd</code>) permet une copie brute, suivie du calcul systématique d'une empreinte :</p><pre><code>sudo dd if=/dev/sdb of=/mnt/preuves/disque_suspect.img bs=4M status=progress\nsha256sum /dev/sdb &gt; hash_original.txt\nsha256sum /mnt/preuves/disque_suspect.img &gt; hash_copie.txt\ndiff hash_original.txt hash_copie.txt</code></pre><p>Si les deux empreintes sont identiques, l'intégrité de la copie est prouvée : c'est cette empreinte qui accompagnera la preuve tout au long de la chaîne de custody.</p>" },
    { heading: "Analyse avec Autopsy / The Sleuth Kit", html: "<p>Autopsy fournit une interface graphique au-dessus de The Sleuth Kit pour explorer une image disque sans jamais la modifier. Après création d'un nouveau cas et import de l'image :</p><pre><code># En ligne de commande via The Sleuth Kit\nmmls disque_suspect.img          # Lister les partitions\nfls -r -o 2048 disque_suspect.img   # Lister les fichiers, y compris supprimés\nicat -o 2048 disque_suspect.img 1542 &gt; fichier_recupere.docx</code></pre><p>Dans Autopsy, les modules d'extraction automatique (fichiers récents, historique de navigation, artefacts de registre) accélèrent considérablement le tri initial.</p>" },
    { heading: "Récupération de fichiers supprimés", html: "<p>La suppression d'un fichier ne supprime généralement que son entrée dans la table d'allocation, pas son contenu tant que l'espace n'a pas été réécrit. Autopsy identifie ces fichiers « orphelins » dans le module <em>Deleted Files</em>, permettant leur récupération (carving) tant que les blocs de données originaux n'ont pas été écrasés.</p>" },
    { heading: "Reconstitution d'une chronologie et rapport d'investigation", html: "<p>La fonctionnalité <em>Timeline</em> d'Autopsy croise les métadonnées MAC (Modified, Accessed, Created) de tous les fichiers pour reconstituer, minute par minute, la séquence des événements sur le système compromis. Cette chronologie devient l'ossature du rapport d'investigation final, structuré selon les recommandations <strong>ISO/IEC 27035</strong> pour la gestion des incidents : résumé exécutif, méthodologie, constats, chronologie, conclusions et recommandations.</p>" }
  ],
  standards: ["ISO/IEC 27037 — Identification, collecte, acquisition et préservation des preuves numériques", "ISO/IEC 27035 — Gestion des incidents de sécurité de l'information", "NIST SP 800-61 — Computer Security Incident Handling Guide"],
  steps: [
    { text: "Comprendre le principe et les exigences de la chaîne de custody.", color: "green" },
    { text: "Acquérir une image disque bit-à-bit avec calcul d'empreinte.", color: "green" },
    { text: "Analyser l'image avec Autopsy / The Sleuth Kit.", color: "green" },
    { text: "Récupérer des fichiers supprimés (carving).", color: "green" },
    { text: "Établir une chronologie précise de l'incident.", color: "green" },
    { text: "Livrable : Rapport d'investigation.", color: "red" }
  ],
  deliverable: "Une image disque acquise avec preuve d'intégrité (empreintes concordantes), un cas Autopsy analysé avec au moins deux fichiers supprimés récupérés, et un rapport d'investigation complet incluant chronologie et conclusions.",
  tp: {
    title: "TP S21 — Investigation numérique d'un poste compromis",
    objectif: "Acquérir, analyser et documenter une image disque suspecte dans le respect de la chaîne de custody, puis produire un rapport d'investigation.",
    duree: "3 à 4 heures",
    materiel: ["VM Ubuntu (poste d'analyse) avec Autopsy et The Sleuth Kit installés", "Image disque d'entraînement (ex. image .img fournie avec fichiers supprimés/artefacts simulés)", "Feuille de chaîne de custody (modèle fourni)"],
    consignes: [
      "Documenter l'acquisition de l'image dans une fiche de chaîne de custody : date, opérateur, méthode, empreinte SHA-256.",
      "Calculer et vérifier l'empreinte de l'image fournie avant toute analyse.",
      "Créer un nouveau cas Autopsy et importer l'image disque.",
      "Explorer l'arborescence de fichiers et identifier au moins deux fichiers supprimés récupérables.",
      "Récupérer ces fichiers et examiner leur contenu et leurs métadonnées.",
      "Utiliser le module Timeline pour reconstituer la séquence chronologique des événements suspects.",
      "Rédiger un rapport d'investigation structuré : résumé, méthodologie, constats, chronologie, conclusion."
    ],
    livrable: "Fiche de chaîne de custody remplie + rapport d'investigation (PDF ou Markdown) incluant chronologie et fichiers récupérés.",
    criteres: ["Chaîne de custody correctement documentée avec empreinte vérifiée", "Au moins deux fichiers supprimés récupérés avec succès", "Chronologie cohérente et justifiée par les artefacts", "Rapport structuré, clair et professionnel"]
  },
  quiz: [
    { q: "Pourquoi la chaîne de custody est-elle essentielle en investigation numérique ?", options: ["Elle accélère l'analyse", "Elle garantit la traçabilité et l'intégrité de la preuve pour qu'elle reste opposable", "Elle est facultative si l'enquêteur est expérimenté", "Elle sert uniquement à archiver les fichiers"], correct: 1, explanation: "Sans documentation rigoureuse de chaque manipulation, une preuve numérique perd sa valeur probante, principe central de la norme ISO/IEC 27037." },
    { q: "Quel est l'objectif du calcul d'une empreinte SHA-256 lors de l'acquisition d'une image disque ?", options: ["Compresser l'image", "Prouver que la copie est identique à l'original et n'a pas été altérée", "Chiffrer le contenu du disque", "Accélérer le transfert réseau"], correct: 1, explanation: "Comparer l'empreinte de l'original et de la copie prouve mathématiquement l'intégrité de l'acquisition, condition indispensable à la recevabilité de la preuve." },
    { q: "Que permet la commande `icat` de The Sleuth Kit ?", options: ["Lister les partitions d'une image disque", "Extraire le contenu d'un fichier à partir de son numéro d'inode/adresse", "Calculer une empreinte cryptographique", "Chiffrer un fichier"], correct: 1, explanation: "`icat` extrait le contenu brut d'un fichier identifié par son adresse (inode), y compris pour des fichiers supprimés dont les blocs n'ont pas été réécrits." },
    { q: "Que représentent les métadonnées MAC utilisées dans une timeline forensique ?", options: ["Modified, Accessed, Created", "Malware, Analysis, Case", "Media, Address, Control", "Manual, Automatic, Combined"], correct: 0, explanation: "MAC désigne les horodatages Modified (modification), Accessed (accès) et Created (création) d'un fichier, base de la reconstitution chronologique." },
    { q: "Quelle norme ISO/IEC porte spécifiquement sur l'identification, la collecte et la préservation des preuves numériques ?", options: ["ISO/IEC 27001", "ISO/IEC 27037", "ISO/IEC 9001", "ISO/IEC 20000"], correct: 1, explanation: "ISO/IEC 27037 encadre spécifiquement les lignes directrices d'identification, de collecte, d'acquisition et de préservation des preuves numériques." }
  ]
},
{
  id: "S22", week: 22, phase: 4,
  title: "Audit de sécurité",
  level: "expert",
  duration: "Semaine 22 · ~10h",
  intro: "Savoir trouver une vulnérabilité ne suffit pas : un professionnel doit savoir la documenter, la prioriser et la communiquer à un décideur non technique. Cette semaine structure une démarche d'audit de sécurité complète, du cadrage à la rédaction d'un rapport professionnel exploitable par un client.",
  objectives: [
    "Appliquer une méthodologie d'audit de sécurité structurée et reproductible.",
    "Définir un périmètre d'audit précis (scope) et des règles d'engagement.",
    "Réaliser des tests techniques et analyser les vulnérabilités identifiées selon leur criticité.",
    "Rédiger un rapport d'audit professionnel conforme aux standards du secteur.",
    "Formuler des recommandations de remédiation priorisées et actionnables."
  ],
  definition: "L'audit de sécurité est une évaluation méthodique et documentée du niveau de sécurité d'un système d'information, structurée en phases (cadrage, reconnaissance, tests, analyse, restitution) et aboutissant à un rapport professionnel. Cette semaine couvre la méthodologie d'audit, la définition du périmètre, la réalisation des tests, l'analyse des vulnérabilités et la rédaction du rapport final selon les standards reconnus (PTES).",
  analogy: { title: "🏥 L'audit comme bilan de santé complet", text: "Un audit de sécurité ressemble à un bilan de santé médical : on ne se contente pas de dire « vous êtes malade », on documente chaque symptôme, on hiérarchise les risques (bénin, préoccupant, urgent) et on prescrit un traitement précis et suivi dans le temps." },
  keyTerms: [
    { term: "Scope (périmètre)", def: "Ensemble précis des systèmes, applications ou adresses IP autorisés à être testés lors d'un audit." },
    { term: "Rules of Engagement", def: "Document formalisant les règles, horaires, contacts d'urgence et limites techniques d'un audit." },
    { term: "PTES", def: "Penetration Testing Execution Standard : référentiel définissant les sept phases d'un test d'intrusion professionnel." },
    { term: "CVSS", def: "Common Vulnerability Scoring System : système de notation standardisé de la criticité d'une vulnérabilité." },
    { term: "Remédiation", def: "Action corrective recommandée pour éliminer ou réduire une vulnérabilité identifiée." }
  ],
  lesson: [
    { heading: "Méthodologie d'audit : le standard PTES", html: "<p>Le <strong>PTES</strong> (Penetration Testing Execution Standard) structure un audit en sept phases : interactions pré-engagement, collecte de renseignements, modélisation des menaces, analyse de vulnérabilités, exploitation, post-exploitation et <strong>rapport</strong>. Cette structure garantit la reproductibilité et la comparabilité des audits d'une mission à l'autre, un principe attendu par tout client professionnel ou certification CompTIA CySA+/PenTest+.</p>" },
    { heading: "Définir le périmètre et les règles d'engagement", html: "<p>Avant tout test technique, un document de cadrage formalise :</p><ul><li>Le <strong>périmètre exact</strong> : IP, domaines, applications, exclusions explicites.</li><li>La <strong>fenêtre temporelle</strong> autorisée (horaires, dates).</li><li>Les <strong>contacts d'urgence</strong> en cas d'incident pendant les tests.</li><li>L'<strong>autorisation écrite</strong> signée, condition légale indispensable avant toute action.</li></ul><p>Sans ce cadrage, un audit techniquement identique devient juridiquement un accès frauduleux à un système.</p>" },
    { heading: "Réaliser les tests et analyser les vulnérabilités", html: "<p>Les tests combinent scans automatisés (Nmap, Nessus/OpenVAS) et vérifications manuelles pour éliminer les faux positifs. Chaque vulnérabilité confirmée est notée selon le <strong>CVSS</strong> pour objectiver sa criticité :</p><pre><code>Vulnérabilité : Injection SQL sur le formulaire de connexion (/login)\nCVSS v3.1 : 9.8 (Critique)\nVecteur : AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H\nPreuve de concept : ' OR '1'='1' -- \nImpact : Contournement d'authentification, extraction de la base utilisateurs</code></pre><p>Cette fiche structurée (vulnérabilité, score, preuve, impact) constitue le bloc de base de tout rapport d'audit.</p>" },
    { heading: "Rédiger le rapport d'audit professionnel", html: "<p>Un rapport d'audit conforme au standard PTES comprend généralement : un <strong>résumé exécutif</strong> non technique destiné à la direction, une <strong>synthèse des risques</strong> par criticité, le <strong>détail technique</strong> de chaque vulnérabilité (description, preuve, impact, remédiation), et une <strong>annexe méthodologique</strong>. Le résumé exécutif est souvent la seule partie lue par un décideur : il doit être clair, chiffré et orienté décision.</p>" },
    { heading: "Prioriser les recommandations de remédiation", html: "<p>Chaque vulnérabilité doit être accompagnée d'une recommandation concrète et priorisée (immédiate, court terme, moyen terme), en cohérence avec les fonctions <strong>Identify</strong> et <strong>Protect</strong> du NIST CSF. Un tableau de synthèse final permet au client de suivre l'avancement de la remédiation dans le temps, souvent lors d'un audit de contrôle (retest).</p>" }
  ],
  standards: ["PTES — Penetration Testing Execution Standard (structure du rapport)", "NIST Cybersecurity Framework — fonctions Identify (ID) et Protect (PR)", "ISO/IEC 27001 — Annexe A, gestion des risques et amélioration continue"],
  steps: [
    { text: "Étudier la méthodologie d'audit PTES.", color: "green" },
    { text: "Définir le périmètre et les règles d'engagement.", color: "green" },
    { text: "Réaliser les tests techniques (scans, vérifications manuelles).", color: "green" },
    { text: "Analyser et noter les vulnérabilités (CVSS).", color: "green" },
    { text: "Rédiger le rapport d'audit professionnel.", color: "green" },
    { text: "Livrable : Rapport d'audit.", color: "red" }
  ],
  deliverable: "Un rapport d'audit complet conforme au standard PTES : résumé exécutif, périmètre documenté, au moins trois vulnérabilités notées CVSS avec preuve et impact, et recommandations de remédiation priorisées.",
  tp: {
    title: "TP S22 — Auditer une application web vulnérable et rédiger le rapport",
    objectif: "Réaliser un audit de sécurité complet sur une cible d'entraînement et produire un rapport professionnel conforme au standard PTES.",
    duree: "4 à 5 heures",
    materiel: ["VM cible (ex. DVWA ou OWASP Juice Shop) sur réseau isolé", "VM attaquante avec Nmap, Burp Suite (ou ZAP), navigateur", "Modèle de rapport d'audit (structure PTES)"],
    consignes: [
      "Rédiger un document de cadrage précisant le périmètre exact (IP/URL) et les règles d'engagement de l'audit.",
      "Réaliser une phase de reconnaissance (Nmap, énumération des technologies) sur la cible.",
      "Identifier au minimum trois vulnérabilités distinctes en combinant scan automatisé et vérification manuelle.",
      "Noter chaque vulnérabilité avec un score CVSS v3.1 et documenter une preuve de concept reproductible.",
      "Analyser l'impact métier de chaque vulnérabilité (confidentialité, intégrité, disponibilité).",
      "Rédiger le rapport complet : résumé exécutif, synthèse des risques, détail technique, recommandations priorisées.",
      "Relire le rapport en se mettant à la place d'un dirigeant non technique lisant uniquement le résumé exécutif."
    ],
    livrable: "Rapport d'audit complet au format PDF ou Markdown, structuré selon le standard PTES.",
    criteres: ["Périmètre et règles d'engagement clairement documentés", "Au moins trois vulnérabilités identifiées, notées CVSS et prouvées", "Résumé exécutif clair et compréhensible par un non-technicien", "Recommandations de remédiation concrètes et priorisées"]
  },
  quiz: [
    { q: "Combien de phases comporte la méthodologie PTES ?", options: ["Trois", "Cinq", "Sept", "Dix"], correct: 2, explanation: "Le PTES définit sept phases : pré-engagement, collecte de renseignements, modélisation des menaces, analyse de vulnérabilités, exploitation, post-exploitation et rapport." },
    { q: "Que doit impérativement contenir le document de cadrage avant un audit ?", options: ["Uniquement la liste des outils utilisés", "Le périmètre exact, la fenêtre temporelle et l'autorisation écrite signée", "Le CV de l'auditeur", "La liste des employés de l'entreprise cliente"], correct: 1, explanation: "Sans périmètre défini et autorisation écrite, un test technique identique devient un accès non autorisé au regard de la loi." },
    { q: "À quoi sert le score CVSS dans un rapport d'audit ?", options: ["À chiffrer le rapport", "À objectiver et standardiser la criticité d'une vulnérabilité", "À identifier l'auditeur", "À calculer la durée de la mission"], correct: 1, explanation: "Le CVSS (Common Vulnerability Scoring System) fournit une note standardisée (0 à 10) permettant de comparer et prioriser objectivement les vulnérabilités." },
    { q: "À qui s'adresse en priorité le résumé exécutif d'un rapport d'audit ?", options: ["Aux autres auditeurs de l'équipe", "Aux décideurs non techniques (direction)", "Aux moteurs de recherche", "Uniquement à l'équipe de développement"], correct: 1, explanation: "Le résumé exécutif doit être compréhensible par un dirigeant non technique, souvent la seule partie du rapport qu'il lira en détail." },
    { q: "Quelles fonctions du NIST Cybersecurity Framework sont le plus directement mobilisées par un audit de sécurité et ses recommandations ?", options: ["Detect et Respond uniquement", "Identify et Protect", "Recover uniquement", "Aucune fonction du NIST CSF n'est concernée"], correct: 1, explanation: "L'audit vise à identifier les risques (Identify) et à formuler des mesures de protection correctives (Protect), avant même la détection ou la réponse aux incidents." }
  ]
},
{
  id: "S23", week: 23, phase: 4,
  title: "Préparation du projet final",
  level: "expert",
  duration: "Semaine 23 · ~12h",
  intro: "C'est le moment de mobiliser l'ensemble des compétences acquises depuis la semaine 1 : attaque, défense, audit et documentation. Cette semaine encadre la construction d'un projet final complet — un scénario réaliste d'attaque puis de défense sur un environnement que vous aurez vous-même bâti et sécurisé.",
  objectives: [
    "Choisir un scénario de projet final réaliste combinant attaque et défense.",
    "Mettre en place un environnement de test complet et isolé.",
    "Réaliser un audit de sécurité structuré sur cet environnement.",
    "Documenter méthodiquement chaque étape technique réalisée.",
    "Préparer une soutenance claire et argumentée du projet."
  ],
  definition: "Le projet final HACKINÉTIQUE est une mise en situation intégrale mobilisant les compétences des quatre phases du programme : construction d'un scénario réaliste (infrastructure vulnérable), phase offensive (reconnaissance, exploitation), phase défensive (détection, remédiation) et audit final documenté. Cette semaine encadre le choix du scénario, la mise en place de l'environnement, la réalisation de l'audit, la documentation et la préparation de la soutenance.",
  analogy: { title: "🎓 Le projet final comme chef-d'œuvre d'artisan", text: "Dans les corporations de métiers, l'apprenti devenait compagnon en réalisant un « chef-d'œuvre » démontrant seul la maîtrise de toutes les techniques apprises. Le projet final HACKINÉTIQUE joue ce rôle : une réalisation complète, de vos mains, qui prouve la maîtrise du cycle attaque-défense-audit." },
  keyTerms: [
    { term: "Scénario de projet", def: "Mise en situation réaliste définissant l'environnement cible, les objectifs et les contraintes du projet final." },
    { term: "Environnement isolé", def: "Infrastructure de test (VM, réseau virtuel) cloisonnée du réseau de production pour permettre des tests sans risque." },
    { term: "Documentation technique", def: "Trace écrite et reproductible de chaque action réalisée : commandes, captures, résultats, interprétation." },
    { term: "Soutenance", def: "Présentation orale et démonstration du projet devant un jury, incluant questions-réponses." }
  ],
  lesson: [
    { heading: "Choisir un scénario réaliste et mesurable", html: "<p>Un bon scénario de projet final combine trois ingrédients : une <strong>infrastructure vulnérable réaliste</strong> (ex. serveur web avec CMS obsolète, service SSH mal configuré, partage réseau mal protégé), un <strong>objectif offensif clair</strong> (ex. obtenir un accès administrateur), et un <strong>volet défensif</strong> (ex. détecter l'intrusion simulée et produire un rapport de réponse à incident). Exemples de scénarios validés : « Compromission d'un serveur web WordPress puis détection SOC » ou « Exfiltration simulée de données et investigation forensique post-incident ».</p>" },
    { heading: "Mettre en place l'environnement de test", html: "<p>L'environnement doit être entièrement isolé du réseau de production ou personnel, généralement via un hyperviseur local (VirtualBox, VMware) et un réseau interne dédié. Extrait d'une checklist de mise en place minimale :</p><pre><code># Vérification de l'isolement réseau du laboratoire\nip route show   # Aucune route vers le réseau domestique/production\nnmap -sn 192.168.56.0/24   # Confirmer les seules machines du labo présentes</code></pre><p>Chaque machine (cible, attaquant, SIEM) doit être documentée : rôle, adresse IP, services installés.</p>" },
    { heading: "Réaliser l'audit complet du scénario", html: "<p>Le projet final applique la méthodologie complète vue en semaine 22 (PTES) : cadrage, reconnaissance, exploitation, puis analyse défensive avec les outils des semaines 19-21 (SIEM, IDS Snort, forensics). L'objectif est de démontrer la boucle complète : une attaque est menée, elle est détectée (ou non, ce qui est aussi un résultat analysable), puis investiguée.</p>" },
    { heading: "Documenter chaque étape avec rigueur", html: "<p>La documentation doit permettre à un tiers de reproduire exactement la démarche : commandes exactes utilisées, captures d'écran horodatées, résultats obtenus et leur interprétation. Une documentation insuffisante est la première cause de note pénalisée lors des soutenances de projets techniques — même un projet techniquement excellent perd de la valeur s'il n'est pas traçable.</p>" },
    { heading: "Préparer la soutenance", html: "<p>La soutenance doit raconter une histoire claire en trois temps : le contexte et les objectifs, la démarche technique (attaque puis défense/audit), et les résultats avec recommandations. Prévoir une démonstration technique courte et fiable (capture vidéo de secours en cas d'échec live), et anticiper les questions du jury sur les choix méthodologiques et les limites du projet.</p>" }
  ],
  standards: ["PTES — Penetration Testing Execution Standard (structuration globale du projet)", "NIST SP 800-61 — Computer Security Incident Handling Guide (volet défensif du scénario)", "ISO/IEC 27035 — Gestion des incidents de sécurité de l'information"],
  steps: [
    { text: "Choisir un scénario de projet combinant attaque et défense.", color: "green" },
    { text: "Mettre en place l'environnement de test isolé.", color: "green" },
    { text: "Réaliser l'audit complet (offensif puis défensif).", color: "green" },
    { text: "Documenter méthodiquement chaque étape réalisée.", color: "green" },
    { text: "Préparer le support et la démonstration de soutenance.", color: "green" },
    { text: "Livrable : Projet final finalisé.", color: "red" }
  ],
  deliverable: "Un projet final complet : scénario documenté, environnement de test opérationnel, phase offensive et défensive réalisées et tracées, rapport d'audit final, et support de soutenance prêt à être présenté.",
  tp: {
    title: "TP S23 — Construction et documentation du projet final",
    objectif: "Construire l'environnement du projet final, exécuter le scénario attaque/défense choisi et produire l'ensemble des livrables documentaires nécessaires à la soutenance.",
    duree: "6 à 8 heures (réparties sur la semaine)",
    materiel: ["Hyperviseur local (VirtualBox/VMware)", "VM(s) cible(s) vulnérable(s) selon le scénario choisi", "VM attaquante", "Stack SIEM/Snort déployée en semaines 19-20", "Outil de prise de notes/documentation (Markdown, traitement de texte)"],
    consignes: [
      "Rédiger une fiche de scénario : contexte, infrastructure cible, objectif offensif, objectif défensif.",
      "Déployer l'ensemble des machines virtuelles nécessaires sur un réseau interne isolé et vérifié.",
      "Mener la phase offensive planifiée en documentant chaque commande et chaque résultat obtenu.",
      "Activer les outils de détection (SIEM/Snort) et vérifier la remontée (ou l'absence de remontée) des événements liés à l'attaque.",
      "Réaliser, si pertinent au scénario, une phase d'investigation forensique post-incident.",
      "Compiler un rapport final structuré (contexte, méthodologie, résultats, recommandations).",
      "Construire le support de présentation (slides ou document) et répéter une première fois la démonstration technique."
    ],
    livrable: "Dossier de projet complet : fiche de scénario, journal d'exécution documenté, rapport final, support de soutenance.",
    criteres: ["Scénario cohérent, réaliste et clairement défini", "Environnement fonctionnel et correctement isolé", "Documentation complète et reproductible de chaque étape", "Support de soutenance clair et démonstration préparée"]
  },
  quiz: [
    { q: "Quel est le premier ingrédient indispensable d'un bon scénario de projet final ?", options: ["Un budget matériel important", "Une infrastructure vulnérable réaliste avec objectifs offensif et défensif clairs", "L'utilisation exclusive d'outils payants", "L'absence totale de documentation"], correct: 1, explanation: "Un scénario solide combine une infrastructure réaliste, un objectif offensif mesurable et un volet défensif (détection/réponse), condition de sa valeur pédagogique." },
    { q: "Pourquoi l'environnement de test du projet final doit-il être isolé du réseau de production ?", options: ["Pour des raisons esthétiques", "Pour éviter tout impact non maîtrisé sur des systèmes réels", "Ce n'est pas nécessaire si l'attaquant est prudent", "Pour économiser de la bande passante uniquement"], correct: 1, explanation: "L'isolement réseau garantit qu'aucune action offensive du projet ne puisse affecter accidentellement un système réel en dehors du laboratoire." },
    { q: "Quelle est la première cause fréquente de dévalorisation d'un projet techniquement réussi lors d'une soutenance ?", options: ["Un scénario trop simple", "Une documentation insuffisante ou non reproductible", "L'utilisation de Linux plutôt que Windows", "Un projet trop court"], correct: 1, explanation: "Sans documentation rigoureuse et reproductible, même un projet techniquement excellent perd sa valeur car il ne peut être vérifié ni compris par un tiers." },
    { q: "Que doit permettre en priorité la documentation de chaque étape du projet ?", options: ["D'impressionner visuellement le jury", "De permettre à un tiers de reproduire exactement la démarche", "De remplacer la soutenance orale", "De masquer les échecs rencontrés"], correct: 1, explanation: "Une documentation professionnelle vise la reproductibilité : commandes exactes, résultats et interprétation, à l'image d'un rapport d'incident ou d'audit réel." },
    { q: "Pourquoi est-il recommandé de prévoir une capture vidéo de secours pour la démonstration technique de la soutenance ?", options: ["Pour remplacer entièrement la présentation orale", "Pour garantir la continuité de la démonstration en cas d'échec technique en direct", "Ce n'est jamais recommandé en cybersécurité", "Pour respecter une obligation légale"], correct: 1, explanation: "Les démonstrations live peuvent échouer pour des raisons techniques imprévues ; une capture de secours garantit que le travail réalisé reste démontrable devant le jury." }
  ]
},
{
  id: "S24", week: 24, phase: 4,
  title: "Soutenance & clôture",
  level: "expert",
  duration: "Semaine 24 · ~8h",
  intro: "Dernière ligne droite du parcours HACKINÉTIQUE : présenter son projet final devant un jury, défendre ses choix techniques et méthodologiques, recevoir un retour constructif, puis clôturer officiellement 24 semaines de formation avec la remise de l'attestation.",
  objectives: [
    "Présenter clairement et de façon structurée le projet final devant un jury.",
    "Répondre avec assurance et rigueur technique aux questions du jury.",
    "Analyser un retour constructif pour identifier ses axes de progression.",
    "Faire la synthèse transversale des compétences validées sur les 24 semaines du programme.",
    "Clôturer officiellement le parcours et recevoir l'attestation HACKINÉTIQUE."
  ],
  definition: "La soutenance est la présentation orale, argumentée et démontrée du projet final devant un jury évaluateur, suivie d'une session de questions-réponses techniques. Elle valide l'ensemble des compétences acquises sur les quatre phases du programme (fondamentaux, attaque web/réseau, exploitation avancée, défense/professionnalisation) et débouche sur la remise de l'attestation HACKINÉTIQUE, marquant la clôture officielle du parcours.",
  analogy: { title: "🎯 La soutenance comme mission de conseil réelle", text: "Une soutenance ressemble à la restitution finale d'une mission de conseil en cybersécurité : le client (le jury) attend une présentation claire, des preuves tangibles, et sait qu'il posera des questions pièges pour vérifier que la compréhension dépasse la simple exécution de commandes." },
  keyTerms: [
    { term: "Jury", def: "Groupe d'évaluateurs (formateurs, professionnels) chargé d'apprécier la qualité du projet et de la présentation." },
    { term: "Grille d'évaluation", def: "Ensemble de critères objectifs utilisés par le jury pour noter la prestation (fond technique, forme, maîtrise)." },
    { term: "Retour constructif (feedback)", def: "Analyse argumentée des points forts et axes d'amélioration formulée à l'issue d'une évaluation." },
    { term: "Attestation HACKINÉTIQUE", def: "Document officiel délivré par CJEPE-BENIN certifiant la validation des compétences du programme de 24 semaines." }
  ],
  lesson: [
    { heading: "Structurer une présentation de soutenance efficace", html: "<p>Une présentation de 15 à 20 minutes suit généralement une structure éprouvée : <strong>contexte et objectifs</strong> (2 min), <strong>démarche méthodologique</strong> (5 min), <strong>démonstration technique</strong> (5-7 min), <strong>résultats et recommandations</strong> (3 min), puis <strong>conclusion et retour d'expérience</strong> (2 min). Chaque slide doit porter une seule idée forte ; les détails techniques exhaustifs restent dans le rapport écrit, pas dans les slides.</p>" },
    { heading: "Anticiper et répondre aux questions du jury", html: "<p>Les questions de jury portent typiquement sur trois axes : la <strong>justification des choix techniques</strong> (« pourquoi Snort plutôt qu'un autre IDS ? »), les <strong>limites du travail réalisé</strong> (« qu'auriez-vous fait avec plus de temps ? ») et la <strong>compréhension conceptuelle</strong> au-delà de l'exécution (« que se passerait-il si l'attaquant chiffrait son trafic ? »). Une bonne réponse reconnaît honnêtement les limites plutôt que de les dissimuler — un candidat qui admet une limite argumentée inspire davantage confiance qu'un candidat qui prétend à la perfection.</p>" },
    { heading: "Exploiter le retour constructif du jury", html: "<p>Le feedback du jury doit être noté et analysé, pas seulement écouté. Exemple de grille d'auto-évaluation post-soutenance :</p><pre><code>Grille d'auto-évaluation post-soutenance\n--------------------------------------\n[ ] Clarté du contexte et des objectifs présentés\n[ ] Rigueur de la démarche méthodologique (PTES respecté)\n[ ] Fiabilité de la démonstration technique\n[ ] Pertinence des recommandations formulées\n[ ] Qualité des réponses aux questions techniques\n[ ] Gestion du temps de présentation</code></pre><p>Ce type de grille, utilisée également en amont comme outil de répétition, permet d'objectiver sa propre progression.</p>" },
    { heading: "Synthèse transversale des 24 semaines du programme", html: "<p>Le parcours HACKINÉTIQUE relie quatre grandes compétences professionnelles : la maîtrise d'un environnement technique (Phase 1), la capacité à identifier et exploiter des vulnérabilités web et réseau dans un cadre légal (Phase 2 et 3), et la capacité à détecter, investiguer et défendre un système d'information (Phase 4). Cette boucle complète attaque-défense-audit-documentation est précisément ce qu'attendent les référentiels professionnels comme le NIST CSF (couvrant Identify, Protect, Detect, Respond, Recover) et les certifications CompTIA (Security+, PenTest+, CySA+).</p>" },
    { heading: "Clôture officielle et remise de l'attestation", html: "<p>La remise de l'attestation HACKINÉTIQUE marque la fin formelle du programme, mais aussi le début d'un parcours professionnel continu : veille technique (CVE, MITRE ATT&CK), pratique régulière (CTF, plateformes de labs), et poursuite éventuelle vers des certifications reconnues (CompTIA Security+/PenTest+/CySA+, eJPT, OSCP). L'éthique professionnelle — autorisation écrite systématique, respect du périmètre, confidentialité des données clients — reste le socle non négociable de toute pratique future du métier.</p>" }
  ],
  standards: ["NIST Cybersecurity Framework — synthèse des cinq fonctions (Identify, Protect, Detect, Respond, Recover)", "CompTIA Security+ / PenTest+ / CySA+ — référentiels de certification professionnelle de suite de parcours", "PTES — Penetration Testing Execution Standard (rappel de la structure globale du métier)"],
  steps: [
    { text: "Présenter le projet final devant le jury.", color: "green" },
    { text: "Répondre aux questions techniques et méthodologiques du jury.", color: "green" },
    { text: "Recevoir et analyser les retours constructifs du jury.", color: "green" },
    { text: "Valider l'ensemble des compétences du programme.", color: "green" },
    { text: "Recevoir l'attestation officielle HACKINÉTIQUE.", color: "green" },
    { text: "Livrable : Attestation HACKINÉTIQUE.", color: "red" }
  ],
  deliverable: "Une soutenance réalisée devant jury avec démonstration technique fonctionnelle, une grille d'auto-évaluation complétée à partir du retour du jury, et l'obtention de l'attestation HACKINÉTIQUE.",
  tp: {
    title: "TP S24 — Répétition générale et simulation de soutenance",
    objectif: "Répéter la présentation du projet final dans des conditions proches du réel, s'auto-évaluer avec une grille objective, et ajuster la prestation avant la soutenance officielle.",
    duree: "2 à 3 heures",
    materiel: ["Support de présentation finalisé (slides ou document)", "Environnement de démonstration du projet final opérationnel", "Grille d'auto-évaluation post-soutenance", "Un pair ou un mentor pour jouer le rôle du jury (facultatif mais recommandé)"],
    consignes: [
      "Chronométrer une répétition complète de la présentation (contexte, démarche, démonstration, résultats, conclusion).",
      "Exécuter la démonstration technique en conditions réelles pour vérifier sa fiabilité, et préparer une capture vidéo de secours.",
      "Lister par écrit cinq questions probables du jury et préparer une réponse argumentée à chacune.",
      "Faire rejouer la soutenance devant un pair ou mentor jouant le rôle du jury, si possible.",
      "Compléter la grille d'auto-évaluation immédiatement après la répétition, sans complaisance.",
      "Identifier les deux ou trois points faibles prioritaires et les retravailler avant la soutenance officielle.",
      "Vérifier l'ensemble des livrables du dossier de projet final (rapport, documentation, support) avant le jour J."
    ],
    livrable: "Grille d'auto-évaluation complétée + liste des questions anticipées avec réponses préparées + support de présentation finalisé.",
    criteres: ["Présentation respectant le minutage cible", "Démonstration technique fiable ou solution de secours prête", "Grille d'auto-évaluation complétée avec honnêteté", "Réponses préparées aux questions techniques anticipées"]
  },
  quiz: [
    { q: "Quelle fonction du NIST Cybersecurity Framework couvre la mise en place d'un SIEM et d'un IDS comme Snort ?", options: ["Identify", "Protect", "Detect", "Recover"], correct: 2, explanation: "La fonction Detect (DE) du NIST CSF couvre la surveillance continue et les mécanismes de détection tels que le SIEM (S19) et l'IDS Snort (S20)." },
    { q: "Quelle norme encadre spécifiquement la préservation des preuves numériques lors d'une investigation forensique ?", options: ["ISO/IEC 27001", "ISO/IEC 27037", "PTES", "CVSS"], correct: 1, explanation: "ISO/IEC 27037, vue en semaine 21, définit les lignes directrices d'identification, de collecte et de préservation des preuves numériques." },
    { q: "Sur quel standard s'appuie la structuration d'un rapport d'audit de sécurité professionnel étudiée en semaine 22 ?", options: ["MITRE ATT&CK", "PTES — Penetration Testing Execution Standard", "OSI", "RFC 1918"], correct: 1, explanation: "Le PTES structure l'ensemble d'un audit en sept phases, de la préparation jusqu'au rapport final, socle méthodologique du métier d'auditeur." },
    { q: "Quelle attitude est recommandée face à une question du jury portant sur une limite réelle du projet final ?", options: ["Nier la limite et changer de sujet", "Reconnaître honnêtement la limite et l'argumenter", "Refuser de répondre", "Rejeter la responsabilité sur le matériel utilisé"], correct: 1, explanation: "Reconnaître une limite avec un argumentaire solide démontre une compréhension mature du sujet et inspire davantage confiance qu'une posture défensive." },
    { q: "Quel principe reste le socle non négociable de toute pratique professionnelle après l'obtention de l'attestation HACKINÉTIQUE ?", options: ["L'usage exclusif d'outils gratuits", "L'autorisation écrite systématique et le respect strict du périmètre autorisé", "Le travail en solitaire uniquement", "L'absence de documentation pour aller plus vite"], correct: 1, explanation: "Quel que soit l'outil ou la mission, l'autorisation écrite préalable et le respect du périmètre défini restent la ligne rouge légale et éthique de toute activité de sécurité offensive ou défensive." }
  ]
}
];
