"use strict;"
// Function creates a directory for my files in this class
function showNav(){
    // links to the files for my directory
    const links =[
        {
          label: "Week1 notes",
          url: "week1/week1.html"
        }
        // {
        //   label: "Week2 notes",
        //   url: "week2/week2.html"
        // }
    ];    
    //finds the ordered list in the index page
    const ul= document.querySelector("ul");

     for(const f of links){
        //  creates the list item
         const linkitem = document.createElement("li");
         //creates an anchor and assigns it a href attribute
         const link = document.createElement("a");
         link.setAttribute("href", f.url);
         //Creates the label for the link
         link.textContent = f.label;
         linkitem.appendChild(link);
         ul.appendChild(linkitem);
    }
    
}