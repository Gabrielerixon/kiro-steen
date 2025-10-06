import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin - Kiropraktorerna i Jönköping',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}