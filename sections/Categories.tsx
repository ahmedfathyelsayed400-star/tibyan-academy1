"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// قاموس الترجمة لجميع الفئات والعناوين والوصف بالأكاديمية
const translations = {
  ar: {
    sectionTag: "برامجنا التعليمية",
    sectionTitle: "فئات الدورات",
    btnViewCourses: "استعرض الدورات",
    btnRegisterNow: "سجل الآن",
    badgeKids: "للأطفال من 4 إلى 16",
    categories: [
      {
        title: "دورات القرآن الكريم",
        description: "برامج متخصصة في حفظ القرآن الكريم وتلاوته وتصحيح القراءة مع معلمين متخصصين.",
        image: "/images/categories/quran.jpg",
        link: "/courses/quran",
      },
      {
        title: "دورات التجويد",
        description: "تعلم أحكام التجويد من المستوى المبتدئ حتى المتقدم مع التطبيق العملي.",
        image: "/images/categories/tajweed.jpg",
        link: "/courses/tajweed",
      },
      {
        title: "الدورات الإسلامية",
        description: "تعلم الفقه والعقيدة والحديث والتفسير والسيرة النبوية بأسلوب مبسط ومنهجي.",
        image: "/images/categories/islamic.jpg",
        link: "/courses/islamic",
      },
      {
        title: "دورات اللغة العربية",
        description: "تعلم اللغة العربية وقواعدها ومهاراتها لجميع المستويات والأعمار.",
        image: "/images/categories/arabic.jpg",
        link: "#register",       // 👈 تم التوجيه للقسم الأخضر
        isRegister: true,        // 👈 لتفعيل زر سجل الآن
      },
      {
        title: "إعداد وتأهيل معلمي القرآن الكريم",
        description: "برنامج متخصص لإعداد وتأهيل معلمي القرآن الكريم بالمهارات العلمية والتعليمية.",
        image: "/images/categories/teachers.jpg",
        link: "#register",
        isRegister: true,
      },
      {
        title: "ليتفقهوا (مسار ولد صالح)",
        description: "عقيدة، فقه، تفسير، حديث، سيرة، وآداب إسلامية بأسلوب مبسط للأطفال.",
        image: "/images/categories/walid-salih.jpg",
        link: "#register",
        isRegister: true,
        badge: "للأطفال من 4 إلى 16",
      },
    ]
  },
  en: {
    sectionTag: "Our Educational Programs",
    sectionTitle: "Course Categories",
    btnViewCourses: "View Courses",
    btnRegisterNow: "Register Now",
    badgeKids: "For kids 4 to 16",
    categories: [
      {
        title: "Holy Quran Courses",
        description: "Specialized programs in memorization, recitation, and correction with expert teachers.",
        image: "/images/categories/quran.jpg",
        link: "/courses/quran",
      },
      {
        title: "Tajweed Courses",
        description: "Learn the rules of Tajweed from beginner to advanced levels with practical application.",
        image: "/images/categories/tajweed.jpg",
        link: "/courses/tajweed",
      },
      {
        title: "Islamic Courses",
        description: "Learn Fiqh, Aqeedah, Hadith, Tafsir, and Seerah in a simplified and systematic way.",
        image: "/images/categories/islamic.jpg",
        link: "/courses/islamic",
      },
      {
        title: "Arabic Language Courses",
        description: "Learn the Arabic language, its grammar and skills for all levels and ages.",
        image: "/images/categories/arabic.jpg",
        link: "#register",
        isRegister: true,
      },
      {
        title: "Quran Teacher Training",
        description: "A specialized program to qualify Quran teachers with pedagogical and scientific skills.",
        image: "/images/categories/teachers.jpg",
        link: "#register",
        isRegister: true,
      },
      {
        title: "Litafaqqahu (Walid Saleh Track)",
        description: "Aqeedah, Fiqh, Tafsir, Hadith, Seerah, and Islamic manners simplified for kids.",
        image: "/images/categories/walid-salih.jpg",
        link: "#register",
        isRegister: true,
        badge: "For kids 4 to 16",
      },
    ]
  },
  de: {
    sectionTag: "Unsere Bildungsprogramme",
    sectionTitle: "Kurskategorien",
    btnViewCourses: "Kurse anzeigen",
    btnRegisterNow: "Jetzt anmelden",
    badgeKids: "Für Kinder von 4 bis 16",
    categories: [
      {
        title: "Heiliger Koran Kurse",
        description: "Spezialisierte Programme zum Auswendiglernen, Rezitieren und Korrigieren mit Fachlehrern.",
        image: "/images/categories/quran.jpg",
        link: "/courses/quran",
      },
      {
        title: "Tajweed-Kurse",
        description: "Lernen Sie die Regeln des Tajweed von Anfänger- bis Fortgeschrittenenniveau mit praktischer Anwendung.",
        image: "/images/categories/tajweed.jpg",
        link: "/courses/tajweed",
      },
      {
        title: "Islamische Kurse",
        description: "Lernen Sie Fiqh, Aqeedah, Hadith, Tafsir und Seerah auf vereinfachte und systematische Weise.",
        image: "/images/categories/islamic.jpg",
        link: "/courses/islamic",
      },
      {
        title: "Arabische Sprachkurse",
        description: "Lernen Sie die arabische Sprache, Grammatik und Fähigkeiten für alle Niveaus und Altersgruppen.",
        image: "/images/categories/arabic.jpg",
        link: "#register",
        isRegister: true,
      },
      {
        title: "Koranlehrer-Ausbildung",
        description: "Ein spezialisiertes Programm zur Qualifizierung von Koranlehrern mit pädagogischen und wissenschaftlichen Fähigkeiten.",
        image: "/images/categories/teachers.jpg",
        link: "#register",
        isRegister: true,
      },
      {
        title: "Litafaqqahu (Walid Saleh Track)",
        description: "Aqeedah, Fiqh, Tafsir, Hadith, Seerah, und islamische Manieren vereinfacht für Kinder.",
        image: "/images/categories/walid-salih.jpg",
        link: "#register",
        isRegister: true,
        badge: "Für Kinder von 4 bis 16",
      },
    ]
  }
};

