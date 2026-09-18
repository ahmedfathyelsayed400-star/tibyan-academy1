"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CoursesMenu from "./CoursesMenu";
import LanguageMenu from "./LanguageMenu";
import AccountMenu from "./AccountMenu";

export default function DesktopMenu() {
  const [lang, setLang] = useState("ar");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);
    
    const savedTheme = localStorage.getItem("bayan_theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      applyGlobalDarkStyles(true);
    }
  }, []);

  // دالة برمجية خارقة تصبغ خلفيات ونصوص جميع الأقسام دفعة واحدة فور النقر
  const applyGlobalDarkStyles = (isDark: boolean) => {
    // 1. تحديد جذر الموقع وكامل الحاويات والأقسام المكتوبة
    const rootMain = document.querySelector("main");
    const headerNav = document.querySelector("header");
    const allSections = document.querySelectorAll("section");
    
    if (isDark) {
      // --- تفعيل وضع الظلام الشامل الفخم للموقع ---
      if (rootMain) {
        rootMain.style.backgroundColor = "#070707";
        rootMain.style.color = "#ffffff";
      }
      if (headerNav) {
        headerNav.style.backgroundColor = "#121212";
        headerNav.style.color = "#ffffff";
      }

      // تحويل خلفية ونصوص كافة الأقسام (البنرات، الحصص، الآراء... إلخ) إلى الأسود
      allSections.forEach((sec) => {
        (sec as HTMLElement).style.backgroundColor = "#070707";
        (sec as HTMLElement).style.color = "#ffffff";
      });

      // إجبار كافة العناوين الفرعية ونصوص الوصف داخل الأقسام على التحول للأبيض لتبدو واضحة
      document.querySelectorAll("h1, h2, h3, h4, p, span, div").forEach((el) => {
        const htmlEl = el as HTMLElement;
        // استثناء الأزرار الذهبية والداخلية للحفاظ على رونق الألوان الرسمي للأكاديمية
        if (!htmlEl.classList.contains("bg-gradient-to-r") && !htmlEl.closest(".bg-[#C9A227]")) {
          if (htmlEl.tagName === "P" || htmlEl.classList.contains("text-gray-600") || htmlEl.classList.contains("text-gray-400")) {
            htmlEl.style.color = "#d4d4d8"; // لون رمادي ناعم مريح للعين في الأوصاف
          } else if (htmlEl.tagName.startsWith("H") || htmlEl.classList.contains("text-black") || htmlEl.classList.contains("text-zinc-950")) {
            htmlEl.style.color = "#ffffff"; // أبيض ناصع للعناوين الضخمة
          }
        }
      });

      // إجبار روابط شريط التنقل بالكامل على البقاء باللون الأبيض
      document.querySelectorAll("header a").forEach((el) => {
        (el as HTMLElement).style.color = "#ffffff";
      });

    } else {
      // --- العودة للوضع المضيء الطبيعي والأبيض الناصع ---
      if (rootMain) {
        rootMain.style.backgroundColor = "#ffffff";
        rootMain.style.color = "#000000";
      }
      if (headerNav) {
        headerNav.style.backgroundColor = "#ffffff";
        headerNav.style.color = "#000000";
      }

      allSections.forEach((sec) => {
        const sectionEl = sec as HTMLElement;
        // إرجاع قسم الرحلة والحصة التجريبية للون البيج الخاص به ليتطابق مع إمام
        if (sectionEl.classList.contains("bg-[#FAF9F2]") || sectionEl.innerHTML.includes("احجز حصتك")) {
          sectionEl.style.backgroundColor = "#FAF9F2";
        } else {
          sectionEl.style.backgroundColor = "#ffffff";
        }
        sectionEl.style.color = "#000000";
      });

      // إعادة تنظيف الألوان الأصلية لجميع النصوص والعناوين
      document.querySelectorAll("h1, h2, h3, h4, p, span, div").forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.color = "";
      });

      document.querySelectorAll("header a").forEach((el) => {
        (el as HTMLElement).style.color = "#000000";
      });
    }
  };

  const toggleTheme = () => {
    if (darkMode) {
      setDarkMode(false);
      applyGlobalDarkStyles(false);
      localStorage.setItem("bayan_theme", "light");
    } else {
      setDarkMode(true);
      applyGlobalDarkStyles(true);
      localStorage.setItem("bayan_theme", "dark");
    }
  };

  const t = {
    ar: { home: "الرئيسية", programs: "البرامج", trial: "الحصة التجريبية", app: "التطبيق", soon: "قريباً", faq: "الأسئلة الشائعة", about: "من نحن", contact: "تواصل معنا", btnText1: "سجل", btnText2: "الآن" },
    en: { home: "Home", programs: "Programs", trial: "Trial Lesson", app: "App", soon: "Soon", faq: "FAQ", about: "About Us", contact: "Contact Us", btnText1: "Reg", btnText2: "ister" },
    de: { home: "Startseite", programs: "Programme", trial: "Probestunde", app: "App", soon: "Bald", faq: "FAQ", about: "Über uns", contact: "Kontakt", btnText1: "Reg", btnText2: "istrieren" }
  }[lang] || { home: "الرئيسية", programs: "البرامج", trial: "الحصة التجريبية", app: "التطبيق", soon: "قريباً", faq: "الأسئلة الشائعة", about: "من نحن", contact: "تواصل معنا", btnText1: "سجل", btnText2: "الآن" };

  return (
    <div className="hidden lg:flex items-center gap-7 h-full relative pl-36">

      <Link href="/" className="text-[15px] font-black transition hover:text-[#0F5C4D] z-20 whitespace-nowrap">{t.home}</Link>

      <div className="z-20 font-black hover:text-[#0F5C4D]"><CoursesMenu /></div>

      <Link href="/#trial" className="text-[15px] font-black transition hover:text-[#0F5C4D] z-20 whitespace-nowrap">{t.trial}</Link>

      <div className="relative group z-20">
        <Link href="/#app" className="text-[15px] font-black transition hover:text-[#0F5C4D] whitespace-nowrap block">
          {t.app}
        </Link>
        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#71A851] text-white text-[11px] font-black px-2 py-0.5 rounded-md shadow-md pointer-events-none tracking-wide animate-pulse">
          {t.soon}
        </span>
      </div>

      <Link href="/#faq" className="text-[15px] font-black transition hover:text-[#0F5C4D] z-20 whitespace-nowrap">{t.faq}</Link>
      <Link href="/about" className="text-[15px] font-black transition hover:text-[#0F5C4D] z-20 whitespace-nowrap">{t.about}</Link>
      <Link href="/contact" className="text-[15px] font-black transition hover:text-[#0F5C4D] z-20 whitespace-nowrap">{t.contact}</Link>

      {/* زر التبديل المطور والتفاعلي الشامل */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-100 text-xl shadow-inner transition active:scale-95 z-20"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <LanguageMenu />
      <AccountMenu />

      <div className={`absolute top-0 h-0 flex items-start ${lang === "ar" ? "left-0" : "right-0"}`}>
        <Link href="/register" className="flex flex-col items-center justify-center rounded-b-[45px] bg-[#e2a400] w-[105px] h-40 pt-12 pb-8 px-4 text-lg font-black text-white shadow-2xl transition-all duration-300 hover:bg-[#c89200] hover:h-44 text-center -mt-12 leading-tight z-30">
          <span>{t.btnText1}</span><span>{t.btnText2}</span>
        </Link>
      </div>

    </div>
  );
}
