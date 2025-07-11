
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Smartphone, Settings, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (isVisible) {
      const skillLevels = {
        'JavaScript': 95,
        'Python': 90,
        'React': 92,
        'Node.js': 88,
        'Flutter': 85,
        'AWS': 80,
        'Docker': 75,
        'MongoDB': 82,
        'PostgreSQL': 78,
        'FastAPI': 85,
        'Django': 80,
        'Firebase': 88
      };

      Object.entries(skillLevels).forEach(([skill, level]) => {
        let current = 0;
        const increment = level / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= level) {
            current = level;
            clearInterval(timer);
          }
          setProgress(prev => ({ ...prev, [skill]: Math.floor(current) }));
        }, 30);
      });
    }
  }, [isVisible]);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      color: 'from-blue-400 to-cyan-600',
      skills: [
        { name: 'JavaScript', level: progress.JavaScript || 0 },
        { name: 'React', level: progress.React || 0 },
        { name: 'Flutter', level: progress.Flutter || 0 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="h-6 w-6" />,
      color: 'from-green-400 to-emerald-600',
      skills: [
        { name: 'Python', level: progress.Python || 0 },
        { name: 'Node.js', level: progress['Node.js'] || 0 },
        { name: 'FastAPI', level: progress.FastAPI || 0 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      color: 'from-purple-400 to-pink-600',
      skills: [
        { name: 'AWS', level: progress.AWS || 0 },
        { name: 'Docker', level: progress.Docker || 0 },
        { name: 'Firebase', level: progress.Firebase || 0 }
      ]
    },
    {
      title: 'Database Systems',
      icon: <Database className="h-6 w-6" />,
      color: 'from-orange-400 to-red-600',
      skills: [
        { name: 'MongoDB', level: progress.MongoDB || 0 },
        { name: 'PostgreSQL', level: progress.PostgreSQL || 0 },
        { name: 'Django', level: progress.Django || 0 }
      ]
    }
  ];

  const achievements = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: '7+ Projects Delivered',
      description: 'Cross-platform applications serving thousands of users',
      color: 'text-blue-400'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: '600+ DSA Problems',
      description: 'Solved across multiple competitive programming platforms',
      color: 'text-green-400'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Leadership Experience',
      description: 'Flutter Head at GDSC PCCoE, mentoring developers',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gradient transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}>
            Proficient in modern technologies with hands-on experience in full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 glow-effect ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white animate-float`}>
                    {category.icon}
                  </div>
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className={`glassmorphism border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 text-center group ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className={`${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies List */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-foreground mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'Python', 'Dart', 'Java', 'Kotlin', 'C/C++', 'Go',
              'React', 'Flutter', 'Node.js', 'Express.js', 'FastAPI', 'Django',
              'Firebase', 'Docker', 'AWS', 'GCP', 'MongoDB', 'PostgreSQL',
              'RESTful APIs', 'GraphQL', 'Git', 'CI/CD', 'Agile/Scrum'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${1200 + index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
