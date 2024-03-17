const quatidadeTotalDeAlunosHaCadastrar = parseInt(prompt("Quantos alunos você deseja cadastrar no total?"))
let contadorDeAlunosJaCadastrados = 1
let mediaGeral = 0
let quantosHomensEnviaramNotas = 0
let quantasMulheresNotaAcimaDe7 = 0
let maiorNotaEntreHomens = 0

while(contadorDeAlunosJaCadastrados <= quatidadeTotalDeAlunosHaCadastrar)
    {let generoSexual = parseInt(prompt('Qual o gênero sexual do ' + contadorDeAlunosJaCadastrados + 'º aluno? Responda "1" para Masculino e "2" para Feminino.'))
     let nota = parseInt(prompt('Qual a nota deste aluno(a)?'))

     switch(generoSexual)
           {case 1: quantosHomensEnviaramNotas++

                    if(nota > maiorNotaEntreHomens){maiorNotaEntreHomens = nota}
                 
                    mediaGeral = mediaGeral + nota

                    contadorDeAlunosJaCadastrados++
                    break;

            case 2: if(nota > 7){quantasMulheresNotaAcimaDe7++}
                 
                    mediaGeral = mediaGeral + nota

                    contadorDeAlunosJaCadastrados++
                    break;

            default: console.log("Hmm, ocorreu algum erro. O último cadastro de GÊNERO SEXUAL e de NOTA não foram contabilizados. Por favor, tente novamente.")
                    break;}}

mediaGeral = mediaGeral / quatidadeTotalDeAlunosHaCadastrar

console.log('A média geral das notas dos alunos foi de: ' + mediaGeral)
console.log('A quantidade de homens que tiveram suas notas cadastradas foi de: ' + quantosHomensEnviaramNotas)
console.log('A quantidade de mulheres que tiveram sua nota acima de 7 foi de: ' + quantasMulheresNotaAcimaDe7)
console.log('A maior nota registrada entre os homens foi de: ' + maiorNotaEntreHomens);