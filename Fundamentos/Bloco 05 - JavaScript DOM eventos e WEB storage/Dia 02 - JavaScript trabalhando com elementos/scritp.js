//Exercício 1

const elmentH1 = document.createElement('h1');
elmentH1.innerText = 'Exercćicio 5.2 - JavaScript DOM';
elmentH1.className = 'title';
document.body.appendChild(elmentH1);

//Exercício 2

const tagMain = document.createElement('main');
tagMain.className = 'main-content';
document.body.appendChild(tagMain);

//Exercício 3

const tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

//Exercício 4

const tagP = document.createElement('p');
tagSection.appendChild(tagP);
tagP.innerText = 'Trabalhando com Elementos';

//Exercício 5

const tagSectionTwo = document.createElement('section');
tagSectionTwo.className = 'left-content';
tagMain.appendChild(tagSectionTwo);

//Exercício 6

const tagSectionThree = document.createElement('section');
tagSectionThree.className = 'right-content';
tagMain.appendChild(tagSectionThree);

//Exercício 7
const imagem = document.createElement('img');
imagem.className = 'small-image';
tagSectionTwo.appendChild(imagem);
imagem.src='https://picsum.photos/200';

//Exercício 8

let numbers = ['Um','Dois','Três','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez'];

const list = document.createElement('ul');
list.className = ('list-content')
tagSectionThree.appendChild(list);
for(let index = 0; index < numbers.length; index +=1){
    let number = numbers[index];
    let listNaoOrdenada = document.createElement('li');
    listNaoOrdenada.innerText = number;
    list.appendChild(listNaoOrdenada);
}

//Exercício 9

for(let index = 1; index <=3; index +=1){
const tagH3 = document.createElement('h3');
tagH3.className = 'description';
tagH3.innerHTML = 'Show' + index;
tagMain.appendChild(tagH3);
}

const sectionLeftContent = document.getElementsByClassName('left-content')[0];
tagMain.removeChild(sectionLeftContent);

const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight = 'auto';

const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green';

