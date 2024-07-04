// const prompt = require('prompt-sync')();

//  X+(X^2)/2+(X^3)/3+(X^4)/4 ....upto n terms

// let x = Number(prompt("Enter the value of X: "));
// let n = Number(prompt("Enter the number of terms (n): "));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += (x ** i) / i;
// }

// console.log("Sum of the series is:", sum);

// **************************************************************************

// X-(X^3)/3+(X^5)/5-(X^7)/7+(X^9)/9-.... upto n terms

// for(let i =0;i<n;i++){
//     let k;
//     k =( x**((i*2)+1))/((i*2)+1)
//     if(i%2==0){
//         sum += k;
//     }else{
//         sum -= k;
//     }
// }
// let m = sum.toFixed(2)
// console.log(m);


// ************************************************************


//  X-(X^3)/3!+(X^5)/5!-(X^7)/7!+ .... upto n terms


const prompt = require('prompt-sync')();
let x = Number(prompt("Enter the value of X: "));
let n = Number(prompt("Enter the number of terms (n): "));
let sum = 0;

// for (let i = 0; i < n; i++) {
//     let factorial = 1;
//     let power = (2 * i) + 1;  // Calculate the power term (1, 3, 5, 7, ...)
    
//     // Calculate factorial of power
//     for (let j = 1; j <= power; j++) {
//         factorial *= j;
//     }
    
//     // Calculate the term and add/subtract from the sum
//     let term = (x ** power) / factorial;
//     if (i % 2 === 0) {
//         sum += term;
//     } else {
//         sum -= term;
//     }
// }

// let result = sum.toFixed(2);
// console.log(result);

for(let i =0;i<n;i++){
    let factorial = 1;
    let power = (2*i)+1;
    for(let j=1;j<=power;j++){
        factorial *= j;
    }
    let term = (x ** power)/factorial
    if(i%2 == 0){
        sum +=  term;
    }else{
        sum -= term;
    }
}
let result = sum.toFixed(2)
console.log(result);

