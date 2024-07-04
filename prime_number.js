const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
// let i = 1;
let count =0;
// while(i<=n){
//     if(n%i == 0){
//         count += 1;
//     }
//     i++;
// }
// if(count == 2){
//     console.log('Yes,its a prime number');
// }else{
//     console.log("No ,its not a prime number");
// }



//  ######################## for loop ####################33


for(let i = 1; i<=n ;i++){
    if(n%i == 0){
        count += 1;
    }
}
if(count == 2){
    console.log('Yes,its a prime number');
}else{
    console.log("No ,its not a prime number");
}