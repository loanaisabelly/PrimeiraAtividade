const leia = require('readline-sync')

let n1, n2, n3, n4 
let calculo 

console.log("Comparador de preços em supermercado ")

console.log("\nPrimeiro supermercado ")

n1 = leia.questionFloat("\nInsira o preço do produto - creme de leite: ")
n2 = leia.questionFloat("\nInsira o preço do produto - molho de tomate: ")

console.log("\n Segundo Supermercado")

n3 = leia.questionFloat("\nInsira o preço do produto - creme de leite: ")
n4 = leia.questionFloat("\nInsira o preço do produto - molho de tomate: ")

calculo = (n1*n2) - (n3 * n4); 
let calculototal = " R$ " + calculo.toFixed(2); 

console.log("\nA Diferença de preços entre os supermercados foi: ", calculototal)