//ler o valor do nivel de alerta de 0 a 10 -> var alerta
//Identificar se ele é grave ou não (grave é superior a 9)
//mostrar resultado

var readLine = require ('readline-sync')
var nivel = parseInt(readLine.question("De 0 a 10, qual o valor do nivel de alerta: "))

if (nivel == 10){
    console.log("Nivel: GRAVE")
}
if (nivel > 10){
    console.log("Erro")
}
else {
console.log("Nivel: Normal")
}