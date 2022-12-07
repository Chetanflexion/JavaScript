class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years old.";

class Car1 {
    constructor(name1, year1) {
        this.name1 = name1;
        this.year1 = year1;
    }
    age1(x1) {
        return x1 - this.year1;
    }
}

let date1 = new Date();
let year1 = date1.getFullYear();

let myCar1 = new Car1("Ford", 2014);
document.getElementById("demo1").innerHTML = "My car is " + myCar1.age1(year1) + " years old.";

class Car2 {
    constructor(name2, year2) {
        this.name2 = name2;
        this.year2 = year2;
    }
}

const myCar2 = new Car2("Ford", 2014);
document.getElementById("demo2").innerHTML = myCar2.name2 + " " + myCar2.year2;