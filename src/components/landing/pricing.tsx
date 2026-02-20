import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const minecraftPlans = [
  {
    name: 'Starter',
    price: '$9.99',
    description: 'Perfect for small communities and vanilla gameplay.',
    features: ['4GB RAM', 'NVMe SSD', 'Unmetered Bandwidth', '10 Player Slots'],
    isHighlighted: false,
  },
  {
    name: 'Pro',
    price: '$19.99',
    description: 'The best balance of performance for modded servers.',
    features: ['8GB RAM', 'NVMe SSD', 'Unmetered Bandwidth', 'Free Dedicated IP', '30 Player Slots'],
    isHighlighted: true,
  },
  {
    name: 'Extreme',
    price: '$39.99',
    description: 'For large communities and heavily modded servers.',
    features: ['16GB RAM', 'NVMe SSD', 'Priority Support', 'Unlimited Player Slots'],
    isHighlighted: false,
  },
];

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
        <Tabs defaultValue="minecraft" className="mt-12">
          <TabsList className="grid w-full grid-cols-1 sm:w-auto sm:mx-auto sm:grid-cols-3">
            <TabsTrigger value="minecraft">Minecraft Hosting</TabsTrigger>
            <TabsTrigger value="vps" disabled>VPS</TabsTrigger>
            <TabsTrigger value="dedicated" disabled>Dedicated Servers</TabsTrigger>
          </TabsList>
          <TabsContent value="minecraft">
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {minecraftPlans.map((plan) => (
                <Card
                  key={plan.name}
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
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
