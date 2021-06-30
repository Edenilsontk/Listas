const readLine= require('readLine-sync')

var Valor=parseInt(readLine.question("Informe um valor em Reais: "))
var parcelas=parseInt(readLine.question("Informe a quantidade de parcelas: "))
var j24= 0.1
var j32= 0.15
var valorcp12= Valor / parcelas
var valorcp24= (Valor * j24 + Valor) / parcelas
var valorcp32= (Valor * j32 + Valor) / parcelas

if (parcelas = 12 && parcelas < 24){
    console.log("O valor de cada parcela será de R$ " + valorcp12)
}
else {
    console.log("O valor de cada parcela será de R$ " + valorcp32)
}