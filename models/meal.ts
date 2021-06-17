
export interface DbMeal{
    dateModified?: number,
    idMeal: string,
    strArea?: string,
    strCategory?: string,
    strCreativeCommonsConfirmed?: string,
    strDrinkAlternate?: string,
    strImageSource: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strIngredient16: string,
    strIngredient17: string,
    strIngredient18: string,
    strIngredient19: string,
    strIngredient20: string,
    strInstructions: string,
    strMeal:string,
    strMealThumb:string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3:string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8:string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11:string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string,
    strMeasure16: string,
    strMeasure17:string,
    strMeasure18: string,
    strMeasure19: string,
    strMeasure20: string,
    strSource: "https://www.bbcgoodfood.com/recipes/2174/unbelievably-easy-mince-pies"
    strTags: "Christmas"
    strYoutube: "https://www.youtube.com/watch?v=PnXft7lQNJE"

}

export interface Meal{
    id: string,
    title: string,
    ingredients: Array<{ingredient:string, measure:string}>,
    instructions: string,
    thumb: string
}

export interface Ingredient{
    ingredient: string,
    measure: string
}

export function convertMeal(meal: DbMeal) : Meal{

    let ingredients: Array<Ingredient> = new Array(20);

    for(let i = 1; i < 21; i++){
        ingredients[i] = {ingredient: meal["strIngredient" + i], measure: meal["strMeasure" + i]};
    }

    ingredients = ingredients.filter(x=>x && x.ingredient && x.measure);

    return {
        id: meal.idMeal,
        title: meal.strMeal,
        instructions: meal.strInstructions,
        ingredients,
        thumb: meal.strMealThumb
    };
}
