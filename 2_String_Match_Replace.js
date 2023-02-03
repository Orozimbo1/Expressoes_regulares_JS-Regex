const { texto } = require('./base');

const regExp1 = /(Não canso de ouvir a )(Maria)/gi; 

// Match
console.log(texto.match(regExp1)); // match, retorna as ocorrencias

// Replace
console.log(texto.replace(regExp1, 'Braulio')) // Substitui texto por outro
console.log(texto.replace(regExp1, '"$1" <b>$2</b>')) // Quando trabalhado com grupos pode-se adicionar variáveis utilizando "$"
console.log(texto.replace(regExp1, function(input) {
    return input.toUpperCase();
})) // Pode usar funções dentro dela