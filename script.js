const STORAGE_KEY = 'lingua-english-learning-v1';
const DAILY_GOAL = 5;
const CATEGORIES = ['Günlük', 'Seyahat', 'Yemek', 'İş & Eğitim', 'Duygular'];
const SPECIALTIES = {
  all: 'Tüm uzmanlıklar', general: 'Genel kelimeler', computer: 'Bilgisayar Mühendisliği',
  medicine: 'Tıp', nursing: 'Hemşirelik', teaching: 'Öğretmenlik ve Eğitim', civil: 'İnşaat Mühendisliği',
  mechanical: 'Makine Mühendisliği', electrical: 'Elektrik-Elektronik Mühendisliği', business: 'İşletme ve Yönetim',
  finance: 'Finans ve Muhasebe', law: 'Hukuk', psychology: 'Psikoloji', biology: 'Biyoloji', chemistry: 'Kimya',
  physics: 'Fizik', architecture: 'Mimarlık', data: 'Veri Bilimi ve Yapay Zekâ', design: 'Grafik ve UX Tasarımı',
  marketing: 'Pazarlama ve Satış', tourism: 'Turizm ve Otelcilik', agriculture: 'Tarım', pharmacy: 'Eczacılık',
  veterinary: 'Veterinerlik', dentistry: 'Diş Hekimliği', cybersecurity: 'Siber Güvenlik', journalism: 'Gazetecilik ve Medya',
  logistics: 'Lojistik ve Tedarik Zinciri', environment: 'Çevre Bilimi', hr: 'İnsan Kaynakları', automotive: 'Otomotiv',
  aviation: 'Havacılık', culinary: 'Aşçılık ve Gastronomi', economics: 'Ekonomi', socialwork: 'Sosyal Hizmet',
  sports: 'Spor Bilimleri', music: 'Müzik ve Sahne Sanatları', software: 'Yazılım Mühendisliği', chemical: 'Kimya Mühendisliği',
  industrial: 'Endüstri Mühendisliği', aerospace: 'Uzay ve Havacılık Mühendisliği', publichealth: 'Halk Sağlığı',
  nutrition: 'Beslenme ve Diyetetik', physiotherapy: 'Fizyoterapi', sociology: 'Sosyoloji', political: 'Siyaset Bilimi',
  languages: 'Dil ve Çeviri', support: 'Müşteri Hizmetleri', product: 'Ürün Yönetimi', renewable: 'Yenilenebilir Enerji',
  fashion: 'Moda ve Tekstil', publicadmin: 'Kamu Yönetimi', envengineering: 'Çevre Mühendisliği',
  medlab: 'Tıbbi Laboratuvar', edresearch: 'Eğitim Araştırmaları', realestate: 'Gayrimenkul', events: 'Etkinlik Yönetimi',
};

