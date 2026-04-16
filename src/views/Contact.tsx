'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_ADDRESS, CONTACT_WHATSAPP } from '../constants';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-stone-50 py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-stone-200" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 block text-xs font-bold uppercase tracking-[0.4em] text-accent-gold"
          >
            PARLONS DE VOTRE PROJET
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold text-stone-dark md:text-7xl"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg font-light text-stone-dark/60"
          >
            Vous avez un projet en marbre, granit ou céramique ? Contactez-nous pour demander un devis, poser vos questions ou discuter de votre besoin.
          </motion.p>
        </div>
      </section>

      <section className="bg-marble-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <motion.div {...fadeInUp} className="space-y-12">
              <div className="space-y-8">
                <h2 className="font-display text-3xl font-bold">Coordonnées</h2>
                <div className="space-y-6">
                  <div className="group flex gap-6 rounded-[2rem] border border-stone-100 bg-stone-50 p-8 transition-all hover:border-accent-gold/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-accent-gold shadow-sm transition-colors group-hover:bg-accent-gold group-hover:text-white">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-stone-dark/40">Téléphone</p>
                      <a href={`tel:${CONTACT_PHONE}`} className="text-xl font-bold text-stone-dark transition-colors hover:text-accent-gold">
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <div className="group flex gap-6 rounded-[2rem] border border-stone-100 bg-stone-50 p-8 transition-all hover:border-accent-gold/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-accent-gold shadow-sm transition-colors group-hover:bg-accent-gold group-hover:text-white">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-stone-dark/40">Adresse</p>
                      <p className="text-xl font-bold text-stone-dark">{CONTACT_ADDRESS}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[3rem] bg-stone-dark p-10">
                <div className="pointer-events-none absolute inset-0 bg-accent-gold/5 transition-colors group-hover:bg-accent-gold/10" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold text-stone-950">
                      <MessageCircle size={20} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">Besoin d'une réponse rapide ?</h3>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-white/60">
                    Écrivez-nous directement sur WhatsApp pour présenter votre projet ou envoyer une photo des mesures de votre espace.
                  </p>
                  <a
                    href={CONTACT_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent-gold py-4 text-sm font-bold tracking-wide text-stone-950 transition-all hover:scale-105 active:scale-95"
                  >
                    DISCUTER SUR WHATSAPP
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-[3.5rem] border border-stone-100 bg-white p-12 shadow-2xl shadow-stone-200">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="ml-1 text-xs font-bold uppercase tracking-widest text-stone-dark/50">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-2xl border-stone-100 bg-stone-50/50 px-6 py-4 outline-none transition-all focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="ml-1 text-xs font-bold uppercase tracking-widest text-stone-dark/50">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full rounded-2xl border-stone-100 bg-stone-50/50 px-6 py-4 outline-none transition-all focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20"
                    placeholder="+237 ..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="ml-1 text-xs font-bold uppercase tracking-widest text-stone-dark/50">Type de projet</label>
                  <select
                    id="type"
                    className="w-full appearance-none rounded-2xl border-stone-100 bg-stone-50/50 px-6 py-4 outline-none transition-all focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20"
                  >
                    <option>Pierre tombale</option>
                    <option>Plan de cuisine</option>
                    <option>Revêtement de sol</option>
                    <option>Escaliers</option>
                    <option>Table / Guéridon</option>
                    <option>Autre réalisation sur mesure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="ml-1 text-xs font-bold uppercase tracking-widest text-stone-dark/50">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-2xl border-stone-100 bg-stone-50/50 px-6 py-4 outline-none transition-all focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20"
                    placeholder="Détaillez votre besoin ici..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-sm font-bold tracking-widest transition-all ${
                    isSubmitted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-stone-dark text-white shadow-xl hover:bg-stone-900 active:scale-95'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      DEMANDE ENVOYÉE
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      ENVOYER LA DEMANDE
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="group relative h-96 w-full overflow-hidden bg-stone-100 grayscale transition-all duration-700 hover:grayscale-0">
        <img
          src="/images/marbre-03.jpg"
          alt="Localisation Yaoundé"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="pointer-events-none absolute inset-0 bg-stone-900/10" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
          <div className="flex items-center gap-4 rounded-2xl bg-stone-dark px-6 py-4 text-white shadow-2xl sm:px-8">
            <MapPin size={24} className="text-accent-gold" />
            <span className="text-sm font-bold tracking-tight sm:text-base">Rue 7.093, Yaoundé</span>
          </div>
        </div>
      </section>
    </div>
  );
}
