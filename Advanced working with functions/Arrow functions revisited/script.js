function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

function sayHi(who) {
    alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John");

function defer1(f, ms) {
    return function (...args) {
        let ctx = this;
        setTimeout(function () {
            return f.apply(ctx, args);
        }, ms);
    };
}

defer1(chetan, 2000);