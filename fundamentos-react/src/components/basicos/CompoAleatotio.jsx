
import React from 'react'

export default  (props) => {
    console.log(props)
    var min = props.min
    var max = props.max

    var nu = Math.random() * (max - min ) + min
   return (

        <div>
            <h2>O numero Aleatorio entre 1 e 1000</h2>
            <strong>O numero sorteado é { nu }</strong>
        </div>
    )
} 