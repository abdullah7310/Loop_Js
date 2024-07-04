const prompt = require('prompt-sync')()
let n = Number(prompt('enter the number >> '))
let k = Number(prompt("enter the power (k) >> "))
let sum=0;
for(let i = 1; i<=n;i++){
    sum += i**k
}
console.log(sum);