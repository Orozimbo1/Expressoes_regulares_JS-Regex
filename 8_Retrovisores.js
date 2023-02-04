const { html2 } = require('./base')

// $1 $2 $3 -> Retrovisores \1

// console.log(html2)
// console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/gi))
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi, '$1"HAHAHAH $3 HAHAHAH$4'))