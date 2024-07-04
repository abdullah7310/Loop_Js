const prompt = require('prompt-sync')()

let digit = Number(prompt("enter the digit >> "))
let sum = 0;
let reminder,k;
// while(digit>0){
    
//     reminder= digit%10;
//     sum = sum +reminder
//     digit= Math.floor(digit/10)
// }
// console.log(sum);


// $$$$$$$$$$$$$$$$$$$$$$$$  BY WHILE LOOOOOOPPPPPP   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


for(let i = 1;digit>0;i++){
    reminder= digit%10;
    sum = sum +reminder
    digit= Math.floor(digit/10)
}
console.log(sum);