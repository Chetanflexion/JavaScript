localStorage.setItem('FirstName', 'jeet');
localStorage.setItem('location', 'Delhi');

console.log(localStorage.getItem('FirstName'));

localStorage.removeItem('location');

localStorage.setItem('Name', 'Raj');
localStorage.setItem('Arrea', 'Surat');

console.log(localStorage.getItem('Arrea'));
console.log(localStorage.getItem('Name'));


sessionStorage.setItem('FirstName', 'jeet');
sessionStorage.setItem('location', 'Delhi');

console.log(sessionStorage.getItem('FirstName'));

sessionStorage.removeItem('location');

sessionStorage.setItem('Array', 'Surat');
sessionStorage.setItem('Name', 'Raj');

console.log(sessionStorage.getItem('Array'));
console.log(sessionStorage.getItem('Name'));