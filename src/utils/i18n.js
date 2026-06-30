export const LOCALES = {
  en: { code: "en", dir: "ltr", label: "English", shortLabel: "EN" },
  ar: { code: "ar", dir: "rtl", label: "العربية", shortLabel: "ع" },
};

export const isArabic = (locale) => locale === "ar";

export function splitLocalePath(pathname = "/") {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (normalized === "/ar") return { locale: "ar", path: "/" };
  if (normalized.startsWith("/ar/")) {
    return { locale: "ar", path: normalized.replace(/^\/ar/, "") || "/" };
  }
  return { locale: "en", path: normalized };
}

export function localizedPath(path, locale) {
  if (!path) return path;
  if (path.startsWith("http") || path.startsWith("mailto:")) return path;
  if (path.startsWith("#")) return path;

  const clean = path === "/" ? "/" : path.replace(/^\/ar(?=\/|$)/, "");
  if (locale === "ar") return clean === "/" ? "/ar" : `/ar${clean}`;
  return clean || "/";
}

export const commonCopy = {
  en: {
    startFreeTrial: "Start Free Trial",
    bookDemo: "Book a Demo",
    login: "Login",
    subscribe: "Subscribe",
    backToBlog: "Back to Blog",
    readArticle: "Read article",
  },
  ar: {
    startFreeTrial: "ابدأ التجربة المجانية",
    bookDemo: "احجز عرضا توضيحيا",
    login: "تسجيل الدخول",
    subscribe: "اشترك الآن",
    backToBlog: "العودة إلى المدونة",
    readArticle: "قراءة المقال",
  },
};

export const navCopy = {
  en: [
    { label: "Home", href: "/" },
    { label: "Product", href: "#product-communication", sectionId: "product-communication" },
    { label: "Pricing", href: "#pricing", sectionId: "pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", isContact: true },
  ],
  ar: [
    { label: "الرئيسية", href: "/" },
    { label: "المنتج", href: "#product-communication", sectionId: "product-communication" },
    { label: "الأسعار", href: "#pricing", sectionId: "pricing" },
    { label: "المدونة", href: "/blog" },
    { label: "تواصل معنا", isContact: true },
  ],
};

