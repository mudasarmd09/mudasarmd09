
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text animate-fade-in">
          Mudasar MD
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['about', 'skills', 'projects', 'contact'].map((item, index) => (
            <Button
              key={item}
              variant="ghost"
              onClick={() => scrollToSection(item)}
              className={`capitalize hover:text-portfolio-blue transition-colors duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
  <a
    href="/assets/resume.pdf"
    download
    className="flex items-center space-x-2 text-sm font-medium px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors duration-300 animate-fade-in"
    style={{ animationDelay: '0.4s' }}
  >
    <Download className="w-4 h-4" />
    <span>Resume</span>
  </a>
</div>


        {/* <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div> */}
      </nav>
    </header>
  );
}
