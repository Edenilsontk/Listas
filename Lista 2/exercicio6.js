//ler o valor do nivel de alerta de 0 a 10 -> var alerta
//Identificar se ele é baixo, medio, alto ou grave
//mostrar resultado

var readLine = require ('readline-sync')
var nivel = parseInt(readLine.question("De 0 a 10, qual o valor do nivel de alerta: "))

if (nivel <= 3 ){
    console.log("Nivel: Baixo")
}
if (nivel >= 4 ){
    console.log("Nivel: Médio")
}
if (nivel >= 7 ){
    console.log("Nivel: Alto")
}
if (nivel == 10){
    console.log("Nivel: GRAVE")
}
