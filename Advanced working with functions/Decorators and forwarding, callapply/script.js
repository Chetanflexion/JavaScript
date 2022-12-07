function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator (func) {
    let cache = new Map();

    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    }
}

slow = cachingDecorator(slow);

console.log(slow (1));
console.log("Again: " + slow (1));

console.log(slow (2));
console.log("Again: " + slow (2));

let worker = {
    someMethod() {
        return 1;
    },

    slow(x){
        console.log("Called with " + x);
        return x * this.someMethod();
    }
};

console.log( worker.slow(1) );

worker.slow = cachingDecorator(worker.slow);

console.log( worker.slow(2) );

function sayHi() {
    console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

sayHi.call(user);
sayHi.call(admin);