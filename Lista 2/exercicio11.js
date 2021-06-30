const readLine= require('readLine-sync')

var P1=parseInt(readLine.question('Peso nota 1: '))
var P2=parseInt(readLine.question('Peso nota 2: '))
var P3=parseInt(readLine.question('Peso nota 3: '))
var P4=parseInt(readLine.question('Peso nota 4: '))

var n1=parseInt(readLine.question('Qual a sua nota na n1: '))
var n2=parseInt(readLine.question('Qual a sua nota na n2: '))
var n3=parseInt(readLine.question('Qual a sua nota na n3: '))
var n4=parseInt(readLine.question('Qual a sua nota na n4: '))
var media
media= (n1 * P1 + n2 * P2 + n3 * P3 + n4 * P4) / 10
console.log("A sua média é de: " + media + " pontos");

