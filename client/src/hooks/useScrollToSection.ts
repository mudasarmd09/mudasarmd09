import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to sections with professional easing
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Calculate offset for fixed header
    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Update URL hash without triggering scroll
    const newUrl = `${window.location.pathname}#${sectionId}`;
    window.history.pushState(null, '', newUrl);
  }, []);

  return scrollToSection;
}