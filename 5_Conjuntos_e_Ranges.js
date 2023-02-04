const { alfabeto } = require('./base');

// [abc] -> Conjunto, vai buscar tudo o que está dentro do []
// [^] -> Negação, vai negar tudo o que está dentro do []
// [0-9] -> Range, do menor para o maior

console.log(alfabeto)

// Conjuntos
console.log(alfabeto.match(/[abc123]/g)) // Vai retornar o que estiver entre o especificado
console.log(alfabeto.match(/[^abc123]/g)) // Negação, Vai retornar tudo o que não estiver entre o especificado

// Ranges
console.log(alfabeto.match(/[0-9]+/g))// Vai retornar tudo o que estiver entre o especificado
console.log(alfabeto.match(/[a-z]+/g))// Vai retornar tudo o que estiver entre o especificado
console.log(alfabeto.match(/[A-Z]+/g)) // Vai retornar tudo o que estiver entre o especificado
console.log(alfabeto.match(/[a-zA-Z0-9]+/g)) // Vai retornar tudo o que estiver entre o especificado
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)) // Negação, vai retornar tudo o que não estiver entre o especificado
console.log(alfabeto.match(/\w+/g)) // Short hands, Vai retornar qualquer caractere alfanumérico incluindo o _
console.log(alfabeto.match(/\W+/g)) // Short hands, Negação vai retornar qualquer caractere que não seja alfanumérico incluindo o _
console.log(alfabeto.match(/\d+/g)) // Short hands, Vai retornar qualquer caractere seja numérico
console.log(alfabeto.match(/\D+/g)) // Short hands, Negação vai retornar qualquer caractere que não seja numérico