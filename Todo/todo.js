// 'use strict';
// in the constructor you should set a variable with the element our todo list will be built in, 
// and the key we will use to read/write from localStorage
export default class ToDo{
    
    constructor(id, task, completed,deleted){
        this.id=id;
        this.task=task;
        this.completed=completed;
        this.deleted=deleted;
    }

    addTodo(){
    //get from user
    console.log("got here");
    // this.id=id;
    // this.task=task;
    // this.completed=completed;
    }

    getTodos() { 
        //list todos
        
        if(this.deleted === false){
            console.log(this.id);
            console.log(this.task);
            console.log(this.completed);
        }
    }

    deleteToDo(){
        this.deleted=true;
    }

    markComplete(){
        // mark the task complete
        this.completed=true;
    }     

}

