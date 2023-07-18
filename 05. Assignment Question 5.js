function reverseStr(s, k) {
    const arr = s.split(''); // Convert the string to an array of characters
  
    for (let i = 0; i < arr.length; i += 2 * k) {
      let start = i; // Start index of the segment
      let end = Math.min(i + k - 1, arr.length - 1); // End index of the segment
  
      // Reverse the characters in the segment
      while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
  
    return arr.join(''); // Convert the array back to a string
  }
  const s = "abcdefg";
  const k = 2;
  
  console.log(reverseStr(s, k)); // Output: "bacdfeg"
    