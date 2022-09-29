var isAnagram = function (s, t) {
  // if the length doesn't match, automatically return false;
  if (s.length !== t.length) return false;

  //create a hashmap to keep all the letters
  let lettersMap = {};

  //loop through the array
  for (let i = 0; i < s.length; i++) {
    // if index at s array matches the index add one two hashmap otherwise return 1;
    lettersMap[s[i]] = lettersMap[s[i]] ? lettersMap[s[i]] + 1 : 1;
    // if index at t array matches the index substract one two hashmap otherwise return -1;
    lettersMap[t[i]] = lettersMap[t[i]] ? lettersMap[t[i]] - 1 : -1;
  }

  //loop through all the letters of the hashmap LettersMap
  for (let i in lettersMap) {
    //if the total letters doesn't equal to 0 (from +1 and -1)
    if (lettersMap[i] !== 0) {
      return false;
    }
  }
  //of total letters equal to 0 return true;
  return true;
};

//Time complexity  - O(n) or O(s+t)
//Space complexity - O(n) or O(s+t)
