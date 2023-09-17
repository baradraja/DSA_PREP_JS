const input1 = ['a', 'b', 'c', 'x'];
//const input2 = ['y', 'z', 'i'];
const input2 = ['y', 'z', 'x'];

const commonItem = (input1, input2) => {
   
    for (let index = 0; index < input1.length; index++) {
        for (let index2 = 0; index2 < input2.length; index2++) {
            const element = input1[index];
            const element2 = input2[index2];
            if(element === element2)
            return true;
        }
  
    }
    return false;
}

const commonItem2 = (input1, input2) => {
    let map = {}
    for (let index = 0; index < input1.length; index++) {
       
        if(!map[index]){
            const element = input1[index];
            map[element] = true;
        }
    }
    for (let index2 = 0; index2 < input2.length; index2++) {

            const element = input2[index2];
            if(map[element])
                return true;
        
    }
    return false;
}

console.log(commonItem2(input1, input2));