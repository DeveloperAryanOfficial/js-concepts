function Details(name, age) {
    console.log(`My name is ${name} and my age is ${age}`);
}

Details("Aryan",20);

function Sum(a, b, c= 4) {
    return a + b + c;
}

result = Sum(3, 4);  // when function will return value then we can store the value through assign tne fucntion call 

console.log(`the sum is ${result}`);

const function1 = (a)=>{
    console.log(`This is the arrow function and his value is ${a}`);
}
function1(1);
