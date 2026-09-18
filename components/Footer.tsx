"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  FileText,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* =========================
          FOOTER
      ========================== */}
      <footer
        dir="rtl"
        className="w-full border-t border-[#1b493d] bg-gradient-to-b from-[#09251e] via-[#071c17] to-[#04110d] text-gray-300"
      >
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">

          {/* =========================
              MAIN FOOTER
          ========================== */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* =========================
                ACADEMY
            ========================== */}
            <div className="flex flex-col items-start">

              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-lg">
                  <Image
                    src="/images/logo/logo.png"
                    alt="شعار أكاديمية تبيان"
                    width={58}
                    height={58}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold leading-tight text-white">
                    أكاديمية تبيان
                  </h3>

                  <p
                    dir="ltr"
                    className="mt-1 text-[11px] tracking-wide text-emerald-400"
                  >
                    Tibyan Quran Academy
                  </p>
                </div>
              </div>

              <p className="max-w-sm text-[14px] leading-8 text-gray-400">
                أكاديمية تعليمية متخصصة في تعليم القرآن الكريم والتجويد
                واللغة العربية والدراسات الإسلامية، من خلال التعليم أونلاين
                على يد معلمين ومعلمات متخصصين.
              </p>

              {/* =========================
                  SOCIAL ICONS
              ========================== */}
              <div className="mt-6 flex items-center gap-3">

                {/* Email */}
                <a
                  href="mailto:info@bayan-academy.com"
                  aria-label="البريد الإلكتروني"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/10 text-gray-300 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
                >
                  <Mail size={18} />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/10 text-gray-300 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/10 text-gray-300 transition-all duration-300 hover:bg-emerald-600 hover:text-white"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1z" />
                  </svg>
                </a>

              </div>
            </div>


            {/* =========================
                QUICK LINKS
            ========================== */}
            <div>
              <h4 className="mb-7 text-lg font-bold text-white">
                روابط سريعة
              </h4>

              <ul className="space-y-4 text-[14px]">

                <li>
                  <Link
                    href="/programs"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    البرامج التعليمية
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    لماذا نحن
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pricing"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    الأسعار
                  </Link>
                </li>

                <li>
                  <Link
                    href="/faqs"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    الأسئلة الشائعة
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    تواصل معنا
                  </Link>
                </li>

                <li>
                  <Link
                    href="/payment"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    الدفع الإلكتروني
                  </Link>
                </li>

              </ul>
            </div>


            {/* =========================
                PROGRAMS
            ========================== */}
            <div>
              <h4 className="mb-7 text-lg font-bold text-white">
                أبرز البرامج
              </h4>

              <ul className="space-y-4 text-[14px]">

                <li>
                  <Link
                    href="/programs"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    تعليم القرآن الكريم والتجويد
                  </Link>
                </li>

                <li>
                  <Link
                    href="/programs"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    تصحيح التلاوة
                  </Link>
                </li>

                <li>
                  <Link
                    href="/programs"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    برنامج المراجعة
                  </Link>
                </li>

                <li>
                  <Link
                    href="/programs"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    الإجازة في القرآن الكريم
                  </Link>
                </li>

                <li>
                  <Link
                    href="/programs"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    اللغة العربية لغير الناطقين بها
                  </Link>
                </li>

                <li>
                  <Link
                    href="/programs"
                    className="transition-colors duration-300 hover:text-emerald-400"
                  >
                    تأهيل معلمي القرآن الكريم
                  </Link>
                </li>

              </ul>
            </div>


            {/* =========================
                CONTACT
            ========================== */}
            <div>
              <h4 className="mb-7 text-lg font-bold text-white">
                تواصل معنا
              </h4>

              <div className="space-y-5">

                {/* Phone */}
                <a
                  href="tel:+201064481055"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <Phone size={17} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-gray-500">
                      الهاتف / واتساب
                    </p>

                    <p
                      dir="ltr"
                      className="text-sm text-gray-300 transition-colors group-hover:text-emerald-400"
                    >
                      +20 106 448 1055
                    </p>
                  </div>
                </a>


                {/* Email */}
                <a
                  href="mailto:info@bayan-academy.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-400 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                    <Mail size={17} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-gray-500">
                      البريد الإلكتروني
                    </p>

                    <p className="break-all text-sm text-gray-300 transition-colors group-hover:text-emerald-400">
                      info@bayan-academy.com
                    </p>
                  </div>
                </a>


                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-400">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-gray-500">
                      نطاق الخدمة
                    </p>

                    <p className="text-sm text-gray-300">
                      تعليم أونلاين للطلاب حول العالم
                    </p>
                  </div>
                </div>

              </div>


              {/* Trial Button */}
              <Link
                href="/trial"
                className="mt-7 flex h-12 w-full items-center justify-center rounded-full bg-[#20ad62] text-sm font-bold text-white shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:scale-[1.02] hover:bg-[#179653]"
              >
                <MessageCircle size={19} className="ml-2" />
                احجز حصتك التجريبية المجانية
              </Link>

            </div>

          </div>


          {/* =========================
              PAYMENT METHODS
          ========================== */}
          <div className="mt-14 border-t border-white/10 pt-8">

            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

              <div>
                <h4 className="text-center text-base font-bold text-white lg:text-right">
                  طرق الدفع
                </h4>

                <p className="mt-2 text-center text-xs text-gray-500 lg:text-right">
                  نوفر لك طرق دفع إلكترونية متعددة وآمنة
                </p>
              </div>


              <div className="flex flex-wrap justify-center gap-3">

                <div className="min-w-[110px] rounded-xl bg-white px-5 py-3 text-center shadow-sm">
                  <span className="text-sm font-bold text-gray-600">
                    Visa
                  </span>
                </div>

                <div className="min-w-[110px] rounded-xl bg-white px-5 py-3 text-center shadow-sm">
                  <span className="text-sm font-bold text-gray-600">
                    Mastercard
                  </span>
                </div>

                <div className="min-w-[110px] rounded-xl bg-white px-5 py-3 text-center shadow-sm">
                  <span className="text-sm font-bold text-gray-600">
                    PayPal
                  </span>
                </div>

                <div className="min-w-[110px] rounded-xl bg-white px-5 py-3 text-center shadow-sm">
                  <span className="text-sm font-bold text-gray-600">
                    STC Pay
                  </span>
                </div>

                <div className="min-w-[110px] rounded-xl bg-white px-5 py-3 text-center shadow-sm">
                  <span className="text-sm font-bold text-gray-600">
                    QIB
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
              BOTTOM BAR
          ========================== */}
          <div className="mt-10 border-t border-white/10 pt-6">

            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

              <p className="text-center text-xs text-gray-500">
                © {currentYear}{" "}
                <span className="font-medium text-emerald-400">
                  أكاديمية تبيان
                </span>{" "}
                — جميع الحقوق محفوظة.
              </p>


              <div className="flex items-center gap-6 text-xs">

                <Link
                  href="/privacy"
                  className="flex items-center gap-2 text-gray-500 transition-colors hover:text-white"
                >
                  <Shield size={13} />
                  سياسة الخصوصية
                </Link>

                <Link
                  href="/terms"
                  className="flex items-center gap-2 text-gray-500 transition-colors hover:text-white"
                >
                  <FileText size={13} />
                  الشروط والأحكام
                </Link>

              </div>

            </div>

          </div>

        </div>
      </footer>


      {/* =========================
          FLOATING WHATSAPP
      ========================== */}
      <a
        href="https://wa.me/201064481055"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تحدث معنا عبر واتساب"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/20 bg-[#20ad62] px-6 py-3.5 text-white shadow-2xl shadow-emerald-950/40 transition-all duration-300 hover:scale-105 hover:bg-[#179653]"
      >
        <MessageCircle size={22} />

        <span className="text-sm font-bold">
          تحدث معنا الآن
        </span>
      </a>
    </>
  );
}