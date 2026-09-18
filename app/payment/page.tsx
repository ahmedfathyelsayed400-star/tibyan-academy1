"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Mail,
  MessageCircle,
  ShieldCheck,
  User,
} from "lucide-react";

type Duration = 30 | 45 | 60;
type LessonCount = 8 | 12 | 16 | 20;

type Country = {
  id: string;
  name: string;
  flag: string;
  currency: string;
  prices: {
    30: Record<LessonCount, number>;
    45: Record<LessonCount, number>;
    60: Record<LessonCount, number>;
  };
};

const countries: Country[] = [
  {
    id: "eu",
    name: "أوروبا",
    flag: "eu",
    currency: "يورو",
    prices: {
      30: { 8: 30, 12: 40, 16: 55, 20: 70 },
      45: { 8: 40, 12: 55, 16: 70, 20: 80 },
      60: { 8: 55, 12: 75, 16: 90, 20: 110 },
    },
  },
  {
    id: "ca",
    name: "كندا",
    flag: "ca",
    currency: "دولار كندي",
    prices: {
      30: { 8: 50, 12: 70, 16: 90, 20: 110 },
      45: { 8: 70, 12: 90, 16: 110, 20: 130 },
      60: { 8: 90, 12: 120, 16: 145, 20: 175 },
    },
  },
  {
    id: "us",
    name: "أمريكا",
    flag: "us",
    currency: "دولار أمريكي",
    prices: {
      30: { 8: 35, 12: 50, 16: 65, 20: 80 },
      45: { 8: 50, 12: 65, 16: 80, 20: 95 },
      60: { 8: 65, 12: 85, 16: 105, 20: 125 },
    },
  },
  {
    id: "jo",
    name: "الأردن",
    flag: "jo",
    currency: "دينار أردني",
    prices: {
      30: { 8: 20, 12: 30, 16: 40, 20: 50 },
      45: { 8: 30, 12: 45, 16: 60, 20: 75 },
      60: { 8: 40, 12: 60, 16: 80, 20: 100 },
    },
  },
  {
    id: "om",
    name: "عُمان",
    flag: "om",
    currency: "ريال عماني",
    prices: {
      30: { 8: 12, 12: 16, 16: 20, 20: 24 },
      45: { 8: 16, 12: 24, 16: 32, 20: 40 },
      60: { 8: 24, 12: 32, 16: 40, 20: 48 },
    },
  },
  {
    id: "ae",
    name: "الإمارات",
    flag: "ae",
    currency: "درهم إماراتي",
    prices: {
      30: { 8: 100, 12: 140, 16: 180, 20: 220 },
      45: { 8: 130, 12: 180, 16: 230, 20: 280 },
      60: { 8: 180, 12: 250, 16: 320, 20: 390 },
    },
  },
  {
    id: "qa",
    name: "قطر",
    flag: "qa",
    currency: "ريال قطري",
    prices: {
      30: { 8: 100, 12: 140, 16: 180, 20: 220 },
      45: { 8: 130, 12: 180, 16: 230, 20: 280 },
      60: { 8: 180, 12: 250, 16: 320, 20: 390 },
    },
  },
  {
    id: "kw",
    name: "الكويت",
    flag: "kw",
    currency: "دينار كويتي",
    prices: {
      30: { 8: 10, 12: 15, 16: 20, 20: 25 },
      45: { 8: 15, 12: 22, 16: 30, 20: 35 },
      60: { 8: 20, 12: 30, 16: 40, 20: 50 },
    },
  },
  {
    id: "sa",
    name: "السعودية",
    flag: "sa",
    currency: "ريال سعودي",
    prices: {
      30: { 8: 100, 12: 140, 16: 180, 20: 220 },
      45: { 8: 130, 12: 180, 16: 230, 20: 280 },
      60: { 8: 180, 12: 250, 16: 320, 20: 390 },
    },
  },
];

const durations: Duration[] = [30, 45, 60];
const lessonCounts: LessonCount[] = [8, 12, 16, 20];

