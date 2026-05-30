const INITIAL_DATA = {
  basics: {
    nameAr: 'eng. عز الدين خالد عبيد',
    nameEn: 'eng. Ezzaldin Khaild Obaid',
    titleAr: 'مهندس برمجيات وأخصائي ذكاء اصطناعي',
    titleEn: 'Software Engineer & AI Specialist',
    subtitleAr: 'سد الفجوة بين الأنظمة عالية الأداء وبنيات التعلم العميق الذكية. متخصص في الرؤية الحاسوبية، محركات التوليد المعزز بالاسترجاع (RAG) المخصصة، وتطوير الأنظمة المتكاملة.',
    subtitleEn: 'Bridging the gap between high-performance systems and intelligent deep learning architectures. Specialized in Computer Vision, bespoke RAG engines, and robust full-stack software development.',
    stats: {
      projects: '12+',
      experience: '4+',
      models: '8+',
      commits: '140'
    }
  },
  about: {
    bioAr: 'أنا مهندس برمجيات متفانٍ حاصل على درجة البكالوريوس في تقنية المعلومات (IT). يزدهر شغفي التقني عند تقاطع التعلم العميق مع بنيات الأنظمة الخلفية القوية. من خلال دمج البنية التحتية البرمجية مع الذكاء الاصطناعي، أقوم بهندسة قنوات برمجية قابلة للتوسع للكشف عن الكائنات بدقة عالية، وتصنيف البث المباشر للكاميرات، والبحث المقترن بالاسترجاع الذكي للمستندات بالمؤسسات (RAG). لقد كرست خبرتي كمطور أنظمة لبناء وتصميم شيفرات نظيفة، محسنة ومستدامة للتطوير.',
    bioEn: 'I am a dedicated Software Engineer holding a Bachelor\'s degree in Information Technology (IT). My technical journey thrives at the intersection of deep learning and robust backend software architecture. By merging system infrastructure with artificial intelligence, I engineer scalable pipelines for high-accuracy object detection, live camera feeds classification, and enterprise document contextual-search (RAG). My experience as a Systems Developer has instilled a strict discipline for writing clean, optimized, and maintainable code.',
    degreeAr: 'بكالوريوس تقنية معلومات (IT)',
    degreeEn: 'Bachelor of Information Technology (IT)',
    focusAr: 'الرؤية الحاسوبية وأنظمة التوليد المعزز بالاسترجاع المتقدم (RAG)',
    focusEn: 'Computer Vision & Advanced Retrieval-Augmented Generation (RAG) Systems'
  },
  skills: [
    { name: 'PyTorch & Deep Learning', proficiency: 88, category: 'ai' },
    { name: 'OpenCV (Computer Vision)', proficiency: 92, category: 'ai' },
    { name: 'YOLO Object Detection (v8/v10/v11)', proficiency: 90, category: 'ai' },
    { name: 'RAG & LLM Integration (LangChain)', proficiency: 86, category: 'ai' },
    { name: 'Python', proficiency: 95, category: 'languages' },
    { name: 'TypeScript / JavaScript', proficiency: 92, category: 'languages' },
    { name: 'SQL & Relational Logic', proficiency: 88, category: 'languages' },
    { name: 'C# / C++ Basics', proficiency: 75, category: 'languages' },
    { name: 'Node.js & Express', proficiency: 93, category: 'backend' },
    { name: 'FastAPI / Flask', proficiency: 88, category: 'backend' },
    { name: 'React (Modern hooks & state)', proficiency: 90, category: 'backend' },
    { name: 'RESTful API Security', proficiency: 87, category: 'backend' },
    { name: 'Docker & Containerization', proficiency: 84, category: 'tools' },
    { name: 'Git, GitHub CI/CD Actions', proficiency: 91, category: 'tools' },
    { name: 'Linux Administration & Shell', proficiency: 87, category: 'tools' },
    { name: 'PostgreSQL & Vector Indexes', proficiency: 88, category: 'tools' }
  ],
  projects: [
    {
      id: 'robotic-sight',
      titleAr: 'Robotic Sight - رؤية حاسوبية حية',
      titleEn: 'Robotic Sight - Live Computer Vision',
      descAr: 'برنامج حاسوبي عالي السرعة لإجراء رصد وتصنيف فوري متعدد الكائنات وتتبعها مع زمن تأخير أقل من 50 مللي ثانية على شبكات البث المحلي.',
      descEn: 'High-performance surveillance tool performing real-time multi-class classification and tracking with sub-50ms processing latency on local camera grids.',
      tags: ['YOLOv8', 'Python', 'OpenCV', 'FastAPI'],
      glow: 'indigo',
      github: 'https://github.com/kzaldyn',
      demo: '#'
    },
    {
      id: 'arbdoc-rag',
      titleAr: 'ArbDoc RAG - استرجاع عربي ذكي',
      titleEn: 'ArbDoc RAG - Smart Arabic Retrieval',
      descAr: 'مساحة عمل دلائلية بالغة التطور تسهل تدقيق مستندات PDF ثنائية اللغة عبر تهيئة قواعد البيانات المتجهية المرتبطة بالتغذية الراجعة الذكية للنماذج.',
      descEn: 'Highly sophisticated semantic workspace optimizing bilingual (Ar/En) PDF audits by deploying vector store segment indexes combined with generative feedback loops.',
      tags: ['LangChain', 'VectorStore', 'Python', 'PostgreSQL'],
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
      companyAr: 'إبداع سوفت لخدمات الأنظمة',
      companyEn: 'Ibdaa Soft',
      roleAr: 'مطور أنظمة ومسؤول برمجيات مساعدة',
      roleEn: 'Systems Developer & Tech Lead Associate',
      period: '2024 - الحالي',
      periodEn: '2024 - Present',
      descAr: 'صممت ونفّذت واجهات أنظمة خلفية مرنة وشديدة الموثوقية. قدت عمليات إعادة هيكلة وتحديث فهارس قواعد البيانات العامة، مسجلاً تسريعاً بمعدل 42% لزمن معالجة الطلبات بالذروة.',
      descEn: 'Designed and implemented robust backend web interfaces and transaction pipelines. Successfully led database refactoring pipelines, achieving an average of 42% latency reduction during peak sales hours.'
    },
    {
      id: 'freelance',
      companyAr: 'مختبرات الذكاء الاصطناعي - مستقل',
      companyEn: 'AI Solutions Labs - Freelance',
      roleAr: 'مستشار رؤية حاسوبية وتعلم آلة',
      roleEn: 'Computer Vision & ML Consultant',
      period: '2023 - 2024',
      periodEn: '2023 - 2024',
      descAr: 'دربت وهندست طبقات تصنيف صور مخصصة لتمكين الفرز التلقائي على خطوط الإنتاج. صممت أدوات حاسوبية مستقلة بلغة بايثون للتحليل الطرفي الفوري على بيئات محدودة الموارد كـ Raspberry Pi.',
      descEn: 'Fine-tuned CNN and custom object-recognition models for automated conveyor sorters. Engineered standalone Python utilities deployed inside Raspberry Pi nodes for responsive edge analytics.'
    }
  ],
  roadmap: [
    {
      id: 'tinyml',
      titleAr: 'نماذج الذكاء الاصطناعي الطرفي (TinyML)',
      titleEn: 'TinyML - Edge AI Models',
      statusAr: 'فعال وتطبيقي',
      statusEn: 'Active Deployment',
      descAr: 'نشر بنيات رصد الكائنات المدمجة للعمل فوراً على المعالجات الطرفية منخفضة الطاقة وبدون الحاجة لربط إنترنت مستمر.',
      descEn: 'Deploying compact object-detection architectures to run directly on low-power edge processors without continuous internet connectivity.'
    },
    {
      id: 'mlops',
      titleAr: 'حلقات التدريب وأتمتة MLOps',
      titleEn: 'MLOps Training Loops & Automation',
      statusAr: 'قيد التعلم والتدريب',
      statusEn: 'Active Learning',
      descAr: 'تصميم أنظمة آلية للمراجعة والتسمية للصور الخاطئة لإعادة تهيئة وضبط النماذج دون تدخل بشري في السحابة الخاصة.',
      descEn: 'Designing automated systems for reviewing and labeling misclassified images to retrain and fine-tune models without human intervention in private cloud.'
    },
    {
      id: 'rust-vision',
      titleAr: 'محرك رؤية حاسوبية بلغة Rust',
      titleEn: 'Computer Vision Engine in Rust',
      statusAr: 'بحث مستفيض ودراسة',
      statusEn: 'Deep Research',
      descAr: 'برمجة وبناء مرشحات وأدوات استخلاص الكاميرات بلغة Rust لإلغاء قيود استهلاك الذاكرة وتخطي فترات جمود المفسرات التقليدية.',
      descEn: 'Building camera extraction filters and tools in Rust to eliminate memory consumption limitations and bypass traditional interpreter latency.'
    }
  ],
  contact: {
    email: 'kzaldyn67@gmail.com',
    locationAr: 'صنعاء، اليمن',
    locationEn: 'Sana\'a, Yemen',
    links: [
      { label: 'GitHub', url: 'https://github.com/kzaldyn', icon: '💻' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/kzaldyn', icon: '🔗' },
      { label: 'Phone', url: 'tel:+967777777777', icon: '📞' },
      { label: 'WhatsApp', url: 'https://wa.me/967777777777', icon: '💬' },
      { label: 'X / Twitter', url: 'https://twitter.com/kzaldyn', icon: '🐦' },
      { label: 'Telegram', url: 'https://t.me/kzaldyn', icon: '✈' },
      { label: 'Website', url: 'https://portfolio-virid-three-58.vercel.app', icon: '🌐' }
    ]
  }
};
