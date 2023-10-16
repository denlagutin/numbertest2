function calculateTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
let side1 = parseFloat(prompt("Введите длину первой стороны треугольника:"));
let side2 = parseFloat(prompt("Введите длину второй стороны треугольника:"));
let side3 = parseFloat(prompt("Введите длину третьей стороны треугольника:"));
let triangleArea = calculateTriangleArea(side1, side2, side3);
console.log("Площадь треугольника:", triangleArea);