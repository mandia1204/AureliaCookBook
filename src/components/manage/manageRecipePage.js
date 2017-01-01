import RecipeApi from '../../api/recipeApi';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(RecipeApi,Router)
export class ManageRecipePage{
  categories = [];
  recipe={};

  constructor(recipeApi,router){
    this.recipeApi = recipeApi;
    this.router = router;
  }

  save(){
    this.recipeApi.saveRecipe(this.recipe).then(()=>{
      Materialize.toast('Recipe Saved!', 2000, 'rounded');
      this.router.navigate(this.recipe.category.toLowerCase());
    }
    );
  }

  activate(params){
    if(params.id){
      this.recipeApi.getRecipe(params.id).then(response=>this.recipe = response.data);
    }else{
      const category = !params.category?"Pastas":params.category;
      this.recipe = {name:"",chef:"",category:category,url:"",ingredients:[],recommended:false};
    }

    return this.recipeApi.getAllCategories().then(response=>this.categories=response.data);
  }
}
