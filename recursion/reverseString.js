const reverseString = (str) =>{
    let strArr = str.split('');
    if(strArr.length === 1) return strArr[0];
    let last = strArr.pop();
    console.log(last)
    return last+reverseString(strArr.join(''));
}

console.log(reverseString('hello'))