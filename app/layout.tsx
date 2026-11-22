import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import type { Metadata } from 'next'
import Script from 'next/script'

export const dynamic = 'force-dynamic'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Ateliê Neuli Paz | Restauração de Imagens Sacras Católicas em Minas Gerais',
    template: '%s | Ateliê Neuli Paz',
  },
  description: 'Restauração e conservação de imagens sacras católicas com mais de 20 anos de experiência. Serviços de douramento, policromia, limpeza e restauro de altares para igrejas, santuários e particulares em Minas Gerais e todo o Brasil.',
  keywords: [
    'restauração de imagens sacras',
    'conservação de arte sacra',
    'restauração de santos católicos',
    'douramento de imagens sacras',
    'policromia sacra',
    'restauro de altares',
    'restauração de imagens religiosas',
    'ateliê de restauração',
    'Neuli Paz',
    'arte sacra católica',
    'restauração Minas Gerais',
    'conservação de santos',
    'restauração de Nossa Senhora',
    'restauração de imagens de gesso',
    'restauração de imagens de madeira',
  ],
  authors: [{ name: 'Ateliê Neuli Paz', url: 'https://neulipaz.com.br' }],
  creator: 'Ateliê Neuli Paz',
  publisher: 'Ateliê Neuli Paz',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Ateliê Neuli Paz | Restauração de Imagens Sacras Católicas',
    description: 'Mais de 20 anos restaurando imagens sacras católicas com técnica, fé e dedicação. Atendemos igrejas, santuários e particulares em todo o Brasil.',
    url: 'https://neulipaz.com.br',
    siteName: 'Ateliê Neuli Paz',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ateliê Neuli Paz — Restauração de Arte Sacra' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ateliê Neuli Paz | Restauração de Imagens Sacras',
    description: 'Restauração e conservação de imagens sacras católicas com mais de 20 anos de experiência em Minas Gerais.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://neulipaz.com.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Arte e Restauração',
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'https://neulipaz.com.br'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${cormorant.variable} ${lato.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
