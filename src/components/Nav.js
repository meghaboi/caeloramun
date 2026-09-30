'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Wordmark from '@/components/Wordmark';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/committees', label: 'Committees' },
  { href: '/registration', label: 'Delegates' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-bg/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="container-mun flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0" aria-label="CaeloraMUN 2026 home">
          <Wordmark size="sm" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.8rem] uppercase tracking-[0.18em] transition-colors ${
                pathname === link.href ? 'text-accent-bright' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/registration" className="btn btn-outline text-[0.72rem]">
            Register — Soon
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-ink"
          />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block h-px w-6 bg-ink" />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-ink"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <nav className="container-mun flex flex-col gap-1 py-6">
              {LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-lg font-display ${
                    pathname === link.href ? 'text-accent-bright' : 'text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/terms" onClick={() => setOpen(false)} className="py-3 text-sm text-muted">
                Terms &amp; Conditions
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
