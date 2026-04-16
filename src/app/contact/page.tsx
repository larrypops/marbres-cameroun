import type { Metadata } from 'next';
import Contact from '../../views/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez CAMEROUN MARBRE à Yaoundé pour vos demandes de devis, projets sur mesure et réalisations en marbre et granit.',
};

export default function ContactPage() {
  return <Contact />;
}
