console.log(' Vou tentar adivinhar um animal que você esteja pensando.')
console.log('Responda SIM ou NÃO para as perguntas.')
var classPrincipal= require('readline-sync')

var validar = function(valor){
     var listaDados= ['sim', 's', 'não', 'nao', 'n']
     if (listaDados.indexOf(valor)== 0 || listaDados.indexOf(valor) == 1){
         return true

    }else{
         return false
    }
}

var pergQuatroPatas= classPrincipal.question('Tem quatro patas ?')
if(validar(pergQuatroPatas)){
}

var pergJuba= classPrincipal.question('tem juba ao redor do pescoco ?')
if (validar(pergJuba)){
    console.log('é um leão')
    
}else{
    var pergDomestico= classPrincipal.question('Conseguimos criar facilmente e dar recao ?')
}
if (validar(pergDomestico)){
    console.log('é um gato')

}else{
    var pergManchaCorpo= classPrincipal.question('tem manchas pretas pelo corpo ?')
}
if (validar(pergManchaCorpo)){
    console.log('é uma onca')

    

}else{ 
var pergMarinho= classPrincipal.question('É um animal marinho ?')
}
if (validar(pergMarinho)){
console.log('É um pinguim.')

}else{ 
var pergCaça= classPrincipal.question('Foi cacada por muito tempo ?')
}
if (validar(pergCaça)){
console.log('É uma baleia.')

}else{ 
var pergChoque= classPrincipal.question('Ele dar choque ?')
}
if (validar(pergChoque)){
console.log('É um enguia.')


}else{ 
var pergAveComum= classPrincipal.question('É uma ave comum ?')
}
if(validar(pergAveComum)){

}else{ 
var pergBiceAmarelos= classPrincipal.question( 'Tem bico e patas amarelas ?')
}
if(validar(pergBiceAmarelos)){
console.log('É um pato.')

}else{ 
var pergVisao= classPrincipal.question(' Possui uma visao apurada ?')
}
if (validar(pergVisao)){
console.log('É uma águia.')

}else{ 
var pergDomesticada= classPrincipal.question('É um dos animais mais domesticados do mundo ?')
}
if(validar(pergDomesticada)){
    console.log('É uma galinha.')
    

}else {
    console.log('Nao conheço esse animal')
}
