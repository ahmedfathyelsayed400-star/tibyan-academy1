import CourseHero from "@/components/CourseHero";
import Image from "next/image"; // 👈 أضفنا استيراد مكون الصور المطور من Next.js
import Link from "next/link";   // 👈 أضفنا الروابط لتفعيل الأزرار لاحقاً

export default function QuranPage() {
  const quranPrograms = [
    {
      title: "تحفيظ القرآن الكريم",
      description:
        "برنامج متكامل لحفظ القرآن الكريم مع متابعة فردية، وخطة مناسبة لمستوى الطالب، ومراجعة مستمرة لتثبيت المحفوظ.",
      image: "/images/programs/quran-hifz.jpg",
    },
    {
      title: "تصحيح التلاوة",
      description:
        "برنامج متخصص لإتقان القراءة الصحيحة، وتصحيح الأخطاء، وضبط مخارج الحروف وصفاتها وأحكام التجويد.",
      image: "/images/programs/tajweed.jpg",
    },
    {
      title: "برنامج المراجعة",
      description:
        "خطة منظمة لمراجعة القرآن الكريم وتثبيت الحفظ وتقليل الأخطاء من خلال متابعة مستمرة ومنهجية.",
      image: "/images/programs/review.jpg",
    },
    {
      title: "الإجازة القرآنية",
      description:
        "برنامج متخصص للراغبين في الحصول على الإجازة القرآنية بالسند المتصل، مع متابعة دقيقة وتقويم مستمر.",
      image: "/images/programs/ijazah.jpg",
    },
  ];

  return (
    <main className="bg-white antialiased">
      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <CourseHero
        badge="أكاديمية بيان"
        title="دورات القرآن الكريم"
        description="برامج متخصصة في حفظ القرآن الكريم، وتصحيح التلاوة، والمراجعة، والإجازة القرآنية لجميع الأعمار."
        image="/images/hero/main.jpg"
      />

      {/* ========================================================= */}
      {/* MAIN PROGRAMS */}
      {/* ========================================================= */}

      <section
        dir="rtl"
        className="bg-white px-5 py-20 md:py-24"
      >
        <div className="mx-auto max-w-[1180px]">

          {/* Section Heading */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-semibold tracking-wide text-[#00754A]">
              أكاديمية بيان
            </span>

            <h2 className="text-3xl font-bold text-gray-900 md:text-[40px]">
              البرامج الرئيسية
            </h2>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-[#d0a958]" />

              <div className="h-2.5 w-2.5 rotate-45 bg-[#d0a958]" />

              <div className="h-px w-16 bg-[#d0a958]" />
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-500 md:text-lg">
              اختر البرنامج المناسب لك وابدأ رحلتك في تعلم القرآن الكريم
              وإتقانه على أيدي معلمين متخصصين.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {quranPrograms.map((program, index) => (
              <div
                key={index}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
              >
                {/* Image Container */}
                <div className="relative h-[220px] overflow-hidden bg-[#f2f6f3]">
                  {/* استخدمنا Next.js Image لسرعة تحميل الصور وضغطها تلقائياً */}
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index < 4}
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-sm font-bold text-[#00754A] shadow-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">

                  <h3 className="text-xl font-bold leading-8 text-gray-900">
                    {program.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-500">
                    {program.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-col gap-3">
                    <Link href="/register" className="w-full">
                      <button
                        type="button"
                        className="w-full rounded-full bg-[#00754A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#005235] hover:shadow-lg"
                      >
                        سجل الآن
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="w-full rounded-full border border-[#00754A]/30 bg-white px-5 py-3 text-sm font-semibold text-[#00754A] transition-all duration-300 hover:bg-[#00754A] hover:text-white"
                    >
                      معرفة المزيد
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
