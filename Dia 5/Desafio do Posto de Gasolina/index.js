let opçaoDeServiço = Number(parseInt(prompt("Olá, seja bem vindo(a) ao nosso posto de gasolina!"
+ " Para abastecer o seu veículo com gasolina, digite ' 1 '. Para abastecer com álcool, digite ' 2 '. Caso queira calibrar os seus pneus, digite ' 3 '.")))
switch(opçaoDeServiço){
    case 1: let valorEscolhidoDeGasolina = Number(parseInt(prompt("Ok, o litro da gasolina custa R$5,00. Qual valor o(a) senhor(a) deseja abastecer?")))
        let quantidadeEmLitrosDeGasolina = (valorEscolhidoDeGasolina / 5)
            console.log("Prontinho, o seu veículo foi abastecido com " + quantidadeEmLitrosDeGasolina + " litros de gasolina. Obrigado, e volte sempre!")
            break;
    
    case 2: let valorEscolhidoDeAlcool = Number(parseInt(prompt("Ok, o litro do álcool custa R$3,00. Qual valor o(a) senhor(a) deseja abastecer?")))
        let quantidadeEmLitrosDeAlcool = (valorEscolhidoDeAlcool / 3)
            console.log("Prontinho, o seu veículo foi abastecido com " + quantidadeEmLitrosDeAlcool + " litros de álcool. Obrigado, e volte sempre!")
            break;
            
    case 3: console.log("Prontinho, os pneus do seu veículo foram calibrados com sucesso. Obrigado, e volte sempre!")
            break;

    default: console.log("Hmm, ocorreu algum erro. Por favor, tente novamente.")
            break;}