const readLine= require('readLine-sync')

var di=parseInt(readLine.question('Qual dia de nascimento: '))
var mes=parseInt(readLine.question('Qual seu mês de nascimento: '))
var ano=parseInt(readLine.question('Qual ano de nascimento: '))
var dia= di + 1
console.log("O dia seguinte é:")
console.log(dia)
console.log("do mês " + mes)
console.log("do ano de " + ano)