
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Zap
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript", "HTML5", "CSS3"],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      title: "Web3 & Blockchain",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "DeFi", "NFTs"],
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      title: "AI/ML Integration",
      icon: <Brain className="w-6 h-6" />,
      skills: ["OpenAI APIs", "Python", "TensorFlow", "Machine Learning", "Natural Language Processing"],
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"],
      color: "bg-pink-500/10 text-pink-500 border-pink-500/20"
    },
    {
      title: "Tools & DevOps",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "Docker", "AWS", "Vercel", "MongoDB Atlas", "Figma"],
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={`skill-category-${categoryIndex}`}
              className="hover-glow border-border/50 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={`${category.title}-skill-${skillIndex}`}
                      variant="secondary" 
                      className={`skill-badge ${category.color}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
