// 1! = 1
// 2! = 2*1!
// 3! = 3*2!
// 4! = 4*3!
// 5! = 5*4!
//n! = n*(n-1)
function factorialRecursiveFunction(n){
    if(n == 0){
        return 1;
    }
    else{
        return n*factorialRecursiveFunction(n-1);
    }
}
var result = factorialRecursiveFunction(5);
console.log(result);