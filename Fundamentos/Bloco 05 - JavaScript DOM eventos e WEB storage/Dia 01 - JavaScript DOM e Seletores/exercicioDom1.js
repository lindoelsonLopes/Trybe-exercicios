

function mudarTexto(){
    let tagp = document.getElementsByTagName('p')[0];
    tagp.innerText = 'Trabalhando em uma empresa muito bacana!'
};

mudarTexto();



function mudarCor(){
    let yellow = document.querySelectorAll('.main-content')[0];
    yellow.style.backgroundColor = 'rgb(76,164,109';
}

mudarCor();

function mudarCorVermelho(){
    let white = document.querySelectorAll('.center-content')[0];
    white.style.backgroundColor = 'white';
}

mudarCorVermelho();

function corrigirTexto(){
    let title = document.getElementsByTagName('h1')[0];
    title.innerText = 'Exercício 5.1 - JavaScript'
};

corrigirTexto();

function uppercase () {
    let letterUppercase = document.getElementsByTagName('p');
    for(let index = 0; index < letterUppercase.length; index +=1){
           letterUppercase[index].innerHTML = letterUppercase[index].innerHTML.toUpperCase(); 
    }
    
}

uppercase();

function tagConsole () {
    let consoleTag = document.getElementsByTagName('p');
    for(let index = 0; index < consoleTag.length; index +=1){
          console.log(consoleTag[index].innerHTML); 
    }
    
}

tagConsole();