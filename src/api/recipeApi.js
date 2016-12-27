import $ from 'jquery';
import config from './apiConfig';
/* eslint-disable no-console */

class RecipeApi {
  static getAllRecipes() {
    return new Promise((resolve, reject)=>{
        $.get(config.recipeUrl).then(resolve,reject);
    });
  }

  static saveRecipe(recipe) {
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

  static deleteRecipe(recipeId){
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

  static getAllCategories() {
    return new Promise((resolve, reject)=>{
        $.get(config.categoryUrl).then(resolve,reject);
    });
  }

  static getAllChefs() {
    return new Promise((resolve, reject)=>{
        $.get(config.chefUrl).then(resolve,reject);
    });
  }
}

export default RecipeApi;
