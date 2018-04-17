import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../model/recipe';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {

  recipes: Recipe[];

  recipe_in_progress: Recipe;

  constructor() {
    this.recipe_in_progress = Recipe.createBlank();
    this.recipes = [
      new Recipe('Mac and Cheese',
        'This a one of the best Mac and Cheese recipes! Other than the one that my grandmother made. Now that is the best!',
        5, 45, null, null, null),
      new Recipe('Fried Chicken',
        'This is a southern recipe that is a fan favorite of my family. I personally love me some fried chicken. Especially this one',
        4, 20, null, null, null),
      new Recipe('Banana Pudding',
        'I love love love love me some banana pudding. It\'s like the best comfort food, and it\'s always a hit at the family cookouts. ',
        3, 30, null, null, null),
      new Recipe('Southern Cabbage',
        'I love love love love loooovvve cabbage. Especially with rice. I really love vegetables but cabbage is the winner.',
        4, 10, null, null, null)
    ];
  }

  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }
}
