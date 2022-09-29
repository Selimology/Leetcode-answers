var isAnagram = function (s, t) {
  // if the length doesn't match, automatically return false;
  return s.split('').sort().join('') == t.split('').sort().join('');
};

//Time complexity  - O(nlogn)
//Space complexity - O(1)
