function gerarNumeroNaocontido(min , max , array){
    const aleatorio = parseInt(Math.random() * (max + 1- min)) + min
    return array.includes(aleatorio) ? 
    gerarNumeroNaocontido (min ,max ,array) : aleatorio
} 

function gerarNumeros(qtde){
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
        const novoNumero = gerarNumeroNaocontido(1 , 60 , nums)
        return [...nums , novoNumero]
    } , [])
    .sort((n1 , n2) => n1 -n2)

    return numeros
}
console.log(gerarNumeros(7))
//console.log(gerarNumeroNaocontido(1, 60 , [15 ,49 ,30 ,26 , 28]))