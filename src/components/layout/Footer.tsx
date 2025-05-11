import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kiropraktorerna i Jönköping</h3>
            <p className="mb-2">Östra Storgatan 8</p>
            <p className="mb-2">553 21 Jönköping</p>
            <p className="mb-2">Tel: 036 - 16 59 90</p>
            <p>E-post: steen@kiro-jkpg.se</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Öppettider</h3>
            <p className="mb-2">Måndag och tisdag: 9.00 - 16.00 på ojämna veckor och 9.00 - 18.00 på jämna veckor</p>
            <p className="mb-2">Onsdag: 9.00 - 12.00</p>
            <p>Torsdag och fredag: 9.00 - 16.00 på ojämna veckor och 9.00 - 18.00 på jämna veckor</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/hitta-oss-kontakt" className="hover:underline">
                  Hitta till oss
                </Link>
              </li>
              <li>
                <Link href="/priser" className="hover:underline">
                  Priser
                </Link>
              </li>
              <li>
                <Link href="/hitta-oss-kontakt" className="hover:underline">
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Kiropraktorerna i Jönköping. Alla rättigheter förbehållna.</p>
          <div className="mt-4 md:mt-0">
            <Link 
              href="https://www.lkr.se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Legitimerade Kiropraktorers Riksorganisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}