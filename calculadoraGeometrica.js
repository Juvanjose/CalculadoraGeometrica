let opcao = "";
function areaDoTriangulo(numero1, numero2) {
  let areaTriangulo = (numero1 * numero2) / 2;
  return areaTriangulo;
}
function areaDoRetangulo(numero1, numero2) {
  let areaRetangulo = numero1 * numero2;
  return areaRetangulo;
}
function areaDoQuadrado(numero1) {
  let areaQuadrado = numero1 * numero1;
  return areaQuadrado;
}
function areaDoTrapezio(baseMaior, baseMenor, altura) {
  let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;
  return areaTrapezio;
}

function areaDoCirculo(raio) {
  let areaCirculo = 3.14 * (raio * raio);
  return areaCirculo;
}

do {
  opcao = prompt(
    "Bem vindo a calculadora Geométrica! Escolha abaixo as opções\n\n" +
      "1. área do triângulo \n2. Área do retângulo \n3. Área do quadrado \n4. Área do trapézio \n5. Área do circulo \n6. Sair\n"
  );
  if (opcao == "1") {
    let numero1 = parseFloat(prompt("Qual o valor da base?"));
    let numero2 = parseFloat(prompt("Qual o valor da altura"));

    alert(areaDoTriangulo(numero1, numero2));
  } else if (opcao == "2") {
    let numero1 = parseFloat(prompt("Qual o valor da base?"));
    let numero2 = parseFloat(prompt("Qual o valor da altura?"));

    alert(areaDoRetangulo(numero1, numero2));
  } else if (opcao == "3") {
    let numero1 = parseFloat(prompt("Qual o valor do lado?"));

    alert(areaDoQuadrado(numero1));
  } else if (opcao == "4") {
    let baseMaior = parseFloat(prompt("Qual o valor da base maior"));
    let baseMenor = parseFloat(prompt("Qual o valor da base menor"));
    let altura = parseFloat(prompt("Qual o valor da altura?"));

    alert(areaDoTrapezio(baseMaior, baseMenor, altura));
  } else if (opcao == "5") {
    let raio = parseFloat(prompt("Qual o valor do raio?"));

    alert(areaDoCirculo(raio));
  }
} while (opcao != 6);
