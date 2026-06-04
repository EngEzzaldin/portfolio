const INITIAL_DATA = {
  basics: {
    nameAr: 'عز الدين خالد عبيد',
    nameEn: 'Ezzaldin Khaild Obaid',
    titleAr: 'مهندس برمجيات | أخصائي ذكاء اصطناعي | مطور Full-stack',
    titleEn: 'Software Engineer | AI Specialist | Full-stack Developer',
    subtitleAr: 'مهندس تقنية معلومات (IT) وشغوف بالابتكار التقني، أجمع بين مهارات البرمجة المتقدمة وتحليل البيانات والذكاء الاصطناعي. متخصص في بناء أنظمة ERP المتكاملة وتطبيقات الرؤية الحاسوبية والويب.',
    subtitleEn: 'Information Technology (IT) Engineer passionate about technical innovation, combining advanced programming, data analysis, and AI. Specialized in building integrated ERP systems, computer vision applications, and web solutions.',
    stats: {
      projects: '15+',
      experience: '4+',
      models: '10+',
      commits: '200'
    }
  },
  about: {
    bioAr: 'مهندس تقنية معلومات (IT) وشغوف بالابتكار التقني، أجمع بين مهارات البرمجة المتقدمة وتحليل البيانات والذكاء الاصطناعي. متخصص في بناء أنظمة الويب المتكاملة وتطبيقات الجوال التي تحل مشكلات واقعية، مع خبرة عملية في تطوير أنظمة ERP المحاسبية وأنظمة المرور الذكية. أتميز بالقدرة على القيادة، العمل الجماعي، وتحويل المتطلبات المعقدة إلى حلول تقنية بسيطة وفعالة.',
    bioEn: 'Information Technology (IT) Engineer passionate about technical innovation, combining advanced programming, data analysis, and AI. Specialized in building integrated web systems and mobile applications that solve real-world problems, with hands-on experience in developing accounting ERP systems and smart traffic systems. Known for leadership, teamwork, and turning complex requirements into simple, effective technical solutions.',
    degreeAr: 'مهندس تقنية معلومات (IT)',
    degreeEn: 'Engineer in Information Technology (IT)',
    focusAr: 'الأنظمة المتكاملة، ERP، الرؤية الحاسوبية، وتطبيقات الذكاء الاصطناعي',
    focusEn: 'Integrated Systems, ERP, Computer Vision, and AI Applications'
  },
  skills: [
    { name: 'Laravel & Filament v3', proficiency: 92, category: 'backend' },
    { name: 'Tailwind CSS', proficiency: 90, category: 'backend' },
    { name: 'Flutter (Mobile & Web)', proficiency: 85, category: 'backend' },
    { name: 'Python & Data Analysis', proficiency: 90, category: 'languages' },
    { name: 'Machine Learning & Deep Learning', proficiency: 88, category: 'ai' },
    { name: 'Computer Vision (YOLO, OpenCV, OCR)', proficiency: 86, category: 'ai' },
    { name: 'NLP & LLM Integration', proficiency: 82, category: 'ai' },
    { name: 'SQL Server, SQLite', proficiency: 88, category: 'languages' },
    { name: 'Power BI & Excel', proficiency: 82, category: 'tools' },
    { name: 'HTML / CSS / JavaScript', proficiency: 90, category: 'languages' },
    { name: 'RESTful API Security', proficiency: 85, category: 'backend' },
    { name: 'ERP Systems & Accounting Logic', proficiency: 87, category: 'tools' }
  ],
  projects: [
    {
      id: 'erp-system',
      titleAr: 'نظام ERP لإدارة الموارد الذاتية',
      titleEn: 'Enterprise ERP System',
      descAr: 'نظام ERP متكامل ومحاسبي هجين يربط بين إدارة علاقات العملاء (CRM) والدليل المحاسبي الهرمي لضمان التوازن المالي الآلي. يشمل أتمتة الفوترة، إدارة العقود والأقساط، ومحرك تنبيهات ذكي عبر واتساب ورسائل نصية.',
      descEn: 'A hybrid integrated ERP and accounting system linking CRM with a hierarchical chart of accounts for automated financial balance. Includes billing automation, contract & installment management, and a smart notification engine via WhatsApp and SMS.',
      tags: ['Laravel', 'Filament v3', 'MySQL', 'Tailwind CSS'],
      glow: 'indigo',
      github: 'https://github.com/kzaldyn',
      demo: '#'
    },
    {
      id: 'traffic-system',
      titleAr: 'نظام إدارة المخالفات الذكي',
      titleEn: 'Smart Traffic Violation System',
      descAr: 'حل مبتكر لتسهيل خدمات المرور عبر تطبيق يوفر بلاغات فورية وتجديد رخص القيادة. يدمج تقنيات الذكاء الاصطناعي لتصوير المركبات واستخراج أرقام اللوحات تلقائياً (OCR) مع توثيق الحوادث إلكترونياً.',
      descEn: 'An innovative solution streamlining traffic services through an app providing instant reports and license renewal. Integrates AI for vehicle imaging and automatic license plate extraction (OCR) with electronic accident documentation.',
      tags: ['Flutter', 'AI', 'OCR', 'Laravel'],
      glow: 'cyan',
      github: 'https://github.com/kzaldyn',
      demo: '#'
    },
    {
      id: 'corestock-ledger',
      titleAr: 'CoreStock Ledger - لوجستيات المؤسسات',
      titleEn: 'CoreStock Ledger - Enterprise Logistics',
      descAr: 'منظومة مخازن متكاملة موزعة صممت لخدمة قطاع الأعمال، تشتمل على قيود عملياتية فورية، معيرات أمان حرجة لتبلغ الإخطارات، وتدقيق تدفق البائعين.',
      descEn: 'A complete distributed inventory software built for corporate scale, incorporating instant transaction ledger commits, critical safety parameters, and live audits.',
      tags: ['Node.js', 'Express', 'React', 'PostgreSQL'],
      glow: 'emerald',
      github: 'https://github.com/kzaldyn',
      demo: '#'
    }
  ],
  experience: [
    {
      id: 'ibdaa-soft',
      companyAr: 'شركة إبداع سوفت لخدمات الأنظمة',
      companyEn: 'Ibdaa Soft for System Services',
      roleAr: 'محاسب ومندوب دعم فني - مطور أنظمة',
      roleEn: 'Accountant & Technical Support - Systems Developer',
      period: '2024 - 2025',
      periodEn: '2024 - 2025',
      descAr: 'عملت كمحاسب ومندوب دعم فني لدى شركة إبداع سوفت، واكتسبت خبرة في التعامل مع الأنظمة المحاسبية وبرمجيات المؤسسات. ساهمت في تطوير وصيانة الأنظمة البرمجية وتقديم الدعم الفني للعملاء.',
      descEn: 'Worked as an accountant and technical support representative at Ibdaa Soft, gaining experience with accounting systems and enterprise software. Contributed to software development and maintenance, providing technical support to clients.'
    },
    {
      id: 'freelance-dev',
      companyAr: 'حلول البرمجيات والذكاء الاصطناعي - مستقل',
      companyEn: 'Software & AI Solutions - Freelance',
      roleAr: 'مطور Full-stack ومستشار تقني',
      roleEn: 'Full-stack Developer & Technical Consultant',
      period: '2023 - الحالي',
      periodEn: '2023 - Present',
      descAr: 'أطور حلول برمجية متكاملة تشمل أنظمة ERP محاسبية، تطبيقات جوال، وأنظمة رؤية حاسوبية. أدمج تقنيات الذكاء الاصطناعي مثل YOLO و OCR في تطبيقات عملية لحل مشكلات واقعية.',
      descEn: 'Developing integrated software solutions including accounting ERP systems, mobile applications, and computer vision systems. Integrating AI technologies like YOLO and OCR into practical applications to solve real-world problems.'
    }
  ],
  roadmap: [
    {
      id: 'erp-adv',
      titleAr: 'تطوير نظام ERP متكامل مع AI',
      titleEn: 'Advanced ERP System with AI',
      statusAr: 'فعال وتطبيقي',
      statusEn: 'Active Deployment',
      descAr: 'تطوير وبناء نظام ERP متكامل ومحاسبي مع دمج تقنيات الذكاء الاصطناعي للتنبؤ المالي وأتمتة القيود المحاسبية.',
      descEn: 'Developing and building an integrated ERP and accounting system with AI integration for financial forecasting and automated journal entries.'
    },
    {
      id: 'cv-adv',
      titleAr: 'أنظمة رؤية حاسوبية متقدمة',
      titleEn: 'Advanced Computer Vision Systems',
      statusAr: 'قيد التعلم والتدريب',
      statusEn: 'Active Learning',
      descAr: 'تعمق في تقنيات YOLO المتقدمة وتطبيقات OCR للتعرف على اللوحات والوثائق في البيئات المعقدة.',
      descEn: 'Deepening in advanced YOLO techniques and OCR applications for license plate and document recognition in complex environments.'
    },
    {
      id: 'flutter-adv',
      titleAr: 'تطبيقات جوال ذكية',
      titleEn: 'Smart Mobile Applications',
      statusAr: 'بحث مستفيض ودراسة',
      statusEn: 'Deep Research',
      descAr: 'بناء تطبيقات جوال متكاملة باستخدام Flutter مع دمج الذكاء الاصطناعي لتحليل الصور والبيانات مباشرة على الجهاز.',
      descEn: 'Building integrated mobile applications using Flutter with on-device AI integration for image and data analysis.'
    }
  ],
  contact: {
    email: 'kzaldyn67@gmail.com',
    locationAr: 'إب، اليمن',
    locationEn: 'Ibb, Yemen',
    links: [
      { label: 'GitHub', url: 'https://github.com/kzaldyn', icon: '💻' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/kzaldyn', icon: '🔗' },
      { label: 'Phone', url: 'tel:+967777777777', icon: '📞' },
      { label: 'WhatsApp', url: 'https://wa.me/967777777777', icon: '💬' },
      { label: 'X / Twitter', url: 'https://twitter.com/kzaldyn', icon: '🐦' },
      { label: 'Telegram', url: 'https://t.me/kzaldyn', icon: '✈' },
      { label: 'Website', url: 'https://portfolio-virid-three-58.vercel.app', icon: '🌐' }
    ]
  },
  services: [
    {
      id: 'erp-dev',
      icon: '🏢',
      titleAr: 'أنظمة ERP محاسبية',
      titleEn: 'ERP & Accounting Systems',
      descAr: 'تطوير أنظمة ERP متكاملة مع إدارة علاقات العملاء (CRM)، الدليل المحاسبي الهرمي، وأتمتة الفوترة والعقود.',
      descEn: 'Developing integrated ERP systems with CRM, hierarchical chart of accounts, and automated billing & contract management.'
    },
    {
      id: 'cv-ai',
      icon: '👁',
      titleAr: 'الرؤية الحاسوبية والذكاء الاصطناعي',
      titleEn: 'Computer Vision & AI',
      descAr: 'حلول ذكاء اصطناعي تشمل كشف الأشياء (YOLO)، التعرف على النصوص (OCR)، وتصنيف الصور المباشر.',
      descEn: 'AI solutions including object detection (YOLO), text recognition (OCR), and real-time image classification.'
    },
    {
      id: 'fullstack-dev',
      icon: '🖥',
      titleAr: 'تطوير ويب Full-stack',
      titleEn: 'Full-stack Web Development',
      descAr: 'بناء تطبيقات ويب متكاملة باستخدام Laravel و Filament v3 و Tailwind CSS مع واجهات تفاعلية وأداء عالي.',
      descEn: 'Building complete web applications using Laravel, Filament v3, and Tailwind CSS with interactive UIs and high performance.'
    },
    {
      id: 'mobile-dev',
      icon: '📱',
      titleAr: 'تطبيقات جوال (Flutter)',
      titleEn: 'Mobile Applications (Flutter)',
      descAr: 'تطوير تطبيقات جوال متعددة المنصات باستخدام Flutter مع واجهات مستخدم عصرية وأداء سلس.',
      descEn: 'Cross-platform mobile application development using Flutter with modern UIs and smooth performance.'
    }
  ],
  gallery: [
    {
      id: 'gallery-1',
      imageUrl: 'https://placehold.co/800x600/1e51d8/ffffff?text=ERP+System',
      titleAr: 'نظام ERP محاسبي',
      titleEn: 'ERP Accounting System',
      descAr: 'نظام ERP متكامل مع CRM ومحرك أتمتة الفوترة والتنبيهات الذكية',
      descEn: 'Integrated ERP system with CRM, billing automation engine, and smart notifications'
    },
    {
      id: 'gallery-2',
      imageUrl: 'https://placehold.co/800x600/6366f1/ffffff?text=Traffic+System',
      titleAr: 'نظام إدارة المخالفات',
      titleEn: 'Traffic Violation System',
      descAr: 'تطبيق جوال لإدارة المخالفات المرورية مع تقنية OCR للوحات السيارات',
      descEn: 'Mobile app for traffic violation management with OCR license plate recognition'
    },
    {
      id: 'gallery-3',
      imageUrl: 'https://placehold.co/800x600/10b981/ffffff?text=CoreStock',
      titleAr: 'CoreStock Ledger',
      titleEn: 'CoreStock Ledger',
      descAr: 'منظومة مخازن ولوجستيات للمؤسسات',
      descEn: 'Enterprise inventory and logistics management system'
    }
  ]
};
