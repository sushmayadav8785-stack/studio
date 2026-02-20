'use server';

import { getAIRecommendation, type AIRecommendationInput } from '@/ai/flows/get-ai-recommendation';

export async function getRecommendationAction(input: AIRecommendationInput) {
  try {
    const result = await getAIRecommendation(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('AI Recommendation Error:', error);
    if (error instanceof Error) {
        return { success: false, error: error.message };
    }
    return { success: false, error: 'An unexpected error occurred while fetching your recommendation.' };
  }
}
