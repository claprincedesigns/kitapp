import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.sass']
})
export class RecipeSummaryComponent {
  @Input() recipe: Recipe;

  @Output() userClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  userClicked() {
    this.userClick.emit(this.recipe.id);
  }
}
