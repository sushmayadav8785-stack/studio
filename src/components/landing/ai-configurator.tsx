'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getRecommendationAction } from '@/app/actions';
import type { AIRecommendationOutput } from '@/ai/flows/get-ai-recommendation';
import { Loader2 } from 'lucide-react';
import AIRecommendationResult from './ai-recommendation-result';

const FormSchema = z.object({
  game: z.string({ required_error: 'Please select a game.' }),
  playerCount: z.string({ required_error: 'Please select a player count.' }),
  modLevel: z.enum(['Vanilla', 'Lightly Modded', 'Heavily Modded'], {
    required_error: 'Please select a mod level.',
  }),
});

const playerCountMap: { [key: string]: number } = {
  '1-10': 10,
  '11-20': 20,
  '21-50': 50,
  '50+': 100,
};

export default function AIConfigurator() {
  const [recommendation, setRecommendation] = useState<AIRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    const input = {
      ...data,
      playerCount: playerCountMap[data.playerCount],
    };

    const result = await getRecommendationAction(input);

    if (result.success && result.data) {
      setRecommendation(result.data);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  }

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Not sure what you need?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Let our AI Configurator analyze your needs and recommend the perfect server plan for you in seconds.
            </p>
            <Card className="mt-8 bg-card/50 backdrop-blur-sm border-border/20">
              <CardHeader>
                <CardTitle>AI Server Recommender</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="game"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Game</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a game" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Minecraft">Minecraft</SelectItem>
                              <SelectItem value="Rust">Rust</SelectItem>
                              <SelectItem value="Valheim">Valheim</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="playerCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Player Count</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Expected number of players" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 Players</SelectItem>
                              <SelectItem value="11-20">11-20 Players</SelectItem>
                              <SelectItem value="21-50">21-50 Players</SelectItem>
                              <SelectItem value="50+">50+ Players</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="modLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mod Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Level of modifications" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Vanilla">Vanilla</SelectItem>
                              <SelectItem value="Lightly Modded">Lightly Modded</SelectItem>
                              <SelectItem value="Heavily Modded">Heavily Modded</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full font-bold" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Get AI Recommendation
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="min-h-[300px] flex items-center justify-center">
            {isLoading && <Loader2 className="h-12 w-12 animate-spin text-primary" />}
            {error && <p className="text-destructive text-center">{error}</p>}
            {recommendation && <AIRecommendationResult recommendation={recommendation} />}
          </div>
        </div>
      </div>
    </section>
  );
}
