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
let previousPage='';

searchButton.addEventListener("click", () => {
    // console.log("button pressed")
    //clear out recipe results for a new search
    document.getElementById("results").style.display="none";
    document.getElementById("recipe").style.display="none";
    document.getElementById("picture").style.display="none";
    
    ingredient = document.getElementById("ingredient").value;        
    sendApiRequest(ingredient);   
})

async function sendApiRequest(ingredient){
    if (!ingredient){
        document.getElementById("ingredient").style.background="yellow"; 
        document.getElementById("ing-input").innerText="You must enter an ingredient";
        document.getElementById("ing-input").style.color="red";
      }else{
          document.getElementById("ingredient").style.background="white";  
          document.getElementById("ing-input").innerText="What ingredient do you have: ";
          document.getElementById("ing-input").style.color="black";     

        let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=261434f1&app_key=01ef60715ec3c640fca8b506d03c485d`);
        let recipeList = await response.json();    
        handleResponse(recipeList, ingredient);
    }    
}
async function sendApiRequest_nextPage(url){
    let response = await fetch(`${url}`);
    let recipeList = await response.json();
    globalRecipeList = recipeList;  
    handleResponse(recipeList, ingredient);    
}

function handleResponse(recipeList, ingredient){
//    console.log(recipeList.count);
    if(!recipeList.count){
    document.getElementById("results").innerHTML = "Sorry, no results were found";
    document.getElementById("results").style.display="block";
   }else{
    globalRecipeList = recipeList;      
    var list= "<h2>Results for " + ingredient + ":</h2><ul id='recipe-list'>";        
     
//build list of recipes
    recipeList.hits.forEach(element => {
        list += `<li><a href="#" class="recipeLink">${element.recipe.label}</a></li>`;
    });
    list += `</ul>`;
    list += `<br><p><a href="#"><a href="#">Next >></a></p><br>`;
  
//display the list
    document.getElementById("results").innerHTML = list;
    document.getElementById("results").style.display="block";
    }
}


 //when a recipe is clicked, boxes appear with information about that recipe
document.querySelector("body").addEventListener('click', function(e) {
    var anchor = e.target.closest('a').text;
    if(anchor!==null){
        if(anchor === "Next >>"){            
            // console.log(globalRecipeList._links.next.href);
            // previousPage=globalRecipeList;
            // console.log(previousPage);
            sendApiRequest_nextPage(globalRecipeList._links.next.href);
        }
        // else if (anchor === "<< Previous" && previousPage){
        //     console.log(previousPage);
        //     sendApiRequest_nextPage(previousPage);
        // }

// a recipe title was clicked on
        globalRecipeList.hits.forEach(element => {
            if(anchor === element.recipe.label){  
                document.getElementById("recipe").style.display="block";
                document.getElementById("recipe").innerHTML=`<h2>${element.recipe.label}</h2>`;
                var list=`<h2>${element.recipe.label}</h2><ul>`;
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
