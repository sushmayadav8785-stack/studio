import { CheckCircle, Rocket } from 'lucide-react';

const controlPanelFeatures = [
  'One-Click Plugin Installer',
  'Real-time Version Changer (Paper, Forge, Fabric)',
  'Live Console Access & Usage Statistics',
  'Automated Backups & Restore',
  'Full FTP & Database Access',
];

export default function ControlPanel() {
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
        <div className="flex items-center justify-center rounded-lg bg-card/50 backdrop-blur-sm border border-border/20 p-4 h-full min-h-[300px]">
          <div className="flex flex-col items-center justify-center gap-4 text-5xl font-black text-primary">
            <Rocket className="h-20 w-20" />
            <span className="tracking-tighter">Rex Cloud</span>
          </div>
        </div>
      </div>
    </section>
  );
}
