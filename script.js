// Noble Lions — interactivity

// ── Language Toggle ─────────────────────────────────────────────
const translations = {
  en: {
    heroTitle:    "Building Peace Through <span class='highlight'>Cultural Understanding</span>",
    heroSubtitle: "Developing new ideas in a modern world to foster peace and stronger relationships between different cultures, communities and nations.",
    pillar1Title: "Peace & Dialogue",
    pillar1Text:  "Creating spaces for open conversation across cultural, ethnic, and national boundaries to build mutual understanding.",
    pillar2Title: "Justice & Equality",
    pillar2Text:  "Upholding civil rights, rule of law, and equal dignity for every person regardless of their origin or belief.",
    pillar3Title: "Cultural Exchange",
    pillar3Text:  "Celebrating diversity through art, language, tradition, and shared human experiences that connect us all.",
    pillar4Title: "Resilience & Growth",
    pillar4Text:  "Self-confidence isn't freedom from failure — it's the strength to rise again and reach new heights.",
    sectionCultures: "World Cultures",
    sectionCulturesDesc: "Every culture carries wisdom. Together we are stronger.",
    sectionJustice: "Justice & Rights",
    sectionJusticeDesc: "Fairness is the foundation of lasting peace between peoples.",
    joinTitle: "Join the Movement",
    joinDesc: "Be part of a global community committed to peace, understanding, and cross-cultural friendship.",
    sectionFaith: "Walking with the Creator",
    sectionFaithDesc: "Every step of our journey should be grounded in the Creator.",
    faithVerse1: "Every step of our journey should be grounded in the Creator.",
    faithVerse2: "Because a path and life journey without the Creator is difficult and impossible.",
    faithVerse3: "Therefore, for our success and well-being, we should walk with the Creator.",
  },
  ti: {
    heroTitle:    "ሰላምን ርክብን <span class='highlight'>ብሃብታምነት ባህሊ</span>",
    heroSubtitle: "ሓድሽ ሓሳባት ኣብ ዘመናዊ ዓለም ብምምዕባል፡ ሰላምን ዝሰምር ርክብን ኣብ መንጎ ዝተፈለዩ ባህልታት፡ ሕብረተሰባትን ሃገራትን ንምርግጋጽ።",
    pillar1Title: "ሰላምን ዘተን",
    pillar1Text:  "ኣብ ሓፈሻዊ ዘተ ዝሕግዙ መኣዲ ምፍጣር ኣብ መንጎ ዝተፈለዩ ባህልታት፡ ዓሌታትን ሃገራትን።",
    pillar2Title: "ፍትሕን ማዕርነትን",
    pillar2Text:  "ሲቪላዊ መሰላት፡ ልዕልና ሕጊን ማዕረ ክብርን ንነፍሲ ​​ወከፍ ሰብ ምኽባር።",
    pillar3Title: "ልውውጥ ባህሊ",
    pillar3Text:  "ብጥበብ፡ ቋንቋ፡ ወግዒን ሓባራዊ ተሞክሮታትን ፍልልይ ምኽባር።",
    pillar4Title: "ጽንዓትን ዕቤትን",
    pillar4Text:  "ርእሰ ምትእምማን ካብ ፍሽለት ናጽነት ኣይኮነን — ደጊምካ ናብ ሓድሽ ልዕሊ ምብጻሕ እዩ።",
    sectionCultures: "ባህልታት ዓለም",
    sectionCulturesDesc: "ነፍሲ ወከፍ ባህሊ ጥበብ ኣለዎ። ሓቢርና ዝያዳ ሓይሊ ኣለና።",
    sectionJustice: "ፍትሕን መሰላትን",
    sectionJusticeDesc: "ፍትሒ ናይ ቀዋሚ ሰላም ናይ ህዝቢ ሰረት እዩ።",
    joinTitle: "ናብ ምንቅስቓስ ተጸምበር",
    joinDesc: "ንሰላም፡ ምፍልላጥን ሰሪሖም ርክብን ዝቆረጸ ዓለምለኻዊ ማሕበረሰብ ተሳታፍ።",
    sectionFaith: "ምስ ፈጣሪ ምጓዕዞ",
    sectionFaithDesc: "ነብስ ወከፍ ጉዕዞና ኣብ ፈጣሪ ዝተመርኮሰ ክኸውን ይግበኣና ።",
    faithVerse1: "ነብስ ወከፍ ጉዕዞና ኣብ ፈጣሪ ዝተመርኮሰ ክኸውን ይግበኣና ።",
    faithVerse2: "ምክንያቱ ፈጣሪ ዘይተሓወሶ መንገድን ጉዕዞ ሂወትን ከቢድን ኣይከኣልን እዩ ።",
    faithVerse3: "ስለዚ ንዓወትና ንነብስናን ክሕሸና ክንብል ምስፈጣሪ ክንጓዓዝ ይግበኣና ።",
  }
};

let currentLang = 'en';

function applyTranslation(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  currentLang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTranslation(btn.getAttribute('data-lang')));
});

// ── Quotes Carousel ─────────────────────────────────────────────
const quotes = document.querySelectorAll('.quote-item');
const dots   = document.querySelectorAll('.dot');
let current  = 0;
let timer;

function showQuote(idx) {
  quotes.forEach((q, i) => q.classList.toggle('active', i === idx));
  dots.forEach((d, i)   => d.classList.toggle('active', i === idx));
  current = idx;
}

function nextQuote() { showQuote((current + 1) % quotes.length); }

function startCarousel() {
  timer = setInterval(nextQuote, 5000);
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => { clearInterval(timer); showQuote(i); startCarousel(); });
});

showQuote(0);
startCarousel();

// ── Scroll Reveal ────────────────────────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Smooth active nav link ────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('active-link', a.getAttribute('href') === `#${e.target.id}`));
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach(s => navObserver.observe(s));

// ── Join form ────────────────────────────────────────────────────
const joinForm = document.getElementById('join-form');
if (joinForm) {
  const successMsg = document.getElementById('join-success');
  joinForm.addEventListener('submit', e => {
    e.preventDefault();
    const emailInput = joinForm.querySelector('.join-input');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      joinForm.style.display = 'none';
      if (successMsg) {
        successMsg.removeAttribute('hidden');
        successMsg.focus();
      }
    } else {
      emailInput.setCustomValidity('Please enter a valid email address.');
      emailInput.reportValidity();
      emailInput.setCustomValidity('');
    }
  });
}
