const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number of term (n) >> "))
let sum =0;
let add=0;
for(let i=0;i<n;i++){
        sum = (sum *10)+5; 
        add =  add + sum
}
console.log(add);