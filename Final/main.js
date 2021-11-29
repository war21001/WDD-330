"use strict;"

function clickButton(){
    let ingredient = document.getElementById("ingredient").value;
    let url="https://edamam-recipe-search.p.rapidapi.com/search?q=" + ingredient;
    // console.log(url);
    //search API for recipes
    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
            "x-rapidapi-key": "986156c66bmsh1dc94318b470e23p1c6b23jsn0ec68d8c96eb"
        }
    })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.error(err);
    // });
    .then(response => response.json())
    .then(handleResponse)   
   
    //output list of recipes in results section
    document.getElementById("results").style.display="block";
    var list= "<h2>Results for " + ingredient + ":</h2><ul id='recipe-list'></ul>";

         document.getElementById("results").innerHTML=list;
    
    // console.log(ingredient);
}

function handleResponse(json){
    const recipeList=json.hits;
     console.log('this is the json data', recipeList);
     var list='<ul>';
     for(const rec in recipeList){
       
         list += `<li><a href="#">${recipeList[rec].recipe.label}</a></li>`;
     }
     list += `</ul>`;
     document.getElementById("recipe-list").innerHTML = list;
 }



