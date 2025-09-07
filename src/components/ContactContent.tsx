import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { ContactCard } from "./ContactCard";

export const ContactContent = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "darpanneve3@gmail.com",
      href: "mailto:darpanneve3@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "India",
      href: "#",
      color: "text-purple-400",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      href: "https://github.com/DarpanNeve",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/darpanneve/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 text-gradient`}
        >
          Let's Connect
        </h2>
        <p
          className={`text-xl text-muted-foreground max-w-3xl mx-auto`}
        >
          Ready to collaborate on your next project? Let's discuss how we can
          bring your ideas to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div
          className={`space-y-8`}
        >
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Get In Touch
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm always excited to discuss new opportunities, innovative
              projects, or just chat about technology. Feel free to reach out
              through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <ContactCard key={info.title} info={info} />
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-4">
              Follow Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.title}
                  variant="outline"
                  size="lg"
                  asChild
                  className={`rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 ${social.color}`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    <span className="ml-2">{social.title}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};
