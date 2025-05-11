export const metadata = {
    title: 'Priser | Kiropraktorerna i Jönköping',
    description: 'Information om priser för kiropraktorbehandlingar i Jönköping.',
  };
  
  export default function Priser() {
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Priser</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Här hittar du aktuella priser för våra behandlingar.
            </p>
          </div>
  
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Aktuella priser</h2>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900">Första besöket</h3>
                        <p className="mt-4 text-3xl font-extrabold text-teal-600">700 kr</p>
                        <p className="mt-2 text-sm text-gray-500">
                          Beräkna cirka 45 minuter för första besöket.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900">Återbesök</h3>
                        <p className="mt-4 text-3xl font-extrabold text-teal-600">500 kr</p>
                        <p className="mt-2 text-sm text-gray-500">
                          Beräkna cirka 20-30 minuter för återbesök.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-8">
                    <div className="prose max-w-none">
                      <p className="font-medium text-red-600">
                        OBSERVERA: Regionen har beslutat att INTE förlänga vårdavtalet med kiropraktorer och naprapater och subventionen tar därför slut vid årsskiftet 2023 - 2024.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Betalningsmetoder</h2>
                    
                    <div className="prose max-w-none">
                      <p>
                        Vi accepterar följande betalningsmetoder:
                      </p>
                      <ul>
                        <li>Bankkort (Visa, Mastercard)</li>
                        <li>Swish</li>
                        <li>Fakturabetalning</li>
                      </ul>
                      <p>
                        Betalning sker i samband med besöket.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Avbokning</h2>
                    
                    <div className="prose max-w-none">
                      <p>
                        Vid förhinder ber vi dig avboka din tid senast 24 timmar innan det bokade besöket. Vid sen avbokning eller uteblivet besök kan en avgift tillkomma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }