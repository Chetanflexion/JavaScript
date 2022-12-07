function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // some code (try to change x to 5)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);


const myPromise1 = new Promise(function (myResolve1, myReject1) {
    setTimeout(function () { myResolve1("I love Coding !!"); }, 3000);
});

myPromise1.then(function (value1) {
    document.getElementById("demo1").innerHTML = value1;
});


setTimeout(function () { myFunction2("I love Coding !!!"); }, 3000);

function myFunction2(value2) {
    document.getElementById("demo2").innerHTML = value2;
}