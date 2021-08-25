// Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return Math.pow(lado, 2);
}

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Código del círculo
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return Math.round(diametro * PI * 100) / 100;
}

function areaCirculo(radio) {
  return Math.round(Math.pow(radio, 2) * PI * 100) / 100;
}

// Interacciones con HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);

  alert(`Perímetro: ${perimetro}cm.`);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);

  alert(`Área: ${area}cm2.`);
}

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputLadoTriangulo1");
  const inputLado2 = document.getElementById("InputLadoTriangulo2");
  const inputBase = document.getElementById("InputBaseTriangulo");

  const valueLado1 = Number(inputLado1.value);
  const valueLado2 = Number(inputLado2.value);
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

  alert(`Perímetro: ${perimetro}cm.`);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputBaseTriangulo");
  const inputAltura = document.getElementById("InputAlturaTriangulo");

  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value;

  const area = areaTriangulo(valueBase, valueAltura);

  alert(`Área: ${area}cm2.`);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);

  alert(`Perímetro: ${perimetro}cm.`);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);

  alert(`Área: ${area}cm2.`);
}
