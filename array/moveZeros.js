const moveZeroes = function(nums) {
    let nonZeroIdx = 0; // Index to place the next non-zero element

    // Iterate through the array
    for (let currentIdx = 0; currentIdx < nums.length; currentIdx++) {
        // If the current element is non-zero, move it to the nonZeroIdx position
        if (nums[currentIdx] !== 0) {
            nums[nonZeroIdx] = nums[currentIdx];
            // If the current index is not equal to the nonZeroIdx, set the current index to 0
            if (currentIdx !== nonZeroIdx) {
                nums[currentIdx] = 0;
            }
            nonZeroIdx++; // Increment the nonZeroIdx
        }
    }
    return nums;
};

console.log(moveZeroes([0,0,1]))