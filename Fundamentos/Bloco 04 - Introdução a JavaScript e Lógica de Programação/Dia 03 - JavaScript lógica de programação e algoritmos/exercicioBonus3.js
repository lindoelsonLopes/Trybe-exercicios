let numero = 5;
let asterisco = '*';
let inputLine = '';
let inputPosition = numero;

for(let i = 0; i < numero; i +=1){
 for(let colunaIndex = 0; colunaIndex <=numero; colunaIndex +=1){
     if(colunaIndex < inputPosition){
         inputLine = inputLine + ' ';
     }else {
         inputLine = inputLine + asterisco;
     }
 }

 console.log(inputLine);
 inputLine = '';
 inputPosition -= 1;
};