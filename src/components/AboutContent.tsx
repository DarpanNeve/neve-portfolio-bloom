
import { Code, Rocket, Users, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const AboutContent = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Proficient in modern mobile apps and web technologies including React, Node.js, Python, and cloud platforms.",
      color: "text-blue-400",
    },
    {
      icon: Rocket,
      title: "Innovation & Performance",
      description:
        "Built applications serving 100+ users with 30% faster sync times and 45% throughput gains.",
      color: "text-green-400",
    },
    {
      icon: Users,
      title: "Leadership & Community",
      description:
        "Led GDSC PCCoE as Flutter Head, organizing events with 700+ participants and mentoring developers.",
      color: "text-purple-400",
    },
    {
      icon: Trophy,
      title: "Recognition & Impact",
      description:
        "2nd Runner-up in National Hackathon BLUE-BIT and Multiple Awards in Hackathons across India.",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 text-gradient`}
        >
          About Me
        </h2>
        <p
          className={`text-xl text-foreground max-w-3xl mx-auto`}
        >
          Passionate software engineer with expertise in full-stack
          development, mobile applications, and modern DevOps practices.
        </p>
      </div>

      {/* About Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div
          className={`space-y-6`}
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Building the Future, One Line at a Time
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With expertise spanning multiple programming languages and
            frameworks, I create scalable solutions that make a real impact.
            From Flutter mobile apps to full-stack web applications, I bring
            ideas to life with clean, efficient code.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My experience includes leading development teams, architecting
            cloud-native solutions, and implementing CI/CD pipelines. I'm
            passionate about mentoring fellow developers and contributing to
            the tech community through open-source projects and events.
          </p>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">
              Technologies I Love
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Flutter",
                "Python",
                "JavaScript",
                "React",
                "Node.js",
                "AWS",
                "Docker",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={highlight.title}
                className={`glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-primary/10 ${highlight.color} group-hover:scale-110 transition-transform duration-300`}
                    >
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
