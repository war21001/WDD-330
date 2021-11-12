"use strict;"
// Function creates a directory for my files in this class
function showNav(){
    // links to the files for my directory
    const links =[
        {
          label: "Week 1 Notes",
          url: "Week1/week1.html"
        },
        {
          label: "Week 2 Notes",
          url: "Week2/week2.html"
        },
        {
          label: "Week 3 Notes",
          url: "Week3/week3.html"
        },
        {
          label: "Week 4 Notes",
          url: "Week4/week4.html"
        },
        {
          label: "Week 5 Notes",
          url: "Week5/week5.html"
        },
        {
          label: "To Do List",
          url: "Todo/todo.html"
        },
        {
          label: "Week 7 Notes",
          url: "Week7/week7.html"
        },        
        {
          label: "Week 9 Notes",
          url: "Week9/week9.html"
        },
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