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
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip canvas on mobile

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let isVisible = !document.hidden;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    const resizeCanvas = () => {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
    };

    resizeCanvas();

    const handleResize = () => {
      requestAnimationFrame(resizeCanvas);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });

    let lastTime = 0;
    const throttle = 1000 / 30; // Reduced to 30fps for better performance

    const animate = (currentTime: number) => {
      if (!isVisible) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      if (currentTime - lastTime >= throttle) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ripplesRef.current = ripplesRef.current.filter(ripple => {
          ripple.radius += ripple.speed;
          ripple.opacity -= 0.003; // Faster fade

          if (ripple.opacity > 0 && ripple.radius < ripple.maxRadius) {
            // Draw only one ripple for performance
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `hsla(224, 76%, 48%, ${ripple.opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            return true;
          }
          return false;
        });

        lastTime = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const initialRippleTimer = setTimeout(() => {
      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;
      const maxDimension = Math.max(canvasWidth, canvasHeight);

      ripplesRef.current.push({
        x: centerX,
        y: centerY,
        radius: 0,
        maxRadius: maxDimension * 1.2, // Smaller radius
        opacity: 0.4, // Lower opacity
        speed: 6, // Slightly faster
      });
    }, 300);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(initialRippleTimer);
    };
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" aria-hidden="true" />

      {!isMobile && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.5 }}
          aria-hidden="true"
        />
      )}

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
                className="group border-2 border-border hover:border-primary hover:bg-primary/5 font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
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
                className="group font-semibold px-8 py-6 rounded-full hover:bg-secondary transition-all duration-300"
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

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" aria-hidden="true" />
    </section>
  );
};
