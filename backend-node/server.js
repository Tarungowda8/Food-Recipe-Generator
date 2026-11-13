const express = require("express");
const cors = require("cors");
require("dotenv").config();

const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
const PORT = process.env.PORT || 9998;

app.use(cors({
    origin: ["http://localhost:5173", "https://food-recipe-generator-beta.vercel.app"]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Recipe Generator API is running!");
});

app.use("/api", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});