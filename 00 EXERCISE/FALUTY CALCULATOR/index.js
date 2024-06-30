// + ---> -
// * ---> +
// - ---> /
// / ---> **
// ** ---> *

console.log("Now I am going to creating a faulty calculator")



let random = Math.random();
let a = prompt("Enter your first number");
let c = prompt("Enter the operation");
let b = prompt("Enter the second number");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if (random>0.1) {
    console.log("You are entered in the right calculator");
    console.log(`Question is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);




}
else{
    console.log("This is the faulty calculator")
    c = obj[c];
    console.log(`Question is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);



}


























// console.log("This is my first faulty calculator");
// let a = prompt("Enter your first number");
// // let c = prompt("Enter the operation");
// let b = prompt("Enter the second number");


// let x = Math.floor(Math.random() * 10) + 1;
// console.log("This is the random generated number " + x);

// if (x == 1) {
//     console.log("You are entered in faulty calculator");
//     function Subract(a, b) {
//         console.log(a + " divided by " + b + " = " + (a / b));
//     }
//     function Add(a, b) {
//         console.log(a + " subtracted by " + b + " = " + (a - b));
//     }
//     function Multiply(a, b) {
//         console.log(a + " Added by " + b + " = " + (a + b));
//     }
//     function Divide(a, b) {
//         console.log(a + " to the power " + b + " = " + (a ** b));
//     }
//     function Power(a, b) {
//         console.log(a + " Multiplied by " + b + " = " + (a * b));
//     }
// }
// else {
//     console.log("Now You are entered in Normal calculator");
//     function Subract(a, b) {
//         console.log(a + " subtracted by " + b + " = " + (a - b));
//     }
//     function Add(a, b) {
//         console.log(a + " Added by " + b + " = " + (a + b));
//     }
//     function Multiply(a, b) {
//         console.log(a + " Multiplied by " + b + " = " + (a * b));
//     }
//     function Divide(a, b) {
//         console.log(a + " divided by " + b + " = " + (a / b));
//     }
//     function Power(a, b) {
//         console.log(a + " to the power " + b + " = " + (a ** b));
//     }
// }



// Subract(a, b);
// // Add(6,8);
// // Multiply();
// // Divide();
// // Power();
