"use client";
import { useState, useEffect, useRef } from "react";

export const AboutClient = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" aria-label="About me" ref={sectionRef}>
      <div
        className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
      >
        {children}
      </div>
    </section>
  );
};
