import ToDo from "./todo.js";

var listCnt=0;
var toDoList = [];
toDoList[listCnt] = new ToDo("0", "laundry", false, false);
// toDoList[listCnt].addTodo();
// console.log(listCnt);
// toDoList[listCnt].getTodos();
toDoList[listCnt].markComplete();
// toDoList[listCnt].getTodos();
listCnt++;
toDoList[listCnt] = new ToDo("1", "dishes", false, false);
// toDoList[listCnt].addTodo();
// toDoList[listCnt].getTodos();
// toDoList[listCnt].markComplete();
// // toDoList[listCnt].getTodos();
toDoList[1].deleteToDo();

listCnt++;
toDoList[listCnt] = new ToDo("2", "dust", false, false);

for(var i=0;i<toDoList.length;i++){
    toDoList[i].getTodos();
}

// toDoList[1].getTodos();
// toDoList[2].getTodos();

