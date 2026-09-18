import CourseHero from "@/components/CourseHero";
import Image from "next/image"; // 👈 استيراد مكون الصور المطور
import Link from "next/link";

export default function IslamicCoursesPage() {
  const islamicPrograms = [
    {
      title: "دورة الفقه الميسر",
      description: "تعلم أحكام الطهارة، الصلاة، العبادات، والمعاملات اليومية التي يحتاجها كل مسلم.",
      duration: "4 أشهر",
      lectures: "32 درساً",
      image: "/images/programs/islamic/fiqh.jpg", // 👈 المسار المجلد الجديد الخاص بك
    },
    {
      title: "دورة العقيدة الإسلامية",
      description: "شرح مبسط وممنهج لأركان الإيمان والتوحيد الخالص وفق الكتاب والسنة.",
      duration: "3 أشهر",
      lectures: "24 درساً",
      image: "/images/programs/islamic/aqeedah.jpg", // 👈 المسار المجلد الجديد الخاص بك
    },
    {
      title: "دورة الحديث الشريف",
      description: "دراسة وتدبر الأحاديث النبوية الصحيحة (مثل الأربعين النووية) واستخراج الفوائد السلوكية منها.",
      duration: "شهران",
      lectures: "16 درساً",
      image: "/images/programs/islamic/hadith.jpg", // 👈 المسار المجلد الجديد الخاص بك
    },
    {
      title: "دورة السيرة النبوية",
      description: "الإبحار في سيرة النبي صلى الله عليه وسلم من المولد حتى الوفاة لاستخلاص العبر والدروس.",
      duration: "3 أشهر",
      lectures: "24 درساً",
      image: "/images/programs/islamic/seerah.jpg", // 👈 المسار المجلد الجديد الخاص بك
    },
  ];

  return (
    <main className="bg-white antialiased">
      {/* سكشن الهيرو العلوي */}
      <CourseHero
        badge="أكاديمية بيان"
        title="الدورات الإسلامية المتاحة"
        description="تعلم الفقه والعقيدة والحديث والسيرة النبوية بأسلوب مبسط ومنهجي يناسب الجميع."
        image="/images/hero/main.jpg"
      />

      <section dir="rtl" className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          
          {/* شبكة برامج الدورات الإسلامية */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {islamicPrograms.map((program, index) => (
              <div
                key={index}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
              >
                {/* الحاوية البرمجية لعرض الصور من الفولدر الجديد */}
                <div className="relative h-[180px] w-full overflow-hidden bg-[#f2f6f3]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>

                {/* محتويات الكارت (النصوص والتفاصيل) */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold leading-8 text-gray-900">
                    {program.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
                    {program.description}
                  </p>

                  {/* تفاصيل المدة والمحاضرات */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-3 text-xs text-gray-400">
                    <span>⏳ المدة: {program.duration}</span>
                    <span>📚 {program.lectures}</span>
                  </div>

                  {/* أزرار الإجراءات */}
                  <div className="mt-5">
                    <button
                      type="button"
                      className="w-full rounded-full bg-[#00754A] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#005235] hover:shadow-md"
                    >
                      سجل الآن في الدورة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* زر العودة للرئيسية */}
          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-black transition">
              ← العودة إلى الصفحة الرئيسية
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
