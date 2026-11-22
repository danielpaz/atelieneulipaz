'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const servicos = [
  {
    titulo: 'Restauração',
    descricao: 'Recuperação integral de imagens sacras danificadas, devolvendo sua forma e beleza original com técnicas especializadas.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 5v30M5 20h30" strokeLinecap="round" />
        <circle cx="20" cy="20" r="15" />
        <path d="M12 12l4 4M24 12l-4 4M12 28l4-4M24 28l-4-4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titulo: 'Conservação',
    descricao: 'Tratamentos preventivos para preservar a integridade das peças sacras, protegendo-as contra deterioração e desgaste.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 4C20 4 6 14 6 22c0 7.732 6.268 14 14 14s14-6.268 14-14C34 14 20 4 20 4z" />
        <path d="M20 18v10M16 22h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titulo: 'Limpeza',
    descricao: 'Remoção cuidadosa de sujidades, fuligem e camadas de verniz oxidado, revelando as cores originais da peça.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 30l5-15 10 10-15 5z" />
        <path d="M15 15l10-10 10 10-10 10" strokeLinejoin="round" />
        <circle cx="25" cy="15" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    titulo: 'Douramento',
    descricao: 'Aplicação artesanal de folha de ouro e técnicas de douração que restituem o esplendor das peças sacras.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="10" />
        <path d="M20 10v20M10 20h20" strokeLinecap="round" />
        <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.3" />
        <path d="M14 8l2 4M26 8l-2 4M14 32l2-4M26 32l-2-4M8 14l4 2M8 26l4-2M32 14l-4 2M32 26l-4-2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titulo: 'Policromia',
    descricao: 'Repintura fiel e detalhada das imagens, respeitando as cores e técnicas originais de cada época e escola artística.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="14" r="4" />
        <circle cx="26" cy="16" r="3" />
        <circle cx="18" cy="26" r="3.5" />
        <path d="M8 20c0-8 6-16 14-16s14 8 14 16-6 16-14 16" />
        <path d="M8 20c0 8 4 16 10 16" />
      </svg>
    ),
  },
  {
    titulo: 'Restauro de Altares',
    descricao: 'Restauração completa de altares, retábulos e peças de talha, preservando a riqueza do patrimônio sacro.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 36h24M10 36V16l10-12 10 12v20" strokeLinejoin="round" />
        <path d="M16 36v-10h8v10" />
        <path d="M20 14v4M18 16h4" strokeLinecap="round" />
        <path d="M6 16h28" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function ServicosSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="servicos" className="py-24 md:py-32 bg-cream">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C4973A] tracking-[0.2em] uppercase text-xs font-sans mb-3">Nossos Serviços</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy tracking-tight mb-4">
            Cuidado e Excelência em Cada Detalhe
          </h2>
          <div className="w-16 h-0.5 bg-[#C4973A] mx-auto mb-6" />
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços especializados para a preservação
            e recuperação do patrimônio sacro.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos?.map?.((servico: any, index: number) => (
            <motion.div
              key={servico?.titulo ?? index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white rounded-lg p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#C4973A]/20"
            >
              <div className="text-[#C4973A] mb-5 group-hover:scale-110 transition-transform duration-300">
                {servico?.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-3">{servico?.titulo ?? ''}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{servico?.descricao ?? ''}</p>
            </motion.div>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
