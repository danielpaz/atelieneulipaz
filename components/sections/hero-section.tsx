'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax: background moves slower than scroll, with a subtle zoom
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25])

  const scrollToContato = () => {
    const el = document?.getElementById?.('contato')
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  const scrollToGaleria = () => {
    const el = document?.getElementById?.('galeria')
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/gallery/imagem-restaurada.jpeg"
          alt="Arte sacra restaurada pelo Ateliê Neuli Paz — vestes e detalhes"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E2D40]/80 via-[#1E2D40]/60 to-[#1E2D40]/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <svg width="60" height="20" viewBox="0 0 60 20" className="mx-auto text-[#C4973A]" fill="currentColor">
            <path d="M0 10 Q15 0 30 10 Q45 20 60 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="30" cy="10" r="3" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#C4973A] tracking-[0.3em] uppercase text-sm font-sans mb-4"
        >
          Restauração & Conservação de Arte Sacra
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-6"
        >
          Ateliê Neuli Paz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Devolvemos a beleza e a sacralidade às imagens que contam a história da fé.
          Mais de duas décadas dedicadas à arte sacra católica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#C4973A]/50" />
            <svg className="w-4 h-4 text-[#C4973A]/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
            </svg>
            <div className="w-12 h-[1px] bg-[#C4973A]/50" />
          </div>
          <p className="font-display text-2xl md:text-4xl text-[#C4973A] italic tracking-wide">
            Onde a arte encontra a oração.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-[1px] bg-[#C4973A]/50" />
            <svg className="w-4 h-4 text-[#C4973A]/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
            </svg>
            <div className="w-12 h-[1px] bg-[#C4973A]/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContato}
            className="px-8 py-3.5 bg-[#C4973A] text-white font-sans text-sm tracking-wider uppercase rounded hover:bg-[#B08832] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Solicitar Orçamento
          </button>
          <button
            onClick={scrollToGaleria}
            className="px-8 py-3.5 border border-white/40 text-white font-sans text-sm tracking-wider uppercase rounded hover:bg-white/10 transition-all duration-300"
          >
            Ver Trabalhos
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-[#C4973A] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
