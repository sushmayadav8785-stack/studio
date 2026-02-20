'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const gameServerPlansData = [
  { name: 'Starter', price: '₹799', description: 'Perfect for small communities and vanilla gameplay.', features: ['4GB RAM', 'NVMe SSD', 'Unmetered Bandwidth', '10 Player Slots'] },
  { name: 'Pro', price: '₹1,599', description: 'The best balance of performance for modded servers.', features: ['8GB RAM', 'NVMe SSD', 'Unmetered Bandwidth', 'Free Dedicated IP', '30 Player Slots'] },
  { name: 'Extreme', price: '₹3,199', description: 'For large communities and heavily modded servers.', features: ['16GB RAM', 'NVMe SSD', 'Priority Support', 'Unlimited Player Slots'] },
];

const vpsPlansData = [
    { name: 'VPS Basic', price: '₹1,299', description: 'A solid starting point for your web projects or applications.', features: ['2 vCPU Cores', '4GB RAM', '80GB NVMe SSD', '2TB Bandwidth'] },
    { name: 'VPS Plus', price: '₹2,499', description: 'More power for growing applications and databases.', features: ['4 vCPU Cores', '8GB RAM', '160GB NVMe SSD', '4TB Bandwidth'] },
    { name: 'VPS Pro', price: '₹4,999', description: 'For demanding applications and high-traffic websites.', features: ['8 vCPU Cores', '16GB RAM', '320GB NVMe SSD', '8TB Bandwidth'] },
];

export default function AdminPage() {
  const [offerText, setOfferText] = useState('🔥 Limited Time Offer! Use code REX20 for 20% off your first month!');

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold">Admin Panel</h1>
      <p className="text-lg text-foreground/70 mt-2">
        Manage your hosting plans, offers, and other site content here.
      </p>

      <Alert className="mt-6">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Developer Note</AlertTitle>
        <AlertDescription>
          This is a visual placeholder for the admin panel. The forms below are not functional. Backend integration is required to save changes.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="plans" className="mt-8">
        <TabsList>
          <TabsTrigger value="plans">Manage Plans</TabsTrigger>
          <TabsTrigger value="offers">Manage Offers</TabsTrigger>
        </TabsList>
        <TabsContent value="plans">
          <Card>
            <CardHeader>
              <CardTitle>Edit Hosting Plans</CardTitle>
              <CardDescription>Changes made here will reflect on the pricing page. (Functionality not implemented)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Game Server Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gameServerPlansData.map(plan => (
                    <Card key={plan.name} className="bg-card/50">
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor={`${plan.name}-price`}>Price</Label>
                          <Input id={`${plan.name}-price`} defaultValue={plan.price} />
                        </div>
                        <div>
                          <Label htmlFor={`${plan.name}-desc`}>Description</Label>
                          <Textarea id={`${plan.name}-desc`} defaultValue={plan.description} />
                        </div>
                        <div>
                          <Label htmlFor={`${plan.name}-features`}>Features (comma-separated)</Label>
                          <Textarea id={`${plan.name}-features`} defaultValue={plan.features.join(', ')} />
                        </div>
                        <Button disabled>Save Changes</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
               <div>
                <h3 className="text-2xl font-semibold mb-4">VPS Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {vpsPlansData.map(plan => (
                    <Card key={plan.name} className="bg-card/50">
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor={`${plan.name}-price`}>Price</Label>
                          <Input id={`${plan.name}-price`} defaultValue={plan.price} />
                        </div>
                         <div>
                          <Label htmlFor={`${plan.name}-desc`}>Description</Label>
                          <Textarea id={`${plan.name}-desc`} defaultValue={plan.description} />
                        </div>
                        <div>
                          <Label htmlFor={`${plan.name}-features`}>Features (comma-separated)</Label>
                          <Textarea id={`${plan.name}-features`} defaultValue={plan.features.join(', ')} />
                        </div>
                        <Button disabled>Save Changes</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="offers">
          <Card>
            <CardHeader>
              <CardTitle>Manage Top Banner Offer</CardTitle>
              <CardDescription>Update the promotional text shown at the top of the site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="offer-text">Offer Text</Label>
                <Input 
                  id="offer-text" 
                  value={offerText}
                  onChange={(e) => setOfferText(e.target.value)}
                />
              </div>
              <Button disabled>Update Offer</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
