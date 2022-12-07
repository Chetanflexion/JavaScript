{
    let message = "Hello";
    console.log(message);
}

console.log(message);

{
    let message1 = "Hello";
    console.log(message1);
    console.log(message2);
}

{
    let message2 = "Hello";
    console.log(message2);
    console.log(message1);
}

console.log(message1);
console.log(message2);

function sayHiBy(firstName, lastName) {
    function getFullName(){
        return firstName + " " + lastName;
    }

    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());
}

sayHiBy("Chetan", "Asodariya");

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function f() {
    let value = Math.random();

    return function () {
        console.log(value);
    };
}

let arr = [f(), f(), f()];


let value = "Surprise!";

function f1() {
    let value = "the closest value";

    function g() {
        debugger;
    }
    return g;
}

let g = f();

g();

function makeWorker() {
    let name = "Pete";

    return function () {
        console.log(name);
    };
}

let name = "John";

let work = makeWorker();

work();

function makeWorker1() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter3 = makeWorker1();
let counter4 = makeWorker1();

console.log(counter3());
console.log(counter3());

console.log(counter4());
console.log(counter4());