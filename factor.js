const prompt = require('prompt-sync')()
let n = Number(prompt("enter the nummber >> "))
let i= 1;
// while(i<=n){
//     if(n%i==0){
//         console.log(i);
//     }
//     i++;
// }


//  for looop 

for(let i =1 ;i<=n;i++){
    if(n%i==0){
        console.log(i);
    }
}