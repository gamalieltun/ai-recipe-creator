export interface Ingredient {
  name: string;
  isEssential: boolean;
}

export interface Recipe {
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: Ingredient[];
  instructions: string[];
  error?: string;
}
