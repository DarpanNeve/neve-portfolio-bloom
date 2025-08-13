// src/App.tsx
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SEO } from "./components/SEO";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <SEO
            title="Darpan Neve — Freelance Full-Stack Developer"
            description="Portfolio of Darpan Neve — React, Node.js & Python developer. Hire for web & mobile apps."
            image="https://darpanneve.com/og-image.png"
            url="https://darpanneve.com/"
          />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
