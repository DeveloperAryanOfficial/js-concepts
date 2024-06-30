console.log("This is the second exercise of sigma web developement course");





console.log("Today I am going to create a buseness name generator");
// List of adjectives
// Crazy
// Amazing
// Fire

// Shop   
// Engine
// foods
// garments

// Another word 
// Bros
// Limited
// Hub 


let random = Math.floor(Math.random()*6);

// This is for Adjectives
let adj,another,shop;

if (random<2) {
     adj = "Crazy";
}
else if(random>=2 && random<=3){
    adj = "Amazing";
}
else{
    adj = "Fire"
}


// This is for some shop
if (random<2) {
     shop = "Engine";
}
else if(random>=2 && random<=3){
    shop = "Foods";
}
else{
    shop = "Garments"
}


// This is for another
if (random<2) {
     another = "Bros";
}
else if(random>=2 && random<=3){
    another = "Limited";
}
else{
    another = "Hub";
}

// Solving with created some variables

// let adj = "Crazy";
// let shop = "Engine";
// let another = "Limited";


// solving with obj in js

// let adj = {
//     "(random<2)":"Crazy",
//     "(random>=2 && random<=3)":"Amazing",
//     "(random>3)":"Fire"
// }
// let shop = {
//     "(random<2)":"Engine",
//     "(random>=2 && random<=3)":"Foods",
//     "(random>3)":"Garments"
// }
// let another = {
//     "(random<2)":"Bros",
//     "(random>=2 && random<=3)":"Limited",
//     "(random>3)":"Hub"
// }





let GeneratedBusinessname ="";
console.log(GeneratedBusinessname.concat(adj, shop, another));
// alert(`Generated business name is : ${GeneratedBusinessname.concat(adj, shop, another)}`);



