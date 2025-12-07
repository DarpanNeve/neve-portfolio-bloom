
import { Code, Rocket, Users, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const AboutContent = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description:
        "Delivering end-to-end solutions with modern frameworks - React, Node.js, Python, and Flutter for web and mobile platforms.",
      color: "text-primary",
    },
    {
      icon: Rocket,
      title: "Performance-Driven",
      description:
        "Built production systems serving 1000+ users with optimized performance, 30% faster load times, and 45% improved throughput.",
      color: "text-purple-500",
    },
    {
      icon: Users,
      title: "Leadership & Mentoring",
      description:
        "Led GDSC PCCoE as Flutter Head, organized 15+ technical events with 700+ participants, and mentored aspiring developers.",
      color: "text-pink-500",
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description:
        "2nd Runner-up at National Hackathon BLUE-BIT and multiple awards across competitive coding events nationwide.",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          About Me
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Full-stack engineer passionate about building scalable, high-performance
          applications that solve real-world problems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-foreground">
            Crafting Digital Solutions
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With expertise across the full technology stack, I transform ideas into
            production-ready applications. From scalable Flutter mobile apps to
            robust full-stack web platforms, I deliver solutions that drive measurable results.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines technical excellence with business acumen -
            understanding not just how to build software, but why it matters.
            Whether collaborating with teams or working independently on projects,
            I bring the same commitment to quality and innovation.
          </p>

          <div className="space-y-4 pt-4">
            <h4 className="text-xl font-semibold text-foreground">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Flutter",
                "TypeScript",
                "AWS",
                "Docker",
                "MongoDB",
                "PostgreSQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 border border-border rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={highlight.title}
                className="glassmorphism border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-primary/10 ${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
