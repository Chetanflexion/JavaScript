new Promise(function (resolve, reject) {
    setTimeout(() => resolve(2), 1500); // (*)
}).then(function (result) { // (**)
    document.write(result + "<br>" + "<br>"); // 2
    return result + 2;
}).then(function (result) { // (***)
    document.write(result + "<br>" + "<br>"); // 4
    return result + 2;
}).then(function (result) {
    document.write(result + "<br>" + "<br>" + "<br>"); // 6
    return result + 2;
});


let promise1 = new Promise(function (resolve1, reject) {
    setTimeout(() => resolve1(2), 1500);
});
promise1.then(function (result1) {
    document.write(result1 + "<br>" + "<br>"); // 2
    return result1 + 2;
});
promise1.then(function (result1) {
    document.write(result1 + "<br>" + "<br>"); // 2
    return result1 + 2;
});
promise1.then(function (result1) {
    document.write(result1 + "<br>" + "<br>" + "<br>"); // 2
    return result1 + 2;
});


new Promise(function (resolve2, reject2) {
    setTimeout(() => resolve2(2), 1500);
}).then(function (result2) {
    document.write(result2 + "<br>" + "<br>"); // 2
    return new Promise((resolve2, reject2) => { // (*)
        setTimeout(() => resolve2(result2 + 2), 1500);
    });
}).then(function (result2) { // (**)
    document.write(result2 + "<br>" + "<br>"); // 4
    return new Promise((resolve2, reject2) => {
        setTimeout(() => resolve2(result2 + 2), 1500);
    });
}).then(function (result2) {
    document.write(result2 + "<br>" + "<br>"); // 6
});