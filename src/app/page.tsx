import Link from 'next/link';
import Image from 'next/image';
import BookingButton from '@/components/shared/BookingButton';
import Noteboard from '@/components/shared/Noteboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kiropraktorerna i Jönköping - Legitimerad Kiropraktisk Behandling',
  description: 'Legitimerade kiropraktorer i centrala Jönköping sedan 1979. Har du ont i ryggen, ont i nacken, ryggskott eller ischias? Vi hjälper dig med rygg-, nacke- och ledbesvär. Boka tid idag - Östra Storgatan 8.',
  keywords: 'kiropraktor Jönköping, ont i ryggen Jönköping, ont i nacken behandling, ryggbehandling, nackbesvär, ryggont, nackont, kiropraktik, legitimerad kiropraktor, ryggvärk, ryggskott, ischias, diskbråck behandling, led- och muskelbesvär, manuell terapi, kiropraktor östra storgatan, kiropraktor centrala jönköping, bästa kiropraktor jönköping',  alternates: {
    canonical: 'https://www.kiro-jkpg.se',
  },
  openGraph: {
    title: 'Kiropraktorerna i Jönköping - Legitimerad Kiropraktisk Behandling',
    description: 'Legitimerade kiropraktorer i centrala Jönköping sedan 1979. Professionell behandling av rygg-, nacke- och ledbesvär.',
    url: 'https://www.kiro-jkpg.se',
    siteName: 'Kiropraktorerna i Jönköping',
    images: ['/images/clinic/entrance.jpg'],
    locale: 'sv_SE',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Välkommen till Kiropraktorerna i Jönköping!</h1>
              <p className="text-xl mb-8">
                Vi erbjuder professionell kiropraktisk behandling i centrala Jönköping. Våra legitimerade kiropraktorer har lång erfarenhet inom området.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton large />
                <Link
                  href="/behandlingar-kunskap"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-md hover:bg-white hover:text-teal-600 transition-all duration-200 text-lg"
                >
                  Läs mer om behandlingar
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/clinic/entrance.jpg"
                alt="Kiropraktor i Jönköping - Välkommen till vår klinik på Östra Storgatan för behandling av rygg- och nackbesvär"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Noteboard - conditionally rendered with its own section */}
      <Noteboard />

      {/* Introduction section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vad är kiropraktik?</h2>
            <p className="text-xl text-gray-700">
              Kiropraktik kommer av de grekiska orden chiros och praktikos, som betyder utövande med händerna. Behandlingen utförs alltså primärt med händerna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Erfarna kiropraktorer</h3>
              <p className="text-gray-700">
                Vår kiropraktorklinik i centrala Jönköping etablerades 1979. Våra kiropraktorer är legitimerade av Socialstyrelsen och har en internationellt godkänd utbildning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern behandling</h3>
              <p className="text-gray-700">
                Behandlingens syfte är att återskapa normal funktion och tillstånd i området. Återskapa rörligheten i lederna, få musklerna att varva ner och att få inflammationen att läka ut.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Centralt läge</h3>
              <p className="text-gray-700">
                Mottagningen ligger väldig centralt på gågatan Östra Storgatan i Jönköping, nära parkeringsmöjligheter, bussknutpunkter och stationen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 lg:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-700 rounded-xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Har du ryggproblem eller andra besvär?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Kontakta oss idag för att boka en tid. Vi hjälper dig att återfå rörligheten och minska smärtan.
              </p>
              <Link
                href="/hitta-oss-kontakt"
                className="inline-block bg-white text-teal-700 font-medium py-4 px-8 rounded-md hover:bg-gray-50 transition-colors text-lg"
              >
                Kontakta oss nu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}