const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
let sum =0 ;
// for(let i = 1;i<n;i++){
//     if(n%i==0){
//         sum += i;
//     }
// }
// if(sum == n){
//     console.log("Yes , It's a perfect number ");
// }else{
//     console.log("No , its not a perfect number");
// }

let i = 1;
while(i<n){
    if(n%i==0){
        sum += i;

    }
    i++;

}
if(sum == n){
    console.log("Yes , its a perfect number ");
}else{
    console.log("No , its not a perfect number ");
}