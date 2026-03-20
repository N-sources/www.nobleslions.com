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
    // Self-Reliance section
    sectionReliance: "Existence in Self-Reliance",
    sectionRelianceDesc: "What conditions enable a person to live with true independence and inner strength?",
    relianceLead: "Self-reliance is not isolation. It is the freedom that comes when a person is rooted in faith, equipped with knowledge, strengthened by community, and protected by justice — able to stand, choose, and contribute on their own terms.",
    reliance1Title: "Spiritual Foundation",
    reliance1Text: "Grounding life in the Creator provides clarity, courage, and a compass that guides every decision. Without this anchor, the journey of existence grows heavy and directionless.",
    reliance2Title: "Inner Strength & Resilience",
    reliance2Text: "Self-confidence is not the absence of failure — it is the certainty that you have the strength to rise again. Resilience is the core condition of a self-reliant existence.",
    reliance3Title: "Knowledge & Wisdom",
    reliance3Text: "Education and the pursuit of wisdom open doors that otherwise remain closed. A person equipped with knowledge can navigate life on their own terms and lift others along the way.",
    reliance4Title: "Community & Solidarity",
    reliance4Text: "No one achieves true self-reliance in isolation. A strong community provides the safety net and encouragement that empower every individual to stand on their own feet.",
    reliance5Title: "Justice & Equal Opportunity",
    reliance5Text: "Fair conditions in society — rule of law, equal access, and civil rights — are essential conditions that allow every person to pursue self-reliance regardless of their background.",
    developTag: "ብከመይ ምምዕባል · How to Develop",
    developTitle: "How to Develop Self-Reliance",
    developDesc: "Practical steps — each one a building block on the path to independent, purposeful living.",
    step1Title: "Root yourself in faith & spiritual clarity",
    step1Text: "Begin every day with prayer, reflection, or meditation. Let spiritual grounding be the compass that shapes your choices. When your foundation is the Creator, you gain a clarity that cannot be shaken by circumstances.",
    step2Title: "Build daily habits of self-discipline",
    step2Text: "Set clear goals and track your progress. Wake with intention, work with focus, rest with purpose. Small daily disciplines — practised consistently — compound into profound personal freedom and independence.",
    step3Title: "Commit to lifelong learning",
    step3Text: "Read, study, ask questions, and seek mentors. Knowledge is the currency of self-reliance — the more you learn, the more doors open to you. Never stop growing your mind and your skills.",
    step4Title: "Develop financial awareness & responsibility",
    step4Text: "Understand how money works, learn to save consistently, avoid unnecessary debt, and build resources step by step. Financial literacy is one of the most practical expressions of self-reliance.",
    step5Title: "Cultivate relationships that grow you",
    step5Text: "Choose friends, mentors and community who challenge you to grow, support you when you fall, and celebrate your progress. No one becomes self-reliant alone — the right people accelerate your journey.",
    step6Title: "Take full responsibility for your choices",
    step6Text: "Own your decisions and their consequences — both successes and failures. Stop attributing everything to circumstances and start responding to them. Responsibility is the heart of self-reliance.",
    step7Title: "Give back — serve your community",
    step7Text: "True self-reliance does not end with you — it overflows into service to others. When you help lift another person, your own ground grows firmer. The highest expression of independence is choosing to give.",
    relianceClosing: "Self-reliance is built step by step: through faith, discipline, learning, responsibility, and service to others.",
    // Governance section
    sectionGov: "What is Governance?",
    sectionGovDesc: "Understanding the principles and practice of governing ourselves, our communities, and our institutions.",
    govDefHeading: "ስነ ምሕደራ — The Meaning of Governance",
    govDefP1: "Governance is the system of rules, practices, processes and values by which a community, organisation, or nation directs itself — making decisions, distributing power, and fulfilling responsibilities to those it serves.",
    govDefP2: "Good governance is not just about who holds authority — it is about <em>how</em> that authority is exercised: with transparency, accountability, fairness, and in the interests of all people.",
    govP1: "Transparency", govP1Sub: "ንጽህና",
    govP2: "Accountability", govP2Sub: "ሓላፍነት",
    govP3: "Participation", govP3Sub: "ተሳትፎ",
    govP4: "Rule of Law", govP4Sub: "ልዕልና ሕጊ",
    govP5: "Effectiveness", govP5Sub: "ውጽኢታዊነት",
    govP6: "Justice", govP6Sub: "ፍትሒ",
    govHowTag: "ብከመይ ይካየድ · How It Is Conducted",
    govHowTitle: "How is Self-Governance Conducted?",
    govHowDesc: "Six essential mechanisms — from principles to practice — that enable genuine self-governance at every level: personal, community, and national.",
    govStep1Title: "Establish clear principles & shared values",
    govStep1Text: "Every system of self-governance begins with agreed values — honesty, dignity, fairness, and service. These principles act as the constitution of behaviour that binds leaders and citizens alike, providing a compass for every decision made in the collective interest.",
    govStep2Title: "Build transparent structures & clear roles",
    govStep2Text: "Good governance requires clear organisational structures — defined roles, responsibilities, and decision-making processes that everyone understands. When people know who is responsible for what and how decisions are made, trust is built and confusion is avoided.",
    govStep3Title: "Ensure accountability & oversight",
    govStep3Text: "Leaders and institutions must be answerable for their decisions and actions. Accountability systems — audits, reviews, reporting, and consequences for misconduct — are the guardrails that prevent abuse of power and keep governance honest and effective.",
    govStep4Title: "Enable broad participation & inclusion",
    govStep4Text: "Self-governance thrives when every voice has a place in decision-making. Inclusive processes — consultations, elections, open forums, and community dialogue — ensure that governance reflects the real needs and aspirations of all people, not just a privileged few.",
    govStep5Title: "Uphold the rule of law equally",
    govStep5Text: "Laws must apply equally to all people — the powerful and the powerless alike. The rule of law creates a level playing field, protects individual rights, and prevents governance from becoming the instrument of personal interest. Without it, self-governance collapses into domination.",
    govStep6Title: "Commit to continuous learning & improvement",
    govStep6Text: "No governance system is perfect from the start. The mark of good self-governance is its willingness to evaluate, learn from mistakes, and reform. Regular reviews, feedback loops, and the courage to change course are what transform adequate governance into excellent governance.",
    govClosing: "Self-governance is conducted through principles, transparent structures, accountability, participation, rule of law, and a constant commitment to learning and reform.",
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
    // Self-Reliance section
    sectionReliance: "ህላወ ኣብ ርእሰ ምርኮሳ",
    sectionRelianceDesc: "ምስ ከመይ ኩነታት ሰብ ብናጽነትን ውሽጣዊ ሓይልን ክነብር ይኽእል?",
    relianceLead: "ህላወ ኣብ ርእሰ ምርኮሳ ማለት ብሕቲ ምስራሕ ኣይኮነን። ኣብ ፈጣሪ ዝተሰረተ፡ ብፍልጠት ዝተዓጠቀ፡ ብሕብረተሰብ ዝተሓለወ፡ ብፍትሒ ዝተቐረበ ሰብ — ብናጽነት ዝነብር ሰብ እዩ ።",
    reliance1Title: "ናይ ፈጣሪ ሰረት",
    reliance1Text: "ህይወት ኣብ ፈጣሪ ምስርሳር ንጹርነት፡ ትብዓትን ኣቅጣጫን ይህብ ። ብዘይ እዚ ሰረት፡ ናይ ህይወት ጉዕዞ ከቢድን ርሑቕን እዩ ።",
    reliance2Title: "ውሽጣዊ ሓይልን ጽንዓትን",
    reliance2Text: "ርእሰ ምትእምማን ካብ ፍሽለት ናጽነት ኣይኮነን — ደጊምካ ናብ ሓድሽ ምብጻሕ እዩ ። ጽንዓት ናይ ርእሰ ምርኮሳ ቀንዲ ሰረት ።",
    reliance3Title: "ፍልጠትን ጥበብን",
    reliance3Text: "ትምህርቲን ምምሃርን ዝዓጸዉ ማዕጾ ይኸፍቱ ። ፍልጠት ዝዓጠቀ ሰብ ብናቱ ኣቕጣጫ ህይወቱ ይምርሕ ።",
    reliance4Title: "ሕብረተሰብን ሓቢርካ ምቕማምን",
    reliance4Text: "ሓቀኛ ርእሰ ምርኮሳ ብሕቲ ኣይርከብን ። ሓያል ሕብረተሰብ ነፍሲ ​​ወከፍ ሰብ ኣብ ርእሱ ዝቅሞ ሓይሊ ይህቦ ።",
    reliance5Title: "ፍትሕን ማዕረ ዕድልን",
    reliance5Text: "ፍትሓዊ ኩነታት ሕብረተሰብ — ልዕልና ሕጊ፡ ማዕረ ዕድልን ሲቪላዊ መሰላትን — ኩሉ ሰብ ናብ ርእሰ ምርኮሳ ዝኸደሉ ዕድል ።",
    developTag: "ብከመይ ምምዕባል · ብኸምዚ ምምዕባሉ",
    developTitle: "ርእሰ ምርኮሳ ብከመይ ትምዕብሎ?",
    developDesc: "ናይ ዕለት ዕለት ስጉምቲታት — ነፍሲ ወከፍ ናይ ናጻ ሕይወት ኣካል ።",
    step1Title: "ኣብ ፈጣሪን ናይ ሕይወት ትርጉምን ምስርሳር",
    step1Text: "ነፍሲ ወከፍ መዓልቲ ኣብ ጸሎትን ምሕሳብን ጀምር ። ፈጣሪ ናይ ሂወትካ ኣቅጣጫ ኣለዎ — ናቱ ናቅ ፍቐዶ ።",
    step2Title: "ናይ ዕለት ዕለት ርእሰ ቁጽጽር ምምዕባል",
    step2Text: "ዕላማ ኣውጽእ፡ ናይ ዕለት ዕለት ስርዓት ምዕባዩ ። ኣሽቱ ልምድታት ዝዓበዩ ናጽነት ዘምጽኡ ።",
    step3Title: "ዕምሩ ምምሃር ምቅጻል",
    step3Text: "ኣብ ምምሃር ኣይደው ። ፍልጠት ናይ ርእሰ ምርኮሳ ዋጋ እዩ — ዝበዝሐ ዝተምሃርካ፡ ዝዛሓ ናጻ ።",
    step4Title: "ናይ ገንዘብ ፍልጠትን ሓላፍነትን ምምዕባል",
    step4Text: "ናይ ገንዘብ ፍልጠት ኣምዕብሉ — ምቁጣብ፡ ዕዳ ምርካብ ምምሕያሽ፡ ሃብቲ ምህናጽ ። ናይ ኢኮኖሚ ናጽነት ናይ ርእሰ ምርኮሳ ሓደ ቀንዲ መለክዒ እዩ ።",
    step5Title: "ዘዕቢኡ ዝምድናታት ምምዕባል",
    step5Text: "ዘዕቢኡ ዝምድናታት ምምዕባሉ — ዝሕግዙ፡ ዝደፋፍኡ፡ ናብ ዓቢ ሰብ ዝቕይሩ ።",
    step6Title: "ናይ ምርጫታትካ ምሉእ ሓላፍነት ምወሳድ",
    step6Text: "ናይ ርእስኻ ምርጫታትን ውጺኢቶምን ሓላፍነት ወስድ ። ናትካ ሕይወት ብናትካ ኢድ ።",
    step7Title: "ካልኦት ምሕጋዝ — ናብ ሕብረተሰብ ምምላስ",
    step7Text: "ናይ ርእሰ ምርኮሳ ፍሬ — ካልኦት ምሕጋዝ ። ካልኦት ኣብ ርእሶም ምቃም — ናትካ ሰረት ዘደልዳሉ ።",
    relianceClosing: "ርእሰ ምርኮሳ ስጉምቲ ብስጉምቲ ይህነጽ — ብእምነት፡ ስርዓት፡ ምምሃር፡ ሓላፍነትን ንካልኦት ምሕጋዝን ።",
    // Governance section
    sectionGov: "ስነ ምሕደራ እንታይ ማለት እዩ?",
    sectionGovDesc: "ናይ ርእሰ ምሕደራ፡ ሕብረተሰብን ትካላትን ምሕደራ — ትርጉሙን ኣሰራርሕኡን ።",
    govDefHeading: "ስነ ምሕደራ — ትርጉምን ሰረቱን",
    govDefP1: "ስነ ምሕደራ ማለት — ሕብረተሰብ፡ ትካልን ሃገርን ብስርዓት፡ ብሕጊ፡ ብሓቀኛ ናይ ሓቢርካ ኣሰራርሓን ዝምዳን ዝካየደሉ ኣሰራርሓ እዩ ።",
    govDefP2: "ሓቀኛ ምሕደራ ጥራሕ ስልጣን ይሕዝ ዝብል ኣይኮነን — <em>ስልጣን ብኸምዚ</em> ይካየድ ማለት ። ብንጽህና፡ ሓላፍነትን ፍትሕን ።",
    govP1: "ንጽህና", govP1Sub: "Transparency",
    govP2: "ሓላፍነት", govP2Sub: "Accountability",
    govP3: "ተሳትፎ", govP3Sub: "Participation",
    govP4: "ልዕልና ሕጊ", govP4Sub: "Rule of Law",
    govP5: "ውጽኢታዊነት", govP5Sub: "Effectiveness",
    govP6: "ፍትሒ", govP6Sub: "Justice",
    govHowTag: "ብከመይ ይካየድ · ኣሰራርሓ",
    govHowTitle: "ርእሰ ምሕደራ ብከመይ ይካየድ?",
    govHowDesc: "ሽድሽተ ቀንዲ ኣሰራርሓ — ካብ መትከላት ናብ ተግባር — ሓቀኛ ርእሰ ምሕደራ ዘትርር ።",
    govStep1Title: "ንጹር መትከላትን ሓባራዊ ክብርታትን ምምጻእ",
    govStep1Text: "ርእሰ ምሕደራ ካብ ዝተሰማምዑሉ ክብርታት ይጅምር — ሓቅነት፡ ክብርን፡ ፍትሕን ። እዚ ክብርታት ናይ ኩሉ ምሕደራ ቅዋም እዩ ።",
    govStep2Title: "ንጹር ትካላዊ ቅርጽን ዝፈለጡዎ ዕማምን ምምጻእ",
    govStep2Text: "ሓደ ዝፈለጡዎ ዕማምን ሓላፍነትን ዘለዎም ትካላዊ ቅርጺ — ናይ ምሕደራ ሰረት ። ኩሉ ሰብ ናቱ ዕማም ዝፈልጠሉ ስርዓት ምምጻእ ።",
    govStep3Title: "ሓላፍነትን ክትትልን ምርጋጽ",
    govStep3Text: "ሓለፍቲ ናይ ዝወስዶዎ ውሳነ ሓላፍነት ዝወስዱሉ ስርዓት ምምጻእ — ርእሰ ምሕደራ ካብ ዕሱብ ዝሕሉ ።",
    govStep4Title: "ሰፊሕ ተሳትፎን ምርኻብን ምስምጻእ",
    govStep4Text: "ናይ ኩሎም ድምጺ ዝሰምዕ ምሕደራ — ናይ ህዝቢ ምሕደራ እዩ ። ምርጫ፡ ምምኻር፡ ቁሊሕ ምዝራብ — ናይ ርእሰ ምሕደራ ኣካላት ።",
    govStep5Title: "ልዕልና ሕጊ ማዕረ ምኽባር",
    govStep5Text: "ሕጊ ንኩሉ ሰብ ማዕረ ዝምልከት ክኸውን ኣለዎ — ሓይለኛ ኮነ ድኹም ። ልዕልና ሕጊ — ናይ ርእሰ ምሕደራ ዓምዲ ።",
    govStep6Title: "ቀጻሊ ምምሃርን ምምሕያሽን",
    govStep6Text: "ርእሰ ምሕደራ ኣይውዳእን — ዘሻሻሉ፡ ካብ ጌጋ ዝምሃሩ፡ ዝዓቢ ስርዓት ዝምህ ። ቀጻሊ ምምሕያሽ ናይ ሓቀኛ ምሕደራ ምልክት ።",
    govClosing: "ርእሰ ምሕደራ ብመትከላት፡ ንጹር ቅርጺ፡ ሓላፍነት፡ ተሳትፎ፡ ልዕልና ሕጊን ቀጻሊ ምምሕያሽን ይካየድ ።",
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
