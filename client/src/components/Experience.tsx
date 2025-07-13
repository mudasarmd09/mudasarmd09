import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, MapPinIcon, BriefcaseIcon, TrendingUpIcon } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer & Tech Consultant",
      company: "Freelance",
      duration: "Jan 2019 – Present",
      location: "Remote",
      type: "Founder & Lead Developer",
      description: "Delivering end-to-end digital solutions for startups and established businesses, specializing in React.js, Node.js, blockchain integrations, and AI-powered applications.",
      achievements: [
        "Delivered 10+ MVPs, dashboards, and cross-platform applications",
        "Built blockchain integrations and smart contract solutions",
        "Integrated AI tools and OpenAI APIs for enhanced user experiences",
        "Specialized in clean code practices and scalable architectures",
        "Maintained strong client relationships through clear communication",
        "Focused on user-centered design and modern development practices"
      ],
      skills: ["React.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Solidity", "Web3.js", "OpenAI API", "UI/UX Design"],
      icon: BriefcaseIcon
    }
  ];

  const stats = [
    { label: "MVPs Delivered", value: "10+", icon: TrendingUpIcon },
    { label: "Years Experience", value: "5+", icon: CalendarIcon },
    { label: "Core Specialties", value: "3", icon: BriefcaseIcon },
    { label: "Technologies", value: "15+", icon: MapPinIcon }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Professional Journey
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="font-semibold text-portfolio-blue">5+ years</span> of delivering reliable digital solutions • 
            From blockchain integrations to AI-powered applications • 
            <span className="gradient-text font-semibold">Building scalable, modern solutions</span>
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={`stat-${index}`} className="text-center bg-gradient-to-br from-background/95 to-muted/20 backdrop-blur-sm border-portfolio-blue/20 hover:shadow-xl hover:shadow-portfolio-blue/10 transition-all duration-500 hover:scale-[1.02] pulse-glow">
                <CardContent className="p-6">
                  <div className="mb-2 flex justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card key={`experience-${index}`} className="group bg-gradient-to-br from-background/95 to-muted/20 backdrop-blur-sm border-portfolio-blue/20 hover:shadow-xl hover:shadow-portfolio-blue/10 transition-all duration-500 hover:scale-[1.01] pulse-glow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                        <Badge variant="secondary" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-lg font-medium text-foreground mb-1">
                        {exp.company}
                      </CardDescription>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={`achievement-${index}-${achIndex}`} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={`exp-skill-${index}-${skillIndex}`} 
                          variant="outline" 
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to take on new challenges and deliver exceptional results
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Available for Freelance Projects
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              Open to Full-time Opportunities
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}