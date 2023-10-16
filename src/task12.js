const side1 = 3;
const side2 = 4;
const side3 = 5;

const semiPerimeter = (side1 + side2 + side3) / 2;

const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));

console.log("Площадь треугольника:", area);