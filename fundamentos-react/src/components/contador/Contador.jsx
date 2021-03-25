import './Contador.css'
import React, {Component} from 'react'

import Display from '../contador/Display'
import Botoes from  '../contador/Botoes'
import PassoForm from '../contador/Passoform'

class Contador extends Component{

    state = {
        numero : this.props.numeroIni || 0,
        passo : this.props.passoIni || 5,
    }

    inc = () => {
        this.setState({
           numero :  this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
           numero :  this.state.numero - this.state.passo
        })
    }

    setPasso = (novopasso) => {
        this.setState({
           passo : novopasso
    })
}

    render(){
        return(

            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
               <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador 