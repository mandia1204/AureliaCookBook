import {bindable,customElement} from 'aurelia-framework';

@customElement('ingredient-list')
export class IngredientList{
  @bindable ingredients=[];
  @bindable delete: Function;
  @bindable update: Function;
  editIndex=-1;
  nameElements = [];

  edit(index){
    this.editIndex= index;
  }

  cancel(){
    this.editIndex = -1;
  }

  callDelete(index){
    this.delete({index:index});
    this.cancel();
  }

  callUpdate(index){
    this.update({index:index,value:this.nameElements[index].value});
    this.cancel();
  }
}
