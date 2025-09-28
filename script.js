document.addEventListener("DOMContentLoaded", () => {
  const toggleModeBtn = document.getElementById("toggleMode");
  const toggleLangBtn = document.getElementById("toggleLang");
  const html = document.documentElement;

  // ✅ استرجاع اللغة من localStorage
  let isArabic = localStorage.getItem("lang") === "en" ? false : true;
  let isStudentMode = false;

  // ✅ إشعار مغادرة الصفحة مرة واحدة
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = isArabic
      ? "هل أنت متأكد أنك تريد المغادرة؟ لم تكمل التسجيل بعد!"
      : "Are you sure you want to leave? You haven’t completed registration!";
  });

  // ✅ إخفاء السهم بعد التمرير
window.addEventListener("scroll", () => {
  const arrow = document.querySelector(".scroll-down");
  if (arrow) {
    if (window.scrollY > 100) {
      arrow.style.opacity = "0";
      arrow.style.pointerEvents = "none";
    } else {
      arrow.style.opacity = "1";
      arrow.style.pointerEvents = "auto";
    }
  }
});

  // ✅ الترجمة
  const translations = {
    ar: {
      intro: isStudentMode =>
        isStudentMode
          ? "<h2>اشترك كطالب</h2><p>ابدأ رحلتك التعليمية معنا.</p>"
          : "<h2>قدّم محتواك</h2><p>شارك معرفتك مع الطلاب.</p>",
      features:
        "<h2>الميزات</h2><ul><li>واجهة سهلة الاستخدام</li><li>دعم متعدد اللغات</li><li>نظام آمن وفعال</li></ul>",
      howItWorks:
        "<h2>كيف يعمل</h2><p>اختر وضعك، أنشئ حسابك، وابدأ فورًا.</p>",
      contact:
        "<h2>تواصل معنا</h2><p>نحن هنا لمساعدتك في أي وقت عبر البريد أو الدردشة.</p>",
      toggleLang: "Switch to English",
      toggleModeStudent: "التبديل إلى وضع الطلاب",
      toggleModeCreator: "التبديل إلى وضع تقديم المحتوى",
      cta: "ابدأ الآن",
      welcome: "👋 أهلاً بك في منصتنا التعليمية!",
      platformName: "🎓 منصتنا",
      copyright: "© 2025 جميع الحقوق محفوظة للمطور اشرف احسان"
    },
    en: {
      intro: isStudentMode =>
        isStudentMode
          ? "<h2>Join as a Student</h2><p>Start your learning journey with us.</p>"
          : "<h2>Submit Your Content</h2><p>Share your knowledge with students.</p>",
      features:
        "<h2>Features</h2><ul><li>User-friendly interface</li><li>Multi-language support</li><li>Secure and efficient system</li></ul>",
      howItWorks:
        "<h2>How It Works</h2><p>Select your mode, create your account, and start instantly.</p>",
      contact:
        "<h2>Contact Us</h2><p>We’re here to help anytime via email or chat.</p>",
      toggleLang: "التبديل إلى العربية",
      toggleModeStudent: "Switch to Student Mode",
      toggleModeCreator: "Switch to Content Creator Mode",
      cta: "Start Now",
      welcome: "👋 Welcome to our educational platform!",
      platformName: "🎓 Our Platform",
      copyright: "© 2025 All rights reserved by Ashraf Ehsan"
    }
  };

  // ✅ تحديث المحتوى حسب اللغة والوضع
  function updateContent() {
    const lang = isArabic ? "ar" : "en";
    const t = translations[lang];

    document.getElementById("intro").innerHTML = t.intro(isStudentMode);
    document.getElementById("features").innerHTML = t.features;
    document.getElementById("how-it-works").innerHTML = t.howItWorks;
    document.getElementById("contact").innerHTML = t.contact;
    document.querySelector(".cta-btn").textContent = t.cta;

    toggleLangBtn.textContent = t.toggleLang;
    toggleModeBtn.textContent = isStudentMode
      ? t.toggleModeCreator
      : t.toggleModeStudent;

    html.lang = lang;
    html.dir = isArabic ? "rtl" : "ltr";

    // ✅ إشعار ترحيبي
    const welcome = document.getElementById("welcome-popup");
    if (welcome) {
      welcome.textContent = t.welcome;
      welcome.style.animation = "fadeInOut 4s ease forwards";
    }

    // ✅ اسم المنصة
    const platformName = document.getElementById("platform-name");
    if (platformName) {
      platformName.textContent = t.platformName;
    }

    // ✅ حقوق الملكية
    const copyright = document.getElementById("copyright");
    if (copyright) {
      copyright.textContent = t.copyright;
    }
  }

  // ✅ تبديل اللغة
  toggleLangBtn.onclick = () => {
    isArabic = !isArabic;
    localStorage.setItem("lang", isArabic ? "ar" : "en");
    updateContent();
  };

  // ✅ تبديل الوضع
  toggleModeBtn.onclick = () => {
    isStudentMode = !isStudentMode;
    updateContent();
  };

  // ✅ أول تحميل
  updateContent();
  // ✅ إظهار الأقسام عند ظهورها في الشاشة
const sections = document.querySelectorAll('.section');

const revealSections = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

});
