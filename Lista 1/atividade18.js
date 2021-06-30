var valorhn= 10
var valorhe= 15
var h_normal= 6
var h_extra= 4
var impostos= 0.1
var dias= 30

sal_bruto= valorhn * h_normal + valorhe * h_extra * dias 
console.log("Ele trabalhando 6h normais e 2h extras todos os dias, seu salario bruto será de R$" + sal_bruto);
sal_liquido= sal_bruto - sal_bruto * impostos
console.log("e seu salario liquido R$ "+ sal_liquido);
