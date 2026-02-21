import type { AIRecommendationOutput } from '@/ai/flows/get-ai-recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Info } from 'lucide-react';
import Link from 'next/link';

interface AIRecommendationResultProps {
  recommendation: AIRecommendationOutput;
}

const tierToTabMap: { [key: string]: string } = {
  'Starter': 'normal-mc',
  'Pro': 'performance-mc',
  'Extreme': 'performance-mc',
};

export default function AIRecommendationResult({ recommendation }: AIRecommendationResultProps) {
  const tab = tierToTabMap[recommendation.recommendedTier] || 'normal-mc';

  return (
    <Card className="w-full bg-card/50 backdrop-blur-sm border-2 border-primary glow-border animate-in fade-in zoom-in-95">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Award className="h-6 w-6 text-primary" />
        </div>
        <CardDescription>Our AI Recommends</CardDescription>
        <CardTitle className="text-3xl text-primary">{recommendation.recommendedTier} Plan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold">Reasoning:</h4>
          <p className="text-foreground/80 text-sm">{recommendation.reasoning}</p>
        </div>
        <div>
          <h4 className="font-semibold">Plan Summary:</h4>
          <p className="text-foreground/80 text-sm">{recommendation.specsSummary}</p>
        </div>
        <div className="!mt-6 flex items-start gap-2 rounded-lg border border-border/40 bg-background/30 p-3 text-xs text-muted-foreground">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <span>To purchase a server or for custom quotes, please create a ticket on our Discord.</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full font-bold">
          <Link href={`/pricing?tab=${tab}`}>
            Configure {recommendation.recommendedTier} Plan
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
