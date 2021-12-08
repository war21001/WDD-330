"use strict;"

// pagination code from developer.edamam.com
// "_links" : {
//     "next" : {
//       "title" : "Next page",
//       "href" : "https://api.edamam.com/api/food-database/v2/parser?..."
//     }
// }

let searchButton = document.querySelector("#search");
let globalRecipeList = [];
let APP_ID="261434f1";
let APP_KEY = "01ef60715ec3c640fca8b506d03c485d";
let ingredient ="";
// let previousPage='';

searchButton.addEventListener("click", () => {
    console.log("button pressed")
    //clear out recipe results for a new search
    document.getElementById("recipe-title").style.display="none";
    document.getElementById("recipe").style.display="none";
    document.getElementById("picture").style.display="none";
    
    ingredient = document.getElementById("ingredient").value;        
    
    sendApiRequest(ingredient);
})

async function sendApiRequest(ingredient){
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=261434f1&app_key=01ef60715ec3c640fca8b506d03c485d`);
    let recipeList = await response.json();    
    handleResponse(recipeList, ingredient);    
}
async function sendApiRequest_nextPage(url){
    // previousPage=url;
    
    let response = await fetch(`${url}`);
    // console.log (response);
    let recipeList = await response.json();
    // console.log(data);
    globalRecipeList = recipeList;  
    handleResponse(recipeList, ingredient);    
}


function handleResponse(recipeList, ingredient){
    //  recipeList=json.hits;
    //  console.log('this is the json data', recipeList);  
    globalRecipeList = recipeList;   
    
     var list= "<h2>Results for " + ingredient + ":</h2><ul id='recipe-list'>";        
     
//build list of recipes
    recipeList.hits.forEach(element => {
        // console.log(element);
        list += `<li><a href="#" class="recipeLink">${element.recipe.label}</a></li>`;
    });

     list += `</ul>`;
     list += `<br><p><a href="#"><a href="#">Next >></a></p><br>`;
  
//display the list
     document.getElementById("results").innerHTML = list;
     document.getElementById("results").style.display="block";

}


 //when a recipe is clicked, boxes appear with information about that recipe
document.querySelector("body").addEventListener('click', function(e) {
    // console.log("made it here");
    // console.log(globalRecipeList._links);
    var anchor = e.target.closest('a').text;

    console.log(anchor);
    if(anchor!==null){
        if(anchor === "Next >>"){            
            // previousPage=globalRecipeList._links.next.href;
            // console.log(globalRecipeList._links.next.href);
            sendApiRequest_nextPage(globalRecipeList._links.next.href);
        }
        // else if (anchor === "<< Previous" && previousPage){
        //     console.log('previous');
        //     console.log(previousPage);
        //     sendApiRequest_nextPage(previousPage);
        // }

        globalRecipeList.hits.forEach(element => {
            // console.log(element.recipe.label);
            if(anchor === element.recipe.label){  
                document.getElementById("recipe-title").style.display="block";
                document.getElementById("recipe-title").innerHTML=`<h2>${element.recipe.label}</h2>`;
                document.getElementById("recipe").style.display="block";
                var list='<ul>';
                for(const ingredient in element.recipe.ingredientLines){
                    list += `<li>${element.recipe.ingredientLines[ingredient]}</li>`;
                }
                list += `</ul>`;
                list += `<br><p>Get the instructions <a href=${element.recipe.url}>Here</a></p>`;
                document.getElementById("recipe").innerHTML = list;
                
                document.getElementById("picture").style.display="block";
                document.getElementById("picture").innerHTML=`<img src=${element.recipe.image} alt="picture from edmam site">`;
            }
        });
    }
}, false);





// function clickButton(){
//     //clear out recipe results for a new search
//     document.getElementById("recipe-title").style.display="none";
//     document.getElementById("recipe").style.display="none";
//     document.getElementById("picture").style.display="none";
    
//     let ingredient = document.getElementById("ingredient").value;    
    
    // let url="https://edamam-recipe-search.p.rapidapi.com/search?q=" + ingredient;
    // console.log(url);
    //search API for recipes
    // fetch(url, {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
    //         "x-rapidapi-key": "986156c66bmsh1dc94318b470e23p1c6b23jsn0ec68d8c96eb"
    //     }


    // })
    
    // .then(response => response.json())
    // .then(handleResponse)   
   
    //output list of recipes in results section
    // document.getElementById("results").style.display="block";
    // var list= "<h2>Results for " + ingredient + ":</h2><ul id='recipe-list'></ul>";

    //      document.getElementById("results").innerHTML=list;
    
    // console.log(ingredient);
// }
