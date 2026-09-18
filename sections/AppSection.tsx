"use client";

import { useState, useEffect } from "react";

const appTranslations = {
  ar: {
    tag: "تطبيق الأكاديمية",
    comingSoon: "سيطلق قريباً 🚀",
    title: "كل رحلتك القرآنية في تطبيق واحد",
    description:
      "احجز حصتك، تابع تقدمك، وتواصل مع معلمك مباشرة - في أي وقت ومن أي مكان عبر تطبيق أكاديمية بيان المستقبلي.",
    feature1Title: "حصص مباشرة فردية وجماعية",
    feature2Title: "متابعة الحفظ والمراجعة بالتقارير",
    feature3Title: "تذكيرات ذكية بمواعيد الحصص",
    appName: "أكاديمية بَيَانْ",
    appSub: "لتَعْلِيم القُرآن الكَرِيم",
    btnApp: "سيطلق قريباً",
  },

  en: {
    tag: "Academy App",
    comingSoon: "Coming Soon 🚀",
    title: "Your Entire Quranic Journey in One App",
    description:
      "Book your lessons, track your progress, and communicate with your teacher directly - anytime, anywhere via the upcoming Bayan Academy app.",
    feature1Title: "Live Private & Group Lessons",
    feature2Title: "Track Memorization & Revision with Reports",
    feature3Title: "Smart Reminders for Lesson Slots",
    appName: "Bayan Academy",
    appSub: "Holy Quran Learning",
    btnApp: "Coming Soon",
  },

  de: {
    tag: "Akademie-App",
    comingSoon: "Demnächst 🚀",
    title: "Ihre gesamte Koran-Reise in einer App",
    description:
      "Buchen Sie Ihre Lektionen, verfolgen Sie Ihre Fortschritte und kommunizieren Sie direkt mit Ihrem Lehrer - über die kommende Bayan-Akademie-App.",
    feature1Title: "Live-Einzel- und Gruppenunterricht",
    feature2Title: "Verfolgen Sie Auswendiglernen & Wiederholung mit Berichten",
    feature3Title: "Intelligente Erinnerungen an Unterrichtszeiten",
    appName: "Bayan Akademie",
    appSub: "Koran lernen",
    btnApp: "Demnächst",
  },
};

export default function AppSection() {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);
  }, []);

  const t =
    appTranslations[lang as keyof typeof appTranslations] ||
    appTranslations.ar;

  return (
    <section
      id="app"
      style={{
        marginTop: "120px",
        marginBottom: "120px",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      className="bg-[#072B22] text-white w-full overflow-hidden block clear-both relative z-30 select-none"
    >
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* الجزء الأيمن: الهاتف الذكي */}
        <div className="relative flex justify-center items-center w-full h-[480px]">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-green-400/10 blur-3xl animate-pulse" />

          <div className="relative border-4 border-zinc-700 bg-zinc-900 rounded-[40px] w-[260px] h-[490px] shadow-2xl p-2.5 flex flex-col justify-between items-center overflow-hidden">

            <div className="w-24 h-4 bg-zinc-700 rounded-full mb-3 shadow-inner z-30" />

            <div className="relative w-full h-full rounded-[28px] p-5 flex flex-col justify-between items-center overflow-hidden text-white">

              <img
                src="/images/hero/main.jpg"
                alt="Bayan Cover"
                className="absolute inset-0 w-full h-full object-cover z-0"
                onError={(e) => {
                  e.currentTarget.src = "https://unsplash.com";
                }}
              />

              <div className="absolute inset-0 bg-[#072B22]/75 backdrop-blur-[1px] z-10" />

              <div className="relative z-20 flex flex-col items-center mt-6 text-center">

                <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center font-bold text-[#0F5C4D] text-2xl shadow-xl border border-yellow-500/30 mb-3">
                  📖
                </div>

                <h4 className="font-black text-xl text-yellow-500 tracking-wide drop-shadow-md">
                  {t.appName}
                </h4>

                <p className="text-[10px] text-gray-200 font-extrabold mt-0.5 tracking-wider">
                  {t.appSub}
                </p>

              </div>

              <div className="relative z-20 w-full flex flex-col gap-2.5 px-1.5 opacity-90">
                <div className="h-8 bg-white/15 backdrop-blur-md rounded-xl border border-white/10 shadow-inner" />
                <div className="h-8 bg-white/15 backdrop-blur-md rounded-xl border border-white/10 shadow-inner" />
              </div>

              <div className="relative z-20 w-full px-1.5 mb-2">

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-yellow-600 to-[#C9A227] text-zinc-950 font-black text-sm md:text-base py-3 rounded-xl shadow-xl opacity-90 cursor-not-allowed text-center"
                >
                  {t.btnApp}
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* الجزء الأيسر: النصوص والمميزات */}
        <div
          className={`flex flex-col gap-5 ${
            lang === "ar"
              ? "text-right items-start"
              : "text-left items-start w-full"
          }`}
        >

          <div className="flex items-center gap-4 flex-wrap">

            <span className="text-base font-extrabold text-[#71A851] tracking-widest block">
              {t.tag}
            </span>

            <span className="bg-yellow-500/20 border-2 border-yellow-500/50 text-yellow-500 text-sm md:text-base font-black px-5 py-1.5 rounded-full shadow-md animate-pulse tracking-wide">
              {t.comingSoon}
            </span>

          </div>

          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-white mb-2">
            {t.title}
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-8 max-w-xl mb-8 font-medium">
            {t.description}
          </p>

          <div className="flex flex-col gap-6 w-full font-bold text-gray-100 text-base md:text-lg">

            <div
              className={`flex items-center gap-4 ${
                lang === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/10 shadow-sm text-xl">
                💻
              </div>

              <span className="tracking-wide">
                {t.feature1Title}
              </span>
            </div>

            <div
              className={`flex items-center gap-4 ${
                lang === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white border border-white/10 shadow-sm text-xl">
                📈
              </div>

              <span className="tracking-wide">
                {t.feature2Title}
              </span>
            </div>

            <div
              className={`flex items-center gap-4 ${
                lang === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#71A851] border border-white/10 shadow-sm text-xl">
                ✓
              </div>

              <span className="tracking-wide">
                {t.feature3Title}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}