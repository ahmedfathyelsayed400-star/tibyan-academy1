"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, ShieldCheck } from "lucide-react";

const heroTranslations = {
  ar: {
    badge: "بسنَد متصل عن النبي ﷺ",
    titleMain: "تَعَلَّمِ القُرآنَ الكَرِيم",
    titleSub: "حَيْثُمَا كُنْتَ",
    description: "أكاديمية متكاملة تهتم بتعليم كتاب الله تلاوةً وتجويداً وحفظاً وفهماً وتدبراً، مع نخبة من المعلمين المتخصصين وأوقات مرنة تناسبك.",
    btnTrial: "سجل الآن ←",
    btnCourses: "تعرف على البرامج",
    statStudents: "طالب وطالبة",
    statTeachers: "معلم ومعلمة",
    feature1: "🎓 معلمين ومعلمات متخصصين",
    feature2: "🕒 أوقات مرنة",
    feature3: "💻 تعلم من أي مكان"
  },
  en: {
    badge: "Online Holy Quran Learning Platform",
    titleMain: "Learn The Holy Quran",
    titleSub: "Wherever You Are",
    description: "An integrated academy dedicated to teaching the Book of Allah: recitation, Tajweed, memorization, and understanding, with elite specialized teachers and flexible hours.",
    btnTrial: "Register Now ←",
    btnCourses: "Explore Programs",
    statStudents: "Students",
    statTeachers: "Teachers",
    feature1: "🎓 Specialized Instructors",
    feature2: "🕒 Flexible Hours",
    feature3: "💻 Learn Anywhere"
  },
  de: {
    badge: "Online-Plattform zum Erlernen des Heiligen Korans",
    titleMain: "Lernen Sie den Heiligen Koran",
    titleSub: "Wo Auch Immer Sie Sind",
    description: "Eine integrierte Akademie, die sich dem Lehren des Buches Allahs widmet: Rezitation, Tajweed, Auswendiglernen und Verstehen, mit hochqualifizierten Fachlehrern und flexiblen Zeiten.",
    btnTrial: "Buchen Sie Ihre kostenlose Probestunde ←",
    btnCourses: "Programme erkunden",
    statStudents: "Schüler & Studentinnen",
    statTeachers: "Lehrer & Fachkräfte",
    feature1: "🎓 Qualifizierte Fachlehrer",
    feature2: "🕒 Flexible Zeiten",
    feature3: "💻 Von überall lernen"
  }
};

export default function HeroSlider() {
  const [lang, setLang] = useState("ar");
  
  // 👈 مصفوفة الصور الثلاثة (Main + Hero1 + Sira)
  const images = [
    "/images/hero/main.jpg",
    "/images/hero/hero1.jpg",
    "/images/hero/sira.jpg"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);

    resetTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetTimer();
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    resetTimer();
  };

  const t = heroTranslations[lang as keyof typeof heroTranslations] || heroTranslations.ar;

  return (
    <section className="relative min-h-screen bg-[#fcfcfc] pt-48 pb-24 overflow-hidden text-black w-full block clear-both" dir="rtl">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 rounded-full bg-[#5b7c2a]/5 blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-192px)]">
        
        {/* الحاوية الأولى: النصوص والأزرار */}
        <div className="flex flex-col gap-5 lg:pr-14 text-right items-start w-full">
          <div className="mb-2 inline-flex items-center gap-2.5 rounded-full bg-white border border-gray-100 px-5 py-2 text-sm font-semibold text-emerald-800 shadow-[0_4px_15px_rgba(0,0,0,0.03)] select-none" dir="rtl">
            <ShieldCheck size={18} className="text-emerald-700" />
            <span className="tracking-wide text-[14px]">{t.badge}</span>
          </div>

          <h1 className="text-4xl md:text-[54px] font-bold leading-[1.25] text-zinc-950 tracking-tight w-full text-right">
            <span className="block text-[#5b7c2a] font-extrabold">{t.titleMain}</span>
            <span className="block mt-2 text-zinc-800 font-extrabold">{t.titleSub}</span>
          </h1>

          <p className="text-gray-500 text-base md:text-[17px] leading-8 max-w-xl mt-3 font-medium text-right">
            {t.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 w-full justify-start">
            <Link
              href="/register"
              className="flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-black font-bold text-base px-10 py-3.5 rounded-full shadow-md transition-all duration-300 hover:scale-102"
            >
              {t.btnTrial}
            </Link>
            <Link
              href="/courses"
              className="flex items-center justify-center bg-white border border-gray-200 text-zinc-800 hover:bg-gray-50 font-bold text-base px-8 py-3.5 rounded-full shadow-sm transition-all duration-300"
            >
              {t.btnCourses}
            </Link>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-gray-500 font-semibold text-sm text-right">
            <div className="flex items-center gap-2"><span>{t.feature1}</span></div>
            <div className="flex items-center gap-2"><span>{t.feature2}</span></div>
            <div className="flex items-center gap-2"><span>{t.feature3}</span></div>
          </div>
        </div>

        {/* الحاوية الثانية: الصور المتحركة (Slider) */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-[600px] w-full group">
          <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#5b7c2a]/10 -z-10 animate-pulse" />
          
          <button 
            onClick={handlePrevImage}
            className="absolute right-2 sm:right-6 z-30 p-2.5 rounded-full bg-white/80 border border-gray-100 shadow-lg text-gray-800 hover:bg-amber-400 hover:text-black hover:scale-110 transition duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <img
            src={images[currentImageIndex]}
            alt="Bayan Quran Academy Slider"
            key={currentImageIndex}
            className="h-[400px] sm:h-[500px] object-contain rounded-b-full drop-shadow-2xl z-10 transition-all duration-700"
            onError={(e) => {
              e.currentTarget.src = "/images/hero/main.jpg";
            }}
          />

          <button 
            onClick={handleNextImage}
            className="absolute left-2 sm:left-6 z-30 p-2.5 rounded-full bg-white/80 border border-gray-100 shadow-lg text-gray-800 hover:bg-amber-400 hover:text-black hover:scale-110 transition duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="absolute top-12 left-4 sm:left-12 bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl p-4 flex items-center gap-3 z-20">
            <div className="bg-yellow-500/10 p-2 rounded-xl text-xl">🎓</div>
            <div className="text-right">
              <h4 className="text-xl font-bold text-[#5b7c2a]">3,000+</h4>
              <p className="text-xs text-gray-500 font-medium">{t.statStudents}</p>
            </div>
          </div>

          <div className="absolute bottom-16 right-4 sm:right-12 bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl p-4 flex items-center gap-3 z-20">
            <div className="bg-[#5b7c2a]/10 p-2 rounded-xl text-xl">📖</div>
            <div className="text-right">
              <h4 className="text-xl font-bold text-[#5b7c2a]">200+</h4>
              <p className="text-xs text-gray-500 font-medium">{t.statTeachers}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}