'use strict;'

var myTaskList = document.getElementsByTagName("LI");
upDateTaskCnt();  
//add a button to task item
for (var i = 0; i < myTaskList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myTaskList[i].appendChild(span);
}
var close = document.getElementsByClassName("close");

for ( var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.className = "delete";
    div.style.display = "none";

    upDateTaskCnt();  
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    upDateTaskCnt();  
  }
}, false);

// import ToDo from "./todo.js";

// // create toDoList
// var toDoList = [];


// toDoList[toDoList.length++] = new ToDo("0", "laundry", false, false);
// // toDoList[listCnt].addTodo();
// // console.log(listCnt);
// // toDoList[listCnt].getTodos();
// toDoList[0].markComplete();
// // toDoList[listCnt].getTodos();

// toDoList[toDoList.length++] = new ToDo("1", "dishes", false, false);
// // toDoList[listCnt].addTodo();
// // toDoList[listCnt].getTodos();
// // toDoList[listCnt].markComplete();
// // // toDoList[listCnt].getTodos();
// toDoList[1].deleteToDo();

// toDoList[toDoList.length++] = new ToDo("2", "dust", false, false);

// for(var i=0;i<toDoList.length;i++){
//     toDoList[i].getTodos();
// }

// // toDoList[1].getTodos();
// // toDoList[2].getTodos();

// // function addNewTask(){
// //     var li = document.createElement("li");
// //     var inputValue = document.getElementById("myInput")

// // }


function addNewTask(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    var task = document.createTextNode(inputValue);
    li.appendChild(task);
    
    if(inputValue === ''){
        alert("you must write something!");
    }else{
        document.getElementById("taskList").appendChild(li);
    }

    document.getElementById("newTask").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode(`\u00D7`);
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (var i=0; i < close.length; i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display="none";            
        }
    }
    upDateTaskCnt();  
  }
  
  function toggleView(view){
    var viewAll = document.getElementById("all");
    var viewActive = document.getElementById("active");
    var viewCompleted = document.getElementById("completed");

    if (view === 'all'){
        viewCompleted.style.display= "none";
        viewActive.style.display= "none";
        viewAll.style.display="block";
        upDateTaskCnt();  
        
    }
    if(view === 'active'){
        viewActive.style.display="block";
        viewAll.style.display="none";
        viewCompleted.style.display= "none"; 
        upDateTaskCnt();     
    }
    if(view === 'completed'){
        viewActive.style.display="none";
        viewAll.style.display="none";
        viewCompleted.style.display= "block"; 
        upDateTaskCnt();  
    }
  }

  function upDateTaskCnt(){
    var myTaskList = document.getElementsByTagName("LI");
    var taskCnt =  myTaskList.length;
    console.log(taskCnt);
    for (var i=0; i < myTaskList.length; i++){
        console.log("for loop");
        if (myTaskList[i].classList.contains('checked')  || (myTaskList[i].classList.contains('delete'))){
            taskCnt--;
    }}
    console.log(taskCnt);
    document.getElementById("taskCnt").innerHTML = taskCnt + " Tasks Left";

    
  }