// [1,2,3,1]

let nums = [1, 2, 3, 1];
let containsDuplicate = function (nums) {
  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i] === undefined]) {
      // if not found in memory, add it to memory
      memory[nums[i]] = i;
    } else {
      // if return true, because it is found in memory
      return true;
    }
  }
  //if never founds duplicate, return false
  return false;
};

//Time Complexity - O(n) - because we are looping through the array once
//Space Complexity O(n) - because we are creating a new object
