const leia = require('readline-sync')

let salarioBurto 
let adicNoturno = 500.00
let horasExtras = 150.00
let desconto = 200.00
let valorfinal

console.log("Portal do Salario")

salarioBurto = leia.questionFloat("\nDigite o seu Salario: ")

let salarioliquido = salarioBurto + adicNoturno + (horasExtras * 5) - desconto;

valorfinal = "R$ " + salarioliquido.toFixed(2); 

console.log("O Salario do funcionario é: ", valorfinal)