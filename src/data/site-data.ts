export const announcementBar = {
  text: "⚡ 2026 Enterprise Gen-AI & Leadership Benchmark Report Released",
  linkText: "Download Report &rarr;",
  href: "#contact",
};

export const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Enterprise Edge", href: "#edge" },
  { label: "Practice Hubs", href: "#domains" },
  { label: "ROI Calculator", href: "#calculator" },
  { label: "Pathways", href: "#audience" },
  { label: "CAT Methodology", href: "#framework" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const heroContent = {
  badge: "✨ Next-Generation Enterprise Capability Platform",
  title: "Transform Corporate Talent Into High-Impact Enterprise Innovators",
  subtitle:
    "Empower your workforce with practitioner-led upskilling in Generative AI, Strategic Product Leadership, and Enterprise Data Science—engineered specifically for modern Fortune 500 & high-growth teams.",
  features: [
    "Contextual Company Datasets",
    "Top 1% Practitioner Mentors",
    "Real-Time Capability Analytics",
    "SOC2 Type II Certified Security",
  ],
  primaryCta: "Schedule Enterprise Briefing",
  secondaryCta: "Explore ROI Calculator",
  metrics: [
    { label: "Learner Completion Rate", value: "98.6%" },
    { label: "Global Enterprise Clients", value: "250+" },
    { label: "Average Skill Growth", value: "4.2x" },
  ],
};

export const trackRecord = {
  title: "Empirical Enterprise Benchmark Data",
  subtitle: "Real quantifiable outcomes delivered across global organizations",
  stats: [
    {
      value: "15,000+",
      label: "Engineers & Leaders Upskilled",
      desc: "Across Gen-AI, Cloud Native, Product, and Data Science tracks",
      badge: "+42% YoY Growth",
    },
    {
      value: "250+",
      label: "Global Corporate Partners",
      desc: "Delivering customized cohort programs for enterprise leaders",
      badge: "Fortune 500 Trusted",
    },
    {
      value: "98.6%",
      label: "Cohort Retention Rate",
      desc: "Industry-leading engagement through practitioner-led sessions",
      badge: "Top Tier Benchmark",
    },
    {
      value: "$3.4M",
      label: "Avg. Annual Value Created",
      desc: "Measured via post-training process automation & innovation",
      badge: "Audited Impact",
    },
  ],
};

export const partnerCategories = [
  { id: "all", name: "All Enterprise Partners" },
  { id: "tech", name: "Technology Giants" },
  { id: "consulting", name: "Consulting & Services" },
  { id: "bfsi", name: "BFSI & Finance" },
];

export const partnersList = [
  { name: "Adobe", category: "tech", impact: "Upskilled 400+ Product Managers in Gen-AI workflows", color: "from-red-500 to-rose-600" },
  { name: "Amazon", category: "tech", impact: "Trained 600+ engineers in Cloud Native & LLMs", color: "from-amber-500 to-orange-600" },
  { name: "Deloitte", category: "consulting", impact: "Accelerated digital strategy capabilities across 1,000+ consultants", color: "from-emerald-600 to-green-700" },
  { name: "Google", category: "tech", impact: "Co-created specialized AI innovation sprints", color: "from-blue-500 to-indigo-600" },
  { name: "JP Morgan", category: "bfsi", impact: "Modernized risk analytics & fintech workflows", color: "from-slate-700 to-slate-900" },
  { name: "Microsoft", category: "tech", impact: "Enabled enterprise Copilot & RAG architecture mastery", color: "from-sky-500 to-blue-600" },
  { name: "PwC", category: "consulting", impact: "Automated tax & audit reporting using data pipelines", color: "from-orange-500 to-amber-600" },
  { name: "Reliance", category: "bfsi", impact: "Trained 1,200+ digital associates in advanced data analytics", color: "from-blue-700 to-indigo-800" },
];

export const edgeComparison = {
  title: "Why Accredian Beats Traditional Corporate Training",
  subtitle: "A comparative look at how our capability building model outperforms legacy LMS platforms",
  columns: [
    {
      feature: "Curriculum Customization",
      traditional: "Generic, static pre-recorded video libraries",
      accredian: "100% co-designed with your tech stack & real company data",
    },
    {
      feature: "Faculty Quality",
      traditional: "Academic trainers or freelance instructors",
      accredian: "Top 1% active VPs, Chief Architects & Domain Directors",
    },
    {
      feature: "Hands-on Practice",
      traditional: "Multiple choice quizzes with no real coding",
      accredian: "Live enterprise sandboxes & capstone business projects",
    },
    {
      feature: "ROI & Skill Analytics",
      traditional: "Basic completion metrics (views & clicks)",
      accredian: "Real-time diagnostic skill growth & ROI tracking dashboard",
    },
    {
      feature: "Post-Training Impact",
      traditional: "No follow-up or workplace application",
      accredian: "60-day post-cohort capability audit & mentor office hours",
    },
  ],
};

export const domainExpertise = [
  {
    id: "genai",
    title: "Gen-AI & Agentic Workflows",
    category: "AI Engineering",
    tagline: "Harness LLMs, RAG architectures, and autonomous AI agents for enterprise automation.",
    duration: "4 - 12 Weeks",
    format: "Live Virtual + Enterprise Sandbox",
    keySkills: ["RAG Systems", "LangChain & LlamaIndex", "Fine-Tuning & Prompt Ops", "Enterprise AI Safety"],
    targetRoles: ["AI Engineers", "Solutions Architects", "Tech Leads", "Product Managers"],
    icon: "⚡",
  },
  {
    id: "product",
    title: "Strategic Product & Growth",
    category: "Product Management",
    tagline: "Drive product-led transformation, data-informed strategy, and continuous discovery.",
    duration: "6 - 16 Weeks",
    format: "Cohort Workshops + Executive Mentorship",
    keySkills: ["Product Visioning", "Growth Loops", "Product Analytics", "Customer Value Mapping"],
    targetRoles: ["VPs of Product", "Group PMs", "Senior Product Managers", "Business Unit Heads"],
    icon: "🚀",
  },
  {
    id: "leadership",
    title: "Executive Leadership Elevation",
    category: "Executive Leadership",
    tagline: "Equip directors and C-suite leaders to navigate digital disruption and empower high-velocity teams.",
    duration: "8 - 20 Weeks",
    format: "Executive Retreats + Masterclasses",
    keySkills: ["Digital Change Leadership", "Strategic Decision Science", "Cross-Functional Alignment", "Crisis Agility"],
    targetRoles: ["Directors", "VPs", "General Managers", "C-Suite Executives"],
    icon: "👑",
  },
  {
    id: "data",
    title: "Enterprise Data & ML Engineering",
    category: "Data & Analytics",
    tagline: "Build scalable data pipelines, predictive analytics, and enterprise business intelligence.",
    duration: "6 - 16 Weeks",
    format: "Live Labs + Real Dataset Capstones",
    keySkills: ["PySpark & Snowflake", "MLOps Pipelines", "Advanced Data Modeling", "BI & Executive Dashboards"],
    targetRoles: ["Data Engineers", "Data Scientists", "BI Managers", "Analytics Engineers"],
    icon: "💡",
  },
  {
    id: "cloud",
    title: "Cloud Native & DevOps Security",
    category: "Infrastructure",
    tagline: "Modernize monolithic systems into resilient Kubernetes microservices with Zero Trust security.",
    duration: "6 - 14 Weeks",
    format: "Cloud Lab Sandboxes",
    keySkills: ["Kubernetes & Docker", "Terraform Infrastructure", "Zero Trust Architecture", "CI/CD Automation"],
    targetRoles: ["DevOps Engineers", "Cloud Architects", "SREs", "Infrastructure Leads"],
    icon: "☁️",
  },
  {
    id: "fintech",
    title: "Fintech & Open Banking Lab",
    category: "Financial Tech",
    tagline: "Master modern payment rails, open banking APIs, fraud analytics, and Web3 enterprise applications.",
    duration: "6 - 12 Weeks",
    format: "Case Sprints + Industry Mentor Labs",
    keySkills: ["Open Banking APIs", "Fraud Prevention ML", "Real-Time Payment Rails", "Blockchain Enterprise"],
    targetRoles: ["Fintech Architects", "Risk Managers", "Banking Tech Leads", "Compliance Analysts"],
    icon: "💳",
  },
];

export const personaRoadmaps = [
  {
    id: "tech-lead",
    roleTitle: "Engineering & Tech Leaders",
    subtitle: "For Tech Leads, Architects, and Senior Software Engineers",
    icon: "💻",
    skillsUnlocked: ["AI Agent Systems", "Cloud Native Microservices", "LLM Deployment & Security"],
    roadmapSteps: [
      { phase: "Month 1", focus: "AI Architecture & Prompt Engineering Fundamentals" },
      { phase: "Month 2", focus: "Enterprise RAG Pipeline Building & Live Sandbox Labs" },
      { phase: "Month 3", focus: "Capstone Production Deployment & Performance Tuning" },
    ],
  },
  {
    id: "product-leader",
    roleTitle: "Product & Growth Managers",
    subtitle: "For Product Directors, Senior PMs, and Innovation Officers",
    icon: "🚀",
    skillsUnlocked: ["Data-Driven Product Strategy", "AI-Powered User Sprints", "Product Monetization"],
    roadmapSteps: [
      { phase: "Month 1", focus: "Market Discovery & Product-Led Growth Frameworks" },
      { phase: "Month 2", focus: "Product Analytics & Gen-AI Feature Integration" },
      { phase: "Month 3", focus: "Executive Business Case & GTM Strategy Presentation" },
    ],
  },
  {
    id: "business-exec",
    roleTitle: "Business & Non-Tech Managers",
    subtitle: "For Operations Managers, Sales Directors, and HR Leaders",
    icon: "📋",
    skillsUnlocked: ["No-Code AI Automation", "Data Fluency & BI Dashboards", "Cross-Functional Synergy"],
    roadmapSteps: [
      { phase: "Month 1", focus: "Digital Transformation Mindset & AI Tool Mastery" },
      { phase: "Month 2", focus: "Workflow Automation & Data-Driven Decision Making" },
      { phase: "Month 3", focus: "Business Unit Efficiency Capstone Project" },
    ],
  },
  {
    id: "executive-suite",
    roleTitle: "C-Suite & Vice Presidents",
    subtitle: "For VPs, Chief Digital Officers, and Managing Directors",
    icon: "👔",
    skillsUnlocked: ["Enterprise AI Governance", "Strategic Value Creation", "Talent Capability Benchmarking"],
    roadmapSteps: [
      { phase: "Month 1", focus: "Enterprise Digital & AI Maturity Diagnostics" },
      { phase: "Month 2", focus: "Strategic Capability Roadmapping & Risk Governance" },
      { phase: "Month 3", focus: "Executive Masterclass & Organizational Alignment" },
    ],
  },
];

export const catFrameworkSteps = [
  {
    step: "Phase 01",
    name: "Capability & Skill Gap Diagnostic",
    tagline: "Uncover exact skill baselines before investing a single dollar.",
    description: "Our proprietary diagnostic assessment evaluates team competence across 24 enterprise skill vectors, benchmarking performance against industry peers.",
    deliverables: ["Diagnostic Competency Report", "Peer Benchmark Matrix", "Targeted Capability Map"],
    duration: "Week 1 - 2",
    icon: "🔍",
  },
  {
    step: "Phase 02",
    name: "Custom Curriculum Blueprint",
    tagline: "Designed specifically around your tech stack and datasets.",
    description: "We co-author a custom modular syllabus incorporating your company's actual workflows, sanitized data samples, and cloud environment.",
    deliverables: ["Custom Modular Syllabus", "Live Cloud Sandbox Setup", "Practitioner Mentor Allocation"],
    duration: "Week 3 - 4",
    icon: "📐",
  },
  {
    step: "Phase 03",
    name: "Practitioner Delivery & Capstone",
    tagline: "Live sessions led by top 1% industry veterans.",
    description: "Teams engage in live interactive workshops, building a real-world enterprise capstone project evaluated by domain leaders.",
    deliverables: ["Live Workshop Sprints", "Evaluated Capstone Project", "Post-Training Skill Growth Dashboard"],
    duration: "Week 5 - 12",
    icon: "🚀",
  },
];

export const faqData = [
  {
    category: "General",
    q: "How does Accredian Enterprise differ from generic online learning subscriptions?",
    a: "Unlike static e-learning platforms with low completion rates (typically < 10%), Accredian Enterprise designs 100% customized practitioner-led programs with live cloud sandboxes, real company datasets, and capstone project evaluations. Our completion rates average 98.6%.",
  },
  {
    category: "Customization",
    q: "Can Accredian incorporate our company's proprietary tech stack and data?",
    a: "Yes! During Phase 02 of our CAT Framework, our instructional designers collaborate with your tech architects to integrate sanitized samples of your tech stack, APIs, and data models directly into lab exercises.",
  },
  {
    category: "Delivery & Security",
    q: "What security & compliance certifications does Accredian maintain?",
    a: "Accredian Enterprise operates under SOC 2 Type II compliance, ISO 27001 certification, and strict GDPR/CCPA data handling guidelines. All cloud sandboxes run in isolated single-tenant environments.",
  },
  {
    category: "Analytics & ROI",
    q: "How do enterprise leaders measure training ROI and skill progression?",
    a: "Enterprise sponsors receive access to a Real-Time Capability Dashboard that tracks cohort attendance, pre/post skill assessment scores, capstone project grades, and estimated business hours saved through workplace application.",
  },
  {
    category: "Schedule",
    q: "How do you accommodate employees across multiple time zones?",
    a: "We offer asynchronous lab sandboxes paired with multi-cohort live sessions scheduled across Americas, EMEA, and APAC time zones to minimize workflow interruption.",
  },
];

export const testimonials = [
  {
    company: "ADP",
    author: "Rohan V. Sharma",
    role: "VP of Learning & Capability",
    quote:
      "Accredian transformed our engineering leadership talent pipeline. Their customized Gen-AI and Product strategy modules delivered an immediate 35% productivity boost in cross-functional delivery.",
    rating: 5,
    badge: "500+ Engineers Trained",
    stats: "+35% Team Velocity",
  },
  {
    company: "Bayer",
    author: "Dr. Ananya Roy",
    role: "Director of Digital Transformation",
    quote:
      "Accredian's commitment to excellence and practitioner-led delivery is unmatched. They co-created a data analytics program that directly empowered our operational teams to automate key compliance reporting.",
    rating: 5,
    badge: "Enterprise AI Transformation",
    stats: "220 Hrs/Mo Automated",
  },
  {
    company: "Reliance Industries",
    author: "Vikram Malhotra",
    role: "Head of Talent Strategy",
    quote:
      "Partnering with Accredian for our enterprise upskilling was one of our best strategic decisions. Their CAT framework ensured seamless execution and outstanding learner engagement scores across all cohorts.",
    rating: 5,
    badge: "1,200+ Learners Trained",
    stats: "99.1% Satisfaction Score",
  },
];

export const officesLocation = [
  { city: "Bengaluru", country: "India", address: "HSR Layout, Sector 6, Tech Park" },
  { city: "San Francisco", country: "USA", address: "Market Street, Suite 400, Financial District" },
  { city: "London", country: "UK", address: "Bishopsgate, EC2N 4AG" },
  { city: "Singapore", country: "Singapore", address: "Marina Bay Financial Centre" },
];

export const footerLinks = {
  solutions: [
    "Gen-AI & Agentic Workflows",
    "Strategic Product & Growth",
    "Executive Leadership Elevation",
    "Enterprise Data & ML Engineering",
    "Cloud Native & DevOps Security",
    "Fintech & Open Banking Lab",
  ],
  methodology: [
    "The CAT Framework",
    "Skill Gap Diagnostic",
    "Custom Cloud Sandboxes",
    "ROI Analytics Dashboard",
    "SOC 2 Compliance",
    "Enterprise Pricing",
  ],
  resources: [
    "2026 Enterprise Upskilling Benchmark",
    "AI Capability Maturity Model",
    "Case Studies Library",
    "Whitepapers & Reports",
    "System Status",
    "Privacy & GDPR Policy",
  ],
};

export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/accredianedu/", icon: "linkedin" },
  { name: "Twitter", href: "https://twitter.com/accredianedu", icon: "twitter" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA", icon: "youtube" },
  { name: "GitHub", href: "https://github.com", icon: "github" },
];

export const programStructures = {
  title: "Modular Enterprise Program Formats",
  subtitle: "Flexible learning tracks adapted to your organization's timeline and goals",
  categories: [
    {
      type: "Executive Certificates",
      description: "Comprehensive qualification programs for senior roles.",
      items: ["Post Graduate Enterprise Cert", "Executive Leadership Micro-Degree", "Advanced AI Practitioner Cert"],
      icon: "🎓",
    },
    {
      type: "Verticalized Sprints",
      description: "Industry-specific case studies & regulatory compliance.",
      items: ["Fintech & Open Banking", "Healthcare Data Privacy", "BFSI Risk Modeling", "Retail & Supply Chain"],
      icon: "🏢",
    },
    {
      type: "Deep-Dive Bootcamps",
      description: "High-intensity technical training on core stacks.",
      items: ["Gen-AI Agentic Workflows", "Kubernetes & DevOps", "Enterprise Data Engineering"],
      icon: "🎯",
    },
    {
      type: "Cohort Micro-Modules",
      description: "Self-paced + live mentor office hours for fast onboarding.",
      items: ["Prompt Engineering Basics", "Python for Business Leaders", "Product Analytics Essentials"],
      icon: "📈",
    },
  ],
};

