const minimumBribes = (queue) => {
    let bribes = 0;
    for (let i = 0; i < queue.length; i++) {
      const originalPosition = queue[i] - 1; // Adjust for 0-based indexing
      const currentPosition = i;
      
      if (originalPosition - currentPosition > 2) {
        console.log("Too chaotic");
        return;
      }
  
      for (let j = Math.max(0, originalPosition - 1); j < i; j++) {
        if (queue[j] > queue[i]) {
          bribes++;
        }
      }
    }
  
    console.log(bribes);
  }
  
  // Example usage:
  const queue1 = [2, 1, 5, 3, 4];
  const queue2 = [2, 5, 1, 3, 4];
  const queue3 = [1, 2, 3, 4, 5];
  
  minimumBribes(queue1); // Output: 3
  minimumBribes(queue2); // Output: Too chaotic
  minimumBribes(queue3); // Output: 0
  