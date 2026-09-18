"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Globe,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">

      <nav className="mx-auto flex h-32 max-w-7xl items-center justify-between px-6 relative">

        {/* 1. الشعار (أقصى اليمين) */}
        <Link href="/" className="flex items-center gap-5 shrink-0 z-10">
          <Image
            src="/images/logo/logo.png"
            alt="شعار أكاديمية بيان"
            width={140}
            height={140}
            priority
            className="object-contain"
          />
          <div className="text-right hidden sm:block">
            <h1 className="text-3xl font-extrabold text-black">أكاديمية بيان</h1>
            <p className="text-base font-medium text-yellow-600">Bayan Quran Academy</p>
          </div>
        </Link>

        {/* 2. الأقسام والقوائم (موزعة على كامل طول الشريط المتبقي - تختفي في الموبايل) */}
        <div className="hidden lg:flex flex-1 items-center justify-evenly font-semibold text-lg text-black px-12">
          <Link href="/contact" className="transition hover:text-yellow-600 whitespace-nowrap">تواصل معنا</Link>
          <Link href="/about" className="transition hover:text-yellow-600 whitespace-nowrap">من نحن</Link>
          <Link href="/faqs" className="transition hover:text-yellow-600 whitespace-nowrap">الأسئلة الشائعة</Link>
          <Link href="/app" className="transition hover:text-yellow-600 whitespace-nowrap">التطبيق</Link>
          <Link href="/trial" className="transition hover:text-yellow-600 whitespace-nowrap">الحصة التجريبية</Link>

          {/* قائمة اللغة */}
          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-yellow-600 whitespace-nowrap">
              <Globe size={18} />
              العربية <span className="text-xs text-gray-400">AR</span>
              <ChevronDown size={18} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-3 w-40 rounded-xl border bg-white py-2 shadow-2xl z-50">
                <button className="block w-full px-4 py-2 text-right hover:bg-yellow-50">العربية</button>
                <button className="block w-full px-4 py-2 text-right hover:bg-yellow-50">English</button>
              </div>
            )}
          </div>

          {/* حسابي */}
          <div
            className="relative"
            onMouseEnter={() => setAccountOpen(true)}
            onMouseLeave={() => setAccountOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-yellow-600 whitespace-nowrap">
              <User size={18} />
              حسابي
              <ChevronDown size={18} />
            </button>
            {accountOpen && (
              <div className="absolute right-0 top-full mt-3 w-48 rounded-xl border bg-white py-2 shadow-2xl z-50">
                <Link href="/login" className="block px-4 py-2 text-right hover:bg-yellow-50 hover:text-yellow-600">تسجيل الدخول</Link>
                <Link href="/register" className="block px-4 py-2 text-right hover:bg-yellow-50 hover:text-yellow-600">إنشاء حساب</Link>
              </div>
            )}
          </div>
        </div>

        {/* 3. عناصر التحكم وزر القائمة للموبايل (أقصى اليسار) */}
        <div className="flex items-center justify-end z-10 min-w-[140px]">
          
          {/* زر سجل الآن (أقصى اليسار تماماً ومثبت بشكل بطاقة منسدلة) */}
          <Link
            href="/register"
            className="
              hidden
              lg:flex
              h-[120px]
              w-[140px]
              items-center
              justify-center
              rounded-b-[30px]
              bg-yellow-500
              text-2xl
              font-extrabold
              text-black
              shadow-md
              transition-all
              duration-300
              hover:bg-yellow-600
              hover:text-white
              absolute
              top-0
              left-6
            "
          >
            <span className="pt-4 block text-center leading-tight">سجل<br/>الآن</span>
          </Link>

          {/* زر قائمة الموبايل (يظهر فقط على شاشات الهاتف ويحل محل الأقسام) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
          
        </div>

      </nav>

      {/* قائمة الموبايل (المتجاوبة تماماً عند تصفح الموقع من الهاتف) */}
      {mobileOpen && (
        <div className="border-t bg-white lg:hidden shadow-inner max-h-[80vh] overflow-y-auto">
          <Link href="/" className="block px-6 py-4 border-b font-medium text-black hover:bg-gray-50">الرئيسية</Link>
          <Link href="/trial" className="block px-6 py-4 border-b font-medium text-black hover:bg-gray-50">الحصة التجريبية</Link>
          <Link href="/app" className="block px-6 py-4 border-b font-medium text-black hover:bg-gray-50">التطبيق</Link>
          <Link href="/faqs" className="block px-6 py-4 border-b font-medium text-black hover:bg-gray-50">الأسئلة الشائعة</Link>
          <Link href="/about" className="block px-6 py-4 border-b font-medium text-black hover:bg-gray-50">من نحن</Link>
          <Link href="/contact" className="block px-6 py-4 border-b font-medium text-black hover:bg-gray-50">تواصل معنا</Link>
          <Link href="/login" className="block px-6 py-4 border-b font-medium text-black hover:bg-gray-50">تسجيل الدخول</Link>
          <Link href="/register" className="block px-6 py-5 font-bold text-center text-white bg-yellow-500 hover:bg-yellow-600 transition">سجل الآن</Link>
        </div>
      )}

    </header>
  );
}
