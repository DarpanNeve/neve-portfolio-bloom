import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => {
  const typedText = "Full-Stack Software Engineer";
  return (
    <section
      id="home"
      role="banner"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              animationDuration: Math.random() * 3 + 3 + "s",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-primary mb-4 font-mono animate-slide-in-left">
            Hi there! 👋 I'm
          </p>

          {/* Name + SEO-friendly H1 (includes role in an sr-only span) */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-scale-in">
            <span className="text-gradient animate-gradient-x bg-gradient-to-r from-primary via-cyan-400 to-purple-400">
              Darpan Neve
            </span>
            {/* Include role in H1 for SEO, but visually hide it (sr-only is Tailwind util) */}
            <span className="sr-only"> — Full-Stack Software Engineer</span>
          </h1>

          {/* Typing animation for role (visual only; aria-hidden so screen readers use the sr-only text above) */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <h2
              className="text-2xl md:text-4xl font-semibold text-muted-foreground font-mono"
              aria-hidden="true"
            >
              <span className="typing-cursor">{typedText}</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            I craft exceptional digital experiences with modern technologies,
            specializing in scalable mobile solutions and innovative web
            applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link href="#projects">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-cyan-500 hover:from-cyan-500 hover:to-primary text-white font-semibold px-8 py-3 rounded-full glow-effect hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
            <a
              href="https://drive.google.com/drive/folders/1zRIBlmmWRzW40bx947SKtCjhRIjcWKY7?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
    </section>
  );
};
