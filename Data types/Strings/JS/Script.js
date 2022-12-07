let a = "Raj";
let b = `Hi ${a}`;
console.log(b);

let c = "JayKumar";
console.log(c);

let d = "Jay \n Kumar";
console.log(d);

let e = "Jay \t Kumar";
console.log(e);

let f = "Jay \\ Kumar";
console.log(f);

let g = "Jay \" Kumar";
console.log(g);

let h = 'Jay \' Kumar';
console.log(h);

let i = "Jay Kumar";
console.log(i);
console.log(i.length);

let j = "Jay Kumar";
console.log(j);
console.log(j[4]);

let k = "Jay";
let l = "Kumar";
console.log(k + l);

let m = "Jay";
let n = "Kumar";
console.log(m + " " + n);

let o = "Jay";
if ("Jay" == o) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}

let p = "Jay";
if ("jay" == p) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}

let q = "Jay";
let r = "Kumar";
let s = q.concat(r);
console.log(s);

let t = "This is a javascript Coding. Welcome to the Coding System.";
let substring = t.substring( 20, 37);
console.log(substring);

let u = "This is a javascript Coding. Welcome to the Coding System.";
let position = u.indexOf('the');
console.log(position);

let v = " This is a javascript Coding. Welcome to the Coding System. ";
let trim = v.trim();
console.log(v);
console.log(trim);

let w = " This is a javascript Coding. Welcome to the Coding System. ";
let trim1 = w.trimStart();
console.log(w);
console.log(trim1);

let x = " This is a javascript Coding. Welcome to the Coding System. ";
let trim2 = x.trimEnd();
console.log(x);
console.log(trim2);

let y = " This is a javascript Coding. Welcome to the Coding System. ";
let UpperCase = y.toUpperCase();
console.log(y);
console.log(UpperCase);

let z = " This is a javascript Coding. Welcome to the Coding System. ";
let lowerCase = z.toLowerCase();
console.log(z);
console.log(lowerCase);

let a1 = " This is a javascript Coding. Welcome to the Coding System. ";
let Replace = a1.replace('Coding', 'Programming');
console.log(a1);
console.log(Replace);

let b1 = " This is a javascript Coding. Welcome to the Coding System. ";
let include = b1.includes('to');
console.log(b1);
console.log(include);