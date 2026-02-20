import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import TechMarquee from '@/components/landing/tech-marquee';
import Features from '@/components/landing/features';
import ControlPanel from '@/components/landing/control-panel';
import Pricing from '@/components/landing/pricing';
import Comparison from '@/components/landing/comparison';
import Locations from '@/components/landing/locations';
import AIConfigurator from '@/components/landing/ai-configurator';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <Features />
        <ControlPanel />
        <Pricing />
        <Comparison />
        <Locations />
        <AIConfigurator />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
