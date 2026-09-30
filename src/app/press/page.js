import Link from 'next/link';
import MicroSlats from '@/components/effects/MicroSlats';
import { Reveal } from '@/components/Reveal';

const INSTAGRAM_URL = 'https://www.instagram.com/caeloramun/?hl=en';

export const metadata = {
  title: 'International Press',
  description: 'International Press (IP) registration for CaeloraMUN 2026 opens soon.'
};

const POINTS = [
  'IP registration is a dedicated, paid registration — separate from delegate registration.',
  'International Press will be credentialed to report on and photograph committee proceedings.',
  'IP applicants are subject to the same Registration Terms & Conditions and declarations as delegates.',
  'Registration ID and confirmation will be issued automatically once the form is live.'
];

export default function PressPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-bg-elevated pt-36 pb-24">
        <div className="absolute inset-0 opacity-25">
          <MicroSlats
            preset="storm"
            color="#7d828d"
            glintColor="#eef0f3"
            backgroundColor="#0d0e13"
            slatWidth={6}
            slatHeight={22}
            interactive
          />
        </div>
        <div className="container-mun relative">
          <Reveal>
            <span className="eyebrow">International Press</span>
            <h1 className="font-display mt-5 max-w-2xl text-5xl leading-[1.05] text-ink sm:text-6xl">
              Cover CaeloraMUN 2026 from the floor.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              The International Press (IP) registration for CaeloraMUN 2026 is being finalised alongside delegate
              registration. It will open as a dedicated, paid registration.
            </p>
          </Reveal>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="btn btn-primary mt-8 w-fit">
            Follow @caeloramun for updates
          </a>
        </div>
      </section>

      <section className="bg-bg py-24 md:py-32">
        <div className="container-mun grid gap-16 md:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">What to expect</span>
            <h2 className="font-display mt-5 text-3xl leading-[1.1] text-ink sm:text-4xl">
              What IP registration will involve.
            </h2>
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
              IP registrants will also need to accept the{' '}
              <Link href="/terms" className="text-accent-bright hover:text-accent">
                Registration Terms &amp; Conditions
              </Link>{' '}
              before submitting the form.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-elevated py-20 text-center">
        <Reveal className="container-mun flex flex-col items-center gap-5">
          <span className="eyebrow">Registering as a delegate instead?</span>
          <Link href="/registration" className="btn btn-outline w-fit">
            Delegate Registration
          </Link>
        </Reveal>
      </section>
    </>
  );
}
