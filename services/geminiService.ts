import { GoogleGenAI, Type } from "@google/genai";
import { Recipe } from '../types';

// Use Vite's import.meta.env instead of process.env
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const recipeSchema = {
    type: Type.OBJECT,
    properties: {
        name: { type: Type.STRING, description: 'The name of the recipe.' },
        description: { type: Type.STRING, description: 'A short, enticing description of the dish.' },
        prepTime: { type: Type.STRING, description: 'Preparation time, e.g., "15 minutes".' },
        cookTime: { type: Type.STRING, description: 'Cooking time, e.g., "30 minutes".' },
        servings: { type: Type.STRING, description: 'Number of servings, e.g., "4 servings".' },
        ingredients: {
            type: Type.ARRAY,
            description: 'A list of all ingredients required for the recipe.',
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING, description: 'The name and quantity of the ingredient, e.g., "2 cups flour".' },
                    isEssential: { type: Type.BOOLEAN, description: 'Whether this ingredient was one of the ones provided by the user.' },
                },
                required: ['name', 'isEssential'],
            },
        },
        instructions: {
            type: Type.ARRAY,
            description: 'A list of step-by-step instructions for preparing the dish.',
            items: {
                type: Type.STRING,
            },
        },
    },
    required: ['name', 'description', 'prepTime', 'cookTime', 'servings', 'ingredients', 'instructions'],
};

export const generateRecipe = async (ingredients: string[], servings: number, cuisine: string): Promise<Recipe> => {
    const cuisinePrompt = cuisine && cuisine.toLowerCase() !== 'any' ? `a delicious ${cuisine}` : `a delicious`;
    const prompt = `Create ${cuisinePrompt} recipe for ${servings} people using the following ingredients: ${ingredients.join(', ')}.
    Please provide the recipe in a structured JSON format.
    The ingredients provided by the user should be marked as "isEssential: true".
    You can add other common pantry ingredients, but they should be marked as "isEssential: false".
    The recipe should have a name, description, prep time, cook time, servings, a list of ingredients, and step-by-step instructions.
    Ensure the JSON output strictly adheres to the provided schema.`;

    try {
        // FIX: Use the correct method to generate content with a JSON response configuration.
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: recipeSchema,
            },
        });

        // FIX: Extract text and parse the JSON response.
        const recipeJsonString = response.text;
        
        const cleanedJson = recipeJsonString.replace(/^```json\s*|```$/g, '').trim();

        const recipeData: Recipe = JSON.parse(cleanedJson);
        return recipeData;

    } catch (error) {
        console.error("Error generating recipe:", error);
        let errorMessage = "An unknown error occurred while generating the recipe.";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return {
            name: 'Error',
            description: '',
            prepTime: '',
            cookTime: '',
            servings: '',
            ingredients: [],
            instructions: [],
            error: `Failed to generate recipe. ${errorMessage}`
        };
    }
};