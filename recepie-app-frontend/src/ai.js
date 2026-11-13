import axios from "axios";

const API = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export default async function getRecipe(ingredientsArr) {
    try {

        const response = await API.post("/recipe", {
            ingredients: ingredientsArr
        });

        return response.data;

    } catch (err) {
    console.log(err);
    console.log(err.response);
    console.log(err.response?.data);
    return "Failed to generate recipe.";
}
}