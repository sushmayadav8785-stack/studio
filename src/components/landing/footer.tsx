import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const footerLinks = {
  Products: [
    { name: 'Minecraft Hosting', href: '#' },
    { name: 'VPS Hosting', href: '#' },
    { name: 'Dedicated Servers', href: '#' },
  ],
  Legal: [
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Acceptable Use', href: '#' },
  ],
  Support: [
    { name: 'Contact Us', href: '/support' },
    { name: 'Knowledgebase', href: '/support' },
    { name: 'Server Status', href: '#' },
  ],
  'Quick Links': [
    { name: 'About Us', href: '/company' },
    { name: 'Locations', href: '/locations' },
    { name: 'Discord', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container py-12">
        <div className="rounded-lg bg-card/50 backdrop-blur-sm border border-border/20 p-8 text-center">
          <h3 className="text-2xl font-bold tracking-tight">Join Our Discord Community</h3>
          <p className="mt-2 text-foreground/70">
            Get help, chat with other server owners, and stay up-to-date with Rex Cloud.
          </p>
          <Button className="mt-4 font-bold" size="lg">
            Join Discord
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground">{title}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border/20 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center space-x-2">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="font-bold">Rex Cloud</span>
          </div>
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Rex Cloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
