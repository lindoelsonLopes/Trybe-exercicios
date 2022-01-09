

 function numeroRepetido(numeros){
     let contaRepeticao = 0;
     let contNumero = 0;
     let indexNumeroRepetido = 0;

     for(let indice in numeros){
         let verifcaNumero = numeros[indice];
         for(let index2 in numeros) {
             if(verifcaNumero === numeros[index2]){
                 contNumero +=1;
             }
         }
         if (contNumero > contaRepeticao){
             contaRepeticao = contNumero;
             indexNumeroRepetido = indice;
         }
         contNumero = 0;
     }
     return numeros[indexNumeroRepetido];
 }

 console.log(numeroRepetido([2,3,2,5,8,2,3]));