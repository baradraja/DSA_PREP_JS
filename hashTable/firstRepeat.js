const firstrepeat = (arr) =>{
    const ref = {};
    let result = undefined;
    for(let i=0; i< arr.length; i++){
        const element = arr[i];
        if(ref[element]){
            result = element;
            break;
        }    
        else{

            ref[element] = true;
        }
    };

    return result;
}


const arr = [1,2,3,4, 1];

console.log(firstrepeat(arr));
