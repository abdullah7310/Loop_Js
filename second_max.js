const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
let firstNumber = Number(prompt("enter the number 1 >> "))
let secondNumber =Number(prompt("enter the number 2 >> "))
let smax,max;
if(firstNumber>secondNumber){
    max = firstNumber;
    smax = secondNumber

}
else{
    max = secondNumber;
    smax = firstNumber;
}
for(let i =2;i<n-1;i++){
    let enter = Number(prompt(`enter the number ${i+1} >> `))
    if(enter>max){
       smax = max ;
       max = enter;
    }else if(enter > smax){
        smax = enter;
    }
}
console.log(`second max is ${smax}`);
// let a = Number(prompt("enter the 1st number >> "))
// let b = Number(prompt("enter the 2nd number >> "))
// let c = Number(prompt("enter the 3rd number >> "))
// let max = 0;
// let smax  = 0;
// if(a>b){
//     if(a>c){
//         max = a;
//         smax = c;
//     }else{
//         max = c;
//         smax =a ;

//     }
// }else{
//     if(b>c){
//         max = b;
//         smax = c;
//     }else{
//         max = c;
//         smax = b;
//     }
// }
// console.log(`max is ${max}`);
// console.log(`seconnd max is ${smax}`);