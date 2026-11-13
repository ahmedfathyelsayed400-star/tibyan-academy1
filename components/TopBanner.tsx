"use client";
import React, { useState, useEffect } from "react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // حدد هنا تاريخ ووقت انتهاء العد التنازلي (السنة-الشهر-اليومTالساعة:الدقيقة:الثانية)
  const targetDate = new Date("2026-12-01T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isVisible) return null;

  return (
    <div
      dir="rtl"
      className="w-full bg-[#333333] text-white py-2 px-4 sm:px-8 border-b border-neutral-700 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* الجزء الأيمن: الشارة الصفراء والنص */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-[#facc15] text-black font-extrabold text-xs sm:text-sm px-3.5 py-1 rounded-md shadow-sm">
            عرض خاص
          </span>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-100 flex items-center gap-2">
            <span>دورة مسار ولد صالح</span>
            <span className="border border-dashed border-gray-400 bg-neutral-800 text-[#facc15] px-2 py-0.5 rounded text-xs sm:text-sm font-bold">
              &lt;مجاناً&gt;
            </span>
          </p>
        </div>

        {/* الجزء الأيسر: مربعات العداد التنازلي + زر الإغلاق */}
        <div className="flex items-center gap-4 mr-auto sm:mr-0">
          {/* مربعات الوقت */}
          <div className="flex items-center gap-1.5" dir="ltr">
            <div className="bg-[#4a4a4a] rounded-md w-11 h-11 flex flex-col items-center justify-center shadow-inner">
              <span className="text-sm font-bold leading-none text-white">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-gray-300 mt-1">يوم</span>
            </div>
            <span className="text-gray-400 font-bold">:</span>

            <div className="bg-[#4a4a4a] rounded-md w-11 h-11 flex flex-col items-center justify-center shadow-inner">
              <span className="text-sm font-bold leading-none text-white">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-gray-300 mt-1">ساعة</span>
            </div>
            <span className="text-gray-400 font-bold">:</span>

            <div className="bg-[#4a4a4a] rounded-md w-11 h-11 flex flex-col items-center justify-center shadow-inner">
              <span className="text-sm font-bold leading-none text-white">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-gray-300 mt-1">دقيقة</span>
            </div>
            <span className="text-gray-400 font-bold">:</span>

            <div className="bg-[#4a4a4a] rounded-md w-11 h-11 flex flex-col items-center justify-center shadow-inner">
              <span className="text-sm font-bold leading-none text-white">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-gray-300 mt-1">ثانية</span>
            </div>
          </div>

          {/* زر الإغلاق الدائري (X) */}
          <button
            onClick={() => setIsVisible(false)}
            aria-label="إغلاق الشريط"
            className="w-7 h-7 rounded-full bg-[#4a4a4a] hover:bg-neutral-600 text-gray-300 hover:text-white flex items-center justify-center text-xs transition-colors"
          >
            ✕
          </button>
        </div>

      </div>
    </div>
  );
}
