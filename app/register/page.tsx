export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">

      <section className="mx-auto max-w-3xl">

        <div className="mb-12 text-center">

          <span className="font-bold text-yellow-500">
            أكاديمية بيان
          </span>

          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            سجل الآن
          </h1>

          <p className="mt-5 text-gray-300">
            املأ البيانات التالية للانضمام إلى برامجنا التعليمية
          </p>

        </div>


        <form className="space-y-6 rounded-3xl border border-yellow-600 bg-zinc-900 p-8 shadow-2xl">


          <div>
            <label className="mb-2 block">
              الاسم الكامل
            </label>

            <input
              type="text"
              placeholder="اكتب اسمك"
              className="w-full rounded-xl bg-black p-4 text-white outline-none border border-gray-700 focus:border-yellow-500"
            />
          </div>



          <div>
            <label className="mb-2 block">
              السن
            </label>

            <input
              type="number"
              placeholder="اكتب السن"
              className="w-full rounded-xl bg-black p-4 text-white outline-none border border-gray-700 focus:border-yellow-500"
            />
          </div>



          <div>
            <label className="mb-2 block">
              الدولة
            </label>

            <input
              type="text"
              placeholder="اكتب الدولة"
              className="w-full rounded-xl bg-black p-4 text-white outline-none border border-gray-700 focus:border-yellow-500"
            />
          </div>



          <div>
            <label className="mb-2 block">
              اختر الدورة
            </label>

            <select
              className="w-full rounded-xl bg-black p-4 text-white outline-none border border-gray-700 focus:border-yellow-500"
            >
              <option>
                القرآن الكريم
              </option>

              <option>
                التجويد والقراءات
              </option>

              <option>
                اللغة العربية
              </option>

              <option>
                العلوم الإسلامية
              </option>

              <option>
                إعداد معلمي القرآن
              </option>

            </select>
          </div>



          <div>
            <label className="mb-2 block">
              رقم الواتساب
            </label>

            <input
              type="tel"
              placeholder="مثال: 201064481055"
              className="w-full rounded-xl bg-black p-4 text-white outline-none border border-gray-700 focus:border-yellow-500"
            />
          </div>



          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-500 py-4 text-xl font-bold text-black transition hover:bg-yellow-400"
          >
            تسجيل
          </button>


        </form>


      </section>

    </main>
  );
}