const baseWords = [
  ['hello', 'merhaba', 'Günlük', '/həˈləʊ/', 'A1'], ['please', 'lütfen', 'Günlük', '/pliːz/', 'A1'], ['thank you', 'teşekkür ederim', 'Günlük', '/ˈθæŋk juː/', 'A1'], ['usually', 'genellikle', 'Günlük', '/ˈjuːʒuəli/', 'A2'], ['neighbor', 'komşu', 'Günlük', '/ˈneɪbə/', 'A2'],
  ['journey', 'yolculuk', 'Seyahat', '/ˈdʒɜːni/', 'A2'], ['luggage', 'bagaj', 'Seyahat', '/ˈlʌɡɪdʒ/', 'A2'], ['ticket', 'bilet', 'Seyahat', '/ˈtɪkɪt/', 'A1'], ['direction', 'yön', 'Seyahat', '/dəˈrekʃən/', 'A1'], ['departure', 'kalkış', 'Seyahat', '/dɪˈpɑːtʃə/', 'B1'],
  ['delicious', 'lezzetli', 'Yemek', '/dɪˈlɪʃəs/', 'A2'], ['recipe', 'tarif', 'Yemek', '/ˈresəpi/', 'A2'], ['hungry', 'aç', 'Yemek', '/ˈhʌŋɡri/', 'A1'], ['vegetable', 'sebze', 'Yemek', '/ˈvedʒtəbəl/', 'A1'], ['breakfast', 'kahvaltı', 'Yemek', '/ˈbrekfəst/', 'A1'],
  ['meeting', 'toplantı', 'İş & Eğitim', '/ˈmiːtɪŋ/', 'A2'], ['deadline', 'son teslim tarihi', 'İş & Eğitim', '/ˈdedlaɪn/', 'B1'], ['improve', 'geliştirmek', 'İş & Eğitim', '/ɪmˈpruːv/', 'A2'], ['skill', 'beceri', 'İş & Eğitim', '/skɪl/', 'B1'], ['assignment', 'ödev', 'İş & Eğitim', '/əˈsaɪnmənt/', 'B1'],
  ['curious', 'meraklı', 'Duygular', '/ˈkjʊəriəs/', 'B1'], ['proud', 'gururlu', 'Duygular', '/praʊd/', 'A2'], ['nervous', 'gergin', 'Duygular', '/ˈnɜːvəs/', 'A2'], ['calm', 'sakin', 'Duygular', '/kɑːm/', 'A1'], ['excited', 'heyecanlı', 'Duygular', '/ɪkˈsaɪtɪd/', 'A2'],
  ['appointment', 'randevu', 'Günlük', '/əˈpɔɪntmənt/', 'A2'], ['weather', 'hava durumu', 'Günlük', '/ˈweðə/', 'A1'], ['comfortable', 'rahat', 'Seyahat', '/ˈkʌmftəbəl/', 'B1'], ['recommend', 'tavsiye etmek', 'Yemek', '/ˌrekəˈmend/', 'B1'], ['conversation', 'sohbet', 'Günlük', '/ˌkɒnvəˈseɪʃən/', 'B1'],
  ['family', 'aile', 'Günlük', '/ˈfæməli/', 'A1'], ['borrow', 'ödünç almak', 'Günlük', '/ˈbɒrəʊ/', 'A2'], ['opportunity', 'fırsat', 'İş & Eğitim', '/ˌɒpəˈtjuːnəti/', 'B1'],
  ['sustainable', 'sürdürülebilir', 'İş & Eğitim', '/səˈsteɪnəbəl/', 'B2'], ['accomplish', 'başarmak', 'İş & Eğitim', '/əˈkʌmplɪʃ/', 'B2'], ['acknowledge', 'kabul etmek; farkına varmak', 'İş & Eğitim', '/əkˈnɒlɪdʒ/', 'B2'], ['approach', 'yaklaşım; yaklaşmak', 'İş & Eğitim', '/əˈprəʊtʃ/', 'B2'], ['emphasize', 'vurgulamak', 'İş & Eğitim', '/ˈemfəsaɪz/', 'B2'], ['inevitable', 'kaçınılmaz', 'Duygular', '/ɪnˈevɪtəbəl/', 'B2'], ['enhance', 'geliştirmek; artırmak', 'İş & Eğitim', '/ɪnˈhɑːns/', 'B2'], ['widespread', 'yaygın', 'Günlük', '/ˈwaɪdspred/', 'B2'], ['acquire', 'edinmek', 'İş & Eğitim', '/əˈkwaɪə/', 'B2'], ['insight', 'derin kavrayış', 'İş & Eğitim', '/ˈɪnsaɪt/', 'B2'],
].map(([english, turkish, category, pronunciation, level], index) => ({ id: `base-${index + 1}`, english, turkish, category, pronunciation, level, specialty: 'shared', builtin: true, known: false, seen: 0 }));

