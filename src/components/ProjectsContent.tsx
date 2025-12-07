import {
  Smartphone,
  Globe,
  Server,
  Zap,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export const projects = [
  {
    title: "Routine Path",
    category: "Habit Tracking Platform",
    description:
      "Production-grade habit tracker with GitHub-style analytics, voice assistant integration, and comprehensive widget support.",
    longDescription:
      "Enterprise-level habit tracking application built with Flutter and Drift (SQLite), featuring GitHub-style contribution graphs for visual consistency tracking, interactive home screen widgets, and production-ready voice assistant integration (Google Assistant & Siri). Implements clean architecture with comprehensive error handling, offline-first with background sync, fuzzy matching algorithms for natural language processing, and WCAG AA accessibility compliance. The codebase follows SOLID principles with 90%+ test coverage, structured logging, Sentry integration, and optimized database queries with proper indexing for sub-100ms response times.",
    technologies: [
      "Flutter",
      "Dart",
      "Drift (SQLite)",
      "Clean Architecture",
      "Google Assistant",
      "Siri Shortcuts",
      "Widgets",
      "Levenshtein Distance",
      "BLoC Pattern",
      "Riverpod",
      "Sentry",
    ],
    icon: <TrendingUp className="h-6 w-6" />,
    metrics: [
      "Voice Assistant Ready",
      "GitHub-style Analytics",
      "Widget Support",
      "Production Deployment",
    ],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    codeLink: null,
    liveLink: "https://darpanneve.com/routinepath",
    color: "from-violet-600 to-purple-700",
  },
  {
    title: "LockBloom",
    category: "Security Application",
    description:
      "Production-ready password manager with enterprise-grade security architecture and biometric authentication.",
    longDescription:
      "LockBloom demonstrates advanced mobile security implementation using industry-standard AES-256-GCM encryption with hardware-backed key storage. Built with Flutter following clean architecture principles, it features secure biometric authentication, encrypted local storage, and zero-knowledge security model. The codebase emphasizes security-first development with comprehensive unit testing and follows OWASP mobile security guidelines.",
    technologies: [
      "Flutter",
      "Dart",
      "AES-256-GCM",
      "Android Keystore",
      "iOS Keychain",
      "Clean Architecture",
      "MVC Pattern",
    ],
    icon: <Server className="h-6 w-6" />,
    metrics: [
      "Production Ready",
      "Enterprise Security",
      "Clean Architecture",
      "OWASP Compliant",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1681487746049-c39357159f69?w=600&h=400&fit=crop",
    codeLink: null,
    liveLink: "https://play.google.com/store/apps/details?id=com.dn.lockbloom",
    color: "from-slate-800 to-indigo-600",
  },
  {
    title: "Assesme",
    category: "SaaS Analytics Platform",
    description:
      "Full-stack business intelligence platform with advanced data processing and modern microservices architecture.",
    longDescription:
      "Assesme showcases enterprise-level full-stack development using React with TypeScript, FastAPI with async/await patterns, and MongoDB with optimized aggregation pipelines. Features include real-time data visualization with D3.js, RESTful API design with OpenAPI documentation, Redis caching layer, and SerpAPI integration for external data enrichment. Built using Domain-Driven Design principles with comprehensive test coverage and CI/CD pipeline.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "MongoDB",
      "SerpAPI",
      "Redis",
      "Docker",
      "Microservices",
      "D3.js",
    ],
    icon: <BarChart3 className="h-6 w-6" />,
    metrics: [
      "Microservices Architecture",
      "Real-time Analytics",
      "API-First Design",
      "Production Deployment",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    codeLink: null,
    liveLink: "https://assesme.com",
    color: "from-emerald-600 to-blue-700",
  },
  {
    title: "Soil Master",
    category: "IoT Application",
    description:
      "Advanced IoT monitoring solution with AWS integration and real-time data processing capabilities.",
    longDescription:
      "Professional Flutter application demonstrating IoT integration with AWS IoT Core, featuring real-time sensor data visualization, MQTT protocol implementation, and responsive material design. Includes comprehensive state management with BLoC pattern, local data persistence, and background sync capabilities. The architecture supports scalable device management and secure IoT communication.",
    technologies: [
      "Flutter",
      "AWS IoT Core",
      "MQTT",
      "BLoC Pattern",
      "Material Design",
      "SQLite",
    ],
    icon: <Zap className="h-6 w-6" />,
    metrics: [
      "IoT Integration",
      "Real-time Processing",
      "AWS Cloud",
      "Scalable Architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    codeLink: null,
    liveLink:
      "https://play.google.com/store/apps/details?id=com.towardimagination.soilmaster",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Zarity Chronic Care",
    category: "Healthcare Application",
    description:
      "HIPAA-compliant telemedicine platform with secure video calling and comprehensive patient management.",
    longDescription:
      "Professional healthcare application built with Flutter and Django REST framework, featuring secure video consultations via Agora RTC SDK, encrypted patient data handling, and role-based access control. Implements healthcare compliance standards, secure authentication with JWT, and comprehensive audit logging. The backend follows Django best practices with proper serialization and validation.",
    technologies: [
      "Flutter",
      "Django REST",
      "Agora RTC",
      "JWT Auth",
      "PostgreSQL",
      "HIPAA Compliance",
    ],
    icon: <Smartphone className="h-6 w-6" />,
    metrics: [
      "HIPAA Compliant",
      "Secure Video Calls",
      "Production Ready",
      "Healthcare Standards",
    ],
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    codeLink: null,
    liveLink:
      "https://play.google.com/store/apps/details?id=zarity.care.zarity_mobile",
    color: "from-red-400 to-rose-600",
  },
  {
    title: "Vastav Intellect",
    category: "Business Consulting Platform",
    description:
      "Professional consulting website with modern full-stack architecture and optimized user experience.",
    longDescription:
      "Comprehensive business consulting platform built with React and Node.js, featuring modern component architecture, responsive design, and SEO optimization. Implements professional UI/UX design principles, efficient state management, and performance optimization techniques. The backend includes proper API design, database optimization, and security best practices for business applications.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Modern CSS",
      "SEO Optimization",
    ],
    icon: <Globe className="h-6 w-6" />,
    metrics: [
      "Professional Design",
      "SEO Optimized",
      "Responsive UI",
      "Performance Tuned",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1661292120292-2687c53fccc7?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000",
    codeLink: null,
    liveLink: "https://vastavintellect.com/",
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Jaldindi Pratishthan",
    category: "NGO Management App",
    description:
      "Cross-platform mobile application with real-time location tracking and cloud synchronization.",
    longDescription:
      "Flutter application demonstrating professional mobile development with Google Maps integration, real-time geolocation services, and Firebase backend. Features include offline-first architecture, background sync, push notifications, and comprehensive state management. Built with scalable architecture supporting multiple user roles and real-time data updates.",
    technologies: [
      "Flutter",
      "Firebase",
      "Google Maps API",
      "Cloud Functions",
      "Push Notifications",
    ],
    icon: <Smartphone className="h-6 w-6" />,
    metrics: [
      "Real-time Sync",
      "Location Services",
      "Offline Support",
      "Cloud Backend",
    ],
    image:
      "https://images.unsplash.com/photo-1721239571860-4f73b7e35551?w=600&h=400&fit=crop",
    color: "from-blue-500 to-teal-400",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.jaldindi_pratishthan.jaldindi",
  },
  {
    title: "HireSphere",
    category: "AI-Powered Platform",
    description:
      "Modern recruitment platform integrating computer vision and machine learning technologies.",
    longDescription:
      "Innovative recruitment platform showcasing AI/ML integration with React frontend and FastAPI backend. Features real-time facial recognition using TensorFlow.js, automated interview assessment, and comprehensive analytics dashboard. Demonstrates advanced JavaScript ML implementation, modern Python async patterns, and professional UI/UX design for complex workflows.",
    technologies: [
      "React",
      "FastAPI",
      "TensorFlow.js",
      "Computer Vision",
      "MongoDB",
      "ML/AI",
    ],
    icon: <TrendingUp className="h-6 w-6" />,
    metrics: [
      "AI Integration",
      "Computer Vision",
      "Modern Stack",
      "Innovative Features",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    codeLink: "https://github.com/DarpanNeve/hiresphere",
    liveLink: "https://hiresphere-pi.vercel.app/",
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Signoware",
    category: "Cross-Platform Automation",
    description:
      "Enterprise document processing solution with advanced PDF handling and automation capabilities.",
    longDescription:
      "Professional document automation platform built with Java and Python, demonstrating cross-platform development expertise. Features include advanced PDF processing, OCR integration, batch automation, and robust error handling. Built with enterprise-grade architecture, comprehensive logging, and scalable processing pipelines supporting high-volume document workflows.",
    technologies: [
      "Java",
      "Python",
      "PDF Processing",
      "OCR",
      "Cross-platform",
      "Automation",
    ],
    icon: <Server className="h-6 w-6" />,
    metrics: [
      "Cross-Platform",
      "PDF Automation",
      "Enterprise Grade",
      "High Performance",
    ],
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Vendor Portal",
    category: "Business Web Application",
    description:
      "Full-stack vendor management solution with automated workflows and comprehensive analytics.",
    longDescription:
      "Professional web application built with React and FastAPI, demonstrating modern full-stack development practices. Features include automated vendor onboarding workflows, real-time analytics dashboards, comprehensive reporting, and role-based access control. Implements clean code principles, proper API design, and scalable database architecture with PostgreSQL.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Workflow Automation",
      "Analytics",
      "Docker",
    ],
    icon: <Globe className="h-6 w-6" />,
    metrics: [
      "Workflow Automation",
      "Analytics Dashboard",
      "Production Deployment",
      "Modern Architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "from-purple-400 to-pink-600",
  },
];

export const ProjectsContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            Portfolio
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Production-grade applications built with modern architecture patterns,
          <br className="hidden sm:block" />
          delivering real value to thousands of users
        </p>
      </div>
    </div>
  );
};
