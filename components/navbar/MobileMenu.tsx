"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">

      <button
        onClick={() => setOpen(!open)}
        className="text-black"
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {open && (
        <div className="absolute left-0 top-24 w-full border-t bg-white shadow-xl">

          <Link
            href="/"
            className="block border-b px-6 py-4 hover:bg-yellow-50"
            onClick={() => setOpen(false)}
          >
            الرئيسية
          </Link>

          <Link
            href="/courses"
            className="block border-b px-6 py-4 hover:bg-yellow-50"
            onClick={() => setOpen(false)}
          >
            دوراتنا
          </Link>

          <Link
            href="/about"
            className="block border-b px-6 py-4 hover:bg-yellow-50"
            onClick={() => setOpen(false)}
          >
            من نحن
          </Link>

          <Link
            href="/contact"
            className="block border-b px-6 py-4 hover:bg-yellow-50"
            onClick={() => setOpen(false)}
          >
            تواصل معنا
          </Link>

          <Link
            href="/login"
            className="block border-b px-6 py-4 hover:bg-yellow-50"
            onClick={() => setOpen(false)}
          >
            تسجيل الدخول
          </Link>

          <Link
            href="/register"
            className="m-5 flex justify-center rounded-xl bg-gradient-to-r from-yellow-700 to-yellow-500 px-6 py-4 text-center text-lg font-bold text-white"
            onClick={() => setOpen(false)}
          >
            سجل الآن
          </Link>

        </div>
      )}

    </div>
  );
}