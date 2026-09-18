"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Star, 
  Users, 
  GraduationCap, 
} from "lucide-react";

export default function TeachersPreparationPage() {
  const [activeTab, setActiveTab] = useState("الكل");

  // الفئات المتاحة للتصفية
  const categories = [
    "الكل",
    "المستوى الثاني",
    "المستوى الثالث",
    "المستوى الخامس",
    "المستوى السادس",
    "المتون الإضافية",
    "دورات متفرقة",
  ];

  // قائمة الدورات مع مسار الصور من داخل مجلد programs/courses
  const allCourses = [
    {
      id: 1,
      category: "المستوى السادس",
      title: "دورة في فقه الحج",
      subtitle: "من شرح متني بلوغ المرام وزاد المستقنع",
      instructor: "أكاديمية تبيان",
      level: "المستوى السادس",
      rating: 4.9,
      reviewsCount: 1715,
      studentsCount: 9729,
      image: "/images/programs/courses/hajj.jpg",
    },
    {
      id: 2,
      category: "المستوى الخامس",
      title: "دورة شرح العقيدة الطحاوية",
      subtitle: "بيان عقيدة أهل السنة والجماعة",
      instructor: "أكاديمية تبيان",
      level: "المستوى الخامس",
      rating: 4.8,
      reviewsCount: 23,
      studentsCount: 3389,
      image: "/images/programs/courses/tahawiyyah.jpg",
    },
    {
      id: 3,
      category: "دورات متفرقة",
      title: "دورة في القاعدة المدنية - تعليم القراءة للمبتدئين",
      subtitle: "المنهج المقرّر في حلقات القرآن الكريم والمتون العلمية",
      instructor: "أكاديمية تبيان",
      level: "دورات متفرقة",
      rating: 4.8,
      reviewsCount: 1307,
      studentsCount: 7551,
      image: "/images/programs/courses/madaniyah.jpg",
    },
    {
      id: 4,
      category: "المستوى الثاني",
      title: "دورة شرح القواعد الأربعة",
      subtitle: "معرفة التوحيد والتمييز بينه وبين الشرك",
      instructor: "أكاديمية تبيان",
      level: "المستوى الثاني",
      rating: 4.9,
      reviewsCount: 840,
      studentsCount: 5120,
      image: "/images/programs/courses/qawaid.jpg",
    },
    {
      id: 5,
      category: "المستوى الثاني",
      title: "دورة شرح الأربعين النووية",
      subtitle: "جامع العلوم والحكم في الحديث النبوي",
      instructor: "أكاديمية تبيان",
      level: "المستوى الثاني",
      rating: 4.9,
      reviewsCount: 620,
      studentsCount: 4300,
      image: "/images/programs/courses/nawawi.jpg",
    },
    {
      id: 6,
      category: "المستوى الثالث",
      title: "دورة شرح شروط الصلاة وأركانها وواجباتها",
      subtitle: "بيان أحكام الصلاة والطهارة من المتون الفقهية",
      instructor: "أكاديمية تبيان",
      level: "المستوى الثالث",
      rating: 4.7,
      reviewsCount: 410,
      studentsCount: 2980,
      image: "/images/programs/courses/salah.jpg",
    },
    {
      id: 7,
      category: "المستوى الثالث",
      title: "دورة شرح تحفة الأطفال في تجويد القرآن",
      subtitle: "المتن العلمي الأهم في أحكام التلاوة والتجويد",
      instructor: "أكاديمية تبيان",
      level: "المستوى الثالث",
      rating: 5.0,
      reviewsCount: 1950,
      studentsCount: 11200,
      image: "/images/programs/courses/tuhfah.jpg",
    },
    {
      id: 8,
      category: "دورات متفرقة",
      title: "دورة في آداب طالب العلم",
      subtitle: "السلوك والسمت الإيماني لمعلم وطالب القرآن",
      instructor: "أكاديمية تبيان",
      level: "دورات متفرقة",
      rating: 4.9,
      reviewsCount: 380,
      studentsCount: 3100,
      image: "/images/programs/courses/adab.jpg",
    },
    {
      id: 9,
      category: "المتون الإضافية",
      title: "دورة في قواعد الأسماء والصفات ومعاني أسماء الله الحسنى",
      subtitle: "فهم أسماء الله الحسنى وفق منهج السلف الصالح",
      instructor: "أكاديمية تبيان",
      level: "المتون الإضافية",
      rating: 4.9,
      reviewsCount: 720,
      studentsCount: 4890,
      image: "/images/programs/courses/asmaa.jpg",
    },
    {
      id: 10,
      category: "المستوى الخامس",
      title: "دورة في علم الفرائض وشرح المواريث",
      subtitle: "أحكام قسمة التركات والمواريث في الشريعة",
      instructor: "أكاديمية تبيان",
      level: "المستوى الخامس",
      rating: 4.8,
      reviewsCount: 290,
      studentsCount: 2150,
      image: "/images/programs/courses/faraid.jpg",
    },
    {
      id: 11,
      category: "المستوى الثالث",
      title: "دورة في فقه الصيام",
      subtitle: "شرح أحكام الصيام والاعتكاف وزكاة الفطر",
      instructor: "أكاديمية تبيان",
      level: "المستوى الثالث",
      rating: 4.9,
      reviewsCount: 510,
      studentsCount: 3750,
      image: "/images/programs/courses/siyam.jpg",
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
            <span>برنامج متكامل ومعتمد</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-amber-300 leading-tight mb-6 max-w-4xl">
            برنامج إعداد وتأهيل معلمي القرآن الكريم
          </h1>

          <p className="text-cyan-100 text-base sm:text-xl leading-relaxed mb-10 max-w-3xl font-normal">
            سلسلة دورات تخصصية وشروح للمتون العلمية المقررة لتأهيل المعلمين والمعلمات في الفقه والعقيدة والتجويد وآداب طالب العلم.
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
            الدورات المتاحة
          </h2>
          <p className="text-base text-gray-500 font-medium">
            اختر المستوى العلمي لتصفح الدورات المتخصصة بأكاديمية تبيان
          </p>
          <div className="mt-4 inline-block bg-white text-[#0e576c] font-bold text-xs px-4 py-1.5 rounded-full border border-cyan-100 shadow-sm">
            {filteredCourses.length} دورة معتمدة
          </div>
        </div>

        {/* أزرار التصفية والفئات */}
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
              {/* القسم العلوي: عرض الصورة الحقيقية */}
              <div className="relative h-64 bg-[#FCFBF7] border-b border-gray-100 overflow-hidden">
                {course.image && (
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                )}
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