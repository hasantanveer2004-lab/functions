
// 1. Addition Function
function addNumbers() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let sum = a + b;

    document.getElementById("result").innerHTML =
        "Addition Result: " + sum;
}


// 2. Even or Odd Function
function checkNumber() {

    let num = Number(document.getElementById("number").value);

    if (num % 2 === 0) {
        document.getElementById("answer").innerHTML =
            "This is an Even Number";
    } else {
        document.getElementById("answer").innerHTML =
            "This is an Odd Number";
    }
}


// 3. Multiplication Function
function multiplyNumber() {

    let num = Number(document.getElementById("multiply").value);

    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += num + " x " + i + " = " + (num * i) + "<br>";
    }

    document.getElementById("table").innerHTML = result;
}


// 4. Greeting Function
function greetUser() {

    let name = document.getElementById("username").value;

    document.getElementById("greeting").innerHTML =
        "Welcome " + name + "! Have a nice day.";
}


// 5. Arrow Function
const square = (num) => num * num;

console.log("Square of 5:", square(5));

