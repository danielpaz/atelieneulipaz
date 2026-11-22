'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function SobreSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="sobre" className="py-24 md:py-32 bg-warm-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/gallery/imagem-completa.jpeg"
                alt="Imagem sacra completa restaurada pelo Ateliê Neuli Paz"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#C4973A] rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#C4973A] rounded-br-lg" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#C4973A] tracking-[0.2em] uppercase text-xs font-sans mb-3">Sobre o Ateliê</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy tracking-tight mb-6">
              Arte a Serviço da Fé
            </h2>
            <div className="w-16 h-0.5 bg-[#C4973A] mb-6" />
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Restaurar é inclinar-se sobre o que o tempo feriu e enxergar, por baixo da tinta descascada e do gesso partido, a oração que alguém depositou ali. É tocar com as mãos o que foi tocado pela fé de gerações: a Nossa Senhora herdada, o Sagrado Coração que velou sobre nascimentos e mortes, o santo de devoção que atravessou mudanças, guerras e silêncios dentro de uma família.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Cada peça que chega ao ateliê traz uma história que nenhum documento registrou. Com técnica apurada e olhar de historiadora, estudamos a iconografia original antes de tocar na imagem. Com a paciência de quem sabe que o sagrado não aceita pressa, devolvemos cor, forma e dignidade ao que o tempo quis apagar — com uma reverência silenciosa, quase litúrgica, em que cada fissura é fechada como quem fecha uma ferida.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">
              Atendemos igrejas, santuários, paróquias e colecionadores particulares em todo o território nacional,
              sempre com compromisso, transparência e excelência artística.
            </p>

            <div className="border-l-2 border-[#C4973A]/40 pl-5 mb-8">
              <p className="font-display text-lg md:text-xl text-navy/80 italic leading-relaxed">
                Não se trata de restaurar objetos. Trata-se de guardar memórias.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[#C4973A]">20+</p>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider">Anos de Experiência</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[#C4973A]">200+</p>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider">Peças Restauradas</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[#C4973A]">100%</p>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider">Dedicação</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
