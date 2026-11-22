'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { toast } from 'sonner'

export default function ContatoSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [servico, setServico] = useState('')

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!nome?.trim?.() || !mensagem?.trim?.()) {
      toast?.error?.('Por favor, preencha nome e mensagem.')
      return
    }
    const text = `Olá! Meu nome é ${nome ?? ''}. ${servico ? `Serviço: ${servico}. ` : ''}${email ? `E-mail: ${email}. ` : ''}${telefone ? `Tel: ${telefone}. ` : ''}Mensagem: ${mensagem ?? ''}`
    const encoded = encodeURIComponent(text ?? '')
    const url = `https://wa.me/5537999891331?text=${encoded}`
    window?.open?.(url, '_blank')
    toast?.success?.('Redirecionando para o WhatsApp...')
  }, [nome, email, telefone, mensagem, servico])

  return (
    <section id="contato" className="py-24 md:py-32 bg-cream">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C4973A] tracking-[0.2em] uppercase text-xs font-sans mb-3">Contato</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy tracking-tight mb-6">
              Fale Conosco
            </h2>
            <div className="w-16 h-0.5 bg-[#C4973A] mb-6" />
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Entre em contato para solicitar um orçamento ou tirar dúvidas sobre nossos serviços.
              Responderemos o mais breve possível.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/5537999891331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 group-hover:bg-green-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm font-bold text-navy">WhatsApp</p>
                  <p className="text-muted-foreground text-sm font-sans">(37) 99989-1331</p>
                </div>
              </a>

              <a
                href="mailto:neuli.paz+atelie@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C4973A]/10 flex items-center justify-center text-[#C4973A] group-hover:bg-[#C4973A]/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4l-10 8L2 4" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm font-bold text-navy">E-mail</p>
                  <p className="text-muted-foreground text-sm font-sans">neuli.paz+atelie@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/atelieneulipaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-600 group-hover:bg-pink-500/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm font-bold text-navy">Instagram</p>
                  <p className="text-muted-foreground text-sm font-sans">@atelieneulipaz</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-[var(--shadow-md)]">
              <h3 className="font-display text-2xl font-semibold text-navy mb-6">Solicitar Orçamento</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-sans font-bold text-navy mb-1">Nome *</label>
                  <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e?.target?.value ?? '')}
                    required
                    className="w-full px-4 py-2.5 border border-border rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#C4973A]/50 focus:border-[#C4973A] transition-colors bg-white text-foreground"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-sans font-bold text-navy mb-1">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e?.target?.value ?? '')}
                      className="w-full px-4 py-2.5 border border-border rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#C4973A]/50 focus:border-[#C4973A] transition-colors bg-white text-foreground"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-sans font-bold text-navy mb-1">Telefone</label>
                    <input
                      id="telefone"
                      type="tel"
                      value={telefone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e?.target?.value ?? '')}
                      className="w-full px-4 py-2.5 border border-border rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#C4973A]/50 focus:border-[#C4973A] transition-colors bg-white text-foreground"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servico" className="block text-sm font-sans font-bold text-navy mb-1">Serviço de interesse</label>
                  <select
                    id="servico"
                    value={servico}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setServico(e?.target?.value ?? '')}
                    className="w-full px-4 py-2.5 border border-border rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#C4973A]/50 focus:border-[#C4973A] transition-colors bg-white text-foreground"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Restauração">Restauração</option>
                    <option value="Conservação">Conservação</option>
                    <option value="Limpeza">Limpeza</option>
                    <option value="Douramento">Douramento</option>
                    <option value="Policromia">Policromia</option>
                    <option value="Restauro de Altares">Restauro de Altares</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-sans font-bold text-navy mb-1">Mensagem *</label>
                  <textarea
                    id="mensagem"
                    value={mensagem}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMensagem(e?.target?.value ?? '')}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-border rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#C4973A]/50 focus:border-[#C4973A] transition-colors resize-none bg-white text-foreground"
                    placeholder="Descreva o que precisa (tipo de peça, estado de conservação, etc.)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-[#C4973A] text-white font-sans text-sm tracking-wider uppercase rounded hover:bg-[#B08832] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