const specialtyWords = (window.EXTRA_WORDS || []).map(([english, turkish, category, pronunciation, level, specialty], index) => ({
  id: `specialty-${specialty || 'computer'}-${index + 1}`, english, turkish, category, pronunciation, level,
  specialty: specialty || 'computer', builtin: true, known: false, seen: 0,
}));

function readSavedData() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}

const savedData = readSavedData();
let words = [
  ...baseWords.map((word) => ({ ...word, ...(savedData.progress?.[word.id] || {}) })),
  ...specialtyWords.map((word) => ({ ...word, ...(savedData.progress?.[word.id] || {}) })),
  ...(Array.isArray(savedData.customWords) ? savedData.customWords.map((word) => ({ ...word, level: word.level || 'A1', specialty: word.specialty || 'general', builtin: false })) : []),
];
let studyDates = Array.isArray(savedData.studyDates) ? savedData.studyDates : [];
let studyCounts = savedData.studyCounts && typeof savedData.studyCounts === 'object' ? savedData.studyCounts : {};
let selectedLevel = ['ALL', 'A1', 'A2', 'B1', 'B2'].includes(savedData.level) ? savedData.level : 'A1';
let selectedSpecialty = Object.hasOwn(SPECIALTIES, savedData.specialty) ? savedData.specialty : 'all';
let cardIndex = 0;
let isCardFlipped = false;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizRunId = 0;

const today = getDateKey(new Date());
const titles = { home: 'Merhaba! 👋', cards: 'Kelime kartları', quiz: 'Mini test ✳', words: 'Kelime defterim' };

const elements = {
  pageTitle: document.querySelector('#page-title'),
  levelSelect: document.querySelector('#level-select'),
  todayDate: document.querySelector('#today-date'),
  statTotal: document.querySelector('#stat-total'),
  statKnown: document.querySelector('#stat-known'),
  statStreak: document.querySelector('#stat-streak'),
  statToday: document.querySelector('#stat-today'),
  dailyFill: document.querySelector('#daily-progress-fill'),
  dailyCopy: document.querySelector('#daily-copy'),
  cardCategory: document.querySelector('#card-category'),
  cardSpecialty: document.querySelector('#card-specialty'),
  cardCategoryLabel: document.querySelector('#card-category-label'),
  cardCounter: document.querySelector('#card-counter'),
  cardHint: document.querySelector('#card-hint'),
  cardWord: document.querySelector('#card-word'),
  cardPronunciation: document.querySelector('#card-pronunciation'),
  cardAnswerLabel: document.querySelector('#card-answer-label'),
  cardTranslation: document.querySelector('#card-translation'),
  flashcard: document.querySelector('#flashcard'),
  studyFeedback: document.querySelector('#study-feedback'),
  quizNumber: document.querySelector('#quiz-question-number'),
  quizScore: document.querySelector('#quiz-score'),
  quizProgress: document.querySelector('#quiz-progress-fill'),
  quizWord: document.querySelector('#quiz-word'),
  answerGrid: document.querySelector('#answer-grid'),
  quizFeedback: document.querySelector('#quiz-feedback'),
  quizNext: document.querySelector('#quiz-next'),
  newEnglish: document.querySelector('#new-english'),
  newTurkish: document.querySelector('#new-turkish'),
  newCategory: document.querySelector('#new-category'),
  newSpecialty: document.querySelector('#new-specialty'),
  newLevel: document.querySelector('#new-level'),
  wordList: document.querySelector('#word-list'),
  wordListCount: document.querySelector('#word-list-count'),
  wordSearch: document.querySelector('#word-search'),
  wordCategoryFilter: document.querySelector('#word-category-filter'),
  wordSpecialtyFilter: document.querySelector('#word-specialty-filter'),
  noWords: document.querySelector('#no-words'),
};

function getDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function saveData() {
  const progress = Object.fromEntries(words.filter((word) => word.builtin).map((word) => [word.id, { known: word.known, seen: word.seen }]));
  const customWords = words.filter((word) => !word.builtin);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ progress, customWords, studyDates, studyCounts, level: selectedLevel, specialty: selectedSpecialty }));
  } catch {
    // Keep the current study session usable if the browser blocks local storage.
  }
}

