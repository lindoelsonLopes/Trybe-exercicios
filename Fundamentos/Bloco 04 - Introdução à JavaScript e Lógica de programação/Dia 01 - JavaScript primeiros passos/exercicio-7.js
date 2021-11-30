const notaDaPorcentagem = 80;

if (notaDaPorcentagem < 0 || notaDaPorcentagem >100) {
    console.log('Erro! Digite um número de 0 a 100.');
} else if (notaDaPorcentagem >= 90) {
    console.log('Nota A')
} else if (notaDaPorcentagem >= 80) {
    console.log('Nota B');
} else if (notaDaPorcentagem >= 70) {
    console.log('Nota C');
} else if (notaDaPorcentagem >= 60) {
    console.log('Nota D');
} else if (notaDaPorcentagem >= 50) {
    console.log('Nota E');
} else  {
    console.log('Nota F');
    
}
        