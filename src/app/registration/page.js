import Link from 'next/link';
import DitherVeil from '@/components/effects/DitherVeil';
import { Reveal } from '@/components/Reveal';

const INSTAGRAM_URL = 'https://www.instagram.com/caeloramun/?hl=en';
const HERO_IMAGE = 'https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop';

export const metadata = {
  title: 'Delegate Registration',
  description: 'CaeloraMUN 2026 delegate registration opens soon. Round 1 registration fee: ₹2,500.'
};

const POINTS = [
  'Individual and delegation registrations will both be supported.',
  'Delegates can indicate committee preferences — these are requests and do not guarantee allocation.',
  'Final committee allocation rests with the CaeloraMUN Secretariat.',
  'Round 1 registration fee is ₹2,500; later rounds may carry different pricing.',
  'All registrations are subject to the CaeloraMUN Registration Terms & Conditions.'
];

export default function RegistrationPage() {
  return (
    <>
      <section className="relative flex min-h-[75svh] items-end overflow-hidden bg-bg pt-36">
        <div className="absolute inset-0">
          <DitherVeil
            src={HERO_IMAGE}
            fit="cover"
            pattern="floyd"
            levels={4}
            inkColor="#07070a"
            paperColor="#e9ebef"
            revealRadius={120}
            softness={0.6}
            wander
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-bg/60" />

        <div className="container-mun relative z-10 pb-20">
          <Reveal className="pointer-events-none max-w-2xl">
            <span className="eyebrow">Delegates</span>
            <h1 className="font-display mt-5 text-5xl leading-[1.02] text-ink sm:text-6xl">
              Registration opens soon.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              The delegate registration form for CaeloraMUN 2026 is being finalised. Round 1 opens at &#8377;2,500 per
              delegate — follow @caeloramun for the moment it goes live.
            </p>
          </Reveal>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="btn btn-primary relative z-10 mt-8 w-fit">
            Follow @caeloramun
          </a>
        </div>
      </section>

      <section className="bg-bg-elevated py-24 md:py-32">
        <div className="container-mun grid gap-16 md:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">What to expect</span>
            <h2 className="font-display mt-5 text-3xl leading-[1.1] text-ink sm:text-4xl">
              A few things to know before registration opens.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              This page will be replaced with the live delegate registration form once it is ready. In the meantime,
              here is what the process will involve.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="space-y-5">
              {POINTS.map(point => (
                <li key={point} className="flex gap-4 border-b border-line pb-5 text-sm leading-relaxed text-muted last:border-none">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              By registering, you will be asked to accept the full{' '}
              <Link href="/terms" className="text-accent-bright hover:text-accent">
                Registration Terms &amp; Conditions
              </Link>
              , including the Code of Conduct and media consent provisions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-20 text-center">
        <Reveal className="container-mun flex flex-col items-center gap-5">
          <span className="eyebrow">Looking for International Press?</span>
          <p className="max-w-md text-sm text-muted">
            IP registration is handled separately from delegate registration.
          </p>
          <Link href="/press" className="btn btn-outline w-fit">
            International Press Registration
          </Link>
        </Reveal>
      </section>
    </>
  );
}
