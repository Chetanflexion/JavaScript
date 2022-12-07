const student = {
    firstName: 'Monica',
    get getName() {
        return this.firstName;
    }
};
document.write(student.firstName + "<br>" + "<br>");
document.write(student.getName + "<br>" + "<br>");
// document.write(student.getName() + "<br>" + "<br>");



const student1 = {
    firstName: 'Monica',
    set changeName(newName) {
        this.firstName = newName;
    }
};
document.write(student1.firstName + "<br>" + "<br>");
student1.changeName = 'Sarah';
document.write(student1.firstName + "<br>" + "<br>");



const student2 = {
    firstName: 'Monica'
}
Object.defineProperty(student2, "getName", {
    get : function () {
        return this.firstName;
    }
});
Object.defineProperty(student2, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});
document.write(student2.firstName + "<br>" + "<br>");
student2.changeName = 'Sarah';
document.write(student2.firstName + "<br>" + "<br>");