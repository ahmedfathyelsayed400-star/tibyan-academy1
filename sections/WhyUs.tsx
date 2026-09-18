"use client";

import { useState, useEffect } from "react";

const whyUsTranslations = {
  ar: {
    tag: "لماذا نحن",
    title: "ليه تختار أكاديمية بيان في رحلتك مع القرآن؟",
    subtitle: "حصص مباشرة، ومتابعة شخصية، ومنهج واضح مع نخبة من المعلمين المعتمدين - من أي مكان في العالم.",
    cards: [
      { title: "تجربة تعليم عصرية", desc: "منصة سهلة، وحصص مباشرة فردية وجماعية، وتقارير متابعة أولاً بأول.", id: "computer" },
      { title: "محتوى معتمد ومنهج واضح", desc: "مسارات مدروسة وخطط تعليمية متكاملة تناسب كل مستوى وكل عمر.", id: "book" },
      { title: "متابعة شخصية خطوة بخطوة", desc: "معلم خاص يتابع تقدمك، ويوجهك حتى تصل للإتقان بإذن الله.", id: "check" },
      { title: "تعلّم بما يناسب احتياجك", desc: "أوقات مرنة تناسبك صباحاً أو مساءً، وخطط مصممة على قياسك.", id: "clock" }
    ]
  },
  en: {
    tag: "Why Us",
    title: "Why Choose Bayan Academy for Your Quran Journey?",
    subtitle: "Live classes, personal tracking, and a clear curriculum with elite certified teachers - anywhere in the world.",
    cards: [
      { title: "Modern Learning Experience", desc: "Easy platform, live private and group classes, and regular tracking reports.", id: "computer" },
      { title: "Accredited Content & Clear Plan", desc: "Carefully designed paths and integrated plans for every level and age.", id: "book" },
      { title: "Step-by-Step Personal Tracking", desc: "A private teacher tracks your progress and guides you to perfection.", id: "check" },
      { title: "Learn To Fit Your Needs", desc: "Flexible slots suiting you morning or evening, and custom-tailored plans.", id: "clock" }
    ]
  },
  de: {
    tag: "Warum wir",
    title: "Warum die Bayan-Akademie für Ihre Koran-Reise wählen?",
    subtitle: "Live-Unterricht, persönliche Betreuung und ein klarer Lehrplan mit zertifizierten Fachlehrern.",
    cards: [
      { title: "Moderne Lernerfahrung", desc: "Einfache Plattform, Live-Einzel- und Gruppenunterricht sowie regelmäßige Berichte.", id: "computer" },
      { title: "Akkreditierte Inhalte & Klarer Plan", desc: "Sorgfältig konzipierte Pfade und integrierte Pläne für jedes Alter.", id: "book" },
      { title: "Persönliche Schritt-für-Schritt-Betreuung", desc: "Ein privater Lehrer verfolgt Ihre Fortschritte und führt Sie zur Perfektion.", id: "check" },
      { title: "Lernen nach Ihren Bedürfnissen", desc: "Flexible Zeiten am Morgen oder Abend und maßgeschneiderte Pläne.", id: "clock" }
    ]
  }
};

export default function WhyUs() {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);
  }, []);

  const t = whyUsTranslations[lang as keyof typeof whyUsTranslations] || whyUsTranslations.ar;

  const renderIcon = (id: string) => {
    switch (id) {
      case "computer":
        return (
          <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://w3.org">
            <rect x="2" y="3" width="20" height="13" rx="2"></rect>
            <path d="M6 21h12"></path>
            <path d="M12 16v5"></path>
          </svg>
        );
      case "book":
        return (
          <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://w3.org">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        );
      case "check":
        return (
          <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://w3.org">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        );
      case "clock":
        return (
          <svg className="w-8 h-8 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://w3.org">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      style={{ marginTop: "140px", marginBottom: "120px", paddingTop: "60px", paddingBottom: "60px" }}
      className="bg-white text-black w-full block clear-both relative z-30 select-none mx-auto"
    >
      <div className="mx-auto max-w-7xl px-4 text-center flex flex-col items-center justify-center">
        
        <span className="text-base font-bold text-[#71A851] tracking-widest block mb-4 mx-auto text-center">
          {t.tag}
        </span>

        <h2 className="text-4xl md:text-[44px] font-extrabold text-[#192419] tracking-tight leading-tight mb-6 max-w-3xl mx-auto text-center">
          {t.title}
        </h2>

        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-20 leading-relaxed font-semibold text-center">
          {t.subtitle}
        </p>

        {/* شبكة الأعمدة الأربعة المتوازية */}
        <div 
          dir={lang === "ar" ? "rtl" : "ltr"} 
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-items-center items-stretch"
        >
          {t.cards.map((card, i) => (
            <div 
              key={i} 
              // 👈 تم استبدال shadow-xl بـ shadow-[0_20px_45px_rgba(0,0,0,0.07)] لعمل تظليل ثلاثي الأبعاد فاخر يجذب عين الزائر فوراً
              className="bg-white p-7 rounded-[24px] border border-gray-100 shadow-[0_20px_45px_rgba(0,0,0,0.07)] flex flex-col items-center justify-start text-center w-full max-w-[260px] min-h-[300px] transition-all duration-300 hover:-translate-y-2"
            >
              {/* الدائرة الخضراء */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#60993E] text-white shadow-md mb-6 shrink-0 self-center">
                {renderIcon(card.id)}
              </div>

              {/* عنوان الميزة */}
              <h3 className="text-lg font-black text-[#192419] mb-3 leading-snug w-full text-center">
                {card.title}
              </h3>

              {/* الوصف التفصيلي الرمادي */}
              <p className="text-gray-400 text-sm leading-[1.75] font-bold font-sans w-full text-center">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
