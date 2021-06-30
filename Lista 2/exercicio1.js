const readLine= require('readLine-sync')

var n1=parseInt(readLine.question('Qual o valor do numero 1: '))
var n2=parseInt(readLine.question('Qual o valor do numero 2: '))

soma= n1 + n2
console.log("A soma dos dois números é: " + soma);