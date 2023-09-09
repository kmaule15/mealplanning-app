import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is just a test',
      'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is just another test',
      'https://www.thespruceeats.com/thmb/TTDBgVJBZ5FvB7hp1b5JwfXSy18=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-korean-bibimbap-recipe-2118765-hero-01-091c0e0f8c20426d8f70747955efa61d.jpg'
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice(); //returns a new array which is an exact copy of the array in this file
  }
}