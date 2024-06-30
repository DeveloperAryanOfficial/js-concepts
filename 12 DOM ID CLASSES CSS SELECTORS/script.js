



console.log("This si the dom class");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);
// boxes[2].style.backgroundColor = "red"


// If you want to style a particular element then you can use getelementbyId
document.getElementById("greenbox").style.backgroundColor = "green"

document.querySelector(".box").style.backgroundColor = "purple"
// It styles the first class which will be met 

document.querySelectorAll(".box").forEach((e)=>{
    e.style.backgroundColor="blue1"
})

document.getElementsByTagName("div")