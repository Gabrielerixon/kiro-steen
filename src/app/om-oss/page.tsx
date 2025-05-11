export const metadata = {
    title: 'Om Oss | Kiropraktorerna i Jönköping',
    description: 'Information om kiropraktorerna på vår klinik i Jönköping, vår historia och utbildning.',
  };
  
  export default function OmOss() {
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Om Oss</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Lär känna kiropraktorerna på vår klinik i Jönköping.
            </p>
          </div>
  
          <div className="mt-16">
            {/* Kiropraktorkliniken */}
            <section className="mb-16">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Kiropraktorkliniken</h2>
                  
                  <div className="prose max-w-none">
                    <p>
                      Denna kiropraktorklinik i centrala Jönköping etablerades 1979. Vår kiropraktor, Steen Feldinger, är legitimerad av Socialstyrelsen och har en internationellt godkänd utbildning på fem år. Dessutom har vi kontinuerligt vidareutbildningar inom det kiropraktiska arbetsområdet. Vår strävan är att alltid kunna erbjuda den mest kompetenta vård när det gäller kiropraktisk behandling.
                    </p>
                  </div>
                </div>
              </div>
            </section>
  
            {/* Kiropraktorerna */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Kiropraktorerna</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Steen Feldinger */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        {/* Placeholder för bild */}
                        <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600">Bild</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Steen Feldinger</h3>
                        <div className="prose max-w-none">
                          <p>
                            Utbildat på Syddansk Universitet i Danmark 1999.
                          </p>
                          <p>
                            Efter utbildningen ett års AT-tjänst i Danmark och sedan ett vikariat i Norge.
                          </p>
                          <p>
                            2002 tog jag över Thomas Wrens praktik i Jönköping.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Thomas Wren */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        {/* Placeholder för bild */}
                        <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-600">Bild</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Thomas Wren</h3>
                        <div className="prose max-w-none">
                          <p>
                            Efter 42 års praktik har Thomas nu gått i pension. Han kommer att vara semesteravlösare och att avlasta vid behov, men kommer inte att jobba fast.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Brian Bungum - Information om att han har flyttat */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-2">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Brian Bungum</h3>
                    <div className="prose max-w-none">
                      <p>
                        Brian var under en period också här, men har numera flyttat till andra lokaler på Rosenlundsbadet. Han nås på telefon 07 07 33 88 37.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            {/* Utbildningen */}
            <section>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Utbildningen</h2>
                  
                  <div className="prose max-w-none">
                    <p>
                      Idag finns utbildning för kiropraktorer på skolor, högskolor och universitet i USA, Canada, England, Frankrike, Australien och Danmark, som är ackrediterade av European Council on Chiropractic Education.
                    </p>
                    
                    <p>
                      De flesta skolor har byggt upp utbildningen i tre steg:
                    </p>
                    
                    <ol>
                      <li>
                        <strong>Första steget:</strong> I det första, lite mer allmänna steget, lär man sig det mer grundläggande som anatomi, fysiologi och biokemi. I Danmark är denna del av utbildningen gemensam med läkarna, både av praktiska skäl och för att skapa mer kontaktytor mellan de två facken.
                      </li>
                      <li>
                        <strong>Andra steget:</strong> Andra steget är mer inriktat mot kiropraktiken. Det bygger vidare på grundutbildningen med t ex patologi och farmakologi, nivåanpassad till framtida behov - det är ju inte avgörande för en kiropraktor att kunna identifiera en basalcellstumör i mikroskop. Under detta steg läggs också allt mera vikt på de kiropraktiska delarna, både teoretiskt och praktiskt. Andra områden som fördjupas är t ex radiologi och radiografi, vilket kiropraktorn har mer behov av än läkaren. I slutet av detta steg ingår i Danmark att praktisera som kiropraktor (med handledare) på privat klinik samt även på en särskild tvärfacklig ryggavdelning på sjukhus.
                      </li>
                      <li>
                        <strong>Tredje steget:</strong> Det sista, tredje steget, är efter avslutad examen, då man under ett praktikår arbetar som anställd kiropraktor, självständigt men med möjlighet att få hjälp och vägledning. Först efter detta år blir man legitimerad och kan arbeta fullt ut "på egen hand".
                      </li>
                    </ol>
                    
                    <p>
                      Men för att man har gått igenom utbildningen är man inte färdigutbildad. Det kommer hela tiden nyheter, ny forskning och nya rön dyker upp. Därför är det mycket viktigt att hela tiden följa med genom facktidningar, kurser och vidareutbildning.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }