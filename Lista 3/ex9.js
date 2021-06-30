
var readline = require("readline-sync")
var n = readline.question("Digite um numero: ")
var x  = y = 1
var z = 0
for (var j =  1; j <= n; j++){
    x = y
    y = z

    var z = x + y
    console.log(`o ${j} termo é : `+ z)
}