var readLine = require ('readline-sync')
var fahrenheit = parseInt(readLine.question("Quantos graus em Fahrenheit: "))
var fahre= 1.8
var fah= 32
grausCelsius= (fahrenheit-fah) - fahre
console.log("A temperatura em graus Celsius é de: " + grausCelsius)

var celsius = parseInt(readLine.question("Quantos graus em Celsius: "))
grausFahrenheit= celsius * fahre + fahre
console.log("A temperatura em graus Fahrenheit é de: " + grausFahrenheit)

