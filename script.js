const modules = [
  {
    title: 'Module 1 — Fondations de la cybersécurité',
    level: 'Débutant',
    duration: '3 semaines',
    objectives: [
      'Comprendre les concepts de sécurité, vulnérabilité et risque',
      'Identifier les principaux composants d’un système informatique',
      'Apprendre les bases du réseau et des protocoles'
    ],
    content: [
      'Le parcours commence par la compréhension des fondamentaux : confidentialité, intégrité, disponibilité et traçabilité.',
      'Vous étudierez les leviers de sécurité physiques, logiques et organisationnels.',
      'Des notions clés comme les vecteurs d’attaque et les contre-mesures seront introduites avec des exemples concrets.'
    ],
    tp: {
      title: 'TP 1 — Cartographie de surface d’attaque',
      details: 'Analysez un réseau simple, identifiez les services exposés et proposez une première stratégie de protection.'
    },
    quiz: [
      {
        question: 'Quel est le principe fondamental de la sécurité informatique ?',
        options: ['Confidentialité, intégrité, disponibilité', 'Vitesse, stabilité, coût', 'Design, innovation, automatisation'],
        answer: 0
      },
      {
        question: 'Une vulnérabilité est :',
        options: ['Une faiblesse exploitable', 'Une solution de protection', 'Un protocole réseau'],
        answer: 0
      },
      {
        question: 'Le but d’une politique de sécurité est de :',
        options: ['Définir les règles et limites d’usage', 'Remplacer les outils de protection', 'Supprimer tous les risques'],
        answer: 0
      }
    ]
  },
  {
    title: 'Module 2 — Réseaux et Linux',
    level: 'Débutant',
    duration: '3 semaines',
    objectives: [
      'Maîtriser les bases du fonctionnement réseau',
      'Utiliser Linux de façon sécurisée et structurée',
      'Analyser les services et ports exposés'
    ],
    content: [
      'Ce module aborde les protocoles IP, TCP, UDP, DNS et DHCP.',
      'Vous découvrirez l’environnement Linux, la ligne de commande et la gestion des permissions.',
      'L’objectif est de savoir observer, diagnostiquer et protéger les services réseau.'
    ],
    tp: {
      title: 'TP 2 — Inspection d’un réseau local',
      details: 'Inspectez les services actifs, repérez les ports ouverts et proposez des règles de limitation d’accès.'
    },
    quiz: [
      {
        question: 'Quel protocole assure la résolution de noms ?',
        options: ['DNS', 'FTP', 'HTTP'],
        answer: 0
      },
      {
        question: 'Sous Linux, la commande ls sert à :',
        options: ['Lister des fichiers', 'Éteindre la machine', 'Configurer le réseau'],
        answer: 0
      },
      {
        question: 'Que représente un port ouvert ?',
        options: ['Un service accessible', 'Un fichier système', 'Une clé SSH'],
        answer: 0
      }
    ]
  },
  {
    title: 'Module 3 — Web et applications',
    level: 'Intermédiaire',
    duration: '4 semaines',
    objectives: [
      'Comprendre l’architecture web et les composants de base',
      'Identifier les vulnérabilités courantes',
      'Mettre en place des contre-mesures efficaces'
    ],
    content: [
      'Vous étudierez les bases du web : HTML, CSS, JavaScript, requêtes et sessions.',
      'Le module couvre les failles courantes comme l’injection, la falsification de requêtes et l’exposition d’informations sensibles.',
      'Vous apprendrez à tester des applications de manière responsable et à documenter les risques.'
    ],
    tp: {
      title: 'TP 3 — Audit d’une application web',
      details: 'Analysez une application simple, recherchez des faiblesses et rédigez un rapport de risque concis.'
    },
    quiz: [
      {
        question: 'Quelle vulnérabilité est liée à une entrée non filtrée ?',
        options: ['Injection', 'Compression', 'Caching'],
        answer: 0
      },
      {
        question: 'Une session mal gérée peut entraîner :',
        options: ['Une usurpation d’identité', 'Une baisse du CPU', 'Un nouveau protocole'],
        answer: 0
      },
      {
        question: 'Le rôle d’un pare-feu web est de :',
        options: ['Filtrer et contrôler les flux', 'Supprimer les logs', 'Remplacer le navigateur'],
        answer: 0
      }
    ]
  },
  {
    title: 'Module 4 — Éthique et pentest',
    level: 'Intermédiaire',
    duration: '4 semaines',
    objectives: [
      'Maîtriser une méthodologie de test d’intrusion',
      'Respecter le cadre légal et éthique',
      'Rédiger un rapport professionnel'
    ],
    content: [
      'Ce module met l’accent sur la rigueur méthodologique : collecte d’informations, énumération, exploitation et post-exploitation.',
      'Vous apprendrez à travailler selon un cadre de qualité et à limiter les impacts.',
      'La communication et la documentation sont au cœur de l’évaluation finale.'
    ],
    tp: {
      title: 'TP 4 — Planification d’une campagne de test',
      details: 'Élaborez un plan d’intervention, délimitez l’enceinte d’évaluation et préparez un rapport d’étape.'
    },
    quiz: [
      {
        question: 'La première étape d’un test d’intrusion est généralement :',
        options: ['La collecte d’information', 'L’exploitation', 'La suppression des logs'],
        answer: 0
      },
      {
        question: 'Une autorisation explicite est :',
        options: ['Obligatoire', 'Optionnelle', 'Sans importance'],
        answer: 0
      },
      {
        question: 'Un rapport de test doit :',
        options: ['Documenter les faits de manière claire', 'Masquer les faiblesses', 'Ignorer les impacts'],
        answer: 0
      }
    ]
  },
  {
    title: 'Module 5 — Analyse SOC et incidents',
    level: 'Avancé',
    duration: '4 semaines',
    objectives: [
      'Comprendre les mécanismes de détection et de réponse',
      'Analyser des événements de sécurité',
      'Appliquer une logique de continuité et de remédiation'
    ],
    content: [
      'Vous découvrirez les concepts SIEM, logs, corrélation et triage des alertes.',
      'Le module développe la capacité à reconnaître un incident, le contenir et le documenter.',
      'La gestion des journaux et l’optimisation des processus de sécurité sont au centre de la formation.'
    ],
    tp: {
      title: 'TP 5 — Analyse d’un scénario d’incident',
      details: 'Traitez un cas d’alerte, hiérarchisez les actions et proposez une procédure de réponse.'
    },
    quiz: [
      {
        question: 'Un SIEM sert principalement à :',
        options: ['Centraliser et corréler les événements', 'Remplacer les systèmes d’exploitation', 'Créer du code'],
        answer: 0
      },
      {
        question: 'L’objectif d’une réponse à incident est de :',
        options: ['Limiter l’impact et restaurer rapidement les services', 'Supprimer toute trace', 'Éviter toute communication'],
        answer: 0
      },
      {
        question: 'Les logs sont utiles pour :',
        options: ['Investigation et traçabilité', 'Cacher les erreurs', 'Rendre le système plus lent'],
        answer: 0
      }
    ]
  },
  {
    title: 'Module 6 — Capstone et excellence',
    level: 'Expert',
    duration: '6 semaines',
    objectives: [
      'Intégrer l’ensemble des compétences acquises',
      'Réaliser un projet complet lié à la cybersécurité',
      'Présenter une solution professionnelle et critique'
    ],
    content: [
      'Le capstone permet de mobiliser toutes les connaissances dans un projet réaliste et structuré.',
      'Vous serez confronté à la documentation technique, à la démonstration des résultats et à la justification des choix.',
      'Ce module prépare à l’insertion professionnelle ou à la poursuite d’une spécialisation avancée.'
    ],
    tp: {
      title: 'TP 6 — Projet final de synthèse',
      details: 'Concevez un projet complet avec objectifs, plan d’attaque, contremesures, rapport et présentation finale.'
    },
    quiz: [
      {
        question: 'Le capstone vise principalement à :',
        options: ['Intégrer les compétences en situation réelle', 'Remplacer tous les modules précédents', 'Éviter la pratique'],
        answer: 0
      },
      {
        question: 'Une solution de qualité doit :',
        options: ['Être documentée, mesurable et justifiée', 'Être secrète', 'Être compliquée sans explication'],
        answer: 0
      },
      {
        question: 'L’objectif final de ce parcours est de :',
        options: ['Former un professionnel fiable et performant', 'Créer de l’angoisse', 'Éviter toute évolution'],
        answer: 0
      }
    ]
  }
];

