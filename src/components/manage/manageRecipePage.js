import recipeApi from '../../api/recipeApi';
export class ManageRecipePage{
  categories = [];
  recipe={};

  constructor(){

  }

  activate(params){
    console.log(params.category);
    if(params.id){
      this.recipe = {name:"Jose Alanya",chef:"The cheff",category:"Salads",recommended:true};
    }else{
      this.recipe = {name:"",chef:"",category:params.category,url:"",ingredients:[],recommended:false};
    }
    return recipeApi.getAllCategories().then(response=>this.categories=response.data);
  }
}
