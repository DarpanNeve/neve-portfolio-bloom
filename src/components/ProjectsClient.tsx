"use client";
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "./ProjectsContent";

export const ProjectsClient = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(true);
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
          className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
            }`}
        >
          {children}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group cursor-pointer transition-all duration-500 border border-border/50 hover:border-primary/40 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden flex flex-col ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openProjectModal(project)}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}
                      >
                        {project.icon}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      View Details
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex flex-col items-center text-center space-y-4 flex-1">
                    {/* Title and Category */}
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {project.category}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="flex flex-wrap gap-2 justify-center min-h-[32px]">
                      {project.metrics.slice(0, 2).map((metric) => (
                        <span
                          key={metric}
                          className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                        >
                          {metric}
                        </span>
                      ))}
                      {project.metrics.length > 2 && (
                        <span className="text-xs px-3 py-1.5 bg-secondary text-muted-foreground rounded-full font-medium">
                          +{project.metrics.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 justify-center min-h-[32px]">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 bg-secondary text-foreground rounded-full font-medium border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-3 py-1.5 bg-secondary text-muted-foreground rounded-full font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons - Always at bottom */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    {(project.codeLink || project.liveLink) ? (
                      <div className="flex gap-3 justify-center">
                        {project.codeLink && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="min-w-[100px] text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLinkClick(project.codeLink);
                            }}
                          >
                            <Github className="h-3.5 w-3.5 mr-1.5" />
                            Code
                          </Button>
                        )}
                        {project.liveLink && (
                          <Button
                            size="sm"
                            className="min-w-[100px] text-xs bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLinkClick(project.liveLink);
                            }}
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                            Live
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <div className="px-6 py-2 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-800">
                          <span className="text-xs font-medium">In Progress</span>
                        </div>
                      </div>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
          onClick={closeProjectModal}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-background rounded-3xl border border-border/50 shadow-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-destructive/20 hover:text-destructive transition-all duration-300 hover:scale-110"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] scrollbar-thin">
              {/* Hero Image Section */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} screenshot`}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div
                      className={`w-32 h-32 rounded-3xl bg-gradient-to-r ${selectedProject.color} flex items-center justify-center text-white shadow-2xl`}
                    >
                      <div className="scale-150">{selectedProject.icon}</div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="px-6 md:px-12 pb-12 -mt-16 relative z-10">
                {/* Title Section */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${selectedProject.color} text-white shadow-lg`}
                    >
                      {selectedProject.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-muted-foreground font-medium">
                    {selectedProject.category}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    About This Project
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Metrics Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    Key Achievements
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors duration-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies Section */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-secondary border border-border/50 text-foreground rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-border/50">
                  {selectedProject.codeLink && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="min-w-[180px] gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50 hover:scale-105 transition-all duration-300"
                      onClick={() => handleLinkClick(selectedProject.codeLink)}
                    >
                      <Github className="h-5 w-5" />
                      View Source Code
                    </Button>
                  )}
                  {selectedProject.liveLink && (
                    <Button
                      size="lg"
                      className="min-w-[180px] gap-2 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      onClick={() => handleLinkClick(selectedProject.liveLink)}
                    >
                      <ExternalLink className="h-5 w-5" />
                      Visit Live Site
                    </Button>
                  )}
                  {!selectedProject.codeLink && !selectedProject.liveLink && (
                    <div className="flex justify-center">
                      <div className="px-8 py-3 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-800">
                        <span className="text-sm font-semibold">Project Coming Soon</span>
                      </div>
                    </div>
                  )}
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
