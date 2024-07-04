const prompt = require('prompt-sync')()
let n = Number(prompt("enter a number >> "))
let reverse=0;
// let i = 1;
// let reminder;
// while(n>0){
//     reminder = n%10;
//     reverse = (reverse* 10)+reminder
//     n = Math.floor(n/10)
// }
// console.log(reverse);


//  $$$$$$$$$$ by for looop $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$44



for(let i=1;n>0;i++){
    reminder = n%10;
    reverse = (reverse* 10)+reminder
    n = Math.floor(n/10)
}
console.log(reverse);