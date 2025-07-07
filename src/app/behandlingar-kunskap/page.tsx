import Link from 'next/link';

export const metadata = {
  title: 'Behandlingar & Kunskap | Kiropraktorerna i Jönköping',
  description: 'Information om kiropraktiska behandlingar, vad de kan hjälpa med, och vad du kan förvänta dig vid ett besök hos oss.',
};

export default function BehandlingarKunskap() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Behandlingar & Kunskap</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Här hittar du information om kiropraktiska behandlingar, vad de kan hjälpa med, och vad du kan förvänta dig vid ett besök hos oss.
          </p>
        </div>

        <div className="mt-12 grid gap-12">
          {/* Första besöket */}
          <section id="forsta-besoket" className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Första besöket</h2>
              <div className="prose max-w-none">
                <p>
                  Vid första besöket finns det självklart ingen journal på dig, kiropraktorn vet överhuvudtaget inte särskilt mycket om dig och dina problem. Första steget är därför att få veta lite mer om dig och dina bekymmer.
                </p>
                <p>
                  När vi påbörjar en journal, blir det en mängd frågor. Inte för att vi är särskilt nyfikna, men för att få veta praktiska detaljer som adress, personnummer och dylikt, samt för att redan då få en uppfattning om vad som är grunden till ditt problem.
                </p>
                <p>
                  Hur länge har du känt av problemet? Hände något speciellt när det började? Var gör det ont, och hur? Hur känns det t ex när du sitter, ligger, stiger ur bilen?
                </p>
                <p>
                  Också ditt förflutna har ett visst intresse. Har du haft/har några allvarliga sjukdomar, har du brutit några ben i kroppen, tar du någon medicin?
                </p>
                <p>
                  Självklart har vi, som alla andra inom vården, tystnadsplikt.
                </p>
                <p>
                  Från 1 januari 2011 föras journalen på dator. Den nya Europeiska dataskyddsförordningen, GDPR, börjar gälla den 25 maj 2018. Som legitimerad hälso- och sjukvårdspersonal har vi en skyldighet att föra en patientjournal om dig, som kan innehålla vissa uppgifter t.ex. om din hälsa. Patientjournalen omfattas självklart av sekretess och sparas i skyddat format, oåtkomligt för andra. Vi lämnar inte ut uppgifter om dig eller dina besök hos oss utan ditt skriftligt godkännande. Enligt lag kan vi inte använda e-mail för att kommunicera med dig angående din hälsa. Sådana förfrågningar kommer därför att besvaras på telefon.
                </p>
              </div>
            </div>
          </section>

          {/* Behandlingen */}
          <section id="behandlingen" className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Behandlingen</h2>
              <div className="prose max-w-none">
                <p>
                  Egentligen kan man säga, att information är en del av behandlingen. Att gå omkring och oroa sig för t ex allvarliga sjukdomar, kan göra att man förstorar problemen, att kunna utesluta detta kan ge stor lindring.
                </p>
                <p>
                  Behandlingens syfte är att återskapa normal funktion och tillstånd i området. Återskapa rörligheten i lederna, få musklerna att varva ner och att få inflammationen att läka ut. Som oftast kommer behandlingen då att bestå av tre delar:
                </p>
                <ol>
                  <li>
                    <strong>Lossa på stelheten i lederna.</strong> Detta sker genom att sträcka på lederna. För att undvika, att musklerna i området skall hinna spänna emot, görs detta snabbt. När leder sträcks hörs det ofta ett litet knäck eller en smäll, precis som många ibland hör från t ex fingrarna, knäna eller anklarna. Det är detta knäckande, som de flesta förknippar med kiropraktik.
                  </li>
                  <li>
                    <strong>Mjuka upp de spända och hårda musklerna.</strong> Detta görs oftast med triggerpunktteknik, som kan påminna om massage.
                  </li>
                  <li>
                    <strong>Olika råd och rekommendationer</strong>, t ex om hur mycket eller lite, man kan anstränga olika delar av kroppen, hur man själv kan bidra till att irritationen i området kan lindras, vad man skall undvika etc.
                  </li>
                </ol>
                <p>
                  Behandlingens syfte är att åtgärda orsakerna till symptomen, inte bara att dölja dem. Beroende på problemet och dess karaktär, är det självklart skillnad på den individuella behandlingen.
                </p>
              </div>
            </div>
          </section>

          {/* Om kiropraktik */}
          <section id="om-kiropraktik" className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Om kiropraktik</h2>
              <div className="prose max-w-none">
                <p>
                  Kiropraktik kommer av de grekiska orden chiros och praktikos, som betyder utövande med händerna. Behandlingen utförs alltså primärt med händerna.
                </p>
                <p>
                  Kiropraktik är inte någon ny behandlingsmetod. Den har existerat i olika former, kanske lika länge som det har funnits folk som har försökt att bota olika sjukdomar. T ex har den grekiska Hippocrates bland annat hållit på med någonting liknande kiropraktik. Genom århundradena har många mer eller mindre utbildade behandlare hållit på med mer eller mindre liknande typer av behandling - i folkmun kallat &quot;kotknackare&quot;.
                </p>
                <p>
                  Den &quot;moderna&quot; kiropraktiken tillkom i sluten av 1800-talet av amerikanen B. J. Palmer, när han startade den första skolan för det han kallade kiropraktorer. Sen dess har kiropraktiken förändrat sig mycket, men själva behandlingssättet har inte förändrats lika mycket.
                </p>
              </div>
            </div>
          </section>

          {/* Straighten Up Sweden */}
          <section id="straighten-up-sweden" className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Straighten Up Sweden</h2>
              <div className="prose max-w-none">
                <p>
                  {`"Straighten Up" är ett rörelseprogram som genomförs i flera olika länder. Straighten Up Sweden är ett initiativ från Legitimerade Kiropraktorers Riksorganisation (LKR) att på ett enkelt sätt förbättra rygghälsan och öka livskvaliteten för allmänheten i Sverige.`}
                </p>
                <p>
                  Visionen som driver Straighten Up Sweden är enkel och syftar på att varje person tar ett par minuter per dag för att förbättra sin rygghälsa, precis som vi gör vad gäller vår tandhygien. Behovet av rygghälso-främjande aktiviteter är stort och miljarder kronor spenderas varje år bara vad gäller ländryggssmärta. Trots det har det innan Straighten Up programmet inte funnits något kort och enkelt program med ryggövningar som är specifikt framtaget för allmänhetens rygghälsa.
                </p>
                <p>
                  För att ta tag i detta problem samlades det 2004 en grupp av framstående ledare och experter för att lösa det. Resultatet blev ett gratis allmänhetsfrämjande program som kallas Straighten Up. Det är övningar som görs under ett par tre minuter och är roliga, enkla att göra, och hälsosamma övningar. Det är framtaget för att människor i alla åldrar och kön ska kunna röra sig för att förbättra sin hållning och rygghälsa. Världshälsoorganisationen stödjer programmet för det främjar hälsa bland barn och ungdomar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    href="https://www.kiro-jkpg.se/includes/SUSvuxna.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white font-medium py-3 px-6 rounded-md hover:bg-teal-700 hover:text-white transition-colors text-center"
                  >
                    Ladda ner för vuxna
                  </Link>
                  <Link
                    href="https://www.kiro-jkpg.se/includes/SUSyngre.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white font-medium py-3 px-6 rounded-md hover:bg-teal-700 hover:text-white transition-colors text-center"
                  >
                    Ladda ner för barn och yngre
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}