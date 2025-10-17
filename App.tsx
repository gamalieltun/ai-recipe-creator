import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';
import Loader from './components/Loader';
import { generateRecipe } from './services/geminiService';
import { Recipe } from './types';
import { LanguageProvider } from './LanguageContext';

function App() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateRecipe = async (ingredients: string[], servings: number, cuisine: string) => {
    setIsLoading(true);
    setRecipe(null);
    try {
      const generatedRecipe = await generateRecipe(ingredients, servings, cuisine);
      setRecipe(generatedRecipe);
    } catch (error) {
      console.error(error);
      const errorRecipe: Recipe = {
        name: 'Error',
        description: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        ingredients: [],
        instructions: [],
        error: 'An unexpected error occurred. Please try again.',
      };
      setRecipe(errorRecipe);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow w-full">
          <IngredientInput onGenerateRecipe={handleGenerateRecipe} loading={isLoading} />
          <div className="mt-10">
            {isLoading && <Loader />}
            {recipe && !isLoading && <RecipeDisplay recipe={recipe} />}
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;