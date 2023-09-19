const minimumSwaps = (arr) => {
    const n = arr.length;
      let swaps = 0;
    
      for (let i = 0; i < n; i++) {
        while (arr[i] !== i + 1) {
          // Swap the current element with the element at its correct position
          const temp = arr[i];
          console.log(arr[i], arr[temp-1])
          arr[i] = arr[temp - 1];
          arr[temp - 1] = temp;
          
          swaps++;
        }
      }
    
      return swaps;
    
    }


    // Example usage:
const arr = [7, 1, 3, 2, 4, 5, 6];
const swaps = minimumSwaps(arr);
console.log("Minimum swaps:", swaps); // Output: Minimum swaps: 5