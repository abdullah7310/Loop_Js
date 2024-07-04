const prompt = require('prompt-sync')()
let m = Number(prompt("enter the starting number (m) >> "))
let n = Number(prompt("enter the last point (n) >> "))
let perfectSquare=0;
for(let i = m ;i<=n;i++){
    for(let j=1;j<=i;j++){
        if(j*j==i){
            perfectSquare +=1;
            console.log(i);
        }
    }
}
console.log("total number of perfect square ",perfectSquare);