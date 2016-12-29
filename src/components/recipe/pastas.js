import recipeApi from '../../api/recipeApi';
import {computedFrom} from 'aurelia-framework';

export class Pastas{
  title = "Nothing says Italy like its food, and nothing says Italian food like pasta. Pasta is integrant part of \
                  Italys food history Wherever Italians immigrated they have brought their pasta along, so much so today \
                  it can be considered a staple of international cuisine.";

  recipes = [];
  recipeFilter ="";
  recommendedFilter =false;

  @computedFrom('recipeFilter','recommendedFilter','recipes')
  get filteredRecipes(){
    const filters = {"name":this.recipeFilter.toLowerCase(),"onlyRecommended":this.recommendedFilter};
    return this.recipes.filter(r=> this.filterRecipe(r,filters));
  }

  filterRecipe(recipe,f){
    return (recipe.name.toLowerCase().indexOf(f.name)!=-1)
        && (!f.onlyRecommended || recipe.recommended==true);
  }

  openDeleteModal(id){
    this.selectedRecipeId.value = id;
    this.confirmDeleteDialog.modal.open();
  }

  deleteRecipe(){
    let id = this.selectedRecipeId.value;
    recipeApi.deleteRecipe(id)
      .then(()=>{
        this.recipes = this.recipes.filter(r=>r._id!=id);
        Materialize.toast('Recipe Deleted!', 2000, 'rounded');
      });
  }

  activate(){
    $('.modal').modal();
    return recipeApi.getRecipesByCategory("pastas").then(response=>this.recipes=response.data);
  }
}
