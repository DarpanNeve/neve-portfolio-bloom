import { NavbarClient } from "./NavbarClient";

export const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "Github", href: "https://github.com/DarpanNeve", label: "GitHub" },
    {
      icon: "Linkedin",
      href: "https://www.linkedin.com/in/darpanneve/",
      label: "LinkedIn",
    },
    { icon: "Mail", href: "mailto:darpanneve3@gmail.com", label: "Email" },
  ];

  return <NavbarClient navItems={navItems} socialLinks={socialLinks} />;
};