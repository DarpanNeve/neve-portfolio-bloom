import { Mail, MapPin, Github, Linkedin, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { ContactCard } from "./ContactCard";

export const ContactContent = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "darpanneve3@gmail.com",
      href: "mailto:darpanneve3@gmail.com",
      color: "text-primary",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "India (Remote Worldwide)",
      href: "#",
      color: "text-purple-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      href: "https://github.com/DarpanNeve",
      color: "hover:text-foreground",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/darpanneve/",
      color: "hover:text-primary",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          Let's Connect
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Seeking new opportunities to contribute as a full-stack engineer.
          Let's discuss how I can add value to your team.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Available for Hire
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am focused on building <span className="text-foreground font-semibold">scalable, production-ready systems</span> that drive real business value.
              </p>
              <p>
                I am currently seeking <span className="text-foreground font-semibold">full-time engineering roles</span> where I can leverage my expertise in distributed systems and performance optimization. I am ready to bring immediate value to a forward-thinking engineering team.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info) => (
              <ContactCard key={info.title} info={info} />
            ))}
          </div>

          <div>
            <h4 className="text-xl font-bold text-foreground mb-4">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.title}
                  variant="outline"
                  size="lg"
                  asChild
                  className={`rounded-xl border-border hover:border-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300 ${social.color}`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.title}
                  >
                    {social.icon}
                    <span className="ml-2">{social.title}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="glassmorphism border-border/50 rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            What I Can Help With
          </h3>
          <ul className="space-y-4">
            {[
              "Full-Stack Web Development",
              "Mobile App Development (Flutter)",
              "Cloud Architecture & DevOps",
              "API Design & Development",
              "System Design & Scalability",
              "Technical Consulting",
            ].map((service) => (
              <li key={service} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{service}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="mailto:darpanneve3@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
