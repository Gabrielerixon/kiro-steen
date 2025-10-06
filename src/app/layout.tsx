import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/shared/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kiropraktorerna i Jönköping',
  description: 'Legitimerade kiropraktorer i centrala Jönköping. Vi hjälper dig med rygg- och nackbesvär samt andra muskel- och ledproblem. Professionell kiropraktisk behandling sedan 1979.',
  keywords: 'kiropraktor, Jönköping, ryggbehandling, nackbesvär, kiropraktik, legitimerad kiropraktor, ryggvärk, nackont, led- och muskelbesvär, manuell terapi, triggerpunktsterapi',
  authors: [{ name: 'Kiropraktorerna i Jönköping' }],
  openGraph: {
    title: 'Kiropraktorerna i Jönköping - Legitimerad Kiropraktisk Behandling',
    description: 'Legitimerade kiropraktorer i centrala Jönköping sedan 1979. Professionell behandling av rygg-, nacke- och ledbesvär.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://www.kiro-jkpg.se',
    siteName: 'Kiropraktorerna i Jönköping',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        {/* Schema.org strukturerade data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              'name': 'Kiropraktorerna i Jönköping',
              'description': 'Legitimerade kiropraktorer i centrala Jönköping. Professionell behandling av rygg-, nacke- och ledbesvär sedan 1979.',
              'url': 'https://www.kiro-jkpg.se',
              'telephone': '+4636165990',
              'email': 'steen@kiro-jkpg.se',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Östra Storgatan 8',
                'addressLocality': 'Jönköping',
                'postalCode': '553 21',
                'addressCountry': 'SE'
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': 57.781502,
                'longitude': 14.1655293
              },
              'openingHoursSpecification': [
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  'opens': '09:00',
                  'closes': '17:00'
                }
              ],
              'priceRange': '$$',
              'foundingDate': '1979',
              'paymentAccepted': 'Cash, Card, Swish',
              'currenciesAccepted': 'SEK'
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:bg-teal-600 focus:text-white focus:z-50"
          >
            Hoppa till innehåll
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}