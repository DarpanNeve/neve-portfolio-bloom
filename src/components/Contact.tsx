
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '@/hooks/use-toast';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'darpanneve3@gmail.com',
      href: 'mailto:darpanneve3@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'India',
      href: '#',
      color: 'text-purple-400'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      href: 'https://github.com/DarpanNeve',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/darpanneve/',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gradient transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            Let's Connect
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-8'
          }`}>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, 
                or just chat about technology. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group cursor-pointer"
                  onClick={() => window.open(info.href, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-primary/10 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 ml-auto" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.title}
                    variant="outline"
                    size="lg"
                    asChild
                    className={`rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 ${social.color}`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                      <span className="ml-2">{social.title}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className={`glassmorphism border-primary/20 hover:border-primary/40 glow-effect transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-primary/20 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-primary/20 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-primary/20 focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-primary/20 focus:border-primary min-h-[120px]"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-cyan-500 hover:to-primary text-white font-semibold glow-effect hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
