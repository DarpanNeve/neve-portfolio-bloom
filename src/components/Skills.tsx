'use client';
import { useState, useEffect, useRef } from "react";
import {
  Code,
  Palette,
  Cloud,
  Database,
  Terminal,
  Smartphone,
} from "lucide-react";

const skillsData = {
  languages: {
    icon: <Code className="h-8 w-8 mb-4 text-cyan-400" />,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Dart", "HTML/CSS"],
  },
  frameworks: {
    icon: <Palette className="h-8 w-8 mb-4 text-purple-400" />,
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Flutter",
      "Tailwind CSS",
    ],
  },
  cloud: {
    icon: <Cloud className="h-8 w-8 mb-4 text-blue-400" />,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Vercel", "Netlify", "CI/CD", "Git/GitHub"],
  },
  databases: {
    icon: <Database className="h-8 w-8 mb-4 text-green-400" />,
    title: "Databases",
    skills: ["MongoDB", "Firebase", "PostgreSQL", "MySQL"],
  },
  tools: {
    icon: <Terminal className="h-8 w-8 mb-4 text-yellow-400" />,
    title: "Tools & Platforms",
    skills: ["VS Code", "Postman", "Figma", "Jira", "Linux"],
  },
  mobile: {
    icon: <Smartphone className="h-8 w-8 mb-4 text-red-400" />,
    title: "Mobile Development",
    skills: ["Flutter", "Firebase", "Provider", "BLoC"],
  },
};

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="skills" className="py-20 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 text-gradient transition-all duration-1000 ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
            }`}
          >
            Technical Skills
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
            }`}
          >
            My ever-growing toolkit for building modern, scalable, and
            performant applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(skillsData).map((category, index) => (
            <div
              key={category.title}
              className={`glassmorphism border-primary/20 p-8 rounded-xl hover:border-primary/40 transition-all duration-500 hover:scale-105 glow-effect ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};