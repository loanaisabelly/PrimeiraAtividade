const leia = require('readline-sync')

let salario
let abono
let novosalario 

console.log("\nQual Seria o Seu Salario atual com o Abono?")

salario = leia.questionFloat("\nDigite o seu Salario: ")
abono = leia.questionFloat("\nDigite o seu Abono: ")

novosalario = salario + abono
let valorComReal = "R$" + novosalario.toFixed(2);


console.log("\nO Salario Atual com o Abono incluido é: ", valorComReal);