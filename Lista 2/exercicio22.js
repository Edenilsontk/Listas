const readLine= require('readLine-sync')

var SLG=parseInt(readLine.question('Qual o valor do salario do gerente: '))
var SLE=parseInt(readLine.question('Qual o valor do salario do engenheiro: '))
var SLT=parseInt(readLine.question('Qual o valor do salario do tecnico: '))
var SLC=parseInt(readLine.question('Qual o valor do salario do cozinheiro: '))
var PG= 0.1
var PE= 0.2 
var PT= 0.3 
var PC= 0.4
var NSalarioG= SLG * PG + SLG
var NSalarioE= SLE * PE + SLE 
var NSalarioT= SLT * PT + SLT
var NSalarioC= SLC * PC + SLC
var DifG= SLG * PG
var DifE= SLE * PE
var DifT= SLT * PT
var DifC= SLC * PC

if ( NSalarioG=NSalarioG ){
    console.log("O salario antigo do gerente era de R$ " + SLG + ". Agora o valor do seu novo salário é de R$ " + NSalarioG+ ", com uma diferença de R$ " + DifG + " em relação ao seu salário antigo.");
}
if ( NSalarioE=NSalarioE){
    console.log("O salario antigo do Engenheiro era de R$ " + SLE + ". Agora o valor do seu novo salário é de R$ " + NSalarioE+ ", com uma diferença de R$ " + DifE + " em relação ao seu salário antigo.");
}
if ( NSalarioT= NSalarioT ){
    console.log("O salario antigo do Técnico era de R$ " + SLT + ". Agora o valor do seu novo salário é de R$ " + NSalarioT+ ", com uma diferença de R$ " + DifT + " em relação ao seu salário antigo.");
}
if ( NSalarioC= NSalarioC ){
    console.log("O salario antigo do Cozinheiro era de R$ " + SLC + ". Agora o valor do seu novo salário é de R$ " + NSalarioC+ ", com uma diferença de R$ " + DifC + " em relação ao seu salário antigo.");
}
