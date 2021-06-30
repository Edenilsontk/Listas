// 1º passo: pedir o 1º  número (n1)
// 2º passo: pedir o 2º  número (n2)
// 3º passo: pedir o 3º  número (n3)
// 4º passo: criar a condição: se o resto da divisão de n1/n1 for 0 informar que n1 é multiplo de n1
// 5º passo: criar a condição: se o resto da divisão de n1/n2 for 0 informar que n1 é multiplo de n2
// 6º passo: criar a condição: se o resto da divisão de n1/n3 for 0 informar que n1 é multiplo de n3
// 7º passo: criar a condição: se o resto da divisão de n2/n1 for 0 informar que n2 é multiplo de n1
// 8º passo: criar a condição: se o resto da divisão de n2/n2 for 0 informar que n2 é multiplo de n2
// 9º passo: criar a condição: se o resto da divisão de n2/n3 for 0 informar que n2 é multiplo de n3
// 10º passo: criar a condição: se o resto da divisão de n3/n1 for 0 informar que n3 é multiplo de n1
// 11º passo: criar a condição: se o resto da divisão de n3/n2 for 0 informar que n3 é multiplo de n1
// 12º passo: criar a condição: se o resto da divisão de n3/n3 for 0 informar que n3 é multiplo de n1

var readLineSync = require("readLine-sync")
console.log("digite um numero")
let n1 = readLineSync.questionFloat()
console.log("digite um numero")
let n2 = readLineSync.questionFloat()
console.log("digite um numero")
let n3 = readLineSync.questionFloat()

if (n1 % n1 == 0){
    console.log(n1 + ' é multiplo de ' + n1)

}if (n1 % n2 == 0){
    console.log(n1 + ' é multiplo de ' + n2)
}if (n1 % n3== 0){
    console.log(n1 + ' é multiplo de ' + n3)
}if (n2 % n1 == 0){
    console.log(n2 + ' é multiplo de ' + n1)
}if (n2 % n2 == 0){
    console.log(n2 + ' é multiplo de ' + n2)
}if (n2 % n3 == 0){
    console.log(n2 + ' é multiplo de ' + n3)
}if (n3 % n1 == 0){
    console.log(n3 + ' é multiplo de ' + n1)
}if (n3 % n2 == 0){
    console.log(n3 + ' é multiplo de ' + n2)
}if (n3 % n3 == 0){
    console.log(n3 + ' é multiplo de ' + n3)
}