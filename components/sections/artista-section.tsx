'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function ArtistaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="artista" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1E2D40]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'https://i.ytimg.com/vi/iQ5g7w3oVgc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC0jSEZXF_rtq6hmF_XMuGiuTuakQ d=\'M30 0L60 30L30 60L0 30Z\' fill=\'none\' stroke=\'%23C4973A\' stroke-width=\'0.5\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C4973A] tracking-[0.2em] uppercase text-xs font-sans mb-3">A Artista</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Neuli Paz Menezes
          </h2>
          <div className="w-16 h-0.5 bg-[#C4973A] mx-auto" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photos column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col items-center gap-6"
          >
            {/* Portrait */}
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 border border-[#C4973A]/20 rounded-xl" />
              <div className="absolute -inset-1.5 border border-[#C4973A]/10 rounded-lg" />
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/neuli-crucifixo.jpeg"
                  alt="Neuli Paz — artista plástica e restauradora de arte sacra"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 30vw"
                />
              </div>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                'Artista Plástica',
                'Escritora',
                'Historiadora',
                'Professora',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-sans uppercase tracking-widest text-[#C4973A] border border-[#C4973A]/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Opening quote */}
            <div className="relative">
              <svg className="absolute -top-4 -left-4 w-12 h-12 text-[#C4973A]/15" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <p className="font-display text-2xl md:text-3xl text-white/90 italic leading-relaxed pl-6 border-l-2 border-[#C4973A]/40">
                Muitos escolhem uma profissão.<br />
                <span className="text-[#C4973A]">Eu fui escolhida por um chamado.</span>
              </p>
            </div>

            <div className="space-y-5 text-white/70 font-sans leading-relaxed text-[15px]">
              <p>
                Neuli Paz Menezes é mineira de alma e de raiz, carrega em si a densidade silenciosa das Minas Gerais, terra de barrocos, de santos encravados em madeira e ouro, de fé que resiste séculos sem pedir permissão. Não por acaso, foi aqui que ela aprendeu a escutar o que as imagens dizem quando ninguém mais as vê.
              </p>

              <p>
                Integra seis Academias de Letras e assina textos em mais de trinta antologias nacionais e internacionais. Escreve como quem reza: com intenção, com entrega, com a consciência de que as palavras, assim como as imagens sacras, precisam ser tratadas com reverência.
              </p>

              <p>
                Artista plástica, escritora e professora, Neuli construiu sua vida na fronteira entre a arte e o saber. Formada em História Antiga, percorreu os corredores do tempo com a rigorosidade de quem estuda o passado e a sensibilidade de quem o sente. Por anos, serviu ao Tribunal de Justiça de Minas Gerais, mas foi no ateliê, entre pincéis e pigmentos, que descobriu onde sua história se tornava maior do que ela mesma.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-[#C4973A]/20" />
              <svg className="w-5 h-5 text-[#C4973A]/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
              </svg>
              <div className="flex-1 h-px bg-[#C4973A]/20" />
            </div>



            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[#C4973A]">6</p>
                <p className="text-[10px] text-white/40 font-sans uppercase tracking-wider mt-1">Academias de Letras</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[#C4973A]">30+</p>
                <p className="text-[10px] text-white/40 font-sans uppercase tracking-wider mt-1">Antologias Publicadas</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[#C4973A]">20+</p>
                <p className="text-[10px] text-white/40 font-sans uppercase tracking-wider mt-1">Anos de Dedicação</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
