var readLine = require('readline-sync')

var num = readLine.question("Digite um numero: ")


var acumulador = 0
for( let x = 1 ; x < num;  x++){
    if (num % x == 0){
        console.log(`${x} é divisor de ${num}.` )
        acumulador += x
    }
}

if (acumulador == num){
    console.log(`${num} é perfeito`)
} else {
    console.log(` ${num}  não atingiu a perfeição.`)
}