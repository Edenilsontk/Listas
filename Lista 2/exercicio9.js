const readLine= require('readLine-sync')

var base=parseInt(readLine.question('Qual a base?'))
var altura=parseInt(readLine.question('Qual a altura?'))
var area
area= base * altura / 2
console.log ("A área do triângulo é: ", area);
