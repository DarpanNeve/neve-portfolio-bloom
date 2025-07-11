
import { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-Stack Software Engineer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: Math.random() * 100 + '%',
              animationDuration: Math.random() * 3 + 3 + 's',
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
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-scale-in">
            <span className="text-gradient animate-gradient-x bg-gradient-to-r from-primary via-cyan-400 to-purple-400">
              Darpan Neve
            </span>
          </h1>
          
          {/* Typing animation for role */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground font-mono">
              <span className="typing-cursor">{typedText}</span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-in-right">
            I craft exceptional digital experiences with modern technologies, 
            specializing in scalable web applications and innovative mobile solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-cyan-500 hover:from-cyan-500 hover:to-primary text-white font-semibold px-8 py-3 rounded-full glow-effect hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
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
