'use client';
import { ChevronDown, Send, Briefcase, Download } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
}

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    setIsLoaded(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.radius += ripple.speed;
        ripple.opacity -= 0.002;

        if (ripple.opacity > 0 && ripple.radius < ripple.maxRadius) {
          // Outer ripple
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(224, 76%, 48%, ${ripple.opacity})`;
          ctx.lineWidth = 3;
          ctx.stroke();

          // Middle ripple
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.8, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(220, 70%, 60%, ${ripple.opacity * 0.6})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Inner ripple
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.6, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(240, 65%, 65%, ${ripple.opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          return true;
        }
        return false;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Initial center ripple on page load
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const maxDimension = Math.max(window.innerWidth, window.innerHeight);

    setTimeout(() => {
      ripplesRef.current.push({
        x: centerX,
        y: centerY,
        radius: 0,
        maxRadius: maxDimension * 1.5,
        opacity: 0.6,
        speed: 5,
      });
    }, 300);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      role="banner"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

      {/* Initial ripple canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="#contact">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Let's Work Together
                </span>
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-border hover:border-primary hover:bg-primary/5 font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Briefcase className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                View Projects
              </Button>
            </Link>
            <a
              href="https://drive.google.com/drive/folders/1zRIBlmmWRzW40bx947SKtCjhRIjcWKY7?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="lg"
                className="group font-semibold px-8 py-6 rounded-full hover:bg-secondary transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Resume
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-16">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Open to new opportunities</span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="animate-bounce">
              <ChevronDown className="h-6 w-6 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
    </section>
  );
};
