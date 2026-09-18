import Link from "next/link";

type CourseCTAProps = {
  title?: string;
  description?: string;
};

export default function CourseCTA({
  title = "ابدأ رحلتك مع القرآن الكريم اليوم",
  description = "انضم إلى أكاديمية بيان واستمتع بتجربة تعليمية احترافية مع نخبة من المعلمين المتخصصين.",
}: CourseCTAProps) {
  return (
    <section className="bg-black py-24">

      <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-600 bg-[#111111] px-8 py-14 text-center">

        <span className="text-base font-bold text-yellow-500">
          أكاديمية بيان
        </span>

        <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/register"
            className="rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition hover:bg-yellow-400"
          >
            سجل الآن
          </Link>

          <a
            href="https://wa.me/201064481055"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-yellow-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-yellow-500 hover:text-black"
          >
            تواصل عبر واتساب
          </a>

        </div>

      </div>

    </section>
  );
}