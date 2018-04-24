import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';

@Injectable()
export class RecipeService {

  recipes: Recipe[];

  constructor() {
    this.recipes = [
      Recipe.recipeFromJSON({
        'id' : 1,
        'title': 'Mac and Cheese',
        'description': 'This is one of the best mac and cheese recipes that I have tasted, other than the one my grandmother used to make.',
        'feeds_this_many': 5,
        'preparation_time': 45,
        'ingredients': [
            {'ingredient': 'Gouda', 'measure': '8oz'},
            {'ingredient': 'Havariti', 'measure': '8oz'},
            {'ingredient': 'Sharp Cheddar', 'measure': '8oz'},
            {'ingredient': 'Cream Cheese', 'measure': '4oz'},
            {'ingredient': 'Elbow Macaroni Pasta', 'measure': '1lb'},
            {'ingredient': 'Water', 'measure': '8cups'},
            {'ingredient': 'Evaporated Milk', 'measure': '1cup'},
            {'ingredient': 'Unsalted butter', 'measure': '4tbsp'},
            {'ingredient': 'All purpose flour', 'measure': '2tbsp'},
            {'ingredient': 'Mozzarella cheese shredded', 'measure': '4oz'},
            {'ingredient': 'Colby jack cheese shredded', 'measure': '4oz'},
            {'ingredient': 'Salt', 'measure': '1tsp'},
            {'ingredient': 'Onion powder', 'measure': '1tsp'},
            {'ingredient': 'Garlic powder', 'measure': '1tsp'},
            {'ingredient': 'Black Pepper', 'measure': '1tsp'},
            {'ingredient': 'Smoked Paprika', 'measure': '1tsp'}
        ],
        'instructions': [
            {'instruction': 'Pour 8 cups of water into a pot, and sprinkle in 1 tsp of salt.', 'photo': null},
            {'instruction': 'Bring the water to a boil, over high heat, then add in the elbow macaroni pasta.', 'photo': null},
            {'instruction': 'Cook the pasta until it is al dente ( cooked but still firm), then drain the pasta and rise it under cool water.', 'photo': null},
            {'instruction': 'Place a large sauce pan over medium heat, then toss in 4 tbsp of butter.', 'photo': null},
            {'instruction': 'Melt the butter down completely, then sprinkle in 2 tbsp of flour.', 'photo': null},
            {'instruction': 'Whisk the ingredients until they are well incorporated, then pour in the evaporated milk and half & half.', 'photo': null},
            {'instruction': 'Whisk the ingredients, and continue to cook it over medium heat for about 3 minutes.', 'photo': null},
            {'instruction': 'Reduce the heat to low, then add in the cream cheese, gouda, and havarti.', 'photo': null},
            {'instruction': 'Stir the mixture until the cheese melts, and you have a nice creamy cheese sauce.', 'photo': null},
            {'instruction': 'Sprinkle in the seasoning salt, pepper, paprika, onion powder, and garlic powder. Mix until well incorporated.', 'photo': null},
            {'instruction': 'Toss the macaroni pasta into a large pot, and pour in the cheese sauce.', 'photo': null},
            {'instruction': 'Stir everything until it is well combined, then pour half of the macaroni and cheese mixture into a 9 x 13 bake dish.', 'photo': null},
            {'instruction': 'Sprinkle some of the sharp cheddar, mozzarella, and colby jack on top of the mac and cheese.', 'photo': null},
            {'instruction': 'Next add the remaining macaroni and cheese into the bake dish, and top it off with the remaining cheese.', 'photo': null},
            {'instruction': 'Bake the macaroni and cheese, in a preheated oven, on 350 F for 25-30 minutes.', 'photo': null},
            {'instruction': 'Remove from the oven, and let sit for 5 to 10 minutes.', 'photo': null},
            {'instruction': 'Serve and enjoy!', 'photo': null}
        ],
        'cover_photo': null,
        'keywords': [
            'Southern Comfort Food', 'foodie', 'southern', 'holiday'
        ]
      })
    ];
  }

  getAllRecipes(): Promise<Recipe[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.recipes);
      }, 2000);
    });
  }

  getRecipeById(recipe_id: number): Promise<Recipe> {
    return new Promise((resolve, reject) => {
      for (const recipe of this.recipes) {
        if (recipe.id === recipe_id) {
          resolve(recipe);
          return;
        }
      }
      reject(Error('No recipe exists with that ID.'));
    });
  }

}
