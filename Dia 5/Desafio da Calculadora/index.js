let numero1 = Number(parseInt(prompt("Escolha um número inteiro qualquer.")))
let numero2 = Number(parseInt(prompt("Escolha mais um número inteiro qualquer.")))
let OpçoesDeOperaçao = Number(parseInt(prompt("Escolha uma das operações matemáticas:" 
+ " Digite '1' para somar (+), '2' para subtrair (-), '3' para multiplicar (x), e '4' para dividir (%)")))
switch(OpçoesDeOperaçao){
    case 1: console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2))
    break;
    
    case 2: console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2))
    break;

    case 3: console.log(numero1 + " x " + numero2 + " = " + (numero1 * numero2))
    break;

    case 4: console.log(numero1 + " % " + numero2 + " = " + (numero1 / numero2))
    break;

    default: console.log("Erro... Tente novamente.")
    break;}