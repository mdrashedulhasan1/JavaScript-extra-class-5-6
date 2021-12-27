//0,1,1,2,3,5,8,13,21,34,55,89,144,.........
function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
var result = fibonacci(12);
console.log(result);