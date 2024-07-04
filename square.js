// this is a different type of square question in this question we have to print square till the square equal or less than that number

const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
let i = 1;
let square = 1;
while(square<=n){
    console.log(square);
    i++;
    square = i*i;
}