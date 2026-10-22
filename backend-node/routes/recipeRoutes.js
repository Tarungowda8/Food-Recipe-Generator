
const express = require("express");
const { generateRecipe } = require("../services/groqService");

const router = express.Router();

router.post("/recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;

    // Validate the incoming request
    if (
      !Array.isArray(ingredients) ||
      ingredients.length === 0 ||
      !ingredients.every(
        item => typeof item === "string" && item.trim().length > 0
      )
    ) {
      return res.status(400).json({
        error: "Please provide a non-empty list of ingredients."
      });
    }

    // Generate the recipe using Groq
    const recipe = await generateRecipe(ingredients);

    // Return plain text, matching the old controller's response
    res.type("text/plain").send(recipe);

  } catch (error) {
    console.error("Recipe generation error:", error);
    res.status(500).json({
      error: "Unable to generate a recipe right now."
    });
  }
});

module.exports = router;
