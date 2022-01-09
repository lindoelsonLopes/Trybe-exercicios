let word = 'tryber';
let wordReverse = '';
for(let index =0; index < word.length; index +=1){
    wordReverse += word[word.length - 1 - index];
}
console.log(wordReverse);