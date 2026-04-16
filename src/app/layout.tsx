import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'CAMEROUN MARBRE | Marbre, granit et céramique à Yaoundé',
    template: '%s | CAMEROUN MARBRE',
  },
  description:
    'Fabrication et pose de marbre, granit et céramique à Yaoundé pour vos projets résidentiels, professionnels et funéraires.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <FloatingWhatsApp />
          <Footer />
        </div>
      </body>
    </html>
  );
}
