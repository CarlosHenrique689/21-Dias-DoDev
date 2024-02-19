let nome = String(prompt("Qual o seu nome?"))
let idade = Number(parseInt(prompt("Qual a sua idade?")))
let possuiCarteiraDeMotorista = String(prompt("Você possui carteira de motorista? Responda com 'sim' ou 'nao'")) 
let possuiAlgumVeiculo = String(prompt("Você possui algum veículo? Responda com 'sim' ou 'nao'"))
if(idade <=17 || possuiCarteiraDeMotorista === "nao"){console.log(nome + ", você não pode dirigir.")}else
if(possuiCarteiraDeMotorista === "sim" && possuiAlgumVeiculo === "sim"){console.log(nome + ", hoje você será o motorista!")}
else{console.log(nome + ", você pode dirigir, mas não tem nenhum veículo.")}