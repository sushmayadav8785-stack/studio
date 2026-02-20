import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cpu, Zap, ShieldCheck, RefreshCw, TerminalSquare, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Cpu,
    title: 'High Performance',
    description: 'Latest generation Intel & AMD Ryzen CPUs for ultimate power.',
  },
  {
    icon: Zap,
    title: 'Ultra-Low Latency',
    description: 'Optimized global network for a seamless, zero-lag experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Security',
    description: '17+ Tbps Anti-DDoS Protection to keep your server safe.',
  },
  {
    icon: RefreshCw,
    title: 'Auto Recovery',
    description: 'Instant cloud backups and recovery, so you never lose progress.',
  },
  {
    icon: TerminalSquare,
    title: 'Full Control',
    description: 'Advanced custom game panel with full root access.',
  },
  {
    icon: Rocket,
    title: 'Instant Setup',
    description: 'Get your server online and ready to play in under 60 seconds.',
  },
];

export default function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose Rex Host</h2>
          <p className="mt-4 text-lg text-foreground/70">
            We provide the ultimate hosting experience with cutting-edge technology and unparalleled support.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-card/50 backdrop-blur-sm border-border/20 hover:border-primary/50 transition-all duration-300 hover:bg-card/70 transform hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
