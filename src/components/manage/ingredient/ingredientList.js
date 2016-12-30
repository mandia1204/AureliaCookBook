import {bindable,customElement} from 'aurelia-framework';

@customElement('ingredient-list')
export class IngredientList{
  @bindable ingredients=[];
  editIndex=-1;

  edit(index){
    this.editIndex= index;
  }

  cancel(){
    this.editIndex= -1;
  }

  delete(index){
    alert(index);
  }
}
