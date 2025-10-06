// app/hitta-oss-kontakt/page.tsx
import Link from 'next/link';
import ClientMap from '@/components/shared/ClientMap';
import ContactForm from '@/components/shared/ContactForm';
import OpeningHours from '@/components/shared/OpeningHours';

export const metadata = {
  title: 'Hitta Oss & Kontakt | Kiropraktorerna i Jönköping',
  description: 'Kontaktuppgifter och information om hur du hittar till Kiropraktorerna i Jönköping, centralt beläget på Östra Storgatan 8. Telefon: 036-16 59 90',
  alternates: {
    canonical: 'https://www.kiro-jkpg.se/hitta-oss-kontakt',
  },
};

export default function HittaOssKontakt() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Hitta Oss & Kontakt</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Här hittar du information om hur du når oss och vår mottagning i Jönköping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontaktinformation */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktuppgifter</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Adress</h3>
                    <p className="mt-2 text-gray-600">
                      Kiropraktorerna i Jönköping<br />
                      Östra Storgatan 8<br />
                      553 21 Jönköping
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                    <p className="mt-2 text-gray-600">
                      036 - 16 59 90
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Vanligtvis svarar vi under öppettiderna, men om vi är väldigt upptagna med patienter, har vi inte alltid möjlighet att svara.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">E-post</h3>
                    <p className="mt-2 text-gray-600">
                      <a href="mailto:kontakta@kiro-jkpg.se" className="text-teal-600 hover:text-teal-700">
                        kontakta@kiro-jkpg.se
                      </a><br />
                      <a href="mailto:steen@kiro-jkpg.se" className="text-teal-600 hover:text-teal-700">
                        steen@kiro-jkpg.se
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Enligt lag kan vi inte använda e-mail för att kommunicera med dig angående din hälsa. Sådana förfrågningar besvaras på telefon.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Öppettider</h2>
                
                {/* Dynamic Opening Hours Component */}
                <OpeningHours className="text-gray-600" />
              </div>
            </div>
          </div>
          
          {/* Hitta oss och karta */}
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hitta till oss</h2>
                
                <div className="prose max-w-none">
                  <p>
                    Mottagningen ligger väldig centralt på gågatan Östra Storgatan i Jönköping, nära parkeringsmöjligheter, bussknutpunkter och stationen.
                  </p>
                  <p>
                    Ingången är lätt att hitta - mellan Hudoteket och Pressbyrån. Det är också tydligt skyltat vid ytterdörren, i hissen och på dörren in till mottagningen.
                  </p>
                </div>
                
                <div className="mt-6">
                  <ClientMap />
                </div>
                
                <div className="mt-6">
                  <Link 
                    href="https://www.google.com/maps/search/?api=1&query=Östra+Storgatan+8+Jönköping" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Visa på Google Maps
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktformulär</h2>
                
                <div className="prose max-w-none mb-6">
                  <p>
                    Har du frågor eller vill boka en tid? Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt.
                  </p>
                  <p className="text-sm text-gray-500">
                    Observera att vi enligt lag inte kan använda e-mail för att kommunicera med dig angående din hälsa. För medicinska frågor, vänligen ring oss direkt.
                  </p>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}