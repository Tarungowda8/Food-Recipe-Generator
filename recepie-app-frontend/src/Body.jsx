import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import getRecipe from "./ai";

export default function Body(){

    const [ingredients, setIngredients] = React.useState([]);
        
    const [recipe, setRecipe] = React.useState("");

    const [loading, setLoading] = React.useState(false);

    async function handleGetRecipe() {
        setLoading(true);

    const recipe = await getRecipe(ingredients);

    setRecipe(recipe);
    setLoading(false);
    
}
    function submitIngredients(formData) {
    const newIngredient = formData.get("ingredient").trim();

    if (!newIngredient) return;

    if (ingredients.includes(newIngredient)) return;

    setIngredients(prev => [...prev, newIngredient]);
}
    

    return (
        <main>
            <h2>What's in your kitchen?</h2>
            <form action = {submitIngredients} className='form'>
                <input
                disabled={loading}
                className='input'
                type="text"
                placeholder="e.g pasta"
                 aria-label="Search recipes"
                 name="ingredient"
                 />

                <button 
                     type="submit" 
                     className='button'  
                     disabled={loading}
                     >
                    {loading ? "👨‍🍳 Chef AI is cooking..." : "🍽 Get Recipe"}

                </button>
            </form>
            { ingredients.length > 0 && <IngredientsList 
                              ingredients={ingredients} 
                              handleGetRecipe = {handleGetRecipe}
                              loading={loading}
                              />
            }
            {recipe && <ClaudeRecipe recipe={recipe} />}
            
             
        </main>
    )
}
