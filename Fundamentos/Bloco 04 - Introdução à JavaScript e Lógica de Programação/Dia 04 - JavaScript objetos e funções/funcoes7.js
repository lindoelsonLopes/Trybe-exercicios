
 function verificaFimPalavra(word,ending){
     word = word.split('');
     ending = ending.split('');
     let controle = true;
     for(let index = 0; index < ending.length; index +=1){
         if(word[word.length - ending.length + index] !== ending[index]) {
             controle = false
         }
     }
     return controle;
 };

 console.log(verificaFimPalavra('lindoelson', 'elson'));
 console.log(verificaFimPalavra('joaofernando', 'fernan'));
  

// let teste = 'elson';

// teste = teste.split('');

// console.log(teste);