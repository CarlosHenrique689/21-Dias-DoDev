let nome = prompt("Qual o seu nome? Ex: Arthur")
let idade = parseInt(prompt("Qual a sua idade? Ex: 32 anos"))
let peso = parseInt(prompt("Qual o seu peso em Kg? Ex: 65kg"))
let altura = parseFloat(prompt("Qual a sua altura? Ex: 1.75cm"))
let anoDeNascimento = 2023 - idade
let IMC = parseInt(peso / (altura * altura))
console.log("Olá, " + nome + ", você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg, e seu IMC é " + IMC + "Kg/m2")