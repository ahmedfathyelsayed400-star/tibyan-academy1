"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function CoursesMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-lg font-semibold text-black hover:text-yellow-600 transition">
        دوراتنا
        <ChevronDown size={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-80 rounded-2xl bg-white shadow-2xl border overflow-hidden">

          <Link
            href="/courses/quran"
            className="block px-6 py-4 hover:bg-yellow-50 transition"
          >
            <h3 className="font-bold text-black">
              📖 دورات القرآن الكريم
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              الحفظ والتلاوة والمراجعة والإجازة
            </p>
          </Link>

          <Link
            href="/courses/tajweed"
            className="block px-6 py-4 hover:bg-yellow-50 transition"
          >
            <h3 className="font-bold text-black">
              🎙️ دورات التجويد
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              أحكام التجويد ومخارج الحروف
            </p>
          </Link>

          <Link
            href="/courses/qiraat"
            className="block px-6 py-4 hover:bg-yellow-50 transition"
          >
            <h3 className="font-bold text-black">
              📚 دورات القراءات
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              الشاطبية والدرة والطيبة
            </p>
          </Link>

          <Link
            href="/courses/arabic"
            className="block px-6 py-4 hover:bg-yellow-50 transition"
          >
            <h3 className="font-bold text-black">
              🇸🇦 اللغة العربية
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              النحو والصرف والبلاغة
            </p>
          </Link>

          <Link
            href="/courses/islamic"
            className="block px-6 py-4 hover:bg-yellow-50 transition"
          >
            <h3 className="font-bold text-black">
              🕌 الدورات الإسلامية
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              الفقه والعقيدة والتفسير والحديث
            </p>
          </Link>

          <Link
            href="/courses/teachers"
            className="block px-6 py-4 hover:bg-yellow-50 transition"
          >
            <h3 className="font-bold text-black">
              🎓 إعداد وتأهيل المعلمين
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              برامج إعداد معلمي القرآن الكريم
            </p>
          </Link>

        </div>
      )}
    </div>
  );
}