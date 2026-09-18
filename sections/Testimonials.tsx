"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const testimonialTranslations = {
  ar: {
    tag: "آراء طلابنا",
    title: "قصص نجاح تتحدث عنا",
    subtitle: "أكثر من ٣,٥٠٠ طالب وطالبة من مختلف أنحاء العالم وثقوا بنا في رحلتهم مع كتاب الله.",
    more: "اقرأ المزيد",
    reviews: [
      { name: "أم عبد الله", role: "ولي أمر - السعودية", letter: "أ", text: "حفظ ابني ثلاثة أجزاء في أربعة أشهر فقط، والمعلم متابع ومتمكن وصبور. تجربة فاقت كل توقعاتي.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false },
      { name: "Yusuf R.", role: "طالب - كندا", letter: "Y", text: "Alhamdulillah, I received my ijazah with a connected chain thanks to my teacher's precise, patient follow-up.", rating: "⭐⭐⭐⭐⭐", isAr: false, featured: true },
      { name: "نورة الفهد", role: "ولي أمر - قطر", letter: "ن", text: "ابنتي تنتظر الحصة بشغف كل يوم. الأسلوب محبب وآمن للأطفال والمعلمة رائعة في التعامل معها.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false },
      { name: "أحمد محمد", role: "طالب - الإمارات", letter: "أ", text: "المرونة في المواعيد ممتازة جداً تناسب ضغط العمل، والمناهج هنا منظمة تساعد على التطور السريع.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false },
      { name: "Sarah Jones", role: "طالبة - بريطانيا", letter: "S", text: "The academy provides a wonderful learning environment. The Quran teachers are highly qualified and professional.", rating: "⭐⭐⭐⭐⭐", isAr: false, featured: true },
      { name: "خالد العتيبي", role: "طالب - الكويت", letter: "خ", text: "بدأت من الصفر في تصحيح التلاوة والتجويد، والآن أشعر بفرق هائل بفضل توجيه الشيوخ المستمر.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false }
    ]
  },
  en: {
    tag: "Our Students' Views",
    title: "Success Stories Speaking For Us",
    subtitle: "More than 3,500 students worldwide trusted us in their journey with the Book of Allah.",
    more: "Read more",
    reviews: [
      { name: "Um Abdullah", role: "Parent - Saudi Arabia", letter: "U", text: "My son memorized three parts in just four months. The teacher is tracking, capable, and patient. An experience that exceeded my expectations.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false },
      { name: "Yusuf R.", role: "Student - Canada", letter: "Y", text: "Alhamdulillah, I received my ijazah with a connected chain thanks to my teacher's precise, patient follow-up.", rating: "⭐⭐⭐⭐⭐", isAr: false, featured: true },
      { name: "Noura Al-Fahad", role: "Parent - Qatar", letter: "N", text: "My daughter looks forward to the class eagerly every day. The method is lovable and safe for children, and the teacher is wonderful.", rating: "⭐⭐⭐⭐⭐", isAr: false, featured: true },
      { name: "Ahmed Mohamed", role: "Student - UAE", letter: "A", text: "The flexibility in timing is amazing for my work schedule. The curriculum is structured and highly effective.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false },
      { name: "Sarah Jones", role: "Student - UK", letter: "S", text: "The academy provides a wonderful learning environment. The Quran teachers are highly qualified and professional.", rating: "⭐⭐⭐⭐⭐", isAr: false, featured: true },
      { name: "Khaled Al-Otaibi", role: "Student - Kuwait", letter: "K", text: "I started from scratch with Tajweed. Now I feel a huge difference in my recitation thanks to the great shيوخ.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false }
    ]
  },
  de: {
    tag: "Erfahrungsberichte",
    title: "Erfolgsgeschichten, die für uns sprechen",
    subtitle: "Mehr als 3.500 Schüler weltweit haben uns auf ihrer Reise mit dem Buch Allahs vertraut.",
    more: "Mehr lesen",
    reviews: [
      { name: "Um Abdullah", role: "Elternteil - Saudi-Arabien", letter: "U", text: "Mein Sohn hat in nur vier Monaten drei Teile auswendig gelernt. Der Lehrer ist engagiert, kompetent und geduldig.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false },
      { name: "Yusuf R.", role: "Schüler - Kanada", letter: "Y", text: "Alhamdulillah, ich habe meine Ijazah dank der präzisen und geduldigen Betreuung meines Lehrers erhalten.", rating: "⭐⭐⭐⭐⭐", isAr: false, featured: true },
      { name: "Noura Al-Fahad", role: "Elternteil - Katar", letter: "N", text: "Meine Tochter freut sich jeden Tag auf den Unterricht. Die Methode ist kinderfreundlich und sicher.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false },
      { name: "Ahmed Mohamed", role: "Schüler - VAE", letter: "A", text: "Die zeitliche Flexibilität ist ideal für meinen Job. Der Lehrplan ist sehr strukturiert.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false },
      { name: "Sarah Jones", role: "Schülerin - GB", letter: "S", text: "Die Akademie bietet eine wunderbare Lernumgebung. Die Koranlehrer sind sehr qualifiziert.", rating: "⭐⭐⭐⭐⭐", isAr: false, featured: true },
      { name: "Khaled Al-Otaibi", role: "Schüler - Kuwait", letter: "K", text: "Ich habe von Null angefangen und sehe riesige Fortschritte bei meiner Rezitation dank der Lehrer.", rating: "⭐⭐⭐⭐⭐", isAr: true, featured: false }
    ]
  }
};

export default function Testimonials() {
  const [lang, setLang] = useState("ar");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);
  }, []);

  const t = testimonialTranslations[lang as keyof typeof testimonialTranslations] || testimonialTranslations.ar;
  const totalGroups = Math.ceil(t.reviews.length / 3);
  const displayedReviews = t.reviews.slice(activeIndex * 3, activeIndex * 3 + 3);

  return (
    <section style={{ marginTop: "120px", marginBottom: "100px" }} className="bg-white py-12 w-full text-black block clear-both relative z-30 select-none overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 text-center">
        
        <span className="text-base font-bold text-[#71A851] tracking-widest block mb-4">{t.tag}</span>
        <h2 className="text-4xl md:text-[44px] font-extrabold text-[#192419] tracking-tight leading-tight mb-5">{t.title}</h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-16 font-medium">{t.subtitle}</p>

        <div className="relative flex items-center justify-center w-full px-2">
          
          {/* زر السهم الأيسر */}
          <button 
            type="button"
            onClick={() => setActiveIndex((prev) => (prev === 0 ? totalGroups - 1 : prev - 1))}
            className="absolute left-0 z-40 h-11 w-11 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-md hover:bg-gray-50 active:scale-95 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* حاوية الكروت الثلاثية */}
          <div className="flex flex-col md:flex-row gap-8 justify-center w-full lg:px-14 items-center min-h-[340px]">
            {displayedReviews.map((review, i) => {
              let rotationClass = "rotate-0";
              if (!review.featured && i === 0) rotationClass = "rotate-[4deg] md:translate-y-2";
              if (!review.featured && i === 2) rotationClass = "-rotate-[4deg] md:translate-y-2";

              return (
                <div 
                  key={i} 
                  dir={review.isAr ? "rtl" : "ltr"} 
                  className={`bg-white rounded-[24px] border flex flex-col justify-between w-full max-w-[310px] relative transition-all duration-500 ease-out origin-center ${rotationClass} ${
                    review.featured 
                      ? "border-[#C9A227] shadow-xl h-[310px] p-6 scale-105 z-10" 
                      : "border-gray-200 shadow-sm h-[270px] p-5 opacity-85 hover:opacity-100 hover:rotate-0 hover:scale-102"
                  }`}
                >
                  <div className="flex-1 overflow-hidden flex flex-col justify-between">
                    <p className="text-zinc-950 text-[14px] sm:text-[15px] leading-[1.7] font-bold font-sans tracking-wide">
                      {review.text}
                    </p>
                    {review.featured && <span className="text-xs font-extrabold text-[#C9A227] block mt-2 hover:underline text-right cursor-pointer">{t.more}</span>}
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#192419] text-white font-bold">
                      {review.letter}
                    </div>
                    <div className="text-right">
                      <h4 className="font-extrabold text-[#192419] text-[14px] truncate">{review.name}</h4>
                      <p className="text-[11px] text-gray-500 font-bold mt-0.5 truncate">{review.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* زر السهم الأيمن */}
          <button 
            type="button"
            onClick={() => setActiveIndex((prev) => (prev === totalGroups - 1 ? 0 : prev + 1))}
            className="absolute right-0 z-40 h-11 w-11 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-md hover:bg-gray-50 active:scale-95 transition"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* نقاط التنقل السفلى (Pagination Dots) */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-[#C9A227]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
