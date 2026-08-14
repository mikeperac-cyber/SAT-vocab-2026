/**
 * SAT & DSAT 2026 MASTER VOCABULARY APPLICATION
 * Interactive Core Controller
 */

(function () {
  'use strict';

  // ==========================================
  // STATE MANAGEMENT & LOCAL STORAGE
  // ==========================================
  const STORAGE_KEY = 'sat_master_2026_progress_v1';
  const THEME_KEY = 'sat_master_theme_pref';

  const AppState = {
    currentView: 'flashcards', // 'flashcards' | 'quiz' | 'explorer' | 'strategy'
    deck: [...SAT_WORDS_DATA],
    currentIndex: 0,
    isFlipped: false,
    
    // Filters
    flashcardFilter: {
      category: 'all',
      difficulty: 'all',
      status: 'all'
    },
    explorerFilter: {
      search: '',
      category: 'all',
      difficulty: 'all',
      status: 'all'
    },

    // User Progress
    progress: {
      mastered: [], // Array of word IDs
      review: [],   // Array of word IDs
      starred: [],  // Array of word IDs
      quizStats: {
        total: 0,
        correct: 0,
        streak: 0,
        bestStreak: 0
      }
    },

    // Quiz Mode State
    quiz: {
      pool: [...SAT_WORDS_DATA],
      currentIndex: 0,
      selectedOption: null,
      isAnswered: false,
      timerSeconds: 60,
      timerInterval: null,
      timerRunning: true
    }
  };

  // Load progress from localStorage
  function loadUserData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        AppState.progress.mastered = parsed.mastered || [];
        AppState.progress.review = parsed.review || [];
        AppState.progress.starred = parsed.starred || [];
        AppState.progress.quizStats = parsed.quizStats || AppState.progress.quizStats;
      }
    } catch (e) {
      console.warn('LocalStorage not available, running in memory:', e);
    }
  }

  // Save progress to localStorage
  function saveUserData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(AppState.progress));
      updateGlobalStats();
    } catch (e) {
      console.warn('Failed to save progress:', e);
    }
  }

  // ==========================================
  // SPEECH SYNTHESIS (AUDIO PRONUNCIATION)
  // ==========================================
  function speakWord(text) {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis not supported in this browser.');
      return;
    }
    window.speechSynthesis.cancel(); // Stop previous
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // slightly slower for clear SAT pronunciation
    utterance.pitch = 1.0;
    
    // Pick US English voice if available
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang === 'en-US' || v.lang === 'en_US');
    if (usVoice) utterance.voice = usVoice;

    window.speechSynthesis.speak(utterance);
  }

  // ==========================================
  // DOM ELEMENT REFERENCES
  // ==========================================
  const DOM = {
    // Theme
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeIcon: document.getElementById('theme-icon'),
    
    // Global Header Stats
    headerMasteredCount: document.getElementById('header-mastered-count'),
    shortcutsBtn: document.getElementById('shortcuts-btn'),
    shortcutsModal: document.getElementById('shortcuts-modal'),
    shortcutsModalClose: document.getElementById('shortcuts-modal-close'),
    wordDetailModal: document.getElementById('word-detail-modal'),
    wordDetailModalClose: document.getElementById('word-detail-modal-close'),
    wordDetailContent: document.getElementById('word-detail-content'),

    // Navigation
    navBtns: document.querySelectorAll('.nav-btn'),
    viewSections: document.querySelectorAll('.view-section'),

    // Flashcards
    flashcardStage: document.getElementById('flashcard-stage'),
    flashcardInner: document.getElementById('flashcard-inner'),
    fcCategoryTag: document.getElementById('fc-category-tag'),
    fcDiffBadge: document.getElementById('fc-diff-badge'),
    fcWordTitle: document.getElementById('fc-word-title'),
    fcPosTag: document.getElementById('fc-pos-tag'),
    fcIpaText: document.getElementById('fc-ipa-text'),
    fcAudioBtn: document.getElementById('fc-audio-btn'),
    fcTrQuickText: document.getElementById('fc-tr-quick-text'),
    
    fcBackWord: document.getElementById('fc-back-word'),
    fcBackDomain: document.getElementById('fc-back-domain'),
    fcDefinitionText: document.getElementById('fc-definition-text'),
    fcTrNuanceText: document.getElementById('fc-tr-nuance-text'),
    fcExampleBox: document.getElementById('fc-example-box'),
    fcStrategyBox: document.getElementById('fc-strategy-box'),
    fcTrapsList: document.getElementById('fc-traps-list'),
    fcSynonymsList: document.getElementById('fc-synonyms-list'),
    
    fcPrevBtn: document.getElementById('fc-prev-btn'),
    fcNextBtn: document.getElementById('fc-next-btn'),
    fcShuffleBtn: document.getElementById('fc-shuffle-btn'),
    fcMasterBtn: document.getElementById('fc-master-btn'),
    fcReviewBtn: document.getElementById('fc-review-btn'),
    fcStarBtn: document.getElementById('fc-star-btn'),
    fcCounterPill: document.getElementById('fc-counter-pill'),
    
    fcCategoryFilter: document.getElementById('fc-category-filter'),
    fcDifficultyFilter: document.getElementById('fc-difficulty-filter'),
    fcStatusFilter: document.getElementById('fc-status-filter'),

    // DSAT Quiz Simulator
    quizPassageDomain: document.getElementById('quiz-passage-domain'),
    quizPassageText: document.getElementById('quiz-passage-text'),
    quizOptionsList: document.getElementById('quiz-options-list'),
    quizExplanationPanel: document.getElementById('quiz-explanation-panel'),
    quizExplanationHeader: document.getElementById('quiz-explanation-header'),
    quizExplanationText: document.getElementById('quiz-explanation-text'),
    quizTimerDisplay: document.getElementById('quiz-timer-display'),
    quizQuestionCounter: document.getElementById('quiz-question-counter'),
    quizNextBtn: document.getElementById('quiz-next-btn'),
    quizScorePill: document.getElementById('quiz-score-pill'),
    quizStreakPill: document.getElementById('quiz-streak-pill'),

    // Explorer
    explorerSearchInput: document.getElementById('explorer-search-input'),
    explorerCategoryChips: document.getElementById('explorer-category-chips'),
    explorerCountDisplay: document.getElementById('explorer-count-display'),
    wordsGrid: document.getElementById('words-grid')
  };

  // ==========================================
  // VIEW SWITCHING
  // ==========================================
  function switchView(viewName) {
    AppState.currentView = viewName;
    DOM.navBtns.forEach(btn => {
      if (btn.dataset.view === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    DOM.viewSections.forEach(section => {
      if (section.id === `view-${viewName}`) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    if (viewName === 'flashcards') {
      renderCurrentFlashcard();
    } else if (viewName === 'quiz') {
      initQuizQuestion();
    } else if (viewName === 'explorer') {
      renderExplorerGrid();
    }
  }

  // ==========================================
  // FLASHCARD CONTROLLER
  // ==========================================
  function getFilteredFlashcards() {
    return SAT_WORDS_DATA.filter(w => {
      // Category filter
      if (AppState.flashcardFilter.category !== 'all' && w.category !== AppState.flashcardFilter.category) {
        return false;
      }
      // Difficulty filter
      if (AppState.flashcardFilter.difficulty !== 'all' && w.difficulty.toLowerCase() !== AppState.flashcardFilter.difficulty.toLowerCase()) {
        return false;
      }
      // Status filter
      if (AppState.flashcardFilter.status === 'mastered' && !AppState.progress.mastered.includes(w.id)) {
        return false;
      }
      if (AppState.flashcardFilter.status === 'review' && !AppState.progress.review.includes(w.id)) {
        return false;
      }
      if (AppState.flashcardFilter.status === 'starred' && !AppState.progress.starred.includes(w.id)) {
        return false;
      }
      return true;
    });
  }

  function renderCurrentFlashcard() {
    const deck = getFilteredFlashcards();
    if (deck.length === 0) {
      DOM.fcWordTitle.textContent = "No Words Found";
      DOM.fcPosTag.textContent = "";
      DOM.fcIpaText.textContent = "";
      DOM.fcTrQuickText.textContent = "Try changing your filters to see cards.";
      DOM.fcCounterPill.textContent = `0 / 0`;
      return;
    }

    if (AppState.currentIndex >= deck.length) {
      AppState.currentIndex = 0;
    }
    if (AppState.currentIndex < 0) {
      AppState.currentIndex = deck.length - 1;
    }

    const currentWord = deck[AppState.currentIndex];

    // Unflip card when rendering new
    AppState.isFlipped = false;
    DOM.flashcardInner.classList.remove('is-flipped');

    // FRONT
    DOM.fcCategoryTag.textContent = currentWord.category;
    DOM.fcDiffBadge.textContent = currentWord.difficulty;
    DOM.fcDiffBadge.className = `difficulty-badge ${currentWord.difficulty.toLowerCase()}`;
    DOM.fcWordTitle.textContent = currentWord.word;
    DOM.fcPosTag.textContent = currentWord.pos;
    DOM.fcIpaText.textContent = currentWord.ipa;
    DOM.fcTrQuickText.textContent = currentWord.turkishMeaning;

    // BACK
    DOM.fcBackWord.textContent = currentWord.word;
    DOM.fcBackDomain.textContent = currentWord.satDomain;
    DOM.fcDefinitionText.textContent = currentWord.definition;
    DOM.fcTrNuanceText.innerHTML = `<strong>Bağlam & İpucu:</strong> ${currentWord.turkishNuance}`;
    
    // Highlight word in sentence
    const regex = new RegExp(`(${currentWord.word}|${currentWord.word.toLowerCase()})`, 'gi');
    const highlightedSentence = currentWord.exampleSentence.replace(regex, '<mark>$1</mark>');
    DOM.fcExampleBox.innerHTML = `"${highlightedSentence}"`;

    // 2026 Strategy
    DOM.fcStrategyBox.innerHTML = `<strong>DSAT 2026 Soru Formatı:</strong> ${currentWord.sat2026HowTested}`;

    // Traps
    DOM.fcTrapsList.innerHTML = currentWord.distractorTraps.map(trap => `<span class="trap-pill">⚠️ ${trap}</span>`).join('');

    // Synonyms
    DOM.fcSynonymsList.innerHTML = currentWord.synonyms.map(syn => `<span class="synonym-pill">${syn}</span>`).join('');

    // Counter
    DOM.fcCounterPill.textContent = `${AppState.currentIndex + 1} / ${deck.length}`;

    // Status button states
    updateFlashcardActionButtons(currentWord.id);
  }

  function updateFlashcardActionButtons(wordId) {
    if (AppState.progress.mastered.includes(wordId)) {
      DOM.fcMasterBtn.classList.add('is-mastered');
      DOM.fcMasterBtn.innerHTML = `✓ Mastered`;
    } else {
      DOM.fcMasterBtn.classList.remove('is-mastered');
      DOM.fcMasterBtn.innerHTML = `Mark Mastered`;
    }

    if (AppState.progress.review.includes(wordId)) {
      DOM.fcReviewBtn.classList.add('is-review');
      DOM.fcReviewBtn.innerHTML = `🚩 In Review`;
    } else {
      DOM.fcReviewBtn.classList.remove('is-review');
      DOM.fcReviewBtn.innerHTML = `Need Review`;
    }

    if (AppState.progress.starred.includes(wordId)) {
      DOM.fcStarBtn.classList.add('is-starred');
      DOM.fcStarBtn.innerHTML = `★ Starred`;
    } else {
      DOM.fcStarBtn.classList.remove('is-starred');
      DOM.fcStarBtn.innerHTML = `☆ Star`;
    }
  }

  function flipFlashcard() {
    AppState.isFlipped = !AppState.isFlipped;
    if (AppState.isFlipped) {
      DOM.flashcardInner.classList.add('is-flipped');
    } else {
      DOM.flashcardInner.classList.remove('is-flipped');
    }
  }

  function nextFlashcard() {
    const deck = getFilteredFlashcards();
    if (deck.length <= 1) return;
    AppState.currentIndex = (AppState.currentIndex + 1) % deck.length;
    renderCurrentFlashcard();
  }

  function prevFlashcard() {
    const deck = getFilteredFlashcards();
    if (deck.length <= 1) return;
    AppState.currentIndex = (AppState.currentIndex - 1 + deck.length) % deck.length;
    renderCurrentFlashcard();
  }

  function shuffleFlashcards() {
    // Pick a random index different from current
    const deck = getFilteredFlashcards();
    if (deck.length <= 1) return;
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * deck.length);
    } while (randomIndex === AppState.currentIndex);
    AppState.currentIndex = randomIndex;
    renderCurrentFlashcard();
  }

  function toggleStatus(type) {
    const deck = getFilteredFlashcards();
    if (deck.length === 0) return;
    const currentWord = deck[AppState.currentIndex];
    const id = currentWord.id;

    if (type === 'mastered') {
      const idx = AppState.progress.mastered.indexOf(id);
      if (idx > -1) {
        AppState.progress.mastered.splice(idx, 1);
      } else {
        AppState.progress.mastered.push(id);
        // Remove from review if mastered
        const rIdx = AppState.progress.review.indexOf(id);
        if (rIdx > -1) AppState.progress.review.splice(rIdx, 1);
      }
    } else if (type === 'review') {
      const idx = AppState.progress.review.indexOf(id);
      if (idx > -1) {
        AppState.progress.review.splice(idx, 1);
      } else {
        AppState.progress.review.push(id);
        // Remove from mastered
        const mIdx = AppState.progress.mastered.indexOf(id);
        if (mIdx > -1) AppState.progress.mastered.splice(mIdx, 1);
      }
    } else if (type === 'starred') {
      const idx = AppState.progress.starred.indexOf(id);
      if (idx > -1) {
        AppState.progress.starred.splice(idx, 1);
      } else {
        AppState.progress.starred.push(id);
      }
    }

    saveUserData();
    updateFlashcardActionButtons(id);
  }

  // ==========================================
  // DSAT 2026 QUIZ ENGINE
  // ==========================================
  function initQuizQuestion() {
    const qState = AppState.quiz;
    const currentWord = qState.pool[qState.currentIndex];
    const quizData = currentWord.quiz;

    qState.selectedOption = null;
    qState.isAnswered = false;

    // Timer reset
    resetQuizTimer();

    // DOM Updates
    DOM.quizPassageDomain.textContent = `${currentWord.satDomain} • Words in Context`;
    
    // Render passage with blank
    const passageHTML = quizData.passage.replace('_______', `<span class="passage-blank">[ &nbsp;?&nbsp; ]</span>`);
    DOM.quizPassageText.innerHTML = passageHTML;

    // Render Options A, B, C, D
    const optionLetters = ['A', 'B', 'C', 'D'];
    DOM.quizOptionsList.innerHTML = quizData.options.map((opt, idx) => `
      <button class="dsat-option-btn" data-index="${idx}">
        <span class="option-letter">${optionLetters[idx]}</span>
        <span class="option-text">${opt}</span>
      </button>
    `).join('');

    // Hide Explanation
    DOM.quizExplanationPanel.classList.remove('active');
    DOM.quizNextBtn.disabled = true;

    // Counter & Stats
    DOM.quizQuestionCounter.textContent = `Question ${qState.currentIndex + 1} of ${qState.pool.length}`;
    DOM.quizScorePill.textContent = `Score: ${AppState.progress.quizStats.correct}/${AppState.progress.quizStats.total}`;
    DOM.quizStreakPill.textContent = `🔥 ${AppState.progress.quizStats.streak} Streak`;

    // Attach option clicks
    document.querySelectorAll('.dsat-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (qState.isAnswered) return;
        const optIdx = parseInt(btn.dataset.index, 10);
        selectQuizOption(optIdx);
      });
    });
  }

  function selectQuizOption(selectedIndex) {
    const qState = AppState.quiz;
    if (qState.isAnswered) return;

    qState.isAnswered = true;
    qState.selectedOption = selectedIndex;
    clearInterval(qState.timerInterval);

    const currentWord = qState.pool[qState.currentIndex];
    const isCorrect = selectedIndex === currentWord.quiz.correct;

    // Update stats
    AppState.progress.quizStats.total++;
    if (isCorrect) {
      AppState.progress.quizStats.correct++;
      AppState.progress.quizStats.streak++;
      if (AppState.progress.quizStats.streak > AppState.progress.quizStats.bestStreak) {
        AppState.progress.quizStats.bestStreak = AppState.progress.quizStats.streak;
      }
      // Auto add to mastered
      if (!AppState.progress.mastered.includes(currentWord.id)) {
        AppState.progress.mastered.push(currentWord.id);
      }
    } else {
      AppState.progress.quizStats.streak = 0;
      // Auto add to review
      if (!AppState.progress.review.includes(currentWord.id)) {
        AppState.progress.review.push(currentWord.id);
      }
    }
    saveUserData();

    // Style option buttons
    const optButtons = document.querySelectorAll('.dsat-option-btn');
    optButtons.forEach((btn, idx) => {
      if (idx === currentWord.quiz.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('incorrect');
      }
      btn.disabled = true;
    });

    // Update blank in passage with correct word
    const filledPassage = currentWord.quiz.passage.replace('_______', `<span class="passage-blank" style="color: #10b981; border-color: #10b981; background: #ecfdf5;">${currentWord.quiz.options[currentWord.quiz.correct]}</span>`);
    DOM.quizPassageText.innerHTML = filledPassage;

    // Show Explanation
    DOM.quizExplanationHeader.textContent = isCorrect ? '✓ Correct Answer!' : '✗ Incorrect. Here is the DSAT Rationale:';
    DOM.quizExplanationHeader.className = `explanation-header ${isCorrect ? 'correct' : 'incorrect'}`;
    DOM.quizExplanationText.textContent = currentWord.quiz.explanation;
    DOM.quizExplanationPanel.classList.add('active');

    DOM.quizNextBtn.disabled = false;
    DOM.quizScorePill.textContent = `Score: ${AppState.progress.quizStats.correct}/${AppState.progress.quizStats.total}`;
    DOM.quizStreakPill.textContent = `🔥 ${AppState.progress.quizStats.streak} Streak`;
  }

  function nextQuizQuestion() {
    const qState = AppState.quiz;
    qState.currentIndex = (qState.currentIndex + 1) % qState.pool.length;
    initQuizQuestion();
  }

  function resetQuizTimer() {
    clearInterval(AppState.quiz.timerInterval);
    AppState.quiz.timerSeconds = 60;
    updateTimerDisplay();

    AppState.quiz.timerInterval = setInterval(() => {
      if (AppState.quiz.timerSeconds > 0) {
        AppState.quiz.timerSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(AppState.quiz.timerInterval);
        if (!AppState.quiz.isAnswered) {
          selectQuizOption(-1); // Timeout
        }
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const secs = AppState.quiz.timerSeconds;
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    DOM.quizTimerDisplay.textContent = `⏱️ ${mins}:${remSecs < 10 ? '0' : ''}${remSecs}`;
    if (secs <= 15) {
      DOM.quizTimerDisplay.style.color = '#ef4444';
    } else {
      DOM.quizTimerDisplay.style.color = '#fff';
    }
  }

  // ==========================================
  // VOCABULARY EXPLORER & SEARCH
  // ==========================================
  function renderExplorerGrid() {
    const query = AppState.explorerFilter.search.trim().toLowerCase();
    const category = AppState.explorerFilter.category;
    const difficulty = AppState.explorerFilter.difficulty;
    const status = AppState.explorerFilter.status;

    const filtered = SAT_WORDS_DATA.filter(w => {
      // Search text filter (word, turkish, def, synonyms)
      if (query) {
        const matchWord = w.word.toLowerCase().includes(query);
        const matchTR = w.turkishMeaning.toLowerCase().includes(query) || w.turkishNuance.toLowerCase().includes(query);
        const matchDef = w.definition.toLowerCase().includes(query);
        const matchSyn = w.synonyms.some(s => s.toLowerCase().includes(query));
        if (!matchWord && !matchTR && !matchDef && !matchSyn) return false;
      }

      // Category
      if (category !== 'all' && w.category !== category) return false;

      // Difficulty
      if (difficulty !== 'all' && w.difficulty.toLowerCase() !== difficulty.toLowerCase()) return false;

      // Status
      if (status === 'mastered' && !AppState.progress.mastered.includes(w.id)) return false;
      if (status === 'review' && !AppState.progress.review.includes(w.id)) return false;
      if (status === 'starred' && !AppState.progress.starred.includes(w.id)) return false;

      return true;
    });

    DOM.explorerCountDisplay.textContent = `Showing ${filtered.length} of 100 words`;

    if (filtered.length === 0) {
      DOM.wordsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <h3>No matching vocabulary words found</h3>
          <p>Try searching for a different keyword or reset filters.</p>
        </div>
      `;
      return;
    }

    DOM.wordsGrid.innerHTML = filtered.map(w => {
      const isMastered = AppState.progress.mastered.includes(w.id);
      const isReview = AppState.progress.review.includes(w.id);
      const isStarred = AppState.progress.starred.includes(w.id);

      return `
        <div class="word-card-mini" data-id="${w.id}">
          <div class="mini-card-top">
            <div class="mini-card-title">
              ${w.word}
              ${isStarred ? '★' : ''}
            </div>
            <span class="difficulty-badge ${w.difficulty.toLowerCase()}">${w.difficulty}</span>
          </div>
          <div class="mini-card-tr">${w.turkishMeaning}</div>
          <div class="mini-card-def">${w.definition}</div>
          <div class="mini-card-footer">
            <span>${w.pos} • ${w.category}</span>
            <div style="display: flex; gap: 0.35rem;">
              ${isMastered ? '<span style="color: var(--success); font-weight: 700;">✓ Mastered</span>' : ''}
              ${isReview ? '<span style="color: var(--warning); font-weight: 700;">🚩 Review</span>' : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach card clicks to open detail modal
    document.querySelectorAll('.word-card-mini').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id, 10);
        openWordDetailModal(id);
      });
    });
  }

  // ==========================================
  // WORD DETAIL MODAL
  // ==========================================
  function openWordDetailModal(wordId) {
    const word = SAT_WORDS_DATA.find(w => w.id === wordId);
    if (!word) return;

    const regex = new RegExp(`(${word.word}|${word.word.toLowerCase()})`, 'gi');
    const highlightedSentence = word.exampleSentence.replace(regex, '<mark>$1</mark>');

    DOM.wordDetailContent.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <h2 style="font-size: 2.25rem; font-weight: 800; color: var(--text-primary);">${word.word}</h2>
            <button id="modal-audio-btn" class="audio-play-btn" title="Pronounce">🔊</button>
          </div>
          <div style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.25rem;">
            <em>${word.pos}</em> • <span style="font-family: var(--font-mono);">${word.ipa}</span> • <span>${word.category}</span>
          </div>
        </div>
        <span class="difficulty-badge ${word.difficulty.toLowerCase()}">${word.difficulty}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div style="background-color: var(--bg-tertiary); padding: 1rem 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-primary);">
          <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--accent-primary); margin-bottom: 0.25rem;">Türkçe Anlamı & Bağlamsal Nüans</div>
          <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">${word.turkishMeaning}</div>
          <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">${word.turkishNuance}</div>
        </div>

        <div>
          <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.25rem;">English Academic Definition</div>
          <div style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary);">${word.definition}</div>
        </div>

        <div>
          <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.25rem;">Authentic SAT Passage Context (${word.satDomain})</div>
          <div style="background-color: var(--bg-tertiary); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md); font-family: var(--font-serif); font-size: 1.05rem; line-height: 1.6;">
            "${highlightedSentence}"
          </div>
        </div>

        <div style="background-color: rgba(217, 119, 6, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 1rem; border-radius: var(--radius-md);">
          <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #d97706; margin-bottom: 0.25rem;">🎯 DSAT 2026 Exam Strategy & Traps</div>
          <div style="font-size: 0.9rem; color: var(--text-primary); margin-bottom: 0.75rem;">${word.sat2026HowTested}</div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${word.distractorTraps.map(trap => `<span class="trap-pill" style="background: rgba(239, 68, 68, 0.15); border-color: rgba(239, 68, 68, 0.3); color: var(--danger);">⚠️ ${trap}</span>`).join('')}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div>
            <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.35rem;">Synonyms</div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              ${word.synonyms.map(s => `<span class="synonym-pill" style="background: var(--bg-tertiary); color: var(--text-primary); border: 1px solid var(--border-color);">${s}</span>`).join('')}
            </div>
          </div>
          <div>
            <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.35rem;">Antonyms</div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
              ${word.antonyms.map(a => `<span class="synonym-pill" style="background: var(--bg-tertiary); color: var(--danger); border: 1px solid var(--border-color);">${a}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    DOM.wordDetailModal.classList.add('active');

    // Attach audio in modal
    const modalAudioBtn = document.getElementById('modal-audio-btn');
    if (modalAudioBtn) {
      modalAudioBtn.addEventListener('click', () => speakWord(word.word));
    }
  }

  // ==========================================
  // GLOBAL STATS & THEME
  // ==========================================
  function updateGlobalStats() {
    DOM.headerMasteredCount.textContent = `${AppState.progress.mastered.length}/100`;
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      DOM.themeIcon.innerHTML = `☀️`;
      DOM.themeToggleBtn.title = 'Switch to Light Mode';
    } else {
      DOM.themeIcon.innerHTML = `🌙`;
      DOM.themeToggleBtn.title = 'Switch to Dark Mode';
    }
  }

  // ==========================================
  // EVENT LISTENERS & INITIALIZATION
  // ==========================================
  function attachEventListeners() {
    // Navigation
    DOM.navBtns.forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    // Theme toggle
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);

    // Shortcuts Modal
    DOM.shortcutsBtn.addEventListener('click', () => DOM.shortcutsModal.classList.add('active'));
    DOM.shortcutsModalClose.addEventListener('click', () => DOM.shortcutsModal.classList.remove('active'));
    DOM.shortcutsModal.addEventListener('click', (e) => {
      if (e.target === DOM.shortcutsModal) DOM.shortcutsModal.classList.remove('active');
    });

    // Word Detail Modal Close
    DOM.wordDetailModalClose.addEventListener('click', () => DOM.wordDetailModal.classList.remove('active'));
    DOM.wordDetailModal.addEventListener('click', (e) => {
      if (e.target === DOM.wordDetailModal) DOM.wordDetailModal.classList.remove('active');
    });

    // Flashcard Interactions
    DOM.flashcardStage.addEventListener('click', (e) => {
      // Ignore if audio button clicked
      if (e.target.closest('.audio-play-btn')) return;
      flipFlashcard();
    });

    DOM.fcAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const deck = getFilteredFlashcards();
      if (deck.length > 0) {
        speakWord(deck[AppState.currentIndex].word);
      }
    });

    DOM.fcNextBtn.addEventListener('click', nextFlashcard);
    DOM.fcPrevBtn.addEventListener('click', prevFlashcard);
    DOM.fcShuffleBtn.addEventListener('click', shuffleFlashcards);
    DOM.fcMasterBtn.addEventListener('click', () => toggleStatus('mastered'));
    DOM.fcReviewBtn.addEventListener('click', () => toggleStatus('review'));
    DOM.fcStarBtn.addEventListener('click', () => toggleStatus('starred'));

    // Flashcard Filters
    DOM.fcCategoryFilter.addEventListener('change', (e) => {
      AppState.flashcardFilter.category = e.target.value;
      AppState.currentIndex = 0;
      renderCurrentFlashcard();
    });
    DOM.fcDifficultyFilter.addEventListener('change', (e) => {
      AppState.flashcardFilter.difficulty = e.target.value;
      AppState.currentIndex = 0;
      renderCurrentFlashcard();
    });
    DOM.fcStatusFilter.addEventListener('change', (e) => {
      AppState.flashcardFilter.status = e.target.value;
      AppState.currentIndex = 0;
      renderCurrentFlashcard();
    });

    // Quiz Controls
    DOM.quizNextBtn.addEventListener('click', nextQuizQuestion);

    // Explorer Search & Filter
    DOM.explorerSearchInput.addEventListener('input', (e) => {
      AppState.explorerFilter.search = e.target.value;
      renderExplorerGrid();
    });

    // Category chips in explorer
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        AppState.explorerFilter.category = chip.dataset.category;
        renderExplorerGrid();
      });
    });

    // Global Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Disable shortcuts when typing in search input
      if (document.activeElement === DOM.explorerSearchInput) return;

      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        DOM.shortcutsModal.classList.toggle('active');
      } else if (e.key === 'Escape') {
        DOM.shortcutsModal.classList.remove('active');
        DOM.wordDetailModal.classList.remove('active');
      }

      // Flashcards view shortcuts
      if (AppState.currentView === 'flashcards') {
        if (e.code === 'Space') {
          e.preventDefault();
          flipFlashcard();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextFlashcard();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevFlashcard();
        } else if (e.key.toLowerCase() === 'm') {
          toggleStatus('mastered');
        } else if (e.key.toLowerCase() === 'r') {
          toggleStatus('review');
        } else if (e.key.toLowerCase() === 's') {
          toggleStatus('starred');
        } else if (e.key.toLowerCase() === 'p') {
          const deck = getFilteredFlashcards();
          if (deck.length > 0) speakWord(deck[AppState.currentIndex].word);
        }
      }

      // Quiz view shortcuts
      if (AppState.currentView === 'quiz') {
        if (!AppState.quiz.isAnswered) {
          if (e.key === '1' || e.key.toLowerCase() === 'a') selectQuizOption(0);
          if (e.key === '2' || e.key.toLowerCase() === 'b') selectQuizOption(1);
          if (e.key === '3' || e.key.toLowerCase() === 'c') selectQuizOption(2);
          if (e.key === '4' || e.key.toLowerCase() === 'd') selectQuizOption(3);
        } else {
          if (e.key === 'Enter' || e.code === 'Space') {
            nextQuizQuestion();
          }
        }
      }
    });
  }

  // Application Entry Point
  function init() {
    loadUserData();
    initTheme();
    updateGlobalStats();
    attachEventListeners();
    renderCurrentFlashcard();
  }

  // Run on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
