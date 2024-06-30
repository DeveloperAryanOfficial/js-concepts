// variables are container for storing data
console.log("This is the first js tut");
var a = 5;
var b = 6;
var My_name = "Aryan";

console.log(a + b);
console.log(My_name);

// When you want to find the type of variables
// Javascript is case sensitive

console.log(typeof a, typeof b, typeof My_name);

// Let and var and const
const g = 5; // It cant be changed
console.log(g);

// let is block scoped and -- var is globally scoped use always let for variables

 let p = "Aryan bhai";
 let q = 33;
 let r = 4.5;
 const s = true;
 let t = undefined;
 let u = null;

 console.log(p, q, r, s, t, u);
 console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u)

 let random = Math.floor(Math.random()* 6);
 let o = {
    "name":"Aryan",
    "is handsome":true,
    "Job role":"meta"
 }
 console.log(o);
 o.salary = "100lakh";
 console.log(o);