function wordsForSelectedLevel() {
  return words.filter((word) => {
    const levelMatches = selectedLevel === 'ALL' || (word.level || 'A1') === selectedLevel;
    const specialty = word.specialty || 'general';
    const specialtyMatches = selectedSpecialty === 'all'
      || (selectedSpecialty === 'general' && ['shared', 'general'].includes(specialty))
      || (selectedSpecialty === 'computer' && specialty === 'computer')
      || (!['general', 'computer'].includes(selectedSpecialty) && ['shared', selectedSpecialty].includes(specialty));
    return levelMatches && specialtyMatches;
  });
}

function getStreak() {
  const dates = new Set(studyDates);
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);
  if (!dates.has(getDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (dates.has(getDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function recordStudy(word, markKnown = false, markUnknown = false) {
  if (word) {
    word.seen = (word.seen || 0) + 1;
    if (markKnown) word.known = true;
    if (markUnknown) word.known = false;
  }
  if (!studyDates.includes(today)) studyDates.push(today);
  studyCounts[today] = (studyCounts[today] || 0) + 1;
  saveData();
  updateDashboard();
  renderWordList();
}

function updateDashboard() {
  const todayCount = studyCounts[today] || 0;
  const levelWords = wordsForSelectedLevel();
  const knownCount = levelWords.filter((word) => word.known).length;
  elements.statTotal.textContent = String(levelWords.length);
  elements.statKnown.textContent = String(knownCount);
  elements.statStreak.textContent = String(getStreak());
  elements.statToday.textContent = String(Math.min(todayCount, DAILY_GOAL));
  elements.dailyFill.style.width = `${Math.min(100, (todayCount / DAILY_GOAL) * 100)}%`;
  elements.dailyCopy.textContent = todayCount >= DAILY_GOAL
    ? 'Günlük hedef tamamlandı! Harika gidiyorsun. 🌟'
    : `${DAILY_GOAL - todayCount} tekrar daha yap ve günlük hedefini tamamla.`;
  elements.levelSelect.value = selectedLevel;
  const profileLabels = { ALL: 'Tüm seviyeler', A1: 'A1 · Başlangıç', A2: 'A2 · Temel', B1: 'B1 · Orta', B2: 'B2 · Orta üstü' };
  document.querySelector('#profile-level').textContent = profileLabels[selectedLevel];
}

function showView(name) {
  document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active', view.id === `view-${name}`));
  document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', link.dataset.view === name));
  elements.pageTitle.textContent = titles[name] || titles.home;
  if (name === 'cards') renderCard();
  if (name === 'quiz' && !quizQuestions.length) startQuiz();
  if (name === 'words') renderWordList();
}

document.querySelectorAll('[data-view], [data-go]').forEach((button) => {
  button.addEventListener('click', () => showView(button.dataset.view || button.dataset.go));
});

function fillCategorySelects() {
  const categories = ['Tümü', ...CATEGORIES];
  elements.cardCategory.replaceChildren();
  elements.wordCategoryFilter.replaceChildren();
  categories.forEach((category) => {
    const cardOption = new Option(category, category);
    elements.cardCategory.add(cardOption);
    const filterOption = new Option(category === 'Tümü' ? 'Tüm konular' : category, category);
    elements.wordCategoryFilter.add(filterOption);
  });
  elements.newCategory.replaceChildren();
  CATEGORIES.forEach((category) => elements.newCategory.add(new Option(category, category)));
  [elements.cardSpecialty, elements.wordSpecialtyFilter].forEach((select) => {
    select.replaceChildren();
    Object.entries(SPECIALTIES).forEach(([value, label]) => select.add(new Option(label, value)));
    select.value = selectedSpecialty;
  });
  elements.newSpecialty.replaceChildren();
  Object.entries(SPECIALTIES).filter(([value]) => value !== 'all').forEach(([value, label]) => elements.newSpecialty.add(new Option(label, value)));
  elements.newLevel.value = ['A1', 'A2', 'B1', 'B2'].includes(selectedLevel) ? selectedLevel : 'A1';
  elements.levelSelect.value = selectedLevel;
}

function currentDeck() {
  const category = elements.cardCategory.value || 'Tümü';
  return wordsForSelectedLevel().filter((word) => category === 'Tümü' || word.category === category);
}

function renderCard() {
  const deck = currentDeck();
  if (!deck.length) {
    elements.cardWord.textContent = 'Bu filtrede kelime yok';
    elements.cardPronunciation.textContent = '';
    elements.cardTranslation.textContent = '';
    elements.cardTranslation.hidden = true;
    elements.cardAnswerLabel.hidden = true;
    elements.cardCounter.textContent = '0 / 0';
    document.querySelector('#review-button').disabled = true;
    document.querySelector('#know-button').disabled = true;
    return;
  }
  cardIndex = ((cardIndex % deck.length) + deck.length) % deck.length;
  const word = deck[cardIndex];
  isCardFlipped = false;
  elements.flashcard.classList.remove('flipped');
  elements.cardWord.textContent = word.english;
  elements.cardPronunciation.textContent = word.pronunciation || (SPECIALTIES[word.specialty] ? `${SPECIALTIES[word.specialty]} kelimesi` : '');
  elements.cardTranslation.textContent = word.turkish;
  elements.cardTranslation.hidden = true;
  elements.cardAnswerLabel.hidden = false;
  elements.cardCategoryLabel.textContent = `${SPECIALTIES[word.specialty] || word.category} · ${word.level || 'A1'}`.toLocaleUpperCase('tr-TR');
  elements.cardCounter.textContent = `${cardIndex + 1} / ${deck.length}`;
  elements.cardHint.textContent = word.known ? 'Bu kelimeyi öğrendin — tekrar edebilirsin' : 'Anlamını hatırlamaya çalış';
  elements.studyFeedback.textContent = '';
  document.querySelector('#review-button').disabled = false;
  document.querySelector('#know-button').disabled = false;
}

function flipCard() {
  const deck = currentDeck();
  if (!deck.length) return;
  isCardFlipped = !isCardFlipped;
  elements.flashcard.classList.toggle('flipped', isCardFlipped);
  elements.cardTranslation.hidden = !isCardFlipped;
  elements.cardAnswerLabel.hidden = isCardFlipped;
  elements.cardHint.textContent = isCardFlipped ? 'Bir örnek cümlede kullanmayı dene' : 'Anlamını hatırlamaya çalış';
}

elements.flashcard.addEventListener('click', flipCard);
elements.flashcard.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flipCard(); }
});
elements.cardCategory.addEventListener('change', () => { cardIndex = 0; renderCard(); });

function nextCard() {
  const deck = currentDeck();
  if (!deck.length) return;
  cardIndex = (cardIndex + 1) % deck.length;
  renderCard();
}

document.querySelector('#review-button').addEventListener('click', () => {
  const word = currentDeck()[cardIndex];
  if (!word) return;
  recordStudy(word, false, true);
  elements.studyFeedback.textContent = 'Bu kelimeyi tekrar listende tuttuk. Birazdan yeniden karşına çıkacak!';
  window.setTimeout(nextCard, 650);
});

document.querySelector('#know-button').addEventListener('click', () => {
  const word = currentDeck()[cardIndex];
  if (!word) return;
  recordStudy(word, true);
  elements.studyFeedback.textContent = 'Harika! Kelime öğrenildi olarak işaretlendi. ✨';
  window.setTimeout(nextCard, 650);
});

function startQuiz() {
  quizRunId += 1;
  const pool = [...wordsForSelectedLevel()].sort(() => Math.random() - 0.5);
  quizQuestions = pool.slice(0, Math.min(10, pool.length));
  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  renderQuestion();
}

function renderQuestion() {
  if (!quizQuestions.length) return;
  if (quizIndex >= quizQuestions.length) {
    elements.quizNumber.textContent = 'TEST TAMAMLANDI';
    elements.quizWord.textContent = quizScore === quizQuestions.length ? 'Mükemmel! 🌟' : 'Güzel çalışmaydı!';
    document.querySelector('.quiz-prompt').textContent = `${quizQuestions.length} soruda ${quizScore} doğru cevap verdin.`;
    elements.answerGrid.replaceChildren();
    elements.quizFeedback.textContent = 'Bir tur daha denemek istersen testi yeniden başlat.';
    elements.quizNext.hidden = false;
    elements.quizNext.textContent = 'Yeniden başla ↻';
    elements.quizProgress.style.width = '100%';
    elements.quizScore.textContent = `${quizScore} doğru`;
    return;
  }
  quizAnswered = false;
  const answer = quizQuestions[quizIndex];
  elements.quizNumber.textContent = `SORU ${quizIndex + 1} / ${quizQuestions.length}`;
  elements.quizScore.textContent = `${quizScore} doğru`;
  elements.quizProgress.style.width = `${(quizIndex / quizQuestions.length) * 100}%`;
  elements.quizWord.textContent = answer.english;
  document.querySelector('.quiz-prompt').textContent = 'Bu kelimenin Türkçe anlamı nedir?';
  elements.quizFeedback.textContent = '';
  elements.quizNext.hidden = true;
  elements.quizNext.textContent = 'Sonraki soru →';
  const options = [answer, ...wordsForSelectedLevel().filter((word) => word.id !== answer.id).sort(() => Math.random() - 0.5).slice(0, 3)].sort(() => Math.random() - 0.5);
  elements.answerGrid.replaceChildren();
  options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.textContent = option.turkish;
    button.dataset.wordId = option.id;
    button.addEventListener('click', () => chooseAnswer(button, option, answer));
    elements.answerGrid.append(button);
  });
}

