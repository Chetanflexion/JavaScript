let sayWelcomeMixin = {
    sayWelcome() {
        document.write(`Welcome ${this.userName}` + "<br>" + "<br>" + "<br>");
    },
    sayBye() {
        document.write(`Bye ${this.userName}` + "<br>" + "<br>" + "<br>");
    }
};

class User {
    constructor(userName) {
        this.userName = userName;
    }
}

Object.assign(User.prototype, sayWelcomeMixin);
new User("John").sayWelcome();

let sayMixin1 = {
    say(phrase1) {
        document.write(phrase1 + "<br>" + "<br>" + "<br>");
    }
};

let sayWelcomeMixin1 = {
    __proto__: sayMixin1,
    sayWelcome1() {
        super.say(`Welcome ${this.name1}`);
    },
    sayBye() {
        super.say(`Bye ${this.name1}`);
    }
};

class User1 {
    constructor(name1) {
        this.name1 = name1;
    }
}

Object.assign(User1.prototype, sayWelcomeMixin1);
new User1("John").sayWelcome1();