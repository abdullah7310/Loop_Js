const prompt =   require('prompt-sync')()



// Write a program to show how to find all the perfect numbers under 10,000.
// (already you know what is perfect number)	


let range = Number(prompt('enter the range >> '))

for(let i= 1; i<=range;i++){
    let sum =0;
    for(let j = 1;j<i;j++){
        if(i%j==0){
            sum += j
        }

    }
    if(sum == i){
    console.log(i);
}
   
}
