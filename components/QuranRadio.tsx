"use client";

import { useState, useRef } from "react";
import { Play, Pause, Radio } from "lucide-react";

export default function QuranRadio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const radioStreamUrl = "https://stream.radiojar.com/8s5u5tpdtwzuv";

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div className="inline-flex items-center gap-3 bg-emerald-900/95 text-white px-4 py-2.5 rounded-2xl shadow-lg border border-emerald-700/60" dir="rtl">
      <audio 
        ref={audioRef} 
        src={radioStreamUrl} 
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />

      {/* زر التشغيل والإيقاف */}
      <button
        onClick={togglePlay}
        className={`p-2.5 rounded-xl transition-all duration-300 flex-shrink-0 ${
          isPlaying 
            ? "bg-red-500 hover:bg-red-600 text-white shadow-md shadow-red-900/30" 
            : "bg-amber-400 hover:bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20"
        }`}
        title={isPlaying ? "إيقاف البث" : "استمع الآن"}
      >
        {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
      </button>

      {/* النصوص والعنوان */}
      <div className="text-right flex flex-col justify-center">
        <span className="text-[10px] text-amber-400 font-bold tracking-wide">بث حي ومباشر</span>
        <span className="text-xs font-extrabold text-white">إذاعة القرآن الكريم</span>
      </div>

      {/* أيقونة الإذاعة مع نبضة البث على اليسار */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-800/80 border border-emerald-700 text-amber-400 mr-2 flex-shrink-0">
        <Radio size={16} className={isPlaying ? "animate-pulse text-amber-300" : ""} />
        {isPlaying && (
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        )}
      </div>
    </div>
  );
}