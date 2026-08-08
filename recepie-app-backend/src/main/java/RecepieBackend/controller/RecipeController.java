package RecepieBackend.controller;

import RecepieBackend.dto.RecipeRequest;
import RecepieBackend.service.GroqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class RecipeController {

    @Autowired
    private GroqService groqService;

    @PostMapping("/recipe")
    public String getRecipe(@RequestBody RecipeRequest request) {

        return groqService.generateRecipe(request.getIngredients());

    }
}