// let arr = [1, 2, 3, 4, 5];
// console.log("Before elements without changing");
// console.log(arr);
// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// arr[3] = 89;
// console.log("After changed the current values");
// We can change arrays values
// console.log(arr);

// We can also change an array as string 
// console.log("this is the toString() function");
// console.log(arr.toString());

// Here we can add and between array values at the place of comma
// console.log("this is the join function");
// console.log(arr.join(" and "));

// pop return the last value of the array
// console.log("this is the pop function");
// console.log(arr.pop());

// Push method with push function
// console.log("this is the push function");
// arr.push(90);
// arr.push("Aryan");
// console.log(arr);

// shift remove an element from begining
// console.log("this is the shift function");
// arr.shift();
// console.log(arr);

// Unshift function add the an element in starting
// console.log("this is the unshift function");
// arr.unshift("Name");
// console.log(arr);

// This is the delete keyword to delete an array element but memory is not deallocated
// delete arr[5];
// console.log(arr);
// console.log(arr[5]);
// deleted item return undefined
// arr[5] = 455;
// console.log(arr);

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [7, 8, 9]; 

// console.log("This method does not changed existing array");
// console.log(a.concat(b, c));

// console.log("This is the sort method");
// console.log(arr.sort());

// console.log("This is the splice function");
// let num = [1, 2, 3, 4, 5, 6]
// console.log(num);
// console.log(num.splice(1, 5 , 65, 89));
// console.log(num);
// what does the splice function do , It collects value between index 1 to 5 but here index 1 and 5 are included and two value from last will added 

// console.log("This is the slice function");
// let num2 = [1, 2, 3, 4, 5, 6]
// console.log(num2);
// console.log(num2.slice(1, 5));
// console.log(num2);
// what does the slice function do , It collects value between index 1 to 5 but here index 1 is included.

// loops in arrays 
// let array = [1, 2, 3, 4, 5]

// This is the normal for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// This is the foreach loop
// array.forEach((value, index, arr)=>{
//     console.log(value, index, arr);
// })

// This is the forin loop
// let o = {
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in o) {
//     if (o.hasOwnProperty.call(o, key)) {
//         const element = o[key];
//         console.log(key, element);
//     }
// }


// This is the forof loop
// for (const iterator of array) {
//     console.log(iterator);
// }


// Map function
// let arr = [3, 6, 4, 8, 9]
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);
// }
// console.log(newarr);

// newarr = arr.map(e=>{
//     return e**2
// })

// console.log(newarr);


// filter function
const GreaterThanSeven = (e)=>{
    if (e > 7) {
        return true;
    }
    return false;
}

let marks = [2, 3, 5, 78, 54, 8, 9, 10]
console.log(marks.filter(GreaterThanSeven));



const add = (a, b)=>{
    return a+b;
}

console.log(marks.reduce(add));

console.log(Array.from("Aryan"));


