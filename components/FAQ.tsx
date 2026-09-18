const faqs = [
  {
    question: "هل يمكن الدراسة من أي دولة؟",
    answer:
      "نعم، جميع الدروس تُقدَّم أونلاين ويمكن الانضمام إليها من أي مكان في العالم.",
  },
  {
    question: "هل توجد حصة تجريبية؟",
    answer:
      "نعم، يمكنك طلب حصة تجريبية مجانية للتعرف على طريقة التدريس قبل الاشتراك.",
  },
  {
    question: "هل أختار المعلم؟",
    answer:
      "نحرص على ترشيح المعلم الأنسب لمستواك، ويمكن تغيير المعلم عند الحاجة.",
  },
  {
    question: "ما مدة الحصة؟",
    answer:
      "يمكن اختيار 30 أو 40 أو 60 دقيقة حسب البرنامج المناسب لك.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#0d0d0d] py-24 text-white">

      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <span className="text-lg font-bold text-yellow-500">
            الأسئلة الشائعة
          </span>

          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            كل ما تريد معرفته
          </h2>

        </div>

        <div className="space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.question}
              className="rounded-2xl border border-yellow-600 bg-black p-8"
            >

              <h3 className="text-xl font-bold text-yellow-500">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-gray-300">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}