
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/DarpanNeve', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/darpanneve/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:darpanneve3@gmail.com', label: 'Email' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glassmorphism backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-gradient animate-pulse-neon hover:scale-110 transition-transform duration-300">
              DN
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium group"
                  onClick={() => {
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                asChild
                className="h-10 w-10 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              >
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="h-10 w-10 rounded-full"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glassmorphism rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-md hover:bg-primary/10"
                  onClick={() => {
                    setIsOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-3 pt-2 border-t border-border">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="h-10 w-10 rounded-full hover:bg-primary/10"
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon className="h-4 w-4" />
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
