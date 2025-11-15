import Link from 'next/link';
import OpeningHours from '@/components/shared/OpeningHours';

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
            <div className="text-sm leading-relaxed">
              <OpeningHours showTitle={false} className="text-white" />
            </div>
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
        
        <div className="border-t border-teal-700 mt-8 pt-8">
          {/* Desktop layout: two rows with left/right alignment */}
          <div className="hidden md:flex flex-col gap-4">
            {/* Row 1: Copyright left, Credit right */}
            <div className="flex justify-between items-center">
              <p>&copy; {new Date().getFullYear()} Kiropraktorerna i Jönköping. Alla rättigheter förbehållna.</p>
              <p className="text-sm text-teal-100/70">
                Made with ❤️ by{' '}
                <Link 
                  href="https://erikssongab.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-100 hover:text-white hover:underline transition-colors"
                >
                  Eriksson G AB
                </Link>
              </p>
            </div>
            {/* Row 2: LKR link and Admin button left-aligned */}
            <div className="flex items-center gap-4">
              <Link 
                href="https://www.lkr.se" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Legitimerade Kiropraktorers Riksorganisation
              </Link>
              <Link 
                href="/admin"
                className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm font-medium border border-teal-600"
                title="Admin - Logga in för att uppdatera hemsidan"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
                Admin
              </Link>
            </div>
          </div>

          {/* Mobile layout: stacked as before */}
          <div className="md:hidden flex flex-col items-center gap-4">
            <p className="text-center">&copy; {new Date().getFullYear()} Kiropraktorerna i Jönköping. Alla rättigheter förbehållna.</p>
            <Link 
              href="https://www.lkr.se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline text-center"
            >
              Legitimerade Kiropraktorers Riksorganisation
            </Link>
            <Link 
              href="/admin"
              className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm font-medium border border-teal-600"
              title="Admin - Logga in för att uppdatera hemsidan"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              Admin
            </Link>
            <p className="text-sm text-teal-100/70 text-center">
              Made with ❤️ by{' '}
              <Link 
                href="https://erikssongab.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-100 hover:text-white hover:underline transition-colors"
              >
                Eriksson G AB
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}