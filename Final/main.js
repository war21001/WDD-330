"use strict;"

// pagination code from developer.edamam.com
// "_links" : {
//     "next" : {
//       "title" : "Next page",
//       "href" : "https://api.edamam.com/api/food-database/v2/parser?..."
//     }
// }

var recipeList = [];


function clickButton(){
    //clear out recipe results for a new search
    document.getElementById("recipe-title").style.display="none";
    document.getElementById("recipe").style.display="none";
    document.getElementById("picture").style.display="none";
    
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
    
    .then(response => response.json())
    .then(handleResponse)   
   
    //output list of recipes in results section
    document.getElementById("results").style.display="block";
    var list= "<h2>Results for " + ingredient + ":</h2><ul id='recipe-list'></ul>";

         document.getElementById("results").innerHTML=list;
    
    // console.log(ingredient);
}

function handleResponse(json){
     recipeList=json.hits;
     console.log('this is the json data', recipeList);
     var list='<ul>';
     for(const rec in recipeList){
       
         list += `<li><a href="#" class="recipeLink">${recipeList[rec].recipe.label}</a></li>`;
     }
     list += `</ul>`;
     list += `<br><p><a href='#'>Next >></a></p><br>`;
     document.getElementById("recipe-list").innerHTML = list;
 }

document.querySelector("body").addEventListener('click', function(e) {
    // console.log("made it here");

    var anchor = e.target.closest('a').text;
    // console.log(anchor);
    if(anchor !==null){
        for(const rec in recipeList){
            if(anchor === recipeList[rec].recipe.label){  
                document.getElementById("recipe-title").style.display="block";
                document.getElementById("recipe-title").innerHTML=`<h2>${recipeList[rec].recipe.label}</h2>`;
                document.getElementById("recipe").style.display="block";
                var list='<ul>';
                for(const ingredient in recipeList[rec].recipe.ingredientLines){
                    list += `<li>${recipeList[rec].recipe.ingredientLines[ingredient]}</li>`;
                }
                list += `</ul>`;
                list += `<br><p>Get the instructions <a href=${recipeList[rec].recipe.url}>Here</a></p>`;
                document.getElementById("recipe").innerHTML = list;
                
                document.getElementById("picture").style.display="block";
                document.getElementById("picture").innerHTML=`<img src=${recipeList[rec].recipe.image} alt="picture from edmam site">`;
            }
        }
    }
}, false);