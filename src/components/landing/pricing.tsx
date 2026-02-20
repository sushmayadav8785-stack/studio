import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted: boolean;
}

const gameServerPlans: Plan[] = [
  {
    name: 'Starter',
    price: '₹799',
    description: 'Perfect for small communities and vanilla gameplay.',
    features: ['4GB RAM', 'NVMe SSD', 'Unmetered Bandwidth', '10 Player Slots'],
    isHighlighted: false,
  },
  {
    name: 'Pro',
    price: '₹1,599',
    description: 'The best balance of performance for modded servers.',
    features: ['8GB RAM', 'NVMe SSD', 'Unmetered Bandwidth', 'Free Dedicated IP', '30 Player Slots'],
    isHighlighted: true,
  },
  {
    name: 'Extreme',
    price: '₹3,199',
    description: 'For large communities and heavily modded servers.',
    features: ['16GB RAM', 'NVMe SSD', 'Priority Support', 'Unlimited Player Slots'],
    isHighlighted: false,
  },
];

const vpsPlans: Plan[] = [
    {
        name: 'VPS Basic',
        price: '₹1,299',
        description: 'A solid starting point for your web projects or applications.',
        features: ['2 vCPU Cores', '4GB RAM', '80GB NVMe SSD', '2TB Bandwidth'],
        isHighlighted: false,
    },
    {
        name: 'VPS Plus',
        price: '₹2,499',
        description: 'More power for growing applications and databases.',
        features: ['4 vCPU Cores', '8GB RAM', '160GB NVMe SSD', '4TB Bandwidth'],
        isHighlighted: true,
    },
    {
        name: 'VPS Pro',
        price: '₹4,999',
        description: 'For demanding applications and high-traffic websites.',
        features: ['8 vCPU Cores', '16GB RAM', '320GB NVMe SSD', '8TB Bandwidth'],
        isHighlighted: false,
    },
];

const dedicatedPlans: Plan[] = [
    {
        name: 'Dedicated Entry',
        price: '₹8,999',
        description: 'Full control and dedicated resources for serious projects.',
        features: ['Intel Xeon E-2336', '32GB DDR4 RAM', '2x 1TB NVMe SSD', '1Gbps Unmetered'],
        isHighlighted: false,
    },
    {
        name: 'Dedicated Performance',
        price: '₹15,999',
        description: 'High-end performance for mission-critical workloads.',
        features: ['AMD Ryzen 9 7900X', '64GB DDR5 RAM', '2x 2TB NVMe SSD', '10Gbps Unmetered'],
        isHighlighted: true,
    },
];

const PlanCard = ({ plan }: { plan: Plan }) => (
    <Card
      className={`flex flex-col bg-card/50 backdrop-blur-sm border-border/20 transition-all duration-300 hover:border-primary/50 transform hover:-translate-y-2 ${
        plan.isHighlighted ? 'border-2 border-primary glow-border' : ''
      }`}
    >
      <CardHeader>
        {plan.isHighlighted && (
          <div className="flex justify-end">
            <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Most Popular
            </span>
          </div>
        )}
        <CardTitle className="text-2xl pt-2">{plan.name}</CardTitle>
        <CardDescription className="pt-2">{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-6">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="text-foreground/70">/month</span>
        </div>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-bold" variant={plan.isHighlighted ? 'default' : 'outline'}>
          Configure Server
        </Button>
      </CardFooter>
    </Card>
);

export default function Pricing() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Flexible & Transparent Pricing</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Choose the perfect plan for your needs. No hidden fees, just pure performance.
          </p>
        </div>
        <Tabs defaultValue="game-servers" className="mt-12">
          <TabsList className="grid w-full grid-cols-1 sm:w-auto sm:mx-auto sm:grid-cols-3">
            <TabsTrigger value="game-servers">Game Servers</TabsTrigger>
            <TabsTrigger value="vps">VPS</TabsTrigger>
            <TabsTrigger value="dedicated">Dedicated Servers</TabsTrigger>
          </TabsList>
          <TabsContent value="game-servers">
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {gameServerPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="vps">
             <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {vpsPlans.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="dedicated">
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {dedicatedPlans.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
