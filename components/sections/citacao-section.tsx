'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CitacaoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[#1E2D40]">
      {/* Decorative cross pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-white" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-white" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-[1px] bg-[#C4973A]/40" />
            <svg className="w-5 h-5 text-[#C4973A]/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
            </svg>
            <div className="w-12 h-[1px] bg-[#C4973A]/40" />
          </div>

          {/* Quote */}
          <blockquote className="font-display text-xl md:text-2xl lg:text-[1.7rem] text-white/90 italic leading-relaxed md:leading-relaxed tracking-wide">
            “A beleza e a cor das imagens estimulam a minha oração. É uma festa para os meus olhos, tanto como o espetáculo dos campos estimula o meu coração a dar glória a Deus.”
          </blockquote>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8"
          >
            <div className="w-10 h-[1px] bg-[#C4973A] mx-auto mb-4" />
            <p className="text-[#C4973A] font-sans text-sm tracking-[0.15em] uppercase">
              São João Damasceno
            </p>
          </motion.div>

          {/* Ornamental bottom */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="w-12 h-[1px] bg-[#C4973A]/40" />
            <svg className="w-5 h-5 text-[#C4973A]/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61z" />
            </svg>
            <div className="w-12 h-[1px] bg-[#C4973A]/40" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
