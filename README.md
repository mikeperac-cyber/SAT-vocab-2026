# SAT & DSAT 2026 Master Vocabulary Web Application 🎯

A modern, high-performance, standalone interactive web application featuring **100 essential SAT and Digital SAT (DSAT 2026)** vocabulary words with deep contextual nuance, Turkish translations, authentic exam passage examples, distractor trap analysis, and a realistic Bluebook-style practice quiz simulator.

![GitHub repo size](https://img.shields.io/github/repo-size/mikeperac-cyber/SAT-vocab-2026?color=blue)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![DSAT Ready](https://img.shields.io/badge/DSAT-2026%20Ready-orange.svg)

---

## 🌟 Key Features

### 1. 📚 100 High-Yield Vocabulary Database
- **Academic Definitions** & IPA Phonetic transcriptions.
- **Audio Pronunciation** powered by the native Web Speech API.
- **Turkish Meanings & Deep Nuances** (*Türkçe Anlamları ve Bağlamsal İpuçları*).
- **Authentic DSAT Passages** across Science, History/Social Studies, Literature, and Humanities.
- **2026 Question Format Breakdown & Distractor Traps** (*Connotation traps, Secondary definition traps, Register mismatch, False root traps*).
- **Interactive Practice Questions & Step-by-Step Rationales** for all 100 words.

### 2. 🎴 3D Interactive Flashcards
- **Smooth 3D Flip** animation with keyboard shortcuts (<kbd>SPACE</kbd> to flip, <kbd>→</kbd> / <kbd>←</kbd> to navigate).
- **Study Tracking**: Mark cards as *Mastered* (<kbd>M</kbd>), *Need Review* (<kbd>R</kbd>), or *Starred* (<kbd>S</kbd>).
- **Multi-criteria Filtering**: Filter by category, difficulty (*Essential, Hard, Advanced*), or study status.

### 3. ⏱️ Digital SAT 2026 Quiz Simulator
- **Bluebook-Style Interface**: Split-screen design replicating the official testing environment.
- **Timed Mode**: 60-second question pacing counter.
- **Instant Analytical Feedback**: Highlights the correct answer in green, shows why distractors fail, and explains the underlying DSAT question trap.

### 4. 🔍 Instant Vocabulary Explorer
- **Real-time Live Search**: Instant fuzzy filtering by English word, Turkish translation, definition, or synonyms.
- **Word Dossier Modal**: Click any card in the grid to view its comprehensive profile and listen to pronunciation.

### 5. 🧠 2026 Strategy & Turkish Learner Guide
- **The 4 Classic DSAT Traps**: Detailed breakdown of Connotation, Secondary Definition, Register, and False Antonym traps.
- **High-Yield Word Pairs**: Comparisons for *Corroborate vs. Substantiate*, *Mitigate vs. Ameliorate*, *Specious vs. Spurious*, *Ephemeral vs. Transient*, etc.
- **5 Common Turkish Learner Pitfalls**: Clarifications on confusing concepts like *Ambivalent vs. Apathetic*, *Exhaustive vs. Exhausting*, *Pedantic vs. Meticulous*, etc.

### 6. 🎨 Modern UX & Personalization
- **Theme Toggle**: Seamless Dark Mode / Light Mode with `localStorage` persistence.
- **Keyboard Shortcuts**: Quick helper modal (<kbd>?</kbd>) for seamless desktop study workflows.

---

## 🚀 How to Run Locally

No dependencies or build steps required! Simply clone and open `index.html` in your browser:

```bash
git clone https://github.com/mikeperac-cyber/SAT-vocab-2026.git
cd SAT-vocab-2026
# Open index.html directly in any browser
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| <kbd>SPACE</kbd> | Flip Active Flashcard |
| <kbd>→</kbd> / <kbd>←</kbd> | Next / Previous Flashcard |
| <kbd>M</kbd> | Toggle "Mastered" Status |
| <kbd>R</kbd> | Toggle "Need Review" Status |
| <kbd>S</kbd> | Toggle "Starred" Favorite |
| <kbd>P</kbd> | Pronounce Word Audio |
| <kbd>1</kbd> - <kbd>4</kbd> / <kbd>A</kbd> - <kbd>D</kbd> | Select Quiz Option A, B, C, or D |
| <kbd>ENTER</kbd> | Next Quiz Question |
| <kbd>?</kbd> | Open Keyboard Shortcuts Modal |
| <kbd>ESC</kbd> | Close Modals |

---

## 📁 Repository Structure

```
.
├── index.html        # Main HTML5 entry point & views
├── README.md         # Documentation & guide
├── css/
│   └── styles.css    # Design tokens, 3D flip animations, Bluebook quiz styles
└── js/
    ├── words-data.js # Complete 100 SAT/DSAT 2026 vocabulary dataset
    └── app.js        # State manager, flashcards, quiz engine, speech synthesis
```

---

## 📄 License
MIT License. Created for high school and university students preparing for the SAT / Digital SAT (DSAT).
