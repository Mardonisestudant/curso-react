import React, { useState } from 'react'

export default (props) => {
const [valor , setValor] = useState('Mardonis')

function quandoMuda(e){
    
    setValor(e.target.value)

    console.log(e.target.value)
}


    return (
        <div className="Input" >
            <h2>{valor}</h2>
           <input  value={ valor } onChange={ quandoMuda }/>
           <input value={valor} readOnly/> 
           <input value={undefined}/>
        </div>
    )
}