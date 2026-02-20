'use server';
/**
 * @fileOverview An AI configurator that recommends server hosting plans based on user input.
 *
 * - getAIRecommendation - A function that handles the AI server recommendation process.
 * - AIRecommendationInput - The input type for the getAIRecommendation function.
 * - AIRecommendationOutput - The return type for the getAIRecommendation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIRecommendationInputSchema = z.object({
  game: z.string().describe('The name of the game the user wants to host (e.g., "Minecraft", "Rust", "Valheim").'),
  playerCount: z.number().int().min(1).describe('The expected number of players on the server.'),
  modLevel: z.enum(['Vanilla', 'Lightly Modded', 'Heavily Modded']).describe('The level of modifications planned for the game server.'),
});
export type AIRecommendationInput = z.infer<typeof AIRecommendationInputSchema>;

const AIRecommendationOutputSchema = z.object({
  recommendedTier: z.enum(['Starter', 'Pro', 'Extreme']).describe('The recommended server hosting tier (Starter, Pro, or Extreme).'),
  reasoning: z.string().describe('A detailed explanation for the recommended tier, considering the game, player count, and mod level.'),
  specsSummary: z.string().describe('A summary of the key specifications for the recommended tier.'),
});
export type AIRecommendationOutput = z.infer<typeof AIRecommendationOutputSchema>;

export async function getAIRecommendation(input: AIRecommendationInput): Promise<AIRecommendationOutput> {
  return aiRecommendationFlow(input);
}

const aiRecommendationPrompt = ai.definePrompt({
  name: 'aiRecommendationPrompt',
  input: { schema: AIRecommendationInputSchema },
  output: { schema: AIRecommendationOutputSchema },
  prompt: `You are an expert server hosting consultant for "Rex Host". Your goal is to recommend the best server hosting tier to a user based on their game, expected player count, and mod level.

Here are the available "Rex Host" Minecraft hosting tiers and their specifications:
- **Starter Tier**:
  - RAM: 4GB
  - Storage: NVMe SSD
  - Bandwidth: Unmetered
  - Best for: Small vanilla or lightly modded servers, up to 10-15 players.

- **Pro Tier**:
  - RAM: 8GB
  - Storage: NVMe SSD
  - Bandwidth: Unmetered
  - Dedicated IP: Free
  - Best for: Medium-sized vanilla, moderately modded servers, or small heavily modded servers, up to 20-30 players. Good balance of performance and features.

- **Extreme Tier**:
  - RAM: 16GB
  - Storage: NVMe SSD
  - Support: Priority
  - Best for: Large vanilla, heavily modded servers, or high-performance game servers, 30+ players. Designed for demanding usage.

Consider the following user requirements:
- Game: {{{game}}}
- Expected Player Count: {{{playerCount}}}
- Mod Level: {{{modLevel}}}

Based on these requirements, recommend ONE of the above tiers (Starter, Pro, or Extreme). Provide a clear reasoning for your recommendation, and summarize the key specifications of the recommended tier. Focus on providing the best performance and stability for the user's needs.`,
});

const aiRecommendationFlow = ai.defineFlow(
  {
    name: 'aiRecommendationFlow',
    inputSchema: AIRecommendationInputSchema,
    outputSchema: AIRecommendationOutputSchema,
  },
  async (input) => {
    const { output } = await aiRecommendationPrompt(input);
    return output!;
  }
);
