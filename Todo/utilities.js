
var myNodelist = document.getElementsByTagName("li");
//add a button to task item
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function toggleView(view){
    console.log("made it");
    var viewAll = document.getElementById("all");
    var viewActive = document.getElementById("active");
    var viewCompleted = document.getElementById("completed");

    if (view === 'all'){
        viewCompleted.style.display= "none";
        viewActive.style.display= "none";
        viewAll.style.display="block";
    }
    if(view === 'active'){
        viewActive.style.display="block";
        viewAll.style.display="none";
        viewCompleted.style.display= "none";    
    }
    if(view === 'completed'){
        viewActive.style.display="none";
        viewAll.style.display="none";
        viewCompleted.style.display= "block";   
    }
  }

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
    span.classname="close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i=0; i<close.length;I++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display="none";
        }
    }
  }
  