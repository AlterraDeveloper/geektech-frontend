//hoisting
// console.log(_name);
// let _name = 'name';

var lessons = ["math", "russian", "physics", "kyrgyz", "obj"];
// lessons.push('1','2','3')
// lessons[8] = '123'
// console.log(lessons);

// var age = 6;
// age = age + 1;
// age += 1;
// age++;
// age = age - 1;
// age -= 1;
// age--;

// for (var i = 0; i < lessons.length; i++) {
//     console.log(lessons[i]);
// }

// console.log('----------------------');

// var lessons2 = []
// console.log(lessons2.length);
// lessons2 = undefined
// console.log(lessons2.length);

// const vowels = ["a", "e", "y", "i", "o", "u"];
// vowels.forEach(vowel => console.log(vowel))
// lessons.forEach(function(lesson){
//     console.log(lesson.toUpperCase());
// })

// for (var lesson of lessons) {
//   for (const letter of lesson) {
//     if (vowels.indexOf(letter) > -1) {
//       console.log(letter);
//     }
//   }
//   console.log("-----------------");
// }

// for(var i=0;i<3;i++){

//     var line = i + ''

//     for(var j=0;j<7;j++){
//         line+='#'
//     }
//     console.log(line);
// }

// var homeworkDone = false;
// var i = 0;
// while (!homeworkDone) {
//   console.log(lessons[i] + " done...");
//   i++;
//   if (i === 3) homeworkDone = true;
// }

// console.log("i'm free!!!");

// var number2 = prompt("Enter number 2");

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// while (false) {
//   console.log("while false");
// }

// do {
//   console.log("do while");
// } while (false);

// alert(number);

//break continue

for (var i = 0; i < lessons.length; i++) {
  if (lessons[i] === "physics") {
    console.log("aaaaa physics");
    continue;
  }

  console.log(lessons[i]);
}

//задача об удалении массива
var index = lessons.indexOf("physics");
console.log("before remove " + lessons);
lessons.splice(index, 1);
console.log("after remove " + lessons);

//Переворот строки
var string = "qwerty";
var reverseString = "";
// for(var i=string.length-1; i >= 0;i--){
//     reverseString+=string[i]
// }
for (var i = 0; i < string.length; i++) {
  reverseString += string[string.length - i - 1];
}

console.log(string + " => " + reverseString);

//удаление дубликатов из массива
var numbers = [1, 1, 2, 3, 3, 3, 4, 4, 4, 6, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6];
console.log(
  Array.from(new Set(numbers)).sort((a, b) => {
    return a > b ? 1 : -1;
  })
);
