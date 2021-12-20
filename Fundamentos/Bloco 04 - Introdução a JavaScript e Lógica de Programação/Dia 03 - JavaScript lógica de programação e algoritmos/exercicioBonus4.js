let numero = 5;
let asterisco = '*';
let inputLine = '';

let meioDaPiramide = (numero + 1) / 2;
let ladoEsquerdo = meioDaPiramide;
let ladoDireito = meioDaPiramide;

for (let linhaPiramide = 0; linhaPiramide <= meioDaPiramide; linhaPiramide +=1){
    for(let colunaPiramide = 0; colunaPiramide <= numero; colunaPiramide +=1){
        if(colunaPiramide > ladoEsquerdo && colunaPiramide < ladoDireito){
            inputLine = inputLine + asterisco;
        } else {
            inputLine =  inputLine + ' ';
        }
    }
    console.log(inputLine);
    inputLine = '';
    ladoDireito +=1;
    ladoEsquerdo -=1;
}
