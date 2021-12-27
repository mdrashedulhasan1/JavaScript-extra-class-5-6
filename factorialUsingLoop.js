// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5

// var fact = 1;
// for(i=1; i<=10; i++){
//     fact = fact*i;  //120
//     console.log(i+"!",fact);
// }

function factorial(num){
    var fact = 1;
    for(i=1; i<=num; i++){
        fact = fact*i;
    }
    return fact;
}
var result = factorial(5);
console.log(result);
