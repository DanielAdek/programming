// 07055447288
// 08141755044

const removeElement = (nums, val) => {
  let count = 0;
  let lastElement = nums.length;

  for (let i=0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[nums.length] = nums[i];
      nums.length = nums.length - 1;
    } else {
      count++
    }
  }
  return count;
}

console.log(removeElement([1, 5, 2, 7, 4, 4, 2, 6, 9], 4))

