const prompt = require('prompt-sync')()

/*


*****
*****
*****
*****
*****
*/
// let n = Number(prompt("enter the number >> "))
// for(let i =1;i<=n;i++){
//     for(let j = 1;j<=n;j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }



// ********************************************************************************************************************


// *
// **
// ***
// ****
// *****


// let n = Number(prompt("enter the number >> "))
// for(let i = 1;i<=n;i++){
//     for(let j = 1;j<=n-i;j++){
//             process.stdout.write(" ")
//     }
//     for(let k = 1;k<=i;k++){
//         process.stdout.write("*")

//     }console.log();
// }

// ************************************************************************************************************************

//       *
//      * *
//     * * *
//    * * * *
//   * * * * *



// let n = Number(prompt("enter the number >> "))
// for(let i =1; i<=n; i++){
//     for(let j = 1;j<=n-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k =1;k<=i;k++){
//         process.stdout.write("*"+" ")

//     }console.log();
// }


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// *****
//  ****
//   ***
//    **
//     *


// let n = Number(prompt("enter the number >> "))
// for(let i =1;i<=n;i++){
//     for(let j = 1;j<i;j++){
//      process.stdout.write(" ")

//     }
//     for(let k = 1;k<=(n+1)-i;k++){
//         process.stdout.write("*")

//     }console.log();
// }


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// * * * * *
// * * * *
// * * *
// * *
// *


// let n = Number(prompt("enter the number >> "))
// for(let i = n;i>0;i--){
//     for(let j=i;j>0;j--){
//         process.stdout.write("*"+" ")
//     }console.log();
// }

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// * * * * *
//  * * * *
//   * * *
//    * *
//     * 

// let n = Number(prompt("enter the number >> "))
// for(let i =1;i<=n;i++){
//     for(j=1;j<i;j++){
//         process.stdout.write(" ")
//     }
//     for(k=1;k<=(n-i)+1;k++){
//         process.stdout.write("*"+" ")
//     }console.log();
// }

// ******************************************************************************************************

// * * * * *
//  * * * * *
//   * * * * *
//    * * * * *
//     * * * * * 

// let n = Number(prompt("enter the number >> "))
// for(let i = 1;i<=n;i++){
//     for(let j = 1;j<i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1;k<=n;k++){
//         process.stdout.write("* ")

//     }console.log();
// }



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     *


// let n = Number(prompt("enter the number >> "))
// for(let i = 1;i<=n;i++){
//     for(let j= 1;j<=(n-i);j++){
//         process.stdout.write(" ")
//     }
//     for(let k =1;k<=i;k++){
//         process.stdout.write("* ")
//     }console.log();
// }

// for( let i=n-1 ;i>0;i--){
//     for(let j=1;j<=(n-i);j++){
//         process.stdout.write(" ")
//     }
//     for(let k =1 ;k<=i;k++){
//         process.stdout.write("* ")

//     }console.log();
// }
// 



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// * * * * *
//  * * * *
//   * * *
//    * *
//     *
//    * *
//   * * *
//  * * * *
// * * * * *


// let n = Number(prompt("enter the number >> "))
// for(let i = 1;i<=n;i++){
//     for(let j= 1;j<i;j++){
//             process.stdout.write(" ")
//     }
//     for(let k = 1;k<=(n-i)+1;k++){
//         process.stdout.write("* ")
//     }console.log();
// }
// for(let i = (n-1);i>0;i--){
//     for(let j = 1;j<i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1;k<=(n-i)+1;k++){
//         process.stdout.write("* ")
//     }console.log();
// }


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// * * * * *
// *       *
// *       *
// *       *
// * * * * *


// let n = Number(prompt("enter the number >> "))
// for(let i = 1;i<=n;i++){
//     for(j = 1;j<=n;j++){
//         if(i==1 || j==1 || i==n || j==n){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")

//         }
//     }console.log();
// }


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//     *
//    * *
//   *   *
//  *     *
// *********

// let n = Number(prompt("enter the number >> "))
// for(let i =1;i<=n;i++){
//     for(let j = 1;j<=(n-i);j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1;k <= (2*i)-1;k++){
//         if(k ==1 || k == (2*i)-1 || i == n){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }console.log();
// }

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *


// let n = Number(prompt("enter the number "))
// for(let i=1;i<=n;i++){
//     for(j = 1;j<=n-i;j++){
//         process.stdout.write(" ")
//     }
//     for(k = 1;k<=(2*i)-1;k++){
//         if(k==1 || k == (2*i)-1 ){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
        
//     }console.log();
// }
// for(let i = n-1;i>0;i--){
//     for(j = 1;j<=(n-i);j++){
//         process.stdout.write(" ")
//     }
//     for(k = 1;k<=(2*i)-1;k++){
//         if(k==1 || k == (2*i)-1){
//             process.stdout.write("*")

//         }else{
//             process.stdout.write(" ")
//         }
//     }console.log();
// }


/* 
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7




* * * * * 
 *     * 
  *   * 
   * * 
    * 
   * * 
  *   * 
 *     * 
* * * * * 



*/



// let n=Number(prompt("enter the number >> "))
// for(let i = 1;i<=n;i++){
//     for(let j = 1;j<i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k= 1;k<=(n-i)+1;k++){
//         if( k==1 || k==(n-i)+1 || i==1){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")
//         }
    
//     }console.log();
// }
// for(let i = n-1;i>0;i--){
//     for(let j = 1;j<i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1;k<=(n-i)+1;k++){
//         if(k==1 || k == (n-i)+1 || i == 1){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")
//         }
//     }console.log();
// }

/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

 1
 2 3
 4 5 6
 7 8 9 10

*/

// let n = Number(prompt("enter the number >> "))
// let count = 1
// for(let i = 1;i<=n;i++){
//     let str = " "
    
//    for(let j = 1;j<=i;j++){
//     str += (count) +" "
//     count++;
    
  
//    }console.log(str);
// }
// const prompt = require('prompt-sync')();

//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1


// let n = Number(prompt("Enter the number of rows >> "));

// for(let i =0 ;i<n;i++){
//     for(let j=0;j<n-i-1;j++){
//         process.stdout.write(" ")
//     }
//     let value = 1
//     for(let k = 0;k<=i;k++){
//         process.stdout.write(value + " ")
//         value = value *(i-k)/(k+1);
//     }

//     console.log();
// }

