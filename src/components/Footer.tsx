"use client";

import { Heart, Code } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Darpan Neve. All rights reserved.</span>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium hover:scale-110 transform transition-transform"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
