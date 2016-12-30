import {bindable,customElement} from 'aurelia-framework';

@customElement('add-ingredient')
export class AddIngredient{
  @bindable add: Function;

  callAdd(){
    this.add({name:this.ingredientAdd.value});
    this.ingredientAdd.value="";
  }
}
