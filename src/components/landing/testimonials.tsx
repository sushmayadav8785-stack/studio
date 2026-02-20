import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const stats = [
  { value: '10,000+', label: 'Servers Hosted' },
  { value: '99.99%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Instant Support' },
];

const testimonials = [
  {
    id: 1,
    name: 'Alex',
    avatarId: 'avatar-1',
    review: "The lowest latency I've ever had. My Minecraft server runs flawlessly, even with a ton of players online. Rex Host is a game-changer!",
  },
  {
    id: 2,
    name: 'Jordyn',
    avatarId: 'avatar-2',
    review: 'Incredible support team. They helped me set up my custom modpack in minutes. The control panel is super intuitive, too!',
  },
  {
    id: 3,
    name: 'Casey',
    avatarId: 'avatar-3',
    review: 'I switched from a budget host and the difference is night and day. No lag, no downtime, just pure performance. Worth every penny.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 divide-y divide-border/20 md:grid-cols-3 md:divide-y-0 md:divide-x">
          {stats.map((stat, index) => (
            <div key={index} className="py-4 text-center md:px-8">
              <p className="text-4xl font-bold tracking-tight text-primary">{stat.value}</p>
              <p className="mt-1 text-base text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const avatar = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
            return (
              <Card
                key={testimonial.id}
                className="bg-card/50 backdrop-blur-sm border-border/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {avatar && (
                      <Image
                        src={avatar.imageUrl}
                        alt={avatar.description}
                        data-ai-hint={avatar.imageHint}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90">&ldquo;{testimonial.review}&rdquo;</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
