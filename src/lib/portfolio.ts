export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Profiles", href: "#profiles" },
];

export const heroContent = {
  name: "MUKESH S",
  role: "BUILDING SCALABLE AI & DATA SYSTEMS",
  techInline: "PRODUCTION-READY SOFTWARE • CLOUD INFRASTRUCTURE • MACHINE LEARNING",
  summary: "ENGINEERING MISSION: ARCHITECTING AND DEPLOYING PRODUCTION-READY SOFTWARE. FOCUSED ON BUILDING SCALABLE SYSTEMS, ROBUST CLOUD INFRASTRUCTURE, AND HIGH-PERFORMANCE AI APPLICATIONS.",
  stats: [
    { label: "SYSTEMS_BUILT", value: "5+" },
    { label: "HACKATHONS", value: "5+" },
  ],
  profileImage: "/profile/profile.jpg",
  linkedin: "https://www.linkedin.com/in/mukesh-s-6a1a78333/",
};

export const experiences = [
  {
    role: "Agentic AI Intern",
    organization: "Ongoing Internship",
    duration: "Present",
    status: "Ongoing",
    responsibilities: [
      "Architected AI workflows to automate complex domain-specific tasks",
      "Integrated Large Language Models to power intelligent decision engines",
      "Engineered Retrieval-Augmented Generation (RAG) pipelines for contextual accuracy",
      "Built high-performance scalable backend services using FastAPI",
    ],
    tech: ["Python", "FastAPI", "LLMs", "Vector Databases", "PostgreSQL"],
    certificateImage: null,
  },
  {
    role: "MERN Stack Intern",
    organization: "Software Development Internship",
    duration: "Completed",
    status: "Completed",
    responsibilities: [
      "Designed and optimized scalable relational database schemas",
      "Engineered responsive client-side architectures using React",
      "Integrated secure RESTful APIs to connect frontend services",
      "Developed end-to-end full stack web applications",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    certificateImage: "/certificates/mern_intern.jpg",
  },
];

export const projects = [
  {
    title: "VOLTIX:\nAI-POWERED AUTONOMOUS\nBUILDING OPERATIONS PLATFORM",
    description: "AI-powered Digital Twin platform that simulates commercial building operations and coordinates multiple autonomous AI agents to continuously optimize HVAC, energy consumption, battery usage, and grid interaction in real time.",
    tech: ["Next.js", "FastAPI", "LangGraph", "TypeScript", "Python", "Digital-Twin"],
    githubHref: "https://github.com/mukeshs2024/Voltix",
    demoHref: "#",
    status: "ACTIVE DEVELOPMENT",
    imageFolder: "/projects/voltix/",
    carouselImages: [
      "/images/voltix.png",
      "/images/voltix1.png",
      "/images/voltix2.png",
      "/images/voltix3.png",
      "/images/voltix4.png"
    ],
    overview: "Voltix is an AI-powered Autonomous Building Operations Platform that combines a Digital Twin, real-time sensor simulation, and collaborative multi-agent intelligence to optimize commercial building energy systems.\n\nThe platform continuously monitors building telemetry, enables specialized AI agents to analyze operational conditions, negotiates optimization strategies through a consensus engine, and applies intelligent control actions through a continuous closed-loop optimization process.",
    keyFeatures: [
      "Digital Twin Simulation",
      "Real-Time Sensor Engine",
      "Autonomous Multi-Agent AI",
      "AI Consensus Engine",
      "HVAC Optimization",
      "Energy Optimization",
      "Battery Optimization",
      "Grid Optimization",
      "AI Explainability",
      "Continuous Closed Feedback Loop"
    ],
    workflow: [
      "Scenario Selection",
      "Simulation Engine",
      "Sensor Simulation",
      "Digital Twin",
      "Occupancy Agent",
      "HVAC Agent",
      "Energy Agent",
      "Grid Agent",
      "Equipment Agent",
      "Consensus Engine",
      "Optimization Plan",
      "Building Response",
      "Digital Twin Update",
      "Continuous Optimization"
    ],
    highlights: [
      "Production-inspired Digital Twin Architecture",
      "Multi-Agent AI Coordination",
      "Real-Time Simulation Engine",
      "Event-Driven System Design",
      "Consensus-Based Decision Making",
      "Explainable AI",
      "Continuous Optimization Loop",
      "Interactive Execution Pipeline"
    ],
    fullTechStack: [
      "Next.js", "React", "TypeScript", "TailwindCSS", "FastAPI", "Python", "LangGraph", "WebSockets", "PostgreSQL", "Supabase"
    ],
    roleDesc: "Designed and developed the complete platform architecture including:",
    myRole: [
      "Digital Twin Modeling",
      "Real-Time Simulation Engine",
      "Frontend Dashboard",
      "Backend APIs",
      "Multi-Agent AI Workflow",
      "Consensus Engine",
      "AI Explainability",
      "Interactive Visualization"
    ],
    metrics: [
      "5 Autonomous AI Agents",
      "1 Digital Twin",
      "1 Consensus Engine",
      "12+ Telemetry Streams",
      "20+ Interactive Dashboard Components",
      "Continuous Closed-Loop Optimization"
    ]
  },
  {
    title: "Smart Traffic Management System",
    description: "AI-driven traffic simulation and signal control system to optimize urban flow and synchronize multi-intersection networks.",
    tech: ["Node.js", "Python", "YOLOv8", "SUMO"],
    githubHref: "https://github.com/mukeshs2024/smart_traffic_management_system.git",
    demoHref: "https://smart-traffic-management-system-green.vercel.app/",
    status: "Completed",
    imageFolder: "/projects/smart-traffic/",
  },
  {
    title: "ReUseMart",
    description: "Full-stack marketplace platform for managing second-hand products with secure authentication and complex order workflows.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    githubHref: "https://github.com/mukeshs2024/ReUseMart-",
    demoHref: null,
    status: "Completed",
    imageFolder: "/projects/reusemart/",
  },
  {
    title: "ExportReady",
    description: "AI-assisted guidance platform providing readiness analysis and compliance checklists for small business exporters.",
    tech: ["React", "FastAPI", "PostgreSQL", "Python"],
    githubHref: "https://github.com/mukeshs2024/exportready",
    demoHref: null,
    status: "In Development",
    imageFolder: "/projects/exportready/",
  },
  {
    title: "Indian Airline Traffic Forecasting",
    description: "Data analytics and forecasting pipeline analyzing airline traffic trends for infrastructure and demand planning.",
    tech: ["Python", "Excel", "Forecasting", "Statistics"],
    githubHref: null,
    demoHref: null,
    status: "Completed",
    imageFolder: "/projects/airline-forecasting/",
  },
];

export const skillGroups = [
  {
    title: "Data Analytics",
    items: ["Excel", "SQL", "Power BI", "Statistics", "Data Cleaning"],
  },
  {
    title: "Programming",
    items: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["PostgreSQL", "FastAPI", "REST APIs"],
  },
  {
    title: "Development Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export const certifications = [
  {
    title: "Gen AI Certification",
    issuer: "AI Workflows",
    image: "/certificates/genai.png",
  },
  {
    title: "MERN Stack Internship",
    issuer: "Full Stack Development",
    image: "/certificates/mern_intern.jpg",
  },
];

export const hackathonsAndEvents = [
  {
    title: "Generative AI Hackathon",
    description: "Built and presented an AI-based solution during a Generative AI hackathon.",
    images: [
      "/images/Genai image.jpeg",
      "/images/Geniai image2.jpg",
    ],
  },
  {
    title: "AXIOS 25 Hackathon",
    description: "Participated in team-based problem solving and project presentation.",
    images: [
      "/images/AXIOS.jpg",
    ],
  },
];

export const education = {
  college: "Sri Eshwar College of Engineering",
  degree: "B.Tech Artificial Intelligence and Data Science",
  duration: "2024–2028",
  cgpa: "7.0",
};

export const contactDetails = [
  { label: "GitHub", value: "View Profile", href: "https://github.com/mukeshs2024" },
  { label: "LinkedIn", value: "Connect", href: "https://www.linkedin.com/in/mukesh-s-6a1a78333/" },
  { label: "LeetCode", value: "View Problems", href: "https://leetcode.com/u/mukesh_s20/" },
  { label: "Email", value: "Contact Me", href: "mailto:vprlks20@gmail.com?subject=Portfolio Inquiry" },
  { label: "Phone", value: "+91 90034 74487", href: "tel:+919003474487" },
  { label: "Location", value: "View Map", href: "https://www.google.com/maps/search/Coimbatore,+Tamil+Nadu" },
];

export const resumePath = "/resume/Mukesh_Resume.pdf";
export const footerLinks = [
  { label: "GitHub", href: "https://github.com/mukeshs2024" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukesh-s-6a1a78333/" },
  { label: "Email", href: "mailto:vprlks20@gmail.com" },
];
