function sum(a, b){
    return a + b;
}

let sumA = (a, b) => {
    a = 2 * a;
    return a + b;
}

let sumA1 = (a, b) => a + b;

console.log(sum(2, 3));
console.log(sumA(2, 3));
console.log(sumA1(2, 3));

function double(a){
    return 2 * a;
}

let doubleA = a => 2 * a;

console.log(double(10));
console.log(doubleA(10));

function random(){
    return Math.random();
}

let randomA = () => Math.random();

console.log(random());
console.log(randomA());

document.addEventListener('click', function(){
    console.log("clicked...");
});

document.addEventListener('click', () => console.log("clicked..."));