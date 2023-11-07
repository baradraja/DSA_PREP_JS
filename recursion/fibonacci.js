const fibonacci = (n) =>{
    if(n==0) return 0;
    if(n==1) return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(8));

for(let i=0; i<=8; i++){
    console.log(fibonacci(i))
}


const fibIterative = (n) =>{
    let arr = [0,1];

    for (let i=2; i<=n; i++){
        arr.push(arr[i-2]+arr[i-1]);
    }
    return arr
}
console.log(fibIterative(8))