export default function PaymentPage() {
  const [selectedCountryId, setSelectedCountryId] = useState("sa");
  const [selectedDuration, setSelectedDuration] = useState<Duration>(30);
  const [selectedLessonCount, setSelectedLessonCount] = useState<LessonCount>(8);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const selectedCountry = useMemo(() => {
    return (
      countries.find((country) => country.id === selectedCountryId) ??
      countries[0]
    );
  }, [selectedCountryId]);

  const monthlyTotal =
    selectedCountry.prices[selectedDuration][selectedLessonCount];

  const pricePerLesson = monthlyTotal / selectedLessonCount;

  // تعديل دالة الدفع للتحويل المباشر إلى الرابط الخارجي
  const handlePayment = () => {
    // ضع رابط الدفع الخارجي الخاص بك هنا (مثل رابط بوابة الدفع أو الرابط المباشر)
    const externalPaymentUrl = "https://example.com/pay"; 
    window.location.href = externalPaymentUrl;
  };

  const handleWhatsApp = () => {
    const message = `
السلام عليكم،

أرغب في الاشتراك في أكاديمية بيان.

الدولة: ${selectedCountry.name}
مدة الحلقة: ${selectedDuration} دقيقة
عدد الحلقات شهريًا: ${selectedLessonCount}
السعر الشهري: ${formatNumber(monthlyTotal)} ${selectedCountry.currency}

الاسم: ${fullName || "غير محدد"}
البريد الإلكتروني: ${email || "غير محدد"}
    `.trim();

    const whatsappUrl =
      "https://wa.me/201064481055?text=" + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#f8faf9] text-[#17201e]">
      <section className="relative overflow-hidden border-b border-[#e7ebe8] bg-white">
        <div className="h-8 sm:h-10 lg:h-12" />
        <Link
          href="/"
          className="absolute left-5 top-12 z-20 inline-flex items-center gap-2 text-[14px] font-medium text-[#68736f] transition-colors hover:text-[#123b38] sm:left-8 sm:top-14 lg:left-10 lg:top-16"
        >
          <ArrowRight className="h-[17px] w-[17px]" />
          العودة إلى الموقع
        </Link>

        <div className="mx-auto max-w-[1180px] px-5 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-12 lg:pt-20">
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#dce5e1] bg-[#f5f8f7] px-4 py-2 text-[13px] font-semibold text-[#35645b]">
              <ShieldCheck className="h-4 w-4" />
              دفع إلكتروني آمن
            </span>
          </div>

          <h1 className="max-w-[720px] text-[32px] font-bold leading-[1.25] tracking-[-0.5px] text-[#17201e] sm:text-[38px]">
            اختر باقتك وادفع في ثوانٍ
          </h1>

          <p className="mt-4 max-w-[720px] text-[15px] leading-8 text-[#68736f] sm:text-[16px]">
            اختر دولتك، ومدة الحلقة، وعدد الحلقات شهريًا. ادفع بالبطاقة مباشرة، أو أرسل لنا الطلب عبر الواتساب.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_370px]">
          <div className="space-y-5">
            {/* الدولة */}
            <section className="rounded-[18px] border border-[#e4e9e6] bg-white p-5 shadow-[0_2px_12px_rgba(20,45,38,0.025)] sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4f1] text-[13px] font-bold text-[#286155]">
                  1
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-[#18221f]">دولتك</h2>
                  <p className="mt-0.5 text-[12px] text-[#89928f]">تظهر الأسعار بعملة بلدك</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {countries.map((country) => {
                  const active = selectedCountryId === country.id;
                  return (
                    <button
                      key={country.id}
                      type="button"
                      onClick={() => setSelectedCountryId(country.id)}
                      className={`relative flex min-h-[70px] items-center gap-3 rounded-[13px] border px-3 py-3 text-right transition-all duration-200 ${
                        active
                          ? "border-[#8eb5aa] bg-[#f3f8f6] shadow-[0_2px_8px_rgba(35,91,79,0.06)]"
                          : "border-[#e7ebe9] bg-white hover:border-[#c8d8d3] hover:bg-[#fafcfb]"
                      }`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#e3e8e6] bg-[#f7f9f8] shadow-sm">
                        <img
                          src={`https://flagcdn.com/w80/${country.flag}.png`}
                          alt={`علم ${country.name}`}
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className={`block truncate text-[13px] font-semibold ${active ? "text-[#174d43]" : "text-[#37433f]"}`}>
                          {country.name}
                        </span>
                        <span className="mt-0.5 block truncate text-[10px] text-[#969f9c]">
                          {country.currency}
                        </span>
                      </span>
                      {active && (
                        <span className="absolute left-2 top-2 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#2d6b5e] text-white">
                          <Check className="h-[10px] w-[10px]" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* مدة الحلقة */}
            <section className="rounded-[18px] border border-[#e4e9e6] bg-white p-5 shadow-[0_2px_12px_rgba(20,45,38,0.025)] sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4f1] text-[13px] font-bold text-[#286155]">
                  2
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-[#18221f]">مدة الحلقة</h2>
                  <p className="mt-0.5 text-[12px] text-[#89928f]">كم دقيقة تستغرق الحلقة الواحدة</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {durations.map((duration) => {
                  const active = selectedDuration === duration;
                  return (
                    <button
                      key={duration}
                      type="button"
                      onClick={() => setSelectedDuration(duration)}
                      className={`relative h-[76px] rounded-[13px] border transition-all duration-200 ${
                        active
                          ? "border-[#8eb5aa] bg-[#f3f8f6] shadow-[0_2px_8px_rgba(35,91,79,0.06)]"
                          : "border-[#e7ebe9] bg-white hover:border-[#c8d8d3]"
                      }`}
                    >
                      <span className={`block text-[20px] font-bold ${active ? "text-[#1e5b4e]" : "text-[#313b38]"}`}>
                        {duration}
                      </span>
                      <span className="mt-1 block text-[11px] text-[#8b9591]">دقيقة</span>
                      {active && (
                        <span className="absolute bottom-2 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-[#2d6b5e]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* عدد الحلقات */}
            <section className="rounded-[18px] border border-[#e4e9e6] bg-white p-5 shadow-[0_2px_12px_rgba(20,45,38,0.025)] sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4f1] text-[13px] font-bold text-[#286155]">
                  3
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-[#18221f]">عدد الحلقات شهريًا</h2>
                  <p className="mt-0.5 text-[12px] text-[#89928f]">اختر الباقة التي تناسب جدولك</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                {lessonCounts.map((count) => {
                  const active = selectedLessonCount === count;
                  const price = selectedCountry.prices[selectedDuration][count];

                  return (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setSelectedLessonCount(count)}
                      className={`relative min-h-[142px] overflow-hidden rounded-[14px] border p-4 text-right transition-all duration-200 ${
                        active
                          ? "border-[#8eb5aa] bg-[#f3f8f6] shadow-[0_2px_8px_rgba(35,91,79,0.06)]"
                          : "border-[#e7ebe9] bg-white hover:border-[#c8d8d3]"
                      }`}
                    >
                      {count === 16 && (
                        <span className="absolute left-3 top-3 rounded-full bg-[#edf4f1] px-2.5 py-1 text-[9px] font-bold text-[#286155]">
                          الأوفر
                        </span>
                      )}
                      {active && (
                        <span className="absolute right-3 top-3 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#2d6b5e] text-white">
                          <Check className="h-[10px] w-[10px]" />
                        </span>
                      )}
                      <div className="pt-5">
                        <div className={`text-[13px] font-bold ${active ? "text-[#174d43]" : "text-[#36423e]"}`}>
                          {count} حلقة شهريًا
                        </div>
                        <div className="mt-3 flex items-baseline gap-1">
                          <span className="text-[23px] font-bold text-[#17201e]">
                            {formatNumber(price)}
                          </span>
                          <span className="text-[11px] text-[#858f8b]">
                            {selectedCountry.currency}
                          </span>
                        </div>
                        <div className="mt-2 border-t border-[#e8edeb] pt-2 text-[10px] text-[#8b9491]">
                          {formatNumber(price / count)} {selectedCountry.currency} للحلقة الواحدة
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* الجانب الأيسر - الملخص والزرار */}
          <aside className="lg:sticky lg:top-5">
            <div className="rounded-[18px] border border-[#e4e9e6] bg-white shadow-[0_3px_15px_rgba(20,45,38,0.035)]">
              <div className="border-b border-[#edf0ef] px-5 py-5">
                <h2 className="text-[17px] font-bold text-[#18221f]">ملخص الطلب</h2>
              </div>

              <div className="px-5">
                <div className="flex items-center justify-between border-b border-[#edf0ef] py-4">
                  <div>
                    <div className="text-[11px] text-[#929b98]">الدولة</div>
                    <div className="mt-1 text-[13px] font-semibold text-[#303b37]">
                      {selectedCountry.name}
                    </div>
                  </div>
                  <span className="flex h-10 w-10 overflow-hidden rounded-full border border-[#e3e8e6] bg-[#f7f9f8]">
                    <img
                      src={`https://flagcdn.com/w80/${selectedCountry.flag}.png`}
                      alt={`علم ${selectedCountry.name}`}
                      className="h-full w-full object-cover"
                    />
                  </span>
                </div>

                <div className="border-b border-[#edf0ef] py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#929b98]">الباقة</span>
                    <span className="text-[12px] font-semibold text-[#303b37]">
                      {selectedLessonCount} حلقة
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-[#929b98]">مدة الحلقة</span>
                    <span className="text-[12px] font-semibold text-[#303b37]">
                      {selectedDuration} دقيقة
                    </span>
                  </div>
                </div>

                <div className="border-b border-[#edf0ef] py-5">
                  <div className="text-[11px] text-[#929b98]">الإجمالي الشهري</div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-[30px] font-bold tracking-tight text-[#173f38]">
                      {formatNumber(monthlyTotal)}
                    </span>
                    <span className="text-[12px] text-[#7f8985]">
                      {selectedCountry.currency}
                    </span>
                  </div>
                  <div className="mt-1 text-[10px] text-[#969f9c]">
                    {formatNumber(pricePerLesson)} {selectedCountry.currency} للحلقة الواحدة
                  </div>
                </div>

                <div className="py-5">
                  <h3 className="mb-3 text-[14px] font-bold text-[#303b37]">بياناتك</h3>
                  <div className="space-y-2.5">
                    <div className="relative">
                      <User className="pointer-events-none absolute right-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[#9aa29f]" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="الاسم الكامل (اختياري)"
                        className="h-[46px] w-full rounded-[10px] border border-[#e2e2e5] bg-white pr-9 pl-3 text-[12px] text-[#333] outline-none transition focus:border-[#8eb5aa]"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute right-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[#9aa29f]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="البريد الإلكتروني (اختياري)"
                        className="h-[46px] w-full rounded-[10px] border border-[#e2e2e5] bg-white pr-9 pl-3 text-[12px] text-[#333] outline-none transition focus:border-[#8eb5aa]"
                      />
                    </div>
                  </div>
                </div>

                {/* أزرار الإجراءات */}
                <div className="space-y-2.5 pb-5">
                  {/* الخيار الأول: تحويل عبر دالة JavaScript */}
                  <button
                    type="button"
                    onClick={handlePayment}
                    className="flex h-[47px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#286155] px-4 text-[12px] font-bold text-white transition hover:bg-[#214f47] active:scale-[0.99]"
                  >
                    <ShieldCheck className="h-[16px] w-[16px]" />
                    ادفع {formatNumber(monthlyTotal)} {selectedCountry.currency}
                  </button>

                  {/* الخيار الثاني: يمكنك استبداله بـ رابط مباشر إذا أردت فتح نافذة جديدة */}
                  {/*
                  <a
                    href="https://example.com/pay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[47px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#286155] px-4 text-[12px] font-bold text-white transition hover:bg-[#214f47]"
                  >
                    <ShieldCheck className="h-[16px] w-[16px]" />
                    ادفع {formatNumber(monthlyTotal)} {selectedCountry.currency}
                  </a>
                  */}

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex h-[47px] w-full items-center justify-center gap-2 rounded-[10px] border border-[#d9e1de] bg-white px-4 text-[12px] font-semibold text-[#286155] transition hover:border-[#9ebbb3] hover:bg-[#f7faf9] active:scale-[0.99]"
                  >
                    <MessageCircle className="h-[16px] w-[16px]" />
                    أرسل رابط الدفع عبر الواتساب
                  </button>
                </div>

                <div className="flex gap-2.5 border-t border-[#edf0ef] py-4">
                  <ShieldCheck className="mt-0.5 h-[17px] w-[17px] shrink-0 text-[#6c8d84]" />
                  <p className="text-[10px] leading-5 text-[#8b9491]">
                    دفع آمن بالبطاقة عبر بوابة الدفع. لا نطّلع على بيانات بطاقتك إطلاقًا.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function formatNumber(value: number) {
  return Number.isInteger(value)
    ? value.toString()
    : value.toFixed(2).replace(/\.?0+$/, "");
} 