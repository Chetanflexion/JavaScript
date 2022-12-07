var Str = new String();
var Dt = new Date();
document.getElementById("ds").innerHTML = 
    "The given input is: " + Dt + Str + 
    " type of: " + typeof (Dt) + " " + typeof (Str)
document.getElementById("TP").innerHTML = 
    "Checking the instance of given objects   with different data types: " + "<br>" +
    "with given Str for Object " + (Str instanceof Object) + "<br>" +
    "with given Str for Date: " + (Str instanceof Date) + "<br>" +
    "with given Str for String: " + (Str instanceof String) + "<br>" +
    "with given Dt for Date: " + (Dt instanceof Date) + "<br>" +
    "with given Dt for Object: " + (Dt instanceof Object) + "<br>" +
    "with given Dt for String: " + (Dt instanceof String);