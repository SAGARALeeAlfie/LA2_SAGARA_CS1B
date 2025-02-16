let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;

d = Number(d);

let sum = a + b + c + d + e;
console.log("Sum of all values:", sum);

console.log("d > e:", d > e);
console.log("d < e:", d < e);
console.log("d >= e:", d >= e);
console.log("d <= e:", d <= e);
console.log("d === e:", d === e); 

let subtraction = a - b - c - d - e;
console.log("Subtraction result:", subtraction);

let multiplicationDivision = (a * c) / e;
console.log("Multiplication and Division result:", multiplicationDivision);

let exponentiation = e ** c;
console.log("Exponentiation result:", exponentiation);

let newE = exponentiation;
console.log("New value of e:", newE);
