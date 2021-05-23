class TodoViewModel {
  id;
  text;
  isComplete;
  month;

  constructor(text, month = "JAN", isComplete = false) {
    this.id = new Date().toString();
    this.text = text;
    this.isComplete = isComplete;
    this.month = month;
  }

  render() {
    console.log("class TodoViewModel this = ",this);
    var todo = document.createElement("li");
    todo.dataset.id = this.id;

    this.isComplete
      ? todo.classList.add("completed")
      : todo.classList.remove("completed");

    var todoCheckBtn = document.createElement("button");
    todoCheckBtn.classList = "success";
    todoCheckBtn.innerText = "✓";
    todoCheckBtn.addEventListener("click", function () {
      var todoLi = this.parentElement;
      var targetTodo = todoAppState.Todos.find(
        (todo) => todo.id === todoLi.dataset.id
      );
      targetTodo.isComplete = !targetTodo.isComplete;
      renderAll();
    });
    var todoSpan = document.createElement("span");
    todoSpan.innerText = this.text;
    var todoRemoveBtn = document.createElement("button");
    todoRemoveBtn.classList = "danger";
    todoRemoveBtn.innerText = "Delete";
    todoRemoveBtn.addEventListener("click", function () {
      var todoLi = this.parentElement;
      const deletedIndex = todoAppState.Todos.findIndex(
        (todo) => todo.id === todoLi.dataset.id
      );
      if (deletedIndex >= 0) todoAppState.Todos.splice(todoLi.dataset.id, 1);
      renderAll();
    });

    todo.appendChild(todoCheckBtn);
    todo.appendChild(todoSpan);
    todo.appendChild(todoRemoveBtn);

    return todo;
  };
}

export { TodoViewModel as Todo };
