// while loop


let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 0;
while (i < n) {
  console.log(i)
  i++;
}


// while loop

let x = prompt("Enter the value of x")
x = Number.parseInt(x)

let y = 10;
do {
  console.log(y)
  y++;
} while (y < x)

// Program to add first n natural numbers
let sum = 0
let n1 = prompt("Enter the value of n")
n1 = Number.parseInt(n1)
for (let i = 0; i < n1; i++) {
  sum += (i + 1)
  console.log((i + 1), "+")
}
console.log("Sum of first " + n1 + " natural numbers is " + sum)

// console.log(i)


let obj = {
  chetan: 90,
  jay: 45,
  raj: 56,
  simit: 57,
  shivem: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// For of loop
for (let b of "Chetan") {
  console.log(b)
}