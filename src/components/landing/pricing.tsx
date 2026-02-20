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

const normalMcPlans: Plan[] = [
  { name: 'Silverfish', price: '₹16', description: '2GB RAM, 1v CORES, 10GB DISK', features: ['2GB RAM', '1v Cores', '10GB Disk'], isHighlighted: false },
  { name: 'Zombie Walker', price: '₹32', description: '4GB RAM, 1v CORES, 15GB DISK', features: ['4GB RAM', '1v Cores', '15GB Disk'], isHighlighted: false },
  { name: 'Skeleton Archer', price: '₹48', description: '6GB RAM, 2v CORES, 20GB DISK', features: ['6GB RAM', '2v Cores', '20GB Disk'], isHighlighted: false },
  { name: 'Spider Jumper', price: '₹64', description: '8GB RAM, 2v CORES, 20GB DISK', features: ['8GB RAM', '2v Cores', '20GB Disk'], isHighlighted: true },
  { name: 'Creeper Bomber', price: '₹80', description: '10GB RAM, 3v CORES, 30GB DISK', features: ['10GB RAM', '3v Cores', '30GB Disk'], isHighlighted: false },
  { name: 'Enderman Stalker', price: '₹96', description: '12GB RAM, 3v CORES, 30GB DISK', features: ['12GB RAM', '3v Cores', '30GB Disk'], isHighlighted: false },
  { name: 'Iron Golem', price: '₹128', description: '16GB RAM, 4v CORES, 40GB DISK', features: ['16GB RAM', '4v Cores', '40GB Disk'], isHighlighted: false },
];

const performanceMcPlans: Plan[] = [
    { name: 'Phantom Flyer', price: '₹40', description: '2GB RAM, 1v CORES, 10GB DISK', features: ['2GB RAM', '1v Cores', '10GB Disk'], isHighlighted: false },
    { name: 'Blaze Knight', price: '₹80', description: '4GB RAM, 1v CORES, 15GB DISK', features: ['4GB RAM', '1v Cores', '15GB Disk'], isHighlighted: false },
    { name: 'Ghast Fire', price: '₹120', description: '6GB RAM, 2v CORES, 20GB DISK', features: ['6GB RAM', '2v Cores', '20GB Disk'], isHighlighted: false },
    { name: 'Wither Boss', price: '₹160', description: '8GB RAM, 2v CORES, 20GB DISK', features: ['8GB RAM', '2v Cores', '20GB Disk'], isHighlighted: true },
    { name: 'Warden Deep', price: '₹200', description: '10GB RAM, 3v CORES, 30GB DISK', features: ['10GB RAM', '3v Cores', '30GB Disk'], isHighlighted: false },
    { name: 'Ender Dragon', price: '₹240', description: '12GB RAM, 3v CORES, 30GB DISK', features: ['12GB RAM', '3v Cores', '30GB Disk'], isHighlighted: false },
    { name: 'Ancient Guardian', price: '₹320', description: '16GB RAM, 4v CORES, 40GB DISK', features: ['16GB RAM', '4v Cores', '40GB Disk'], isHighlighted: false },
];

const intelVpsPlans: Plan[] = [
    { name: 'Coal Plan', price: '₹175', description: 'A solid starting point for your web projects.', features: ['1 Core Intel Xeon', '4GB DDR4 RAM', '50GB NVMe SSD', '1 Dedicated IPv4'], isHighlighted: false },
    { name: 'Copper Plan', price: '₹260', description: 'More power for growing applications.', features: ['2 Cores Intel Xeon', '8GB DDR4 RAM', '100GB NVMe SSD', '1 Dedicated IPv4'], isHighlighted: false },
    { name: 'Iron Plan', price: '₹380', description: 'For more demanding applications.', features: ['4 Cores Intel Xeon', '16GB DDR4 RAM', '150GB NVMe SSD', '1 Dedicated IPv4'], isHighlighted: true },
    { name: 'Diamond Plan', price: '₹980', description: 'For high-traffic websites.', features: ['6 Cores Intel Xeon', '32GB DDR4 RAM', '200GB NVMe SSD', '1 Dedicated IPv4'], isHighlighted: false },
    { name: 'Netherite Plan', price: '₹1400', description: 'For mission-critical workloads.', features: ['8 Cores Intel Xeon', '64GB DDR4 RAM', '300GB NVMe SSD', '1 Dedicated IPv4'], isHighlighted: false },
];

