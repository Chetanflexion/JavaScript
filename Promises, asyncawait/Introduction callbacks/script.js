function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();
mySecond();



function myDisplayer1(some1) {
    document.getElementById("demo1").innerHTML = some1;
}

function myFirst1() {
    myDisplayer1("Hello");
}

function mySecond1() {
    myDisplayer1("Goodbye");
}

mySecond1();
myFirst1();


function myDisplayer2(some2) {
    document.getElementById("demo2").innerHTML = some2;
}

function myCalculator2(num12, num22) {
    let sum2 = num12 + num22;
    return sum2;
}

let result2 = myCalculator2(5, 5);
myDisplayer2(result2);



function myDisplayer3(some3) {
    document.getElementById("demo3").innerHTML = some3;
}

function myCalculator3(num13, num23) {
    let sum3 = num13 + num23;
    myDisplayer3(sum3);
}

myCalculator3(5, 5);



function myDisplayer4(something4) {
    document.getElementById("demo4").innerHTML = something4;
}

function myCalculator4(num14, num24, myCallback4) {
    let sum4 = num14 + num24;
    myCallback4(sum4);
}

myCalculator4(5, 5, myDisplayer4);



// Create an Array
const myNumbers5 = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers5 = removeNeg5(myNumbers5, (x5) => x5 >= 0);

// Display Result
document.getElementById("demo5").innerHTML = posNumbers5;

// Remove negative numbers
function removeNeg5(numbers5, callback5) {
    const myArray5 = [];
    for (const x5 of numbers5) {
        if (callback5(x5)) {
            myArray5.push(x5);
        }
    }
    return myArray5;
}