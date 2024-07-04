const prompt =  require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
let pronic=0;
for(let i =0;i<n;i++){
    // let k = i+1
    pronic  += i*(i+1)


}console.log(pronic);