export const landingCopy = {
  en: {
    hero: {
      line1: "Train With AI.",
      line2: "Speak",
      accent: "With Confidence.",
      subtitle:
        "Practice real business scenarios with AI roleplay, get instant feedback, and level up with expert coaching built for ambitious professionals.",
      trusted: "Trusted by",
      trustedCount: "12,000+ professionals",
    },
    scenarios: {
      badge: "AI Roleplay · 3 Scenarios",
      title: "Real scenarios.",
      accent: "Real feedback.",
      subtitle:
        "Pick a scenario, practice with your AI coach, and get instant actionable feedback on every session.",
      practiceWith: "Practice with",
      goal: "Goal",
      achieved: "Achieved",
      practiceNow: "Practice Now",
      playing: "PLAYING",
      items: [
        {
          category: "Sales",
          label: "Win The Sales Call",
          title: "Budget Objection Handling",
          coach: { name: "Sherif", type: "Sales Call", lang: "Arabic" },
        },
        {
          category: "Career Development",
          label: "Land Your Next Job Interview",
          title: "Land Your Next Job Interview",
          coach: { name: "Iman", type: "Interview", lang: "English" },
        },
        {
          category: "Sales",
          label: "Unexpected Cold Call",
          title: "Unexpected Cold Call",
          coach: { name: "Sherif", type: "Pitch", lang: "Arabic" },
        },
      ],
    },
    programs: {
      title: "Transform The Way You",
      accent: "Communicate",
      cta: "Start Free Trial",
      slides: [
        ["Practice Solo", "Record yourself. Get instant feedback and AI coaching."],
        ["Practice with AI", "Practice real business scenarios with AI that challenges, objects, and engages you."],
        ["Get Instant Feedback", "Science-based insights on your voice, body language, word choice, and conversation."],
        ["Customize Your Conversations", "Build scenarios around your industry, clients, and real work challenges."],
        ["Start a Guided Learning Journey", "Learn from international coaches through AI powered structured paths."],
      ],
    },
    video: {
      badge: "See How It Works",
      title: "From Practice to Performance",
      accent: "AI Practice Partner",
      stats: [
        ["10K+", "Active Users"],
        ["95%", "Satisfaction Rate"],
        ["50+", "AI Scenarios"],
      ],
    },
    conversations: {
      badge: "50+ Real-World Scenarios",
      title: "Every Important Conversation",
      accent: "Covered",
      platformTitle: "A Training Platform",
      platformAccent: "Optimized For Arabic",
      watermark: "ع",
      scenarios: [
        ["Sales", "Turn Cold Calls Into Closed Deals", "Handle objections, close with confidence, and navigate pricing conversations without hesitation. Practice the call before you are on the call."],
        ["Career Development", "Ace The Interview. Land The Job.", "Walk into every interview already knowing how to handle the hard questions. Own the negotiation before it begins."],
        ["Leadership", "Be The Manager Your Team Needs", "Deliver feedback, align your team, and present to the board with the kind of presence that earns trust instantly."],
        ["Customer Care", "Handle Angry Customers. Build Loyal Ones.", "Train your team to de-escalate, empathize, and retain customers even in the most challenging service situations."],
      ],
      stats: [
        ["96%", "User Satisfaction"],
        ["10+", "Arabic Dialects"],
        ["100K+", "Possible Scenarios"],
      ],
    },
    testimonials: {
      badge: "Success Stories",
      title: "Real People.",
      accent: "Real Results.",
      watch: "Watch Story",
      expand: "Click to expand",
      closeHint: "Press ESC to close",
    },
    cases: {
      badge: "Real Results",
      titleAccent: "Case",
      title: "Studies",
      subtitle: "Real examples of how we solve complex challenges and deliver results.",
      slides: [
        {
          category: "INTERVIEW & CAREER READINESS",
          imageTitle: "Walk In Like\nYou Belong",
          title: "Career Readiness Training for BUE Alumni with Speekr",
          stats: [
            ["700+", "Interview rehearsal sessions completed"],
            ["85%", "Reached interview-ready performance within 1-2 weeks"],
            ["9/10", "Active students credit Speekr practice as a factor in landing their job"],
          ],
        },
        {
          category: "COMMUNICATION & PRESENTATION",
          imageTitle: "Speak With\nAuthority",
          title: "Presentation Skills Training, Powered by Speekr AI",
          stats: [
            ["95%", "Measurable improvement from first to third practice session"],
            ["85%", "Trainee return rate across programs"],
            ["8x", "Training value delivered per employee"],
          ],
        },
      ],
    },
  },
  ar: {
    hero: {
      line1: "تدرّب بالذكاء الاصطناعي.",
      line2: "وتحدث",
      accent: "بثقة واحتراف.",
      subtitle:
        "تدرّب على مواقف عمل واقعية عبر محاكاة ذكية، واحصل على ملاحظات فورية وتوجيه احترافي مصمم للمهنيين الطموحين.",
      trusted: "يثق بنا",
      trustedCount: "أكثر من 12,000 مهني",
    },
    scenarios: {
      badge: "محاكاة ذكية · 3 سيناريوهات",
      title: "مواقف واقعية.",
      accent: "ملاحظات دقيقة.",
      subtitle:
        "اختر السيناريو المناسب، تدرّب مع مدربك الذكي، واحصل بعد كل جلسة على توصيات عملية قابلة للتطبيق.",
      practiceWith: "تدرّب مع",
      goal: "نسبة",
      achieved: "الإنجاز",
      practiceNow: "ابدأ التدريب",
      playing: "قيد التشغيل",
      items: [
        {
          category: "المبيعات",
          label: "اكسب مكالمة البيع",
          title: "التعامل مع اعتراضات الميزانية",
          coach: { name: "شريف", type: "مكالمة بيع", lang: "العربية" },
        },
        {
          category: "التطور المهني",
          label: "استعد لمقابلتك القادمة",
          title: "التحضير لمقابلة العمل",
          coach: { name: "إيمان", type: "مقابلة", lang: "الإنجليزية" },
        },
        {
          category: "المبيعات",
          label: "مكالمة باردة مفاجئة",
          title: "مكالمة باردة مفاجئة",
          coach: { name: "شريف", type: "عرض بيع", lang: "العربية" },
        },
      ],
    },
    programs: {
      title: "طوّر طريقة",
      accent: "تواصلك",
      cta: "ابدأ التجربة المجانية",
      slides: [
        ["تدرّب بمفردك", "سجّل أداءك واحصل فورا على ملاحظات وتوجيه ذكي يرفع جودة تواصلك."],
        ["تدرّب مع الذكاء الاصطناعي", "خض مواقف عمل واقعية مع ذكاء اصطناعي يحاورك ويتحداك ويطرح اعتراضات فعلية."],
        ["احصل على ملاحظات فورية", "رؤى مبنية على أسس علمية حول الصوت، لغة الجسد، اختيار الكلمات، وبنية الحوار."],
        ["صمّم محادثاتك الخاصة", "أنشئ سيناريوهات مرتبطة بمجالك وعملائك والتحديات التي تواجهها يوميا."],
        ["ابدأ رحلة تعلم موجهة", "تعلّم عبر مسارات منظمة مدعومة بالذكاء الاصطناعي وخبرات مدربين دوليين."],
      ],
    },
    video: {
      badge: "شاهد آلية العمل",
      title: "من التدريب إلى الأداء",
      accent: "شريكك الذكي للممارسة",
      stats: [
        ["10K+", "مستخدم نشط"],
        ["95%", "معدل الرضا"],
        ["50+", "سيناريو ذكي"],
      ],
    },
    conversations: {
      badge: "أكثر من 50 سيناريو واقعيا",
      title: "كل محادثة مهنية مهمة",
      accent: "مغطاة",
      platformTitle: "منصة تدريب",
      platformAccent: "مصممة للعربية",
      watermark: "ع",
      scenarios: [
        ["المبيعات", "حوّل المكالمات الباردة إلى فرص مغلقة", "تدرّب على الاعتراضات، وأنهِ المحادثات بثقة، وأدر نقاشات الأسعار دون تردد قبل أن تدخل المكالمة الحقيقية."],
        ["التطور المهني", "أتقن المقابلة واحصل على الفرصة", "ادخل كل مقابلة وأنت مستعد للأسئلة الصعبة، ولديك وضوح في التفاوض وعرض قيمتك المهنية."],
        ["القيادة", "كن القائد الذي يحتاجه فريقك", "قدّم الملاحظات، ونسّق توجه الفريق، واعرض أمام الإدارة بحضور مهني يبني الثقة بسرعة."],
        ["خدمة العملاء", "تعامل مع العملاء الغاضبين واصنع الولاء", "درّب فريقك على التهدئة والتعاطف والاحتفاظ بالعملاء حتى في أكثر مواقف الخدمة حساسية."],
      ],
      stats: [
        ["96%", "رضا المستخدمين"],
        ["10+", "لهجات عربية"],
        ["100K+", "سيناريو محتمل"],
      ],
    },
    testimonials: {
      badge: "قصص نجاح",
      title: "أشخاص حقيقيون.",
      accent: "نتائج ملموسة.",
      watch: "شاهد القصة",
      expand: "انقر للتكبير",
      closeHint: "اضغط ESC للإغلاق",
    },
    cases: {
      badge: "نتائج واقعية",
      titleAccent: "دراسات",
      title: "حالة",
      subtitle: "أمثلة عملية على كيفية معالجة تحديات تواصل معقدة وتحويلها إلى نتائج قابلة للقياس.",
      slides: [
        {
          category: "المقابلات والاستعداد المهني",
          imageTitle: "ادخل بثقة\nكما لو أن المكان لك",
          title: "تدريب الاستعداد المهني لخريجي BUE باستخدام Speekr",
          stats: [
            ["700+", "جلسة تدريب على المقابلات تم تنفيذها"],
            ["85%", "وصلوا إلى جاهزية المقابلة خلال أسبوع إلى أسبوعين"],
            ["9/10", "من الطلاب النشطين عدّوا التدريب عاملا مؤثرا في الحصول على وظيفة"],
          ],
        },
        {
          category: "التواصل والعروض التقديمية",
          imageTitle: "تحدث\nبحضور وسلطة",
          title: "تدريب مهارات العرض مدعوم بذكاء Speekr الاصطناعي",
          stats: [
            ["95%", "تحسن قابل للقياس بين الجلسة الأولى والثالثة"],
            ["85%", "معدل عودة المتدربين عبر البرامج"],
            ["8x", "قيمة تدريبية مقدمة لكل موظف"],
          ],
        },
      ],
    },
  },
};

