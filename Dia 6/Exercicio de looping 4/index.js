let tabuada = parseInt(prompt("Escolha um número para saber a sua tabuada até o 10. Também será mostrado as tabuadas dos três números seguintes!"))

console.log("Tabuada até o 10 do número escolhido!")
for(contador = 0; contador <= 10; contador++){console.log(contador + " x " + tabuada + " = " + (contador * tabuada))}

tabuada++
console.log("Tabuada até o 10 do número seguinte ao número escolhido!")
for(contador = 0; contador <= 10; contador++){console.log(contador + " x " + tabuada + " = " + (contador * tabuada))}

tabuada++
console.log("Tabuada até o 10 do segundo número seguinte ao número escolhido!")
for(contador = 0; contador <= 10; contador++){console.log(contador + " x " + tabuada + " = " + (contador * tabuada))}

tabuada++
console.log("Tabuada até o 10 do terceiro número seguinte ao número escolhido!")
for(contador = 0; contador <= 10; contador++){console.log(contador + " x " + tabuada + " = " + (contador * tabuada))}