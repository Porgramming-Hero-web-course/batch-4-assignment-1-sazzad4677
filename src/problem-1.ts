// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
const sumOfNumbers = (nums: number[]): number => {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return sum;
};

// console.log(`sumOfNumbers`, sumOfNumbers([1, 2, 3, 4, 5]));
