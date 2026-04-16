import type { Metadata } from 'next';
import Home from '../views/Home';

export const metadata: Metadata = {
  title: 'Accueil',
  description:
    'CAMEROUN MARBRE vous accompagne à Yaoundé pour vos projets en marbre, granit et céramique avec des finitions durables et soignées.',
};

export default function HomePage() {
  return <Home />;
}
