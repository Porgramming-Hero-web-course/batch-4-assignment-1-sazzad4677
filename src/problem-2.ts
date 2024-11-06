// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


const removeDuplicates = (nums: number[]): number[] => {
  return [...new Set(nums)];
};
