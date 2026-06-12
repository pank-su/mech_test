(function () {
  const tests = window.MECH_TESTS || [];
  const allQuestions = tests.flatMap((test) =>
    test.questions.map((question) => ({ ...question, testId: test.id, testTitle: test.title }))
  );

  const storageKey = "mech-test-progress-v1";
  const testSelect = document.getElementById("testSelect");
  const orderSelect = document.getElementById("orderSelect");
  const restartBtn = document.getElementById("restartBtn");
  const resetBtn = document.getElementById("resetBtn");
  const questionList = document.getElementById("questionList");
  const questionCard = document.getElementById("questionCard");
  const summary = document.getElementById("summary");

  const state = {
    selectedTest: "all",
    order: "source",
    index: 0,
    sequence: [],
    progress: loadProgress()
  };

  init();

  function init() {
    testSelect.innerHTML = [
      '<option value="all">Все вопросы</option>',
      ...tests.map((test) => `<option value="${escapeHtml(test.id)}">${escapeHtml(test.title)}</option>`)
    ].join("");

    testSelect.addEventListener("change", () => {
      state.selectedTest = testSelect.value;
      state.index = 0;
      buildSequence();
      render();
    });

    orderSelect.addEventListener("change", () => {
      state.order = orderSelect.value;
      state.index = 0;
      buildSequence();
      render();
    });

    restartBtn.addEventListener("click", () => {
      state.index = 0;
      if (state.order === "shuffle") {
        buildSequence();
      }
      render();
    });

    resetBtn.addEventListener("click", () => {
      if (!confirm("Сбросить выбранные ответы и самопроверку?")) return;
      state.progress = {};
      saveProgress();
      render();
    });

    buildSequence();
    render();
  }

  function buildSequence() {
    const questions = getFilteredQuestions();
    state.sequence = questions.map((question) => question.id);
    if (state.order === "shuffle") {
      shuffle(state.sequence);
    }
  }

  function getFilteredQuestions() {
    if (state.selectedTest === "all") return allQuestions;
    return allQuestions.filter((question) => question.testId === state.selectedTest);
  }

  function getCurrentQuestion() {
    const id = state.sequence[state.index];
    return allQuestions.find((question) => question.id === id);
  }

  function render() {
    renderSummary();
    renderQuestionList();
    renderQuestion();
  }

  function renderSummary() {
    const questions = getFilteredQuestions();
    const answered = questions.filter((question) => getEntry(question.id).answer.length > 0).length;
    const selfOk = questions.filter((question) => getEntry(question.id).self === "ok").length;
    const selfBad = questions.filter((question) => getEntry(question.id).self === "bad").length;
    summary.textContent = `${answered}/${questions.length} отвечено · ${selfOk} решил · ${selfBad} не решил`;
  }

  function renderQuestionList() {
    questionList.innerHTML = state.sequence
      .map((id, index) => {
        const entry = getEntry(id);
        const classes = ["question-jump"];
        if (index === state.index) classes.push("active");
        if (entry.answer.length) classes.push("answered");
        if (entry.self === "ok") classes.push("self-ok");
        if (entry.self === "bad") classes.push("self-bad");
        return `<button type="button" class="${classes.join(" ")}" data-index="${index}">${index + 1}</button>`;
      })
      .join("");

    questionList.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        state.index = Number(button.dataset.index);
        render();
      });
    });
  }

  function renderQuestion() {
    const question = getCurrentQuestion();
    if (!question) {
      questionCard.innerHTML = "<p>Вопросы не найдены.</p>";
      return;
    }

    const entry = getEntry(question.id);
    const typeText = question.type === "multiple" ? "несколько ответов" : "один ответ";
    const optionsHtml = question.options.length
      ? `<div class="option-list">${question.options.map((option, index) => renderOption(question, entry, option, index)).join("")}</div>`
      : '<p class="empty-options">Варианты ответа для этой страницы нужно уточнить.</p>';
    const formulaHtml = question.formula ? `<div class="formula">${formatInline(question.formula)}</div>` : "";
    const mediaHtml = question.media
      ? `<figure class="question-media"><img src="${escapeAttribute(question.media)}" alt="Иллюстрация к вопросу"></figure>`
      : "";
    const originalHtml = question.pageImage
      ? `<details class="original"><summary>Открыть оригинальную страницу PDF</summary><img src="${escapeAttribute(question.pageImage)}" alt="Оригинал: ${escapeAttribute(question.source)}, страница ${question.page}"></details>`
      : "";
    const feedbackHtml = entry.feedback ? `<div class="feedback ${entry.feedback.kind}">${formatInline(entry.feedback.text)}</div>` : "";

    questionCard.innerHTML = `
      <div class="meta">
        <span class="pill">${typeText}</span>
      </div>
      <p class="question-text">${formatInline(question.text)}</p>
      ${mediaHtml}
      ${formulaHtml}
      ${optionsHtml}
      <div class="actions">
        <button type="button" id="prevBtn" class="ghost" ${state.index === 0 ? "disabled" : ""}>Назад</button>
        <button type="button" id="checkBtn">Проверить</button>
        <button type="button" id="selfOkBtn" class="ghost">Решил</button>
        <button type="button" id="selfBadBtn" class="ghost">Не решил</button>
        <button type="button" id="nextBtn" ${state.index === state.sequence.length - 1 ? "disabled" : ""}>Дальше</button>
      </div>
      ${feedbackHtml}
      ${originalHtml}
    `;

    questionCard.querySelectorAll("input[data-option]").forEach((input) => {
      input.addEventListener("change", () => updateAnswer(question, input));
    });

    document.getElementById("prevBtn").addEventListener("click", () => move(-1));
    document.getElementById("nextBtn").addEventListener("click", () => move(1));
    document.getElementById("checkBtn").addEventListener("click", () => checkAnswer(question));
    document.getElementById("selfOkBtn").addEventListener("click", () => setSelf(question.id, "ok"));
    document.getElementById("selfBadBtn").addEventListener("click", () => setSelf(question.id, "bad"));
  }

  function renderOption(question, entry, option, index) {
    const inputType = question.type === "multiple" ? "checkbox" : "radio";
    const checked = entry.answer.includes(index) ? "checked" : "";
    return `
      <label class="option">
        <input type="${inputType}" name="answer-${escapeAttribute(question.id)}" data-option="${index}" ${checked}>
        <span>${index + 1}. ${formatInline(option)}</span>
      </label>
    `;
  }

  function updateAnswer(question, input) {
    const index = Number(input.dataset.option);
    const entry = getEntry(question.id);
    entry.feedback = null;

    if (question.type === "multiple") {
      if (input.checked) {
        entry.answer = Array.from(new Set([...entry.answer, index])).sort((a, b) => a - b);
      } else {
        entry.answer = entry.answer.filter((item) => item !== index);
      }
    } else {
      entry.answer = [index];
    }

    state.progress[question.id] = entry;
    saveProgress();
    renderSummary();
    renderQuestionList();
  }

  function checkAnswer(question) {
    const entry = getEntry(question.id);
    if (!entry.answer.length) {
      entry.feedback = { kind: "warn", text: "Сначала выбери вариант ответа." };
    } else if (!Array.isArray(question.correct)) {
      entry.feedback = {
        kind: "warn",
        text: "Правильный ответ для этого вопроса пока не внесен в data/questions.js. Ответ сохранен для самопроверки."
      };
    } else if (sameArray(entry.answer, question.correct)) {
      entry.feedback = { kind: "ok", text: "Верно." };
      entry.self = "ok";
    } else {
      const correctText = question.correct.map((index) => `${index + 1}. ${question.options[index]}`).join("; ");
      entry.feedback = { kind: "bad", text: `Неверно. Правильный ответ: ${correctText}` };
      entry.self = "bad";
    }
    state.progress[question.id] = entry;
    saveProgress();
    render();
  }

  function setSelf(id, value) {
    const entry = getEntry(id);
    entry.self = value;
    entry.feedback = {
      kind: value === "ok" ? "ok" : "bad",
      text: value === "ok" ? "Отмечено как решенный вопрос." : "Отмечено как вопрос для повторения."
    };
    state.progress[id] = entry;
    saveProgress();
    render();
  }

  function move(delta) {
    state.index = Math.min(Math.max(state.index + delta, 0), state.sequence.length - 1);
    render();
  }

  function getEntry(id) {
    return state.progress[id] || { answer: [], self: null, feedback: null };
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (_error) {
      return {};
    }
  }

  function saveProgress() {
    localStorage.setItem(storageKey, JSON.stringify(state.progress));
  }

  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  }

  function sameArray(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatInline(value) {
    return escapeHtml(value).replace(/([A-Za-zА-Яа-яΑ-Ωα-ω])⃗([A-Za-zА-Яа-я0-9₀-₉]*)/gu, (_match, base, subscript) => {
      const sub = subscript ? `<sub>${subscript}</sub>` : "";
      return `<span class="vec">${base}${sub}</span>`;
    });
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }
})();
