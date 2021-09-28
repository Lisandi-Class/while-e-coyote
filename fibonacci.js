const prompt = require('prompt-sync')({ sigint: true });
const number = Number(prompt('Enter a number: '));
let num1 = 0, num2 = 1, nextNum;

console.log('Fibonacci Sequence:');
console.log(num1); 
console.log(num2); 

nextNum = num1 + num2;

while (nextNum <= number) {
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
    nextNum = num1 + num2;
}