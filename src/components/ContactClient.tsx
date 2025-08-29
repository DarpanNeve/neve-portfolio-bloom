"use client";
import { useState, useEffect, useRef } from "react";

export const ContactClient = ({ children }: { children: React.ReactNode }) => {
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
    <section
      id="contact"
      className="py-20 lg:py-32 bg-background/20"
      ref={sectionRef}
    >
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>
    </section>
  );
};
