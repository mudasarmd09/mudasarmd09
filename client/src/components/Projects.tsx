import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Award, Users, TrendingUp } from "lucide-react";
import type { Project } from "@/types/portfolio";

export function Projects() {
  const projects: Project[] = [
    {
      title: "DeFi Trading Dashboard",
      description:
        "A decentralized finance trading dashboard with Web3 integration, real-time price tracking, and portfolio management. Built with React.js and connected to Ethereum blockchain using Web3.js and smart contracts.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      technologies: ["React.js", "Web3.js", "Solidity", "TypeScript", "Ethers.js"],
      githubUrl: "https://github.com/mudasarmd09/defi-trading-dashboard",
      liveUrl: "https://defi-dashboard-demo.vercel.app",
      category: "Blockchain",
      status: "Live",
      impact: "Smart Contract Integration"
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered content creation platform that integrates OpenAI APIs to help users generate articles, social media posts, and marketing copy. Features user authentication, content templates, and export functionality.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Next.js", "OpenAI API", "Node.js", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/mudasarmd09/ai-content-generator",
      liveUrl: "https://ai-content-demo.vercel.app",
      category: "AI/ML",
      status: "Live",
      impact: "AI-Powered Content Creation"
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization, inventory management, and sales tracking. Built with React.js and integrates with REST APIs for data management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React.js", "D3.js", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/mudasarmd09/ecommerce-analytics",
      liveUrl: "https://ecommerce-analytics-demo.vercel.app",
      category: "Full Stack",
      status: "Live",
      impact: "Real-time Analytics"
    },
    {
      title: "NFT Marketplace",
      description:
        "A modern NFT marketplace with minting, trading, and collection features. Built on Ethereum blockchain with smart contracts, featuring wallet integration, user profiles, and IPFS storage for metadata.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop",
      technologies: ["React.js", "Solidity", "Ethers.js", "IPFS", "Hardhat"],
      githubUrl: "https://github.com/mudasarmd09/nft-marketplace",
      category: "Blockchain",
      status: "Live",
      impact: "NFT Trading Platform"
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A real-time messaging platform with instant messaging, file sharing, and group chat features. Built with Socket.io for real-time communication and includes user authentication and message history.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/mudasarmd09/realtime-chat",
      liveUrl: "https://realtime-chat-app.vercel.app",
      category: "Full Stack",
      status: "Live",
      impact: "Real-time Communication"
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology. Features voter authentication, real-time vote counting, and immutable vote recording with smart contract security.",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=500&h=300&fit=crop",
      technologies: ["React.js", "Solidity", "Web3.js", "MetaMask", "Ganache"],
      githubUrl: "https://github.com/mudasarmd09/blockchain-voting",
      category: "Blockchain",
      status: "Live",
      impact: "Secure Voting System"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-muted/30 to-background"
      role="region"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 
            id="projects-heading"
            className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in"
          >
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto animate-fade-in">
            Modern web applications showcasing <span className="text-portfolio-blue font-semibold">full-stack expertise</span> • 
            Built with <span className="text-portfolio-purple font-semibold">React.js, Node.js & Web3</span> • 
            Featuring <span className="text-portfolio-cyan font-semibold">clean code and scalable architecture</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background/95 to-muted/20 backdrop-blur-sm group animate-scale-in hover:shadow-2xl hover:shadow-portfolio-blue/10 transition-all duration-500 hover:scale-[1.02] pulse-glow`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500/90 text-white border-0 shadow-lg">
                    {project.status}
                  </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-portfolio-blue/90 text-white border-0 shadow-lg">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl gradient-text group-hover:text-portfolio-purple transition-colors duration-300">
                  {project.title}
                </CardTitle>
                
                {/* Impact Metrics */}
                <div className="flex items-center gap-2 mt-3 text-sm text-portfolio-blue bg-portfolio-blue/10 px-3 py-1.5 rounded-full border border-portfolio-blue/20 w-fit">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">{project.impact}</span>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20 hover:bg-portfolio-purple/10 hover:text-portfolio-purple hover:border-portfolio-purple/20 transition-all duration-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed opacity-70"
                    disabled
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-gray-400/50 text-gray-500 cursor-not-allowed opacity-70"
                    disabled
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
