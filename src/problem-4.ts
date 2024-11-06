// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// approach 1
type Circle = { shape: "circle"; radius: number };

type Rectangle = { shape: "rectangle"; width: number; height: number };

function calculateShapeArea(shape: Circle | Rectangle): number {
  let radius = 0;
  if (shape.shape === "circle") {
    radius = Math.PI * shape.radius * shape.radius;
  } else if (shape.shape === "rectangle") {
    radius = shape.width * shape.height;
  } else {
    throw new Error("Invalid shape type");
  }
  return radius;
}

// test function
// const shape = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
// console.log(shape);
