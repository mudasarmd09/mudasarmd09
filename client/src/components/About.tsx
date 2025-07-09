
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Code, Users, Zap, Globe, Lightbulb } from 'lucide-react';

export function About() {
  const achievements = [
    { 
      icon: Code, 
      number: '50+', 
      label: 'Projects Delivered',
      description: 'Complex applications built and deployed'
    },
    { 
      icon: Users, 
      number: '25+', 
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    { 
      icon: Award, 
      number: '2+', 
      label: 'Years Experience',
      description: 'In full-stack development'
    },
    { 
      icon: Globe, 
      number: '100%', 
      label: 'Success Rate',
      description: 'Project completion guarantee'
    }
  ];

  const expertise = [
    { area: 'Full-Stack Development', level: 'Expert' },
    { area: 'Blockchain & Web3', level: 'Advanced' },
    { area: 'AI/ML Integration', level: 'Advanced' },
    { area: 'UI/UX Design', level: 'Proficient' },
    { area: 'DevOps & Cloud', level: 'Intermediate' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Passionate developer dedicated to creating innovative digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <Card className="hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background/80 to-muted/20 hover:shadow-2xl hover:shadow-portfolio-blue/10 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20">
                    <Lightbulb className="w-6 h-6 text-portfolio-blue" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">My Development Philosophy</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I believe in building technology that not only solves problems but creates opportunities. 
                  My approach combines cutting-edge development practices with user-centered design to deliver 
                  solutions that are both powerful and intuitive.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Specializing in React.js, Node.js, and emerging Web3 technologies, I help businesses 
                  navigate the digital transformation landscape. From blockchain integration to AI-powered 
                  applications, I bridge the gap between complex technology and practical business value.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-portfolio-blue mb-3">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((item, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20 hover:bg-portfolio-purple/10 hover:text-portfolio-purple transition-all duration-300"
                      >
                        {item.area} • {item.level}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card 
                    key={index} 
                    className={`text-center hover-glow border-portfolio-purple/20 bg-gradient-to-br from-background/80 to-muted/20 hover:shadow-xl hover:shadow-portfolio-purple/10 transition-all duration-500 hover:scale-105 animate-scale-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20">
                          <IconComponent className="w-6 h-6 text-portfolio-blue" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold gradient-text mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.description}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Professional Values Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-12 animate-fade-in">What Drives Me</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovation First",
                description: "Embracing emerging technologies to create cutting-edge solutions"
              },
              {
                icon: Users,
                title: "Client Success",
                description: "Building lasting partnerships through exceptional delivery and support"
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Contributing to projects that make a positive difference worldwide"
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index}
                  className={`hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background/80 to-muted/20 hover:shadow-xl hover:shadow-portfolio-blue/10 transition-all duration-500 hover:scale-105 animate-scale-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20">
                        <IconComponent className="w-8 h-8 text-portfolio-blue" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 gradient-text">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
