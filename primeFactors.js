// Write a program to print only the prime factors of a given number 'N'? Prime factors are the prime numbers that divide a given number without leaving a remainder.
// Test Case:
// Input:
// Enter a number: 84

// Output:
// Prime factors of 84: 2, 3, 7

const prompt = require("prompt-sync")()
let n = Number(prompt("enter the number >> "))
for(let i = 1;i<=n;i++){
    let count=0;
    for(let j = 1;j<=i;j++      ){
        if(i%j===0){
            count +=1;
        }
    }
    if(count === 2){
        if(n%i == 0){
            console.log(i);
        }
    }
}
