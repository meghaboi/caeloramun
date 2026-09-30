import Link from 'next/link';
import { notFound } from 'next/navigation';
import Silk from '@/components/effects/Silk';
import { Reveal } from '@/components/Reveal';
import { committees, getCommittee } from '@/data/committees';

export function generateStaticParams() {
  return committees.map(committee => ({ slug: committee.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const committee = getCommittee(slug);
  if (!committee) return {};
  return {
    title: committee.acronym,
    description: committee.description
  };
}

const INFO_ROWS = [
  { label: 'Agenda', value: 'To be announced by the Secretariat.' },
  { label: 'Background Guide', value: 'Releasing ahead of the conference.' },
  { label: 'Executive Board', value: 'To be announced.' }
];

export default async function CommitteePage({ params }) {
  const { slug } = await params;
  const committee = getCommittee(slug);
  if (!committee) notFound();

  const currentIndex = committees.findIndex(c => c.slug === committee.slug);
  const next = committees[(currentIndex + 1) % committees.length];

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-bg-elevated pt-36 pb-24">
        <div className="absolute inset-0 opacity-[0.14]">
          <Silk color="#22242a" speed={1.6} scale={1.3} noiseIntensity={1.3} />
        </div>
        <div className="container-mun relative">
          <Reveal>
            <Link href="/committees" className="text-xs uppercase tracking-[0.2em] text-muted hover:text-ink">
              &larr; All Committees
            </Link>
            <p className="font-display mt-8 text-sm tracking-[0.2em] text-accent">{committee.type}</p>
            <h1 className="font-display mt-4 text-5xl leading-[1.02] text-ink sm:text-6xl">{committee.acronym}</h1>
            <p className="font-display mt-3 max-w-2xl text-xl italic text-ink/80 sm:text-2xl">{committee.name}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{committee.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-20 md:py-28">
        <div className="container-mun grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {INFO_ROWS.map(row => (
            <div key={row.label} className="bg-bg p-8">
              <p className="eyebrow">{row.label}</p>
              <p className="mt-3 text-sm text-muted">{row.value}</p>
            </div>
          ))}
        </div>

        <div className="container-mun mt-16 flex flex-col items-start gap-6 border-t border-line pt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Registration</p>
            <p className="mt-3 max-w-md text-sm text-muted">
              Committee preferences are collected at registration and are requests only — final allocation rests with
              the CaeloraMUN Secretariat.
            </p>
          </div>
          <Link href={committee.registrationPath || '/registration'} className="btn btn-primary w-fit shrink-0">
            {committee.registrationPath ? 'Press Registration' : 'Delegate Registration'}
          </Link>
        </div>

        <div className="container-mun mt-20 border-t border-line pt-10">
          <Link
            href={`/committees/${next.slug}`}
            className="group flex items-center justify-between gap-6 text-ink"
          >
            <span className="eyebrow">Next Committee</span>
            <span className="font-display text-2xl transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
              {next.acronym} <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
