'use client'

export default function FooterSection() {
  const scrollToSection = (id: string) => {
    const el = document?.getElementById?.(id ?? '')
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">Ateliê Neuli Paz</h3>
            <p className="text-white/50 font-sans text-sm leading-relaxed mb-6">
              Especialistas em restauração e conservação de imagens sacras católicas.
              Tradição, técnica e reverência em cada trabalho.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/atelieneulipaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C4973A]/80 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://wa.me/5537999891331"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600/80 flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="mailto:neuli.paz+atelie@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C4973A]/80 flex items-center justify-center transition-colors duration-300"
                aria-label="E-mail"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-[#C4973A] mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: 'Sobre', id: 'sobre' },
                { label: 'A Artista', id: 'artista' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Portfólio', id: 'galeria' },
                { label: 'Público', id: 'publico' },
                { label: 'Contato', id: 'contato' },
              ]?.map?.((link: any) => (
                <li key={link?.id ?? link?.label}>
                  <button
                    onClick={() => scrollToSection(link?.id ?? '')}
                    className="text-white/50 hover:text-[#C4973A] font-sans text-sm transition-colors duration-300"
                  >
                    {link?.label ?? ''}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-[#C4973A] mb-4">Serviços</h4>
            <ul className="space-y-2">
              {['Restauração', 'Conservação', 'Limpeza', 'Douramento', 'Policromia', 'Restauro de Altares']?.map?.((s: string) => (
                <li key={s}>
                  <span className="text-white/50 font-sans text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 font-sans text-xs">
              © {new Date().getFullYear()} Ateliê Neuli Paz. Todos os direitos reservados.
            </p>
            <p className="text-white/30 font-sans text-xs">
              Restauração e Conservação de Arte Sacra
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
