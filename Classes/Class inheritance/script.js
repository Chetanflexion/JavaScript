class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();

class Car1 {
    constructor(brand1) {
        this.carname1 = brand1;
    }
    get cnam1() {
        return this.carname1;
    }
    set cnam1(x1) {
        this.carname1 = x1;
    }
}

let myCar1 = new Car1("Ford");

document.getElementById("demo1").innerHTML = myCar1.cnam1;

class Car2 {
    constructor(brand2) {
        this._carname2 = brand2;
    }
    get carname2() {
        return this._carname2;
    }
    set carname2(x2) {
        this._carname2 = x2;
    }
}

let myCar2 = new Car2("Ford");

document.getElementById("demo2").innerHTML = myCar2.carname2;

class Car3 {
    constructor(brand3) {
        this._carname3 = brand3;
    }
    set carname3(x3) {
        this._carname3 = x3;
    }
    get carname3() {
        return this._carname3;
    }
}

let myCar3 = new Car3("Ford");
myCar3.carname3 = "Volvo";
document.getElementById("demo3").innerHTML = myCar3.carname3;

//You cannot use the class yet.
//myCar4 = new Car4("Ford")
//This would raise an error.

class Car4 {
    constructor(brand4) {
        this.carname4 = brand4;
    }
}

//Now you can use the class:
let myCar4 = new Car4("Ford");