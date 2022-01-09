let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 2];
let menorValor = numbers[0];
    for(let indice = 0; indice < numbers.length; indice +=1){
        if(numbers[indice] < menorValor){
            menorValor = numbers[indice];
        }
        
}

console.log(menorValor);