function chooseAnswer(button, selected, answer) {
  if (quizAnswered) return;
  quizAnswered = true;
  const correct = selected.id === answer.id;
  if (correct) quizScore += 1;
  elements.answerGrid.querySelectorAll('button').forEach((option) => {
    option.disabled = true;
    if (option.dataset.wordId === answer.id) option.classList.add('correct');
  });
  if (!correct) button.classList.add('incorrect');
  elements.quizFeedback.textContent = correct ? 'Doğru cevap! Çok iyi gidiyorsun. 🎉' : `Doğru cevap: ${answer.turkish}. Bir sonraki soruda tekrar dene!`;
  if (correct) {
    elements.quizNext.hidden = true;
    const answeredIndex = quizIndex;
    const currentRunId = quizRunId;
    window.setTimeout(() => {
      if (quizRunId === currentRunId && quizIndex === answeredIndex && quizAnswered) {
        quizIndex = answeredIndex + 1;
        renderQuestion();
      }
    }, 900);
  } else {
    elements.quizNext.hidden = false;
  }
  elements.quizScore.textContent = `${quizScore} doğru`;
  recordStudy(answer, correct, !correct);
}

elements.quizNext.addEventListener('click', () => {
  if (quizIndex >= quizQuestions.length) startQuiz();
  else { quizIndex += 1; renderQuestion(); }
});

