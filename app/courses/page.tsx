"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// قاموس الترجمة الشامل لجميع أقسام الدورات
const translations = {
  ar: {
    pageTitle: "أقسام الدورات",
    pageSubtitle: "اختر القسم المناسب وابدأ رحلتك التعليمية مع أكاديمية بيان.",
    categories: [
      {
        title: "دورات القرآن الكريم",
        description: "تعلم القرآن الكريم حفظًا وتلاوة وتصحيحًا مع معلمين متخصصين.",
        link: "/courses/quran",
        image: "/images/categories/quran.jpg",
      },
      {
        title: "دورات التجويد",
        description: "تعلم أحكام التجويد ومخارج الحروف بطريقة سهلة ومنهجية.",
        link: "/courses/tajweed",
        image: "/images/categories/tajweed.jpg",
      },
      {
        title: "دورات القراءات",
        description: "دراسة القراءات القرآنية ورواياتها مع متخصصين.",
        link: "/courses/qiraat",
        image: "/images/categories/qiraat.jpg",
      },
      {
        title: "دورات اللغة العربية",
        description: "تعلم اللغة العربية والنحو والصرف بطريقة احترافية.",
        link: "/courses/arabic",
        image: "/images/categories/arabic.jpg",
      },
      {
        title: "الدورات الإسلامية",
        description: "تعلم العقيدة والفقه والتفسير والسيرة النبوية.",
        link: "/courses/islamic",
        image: "/images/categories/islamic.jpg",
      },
      {
        title: "إعداد وتأهيل المعلمين",
        description: "برامج متخصصة لإعداد معلمي القرآن والتدريس.",
        link: "/courses/teachers",
        image: "/images/categories/teachers.jpg",
      },
    ]
  },
  en: {
    pageTitle: "Course Departments",
    pageSubtitle: "Choose the right department and start your educational journey with Bayan Academy.",
    categories: [
      {
        title: "Holy Quran Courses",
        description: "Learn the Holy Quran, memorization, recitation, and correction with specialized teachers.",
        link: "/courses/quran",
        image: "/images/categories/quran.jpg",
      },
      {
        title: "Tajweed Courses",
        description: "Learn the rules of Tajweed and letter articulations in an easy and systematic way.",
        link: "/courses/tajweed",
        image: "/images/categories/tajweed.jpg",
      },
      {
        title: "Qira'at Courses",
        description: "Study Quranic recitations and narrations with leading specialists.",
        link: "/courses/qiraat",
        image: "/images/categories/qiraat.jpg",
      },
      {
        title: "Arabic Language Courses",
        description: "Learn the Arabic language, grammar, and morphology in a professional manner.",
        link: "/courses/arabic",
        image: "/images/categories/arabic.jpg",
      },
      {
        title: "Islamic Courses",
        description: "Learn Islamic creed, jurisprudence, exegesis, and the Prophet's biography.",
        link: "/courses/islamic",
        image: "/images/categories/islamic.jpg",
      },
      {
        title: "Teacher Training & Qualification",
        description: "Specialized programs for preparing Quran and teaching professionals.",
        link: "/courses/teachers",
        image: "/images/categories/teachers.jpg",
      },
    ]
  },
  de: {
    pageTitle: "Kursabteilungen",
    pageSubtitle: "Wählen Sie die passende Abteilung und beginnen Sie Ihre Bildungsreise mit der Bayan-Akademie.",
    categories: [
      {
        title: "Heiliger Koran Kurse",
        description: "Lernen Sie den Heiligen Koran, Auswendiglernen, Rezitation und Korrektur mit Fachlehrern.",
        link: "/courses/quran",
        image: "/images/categories/quran.jpg",
      },
      {
        title: "Tajweed-Kurse",
        description: "Lernen Sie die Regeln des Tajweed und die Artikulation von Buchstaben auf einfache und systematische Weise.",
        link: "/courses/tajweed",
        image: "/images/categories/tajweed.jpg",
      },
      {
        title: "Qira'at-Kurse",
        description: "Studieren Sie koranische Rezitationen und Erzählungen mit führenden Spezialisten.",
        link: "/courses/qiraat",
        image: "/images/categories/qiraat.jpg",
      },
      {
        title: "Arabische Sprachkurse",
        description: "Lernen Sie die arabische Sprache, Grammatik und Morphologie auf professionelle Weise.",
        link: "/courses/arabic",
        image: "/images/categories/arabic.jpg",
      },
      {
        title: "Islamische Kurse",
        description: "Lernen Sie das islamische Glaubensbekenntnis, die Rechtswissenschaft, die Exegese und die Biografie des Propheten.",
        link: "/courses/islamic",
        image: "/images/categories/islamic.jpg",
      },
      {
        title: "Lehrerausbildung & Qualifizierung",
        description: "Spezialisierte Programme zur Vorbereitung von Koran- und Lehrkräften.",
        link: "/courses/teachers",
        image: "/images/categories/teachers.jpg",
      },
    ]
  }
};

export default function CoursesPage() {
  const [lang, setLang] = useState("ar");

  // جلب اللغة المحددة حالياً من ذاكرة المتصفح
  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);
  }, []);

  const currentTranslation = translations[lang as keyof typeof translations] || translations.ar;

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* العناوين الرئيسية المترجمة */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black">
            {currentTranslation.pageTitle}
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            {currentTranslation.pageSubtitle}
          </p>
        </div>

        {/* شبكة عرض البطاقات */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentTranslation.categories.map((category) => (
            <Link
              key={category.title}
              href={category.link}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg border transition hover:-translate-y-2"
            >
              <div className="relative h-60">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* ضبط اتجاه النص ديناميكياً بناءً على اللغة المحددة */}
              <div className={`p-6 ${lang === "ar" ? "text-right" : "text-left"}`}>
                <h2 className="text-2xl font-bold text-black mb-3">
                  {category.title}
                </h2>
                <p className="text-gray-600 leading-7">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
