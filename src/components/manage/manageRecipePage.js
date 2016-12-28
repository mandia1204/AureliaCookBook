import recipeApi from '../../api/recipeApi';
export class ManageRecipePage{
  categories = [];
  recipe={};

  save(){
    recipeApi.saveRecipe(this.recipe).then(()=>Materialize.toast('Recipe Saved!', 2000));
  }

  activate(params){
    if(params.id){
      recipeApi.getRecipe(params.id).then(response=>this.recipe = response.data);
    }else{
      const category = !params.category?"Pastas":params.category;
      this.recipe = {name:"",chef:"",category:category,url:"",ingredients:[],recommended:false};
    }

    return recipeApi.getRecipesByCategory("pastas").then(response=>this.categories=response.data);
  }
}
