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

  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  const [isNearEnd, setIsNearEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  const floatingVideoRef = useRef<HTMLVideoElement>(null);

  const t = dict[currentLang] || dict.ar;

  useEffect(() => {
    const targetDate = new Date("2026-12-01T23:59:59").getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

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
    window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 150, behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleTouchPlay = () => {
      if (floatingVideoRef.current && !isClosed && !isPlaying) {
        floatingVideoRef.current.muted = false;
        floatingVideoRef.current.volume = 1.0;

        floatingVideoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
            events.forEach((event) => window.removeEventListener(event, handleTouchPlay));
          })
          .catch(() => {
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
          });
      }
    };

    const events = ["click", "touchstart", "touchend", "pointerdown"];
    events.forEach((event) => window.addEventListener(event, handleTouchPlay, { once: true }));

    return () => {
      events.forEach((event) => window.removeEventListener(event, handleTouchPlay));
    };
  }, [isClosed, isPlaying]);

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
      <div className="fixed top-0 left-0 z-50 w-full">
        <header
          className="w-full bg-white border-b border-gray-100 shadow-sm h-24 relative"
          dir={currentLang === "ar" ? "rtl" : "ltr"}
        >
          <nav className="mx-auto flex h-full max-w-7xl items-center justify-between relative px-4 sm:px-6">
            <div className="flex items-center gap-3 sm:gap-6 xl:gap-10 flex-1 justify-start h-full relative w-full">
              <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
                <Image
                  src="/images/logo/logo.png"
                  alt="شعار أكاديمية تبيان"
                  width={60}
                  height={60}
                  priority
                  className="object-contain sm:w-[75px] sm:h-[75px]"
                />
                <div className={`text-${currentLang === "ar" ? "right" : "left"} hidden md:block`}>
                  <h1 className="text-lg sm:text-xl font-bold text-black leading-tight">
                    {currentLang === "ar" ? "أكاديمية تبيان" : "Tibyan Academy"}
                  </h1>
                  <p className="text-[10px] sm:text-xs font-medium text-[#eab308]">Tibyan Quran Academy</p>
                </div>
              </Link>

              <div className="flex items-center gap-4 sm:gap-5 font-semibold text-[14px] sm:text-[15px] text-gray-700 h-full overflow-x-auto no-scrollbar whitespace-nowrap flex-1 lg:flex-none px-2">
                <Link
                  href="/"
                  className={`py-1 transition-colors duration-200 ${
                    pathname === "/" ? "border-b-2 border-[#eab308] text-[#eab308] font-bold" : "hover:text-[#eab308]"
                  }`}
                >
                  {t.home}
                </Link>

                <Link
                  href="/about"
                  className={`py-1 transition-colors duration-200 ${
                    pathname === "/about"
                      ? "border-b-2 border-[#eab308] text-[#eab308] font-bold"
                      : "hover:text-[#eab308]"
                  }`}
                >
                  {t.about}
                </Link>

                <div
                  className="relative h-full flex items-center cursor-pointer select-none"
                  onClick={handleDropdownToggle}
                >
                  <div
                    className="flex items-center gap-1 transition-colors duration-200 py-1"
                    style={{ color: dropdownOpen || pathname.startsWith("/courses") ? "#eab308" : "" }}
                  >
                    <span>{t.courses}</span>
                    <ChevronDown
                      size={14}
                      className={`transform transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </div>

                  {dropdownOpen && (
                    <div
                      className={`absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl py-3 w-72 sm:w-80 z-50 text-${
                        currentLang === "ar" ? "right" : "left"
                      }`}
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

