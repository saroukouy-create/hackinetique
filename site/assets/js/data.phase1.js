// PHASE 1 — FONDAMENTAUX & SÉCURITÉ WEB (S1 à S6)
const PHASE1 = [
{
  id: "S1", week: 1, phase: 1,
  title: "Installation & environnement VS Code",
  level: "debutant",
  duration: "Semaine 1 · ~6h",
  intro: "Avant d'attaquer ou de défendre quoi que ce soit, tout professionnel de la cybersécurité a besoin d'un poste de travail fiable. Cette semaine pose la fondation technique de tout le parcours HACKINÉTIQUE : Visual Studio Code, votre « établi » unique pour les 24 prochaines semaines.",
  objectives: [
    "Installer et configurer Visual Studio Code sur son poste.",
    "Mettre en place un sous-système Linux (WSL2) ou un terminal natif.",
    "Identifier les composants clés de l'interface : explorateur, terminal intégré, palette de commandes.",
    "Installer les extensions indispensables au parcours.",
    "Produire et exécuter un premier fichier HTML."
  ],
  definition: "Installation de VS Code + WSL2 (Windows) ou terminal natif (macOS/Linux). Prise en main de l'interface : explorateur de fichiers, terminal intégré, palette de commandes (Ctrl+Shift+P).",
  analogy: { title: "🔨 VS Code comme établi d'artisan", text: "Un menuisier débutant n'a pas besoin de dix ateliers différents : il a besoin d'un seul établi bien organisé. VS Code joue ce rôle : le terminal, l'éditeur de code, le client SSH et les extensions de sécurité y sont tous rangés au même endroit." },
  keyTerms: [
    { term: "IDE", def: "Environnement de développement intégré : logiciel qui regroupe éditeur, terminal et outils de débogage." },
    { term: "WSL2", def: "Windows Subsystem for Linux v2 : un vrai noyau Linux exécuté nativement sous Windows." },
    { term: "Palette de commandes", def: "Menu universel de VS Code (Ctrl+Shift+P) donnant accès à toutes les actions disponibles." },
    { term: "Extension", def: "Module additionnel qui enrichit VS Code (langages, linters, connecteurs distants)." }
  ],
  lesson: [
    { heading: "Pourquoi un environnement unique ?", html: "<p>Multiplier les logiciels (un éditeur pour le code, un autre terminal, un client SSH séparé) augmente la charge mentale et le risque d'erreur. Le programme HACKINÉTIQUE choisit <strong>VS Code</strong> comme unique porte d'entrée : il sera utilisé pour écrire du HTML en semaine 4, scanner un réseau en semaine 14 ou rédiger un rapport d'audit en semaine 22.</p>" },
    { heading: "Installation de VS Code", html: "<p>Téléchargez l'installeur officiel sur <code>code.visualstudio.com</code>, exécutez-le, puis lancez l'application. Vérifiez la version installée via le menu <em>Aide → À propos</em>.</p>" },
    { heading: "Mettre en place le terminal Linux", html: "<p>Sous Windows, ouvrez PowerShell <strong>en administrateur</strong> et exécutez :</p><pre><code>wsl --install</code></pre><p>Redémarrez le poste. Sous macOS/Linux, le terminal natif (zsh/bash) est directement utilisable — aucune installation supplémentaire n'est nécessaire à ce stade.</p>" },
    { heading: "Explorer l'interface", html: "<p>Trois zones à maîtriser dès aujourd'hui :</p><ul><li><strong>Explorateur de fichiers</strong> (icône en haut à gauche) : navigue dans les dossiers du projet.</li><li><strong>Terminal intégré</strong> (raccourci <code>Ctrl+\`</code>) : exécute des commandes sans quitter VS Code.</li><li><strong>Palette de commandes</strong> (<code>Ctrl+Shift+P</code>) : recherche n'importe quelle action par mot-clé.</li></ul>" },
    { heading: "Extensions à installer dès aujourd'hui", html: "<ul><li><strong>WSL</strong> — connecte VS Code au sous-système Linux.</li><li><strong>Remote - SSH</strong> — prépare les connexions distantes de la semaine 3.</li><li><strong>Live Server</strong> — prévisualise une page HTML en un clic.</li><li><strong>Prettier</strong> — formate automatiquement le code.</li></ul>" }
  ],
  standards: ["NIST SP 800-123 — Guide to General Server Security (hygiène de poste de travail)", "CompTIA Security+ — Domaine 4.1 : outils et techniques de base"],
  steps: [
    { text: "Télécharger et installer VS Code.", color: "blue" },
    { text: "Installer WSL2 sur Windows ou configurer le terminal natif sur macOS.", color: "orange" },
    { text: "Prise en main de l'interface.", color: "blue" },
    { text: "Ouvrir le terminal intégré.", color: "orange" },
    { text: "Installer les extensions : WSL, Remote-SSH, Live Server, Prettier.", color: "blue" },
    { text: "Créer un fichier index.html pour tester.", color: "orange" },
    { text: "Livrable : environnement VS Code fonctionnel.", color: "red" }
  ],
  deliverable: "Un environnement VS Code opérationnel : WSL2 (ou terminal natif) installé, quatre extensions actives, un fichier index.html créé et prévisualisé avec Live Server.",
  tp: {
    title: "TP S1 — Construire son poste de travail sécurisé",
    objectif: "Mettre en place un environnement de développement complet et vérifiable, base de tous les TP suivants.",
    duree: "45–60 minutes",
    materiel: ["Un ordinateur avec 8 Go de RAM minimum", "Connexion internet stable", "Droits administrateur sur le poste"],
    consignes: [
      "Installer Visual Studio Code depuis le site officiel.",
      "Activer WSL2 (Windows) via `wsl --install`, ou vérifier le terminal natif (macOS/Linux).",
      "Ouvrir VS Code et afficher successivement l'explorateur, le terminal intégré et la palette de commandes.",
      "Installer les extensions WSL, Remote-SSH, Live Server et Prettier depuis le panneau Extensions.",
      "Créer un dossier `hackinetique-s1`, y ajouter un fichier `index.html` contenant un titre et un paragraphe.",
      "Lancer Live Server et vérifier l'affichage dans le navigateur.",
      "Faire une capture d'écran de l'environnement complet (explorateur + terminal + page affichée)."
    ],
    livrable: "Capture d'écran de l'environnement VS Code fonctionnel + fichier index.html.",
    criteres: ["WSL2 ou terminal natif opérationnel", "4 extensions installées et visibles", "Page HTML affichée sans erreur via Live Server"]
  },
  quiz: [
    { q: "Quel est le rôle principal de WSL2 dans ce programme ?", options: ["Accélérer le processeur", "Exécuter un véritable noyau Linux sous Windows", "Remplacer VS Code", "Chiffrer le disque dur"], correct: 1, explanation: "WSL2 fournit un noyau Linux réel, permettant d'utiliser les mêmes commandes et outils que sur une distribution Linux native." },
    { q: "Quel raccourci ouvre la palette de commandes dans VS Code ?", options: ["Ctrl+P", "Ctrl+Shift+P", "Ctrl+`", "Alt+F4"], correct: 1, explanation: "Ctrl+Shift+P ouvre la palette de commandes, point d'entrée universel vers toutes les actions de VS Code." },
    { q: "Quelle extension permet de prévisualiser une page HTML en un clic ?", options: ["Prettier", "GitLens", "Live Server", "Remote-SSH"], correct: 2, explanation: "Live Server lance un serveur web local et actualise automatiquement le navigateur à chaque modification." },
    { q: "Pourquoi préférer un environnement de travail unique plutôt que plusieurs logiciels séparés ?", options: ["C'est obligatoire légalement", "Cela réduit la charge mentale et le risque d'erreur", "Cela coûte moins cher", "Cela améliore le Wi-Fi"], correct: 1, explanation: "Centraliser les outils dans VS Code limite les changements de contexte et les erreurs de manipulation, un principe d'ergonomie retenu par les référentiels professionnels (CompTIA Security+)." },
    { q: "Quelle commande PowerShell installe WSL depuis un terminal administrateur ?", options: ["sudo install wsl", "wsl --install", "apt install wsl", "wsl new"], correct: 1, explanation: "`wsl --install` est la commande officielle Microsoft pour installer WSL2 et une distribution Linux par défaut." }
  ]
},
{
  id: "S2", week: 2, phase: 1,
  title: "Terminal Linux — bases",
  level: "debutant",
  duration: "Semaine 2 · ~6h",
  intro: "Le terminal est l'outil de travail principal de tout professionnel de la cybersécurité : 90 % des opérations d'audit, de scan ou de défense s'y déroulent. Cette semaine construit les réflexes de navigation et de manipulation de fichiers en ligne de commande.",
  objectives: [
    "Naviguer dans l'arborescence de fichiers Linux en ligne de commande.",
    "Créer, copier, déplacer et supprimer fichiers et dossiers.",
    "Comprendre et modifier les permissions Unix (chmod, chown).",
    "Rechercher du texte et des fichiers avec grep et find.",
    "Écrire un premier script Bash exécutable."
  ],
  definition: "Navigation (cd, ls, pwd), gestion de fichiers (cp, mv, rm). Permissions (chmod, chown). Recherche (grep, find).",
  analogy: { title: "🗂️ Le terminal comme classeur", text: "Naviguer en ligne de commande, c'est comme se déplacer dans un immeuble de bureaux : `pwd` indique l'étage où vous êtes, `ls` liste les portes du couloir, `cd` vous fait entrer dans une pièce." },
  keyTerms: [
    { term: "Chemin absolu", def: "Chemin complet depuis la racine du système, ex : /home/user/projet." },
    { term: "Chemin relatif", def: "Chemin exprimé depuis le dossier courant, ex : ./projet." },
    { term: "Permission Unix", def: "Droits de lecture (r), écriture (w) et exécution (x) attribués à l'utilisateur, au groupe et aux autres." },
    { term: "Shebang", def: "Ligne #!/bin/bash en tête d'un script indiquant l'interpréteur à utiliser." }
  ],
  lesson: [
    { heading: "Se repérer dans l'arborescence", html: "<p><code>pwd</code> affiche le dossier courant, <code>ls</code> liste son contenu, <code>cd</code> permet de s'y déplacer. Ces trois commandes couvrent 80 % des besoins de navigation quotidiens.</p>" },
    { heading: "Manipuler fichiers et dossiers", html: "<ul><li><code>mkdir</code> crée un dossier, <code>touch</code> crée un fichier vide.</li><li><code>cp source destination</code> copie, <code>mv</code> déplace ou renomme.</li><li><code>rm</code> supprime (irréversible : pas de corbeille en ligne de commande).</li></ul>" },
    { heading: "Comprendre les permissions", html: "<p>Chaque fichier possède des droits <strong>rwx</strong> pour le propriétaire, le groupe et les autres utilisateurs. La commande <code>chmod 755 script.sh</code> rend un script exécutable par son propriétaire et lisible par tous ; <code>chown</code> change le propriétaire d'un fichier.</p>" },
    { heading: "Rechercher efficacement", html: "<p><code>grep \"motif\" fichier</code> cherche du texte dans un fichier ; <code>find /chemin -name \"*.log\"</code> cherche des fichiers par nom. Ces deux commandes sont au cœur de toute investigation (forensics, analyse de logs).</p>" },
    { heading: "Premier script Bash", html: "<pre><code>#!/bin/bash\necho \"Bonjour, $(whoami) !\"\ndate</code></pre><p>Rendez-le exécutable avec <code>chmod +x script.sh</code> puis lancez-le via <code>./script.sh</code>.</p>" }
  ],
  standards: ["CompTIA Linux+ / Security+ — Domaine « Administration système »", "NIST SP 800-53 — AC-6 Least Privilege (base des permissions Unix)"],
  steps: [
    { text: "Structure du système de fichiers.", color: "blue" },
    { text: "Commandes de navigation.", color: "orange" },
    { text: "Gestion des fichiers.", color: "blue" },
    { text: "Permissions avec chmod et chown.", color: "orange" },
    { text: "Recherche avec grep et find.", color: "blue" },
    { text: "Créer un mini-script bash.", color: "orange" },
    { text: "Livrable : mini-script bash fonctionnel.", color: "red" }
  ],
  deliverable: "Un script Bash exécutable qui affiche un message, la date, et liste le contenu d'un dossier.",
  tp: {
    title: "TP S2 — Explorateur et organisateur en ligne de commande",
    objectif: "Manipuler un système de fichiers exclusivement en ligne de commande et produire un script Bash fonctionnel.",
    duree: "60 minutes",
    materiel: ["Terminal WSL2/Linux configuré en semaine 1"],
    consignes: [
      "Créer une arborescence `projet/{docs,scripts,logs}` avec `mkdir -p`.",
      "Créer trois fichiers vides dans `docs/` avec `touch`.",
      "Copier un fichier de `docs/` vers `logs/`, puis le renommer avec `mv`.",
      "Modifier les permissions d'un fichier pour le rendre lecture seule (`chmod 444`).",
      "Rechercher tous les fichiers `.txt` du dossier `projet/` avec `find`.",
      "Écrire un script `scripts/rapport.sh` qui affiche l'utilisateur courant, la date, et le contenu du dossier `projet/`.",
      "Rendre le script exécutable et l'exécuter."
    ],
    livrable: "Arborescence `projet/` complète + script `rapport.sh` exécuté avec succès (capture du terminal).",
    criteres: ["Arborescence correcte et cohérente", "Permissions modifiées avec succès", "Script exécutable sans erreur"]
  },
  quiz: [
    { q: "Quelle commande affiche le dossier courant ?", options: ["ls", "cd", "pwd", "find"], correct: 2, explanation: "`pwd` (print working directory) affiche le chemin absolu du dossier courant." },
    { q: "Que signifie la permission `755` appliquée à un script ?", options: ["Lecture seule pour tous", "rwx pour le propriétaire, r-x pour le groupe et les autres", "Aucun accès", "Écriture seule pour le propriétaire"], correct: 1, explanation: "7 = rwx (propriétaire), 5 = r-x (groupe), 5 = r-x (autres) : le propriétaire peut tout faire, les autres peuvent lire et exécuter." },
    { q: "Quelle commande recherche le texte « error » dans un fichier de log ?", options: ["find error log.txt", "grep \"error\" log.txt", "cd error log.txt", "chmod error log.txt"], correct: 1, explanation: "`grep` recherche un motif texte à l'intérieur du contenu d'un ou plusieurs fichiers." },
    { q: "Quelle ligne doit démarrer un script Bash pour préciser l'interpréteur ?", options: ["#!/bin/bash", "//bash", "<script>", "@bash"], correct: 0, explanation: "Le shebang `#!/bin/bash` indique au système quel interpréteur utiliser pour exécuter le script." },
    { q: "Pourquoi le principe du moindre privilège s'applique-t-il aux permissions Unix ?", options: ["Pour accélérer le système", "Pour limiter les accès au strict nécessaire et réduire la surface d'attaque", "Pour économiser de l'espace disque", "Ce n'est pas lié à la sécurité"], correct: 1, explanation: "Le moindre privilège (NIST SP 800-53, AC-6) limite les droits de chaque utilisateur/fichier au strict nécessaire, réduisant l'impact d'une compromission." }
  ]
},
{
  id: "S3", week: 3, phase: 1,
  title: "Terminal Linux — approfondissement",
  level: "debutant",
  duration: "Semaine 3 · ~6h",
  intro: "Après les bases, place à la gestion des processus, aux variables d'environnement et à la première connexion distante sécurisée via SSH — la porte d'entrée de toute administration système à distance.",
  objectives: [
    "Visualiser et arrêter des processus système.",
    "Configurer des variables d'environnement persistantes.",
    "Comprendre le principe du chiffrement asymétrique appliqué à SSH.",
    "Établir une connexion SSH vers une machine distante."
  ],
  definition: "Gestion des processus (ps, top, kill). Variables d'environnement. Introduction à SSH.",
  analogy: { title: "📞 SSH comme ligne téléphonique chiffrée", text: "SSH, c'est comme appeler quelqu'un sur une ligne dont seuls vous deux possédez la clé de déchiffrement : même si quelqu'un intercepte la conversation, il n'entend qu'un bruit incompréhensible." },
  keyTerms: [
    { term: "Processus", def: "Instance d'un programme en cours d'exécution, identifiée par un PID (identifiant unique)." },
    { term: "SSH", def: "Secure Shell : protocole chiffré permettant d'administrer une machine à distance." },
    { term: "Variable d'environnement", def: "Valeur globale accessible par les programmes du shell, ex : $PATH." },
    { term: "Clé publique/privée", def: "Paire cryptographique : la clé publique se partage, la clé privée reste secrète." }
  ],
  lesson: [
    { heading: "Observer et gérer les processus", html: "<p><code>ps aux</code> liste tous les processus actifs, <code>top</code> (ou <code>htop</code>) les affiche en temps réel avec leur consommation CPU/RAM. <code>kill -9 &lt;PID&gt;</code> force l'arrêt d'un processus bloqué.</p>" },
    { heading: "Variables d'environnement", html: "<p>Une variable comme <code>$PATH</code> indique au shell où chercher les exécutables. On peut définir ses propres variables avec <code>export MA_VAR=\"valeur\"</code>, et les rendre permanentes en les ajoutant au fichier <code>~/.bashrc</code> ou <code>~/.zshrc</code>.</p>" },
    { heading: "Introduction à SSH", html: "<p>SSH chiffre l'intégralité d'une session distante. La connexion s'effectue avec :</p><pre><code>ssh utilisateur@adresse_ip</code></pre><p>L'authentification par clé (plutôt que par mot de passe) est recommandée : la clé privée reste sur votre machine, la clé publique est déposée sur le serveur distant.</p>" }
  ],
  standards: ["NIST SP 800-53 — SC-12/SC-13 Cryptographic Key Management", "PCI DSS — exigence d'accès distant chiffré"],
  steps: [
    { text: "Visualiser les processus avec ps et top.", color: "blue" },
    { text: "Arrêter un processus avec kill.", color: "orange" },
    { text: "Variables d'environnement.", color: "blue" },
    { text: "Configurer .bashrc ou .zshrc.", color: "orange" },
    { text: "Introduction à SSH.", color: "blue" },
    { text: "Se connecter à une machine distante.", color: "orange" },
    { text: "Livrable : connexion SSH réussie.", color: "red" }
  ],
  deliverable: "Capture d'écran d'une connexion SSH réussie vers une machine distante (ou VM locale), accompagnée d'une variable d'environnement personnalisée persistante.",
  tp: {
    title: "TP S3 — Superviser un système et se connecter à distance",
    objectif: "Observer l'activité système et réaliser une première connexion SSH sécurisée.",
    duree: "60 minutes",
    materiel: ["Terminal Linux/WSL2", "Une seconde machine ou VM accessible en réseau (ou serveur SSH local activé)"],
    consignes: [
      "Lister les processus actifs avec `ps aux` et identifier les 3 plus consommateurs de CPU avec `top`.",
      "Lancer un processus factice (`sleep 300 &`) puis l'arrêter avec `kill`.",
      "Créer une variable d'environnement `HACKINETIQUE_USER` et l'ajouter à `.bashrc`.",
      "Générer une paire de clés SSH avec `ssh-keygen -t ed25519`.",
      "Copier la clé publique sur la machine cible avec `ssh-copy-id`.",
      "Se connecter en SSH par clé (sans mot de passe) et vérifier la connexion avec `whoami` sur la machine distante."
    ],
    livrable: "Capture du terminal montrant la connexion SSH réussie par clé + preuve de la variable d'environnement persistante (`echo $HACKINETIQUE_USER` dans un nouveau terminal).",
    criteres: ["Connexion SSH établie sans mot de passe", "Variable d'environnement persistante après redémarrage du terminal", "Processus correctement identifié et arrêté"]
  },
  quiz: [
    { q: "Quelle commande affiche les processus en temps réel avec leur consommation CPU ?", options: ["ps", "top", "cd", "grep"], correct: 1, explanation: "`top` (ou `htop`) rafraîchit en continu la liste des processus et leur consommation de ressources." },
    { q: "Quel signal envoie `kill -9` à un processus ?", options: ["Une pause", "Un arrêt forcé immédiat (SIGKILL)", "Un redémarrage", "Une mise en veille"], correct: 1, explanation: "Le signal 9 (SIGKILL) termine immédiatement un processus sans lui laisser l'occasion de se fermer proprement." },
    { q: "Pourquoi l'authentification SSH par clé est-elle préférable au mot de passe ?", options: ["Elle est plus rapide à taper", "Elle élimine le risque de mot de passe faible ou volé par force brute", "Elle ne nécessite pas internet", "Elle fonctionne sans terminal"], correct: 1, explanation: "Une clé privée de 256 bits est pratiquement impossible à casser par force brute, contrairement à de nombreux mots de passe." },
    { q: "Où faut-il ajouter une variable d'environnement pour qu'elle soit persistante ?", options: ["Dans /etc/passwd", "Dans ~/.bashrc ou ~/.zshrc", "Dans /tmp", "Elle est toujours persistante par défaut"], correct: 1, explanation: "Les fichiers de configuration du shell (.bashrc, .zshrc) sont chargés à chaque nouvelle session et permettent de rendre les variables permanentes." },
    { q: "Quel fichier doit rester strictement secret dans une paire de clés SSH ?", options: ["La clé publique (id_ed25519.pub)", "La clé privée (id_ed25519)", "Le fichier known_hosts", "Le fichier config"], correct: 1, explanation: "La clé privée ne doit jamais être partagée ; seule la clé publique est déposée sur les serveurs distants." }
  ]
},
{
  id: "S4", week: 4, phase: 1,
  title: "Structurer une page web (HTML)",
  level: "debutant",
  duration: "Semaine 4 · ~6h",
  intro: "Comprendre le Web commence par son squelette : le HTML. Cette semaine construit les bases indispensables pour, plus tard, repérer les failles côté client (XSS, injection HTML) que l'on découvrira en phase 3.",
  objectives: [
    "Structurer un document HTML valide avec des balises sémantiques.",
    "Créer un formulaire HTML fonctionnel.",
    "Intégrer liens et images correctement.",
    "Appliquer les bases de l'accessibilité web.",
    "Publier un site statique sur GitHub Pages."
  ],
  definition: "Balises sémantiques, formulaires, liens et images. Publication sur GitHub Pages.",
  keyTerms: [
    { term: "Balise sémantique", def: "Élément HTML qui décrit le sens de son contenu (header, nav, main, footer) plutôt qu'un simple style." },
    { term: "DOM", def: "Document Object Model : représentation arborescente d'une page HTML manipulable par le navigateur/JavaScript." },
    { term: "Attribut alt", def: "Texte alternatif d'une image, essentiel pour l'accessibilité et le référencement." },
    { term: "GitHub Pages", def: "Service gratuit d'hébergement de sites statiques directement depuis un dépôt GitHub." }
  ],
  lesson: [
    { heading: "Anatomie d'un document HTML", html: "<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang=\"fr\"&gt;\n&lt;head&gt;\n  &lt;meta charset=\"UTF-8\"&gt;\n  &lt;title&gt;Ma page&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Bonjour&lt;/h1&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>" },
    { heading: "Balises sémantiques", html: "<p>Plutôt que d'empiler des <code>&lt;div&gt;</code> génériques, utilisez <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>. Cela améliore l'accessibilité (lecteurs d'écran) et le référencement naturel.</p>" },
    { heading: "Formulaires", html: "<p>Un formulaire collecte des données utilisateur — et constitue la première surface d'attaque web que l'on étudiera dès la semaine 5 (validation côté serveur, injection).</p><pre><code>&lt;form action=\"/envoyer\" method=\"POST\"&gt;\n  &lt;label for=\"email\"&gt;Email&lt;/label&gt;\n  &lt;input type=\"email\" id=\"email\" name=\"email\" required&gt;\n  &lt;button type=\"submit\"&gt;Envoyer&lt;/button&gt;\n&lt;/form&gt;</code></pre>" },
    { heading: "Liens, images et accessibilité", html: "<p><code>&lt;a href=\"...\"&gt;</code> crée un lien, <code>&lt;img src=\"...\" alt=\"...\"&gt;</code> une image. L'attribut <code>alt</code> n'est pas optionnel : il rend le contenu accessible et doit toujours être renseigné.</p>" },
    { heading: "Publier sur GitHub Pages", html: "<p>Créez un dépôt GitHub, poussez vos fichiers HTML, puis activez GitHub Pages dans les paramètres du dépôt (branche <code>main</code>, dossier racine). Le site est alors accessible publiquement en HTTPS.</p>" }
  ],
  standards: ["W3C HTML Living Standard", "WCAG 2.1 — Web Content Accessibility Guidelines (niveau AA)"],
  steps: [
    { text: "Structure HTML.", color: "blue" },
    { text: "Balises sémantiques.", color: "orange" },
    { text: "Formulaires.", color: "blue" },
    { text: "Liens et images.", color: "orange" },
    { text: "Accessibilité.", color: "blue" },
    { text: "Publier sur GitHub Pages.", color: "orange" },
    { text: "Livrable : page web publiée.", color: "red" }
  ],
  deliverable: "Une page web personnelle, structurée sémantiquement, contenant un formulaire de contact et publiée en ligne via GitHub Pages.",
  tp: {
    title: "TP S4 — Publier sa première page web",
    objectif: "Construire et publier une page HTML sémantique et accessible.",
    duree: "90 minutes",
    materiel: ["VS Code + extension Live Server", "Compte GitHub"],
    consignes: [
      "Créer un fichier `index.html` avec header, nav, main et footer.",
      "Ajouter une section « À propos » et une section « Contact » avec un formulaire (nom, email, message).",
      "Ajouter une image avec un attribut `alt` descriptif.",
      "Vérifier le rendu avec Live Server.",
      "Créer un dépôt GitHub `mon-profil-hackinetique`, y pousser le code avec `git init / add / commit / push`.",
      "Activer GitHub Pages dans les paramètres du dépôt et vérifier l'URL publique."
    ],
    livrable: "URL publique de la page GitHub Pages + code source du dépôt.",
    criteres: ["Structure sémantique correcte (header/nav/main/footer)", "Formulaire fonctionnel avec attribut `required`", "Site accessible publiquement en HTTPS"]
  },
  quiz: [
    { q: "Quelle balise structure sémantiquement l'en-tête d'une page ?", options: ["<div>", "<header>", "<top>", "<title>"], correct: 1, explanation: "<header> est une balise sémantique HTML5 dédiée à l'en-tête de page ou de section." },
    { q: "À quoi sert l'attribut `alt` d'une image ?", options: ["Changer sa couleur", "Fournir un texte alternatif pour l'accessibilité et le référencement", "Définir sa taille", "La rendre cliquable"], correct: 1, explanation: "L'attribut alt est lu par les lecteurs d'écran et affiché si l'image ne charge pas — un critère WCAG 2.1 essentiel." },
    { q: "Quelle méthode HTTP est recommandée pour un formulaire envoyant des données sensibles ?", options: ["GET", "POST", "HEAD", "PING"], correct: 1, explanation: "POST transmet les données dans le corps de la requête plutôt que dans l'URL, évitant leur exposition dans l'historique ou les logs serveur." },
    { q: "Que permet GitHub Pages ?", options: ["Héberger gratuitement un site statique depuis un dépôt Git", "Compiler du code Python", "Scanner des vulnérabilités", "Envoyer des emails"], correct: 0, explanation: "GitHub Pages sert directement les fichiers statiques d'un dépôt (HTML/CSS/JS) sur une URL publique en HTTPS." },
    { q: "Pourquoi les balises sémantiques (nav, main, article) sont-elles préférées aux <div> génériques ?", options: ["Elles chargent plus vite", "Elles améliorent l'accessibilité et la compréhension du contenu par les machines", "Elles sont obligatoires en HTML5", "Elles remplacent le CSS"], correct: 1, explanation: "Les balises sémantiques donnent du sens au contenu pour les lecteurs d'écran, les moteurs de recherche et les outils d'analyse automatisés." }
  ]
},
{
  id: "S5", week: 5, phase: 1,
  title: "Mise en forme (CSS) & introduction aux attaques web",
  level: "debutant",
  duration: "Semaine 5 · ~6h",
  intro: "Le CSS habille la structure HTML. Cette semaine marque aussi le premier contact avec la face sombre du Web : le modèle client/serveur vu sous l'angle offensif, et la découverte du référentiel international incontournable — l'OWASP Top 10.",
  objectives: [
    "Utiliser les sélecteurs CSS pour cibler des éléments précisément.",
    "Construire une mise en page avec Flexbox.",
    "Décrire le modèle client/serveur et le cycle d'une requête HTTP.",
    "Identifier les 10 catégories de vulnérabilités web selon l'OWASP Top 10.",
    "Analyser les en-têtes de sécurité HTTP d'un site réel."
  ],
  definition: "Sélecteurs CSS, Flexbox. Client/serveur, requêtes HTTP. Découverte de l'OWASP Top 10.",
  keyTerms: [
    { term: "OWASP", def: "Open Worldwide Application Security Project : organisation à but non lucratif de référence en sécurité des applications web." },
    { term: "OWASP Top 10", def: "Classement des 10 catégories de risques les plus critiques pour les applications web, mis à jour périodiquement." },
    { term: "En-tête HTTP", def: "Métadonnée envoyée avec une requête ou réponse HTTP (ex : Content-Security-Policy, Strict-Transport-Security)." },
    { term: "Flexbox", def: "Modèle de mise en page CSS unidimensionnel facilitant l'alignement et la distribution d'éléments." }
  ],
  lesson: [
    { heading: "Sélecteurs CSS", html: "<p>Un sélecteur cible un ou plusieurs éléments : <code>.classe</code>, <code>#id</code>, <code>element</code>, ou des combinaisons comme <code>nav a:hover</code>. La spécificité détermine quelle règle l'emporte en cas de conflit.</p>" },
    { heading: "Flexbox en pratique", html: "<pre><code>.conteneur {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}</code></pre><p>Flexbox résout en quelques lignes des problèmes d'alignement historiquement complexes en CSS.</p>" },
    { heading: "Le modèle client/serveur", html: "<p>Un navigateur (client) envoie une <strong>requête HTTP</strong> à un serveur, qui répond avec un code de statut (200, 404, 500...) et un contenu. HTTPS ajoute une couche de chiffrement TLS à cet échange.</p>" },
    { heading: "Découvrir l'OWASP Top 10", html: "<p>Référence mondiale en sécurité applicative, l'OWASP Top 10 liste les risques majeurs : Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, Vulnerable Components, Identification Failures, Software/Data Integrity Failures, Logging Failures, et Server-Side Request Forgery.</p>" },
    { heading: "Analyser les en-têtes HTTP", html: "<p>Avec les outils de développement du navigateur (onglet Réseau), on observe des en-têtes comme <code>Content-Security-Policy</code> ou <code>X-Frame-Options</code>, qui renforcent (ou non) la sécurité d'un site.</p>" }
  ],
  standards: ["OWASP Top 10 (2021)", "OWASP Secure Headers Project"],
  steps: [
    { text: "Sélecteurs CSS.", color: "blue" },
    { text: "Flexbox.", color: "orange" },
    { text: "Modèle client/serveur.", color: "blue" },
    { text: "OWASP Top 10.", color: "orange" },
    { text: "Analyser les en-têtes HTTP.", color: "blue" },
    { text: "Fiche de synthèse sur 3 vulnérabilités.", color: "orange" },
    { text: "Livrable : fiche de synthèse.", color: "red" }
  ],
  deliverable: "Une fiche de synthèse présentant 3 catégories de l'OWASP Top 10, avec exemple concret et mesure de mitigation pour chacune.",
  tp: {
    title: "TP S5 — Mettre en page et auditer des en-têtes HTTP",
    objectif: "Styliser une page avec Flexbox et réaliser une première analyse de sécurité passive sur un site réel.",
    duree: "75 minutes",
    materiel: ["Page HTML de la semaine 4", "Navigateur avec outils de développement"],
    consignes: [
      "Styliser la page du TP S4 avec Flexbox pour la barre de navigation et la mise en page principale.",
      "Ouvrir les outils de développement (onglet Réseau) sur un site autorisé (ex : owasp.org) et inspecter les en-têtes de réponse HTTP.",
      "Identifier la présence ou l'absence de `Content-Security-Policy` et `Strict-Transport-Security`.",
      "Choisir 3 catégories de l'OWASP Top 10 et rédiger pour chacune : définition, exemple concret, mesure de mitigation.",
      "Compiler le tout dans une fiche de synthèse Markdown."
    ],
    livrable: "Fiche de synthèse Markdown (3 vulnérabilités OWASP documentées) + page HTML stylisée en Flexbox.",
    criteres: ["Mise en page Flexbox fonctionnelle et responsive", "3 vulnérabilités correctement définies avec mitigation", "Analyse d'en-têtes HTTP correcte et documentée"]
  },
  quiz: [
    { q: "Que signifie le sigle OWASP ?", options: ["Open Web Application Security Project", "Online Web Application Standard Protocol", "Organized Web Attack Surface Program", "Open Worldwide Application Security Project"], correct: 3, explanation: "OWASP a officiellement changé de nom en 2021 : Open Worldwide Application Security Project." },
    { q: "Quelle propriété CSS active le mode Flexbox sur un conteneur ?", options: ["display: flex;", "position: flex;", "flex: true;", "layout: flex;"], correct: 0, explanation: "`display: flex;` transforme un élément en conteneur flexible pour ses enfants directs." },
    { q: "Quel en-tête HTTP protège contre certaines attaques par injection de script ?", options: ["Content-Type", "Content-Security-Policy", "User-Agent", "Accept-Language"], correct: 1, explanation: "Content-Security-Policy (CSP) restreint les sources de scripts, styles et ressources autorisées, limitant l'impact d'une injection XSS." },
    { q: "Dans le modèle client/serveur, quel rôle joue le navigateur ?", options: ["Serveur", "Client", "Base de données", "Pare-feu"], correct: 1, explanation: "Le navigateur est le client : il envoie des requêtes HTTP et affiche les réponses du serveur." },
    { q: "L'OWASP Top 10 est-il un référentiel statique et définitif ?", options: ["Oui, il ne change jamais", "Non, il est régulièrement mis à jour selon l'évolution des menaces", "Il concerne uniquement les réseaux", "Il concerne uniquement les mots de passe"], correct: 1, explanation: "L'OWASP Top 10 évolue (dernières éditions 2017, 2021) pour refléter les tendances réelles des vulnérabilités observées en production." }
  ]
},
{
  id: "S6", week: 6, phase: 1,
  title: "Projet de phase 1",
  level: "debutant",
  duration: "Semaine 6 · ~8h (projet)",
  intro: "Semaine de synthèse : appliquer en laboratoire légal (OWASP WebGoat) les notions de fragilité web découvertes en semaine 5, puis documenter la démarche comme un professionnel — car un test d'intrusion sans rapport n'a aucune valeur.",
  objectives: [
    "Déployer un environnement de laboratoire vulnérable de façon autorisée.",
    "Réaliser une injection HTML simple et en comprendre le mécanisme.",
    "Analyser du code source pour identifier une faille.",
    "Rédiger un mini-rapport d'audit structuré."
  ],
  definition: "Attaque guidée en laboratoire (OWASP WebGoat). Revue de code vulnérable. Présentation orale.",
  keyTerms: [
    { term: "WebGoat", def: "Application web volontairement vulnérable de l'OWASP, conçue pour l'apprentissage légal des failles web." },
    { term: "Injection HTML", def: "Insertion de code HTML non filtré dans une page, pouvant altérer son affichage ou son comportement." },
    { term: "Rapport d'audit", def: "Document structuré décrivant les vulnérabilités trouvées, leur criticité et les recommandations de correction." }
  ],
  analogy: { title: "🏥 L'audit comme un diagnostic médical", text: "Un audit de sécurité ressemble à une consultation médicale : on observe les symptômes (comportement anormal), on pose un diagnostic (vulnérabilité identifiée), puis on prescrit un traitement (recommandation de correction) — jamais l'inverse." },
  lesson: [
    { heading: "Déployer WebGoat en environnement contrôlé", html: "<p>WebGoat s'exécute généralement via Docker : <code>docker run -p 8080:8080 webgoat/webgoat</code>. Cet environnement est <strong>volontairement vulnérable</strong> et ne doit jamais être exposé sur internet.</p>" },
    { heading: "Réaliser une injection HTML simple", html: "<p>Un champ de saisie non filtré peut accepter du code HTML au lieu d'un texte brut. Si ce contenu est ensuite affiché sans être « échappé », le navigateur l'interprète — c'est le principe fondateur de la faille XSS que l'on approfondira en phase 3.</p>" },
    { heading: "Lire du code vulnérable", html: "<p>Analyser le code source d'un module WebGoat permet de comprendre <em>pourquoi</em> une entrée utilisateur devient dangereuse : absence de validation, absence d'échappement, confiance excessive envers le client.</p>" },
    { heading: "Structurer un rapport d'audit", html: "<p>Un rapport professionnel suit toujours la même trame : résumé exécutif, méthodologie, liste des vulnérabilités (avec sévérité), preuve de concept, recommandations. C'est le format attendu dans les certifications eJPT et OSCP.</p>" }
  ],
  standards: ["OWASP Testing Guide", "PTES — Penetration Testing Execution Standard (structure de rapport)"],
  steps: [
    { text: "Mettre en place OWASP WebGoat.", color: "blue" },
    { text: "Injection HTML simple.", color: "orange" },
    { text: "Analyser le code vulnérable.", color: "blue" },
    { text: "Documenter l'attaque.", color: "orange" },
    { text: "Proposer des corrections.", color: "blue" },
    { text: "Livrable : mini-rapport d'audit.", color: "red" }
  ],
  deliverable: "Un mini-rapport d'audit (2-3 pages) documentant une injection HTML réalisée sur WebGoat, avec preuve de concept et recommandations de correction — clôture de la Phase 1.",
  tp: {
    title: "TP S6 — Projet de phase : premier audit documenté",
    objectif: "Mener une mini-évaluation de sécurité de bout en bout sur un environnement légal et produire un livrable professionnel.",
    duree: "3 à 4 heures (projet de synthèse)",
    materiel: ["Docker installé", "OWASP WebGoat", "VS Code (extension Markdown All in One)"],
    consignes: [
      "Déployer WebGoat localement via Docker et accéder à l'interface sur http://localhost:8080/WebGoat.",
      "Compléter la leçon « HTML Injection introduction » du module.",
      "Capturer chaque étape de l'exploitation (avant/après).",
      "Ouvrir et analyser le fragment de code source concerné pour comprendre l'origine de la faille.",
      "Rédiger un rapport Markdown : résumé exécutif, méthodologie, preuve de concept (captures), sévérité (faible/moyenne/haute), recommandations.",
      "Préparer une présentation orale de 5 minutes résumant la démarche et les résultats."
    ],
    livrable: "Rapport d'audit Markdown complet + support de présentation orale (5 min).",
    criteres: ["Faille correctement exploitée et documentée avec preuve", "Rapport structuré selon la trame professionnelle (résumé, méthodo, PoC, recommandations)", "Recommandations de correction pertinentes et réalistes"]
  },
  quiz: [
    { q: "Qu'est-ce que WebGoat ?", options: ["Un pare-feu open-source", "Une application web volontairement vulnérable pour l'apprentissage", "Un antivirus", "Un langage de programmation"], correct: 1, explanation: "WebGoat est maintenue par l'OWASP spécifiquement pour permettre un apprentissage légal et sécurisé des vulnérabilités web." },
    { q: "Pourquoi une injection HTML est-elle possible sur un champ de saisie ?", options: ["Le serveur est trop lent", "L'entrée utilisateur n'est pas correctement validée ou échappée avant affichage", "Le navigateur est obsolète", "Le mot de passe est trop court"], correct: 1, explanation: "Sans validation ni échappement des caractères spéciaux, le navigateur interprète le contenu injecté comme du code HTML légitime." },
    { q: "Quelle est la première section attendue dans un rapport d'audit professionnel ?", options: ["La liste des outils utilisés", "Le résumé exécutif", "Le code source complet", "La facture"], correct: 1, explanation: "Le résumé exécutif permet à un lecteur non technique (direction) de comprendre rapidement l'essentiel des résultats et risques." },
    { q: "Sur quel type d'environnement doit-on s'exercer aux techniques offensives durant ce programme ?", options: ["N'importe quel site public", "Uniquement des environnements de laboratoire autorisés (WebGoat, VM personnelles)", "Le site d'un concurrent", "Un réseau Wi-Fi public"], correct: 1, explanation: "Le cadre éthique et légal du programme HACKINÉTIQUE impose de n'agir que sur des cibles autorisées, jamais sur des systèmes tiers sans consentement." },
    { q: "Quel standard international structure la méthodologie d'un test d'intrusion et de son rapport ?", options: ["ISO 9001", "PTES — Penetration Testing Execution Standard", "HTML5", "RGPD"], correct: 1, explanation: "Le PTES définit les étapes standard d'un test d'intrusion : pré-engagement, reconnaissance, exploitation, post-exploitation, rapport." }
  ]
}
];
