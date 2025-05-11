import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-bold text-teal-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-8">Sidan hittades inte</h2>
        <p className="text-lg text-gray-600 mb-8">
          Tyvärr kunde vi inte hitta den sida du letar efter. Det kan bero på att sidan har flyttats eller tagits bort.
        </p>
        <Link
          href="/"
          className="inline-block bg-teal-600 text-white font-medium py-3 px-6 rounded-md hover:bg-teal-700 transition-colors"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
}