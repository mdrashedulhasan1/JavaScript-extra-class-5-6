

function fibonacci(n){
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1];
    }
    else{
        var fibo = fibonacci(n-1);
        var nextNumber = fibo[n-1]+fibo[n-2];
        fibo.push(nextNumber);
        return fibo
    }
}
var result = fibonacci(5);
console.log(result);