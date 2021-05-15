

{/* <Todo text="learn js"/> */}

//ViewModel
var Todos = [
  new Todo("Learn JS"),
  new Todo("Learn CSS"),
  new Todo("Learn HTML"),
];

function Todo(text, isComplete = false) {
  this.text = text;
  this.isComplete = isComplete;
  this.render = function (index) {
    var todo = document.createElement("li");
    todo.dataset.id = index;

    this.isComplete
      ? todo.classList.add("completed")
      : todo.classList.remove("completed");

    var todoCheckBtn = document.createElement("button");
    todoCheckBtn.classList = "success";
    todoCheckBtn.innerText = "✓";
    self = this;
    todoCheckBtn.addEventListener("click", function (self) {
      var todoLi = this.parentElement;
      var targetTodo = Todos[todoLi.dataset.id];
      targetTodo.isComplete = !targetTodo.isComplete;
      renderAll();
    });
    var todoSpan = document.createElement("span");
    todoSpan.innerText = text;
    var todoRemoveBtn = document.createElement("button");
    todoRemoveBtn.classList = "danger";
    todoRemoveBtn.innerText = "Delete";
    todoRemoveBtn.addEventListener("click", function () {
      var todoLi = this.parentElement;
      Todos.pop();
      Todos.splice(todoLi.dataset.id, 1);
      renderAll();
    });

    todo.appendChild(todoCheckBtn);
    todo.appendChild(todoSpan);
    todo.appendChild(todoRemoveBtn);

    return todo;
  };
}

function renderAll(todos) {
  todos = todos || Todos;
  var todolist = document.getElementById("todolist-ul");
  todolist.innerHTML = "";
  todos.forEach(function (todo, index) {
    todolist.appendChild(todo.render(index));
  });
  console.log(todos);
}

renderAll();

var buttonAdd = document.querySelector("#addTodoBtn");
buttonAdd.addEventListener("click", function () {
  var todoInput = document.querySelector("#todoTextInput");
  var inputValue = todoInput.value;
  if (!inputValue) {
    console.log("ADD TODO!!!");
    return;
  }
  Todos.push(new Todo(inputValue, false));
  renderAll();
});

function filterBuilder(option) {
  if (option === "completed") {
    return function (todo) {
      return todo.isComplete;
    };
  }
  if (option === "uncompleted") {
    return function (todo) {
      return !todo.isComplete;
    };
  }
  return function (todo) {
    return true;
  };
}

var todoFilter = document.querySelector("#todoFilter");
todoFilter.addEventListener("change", function () {
  renderAll(Todos.filter(filterBuilder(this.value)));

  //   var filter = this.value;
  //   switch (filter) {
  //     case "completed":
  //       renderAll(
  //         Todos.filter(function (todo) {
  //           return todo.isComplete;
  //         })
  //       );
  //       break;
  //     case "uncompleted":
  //       renderAll(
  //         Todos.filter(function (todo) {
  //           return !todo.isComplete;
  //         })
  //       );
  //       break;
  //     default:
  //       renderAll();
  //   }
});

// setTimeout(function () {
//   app.style.background = "red";
//   app.style.display = "flex";
//   app.style.flexDirection = "column";
// }, 2000);

//adding element to page
var newLi = document.createElement("li");
newLi.innerHTML = "<span>new Li</span>";
todolist.appendChild(newLi);

//removing element from page
var liToRemove = todolist.children[1];
// liToRemove.style.display = 'none'
// liToRemove.remove()
