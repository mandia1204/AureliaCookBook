import $ from 'jquery';
import config from './apiConfig';
/* eslint-disable no-console */

class RecipeApi {

  getRecipesByCategory(category){
    let url = `${config.recipeUrl}/${category}`;
    return new Promise((resolve, reject)=>{
        $.get(url).then(resolve,reject);
    });
  }

  getRecipe(id){
    let url = `${config.recipeUrl}/${id}`;

    return new Promise((resolve, reject)=>{
        $.get(url).then(resolve,reject);
    });
  }

  saveRecipe(recipe) {
    let method = "POST";
    let url = config.recipeUrl;

    if(recipe._id){
      url = url + '/' + recipe._id;
      method = "PUT";
    }

    return new Promise((resolve, reject)=>{
      $.ajax({
          url: url,
          type: method,
          contentType: "application/json",
          data: JSON.stringify(recipe)
      }).then(resolve,reject);
    });
  }

  deleteRecipe(recipeId){
    if(recipeId){
      return new Promise((resolve, reject)=>{
        $.ajax({
            url: config.recipeUrl + '/' + recipeId,
            type: 'DELETE',
            contentType: "application/json"
        }).then(resolve,reject);
      });
    }
  }

  getAllCategories() {
    return new Promise((resolve, reject)=>{
        $.get(config.categoryUrl).then(resolve,reject);
    });
  }

  getAllChefs() {
    return new Promise((resolve, reject)=>{
        $.get(config.chefUrl).then(resolve,reject);
    });
  }
}

export default RecipeApi;
