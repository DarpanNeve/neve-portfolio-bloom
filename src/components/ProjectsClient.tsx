"use client";
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "./ProjectsContent";

export const ProjectsClient = ({ children }: { children: React.ReactNode }) => {
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
        className="py-4 lg:py-4 bg-background"
        ref={sectionRef}
      >
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          {children}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={closeProjectModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-2xl border border-border/50 shadow-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
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
                  size="icon"
                  onClick={closeProjectModal}
                  className="rounded-full hover:bg-destructive/20 hover:text-destructive transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} screenshot`}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
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

                {/* Right Column */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      About This Project
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {selectedProject.longDescription}
                    </p>

                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
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

                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
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
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    {selectedProject.codeLink && (
                      <Button
                        variant="outline"
                        className="flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
                        onClick={() =>
                          handleLinkClick(selectedProject.codeLink)
                        }
                      >
                        <Github className="h-4 w-4" />
                        View Source Code
                      </Button>
                    )}
                    {selectedProject.liveLink && (
                      <Button
                        className="flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={() =>
                          handleLinkClick(selectedProject.liveLink)
                        }
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
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
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }
          .animate-scale-in {
            animation: scaleIn 0.3s ease-out forwards;
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
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scaleIn {
            from {
              transform: scale(0.95);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
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
