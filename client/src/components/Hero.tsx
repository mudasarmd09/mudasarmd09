import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import BackgroundParticles from "@/components/BackgroundParticles";
import mudasarAvatar from "@assets/Black Pattern Minimalist LinkedIn Profile Picture (1)_1752027422161.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const specialties = [
    "React.js", "Node.js", "Web3", "Blockchain", "AI/ML", "UI/UX"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <BackgroundParticles />
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/5 via-portfolio-purple/5 to-portfolio-cyan/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.portfolio-blue/10),transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.portfolio-purple/10),transparent_70%)] animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Professional Avatar Section */}
          <div className="flex flex-col items-center mb-12 animate-fade-in">
            <div className="relative mb-8">
              <Avatar className="w-48 h-48 ring-4 ring-portfolio-blue/30 hover:ring-portfolio-purple/50 transition-all duration-500 hover:scale-105 shadow-2xl shadow-portfolio-blue/20">
                <AvatarImage
                  src={mudasarAvatar}
                  alt="Mudasar MD"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl font-bold gradient-text bg-gradient-to-br from-portfolio-blue/20 to-portfolio-purple/20">
                  MD
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4 tracking-tight">
              Mudasar MD
            </h1>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {specialties.map((specialty, index) => (
                <span
                  key={specialty}
                  className="px-4 py-2 bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20 rounded-full text-sm font-medium border border-portfolio-blue/30 hover:border-portfolio-purple/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <h2
            className="text-3xl md:text-4xl text-foreground font-semibold mb-8 animate-fade-in max-w-4xl mx-auto leading-tight"
            style={{ animationDelay: "0.4s" }}
          >
            Transforming Ideas Into 
            <span className="gradient-text"> Digital Reality</span>
          </h2>

          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            I architect and build cutting-edge web applications, blockchain solutions, and AI-powered platforms. 
            From concept to deployment, I deliver scalable, secure, and innovative digital experiences that drive business growth.
          </p>

          {/* Premium CTA Section */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-portfolio-blue/25 px-8 py-6 text-lg font-semibold rounded-full"
            >
              Explore My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-portfolio-blue/50 hover:border-portfolio-purple/80 hover:bg-portfolio-blue/10 transition-all duration-500 hover:scale-105 px-8 py-6 text-lg font-semibold rounded-full hover:shadow-lg"
            >
              Let's Collaborate
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div
            className="flex items-center justify-center gap-8 mb-16 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/mudasarmd09",
                label: "GitHub",
                color: "hover:bg-gray-800"
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/mudasar-md-6921b235a",
                label: "LinkedIn",
                color: "hover:bg-blue-600"
              },
              {
                icon: Mail,
                href: "mailto:mudasarmd09@gmail.com",
                label: "Email",
                color: "hover:bg-red-600"
              },
            ].map(({ icon: Icon, href, label, color }, index) => (
              <a
                key={label}
                href={href}
                className={`p-4 rounded-full bg-gradient-to-r from-muted/50 to-muted/30 hover:from-portfolio-blue/20 hover:to-portfolio-purple/20 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-portfolio-blue/25 group ${color}`}
                aria-label={label}
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <Icon className="w-7 h-7 text-muted-foreground group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Elegant Scroll Indicator */}
          <div className="animate-bounce-slow" style={{ animationDelay: "1.2s" }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="rounded-full hover:bg-portfolio-blue/10 transition-all duration-300 p-3"
            >
              <ChevronDown className="w-8 h-8 text-muted-foreground animate-pulse" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
