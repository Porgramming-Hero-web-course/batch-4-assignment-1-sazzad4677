function countWordOccurrences(sentence: string, word: string): number {
  // Trim the sentence and convert it to lowercase to make the comparison case-insensitive
  sentence = sentence.trim().toLowerCase();

  // Split the sentence into words and count the occurrences of the given word
  const words = sentence.split(" ");
  const count = words.reduce((acc, cw) => {
    if (cw.includes(word)) {
      acc++;
    }
    return acc;
  }, 0);

  return count;
}

// Test the function
// const totalWord = countWordOccurrences(
//     "TypeScript is great. I love TypeScript!",
//     "typescript"
// );
// console.log(totalWord);
