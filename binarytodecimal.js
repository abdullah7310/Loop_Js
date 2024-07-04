const prompt = require('prompt-sync')();

let decimal = Number(prompt("Enter a decimal number: "));
let originalDecimal = decimal;
let binary = "";

if (decimal === 0) {
    binary = "0";
} else {
    while (decimal > 0) {
        let remainder = decimal % 2;
        binary = remainder + binary; // Prepend remainder to the binary string
        decimal = Math.floor(decimal / 2);
    }
}

console.log(`The binary representation of ${originalDecimal} is: ${binary}`);
