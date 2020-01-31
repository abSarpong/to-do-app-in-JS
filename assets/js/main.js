const todoApp = () => {
  let addTodoButton = document.getElementById("add-todo-button");
  let todoForm = document.getElementById("todo-form");
  let div, deleteTodoButton;

  const addTodo = (e, input) => {
    e.preventDefault();
    input = document.getElementById("new-task").value;
    div = document.createElement("div");
    div.innerHTML = `<p class="task">${input}</p><i class="fas fa-times-circle delete"></i>`;
    div.classList.add("list-of-task");
    todoForm.reset();

    deleteTodoButton = div.children[1];

    const deleteTodo = e => {
      let todo = e.target.parentNode;
      todo.remove(div);
    };

    if (input === "") {
      document.getElementById("validation-message").style.display = "block";
    } else {
      let emptyImage = document.getElementById("empty-space");
      emptyImage.style.display = "none";
      console.log(emptyImage);
      document.getElementById("display-task").append(div);
    }

    deleteTodoButton.addEventListener("click", deleteTodo);
  };

  addTodoButton.addEventListener("click", addTodo);
};

todoApp();
