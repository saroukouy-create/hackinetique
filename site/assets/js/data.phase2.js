// PHASE 2 — RÉSEAUX & SYSTÈMES (S7 à S12)
const PHASE2 = [
{
  id: "S7", week: 7, phase: 2,
  title: "Modèle OSI et TCP/IP",
  level: "intermediaire",
  duration: "Semaine 7 · ~6h",
  intro: "Comprendre un réseau, c'est d'abord comprendre comment les données voyagent d'une machine à une autre. Cette semaine ouvre la Phase 2 avec les deux modèles théoriques utilisés par tous les professionnels du réseau et de la cybersécurité : le modèle OSI (ISO/IEC 7498-1) et le modèle TCP/IP. Sans ces fondations, impossible de lire une capture Wireshark, de configurer un pare-feu ou de comprendre une attaque réseau.",
  objectives: [
    "Identifier et décrire le rôle des 7 couches du modèle OSI.",
    "Comparer le modèle OSI et le modèle TCP/IP en 4 couches.",
    "Calculer une adresse IP, un masque de sous-réseau et une plage d'adresses utilisables.",
    "Expliquer le principe d'encapsulation et de décapsulation des données.",
    "Associer un protocole ou un équipement réseau à sa couche OSI correspondante."
  ],
  definition: "Les 7 couches OSI (Physique, Liaison, Réseau, Transport, Session, Présentation, Application). Adressage IP, sous-réseaux, masques. Encapsulation des données à travers les couches.",
  analogy: { title: "📦 Le modèle OSI comme un système postal", text: "Une lettre passe par plusieurs étapes indépendantes : rédaction du message, mise sous enveloppe, adresse postale, tri au centre de distribution, transport physique. Chaque étape ignore le contenu des autres — le facteur n'a pas besoin de lire la lettre pour la livrer. Le modèle OSI fonctionne pareil : chaque couche ajoute son enveloppe (en-tête) sans se soucier du contenu des couches supérieures." },
  keyTerms: [
    { term: "OSI", def: "Open Systems Interconnection : modèle de référence en 7 couches normalisé par l'ISO/IEC 7498-1, décrivant les fonctions nécessaires à une communication réseau." },
    { term: "TCP/IP", def: "Suite de protocoles à 4 couches (Accès réseau, Internet, Transport, Application) qui est réellement implémentée sur Internet." },
    { term: "Encapsulation", def: "Processus d'ajout successif d'en-têtes à chaque couche lorsque les données descendent de l'application vers le support physique." },
    { term: "Masque de sous-réseau", def: "Valeur binaire de 32 bits qui distingue la partie réseau de la partie hôte d'une adresse IPv4." },
    { term: "CIDR", def: "Classless Inter-Domain Routing : notation d'adressage (ex. /24) indiquant le nombre de bits réservés à la partie réseau." }
  ],
  lesson: [
    { heading: "Pourquoi un modèle en couches ?", html: "<p>Avant les modèles normalisés, chaque constructeur développait ses propres protocoles incompatibles entre eux. L'ISO a publié en 1984 le modèle <strong>OSI (ISO/IEC 7498-1)</strong> pour standardiser la façon de penser un réseau : chaque couche a une responsabilité précise et communique uniquement avec la couche directement au-dessus et en dessous d'elle. Ce découpage facilite le diagnostic de panne, la conception d'équipements et la formation des professionnels.</p>" },
    { heading: "Les 7 couches OSI en détail", html: "<ul><li><strong>Couche 7 — Application</strong> : interface avec l'utilisateur (HTTP, DNS, FTP, SMTP).</li><li><strong>Couche 6 — Présentation</strong> : mise en forme, chiffrement, compression des données (SSL/TLS, JPEG).</li><li><strong>Couche 5 — Session</strong> : ouverture, maintien et fermeture des sessions de communication.</li><li><strong>Couche 4 — Transport</strong> : fiabilité du transfert, segmentation (TCP, UDP).</li><li><strong>Couche 3 — Réseau</strong> : adressage logique et routage (IP, ICMP).</li><li><strong>Couche 2 — Liaison de données</strong> : adressage physique et trames (Ethernet, MAC, switchs).</li><li><strong>Couche 1 — Physique</strong> : transmission des bits sur le support (câble, fibre, Wi-Fi).</li></ul><p>Un moyen mnémotechnique classique en français : <em>« Après Plusieurs Semaines Toujours Rien À Prévoir »</em> (Application, Présentation, Session, Transport, Réseau, Liaison, Physique en partant du haut).</p>" },
    { heading: "Le modèle TCP/IP : la version pratique", html: "<p>Le modèle réellement utilisé sur Internet est plus simple, en 4 couches, décrit historiquement dans la RFC 1122 :</p><ul><li><strong>Application</strong> — regroupe les couches OSI 5, 6 et 7 (HTTP, DNS, SSH...).</li><li><strong>Transport</strong> — correspond à la couche 4 OSI (TCP, UDP).</li><li><strong>Internet</strong> — correspond à la couche 3 OSI (IP, ICMP, routage).</li><li><strong>Accès réseau</strong> — regroupe les couches OSI 1 et 2 (Ethernet, Wi-Fi, ARP).</li></ul><p>OSI reste un outil pédagogique et de diagnostic ; TCP/IP est l'implémentation réellement déployée.</p>" },
    { heading: "Adressage IP et sous-réseaux", html: "<p>Une adresse IPv4 s'écrit sur 32 bits, répartis en 4 octets (ex. <code>192.168.1.10</code>). Le masque de sous-réseau détermine quelle portion identifie le réseau et quelle portion identifie l'hôte.</p><pre><code>Adresse   : 192.168.1.10\nMasque    : 255.255.255.0  (soit /24)\nRéseau    : 192.168.1.0\nBroadcast : 192.168.1.255\nHôtes utilisables : 192.168.1.1 à 192.168.1.254 (254 hôtes)</code></pre><p>Formule à retenir : le nombre d'hôtes utilisables sur un sous-réseau se calcule avec <code>2^(32-préfixe) - 2</code> (on retire l'adresse réseau et l'adresse de broadcast).</p>" },
    { heading: "Encapsulation et décapsulation", html: "<p>Quand une application envoie des données, chaque couche descendante ajoute son propre en-tête : les données deviennent un <strong>segment</strong> (couche Transport, ajout des ports), puis un <strong>paquet</strong> (couche Réseau, ajout des adresses IP), puis une <strong>trame</strong> (couche Liaison, ajout des adresses MAC), avant d'être transmises sous forme de <strong>bits</strong>. À la réception, le processus inverse — la décapsulation — retire chaque en-tête couche par couche jusqu'à restituer les données originales à l'application.</p>" }
  ],
  standards: ["ISO/IEC 7498-1 — Modèle de référence OSI", "RFC 791 — Internet Protocol (IPv4)", "RFC 1122 — Requirements for Internet Hosts (modèle TCP/IP en 4 couches)", "CompTIA Network+ — Domaine 1.0 : Networking Concepts"],
  steps: [
    { text: "Découvrir les 7 couches du modèle OSI et leur rôle respectif.", color: "blue" },
    { text: "Comparer le modèle OSI avec le modèle TCP/IP en 4 couches.", color: "orange" },
    { text: "Calculer des adresses IP, des masques de sous-réseau et des plages d'hôtes.", color: "blue" },
    { text: "Comprendre le principe d'encapsulation/décapsulation des données.", color: "orange" },
    { text: "Livrable : schéma commenté du modèle OSI/TCP-IP avec un exemple d'encapsulation.", color: "red" }
  ],
  deliverable: "Un schéma commenté (papier ou logiciel) représentant les 7 couches OSI en regard des 4 couches TCP/IP, accompagné d'un exemple chiffré d'encapsulation d'une requête HTTP et d'un calcul de sous-réseau complet.",
  tp: {
    title: "TP S7 — Modéliser une communication réseau et calculer un sous-réseau",
    objectif: "Manipuler concrètement l'encapsulation des données et l'adressage IP pour ancrer la théorie des couches OSI/TCP-IP.",
    duree: "60–90 minutes",
    materiel: ["Feuille de calcul ou éditeur de texte", "Calculatrice binaire (ou calcul manuel)", "Un ordinateur avec accès à un terminal (ping, ipconfig/ifconfig)"],
    consignes: [
      "Dessiner un schéma des 7 couches OSI avec, pour chacune, un protocole ou équipement représentatif.",
      "Faire correspondre chaque couche OSI à sa couche TCP/IP équivalente sur le même schéma.",
      "Pour l'adresse 172.16.20.130 avec un masque /26, calculer : adresse réseau, adresse de broadcast, plage d'hôtes utilisables et nombre total d'hôtes.",
      "Sur votre machine, exécuter la commande d'affichage de configuration IP (`ipconfig` sous Windows ou `ip a` sous Linux) et identifier votre propre adresse IP, masque et passerelle.",
      "Décrire par écrit, étape par étape, l'encapsulation d'une requête HTTP depuis le navigateur jusqu'au câble réseau (couche par couche).",
      "Vérifier votre calcul de sous-réseau avec un calculateur en ligne ou un script et corriger si nécessaire.",
      "Produire le livrable final : schéma + calcul de sous-réseau + description de l'encapsulation."
    ],
    livrable: "Un document (PDF ou image) contenant le schéma OSI/TCP-IP commenté, le calcul de sous-réseau détaillé et la description de l'encapsulation d'une requête HTTP.",
    criteres: ["Les 7 couches OSI sont correctement nommées et associées à un exemple", "Le calcul de sous-réseau (réseau, broadcast, plage, nombre d'hôtes) est exact", "L'encapsulation est décrite dans le bon ordre (Application → Transport → Réseau → Liaison → Physique)"]
  },
  quiz: [
    { q: "Combien de couches compte le modèle OSI défini par l'ISO/IEC 7498-1 ?", options: ["4", "5", "7", "8"], correct: 2, explanation: "Le modèle OSI comporte exactement 7 couches, de la couche Physique (1) à la couche Application (7)." },
    { q: "À quelle couche OSI appartient l'adressage IP et le routage ?", options: ["Couche 2 — Liaison de données", "Couche 3 — Réseau", "Couche 4 — Transport", "Couche 7 — Application"], correct: 1, explanation: "La couche 3 (Réseau) gère l'adressage logique (IP) et le routage des paquets entre réseaux." },
    { q: "Pour l'adresse 192.168.1.10/24, quelle est l'adresse de broadcast ?", options: ["192.168.1.0", "192.168.1.1", "192.168.1.255", "192.168.255.255"], correct: 2, explanation: "Avec un masque /24 (255.255.255.0), les 8 derniers bits sont réservés aux hôtes ; l'adresse de broadcast est donc 192.168.1.255 (tous les bits hôtes à 1)." },
    { q: "Quel terme désigne les données de la couche Transport après ajout de son en-tête ?", options: ["Trame", "Paquet", "Segment", "Bit"], correct: 2, explanation: "À la couche Transport (TCP/UDP), l'unité de données s'appelle un segment. Elle devient un paquet à la couche Réseau, puis une trame à la couche Liaison." },
    { q: "Le modèle TCP/IP regroupe quelles couches OSI dans sa couche Application ?", options: ["Uniquement la couche 7", "Les couches 5, 6 et 7", "Les couches 1 et 2", "Les couches 3 et 4"], correct: 1, explanation: "La couche Application du modèle TCP/IP (RFC 1122) fusionne les couches Session, Présentation et Application du modèle OSI." }
  ]
},
{
  id: "S8", week: 8, phase: 2,
  title: "Protocoles fondamentaux",
  level: "intermediaire",
  duration: "Semaine 8 · ~6h",
  intro: "Un réseau ne fonctionne que grâce à des protocoles qui s'accordent sur des règles communes. Cette semaine explore les protocoles que vous croiserez à chaque audit ou incident : DNS, DHCP, HTTP/HTTPS et FTP, avant de passer à la pratique avec Wireshark, l'outil de capture de trames de référence utilisé par les analystes réseau et les pentesters.",
  objectives: [
    "Expliquer le fonctionnement du DNS et le processus de résolution de nom.",
    "Décrire le mécanisme DHCP d'attribution automatique d'adresse IP.",
    "Différencier HTTP et HTTPS ainsi que le rôle du chiffrement TLS.",
    "Installer Wireshark et capturer du trafic réseau réel.",
    "Associer les ports standards aux services qu'ils représentent."
  ],
  definition: "DNS, DHCP, HTTP/HTTPS, FTP. Capture et analyse de trames avec Wireshark. Correspondance entre ports et services.",
  analogy: { title: "📖 Le DNS comme un annuaire téléphonique", text: "Personne ne mémorise un numéro de téléphone pour chaque contact : on cherche un nom dans l'annuaire. Le DNS joue exactement ce rôle pour Internet : il traduit un nom de domaine humain (ex. cjepe-benin.org) en une adresse IP que les machines savent utiliser." },
  keyTerms: [
    { term: "DNS", def: "Domain Name System : système hiérarchique et distribué qui traduit les noms de domaine en adresses IP (RFC 1035)." },
    { term: "DHCP", def: "Dynamic Host Configuration Protocol : protocole qui attribue automatiquement une adresse IP et des paramètres réseau à un client (RFC 2131)." },
    { term: "TLS", def: "Transport Layer Security : protocole de chiffrement qui sécurise HTTP en HTTPS et protège la confidentialité des échanges." },
    { term: "Port", def: "Numéro (0-65535) qui identifie un service ou une application sur une machine, utilisé par TCP et UDP." },
    { term: "Wireshark", def: "Analyseur de protocole réseau open source permettant de capturer et d'inspecter le trafic trame par trame." }
  ],
  lesson: [
    { heading: "DNS : traduire les noms en adresses", html: "<p>Le DNS (RFC 1035) fonctionne de manière hiérarchique : un client interroge un résolveur, qui interroge à son tour un serveur racine, puis un serveur de la zone (.com, .org...), puis le serveur faisant autorité pour le domaine exact. Le résultat est mis en cache pour accélérer les requêtes futures.</p><pre><code>$ nslookup cjepe-benin.org\nServeur:  resolver1.opendns.com\nAddress:  208.67.222.222\n\nNom:    cjepe-benin.org\nAddress: 203.0.113.42</code></pre>" },
    { heading: "DHCP : le processus DORA", html: "<p>Le DHCP (RFC 2131) attribue dynamiquement une adresse IP en 4 étapes, résumées par l'acronyme <strong>DORA</strong> :</p><ul><li><strong>Discover</strong> — le client diffuse une requête pour trouver un serveur DHCP.</li><li><strong>Offer</strong> — le serveur propose une adresse IP disponible.</li><li><strong>Request</strong> — le client demande formellement cette adresse.</li><li><strong>Acknowledge</strong> — le serveur confirme l'attribution (bail).</li></ul>" },
    { heading: "HTTP, HTTPS et FTP", html: "<p><strong>HTTP</strong> (port 80) transmet les pages web en clair. <strong>HTTPS</strong> (port 443) ajoute une couche TLS qui chiffre et authentifie la communication — c'est aujourd'hui le standard exigé pour tout site professionnel. <strong>FTP</strong> (ports 20/21) transfère des fichiers, historiquement sans chiffrement, ce qui en fait un protocole à proscrire sur un réseau non maîtrisé au profit de SFTP ou FTPS.</p>" },
    { heading: "Installer et utiliser Wireshark", html: "<p>Téléchargez Wireshark depuis <code>wireshark.org</code> et installez-le avec les pilotes de capture (Npcap sous Windows). Lancez une capture sur votre interface active, puis filtrez le trafic pour ne garder que ce qui vous intéresse :</p><pre><code>dns\nhttp\nip.addr == 192.168.1.10\ntcp.port == 443</code></pre><p>Chaque trame capturée affiche les en-têtes de toutes les couches traversées — c'est la meilleure façon de visualiser concrètement l'encapsulation étudiée en semaine 7.</p>" },
    { heading: "Ports et services standards", html: "<table><tr><th>Port</th><th>Service</th></tr><tr><td>21</td><td>FTP</td></tr><tr><td>22</td><td>SSH</td></tr><tr><td>53</td><td>DNS</td></tr><tr><td>67/68</td><td>DHCP</td></tr><tr><td>80</td><td>HTTP</td></tr><tr><td>443</td><td>HTTPS</td></tr></table><p>Cette correspondance, maintenue officiellement par l'IANA, est la base de toute analyse de capture réseau ou de résultat de scan de ports.</p>" }
  ],
  standards: ["RFC 1035 — Domain Names, Implementation and Specification (DNS)", "RFC 2131 — Dynamic Host Configuration Protocol", "IANA Service Name and Transport Protocol Port Number Registry", "CompTIA Network+ — Domaine 1.4 : protocoles et ports courants"],
  steps: [
    { text: "Comprendre le fonctionnement du DNS et sa hiérarchie.", color: "blue" },
    { text: "Découvrir DHCP, HTTP/HTTPS et FTP.", color: "orange" },
    { text: "Installer Wireshark et ses pilotes de capture.", color: "blue" },
    { text: "Analyser des trames capturées en direct.", color: "orange" },
    { text: "Associer les ports standards aux services correspondants.", color: "blue" },
    { text: "Livrable : analyse Wireshark commentée d'une capture réelle.", color: "red" }
  ],
  deliverable: "Un rapport d'analyse Wireshark comprenant une capture de résolution DNS, une capture d'échange HTTP ou HTTPS, et un tableau des ports/services identifiés dans la capture, chaque trame étant commentée.",
  tp: {
    title: "TP S8 — Capture et analyse de trafic réseau avec Wireshark",
    objectif: "Observer concrètement les protocoles DNS, DHCP et HTTP/HTTPS en capturant du trafic réel et en identifiant les ports utilisés.",
    duree: "60–90 minutes",
    materiel: ["Wireshark installé", "Connexion réseau active", "Navigateur web"],
    consignes: [
      "Installer Wireshark et vérifier que la capture sur l'interface réseau active fonctionne.",
      "Lancer une capture, puis ouvrir un navigateur et visiter un site en HTTP et un site en HTTPS.",
      "Appliquer le filtre `dns` et identifier au moins une requête et une réponse DNS.",
      "Appliquer le filtre `http` puis `tls` pour comparer une communication en clair et une communication chiffrée.",
      "Repérer dans la capture au moins 4 ports différents et les associer à leur service (tableau IANA).",
      "Arrêter la capture et exporter les paquets pertinents dans un fichier .pcapng.",
      "Rédiger un compte-rendu expliquant, trame par trame, ce qui a été observé."
    ],
    livrable: "Fichier de capture .pcapng exporté accompagné d'un compte-rendu écrit identifiant les protocoles, ports et échanges observés.",
    criteres: ["Une résolution DNS complète est identifiée et expliquée", "La différence HTTP/HTTPS est illustrée par des captures concrètes", "Au moins 4 ports sont correctement associés à leur service", "Le compte-rendu est clair et structuré"]
  },
  quiz: [
    { q: "Quel port standard est utilisé par HTTPS ?", options: ["21", "80", "443", "3389"], correct: 2, explanation: "HTTPS utilise le port 443 par défaut, avec une session TLS qui chiffre les échanges HTTP." },
    { q: "Que signifie l'acronyme DORA dans le processus DHCP ?", options: ["Discover, Offer, Request, Acknowledge", "Data, Open, Read, Acquire", "Domain, Origin, Route, Address", "Discover, Open, Resolve, Assign"], correct: 0, explanation: "DORA résume les 4 échanges du DHCP : Discover (client), Offer (serveur), Request (client), Acknowledge (serveur), conformément à la RFC 2131." },
    { q: "Quel outil permet de capturer et d'analyser des trames réseau en temps réel ?", options: ["Nmap", "Wireshark", "Metasploit", "Nikto"], correct: 1, explanation: "Wireshark est l'analyseur de protocole de référence pour capturer et inspecter le trafic réseau trame par trame." },
    { q: "Quel protocole traduit un nom de domaine en adresse IP ?", options: ["DHCP", "FTP", "DNS", "HTTP"], correct: 2, explanation: "Le DNS (RFC 1035) assure la résolution de noms de domaine en adresses IP, de façon hiérarchique et distribuée." },
    { q: "Pourquoi FTP est-il considéré comme risqué sur un réseau non maîtrisé ?", options: ["Il est trop lent", "Il transmet les identifiants et données en clair", "Il n'existe plus depuis 2010", "Il utilise uniquement UDP"], correct: 1, explanation: "FTP transmet par défaut les identifiants et le contenu des fichiers sans chiffrement, exposant les données à une interception ; SFTP ou FTPS doivent être préférés." }
  ]
},
{
  id: "S9", week: 9, phase: 2,
  title: "Python pour la sécurité",
  level: "intermediaire",
  duration: "Semaine 9 · ~7h",
  intro: "Python est le langage de prédilection de la cybersécurité offensive et défensive : la majorité des outils d'automatisation, de scan et d'exploitation reposent dessus. Cette semaine construit les bases du langage puis les applique immédiatement à un cas concret : écrire un script de scan de ports fonctionnel.",
  objectives: [
    "Écrire des scripts Python en utilisant variables, types et opérateurs de base.",
    "Structurer un script avec des boucles et des conditions.",
    "Définir des fonctions réutilisables et manipuler des fichiers.",
    "Utiliser les bibliothèques requests et socket pour dialoguer avec le réseau.",
    "Développer un script Python de scan de ports simple."
  ],
  definition: "Syntaxe Python : variables, boucles, fonctions. Bibliothèques réseau requests et socket appliquées à des cas de sécurité.",
  analogy: { title: "🧰 Python comme boîte à outils modulable", text: "Un couteau suisse effectue quelques tâches ; Python, lui, s'adapte à presque tout grâce à ses bibliothèques : `requests` pour parler HTTP, `socket` pour dialoguer directement avec le réseau, `scapy` plus tard pour forger des paquets. Apprendre Python, c'est apprendre à assembler les bons outils pour chaque mission." },
  keyTerms: [
    { term: "Interpréteur", def: "Programme qui exécute le code Python ligne par ligne, sans étape de compilation séparée." },
    { term: "Bibliothèque (module)", def: "Ensemble de fonctions prêtes à l'emploi importées dans un script avec `import`." },
    { term: "Socket", def: "Interface de programmation bas niveau permettant à un script d'ouvrir une connexion réseau (bibliothèque `socket`)." },
    { term: "requests", def: "Bibliothèque Python tierce qui simplifie l'envoi de requêtes HTTP/HTTPS." },
    { term: "Exception", def: "Erreur interceptable à l'exécution (ex. `try/except`) permettant de gérer proprement les échecs de connexion." }
  ],
  lesson: [
    { heading: "Syntaxe de base : variables et types", html: "<p>Python utilise un typage dynamique : pas besoin de déclarer le type d'une variable.</p><pre><code>cible = \"192.168.1.10\"\nport = 22\nest_ouvert = True\nprint(f\"Scan de {cible} sur le port {port}\")</code></pre><p>Les types de base sont <code>str</code> (texte), <code>int</code> (entier), <code>float</code> (décimal), <code>bool</code> (booléen) et les structures <code>list</code> et <code>dict</code>.</p>" },
    { heading: "Boucles et conditions", html: "<p>Les boucles <code>for</code> et les conditions <code>if/elif/else</code> structurent la logique d'un script :</p><pre><code>ports = [21, 22, 80, 443]\nfor port in ports:\n    if port == 22:\n        print(\"Port SSH détecté\")\n    else:\n        print(f\"Port {port} à tester\")</code></pre>" },
    { heading: "Fonctions et fichiers", html: "<p>Une fonction encapsule une logique réutilisable. La gestion de fichiers avec <code>with open()</code> garantit une fermeture propre même en cas d'erreur :</p><pre><code>def enregistrer_resultat(port, statut):\n    with open(\"resultats.txt\", \"a\") as f:\n        f.write(f\"Port {port} : {statut}\\n\")\n\nenregistrer_resultat(22, \"ouvert\")</code></pre>" },
    { heading: "Bibliothèques requests et socket", html: "<p>La bibliothèque <code>requests</code> simplifie les échanges HTTP :</p><pre><code>import requests\nreponse = requests.get(\"https://example.com\")\nprint(reponse.status_code)</code></pre><p>La bibliothèque <code>socket</code>, native à Python, ouvre une connexion réseau brute — c'est elle qui sert de base à un scanner de ports :</p><pre><code>import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.settimeout(1)\nresultat = s.connect_ex((\"192.168.1.10\", 22))\nprint(\"ouvert\" if resultat == 0 else \"fermé\")\ns.close()</code></pre>" },
    { heading: "Assembler un scanner de ports", html: "<p>En combinant boucle, fonction et <code>socket</code>, on obtient un scanner minimal :</p><pre><code>import socket\n\ndef scan_port(cible, port):\n    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    s.settimeout(0.5)\n    resultat = s.connect_ex((cible, port))\n    s.close()\n    return resultat == 0\n\ncible = \"192.168.1.10\"\nfor port in range(1, 1025):\n    if scan_port(cible, port):\n        print(f\"Port {port} ouvert\")</code></pre><p>Ce script illustre le principe même des outils comme Nmap, en version pédagogique et volontairement limitée.</p>" }
  ],
  standards: ["CompTIA Security+ — Domaine 4.4 : scripts d'automatisation de la sécurité", "NIST SP 800-115 — Technical Guide to Information Security Testing and Assessment (usage d'outils/scripts de reconnaissance)", "PEP 8 — Style Guide for Python Code"],
  steps: [
    { text: "Découvrir la syntaxe Python : variables, types, opérateurs.", color: "blue" },
    { text: "Structurer un script avec boucles et conditions.", color: "orange" },
    { text: "Écrire des fonctions et manipuler des fichiers.", color: "blue" },
    { text: "Utiliser les bibliothèques requests et socket pour dialoguer avec le réseau.", color: "orange" },
    { text: "Assembler un script de scan de ports fonctionnel.", color: "blue" },
    { text: "Livrable : script Python de scan de ports commenté et testé.", color: "red" }
  ],
  deliverable: "Un script Python fonctionnel de scan de ports (module socket), capable de tester une plage de ports sur une cible, d'afficher les ports ouverts et d'enregistrer les résultats dans un fichier texte, accompagné de commentaires explicatifs.",
  tp: {
    title: "TP S9 — Développer un scanner de ports en Python",
    objectif: "Consolider les bases Python en produisant un outil réseau fonctionnel, premier jalon avant les outils offensifs des phases suivantes.",
    duree: "90 minutes",
    materiel: ["Python 3 installé", "VS Code avec l'extension Python", "Une machine cible autorisée (VM locale ou localhost)"],
    consignes: [
      "Créer un fichier `scanner.py` dans un nouveau dossier de projet.",
      "Écrire une fonction `scan_port(cible, port)` utilisant le module `socket` et retournant `True` si le port est ouvert.",
      "Ajouter une boucle `for` qui teste une plage de ports (ex. 1 à 100) sur une cible autorisée (VM locale).",
      "Ajouter une gestion d'erreurs avec `try/except` pour éviter que le script ne plante sur une erreur réseau.",
      "Enregistrer les ports ouverts détectés dans un fichier `resultats.txt` via une fonction dédiée.",
      "Tester le script sur une VM locale dont vous êtes propriétaire et documenter les résultats obtenus.",
      "Ajouter des commentaires expliquant chaque bloc du script."
    ],
    livrable: "Fichier `scanner.py` fonctionnel, commenté, accompagné du fichier `resultats.txt` généré lors d'un test réel sur une cible autorisée.",
    criteres: ["Le script s'exécute sans erreur et détecte correctement au moins un port ouvert connu", "La gestion des exceptions est présente et pertinente", "Le code est commenté et respecte une structure lisible (PEP 8)", "Les résultats sont correctement enregistrés dans un fichier"]
  },
  quiz: [
    { q: "Quelle bibliothèque Python native permet d'ouvrir une connexion réseau bas niveau ?", options: ["requests", "socket", "os", "json"], correct: 1, explanation: "Le module `socket`, natif à Python, fournit les primitives pour ouvrir des connexions TCP/UDP, base de tout scanner de ports." },
    { q: "Que retourne `connect_ex()` lorsqu'un port est fermé (dans la majorité des cas) ?", options: ["0", "Une valeur différente de 0", "None", "Une exception systématique"], correct: 1, explanation: "`connect_ex()` retourne 0 en cas de connexion réussie (port ouvert) et un code d'erreur non nul sinon, ce qui évite de lever une exception à chaque tentative." },
    { q: "Quelle instruction permet de gérer proprement une erreur sans arrêter le script ?", options: ["if/else", "for/in", "try/except", "def/return"], correct: 2, explanation: "Le bloc `try/except` intercepte les exceptions à l'exécution, indispensable pour un script réseau confronté à des timeouts ou des refus de connexion." },
    { q: "À quoi sert principalement la bibliothèque `requests` ?", options: ["Chiffrer des fichiers", "Envoyer des requêtes HTTP/HTTPS simplement", "Gérer les threads", "Analyser des paquets binaires"], correct: 1, explanation: "`requests` est une bibliothèque tierce qui simplifie considérablement l'envoi de requêtes HTTP/HTTPS par rapport aux modules bas niveau." },
    { q: "Dans le scanner de ports de la leçon, à quoi sert `s.settimeout(0.5)` ?", options: ["À fermer le socket immédiatement", "À limiter le temps d'attente d'une réponse avant de considérer le port fermé", "À chiffrer la connexion", "À changer le port scanné"], correct: 1, explanation: "`settimeout()` définit une durée maximale d'attente pour la connexion, évitant que le scan ne reste bloqué indéfiniment sur un port qui ne répond pas." }
  ]
},
{
  id: "S10", week: 10, phase: 2,
  title: "Architecture réseau & simulation",
  level: "intermediaire",
  duration: "Semaine 10 · ~7h",
  intro: "Avant de sécuriser un réseau, il faut savoir le concevoir. Cette semaine passe de la théorie à la pratique via un simulateur (Cisco Packet Tracer ou GNS3) pour construire un plan d'adressage, déployer routeurs et switchs, et segmenter le trafic avec des VLAN — une compétence centrale en entreprise comme en environnement de test.",
  objectives: [
    "Concevoir un plan d'adressage IP cohérent pour un réseau multi-segments.",
    "Installer et prendre en main un simulateur réseau (Packet Tracer ou GNS3).",
    "Construire une topologie réseau avec routeurs, switchs et postes clients.",
    "Configurer des VLAN pour segmenter le trafic réseau.",
    "Tester la connectivité entre les segments simulés."
  ],
  definition: "Plan d'adressage réseau. Simulation avec Packet Tracer ou GNS3. Configuration de routeurs, switchs et VLAN.",
  analogy: { title: "🏢 Les VLAN comme des étages cloisonnés d'un immeuble", text: "Dans un immeuble de bureaux, chaque étage peut être cloisonné : le service comptabilité ne partage pas le même espace que le service commercial, même si tous utilisent le même bâtiment et les mêmes ascenseurs. Les VLAN (IEEE 802.1Q) fonctionnent ainsi : un même switch physique héberge plusieurs réseaux logiques totalement isolés les uns des autres." },
  keyTerms: [
    { term: "VLAN", def: "Virtual LAN : réseau local virtuel qui segmente logiquement un réseau physique unique, normalisé par IEEE 802.1Q." },
    { term: "Trunk", def: "Lien réseau transportant le trafic de plusieurs VLAN simultanément entre deux équipements, grâce à l'étiquetage 802.1Q." },
    { term: "Table de routage", def: "Table utilisée par un routeur pour déterminer le chemin à emprunter vers un réseau de destination." },
    { term: "Packet Tracer", def: "Simulateur réseau développé par Cisco, utilisé pour s'entraîner à la configuration d'équipements sans matériel physique." },
    { term: "GNS3", def: "Simulateur réseau open source capable d'émuler des images réelles d'équipements (routeurs, pare-feux) pour des scénarios avancés." }
  ],
  lesson: [
    { heading: "Concevoir un plan d'adressage", html: "<p>Avant toute configuration, on documente un plan d'adressage : combien de segments, combien d'hôtes par segment, quelle plage IP pour chacun. Exemple pour un petit réseau d'entreprise :</p><pre><code>VLAN 10 (Direction)    : 192.168.10.0/24\nVLAN 20 (Comptabilité) : 192.168.20.0/24\nVLAN 30 (Invités)      : 192.168.30.0/24</code></pre><p>Cette étape évite les conflits d'adresses et facilite l'application de règles de pare-feu cohérentes par segment, comme étudié en semaine 11.</p>" },
    { heading: "Installer un simulateur réseau", html: "<p>Cisco Packet Tracer est gratuit via l'inscription à la Networking Academy et suffit pour la plupart des scénarios pédagogiques. GNS3, plus avancé, permet d'émuler des images système réelles et convient aux scénarios de niveau supérieur. Installez l'un des deux et vérifiez que l'interface graphique (glisser-déposer d'équipements) fonctionne correctement.</p>" },
    { heading: "Construire une topologie", html: "<p>Une topologie simple associe un routeur, deux switchs et plusieurs postes clients. Chaque équipement reçoit une adresse IP conforme au plan d'adressage préparé, et chaque câble doit relier le bon type d'interface (cuivre droit entre switch et PC, croisé entre switchs si nécessaire selon l'équipement).</p>" },
    { heading: "Configurer des VLAN (IEEE 802.1Q)", html: "<p>Sur un switch Cisco (réel ou simulé), la création de VLAN suit une syntaxe standard :</p><pre><code>Switch> enable\nSwitch# configure terminal\nSwitch(config)# vlan 10\nSwitch(config-vlan)# name Direction\nSwitch(config-vlan)# exit\nSwitch(config)# interface fastEthernet 0/1\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 10</code></pre><p>Pour transporter plusieurs VLAN sur un même lien entre deux switchs, on configure un <strong>trunk</strong> avec encapsulation 802.1Q :</p><pre><code>Switch(config)# interface fastEthernet 0/24\nSwitch(config-if)# switchport mode trunk\nSwitch(config-if)# switchport trunk encapsulation dot1q</code></pre>" },
    { heading: "Tester la connectivité", html: "<p>Une fois la topologie configurée, on valide la connectivité avec les commandes standards :</p><pre><code>ping 192.168.10.1\ntracert 192.168.20.1   (Windows)\ntraceroute 192.168.20.1 (Linux/Cisco)</code></pre><p>Deux hôtes du même VLAN doivent communiquer directement ; deux hôtes de VLAN différents ne doivent communiquer qu'en passant par un routeur configuré pour le routage inter-VLAN (router-on-a-stick ou routage niveau 3).</p>" }
  ],
  standards: ["IEEE 802.1Q — Virtual Bridged Local Area Networks (VLAN)", "IEEE 802.3 — Ethernet", "CompTIA Network+ — Domaine 2.0 : Network Implementation"],
  steps: [
    { text: "Concevoir un plan d'adressage IP pour plusieurs segments réseau.", color: "blue" },
    { text: "Installer et prendre en main Packet Tracer ou GNS3.", color: "orange" },
    { text: "Simuler une topologie réseau avec routeurs, switchs et postes clients.", color: "blue" },
    { text: "Configurer des VLAN et un lien trunk 802.1Q.", color: "orange" },
    { text: "Tester la connectivité intra-VLAN et inter-VLAN.", color: "blue" },
    { text: "Livrable : schéma du réseau simulé avec configuration documentée.", color: "red" }
  ],
  deliverable: "Un fichier de projet Packet Tracer (ou GNS3) fonctionnel comportant au moins 2 VLAN, un routeur assurant le routage inter-VLAN, et un schéma documenté du plan d'adressage utilisé.",
  tp: {
    title: "TP S10 — Simuler un petit réseau segmenté par VLAN",
    objectif: "Construire, configurer et tester un réseau simulé multi-VLAN reproduisant un scénario d'entreprise réaliste.",
    duree: "90–120 minutes",
    materiel: ["Cisco Packet Tracer ou GNS3 installé", "Un plan d'adressage préparé", "Documentation officielle Cisco IOS (commandes de base)"],
    consignes: [
      "Rédiger le plan d'adressage pour 2 VLAN (ex. VLAN 10 Direction et VLAN 20 Comptabilité) avec leurs plages IP respectives.",
      "Placer dans le simulateur un routeur, un switch et 4 postes clients (2 par VLAN).",
      "Créer les 2 VLAN sur le switch et assigner chaque port d'accès au VLAN correspondant.",
      "Configurer les sous-interfaces du routeur (ou routage niveau 3) pour permettre la communication inter-VLAN.",
      "Attribuer les adresses IP à chaque poste selon le plan d'adressage.",
      "Tester avec `ping` la connectivité entre deux postes du même VLAN, puis entre deux postes de VLAN différents.",
      "Documenter la topologie finale et les résultats des tests de connectivité dans un schéma annoté."
    ],
    livrable: "Fichier de simulation (.pkt ou .gns3) accompagné d'un schéma annoté du réseau et d'un tableau des résultats de tests de connectivité (ping réussi/échoué).",
    criteres: ["Les 2 VLAN sont créés et correctement assignés aux ports", "Le routage inter-VLAN fonctionne (ping réussi entre VLAN différents via le routeur)", "Le plan d'adressage est cohérent et documenté", "Les tests de connectivité sont tracés et expliqués"]
  },
  quiz: [
    { q: "Quelle norme IEEE définit l'étiquetage des VLAN ?", options: ["802.3", "802.11", "802.1Q", "802.1X"], correct: 2, explanation: "IEEE 802.1Q est la norme qui définit le marquage (tagging) des trames Ethernet pour transporter plusieurs VLAN sur un même lien." },
    { q: "Que permet un lien trunk entre deux switchs ?", options: ["Doubler la vitesse du câble", "Transporter le trafic de plusieurs VLAN sur un seul lien physique", "Chiffrer automatiquement le trafic", "Supprimer le besoin d'adressage IP"], correct: 1, explanation: "Un trunk 802.1Q permet de faire transiter le trafic de plusieurs VLAN sur une seule liaison physique entre deux équipements réseau." },
    { q: "Deux postes appartenant à deux VLAN différents peuvent-ils communiquer directement sans équipement de couche 3 ?", options: ["Oui, toujours", "Non, un routage inter-VLAN est nécessaire", "Oui, mais uniquement en Wi-Fi", "Cela dépend uniquement du câble utilisé"], correct: 1, explanation: "Les VLAN isolent le trafic au niveau logique ; un équipement de couche 3 (routeur ou switch niveau 3) est nécessaire pour router le trafic entre deux VLAN distincts." },
    { q: "Quelle commande Cisco IOS crée un VLAN numéro 10 ?", options: ["vlan create 10", "switchport vlan 10", "vlan 10", "interface vlan10"], correct: 2, explanation: "En mode configuration globale, la commande `vlan 10` crée le VLAN et bascule vers le sous-mode de configuration VLAN où l'on peut lui donner un nom." },
    { q: "Pourquoi établir un plan d'adressage avant de construire une topologie réseau ?", options: ["Ce n'est pas nécessaire avec un simulateur", "Pour éviter les conflits d'adresses et faciliter les règles de sécurité", "Pour accélérer le débit réseau", "Uniquement pour respecter une obligation légale"], correct: 1, explanation: "Un plan d'adressage documenté évite les conflits d'IP, structure la segmentation logique et facilite l'application cohérente de règles de pare-feu par segment." }
  ]
},
{
  id: "S11", week: 11, phase: 2,
  title: "Pare-feu et sécurité système",
  level: "intermediaire",
  duration: "Semaine 11 · ~7h",
  intro: "Un réseau bien conçu doit aussi être filtré et durci. Cette semaine aborde le pare-feu Linux iptables et son interface simplifiée UFW, puis élargit la perspective au durcissement système (hardening) et à la gestion des mises à jour — des compétences directement alignées sur les recommandations du NIST SP 800-41 pour les pare-feux.",
  objectives: [
    "Expliquer l'architecture d'iptables : tables, chaînes et règles.",
    "Configurer des règles de filtrage iptables adaptées à un scénario donné.",
    "Utiliser UFW comme interface simplifiée de gestion du pare-feu.",
    "Appliquer des mesures de durcissement (hardening) sur un système Linux.",
    "Mettre en place une politique de gestion des mises à jour de sécurité."
  ],
  definition: "Règles de filtrage iptables. Durcissement (hardening) d'un système Linux. Gestion des mises à jour de sécurité.",
  analogy: { title: "🚪 Le pare-feu comme un agent de sécurité à l'entrée", text: "Un agent de sécurité filtre qui entre et qui sort d'un bâtiment selon une liste de règles précises : badge valide, liste d'invités, horaires autorisés. iptables joue exactement ce rôle pour un système Linux, en filtrant chaque paquet réseau selon des règles définies dans des chaînes (INPUT, OUTPUT, FORWARD)." },
  keyTerms: [
    { term: "iptables", def: "Outil de pare-feu Linux permettant de définir des règles de filtrage de paquets organisées en tables et en chaînes." },
    { term: "Chaîne", def: "Ensemble ordonné de règles appliquées à un type de trafic précis : INPUT (entrant), OUTPUT (sortant), FORWARD (transitant)." },
    { term: "UFW", def: "Uncomplicated Firewall : surcouche simplifiée d'iptables, pensée pour une configuration rapide et lisible." },
    { term: "Durcissement (hardening)", def: "Ensemble de mesures visant à réduire la surface d'attaque d'un système : désactivation de services inutiles, restriction des accès, mise à jour régulière." },
    { term: "Moindre privilège", def: "Principe de sécurité selon lequel chaque compte ou service ne dispose que des droits strictement nécessaires à sa fonction." }
  ],
  lesson: [
    { heading: "Comprendre iptables : tables et chaînes", html: "<p>iptables organise le filtrage réseau Linux en <strong>tables</strong> (filter, nat, mangle...) elles-mêmes divisées en <strong>chaînes</strong> : <code>INPUT</code> pour le trafic entrant destiné à la machine, <code>OUTPUT</code> pour le trafic sortant, <code>FORWARD</code> pour le trafic transitant (routage). Chaque chaîne contient une liste ordonnée de règles évaluées séquentiellement jusqu'à la première correspondance.</p>" },
    { heading: "Écrire des règles iptables", html: "<p>Une politique de pare-feu robuste suit le principe du <em>deny by default</em> : tout est bloqué sauf ce qui est explicitement autorisé.</p><pre><code># Politique par défaut : tout bloquer\nsudo iptables -P INPUT DROP\nsudo iptables -P FORWARD DROP\n\n# Autoriser le trafic déjà établi\nsudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n\n# Autoriser SSH (port 22) et HTTPS (port 443)\nsudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT\nsudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT\n\n# Autoriser le loopback\nsudo iptables -A INPUT -i lo -j ACCEPT</code></pre><p>Ce jeu de règles, recommandé par le NIST SP 800-41, illustre une approche de filtrage restrictive typique d'un serveur exposé.</p>" },
    { heading: "Simplifier avec UFW", html: "<p>UFW (Uncomplicated Firewall) traduit ces principes en commandes plus lisibles, idéales pour un usage courant :</p><pre><code>sudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow 22/tcp\nsudo ufw allow 443/tcp\nsudo ufw enable\nsudo ufw status verbose</code></pre>" },
    { heading: "Durcir un système Linux", html: "<p>Le pare-feu n'est qu'une des couches de défense. Un durcissement complet inclut :</p><ul><li>Désactiver la connexion SSH en root (<code>PermitRootLogin no</code> dans <code>/etc/ssh/sshd_config</code>).</li><li>Supprimer ou désactiver les services et paquets inutilisés.</li><li>Appliquer le principe du moindre privilège sur les comptes utilisateurs (<code>sudo</code> ciblé plutôt que root permanent).</li><li>Mettre en place <code>fail2ban</code> pour bannir automatiquement les tentatives de connexion abusives.</li></ul>" },
    { heading: "Gérer les mises à jour de sécurité", html: "<p>La majorité des compromissions exploitent des vulnérabilités déjà corrigées par un correctif non appliqué. Une politique de mise à jour rigoureuse combine vérification régulière et application planifiée :</p><pre><code>sudo apt update && sudo apt upgrade -y\nsudo apt list --upgradable\n\n# Activer les mises à jour de sécurité automatiques (Debian/Ubuntu)\nsudo apt install unattended-upgrades\nsudo dpkg-reconfigure unattended-upgrades</code></pre>" }
  ],
  standards: ["NIST SP 800-41 Rev.1 — Guidelines on Firewalls and Firewall Policy", "CIS Benchmarks — Distribution Independent Linux", "CompTIA Security+ — Domaine 3.0 : Security Architecture"],
  steps: [
    { text: "Comprendre l'architecture d'iptables : tables et chaînes.", color: "blue" },
    { text: "Configurer des règles de filtrage restrictives (deny by default).", color: "orange" },
    { text: "Utiliser UFW comme interface simplifiée de pare-feu.", color: "blue" },
    { text: "Durcir un système Linux : SSH, comptes, services inutiles.", color: "orange" },
    { text: "Mettre en place une gestion planifiée des mises à jour de sécurité.", color: "blue" },
    { text: "Livrable : politique de pare-feu documentée et appliquée.", color: "red" }
  ],
  deliverable: "Une politique de pare-feu documentée (règles iptables ou UFW appliquées et testées sur une VM), accompagnée d'une checklist de durcissement Linux réalisée et d'une procédure de gestion des mises à jour.",
  tp: {
    title: "TP S11 — Configurer un pare-feu et durcir un système Linux",
    objectif: "Mettre en place une politique de filtrage restrictive et appliquer des mesures de durcissement concrètes sur une machine Linux.",
    duree: "90 minutes",
    materiel: ["Une VM Linux (Ubuntu/Debian recommandé)", "Accès sudo", "Client SSH pour tester la connectivité"],
    consignes: [
      "Sur la VM, définir une politique par défaut restrictive avec UFW (`deny incoming`, `allow outgoing`).",
      "Autoriser explicitement les ports strictement nécessaires (ex. 22/tcp pour SSH).",
      "Vérifier l'application des règles avec `sudo ufw status verbose` et tester une connexion SSH depuis une autre machine.",
      "Désactiver la connexion SSH root directe en modifiant `/etc/ssh/sshd_config` (`PermitRootLogin no`) et redémarrer le service SSH.",
      "Lister les services actifs (`systemctl list-units --type=service`) et désactiver au moins un service inutile.",
      "Mettre à jour le système (`apt update && apt upgrade`) et vérifier les mises à jour de sécurité disponibles.",
      "Rédiger un document de politique de pare-feu résumant les règles appliquées et leur justification."
    ],
    livrable: "Document de politique de pare-feu (règles UFW/iptables + justification) et checklist de durcissement complétée, avec captures d'écran des commandes exécutées.",
    criteres: ["La politique par défaut est restrictive (deny by default) et documentée", "Les règles autorisées sont justifiées par un besoin réel", "Au moins 2 mesures de durcissement (SSH, service désactivé, mises à jour) sont appliquées et vérifiées", "Le document est clair et réutilisable comme référence"]
  },
  quiz: [
    { q: "Quelle chaîne iptables filtre le trafic entrant destiné à la machine locale ?", options: ["OUTPUT", "FORWARD", "INPUT", "NAT"], correct: 2, explanation: "La chaîne INPUT s'applique au trafic entrant dont la destination finale est la machine elle-même, contrairement à FORWARD qui concerne le trafic routé à travers elle." },
    { q: "Que signifie le principe « deny by default » appliqué à un pare-feu ?", options: ["Bloquer uniquement les IP connues comme malveillantes", "Tout bloquer par défaut et n'autoriser explicitement que ce qui est nécessaire", "Autoriser tout le trafic sortant sans restriction", "Désactiver le pare-feu en dehors des heures de bureau"], correct: 1, explanation: "Le principe 'deny by default', recommandé par le NIST SP 800-41, consiste à bloquer tout le trafic par défaut et n'autoriser explicitement que les flux nécessaires, réduisant ainsi la surface d'attaque." },
    { q: "Quel outil constitue une surcouche simplifiée d'iptables sous Ubuntu/Debian ?", options: ["fail2ban", "UFW", "SELinux", "AppArmor"], correct: 1, explanation: "UFW (Uncomplicated Firewall) simplifie la syntaxe de configuration du pare-feu tout en s'appuyant sur iptables/nftables en arrière-plan." },
    { q: "Pourquoi désactiver la connexion SSH directe en tant que root est-il recommandé ?", options: ["Cela accélère la connexion SSH", "Cela applique le principe du moindre privilège et limite l'impact d'un compte compromis", "Ce n'est utile que pour les serveurs Windows", "Cela n'a aucun effet sur la sécurité"], correct: 1, explanation: "Interdire la connexion root directe force l'utilisation d'un compte nominal avec élévation de privilèges tracée, limitant l'impact d'une compromission et respectant le principe du moindre privilège." },
    { q: "Pourquoi la gestion régulière des mises à jour est-elle une mesure de sécurité critique ?", options: ["Elle améliore uniquement l'esthétique de l'interface", "La majorité des compromissions exploitent des vulnérabilités déjà corrigées par un correctif", "Elle remplace le besoin d'un pare-feu", "Elle n'est nécessaire qu'une fois par an"], correct: 1, explanation: "De nombreuses attaques exploitent des failles pour lesquelles un correctif existe déjà ; une politique de mise à jour régulière ferme ces fenêtres d'exposition avant qu'elles ne soient exploitées." }
  ]
},
{
  id: "S12", week: 12, phase: 2,
  title: "Projet de phase 2",
  level: "intermediaire",
  duration: "Semaine 12 · ~8h",
  intro: "Cette semaine clôture la Phase 2 par un projet intégrateur : concevoir, configurer, tester et documenter un mini réseau sécurisé qui mobilise l'ensemble des compétences acquises depuis la semaine 7 — adressage, protocoles, segmentation VLAN, scripting Python et filtrage pare-feu. C'est aussi un exercice de documentation technique, compétence attendue de tout professionnel de la cybersécurité.",
  objectives: [
    "Concevoir l'architecture complète d'un mini réseau sécurisé.",
    "Configurer les machines, VLAN et règles de pare-feu du réseau conçu.",
    "Tester la connectivité et vérifier l'efficacité du filtrage mis en place.",
    "Produire une documentation technique complète et professionnelle.",
    "Présenter et justifier les choix d'architecture retenus."
  ],
  definition: "Conception d'un mini réseau sécurisé. Tests de connectivité et de filtrage. Rédaction d'une documentation technique complète.",
  analogy: { title: "🏗️ Le projet comme la remise des clés d'un chantier", text: "Un architecte ne livre pas seulement un bâtiment : il livre aussi les plans, les certificats de conformité et le dossier technique. Ce projet de fin de phase reproduit cette exigence professionnelle : le réseau fonctionnel ne suffit pas, il doit être accompagné d'une documentation qui permettrait à un autre technicien de le comprendre et de le maintenir." },
  keyTerms: [
    { term: "Architecture réseau", def: "Organisation logique et physique des équipements, segments et flux d'un réseau." },
    { term: "Segmentation", def: "Division d'un réseau en zones isolées (VLAN, sous-réseaux) afin de limiter la propagation d'une compromission." },
    { term: "Politique de sécurité", def: "Ensemble documenté des règles régissant les accès, le filtrage et les usages autorisés sur un système ou un réseau." },
    { term: "Dossier technique", def: "Document consolidant schémas, configurations et résultats de tests, destiné à assurer la traçabilité et la maintenabilité d'un projet." }
  ],
  lesson: [
    { heading: "Méthodologie de conduite de projet réseau", html: "<p>Un projet réseau professionnel suit toujours la même trame : <strong>analyse du besoin</strong>, <strong>conception</strong> (schéma, plan d'adressage), <strong>implémentation</strong> (configuration), <strong>tests</strong> (validation fonctionnelle et sécuritaire), puis <strong>documentation</strong>. Sauter une étape — en particulier les tests ou la documentation — est la cause la plus fréquente d'incidents en production.</p>" },
    { heading: "Concevoir l'architecture du mini réseau", html: "<p>Le scénario du projet reprend les briques des semaines précédentes : au moins 2 VLAN (ex. Administration et Invités), un routeur assurant le routage inter-VLAN, et un pare-feu appliquant une politique restrictive par segment.</p><pre><code>VLAN 10 (Admin)   : 10.0.10.0/24 — accès complet\nVLAN 20 (Invités) : 10.0.20.0/24 — accès Internet uniquement, pas d'accès à VLAN 10</code></pre>" },
    { heading: "Configurer et sécuriser les machines", html: "<p>Chaque machine du réseau simulé doit recevoir son adressage IP conforme au plan, et les règles de pare-feu (iptables/UFW, semaine 11) doivent traduire la politique voulue : le VLAN Invités ne doit jamais pouvoir initier de connexion vers le VLAN Admin, alors que l'inverse peut être autorisé pour l'administration.</p><pre><code># Sur le routeur/pare-feu : bloquer Invités → Admin\nsudo iptables -A FORWARD -s 10.0.20.0/24 -d 10.0.10.0/24 -j DROP</code></pre>" },
    { heading: "Tester connectivité et filtrage", html: "<p>La validation doit couvrir deux angles : la connectivité attendue (ping entre hôtes autorisés, résolution DNS, accès Internet) et le filtrage attendu (tentative bloquée entre VLAN Invités et VLAN Admin, port fermé sur un scan Nmap ou avec le script Python de la semaine 9). Chaque test doit être tracé avec sa commande, son résultat attendu et son résultat obtenu.</p>" },
    { heading: "Rédiger la documentation technique", html: "<p>Un dossier technique complet comprend généralement : un schéma d'architecture, le plan d'adressage, la liste des règles de pare-feu avec justification, les résultats des tests de connectivité/filtrage, et une synthèse des choix de sécurité retenus. Cette structure s'inspire des bonnes pratiques de documentation de contrôles réseau recommandées par des référentiels comme l'ISO/IEC 27001 (Annexe A, contrôles réseau) et le NIST SP 800-41.</p>" }
  ],
  standards: ["NIST SP 800-41 Rev.1 — Guidelines on Firewalls and Firewall Policy", "ISO/IEC 27001:2022 — Annexe A, contrôles de sécurité réseau (A.8.20 à A.8.22)", "CompTIA Network+ / Security+ — Documentation et gestion de la configuration réseau"],
  steps: [
    { text: "Concevoir l'architecture d'un mini réseau sécurisé (schéma + plan d'adressage).", color: "blue" },
    { text: "Configurer les machines, VLAN et règles de pare-feu correspondantes.", color: "orange" },
    { text: "Tester la connectivité autorisée et vérifier l'efficacité du filtrage.", color: "blue" },
    { text: "Documenter intégralement l'architecture et les résultats de tests.", color: "orange" },
    { text: "Livrable : dossier technique complet du mini réseau sécurisé.", color: "red" }
  ],
  deliverable: "Un dossier technique complet regroupant le schéma d'architecture, le plan d'adressage, les règles de pare-feu justifiées, les résultats documentés des tests de connectivité et de filtrage, et une synthèse des choix de sécurité — ce dossier clôt la Phase 2 et sert de référence pour la Phase 3.",
  tp: {
    title: "TP S12 — Projet intégrateur : mini réseau sécurisé documenté",
    objectif: "Mobiliser l'ensemble des compétences de la Phase 2 (adressage, VLAN, pare-feu, tests, documentation) dans un projet unique et cohérent.",
    duree: "3–4 heures (réparties sur la semaine)",
    materiel: ["Packet Tracer/GNS3 ou VM Linux", "Outils du TP S9 (script Python) et S11 (iptables/UFW)", "Éditeur de documents pour le dossier technique"],
    consignes: [
      "Définir le scénario du mini réseau : au moins 2 segments (VLAN ou sous-réseaux) avec des niveaux de confiance différents.",
      "Produire le schéma d'architecture et le plan d'adressage détaillé des deux segments.",
      "Configurer les VLAN, le routage inter-VLAN et les règles de pare-feu appliquant la politique de sécurité voulue.",
      "Tester la connectivité autorisée (ping, accès Internet) et consigner les résultats.",
      "Tester le filtrage attendu (tentative de connexion bloquée entre segments, scan de ports) et consigner les résultats, en réutilisant si possible le script Python de la semaine 9.",
      "Rédiger le dossier technique complet : schéma, plan d'adressage, règles de pare-feu justifiées, résultats de tests, synthèse.",
      "Relire le dossier et vérifier qu'un tiers pourrait reproduire l'architecture à partir des seules informations fournies."
    ],
    livrable: "Dossier technique complet (schéma, plan d'adressage, configuration, résultats de tests, synthèse) accompagné du fichier de simulation ou des captures de configuration réelle.",
    criteres: ["L'architecture comporte au moins 2 segments isolés avec une politique de filtrage cohérente", "Les tests de connectivité et de filtrage sont documentés avec commande, résultat attendu et résultat obtenu", "Le dossier technique est complet, structuré et compréhensible par un tiers", "Les choix de sécurité sont justifiés et cohérents avec les standards vus en Phase 2 (NIST SP 800-41)"]
  },
  quiz: [
    { q: "Quelle est la première étape d'une méthodologie de projet réseau professionnelle ?", options: ["La configuration des équipements", "L'analyse du besoin et la conception", "La rédaction de la documentation", "Le test de connectivité"], correct: 1, explanation: "Une méthodologie rigoureuse commence toujours par l'analyse du besoin et la conception (schéma, plan d'adressage), avant toute implémentation technique." },
    { q: "Dans le scénario du projet, pourquoi le VLAN Invités ne doit-il pas pouvoir initier de connexion vers le VLAN Admin ?", options: ["Pour des raisons esthétiques uniquement", "Pour appliquer une politique de moindre privilège et limiter la surface d'attaque", "Parce que cela ralentit le réseau", "Ce n'est pas nécessaire si un antivirus est installé"], correct: 1, explanation: "Isoler les segments à faible confiance des segments sensibles applique le principe de moindre privilège et de segmentation, limitant la propagation d'une éventuelle compromission." },
    { q: "Que doit obligatoirement contenir un test documenté de connectivité ou de filtrage ?", options: ["Uniquement une capture d'écran", "La commande utilisée, le résultat attendu et le résultat obtenu", "Le nom de l'étudiant uniquement", "Une estimation du temps de réponse"], correct: 1, explanation: "Un test documenté professionnellement doit permettre la traçabilité : commande exécutée, résultat attendu, résultat réellement obtenu, pour être reproductible et vérifiable." },
    { q: "Quel référentiel est cité en semaine 12 pour la documentation des contrôles de sécurité réseau ?", options: ["ISO/IEC 27001 — Annexe A", "IEEE 802.11", "RFC 791", "PEP 8"], correct: 0, explanation: "L'ISO/IEC 27001:2022, dans son Annexe A, définit des contrôles de sécurité réseau qui inspirent la structure d'une documentation technique professionnelle." },
    { q: "Pourquoi la documentation technique est-elle considérée comme un livrable aussi important que la configuration elle-même ?", options: ["Parce que la loi l'exige systématiquement", "Parce qu'elle assure la traçabilité et permet à un tiers de maintenir le réseau", "Parce qu'elle remplace les tests de sécurité", "Parce qu'elle est plus rapide à produire que la configuration"], correct: 1, explanation: "Sans documentation, un réseau fonctionnel devient impossible à maintenir ou auditer par un tiers ; la documentation garantit la traçabilité et la continuité, exigence centrale des référentiels professionnels." }
  ]
}
];
