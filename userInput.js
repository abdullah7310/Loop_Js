// Given an integer N, write a program which reads N inputs and prints them.
// if user entered N = 4 then we need to take input for 4 times from the user and we should print the 4 inputs entered by user. if user entered 4 numbers are 32,5,5,78 the output should be 32,5,5,78

const prompt = require("prompt-sync")()
// let n = Number(prompt("enter the number >> "))
// let enter, count;
// let a = ""
// let c
// for (let i = 0; i < n; i++) {
//     enter = Number(prompt(`enter the number ${i + 1} >> `))
//     a += enter
//     if(i<(n-1)){
//         a += ","
//     }

    
// }
// console.log(a);

// let n = Number(prompt("enter the number >> "))
// let first = Number(prompt("enter the number 1 >: "))
// let sum ;
// // sum = sum + first;
// for(let i = 1;i<n;i++){
//     let second = Number(prompt("enter the number 2 >: "))
//     sum = first + second
//     first = sum;
// }
// console.log(sum);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77777


// let n = Number(prompt("enter the number >> "))
// let first = Number(prompt("enter the number 1 >> "))
// let product;
// for(let i = 1;i<n;i++){
//     let second = Number(prompt(`enter the  number ${i+1} >> `))
//     product = first*second
//     first = product
// }
// console.log(first);



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&77777
let m = Number(prompt("enter the starting number (m) >> "))
let n = Number(prompt("enter the (n) >> "))
let product=1;
for(let i=m;i<=n;i++){
    product *= i;
}console.log(product);