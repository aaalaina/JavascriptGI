
// VE: Create two variables and assign a number to each. Console log the difference between the numbers. 
// Example output: “The difference between 6 and 2 is 4”


// beginning of very easy
// var addThis = 3
// var andThis = 3

// difference = addThis - andThis;

// console.log("The difference between 3 and 3 is " + difference);
//end of very easy


// E: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.
// Example output: “The name Thomas is longer than John by 2 characters”


//beginning of easy
// let firstPerson = "Tia"
// let secondPerson = "Tamera"
// // st is short for string
// let st1 = firstPerson.length;
// let st2 = secondPerson.length;
// if (st1 > st2) {
// let nameD = st1 - st2
// console.log("The name " + firstPerson + " is longer than " + secondPerson + " by " + nameD + " characters.")
// }
// else {
//     let nameD = st2 - st1
//     console.log("The name " + secondPerson + " is longer than " + firstPerson + " by " + nameD + " characters.")
// };
// end of easy


// M: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. 
// Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.


//start of medium
// let userTypes = prompt("Type something.");

// if (userTypes === userTypes.toUpperCase()){
// console.log("You are shouting!");
// }
// else if (userTypes === userTypes.toLowerCase()){
// console.log("You're whispering...")
// }
// else {
// console.log("You're talking at a normal volume.")
// }
// end of medium


// H: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called 
// multiply() to multiply 2 numbers, and one called divide() to divide two numbers.


//start of hard
// function add(num1,num2){
//    return num1 + num2
    
// }
// function subtract(num1,num2){
//    return num1 - num2
// }
// function multiply(num1,num2){
//    return num1 * num2
     
// }
// function divide(num1,num2){
//     return num1 / num2
// }
// end of hard


// VH: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, 
// and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

// start of very hard
let a = prompt("Enter a number: ")
var userInput = prompt("Do you want to add, subtract, multiply, or divide? Use the corresponding operator.")
let b = prompt("Second Number: ")
a = parseInt(a)
b = parseInt(b)

function add(num1,num2){
    return num1 + num2
     
 }
 function subtract(num1,num2){
    return num1 - num2
 }
 function multiply(num1,num2){
    return num1 * num2
      
 }
 function divide(num1,num2){
     return num1 / num2
 }

if (userInput == "+") {
    
    sum = add(a,b)
    console.log(a + " + " + b + " = " + sum) 
}
else if (userInput == "-") {
    
    difference = subtract(a,b)
    console.log(a + " - " + b + " = " + difference)
}
else if (userInput == "*") { 
    
    product =  multiply(a,b)
  console.log(a + " * " + b + " = " + product)
}
else if (userInput == "/") {
    
    quotient = divide(a,b)
    console.log(a + " / " + b + " = " + quotient)
};
// end of very hard