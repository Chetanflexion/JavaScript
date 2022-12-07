class NumsArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

let arr = new NumsArray(1, 3, 6, 11, 27);
document.write(arr.isEmpty() + "<br>" + "<br>" + "<br>");
let filterArr = arr.filter(item => item >= 10);
document.write(filterArr + "<br>" + "<br>" + "<br>");
document.write(filterArr.isEmpty() + "<br>" + "<br>" + "<br>");

class NumsArray1 extends Array {
    isEmpty() {
        return this.length === 0;
    }
    static get [Symbol.species]() {
        return Array;
    }
}

let arr1 = new NumsArray1(1, 3, 6, 11, 27);
document.write(arr1.isEmpty() + "<br>" + "<br>" + "<br>");
let filterArr1 = arr1.filter(item => item > 10);
document.write(filterArr1.isEmpty() + "<br>" + "<br>" + "<br>");