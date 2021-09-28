const prompt = require('prompt-sync')({ sigint: true });
let repeater = prompt('Enter some letters: ')

while (repeater.length <= 10){
    repeater += repeater 
    console.log(repeater.length)
    console.log(repeater)
}