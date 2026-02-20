import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'Mumbai, India', ping: '25ms' },
  { name: 'Frankfurt, Germany', ping: '10ms' },
  { name: 'Singapore', ping: '30ms' },
  { name: 'Dallas, USA', ping: '5ms' },
];

export default function Locations() {
  const image = PlaceHolderImages.find((img) => img.id === 'world-map');
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Global Network</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Deploy your server closer to your players for the lowest possible latency.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/20"
            >
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-lg">{loc.name}</h3>
              <Button variant="link" className="text-accent">Test Ping: {loc.ping}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
