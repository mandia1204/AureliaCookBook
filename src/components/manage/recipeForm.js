import {bindable,customElement} from 'aurelia-framework';

@customElement('my-form')
export class RecipeForm{
  title = 'Manage Recipes';

  @bindable
  categories=[];
  @bindable
  recipe={};

  attached(){
    $("#category").val(this.recipe.category);
    $('select').material_select();
  }
}
