/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  l = preferences.length; 
  let c = 0;  
  for (let i = 0; i < l; i++) { 
      let k1 = preferences[i] - 1;
      if (k1 == i) continue;
      let k2 = preferences[k1] - 1;
      if (k1 == k2) continue;
      let k3 = preferences[k2] - 1;
      if (k3 == k2) continue;
      if (k3 == i) {
          c++;
      }
   }
   return c / 3;
  // your implementation
};
