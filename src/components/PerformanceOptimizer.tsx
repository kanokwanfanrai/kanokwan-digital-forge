
import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload important images
      const linkPreloadImage = document.createElement('link');
      linkPreloadImage.rel = 'preload';
      linkPreloadImage.as = 'image';
      linkPreloadImage.href = '/placeholder.svg';
      document.head.appendChild(linkPreloadImage);

      // Preconnect to external domains
      const domains = ['www.youtube.com', 'www.facebook.com'];
      domains.forEach(domain => {
        const linkPreconnect = document.createElement('link');
        linkPreconnect.rel = 'preconnect';
        linkPreconnect.href = `https://${domain}`;
        document.head.appendChild(linkPreconnect);
      });
    };

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      // Load non-critical CSS
      const loadCSS = (href: string) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.media = 'print';
        link.onload = () => { link.media = 'all'; };
        document.head.appendChild(link);
      };

      // Add any non-critical CSS here if needed
    };

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker registration failed, but continue silently
        });
      }
    };

    preloadResources();
    lazyLoadResources();
    registerServiceWorker();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
