import AeroShards from '@/components/effects/AeroShards';
import { Reveal } from '@/components/Reveal';

const INSTAGRAM_URL = 'https://www.instagram.com/caeloramun/?hl=en';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with the CaeloraMUN 2026 organising team on Instagram.'
};

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden bg-bg pt-40 pb-28 md:pb-36">
      <div className="absolute inset-0">
        <AeroShards
          backgroundColor="#06070a"
          shardColor="#c9ccd6"
          accentColor="#eef0f3"
          material="chrome"
          flow="stream"
          placement="right"
          density={0.9}
          shardSize={0.9}
          speed={0.5}
          spin={0.6}
          glow={1}
          bloom={0.5}
          interaction="repel"
          interactionStrength={0.4}
        />
      </div>

      <div className="container-mun relative flex flex-col items-start gap-10">
        <Reveal>
          <span className="eyebrow">Get in Touch</span>
          <h1 className="font-display mt-5 max-w-xl text-5xl leading-[1.05] text-ink sm:text-6xl">
            Reach the Secretariat.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            CaeloraMUN 2026 is organised by Caelora Productions in Hyderabad, India. For now, Instagram is the
            fastest way to reach the organising team — a dedicated email and phone line will be added here as the
            conference gets closer.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="w-full max-w-lg rounded-2xl border border-line bg-bg-elevated/60 p-8 backdrop-blur">
          <p className="eyebrow">Instagram</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="font-display mt-3 block text-3xl text-ink transition-colors hover:text-accent-bright sm:text-4xl"
          >
            @caeloramun
          </a>
          <p className="mt-4 text-sm text-muted">
            DM us for registration questions, committee queries, partnership enquiries, or anything else about
            CaeloraMUN 2026.
          </p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="btn btn-primary mt-6 w-fit">
            Message on Instagram
          </a>
        </Reveal>

        <Reveal delay={0.25} className="grid w-full max-w-lg grid-cols-2 gap-6 border-t border-line pt-8 text-sm text-muted">
          <div>
            <p className="eyebrow">Organiser</p>
            <p className="mt-2 text-ink">Caelora Productions</p>
          </div>
          <div>
            <p className="eyebrow">Location</p>
            <p className="mt-2 text-ink">Hyderabad, India</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
