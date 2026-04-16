import type { Metadata } from 'next';
import About from '../../views/About';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Découvrez CAMEROUN MARBRE, notre mission et nos valeurs pour la fabrication et la pose de marbre, granit et céramique à Yaoundé.',
};

export default function AboutPage() {
  return <About />;
}
