'use strict;'
// import ToDo from "./todo.js";


var myTaskList = document.getElementsByTagName("LI");
  
var todoList = [];

for (var i=0; i<myTaskList.length;i++){
    // console.log(myTaskList[i].innerHTML);
    todoList.push({
        key: myTaskList[i].innerHTML,
        deleted: false,
        checked: false,        
    });

    if(myTaskList[i].classList.contains('checked')){
        todoList[i].checked=true;
    }
    if(myTaskList[i].style.display==='none'){
        todoList[i].deleted=true;
    }
 }


//add a button to task item
for (var i = 0; i < myTaskList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myTaskList[i].appendChild(span);

}
//hide task when button is clicked
var close = document.getElementsByClassName("close");

for ( var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    div.className="deleted"; 
    upDateTaskCnt();
  }
}
var list = document.querySelector('ul');
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === 'LI') {
      
    ev.target.classList.toggle('checked'); 
    
     upDateTaskCnt();
  }
}, false);

document.getElementById('addBtn').addEventListener("click", addNewTask());




  // Functions

function upDateTaskCnt(){
    // console.log(todoList);
 var myTaskList = document.getElementsByTagName("LI");
 var taskCnt =  myTaskList.length;    
 
 for (var i=0; i < myTaskList.length; i++){
     var displayValue= myTaskList[i].style.display;
     var ch = myTaskList[i].classList.contains('checked');
    
     if(ch){
         todoList[i].checked=true;
     }
     if(myTaskList[i].style.display==='none'){
         todoList[i].deleted=true;
     }
     if (myTaskList[i].classList.contains('checked') || (displayValue==="none")){
         taskCnt--;
     }
 }
 document.getElementById("taskCnt").innerHTML = taskCnt + " Tasks Left"; 
 document.getElementById("taskCntCompleted").innerHTML = taskCnt + " Tasks Left"; 
 document.getElementById("taskCntAll").innerHTML = taskCnt + " Tasks Left";
 console.log(todoList);
}

// takes input from user and adds it to the task list
function addNewTask(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    if(!(inputValue==='')){
        var task = document.createTextNode(inputValue);
        li.appendChild(task);
    
         if(inputValue === ''){
            alert("you must write something!");
        }else{
            document.getElementById("taskList").appendChild(li);
            // var keyValue=document.getElementById("taskList").innerText;
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
        todoList.push({
            key: inputValue,
            deleted: false,
            checked: false,        
        });
    }
    
    console.log("updated");
    upDateTaskCnt(); 
 }

  // show the list of all tasks
  function showAllTasks(){
      var outputString ="";
    for(var i=0;i<todoList.length;i++){
        if ((todoList[i].checked)===true){
            outputString += `<li class="checked">  ${todoList[i].key} </li>`;
        }else if((todoList[i].deleted)===true){
            outputString += `<li class="deleted">  ${todoList[i].key} </li>`;
        }else{
            outputString += `<li>  ${todoList[i].key} </li>`;
        }
    }
    document.getElementById("taskListAll").innerHTML=outputString;      
  }
// show the list of completed tasks
  function showCompletedTasks(){
    var outputString ="";
    for(var i=0;i<todoList.length;i++){
      if ((todoList[i].checked)===true){
          outputString += `<li class="checked"> ${todoList[i].key} </li>`;
      }
  }
  document.getElementById("taskListComplete").innerHTML=outputString;      
}

function showActiveTasks(){
    console.log(todoList);
        var outputString ="";
      for(var i=0;i<todoList.length;i++){
          if ((todoList[i].checked)===true){
              outputString += `<li class="checked">${todoList[i].key}<span class="close">\u00D7</span></li>`;
          }else{
              outputString += `<li>${todoList[i].key}<span class="close">\u00D7</span></li>`;
          }
      }

      document.getElementById("taskList").innerHTML=outputString;      
    
}

//toggle between views
  function toggleView(view){
    var viewAll = document.getElementById("all");
    var viewActive = document.getElementById("active");
    var viewCompleted = document.getElementById("completed");

    if(view === 'active'){
        viewActive.style.display="block";
        viewAll.style.display="none";
        viewCompleted.style.display= "none"; 
        showActiveTasks();
    }
    if (view === 'all'){
        viewCompleted.style.display= "none";
        viewActive.style.display= "none";
        viewAll.style.display="block";
        showAllTasks();      
    }
    
    if(view === 'completed'){
        viewActive.style.display="none";
        viewAll.style.display="none";
        viewCompleted.style.display= "block";         
        showCompletedTasks();
    }
  }