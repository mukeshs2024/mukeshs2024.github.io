export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Profiles", href: "#profiles" },
];

export const heroContent = {
  name: "Mukesh S",
  role: "Aspiring Data Analyst",
  techInline: "Excel • SQL • Power BI • Python • PostgreSQL",
  summary: "AI & Data Science student focused on Data Analytics, Business Intelligence, dashboard development, SQL analysis, and transforming data into meaningful business insights.",
  stats: [
    { label: "Projects", value: "5+" },
    { label: "Internships", value: "2" },
    { label: "Hackathons", value: "2" },
    { label: "CGPA", value: "7.0" },
  ],
  profileImage: "/portfolio/profile/profile.jpg",
  linkedin: "https://www.linkedin.com/in/mukesh-s-6a1a78333/",
};

export const experiences = [
  {
    role: "Agentic AI Intern",
    organization: "Ongoing Internship",
    duration: "Ongoing",
    status: "Ongoing",
    responsibilities: [
      "Working on AI-powered applications",
      "LLM integrations",
      "RAG systems",
      "FastAPI backend development",
      "AI workflow automation",
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
      "Full stack web development",
      "React frontend development",
      "API integration",
      "Database design",
      "Team collaboration",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    certificateImage: "/portfolio/certificates/mern_intern.jpg",
  },
];

export const projects = [
  {
    title: "TERRA-NAV: AI-Powered Off-Road Terrain Intelligence System",
    problem: "Conventional off-road vehicles react to difficult terrain only after encountering it, leading to reduced stability, passenger discomfort, and increased mechanical stress.",
    solution: "Developed an AI-powered perception system that detects off-road terrain and obstacles in real time, analyzes terrain severity, and enables proactive suspension adaptation before the vehicle reaches challenging terrain.",
    businessValue: "Improves off-road driving safety, ride comfort, and vehicle durability through predictive terrain understanding and intelligent suspension control.",
    keyFeatures: [
      "Custom YOLOv8 terrain detection",
      "Live camera & video analysis",
      "Terrain severity estimation",
      "Proactive suspension adaptation",
      "Real-time analytics dashboard",
      "Digital twin visualization",
      "WebSocket-based live inference",
      "FastAPI backend with React frontend"
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "OpenCV",
      "YOLOv8",
      "PyTorch",
      "WebSocket",
      "Vite"
    ],
    githubHref: "https://github.com/mukeshs2024/tata_innovent.git",
    demoHref: null,
    status: "Completed",
    imageFolder: "/portfolio/projects/terra-nav/",
  },
  {
    title: "Smart Traffic Management System",
    problem: "Traditional traffic signal systems rely on fixed timings and cannot adapt to real-time traffic conditions, resulting in congestion, longer travel times, and delayed emergency response.",
    solution: "Developed an AI-powered traffic management system that simulates adaptive traffic signal control, synchronizes multiple intersections, prioritizes emergency vehicles, and provides real-time traffic analytics to optimize urban traffic flow.",
    businessValue: "Reduces traffic congestion, minimizes vehicle waiting time, improves emergency response efficiency, and enables smarter urban transportation through intelligent traffic control.",
    keyFeatures: [
      "Adaptive traffic signal control based on real-time traffic demand",
      "Multi-intersection synchronization (Green Wave, Offset, Alternating & Independent modes)",
      "Emergency vehicle priority and signal preemption",
      "Real-time traffic simulation with realistic vehicle physics",
      "Live traffic dashboard with congestion and performance analytics",
      "Collision avoidance and queue detection",
      "Optional YOLOv8 vehicle detection and classification",
      "Interactive traffic visualization using Canvas API"
    ],
    tech: [
      "JavaScript (ES6)",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "Canvas 2D API",
      "SUMO",
      "Python",
      "YOLOv8",
      "OpenCV",
      "Git",
      "npm"
    ],
    githubHref: "https://github.com/mukeshs2024/smart_traffic_management_system.git",
    demoHref: "https://smart-traffic-management-system-green.vercel.app/",
    status: "Completed",
    imageFolder: "/portfolio/projects/smart-traffic/",
  },
  {
    title: "ReUseMart",
    problem: "Buying and selling used products lacks organization and trust.",
    solution: "Developed a marketplace platform for managing second-hand products.",
    businessValue: "Structured marketplace workflows, authentication, and product management.",
    keyFeatures: ["JWT authentication", "Product listings", "Order management", "Admin controls"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript"],
    githubHref: "https://github.com/mukeshs2024/ReUseMart-",
    demoHref: null,
    status: "Completed",
    imageFolder: "/portfolio/projects/reusemart/",
  },
  {
    title: "ExportReady",
    problem: "Small businesses struggle to understand export readiness.",
    solution: "Built an AI-assisted export guidance platform.",
    businessValue: "Provides readiness analysis and compliance guidance.",
    keyFeatures: ["Readiness scoring", "Compliance checklist", "Market opportunity insights"],
    tech: ["React", "FastAPI", "PostgreSQL"],
    githubHref: "https://github.com/mukeshs2024/exportready",
    demoHref: null,
    status: "In Development",
    imageFolder: "/portfolio/projects/exportready/",
  },
  {
    title: "Indian Airline Traffic Forecasting",
    problem: "Organizations require forecasting for infrastructure planning.",
    solution: "Analyzed airline traffic data and built forecasting models.",
    businessValue: "Supports planning and demand forecasting.",
    keyFeatures: ["Traffic trend analysis", "Demand forecasting", "Excel and Python reporting"],
    tech: ["Python", "Excel", "Forecasting", "Visualization"],
    githubHref: null,
    demoHref: null,
    status: "Completed",
    imageFolder: "/portfolio/projects/airline-forecasting/",
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
    image: "/portfolio/certificates/genai.png",
  },
  {
    title: "MERN Stack Internship",
    issuer: "Full Stack Development",
    image: "/portfolio/certificates/mern_intern.jpg",
  },
];

export const hackathonsAndEvents = [
  {
    title: "Generative AI Hackathon",
    description: "Built and presented an AI-based solution during a Generative AI hackathon.",
    images: [
      "/portfolio/images/Genai image.jpeg",
      "/portfolio/images/Geniai image2.jpg",
    ],
  },
  {
    title: "AXIOS 25 Hackathon",
    description: "Participated in team-based problem solving and project presentation.",
    images: [
      "/portfolio/images/AXIOS.jpg",
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

export const resumePath = "/portfolio/resume/Mukesh_Resume.pdf";
export const footerLinks = [
  { label: "GitHub", href: "https://github.com/mukeshs2024" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukesh-s-6a1a78333/" },
  { label: "Email", href: "mailto:vprlks20@gmail.com" },
];
