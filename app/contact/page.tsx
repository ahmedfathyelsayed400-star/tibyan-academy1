"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";

export default function ContactPage() {
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("bayan_lang") || "ar";
    setLang(savedLang);
  }, []);

  const contactInfo = {
    whatsapp: "https://wa.me",
    email: "mailto:info@bayanacademy.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com"
  };

  const t = {
    ar: {
      title: "تواصل معنا",
      subtitle: "يسعدنا تواصلك معنا مباشرة عبر أي من الوسائل التالية، فريق الدعم جاهز لخدمتك على مدار الساعة.",
      whatsappBtn: "محادثة واتساب فورية",
      emailBtn: "أرسل بريداً إلكترونياً",
      socialTitle: "تابعنا على منصات التواصل الاجتماعي"
    },
    en: {
      title: "Contact Us",
      subtitle: "We are pleased to connect with you directly through any of the following methods. Our support team is available 24/7.",
      whatsappBtn: "Instant WhatsApp Chat",
      emailBtn: "Send an Email",
      socialTitle: "Follow Us on Social Media"
    },
    de: {
      title: "Kontakt",
      subtitle: "Wir freuen uns, uns direkt über eine der folgenden Methoden mit Ihnen zu verbinden. Unser Support-Team steht Ihnen rund um die Uhr zur Verfügung.",
      whatsappBtn: "Sofortiger WhatsApp-Chat",
      emailBtn: "E-Mail senden",
      socialTitle: "Folgen Sie uns auf Social Media"
    }
  }[lang] || { title: "تواصل معنا", subtitle: "", whatsappBtn: "محادثة واتساب فورية", emailBtn: "أرسل بريداً إلكترونياً", socialTitle: "" };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-40 pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          
          <h1 className="text-5xl font-extrabold text-yellow-500 mb-6">
            {t.title}
          </h1>
          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-16">
            {t.subtitle}
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-16">
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xl py-5 px-8 rounded-2xl shadow-xl transition duration-300 hover:scale-105"
            >
              💬 {t.whatsappBtn}
            </a>

            <a
              href={contactInfo.email}
              className="flex items-center justify-center gap-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold text-xl py-5 px-8 rounded-2xl shadow-xl transition duration-300 hover:scale-105"
            >
              ✉️ {t.emailBtn}
            </a>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <h2 className="text-2xl font-bold text-gray-300 mb-8">{t.socialTitle}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a href={contactInfo.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition duration-300 transform hover:-translate-y-1">
                Facebook
              </a>
              <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white font-bold px-6 py-3 rounded-xl transition duration-300 transform hover:-translate-y-1">
                Instagram
              </a>
              <a href={contactInfo.tiktok} target="_blank" rel="noopener noreferrer" className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-6 py-3 rounded-xl transition duration-300 transform hover:-translate-y-1">
                TikTok
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
