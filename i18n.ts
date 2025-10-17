// i18n.ts - Language configuration file
export type Language = 'en' | 'my';

export interface Translations {
  header: {
    title: string;
    subtitle: string;
  };
  ingredientInput: {
    title: string;
    placeholder: string;
    addButton: string;
    servingsLabel: string;
    cuisineLabel: string;
    generateButton: string;
    generatingButton: string;
  };
  cuisines: {
    [key: string]: string;
  };
  recipeDisplay: {
    prepTime: string;
    cookTime: string;
    servings: string;
    ingredients: string;
    instructions: string;
    essential: string;
    optional: string;
    error: string;
  };
  loader: {
    message: string;
  };
  footer: {
    text: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      title: 'AI Recipe Creator',
      subtitle: 'Turn your pantry items into culinary masterpieces.',
    },
    ingredientInput: {
      title: 'Enter Your Ingredients',
      placeholder: 'e.g., tomatoes, cheese, basil',
      addButton: 'Add',
      servingsLabel: 'Servings',
      cuisineLabel: 'Cuisine',
      generateButton: 'Generate Recipe',
      generatingButton: 'Creating Magic...',
    },
    cuisines: {
      'Any': 'Any',
      'American': 'American',
      'Chinese': 'Chinese',
      'French': 'French',
      'Greek': 'Greek',
      'Indian': 'Indian',
      'Italian': 'Italian',
      'Japanese': 'Japanese',
      'Korean': 'Korean',
      'Mediterranean': 'Mediterranean',
      'Mexican': 'Mexican',
      'Myanmar': 'Myanmar',
      'Spanish': 'Spanish',
      'Thai': 'Thai',
      'Vietnamese': 'Vietnamese',
    },
    recipeDisplay: {
      prepTime: 'Prep Time',
      cookTime: 'Cook Time',
      servings: 'Servings',
      ingredients: 'Ingredients',
      instructions: 'Instructions',
      essential: 'Essential',
      optional: 'Optional',
      error: 'Oops!',
    },
    loader: {
      message: 'Brewing up a tasty recipe...',
    },
    footer: {
      text: 'Powered by Google Gemini. App created for static hosting.',
    },
  },
  my: {
    header: {
      title: 'AI ချက်ပြုတ်နည်း ဖန်တီးစက်',
      subtitle: 'သင့်ရဲ့ အစားအစာများကို အရသာရှိတဲ့ ဟင်းလျာများအဖြစ် ပြောင်းလဲပေးပါ။',
    },
    ingredientInput: {
      title: 'သင့်ပါဝင်ပစ္စည်းများ ထည့်သွင်းပါ',
      placeholder: 'ဥပမာ - ခရမ်းချဉ်သီး၊ ဒိန်ခဲ၊ ပင်စိမ့်',
      addButton: 'ထည့်မည်',
      servingsLabel: 'လူဦးရေ',
      cuisineLabel: 'အစားအသောက်အမျိုးအစား',
      generateButton: 'ချက်ပြုတ်နည်း ဖန်တီးမည်',
      generatingButton: 'ဖန်တီးနေပါသည်...',
    },
    cuisines: {
      'Any': 'အားလုံး',
      'American': 'အမေရိကန်',
      'Chinese': 'တရုတ်',
      'French': 'ပြင်သစ်',
      'Greek': 'ဂရိ',
      'Indian': 'အိန္ဒိယ',
      'Italian': 'အီတလီ',
      'Japanese': 'ဂျပန်',
      'Korean': 'ကိုရီးယား',
      'Mediterranean': 'မြေထဲပင်လယ်',
      'Mexican': 'မက္ကဆီကန်',
      'Myanmar': 'မြန်မာ',
      'Spanish': 'စပိန်',
      'Thai': 'ထိုင်း',
      'Vietnamese': 'ဗီယက်နမ်',
    },
    recipeDisplay: {
      prepTime: 'ပြင်ဆင်ချိန်',
      cookTime: 'ချက်ချိန်',
      servings: 'လူဦးရေ',
      ingredients: 'ပါဝင်ပစ္စည်းများ',
      instructions: 'လုပ်ဆောင်ပုံ',
      essential: 'မရှိမဖြစ်',
      optional: 'ရွေးချယ်နိုင်သော',
      error: 'တောင်းပန်ပါတယ်!',
    },
    loader: {
      message: 'အရသာရှိတဲ့ ချက်ပြုတ်နည်း ပြင်ဆင်နေပါသည်...',
    },
    footer: {
      text: 'Google Gemini မှ စွမ်းအားပေးထားသည်။',
    },
  },
};

export const getCuisinesList = (lang: Language): string[] => {
  return Object.keys(translations[lang].cuisines);
};