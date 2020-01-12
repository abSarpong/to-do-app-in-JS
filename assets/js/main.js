var addTaskButton = document.getElementById("add-task-button");
var taskForm = document.getElementById("task-form");

addTaskButton.onclick = addTask;

function addTask(e) {
    e.preventDefault();
    var newTask = document.getElementById("new-task").value;
    console.log(newTask);
    taskForm.reset();
}