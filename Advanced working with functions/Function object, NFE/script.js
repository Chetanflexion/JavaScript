function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handlers of handlers) {
        if (handlers.length == 0) {
            if (isYes) handlers();
        } else {
            handlers(isYes);
        }
    }
}

ask("Questing?", () => console.log("You said yes"), result => console.log(result));

function makeCounter() {
    function counter() {
        return counter.count++;
    };

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());

let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest");
    }
};

let welcome = sayHi;
sayHi = null;

welcome();