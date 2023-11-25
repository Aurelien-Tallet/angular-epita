import type { Alcoholic, Drink } from '@app/dto/drink.dto';
export interface Cocktail {
    id?: string;
    name?: string;
    image?: string;
    drinkAlternate?: string;
    tags?: string;
    video?: string;
    category?: string;
    iba?: string;
    alcoholic?: Alcoholic;
    glass?: string;
    instructions?: string;
    instructionsES?: string;
    instructionsDE?: string;
    instructionsFR?: string;
    instructionsIT?: string;
    instructionsZH_HANS?: string;
    instructionsZH_HANT?: string;
    thumbnail?: string;
    imageSource?: string;
    imageAttribution?: string;
    creativeCommonsConfirmed?: string;
    dateModified?: string;
    ingredients?: string[];
    measures?: string[];
}

export const cocktailMapper = (drink: Drink): Cocktail => {
    const ingredients = Object.entries(drink)
        .filter(([key, value]) => key.includes('strIngredient') && value)
        .map(([, value]) => value) as string[];

    const measures = Object.entries(drink)
        .filter(([key, value]) => key.includes('strMeasure') && value)
        .map(([, value]) => value) as string[];

    return {
        id: drink?.idDrink,
        name: drink?.strDrink,
        image: drink?.strDrinkThumb,
        drinkAlternate: drink?.strDrinkAlternate,
        tags: drink?.strTags,
        video: drink?.strVideo,
        category: drink?.strCategory,
        iba: drink?.strIBA,
        alcoholic: drink?.strAlcoholic,
        glass: drink?.strGlass,
        instructions: drink?.strInstructions,
        instructionsES: drink?.strInstructionsES,
        instructionsDE: drink?.strInstructionsDE,
        instructionsFR: drink?.strInstructionsFR,
        instructionsIT: drink?.strInstructionsIT,
        instructionsZH_HANS: drink?.strInstructionsZH_HANS,
        instructionsZH_HANT: drink?.strInstructionsZH_HANT,
        thumbnail: drink?.strDrinkThumb,
        imageSource: drink?.strImageSource,
        imageAttribution: drink?.strImageAttribution,
        creativeCommonsConfirmed: drink?.strCreativeCommonsConfirmed,
        dateModified: drink?.dateModified,
        ingredients,
        measures,
    };
}