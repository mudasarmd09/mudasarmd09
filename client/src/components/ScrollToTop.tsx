import { useState, useEffect, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  showThreshold?: number;
  hideInFooter?: boolean;
}

export function ScrollToTop({ 
  showThreshold = 300, 
  hideInFooter = true 
}: ScrollToTopProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Calculate scroll progress and visibility
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = Math.min((scrollTop / (docHeight - winHeight)) * 100, 100);
    
    // Update scroll progress
    setScrollProgress(scrollPercent);
    
    // Update visibility based on scroll threshold
    const shouldShow = scrollTop > showThreshold;
    
    // Hide in footer if enabled
    if (hideInFooter) {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isInFooter = footerRect.top < viewportHeight;
        setIsVisible(shouldShow && !isInFooter);
      } else {
        setIsVisible(shouldShow);
      }
    } else {
      setIsVisible(shouldShow);
    }
  }, [showThreshold, hideInFooter]);

  // Throttled scroll handler for better performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Don't render if not visible
  if (!isVisible) return null;

  // Calculate circumference for progress ring
  const radius = 24; // Radius of the progress circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`
          relative w-14 h-14 rounded-full
          bg-gradient-to-br from-background/80 to-background/60
          backdrop-blur-lg border border-white/10
          shadow-xl hover:shadow-2xl
          transition-all duration-300 ease-out
          hover:scale-110 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:ring-offset-2 focus:ring-offset-transparent
          group overflow-hidden
          ${isHovering ? 'shadow-portfolio-blue/20' : ''}
        `}
        aria-label={`Scroll to top (${Math.round(scrollProgress)}% scrolled)`}
        aria-describedby="scroll-progress"
      >
        {/* Background glow effect */}
        <div 
          className={`
            absolute inset-0 rounded-full
            bg-gradient-to-br from-portfolio-blue/20 to-portfolio-purple/20
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            animate-pulse
          `}
        />
        
        {/* Progress Ring SVG */}
        <svg
          className="absolute inset-0 w-full h-full transform -rotate-90"
          viewBox="0 0 56 56"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-white/10"
          />
          
          {/* Progress circle */}
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
            style={{
              filter: isHovering ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' : 'none'
            }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--portfolio-blue))" />
              <stop offset="50%" stopColor="hsl(var(--portfolio-purple))" />
              <stop offset="100%" stopColor="hsl(var(--portfolio-cyan))" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Chevron Icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <ChevronUp 
            className={`
              w-5 h-5 text-foreground
              transition-all duration-300
              group-hover:text-portfolio-blue
              group-active:scale-90
              ${isHovering ? 'animate-bounce' : ''}
            `}
            strokeWidth={2.5}
          />
        </div>
        
        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-150" />
      </button>
      
      {/* Screen reader only progress indicator */}
      <div id="scroll-progress" className="sr-only">
        Page scroll progress: {Math.round(scrollProgress)}%
      </div>
    </div>
  );
}