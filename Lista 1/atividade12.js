var SI= 1100
var au= 0.15
var im= 0.08

salario_inicial= SI
console.log("O salario_inicial do funcionário é de "+ salario_inicial + " reais" )
salario_aumento= SI * au + SI
console.log("o salario pós aumento do funciónario é de " + salario_aumento + " reais" )
salario_final= salario_aumento * im + SI
console.log("O salario final do funcionário é de " + salario_final + " reais" )