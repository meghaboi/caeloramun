import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

export const metadata = {
  metadataBase: new URL('https://caeloramun.in'),
  title: {
    default: 'CaeloraMUN 2026 — Hyderabad, India',
    template: '%s · CaeloraMUN 2026'
  },
  description:
    'CaeloraMUN 2026 — Lead loud, rise beyond limits. A Model United Nations conference by Caelora Productions in Hyderabad, India, 13–15 November 2026.',
  openGraph: {
    title: 'CaeloraMUN 2026 — Hyderabad, India',
    description: 'Lead loud, rise beyond limits. 13–15 November 2026, organised by Caelora Productions.',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
