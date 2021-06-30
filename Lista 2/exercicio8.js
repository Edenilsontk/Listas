var readLineSync = require("readline-sync")
console.log("digite o tamanho do 1º lado")
let n1 = readLineSync.questionFloat()
console.log("digite o tamanho do 2º lado")
let n2 = readLineSync.questionFloat()
console.log("digite o tamanho do 3º lado")
let n3 = readLineSync.questionFloat()

if ((n1+n2)<n3 || (n3+n2)<(n2) || (n1+n3)<n2) {
    console.log("Isso não é um triângulo")
}
else if (n1 == n2 && n1 == n3){
    console.log("Isso é um triângulo equilátero")   
}
else if (n1 == n2 || n2 == n3 || n1 == n3){
    console.log("Isso é um triângulo isóceles")   
}
else if (n1 != n2 != n2 != n3){
    console.log("Isso é um triângulo escaleno")   
}
    