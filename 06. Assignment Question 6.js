function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false; // If the lengths are different, s can't become goal
    }
  
    const rotated = s + s;
  
    return rotated.includes(goal);
  }
  const s = "abcde";
  const goal = "cdeab";
  
  console.log(rotateString(s, goal)); // Output: true
    