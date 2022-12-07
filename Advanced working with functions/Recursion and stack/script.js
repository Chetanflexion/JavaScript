function factorial(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    console.log(result);
}

factorial(5);


let factorial1 = function(n){
    if(n == 0){
        return 1;
    } else {
        n * factorial1(n - 1); 
    }
}

console.log(factorial1(5));


function factorial2(n) {
    return ((n <= 1) ? 1 : (n * factorial2(n - 1)));
}

console.log(factorial2(5));


function factorial3 (n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial3(n - 1);
    }
}

console.log(factorial3(4));


function factorial4 (n) {
    let result = 1;
    for (let i = n; i < 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial3(4));