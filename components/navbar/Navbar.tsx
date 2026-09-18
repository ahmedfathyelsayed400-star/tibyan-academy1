"use client";

import { useState, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Sparkles, Volume2, VolumeX, X, RotateCcw } from "lucide-react";
import { dict } from "./translations"; 

export default function Navbar() {
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"ar" | "en">("ar");

  // حالات الفيديو العائم
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); 
  const [isClosed, setIsClosed] = useState(false); 
  const [isNearEnd, setIsNearEnd] = useState(false); 
  const [progress, setProgress] = useState(0);

  const floatingVideoRef = useRef<HTMLVideoElement>(null);

  const t = dict[currentLang] || dict.ar;

  useEffect(() => {
    const savedLang = localStorage.getItem("site_lang") as "ar" | "en";
    if (savedLang) {
      setCurrentLang(savedLang);
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    }
  }, []);

  const courseCategories = [
    { name: currentLang === "ar" ? "دورات اللغة العربية" : "Arabic Courses", path: "/courses/arabic" },
    { name: currentLang === "ar" ? "إعداد وتأهيل معلمي القرآن الكريم" : "Quran Teachers Preparation", path: "/courses/quran-teachers" },
    { name: currentLang === "ar" ? "ليتفقهوا (مسار ولد صالح)" : "Let Them Understand (Wad Saleh)", path: "/courses/walad-saleh" },
    { name: t.tajweed || "التجويد", path: "/courses/tajweed" },
    { name: t.islamic || "الدراسات الإسلامية", path: "/courses/islamic" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
  };

  // تشغيل الفيديو تلقائياً وبصوت عند أول تفاعل أو لمسة على الجوال أو اللابتوب
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleTouchPlay = () => {
      if (floatingVideoRef.current && !isClosed && !isPlaying) {
        // تفعيل الصوت وتشغيل الفيديو مباشرة عند أول لمسة على الشاشة
        floatingVideoRef.current.muted = false;
        floatingVideoRef.current.volume = 1.0;
        
        floatingVideoRef.current.play().then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          events.forEach((event) => window.removeEventListener(event, handleTouchPlay));
        }).catch((error) => {
          // خطة بديلة لو المتصفح رفض الصوت المباشر: يشتغل صامت ثم يفك الميوت تلقائياً
          if (floatingVideoRef.current) {
            floatingVideoRef.current.muted = true;
            floatingVideoRef.current.play().then(() => {
              setIsPlaying(true);
              setIsMuted(true);
              if (floatingVideoRef.current) {
                floatingVideoRef.current.muted = false;
                setIsMuted(false);
              }
            });
          }
          console.log("خطأ في التشغيل:", error);
        });
      }
    };

    const events = ["click", "touchstart", "touchend", "pointerdown"];
    events.forEach((event) => window.addEventListener(event, handleTouchPlay, { once: true }));

    return () => {
      events.forEach((event) => window.removeEventListener(event, handleTouchPlay));
    };
  }, [isClosed, isPlaying]);

  // مراقبة وقت الفيديو لتوقيفه قبل النهاية بـ 3 ثوانٍ وتفعيل علامة الإعادة
  const handleTimeUpdate = () => {
    if (floatingVideoRef.current) {
      const current = floatingVideoRef.current.currentTime;
      const duration = floatingVideoRef.current.duration;
      
      if (duration) {
        setProgress((current / duration) * 100);
        
        if (current >= duration - 3) {
          floatingVideoRef.current.pause();
          setIsPlaying(false);
          setIsNearEnd(true);
        }
      }
    }
  };

  // التحكم بالضغط على مساحة الفيديو (إعادة من البداية إذا وصل للنهاية، أو تشغيل/إيقاف عادي)
  const togglePlayState = () => {
    if (floatingVideoRef.current) {
      if (isNearEnd) {
        floatingVideoRef.current.currentTime = 0;
        floatingVideoRef.current.muted = isMuted;
        floatingVideoRef.current.play().then(() => {
          setIsPlaying(true);
          setIsNearEnd(false);
        });
      } else if (isPlaying) {
        floatingVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        floatingVideoRef.current.play().then(() => {
          setIsPlaying(true);
        });
      }
    }
  };

  // زر الصوت (للكتم أو فك الكتم يدوياً)
  const toggleMute = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (floatingVideoRef.current) {
      const nextMuteState = !isMuted;
      floatingVideoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      
      if (!nextMuteState) {
        floatingVideoRef.current.play().catch(() => {});
      }
    }
  };

  // زر إغلاق الفيديو بشكل مستقل تماماً
  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (floatingVideoRef.current) {
      floatingVideoRef.current.pause();
    }
    setIsClosed(true);
  };

  const handleDropdownToggle = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const closeDropdown = () => setDropdownOpen(false);
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm h-24" dir={currentLang === "ar" ? "rtl" : "ltr"}>
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between relative px-4 sm:px-6">
          
          <div className="flex items-center gap-3 sm:gap-6 xl:gap-10 flex-1 justify-start h-full relative w-full">
            
            <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Image src="/images/logo/logo.png" alt="شعار أكاديمية تبيان" width={60} height={60} priority className="object-contain sm:w-[75px] sm:h-[75px]" />
              <div className={`text-${currentLang === "ar" ? "right" : "left"} hidden md:block`}>
                <h1 className="text-lg sm:text-xl font-bold text-black leading-tight">{currentLang === "ar" ? "أكاديمية تبيان" : "Tibyan Academy"}</h1>
                <p className="text-[10px] sm:text-xs font-medium text-[#eab308]">Tibyan Quran Academy</p>
              </div>
            </Link>

            <div className="flex items-center gap-4 sm:gap-5 font-semibold text-[14px] sm:text-[15px] text-gray-700 h-full overflow-x-auto no-scrollbar whitespace-nowrap flex-1 lg:flex-none px-2">
              <Link href="/" className={`py-1 transition-colors duration-200 ${pathname === "/" ? "border-b-2 border-[#eab308] text-[#eab308] font-bold" : "hover:text-[#eab308]"}`}>
                {t.home}
              </Link>

              <Link href="/about" className={`py-1 transition-colors duration-200 ${pathname === "/about" ? "border-b-2 border-[#eab308] text-[#eab308] font-bold" : "hover:text-[#eab308]"}`}>
                {t.about}
              </Link>

              {/* قائمة دوراتنا المنسدلة لأسفل */}
              <div 
                className="relative h-full flex items-center cursor-pointer select-none"
                onClick={handleDropdownToggle}
              >
                <div className="flex items-center gap-1 transition-colors duration-200 py-1" style={{ color: dropdownOpen || pathname.startsWith("/courses") ? '#eab308' : '' }}>
                  <span>{t.courses}</span>
                  <ChevronDown size={14} className={`transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {dropdownOpen && (
                  <div 
                    className={`absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl py-3 w-72 sm:w-80 z-[999] text-${currentLang === "ar" ? "right" : "left"}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {courseCategories.map((cat, idx) => (
                      <Link 
                        key={idx} 
                        href={cat.path} 
                        className="block px-4 py-3 text-gray-700 text-[13px] sm:text-[14px] hover:bg-amber-50 hover:text-[#eab308] transition-colors font-medium border-b border-gray-50 last:border-0"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* المصحف الإلكتروني (يوجه مباشرة إلى موقع quran.com/reciters) */}
              <Link 
                href="https://quran.com/reciters" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-1 transition-colors duration-200 hover:text-[#eab308]"
              >
                {currentLang === "ar" ? "المصحف الإلكتروني" : "E-Quran"}
              </Link>

              <Link href="/payment" className={`py-1 transition-colors duration-200 ${pathname === "/payment" ? "border-b-2 border-[#eab308] text-[#eab308] font-bold" : "hover:text-[#eab308]"}`}>
                {currentLang === "ar" ? "الدفع الإلكتروني" : "E-Payment"}
              </Link>

              <button type="button" onClick={() => scrollToSection("app")} className="flex items-center gap-1 bg-transparent border-0 font-semibold cursor-pointer text-gray-700 transition-colors hover:text-[#00754A]">
                <span>{t.app}</span>
                <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[11px] font-extrabold bg-emerald-50 text-[#00754A] border border-emerald-200 px-1.5 py-0.5 rounded-full shadow-sm">
                  <Sparkles size={10} className="text-emerald-600 animate-pulse hidden sm:inline" />
                  <span>{t.soon}</span>
                </span>
              </button>

              <button type="button" onClick={() => scrollToSection("faqs")} className="bg-transparent border-0 font-semibold cursor-pointer text-gray-700 transition-colors hover:text-[#eab308]">
                {t.faqs}
              </button>
            </div>
          </div>

          <Link 
            href="/register" 
            className={`
              absolute top-0 h-[105px] w-20 sm:w-24 
              bg-[#eab308] text-white font-black text-center 
              flex flex-col items-center justify-center tracking-wide
              rounded-b-[2rem] shadow-md hover:bg-[#d4a307] transition-all duration-300 hover:h-[112px] z-50
              ${currentLang === "ar" ? "left-4 sm:left-10" : "right-4 sm:right-10"}
            `}
          >
            <span className="text-base sm:text-lg leading-tight block">
              {currentLang === "ar" ? "سجل" : "Register"}
            </span>
            <span className="text-base sm:text-lg leading-tight block mt-0.5">
              {currentLang === "ar" ? "الآن" : "Now"}
            </span>
          </Link>

        </nav>
      </header>

      {/* مساحة لتفادي تداخل المحتوى مع النافبار المثبتة */}
      <div className="h-24"></div>

      {/* الفيديو العائم */}
      {!isClosed && (
        <div 
          className={`fixed bottom-4 ${currentLang === "ar" ? "left-20 sm:left-24" : "right-20 sm:right-24"} z-[9999] w-80 sm:w-96 bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400 cursor-pointer transition-transform duration-300 hover:scale-[1.01]`} 
          onClick={togglePlayState}
        >
          <div className="relative w-full h-full">
            <video 
              ref={floatingVideoRef}
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-48 sm:h-52 object-cover"
              src="/videos/welcome.mp4"
              playsInline
              muted={isMuted}
              autoPlay
              preload="auto"
            />
            
            {/* شريط التقدم العلوي لوقت الفيديو */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-white/30 z-20">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-150 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* علامة إعادة الفيديو عند الوصول لآخر 3 ثوانٍ */}
            {isNearEnd && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white gap-2 z-25">
                <div className="bg-amber-400/30 p-3.5 rounded-full border-2 border-amber-400 animate-bounce">
                  <RotateCcw size={36} className="text-amber-300" />
                </div>
                <span className="text-sm font-bold tracking-wide text-amber-300 bg-black/60 px-3 py-1 rounded-full border border-amber-400/30">
                  إعادة عرض الفيديو
                </span>
              </div>
            )}

            {/* زر إغلاق الفيديو */}
            <button 
              type="button"
              onClick={handleClose}
              className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white p-2.5 rounded-full transition-colors z-50 shadow-2xl border-2 border-white cursor-pointer"
              title="إغلاق الفيديو"
            >
              <X size={20} />
            </button>
            
            {/* شريط التحكم السفلي */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 flex items-center justify-between text-white z-40">
              <span className="text-xs font-bold text-amber-300 tracking-wider">أكاديمية تبيان</span>
              <div className="flex items-center gap-2">
                {/* زر الصوت */}
                <button 
                  type="button"
                  onClick={toggleMute} 
                  className="p-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-all duration-200 shadow-2xl border-2 border-white flex items-center justify-center cursor-pointer"
                  title={isMuted ? "إلغاء كتم الصوت" : "كتم الصوت"}
                >
                  {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}