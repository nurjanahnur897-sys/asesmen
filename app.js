(() => {
  "use strict";
  const TOTAL_QUESTIONS = 40;
  const DURATION_SECONDS = 90 * 60;
  const $ = (id) => document.getElementById(id);
  const screens = { start: $("startScreen"), quiz: $("quizScreen"), result: $("resultScreen") };
  let student = null;
  let sessionQuestions = [];
  let currentIndex = 0;
  let correctCount = 0;
  let answeredCount = 0;
  let secondsLeft = DURATION_SECONDS;
  let timerId = null;
  let startedAt = 0;
  let finishedAt = 0;
  let finished = false;

  function shuffle(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function makeSessionQuestions() {
    if (!Array.isArray(window.QUESTION_BANK) || window.QUESTION_BANK.length !== TOTAL_QUESTIONS) {
      throw new Error("Bank soal harus berisi tepat 40 soal.");
    }
    return shuffle(window.QUESTION_BANK).map((source) => {
      if (!source.q || !Array.isArray(source.options) || source.options.length !== 4 ||
          !Number.isInteger(source.answer) || source.answer < 0 || source.answer > 3) {
        throw new Error("Terdapat format soal yang tidak valid.");
      }
      const options = source.options.map((text, index) => ({ text, isCorrect: index === source.answer }));
      return { q: source.q, explain: source.explain, options: shuffle(options), selected: false, correct: false };
    });
  }

  function showScreen(name) {
    Object.values(screens).forEach((screen) => screen.classList.add("d-none"));
    screens[name].classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function formatTime(totalSeconds) {
    const m = Math.floor(Math.max(0, totalSeconds) / 60);
    const s = Math.max(0, totalSeconds) % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateTimer() {
    $("timer").textContent = formatTime(secondsLeft);
    $("timer").classList.toggle("warning", secondsLeft <= 300);
    $("timer").parentElement.classList.toggle("warning", secondsLeft <= 300);
  }

  function startTimer() {
    clearInterval(timerId);
    timerId = setInterval(() => {
      if (finished) return;
      secondsLeft = Math.max(0, DURATION_SECONDS - Math.floor((Date.now() - startedAt) / 1000));
      updateTimer();
      if (secondsLeft <= 0) finishAssessment(true);
    }, 250);
  }

  function renderQuestion() {
    if (finished) return;
    const item = sessionQuestions[currentIndex];
    $("progressText").textContent = `Soal ${currentIndex + 1} dari ${TOTAL_QUESTIONS}`;
    $("answeredText").textContent = `Terjawab: ${answeredCount}/${TOTAL_QUESTIONS}`;
    const progress = (answeredCount / TOTAL_QUESTIONS) * 100;
    $("progressBar").style.width = `${progress}%`;
    $("progressBar").parentElement.setAttribute("aria-valuenow", String(Math.round(progress)));
    $("questionText").textContent = item.q;
    $("optionsList").replaceChildren();
    $("feedbackBox").className = "feedback-box d-none mt-4";
    $("feedbackBox").replaceChildren();
    $("nextBtn").disabled = true;
    $("nextBtn").textContent = currentIndex === TOTAL_QUESTIONS - 1 ? "Lihat hasil →" : "Soal berikutnya →";

    item.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-btn";
      button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
      button.lastElementChild.textContent = option.text;
      button.addEventListener("click", () => selectAnswer(index));
      $("optionsList").appendChild(button);
    });
  }

  function selectAnswer(optionIndex) {
    if (finished) return;
    const item = sessionQuestions[currentIndex];
    if (!item || item.selected) return;
    item.selected = true;
    item.correct = item.options[optionIndex].isCorrect;
    answeredCount++;
    if (item.correct) correctCount++;

    const buttons = Array.from($("optionsList").querySelectorAll("button"));
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (item.options[index].isCorrect) button.classList.add("correct");
      else if (index === optionIndex) button.classList.add("incorrect");
    });

    const feedback = $("feedbackBox");
    feedback.classList.remove("d-none");
    feedback.classList.add(item.correct ? "good" : "bad");
    const title = document.createElement("div");
    title.className = "feedback-title";
    title.textContent = item.correct ? "😊 GOOD JOB!" : "😔 Belum tepat";
    feedback.appendChild(title);

    if (!item.correct) {
      const correctOption = item.options.find((option) => option.isCorrect);
      const correctText = document.createElement("p");
      correctText.className = "mb-2";
      const strong = document.createElement("strong");
      strong.textContent = `Jawaban yang benar: ${String.fromCharCode(65 + item.options.indexOf(correctOption))}. `;
      correctText.append(strong, document.createTextNode(correctOption.text));
      feedback.appendChild(correctText);
    } else {
      const praise = document.createElement("p");
      praise.className = "mb-2";
      praise.textContent = "Jawaban kamu benar. Pertahankan semangat belajarmu!";
      feedback.appendChild(praise);
    }
    const explanation = document.createElement("p");
    explanation.className = "mb-0";
    const label = document.createElement("strong");
    label.textContent = "Pembahasan: ";
    explanation.append(label, document.createTextNode(item.explain));
    feedback.appendChild(explanation);

    $("answeredText").textContent = `Terjawab: ${answeredCount}/${TOTAL_QUESTIONS}`;
    const progress = (answeredCount / TOTAL_QUESTIONS) * 100;
    $("progressBar").style.width = `${progress}%`;
    $("progressBar").parentElement.setAttribute("aria-valuenow", String(Math.round(progress)));
    $("nextBtn").disabled = false;
    feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function nextQuestion() {
    if (finished) return;
    if (!sessionQuestions[currentIndex].selected) return;
    if (currentIndex === TOTAL_QUESTIONS - 1) {
      finishAssessment(false);
      return;
    }
    currentIndex++;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finishAssessment(timeExpired) {
    if (finished) return;
    finished = true;
    clearInterval(timerId);
    finishedAt = Date.now();
    const elapsed = Math.min(DURATION_SECONDS, Math.max(0, Math.floor((finishedAt - startedAt) / 1000)));
    const wrongOrUnanswered = TOTAL_QUESTIONS - correctCount;
    const score = Math.round((correctCount / TOTAL_QUESTIONS) * 100);

    $("resultName").textContent = student.name;
    $("resultNis").textContent = student.nis;
    $("resultClass").textContent = student.className;
    $("resultCorrect").textContent = `${correctCount} dari ${TOTAL_QUESTIONS}`;
    $("resultWrong").textContent = `${wrongOrUnanswered} dari ${TOTAL_QUESTIONS}`;
    $("finalScore").textContent = String(score);
    $("resultTime").textContent = `${formatTime(elapsed)}${timeExpired ? " (waktu habis)" : ""}`;
    $("resultEmoji").textContent = score >= 85 ? "🏆" : score >= 70 ? "🎉" : score >= 50 ? "💪" : "📚";
    $("resultHeading").textContent = timeExpired ? "Waktu Asesmen Habis" : "Hasil Asesmen";
    $("resultMessage").textContent =
      score >= 85 ? "Luar biasa! Pemahamanmu sangat baik. Terus pertahankan!" :
      score >= 70 ? "Bagus! Kamu sudah memahami banyak materi. Terus tingkatkan!" :
      score >= 50 ? "Usaha yang baik. Tinjau kembali materi yang belum dikuasai." :
      "Tetap semangat! Pelajari kembali materi dan terus berlatih.";
    showScreen("result");
  }

  $("identityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = $("studentName");
    const nisInput = $("studentNis");
    const classInput = $("studentClass");
    const name = nameInput.value.trim();
    const nis = nisInput.value.trim();
    const className = classInput.value.trim();
    nameInput.setCustomValidity(name.length >= 2 ? "" : "Nama minimal 2 karakter.");
    nisInput.setCustomValidity(nis ? "" : "NIS wajib diisi.");
    classInput.setCustomValidity(className ? "" : "Kelas wajib diisi.");
    [nameInput, nisInput, classInput].forEach((input) => input.classList.toggle("is-invalid", !input.checkValidity()));
    if (!nameInput.checkValidity() || !nisInput.checkValidity() || !classInput.checkValidity()) {
      event.stopPropagation();
      return;
    }

    try {
      student = { name, nis, className };
      sessionQuestions = makeSessionQuestions();
      currentIndex = 0;
      correctCount = 0;
      answeredCount = 0;
      secondsLeft = DURATION_SECONDS;
      finished = false;
      startedAt = Date.now();
      $("greeting").textContent = `Semangat mengerjakan, ${student.name}!`;
      updateTimer();
      showScreen("quiz");
      renderQuestion();
      startTimer();
    } catch (error) {
      alert(`Asesmen belum dapat dimulai: ${error.message}`);
    }
  });

  $("nextBtn").addEventListener("click", nextQuestion);
  $("printBtn").addEventListener("click", () => window.print());
  $("restartBtn").addEventListener("click", () => {
    clearInterval(timerId);
    student = null;
    sessionQuestions = [];
    currentIndex = 0;
    correctCount = 0;
    answeredCount = 0;
    secondsLeft = DURATION_SECONDS;
    finished = false;
    $("identityForm").reset();
    document.querySelectorAll("#identityForm .form-control").forEach((input) => input.classList.remove("is-invalid"));
    showScreen("start");
  });

  // Mencegah pengiriman formulir yang tidak valid melalui tombol Enter atau input yang terlewat.
  ["studentName", "studentNis", "studentClass"].forEach((id) => {
    $(id).addEventListener("input", (event) => {
      event.target.setCustomValidity("");
      event.target.classList.remove("is-invalid");
    });
  });
})();
