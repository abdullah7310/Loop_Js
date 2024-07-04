// Write a program to find the sum of the squares of the first 9 natural numbers that are divisible by 3.

const prompt = require('prompt-sync')()

let count = 0;
let sum = 0;
// for(let i = 1;count<9;i++){
//         if(i%3==0){
//             let square = i*i;
//             sum += square;
//             count++;
//         }
// }
// console.log(sum);


// $$$$$$$$$$$$$$$$$$$$$$$    WHILE LOOP    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

let i = 1;
while(count<9){
    if(i%3 == 0){
        let sqr = i*i;
        sum += sqr;
        count++;
    }
    i++;
}
console.log(sum);