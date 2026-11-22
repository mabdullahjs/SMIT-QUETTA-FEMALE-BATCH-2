// // function greetUser(){
// // console.log("Hello World!");

// // }

// // greetUser();
// // greetUser();
// // greetUser();
// // greetUser();
// // greetUser();

// function greetUser(username){
// console.log("Hello!" + username );

// }
// greetUser("Malaika")

// function sum(num1, num2){
// console.log(num1 + num2);
// }
// sum(10,20);

// // Example A:
// function showString (){
//     console.log("Hello World!");
// }
// showString();

// // Example B:

// function showString (){
//     return "Hello World!";
// }
// const result = showString();
// console.log(result);

// function greeting(){
//     console.log("hello world")
//     console.log("hello world")
//     console.log("hello world")
//     console.log("hello world")
// }

// greeting()
// greeting()
// greeting()

// argument send krna
// paremeter receive krna

// function greetings(username){
//     console.log("Hello " + username);

// }

// greetings("abdullah")
// greetings("Ammar")

// function total(num1, num2) {

//     console.log(typeof(num1));
//     console.log(typeof(num2));

//     if(typeof(num1) === "number" && typeof(num2) === "number"){
//         console.log("sum of " + num1 + " and " + num2 + " is " + (num1 + num2));

//     } else {
//         console.log("Number do shahbash...");

//     }
// }

// total(20 , 30)

// local and global variable

// function sum(num1 , num2){
//     console.log("sum of num1 and num2 is ===>" , num1 + num2);

// }
// sum(20 , 30)

// let fullName = "mabdullah"; // global

// function greetings(username) {
//   let age = 23;
//   console.log("hello " + username + " " + fullName, age);
// }

// greetings("abdullah");

// console.log("console after function ==> " , fullName , age)

// return

// undefined
// null 

function greetings(username){
    console.log("hello " + username);


    return "hello " + username
    
}

// let username = greetings("abd")
// console.log(username);
console.log(greetings("abd"));






// let username = prompt("enter your name");
// console.log(username);

// console.log("prompt("enter your name")");




// DOM manipulation
const heading = document.querySelector(".heading")
heading.innerHTML = "Welcome!"




