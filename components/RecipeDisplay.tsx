import React from 'react';
import { Recipe } from '../types';
import { useLanguage } from '../LanguageContext';

interface RecipeDisplayProps {
    recipe: Recipe | null;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
    const { t } = useLanguage();

    if (!recipe) {
        return null;
    }

    if (recipe.error) {
        return (
             <div className="w-full max-w-4xl mx-auto mt-10 bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-r-lg shadow-md" role="alert">
                <p className="font-bold">{t.recipeDisplay.error}</p>
                <p>{recipe.error}</p>
            </div>
        )
    }

    const EssentialIcon = () => (
        <span className="ml-2 text-green-600" title={t.recipeDisplay.essential}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
        </span>
    );

    const OptionalIcon = () => (
        <span className="ml-2 text-gray-400" title={t.recipeDisplay.optional}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
        </span>
    );

    return (
        <div className="w-full max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-2xl animate-fade-in-up">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-2">{recipe.name}</h2>
            <p className="text-gray-600 italic mb-6">{recipe.description}</p>

            <div className="flex flex-wrap gap-4 justify-center text-center mb-8 border-t border-b border-gray-200 py-4">
                <div className="flex-1 min-w-[120px]">
                    <p className="text-sm font-medium text-gray-500">{t.recipeDisplay.prepTime}</p>
                    <p className="text-lg font-bold text-indigo-600">{recipe.prepTime}</p>
                </div>
                <div className="flex-1 min-w-[120px]">
                    <p className="text-sm font-medium text-gray-500">{t.recipeDisplay.cookTime}</p>
                    <p className="text-lg font-bold text-indigo-600">{recipe.cookTime}</p>
                </div>
                <div className="flex-1 min-w-[120px]">
                    <p className="text-sm font-medium text-gray-500">{t.recipeDisplay.servings}</p>
                    <p className="text-lg font-bold text-indigo-600">{recipe.servings}</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4 border-b-2 border-indigo-500 pb-2">
                        {t.recipeDisplay.ingredients}
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                        {recipe.ingredients.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <span className="flex-grow">{item.name}</span>
                                {item.isEssential ? <EssentialIcon /> : <OptionalIcon />}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4 border-b-2 border-green-500 pb-2">
                        {t.recipeDisplay.instructions}
                    </h3>
                    <ol className="space-y-4 text-gray-800">
                        {recipe.instructions.map((step, index) => (
                            <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 h-8 w-8 bg-green-500 text-white font-bold rounded-full flex items-center justify-center mr-4">{index + 1}</span>
                                <span className="flex-1 pt-1">{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default RecipeDisplay;