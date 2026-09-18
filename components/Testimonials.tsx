const testimonials = [
  {
    name: "أحمد - السعودية",
    text: "من أفضل الأكاديميات التي تعلمت فيها القرآن الكريم، المعلمون متميزون والمتابعة ممتازة.",
  },
  {
    name: "فاطمة - مصر",
    text: "استفدت كثيرًا من البرنامج، وأصبح لدي تحسن واضح في التلاوة وأحكام التجويد.",
  },
  {
    name: "محمد - ألمانيا",
    text: "سهولة الحجز والمرونة في المواعيد جعلت التعلم مناسبًا جدًا لي.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-lg font-bold text-yellow-600">
            آراء طلابنا
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#0F5C4D] md:text-5xl">
            ماذا يقول طلاب أكاديمية بيان؟
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 text-5xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="leading-8 text-gray-600">
                {item.text}
              </p>

              <h3 className="mt-8 text-xl font-bold text-[#0F5C4D]">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}