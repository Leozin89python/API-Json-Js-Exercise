const db = require('./database.json')
//valor = JSON.parse(db) converte objeto ou string em string JSON
valor = JSON.stringify(db) //converte string JSON em objeto javascript
console.log(valor)
