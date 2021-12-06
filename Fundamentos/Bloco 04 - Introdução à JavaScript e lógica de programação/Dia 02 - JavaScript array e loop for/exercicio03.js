let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTodos = 0;
    for(let indice = 0; indice < numbers.length; indice +=1){
        somaTodos += numbers[indice];
}

let media = somaTodos / numbers.length;

console.log(media);