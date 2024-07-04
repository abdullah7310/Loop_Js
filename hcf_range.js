// const prompt = require('prompt-sync')()
// let t = Number(prompt('enter the number of testcase >> '))
// let enter;
// // let count =" " ;
// for(i=0;i<t;i++){
//      enter = Number(prompt("enter the number >> "))
//     console.log(enter);

// }   

// let min,max,hcf,lcm;
// if()

const prompt = require('prompt-sync')();

let t = Number(prompt('Enter the number of test cases >> '));

// Initialize hcf with the first number
let hcf = Number(prompt(`Enter number 1 >> `));

// Function to compute gcd without using a separate function
for (let i = 1; i < t; i++) {
    let enter = Number(prompt(`Enter number ${i + 1} >> `));

    // Compute the HCF of the current hcf and the new number
    let a = hcf;
    let b = enter;
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    hcf = a;
}

console.log(`The HCF of the given numbers is: ${hcf}`);
