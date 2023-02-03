const { texto, arquivos } = require('./base');

// * (opcionais) 0 ou n
// + (obrigatório) 1 ou n
// * (opcionais) 0 ou 1
// \ Caractere de escape
// {n, m} minimo e maximo
// {, 5} minimo 0 e maximo 5
// {5, } minimo 5
// {5, 10} minimo 5 e maximo 10

// const regExp1 = /Jo+ão+/gi; 

// console.log(texto);
// console.log(texto.match(regExp1)); 

const regExp2 = /\.(jpg|jpe?g)/gi; 


for(let arquivo of arquivos) {
    const valido = arquivo.match(regExp2)

    if(!valido) continue;

    console.log(arquivo, valido);
}