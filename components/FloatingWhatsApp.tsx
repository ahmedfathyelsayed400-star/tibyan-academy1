"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const whatsappNumber = "201064481055";
  const whatsappUrl = `https://wa.me{whatsappNumber}`;

  return (
    // تم تصفير الكود بالكامل لضمان محو حرف الـ N المزعج نهائياً من الجذور وعودة الدائرة الصافية
    <div className="fixed bottom-6 left-6 z-50 flex items-center justify-center select-none p-0 m-0">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex 
          h-14 
          w-14 
          items-center 
          justify-center 
          rounded-full 
          bg-[#25D366] 
          hover:bg-[#20ba5a] 
          text-white 
          shadow-[0_10px_25px_rgba(37,211,102,0.3)] 
          transition-all 
          duration-300 
          hover:scale-110 
          active:scale-95
        "
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </div>
  );
}
