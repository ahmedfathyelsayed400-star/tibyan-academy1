import Image from "next/image";
import Link from "next/link";

const tajweedCourses = [
  {
    title: "التجويد للمبتدئين",
    description:
      "تعلم أساسيات التجويد بطريقة سهلة، بداية من مخارج الحروف وأهم الأحكام التي يحتاجها كل قارئ.",
    image: "/images/programs/tajweed/tajweed-beginner.jpg",
  },
  {
    title: "التجويد المتقدم",
    description:
      "دراسة أحكام التجويد المتقدمة والتدرب على تطبيقها أثناء تلاوة القرآن الكريم.",
    image: "/images/programs/tajweed/tajweed-advanced.jpg",
  },
  {
    title: "التطبيق العملي لأحكام التجويد",
    description:
      "تطبيق أحكام التجويد عمليًا من خلال قراءة القرآن وتصحيح الأخطاء مع المعلم.",
    image: "/images/programs/tajweed/tajweed-practical.jpg",
  },
  {
    title: "مخارج الحروف وصفاتها",
    description:
      "تعلم كيفية نطق الحروف العربية من مخارجها الصحيحة ومعرفة صفاتها.",
    image: "/images/programs/tajweed/makharij.jpg",
  },
  {
    title: "أحكام التجويد الشاملة",
    description:
      "برنامج شامل يجمع أهم قواعد وأحكام التجويد للوصول إلى قراءة صحيحة.",
    image: "/images/programs/tajweed/tajweed-rules.jpg",
  },
];

export default function TajweedPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black">
            دورات التجويد
          </h1>

          <p className="mt-4 text-gray-600">
            تعلم أحكام التجويد بأسلوب مبسط ومنهجي مع معلمين متخصصين.
          </p>
        </div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {tajweedCourses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg border"
            >

              <div className="relative h-56 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>


              <div className="p-6 text-right">

                <h2 className="mb-3 text-xl font-bold text-black">
                  {course.title}
                </h2>


                <p className="mb-5 text-gray-600 leading-7">
                  {course.description}
                </p>


                <Link
                  href={`https://wa.me/201064481055?text=السلام عليكم أريد التسجيل في دورة ${course.title}`}
                  className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-10 py-4 text-lg font-bold text-black shadow-xl transition hover:scale-105 hover:bg-yellow-400"
                >
                  سجل الآن
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}