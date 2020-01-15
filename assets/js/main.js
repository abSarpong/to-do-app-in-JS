{
  var addTaskButton = document.getElementById("add-task-button");
  var taskForm = document.getElementById("task-form");

  var div;
  var task;
  var icon;

  addTaskButton.onclick = addTask;

  function addTask(e) {
    e.preventDefault();
    var inputTask = document.getElementById("new-task").value;

    if (inputTask === "") {
      var validationMessage = document.getElementById("validation-message");
      validationMessage.style.display = "block";
    } else {
      div = document.createElement("div");
      task = document.createElement("p");
      icon = document.createElement("i");
      var textContent = document.createTextNode(inputTask);

      icon.classList.add("fas", "fa-times-circle");
      task.appendChild(textContent);
      div.append(task, icon);
      div.classList.add("list-of-task");
      document.getElementById("display-task").appendChild(div);

      // console.log(div);
      taskForm.reset();
    }
  }
}
