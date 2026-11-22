'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Projeto {
  nome: string
  ano: number
  mes?: string
  antes: string
  depois: string
}

const projetos: Projeto[] = [
  {
    nome: 'São José com o Menino Jesus',
    ano: 2026,
    mes: 'Setembro',
    antes: '/gallery/sao-jose-2026-antes.jpg',
    depois: '/gallery/sao-jose-2026-depois.jpg',
  },
  {
    nome: 'Nossa Senhora Desatadora dos Nós III',
    ano: 2026,
    mes: 'Setembro',
    antes: '/gallery/desatadora-iii-2026-antes.jpg',
    depois: '/gallery/desatadora-iii-2026-depois.jpg',
  },
  {
    nome: 'São Francisco de Assis',
    ano: 2026,
    mes: 'Setembro',
    antes: '/gallery/sao-francisco-2026-antes.jpg',
    depois: '/gallery/sao-francisco-2026-depois.jpg',
  },
  {
    nome: 'Santo Expedito',
    ano: 2026,
    mes: 'Agosto',
    antes: '/gallery/santo-expedito-2026-antes.jpg',
    depois: '/gallery/santo-expedito-2026-depois.jpg',
  },
  {
    nome: 'Nossa Senhora Desatadora dos Nós II',
    ano: 2026,
    mes: 'Agosto',
    antes: '/gallery/desatadora-ii-2026-antes.jpg',
    depois: '/gallery/desatadora-ii-2026-depois.jpg',
  },
  {
    nome: 'Crucifixo e Terço Centenários',
    ano: 2026,
    mes: 'Agosto',
    antes: '/gallery/crucifixo-terco-2026-antes.jpg',
    depois: '/gallery/crucifixo-terco-2026-depois.jpg',
  },
  {
    nome: 'Nossa Senhora da França',
    ano: 2026,
    mes: 'Julho',
    antes: '/gallery/ns-franca-2026-antes.jpg',
    depois: '/gallery/ns-franca-2026-depois.jpg',
  },
  {
    nome: 'Nossa Senhora de Lourdes',
    ano: 2026,
    mes: 'Julho',
    antes: '/gallery/ns-lourdes-2026-antes.jpg',
    depois: '/gallery/ns-lourdes-2026-depois.jpg',
  },
  {
    nome: 'São Rafael Arcanjo',
    ano: 2026,
    antes: '/gallery/sao-rafael-arcanjo-2026-antes.jpg',
    depois: '/gallery/sao-rafael-arcanjo-2026-depois.jpg',
  },
  {
    nome: 'Anjo Orquestral da Divina Melodia',
    ano: 2026,
    antes: '/gallery/anjo-orquestral-2026-antes.jpg',
    depois: '/gallery/anjo-orquestral-2026-depois.jpg',
  },
  {
    nome: 'Nossa Senhora Desatadora dos Nós',
    ano: 2026,
    antes: '/gallery/desatadora-2026-antes.jpeg',
    depois: '/gallery/desatadora-2026-depois.jpeg',
  },
  {
    nome: 'Nossa Senhora da Rosa Mística',
    ano: 2026,
    antes: '/gallery/ns-rosa-mistica-2026-antes.jpeg',
    depois: '/gallery/ns-rosa-mistica-2026-depois.jpeg',
  },
  {
    nome: 'São Gabriel Arcanjo',
    ano: 2024,
    antes: '/gallery/sao-gabriel-arcanjo-2024-antes.png',
    depois: '/gallery/sao-gabriel-arcanjo-2024-depois.png',
  },
  {
    nome: 'São Judas Tadeu',
    ano: 2020,
    antes: '/gallery/sao-judas-tadeu-2020-antes.jpeg',
    depois: '/gallery/sao-judas-tadeu-2020-depois.jpeg',
  },
  {
    nome: 'Sagrado Coração de Jesus',
    ano: 2019,
    antes: '/gallery/sagrado-coracao-2019-antes.jpeg',
    depois: '/gallery/sagrado-coracao-2019-depois.jpeg',
  },
  {
    nome: 'Crucifixo de Madeira',
    ano: 2019,
    antes: '/gallery/crucifixo-madeira-2019-antes.jpeg',
    depois: '/gallery/crucifixo-madeira-2019-depois.jpeg',
  },
  {
    nome: 'Anjinho Querubim',
    ano: 2018,
    antes: '/gallery/anjinho-querubim-2018-antes.jpeg',
    depois: '/gallery/anjinho-querubim-2018-depois.jpeg',
  },
  {
    nome: 'São Sebastião',
    ano: 2017,
    antes: '/gallery/sao-sebastiao-2017-antes.jpeg',
    depois: '/gallery/sao-sebastiao-2017-depois.jpeg',
  },
  {
    nome: 'Menino Jesus de Presépio',
    ano: 2017,
    antes: '/gallery/menino-jesus-2017-antes.jpeg',
    depois: '/gallery/menino-jesus-2017-depois.jpeg',
  },
  {
    nome: 'Santa Luzia',
    ano: 2016,
    antes: '/gallery/santa-luzia-2016-antes.jpeg',
    depois: '/gallery/santa-luzia-2016-depois.jpeg',
  },
  {
    nome: 'Nossa Senhora do Perpétuo Socorro',
    ano: 2014,
    antes: '/gallery/ns-perpetuo-socorro-2014-antes.jpeg',
    depois: '/gallery/ns-perpetuo-socorro-2014-depois.jpeg',
  },
  {
    nome: 'Nossa Senhora das Graças',
    ano: 2013,
    antes: '/gallery/ns-gracas-2013-antes.jpeg',
    depois: '/gallery/ns-gracas-2013-depois.jpeg',
  },
  {
    nome: 'Santo Antônio',
    ano: 2012,
    antes: '/gallery/santo-antonio-2012-antes.jpeg',
    depois: '/gallery/santo-antonio-2012-depois.jpeg',
  },
  {
    nome: 'Nossa Senhora da Conceição',
    ano: 2010,
    antes: '/gallery/ns-conceicao-2010-antes.jpeg',
    depois: '/gallery/ns-conceicao-2010-depois.jpeg',
  },
  {
    nome: 'São Sebastião',
    ano: 2010,
    antes: '/gallery/sao-sebastiao-2010-antes.jpeg',
    depois: '/gallery/sao-sebastiao-2010-depois.jpeg',
  },
  {
    nome: 'Menino Jesus do Presépio',
    ano: 2009,
    antes: '/gallery/menino-jesus-2009a-antes.jpeg',
    depois: '/gallery/menino-jesus-2009a-depois.jpeg',
  },
  {
    nome: 'Nossa Senhora Aparecida',
    ano: 2009,
    antes: '/gallery/ns-aparecida-2009-antes.jpeg',
    depois: '/gallery/ns-aparecida-2009-depois.jpeg',
  },
  {
    nome: 'Sagrado Coração de Jesus',
    ano: 2008,
    antes: '/gallery/sagrado-coracao-2008-antes.jpeg',
    depois: '/gallery/sagrado-coracao-2008-depois.jpeg',
  },
  {
    nome: 'Nossa Senhora Aparecida em Madeira',
    ano: 2006,
    antes: '/gallery/ns-aparecida-madeira-2006-antes.jpeg',
    depois: '/gallery/ns-aparecida-madeira-2006-depois.jpeg',
  },

  {
    nome: 'São José',
    ano: 2005,
    antes: '/gallery/sao-jose-2005-antes.jpeg',
    depois: '/gallery/sao-jose-2005-depois.jpeg',
  },
  {
    nome: 'Nossa Senhora — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-nossa-senhora-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-nossa-senhora-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Rei Mago Baltazar — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-rei-mago-baltazar-2005-antes.jpeg',
    depois: '/gallery/presepio-rei-mago-baltazar-2005-depois.jpeg',
  },
  {
    nome: 'Rei Mago Gaspar — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-rei-mago-gaspar-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-rei-mago-gaspar-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Rei Mago Belchior — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-rei-mago-belchior-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-rei-mago-belchior-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Anjo — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-anjo-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-anjo-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Pastor 1 — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-pastor-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-pastor-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Pastor 2 — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-pastor-2-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-pastor-2-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Pastor 3 — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-pastor-3-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-pastor-3-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Pastor 4 — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-pastor-4-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-pastor-4-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Camelo — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-camelo-de-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-camelo-de-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Cavalo — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-cavalo-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-cavalo-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Vaca — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-vaca-do-presepio-holandes-2005-antes.jpeg',
    depois: '/gallery/presepio-vaca-do-presepio-holandes-2005-depois.jpeg',
  },
  {
    nome: 'Carneiros — Presépio Holandês',
    ano: 2005,
    antes: '/gallery/presepio-carneiros-de-presepio-2005-antes.jpeg',
    depois: '/gallery/presepio-carneiros-de-presepio-2005-depois.jpeg',
  },
  {
    nome: 'Nossa Senhora Aparecida',
    ano: 2001,
    antes: '/gallery/ns-aparecida-2001-antes.jpeg',
    depois: '/gallery/ns-aparecida-2001-depois.jpeg',
  },
]

