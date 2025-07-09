import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "DeFi Trading Platform",
      description:
        "A sophisticated decentralized finance platform built with React.js and Web3.js. Features real-time trading, yield farming, and portfolio management with advanced security protocols and MetaMask integration.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      technologies: ["React.js", "Web3.js", "Solidity", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/mudasarmd09/defi-trading-platform",
      category: "Blockchain",
      status: "Live",
      impact: "10k+ Active Users"
    },
    {
      title: "AI-Powered Content Studio",
      description:
        "An intelligent content management system that leverages OpenAI APIs to generate, optimize, and schedule content across multiple platforms. Built with Next.js, featuring real-time collaboration and analytics.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Next.js", "OpenAI API", "Node.js", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/mudasarmd09/ai-content-studio",
      web: "https://ai-content-studio.vercel.app",
      category: "AI/ML",
      status: "Live",
      impact: "500+ Businesses"
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization, inventory management, and predictive analytics. Built with React.js and integrates with major e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React.js", "D3.js", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/mudasarmd09/ecommerce-analytics",
      web: "https://ecommerce-analytics-demo.vercel.app",
      category: "Full Stack",
      status: "Live",
      impact: "2M+ Data Points"
    },
    {
      title: "NFT Marketplace",
      description:
        "A modern NFT marketplace with minting, trading, and auction features. Built on Ethereum blockchain with smart contracts, featuring advanced filtering, user profiles, and integrated wallet connections.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop",
      technologies: ["React.js", "Solidity", "Ethers.js", "IPFS", "Hardhat"],
      githubUrl: "https://github.com/mudasarmd09/nft-marketplace",
      category: "Blockchain",
      status: "Live",
      impact: "5k+ NFTs Traded"
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A scalable real-time messaging platform with end-to-end encryption, file sharing, and group management. Built with Socket.io, featuring offline support and push notifications.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/mudasarmd09/realtime-chat",
      web: "https://realtime-chat-app.vercel.app",
      category: "Full Stack",
      status: "Live",
      impact: "1k+ Active Users"
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology. Features voter verification, real-time results, and immutable vote recording with advanced cryptographic security.",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=500&h=300&fit=crop",
      technologies: ["React.js", "Solidity", "Web3.js", "MetaMask", "Ganache"],
      githubUrl: "https://github.com/mudasarmd09/blockchain-voting",
      category: "Blockchain",
      status: "Live",
      impact: "Secure Elections"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto animate-fade-in">
            Innovative solutions that demonstrate my expertise in modern web technologies, 
            blockchain development, and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background/80 to-muted/20 group animate-scale-in hover:shadow-2xl hover:shadow-portfolio-blue/10 transition-all duration-500 hover:scale-105`}
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
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
                
                {/* Impact Metric */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                  <span className="text-sm text-portfolio-blue font-medium">{project.impact}</span>
                </div>
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
                  {project.githubUrl && (
                    <Button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-300 text-white font-medium"
                    >
                      View Code
                    </Button>
                  )}

                  {project.web && (
                    <Button
                      onClick={() => window.open(project.web, "_blank")}
                      size="sm"
                      variant="outline"
                      className="flex-1 text-portfolio-blue border-portfolio-blue hover:bg-portfolio-blue/10 font-medium"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
