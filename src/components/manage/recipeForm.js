import {bindable,customElement} from 'aurelia-framework';

@customElement('my-form')
export class RecipeForm{
  title = 'Manage Recipes';

  @bindable categories=[];
  @bindable recipe={};
  @bindable save: Function;

  callSave(){
    this.save();
  }

  deleteIngredient(index){
    this.recipe.ingredients.splice(index, 1);
  }

  updateIngredient(index,value){
    this.recipe.ingredients[index].name = value;
  }

  addIngredient(name){
    this.recipe.ingredients = this.recipe.ingredients.concat([{name:name}])
  }

  attached(){
    $("#category").val(this.recipe.category);
    $('select').material_select();
  }
}
