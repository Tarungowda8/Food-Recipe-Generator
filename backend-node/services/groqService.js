
async function generateRecipe(ingredients) {
  // Convert the ingredients array into a comma-separated string
  const ingredientsString = ingredients.join(", ");

  // Build the same prompt used in your Spring Boot backend
  const prompt = `
You are a professional chef.

I have the following ingredients:
${ingredientsString}

Suggest one delicious recipe using some or all of these ingredients.

You may include a few common pantry ingredients if required.

Format the response in Markdown.

Include:
# Recipe Name

## Ingredients

## Instructions

## Cooking Time
`;

  // Send the prompt to Groq
  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    }
  );

  // Handle errors returned by the Groq API
  if (!response.ok) {
    const errorDetails = await response.text();
    console.error("Groq API error:", response.status, errorDetails);
    throw new Error(`Recipe generation failed (${response.status})`);
  }

  // Parse the JSON response and extract the generated recipe
  const data = await response.json();
  const recipe = data.choices?.[0]?.message?.content;

  if (typeof recipe !== "string") {
    throw new Error("Groq returned no recipe content");
  }

  return recipe;
}

module.exports = { generateRecipe };
