"use client";

import { useState, useEffect } from "react";

export default function LanguageMenu() {
  const [currentLang, setCurrentLang] = useState("ar");
  const [isOpen, setIsOpen] = useState(false);

  // استخدام رموز نصية مميزة (AR - EN - DE) بدلاً من الأعلام لضمان المظهر الاحترافي وعدم انكسار الروابط
  const languages = [
    { code: "ar", name: "العربية", label: "AR" },
    { code: "en", name: "English", label: "EN" },
    { code: "de", name: "Deutsch", label: "DE" },
  ];

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang");
    if (savedLang) {
      setCurrentLang(savedLang);
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    
    localStorage.setItem("bayan_lang", langCode);
    document.documentElement.lang = langCode;
    document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";
    
    // إعادة تحميل لضمان تطبيق القاموس اللغوي على كامل الموقع فوراً
    window.location.reload();
  };

  const activeLang = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div 
      className="relative z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* الزر الرئيسي يعرض الرمز اللغوي الحالي بشكل منسق */}
      <button 
        className="flex items-center gap-2 text-lg font-semibold text-black transition hover:text-yellow-600 focus:outline-none bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200"
      >
        <span className="text-sm font-bold text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-200">{activeLang.label}</span>
        <span>{activeLang.name}</span>
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* قائمة الخيارات المنسدلة */}
      {isOpen && (
        <div className={`absolute mt-2 w-44 rounded-xl bg-white shadow-2xl border border-gray-100 py-1.5 z-50 ${currentLang === "ar" ? "right-0 text-right" : "left-0 text-left"}`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center justify-between w-full px-4 py-3 text-base transition-colors duration-200 ${
                currentLang === lang.code 
                  ? "bg-yellow-50 text-yellow-600 font-bold" 
                  : "text-gray-700 hover:bg-gray-50 hover:text-yellow-600"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="text-xs font-mono bg-gray-100 px-1 rounded text-gray-500">{lang.label}</span>
                <span>{lang.name}</span>
              </span>
              {currentLang === lang.code && (
                <span className="text-yellow-600 text-sm">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
