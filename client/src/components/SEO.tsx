import { useEffect } from 'react';
import type { SeoMetadata } from '@/types/portfolio';

interface SEOProps {
  metadata: SeoMetadata;
}

export function SEO({ metadata }: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = metadata.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', metadata.keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = metadata.keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Update meta author
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
      metaAuthor.setAttribute('content', metadata.author);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'author';
      meta.content = metadata.author;
      document.head.appendChild(meta);
    }

    // Update Open Graph tags
    const updateOrCreateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };

    updateOrCreateOGTag('og:title', metadata.title);
    updateOrCreateOGTag('og:description', metadata.description);
    updateOrCreateOGTag('og:type', 'website');
    updateOrCreateOGTag('og:url', window.location.href);
    
    if (metadata.ogImage) {
      updateOrCreateOGTag('og:image', metadata.ogImage);
    }

    // Update Twitter Card tags
    const updateOrCreateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag);
      }
    };

    updateOrCreateTwitterTag('twitter:card', 'summary_large_image');
    updateOrCreateTwitterTag('twitter:title', metadata.title);
    updateOrCreateTwitterTag('twitter:description', metadata.description);
    
    if (metadata.ogImage) {
      updateOrCreateTwitterTag('twitter:image', metadata.ogImage);
    }

    // Update canonical URL if provided
    if (metadata.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', metadata.canonical);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', metadata.canonical);
        document.head.appendChild(canonicalLink);
      }
    }

    // Add JSON-LD structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": metadata.author,
      "jobTitle": "Senior Full Stack Developer",
      "description": metadata.description,
      "url": window.location.origin,
      "email": "mudasarmd09@gmail.com",
      "telephone": "+92 312 4353320",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Pakistan",
        "addressRegion": "Punjab"
      },
      "sameAs": [
        "https://github.com/mudasarmd09",
        "https://linkedin.com/in/mudasarmd"
      ],
      "knowsAbout": [
        "Full Stack Development",
        "React.js",
        "Node.js",
        "TypeScript",
        "Blockchain",
        "Web3",
        "Smart Contracts",
        "AI/ML Integration",
        "Enterprise Architecture"
      ]
    };

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      (structuredDataScript as HTMLScriptElement).type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }
  }, [metadata]);

  return null; // This component doesn't render anything
}