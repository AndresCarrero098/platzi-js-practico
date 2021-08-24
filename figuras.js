// Código del cuadrado
console.group('Cuadrados');

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm.`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm.`);

const areaCuadrado = Math.pow(ladoCuadrado, 2);
console.log(`El área del cuadrado es: ${areaCuadrado}cm2.`);

console.groupEnd();


// Código del triángulo
console.group('Triángulos');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm.`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es: ${alturaTriangulo}cm.`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm.`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo} cm2.`);

console.groupEnd();


// Código del círculo
console.group('Círculos');

const PI = Math.PI;
const radioCirculo = 4;
console.log(`El radio del círculo mide: ${radioCirculo}cm.`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es: ${diametroCirculo}cm.`);

const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del círculo es: ${perimetroCirculo}cm.`);

const areaCirculo = Math.pow(radioCirculo, 2) * PI;
console.log(`El área del círculo es: ${areaCirculo}cm2.`);

console.groupEnd();
