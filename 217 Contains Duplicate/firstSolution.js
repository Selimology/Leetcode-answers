var containsDuplicate = function (nums) {
  nums = nums.sort();
  // if array [1,3,4,2] sorted is [1,2,3,4]

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return false;
};

//Time Complexity - O(nlogn)
//Space Complexity O(1
