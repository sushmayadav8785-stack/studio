import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, LogIn, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function GetStartedPage() {
  return (
    <div className="container flex min-h-[calc(100vh-20rem)] items-center justify-center py-20">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Rocket className="h-6 w-6 text-primary" />
            Get Started with Rex Host
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Welcome! Here are some quick links to get you going.
          </p>
          <div className="flex flex-col space-y-4">
            <Button asChild size="lg" className="justify-start">
              <Link href="/login">
                <LogIn className="mr-2 h-5 w-5" />
                Access Control Panel
              </Link>
            </Button>
            <Button asChild size="lg" className="justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg
                  className="mr-2 h-5 w-5"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <title>Discord</title>
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8852-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8245-.6666 1.3292a18.18 18.18 0 00-5.2846 0 18.217 18.217 0 00-.6666-1.3292.0741.0741 0 00-.0785-.0371A19.7913 19.7913 0 003.683 4.3698a.0741.0741 0 00-.0371.0785v11.496a.0741.0741 0 00.0371.0785c.211.0371.422.0741.633.1112.211.0371.422.0741.633.1112a18.6657 18.6657 0 0011.6224 0c.211-.0371.422-.0741.633-.1112.211-.0371.422-.0741.633-.1112a.0741.0741 0 00.0371-.0785V4.4483a.0741.0741 0 00-.0371-.0785zM8.02 15.3312c-.8337 0-1.5152-.7407-1.5152-1.6596s.6815-1.6596 1.5152-1.6596c.8337 0 1.5152.7407 1.5152 1.6596.0001.9189-.6815 1.6596-1.5152 1.6596zm7.9748 0c-.8337 0-1.5152-.7407-1.5152-1.6596s.6815-1.6596 1.5152-1.6596c.8337 0 1.5152.7407 1.5152 1.6596s-.6815 1.6596-1.5152 1.6596z" />
                </svg>
                Join our Discord
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="justify-start">
               <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Check Server Status
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
