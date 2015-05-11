/**
 * Created by Yuri on 11-5-2015.
 */
var todoList = [];

document.getElementById("addTask").addEventListener("submit", addTask);

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    removeTask(target);
}, false);

showTasks();

function addTask(e){
    e.preventDefault();
    var value = document.getElementById("task").value;

    if(value != ""){
        todoList[todoList.length] = {task : value};
    }

    //clear form
    document.getElementById("task").value = "";

    showTasks();
}

function removeTask(task){
    //remove task from object
    console.log(task);

    showTasks();
}

function showTasks(){
    console.log(todoList);

    //clear the list
    var element = document.getElementById("list");
    if(element){
        element.parentNode.removeChild(element);
    }
    //recreate the list
    var ul = document.createElement("ul");
    ul.setAttribute("id", "list");

    for(var i =0; i < todoList.length; i++){
        //console.log(todoList[i].task);
        var li = document.createElement("li");
        li.innerHTML = todoList[i].task;
        ul.appendChild(li);
    }

    document.getElementById("listContainer").appendChild(ul);
}