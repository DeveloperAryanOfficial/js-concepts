console.log("This is the dom tut");
// console.log(document.body);
// console.log(document.body.childNodes);

// let cont = document.body.childNodes[1];
// // console.log(cont.firstChild);
// // console.log(cont.lastChild);
// console.log(cont.firstElementchild);

console.log(document.body)
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
let cont = document.body.childNodes[1]
console.log(cont);
console.log(cont.firstChild);
console.log(cont.lastChild);

console.log(document.body.childNodes[1]);
console.log(cont.lastElementChild);
console.log(cont.firstElementChild);


cont.firstElementChild.style.backgroundColor = "green";

// If you want a parent node you can use parentElement
console.log(cont.firstElementChild.parentElement);

// If you want ot acces all the childrn of its parent element
console.log(cont.children);

// If you want to find the siblings 
console.log(cont.children[1].nextElementSibling);
console.log(cont.children[1].previousElementSibling);



