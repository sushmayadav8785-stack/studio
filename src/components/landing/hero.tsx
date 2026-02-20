import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
      </div>
      <div className="container text-center">
        <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Unleash Peak Performance with Rex Host.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          High-Performance Game, VPS, and Minecraft Server Hosting. Powering Gamers and Communities with Zero
          Compromises.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="font-bold" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="font-bold" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
          <Button size="lg" variant="ghost" className="font-bold">
            Join Discord
          </Button>
        </div>
      </div>
    </section>
  );
}
