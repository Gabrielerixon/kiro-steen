import Link from 'next/link';

export const metadata = {
  title: 'Länkar | Kiropraktorerna i Jönköping',
  description: 'Användbara länkar för mer information om kiropraktik och relaterade organisationer.',
};

export default function Lankar() {
    const links = [
        {
          name: 'Legitimerade Kiropraktorers Riksorganisation (LKR)',
          url: 'https://www.lkr.se',
          description: 'Officiell hemsida för Legitimerade Kiropraktorers Riksorganisation. Här finns information om kiropraktik, utbildningen och en medlemslista.'
        },
        {
          name: 'Suomen Kiropraktikkoliitto (Finlands Kiropraktorförbund)',
          url: 'https://www.suomenkiropraktikkoliitto.fi',
          description: 'Finlands kiropraktorförbunds hemsida med information om kiropraktik i Finland.'
        },
        {
          name: 'Norsk Kiropraktorforening',
          url: 'https://www.kiropraktikk.no',
          description: 'Hemsidan för Norges kiropraktorförening.'
        },
        {
          name: 'Syddansk Universitet',
          url: 'https://www.sdu.dk',
          description: 'Hemsida för Syddansk Universitet i Danmark där man kan utbilda sig till kiropraktor.'
        }
      ];
    
      return (
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Länkar</h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Här hittar du användbara länkar för mer information om kiropraktik och relaterade organisationer.
              </p>
            </div>
    
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Användbara länkar</h2>
                  
                  <div className="space-y-8">
                    {links.map((link, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          <Link
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 hover:text-teal-700 hover:underline"
                          >
                            {link.name}
                          </Link>
                        </h3>
                        <p className="text-gray-600">{link.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Straighten Up Sweden</h2>
                  
                  <div className="prose max-w-none mb-6">
                    <p>
                      {`"Straighten Up" är ett rörelseprogram som genomförs i flera olika länder. Straighten Up Sweden är ett initiativ från Legitimerade Kiropraktorers Riksorganisation (LKR) att på ett enkelt sätt förbättra rygghälsan och öka livskvaliteten för allmänheten i Sverige.`}
                    </p>
                    <p>
                      Programmet innehåller övningar som görs under ett par tre minuter och är roliga, enkla att göra, och hälsosamma. Det är framtaget för att människor i alla åldrar ska kunna förbättra sin hållning och rygghälsa.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">För vuxna</h3>
                      <p className="text-gray-600 mb-4">
                        Rörelseprogram speciellt anpassat för vuxna.
                      </p>
                      <Link
                        href="https://www.kiro-jkpg.se/includes/SUSvuxna.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-teal-600 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-700 transition-colors text-center"
                      >
                        Ladda ner PDF
                      </Link>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">För barn och yngre</h3>
                      <p className="text-gray-600 mb-4">
                        Rörelseprogram anpassat för barn och ungdomar.
                      </p>
                      <Link
                        href="https://www.kiro-jkpg.se/includes/SUSyngre.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-teal-600 text-white font-medium py-2 px-4 rounded-md hover:bg-teal-700 transition-colors text-center"
                      >
                        Ladda ner PDF
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }