"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function QuranLink() {
  return (
    <Link 
      href="https://quran.com" 
      target="_blank"
      className="flex items-center gap-2 text-zinc-800 hover:text-[#5b7c2a] font-semibold text-sm transition-colors duration-200"
    >
      <BookOpen size={18} className="text-[#5b7c2a]" />
      <span>المصحف الشريف</span>
    </Link>
  );
}