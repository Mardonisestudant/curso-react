import React from 'react'

export default props => {
    return(
        <div>
                    <label htmlFor="passoInput"></label>
                    <input 
                    type="number" 
                    id="passoIni" 
                    value={props.passo}
                    onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}