package RecepieBackend.controller;

import RecepieBackend.service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class RecipeController {

    @Autowired
    private GeminiService geminiService;

    @GetMapping("/recipe")
    public String getRecipe() {

        return geminiService.generateRecipe();

    }

}