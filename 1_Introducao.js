const { texto } = require('./base');

// Flags
// g - global (encotrar todas ocorrências)
// i - insensitive (encontra palavras que comecem com a letra minúscula ou maiúscula)
// () - grupos (separa em grupos)
// | - ou
const regExp1 = /(cafe|leite|chá)( tá prontinho aqui)/i; 
const found = regExp1.exec(texto) // exec. Vai extrair do texto a palavra ou texto que esta na expressão, retorna um array com algumas informações, 'a palavra ou texto buscado', 'seu indice'e o 'input'.

console.log(regExp1.test(texto)) // test. Vai buscar no texto a palavra ou texto que esta na expressão, retorna true ou false.
console.log(found) 
console.log(found[0]) 
console.log(found[1]) 