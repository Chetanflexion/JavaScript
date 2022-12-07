function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

async function myFunction() { return "Hello"; }

myFunction().then(
    function (value) { myDisplayer(value); }
);
console.log("hello");

async function myDisplay1() {
    let myPromise1 = new Promise(function (resolve1, reject1) {
        resolve1("I love Coding !!");
    });
    document.getElementById("demo1").innerHTML = await myPromise1;
}

myDisplay1();