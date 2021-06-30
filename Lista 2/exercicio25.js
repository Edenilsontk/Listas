const readLine= require('readLine-sync')

var X=parseInt(readLine.question("DIGITE UM LADO DO TRIANGULO: ")) 
var Y=parseInt(readLine.question("DIGITE OUTRO LADO DO TRIANGULO: "))
var Z=parseInt(readLine.question("DIGITE OUTRO LADO DO TRIANGULO: "))  
 
if (X==Y && X==Z && Y==Z){
    console.log("O TRIÂNGULO É EQUILATERO")
}    
if (X!=Y && X!=Z && Y!=Z){
    console.log("O TRIÂNGULO É ESCALENO")
}
if (X==Y && Y!=Z || X==Z && X!=Y || Y==Z && Z!=X ){
    console.log("O TRIÂNGULO É ISOSCELES")
}    