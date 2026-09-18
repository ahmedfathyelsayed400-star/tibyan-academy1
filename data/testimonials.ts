export interface TestimonialItem {
  id: number;
  name: {
    ar: string;
    en: string;
  };
  country: {
    ar: string;
    en: string;
  };
  message: {
    ar: string;
    en: string;
  };
  rating: number;
  displayLang: "ar" | "en";
}

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: {
      ar: "أحمد محمد",
      en: "Ahmed Mohamed",
    },
    country: {
      ar: "السعودية",
      en: "Saudi Arabia",
    },
    message: {
      ar: "تجربة رائعة، تعلمت قراءة القرآن بطريقة صحيحة مع متابعة مستمرة من المعلم.",
      en: "A wonderful experience. I improved my Quran recitation with continuous teacher support.",
    },
    rating: 5,
    displayLang: "ar" // سيظهر باللغة العربية في السلايدر
  },
  {
    id: 2,
    name: {
      ar: "فاطمة علي",
      en: "Fatima Ali",
    },
    country: {
      ar: "ألمانيا",
      en: "Germany",
    },
    message: {
      ar: "الأكاديمية تتميز بالتنظيم والمعلمين المتميزين، وأنصح بها للجميع.",
      en: "The academy is organized with excellent teachers. I highly recommend it.",
    },
    rating: 5,
    displayLang: "ar" // سيظهر باللغة العربية في السلايدر
  },
  {
    id: 3,
    name: {
      ar: "Youssef Khaled",
      en: "Youssef Khaled",
    },
    country: {
      ar: "مصر",
      en: "Egypt",
    },
    message: {
      ar: "استفدت كثيرًا من دورة التجويد وتحسن مستواي في التلاوة.",
      en: "Alhamdulillah, I benefited greatly from the Tajweed course and improved my recitation skills.",
    },
    rating: 5,
    displayLang: "en" // سيظهر باللغة الإنجليزية في السلايدر
  },
  {
    id: 4,
    name: {
      ar: "سارة عبدالله",
      en: "Sara Abdullah",
    },
    country: {
      ar: "الولايات المتحدة",
      en: "United States",
    },
    message: {
      ar: "طريقة التعليم سهلة ومناسبة حتى لمن يعيش خارج البلاد العربية.",
      en: "The teaching method is easy and suitable for students living abroad.",
    },
    rating: 5,
    displayLang: "ar" // سيظهر باللغة العربية في السلايدر
  },
  {
    id: 5,
    name: {
      ar: "نورة الفهد",
      en: "Noura Al-Fahad",
    },
    country: {
      ar: "قطر",
      en: "Qatar",
    },
    message: {
      ar: "ابنتي تنتظر الحصة بشغف كل يوم. الأسلوب محبب وآمن للأطفال والمعلمة رائعة في التعامل معها.",
      en: "My daughter looks forward to her class every day. The method is engaging and safe for kids.",
    },
    rating: 5,
    displayLang: "ar" // سيظهر باللغة العربية في السلايدر
  },
  {
    id: 6,
    name: {
      ar: "Sarah Jones",
      en: "Sarah Jones",
    },
    country: {
      ar: "بريطانيا",
      en: "United Kingdom",
    },
    message: {
      ar: "توفر الأكاديمية بيئة تعليمية رائعة وممتازة، والمعلمون مؤهلون وعلى مستوى عالٍ من الاحترافية.",
      en: "The academy provides a wonderful learning environment. The Quran teachers are highly qualified and professional.",
    },
    rating: 5,
    displayLang: "en" // سيظهر باللغة الإنجليزية في السلايدر
  }
];
