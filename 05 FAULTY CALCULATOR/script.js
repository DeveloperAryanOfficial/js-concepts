function Calculator() {
    let random = Math.floor(Math.random() * 10) + 1;
    let first = prompt("Enter first value", "Enter number");
    let operation = prompt("Enter operation value", "Enter operation");
    let second = prompt("Enter second value", "Enter number");
    
    let obj = {
        "+":"-",
        "-":"*",
        "-":"/",
        "/":"**"
    }

    if (random > 1) {
        alert(`The result is ${first} ${operation} ${second} = ${eval(`${first} ${operation} ${second}`)}`);
    }
    else{
        operation = obj[operation];
        alert(`The result is ${first} ${operation} ${second}= ${eval(`${first} ${operation} ${second}`)}`);
    }
}