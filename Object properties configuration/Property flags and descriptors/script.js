let book = {
    name: "Javascript"
};

let descriptor = Object.getOwnPropertyDescriptor(book, 'name');
document.write(JSON.stringify(descriptor, null, 2 + "<br>" + "<br>"));


let book1 = {};
Object.defineProperty(book1, "name", {
    value: "Javascript"
});
let descriptor1 = Object.getOwnPropertyDescriptor(book1, 'name');
document.write(JSON.stringify(descriptor1, null, 2 + "<br>" + "<br>"));


let book2 = {
    name: "javascript"
};
Object.defineProperty(book2, "name", {
    writable: false
});
book2.name = "HTML";
document.write(book.name + "<br>" + "<br>");


let book3 = {
    name: "Javascript",
    toString() {
        return this.name;
    }
};
for (let key in book3) {
    document.write(key + "<br>" + "<br>");
}


let book4 = {
    name: "Javascript",
    toString() {
        return this.name;
    }
};
Object.defineProperty(book4, "toString", {
    enumerable: false
});
for (let key in book4) {
    document.write(key + "<br>" + "<br>");
}


let book5 = {
    name: "Javascript",
    toString() {
        return this.name;
    }
};
Object.defineProperty(book5, "toString", {
    enumerable: false
});
document.write(Object.keys(book5 + "<br>" + "<br>"));


let descriptor2 = Object.getOwnPropertyDescriptor(Math, 'PI');
document.write(JSON.stringify(descriptor2, null, 2 + "<br>" + "<br>"));