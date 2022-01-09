const pecaXadrez = "tigre"

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
     console.log(pecaXadrez + ' - Movimenta-se por todas as direções (Horizontal, vertical e diagonal - Somente uma casa de cada vez.'); 
     break;
    
     case 'rainha':
     console.log(pecaXadrez + ' - Movimenta-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
     break
     
     case 'bispo':
     console.log(pecaXadrez + ' - Movimenta-se ao longo da diagonal.Não pode pular outras peças.');
     break
     
     case 'cavalo':
     console.log(pecaXadrez + ' - Movimenta-se em L - duas casas em sentido horizontal e mais uma vertical ou vice-versa. A única peça que pode pular por cima de outras.');
     break  
     
     default:
         console.log('Erro! Peça inválida!');
         break;
}