const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTaskButton")
const taskList = document.getElementById("taskList")

// 2. Load Tasks from Local Storage
let taskArray = getTasksFromLocalStorage()

// 3.1 Create Functions for Task Operations
 function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || []  
 }

//  3.2 Implement the upateTasksInLocalStorage
 function updateTasksInLocalStorage() {
   localStorage.setItem("tasks", JSON.stringify(taskArray))
 }

//  3.3 Implement createTask(taskText) function

 function createTask(taskText){
   return {text: "taskText", completed: "false"}
 }

//  3.4 Implement deleteTask(index) function

function deleteTask(index) {
   taskArray.splice(index, 1) ; 
   updateTasksInLocalStorage()
}