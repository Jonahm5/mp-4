
export async function getRecipes() {

    const key = process.env.SPOON_API_KEY;
    const rawData = await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=${key}`)

    return await rawData.json();
}