import HeroSection from '@/components/sections/hero-section'
import SobreSection from '@/components/sections/sobre-section'
import ArtistaSection from '@/components/sections/artista-section'
import CitacaoSection from '@/components/sections/citacao-section'
import ServicosSection from '@/components/sections/servicos-section'
import GaleriaSection from '@/components/sections/galeria-section'
import PublicoSection from '@/components/sections/publico-section'
import ContatoSection from '@/components/sections/contato-section'
import FooterSection from '@/components/sections/footer-section'
import WhatsAppButton from '@/components/whatsapp-button'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://neulipaz.com.br/#business',
      name: 'Ateliê Neuli Paz',
      alternateName: 'Ateliê Neuli Paz Menezes',
      description: 'Restauração e conservação de imagens sacras católicas com mais de 20 anos de experiência. Serviços de douramento, policromia, limpeza e restauro de altares.',
      url: 'https://neulipaz.com.br',
      telephone: '+5537999891331',
      email: 'neuli.paz+atelie@gmail.com',
      image: 'https://neulipaz.com.br/og-image.png',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'MG',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        addressCountry: 'BR',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Brasil',
      },
      founder: {
        '@type': 'Person',
        name: 'Neuli Paz Menezes',
        jobTitle: 'Artista Plástica e Restauradora de Arte Sacra',
        description: 'Artista plástica, escritora, historiadora e professora. Integra seis Academias de Letras e assina textos em mais de trinta antologias nacionais e internacionais.',
      },
      sameAs: [
        'https://www.instagram.com/atelieneulipaz/',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de Restauração de Arte Sacra',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Restauração de Imagens Sacras',
              description: 'Restauração completa de imagens sacras católicas danificadas, devolvendo forma, cor e dignidade às peças.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Conservação Preventiva',
              description: 'Técnicas especializadas para preservar e proteger imagens sacras contra desgaste e deterioração.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Douramento',
              description: 'Aplicação de folhas de ouro e técnicas tradicionais de douração em imagens e altares sacros.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Policromia',
              description: 'Repintura artística respeitando a iconografia original das imagens sacras.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Limpeza de Imagens Sacras',
              description: 'Limpeza técnica e cuidadosa de imagens sacras para remoção de sujidades sem danificar a peça.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Restauro de Altares',
              description: 'Restauração completa de altares sacros, incluindo estrutura, pintura e detalhes ornamentais.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://neulipaz.com.br/#website',
      url: 'https://neulipaz.com.br',
      name: 'Ateliê Neuli Paz',
      description: 'Restauração e conservação de imagens sacras católicas',
      publisher: {
        '@id': 'https://neulipaz.com.br/#business',
      },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://neulipaz.com.br/#webpage',
      url: 'https://neulipaz.com.br',
      name: 'Ateliê Neuli Paz | Restauração de Imagens Sacras Católicas em Minas Gerais',
      isPartOf: {
        '@id': 'https://neulipaz.com.br/#website',
      },
      about: {
        '@id': 'https://neulipaz.com.br/#business',
      },
      description: 'Restauração e conservação de imagens sacras católicas com mais de 20 anos de experiência.',
      inLanguage: 'pt-BR',
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-warm-white">
        <HeroSection />
        <SobreSection />
        <ArtistaSection />
        <CitacaoSection />
        <ServicosSection />
        <GaleriaSection />
        <PublicoSection />
        <ContatoSection />
        <FooterSection />
        <WhatsAppButton />
      </main>
    </>
  )
}
