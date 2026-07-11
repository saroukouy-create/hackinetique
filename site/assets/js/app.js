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
function selectWeek(id) {
  currentWeekId = id;
  currentTab = "lecon";
  localStorage.setItem("hackinetique_last_week", id);
  renderMain();
  renderSidebar(document.getElementById("searchInput").value);
  window.scrollTo({ top: 0, behavior: "smooth" });
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
  selectWeek(startId);

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

document.addEventListener("DOMContentLoaded", initApp);
