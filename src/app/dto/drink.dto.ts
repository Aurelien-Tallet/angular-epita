export type Alcoholic = 'Alcoholic' | 'Non alcoholic' | 'Optional alcohol' | null;
type Numbers1to15 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

type IngredientKey = `strIngredient${Numbers1to15}`;
type MeasureKey = `strMeasure${Numbers1to15}`;

type Ingredients = {
  [key in IngredientKey]?: string;
}

type Measures = {
  [key in MeasureKey]?: string;
}
export interface Drink extends Ingredients, Measures {
  idDrink?: string;
  strDrink?: string;
  image?: string;
  strDrinkAlternate?: string;
  strTags?: string;
  strVideo?: string;
  strCategory?: string;
  strIBA?: string;
  strAlcoholic?: Alcoholic;
  strGlass?: string;
  strInstructions?: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strInstructionsIT?: string;
  strInstructionsZH_HANS?: string;
  strInstructionsZH_HANT?: string;
  strDrinkThumb?: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
}

export interface DrinksResponse { drinks: Drink[]; }