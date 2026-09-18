"use client";

import { useState, useEffect } from "react";

const faqTranslations = {
  ar: {
    tag: "الأسئلة الشائعة",
    title: "كل ما تريد معرفته",
    bottomTag: "تواصل معنا",
    bottomTitle: "هل لديك سؤال؟ نحن هنا",
    questions: [
      { q: "ما الأعمار التي تقبلها الأكاديمية؟", a: "نستقبل جميع الأعمار بدءاً من الأطفال (من سن 4 سنوات) وحتى الكبار، مع برامج وأساليب تدريس مصممة خصيصاً لكل فئة عمرية." },
      { q: "هل الحصص فردية أم جماعية؟", a: "نوفر حصصاً فردية (معلم لطالب واحد) لضمان التركيز الكامل والاستفادة القصوى، كما تتوفر حلقات جماعية صغيرة حسب رغبة الطالب." },
      { q: "كيف أحجز الحصة التجريبية المجانية؟", a: "ببساطة املأ نموذج الحجز الموجود في قسم 'احجز حصتك'، وسيتواصل معك فريق الدعم الفني مباشرة لتنسيق الموعد المناسب لك مع المعلم." },
      { q: "كيف يتم احتساب الأسعار وطرق الدفع?", a: "تختلف الباقات بحسب عدد الحصص الأسبوعية، ونوفر طرق دفع إلكترونية متعددة وآمنة تناسب الطلاب من جميع دول العالم." },
      { q: "هل يوجد معلمات للطالبات والأطفال؟", a: "نعم، نوفر نخبة من المعلمات المتمكنات والمتخصصات لتعليم الطالبات والأطفال النساء لتوفير بيئة تعليمية مريحة ومناسبة." },
      { q: "هل أحصل على شهادة أو إجازة؟", a: "نعم، عند إتمام البرنامج التعليمي واجتياز الاختبارات بنجاح، يمنح الطالب شهادة معتمدة أو إجازة متصلة السند من الأكاديمية." }
    ]
  },
  en: {
    tag: "FAQ",
    title: "Everything You Need To Know",
    bottomTag: "Contact Us",
    bottomTitle: "Have a Question? We Are Here",
    questions: [
      { q: "What ages do you accept in the Academy?", a: "We accept all ages, starting from children (from 4 years old) to adults, with customized programs for each age group." },
      { q: "Are the classes private or group?", a: "We offer 1-on-1 private classes for maximum focus and benefit, and small group circles are also available upon request." },
      { q: "How do I book the free trial lesson?", a: "Simply fill out the form in the 'Book a Trial' section, and our support team will contact you to arrange the perfect slot." },
      { q: "How are prices calculated and what are the payment methods?", a: "Packages vary based on the number of weekly sessions. We provide multiple secure digital payment methods globally." },
      { q: "Are there female teachers for female students and kids?", a: "Yes, we provide elite qualified female teachers to ensure a comfortable and private learning environment." },
      { q: "Do I get a certificate or Ijazah?", a: "Yes, upon successful completion of the curriculum and exams, students receive an accredited certificate or a connected chain Ijazah." }
    ]
  },
  de: {
    tag: "FAQ",
    title: "Alles, was Sie wissen müssen",
    bottomTag: "Kontakt",
    bottomTitle: "Haben Sie Fragen? Wir sind hier",
    questions: [
      { q: "Welches Alter akzeptieren Sie in der Akademie?", a: "Wir akzeptieren jedes Alter, ab 4 Jahren bis hin zu Erwachsenen, mit maßgeschneiderten Lehrplänen." },
      { q: "Ist der Unterricht einzeln oder in der Gruppe?", a: "Wir bieten 1-zu-1 Einzelunterricht für maximale Konzentration, auf Wunsch gibt es auch kleine Gruppenkreise." },
      { q: "Wie buche ich die kostenlose Probestunde?", a: "Füllen Sie einfach das Formular aus. Unser Support-Team wird Sie direkt kontaktieren, um den Termin zu vereinbaren." },
      { q: "Wie werden die Preise berechnet und wie kann ich bezahlen?", a: "Die Pakete variieren je nach Anzahl der wöchentlichen Stunden. Wir bieten sichere digitale Zahlungsmethoden an." },
      { q: "Gibt es weibliche Lehrkräfte für Schülerinnen und Kinder?", a: "Ja, wir bieten qualifizierte Lehrerinnen für eine angenehme Lernumgebung." },
      { q: "Erhalte ich ein Zertifikat oder eine Ijazah?", a: "Ja, nach erfolgreichem Abschluss erhalten die Schüler ein anerkanntes Zertifikat." }
    ]
  }
};

export default function FAQ() {
  const [lang, setLang] = useState("ar");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);
  }, []);

  const t = faqTranslations[lang as keyof typeof faqTranslations] || faqTranslations.ar;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faqs" /* 👈 تم تعديل الـ id هنا ليصبح faqs بصيغة الجمع ليتطابق تماماً مع زر القائمة العلوية */
      style={{ marginTop: "120px", marginBottom: "140px" }}
      className="bg-white text-black w-full block clear-both relative z-30 select-none py-12 font-['Cairo',sans-serif]"
    >
      <div className="w-full mx-auto px-6 flex flex-col items-center justify-center text-center">
        
        <span className="text-base font-bold text-[#71A851] tracking-widest block mb-4 text-center w-full">
          {t.tag}
        </span>

        <h2 className="text-4xl md:text-[44px] font-black text-[#192419] tracking-tight leading-tight mb-16 text-center w-full">
          {t.title}
        </h2>

        <div dir="rtl" className="w-full max-w-[760px] flex flex-col gap-5 items-center justify-center mx-auto text-right">
          {t.questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="w-full bg-white rounded-[22px] border border-gray-100 shadow-[0_15px_35px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full p-6 md:p-7 flex flex-row items-center justify-start gap-5 cursor-pointer bg-white text-right relative h-20"
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isOpen ? "bg-[#60993E] text-white rotate-180" : "bg-[#60993E]/10 text-[#60993E]"
                  }`}>
                    <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>

                  <h3 className="w-full text-center pr-2 text-xl md:text-[21px] font-black tracking-tight text-[#192419] antialiased">
                    {item.q}
                  </h3>
                </button>

                <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[220px] border-t border-gray-100/60" : "max-h-0"}`}>
                  <p className="p-6 md:p-7 text-gray-500 text-base md:text-[16px] leading-[1.85] font-black tracking-wide text-center w-full max-w-2xl mx-auto antialiased">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-28 text-center w-full flex flex-col items-center justify-center">
          <span className="text-base font-bold text-[#71A851] tracking-widest block mb-4">
            {t.bottomTag}
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-[#192419] tracking-tight leading-tight">
            {t.bottomTitle}
          </h3>
        </div>

      </div>
    </section>
  );
}