export const pricingCopy = {
  en: {
    badge: "Simple Pricing",
    title: "Simple Plans.",
    accent: "Serious Results.",
    subtitle: "Speekr for professional individuals looking to practice communication, presentation, and soft-skills.",
    monthly: "Monthly",
    annual: "Annually",
    save14: "Save 14%",
    save17: "Save 17%",
    perMonth: "per month",
    perYear: "per year",
    perUserMonth: "per user / month",
    perUserYear: "per user / year",
    forIndividuals: "For Individuals",
    mostPopular: "Most Popular",
    starter: "Speekr Starter",
    pro: "Speekr Pro Unlimited",
    starterFeatures: [
      "3 Monthly Rotating Learning Journeys",
      "Unlimited Free Form Practice",
      "3 AI Roleplay Sessions per Week",
      "Instant AI Coach Feedback",
      "Custom Scenario & Persona Builder",
      "Live Community Practice",
    ],
    proFeatures: [
      "Full Access to Learning Journeys Catalogue",
      "Unlimited Free Form Practice",
      "Unlimited AI Roleplay Practice Sessions",
      "Instant AI Coach Feedback",
      "Custom Scenario & Persona Builder",
      "Live Community Practice",
    ],
    teamBadge: "Team Plans",
    teamTitle: "The",
    teamAccent: "Whole Team",
    teamSubtitle: "Equip your people-facing teams with the tools needed to excel in every critical moment.",
    teams: "Teams",
    enterprise: "Enterprise",
    speekrTeams: "Speekr Teams",
    speekrEnterprise: "Speekr Enterprise",
    teamAudience: "Teams of 3-15 users",
    enterpriseAudience: "Large-scale, corporate deployment",
    custom: "Custom",
    tailored: "Tailored to your organization",
    noteAllUsers: "for all users",
    noteMonthly: "monthly",
    teamFeatures: [
      ["Full Access to Learning Journey Catalog", "for all users"],
      ["5 AI Roleplay Sessions per User", "monthly"],
      ["1:1 AI Coaching & Feedback"],
      ["Custom Scenario & Persona Builder"],
      ["Custom Dashboards"],
    ],
    enterpriseFeatures: [
      ["Full Access to Learning Journey Catalog", "for all users"],
      ["Unlimited Custom Scenarios"],
      ["Custom Dashboards"],
      ["Custom Coaching and Feedback"],
      ["Dedicated Account Manager"],
      ["Advanced Security & SSO"],
    ],
  },
  ar: {
    badge: "أسعار واضحة",
    title: "خطط بسيطة.",
    accent: "نتائج جادة.",
    subtitle: "Speekr للمهنيين الذين يريدون تطوير التواصل والعروض ومهارات العمل الأساسية.",
    monthly: "شهريا",
    annual: "سنويا",
    save14: "وفّر 14%",
    save17: "وفّر 17%",
    perMonth: "شهريا",
    perYear: "سنويا",
    perUserMonth: "لكل مستخدم / شهريا",
    perUserYear: "لكل مستخدم / سنويا",
    forIndividuals: "للأفراد",
    mostPopular: "الأكثر اختيارا",
    starter: "Speekr Starter",
    pro: "Speekr Pro Unlimited",
    starterFeatures: [
      "3 رحلات تعلم متجددة شهريا",
      "تدريب حر غير محدود",
      "3 جلسات محاكاة ذكية أسبوعيا",
      "ملاحظات فورية من المدرب الذكي",
      "منشئ سيناريوهات وشخصيات مخصص",
      "تدريب مجتمعي مباشر",
    ],
    proFeatures: [
      "وصول كامل إلى كتالوج رحلات التعلم",
      "تدريب حر غير محدود",
      "جلسات محاكاة ذكية غير محدودة",
      "ملاحظات فورية من المدرب الذكي",
      "منشئ سيناريوهات وشخصيات مخصص",
      "تدريب مجتمعي مباشر",
    ],
    teamBadge: "خطط الفرق",
    teamTitle: "طوّر",
    teamAccent: "الفريق بالكامل",
    teamSubtitle: "امنح فرقك التي تتعامل مع العملاء والأطراف الخارجية أدوات التدريب اللازمة للتميز في كل لحظة حاسمة.",
    teams: "للفرق",
    enterprise: "للمنشآت",
    speekrTeams: "Speekr Teams",
    speekrEnterprise: "Speekr Enterprise",
    teamAudience: "فرق من 3 إلى 15 مستخدما",
    enterpriseAudience: "نشر مؤسسي واسع النطاق",
    custom: "حسب الطلب",
    tailored: "مصممة حسب احتياجات منظمتك",
    noteAllUsers: "لكل المستخدمين",
    noteMonthly: "شهريا",
    teamFeatures: [
      ["وصول كامل إلى كتالوج رحلات التعلم", "لكل المستخدمين"],
      ["5 جلسات محاكاة ذكية لكل مستخدم", "شهريا"],
      ["تدريب وملاحظات ذكية فردية"],
      ["منشئ سيناريوهات وشخصيات مخصص"],
      ["لوحات متابعة مخصصة"],
    ],
    enterpriseFeatures: [
      ["وصول كامل إلى كتالوج رحلات التعلم", "لكل المستخدمين"],
      ["سيناريوهات مخصصة غير محدودة"],
      ["لوحات متابعة مخصصة"],
      ["تدريب وملاحظات مخصصة"],
      ["مدير حساب مخصص"],
      ["أمان متقدم وتسجيل دخول موحد SSO"],
    ],
  },
};
