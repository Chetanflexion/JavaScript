let a = Math.random(); // 0 to 1

console.log(a);

let b = Math.random() * 10; // 0 to 10

console.log(b);

let c = Math.floor(Math.random() * 10);

console.log(c);

let d = Math.floor(Math.random() * 10) + 1;

console.log(d);

let e = Math.floor(Math.random() * (25 - 15)) + 15;

console.log(e);

function grtRandom (min, max) {
    let f = Math.floor(Math.random() * (max - min) + min);
    return f;
}

console.log(grtRandom(10, 20));

function grtRandom (min, max) {
    let g = Math.floor(Math.random() * (max - min + 1) + min);
    return g;
}

console.log(grtRandom(10, 20));