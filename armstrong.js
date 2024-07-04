const prompt = require("prompt-sync")()
let n = Number(prompt('enter the number >>> '))
let m= n;
let p = n;
let count=0;
let sum=0;

for(let i=1;n>0;i++){
    let reminder;
    reminder = n%10;
    count +=1;
    n= Math.floor(n/10)
}
for(let j = 1;m>0;j++){
    let s = m%10;
    let pow = s**count;
    sum += pow;
    m= Math.floor(m/10)
}
if(sum == p){
    console.log("yes it is armstrong ");
}else{
    console.log("no it is not armstrong");
}