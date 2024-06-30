let random = Math.floor(Math.random() * 3);
let a = "";
if (random == 0) {
    a = "Crazy";
}
else if (random == 1) {
    a = "Amazing";
}
else{
    a = "Fire";
}


let sec_random = Math.floor(Math.random() * 3);
let b = "";
if (sec_random == 0) {
    b = "Engine";
}
else if (sec_random == 1) {
    b = "Foods";
}
else{
    b = "Garments";
}


let Third_random = Math.floor(Math.random() * 3);
let c = "";
if (Third_random == 0) {
    c = "Engine";
}
else if (Third_random == 1) {
    c = "Foods";
}
else{
    c = "Garments";
}

let GeneratedName = "";
console.log(GeneratedName.concat(a, b, c));