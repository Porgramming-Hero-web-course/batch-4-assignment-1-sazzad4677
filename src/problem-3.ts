// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

function countWordOccurrences(sentence: string, word: string): number {
  // Trim the sentence and convert it to lowercase to make the comparison case-insensitive
  sentence = sentence.trim().toLowerCase();

  // Split the sentence into words and count the occurrences of the given word
  const words = sentence.split(" ");
  const count = words.reduce((acc, cw) => {
    if (cw.toLowerCase() === word.toLowerCase()) {
      acc++;
    }
    return acc;
  }, 1);

  return count;
}

// Test the function
const totalWord = countWordOccurrences(
  "TypeScript is great. I love TypeScript!",
  "typescript"
);
console.log(totalWord);
