"use client";

import { useState } from "react";

const countries = [
  { name: "مصر", code: "+20", flag: "🇪🇬" },
  { name: "المملكة العربية السعودية", code: "+966", flag: "🇸🇦" },
  { name: "الإمارات العربية المتحدة", code: "+971", flag: "🇦🇪" },
  { name: "الكويت", code: "+965", flag: "🇰🇼" },
  { name: "قطر", code: "+974", flag: "🇶🇦" },
  { name: "عمان", code: "+968", flag: "🇴🇲" },
  { name: "البحرين", code: "+973", flag: "🇧🇭" },
  { name: "الأردن", code: "+962", flag: "🇯🇴" },
  { name: "العراق", code: "+964", flag: "🇮🇶" },
  { name: "اليمن", code: "+967", flag: "🇾🇪" },
  { name: "فلسطين", code: "+970", flag: "🇵🇸" },
  { name: "لبنان", code: "+961", flag: "🇱🇧" },
  { name: "سوريا", code: "+963", flag: "🇸🇾" },
  { name: "المغرب", code: "+212", flag: "🇲🇦" },
  { name: "الجزائر", code: "+213", flag: "🇩🇿" },
  { name: "تونس", code: "+216", flag: "🇹🇳" },
  { name: "ليبيا", code: "+218", flag: "🇱🇾" },
  { name: "السودان", code: "+249", flag: "🇸🇩" },
  { name: "الولايات المتحدة", code: "+1", flag: "🇺🇸" },
  { name: "المملكة المتحدة", code: "+44", flag: "🇬🇧" },
  { name: "ألمانيا", code: "+49", flag: "🇩🇪" },
  { name: "فرنسا", code: "+33", flag: "🇫🇷" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[1]); // الافتراضي السعودية كما بالصورة
  const [courseType, setCourseType] = useState("تعليم القرآن الكريم والتجويد");
  const [sessions, setSessions] = useState("4 حلقات بالشهر (كل أسبوع حلقة)");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 📱 رقم الواتساب للأكاديمية بدون أصفار دولية وبدون علامة +
    const academyWhatsApp = "201000000000"; 

    const message = `*طلب تسجيل جديد - أكاديمية بيان* 🎓✨\n\n` +
                    `👤 *اسم الطالب:* ${name}\n` +
                    `🌍 *الدولة:* ${selectedCountry.name} (${selectedCountry.code})\n` +
                    `📞 *رقم الهاتف:* ${selectedCountry.code} ${phone}\n` +
                    `📚 *نوع الدورة:* ${courseType}\n` +
                    `⏱️ *عدد الحصص:* ${sessions}\n` +
                    `🗒️ *ملاحظات إضافية:* ${notes || "لا يوجد"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me{academyWhatsApp}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="w-full bg-[#0f141c] py-24 px-4 flex items-center justify-center block clear-both" dir="rtl">
      <div className="w-full max-w-4xl bg-[#161b24] border border-gray-800/60 shadow-2xl rounded-3xl p-8 md:p-12 transition-all duration-300">
        
        {/* الجزء العلوي: أيقونة المصحف + العناوين المطابقة للصورة المرجعية تماماً */}
        <div className="text-center mb-10 flex flex-col items-center">
          {/* أيقونة مصحف شريف انسيابية بلون هيدر موقعك */}
          <svg className="w-14 h-14 text-[#5b7c2a] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <span className="text-[#5b7c2a] font-bold text-xs tracking-wider mb-1 block">تعلم القرآن الكريم</span>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">نموذج التسجيل</h2>
          <p className="text-gray-500 text-xs font-medium">قم بتعبئة بياناتك للانضمام فوراً</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* الصف الأول: الاسم كامل + الدولة */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 font-bold text-xs pr-1">الاسم الكامل</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="أدخل اسمك الكامل"
                className="w-full px-4 py-3.5 bg-[#1f2633] border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#5b7c2a] text-sm font-medium text-white placeholder-gray-600 transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 font-bold text-xs pr-1">الدولة</label>
              <select
                value={JSON.stringify(selectedCountry)}
                onChange={(e) => setSelectedCountry(JSON.parse(e.target.value))}
                className="w-full px-4 py-3.5 bg-[#1f2633] border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#5b7c2a] text-sm font-medium text-white cursor-pointer transition"
              >
                {countries.map((country, idx) => (
                  <option key={idx} value={JSON.stringify(country)} className="bg-[#161b24]">
                    {country.flag} ‏{country.name} ({country.code})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* الصف الثاني: رقم الهاتف + نوع الدورة */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 font-bold text-xs pr-1">رقم الهاتف</label>
              <div className="flex relative items-center w-full" dir="ltr">
                <span className="absolute left-4 text-sm font-bold text-gray-500 select-none pointer-events-none">
                  {selectedCountry.code}
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="500000000"
                  className="w-full pl-16 pr-4 py-3.5 bg-[#1f2633] border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#5b7c2a] text-sm font-semibold text-white placeholder-gray-600 transition text-left"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 font-bold text-xs pr-1">نوع الدورة التدريبية</label>
              <select
                value={courseType}
                onChange={(e) => setCourseType(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#1f2633] border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#5b7c2a] text-sm font-medium text-white cursor-pointer transition"
              >
                <option value="تعليم القرآن الكريم والتجويد" className="bg-[#161b24]">تعليم القرآن الكريم والتجويد</option>
                <option value="حفظ ومراجعة القرآن الكريم" className="bg-[#161b24]">حفظ ومراجعة القرآن الكريم</option>
                <option value="القاعدة النورانية وتأسيس الأطفال" className="bg-[#161b24]">القاعدة النورانية وتأسيس الأطفال</option>
                <option value="تعلّم اللغة العربية لغير الناطقين بها" className="bg-[#161b24]">تعلّم اللغة العربية لغير الناطقين بها</option>
              </select>
            </div>
          </div>

          {/* الصف الثالث: عدد الحصص + الملاحظات الإضافية */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 font-bold text-xs pr-1">عدد الحصص بالشهر</label>
              <select
                value={sessions}
                onChange={(e) => setSessions(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#1f2633] border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#5b7c2a] text-sm font-medium text-white cursor-pointer transition"
              >
                <option value="4 حلقات بالشهر (كل أسبوع حلقة)" className="bg-[#161b24]">4 حلقات بالشهر (كل أسبوع حلقة)</option>
                <option value="8 حلقات بالشهر (كل أسبوع حلقتين)" className="bg-[#161b24]">8 حلقات بالشهر (كل أسبوع حلقتين)</option>
                <option value="16 حلقة بالشهر" className="bg-[#161b24]">16 حلقة بالشهر</option>
                <option value="24 حلقة بالشهر" className="bg-[#161b24]">24 حلقة بالشهر</option>
                <option value="30 حلقة بالشهر" className="bg-[#161b24]">30 حلقة بالشهر</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-400 font-bold text-xs pr-1">ملاحظات إضافية (اختياري)</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="اكتب أي استفسار هنا..."
                className="w-full px-4 py-3.5 bg-[#1f2633] border border-gray-700/50 rounded-xl focus:outline-none focus:border-[#5b7c2a] text-sm font-medium text-white placeholder-gray-600 transition"
              />
            </div>
          </div>

          {/* زر تأكيد التسجيل الأخضر الممركز والمطابق تماماً في المنتصف */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-48 flex h-11 items-center justify-center rounded-xl bg-[#5b7c2a] text-white font-bold text-sm shadow-md transition-all duration-300 hover:bg-[#496422] hover:scale-[1.02]"
            >
              تأكيد التسجيل
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
