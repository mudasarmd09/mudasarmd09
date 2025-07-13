import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import type { NavigationItem } from '@/types/portfolio';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      const menuButton = document.querySelector('[data-menu-button]');

      if (isMobileMenuOpen && 
          !mobileMenu?.contains(target) && 
          !menuButton?.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const navItems: NavigationItem[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg'
          : 'bg-background/20 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        {/* Left: Brand Logo */}
        <div className="flex items-center group">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl md:text-3xl font-bold gradient-text tracking-tight hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 rounded-md px-1"
            aria-label="Mudasar MD - Go to top"
          >
            Mudasar MD
          </button>
        </div>

        {/* Center: Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Section navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-muted-foreground hover:text-portfolio-blue transition-all duration-300 font-semibold text-sm tracking-wide hover:scale-105 relative group focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 rounded-md px-2 py-1"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-portfolio-blue to-portfolio-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <a
            href="/assets/resume.pdf"
            download="Mudasar_MD_Resume.pdf"
            className="hidden sm:flex items-center space-x-2 text-sm font-medium px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50"
            aria-label="Download Mudasar MD's Resume"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            data-menu-button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="md:hidden p-3 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 active:bg-muted/70 min-w-[44px] min-h-[44px] flex items-center justify-center z-50"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Slide-out */}
        <div 
          data-mobile-menu
          className={`fixed top-[73px] right-0 h-[calc(100vh-73px)] w-auto min-w-[180px] bg-black/90 backdrop-blur-md border-l border-white/10 shadow-2xl md:hidden z-30 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Items */}
          <nav className="px-3 py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={`mobile-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left text-white/80 hover:text-portfolio-blue hover:bg-white/10 transition-all duration-300 font-semibold py-2.5 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:bg-white/10 whitespace-nowrap"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}

            {/* Resume Download */}
            <div className="pt-2 border-t border-white/10 mt-2">
              <a
                href="/assets/resume.pdf"
                download="Mudasar_MD_Resume.pdf"
                className="flex items-center space-x-2 text-sm font-medium px-3 py-2.5 text-white/80 hover:text-portfolio-blue hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 rounded-md whitespace-nowrap"
                aria-label="Download Mudasar MD's Resume"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}