

function mudarTexto(){
    let tagp = document.getElementsByTagName('p')[0];
    tagp.innerText = 'Trabalhando em uma empresa muito bacana'
};

mudarTexto();



function mudarCor(){
    let yellow = document.querySelectorAll('.main-content')[0];
    yellow.style.backgroundColor = 'rgb(76,164,109';
}

mudarCor();