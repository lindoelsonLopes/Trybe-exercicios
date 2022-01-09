function maiorCaracteres (nome) {
    let maiorCaracteres = nome[0];
    for (let index in nome) {
        if (maiorCaracteres.length < nome[index].length) {
            maiorCaracteres = nome[index];
        }

        }
        return maiorCaracteres;
    }


console.log(maiorCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));