import Link from "next/link";

const courses = [
  {
    title: "القرآن الكريم",
    description:
      "تعلم التلاوة الصحيحة وحفظ القرآن الكريم مع معلمين متخصصين.",
    lessons: "30+ درس",
    href: "/courses/quran",
  },
  {
    title: "التجويد",
    description:
      "إتقان أحكام التجويد نظريًا وعمليًا بسهولة.",
    lessons: "24+ درس",
    href: "/courses/tajweed",
  },
  {
    title: "القراءات",
    description:
      "تعلم القراءات المتواترة بإشراف متخصصين.",
    lessons: "40+ درس",
    href: "/courses/qiraat",
  },
  {
    title: "اللغة العربية",
    description:
      "تعلم اللغة العربية لجميع المستويات.",
    lessons: "35+ درس",
    href: "/courses/arabic",
  },
  {
    title: "إعداد معلمي القرآن",
    description:
      "برنامج احترافي لإعداد وتأهيل معلمي القرآن الكريم.",
    lessons: "50+ درس",
    href: "/courses/teachers",
  },
];

export default function Courses() {
  return (
    <section className="bg-black py-24" dir="rtl">
      <div className="mx-auto max-w-7xl px-6">
        
        <span className="text-yellow-500 font-bold">
          برامجنا التعليمية
        </span>

        <h2 className="mt-4 text-5xl font-extrabold text-white">
          اختر الدورة المناسبة لك
        </h2>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-400">
          نقدم برامج متخصصة في القرآن الكريم والتجويد والقراءات واللغة
          العربية وإعداد المعلمين وفق أحدث الأساليب التعليمية.
        </p>

        {/* الحاوية تحولت إلى flex عمودي لترتيب المستطيلات تحت بعضها */}
        <div className="mt-16 flex flex-col gap-5">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group flex flex-col md:flex-row md:items-center justify-between min-h-[90px] p-6 rounded-2xl border border-yellow-600/40 bg-[#111111] transition-all duration-500 hover:border-yellow-400 hover:bg-[#161616] hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] cursor-pointer"
            >
              
              {/* جهة اليمين: اسم الدورة ثابت */}
              <div className="flex items-center gap-4">
                <span className="h-3 w-3 rounded-full bg-yellow-500 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-yellow-500 group-hover:text-white transition-colors duration-300">
                  {course.title}
                </h3>
              </div>

              {/* جهة اليسار: العناصر التي تظهر فقط عند التمرير (Hover) */}
              <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-6 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                
                {/* وصف الدورة */}
                <p className="text-gray-300 text-base max-w-xl leading-relaxed">
                  {course.description}
                </p>

                {/* تفاصيل إضافية وزر الانتقال */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="rounded-full bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 text-xs font-medium text-yellow-500">
                    {course.lessons}
                  </span>
                  
                  <Link
                    href={course.href}
                    className="rounded-xl bg-yellow-500 px-5 py-2 text-sm font-bold text-black transition duration-300 hover:bg-yellow-400"
                  >
                    تفاصيل الدورة
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-3 rounded-xl border-2 border-yellow-500 px-10 py-4 text-xl font-bold text-white transition duration-300 hover:bg-yellow-500 hover:text-black"
          >
            عرض جميع الدورات
            <span className="text-2xl">←</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
