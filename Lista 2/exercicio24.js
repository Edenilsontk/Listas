const readLine= require('readLine-sync')

var CodCachorro=parseInt(readLine.question("QUANTIDADE DE CACHORRO QUENTE: "))
var CodBauruOvo=parseInt(readLine.question("QUANTIDADE DE BAURU COM OVO: "))
var CodBauruSimples= parseInt(readLine.question("QUANTIDADE DE BAURU SIMPLES: "))
var CodHamburguer= parseInt(readLine.question("QUANTIDADE DE HAMBURGUES: "))
var CodCheeseburguer= parseInt(readLine.question("QUANTIDADE DE CHEESEBURGUER: "))
var CodRefrigerante= parseInt(readLine.question("QUANTIDADE DE REFRIGERANTES: "))
var Cachorro= 1.4
var BauruOvo= 1.5
var BauruSimples= 1.6
var Hamburguer= 1.1
var Cheeseburguer= 1.3
var Refrigerante= 1.0
var pedido= Cachorro

if (pedido==Cachorro) {
    console.log("O item pedido foi o Cachorro quente, o valor dele é de: R$ " +Cachorro+  ", a quantidade pedida pelo cliente foi " + CodCachorro + ", entao o total a ser pago pelo cliente é: R$: " + CodCachorro * Cachorro)
}
if (pedido==BauruSimples) {
    console.log("O item pedido foi o BauruSimples, o valor dele é de: R$ "+ BauruSimples +  ", a quantidade pedida pelo cliente foi " + CodBauruSimples + " , entao o total a ser pago pelo cliente é: R$:" + BauruSimples*CodBauruSimples);
}
if (pedido==Cheeseburguer) {
    console.log("O item pedido foi o Cheeseburguer, o valor dele é de: R$ " +Cheeseburguer+  ", a quantidade pedida pelo cliente foi " + CodCheeseburguer + ", entao o total a ser pago pelo cliente é: R$: " + CodCheeseburguer * Cheeseburguer)
}
if (pedido==BauruOvo) {
    console.log("O item pedido foi o Bauru com Ovo, o valor dele é de: R$ "+ BauruOvo +  ", a quantidade pedida pelo cliente foi " + CodBauruOvo + " , entao o total a ser pago pelo cliente é: R$:" + BauruOVo*CodBauruOvo);
}
if (pedido==Hamburguer) {
    console.log("O item pedido foi o Hamburguer, o valor dele é de: R$ " +Hamburguer+  ", a quantidade pedida pelo cliente foi " + CodHamburguer + ", entao o total a ser pago pelo cliente é: R$: " + CodHamburguer * Hamburguer);
}
if (pedido==Refrigerante) {
    console.log("O item pedido foi o Refrigerante, o valor dele é de: R$ "+ Refrigerante +  ", a quantidade pedida pelo cliente foi " + CodRefrigerante + " , entao o total a ser pago pelo cliente é: R$:" + Refrigerante*CodRefrigerante);
}
 