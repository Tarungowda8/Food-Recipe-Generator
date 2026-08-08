# 👨‍🍳 Chef Claude - AI Recipe Generator

Chef Claude is an AI-powered recipe generator that creates recipes based on the ingredients available in your kitchen.

Simply enter your ingredients, and the application uses AI to generate a recipe with ingredients, cooking instructions, and cooking time.

## 🚀 Features

- 🥕 Add ingredients available in your kitchen
- 🤖 Generate recipes using AI
- 🍽️ Get recipes based on some or all of your ingredients
- 📝 Recipes include:
  - Recipe name
  - Ingredients
  - Cooking instructions
  - Cooking time
- ⏳ Loading state while the recipe is being generated
- 🚫 Prevents duplicate ingredients
- 🎨 Clean and responsive user interface
- 🔐 API key is kept on the backend instead of being exposed in the frontend

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- Axios
- CSS

### Backend
- Java
- Spring Boot
- Spring Web
- WebClient
- Maven

### AI
- Groq API
- Llama 3.3 70B Versatile

## 📁 Project Structure

```text
Chef-Claude/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Body.jsx
│   │   │   ├── IngredientsList.jsx
│   │   │   └── ClaudeRecipe.jsx
│   │   │
│   │   ├── ai.js
│   │   ├── App.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── src/
    │   └── main/
    │       ├── java/
    │       │   └── RecepieBackend/
    │       │       ├── config/
    │       │       │   └── GroqConfig.java
    │       │       ├── controller/
    │       │       │   └── RecipeController.java
    │       │       ├── dto/
    │       │       │   └── RecipeRequest.java
    │       │       └── service/
    │       │           └── GroqService.java
    │       │
    │       └── resources/
    │           └── application.properties
    │
    └── pom.xml