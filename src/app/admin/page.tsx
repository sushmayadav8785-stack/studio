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

const normalMcPlansData = [
    { name: 'Silverfish', price: '₹16', features: ['2GB RAM', '1v CORES', '10GB DISK'] },
    { name: 'Zombie Walker', price: '₹32', features: ['4GB RAM', '1v CORES', '15GB DISK'] },
    { name: 'Skeleton Archer', price: '₹48', features: ['6GB RAM', '2v CORES', '20GB DISK'] },
    { name: 'Spider Jumper', price: '₹64', features: ['8GB RAM', '2v CORES', '20GB DISK'] },
    { name: 'Creeper Bomber', price: '₹80', features: ['10GB RAM', '3v CORES', '30GB DISK'] },
    { name: 'Enderman Stalker', price: '₹96', features: ['12GB RAM', '3v CORES', '30GB DISK'] },
    { name: 'Iron Golem', price: '₹128', features: ['16GB RAM', '4v CORES', '40GB DISK'] },
];

const performanceMcPlansData = [
    { name: 'Phantom Flyer', price: '₹40', features: ['2GB RAM', '1v CORES', '10GB DISK'] },
    { name: 'Blaze Knight', price: '₹80', features: ['4GB RAM', '1v CORES', '15GB DISK'] },
    { name: 'Ghast Fire', price: '₹120', features: ['6GB RAM', '2v CORES', '20GB DISK'] },
    { name: 'Wither Boss', price: '₹160', features: ['8GB RAM', '2v CORES', '20GB DISK'] },
    { name: 'Warden Deep', price: '₹200', features: ['10GB RAM', '3v CORES', '30GB DISK'] },
    { name: 'Ender Dragon', price: '₹240', features: ['12GB RAM', '3v CORES', '30GB DISK'] },
    { name: 'Ancient Guardian', price: '₹320', features: ['16GB RAM', '4v CORES', '40GB DISK'] },
];

const intelVpsPlansData = [
    { name: 'Coal Plan', price: '₹175', features: ['1 Core Intel Xeon E5-2680', '4 GB DDR4 RAM', '50 GB NVMe SSD'] },
    { name: 'Copper Plan', price: '₹260', features: ['2 Core Intel Xeon E5-2680', '8 GB DDR4 RAM', '100 GB NVMe SSD'] },
    { name: 'Iron Plan', price: '₹380', features: ['4 Core Intel Xeon E5-2680', '16 GB DDR4 RAM', '150 GB NVMe SSD'] },
    { name: 'Diamond Plan', price: '₹980', features: ['6 Core Intel Xeon E5-2680', '32 GB DDR4 RAM', '200 GB NVMe SSD'] },
    { name: 'Netherite Plan', price: '₹1400', features: ['8 Core Intel Xeon E5-2680', '64 GB DDR4 RAM', '300 GB NVMe SSD'] },
];

const amdVpsPlansData = [
    { name: 'VPS NANO', price: '₹180', features: ['3 GB RAM', '1 vCPU Core', '25 GB NVMe SSD'] },
    { name: 'VPS MICRO', price: '₹300', features: ['6 GB RAM', '1 vCPU Core', '35 GB NVMe SSD'] },
    { name: 'VPS MINI', price: '₹380', features: ['8 GB RAM', '2 vCPU Cores', '45 GB NVMe SSD'] },
    { name: 'VPS STARTER', price: '₹575', features: ['12 GB RAM', '3 vCPU Cores', '65 GB NVMe SSD'] },
    { name: 'VPS BASIC', price: '₹750', features: ['20 GB RAM', '4 vCPU Cores', '90 GB NVMe SSD'] },
    { name: 'VPS ADVANCED', price: '₹920', features: ['32 GB RAM', '6 vCPU Cores', '120 GB NVMe SSD'] },
    { name: 'VPS MAX', price: '₹1010', features: ['42 GB RAM', '8 vCPU Cores', '150 GB NVMe SSD'] },
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
                <h3 className="text-2xl font-semibold mb-4">Normal MC Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {normalMcPlansData.map(plan => (
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
                          <Label htmlFor={`${plan.name}-features`}>Features (comma-separated)</Label>
                          <Textarea id={`${plan.name}-features`} defaultValue={plan.features.join(', ')} />
                        </div>
                        <Button disabled>Save Changes</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Performance MC Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {performanceMcPlansData.map(plan => (
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
                          <Label htmlFor={`${plan.name}-features`}>Features (comma-separated)</Label>
                          <Textarea id={`${plan.name}-features`} defaultValue={plan.features.join(', ')} />
                        </div>
                        <Button disabled>Save Changes</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Intel VPS Plans</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {intelVpsPlansData.map(plan => (
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
                          <Label htmlFor={`${plan.name}-features`}>Features (comma-separated)</Label>
                          <Textarea id={`${plan.name}-features`} defaultValue={plan.features.join(', ')} />
                        </div>
                        <Button disabled>Save Changes</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
               <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">AMD VPS Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {amdVpsPlansData.map(plan => (
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
