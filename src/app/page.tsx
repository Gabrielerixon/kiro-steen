import Link from 'next/link';
import BookingButton from '@/components/shared/BookingButton';

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
                  className="inline-block bg-teal-700 text-white font-medium py-4 px-8 rounded-md hover:bg-teal-800 transition-colors text-lg text-center"
                >
                  Läs mer om behandlingar
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden shadow-xl">
              {/* Här kan du lägga till en bild på kliniken senare */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Bild på klinik</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <BookingButton large text="Kontakta oss nu" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}