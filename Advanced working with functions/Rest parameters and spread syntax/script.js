function sum (a, b) {
    return a + b;
}

document.write(sum(1, 2, 3, 4, 5));

function sumAll (...args) {
    let sum = 0;

    for(let arg of args) sum += arg;

    return sum;
}

document.write(sumAll(1));
document.write(sumAll(1, 2));
document.write(sumAll(1, 2, 3));

function showName(firstName, secondName, ...titles){
    document.write(firstName + ' ' + lastName);

    document.write(titles[0]);
    document.write(titles[1]);
    document.write(titles.length);
}

showName("Julius", "Caesar", "Consul", "Imperator");

document.write(Math.max(3, 5, 1));


let arr = [3, 5, 1];

document.write(Math.max(arr));

let arr1 = [3, 5, 1];

document.write(Math.max(...arr1));

let arr2 = [1, -2, 3, 4];
let arr3 = [8, 3, -8, 1];

document.write(...arr2, ...arr3);

let arr4 = [1, -2, 3, 4];
let arr5 = [8, 3, -8, 1];

document.write(1, ...arr4, 2, ...arr5, 25);

let arr6 = [3, 5, 1];
let arr7 = [8, 9, 15];

let merged = [0, ...arr6, 2, ...arr7];

document.write(merged);