const nav = document.getElementById('module-nav');
const detail = document.getElementById('module-detail');
const overallProgress = document.getElementById('overall-progress');
const overallLabel = document.getElementById('overall-label');
const year = document.getElementById('year');

let activeModule = 0;

function renderNavigation() {
  nav.innerHTML = modules
    .map((module, index) => `
      <button class="module-tab ${index === activeModule ? 'active' : ''}" data-index="${index}">
        <strong>${module.title}</strong>
        <small>${module.level} • ${module.duration}</small>
      </button>
    `)
    .join('');
}

function renderModule() {
  const module = modules[activeModule];
  detail.innerHTML = `
    <div class="module-detail__meta">
      <span class="tag">${module.level}</span>
      <span class="tag">${module.duration}</span>
      <span class="tag tag--accent">${module.title}</span>
    </div>
    <h3>${module.title}</h3>
    <p>${module.content[0]}</p>
    <h4>Objectifs d’apprentissage</h4>
    <ul>
      ${module.objectives.map((item) => `<li>${item}</li>`).join('')}
    </ul>
    <div class="tp-box">
      <h4>${module.tp.title}</h4>
      <p>${module.tp.details}</p>
    </div>
    <div class="quiz-box">
      <h4>Quiz de validation</h4>
      <form class="quiz-form" data-module="${activeModule}">
        ${module.quiz
          .map((question, index) => `
            <div>
              <p><strong>${index + 1}. ${question.question}</strong></p>
              ${question.options
                .map((option, optionIndex) => `
                  <label class="quiz-option">
                    <input type="radio" name="q${index}" value="${optionIndex}" />
                    <span>${option}</span>
                  </label>
                `)
                .join('')}
            </div>
          `)
          .join('')}
        <button type="submit">Vérifier le quiz</button>
      </form>
      <div class="quiz-result" id="result-${activeModule}"></div>
    </div>
  `;

  const progressPercent = ((activeModule + 1) / modules.length) * 100;
  overallProgress.style.width = `${progressPercent}%`;
  overallLabel.textContent = `${activeModule + 1}/${modules.length} modules`;
}

nav.addEventListener('click', (event) => {
  const button = event.target.closest('.module-tab');
  if (!button) return;
  activeModule = Number(button.dataset.index);
  renderNavigation();
  renderModule();
});

detail.addEventListener('submit', (event) => {
  const form = event.target.closest('.quiz-form');
  if (!form) return;
  event.preventDefault();

  const moduleIndex = Number(form.dataset.module);
  const selectedModule = modules[moduleIndex];
  let score = 0;

  selectedModule.quiz.forEach((question, index) => {
    const selectedValue = form.querySelector(`input[name="q${index}"]:checked`);
    if (selectedValue && Number(selectedValue.value) === question.answer) {
      score += 1;
    }
  });

  const result = document.getElementById(`result-${moduleIndex}`);
  const percentage = Math.round((score / selectedModule.quiz.length) * 100);
  result.textContent = `Score : ${score}/${selectedModule.quiz.length} (${percentage}%)`;
  result.style.color = percentage >= 70 ? '#2ecc71' : '#ffb703';
});

year.textContent = new Date().getFullYear();
renderNavigation();
renderModule();
