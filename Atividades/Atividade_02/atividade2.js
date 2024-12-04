const leia = require('readline-sync')

let n1, n2, n3, n4 
let nome
let media 

console.log("\nPortal Média das Notas")

nome = leia.question("\nQual o Nome do Participante: ")
n1 = leia.questionFloat("\nDigite a Primeira Nota: ")
n2 = leia.questionFloat("Digite a Segunda Nota: ")
n3 = leia.questionFloat("Digite a Terceira Nota: ")
n4 = leia.questionFloat("Digite a Quarta Nota: ")

media = (n1 + n2 + n3 + n4) / 4;
let mediaformatada = media.toFixed(1);

console.log("\nA Media das Notas do Aluno ",  nome, "é ", mediaformatada)

if(mediaformatada >= 6.0){
    console.log( "\nParticipante", nome ,"Aprovado por média")
}
 else {
    console.log("\nParticipante", nome, " Não aprovado por média")
};
