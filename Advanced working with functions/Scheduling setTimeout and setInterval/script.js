function sayHi(phrase, who){
    console.log(phrase + ", " + who);
}

setTimeout(sayHi, 1000, "Hello", "John");

let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log(timerId);

clearTimeout(timerId);
console.log(timerId);

let timerId1 = setInterval(() => console.log('tick'), 2000);

setTimeout(() => {
    clearInterval(timerId1);
    console.log('stop');
}, 5000);

let delay = 5000;