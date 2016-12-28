import {bindable,customElement} from 'aurelia-framework';

@customElement('my-form')
export class RecipeForm{
  title = 'Manage Recipes';
  food = [
    { id: 0, name: 'Pizza' },
    { id: 1, name: 'Cake' },
    { id: 2, name: 'Steak' },
    { id: 3, name: 'Pasta' },
    { id: 4, name: 'Fries' }
  ];
  selectedMeal = null;

  @bindable
  categories=[];
  @bindable
  recipe={};


  attached(){
    //$("#category").val(this.recipe.category);
    $('select').material_select();
  }
}
