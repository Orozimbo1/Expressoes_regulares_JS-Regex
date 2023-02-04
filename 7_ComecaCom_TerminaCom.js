const { cpfs } = require('./base')

// [^] -> Quando esta dento de um conjunto sempre será negação
// ^ -> Começa com "qualquer caractere"
// $ -> Termina com "qualquer caractere"
// m -> multiline

const cpf = '234.234.234.23'

const cpfRegExp = /^(\d{3}\D){3}\d{2}$/gm

console.log(cpf.match(cpfRegExp))
console.log(cpfs.match(cpfRegExp))