let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTodos = 0;
    for(let indice = 0; indice < numbers.length; indice +=1){
        somaTodos += numbers[indice];
}

let media = somaTodos / numbers.length;

console.log(media);

if(media > 20){
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual que 20');
}

