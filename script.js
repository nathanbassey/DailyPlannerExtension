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
   return {text: taskText, completed: false}
 }

//  3.4 Implement deleteTask(index) function

function deleteTask(index) {
   taskArray.splice(index, 1) ; 
   updateTasksInLocalStorage()
}

// 3.5 Implement createTaskElement(taskObj) function

   // function createTaskElement(taskObj) {
   //    const li = document.createElement("li")
   //    li.classList.add("taskItem")

   //    const checkbox = document.createElement("input")
   //    checkbox.type = "checkbox"

   //    checkbox.classList.add("checkbox")

   //    const taskTextElement = document.createElement("span")
   // }

   function createTaskElement(taskObj) {
      const taskItem = document.createElement("li");
      taskItem.classList.add("taskItem");
    
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("checkbox");
      checkbox.checked = taskObj.completed;
      checkbox.addEventListener("change", function () {
        taskObj.completed = checkbox.checked;
        taskTextElement.classList.toggle("completed", taskObj.completed);
        updateTasksInLocalStorage();
      });
    
      const taskTextElement = document.createElement("span");
      taskTextElement.classList.add("taskText");
      taskTextElement.textContent = taskObj.text;
      taskTextElement.classList.toggle("completed", taskObj.completed);
    
      const removeButton = document.createElement("button");
      removeButton.classList.add("removeButton");
      removeButton.textContent = "X";
      removeButton.addEventListener("click", function () {
        deleteTask(taskObj);
        renderTasks();
      });
    
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskTextElement);
      taskItem.appendChild(removeButton);
    
      return taskItem;
    }

//4. Implement render Tasks Function
    function renderTasks() {
      taskList.innerHTML = ""
      for (i=0; i < taskArray.length; i++) {
         const taskElement = createTaskElement(taskArray[i])
         taskList.appendChild(taskElement)
      }
      // const taskElement = renderTasks()
      
    }
// 5. Attach event listener to add task button
    addTaskButton.addEventListener("click" , function(){
      const taskText = taskInput.value.trim()
      if(taskText === "") {
         return taskText;
      }
      const newTask = createTask(taskText)
      taskArray.push(newTask)
      updateTasksInLocalStorage()
      taskInput.value = ""
      renderTasks()
    })
   renderTasks()
   