import './Mega.css'
import  React  , {useState}from 'react'

export default props => {

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
   
  
    const numeroIni = Array(props.qtde || 6).fill(0)
    const [numeros , setNumeros] = useState(numeroIni)
    const [qtde , setQtde] = useState(props.qtde || 6)

    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="qtde">Quantidade</label>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Jogar Mega sena</button>
        </div>
    )

}