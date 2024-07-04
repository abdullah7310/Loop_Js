// const prompt = require('prompt-sync')()
// let n  = Number(prompt("enter the n >> "))
// let maximum = Number(prompt('enter the number 1 >> '))
// let max=0
// for(let i =1;i<n;i++){
//     let enter = Number(prompt(`enter the number ${i+1} >> `))
//     // let max =0;
//     if(maximum>enter){
//         console.log("*");
//         max = maximum;
//     }else{
//         max = enter;
//         console.log("*");
//     }
//     // max= enter;
// }
// console.log(maximum);


const prompt = require('prompt-sync')()

let n = Number(prompt("enter the n >> "));
let maximum = Number(prompt('enter the number 1 >> '));
let minumum=maximum;
for (let i = 1; i < n; i++) {
    let enter = Number(prompt(`enter the number ${i + 1} >> `));

    if (enter > maximum) {
        maximum = enter;
        // minumum = maximum;
    }
    if(enter>minumum){
        minumum=minumum
    }else{
        minumum = enter
    }
}

console.log(`The maximum number is ${maximum}`);
console.log(`The minimum number is ${minumum}`);
