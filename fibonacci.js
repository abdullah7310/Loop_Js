const prompt = require("prompt-sync")()
// let n= Number(prompt("enter the number >> "))
// let a = 0;
// let b  = 1;
// console.log(a)
// console.log(b);
// for(let i = 3;i<=n;i++){
//     let sum = a+b;
//     console.log(sum);
//     a = b;
//     b = sum;
// }

let m = Number(prompt("enter the starting point (m) >> "))
let n = Number(prompt("enter the ending point (n) >> "))
for(i = m;i<=n;i++){
    console.log(i)
}