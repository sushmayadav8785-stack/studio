import Hero from '@/components/landing/hero';
import TechMarquee from '@/components/landing/tech-marquee';
import AIConfigurator from '@/components/landing/ai-configurator';
import Testimonials from '@/components/landing/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Testimonials />
      <AIConfigurator />
    </>
  );
}