const decadas = ['Todos', '2020s', '2010s', '2000s'] as const

export default function GaleriaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [filtro, setFiltro] = useState<string>('Todos')
  const [showAll, setShowAll] = useState(false)

  const filteredProjetos = useMemo(() => {
    if (filtro === 'Todos') return projetos
    if (filtro === '2020s') return projetos.filter((p) => p.ano >= 2020)
    if (filtro === '2010s') return projetos.filter((p) => p.ano >= 2010 && p.ano < 2020)
    if (filtro === '2000s') return projetos.filter((p) => p.ano < 2010)
    return projetos
  }, [filtro])

  const visibleProjetos = showAll ? filteredProjetos : filteredProjetos.slice(0, 6)

  const selectedProjeto = selectedIndex !== null ? filteredProjetos?.[Math.floor(selectedIndex / 2)] : null
  const isDepois = selectedIndex !== null ? selectedIndex % 2 === 1 : false

  return (
    <section id="galeria" className="py-24 md:py-32 bg-warm-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[#C4973A] tracking-[0.2em] uppercase text-xs font-sans mb-3">Portfólio</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy tracking-tight mb-4">
            Nossos Trabalhos
          </h2>
          <div className="w-16 h-0.5 bg-[#C4973A] mx-auto mb-6" />
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Mais de 20 anos devolvendo beleza e fé às imagens sacras. Confira algumas de nossas restaurações.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {decadas.map((d) => (
            <button
              key={d}
              onClick={() => { setFiltro(d); setShowAll(false) }}
              className={`px-5 py-2 rounded-full text-sm font-sans transition-all duration-300 ${
                filtro === d
                  ? 'bg-[#1E2D40] text-white shadow-md'
                  : 'bg-white text-[#1E2D40] border border-[#1E2D40]/20 hover:border-[#C4973A] hover:text-[#C4973A]'
              }`}
            >
              {d}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjetos?.map?.((projeto: Projeto, index: number) => (
            <motion.div
              key={`${projeto?.nome}-${projeto?.ano}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="bg-white rounded-xl shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 overflow-hidden group"
            >
              {/* Antes / Depois */}
              <div className="grid grid-cols-2 gap-0.5 bg-gray-100">
                <div
                  className="relative aspect-[3/4] cursor-pointer overflow-hidden"
                  onClick={() => setSelectedIndex(index * 2)}
                >
                  <Image
                    src={projeto?.antes ?? ''}
                    alt={`${projeto?.nome ?? 'Imagem'} ${projeto?.ano ?? ''} — antes da restauração`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  <span className="absolute bottom-2 left-2 bg-red-600/80 text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Antes
                  </span>
                </div>
                <div
                  className="relative aspect-[3/4] cursor-pointer overflow-hidden"
                  onClick={() => setSelectedIndex(index * 2 + 1)}
                >
                  <Image
                    src={projeto?.depois ?? ''}
                    alt={`${projeto?.nome ?? 'Imagem'} ${projeto?.ano ?? ''} — após restauração`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  <span className="absolute bottom-2 right-2 bg-emerald-600/80 text-white text-[10px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Depois
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-[#1E2D40] leading-tight">
                  {projeto?.nome ?? ''}
                </h3>
                <p className="text-[#C4973A] text-sm font-sans mt-1">{projeto?.mes ? `${projeto.mes} de ${projeto.ano}` : projeto?.ano ?? ''}</p>
              </div>
            </motion.div>
          )) ?? []}
        </div>

        {/* Ver mais / Ver menos */}
        {filteredProjetos.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#C4973A] text-[#C4973A] rounded-full font-sans text-sm font-semibold hover:bg-[#C4973A] hover:text-white transition-all duration-300"
            >
              {showAll ? 'Ver menos' : `Ver todos (${filteredProjetos.length})`}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProjeto && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e: React.MouseEvent) => e?.stopPropagation?.()}
            >
              <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
                <Image
                  src={isDepois ? (selectedProjeto?.depois ?? '') : (selectedProjeto?.antes ?? '')}
                  alt={`${selectedProjeto?.nome ?? 'Imagem'} — ${isDepois ? 'após' : 'antes da'} restauração`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white font-display text-xl">{selectedProjeto?.nome ?? ''}</p>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <span className="text-white/60 text-sm font-sans">{selectedProjeto?.mes ? `${selectedProjeto.mes} de ${selectedProjeto.ano}` : selectedProjeto?.ano ?? ''}</span>
                  <span className={`text-xs font-sans font-bold px-3 py-0.5 rounded-full ${
                    isDepois ? 'bg-emerald-600/80 text-white' : 'bg-red-600/80 text-white'
                  }`}>
                    {isDepois ? 'Depois' : 'Antes'}
                  </span>
                </div>
              </div>
              {/* Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
                <button
                  onClick={(e: React.MouseEvent) => {
                    e?.stopPropagation?.()
                    setSelectedIndex((prev: number | null) => {
                      if (prev === null || prev === 0) return (filteredProjetos.length * 2) - 1
                      return prev - 1
                    })
                  }}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
                  aria-label="Imagem anterior"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 4l-6 6 6 6" />
                  </svg>
                </button>
                <button
                  onClick={(e: React.MouseEvent) => {
                    e?.stopPropagation?.()
                    setSelectedIndex((prev: number | null) => {
                      if (prev === null) return 0
                      return (prev + 1) % (filteredProjetos.length * 2)
                    })
                  }}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
                  aria-label="Próxima imagem"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M8 4l6 6-6 6" />
                  </svg>
                </button>
              </div>
              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
                aria-label="Fechar"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 5l10 10M15 5l-10 10" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
