let data = ` {
    "name" : "vishwajeet",
    "age" : 25,
    "is_student" : true,
    "passport_no" : null,
    "p_lang" : ["c", "c++", "java", "python"],
    "address" : {
        "city" : "delhi",
        "state" : "new delhi",
        "pincode" : 110011
    }
} ` ;

let dObject = JSON.parse(data);

console.log(dObject);
console.log(dObject['name']);
console.log(dObject['age']);
console.log(dObject['is_student']);
console.log(dObject['passport_no']);
console.log(dObject['p_lang']);
console.log(dObject['p_lang'][0]);
console.log(dObject['p_lang'][1]);
console.log(dObject['p_lang'][2]);
console.log(dObject['p_lang'][3]);
console.log(dObject['address']);
console.log(dObject['address']['city']);
console.log(dObject['address']['state']);
console.log(dObject['address']['pincode']);


let student = {
    name : "vishwajeet",
    age : 25,
    city : "delhi"
}

let Jdata = JSON.stringify(student);

console.log(Jdata);