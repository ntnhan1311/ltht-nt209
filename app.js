// app.js - NT209 Lập Trình Hệ Thống Web App Controller
document.addEventListener("DOMContentLoaded", () => {
  // State Initialization
  const STATE = {
    theme: localStorage.getItem("ltht_theme") || "light",
    activeTab: localStorage.getItem("ltht_active_tab") || "theory",
    examMode: localStorage.getItem("ltht_exam_mode") === "true",
    examSubmitted: false,
    mcqAnswers: JSON.parse(localStorage.getItem("ltht_mcq_answers") || "{}"),
    fillAnswers: JSON.parse(localStorage.getItem("ltht_fill_answers") || "{}"),
    fillChecked: JSON.parse(localStorage.getItem("ltht_fill_checked") || "{}"),
    bookmarks: JSON.parse(localStorage.getItem("ltht_bookmarks") || "{}"),
    mcqFilter: { chapter: "all", status: "all", search: "" },
    fillFilter: { chapter: "all", status: "all", search: "" }
  };

  // Set Theme
  document.documentElement.setAttribute("data-theme", STATE.theme);
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.innerHTML = STATE.theme === "dark" ? "☀️ Giao diện sáng" : "🌙 Giao diện tối";
  }

  function saveState() {
    localStorage.setItem("ltht_theme", STATE.theme);
    localStorage.setItem("ltht_active_tab", STATE.activeTab);
    localStorage.setItem("ltht_exam_mode", STATE.examMode);
    localStorage.setItem("ltht_mcq_answers", JSON.stringify(STATE.mcqAnswers));
    localStorage.setItem("ltht_fill_answers", JSON.stringify(STATE.fillAnswers));
    localStorage.setItem("ltht_fill_checked", JSON.stringify(STATE.fillChecked));
    localStorage.setItem("ltht_bookmarks", JSON.stringify(STATE.bookmarks));
  }

  // --- RENDER THEORY ---
  function renderTheory() {
    const navList = document.getElementById("theory-nav-list");
    const container = document.getElementById("theory-content");
    if (!navList || !container) return;

    navList.innerHTML = "";
    container.innerHTML = "";

    THEORY_DATA.forEach((ch, idx) => {
      // Sidebar link
      const li = document.createElement("li");
      li.className = `theory-nav-item ${idx === 0 ? "active" : ""}`;
      li.innerHTML = `<a href="#chapter-${ch.id}">${ch.title.split(":")[0]}</a>`;
      li.addEventListener("click", () => {
        document.querySelectorAll(".theory-nav-item").forEach(el => el.classList.remove("active"));
        li.classList.add("active");
      });
      navList.appendChild(li);

      // Chapter Card
      const card = document.createElement("div");
      card.className = "theory-chapter-card";
      card.id = `chapter-${ch.id}`;

      let sectionsHtml = "";
      ch.sections.forEach(sec => {
        sectionsHtml += `
          <div class="theory-section">
            <h3>${sec.title}</h3>
            ${sec.content}
          </div>
        `;
      });

      card.innerHTML = `
        <div class="chapter-header">
          <span class="badge-qid">${ch.badge}</span>
          <h2 class="chapter-title" style="margin-top: 0.5rem;">${ch.title}</h2>
          <p class="chapter-summary">${ch.summary}</p>
        </div>
        ${sectionsHtml}
      `;
      container.appendChild(card);
    });
  }

  // --- RENDER MCQ ---
  function renderMCQPalette() {
    const grid = document.getElementById("mcq-palette-grid");
    if (!grid) return;
    grid.innerHTML = "";

    MCQ_DATA.forEach(q => {
      const btn = document.createElement("button");
      btn.className = "palette-btn";
      btn.textContent = q.id;
      btn.id = `palette-mcq-${q.id}`;

      const ans = STATE.mcqAnswers[q.id];
      if (ans !== undefined) {
        if (!STATE.examMode || STATE.examSubmitted) {
          if (ans === q.answer) {
            btn.classList.add("correct");
          } else {
            btn.classList.add("wrong");
          }
        } else {
          btn.style.backgroundColor = "var(--primary-light)";
          btn.style.color = "var(--primary-text)";
        }
      }

      if (STATE.bookmarks[`mcq_${q.id}`]) {
        btn.classList.add("marked");
      }

      btn.addEventListener("click", () => {
        const card = document.getElementById(`mcq-card-${q.id}`);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.style.outline = "2px solid var(--primary)";
          setTimeout(() => { card.style.outline = "none"; }, 1500);
        }
      });
      grid.appendChild(btn);
    });
  }

  function renderMCQList() {
    const list = document.getElementById("mcq-questions-list");
    if (!list) return;
    list.innerHTML = "";

    const { chapter, status, search } = STATE.mcqFilter;

    const filtered = MCQ_DATA.filter(q => {
      // Chapter filter
      if (chapter !== "all" && q.chapter !== parseInt(chapter)) return false;

      // Status filter
      const ans = STATE.mcqAnswers[q.id];
      const isBookmarked = !!STATE.bookmarks[`mcq_${q.id}`];
      if (status === "unanswered" && ans !== undefined) return false;
      if (status === "correct" && (ans === undefined || ans !== q.answer)) return false;
      if (status === "wrong" && (ans === undefined || ans === q.answer)) return false;
      if (status === "marked" && !isBookmarked) return false;

      // Search
      if (search) {
        const query = search.toLowerCase();
        const matchQ = q.question.toLowerCase().includes(query);
        const matchOpt = q.options.some(o => o.toLowerCase().includes(query));
        const matchExp = q.explanation.toLowerCase().includes(query);
        if (!matchQ && !matchOpt && !matchExp) return false;
      }
      return true;
    });

    document.getElementById("mcq-filter-count").textContent = `Hiển thị ${filtered.length} / 200 câu`;

    filtered.forEach(q => {
      const card = document.createElement("div");
      card.className = "question-card";
      card.id = `mcq-card-${q.id}`;

      const userAns = STATE.mcqAnswers[q.id];
      const isMarked = !!STATE.bookmarks[`mcq_${q.id}`];

      let optionsHtml = "";
      const letters = ["A", "B", "C", "D"];
      q.options.forEach((opt, idx) => {
        let optClass = "option-item";
        if (userAns !== undefined) {
          if (!STATE.examMode || STATE.examSubmitted) {
            if (idx === q.answer) {
              optClass += " correct";
            } else if (idx === userAns) {
              optClass += " wrong";
            }
          } else {
            if (idx === userAns) {
              optClass += " selected";
            }
          }
        }
        optionsHtml += `
          <div class="${optClass}" data-qid="${q.id}" data-idx="${idx}">
            <span class="option-letter">${letters[idx]}</span>
            <span class="option-text">${opt}</span>
          </div>
        `;
      });

      const showExp = (userAns !== undefined && (!STATE.examMode || STATE.examSubmitted));

      card.innerHTML = `
        <div class="card-top">
          <div class="card-badges">
            <span class="badge-qid">Câu ${q.id}</span>
            <span class="badge-chapter">Chương ${q.chapter}: ${q.chapterName}</span>
          </div>
          <button class="btn-star ${isMarked ? 'active' : ''}" data-qid="mcq_${q.id}" title="Đánh dấu câu hỏi">
            ${isMarked ? '★' : '☆'}
          </button>
        </div>
        <div class="question-text">${q.question}</div>
        <div class="options-grid">
          ${optionsHtml}
        </div>
        <div class="explanation-box ${showExp ? 'show' : ''}">
          <div class="explanation-title">💡 Giải thích chi tiết (Đáp án đúng: ${letters[q.answer]}):</div>
          <div>${q.explanation}</div>
        </div>
      `;

      list.appendChild(card);
    });

    // Option click events
    list.querySelectorAll(".option-item").forEach(item => {
      item.addEventListener("click", () => {
        const qid = parseInt(item.getAttribute("data-qid"));
        const idx = parseInt(item.getAttribute("data-idx"));
        if (STATE.examSubmitted) return; // Locked after exam submit

        STATE.mcqAnswers[qid] = idx;
        saveState();
        renderMCQList();
        renderMCQPalette();
        updateStats();
      });
    });

    // Bookmark click events
    list.querySelectorAll(".btn-star").forEach(star => {
      star.addEventListener("click", () => {
        const key = star.getAttribute("data-qid");
        STATE.bookmarks[key] = !STATE.bookmarks[key];
        saveState();
        renderMCQList();
        renderMCQPalette();
      });
    });
  }

  // --- RENDER FILL IN THE BLANK ---
  function normalizeAnswer(str) {
    if (!str) return "";
    return str.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function checkFillAnswer(userInput, acceptableList) {
    if (!userInput) return false;
    const cleanUser = normalizeAnswer(userInput);
    return acceptableList.some(acc => {
      const cleanAcc = normalizeAnswer(acc);
      if (cleanUser === cleanAcc) return true;
      // Strip leading '%' for register names
      if (cleanUser.replace(/^%/, "") === cleanAcc.replace(/^%/, "")) return true;
      // Numeric matching: 0x10 vs 16
      if (cleanUser.startsWith("0x") && !cleanAcc.startsWith("0x")) {
        const userNum = parseInt(cleanUser, 16);
        const accNum = parseInt(cleanAcc, 10);
        if (!isNaN(userNum) && !isNaN(accNum) && userNum === accNum) return true;
      }
      return false;
    });
  }

  function renderFillPalette() {
    const grid = document.getElementById("fill-palette-grid");
    if (!grid) return;
    grid.innerHTML = "";

    FILL_DATA.forEach(q => {
      const btn = document.createElement("button");
      btn.className = "palette-btn";
      btn.textContent = q.id;
      btn.id = `palette-fill-${q.id}`;

      const isChecked = !!STATE.fillChecked[q.id];
      const userText = STATE.fillAnswers[q.id];
      if (isChecked && userText) {
        if (checkFillAnswer(userText, q.answer)) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
      }

      if (STATE.bookmarks[`fill_${q.id}`]) {
        btn.classList.add("marked");
      }

      btn.addEventListener("click", () => {
        const card = document.getElementById(`fill-card-${q.id}`);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.style.outline = "2px solid var(--primary)";
          setTimeout(() => { card.style.outline = "none"; }, 1500);
        }
      });
      grid.appendChild(btn);
    });
  }

  function renderFillList() {
    const list = document.getElementById("fill-questions-list");
    if (!list) return;
    list.innerHTML = "";

    const { chapter, status, search } = STATE.fillFilter;

    const filtered = FILL_DATA.filter(q => {
      if (chapter !== "all" && q.chapter !== parseInt(chapter)) return false;

      const isChecked = !!STATE.fillChecked[q.id];
      const userText = STATE.fillAnswers[q.id] || "";
      const isCorrect = isChecked && checkFillAnswer(userText, q.answer);
      const isMarked = !!STATE.bookmarks[`fill_${q.id}`];

      if (status === "unanswered" && isChecked) return false;
      if (status === "correct" && !isCorrect) return false;
      if (status === "wrong" && (!isChecked || isCorrect)) return false;
      if (status === "marked" && !isMarked) return false;

      if (search) {
        const query = search.toLowerCase();
        const matchQ = q.question.toLowerCase().includes(query);
        const matchAns = q.answer.some(a => a.toLowerCase().includes(query));
        const matchExp = q.explanation.toLowerCase().includes(query);
        if (!matchQ && !matchAns && !matchExp) return false;
      }
      return true;
    });

    document.getElementById("fill-filter-count").textContent = `Hiển thị ${filtered.length} / 70 câu`;

    filtered.forEach(q => {
      const card = document.createElement("div");
      card.className = "question-card";
      card.id = `fill-card-${q.id}`;

      const userText = STATE.fillAnswers[q.id] || "";
      const isChecked = !!STATE.fillChecked[q.id];
      const isMarked = !!STATE.bookmarks[`fill_${q.id}`];
      const isCorrect = isChecked && checkFillAnswer(userText, q.answer);

      let statusMsg = "";
      if (isChecked) {
        if (isCorrect) {
          statusMsg = `<span style="color: var(--success); font-weight: 700;">✅ Chính xác!</span>`;
        } else {
          statusMsg = `<span style="color: var(--danger); font-weight: 700;">❌ Chưa chính xác.</span> Đáp án đúng: <code>${q.answer[0]}</code>`;
        }
      }

      card.innerHTML = `
        <div class="card-top">
          <div class="card-badges">
            <span class="badge-qid">Câu ${q.id}</span>
            <span class="badge-chapter">Chương ${q.chapter}: ${q.chapterName}</span>
          </div>
          <button class="btn-star ${isMarked ? 'active' : ''}" data-qid="fill_${q.id}" title="Đánh dấu câu hỏi">
            ${isMarked ? '★' : '☆'}
          </button>
        </div>
        <div class="question-text">${q.question}</div>
        <div class="hint-box" id="hint-box-${q.id}">💡 Gợi ý: ${q.hint}</div>
        <div class="fill-form">
          <input type="text" class="fill-input" id="fill-input-${q.id}" value="${userText}" placeholder="Nhập câu trả lời..." />
          <button class="btn-fill-check" data-qid="${q.id}">Kiểm tra</button>
          <button class="btn-hint" data-qid="${q.id}">Gợi ý</button>
          <div style="width: 100%; margin-top: 0.35rem;">${statusMsg}</div>
        </div>
        <div class="explanation-box ${isChecked ? 'show' : ''}">
          <div class="explanation-title">💡 Giải thích chi tiết:</div>
          <div>${q.explanation}</div>
        </div>
      `;

      list.appendChild(card);
    });

    // Check button click
    list.querySelectorAll(".btn-fill-check").forEach(btn => {
      btn.addEventListener("click", () => {
        const qid = parseInt(btn.getAttribute("data-qid"));
        const input = document.getElementById(`fill-input-${qid}`);
        if (!input) return;

        STATE.fillAnswers[qid] = input.value.trim();
        STATE.fillChecked[qid] = true;
        saveState();
        renderFillList();
        renderFillPalette();
        updateStats();
      });
    });

    // Hint button click
    list.querySelectorAll(".btn-hint").forEach(btn => {
      btn.addEventListener("click", () => {
        const qid = parseInt(btn.getAttribute("data-qid"));
        const box = document.getElementById(`hint-box-${qid}`);
        if (box) {
          box.style.display = box.style.display === "block" ? "none" : "block";
        }
      });
    });

    // Input Enter key
    list.querySelectorAll(".fill-input").forEach(inp => {
      inp.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          const qid = parseInt(inp.id.replace("fill-input-", ""));
          STATE.fillAnswers[qid] = inp.value.trim();
          STATE.fillChecked[qid] = true;
          saveState();
          renderFillList();
          renderFillPalette();
          updateStats();
        }
      });
    });

    // Bookmark
    list.querySelectorAll(".btn-star").forEach(star => {
      star.addEventListener("click", () => {
        const key = star.getAttribute("data-qid");
        STATE.bookmarks[key] = !STATE.bookmarks[key];
        saveState();
        renderFillList();
        renderFillPalette();
      });
    });
  }

  // --- STATS & ANALYTICS ---
  function updateStats() {
    // MCQ stats
    let mcqDone = 0;
    let mcqCorrect = 0;
    MCQ_DATA.forEach(q => {
      const a = STATE.mcqAnswers[q.id];
      if (a !== undefined) {
        mcqDone++;
        if (a === q.answer) mcqCorrect++;
      }
    });

    // Fill stats
    let fillDone = 0;
    let fillCorrect = 0;
    FILL_DATA.forEach(q => {
      if (STATE.fillChecked[q.id]) {
        fillDone++;
        if (checkFillAnswer(STATE.fillAnswers[q.id], q.answer)) {
          fillCorrect++;
        }
      }
    });

    const totalDone = mcqDone + fillDone;
    const totalCorrect = mcqCorrect + fillCorrect;
    const overallPct = Math.round((totalDone / 270) * 100);
    const accuracyPct = totalDone > 0 ? Math.round((totalCorrect / totalDone) * 100) : 0;

    // Update UI elements
    const totalDoneEl = document.getElementById("stat-total-done");
    if (totalDoneEl) totalDoneEl.textContent = `${totalDone} / 270 (${overallPct}%)`;

    const totalAccEl = document.getElementById("stat-accuracy");
    if (totalAccEl) totalAccEl.textContent = `${accuracyPct}% (${totalCorrect} câu đúng)`;

    const mcqStatEl = document.getElementById("stat-mcq");
    if (mcqStatEl) mcqStatEl.textContent = `${mcqCorrect} / ${mcqDone} đúng (${mcqDone}/200 đã làm)`;

    const fillStatEl = document.getElementById("stat-fill");
    if (fillStatEl) fillStatEl.textContent = `${fillCorrect} / ${fillDone} đúng (${fillDone}/70 đã làm)`;

    const progressFill = document.getElementById("overall-progress-fill");
    if (progressFill) progressFill.style.width = `${overallPct}%`;

    // Chapter breakdown
    const chTable = document.getElementById("stats-chapter-table");
    if (chTable) {
      chTable.innerHTML = "";
      for (let ch = 1; ch <= 5; ch++) {
        const mcqCh = MCQ_DATA.filter(q => q.chapter === ch);
        const fillCh = FILL_DATA.filter(q => q.chapter === ch);
        const totalCh = mcqCh.length + fillCh.length;

        let chCorrect = 0;
        let chDone = 0;
        mcqCh.forEach(q => {
          if (STATE.mcqAnswers[q.id] !== undefined) {
            chDone++;
            if (STATE.mcqAnswers[q.id] === q.answer) chCorrect++;
          }
        });
        fillCh.forEach(q => {
          if (STATE.fillChecked[q.id]) {
            chDone++;
            if (checkFillAnswer(STATE.fillAnswers[q.id], q.answer)) chCorrect++;
          }
        });

        const chPct = totalCh > 0 ? Math.round((chDone / totalCh) * 100) : 0;
        const chAcc = chDone > 0 ? Math.round((chCorrect / chDone) * 100) : 0;

        const row = document.createElement("tr");
        row.innerHTML = `
          <td><b>Chương ${ch}: ${mcqCh[0]?.chapterName || ''}</b></td>
          <td>${chDone} / ${totalCh}</td>
          <td>${chPct}%</td>
          <td><b>${chCorrect}</b> câu đúng (${chAcc}%)</td>
        `;
        chTable.appendChild(row);
      }
    }
  }

  // --- TAB SWITCHING ---
  function switchTab(tabId) {
    STATE.activeTab = tabId;
    saveState();

    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });

    document.querySelectorAll(".tab-pane").forEach(pane => {
      pane.classList.toggle("active", pane.id === `tab-${tabId}`);
    });

    if (tabId === "theory") renderTheory();
    if (tabId === "mcq") {
      renderMCQPalette();
      renderMCQList();
    }
    if (tabId === "fill") {
      renderFillPalette();
      renderFillList();
    }
    if (tabId === "stats") updateStats();
  }

  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      switchTab(btn.getAttribute("data-tab"));
    });
  });

  // --- THEME TOGGLE ---
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      STATE.theme = STATE.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", STATE.theme);
      themeBtn.innerHTML = STATE.theme === "dark" ? "☀️ Giao diện sáng" : "🌙 Giao diện tối";
      saveState();
    });
  }

  // --- MCQ CONTROLS ---
  document.querySelectorAll(".mcq-ch-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mcq-ch-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.mcqFilter.chapter = btn.getAttribute("data-ch");
      renderMCQList();
    });
  });

  document.querySelectorAll(".mcq-status-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mcq-status-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.mcqFilter.status = btn.getAttribute("data-status");
      renderMCQList();
    });
  });

  const mcqSearch = document.getElementById("mcq-search-input");
  if (mcqSearch) {
    mcqSearch.addEventListener("input", (e) => {
      STATE.mcqFilter.search = e.target.value.trim();
      renderMCQList();
    });
  }

  // Exam Mode Toggle
  const examBtn = document.getElementById("mcq-exam-mode-btn");
  const examBar = document.getElementById("mcq-exam-bar");
  const submitExamBtn = document.getElementById("btn-submit-exam");

  function setExamMode(active) {
    STATE.examMode = active;
    if (active) {
      examBtn.classList.add("exam-active");
      examBtn.innerHTML = "📝 Chế độ: <b>Thi thử (Ẩn đáp án)</b>";
      examBar.classList.add("show");
    } else {
      examBtn.classList.remove("exam-active");
      examBtn.innerHTML = "💡 Chế độ: <b>Ôn luyện (Hiện đáp án)</b>";
      examBar.classList.remove("show");
      STATE.examSubmitted = false;
    }
    saveState();
    renderMCQList();
    renderMCQPalette();
  }

  if (examBtn) {
    examBtn.addEventListener("click", () => {
      setExamMode(!STATE.examMode);
    });
  }

  if (submitExamBtn) {
    submitExamBtn.addEventListener("click", () => {
      if (confirm("Bạn có chắc chắn muốn nộp bài thi thử để xem điểm và lời giải chi tiết?")) {
        STATE.examSubmitted = true;
        renderMCQList();
        renderMCQPalette();
        updateStats();
        switchTab("stats");
      }
    });
  }

  // --- FILL CONTROLS ---
  document.querySelectorAll(".fill-ch-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".fill-ch-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.fillFilter.chapter = btn.getAttribute("data-ch");
      renderFillList();
    });
  });

  document.querySelectorAll(".fill-status-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".fill-status-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.fillFilter.status = btn.getAttribute("data-status");
      renderFillList();
    });
  });

  const fillSearch = document.getElementById("fill-search-input");
  if (fillSearch) {
    fillSearch.addEventListener("input", (e) => {
      STATE.fillFilter.search = e.target.value.trim();
      renderFillList();
    });
  }

  // --- RESET ALL ---
  const resetBtn = document.getElementById("btn-reset-all");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Bạn có chắc muốn xóa toàn bộ lịch sử làm bài và làm lại từ đầu không?")) {
        STATE.mcqAnswers = {};
        STATE.fillAnswers = {};
        STATE.fillChecked = {};
        STATE.bookmarks = {};
        STATE.examSubmitted = false;
        saveState();
        renderMCQPalette();
        renderMCQList();
        renderFillPalette();
        renderFillList();
        updateStats();
        alert("Đã làm mới dữ liệu ôn tập thành công!");
      }
    });
  }

  // Initial Boot
  switchTab(STATE.activeTab);
  if (STATE.examMode) setExamMode(true);
});
