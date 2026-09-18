import Image from "next/image";
import Link from "next/link";

type CourseHeroProps = {
  badge: string;
  title: string;
  description: string;
  image: string;
};

export default function CourseHero({
  badge,
  title,
  description,
  image,
}: CourseHeroProps) {
  // استبدال أي مسمى قادم لـ "بيان" إلى "تبيان" لضمان التغيير التلقائي
  const updatedBadge = badge.replace("بيان", "تبيان");

  return (
    <section className="relative h-[95vh] min-h-[750px] overflow-hidden w-full bg-black flex flex-col" dir="rtl">

      {/* الصورة الخلفية مع طبقة التعتيم */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* 1. الشريط العلوي المستقل لأكاديمية تبيان */}
      <div className="relative z-10 w-full border-b border-white/10 bg-black/30 backdrop-blur-md py-6 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4 h-full">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#D4AF37]/40 shadow-lg flex-shrink-0">
            <Image
              src="/images/logo/logo.png" 
              alt="Tabayan Academy Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl md:text-2xl font-semibold tracking-wide text-white flex items-center leading-none">
            {updatedBadge}
          </span>
        </div>
        <div className="text-sm text-[#D4AF37] font-semibold tracking-widest hidden sm:flex items-center leading-none">
          تِبْيَان لِعُلُومِ الْقُرْآنِ
        </div>
      </div>

      {/* 2. حاوية المحتوى الرئيسية */}
      <div className="relative z-10 mx-auto flex flex-1 w-full max-w-7xl items-center justify-center px-6 pb-24">

        <div className="w-full max-w-4xl text-center flex flex-col items-center">

          {/* العنوان الرئيسي */}
          <div className="w-full mb-4">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl tracking-wide">
              {title}
            </h1>
          </div>

          {/* الوصف والبيانات الفرعية */}
          <div className="space-y-4 max-w-3xl mb-6">
            <p className="text-base sm:text-xl text-[#D4AF37] font-medium tracking-wide leading-relaxed drop-shadow-sm">
              برنامج تعليمي متكامل لضبط التلاوة والارتقاء في درجات الحفظ بالسند المتصل.
            </p>

            <p className="text-sm leading-7 text-gray-300 font-normal md:text-base md:leading-8 opacity-90">
              {description}
            </p>
          </div>

          {/* الأزرار: تم إضافة flex-row-reverse لعكس أماكنهم برمجياً من اليمين لليسار */}
          <div className="flex flex-row-reverse flex-wrap gap-4 justify-center items-center w-full">

            {/* زر سجل الآن */}
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#B38F1E] via-[#D4AF37] to-[#B38F1E] px-10 h-12 text-sm font-bold text-black transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-center min-w-[160px]"
            >
              سجل الآن
            </Link>

            {/* زر نسخة تجريبية مجانية */}
            <Link
              href="/free-trial"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#B38F1E] via-[#D4AF37] to-[#B38F1E] px-10 h-12 text-sm font-bold text-black transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] text-center min-w-[180px]"
            >
              نسخة تجريبية مجانية
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
