import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface IngredientInputProps {
    onGenerateRecipe: (ingredients: string[], servings: number, cuisine: string) => void;
    loading: boolean;
}

const cuisines = [
    'Any', 'American', 'Chinese', 'French', 'Greek', 'Indian', 'Italian', 'Japanese', 
    'Korean', 'Mediterranean', 'Mexican', 'Myanmar', 'Spanish', 'Thai', 'Vietnamese'
];

const IngredientInput: React.FC<IngredientInputProps> = ({ onGenerateRecipe, loading }) => {
    const { t } = useLanguage();
    const [currentIngredient, setCurrentIngredient] = useState('');
    const [ingredients, setIngredients] = useState<string[]>(['chicken breast', 'rice', 'broccoli']);
    const [servings, setServings] = useState<number>(4);
    const [cuisine, setCuisine] = useState<string>('Any');

    const handleAddIngredient = () => {
        if (currentIngredient.trim() && !ingredients.includes(currentIngredient.trim().toLowerCase())) {
            setIngredients([...ingredients, currentIngredient.trim().toLowerCase()]);
            setCurrentIngredient('');
        }
    };

    const handleRemoveIngredient = (ingredientToRemove: string) => {
        setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToRemove));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (ingredients.length > 0) {
            onGenerateRecipe(ingredients, servings, cuisine);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">{t('input.title')}</h2>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input
                        type="text"
                        value={currentIngredient}
                        onChange={(e) => setCurrentIngredient(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddIngredient();
                            }
                        }}
                        placeholder={t('input.placeholder')}
                        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        disabled={loading}
                    />
                    <button
                        type="button"
                        onClick={handleAddIngredient}
                        className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 disabled:bg-indigo-300"
                        disabled={loading}
                    >
                        {t('input.add')}
                    </button>
                </div>

                <div className="mb-6 min-h-[60px]">
                    {ingredients.length > 0 && (
                        <ul className="flex flex-wrap gap-2">
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="flex items-center bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                                    <span className="capitalize">{ingredient}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                        className="ml-2 text-gray-500 hover:text-red-500"
                                        disabled={loading}
                                    >
                                        &times;
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex-1">
                        <label htmlFor="servings" className="block text-sm font-medium text-gray-700 mb-1">{t('input.servings')}</label>
                        <select
                            id="servings"
                            value={servings}
                            onChange={(e) => setServings(parseInt(e.target.value, 10))}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition bg-white appearance-none"
                            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em' }}
                            disabled={loading}
                        >
                            {Array.from({ length: 40 }, (_, i) => i + 1).map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex-1">
                        <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 mb-1">{t('input.cuisine')}</label>
                        <select
                            id="cuisine"
                            value={cuisine}
                            onChange={(e) => setCuisine(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition bg-white appearance-none"
                            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em' }}
                            disabled={loading}
                        >
                            {cuisines.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-700 transition duration-300 disabled:bg-green-300 text-lg"
                    disabled={loading || ingredients.length === 0}
                >
                    {loading ? t('input.generating') : t('input.generate')}
                </button>
            </form>
        </div>
    );
};

export default IngredientInput;
