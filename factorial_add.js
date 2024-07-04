const prompt = require('prompt-sync')()
let n = Number(prompt('enteer the number >>  '))
let sum=0;
let k =n;
for(let i =1 ; n>0;i++){
    let rem = n%10;
    let factorial = 1;
    for(let j = 1;j<=rem;j++){
        
        factorial  *= j;
    }
    // let k;
n = Math.floor(n/10)
    sum += factorial;
}
if(sum == k){
    console.log('Yes true');
}else{
    console.log("no false");
}
