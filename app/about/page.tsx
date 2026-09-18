import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import { 
  Award, 
  Users, 
  Clock, 
  Sliders, 
  CalendarCheck, 
  ShieldCheck,
  ArrowLeft
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <Award className="w-7 h-7 text-[#00B365]" />,
      title: "معلمون مجازون",
      desc: "نخبة من المعلمين والمعلمات الحاصلين على إجازات وسند متصل عن النبي ﷺ.",
    },
    {
      icon: <Users className="w-7 h-7 text-[#00B365]" />,
      title: "أقسام نسائية مستقلة",
      desc: "بيئة تعليمية آمنة وخاصة للنساء بإشراف معلمات متخصصات.",
    },
    {
      icon: <Clock className="w-7 h-7 text-[#00B365]" />,
      title: "مرونة في المواعيد",
      desc: "اختار الوقت الذي يناسبك على مدار 24 ساعة، بمواعيد ثابتة أو مرنة.",
    },
    {
      icon: <Sliders className="w-7 h-7 text-[#00B365]" />,
      title: "خطط فردية",
      desc: "نضع لك خطة تعليمية شخصية مبنية على عمرك ومستواك وأهدافك.",
    },
    {
      icon: <CalendarCheck className="w-7 h-7 text-[#00B365]" />,
      title: "متابعة دورية",
      desc: "تقارير منتظمة عن تقدم الطالب وتواصل مستمر عبر الواتساب.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#00B365]" />,
      title: "الضمان الذهبي",
      desc: "نضمن لك استرداد قيمة الاشتراك في حال عدم اقتناعك بالمعلم أو عدم البدء.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans" dir="rtl">
      {/* الشريط العلوي الثابت */}
      <Navbar />

      {/* المحتوى الرئيسي */}
      <main 
        style={{ paddingTop: "200px" }} 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        
        {/* قسم الهيدر العلوي (الشارة + العنوان الكبير + الجملة) */}
        <div className="text-center mb-16 flex flex-col items-center">
          
          {/* شارة "لماذا نحن" البيضاوية */}
          <div className="inline-flex items-center gap-2 bg-[#E8F8F0] text-[#00B365] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00B365]"></span>
            <span>لماذا نحن</span>
          </div>

          {/* العنوان الرئيسي الكبير */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-tight max-w-3xl">
            تجربة تعليمية مصمّمة <br className="hidden sm:inline" /> بعناية لِكلّ طالب
          </h1>

          {/* الجملة التعريفية */}
          <p className="text-gray-500 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            نحرص على بيئة آمنة، مرنة، وفعالة لتعلّم القرآن واللغة العربية والعلوم الإسلامية.
          </p>

        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#E8F8F0] flex items-center justify-center mb-6 shrink-0">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* قسم الانضمام (المستطيل الأخضر) مع إضافة id هنا ليتم التمرير إليه */}
        <div 
          id="register"
          style={{ marginTop: "120px", marginBottom: "120px" }} 
          className="text-center scroll-mt-28"
        >
          <div className="bg-[#00754A] rounded-3xl p-8 sm:p-10 text-white shadow-lg max-w-4xl mx-auto flex flex-col items-center">
            
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              ابدأ رحلتك القرآنية اليوم
            </h2>

            <p className="text-emerald-100 text-base mb-8 max-w-xl leading-relaxed">
              احجز حصتك التجريبية الآن وتواصل مباشرة مع معلمك المختص لتحديد المستوى.
            </p>

            <Link
              href="#register"
              className="inline-flex items-center gap-3 bg-[#eab308] hover:bg-amber-400 text-black font-bold px-8 py-3.5 rounded-xl shadow-md transition-colors text-base"
            >
              <span>احجز حصتك المجانية</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>

          </div>
        </div>

      </main>
    </div>
  );
}