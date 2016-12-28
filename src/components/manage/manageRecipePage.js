import recipeApi from '../../api/recipeApi';
import {Router} from 'aurelia-router';

export class ManageRecipePage{
  categories = [];
  recipe={};

  static inject() { return [Router]; }

  constructor(router){
    this.router = router;
  }

  save(){
    recipeApi.saveRecipe(this.recipe).then(()=>{
      Materialize.toast('Recipe Saved!', 2000);
      this.router.navigate(this.recipe.category.toLowerCase());
    }
    );
  }

  activate(params){
    if(params.id){
      recipeApi.getRecipe(params.id).then(response=>this.recipe = response.data);
    }else{
      const category = !params.category?"Pastas":params.category;
      this.recipe = {name:"",chef:"",category:category,url:"",ingredients:[],recommended:false};
    }

    return recipeApi.getAllCategories().then(response=>this.categories=response.data);
  }
}
