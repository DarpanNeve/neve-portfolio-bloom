
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Server, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const projects = [
    {
      title: 'Soil Master',
      category: 'IoT Application',
      description: 'Advanced IoT solution for soil monitoring with 100+ beta testers and 30% faster sync capabilities.',
      longDescription: 'A comprehensive Flutter application integrated with AWS IoT for real-time soil monitoring. Features include sensor data visualization, automated alerts, and predictive analytics for optimal farming conditions.',
      technologies: ['Flutter', 'AWS IoT', 'Dart', 'Firebase', 'Node.js'],
      icon: <Zap className="h-6 w-6" />,
      metrics: ['100+ Beta Testers', '30% Faster Sync', 'Real-time Monitoring'],
      image: '/placeholder.svg',
      color: 'from-green-400 to-emerald-600'
    },
    {
      title: 'Signoware',
      category: 'Desktop Application',
      description: 'Cross-platform automation tool processing 500+ daily PDFs on Windows and Linux systems.',
      longDescription: 'Enterprise-grade document processing solution built with Java and Python. Automates PDF generation, digital signatures, and batch processing with advanced OCR capabilities.',
      technologies: ['Java', 'Python', 'Flutter', 'OCR', 'Cross-platform'],
      icon: <Server className="h-6 w-6" />,
      metrics: ['500+ Daily PDFs', 'Cross-platform', 'Enterprise-grade'],
      image: '/placeholder.svg',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      title: 'Vendor Management Portal',
      category: 'Web Application',
      description: 'Full-stack solution achieving 45% throughput gain and 60% reduction in manual work.',
      longDescription: 'Modern web application built with React and FastAPI, featuring vendor onboarding, contract management, and automated workflows. Includes real-time analytics and notification systems.',
      technologies: ['React', 'FastAPI', 'PostgreSQL', 'Python', 'Docker'],
      icon: <Globe className="h-6 w-6" />,
      metrics: ['45% Throughput Gain', '60% Less Manual Work', 'Real-time Analytics'],
      image: '/placeholder.svg',
      color: 'from-purple-400 to-pink-600'
    },
    {
      title: 'Zarity Chronic Care',
      category: 'Healthcare App',
      description: 'HIPAA-compliant telemedicine platform with video consultations using Agora RTC.',
      longDescription: 'Comprehensive healthcare application built with Flutter and Django. Features secure video consultations, patient management, prescription handling, and appointment scheduling with full HIPAA compliance.',
      technologies: ['Flutter', 'GetX', 'Django', 'Agora RTC', 'Healthcare'],
      icon: <Smartphone className="h-6 w-6" />,
      metrics: ['HIPAA Compliant', 'Video Consultations', 'Patient Management'],
      image: '/placeholder.svg',
      color: 'from-red-400 to-rose-600'
    },
    {
      title: 'HireSphere',
      category: 'AI Platform',
      description: 'AI-powered interview automation with facial recognition and posture detection capabilities.',
      longDescription: 'Cutting-edge recruitment platform leveraging TensorFlow.js for real-time candidate assessment. Features automated interview scheduling, AI-driven evaluation, and comprehensive analytics dashboard.',
      technologies: ['React', 'FastAPI', 'MongoDB', 'TensorFlow.js', 'AI/ML'],
      icon: <Zap className="h-6 w-6" />,
      metrics: ['AI-powered', 'Facial Recognition', 'Automated Interviews'],
      image: '/placeholder.svg',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      title: 'MediConnect',
      category: 'Healthcare Platform',
      description: 'Comprehensive healthcare platform with geolocation services and WebRTC integration.',
      longDescription: 'Advanced healthcare solution combining geolocation-based hospital discovery with real-time communication. Features appointment booking, medication reminders, and emergency contact systems.',
      technologies: ['Flutter', 'Firebase', 'WebRTC', 'Geolocation', 'Healthcare'],
      icon: <Smartphone className="h-6 w-6" />,
      metrics: ['Geolocation Services', 'WebRTC Integration', 'Emergency Features'],
      image: '/placeholder.svg',
      color: 'from-teal-400 to-green-600'
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gradient transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            Showcasing innovative solutions across web, mobile, and AI platforms
          </p>
        </div>

        {/* Project Showcase */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h3>
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`cursor-pointer transition-all duration-300 border-2 hover:scale-105 ${
                  selectedProject === index 
                    ? 'border-primary bg-primary/5 glow-effect' 
                    : 'border-primary/20 hover:border-primary/40 glassmorphism'
                } ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{project.title}</h4>
                      <p className="text-sm">{project.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected Project Details */}
          <div className="lg:col-span-2">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-500 ${
                  selectedProject === index ? 'opacity-100' : 'opacity-0 absolute'
                } ${isVisible ? 'animate-slide-in-right' : ''}`}
              >
                {selectedProject === index && (
                  <Card className="glassmorphism border-primary/20 hover:border-primary/40 glow-effect">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white animate-float`}>
                            {project.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-foreground">
                              {project.title}
                            </CardTitle>
                            <p className=" font-medium">{project.category}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="hover:scale-110 transition-transform duration-300">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                          <Button size="sm" className="hover:scale-110 transition-transform duration-300 text-foreground">
                            <ExternalLink className="h-4 w-4 mr-2 text-foreground" />
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Project Image */}
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-primary/20">
                        <div className="text-center">
                          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white`}>
                            {project.icon}
                          </div>
                          <p className="text-muted-foreground">Project Screenshot</p>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">About This Project</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* Key Metrics */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.metrics.map((metric) => (
                            <Badge key={metric} variant="secondary" className="bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors duration-300">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
