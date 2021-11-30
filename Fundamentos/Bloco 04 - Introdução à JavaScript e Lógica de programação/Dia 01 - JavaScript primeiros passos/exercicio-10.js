/*const custoProduto = 10;
const valorDeVenda = 11;
const imposto = 20 / 100;

let quantidadeVenda = 1000;
let valorCustoTotal = quantidadeVenda * (custoProduto + imposto);

let lucro = (quantidadeVenda * valorDeVenda) - valorCustoTotal;
    console.log(lucro.toFixed(2));*/

  
    const costOfProduct = 1;
    const saleValue = 3;
    
    if (costOfProduct >= 0 && saleValue >= 0) {
      const totalCostOfProduct = costOfProduct * 1.2;
      const totalProfit = (saleValue - totalCostOfProduct) * 1000;
      console.log(totalProfit);
    } else {
      console.log("Error, os valores não podem ser negativos");
    }; 