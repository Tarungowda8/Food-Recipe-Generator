import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ recipe }) {
    return (
       
        <section>
            <h2 className="recipe-title">
    👨‍🍳          Chef AI Recommends
            </h2>

            <article
                className="suggested-recipe-container"
                aria-live="polite"
            >
                <ReactMarkdown>
                    {recipe}
                </ReactMarkdown>
            </article>
        </section>
    );
}