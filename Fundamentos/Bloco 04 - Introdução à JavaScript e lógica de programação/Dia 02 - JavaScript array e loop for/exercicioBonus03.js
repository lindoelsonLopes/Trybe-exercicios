let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumero = [];
for (let index = 0; index < number.length; index += 1) {
   if(index + 1 < number.length){
       novoNumero.push(number[index] * number[index + 1])
   } else {
       novoNumero.push(number[index] * 2);
   }
}
console.log(novoNumero);