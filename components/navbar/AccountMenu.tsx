"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* الزر الرئيسي لحسابي */}
      <button className="flex items-center gap-2 text-lg font-semibold text-black transition hover:text-yellow-600 focus:outline-none">
        👤 حسابي
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* القائمة المنسدلة لخيارات الحساب */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-2xl border border-gray-100 py-2 z-50 text-right">
          
          {/* خيار تسجيل الدخول */}
          <Link
            href="/login"
            className="flex items-center gap-3 px-4 py-3 text-base text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
          >
            🔑 تسجيل الدخول
          </Link>

          {/* خط فاصل خفيف */}
          <div className="border-t border-gray-100 my-1"></div>

          {/* خيار إنشاء حساب */}
          <Link
            href="/register"
            className="flex items-center gap-3 px-4 py-3 text-base text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
          >
            📝 إنشاء حساب جديد
          </Link>

        </div>
      )}
    </div>
  );
}
