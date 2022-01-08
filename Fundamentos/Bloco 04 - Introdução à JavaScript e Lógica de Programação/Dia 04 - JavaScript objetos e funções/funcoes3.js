function array(num){
    let indice = 0;
    for(let index in num){
        if(num[indice] > num[index]){
            indice = num[index];
        }
    }
    console.log(indice);
}

array([2,4,6,7,10,0,-3]);