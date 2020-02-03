{
    var addTaskButton = document.getElementById("add-task-button");
    var taskForm = document.getElementById("task-form");

    var div;
    var task;
    var icon;
    var counter = 0;

    addTaskButton.onclick = addTask;

    function addTask(e) {
        e.preventDefault();
        var inputTask = document.getElementById("new-task").value;

        if (inputTask === "") {
            var validationMessage = document.getElementById("validation-message");
            validationMessage.style.display = "block";
        } else {
            var delEle = document.createElement('eleTag');
            delEle.setAttribute('id', counter);
            var newEle = document.getElementById(counter);
            console.log(newEle);
            // counter++;
            div = document.createElement("div");
            task = document.createElement("p");
            icon = document.createElement("i");
            var textContent = document.createTextNode(inputTask);

            icon.classList.add("fas", "fa-times-circle");
            task.appendChild(textContent);
            div.append(task, icon, counter);
            div.classList.add("list-of-task");
            document.getElementById("display-task").appendChild(div);

            console.log(div);
            taskForm.reset();
        }
        icon.onclick = function deleteTask() {
            // alert("clicked");
            // uId();
            div.parentNode.removeChild(div);
        }
    }

    // function uId() {
    //     // counter = counter + 1;
    //     // console.log(counter);
    //     div.parentNode.removeChild(div);
    // }
}