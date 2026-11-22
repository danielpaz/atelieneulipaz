'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const publicos = [
  {
    titulo: 'Igrejas e Paróquias',
    descricao: 'Restauramos imagens e peças litúrgicas de igrejas e paróquias, preservando o patrimônio que congrega a comunidade de fé.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4v8M20 8h8" strokeLinecap="round" />
        <path d="M12 44V20l12-8 12 8v24" strokeLinejoin="round" />
        <path d="M20 44v-12h8v12" />
        <path d="M8 22h32" strokeLinecap="round" />
        <circle cx="24" cy="28" r="3" />
      </svg>
    ),
  },
  {
    titulo: 'Santuários e Catedrais',
    descricao: 'Cuidamos de peças de grande valor histórico e artístico presentes em santuários e catedrais de todo o país.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 2l4 10h-8l4-10z" fill="currentColor" opacity="0.2" />
        <path d="M8 44V18l16-12 16 12v26" strokeLinejoin="round" />
        <path d="M16 44V28h16v16" />
        <path d="M24 28v-6" strokeLinecap="round" />
        <path d="M4 20h40" strokeLinecap="round" />
        <path d="M14 14v-2M34 14v-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titulo: 'Particulares e Colecionadores',
    descricao: 'Atendemos colecionadores e devotos que desejam restaurar e preservar suas imagens sacras pessoais com o máximo cuidado.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 24c5.523 0 10-4.477 10-10S29.523 4 24 4 14 8.477 14 14s4.477 10 10 10z" />
        <path d="M8 44v-4c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12v4" />
        <path d="M24 20v4M22 22h4" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function PublicoSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="publico" className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #C4973A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C4973A] tracking-[0.2em] uppercase text-xs font-sans mb-3">Quem Atendemos</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            A Quem Servimos
          </h2>
          <div className="w-16 h-0.5 bg-[#C4973A] mx-auto mb-6" />
          <p className="text-white/60 font-sans max-w-2xl mx-auto leading-relaxed">
            Levamos nossa expertise a todos que valorizam e desejam preservar a arte sacra.
          </p>
          <p className="font-display text-lg text-[#C4973A] italic mt-4">
            Honrar a fé que sobreviveu. Devolver ao sagrado o lugar que ele nunca deveria ter perdido.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {publicos?.map?.((pub: any, index: number) => (
            <motion.div
              key={pub?.titulo ?? index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="text-center p-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C4973A]/30 transition-all duration-300"
            >
              <div className="text-[#C4973A] mb-5 flex justify-center">
                {pub?.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{pub?.titulo ?? ''}</h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed">{pub?.descricao ?? ''}</p>
            </motion.div>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
