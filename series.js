const prompt = require('prompt-sync')()
let starting = Number(prompt("enter the starting number >> "))
let n = Number(prompt("enter the n >> "))
let p = Number(prompt("enter P >> "))
let q = Number(prompt("enter Q >> "))
let sum =0;




// #########  	Write a program to show how to find the sum of all the numbers that are divisible by P but not divisible by Q within a given range. (Input lower limit, upper limit, P, and Q from the user)
// for(let i = starting;i<=n;i++){
//     if(i%p==0){
//         if(i%q != 0){
//             sum += i;
           
//         }
//     }
// }

// console.log(sum);


//  $$$$$$$$$$$$$$$$$$$$$   while loop $$$$$$$$$$$$$$$$$$$$$$$$$4444
let i =0;
while(i<=n){
    if(i%p==0){
        if(i%q != 0){
            sum += i;
           
        }
    }
    i++;
}
console.log(sum);

