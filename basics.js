let a = 3; // Number
let b = 4;

let message = "Hello, World!"; // String

let isActive = true; // Boolean

let numbers = [1, 2, 3, 4, 5]; // Array

let numebers_types = [1, "2", true, 4, 5]; // Array

let person = { // Object
    name: "Alice",
    age: 30
};

function greet(name) { // Function
    return "Hello, " + name + "!";
}

function multiply(a, b){
    return a * b;
}

const multiplyShortHand = (a, b) => a * b;

function doubleValue(n) {
    return n * 2;
}

let notANumber = 4 * "hello"; // NaN


if(a > 0){
    console.log("a is positive");
}


console.log("The sum of a and b is:", a + b);
console.log(greet("Alice"));
console.log(multiply(2, 3));
console.log(doubleValue(5));
console.log("Not a Number example:", notANumber);
