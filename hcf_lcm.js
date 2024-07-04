const prompt = require('prompt-sync')()
let a = Number(prompt('enter a >> '))
let b = Number(prompt("enter b >> "))
let min,max,hcf,lcm;
if(a<b){
    min=a;
    max=b;
}else{
    min=b;
    max = a;
}
// for(let i=1;i<=min;i++){
//     if(a%i==0 && b%i==0){
//         hcf = i;
//     }
//     
// }
// lcm = (a*b)/hcf
// console.log(hcf,lcm);
let i = 1;
while(i<=min){
    if(a%i == 0 && b%i ==0){
        hcf = i;
        
    }
    i++;
}
lcm = (a*b)/hcf
console.log(hcf,lcm);