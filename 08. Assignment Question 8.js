function checkStraightLine(coordinates) {
    if (coordinates.length <= 2) {
      return true; // If there are 2 or fewer points, they always form a straight line
    }
  
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const initialSlope = getSlope(x0, y0, x1, y1);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [xi, yi] = coordinates[i];
      const [xiMinus1, yiMinus1] = coordinates[i - 1];
      const slope = getSlope(xiMinus1, yiMinus1, xi, yi);
  
      if (slope !== initialSlope) {
        return false; // If any slope is different, the points do not form a straight line
      }
    }
  
    return true; // All slopes are equal, the points form a straight line
  }
  
  function getSlope(x1, y1, x2, y2) {
    if (x1 === x2) {
      return Infinity; // Handle vertical lines
    }
  
    return (y2 - y1) / (x2 - x1);
  }
  const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];

  console.log(checkStraightLine(coordinates)); // Output: true
    