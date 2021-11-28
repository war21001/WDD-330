"use strict;"

function clickButton(){
    let ingredient = document.getElementById("ingredient").value;

    //search API for recipes

    fetch("https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?ingredients=apples&number=5", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
            "x-rapidapi-key": "986156c66bmsh1dc94318b470e23p1c6b23jsn0ec68d8c96eb"
        }
    })
    .then(response => response.json())
    .then(handleResponse)

    // .then(response => response.json())
    // .then(handleResponse)   
   
    //output list of recipes in results section
    document.getElementById("results").style.display="block";
    var list= "<h2>Results for " + ingredient + ":</h2><ul id='recipe-list'></ul>";

         document.getElementById("results").innerHTML=list;
    
    console.log(ingredient);
}

function handleResponse(json){
    const recipeList=json.items['properties'];
     console.log('this is the json data', recipeList);
     var list='<ul>';
     for(const rec in recipeList){
         console.log(`${rec}: ${recipeList[rec].title}`);
        //  list += `<li>${recipeList[rec].title}</li>`;
     }
     list += `</ul>`;
     document.getElementById("recipe-list").innerHTML = list;
 }



