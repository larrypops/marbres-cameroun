'use client';

import { motion } from 'motion/react';
import { Target, Eye, Gem, Award, Ruler, Timer, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const values = [
    { title: 'Qualité', icon: Gem, color: 'bg-blue-50 text-blue-600' },
    { title: 'Sérieux', icon: Award, color: 'bg-purple-50 text-purple-600' },
    { title: 'Précision', icon: Ruler, color: 'bg-amber-50 text-amber-600' },
    { title: 'Durabilité', icon: Timer, color: 'bg-emerald-50 text-emerald-600' },
    { title: 'Satisfaction client', icon: ThumbsUp, color: 'bg-rose-50 text-rose-600' },
  ];

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-stone-dark py-24">
        <div className="pointer-events-none absolute inset-0 bg-marble-pattern opacity-10" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 block text-xs font-bold uppercase tracking-[0.4em] text-accent-gold"
          >
            NOTRE HISTOIRE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold italic text-white md:text-7xl"
          >
            À propos de CAMEROUN MARBRE
          </motion.h1>
        </div>
      </section>

      <section className="bg-marble-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="space-y-6 text-lg font-light leading-relaxed text-stone-dark/70">
                <p>
                  CAMEROUN MARBRE est une entreprise basée à Yaoundé, spécialisée dans la fabrication et la pose d’ouvrages en marbre, granit et céramique.
                </p>
                <p>
                  Nous accompagnons nos clients dans la réalisation de projets esthétiques et durables pour les espaces résidentiels, professionnels et funéraires. Notre savoir-faire nous permet d’intervenir sur plusieurs types d’ouvrages, avec une attention particulière portée à la qualité des finitions.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-10 pt-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="text-accent-gold" size={32} />
                    <h3 className="font-display text-xl font-bold">Notre mission</h3>
                  </div>
                  <p className="font-light leading-relaxed text-stone-dark/60">
                    Proposer des réalisations solides, élégantes et sur mesure, adaptées aux besoins de chaque client.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Eye className="text-accent-gold" size={32} />
                    <h3 className="font-display text-xl font-bold">Notre vision</h3>
                  </div>
                  <p className="font-light leading-relaxed text-stone-dark/60">
                    Devenir une référence à Yaoundé dans le domaine du marbre, du granit et des finitions en pierre.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl">
                <img
                  src="/images/marbre-02.jpg"
                  alt="Dalles de marbre"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="font-display text-4xl font-bold text-stone-dark">Nos valeurs</h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-accent-gold" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex w-full flex-col items-center gap-6 rounded-[2rem] border border-stone-100 bg-white px-10 py-12 text-center shadow-sm sm:w-64"
              >
                <div className={`rounded-2xl p-5 ${v.color}`}>
                  <v.icon size={36} strokeWidth={1.5} />
                </div>
                <span className="font-display text-lg font-bold tracking-tight text-stone-dark">{v.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-marble-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[4rem] bg-stone-dark px-8 py-20 md:p-24">
            <div className="mx-auto max-w-4xl space-y-12 text-center">
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Ce que nous réalisons au quotidien</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {SERVICES.map((s, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                    <CheckCircle2 className="text-accent-gold" size={20} />
                    <span className="text-sm font-medium text-white">{s.title.split(',')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
