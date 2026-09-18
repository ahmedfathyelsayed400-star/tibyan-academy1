"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Star, 
  Users, 
  GraduationCap, 
} from "lucide-react";

export default function ArabicCoursesPage() {
  const [activeTab, setActiveTab] = useState("الكل");

  // الفئات المتاحة لتصفية دورات اللغة العربية
  const categories = [
    "الكل",
    "مستويات الأطفال",
    "المستوى المتوسط",
    "المستوى المتقدم",
  ];

  // قائمة دورات اللغة العربية بالمستويات المطلوبة
  const allCourses = [
    {
      id: 1,
      category: "مستويات الأطفال",
      title: "دورة أساسيات القراءة والكتابة للأطفال (النورانية)",
      subtitle: "تأسيس الأطفال بالطريقة النورانية الصحيحة",
      instructor: "أكاديمية تبيان",
      level: "مستويات الأطفال",
      rating: 4.9,
      reviewsCount: 1420,
      studentsCount: 8500,
      image: "/images/programs/arabic/kids-basics.jpg",
    },
    {
      id: 2,
      category: "مستويات الأطفال",
      title: "دورة تهجئة القران واللغة العربية للصغار",
      subtitle: "تدريب الأطفال على النطق السليم والتهجي",
      instructor: "أكاديمية تبيان",
      level: "مستويات الأطفال",
      rating: 4.8,
      reviewsCount: 950,
      studentsCount: 6200,
      image: "/images/programs/arabic/kids-reading.jpg",
    },
    {
      id: 3,
      category: "المستوى المتوسط",
      title: "دورة شرح الآجرومية في النحو",
      subtitle: "مدخل لدراسة قواعد النحو العربي بأسلوب ميسر",
      instructor: "أكاديمية تبيان",
      level: "المستوى المتوسط",
      rating: 4.9,
      reviewsCount: 1830,
      studentsCount: 9400,
      image: "/images/programs/arabic/ajrumiyyah.jpg",
    },
    {
      id: 4,
      category: "المستوى المتوسط",
      title: "دورة الصرف الميسر للمبتدئين",
      subtitle: "معرفة أبنية الكلمات العربية وتصريفها",
      instructor: "أكاديمية تبيان",
      level: "المستوى المتوسط",
      rating: 4.7,
      reviewsCount: 620,
      studentsCount: 4100,
      image: "/images/programs/arabic/sarf-med.jpg",
    },
    {
      id: 5,
      category: "المستوى المتقدم",
      title: "دورة قطر الندى وبل الصدى",
      subtitle: "دراسة متقدمة في النحو العربي وتطبيقاته البلاغية",
      instructor: "أكاديمية تبيان",
      level: "المستوى المتقدم",
      rating: 5.0,
      reviewsCount: 410,
      studentsCount: 2300,
      image: "/images/programs/arabic/qatar-nada.jpg",
    },
    {
      id: 6,
      category: "المستوى المتقدم",
      title: "دورة البلاغة الواضحة (بيان وبديع ومعاني)",
      subtitle: "أسرار البيان العربي وفصاحة التعبير",
      instructor: "أكاديمية تبيان",
      level: "المستوى المتقدم",
      rating: 4.9,
      reviewsCount: 780,
      studentsCount: 5100,
      image: "/images/programs/arabic/balaghah.jpg",
    },
  ];

  const filteredCourses =
    activeTab === "الكل"
      ? allCourses
      : allCourses.filter((c) => c.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F4F8F9] font-sans pb-32" dir="rtl">
      
      {/* 1. البانر العلوي */}
      <section className="bg-gradient-to-b from-[#0e576c] via-[#094252] to-[#05232d] text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-400 relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 bg-[#136e87]/40 border border-cyan-400/30 text-cyan-200 px-5 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>برنامج اللغة العربية الفصحى</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-300 leading-tight mb-6 max-w-4xl">
            دورات تعليم اللغة العربية وعلومها
          </h1>

          <p className="text-cyan-100 text-base sm:text-xl leading-relaxed mb-10 max-w-3xl font-normal">
            برامج متخصصة ومصنفة بعناية تبدأ مع الأطفال من الصفر وتتدرج وصولاً إلى مستويات الإتقان في النحو والصرف والبلاغة.
          </p>

        </div>
      </section>

      {/* 2. قسم الدورات المتاحة */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* عنوان القسم */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex p-3 bg-[#EBF5F8] text-[#0e576c] rounded-2xl mb-4 shadow-sm">
            <GraduationCap className="w-9 h-9" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            المستويات والدورات المتاحة
          </h2>
          <p className="text-base text-gray-500 font-medium">
            اختر المستوى المناسب لابنك أو لمسارك التعليمي
          </p>
          <div className="mt-4 inline-block bg-white text-[#0e576c] font-bold text-xs px-4 py-1.5 rounded-full border border-cyan-100 shadow-sm">
            {filteredCourses.length} دورة متاحة
          </div>
        </div>

        {/* أزرار التصفية الفئات والمستويات */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-6 mb-12 no-scrollbar px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap shadow-xs ${
                activeTab === category
                  ? "bg-[#0e576c] text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-cyan-50/50 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* شبكة كروت الدورات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center"
            >
              {/* القسم العلوي: عرض الصورة */}
              <div className="relative h-64 bg-[#FCFBF7] border-b border-gray-100 overflow-hidden">
                {course.image && (
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                )}
                {/* شارة توضيحية للمستوى فوق الصورة */}
                <span className="absolute top-4 right-4 bg-[#0e576c]/90 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-sm">
                  {course.category}
                </span>
              </div>

              {/* القسم السفلي: التفاصيل والتقييم وزر التسجيل */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-6">
                    {course.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-6 px-1">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold">{course.studentsCount.toLocaleString()} طالب</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">({course.reviewsCount})</span>
                      <span className="font-bold text-gray-800">{course.rating}</span>
                      <div className="flex text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-[#0e576c] hover:bg-[#094252] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>التسجيل في الدورة</span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}