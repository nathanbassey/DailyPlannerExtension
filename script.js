const taskInput = document.getElementById("taskInput")
const addTaskButton = document.getElementById("addTaskButton")
const taskList = document.getElementById("taskList")

// Load Tasks from Local Storage
let taskArray = getTasksFromLocalStorage()