import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kiropraktorerna i Jönköping',
  description: 'Professionell kiropraktisk behandling i centrala Jönköping. Legitimerade kiropraktorer med lång erfarenhet.',
  keywords: 'kiropraktor, jönköping, ryggbesvär, nackbesvär, behandling, legitimerad',
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
              'url': 'https://www.kiro-jkpg.se',
              'telephone': '+4636165990',
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
                  'dayOfWeek': ['Monday', 'Tuesday'],
                  'opens': '09:00',
                  'closes': '18:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': 'Wednesday',
                  'opens': '09:00',
                  'closes': '12:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': ['Thursday', 'Friday'],
                  'opens': '09:00',
                  'closes': '18:00'
                }
              ]
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
        </div>
      </body>
    </html>
  );
}