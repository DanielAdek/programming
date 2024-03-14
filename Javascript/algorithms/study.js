// let i = 0;
//
// const postI = i++
// console.log("POST INCREMENT: ", postI)
//
// let ii = 0
// const preI = ++ii;
// console.log("PRE INCREMENT: ", preI)
//
// let iii = 0
// const compoundI = iii += 1;
// console.log("COMPOUND ASSIGNMENT: ", compoundI);


// const step = (lines) => {
//   for (let rol=0; rol < lines; rol++) {
//     let downStairs = "";
//     let upStairs = "";
//
//     for (let col=0; col < lines; col++) {
//       downStairs += rol > col ? " " : "#";
//       upStairs += col <= rol ? "#" : " ";
//     }
//
//     console.log(upStairs, downStairs, upStairs, downStairs, upStairs, downStairs, upStairs, downStairs);
//   }
// }
//
// step(4)

const obj = { name: "Dan"};

const weakMap = new WeakMap();

weakMap.set(obj, "{ name: obj }");

console.log(weakMap);

function minSubarrayLength(target, nums) {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right  ++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLength !== Infinity ? minLength : 0;
}

console.log(minSubarrayLength(7,[2,3,1,2,4,3]))