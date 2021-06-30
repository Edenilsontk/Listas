const readLine= require('readLine-sync')

var n1=parseInt(readLine.question('Qual a sua nota na n1: '))
var n2=parseInt(readLine.question('Qual a sua nota na n2: '))
var n3=parseInt(readLine.question('Qual a sua nota na n3: '))
var n4=parseInt(readLine.question('Qual a sua nota na n4: '))
var media
media= (n1 + n2 + n3 + n4) / 4
console.log("A sua média é de: " + media + " pontos");

if(media > 60){
    console.log("Você está aprovado")
}
    else if(media > 60){
        console.log(" Você está reprovado")
}
