import React from 'react';

export default function DurationSection() {
  return (
    <section
      className="w-full bg-white px-4 pt-24 pb-20 text-center"
      dir="rtl"
    >
      <div className="w-full max-w-6xl mx-auto">

        {/* =========================
            العنوان والوصف
        ========================== */}
        <div className="flex w-full flex-col items-center justify-center">

          {/* العنوان */}
          <h2
            className="
              m-0
              text-3xl
              md:text-4xl
              font-bold
              text-[#0b231a]
              leading-[1.8]
              whitespace-nowrap
            "
          >
            اختر مدة الحلقة المناسبة لك
          </h2>

          {/* مسافة واضحة بين العنوان والوصف */}
          <div className="h-6 md:h-8" />

          {/* الوصف */}
          <p
            className="
              m-0
              max-w-2xl
              px-4
              text-sm
              md:text-base
              text-gray-400
              leading-[2]
            "
          >
            نوفر لك المرونة الكاملة في اختيار مدة الحلقة التي تناسب وقتك وجدولك
          </p>

          {/* مسافة كبيرة بين الوصف والكروت */}
          <div className="h-12 md:h-16" />
        </div>


        {/* =========================
            الكروت
        ========================== */}
        <div className="w-full flex justify-center">

          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              justify-center
              gap-8
              md:flex-row
              md:items-stretch
            "
          >

            {/* =========================
                30 دقيقة
                يظهر على اليمين
            ========================== */}
            <div
              className="
                flex
                min-h-[220px]
                w-full
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-100
                border-b-[5px]
                border-b-amber-400
                bg-white
                p-6
                shadow-[0_4px_20px_rgba(0,0,0,0.02)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)]
                md:w-[280px]
              "
            >

              {/* الأيقونة */}
              <div className="mb-4 rounded-full bg-yellow-50 p-3 text-2xl">
                ⚡
              </div>

              {/* العنوان */}
              <h3 className="m-0 mb-3 text-2xl font-bold text-slate-800">
                30 دقيقة
              </h3>

              {/* الوصف */}
              <p className="m-0 text-xs leading-6 tracking-wide text-gray-400">
                مثالية للمبتدئين والأطفال الصغار
              </p>

            </div>


            {/* =========================
                40 دقيقة
                الكارت المميز - المنتصف
            ========================== */}
            <div
              className="
                relative
                flex
                min-h-[240px]
                w-full
                flex-col
                items-center
                justify-center
                rounded-2xl
                bg-[#0b3a26]
                p-6
                text-white
                shadow-[0_10px_30px_rgba(11,58,38,0.15)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_15px_35px_rgba(11,58,38,0.22)]
                md:-mt-2
                md:w-[280px]
              "
            >

              {/* الأكثر طلباً */}
              <span
                className="
                  absolute
                  -top-3.5
                  rounded-full
                  bg-amber-500
                  px-5
                  py-1
                  text-[10px]
                  font-extrabold
                  tracking-wider
                  text-[#0b3a26]
                  shadow-sm
                "
              >
                الأكثر طلباً
              </span>

              {/* الأيقونة */}
              <div className="mb-4 mt-1 text-2xl">
                ⭐
              </div>

              {/* العنوان */}
              <h3 className="m-0 mb-3 text-2xl font-bold text-amber-400">
                40 دقيقة
              </h3>

              {/* الوصف */}
              <p className="m-0 text-xs leading-6 tracking-wide text-gray-200">
                مناسبة لجميع المستويات
              </p>

            </div>


            {/* =========================
                60 دقيقة
                يظهر على اليسار
            ========================== */}
            <div
              className="
                flex
                min-h-[220px]
                w-full
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-100
                border-b-[5px]
                border-b-emerald-600
                bg-white
                p-6
                shadow-[0_4px_20px_rgba(0,0,0,0.02)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)]
                md:w-[280px]
              "
            >

              {/* الأيقونة */}
              <div className="mb-4 rounded-full bg-red-50 p-3 text-2xl">
                🎯
              </div>

              {/* العنوان */}
              <h3 className="m-0 mb-3 text-2xl font-bold text-slate-800">
                60 دقيقة
              </h3>

              {/* الوصف */}
              <p className="m-0 text-xs leading-6 tracking-wide text-gray-400">
                للطلاب المتقدمين والجادين
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}