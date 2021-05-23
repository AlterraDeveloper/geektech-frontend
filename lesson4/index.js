import { Todo } from "./Models/Todo";

//ViewModel
// var Monthes = {
//   JAN: [],
//   FEB: [],
//   MAR: [new Todo("Learn JS"), new Todo("Learn CSS"), new Todo("Learn HTML")],
//   APR: [],
//   MAY: [new Todo("1"), new Todo("2")],
//   JUN: [],
//   JUL: [],
//   AUG: [],
//   SEP: [],
//   OCT: [],
//   NOV: [],
//   DEC: [],
// };

const todoAppState = {
  currentFilter: "all",
  currentMonth: "MAR",
  Todos: [],
};
document.querySelector(`#${todoAppState.currentMonth}`).classList.add("active");

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.onclick = () => {
    document
      .querySelector(`#${todoAppState.currentMonth}`)
      .classList.remove("active");
    todoAppState.currentMonth = tab.innerHTML;
    tab.classList.add("active");
    renderAll();
  };
});

function renderAll() {
  let todos = todoAppState.Todos.filter(
    filterBuilder(todoAppState.currentFilter)
  );
  var todolist = document.getElementById("todolist-ul");
  todolist.innerHTML = "";
  if (todos.length === 0) {
    todolist.innerHTML = "<h3>Нет задач в этом месяце</h3>";
  }
  todos.forEach(function (todo, index) {
    todolist.appendChild(todo.render());
  });
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
  todoAppState.Todos.push(
    new Todo(inputValue, todoAppState.currentMonth, false)
  );
  renderAll();
});

function filterBuilder(option) {
  if (option === "completed") {
    return function (todo) {
      return todo.isComplete && todo.month === todoAppState.currentMonth;
    };
  }
  if (option === "uncompleted") {
    return function (todo) {
      return !todo.isComplete && todo.month === todoAppState.currentMonth;
    };
  }
  return function (todo) {
    return todo.month === todoAppState.currentMonth;
  };
}

var todoFilter = document.querySelector("#todoFilter");
todoFilter.addEventListener("change", function () {
  todoAppState.currentFilter = this.value;
  renderAll();
  // renderAll(Todos.filter(filterBuilder(this.value)));

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
// var newLi = document.createElement("li");
// newLi.innerHTML = "<span>new Li</span>";
// todolist.appendChild(newLi);

//removing element from page
// var liToRemove = todolist.children[1];
// liToRemove.style.display = 'none'
// liToRemove.remove()
