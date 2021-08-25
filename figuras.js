// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm.`);

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm.`);

function areaCuadrado(lado) {
  return Math.pow(lado, 2);
}
// console.log(`El área del cuadrado es: ${areaCuadrado}cm2.`);

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm.`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es: ${alturaTriangulo}cm.`);

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm.`);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log(`El área del triángulo es: ${areaTriangulo} cm2.`);

console.groupEnd();

// Código del círculo
console.group("Círculos");

const PI = Math.PI;
// const radioCirculo = 4;
// console.log(`El radio del círculo mide: ${radioCirculo}cm.`);

function diametroCirculo(radio) {
  return radio * 2;
}
// console.log(`El diámetro del círculo es: ${diametroCirculo}cm.`);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log(`El perímetro del círculo es: ${perimetroCirculo}cm.`);

function areaCirculo(radio) {
  return Math.pow(radio, 2) * PI;
}
// console.log(`El área del círculo es: ${areaCirculo}cm2.`);

console.groupEnd();
