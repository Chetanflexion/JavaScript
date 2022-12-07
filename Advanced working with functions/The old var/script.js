function sayHi(){
    if(true){
        var phrase = "Hello";
    }

    console.log(phrase);
}

sayHi();
console.log(phrase);

function sayHello () {
    phrase = "Hello";

    if(false){
        var phrase;
    }

    console.log(phrase);
}

sayHello();