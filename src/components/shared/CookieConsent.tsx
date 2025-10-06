'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Kolla om användaren redan har accepterat cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm">
            <p className="mb-2">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. Cookies används för att webbplatsen ska fungera korrekt och för att visa kartor via Google Maps.
            </p>
            <p className="text-xs text-gray-400">
              Läs mer i vår{' '}
              <Link href="/behandlingar-kunskap#forsta-besoket" className="underline hover:text-white">
                integritetspolicy
              </Link>
              .
            </p>
          </div>
          
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm font-medium transition-colors"
            >
              Avböj
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-md text-sm font-medium transition-colors"
            >
              Acceptera
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}