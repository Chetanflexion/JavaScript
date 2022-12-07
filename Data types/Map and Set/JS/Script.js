let arr = [2, 3, 4, 5, 6];

let arr1 = [];

for(let i = 0; i < arr.length; i++){
    arr1[i] = arr[i] * 2;
}

console.log(arr);
console.log(arr1);

let arr2 = arr.map(function(val){
    return val * 2;
});

console.log(arr2);

let arr3 = arr.map((val) => val * 2);

console.log(arr3);

// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Display set.size
console.log(letters.size);