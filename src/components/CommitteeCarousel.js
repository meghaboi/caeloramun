'use client';

import { useRouter } from 'next/navigation';
import FlexCarousel from '@/components/effects/FlexCarousel';
import { committees } from '@/data/committees';

const items = committees.map(committee => ({
  src: committee.image,
  alt: committee.name,
  title: committee.acronym,
  subtitle: committee.name
}));

export default function CommitteeCarousel({ className = '' }) {
  const router = useRouter();

  return (
    <div className={`h-[420px] sm:h-[480px] md:h-[560px] ${className}`} data-lenis-prevent>
      <FlexCarousel
        items={items}
        preset="liquid"
        intro="rise"
        cardHeight={0.6}
        gap={16}
        focusOnClick={false}
        onSelect={index => router.push(`/committees/${committees[index].slug}`)}
      />
    </div>
  );
}
