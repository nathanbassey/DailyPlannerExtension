const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTaskButton")
const taskList = document.getElementById("taskList")

// 2. Load Tasks from Local Storage
let taskArray = getTasksFromLocalStorage()

// 3. Create Functions for Task Operations
 function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || []  
 }