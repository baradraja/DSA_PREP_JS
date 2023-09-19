const arrayManipulation = (n, queries) =>{
    let result = 0;
    const arr = new Array(n).fill(0);

    queries.forEach(innerArray => {
        for (let index = 0; index < arr.length; index++) {

            if(index+1 <= innerArray[1] && index+1 >= innerArray[0]){
                arr[index] = arr[index] + innerArray[2];
            }
            
        }
    });
    result = arr.reduce((a,b) => Math.max(a,b), -Infinity)

    return result;
}

const n= 10;
const queries = [[1,5,3], [4,8,7], [6,9,1]];

console.log(arrayManipulation(n, queries))