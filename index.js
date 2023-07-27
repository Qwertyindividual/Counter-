//document.getElementById("count-el").innerText = 5

//Initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let restartEL = document.getElementById("restart-el");
let count = 0;

function increment() {
  count = count + 1;
  countEL.textContent = count;
  console.log(count);
}

//Create a  fucntion, save(), which logs out the count when uts called.

function save() {
  let countStr = count + " - "; //create a variable that contains both the count and the dasah seperator
  saveEL.textContent += countStr; //Render the avriable in the saveEL using
  countEL.textContent = 0;
  count = 0;
  console.log(countStr);
}

//Practice 1- Variables
let firstName = "Kauthar";
let lastName = "Brandt";
let fullName = firstName + " " + lastName;
console.log(fullName);

//Practice 2- Functions
let name = "linda";
let greeting = "Hi there";

function greetlinda() {
  console.log(greeting + ", " + name + "!");
}

//Practice 3 - Incrementing and decrementing

let myPoints = 3;

//Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
//Call the functions to that line below logs out 10
console.log(myPoints);

//Practice 4-Strings and Number

console.log("2" + 2); // String
console.log(11 + 7); // Numbers
console.log(6 + "5"); // String
console.log("My points: " + 5 + 9); // "My Points: 59" STirng
console.log(2 + 2); // Number
console.log("11" + "14"); // String

//Practice
//When the userclicks the purchase button, render out
// "Something went wrong, please try again" int eh paragraoh
//that has the id="error"

let error = document.getElementById("error");

function errorMsg() {
  error.textContent = "Something went wrong, please try again";
  console.log(error);
}

//Practice 5 - Calculator

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEL = document.getElementById("sum-el");
//Create four functiions: add, substract, divide, multiply
//Call the correct function when the user clicks on one of the buttons
//Perform the given calculation using num1 and num2
//Render the result of the calculations in the paragraph with id="sum-el"

//E.g. if the user clicks on the "Plus" button, you should render
//"Sum: 10" (since 8+2 = 10) inside the pagraph with id=sum-el

function Add() {
  let result = num1 + num2;
  sumEL.textContent = "Sum: " + result;
}

function Subtract() {
  let result = num1 - num2;
  sumEL.textContent = "Sum: " + result;
}

function multiply() {
  let result = num1 * num2;
  sumEL.textContent = "Sum: " + result;
}

function Divide() {
  let result = num1 / num2;
  sumEL.textContent = "Sum: " + result;
}
