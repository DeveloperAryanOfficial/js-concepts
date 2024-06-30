console.log("Factorial using reduce and for loops");

// Using for loops
// let Num = 5;
// let factorial = 1;
// for (let i = 1; i <= Num; i++) {
//         factorial = factorial * i;
// }
// console.log(factorial);


// Using reduce message 
// let Number = Array.from("12345");
// const fact = (a, b)=>{
//     return a*b
// }
// console.log(Number.reduce(fact));

// Harry bhai solution

let a = 6;
function factorial(number) {
    let arr = Array.from(Array(number).keys());
    // console.log(arr);
    console.log("Now this is an actual array");
    console.log(arr.slice(1,));
    let fact = (a,b)=>{
        return a*b
    }
    console.log("The result is : ");
    console.log(arr.slice(1,).reduce(fact));
}

factorial(a)





