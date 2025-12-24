'use client';
import { ChevronDown, Send, Briefcase, Download } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ParticleField } from "./ParticleField";
import { HeroGigs } from "./HeroGigs";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <ParticleField />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none z-[1]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-100'}`}>
          <p className="text-base md:text-lg text-muted-foreground mb-4 font-mono tracking-wide">
            Full-Stack Software Engineer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient animate-gradient">
              Darpan Neve
            </span>
          </h1>

          <div className="h-20 flex items-center justify-center mb-8">
            <h2 className="text-xl md:text-3xl font-medium text-foreground max-w-4xl leading-relaxed">
              Building scalable digital experiences with
              <span className="text-primary font-semibold"> modern technology</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Specializing in Flutter, FastAPI, and React to create
            high-performance web and mobile applications that drive results.
          </p>

          <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" aria-label="Primary navigation">
            <Link href="#contact">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                aria-label="Contact for work opportunities"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="h-5 w-5" aria-hidden="true" />
                  Let's Work Together
                </span>
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-border hover:border-primary hover:bg-primary/5 font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:text-primary"
                aria-label="View my projects"
              >
                <Briefcase className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" aria-hidden="true" />
                View Projects
              </Button>
            </Link>
            <a
              href="https://drive.google.com/drive/folders/1zRIBlmmWRzW40bx947SKtCjhRIjcWKY7?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume (opens in new tab)"
            >
              <Button
                variant="ghost"
                size="lg"
                className="group font-semibold px-8 py-6 rounded-full hover:bg-secondary transition-all duration-300 hover:text-primary"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" aria-hidden="true" />
                Resume
              </Button>
            </a>
          </nav>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-16">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
              <span>Open to new opportunities</span>
            </div>
          </div>

          <div className="flex justify-center" aria-hidden="true">
            <div className="animate-bounce">
              <ChevronDown className="h-6 w-6 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none z-[2]" aria-hidden="true" />

      <HeroGigs />
    </section>
  );
};
