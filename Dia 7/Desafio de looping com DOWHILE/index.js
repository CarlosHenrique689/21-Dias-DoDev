let saldoTotal = 1000
const nome = String(prompt('Qual o seu nome?'))
const cpf = parseInt(prompt('Por favor, digite o seu CPF.'))
let maiorValorInserido = 0
let mediaDosValoresInseridos = 0
let desejaContinuarOuParar = 0
let acumuloDeValoresInseridos = 0
let contadorDeOperaçoesFeitas = 0

do {console.log('O seu salto total é de: R$' + saldoTotal)
   
    let opçaoSaqueOuDeposito = parseInt(prompt('Por favor, digite "1" para a opção de SAQUE, ou "2" para a opção de DEPÓSITO.'))
    
    let valorEscolhido = Number(prompt('Escolha o valor desejado.'))

    switch(opçaoSaqueOuDeposito)
        {case 1:if(valorEscolhido <= 0){console.log('Erro... O valor escolhido não pode ser igual ou inferior a "0".')}

            if(valorEscolhido <= 0){break;}
            
            if(valorEscolhido > saldoTotal){console.log('Erro... O valor escolhido não pode ser sacado, pois é maior que o valor disponível na conta.')}

            if(valorEscolhido > saldoTotal){break;}
            
            console.log('Ok, o SAQUE no valor de R$' + valorEscolhido + ' será sacado da sua conta agora.' )

            saldoTotal = saldoTotal - valorEscolhido

            if(valorEscolhido > maiorValorInserido){maiorValorInserido = valorEscolhido}

            if(valorEscolhido > 0){acumuloDeValoresInseridos = acumuloDeValoresInseridos + valorEscolhido}

            contadorDeOperaçoesFeitas++
                break;

        case 2: if(valorEscolhido <= 0){console.log('Erro... O valor escolhido não pode ser igual ou inferior a "0".')}

            if(valorEscolhido <= 0){break;}
        
            console.log('Ok, o DEPÓSITO no valor de R$' + valorEscolhido + ' será depositado em sua conta agora.')
        
            saldoTotal = saldoTotal + valorEscolhido

            if(valorEscolhido > maiorValorInserido){maiorValorInserido = valorEscolhido}

            if(valorEscolhido > 0){acumuloDeValoresInseridos = acumuloDeValoresInseridos + valorEscolhido}

            contadorDeOperaçoesFeitas++
                break;}

    desejaContinuarOuParar = parseInt(prompt('Por favor, digite "1" para CONTINUAR, ou "2" para PARAR.'))

} while (desejaContinuarOuParar === 1);

mediaDosValoresInseridos = acumuloDeValoresInseridos / contadorDeOperaçoesFeitas

console.log('O seu salto total é de: R$' + saldoTotal)
console.log('O maior valor inserido foi de: R$' + maiorValorInserido)
console.log('A média dos valores inseridos foi de: R$' + mediaDosValoresInseridos)
console.log('Obrigado, o caixa eletrônico agradece sua visita. Tenha um ótimo dia!')







