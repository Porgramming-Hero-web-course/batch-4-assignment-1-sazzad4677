const args = process.argv.slice(2);
const fileName = args[0];

if (!fileName) {
  console.error("Please provide a filename to run.");
  process.exit(1);
}

// Dynamically import the file based on the argument
import(`./${fileName}.ts`)
  .then((module) => {
    console.log("File executed successfully");
  })
  .catch((err) => {
    console.error("Error executing the file:", err);
    process.exit(1);
  });
