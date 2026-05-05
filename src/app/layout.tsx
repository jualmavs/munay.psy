import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MUNAY.PSY | Sabiduría Ancestral × Bienestar Moderno',
  description: 'Adaptógenos, fermentos vivos y enteógenos naturales de Colombia. Melena de León, Kombucha, Miel Ceremonial y más.',
  keywords: ['MUNAY','adaptógenos','melena de león','kombucha','enteógenos','bienestar','Colombia'],
  authors: [{ name: 'MUNAY.PSY' }],
  creator: 'MUNAY.PSY',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://munay.psy',
    siteName: 'MUNAY.PSY',
    title: 'MUNAY.PSY | Sabiduría Ancestral × Bienestar Moderno',
    description: 'Adaptógenos, fermentos vivos y enteógenos naturales.',
    images: [{ url: '/images/logo.png', width: 1200, height: 630, alt: 'MUNAY.PSY' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MUNAY.PSY | Sabiduría Ancestral × Bienestar Moderno',
    description: 'Adaptógenos, fermentos vivos y enteógenos naturales. Colombia.',
    images: ['/images/logo.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#05050A',
};

const schemaOrg = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MUNAY.PSY',
  description: 'Adaptógenos, fermentos vivos y enteógenos naturales.',
  url: 'https://munay.psy',
  telephone: '+57-314-571-2545',
  email: 'munaynature24@gmail.com',
  sameAs: [
    'https://www.instagram.com/munay.psy/',
    'https://www.facebook.com/profile.php?id=61573611705858',
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaOrg }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
