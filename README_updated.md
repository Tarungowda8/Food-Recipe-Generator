# 👨‍🍳 Chef Claude --- AI Recipe Generator

Chef Claude is an AI-powered recipe generator that helps users turn
ingredients they already have into a recipe. Enter a list of ingredients
and the app uses the Groq API to generate a recipe with an ingredient
list, cooking instructions, and cooking time.

## ✨ Features

-   Add ingredients available in your kitchen
-   Generate recipes using AI
-   Get recipe suggestions using some or all of the supplied ingredients
-   Recipe output includes:
    -   Recipe name
    -   Ingredients
    -   Cooking instructions
    -   Cooking time
-   Loading state while a recipe is generated
-   Prevents duplicate ingredients
-   Responsive React user interface
-   Keeps the Groq API key on the backend rather than exposing it in
    frontend code

## 🧰 Tech Stack

### Frontend

-   React
-   Vite
-   JavaScript
-   Axios
-   CSS

### Backend

-   Node.js
-   Express
-   CORS
-   dotenv
-   Nodemon (development)

### AI

-   Groq API
-   Groq Chat Completions API
-   Model configured through the `GROQ_MODEL` environment variable

## 📁 Project Structure

The current repository uses these folders (your local folder names may
differ):

``` text
FoodRecepieApp/
├── recepie-app-frontend/       # React + Vite frontend
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend-node/               # Node.js + Express backend
│   ├── routes/
│   │   └── recipeRoutes.js
│   ├── services/
│   │   └── groqService.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .gitignore
│   └── .env.example            # Create this with placeholder values
│
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Install: - [Node.js](https://nodejs.org/) (Node.js 18 or newer is
recommended for built-in `fetch`) - npm - A Groq API key

### 1. Clone the repository

``` bash
git clone <your-repository-url>
cd FoodRecepieApp
```

Replace `<your-repository-url>` with the URL of your GitHub repository.

### 2. Set up the backend

Open a terminal in the backend folder:

``` bash
cd backend-node
npm install
```

Create a `.env` file in `backend-node` with your own Groq credentials:

``` dotenv
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=your_available_groq_model
PORT=9998
```

Use a model currently available to your Groq account. Do not commit
`.env` or share your API key. The `.env.example` file may contain
placeholder values only.

Start the backend:

``` bash
npm run dev
```

The backend should start at `http://localhost:9998`.

Open `http://localhost:9998` in your browser to check that the API
server is running.

### 3. Set up the frontend

Open a second terminal and navigate to the frontend folder from the
project root:

``` bash
cd recepie-app-frontend
npm install
npm run dev
```

Vite prints the local URL where the frontend is running (often
`http://localhost:5173` or another available port).

The Express CORS configuration must allow the exact frontend origin
shown by Vite. If Vite uses a different port, update the allowed origin
in `backend-node/server.js` to match it.

## 🔌 API Endpoint

### Generate a recipe

-   **Method:** `POST`
-   **Path:** `/api/recipe`
-   **Local URL:** `http://localhost:9998/api/recipe`
-   **Request body:** JSON containing an `ingredients` array

Example request:

``` json
{
  "ingredients": ["chicken", "rice", "onion", "olive oil"]
}
```

The backend sends the ingredients to Groq and returns the generated
recipe text. The frontend displays that response.

## 🔐 Environment Variables and Security

-   Keep the actual Groq API key in `backend-node/.env`.
-   Ensure `.env` and `node_modules/` are listed in `.gitignore`.
-   Never place the Groq API key in React frontend code.
-   If a key is accidentally committed or exposed, revoke it and create
    a replacement.
-   Commit `.env.example` only if it contains placeholder values, never
    real credentials.

## 🗺️ Planned Improvements

These features are planned and are not described as implemented yet:

-   **Nutrition estimates per serving:** Generate practical ingredient
    quantities and a default serving count, then calculate estimated
    calories, protein, carbohydrates, fats, and other nutrients from
    those quantities using a nutrition data source. Values will be
    labeled as estimates.
-   **MongoDB:** Save recipes so users can revisit them later.
-   **Offline access:** Use IndexedDB to store saved recipes locally and
    service-worker caching to make the app shell available offline.
    Generating new AI recipes will still require an internet connection.
-   **Recipe formatting:** Improve the display of generated Markdown,
    including ingredient tables.

## 📌 Notes

This project is under active development. The backend has been migrated
from Spring Boot to Node.js and Express. MongoDB persistence, offline
recipe access, and nutrition calculation are planned future
improvements.
