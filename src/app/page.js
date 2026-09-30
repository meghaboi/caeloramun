import Link from 'next/link';
import TerraNature from '@/components/effects/TerraNature';
import AeroShards from '@/components/effects/AeroShards';
import Silk from '@/components/effects/Silk';
import MicroSlats from '@/components/effects/MicroSlats';
import CommitteeCarousel from '@/components/CommitteeCarousel';
import { Reveal } from '@/components/Reveal';
import { committees } from '@/data/committees';

const INSTAGRAM_URL = 'https://www.instagram.com/caeloramun/?hl=en';

const STATS = [
  { label: 'Conference Dates', value: '13–15 Nov 2026' },
  { label: 'Location', value: 'Hyderabad, India' },
  { label: 'Committees', value: '06' },
  { label: 'Round 1 Fee', value: '₹2,500' }
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[100svh] min-h-[520px] w-full flex-col justify-end overflow-hidden bg-bg">
        <div className="absolute inset-0">
          <TerraNature count={22000} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-bg/50" />

        <div className="container-mun relative z-10 flex w-full flex-col gap-6 pb-14 sm:gap-9 sm:pb-20">
          <Reveal y={16} className="pointer-events-none">
            <span className="eyebrow">Caelora Productions &middot; Hyderabad, India</span>
          </Reveal>

          <Reveal y={22} delay={0.08} className="pointer-events-none">
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.25rem]">
              Lead loud.
              <br />
              <span className="italic text-accent-bright">Rise</span> beyond limits.
            </h1>
          </Reveal>

          <Reveal y={18} delay={0.18} className="pointer-events-none max-w-xl">
            <p className="text-sm leading-relaxed text-muted sm:text-base md:text-lg">
              CaeloraMUN 2026 — three days of debate, negotiation, and diplomacy across six committees in Hyderabad,
              India.
            </p>
          </Reveal>

          <Reveal y={14} delay={0.3} className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link href="/committees" className="btn btn-primary pointer-events-auto">
              Explore Committees
            </Link>
            <Link href="/registration" className="btn btn-outline pointer-events-auto">
              Registration — Coming Soon
            </Link>
          </Reveal>

          <Reveal
            y={10}
            delay={0.42}
            className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line/60 pt-5 text-[0.65rem] uppercase tracking-[0.16em] text-muted sm:gap-x-10 sm:pt-6 sm:text-xs sm:tracking-[0.2em]"
          >
            <span>13&ndash;15 November 2026</span>
            <span>Hyderabad, India</span>
            <span>Round 1 &middot; &#8377;2,500</span>
            <span>Delegates &amp; International Press</span>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-bg py-28 md:py-36">
        <div className="absolute inset-0 opacity-[0.16]">
          <Silk color="#22242a" speed={2.2} scale={1.15} noiseIntensity={1.1} rotation={0.3} />
        </div>
        <div className="container-mun relative grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <span className="eyebrow">About the Conference</span>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] text-ink sm:text-5xl">
              Diplomacy, debate,
              <br /> and the rise of new voices.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              CaeloraMUN 2026 brings together delegates from schools and colleges for three days of committee
              sessions, crisis moments, and considered argument. Across six committees — spanning human rights,
              disarmament, transnational crime, Indian legislature, specialised themes, and the press corps that
              covers it all — participants are asked to think in policy, speak with precision, and hold their ground
              under scrutiny.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              The conference is organised by Caelora Productions and hosted in Hyderabad, India, from
              13&ndash;15 November 2026. Registration opens soon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative overflow-hidden border-y border-line bg-bg-elevated py-4">
        <div className="absolute inset-0 opacity-30">
          <MicroSlats
            preset="tide"
            color="#7d828d"
            glintColor="#eef0f3"
            backgroundColor="#0d0e13"
            slatWidth={7}
            slatHeight={30}
            gap={3}
            interactive
            cursorSize={70}
          />
        </div>
        <div className="container-mun relative grid grid-cols-2 gap-y-10 py-16 sm:grid-cols-4">
          {STATS.map(stat => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-3xl text-accent-bright sm:text-4xl">{stat.value}</p>
              <p className="eyebrow mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITTEES PREVIEW */}
      <section className="bg-bg py-28 md:py-36">
        <div className="container-mun">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Committees</span>
              <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.05] text-ink sm:text-5xl">
                Six rooms. Six kinds of pressure.
              </h2>
            </div>
            <Link href="/committees" className="btn btn-outline w-fit">
              View all committees
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <CommitteeCarousel />
          <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-muted">
            Drag or scroll to browse &middot; click a committee to open it
          </p>
        </Reveal>

        <div className="container-mun mt-16 grid gap-x-8 gap-y-3 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {committees.map(committee => (
            <Link
              key={committee.slug}
              href={`/committees/${committee.slug}`}
              className="group flex items-baseline justify-between gap-4 py-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <span>
                <span className="font-display mr-2 text-accent">{committee.acronym}</span>
                {committee.name}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SIGNATURE INTERSTITIAL */}
      <section className="relative isolate overflow-hidden bg-bg py-32 text-center md:py-44">
        <div className="absolute inset-0">
          <AeroShards
            backgroundColor="#07070a"
            shardColor="#c9ccd6"
            accentColor="#eef0f3"
            material="chrome"
            flow="stream"
            placement="full"
            density={1.3}
            shardSize={1.05}
            speed={0.6}
            spin={0.7}
            glow={1.2}
            bloom={0.7}
            interaction="repel"
            interactionStrength={0.6}
          />
        </div>
        <Reveal className="container-mun relative">
          <span className="eyebrow">Mark Your Calendar</span>
          <h2 className="font-display mt-5 text-[18vw] leading-[0.85] text-ink sm:text-8xl md:text-9xl">
            13&mdash;15
          </h2>
          <p className="font-display mt-2 text-2xl italic text-accent-bright sm:text-3xl">November 2026</p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted">Hyderabad, India</p>
        </Reveal>
      </section>

      {/* REGISTRATIONS */}
      <section className="relative isolate overflow-hidden bg-bg-elevated py-28 text-center md:py-36">
        <div className="absolute inset-0 opacity-20">
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
        <Reveal className="container-mun relative flex flex-col items-center gap-6">
          <span className="eyebrow">Registrations</span>
          <h2 className="font-display max-w-2xl text-4xl leading-[1.05] text-ink sm:text-5xl">
            Delegate &amp; Press registration opens soon.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Round 1 opens at &#8377;2,500. Follow along on Instagram to be first in line when the form goes live.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="btn btn-primary">
              Follow @caeloramun
            </a>
            <Link href="/registration" className="btn btn-outline">
              Registration Details
            </Link>
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-bg py-28 text-center md:py-36">
        <Reveal className="container-mun flex flex-col items-center gap-6">
          <span className="eyebrow">Stay in the loop</span>
          <h2 className="font-display max-w-2xl text-4xl leading-[1.1] text-ink sm:text-5xl">
            The Secretariat is finalising the details. You should be there when it opens.
          </h2>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="btn btn-primary mt-4">
            Follow @caeloramun on Instagram
          </a>
        </Reveal>
      </section>
    </>
  );
}
