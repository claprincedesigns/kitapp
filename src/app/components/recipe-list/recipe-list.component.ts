import { Component, OnInit } from '@angular/core';


import { Recipe } from '../../model/recipe';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {
  recipes: Recipe[];

  recipe_in_progress: Recipe;

  constructor(private router: Router,
    private recipe_service: RecipeService) {
  }

  ngOnInIt() {
    this.recipe_service.getAllRecipes()
    .then((recipes) => this.recipes = recipes);
  }
  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

  userClickedOnRecipe(recipe_id): void {
    this.router.navigateByUrl('/recipes/' + recipe_id);
  }

  addNewRecipe(): void {
    this.router.navigateByUrl('/editnewrecipe');
  }
}
