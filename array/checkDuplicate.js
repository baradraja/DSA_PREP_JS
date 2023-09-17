const checkDuplicate = (nums) => {
    let check = false;;
    let ref = {};

    nums.forEach(element => {
       if(ref[element]){
        check = true;
       } else{
        ref[element] = true;
       }
            
    });
      
    
    return check;
  }
  
  // Example usage:
  const nums = [1, 3, 5, 7];
  const result = checkDuplicate(nums);
  console.log(result); 
  