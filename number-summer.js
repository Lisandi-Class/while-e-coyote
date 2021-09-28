const prompt = require('prompt-sync')({ sigint: true });

console.log("Enter your desired numbers or [done]")
let Num = (prompt(''));
let sumNum = 0


while (Num !== "done"){
    sumNum = sumNum + Number(Num);
    Num= prompt('Enter a number or [done]: ');
}
console.log(sumNum)
