const readLine= require('readLine-sync')

var n1=parseInt(readLine.question('Digite um numero: '))
var n2=parseInt(readLine.question('Digite um segundo numero: '))
var n3=parseInt(readLine.question('Digite um terceiro numero: '))

if(n1<n2 && n2<=n3){
    console.log(n3,n2,n1)
}
if(n2<=n1 && n2<=n3 && n1<=n3){
    console.log(n3,n1,n2)
}

if(n2<n1 && n2>=n3){
    console.log(n1,n2,n3)
}
if (n1<n2 && n1<n3 && n2>n3){
    console.log(n2,n3,n1)
}
if (n1<n2 && n1>n3 && n2>n3){
    console.log(n3,n1,n2)
}
