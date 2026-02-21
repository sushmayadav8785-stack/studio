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
import { useToast } from '@/hooks/use-toast';

const initialNormalMcPlans = [
    { name: 'Silverfish', price: '₹16', features: ['2GB RAM', '1v CORES', '10GB DISK'] },
    { name: 'Zombie Walker', price: '₹32', features: ['4GB RAM', '1v CORES', '15GB DISK'] },
    { name: 'Skeleton Archer', price: '₹48', features: ['6GB RAM', '2v CORES', '20GB DISK'] },
    { name: 'Spider Jumper', price: '₹64', features: ['8GB RAM', '2v CORES', '20GB DISK'] },
    { name: 'Creeper Bomber', price: '₹80', features: ['10GB RAM', '3v CORES', '30GB DISK'] },
    { name: 'Enderman Stalker', price: '₹96', features: ['12GB RAM', '3v CORES', '30GB DISK'] },
    { name: 'Iron Golem', price: '₹128', features: ['16GB RAM', '4v CORES', '40GB DISK'] },
];

const initialPerformanceMcPlans = [
    { name: 'Phantom Flyer', price: '₹40', features: ['2GB RAM', '1v CORES', '10GB DISK'] },
    { name: 'Blaze Knight', price: '₹80', features: ['4GB RAM', '1v CORES', '15GB DISK'] },
    { name: 'Ghast Fire', price: '₹120', features: ['6GB RAM', '2v CORES', '20GB DISK'] },
    { name: 'Wither Boss', price: '₹160', features: ['8GB RAM', '2v CORES', '20GB DISK'] },
    { name: 'Warden Deep', price: '₹200', features: ['10GB RAM', '3v CORES', '30GB DISK'] },
    { name: 'Ender Dragon', price: '₹240', features: ['12GB RAM', '3v CORES', '30GB DISK'] },
    { name: 'Ancient Guardian', price: '₹320', features: ['16GB RAM', '4v CORES', '40GB DISK'] },
];

const initialIntelVpsPlans = [
    { name: 'Coal Plan', price: '₹175', features: ['1 Core Intel Xeon E5-2680', '4 GB DDR4 RAM', '50 GB NVMe SSD'] },
    { name: 'Copper Plan', price: '₹260', features: ['2 Core Intel Xeon E5-2680', '8 GB DDR4 RAM', '100 GB NVMe SSD'] },
    { name: 'Iron Plan', price: '₹380', features: ['4 Core Intel Xeon E5-2680', '16 GB DDR4 RAM', '150 GB NVMe SSD'] },
    { name: 'Diamond Plan', price: '₹980', features: ['6 Core Intel Xeon E5-2680', '32 GB DDR4 RAM', '200 GB NVMe SSD'] },
    { name: 'Netherite Plan', price: '₹1400', features: ['8 Core Intel Xeon E5-2680', '64 GB DDR4 RAM', '300 GB NVMe SSD'] },
];

const initialAmdVpsPlans = [
    { name: 'VPS NANO', price: '₹180', features: ['3 GB RAM', '1 vCPU Core', '25 GB NVMe SSD'] },
    { name: 'VPS MICRO', price: '₹300', features: ['6 GB RAM', '1 vCPU Core', '35 GB NVMe SSD'] },
    { name: 'VPS MINI', price: '₹380', features: ['8 GB RAM', '2 vCPU Cores', '45 GB NVMe SSD'] },
    { name: 'VPS STARTER', price: '₹575', features: ['12 GB RAM', '3 vCPU Cores', '65 GB NVMe SSD'] },
    { name: 'VPS BASIC', price: '₹750', features: ['20 GB RAM', '4 vCPU Cores', '90 GB NVMe SSD'] },
    { name: 'VPS ADVANCED', price: '₹920', features: ['32 GB RAM', '6 vCPU Cores', '120 GB NVMe SSD'] },
    { name: 'VPS MAX', price: '₹1010', features: ['42 GB RAM', '8 vCPU Cores', '150 GB NVMe SSD'] },
];

type Plan = { name: string; price: string; features: string[] };
type Founder = { name: string; role: string; thought: string; imageUrl: string };

