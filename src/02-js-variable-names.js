function sumPositiveNumbers(nums) {
  let positiveSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positiveSum += nums[i];
    }
  }
  return positiveSum;
}
  
const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(sumPositiveNumbers(numbers));