elements.newEnglish.addEventListener('input', () => elements.newEnglish.setCustomValidity(''));
elements.newSpecialty.addEventListener('change', () => {
  if (elements.newSpecialty.value !== 'general') elements.newCategory.value = 'İş & Eğitim';
});

document.querySelector('#word-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const english = elements.newEnglish.value.trim();
  const turkish = elements.newTurkish.value.trim();
  if (!english || !turkish) return;
  if (words.some((word) => word.english.toLocaleLowerCase('en') === english.toLocaleLowerCase('en'))) {
    elements.newEnglish.setCustomValidity('Bu kelime listende zaten var.');
    elements.newEnglish.reportValidity();
    return;
  }
  elements.newEnglish.setCustomValidity('');
  words.push({ id: `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`, english, turkish, category: elements.newCategory.value, pronunciation: '', level: elements.newLevel.value, specialty: elements.newSpecialty.value, builtin: false, known: false, seen: 0 });
  saveData();
  event.currentTarget.reset();
  updateDashboard();
  renderWordList();
});

function renderWordList() {
  const query = document.querySelector('#word-search').value.trim().toLocaleLowerCase('tr-TR');
  const category = elements.wordCategoryFilter.value || 'Tümü';
  const levelWords = wordsForSelectedLevel();
  const filtered = levelWords.filter((word) => (category === 'Tümü' || word.category === category)
    && (selectedSpecialty === 'all' || (word.specialty || 'general') === selectedSpecialty)
    && (!query || word.english.toLocaleLowerCase('tr-TR').includes(query) || word.turkish.toLocaleLowerCase('tr-TR').includes(query)));
  elements.wordList.replaceChildren();
  elements.wordListCount.textContent = String(levelWords.length);
  elements.noWords.hidden = filtered.length > 0;
  filtered.forEach((word) => {
    const row = document.createElement('div');
    row.className = 'word-row';
    const english = document.createElement('strong'); english.textContent = word.english;
    const turkish = document.createElement('span'); turkish.className = 'meaning'; turkish.textContent = word.turkish;
    const categoryTag = document.createElement('span'); categoryTag.className = 'word-tag'; categoryTag.textContent = `${SPECIALTIES[word.specialty] || word.category} · ${word.level || 'A1'}`;
    const state = document.createElement('span'); state.className = 'word-state'; state.textContent = word.known ? '✓ Öğrenildi' : `${word.seen || 0} tekrar`;
    row.append(english, turkish, categoryTag, state);
    if (!word.builtin) {
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'delete-word'; remove.textContent = '×'; remove.setAttribute('aria-label', `${word.english} kelimesini sil`);
      remove.addEventListener('click', () => { words = words.filter((item) => item.id !== word.id); saveData(); updateDashboard(); renderWordList(); });
      row.append(remove);
    }
    elements.wordList.append(row);
  });
}

