import Link from 'next/link';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_ADDRESS, CONTACT_WHATSAPP } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-stone-dark pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-3">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold italic tracking-tighter">CAMEROUN MARBRE</h3>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Fabrication et pose de marbre, granit et céramique à Yaoundé.
              Un savoir-faire au service de vos projets en pierre.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_WHATSAPP} className="text-white/40 transition-colors hover:text-white">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent-gold">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm text-white/60 transition-colors hover:text-white">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/60 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent-gold" />
                <span className="text-sm text-white/60">{CONTACT_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-accent-gold" />
                <a href={`tel:${CONTACT_PHONE}`} className="text-sm text-white/60 transition-colors hover:text-white">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="shrink-0 text-accent-gold" />
                <a href={CONTACT_WHATSAPP} className="text-sm text-white/60 transition-colors hover:text-white">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs font-medium uppercase tracking-widest text-white/30 md:flex-row">
          <p>© {new Date().getFullYear()} CAMEROUN MARBRE. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-white">Mentions Légales</a>
            <a href="#" className="transition-colors hover:text-white">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
