const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >>"))
// let power;
// let sum =0;
// while(n>0){
//     let reminder = n%10
//     power = reminder**3
//     sum += power;
//     n = Math.floor(n/10)
// }
// console.log(sum);
while(n>=10){
    let sum = 0 ;

    while(n>0){
         let k =n%10
        sum +=k
        n = Math.floor(n/10)
    }
    n = sum;
}
console.log(n);