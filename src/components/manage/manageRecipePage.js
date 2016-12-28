import recipeApi from '../../api/recipeApi';
export class ManageRecipePage{
  categories = [];
  recipe={};

  save(){
    recipeApi.saveRecipe(this.recipe).then(()=>Materialize.toast('Recipe Saved!', 2000));
  }

  activate(params){
    if(params.id){
      this.recipe = {name:"Jose Alanya",chef:"The cheff",category:"Salads",recommended:true};
    }else{
      const category = !params.category?"Pastas":params.category;
      this.recipe = {name:"",chef:"",category:category,url:"",ingredients:[],recommended:false};
    }
    
    return recipeApi.getAllCategories().then(response=>this.categories=response.data);
  }
}
