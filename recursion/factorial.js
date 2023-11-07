const factorial = (n) =>{
    if(n==0) return 1;
    return n * factorial(n-1);
}

const factorialForLoop = (n) =>{
    let result = 1;

    for(let i=1; i<=5;i++){
        result = result *i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorialForLoop(5));