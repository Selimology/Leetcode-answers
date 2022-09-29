// [1,2,3,1]

let nums = [1, 2, 3, 1];
let containsDuplicate = function (nums) {
  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    //if nums[i] is in memory, return true
    if (nums[i] in memory) {
      return true;
    } else {
      //add to memory
      memory[nums[i]] = i;
    }
  }
  //if never founds duplicate, return false
  return false;
};

//Time Complexity - O(n) - because we are looping through the array once
//Space Complexity O(n) - because we are creating a new object
