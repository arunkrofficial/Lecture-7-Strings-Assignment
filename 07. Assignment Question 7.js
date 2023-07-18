function backspaceCompare(s, t) {
    const stackS = buildStack(s);
    const stackT = buildStack(t);
  
    if (stackS.length !== stackT.length) {
      return false; // If the stacks have different lengths, the strings are not equal
    }
  
    while (stackS.length > 0) {
      if (stackS.pop() !== stackT.pop()) {
        return false; // If the characters at the top of the stacks are different, the strings are not equal
      }
    }
  
    return true; // All characters match, the strings are equal
  }
  
  function buildStack(str) {
    const stack = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') {
        stack.pop(); // Remove the top element from the stack (backspace)
      } else {
        stack.push(str[i]); // Push the character onto the stack
      }
    }
  
    return stack;
  }
  const s = "ab#c";
  const t = "ad#c";
  
  console.log(backspaceCompare(s, t)); // Output: true
    