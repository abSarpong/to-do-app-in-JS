{
  var addTaskButton = document.getElementById("add-task-button");
  var taskForm = document.getElementById("task-form");

  addTaskButton.onclick = addTask;

  function addTask(e) {
    e.preventDefault();
    var task = document.getElementById("new-task").value;

    if (task === "") {
      var validationMessage = document.getElementById("validation-message");
      validationMessage.style.display = "block";
    } else {
      var p = document.createElement("p");
      var textContent = document.createTextNode(task);
      p.appendChild(textContent);
      p.classList.add("list-of-task");
      document.getElementById("display-task").appendChild(p);
      //   console.log(p);
      taskForm.reset();
    }
  }
}
