let numero = 7;
let asterisco = '*';


let meioDaPiramide = (numero + 1) / 2;
let ladoEsquerdo = meioDaPiramide;
let ladoDireito = meioDaPiramide;

for (let linhaPiramide = 1; linhaPiramide <= meioDaPiramide; linhaPiramide +=1){
    let outputLine = '';
    for(let colunaPiramide = 1; colunaPiramide <= numero; colunaPiramide +=1){
        if(colunaPiramide == ladoEsquerdo || colunaPiramide == ladoDireito || linhaPiramide == meioDaPiramide){
            outputLine += asterisco;
        } else {
            outputLine += ' ';
        }
    }
       
    ladoEsquerdo -=1;
    ladoDireito +=1;
    console.log(outputLine); 
}
