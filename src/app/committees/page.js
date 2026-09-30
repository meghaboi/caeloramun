import Link from 'next/link';
import MicroSlats from '@/components/effects/MicroSlats';
import CommitteeCarousel from '@/components/CommitteeCarousel';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';
import { committees } from '@/data/committees';

export const metadata = {
  title: 'Committees',
  description: 'The six committees of CaeloraMUN 2026 — UNHRC, DISEC, UNODC, Lok Sabha, TFI, and International Press.'
};

export default function CommitteesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-bg-elevated pt-36 pb-20">
        <div className="absolute inset-0 opacity-25">
          <MicroSlats
            preset="signal"
            color="#7d828d"
            glintColor="#eef0f3"
            backgroundColor="#0d0e13"
            slatWidth={8}
            slatHeight={26}
            interactive
          />
        </div>
        <div className="container-mun relative">
          <Reveal>
            <span className="eyebrow">CaeloraMUN 2026</span>
            <h1 className="font-display mt-5 max-w-2xl text-5xl leading-[1.05] text-ink sm:text-6xl">Committees</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Six committees, six distinct pressures. Agendas and background guides are released ahead of the
              conference as the Secretariat finalises them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-24 md:pt-28 md:pb-32">
        <Reveal>
          <CommitteeCarousel />
          <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-muted">
            Drag or scroll to browse &middot; click a committee to open it
          </p>
        </Reveal>

        <div className="container-mun">
          <RevealGroup className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {committees.map(committee => (
              <RevealItem key={committee.slug}>
                <Link
                  href={`/committees/${committee.slug}`}
                  className="group relative flex h-full flex-col justify-between gap-10 bg-bg p-8 transition-colors duration-500 hover:bg-bg-elevated"
                >
                  <div>
                    <p className="font-display text-sm tracking-[0.15em] text-accent">{committee.acronym}</p>
                    <h2 className="font-display mt-3 text-xl text-ink">{committee.name}</h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">{committee.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">{committee.tagline}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent-bright opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      View committee <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
