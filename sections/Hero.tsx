import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">

      {/* Golden Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div className="text-right">

          <p className="text-yellow-500 text-lg mb-4">
            أكاديمية بيان
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            تعلم القرآن الكريم
            <br />
            بأسلوب احترافي من أي مكان في العالم
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8">
            تعليم القرآن الكريم والتجويد والعلوم الإسلامية
            مع معلمين متخصصين وحصص مباشرة أونلاين.
          </p>


          <div className="mt-8 flex gap-4 justify-start">

            <a
              href="https://wa.me/201064481055"
              target="_blank"
              className="inline-flex items-center justify-center bg-yellow-500 text-black px-12 py-5 rounded-full text-xl font-bold shadow-xl transition hover:scale-105 hover:bg-yellow-400"
            >
              سجل الآن
            </a>


            <Link
              href="/courses"
              className="inline-flex items-center justify-center border-2 border-yellow-500 text-yellow-500 px-10 py-5 rounded-full text-lg font-bold transition hover:bg-yellow-500 hover:text-black"
            >
              استعرض الدورات
            </Link>

          </div>

        </div>


        {/* Video Placeholder */}
        <div className="relative">

          <div className="aspect-video rounded-3xl border border-yellow-500/30 bg-zinc-900 flex items-center justify-center shadow-2xl">

            <div className="text-center">
              <div className="text-6xl mb-4">
                ▶
              </div>

              <p className="text-white">
                فيديو تعريفي بالأكاديمية
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}