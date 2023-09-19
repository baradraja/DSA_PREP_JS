const twoSum = (nums, target) =>{
    const numIndices = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }

    numIndices.set(nums[i], i);
  }

  return null; // No solution found
}
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
if (result) {
  console.log(result); // Output: [0, 1]
} else {
  console.log("No solution found.");
}
// leet code live

/*
var twoSum = function(nums, target) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i!=j){
                if(nums[i]+ nums[j] == target){
                arr.push(i);
                arr.push(j);
                return arr;
            }
            }
            
                
        }
    }
    
};

*/