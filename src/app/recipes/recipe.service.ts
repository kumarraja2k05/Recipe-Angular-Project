import { EventEmitter,Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Kheer', 
            'Tasty Kheer', 
            'https://www.indianveggiedelight.com/wp-content/uploads/2020/04/rice-kheer.jpg',
            [
                new Ingredient('Rice bowl',1),
                new Ingredient("Sugar Bowl",0.5),
                new Ingredient("Milk Bowl",2)
            ]),

        new Recipe(
            'Gulab Jamun', 
            'Indian Sweet', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gulab_jamun_%28Gibraltar%2C_November_2020%29.jpg/250px-Gulab_jamun_%28Gibraltar%2C_November_2020%29.jpg',
            [
                new Ingredient("Gulab Jamun Packet",1),
                new Ingredient("Sugar Bowl",2),
                new Ingredient("Water Bowl",2),
                new Ingredient("Milk Bowl",0.5),
            ])
      ];

    constructor(private slService: ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}