import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../model/recipe';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent {

  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('Mac and Cheese',
        'This a one of the best Mac and Cheese recipes! Other than the one that my grandmother made. Now that is the best!',
        null, null, null),
      new Recipe('Fried Chicken',
        'This is a southern recipe that is a fan favorite of my family. I personally love me some fried chicken.',
        null, null, null),
      new Recipe('Banana Pudding',
        'I love love love love me some banana pudding. It\'s like the best comfort food',
        null, null, null),
      new Recipe('Southern Cabbage',
        'I love love love love loooovvve cabbage. Especially with rice. I really love vegetables but cabbage is the winner.',
        null, null, null)
    ];
  }

}
