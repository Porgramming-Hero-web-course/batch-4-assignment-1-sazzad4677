This repository contains the solution of various types of coding challenges. All implemented in the Type Script programming language.

### Table of Contents

- [About](#about)
- [Problem List](#problem-list)
- [How to Run](#how-to-run)
- [License](#license)

### About

This repo is a collection of TypeScript solutions to various typescript difficulties. Each problem file contains code for solving a coding task. The solutions are organized in the `src` folder, with each problem solution put in its own TypeScript file.

### Problem List

The following problems are solved in this repository:

1. **Problem 1**: [Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.](src/problem-1.ts)
2. **Problem 2**: [Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.](src/problem-2.ts)
3. **Problem 3**: [Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.](src/problem-3.ts)
4. **Problem 4**: [Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.](src/problem-4.ts)
5. **Problem 5**: [Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.](src/problem-5.ts)
6. **Problem 6**: [Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.](src/problem-6.ts)
7. **Problem 7**: [Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.](src/problem-7.ts)
8. **Problem 8**: [Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.](src/problem-8.ts)

Each file contains TypeScript code that solves the respective problem. The solution is structured with comments to explain the logic behind the code, making it easier to follow and understand.

### How to Run

1. Clone the repository:

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Compile the TypeScript code:

   ```bash
   yarn tsc
   ```

4. Run a specific problem solution:

   ```bash
   yarn start problem-1
   ```

   Replace `problem-1` with the desired problem file (e.g., `yarn start problem-2`, `yarn start problem-3`, etc.) to execute the solution for that problem.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