elements.wordSearch.addEventListener('input', renderWordList);
elements.wordCategoryFilter.addEventListener('change', renderWordList);
function changeSpecialty(value) {
  selectedSpecialty = value;
  if (value !== 'all') selectedLevel = 'ALL';
  elements.levelSelect.value = selectedLevel;
  elements.cardSpecialty.value = value;
  elements.wordSpecialtyFilter.value = value;
  cardIndex = 0;
  quizQuestions = [];
  saveData();
  updateDashboard();
  renderCard();
  renderWordList();
  if (document.querySelector('#view-quiz').classList.contains('active')) startQuiz();
}
elements.cardSpecialty.addEventListener('change', () => changeSpecialty(elements.cardSpecialty.value));
elements.wordSpecialtyFilter.addEventListener('change', () => changeSpecialty(elements.wordSpecialtyFilter.value));
elements.levelSelect.addEventListener('change', () => {
  selectedLevel = elements.levelSelect.value;
  if (selectedLevel !== 'ALL') elements.newLevel.value = selectedLevel;
  cardIndex = 0;
  quizQuestions = [];
  saveData();
  updateDashboard();
  renderCard();
  renderWordList();
  if (document.querySelector('#view-quiz').classList.contains('active')) startQuiz();
});

document.querySelector('#today-date').textContent = new Intl.DateTimeFormat('tr-TR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());
fillCategorySelects();
updateDashboard();
renderCard();
renderWordList();
