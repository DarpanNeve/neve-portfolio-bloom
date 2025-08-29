"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";

export const AboutClient = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    problems: 0,
    achievements: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        projects: 7,
        experience: 2,
        problems: 600,
        achievements: 5,
      };
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const intervals = Object.entries(targets).map(([key, target]) => {
        const increment = target / steps;
        let current = 0;

        return setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(intervals.find((interval) => interval === this));
          }
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [isVisible]);

  const stats = [
    { label: "Projects Built", value: counters.projects, suffix: "+" },
    { label: "Years Experience", value: counters.experience, suffix: "+" },
    { label: "DSA Problems", value: counters.problems, suffix: "+" },
    { label: "Achievements", value: counters.achievements, suffix: "+" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32" ref={sectionRef}>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 glow-effect ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