const amdVpsPlans: Plan[] = [
    { name: 'VPS NANO', price: '₹180', description: 'Balanced pricing and strong performance.', features: ['3GB RAM', '1 vCPU Core', '25GB NVMe SSD', 'Private IPv4'], isHighlighted: false },
    { name: 'VPS MICRO', price: '₹300', description: 'Reliable & cost-effective.', features: ['6GB RAM', '1 vCPU Core', '35GB NVMe SSD', 'Private IPv4'], isHighlighted: false },
    { name: 'VPS MINI', price: '₹380', description: 'For growing applications.', features: ['8GB RAM', '2 vCPU Cores', '45GB NVMe SSD', 'Private IPv4'], isHighlighted: true },
    { name: 'VPS STARTER', price: '₹575', description: 'Great for larger projects.', features: ['12GB RAM', '3 vCPU Cores', '65GB NVMe SSD', 'Private IPv4'], isHighlighted: false },
    { name: 'VPS BASIC', price: '₹750', description: 'For demanding applications.', features: ['20GB RAM', '4 vCPU Cores', '90GB NVMe SSD', 'Private IPv4'], isHighlighted: false },
    { name: 'VPS ADVANCED', price: '₹920', description: 'With priority node.', features: ['32GB RAM', '6 vCPU Cores', '120GB NVMe SSD', 'Private IPv4'], isHighlighted: false },
    { name: 'VPS MAX', price: '₹1010', description: 'Highest priority allocation.', features: ['42GB RAM', '8 vCPU Cores', '150GB NVMe SSD', 'Private IPv4'], isHighlighted: false },
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

const PlanFeatures = ({ title, features }: { title: string, features: string[] }) => (
    <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">{title}</h3>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-foreground/80">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
)

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
        <Tabs defaultValue="normal-mc" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 sm:w-auto sm:mx-auto sm:grid-cols-4">
            <TabsTrigger value="normal-mc">Normal MC</TabsTrigger>
            <TabsTrigger value="performance-mc">Performance MC</TabsTrigger>
            <TabsTrigger value="intel-vps">Intel VPS</TabsTrigger>
            <TabsTrigger value="amd-vps">AMD VPS</TabsTrigger>
          </TabsList>

          <TabsContent value="normal-mc">
            <div className="mt-8 text-center">
                <h3 className="text-xl font-bold">Unbeatable Value • Powered by Intel® Xeon® E5 • Just ₹8 per GB!</h3>
                <p className="text-foreground/70 mt-2 max-w-3xl mx-auto">Looking for reliable, budget-friendly hosting for a chill SMP or playing with friends? Our Normal plans deliver fantastic performance without breaking the bank.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-4">
              {normalMcPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
            <PlanFeatures title="All Normal Plans Include" features={['Low-Latency Nodes (India & Singapore)', 'Fast NVMe SSD Storage', 'Enterprise DDoS Protection', 'Easy-to-use Pterodactyl Panel', 'Daily Backups', 'Free MySQL Databases']} />
          </TabsContent>

          <TabsContent value="performance-mc">
             <div className="mt-8 text-center">
                <h3 className="text-xl font-bold">Maximum Power • Powered by AMD EPYC™ • Just ₹20 per GB!</h3>
                <p className="text-foreground/70 mt-2 max-w-3xl mx-auto">Built for massive SMPs, heavy modpacks, and serious creators. If you need zero-lag, high-tick-rate performance, the Performance tier is designed specifically for you.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-4">
                {performanceMcPlans.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} />
                ))}
            </div>
            <PlanFeatures title="All Performance Plans Include" features={['Ultra Low-Latency Nodes (India & Singapore)', 'High-Frequency Dedicated Threads', 'Ultra-Fast Gen4 NVMe Storage', 'Premium DDoS Protection', 'Full Pterodactyl Panel Access', 'Automated Backups & Free Databases']} />
          </TabsContent>

          <TabsContent value="intel-vps">
            <div className="mt-8 text-center">
                <h3 className="text-xl font-bold">Intel Powered VPS • Secure • Stable • Speed-Optimized</h3>
                <p className="text-foreground/70 mt-2 max-w-3xl mx-auto">Reliable and powerful VPS servers powered by Intel Xeon processors, perfect for a wide range of applications.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-5">
                {intelVpsPlans.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} />
                ))}
            </div>
            <PlanFeatures title="All Intel VPS Plans Include" features={['DDoS Protection', 'Full Root Access', 'Almost All OS Available', 'Super-Fast NVMe Performance']} />
          </TabsContent>

           <TabsContent value="amd-vps">
            <div className="mt-8 text-center">
                <h3 className="text-xl font-bold">AMD Powered VPS • High-Performance • Affordable</h3>
                <p className="text-foreground/70 mt-2 max-w-3xl mx-auto">Affordable High-Performance VPS Hosting with balanced pricing and strong performance from AMD.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-4">
                {amdVpsPlans.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} />
                ))}
            </div>
             <div className="mt-12 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Billing & Usage Policy</h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-2 text-foreground/80"><Check className="h-5 w-5 text-primary" /><span>Monthly billing only</span></li>
                    <li className="flex items-center gap-2 text-foreground/80"><Check className="h-5 w-5 text-primary" /><span>All payments are final & non-refundable</span></li>
                    <li className="flex items-center gap-2 text-foreground/80"><Check className="h-5 w-5 text-primary" /><span>Excessive resource abuse is not allowed</span></li>
                    <li className="flex items-center gap-2 text-foreground/80"><Check className="h-5 w-5 text-primary" /><span>Chargebacks result in permanent blacklist</span></li>
                </ul>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
}
