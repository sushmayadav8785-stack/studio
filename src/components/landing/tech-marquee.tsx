const partners = [
  'Cloudflare',
  'OVHcloud',
  'Intel',
  'AMD',
  'NVIDIA',
  'Pterodactyl',
];
const allPartners = [...partners, ...partners];

export default function TechMarquee() {
  return (
    <section className="py-12">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="mx-6 flex-shrink-0 text-2xl font-semibold text-foreground/40"
            >
              {partner}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  );
}
