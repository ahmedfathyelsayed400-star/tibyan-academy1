import Navbar from "@/components/navbar/Navbar"; 
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import QuranRadio from "@/components/QuranRadio"; // 👈 استيراد إذاعة القرآن الكريم

import HeroSlider from "@/sections/HeroSlider";
import Categories from "@/sections/Categories";
import WhyUs from "@/sections/WhyUs"; 
import TrialSection from "@/sections/TrialSection";
import Stats from "@/sections/Stats";
import AppSection from "@/sections/AppSection";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import ContactForm from "@/sections/ContactForm"; 
import DurationSection from "@/sections/DurationSection"; 

export default function Home() {
  return (
    <main className="bg-white text-black w-full overflow-x-hidden relative">
      <Navbar />

      <div className="w-full h-24 bg-white" />

      {/* 📻 إذاعة القرآن الكريم تحت الشريط العلوي على اليمين */}
      <div className="max-w-7xl mx-auto px-6 pb-4 flex justify-start">
        <QuranRadio />
      </div>

      {/* 1. السلايدر الرئيسي للموقع */}
      <HeroSlider />

      {/* 2. فئات الدورات */}
      <Categories />

      {/* 3. قسم اختيار مدة الحلقة */}
      <DurationSection />

      {/* 4. باقي أقسام الموقع */}
      <WhyUs /> 

      <TrialSection />

      <Stats />

      {/* قسم التطبيق */}
      <div id="app">
        <AppSection />
      </div>

      <Testimonials />

      {/* قسم الأسئلة الشائعة */}
      <div id="faqs">
        <FAQ />
      </div> 

      {/* قسم نموذج التسجيل والتواصل */}
      <div id="register">
        <ContactForm />
      </div>

      <FloatingWhatsApp />
    </main>
  );
}