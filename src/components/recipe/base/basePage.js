import recipeApi from '../../../api/recipeApi';
import {computedFrom,bindable} from 'aurelia-framework';

export class BasePage{
  @bindable title = "";
  @bindable body = "";
  @bindable page = "";

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

  attached(){
    $('.modal').modal();
    return recipeApi.getRecipesByCategory(this.page.toLowerCase()).then(response=>this.recipes=response.data);
  }
}
