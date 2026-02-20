import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

const controlPanelFeatures = [
  'One-Click Plugin Installer',
  'Real-time Version Changer (Paper, Forge, Fabric)',
  'Live Console Access & Usage Statistics',
  'Automated Backups & Restore',
  'Full FTP & Database Access',
];

export default function ControlPanel() {
  const image = PlaceHolderImages.find((img) => img.id === 'control-panel-mockup');

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="lg:order-last">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience Our Custom Panel
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Manage your server with ease using our intuitive, feature-rich control panel designed for power and simplicity.
          </p>
          <ul className="mt-8 space-y-4">
            {controlPanelFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-card/50 backdrop-blur-sm border border-border/20 p-4">
          {image && (
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              width={1200}
              height={800}
              className="rounded-md shadow-2xl shadow-primary/10"
            />
          )}
        </div>
      </div>
    </section>
  );
}
