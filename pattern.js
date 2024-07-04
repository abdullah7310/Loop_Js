// Create a pyramid of numbers consisting of a given number of lines. For example, if the given number is 5, then we should see the following:
// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

const prompt = require('prompt-sync')()
// let n = Number(prompt("enter the n >> "))
// for(let i = 1;i<=5;i++){
//     let a ="";
//     for(j =1;j<=i;j++){
//         a += j;
//     }
//     for(k = i-1;k>=1;k--){
//         a +=  k;
//     }
//     console.log(a);
// }


/* 
Write a program to print the following patterns with flexible dimensions as supplied by the user:
Note: Use nested loops and not string multiplication to print these patterns.
N = 5
*
* *
* * *
* * * *
* * * * *


*/


// const prompt=require('prompt-sync')()
// let n = Number(prompt("enter the n >> "))
// for(let i =n;i>0;i--){
//     a = ""
//     for(j = 1;j<=i;j++){
//         a +="*";
//     }
//     console.log(a);
// }



/* 

	Write a program to print the following patterns with flexible dimensions as supplied by the user:
Note: Use nested loops and not string multiplication to print these patterns.
N = 5
* * * * *
* * * *
* * *
* *
*


*/

// const prompt = require('prompt-sync')()
// let n = Number(prompt("enter the n >> "))
// for(let i = n; i>0; i--){
//     // a = ""
//     for(j = 1 ; j<=i; j++){
//         process.stdout.write("*")
//         // a +="*"
//     }
//     // console.log(a);
//     console.log();

// }

// Write a program to print the following patterns with flexible dimensions as supplied by the user:
// Note: Use nested loops and not string multiplication to print these patterns.
// N = 4
// *
// * * *
// * * * * *
// * * * * * * *

// const prompt = require('prompt-sync')()
// let n = Number(prompt("enter the n >> "))
// for(let i =1;i<=n;i++){
//     for(j = 1; j<=(i*2)-1;j++){
//                 process.stdout.write("*")
//     }
//     console.log();
// }


// Write a program to print the following patterns with flexible dimensions as supplied by the user:
// Note: Use nested loops and not string multiplication to print these patterns.
// N = 4
// *
// * * *
// * * * * *
// * * * * * * *
// * * * * *
// * * *
// *

// const prompt = require('prompt-sync')()
// let n = Number(prompt("enter the n >> "))
// for(let i = 1;i<=n;i++){
//     for(j = 1;j<=(i*2)-1;j++){
//             process.stdout.write("*")
//     }
//     console.log();
// }for(let i = (n-1);i>0;i--){
//     for(let j = 1; j<= (i*2)-1;j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

let m = Number(prompt("enter the number of rows >> ")) 
let n = Number(prompt("enter the number of coloumn >> "))
for(let i=1;i<=m;i++){
	for(let j = 1;j<=n;j++){
		process.stdout.write("*")
	}console.log();
}
