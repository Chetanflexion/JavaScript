let book = ["Maths", "Physics", "Bio", "Computer"];

console.log(book);

console.log(book.length);

book.push("Hindi");

console.log(book);

book.unshift("English");

console.log(book);

book.pop();

console.log(book);

book.shift();

console.log(book);

book.splice(1, 1);

console.log(book);

// book = [];

// console.log(book);

// book.length = 0;

// console.log(book);

let position = book.indexOf("Bio");

console.log(position);

console.log(Array.isArray(book));

let text = "This is a random text";

let word = text.split(" ");

console.log(word);

let words = book.join(", ");

console.log(words);

let book1 = ["Hindi", "English"];

let bookNew = book.concat(book1);

console.log(bookNew);

let book2 = ["Physics"];

let bookNew1 = bookNew.concat(book2);

console.log(bookNew1);

let bookWithPages = [["Maths", "500"], ["Physics", "100"], ["Bio", "600"]];

let fetch = bookWithPages[0][1];

console.log(fetch);

let bookLength = book.length;

for (let i = 0; i < bookLength; i++) {
    console.log(`Element ${i} is ${book[i]}`);
}

book.forEach(MyFu);

function MyFu(value) {
    console.log(value);
}