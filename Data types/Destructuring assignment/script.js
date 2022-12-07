var names = ["alpha", "beta", "gamma", "delta"];

var firstName = names[0];
var secondName = names[1];

document.write(firstName + "<br> <br>");//"alpha"
document.write(secondName + "<br> <br>");//"beta"

var [firstName, secondName] = names;

document.write(firstName + "<br> <br>");//"alpha"
document.write(secondName + "<br> <br>");//"beta"

//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];

document.write(firstName + "<br> <br>");//"alpha"
document.write(secondName + "<br> <br>");//"beta

var [firstName, , thirdName] = ["alpha", "beta", "gamma", "delta"];

document.write(firstName + "<br> <br>");//"alpha"
document.write(thirdName + "<br> <br>");//"gamma"

var [firstName, , ...lastName] = ["alpha", "beta", "gamma", "delta"];

document.write(firstName + "<br> <br>");//"alpha"
document.write(lastName + "<br> <br>");//"gamma, delta"

//After swapping
[firstName, secondName] = [secondName, firstName]

document.write(firstName + "<br> <br>");//"beta"
document.write(secondName + "<br> <br>");//"alpha"

function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
var [firstName, secondName] = NamesList();

document.write(firstName + "<br> <br>");//"alpha"
document.write(secondName + "<br> <br>");//"beta"

var marks = { x: 21, y: -34, z: 47 };

var x = marks.x; // x = 21
var y = marks.y; // y = -34
var z = marks.z; // z = 47

document.write(x + "<br> <br>");
document.write(y + "<br> <br>");
document.write(z + "<br> <br>");

const { a, b, c } = marks; // x = 21, y = -34, z = 47

document.write(a + "<br> <br>");
document.write(b + "<br> <br>");
document.write(c + "<br> <br>");

const marks1 = {
    section1: { alpha: 15, beta: 16 },
    section2: { alpha: -31, beta: 19 }
};
const { section1: { alpha: alpha1, beta: beta1 } } = marks1;
document.write(alpha1, beta1 + "<br> <br>"); // 15, 16

let obj = {
    name: "Chetan",
    add: {
        country: "India",
        state: {
            code: "JS",
            pincode: "820800",
            article: {
                topic: "destructuring"
            }
        }
    }
}

let { name } = obj;
document.write(name + "<br> <br>")

let { add: { country: abcd } } = obj
document.write(abcd + "<br> <br>")

let { add: { state: { code: cd } } } = obj
document.write(cd + "<br> <br>")

let { add: { state: { article: { topic: ef } } } } = obj
document.write(ef + "<br> <br>");