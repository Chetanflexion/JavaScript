function MulTable(num){
    for ( i =1; i<=10; i++ ) {
        document.write(`${num} X ${i} = ${num*i}`);
        document.write("<br>");
    }
    document.write("<br> <br>");
}

MulTable(2);

document.write("<br>");

MulTable(5);

function add(num1, num2) {
    document.write(num1 + num2);
}

add(6, 8);

add(10, 12);