export default function Categories() {
  const [lang, setLang] = useState("ar");

  // جلب اللغة المحفوظة لمزامنة المحتوى
  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);
  }, []);

  const currentTranslation = translations[lang as keyof typeof translations] || translations.ar;

  return (
    <section className="mt-40 bg-white py-24 text-black">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* العناوين العلوية المترجمة */}
        <div className="mb-16 text-center">
          <span className="text-lg font-bold text-[#C9A227]">
            {currentTranslation.sectionTag}
          </span>
          <h2 className="mt-4 text-5xl font-extrabold text-[#0F5C4D]">
            {currentTranslation.sectionTitle}
          </h2>
        </div>

        {/* شبكة عرض بطاقات الفئات */}
        <div className="grid grid-cols-1 justify-items-center gap-x-12 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {currentTranslation.categories.map((category: any) => (
            <div
              key={category.title}
              className="group relative w-full max-w-[360px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* شارة العمر للأطفال إذا وجدت */}
              {category.badge && (
                <div className="absolute top-4 right-4 z-10 bg-[#0F5C4D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {category.badge}
                </div>
              )}

              <div className="h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h3 className="mb-4 text-center text-2xl font-extrabold text-[#0F5C4D]">
                  {category.title}
                </h3>

                <p className="text-center leading-8 text-gray-600">
                  {category.description}
                </p>

                <div className="mt-8 flex justify-center">
                  <Link
                    href={category.link}
                    className="rounded-lg bg-[#0F5C4D] px-8 py-3 font-bold text-white transition hover:bg-[#C9A227]"
                  >
                    {category.isRegister ? currentTranslation.btnRegisterNow : currentTranslation.btnViewCourses}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}