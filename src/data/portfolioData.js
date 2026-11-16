export const portfolioData = {
  personal: {
    name: "Abidur Rahman Jisan",
    title: "Full Stack Developer (MERN Stack) & SQA Engineer",
    shortBio: "Building scalable web applications and ensuring bug-free user experiences through clean code and rigorous quality assurance.",
    avatar: "https://github.com/007Jisan.png",
    fallbackAvatar: "https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "/Abidur_Rahman_Jisan_Resume.pdf",
    resumeFilename: "Abidur_Rahman_Jisan_Resume.pdf",
    location: "Dhaka, Bangladesh",
    status: "Available for Hire / Full-time & Internships",
  },
  contact: {
    email: "jisan33.info@gmail.com",
    phone: "+880 1765561928",
    whatsapp: "+880 1765561928",
    whatsappLink: "https://wa.me/8801765561928",
    location: "Dhaka, Bangladesh",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/007Jisan",
      icon: "Github",
      color: "hover:text-slate-100",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abidur-rahman-jisan-a303b9312/",
      icon: "Linkedin",
      color: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/8801765561928",
      icon: "MessageCircle",
      color: "hover:text-emerald-400",
    },
    {
      name: "Email",
      url: "mailto:jisan33.info@gmail.com",
      icon: "Mail",
      color: "hover:text-teal-400",
    },
  ],
  about: {
    journey:
      "My passion for technology sparked during my B.Sc. in Software Engineering at Daffodil International University (DIU). Over the past several years, I have methodically transformed from writing foundational code to architecting production-ready full-stack MERN applications and mastering both manual and systematic software testing methodologies.",
    workEnjoyed:
      "I genuinely enjoy the intersection between resilient engineering and intuitive human-centered design. Whether it's crafting lightning-fast responsive interfaces with React & Tailwind, designing secure RESTful backends with Node & Express, or stress-testing software using black-box, regression, and user acceptance testing (UAT), I strive for zero-defect delivery.",
    hobbies: [
      {
        title: "Vintage Phone Preservation",
        desc: "A collector and enthusiast of classic vintage mobile devices—particularly iconic Nokia masterpieces (like the legendary 3310, N-series, and Symbian devices). I love repairing, exploring their hardware engineering, and preserving tech history.",
        icon: "Smartphone",
      },
      {
        title: "Mobile Hardware & Specs",
        desc: "Deeply interested in mobile silicon architecture, sensor evolution, micro-soldering, and tracking tech tear-downs across smartphone generations.",
        icon: "Cpu",
      },
      {
        title: "Casual Gaming & Strategy",
        desc: "When stepping away from the compiler and terminal, I recharge through strategy games and casual gaming sessions with friends.",
        icon: "Gamepad2",
      },
    ],
    personalityTraits: [
      "Detail-Oriented Quality Mindset",
      "Fast Learner & Adaptable",
      "Systematic Problem Solver",
      "Collaborative Team Player",
    ],
  },
  skillCategories: [
    {
      id: "all",
      name: "All Skills",
    },
    {
      id: "frontend",
      name: "Frontend Development",
    },
    {
      id: "backend",
      name: "Backend & APIs",
    },
    {
      id: "sqa",
      name: "SQA & Testing",
    },
    {
      id: "tools",
      name: "Tools & Others",
    },
  ],
  skills: [
    // Frontend
    { name: "React.js", category: "frontend", level: 90, icon: "Atom", experience: "Advanced" },
    { name: "JavaScript (ES6+)", category: "frontend", level: 92, icon: "FileCode", experience: "Advanced" },
    { name: "Tailwind CSS", category: "frontend", level: 95, icon: "Palette", experience: "Expert" },
    { name: "HTML5 & Semantic Web", category: "frontend", level: 96, icon: "Code", experience: "Expert" },
    { name: "CSS3 & Modern Animations", category: "frontend", level: 90, icon: "Layout", experience: "Advanced" },
    { name: "Responsive UI / Mobile-First", category: "frontend", level: 95, icon: "Smartphone", experience: "Expert" },
    
    // Backend
    { name: "Node.js", category: "backend", level: 85, icon: "Server", experience: "Intermediate-Advanced" },
    { name: "Express.js", category: "backend", level: 88, icon: "Network", experience: "Advanced" },
    { name: "MongoDB & Mongoose", category: "backend", level: 86, icon: "Database", experience: "Advanced" },
    { name: "RESTful API Design", category: "backend", level: 90, icon: "Cpu", experience: "Advanced" },
    { name: "OpenRouter & AI API Integration", category: "backend", level: 84, icon: "Bot", experience: "Proficient" },

    // SQA & Testing
    { name: "Manual Testing & Test Plans", category: "sqa", level: 92, icon: "CheckSquare", experience: "Expert" },
    { name: "Black-Box & White-Box Testing", category: "sqa", level: 88, icon: "Search", experience: "Advanced" },
    { name: "Regression & Sanity Testing", category: "sqa", level: 90, icon: "Repeat", experience: "Advanced" },
    { name: "User Acceptance Testing (UAT)", category: "sqa", level: 89, icon: "Users", experience: "Advanced" },
    { name: "Bug Tracking & Test Coverage", category: "sqa", level: 94, icon: "Bug", experience: "Expert" },

    // Tools & Others
    { name: "Git & Version Control", category: "tools", level: 92, icon: "GitBranch", experience: "Advanced" },
    { name: "GitHub Collaboration", category: "tools", level: 90, icon: "Github", experience: "Advanced" },
    { name: "VS Code & Tooling", category: "tools", level: 95, icon: "Terminal", experience: "Expert" },
    { name: "Render & Cloud Deployments", category: "tools", level: 86, icon: "Cloud", experience: "Proficient" },
    { name: "UML & ER Diagramming", category: "tools", level: 88, icon: "Network", experience: "Advanced" },
  ],
  education: [
    {
      degree: "B.Sc. in Software Engineering (SWE)",
      institution: "Daffodil International University (DIU)",
      location: "Dhaka, Bangladesh",
      period: "2022 - 2026 (Final Year / Graduating)",
      status: "Graduating / Final Year",
      highlights: [
        "Major in Full Stack Web Application Engineering and Quality Assurance",
        "Lead Developer for Capstone Project: Bug Tracking & Test Management System",
        "Deep coursework in Software Testing, Architecture, Algorithms, and Database Engineering",
      ],
      current: true,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Rajendrapur Cantonment Public School & College",
      location: "Gazipur, Dhaka",
      period: "2018 - 2020",
      status: "Completed (Science Group)",
      highlights: [
        "Focused on Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT)",
        "Active member of the college science and cultural club",
      ],
      current: false,
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Rajendrapur Cantonment Public School & College",
      location: "Gazipur, Dhaka",
      period: "2016 - 2018",
      status: "Completed (Science Group)",
      highlights: [
        "Strong academic standing with excellence in Mathematics and General Sciences",
        "Developed early interest in computing and technology hardware",
      ],
      current: false,
    },
  ],
  experience: [
    {
      role: "Full Stack Web Developer & SQA Specialist (Projects & Academic Capstones)",
      organization: "Daffodil International University & Independent Projects",
      period: "2023 - Present",
      type: "Academic & Freelance",
      responsibilities: [
        "Architected end-to-end MERN web applications with role-based access control and responsive interfaces.",
        "Authored comprehensive test case suites, executed black-box/white-box tests, and documented regression bug logs.",
        "Implemented real-time features and integrated external APIs (OpenRouter AI, Render web services, Vercel).",
        "Practiced clean coding principles, version control workflows, and database indexing for high query performance.",
      ],
    },
    {
      role: "Seeking Full-Time / Junior Developer & SQA Engineer Roles",
      organization: "Open to Local & Remote Opportunities",
      period: "Immediate Availability",
      type: "Career Readiness",
      responsibilities: [
        "Prepared to contribute immediately to agile development sprints, QA pipelines, and production codebase maintenance.",
        "Eager to bring strong analytical debugging, attention to detail, and modern MERN stack expertise to an innovative engineering team.",
      ],
    },
  ],
  projects: [
    {
      id: "bug-tracker-system",
      title: "Bug Tracking & Test Management System",
      badge: "Capstone Project",
      shortDescription:
        "A web-based platform designed to streamline software quality assurance workflows by allowing teams to log bugs, manage test cases, assign roles, and track resolution statuses.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      mainTech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT Auth"],
      liveUrl: "https://github.com/007Jisan/Bug-tracker-Bug-tracking-and-test-case-management-system#readme",
      githubUrl: "https://github.com/007Jisan/Bug-tracker-Bug-tracking-and-test-case-management-system",
      challenges: [
        "Architecting a scalable database schema supporting granular Role-Based Access Control (RBAC) across Testers, Developers, and Project Managers.",
        "Synchronizing real-time bug state transitions and preventing race conditions during concurrent test case executions.",
        "Designing an intuitive bug reporting interface that enables testers to capture reproduction steps, severity, attachments, and logs effortlessly.",
      ],
      futurePlans: [
        "Integrating automated CI/CD webhook notifications (GitHub Actions / GitLab CI) upon new bug commits.",
        "Building interactive analytics dashboards visualizing test pass/fail ratios and regression velocity metrics.",
        "Adding automated PDF test execution summary reports for executive stakeholders.",
      ],
      keyFeatures: [
        "Complete Test Case Lifecycle Management",
        "Role-Based Access Control (Admin, QA Tester, Developer)",
        "Severity, Priority, and Status Tracking",
        "Audit Logs & Activity History for Every Bug",
        "Responsive Dashboard with Metric Summaries",
      ],
    },
    {
      id: "explore-with-genie",
      title: "ExploreWithGenie (Travel with Gennie Live)",
      badge: "AI Powered Web App",
      shortDescription:
        "An interactive AI-powered travel assistant web application that helps users plan customized trips, discover hidden gems, and explore destinations dynamically.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
      mainTech: ["React.js", "JavaScript (ES6+)", "OpenRouter AI API", "Render", "Tailwind CSS"],
      liveUrl: "https://travel-with-gennie-live.onrender.com/",
      githubUrl: "https://github.com/007Jisan/Travel-with-Gennie-Live",
      challenges: [
        "Handling asynchronous streaming AI responses gracefully without freezing UI rendering.",
        "Engineering defensive prompt structures to ensure consistent, well-structured travel recommendation formats.",
        "Configuring production deployment pipelines on Render with client-side SPA routing rules to prevent 404s on page reloads.",
      ],
      futurePlans: [
        "Integrating interactive Google Maps / Mapbox APIs to pin suggested itinerary spots visually.",
        "Implementing user accounts to save, export, and collaborate on multi-day itineraries with travel buddies.",
        "Adding offline itinerary download and currency conversion calculators.",
      ],
      keyFeatures: [
        "Real-time AI Travel Planning Assistance",
        "Dynamic Destination Explorer & Recommendations",
        "Optimized Prompt Pipeline with OpenRouter",
        "Mobile-first, Responsive Travel Cards",
        "Deployed Live on Render Cloud",
      ],
    },
    {
      id: "bazardor",
      title: "BazarDor (বাজার দর)",
      badge: "Community Market Tool",
      shortDescription:
        "A market price monitoring web application built to help consumers track, compare, and analyze daily essential commodity prices with ease.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
      mainTech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
      liveUrl: "https://bazardor-psi.vercel.app/",
      githubUrl: "https://github.com/007jisan/bazardor",
      challenges: [
        "Structuring clean, flexible data schemas for rapidly fluctuating daily market prices across multiple regional markets.",
        "Ensuring instant search and category filtering performance even on low-end mobile devices and slower network conditions.",
        "Normalizing disparate pricing units (e.g., kg, liter, bunch) into transparent consumer comparisons.",
      ],
      futurePlans: [
        "Introducing historical price trend charts using Chart.js to help consumers spot seasonal price hikes.",
        "Adding geo-location based nearest wholesale market locator and crowd-sourced price validation.",
        "Enabling SMS or email alerts when commodity prices drop below a custom threshold.",
      ],
      keyFeatures: [
        "Daily Essential Grocery & Commodity Tracker",
        "Fast Multi-category Filtering (Vegetables, Fish, Meat, Spices)",
        "Clean Bilingual Presentation (Bengali & English Support)",
        "Mobile-Optimized Fast Search Experience",
        "Live on Vercel with High Lighthouse Scores",
      ],
    },
    {
      id: "fitlog-app",
      title: "FitLog - Fitness & Workout Tracker",
      badge: "Health & Fitness App",
      shortDescription:
        "A full-stack fitness application engineered to record daily exercise routines, log workout sets, track caloric metrics, and visualize training consistency.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      mainTech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      liveUrl: "https://github.com/007Jisan/fit-log#readme",
      githubUrl: "https://github.com/007Jisan/fit-log",
      challenges: [
        "Handling complex relational state for nested workout sessions containing multiple exercises, sets, weights, and repetitions.",
        "Designing an ergonomic mobile-first input form so users can log sets mid-workout with minimal taps.",
        "Implementing responsive data charts that render clearly across both small mobile screens and desktop monitors.",
      ],
      futurePlans: [
        "Integrating smartwatch/wearable API sync (Google Fit / Apple Health).",
        "Adding AI-driven personal workout recommendations based on muscle recovery cycles.",
        "Implementing community workout leaderboards and buddy challenges.",
      ],
      keyFeatures: [
        "Exercise Routine Logging with Custom Sets & Reps",
        "Weekly Workout Frequency & Progress Visualizer",
        "Calorie Estimation & Rest Timer Integrations",
        "Secure User Authentication and Data Privacy",
      ],
    },
  ],
};
