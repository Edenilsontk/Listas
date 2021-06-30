var salario= 1200
var conta1= 200 
var multa1= 0.02
var conta2= 120
var multa2= 0.02

valor_conta= conta1 * multa1 + conta1 + conta2 * multa2 + conta2
console.log("João pagou R$" + valor_conta + " em suas contas atrasadas")
valor_restante= salario - valor_conta
console.log("Ficando com R$" + valor_restante + " do seu salario")