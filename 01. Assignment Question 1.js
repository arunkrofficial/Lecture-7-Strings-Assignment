function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false; 
  }

  const mapS = new Map(); // Map to store the mapping from s to t
  const mapT = new Map(); 

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if ((mapS.has(charS) && mapS.get(charS) !== charT) ||
        (mapT.has(charT) && mapT.get(charT) !== charS)) {
      return false; 
    }

    mapS.set(charS, charT);
    mapT.set(charT, charS);
  }

  return true; 
}
const s = "egg";
const t = "add";

console.log(isIsomorphic(s, t)); 
