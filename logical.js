const prompt = require('prompt-sync')()
// let sum = 0;
// for(;;){
//     let enter = Number(prompt("enter the number >> "))
//     sum += enter
//     if(enter<0){
//         console.log(sum);

//     }
// } 

// 

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// let n = Number(prompt("enter the number >> "))
// while(n>=10){
//     let sum =0;
//     while(n>0){
//         let rem = n%10
//     sum += rem
//     n = Math.floor(n/10)
//     }
//     n = sum

    
// }
// console.log(n);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// let m = Number(prompt("enter the starting nuumber  >> "))
// let d = Number(prompt("enter the common differnece (d) >> "))
// let n = Number(prompt("enter the number you want >> "))
// let count =1;
// let sum = 1 ;
// for(let i=m;count<=n;i++){
//     sum += i*d
   
//     count +=1;
//     // n = count
// } console.log(sum);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let n = Number(prompt("enter the number >> "))
let first;
for(let i =n-1;i<n;i++){
     first = n%10;
    n = Math.floor(n/10)

}
let differ;
let max;
for(let i= 1;n>0;i++){
    let second = n%10;
    if(first > second){
        differ = first-second;
        if(differ ===1){
            max = "true"
        }else{
            max = "false"
        }
    }else{
        differ = second - first;
        if(differ ===1){
            max = "true"
        }else{
            max = "false"
        }
    }
    n = Math.floor(n/10)
    first = second
    
}

console.log(max);


