"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const trialTranslations = {
  ar: {
    tag: "ابدأ رحلتك",
    title: "احجز حصتك التجريبية المجانية الآن",
    description: "دون الحاجة لإنشاء حساب - املأ النموذج وسيتواصل معك فريقنا لتحديد موعد حصتك التجريبية مع المعلم المناسب.",
    feature1: "حصة كاملة مجانية بلا أي التزام",
    feature2: "تقييم مستوى مبدئي من المعلم",
    feature3: "اختيار الوقت الذي يناسبك",
    btnText: "احجز حصتك التجريبية المجانية ←",
    footerText: "دقيقتان فقط - دون الحاجة لإنشاء حساب"
  },
  en: {
    tag: "Start your journey",
    title: "Book your free trial lesson now",
    description: "No account creation required - fill out the form and our team will contact you to schedule your trial lesson.",
    feature1: "Full free lesson with no commitment",
    feature2: "Initial level evaluation by the teacher",
    feature3: "Choose the time that suits you",
    btnText: "Book your free trial lesson ←",
    footerText: "Only 2 minutes - no account needed"
  },
  de: {
    tag: "Beginnen Sie Ihre Reise",
    title: "Buchen Sie jetzt Ihre kostenlose Probestunde",
    description: "Keine Registrierung erforderlich - Füllen Sie das Formular aus und unser team wird Sie kontaktieren.",
    feature1: "Vollständig kostenlose Lektion ohne Verpflichtung",
    feature2: "Erste Einstufung durch den Fachlehrer",
    feature3: "Wählen Sie die Zeit, die Ihnen passt",
    btnText: "Kostenlose Probestunde buchen ←",
    footerText: "Nur 2 Minuten - Ohne Registrierung"
  }
};

export default function TrialSection() {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);
  }, []);

  const t = trialTranslations[lang as keyof typeof trialTranslations] || trialTranslations.ar;

  return (
    // ضبط المسافات بدقة بالبكسل الصريح من فوق وتحت
    <section 
      style={{ marginTop: "140px", marginBottom: "140px", paddingTop: "60px", paddingBottom: "60px" }}
      className="block clear-both relative z-40 bg-[#FAF9F2] w-full text-black border-y border-gray-200/20"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        
        {/* تكبير كلمة ابدأ رحلتك */}
        <span className="text-xl font-extrabold text-[#71A851] tracking-widest block mb-6">
          {t.tag}
        </span>

        {/* تكبير العنوان الرئيسي الضخم text-5xl و تثخينه font-black */}
        <h2 className="text-4xl md:text-[54px] font-black text-[#192419] tracking-tight leading-tight mb-8">
          {t.title}
        </h2>

        {/* تكبير حجم خط الوصف المترجم text-xl */}
        <p className="text-gray-600 text-lg md:text-xl max-w-[800px] mx-auto mb-16 leading-[1.8] tracking-wide">
          {t.description}
        </p>

        {/* تكبير حجم خط شريط المميزات الأفقي المستقيم md:text-[19px] */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 mb-16 text-base md:text-[19px] font-black text-[#192419] ${lang === "ar" ? "sm:flex-row-reverse" : ""}`}>
          
          <div className="flex items-center gap-3.5 whitespace-nowrap">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF5E5] text-[#71A851] text-sm font-black">✓</span>
            <span className="tracking-wide">{t.feature1}</span>
          </div>

          <div className="flex items-center gap-3.5 whitespace-nowrap">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF5E5] text-[#71A851] text-sm font-black">✓</span>
            <span className="tracking-wide">{t.feature2}</span>
          </div>

          <div className="flex items-center gap-3.5 whitespace-nowrap">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF5E5] text-[#71A851] text-sm font-black">✓</span>
            <span className="tracking-wide">{t.feature3}</span>
          </div>

        </div>

        {/* زر الحجز والتنسيق المستقل */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/trial"
            className="inline-flex items-center justify-center bg-[#C9A227] hover:bg-[#b59120] text-[#192419] font-black text-2xl px-16 py-5 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {t.btnText}
          </Link>
          <span className="text-sm font-bold text-gray-400 tracking-wide mt-2">
            {t.footerText}
          </span>
        </div>

      </div>
    </section>
  );
}
