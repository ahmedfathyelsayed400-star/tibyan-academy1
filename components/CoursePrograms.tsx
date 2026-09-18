import Image from "next/image";
import Link from "next/link";

type Program = {
  title: string;
  description: string;
  image: string;
  badge?: string; // أضفنا هذه الخاصية للعلامة المميزة اختيارياً
};

type CourseProgramsProps = {
  badge: string;
  title: string;
  description: string;
  programs: Program[];
};

export default function CoursePrograms({
  badge,
  title,
  description,
  programs,
}: CourseProgramsProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-lg font-bold text-yellow-600">
            {badge}
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#0F5C4D] md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {description}
          </p>

        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">

          {programs.map((program) => (

            <div
              key={program.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* العلامة المميزة في الأعلى إذا كانت موجودة */}
              {program.badge && (
                <div className="absolute top-4 right-4 z-10 bg-[#0F5C4D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {program.badge}
                </div>
              )}

              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-7 text-center">
                  <h3 className="text-2xl font-bold text-[#0F5C4D]">
                    {program.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600 text-sm">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* زر سجل الآن يوجه مباشرة للقسم الأخضر #register */}
              <div className="p-7 pt-0 text-center">
                <Link
                  href="#register"
                  className="inline-flex w-full justify-center rounded-xl bg-[#0F5C4D] px-8 py-3 font-bold text-white transition hover:bg-yellow-500 hover:text-black"
                >
                  سجل الآن
                </Link>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}