const prompt = require('prompt-sync')({ sigint: true });
let doubler = Number(prompt('Enter a Number: '));

while (doubler <= 100){
    doubler = doubler * 2
    console.log(doubler)
}

