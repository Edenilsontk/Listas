const readlineSync= require('readline-sync')
var alunos =  []
function addAluno(){
    alunos.push({
        'nome': readlineSync.question('Qual seu nome?'),
        'genero': readlineSync.question('Qual seu genero?'),
        'idade': readlineSync.question('Qual sua Idade?'),
        'curso': readlineSync.question('Qual seu curso?'),
        'matricula':readlineSync.question('Qual seu numero de matricula?'),
        'rendimento': readlineSync.question('Como foi seu rendimento nesse semestre?'),
        'nota': readlineSync.question('Quanto tirou?')
    })
}
var sair=readlineSync.question("Digite S para cadastrar aluno e N para sair ")
while(sair=='s'){
    addAluno()
    sair=readlineSync.question("Digite S para cadastrar um novo aluno e N para sair ") 
}
console.log("Alunos cadastrados: ")

for(i=0;(i<alunos.length);i++){
    console.log(`nome: ${alunos[i].nome}, Gênero: ${alunos[i].genero}, Idade: ${alunos[i].idade}, curso: ${alunos[i].curso}, matricula: ${alunos[i].matricula}, rendimento: ${alunos[i].rendimento}, nota: ${alunos[i].nota}`)
}
