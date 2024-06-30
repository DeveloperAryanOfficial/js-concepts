// It gives html code
// console.log(document.querySelector(".box"));

// It gives text inside the first selector html code
// console.log(document.querySelector(".box").innerHTML);

// It gives the html code with text which is inside it
// console.log(document.querySelector(".container").innerHTML);

// It gives only inner text itself
// console.log(document.querySelector(".box").innerText);

// It gives only text inside it
// console.log(document.querySelector(".container").innerText);

// console.log("This is the outer HTML which gives all the code with itself");
// console.log(document.querySelector(".container").outerHTML);

// console.log(document.querySelector(".container").tagName);

// console.log(document.querySelector(".container").nodeName);

// console.log(document.querySelector(".container").textContent);

// console.log(document.querySelector(".container").hidden = true);


let c = document.querySelector(".box")
// console.log(c.hasAttribute("style"));
// console.log(c.setAttribute("style","display:inline"));
// console.log(c.hasAttribute("style"));
// console.log(c.getAttribute("style"));
// console.log(c.attributes);

console.log(c.removeAttribute("style"));

// document.designMode = "on"


// This is data set in javascript
console.log(c.dataset);

