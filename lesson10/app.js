//REST API
//REpresentaion State Transfer
//Application Programming Interface

// console.log("1");

//setTimeout0
// setTimeout( () => {}, 0)

//callback hell
// setTimeout(() => {
//   console.log("After 2 sec", new Date());

//   setTimeout(() => {
//     console.log("After 5 sec", new Date());

//     setTimeout(() => {
//       console.log("After 9 sec", new Date());

//       setTimeout(() => {
//         console.log("After 19 sec", new Date());
//       }, 10000);
//     }, 4000);
//   }, 3000);
// }, 2000);
// console.log("3");

// const body = document.getElementsByTagName("body")[0];

// const prom = new Promise((resolve, reject) => {
//   console.log("Fetch data from server...");

//   body.innerHTML = `<div class="lds-dual-ring"></div>`;

//   setTimeout(() => {
//     const data = {
//       id: 1,
//       title: "buttermilk pancakes",
//       categoryId: "3",
//       price: 15.99,
//       img: "./images/item-1.jpeg",
//       cook: "John",
//       desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//     };
//     const json = JSON.stringify(data);

//     console.log("Server success...");
//     // reject("Я сломался.....");
//     resolve(json);
//   }, 4000);
// });

// const todo = {
//   userId: 1,
//   id: 2,
//   title: "eyviuei",
//   completed: true,
// };

// prom
//   .then((dish) => {
//     console.log("Dish from server:", JSON.parse(dish));
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const category = {
//           id: 3,
//           name: "breakfast",
//         };
//         resolve(category);
//       }, 4000);
//     });
//   })
//   .then((dishCategory) => {
//     console.log("Dish category from server", dishCategory);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   })
//   .finally(() => {
//     document.querySelector(".lds-dual-ring").remove(); //удаляем крутилку
//   });

// document.getElementsByTagName("body")[0].style.background = "blue";

const URI = "https://jsonplaceholder.typicode.com/todos/";

//fetch API (Ajax request)
//Async Javascript And Xml (AJAX)
//XmlHTTPRequest
fetch(URI)
  .then((data) => data.json())
  .then((todos) => {
      console.log(todos.length);
    // console.log("Todo id: ", todo.id);
    // console.log("Todo title: ", todo.title);
  });

  `{
    "userId": 8,
    "id": 151,
    "title": "accusamus adipisci dicta qui quo ea explicabo sed vero",
    "completed": true
  }`

  `
  <userId>8</userId>
  <Id>151</Id>
  <title>hdfuivnhefuhvuioejnriuviureo</title>
  `