import recipeApi from '../../api/recipeApi';
import {computedFrom} from 'aurelia-framework';

export class Pastas{
  title = "Nothing says Italy like its food, and nothing says Italian food like pasta. Pasta is integrant part of \
                  Italys food history Wherever Italians immigrated they have brought their pasta along, so much so today \
                  it can be considered a staple of international cuisine.";

  recipes = [];
  recipeFilter ="";
  recommendedFilter =false;

  alerta(){
    alert(this.recommendedFilter);
  }

  @computedFrom('recipeFilter','recommendedFilter')
  get filteredRecipes(){
    const filters = {"name":this.recipeFilter.toLowerCase(),"onlyRecommended":this.recommendedFilter};
    return this.recipes.filter(r=> this.filterRecipe(r,filters));
  }

  filterRecipe(recipe,f){
    return (recipe.name.toLowerCase().indexOf(f.name)!=-1)
        && (!f.onlyRecommended || recipe.recommended==true);
  }

  activate(){
    return recipeApi.getRecipesByCategory("pastas").then(response=>this.recipes=response.data);
  }
}
