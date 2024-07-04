const prompt = require('prompt-sync')()

// Write a program to find the sum of following series:
// 1 + 2 + 6 + 24 + 120 . . . . . N terms
// if N= 6 then series becomes 1+2+6+24+120+720 , then output will be some of this series -> 873	

let n = Number(prompt('enter the number of term (n) >> '))
let sum =0;
for(let i=1;i<=n;i++){
    
    let factorial=1;
    for(let j =1;j<=i;j++){
        
        factorial = factorial *j;
    }
    // console.log(factorial);
    sum += factorial;
  
}  console.log(sum);

// const prompt = require('prompt-sync')();
// let n = Number(prompt('Enter the number of terms (n): '));

// for (let i = 1; i <= n; i++) {
//     let factorial = 1;
//     for (let j = 1; j <= i; j++) {
//         factorial *= j;
//     }
//     console.log(`Factorial of ${i} is: ${factorial}`);
// }
