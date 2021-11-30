/*Exercício 4 ----->

const valor = 0;

if (valor > 0) {
    console.log("Positive");
} else if (valor < 0) {
    console.log("Negative");
} else {
    console.log("zero");
}*/

/* Exercício 5 -----> */

const angulo1 = 10;
const angulo2 = 30;
const angulo3 = 70;

let somaAngulos = angulo1 + angulo2 + angulo3;

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0

if (angulosPositivos) {
if (somaAngulos === 180) {
    console.log(true);
} else {
    console.log(false);
}; 

} else {
    console.log("Erro ao digitar os angulos!");
}

