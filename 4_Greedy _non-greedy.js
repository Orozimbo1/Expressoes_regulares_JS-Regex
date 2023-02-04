const { html } = require('./base');

// <.+>.+<\/.+>

console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)) // greedy, Seleciona do começo até onde ele conseguir
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // non-greedy, Seleciona do comeo até o mínimo que conseguir



