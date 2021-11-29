'use strict;'

function handleResponse(json){
   const movies=json.movie_results;
    // console.log('this is the json data', movies);
    var list='<ul>';
    for(const movie in movies){
        console.log(`${movie}: ${movies[movie].title}`);
        list += `<li>${movies[movie].title}</li>`;
    }
    list += `</ul>`;
    document.getElementById("movie_list").innerHTML=list;
}

fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-byyear&page=1&year=1977", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
		"x-rapidapi-key": "986156c66bmsh1dc94318b470e23p1c6b23jsn0ec68d8c96eb"
	}
})
.then(response => response.json())
.then(handleResponse)   
