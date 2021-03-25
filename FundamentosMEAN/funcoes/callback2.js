const notas = [6.5 , 7.6, 7.8 ,9.7,4.5]

// sem callback
let notasBaixas = []
for(let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


// com callback
notasBaixascallback = notas.filter(function(nota){
    return nota <7
})

console.log(notasBaixascallback)