export default function AdminPage() {
  const [normalMcPlansData, setNormalMcPlansData] = useState<Plan[]>(initialNormalMcPlans);
  const [performanceMcPlansData, setPerformanceMcPlansData] = useState<Plan[]>(initialPerformanceMcPlans);
  const [intelVpsPlansData, setIntelVpsPlansData] = useState<Plan[]>(initialIntelVpsPlans);
  const [amdVpsPlansData, setAmdVpsPlansData] = useState<Plan[]>(initialAmdVpsPlans);

  const [offerText, setOfferText] = useState('🔥 Limited Time Offer! Use code REX20 for 20% off your first month!');
  
  const [footerLinks, setFooterLinks] = useState([
    { text: 'Terms of Service', href: '/terms-of-service' },
    { text: 'Privacy Policy', href: '#' },
  ]);

  const [aboutUsContent, setAboutUsContent] = useState("Rex Cloud was founded by a passionate and trusted team. Our founders are aayu (Founder/Developer), atharv (Founder/Manager), and aadi (Founder/Manager). We were born from a simple mission: to provide the best possible game server hosting experience. We believe in performance, reliability, and top-notch customer support. Our infrastructure is built on the latest hardware to ensure your games run smoothly, and our custom control panel makes managing your server a breeze. Join us and experience the difference.");
  
  const [founders, setFounders] = useState<Founder[]>([
    { name: 'aayu', role: 'Founder/Developer', thought: 'Building the future of hosting, one line of code at a time.', imageUrl: 'https://images.unsplash.com/photo-1750535135704-f9a5dba67e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YXZhdGFyJTIwcGVyc29ufGVufDB8fHx8MTc3MTU1NzQ5MXww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'aadi', role: 'Founder/Manager', thought: 'Focused on creating a seamless and supportive experience for our community.', imageUrl: 'https://images.unsplash.com/photo-1630910561339-4e22c7150093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhdmF0YXIlMjBwZXJzb258ZW58MHx8fHwxNzcxNTU3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'atharv', role: 'Founder/Manager', thought: 'Driving our vision forward and ensuring we deliver on our promises.', imageUrl: 'https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhdmF0YXIlMjBwZXJzb258ZW58MHx8fHwxNzcxNTU3NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  ]);
  
  const [tosContent, setTosContent] = useState('');


  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: 'Changes Saved!',
      description: 'Your changes have been saved locally for this session.',
    });
  };

  const handleAddLink = () => {
    setFooterLinks([...footerLinks, { text: '', href: '' }]);
  };

  const handleLinkChange = (index: number, field: 'text' | 'href', value: string) => {
    const newLinks = [...footerLinks];
    newLinks[index][field] = value;
    setFooterLinks(newLinks);
  };
  
  const handleFounderChange = (index: number, field: keyof Founder, value: string) => {
    const newFounders = [...founders];
    newFounders[index][field] = value;
    setFounders(newFounders);
  };

  const createPlanUpdater = <T extends Plan>(
    plans: T[], 
    setPlans: React.Dispatch<React.SetStateAction<T[]>>
  ) => (index: number, field: keyof T, value: string | string[]) => {
    const newPlans = [...plans];
    (newPlans[index] as any)[field] = value;
    setPlans(newPlans);
  };
  
  const handleNormalMcPlanChange = createPlanUpdater(normalMcPlansData, setNormalMcPlansData);
  const handlePerformanceMcPlanChange = createPlanUpdater(performanceMcPlansData, setPerformanceMcPlansData);
  const handleIntelVpsPlanChange = createPlanUpdater(intelVpsPlansData, setIntelVpsPlansData);
  const handleAmdVpsPlanChange = createPlanUpdater(amdVpsPlansData, setAmdVpsPlansData);


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
          This admin panel is for demonstration purposes. Changes are stored locally and will not persist after a page reload as there is no backend connected.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="plans" className="mt-8">
        <TabsList>
          <TabsTrigger value="plans">Manage Plans</TabsTrigger>
          <TabsTrigger value="offers">Manage Offers</TabsTrigger>
          <TabsTrigger value="content">Site Content</TabsTrigger>
        </TabsList>
        <TabsContent value="plans">
          <Card>
            <CardHeader>
              <CardTitle>Edit Hosting Plans</CardTitle>
              <CardDescription>Changes made here are local and for demonstration only.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Normal MC Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {normalMcPlansData.map((plan, i) => (
                    <Card key={plan.name} className="bg-card/50">
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor={`${plan.name}-price`}>Price</Label>
                          <Input id={`${plan.name}-price`} value={plan.price} onChange={e => handleNormalMcPlanChange(i, 'price', e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor={`${plan.name}-features`}>Features (comma-separated)</Label>
                          <Textarea id={`${plan.name}-features`} value={plan.features.join(', ')} onChange={e => handleNormalMcPlanChange(i, 'features', e.target.value.split(',').map(f => f.trim()))} />
                        </div>
                        <Button onClick={handleSave}>Save Changes</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Performance MC Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {performanceMcPlansData.map((plan, i) => (
                    <Card key={plan.name} className="bg-card/50">
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor={`${plan.name}-price`}>Price</Label>
                          <Input id={`${plan.name}-price`} value={plan.price} onChange={e => handlePerformanceMcPlanChange(i, 'price', e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor={`${plan.name}-features`}>Features (comma-separated)</Label>
                          <Textarea id={`${plan.name}-features`} value={plan.features.join(', ')} onChange={e => handlePerformanceMcPlanChange(i, 'features', e.target.value.split(',').map(f => f.trim()))} />
                        </div>
                        <Button onClick={handleSave}>Save Changes</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Intel VPS Plans</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {intelVpsPlansData.map((plan, i) => (
                    <Card key={plan.name} className="bg-card/50">
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor={`${plan.name}-price`}>Price</Label>
                          <Input id={`${plan.name}-price`} value={plan.price} onChange={e => handleIntelVpsPlanChange(i, 'price', e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor={`${plan.name}-features`}>Features (comma-separated)</Label>
                          <Textarea id={`${plan.name}-features`} value={plan.features.join(', ')} onChange={e => handleIntelVpsPlanChange(i, 'features', e.target.value.split(',').map(f => f.trim()))} />
                        </div>
                        <Button onClick={handleSave}>Save Changes</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
               <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">AMD VPS Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {amdVpsPlansData.map((plan, i) => (
                    <Card key={plan.name} className="bg-card/50">
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor={`${plan.name}-price`}>Price</Label>
                          <Input id={`${plan.name}-price`} value={plan.price} onChange={e => handleAmdVpsPlanChange(i, 'price', e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor={`${plan.name}-features`}>Features (comma-separated)</Label>
                          <Textarea id={`${plan.name}-features`} value={plan.features.join(', ')} onChange={e => handleAmdVpsPlanChange(i, 'features', e.target.value.split(',').map(f => f.trim()))} />
                        </div>
                        <Button onClick={handleSave}>Save Changes</Button>
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
              <Button onClick={handleSave}>Update Offer</Button>
            </CardContent>
          </Card>
        </TabsContent>
         <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Manage Site Content</CardTitle>
              <CardDescription>
                Changes made here are local and for demonstration only.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">About Us Section</h3>
                <Label htmlFor="about-us-content">Content</Label>
                <Textarea
                  id="about-us-content"
                  value={aboutUsContent}
                  onChange={(e) => setAboutUsContent(e.target.value)}
                  rows={10}
                />
                <Button onClick={handleSave} className="mt-2">Save About Us</Button>
              </div>

               <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Founders Section</h3>
                {founders.map((founder, index) => (
                  <Card key={index} className="bg-card/50">
                    <CardHeader>
                      <CardTitle>Edit {founder.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor={`founder-name-${index}`}>Name</Label>
                        <Input id={`founder-name-${index}`} value={founder.name} onChange={(e) => handleFounderChange(index, 'name', e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor={`founder-role-${index}`}>Role</Label>
                        <Input id={`founder-role-${index}`} value={founder.role} onChange={(e) => handleFounderChange(index, 'role', e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor={`founder-thought-${index}`}>Thought</Label>
                        <Textarea id={`founder-thought-${index}`} value={founder.thought} onChange={(e) => handleFounderChange(index, 'thought', e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor={`founder-image-${index}`}>Image URL (Profile Picture)</Label>
                        <Input id={`founder-image-${index}`} value={founder.imageUrl} onChange={(e) => handleFounderChange(index, 'imageUrl', e.target.value)} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button onClick={handleSave}>Save Founders Section</Button>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Terms of Service (Rules)</h3>
                <Label htmlFor="tos-content">Content</Label>
                <Textarea
                  id="tos-content"
                  value={tosContent}
                  onChange={(e) => setTosContent(e.target.value)}
                  placeholder="The content for the Terms of Service page is currently managed directly in the code at src/app/terms-of-service/page.tsx."
                  rows={15}
                  disabled
                />
                 <p className="text-sm text-muted-foreground mt-2">
                    Editing this content requires code changes. This is a display-only field for now.
                </p>
                <Button onClick={handleSave} className="mt-2" disabled>Save Terms</Button>
              </div>
               <div>
                <h3 className="text-2xl font-semibold mb-4">Footer Links</h3>
                <div className="space-y-4">
                    <Label>Edit Footer Links</Label>
                    {footerLinks.map((link, index) => (
                        <div key={index} className="grid grid-cols-2 gap-4">
                            <Input 
                                value={link.text} 
                                onChange={(e) => handleLinkChange(index, 'text', e.target.value)}
                                placeholder="Link Text"
                            />
                            <Input 
                                value={link.href} 
                                onChange={(e) => handleLinkChange(index, 'href', e.target.value)}
                                placeholder="Link URL"
                            />
                        </div>
                    ))}
                    <div className="flex gap-2">
                        <Button onClick={handleAddLink} variant="outline">Add New Link</Button>
                        <Button onClick={handleSave}>Save Links</Button>
                    </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
