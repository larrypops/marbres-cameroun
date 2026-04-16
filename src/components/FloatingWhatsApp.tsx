'use client';

import { motion } from 'motion/react';
import { CONTACT_WHATSAPP } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={CONTACT_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="group fixed bottom-8 right-8 z-[100] flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl"
      aria-label="Discuter sur WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.556 4.188 1.611 6.041L0 24l6.105-1.602a11.811 11.811 0 005.937 1.597h.005c6.632 0 12.028-5.396 12.033-12.034a11.82 11.82 0 00-3.527-8.503z" />
      </svg>
      <div className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg bg-stone-dark px-4 py-2 text-xs font-bold uppercase tracking-widest text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
        Une question ? Contactez-nous
      </div>
    </motion.a>
  );
}
