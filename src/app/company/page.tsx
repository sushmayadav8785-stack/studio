import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const founders = [
  {
    name: 'aayu',
    role: 'Founder/Developer',
    thought: 'Building the future of hosting, one line of code at a time.',
    imageId: 'founder-aayu',
  },
  {
    name: 'aadi',
    role: 'Founder/Manager',
    thought: 'Focused on creating a seamless and supportive experience for our community.',
    imageId: 'founder-aadi',
  },
  {
    name: 'atharv',
    role: 'Founder/Manager',
    thought: 'Driving our vision forward and ensuring we deliver on our promises.',
    imageId: 'founder-atharv',
  },
];


export default function CompanyPage() {
  return (
    <div className="container py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">About Rex Cloud</h1>
        <p className="text-lg text-foreground/70 mt-4 max-w-3xl mx-auto">
          Rex Cloud was founded by a passionate and trusted team. Our founders are <strong>aayu</strong> (Founder/Developer), <strong>atharv</strong> (Founder/Manager), and <strong>aadi</strong> (Founder/Manager). We were born from a simple mission: to provide the best possible game server hosting experience. We believe in performance, reliability, and top-notch customer support. Our infrastructure is built on the latest hardware to ensure your games run smoothly, and our custom control panel makes managing your server a breeze. Join us and experience the difference.
        </p>
      </div>

       <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {founders.map((founder) => {
            const image = PlaceHolderImages.find((img) => img.id === founder.imageId);
            return (
              <div key={founder.name} className="flex flex-col items-center text-center">
                {image && (
                   <Image
                      src={image.imageUrl}
                      alt={`Founder ${founder.name}`}
                      width={150}
                      height={150}
                      className="rounded-full mb-4 border-2 border-primary"
                      data-ai-hint={image.imageHint}
                   />
                )}
                <h3 className="text-xl font-bold">{founder.name}</h3>
                <p className="text-primary font-semibold">{founder.role}</p>
                <p className="text-foreground/70 mt-2 italic">"{founder.thought}"</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
