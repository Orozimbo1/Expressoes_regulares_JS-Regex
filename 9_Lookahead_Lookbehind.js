const { lookahead } = require('./base')

console.log(lookahead)
// console.log(lookahead.match(/.+[^in]active$/gim))

// Positive lookahead (frases que terminam com active)
console.log(lookahead.match(/.+(?=[^in]active)/gim))

// Negative lookahead (frases que nao terminam com active)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

// Positive lookbehind (frease que começam com OFFLINE)
console.log(lookahead.match(/(?<=OFFLINE\s+).*/gim))

// Negative lookbehind (frease que não começam com OFFLINE)
console.log(lookahead.match(/^.+(?<!OFFLINE.+)$/gim))