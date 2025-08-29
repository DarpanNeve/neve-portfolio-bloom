import {
  Smartphone,
  Globe,
  Server,
  Zap,
} from "lucide-react";

export const projects = [
  {
    title: "Soil Master",
    category: "IoT Application",
    description:
      "Advanced IoT solution for soil monitoring with 100+ beta testers and 30% faster sync capabilities.",
    longDescription:
      "A comprehensive Flutter application integrated with AWS IoT for real-time soil monitoring. Features include sensor data visualization, automated alerts, and predictive analytics for optimal farming conditions.",
    technologies: ["Flutter", "AWS IoT", "Dart", "Firebase", "Node.js"],
    icon: <Zap className="h-6 w-6" />,
    metrics: ["100+ Users", "30% Faster Sync", "Real-time Monitoring"],
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    codeLink: null,
    liveLink:
      "https://play.google.com/store/apps/details?id=com.towardimagination.soilmaster",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Zarity Chronic Care",
    category: "Healthcare App",
    description:
      "HIPAA-compliant telemedicine platform with video consultations using Agora RTC.",
    longDescription:
      "Comprehensive healthcare application built with Flutter and Django. Features secure video consultations, patient management, prescription handling, and appointment scheduling with full HIPAA compliance.",
    technologies: ["Flutter", "GetX", "Django", "Agora RTC", "Healthcare"],
    icon: <Smartphone className="h-6 w-6" />,
    metrics: ["HIPAA Compliant", "Video Consultations", "Patient Management"],
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    codeLink: null,
    liveLink:
      "https://play.google.com/store/apps/details?id=zarity.care.zarity_mobile",
    color: "from-red-400 to-rose-600",
  },
  {
    title: "Vastav Intellect",
    category: "Business Consulting",
    description:
      "Developed and maintained the full-stack website for Vastav Intellect, a government-recognized IP and business consulting firm.",
    longDescription:
      "Led the end-to-end development of Vastav Intellect, a recognized IP and business consulting platform under the Ministry of Commerce, India. Implemented full-stack architecture, showcasing services including patents, trademarks, ISO certification, compliance, and startup incubation. Optimized UI/UX for credibility and conversions. Platform supports 1,000+ clients and 1,800+ patent filings.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Hostinger", "VPS"],
    icon: <Globe className="h-6 w-6" />,
    metrics: ["Patents", "Trademarks", "Startup Services"],
    image:
      "https://plus.unsplash.com/premium_photo-1661292120292-2687c53fccc7?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000",
    codeLink: null,
    liveLink: "https://vastavintellect.com/",
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Jaldindi Pratishthan",
    category: "Mobile Application",
    description:
      "NGO operations app with 100+ users and real-time location tracking across 22 regions.",
    longDescription:
      "Cross-platform mobile app built for NGO field operations, enabling volunteer coordination, document uploads, and real-time geolocation via Google Maps. Cloud backend ensures reliable performance and centralized data management.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Dart"],
    icon: <Smartphone className="h-6 w-6" />,
    metrics: [
      "100+ User Sign-ups in First Month",
      "22+ Location Coverage",
      "Realtime Cloud Sync",
    ],
    image:
      "https://images.unsplash.com/photo-1721239571860-4f73b7e35551?w=600&h=400&fit=crop",
    color: "from-blue-500 to-teal-400",
    liveLink:
      "https://play.google.com/store/apps/details?id=com.jaldindi_pratishthan.jaldindi",
  },
  {
    title: "HireSphere",
    category: "AI Platform",
    description:
      "AI-powered interview automation with facial recognition and posture detection capabilities.",
    longDescription:
      "Cutting-edge recruitment platform leveraging TensorFlow.js for real-time candidate assessment. Features automated interview scheduling, AI-driven evaluation, and comprehensive analytics dashboard.",
    technologies: ["React", "FastAPI", "MongoDB", "TensorFlow.js", "AI/ML"],
    icon: <Zap className="h-6 w-6" />,
    metrics: ["AI-powered", "Facial Recognition", "Automated Interviews"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    codeLink: "https://github.com/DarpanNeve/hiresphere",
    liveLink: "https://hiresphere-pi.vercel.app/",
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Signoware",
    category: "Daemon App",
    description:
      "Cross-platform automation tool processing 500+ daily PDFs on Windows and Linux systems.",
    longDescription:
      "Enterprise-grade document processing solution built with Java and Python. Automates PDF generation, digital signatures, and batch processing with advanced OCR capabilities.",
    technologies: ["Java", "Python", "Flutter", "OCR", "Cross-platform"],
    icon: <Server className="h-6 w-6" />,
    metrics: ["500+ Daily PDFs", "Cross-platform", "Enterprise-grade"],
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Vendor Portal",
    category: "Web Application",
    description:
      "Full-stack solution achieving 45% throughput gain and 60% reduction in manual work.",
    longDescription:
      "Modern web application built with React and FastAPI, featuring vendor onboarding, contract management, and automated workflows. Includes real-time analytics and notification systems.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Python", "Docker"],
    icon: <Globe className="h-6 w-6" />,
    metrics: [
      "45% Throughput Gain",
      "60% Less Manual Work",
      "Real-time Analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "from-purple-400 to-pink-600",
  },
];

export const ProjectsContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
        >
          Featured Projects
        </h2>
        <p
          className={`text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto`}
        >
          Showcasing innovative solutions across web, mobile, and AI
          platforms
        </p>
      </div>
    </div>
  );
};