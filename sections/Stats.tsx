"use client";

import { useState, useEffect } from "react";

export default function Stats() {
  const [lang, setLang] = useState("ar");

  // جعل القيم الافتراضية تبدأ من الأرقام النهائية مباشرة لحل مشكلة الـ 0 في حال تأخر الأنميشن
  const [countries, setCountries] = useState(50);
  const [students, setStudents] = useState(2594);
  const [teachers, setTeachers] = useState(100);
  const [satisfaction, setSatisfaction] = useState(98);

  useEffect(() => {
    // تم تعديل المفتاح ليتطابق مع الـ Navbar وهو site_lang
    const savedLang = localStorage.getItem("site_lang") || "ar";
    setLang(savedLang);

    // إعادة تصفير العدادات لبدء الأنميشن بسلاسة
    setCountries(0);
    setStudents(0);
    setTeachers(0);
    setSatisfaction(0);

    const duration = 1200; // وقت الحركة بالملي ثانية
    const steps = 40; // تقليل الخطوات ليكون الأنميشن أسرع وأخف على معالجات الهواتف
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setCountries(Math.min(Math.floor((50 / steps) * currentStep), 50));
      setStudents(Math.min(Math.floor((2594 / steps) * currentStep), 2594));
      setTeachers(Math.min(Math.floor((100 / steps) * currentStep), 100));
      setSatisfaction(Math.min(Math.floor((98 / steps) * currentStep), 98));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // تنسيق يدوي ثابت للأرقام يمنع انعكاس الخانات أو قلب الرموز في لغات الموقع
  const formatStudents = (num: number) => {
    if (num < 1000) return num.toString();
    const thousands = Math.floor(num / 1000);
    const remainder = num % 1000;
    const paddedRemainder = remainder.toString().padStart(3, "0");
    return `${thousands},${paddedRemainder}`;
  };

  const statTranslations = {
    ar: [
      { number: `+${countries}`, title: "دولة حول العالم", icon: "🌐" },
      { number: formatStudents(students), title: "طالب وطالبة", icon: "🎓" },
      { number: `+${teachers}`, title: "معلم متخصص", icon: "👨‍🏫" },
      { number: `%${satisfaction}`, title: "نسبة رضا الطلاب", icon: "⭐" },
    ],
    en: [
      { number: `${countries}+`, title: "Countries Worldwide", icon: "🌐" },
      { number: formatStudents(students), title: "Students", icon: "🎓" },
      { number: `${teachers}+`, title: "Specialized Teachers", icon: "👨‍🏫" },
      { number: `${satisfaction}%`, title: "Satisfaction Rate", icon: "⭐" },
    ],
    de: [
      { number: `${countries}+`, title: "Länder Weltweit", icon: "🌐" },
      { number: formatStudents(students), title: "Schüler & Studentinnen", icon: "🎓" },
      { number: `${teachers}+`, title: "Fachlehrer", icon: "👨‍🏫" },
      { number: `${satisfaction}%`, title: "Zufriedenheitsrate", icon: "⭐" },
    ],
  };

  const currentStats = statTranslations[lang as keyof typeof statTranslations] || statTranslations.ar;

  return (
    <section className="relative z-30 bg-white py-10 sm:py-16 border-b border-gray-100 w-full block clear-both select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* تم تحديث كود الـ Grid ليكون متجاوباً تماماً على الموبايل بدلاً من التداخل والتصفير */}
        <div dir={lang === "ar" ? "rtl" : "ltr"} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {currentStats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 w-full max-w-[200px]"
            >
              {/* أيقونة الإحصائية المستديرة الفخمة */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-[#0F5C4D]/10 border border-[#0F5C4D]/20 text-3xl sm:text-4xl shadow-sm mb-3 sm:mb-5">
                {item.icon}
              </div>

              {/* الرقم التصاعدي الصافي والواضح بلون الأكاديمية */}
              <h2 className="text-4xl sm:text-5xl font-black text-[#0F5C4D] tracking-tight">
                {item.number}
              </h2>

              {/* العنوان السفلي المترجم - تم إصلاح علامة التنصيص هنا */}
              <p className="mt-1 sm:mt-2 text-sm sm:text-base font-bold text-gray-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
