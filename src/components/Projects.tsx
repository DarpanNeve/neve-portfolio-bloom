import { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Server,
  Zap,
  ChevronRight,
  X,
} from "lucide-react";
// Using shadcn/ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const projects = [
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

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        id="projects"
        className="py-16 lg:py-24 bg-background"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
                isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              Showcasing innovative solutions across web, mobile, and AI
              platforms
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group cursor-pointer transition-all duration-500 border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openProjectModal(project)}
              >
                <CardHeader className="pb-4">
                  {/* Project Image */}
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-purple-500/20 relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {}}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {project.icon}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <ChevronRight className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white flex-shrink-0`}
                      >
                        {project.icon}
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <Badge
                        key={metric}
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-300"
                      >
                        {metric}
                      </Badge>
                    ))}
                    {project.metrics.length > 2 && (
                      <Badge
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-muted/50"
                      >
                        +{project.metrics.length - 2} more
                      </Badge>
                    )}
                  </div>

                  {/* Technologies - Mobile optimized */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-2 py-1 border-border/50 hover:border-primary/50 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs px-2 py-1 border-border/50"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.codeLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs hover:scale-105 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLinkClick(project.codeLink);
                        }}
                      >
                        <Github className="h-3 w-3 mr-1.5" />
                        Code
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button
                        size="sm"
                        className="flex-1 text-xs hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLinkClick(project.liveLink);
                        }}
                      >
                        <ExternalLink className="h-3 w-3 mr-1.5" />
                        Live
                      </Button>
                    )}
                    {!project.codeLink && !project.liveLink && (
                      <Badge
                        variant="secondary"
                        className="flex-1 justify-center py-2 bg-amber-100 text-amber-800 border-amber-200"
                      >
                        In Progress
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${selectedProject.color} text-white`}
                  >
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {selectedProject.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {selectedProject.category}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeProjectModal}
                  className="hover:bg-destructive/20 hover:text-destructive transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Project Image */}
              <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-purple-500/20">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} screenshot`}
                    className="w-full h-full object-cover"
                    onError={(e) => {}}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${selectedProject.color} flex items-center justify-center text-white`}
                      >
                        {selectedProject.icon}
                      </div>
                      <p className="text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  About This Project
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Key Achievements
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.metrics.map((metric) => (
                    <Badge
                      key={metric}
                      variant="secondary"
                      className="bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-300"
                    >
                      {metric}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {selectedProject.codeLink && (
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
                    onClick={() => handleLinkClick(selectedProject.codeLink)}
                  >
                    <Github className="h-4 w-4" />
                    View Source Code
                  </Button>
                )}
                {selectedProject.liveLink && (
                  <Button
                    className="flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={() => handleLinkClick(selectedProject.liveLink)}
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Live Demo
                  </Button>
                )}
                {!selectedProject.codeLink && !selectedProject.liveLink && (
                  <Badge
                    variant="secondary"
                    className="flex items-center justify-center py-3 bg-amber-100 text-amber-800 border-amber-200"
                  >
                    Project Coming Soon
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 640px) {
            .line-clamp-3 {
              -webkit-line-clamp: 2;
            }
          }
        `,
        }}
      />
    </>
  );
};
