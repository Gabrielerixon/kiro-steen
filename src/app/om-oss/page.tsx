import Image from 'next/image';

export const metadata = {
  title: 'Om Oss | Kiropraktorerna i Jönköping',
  description: 'Information om kiropraktorn på vår klinik i Jönköping, vår historia och utbildning.',
};

export default function OmOss() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Om Oss</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Lär känna kiropraktorn på vår klinik i Jönköping.
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

          {/* Kiropraktorn */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Vår Kiropraktor</h2>
            
            {/* Steen Feldinger - full width design consistent with other sections */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <div className="w-40 h-40 rounded-full overflow-hidden relative">
                      <Image
                        src="/images/team/steen.jpeg"
                        alt="Steen Feldinger, legitimerad kiropraktor"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Steen Feldinger</h3>
                    <p className="text-lg text-teal-600 font-medium mb-4">Legitimerad Kiropraktor</p>
                    <div className="prose max-w-none">
                      <p>
                        Utbildad på Syddansk Universitet i Danmark 1999.
                      </p>
                      <p>
                        Efter utbildningen ett års AT-tjänst i Danmark och sedan ett vikariat i Norge.
                      </p>
                      <p>
                        2002 tog jag över Thomas Wrens praktik i Jönköping och har sedan dess lett kliniken med fokus på professionell kiropraktisk vård.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Information om tidigare kollegor */}
          <section className="mb-16">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Tidigare kollegor</h3>
              <div className="prose max-w-none text-blue-800">
                <p>
                  <strong>Thomas Wren:</strong> Efter 42 års praktik har Thomas nu gått i pension. Han kommer att vara semesteravlösare och att avlasta vid behov, men kommer inte att jobba fast.
                </p>
                <p>
                  <strong>Brian Bungum:</strong> Brian var under en period också här, men har numera flyttat till andra lokaler på Rosenlundsbadet. Han nås på telefon 07 07 33 88 37.
                </p>
              </div>
            </div>
          </section>

          {/* Om kiropraktik */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Om kiropraktik</h2>
                
                <div className="prose max-w-none">
                  <p>
                    Kiropraktik kommer av de grekiska orden chiros och praktikos, som betyder utövande med händerna. Behandlingen utförs alltså primärt med händerna.
                  </p>
                  
                  <p>
                    Kiropraktik är inte någon ny behandlingsmetod. Den har existerat i olika former, kanske lika länge som det har funnits folk som har försökt att bota olika sjukdomar. T ex har den grekiska Hippocrates bland annat hållit på med någonting liknande kiropraktik. Genom århundradena har många mer eller mindre utbildade behandlare hållit på med mer eller mindre liknande typer av behandling - i folkmun kallat &ldquo;kotknackare&rdquo;.
                  </p>
                  
                  <p>
                    Den &ldquo;moderna&rdquo; kiropraktiken tillkom i sluten av 1800-talet av amerikanen B. J. Palmer, när han startade den första skolan för det han kallade kiropraktorer. Sen dess har kiropraktiken förändrat sig mycket, men själva behandlingssättet har inte förändrats lika mycket.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Straighten Up Sweden */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Straighten Up Sweden</h2>
                
                <div className="prose max-w-none">
                  <p>
                    &ldquo;Straighten Up&rdquo; är ett rörelseprogram som genomförs i flera olika länder. Straighten Up Sweden är ett initiativ från Legitimerade Kiropraktorers Riksorganisation (LKR) att på ett enkelt sätt förbättra rygghälsan och öka livskvaliteten för allmänheten i Sverige.
                  </p>
                  
                  <p>
                    Visionen som driver Straighten Up Sweden är enkel och syftar på att varje person tar ett par minuter per dag för att förbättra sin rygghälsa, precis som vi gör vad gäller vår tandhygien. Behovet av rygghälsofrämjande aktiviteter är stort och miljarder kronor spenderas varje år bara vad gäller ländryggssmärta. Trots det har det innan Straighten Up programmet inte funnits något kort och enkelt program med ryggövningar som är specifikt framtaget för allmänhetens rygghälsa.
                  </p>
                  
                  <p>
                    För att ta tag i detta problem samlades det 2004 en grupp av framstående ledare och experter för att lösa det. Resultatet blev ett gratis allmänhetsfrämjande program som kallas Straighten Up. Det är övningar som görs under ett par tre minuter och är roliga, enkla att göra, och hälsosamma övningar. Det är framtaget för att människor i alla åldrar och kön ska kunna röra sig för att förbättra sin hållning och rygghälsa. Världshälsoorganisationen stödjer programmet för det främjar hälsa bland barn och ungdomar.
                  </p>
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
                      <strong>Tredje steget:</strong> Det sista, tredje steget, är efter avslutad examen, då man under ett praktikår arbetar som anställd kiropraktor, självständigt men med möjlighet att få hjälp och vägledning. Först efter detta år blir man legitimerad och kan arbeta fullt ut &ldquo;på egen hand&rdquo;.
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