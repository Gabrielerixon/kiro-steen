// components/shared/OptimizedImage.tsx
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false 
}: OptimizedImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

// Usage example for homepage hero section:
// Replace the placeholder div with:

/*
<OptimizedImage
  src="/images/klinik-exterior.jpg"
  alt="Kiropraktorerna i Jönköping - exteriör av kliniken på Östra Storgatan"
  width={600}
  height={400}
  className="h-64 lg:h-96 rounded-lg shadow-xl"
  priority={true}
/>
*/

// For Steen's profile image in Om Oss:
/*
<OptimizedImage
  src="/images/steen-feldinger.jpg"
  alt="Steen Feldinger - Legitimerad kiropraktor"
  width={160}
  height={160}
  className="w-40 h-40 rounded-full"
/>
*/

// Additional responsive improvements for mobile:

// Updated hero section with better mobile layout:
export function ResponsiveHeroSection() {
  return (
    <section className="bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Välkommen till Kiropraktorerna i Jönköping!
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed">
              Vi erbjuder professionell kiropraktisk behandling i centrala Jönköping. 
              Våra legitimerade kiropraktorer har lång erfarenhet inom området.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-teal-700 text-white font-medium py-4 px-8 rounded-md hover:bg-teal-800 transition-colors text-lg">
                Boka Tid
              </button>
              <button className="bg-teal-700 text-white font-medium py-4 px-8 rounded-md hover:bg-teal-800 transition-colors text-lg">
                Läs mer om behandlingar
              </button>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl order-first lg:order-last">
            {/* Add actual image here */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-center px-4">
                Bild på klinik<br />
                <span className="text-sm">(Lägg till: klinik-exterior.jpg i public/images/)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Better mobile navigation improvements:
export function MobileNavbarImprovements() {
  return `
/* Add to globals.css for better mobile experience */

/* Ensure touch targets are large enough */
@media (max-width: 1024px) {
  .navbar-link {
    min-height: 44px;
    display: flex;
    align-items: center;
    padding: 12px 16px;
  }
  
  /* Better mobile menu spacing */
  .mobile-menu-item {
    padding: 16px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Smoother animations */
  .mobile-menu {
    transition: all 0.3s ease-in-out;
  }
}

/* Improve form experience on mobile */
@media (max-width: 768px) {
  input, textarea, select {
    font-size: 16px; /* Prevents zoom on iOS */
  }
  
  .form-container {
    padding: 16px;
  }
}
  `;
}