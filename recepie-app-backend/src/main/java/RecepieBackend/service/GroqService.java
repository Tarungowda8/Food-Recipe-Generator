package RecepieBackend.service;

import RecepieBackend.config.GroqConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class GroqService {

    @Autowired
    private GroqConfig groqConfig;

    private final WebClient webClient = WebClient.builder()
            .baseUrl("https://api.groq.com/openai/v1")
            .build();

    public String generateRecipe(List<String> ingredients) {

        String ingredientsString = String.join(", ", ingredients);

        String prompt = """
                You are a professional chef.

                I have the following ingredients:
                %s

                Suggest one delicious recipe using some or all of these ingredients.

                You may include a few common pantry ingredients if required.

                Format the response in Markdown.

                Include:
                # Recipe Name

                ## Ingredients

                ## Instructions

                ## Cooking Time
                """.formatted(ingredientsString);

        Map<String, Object> requestBody = Map.of(
                "model", groqConfig.getModel(),
                "messages", List.of(
                        Map.of(
                                "role", "user",
                                "content", prompt
                        )
                )
        );

        Map response = webClient.post()
                .uri("/chat/completions")
                .header("Authorization", "Bearer " + groqConfig.getApiKey())
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(Map.class)
                .block();

        List choices = (List) response.get("choices");
        Map choice = (Map) choices.get(0);
        Map message = (Map) choice.get("message");

        return message.get("content").toString();
    }
}