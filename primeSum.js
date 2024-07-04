const prompt = require('prompt-sync')()
// Write a program to find the sum of all prime numbers between 1 to n. (n input from the user)
let n = Number(prompt("enter the number >> "))
let sum = 0;
for(let i = 1;i<=n;i++){
    let count = 0;
    for(let j=1 ;j<=i;j++){
        if(i%j==0){
            count +=1;
        }
    }if(count==2){
        sum +=i;
    }
}console.log(sum);