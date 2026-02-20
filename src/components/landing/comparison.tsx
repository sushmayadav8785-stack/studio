import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Uptime SLA',
    rexHost: '99.99%',
    budget: '95%',
  },
  {
    feature: 'DDoS Protection',
    rexHost: '17Tbps+',
    budget: '100Gbps',
  },
  {
    feature: 'Storage Technology',
    rexHost: 'NVMe Gen 4 SSD',
    budget: 'HDD / SATA SSD',
  },
  {
    feature: 'Support Response',
    rexHost: '24/7 Priority (Avg. 5 mins)',
    budget: 'Ticket-only (Avg. 24-48 hours)',
  },
  {
    feature: 'CPU Hardware',
    rexHost: 'Latest Intel & AMD Ryzen',
    budget: 'Older Generations',
  },
];

export default function Comparison() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why We Beat the Competition</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Don't settle for less. See how Rex Host delivers premium quality where it matters most.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px] text-base">Features</TableHead>
                <TableHead className="text-center text-base">
                  <Badge className="bg-primary/20 text-primary border-none">Rex Host</Badge>
                </TableHead>
                <TableHead className="text-center text-base">Budget Hosts</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2 font-semibold text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>{row.rexHost}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <XCircle className="h-5 w-5" />
                      <span>{row.budget}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
