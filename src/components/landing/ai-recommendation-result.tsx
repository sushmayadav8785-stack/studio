import type { AIRecommendationOutput } from '@/ai/flows/get-ai-recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

interface AIRecommendationResultProps {
  recommendation: AIRecommendationOutput;
}

export default function AIRecommendationResult({ recommendation }: AIRecommendationResultProps) {
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
      </CardContent>
      <CardFooter>
        <Button className="w-full font-bold">Configure {recommendation.recommendedTier} Plan</Button>
      </CardFooter>
    </Card>
  );
}
