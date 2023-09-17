function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0; // Index for arr1
    let j = 0; // Index for arr2
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // If there are remaining elements in arr1 or arr2, add them to the merged array
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage:
  const sortedArray1 = [1, 3, 5, 7];
  const sortedArray2 = [2, 4, 6, 8];
  
  const mergedArray = mergeSortedArrays(sortedArray1, sortedArray2);
  console.log(mergedArray);
  