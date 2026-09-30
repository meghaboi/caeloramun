import Link from 'next/link';
import Wordmark from '@/components/Wordmark';

const INSTAGRAM_URL = 'https://www.instagram.com/caeloramun/?hl=en';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-bg-elevated">
      <div className="container-mun grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Wordmark size="md" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Lead loud, rise beyond limits. CaeloraMUN 2026 is organised by Caelora Productions in Hyderabad, India —
            13&ndash;15 November 2026.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-bright transition-colors hover:text-accent"
          >
            @caeloramun on Instagram
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li><Link href="/committees" className="hover:text-ink">Committees</Link></li>
            <li><Link href="/registration" className="hover:text-ink">Delegate Registration</Link></li>
            <li><Link href="/press" className="hover:text-ink">International Press</Link></li>
            <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Conference</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>13&ndash;15 November 2026</li>
            <li>Hyderabad, India</li>
            <li>Organised by Caelora Productions</li>
            <li><Link href="/terms" className="hover:text-ink">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="divider-line" />

      <div className="container-mun flex flex-col gap-2 py-6 text-xs text-muted/70 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} Caelora Productions. All rights reserved.</p>
        <p>
          Powered by{' '}
          <a
            href="https://telugu.social"
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted transition-colors hover:text-ink"
          >
            telugu.social
          </a>
        </p>
      </div>
    </footer>
  );
}
