'use client';

import type { ComponentType } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Heart,
  Utensils,
  Grid,
  ChevronUp,
  Table,
  Scaling,
} from 'lucide-react';
import {
  SERVICES,
  ADVANTAGES,
  PROCESS_STEPS,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP,
  CONTACT_ADDRESS,
} from '../constants';

const IconMap: Record<string, ComponentType<{ size?: number }>> = {
  Heart,
  Utensils,
  Grid,
  ChevronUp,
  Table,
  Scaling,
};

const REALISATIONS = [
  {
    id: 1,
    title: 'Plan de cuisine en marbre',
    image: '/images/marbre-01.jpg',
  },
  {
    id: 2,
    title: 'Finition intérieure en pierre',
    image: '/images/marbre-02.jpg',
  },
  {
    id: 3,
    title: 'Pose et habillage en granit',
    image: '/images/marbre-03.jpg',
  },
];

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 },
  };

  return (
    <div className="pt-20">
      <section className="relative flex h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <img
            src="/images/marbre-01.jpg"
            alt="Marbre intérieur"
            className="h-full w-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent-gold"
            >
              Excellence & Durabilité
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-8 font-display text-5xl font-bold leading-[1.1] text-white md:text-7xl"
            >
              Marbre, granit et réalisations sur <span className="italic text-accent-gold">mesure</span> à Yaoundé
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-10 text-lg font-light leading-relaxed text-white/70"
            >
              CAMEROUN MARBRE vous accompagne dans la fabrication et la pose d’ouvrages en marbre, granit et céramique pour vos projets de décoration, d’aménagement et de finition.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center justify-center gap-3 rounded-full bg-accent-gold px-8 py-5 text-sm font-bold tracking-wide text-stone-950 shadow-xl transition-all hover:scale-105 hover:bg-accent-gold/90 active:scale-95"
              >
                <Phone size={20} />
                APPELER MAINTENANT
              </a>
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-5 text-sm font-bold tracking-wide text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 active:scale-95"
              >
                <MessageCircle size={20} />
                DEVIS WHATSAPP
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-marble-white py-24">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 -scale-x-100 bg-marble-pattern opacity-50" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <motion.div {...fadeInUp}>
              <div className="relative aspect-square">
                <div className="absolute inset-4 -z-10 rounded-3xl border border-accent-gold/30" />
                <img
                  src="/images/marbre-02.jpg"
                  alt="Savoir-faire en marbre"
                  className="h-full w-full rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 hidden rounded-2xl bg-stone-dark p-8 shadow-xl md:block">
                  <p className="mb-1 font-display text-3xl font-bold italic leading-none text-accent-gold">100%</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">Sur mesure</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Expertise Locale</span>
                <h2 className="font-display text-4xl font-bold leading-tight text-stone-dark md:text-5xl">
                  Un savoir-faire au service de vos projets en pierre
                </h2>
              </div>
              <div className="space-y-6 text-lg font-light leading-relaxed text-stone-dark/70">
                <p>
                  CAMEROUN MARBRE est une entreprise spécialisée dans la fabrication et la pose de marbre, granit et céramique à Yaoundé. Nous mettons notre expertise au service des particuliers, professionnels et institutions qui recherchent des finitions durables, élégantes et bien réalisées.
                </p>
                <p>
                  Nous intervenons sur différents types de projets, de la fabrication de pierres tombales aux plans de cuisine, en passant par les revêtements de sol, les escaliers, les tables, les guéridons et d’autres réalisations décoratives sur mesure.
                </p>
                <p className="font-medium text-stone-dark">
                  Notre objectif est de proposer un travail sérieux, propre et durable, avec des solutions adaptées à chaque besoin.
                </p>
              </div>
              <Link
                href="/a-propos"
                className="group inline-flex items-center gap-2 font-bold text-stone-dark transition-colors hover:text-accent-gold"
              >
                En savoir plus sur nous
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
            <h2 className="font-display text-4xl font-bold text-stone-dark">Nos prestations</h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-accent-gold" />
            <p className="text-lg font-light text-stone-dark/60">
              Nous réalisons des ouvrages en pierre conçus pour allier esthétique, solidité et durabilité.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((service, index) => {
              const Icon = IconMap[service.icon] || CheckCircle2;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="group rounded-3xl border border-stone-100 bg-white p-10 shadow-sm transition-all hover:border-accent-gold/20 hover:shadow-xl"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-50 transition-colors group-hover:bg-accent-gold group-hover:text-stone-950">
                    <span className="text-accent-gold group-hover:text-stone-950">
                      <Icon size={32} />
                    </span>
                  </div>
                  <h3 className="mb-4 font-display text-xl font-bold leading-snug text-stone-dark">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-stone-dark/60">{service.description}</p>
                  <div className="flex items-center justify-between border-t border-stone-50 pt-4 text-xs font-bold uppercase tracking-widest text-stone-dark/40 transition-colors group-hover:text-accent-gold">
                    <span>0{index + 1}</span>
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-marble-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <h2 className="font-display text-4xl font-bold text-stone-dark">Nos réalisations</h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-accent-gold" />
            <p className="text-lg font-light text-stone-dark/60">
              Quelques exemples de projets réalisés en marbre et granit.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {REALISATIONS.map((realisation) => (
              <motion.article
                key={realisation.id}
                variants={fadeInUp}
                className="group overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={realisation.image}
                    alt={realisation.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-stone-dark">{realisation.title}</h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-stone-dark py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-marble-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeInUp} className="space-y-8">
              <h2 className="font-display text-4xl font-bold leading-tight">
                Pourquoi choisir <span className="italic text-accent-gold">CAMEROUN MARBRE ?</span>
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {ADVANTAGES.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="shrink-0 text-accent-gold" size={24} />
                    <span className="text-sm font-medium leading-tight text-white/80">{adv}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="relative">
              <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/images/marbre-03.jpg"
                  alt="Cour de marbre et granit"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-accent-gold/20 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-marble-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 space-y-4 text-center">
            <h2 className="font-display text-4xl font-bold text-stone-dark">Comment se déroule votre projet ?</h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-accent-gold" />
          </div>

          <div className="relative">
            <div className="absolute left-0 top-[2.75rem] -z-10 hidden h-0.5 w-full bg-stone-100 lg:block" />

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
              {PROCESS_STEPS.map((step) => (
                <motion.div key={step.id} {...fadeInUp} className="group space-y-6 text-center lg:text-left">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-stone-50 shadow-xl transition-all duration-500 group-hover:bg-stone-dark group-hover:text-white lg:mx-0">
                    <span className="font-display text-2xl font-bold italic leading-none">{step.id}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-stone-dark">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-stone-dark/50">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-100 bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-stone-dark p-12 text-center md:p-20 md:text-left">
            <div className="pointer-events-none absolute inset-0 bg-marble-pattern opacity-10" />
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-gold/20 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="max-w-xl space-y-6">
                <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                  Vous avez un projet en <span className="text-accent-gold">marbre</span> ou{' '}
                  <span className="text-accent-gold">granit</span> ?
                </h2>
                <p className="text-lg font-light text-white/60">
                  Contactez CAMEROUN MARBRE pour discuter de votre besoin et obtenir un accompagnement professionnel pour vos réalisations en pierre.
                </p>
                <div className="flex items-center gap-4 text-white/40">
                  <MapPin size={20} className="text-accent-gold" />
                  <span className="text-sm tracking-wide">{CONTACT_ADDRESS}</span>
                </div>
              </div>

              <div className="w-full shrink-0 flex-col gap-4 md:w-auto md:flex">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-bold tracking-wide text-stone-dark shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  <Phone size={20} />
                  {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-accent-gold px-10 py-5 text-sm font-bold tracking-wide text-stone-950 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={20} />
                  ÉCRIRE SUR WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
