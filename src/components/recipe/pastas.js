import recipeApi from '../../api/recipeApi';

export class Pastas{
  title = "Nothing says Italy like its food, and nothing says Italian food like pasta. Pasta is integrant part of \
                  Italys food history Wherever Italians immigrated they have brought their pasta along, so much so today \
                  it can be considered a staple of international cuisine.";

  recipes = [];

  activate(){
    return recipeApi.getAllRecipes().then(response=>this.recipes=response.data);
  }
}
