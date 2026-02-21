'use client';

import Hero from '@/components/landing/hero';
import TechMarquee from '@/components/landing/tech-marquee';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const AIConfigurator = dynamic(
  () => import('@/components/landing/ai-configurator'),
  {
    ssr: false,
    loading: () => (
      <section className="py-20 sm:py-28">
        <div className="container flex min-h-[400px] items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      </section>
    ),
  }
);

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <AIConfigurator />
    </>
  );
}
