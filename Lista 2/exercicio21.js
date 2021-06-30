const readLine= require('readLine-sync')

var precoV=parseInt(readLine.question("informe o preco do veiculo: R$ "))
var anoF=parseInt(readLine.question("Informe o ano de fabricacao do veiculo: "))

console.log("Ano de fabricação : " + anoF)
console.log("preço do veículo:R$ " + precoV)

imposto1 = (precoV*0.01)
imposto2 = (precoV*0.015)

 if (anoF < 2000 && anoF>=1990){
    console.log("Imposto a ser pago: " + imposto1);
 }
 if (anoF>2000){
    console.log("Imposto a ser pago: " + imposto2);
 }
 if (anoF<1990){
    console.log("Veículo insento");

}