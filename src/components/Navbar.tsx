'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP } from '../constants';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-marble-gray bg-marble-white/80 backdrop-blur-md">
      <div className="mx-auto h-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex-shrink-0"
          >
            <span className="font-display text-xl font-bold italic tracking-tighter text-stone-dark transition-colors group-hover:text-accent-gold">
              CAMEROUN MARBRE
            </span>
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent-gold ${
                  isActive(item.href) ? 'text-accent-gold' : 'text-stone-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={CONTACT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-stone-dark px-5 py-2.5 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-stone-dark/90 active:scale-95"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-md p-2 text-stone-dark transition-colors hover:text-accent-gold"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-marble-gray bg-marble-white md:hidden"
          >
            <div className="space-y-2 px-4 pb-6 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full border-b border-marble-gray/50 px-3 py-4 text-left text-base font-medium ${
                    isActive(item.href) ? 'text-accent-gold' : 'text-stone-dark'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-stone-dark py-4 font-medium text-stone-dark"
                >
                  <Phone size={18} />
                  {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-stone-dark py-4 font-medium text-white"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
