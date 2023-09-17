const rotateArray = (nums, k) => {
    if([0,1].includes(nums.length))
        return nums;
    for (let index = 0; index < k; index++) {
        let element = nums.pop()
        nums.unshift(element);
    }
   
    return nums;
  }
  
  // Example usage:
  const nums = [1,2,3,4,5,6,7];
  const k =3;
  const result = rotateArray(nums, k);
  console.log(result); 
  /*

function rotate(nums, k) {
    const n = nums.length;

    // Handle cases where k is greater than the array length
    k %= n;

    // Reverse the entire array
    reverse(nums, 0, n - 1);

    // Reverse the first k elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining elements
    reverse(nums, k, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end positions
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Test case
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]


  */