class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;
    static getCount() {
        return Item.count;
    }
}

let pen = new Item('Pen', 5);
let notebook = new Item('notebook', 10);

document.write(Item.getCount() + "<br>" + "<br>" + "<br>");

class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
        return 'static method has been called.';
    }
    static {
        document.write('Class static initialization block called' + "<br>" + "<br>" + "<br>");
    }
}

document.write(ClassWithStaticMethod.staticProperty + "<br>" + "<br>" + "<br>");
document.write(ClassWithStaticMethod.staticMethod() + "<br>" + "<br>" + "<br>");