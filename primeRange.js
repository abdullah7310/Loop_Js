const prompt = require('prompt-sync')()
// Write a program to input a number, N, and print first N prime numbers.

let n = Number(prompt("enter the nmber >> "))
let sum = 0;
for(let i = 1;sum<n;i++){
    let count = 0;
    for(let j = 1;j<=i;j++){
        if(i%j==0){
            count +=1
        }
    }
    if(count == 2){
        console.log(i);
        sum +=1
    }
}

