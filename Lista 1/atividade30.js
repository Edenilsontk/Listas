var sal_fixo= 1100
var com= 0.04
var nvendas=  30
var sal_final= 0;

valor_venda= sal_fixo * com 
console.log("Ele ganha R$" + valor_venda + " de comissão em cada venda.");
comissão= valor_venda * nvendas
console.log("Se ele fizer 30 vendas no mes, sua comissão será de R$" + comissão);
sal_final= sal_fixo + comissão
console.log("e seu salário final de R$" + sal_final);


