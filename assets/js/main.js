const todo = () => {
  let addTaskButton = document.getElementById("add-task-button");
  let taskForm = document.getElementById("task-form");
  let div, del;
  const addTodo = (e, inputTask) => {
    e.preventDefault();
    inputTask = document.getElementById("new-task").value;
    div = document.createElement("div");
    div.innerHTML = `<p class="task">${inputTask}</p><i class="fas fa-times-circle delete"></i>`;
    document.getElementById("display-task").append(div);
    div.classList.add("list-of-task");
    taskForm.reset();

    del = div.children[1];
    del.addEventListener("click", function(e) {
      let myTask = e.target.parentNode;
      myTask.remove(div);
    });
  };

  const deleteTodo = () => {};

  deleteTodo();
  addTaskButton.addEventListener("click", addTodo);
};

todo();
