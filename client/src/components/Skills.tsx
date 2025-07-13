
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { SkillCategory } from "@/types/portfolio";
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Smartphone,
  Brain,
  Server,
  GitBranch,
  Shield,
  Zap,
  Cloud,
  Workflow
} from "lucide-react";

export function Skills() {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React.js/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "UI/UX Design", level: 82 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js/Express", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "REST APIs", level: 90 },
        { name: "Python", level: 78 },
        { name: "Git Version Control", level: 85 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain & Web3",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "Solidity", level: 82 },
        { name: "Web3.js/Ethers.js", level: 85 },
        { name: "Smart Contracts", level: 80 },
        { name: "MetaMask Integration", level: 88 },
        { name: "IPFS", level: 75 },
        { name: "Blockchain Integration", level: 82 }
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "AI/ML & Tools",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "OpenAI APIs", level: 85 },
        { name: "Python AI Libraries", level: 78 },
        { name: "Docker", level: 80 },
        { name: "Firebase", level: 82 },
        { name: "Figma", level: 85 },
        { name: "Project Management", level: 88 }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section 
      id="skills" 
      ref={elementRef}
      className="section-padding bg-gradient-to-br from-background via-muted/20 to-background"
      role="region"
      aria-labelledby="skills-heading"
    >
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary animate-fade-in"
          >
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            5+ years of full-stack development expertise • Modern architecture patterns • 
            <span className="text-portfolio-blue font-semibold">Specializing in React.js, Node.js, Web3, and AI/ML</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={`skill-category-${categoryIndex}`}
              className="group hover:shadow-xl hover:shadow-portfolio-blue/10 border-portfolio-blue/20 bg-gradient-to-br from-background/95 to-muted/20 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] animate-scale-in"
              style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-r ${category.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-bold gradient-text">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={`${category.title}-skill-${skillIndex}`}
                    className="space-y-2 animate-slide-in-left group/skill"
                    style={{ animationDelay: `${0.4 + skillIndex * 0.05}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground text-sm group-hover/skill:text-portfolio-blue transition-colors">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-portfolio-blue bg-portfolio-blue/10 px-2 py-0.5 rounded-full">{skill.level}%</span>
                        {skill.level >= 90 && (
                          <span className="text-xs text-yellow-500" title="Expert Level">⭐</span>
                        )}
                      </div>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={isIntersecting ? skill.level : 0} 
                        className="h-1.5 bg-muted/50 transition-all duration-1000 rounded-full"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-1.5 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out shadow-sm`}
                        style={{ 
                          width: isIntersecting ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.6 + skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Years Experience", value: "5+", icon: "🚀" },
            { label: "Projects Completed", value: "50+", icon: "✨" },
            { label: "Technologies Mastered", value: "25+", icon: "⚡" },
            { label: "Client Satisfaction", value: "100%", icon: "💎" }
          ].map((stat, index) => (
            <div 
              key={`stat-${index}`}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-portfolio-blue/10 to-portfolio-purple/10 border border-portfolio-blue/20 hover:border-portfolio-purple/40 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
