import './App.css'
import React from 'react'


import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import ComPoAleatotio from  './components/basicos/CompoAleatotio'
import Familia from './components/basicos/Familia'
import FamiliaMenbro from './components/basicos/MenbroFamilia'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos  from './components/repeticao/Tabelaprodutos'
import ParOuImpar from './components/condicional/ParouImpar'
import Usuarioinfo from './components/condicional/Usuarioinfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Forms from './components/formulario/input'
import Contador from './components/contador/Contador'
import Megasena from './components/mega/Mega'
export default  (props) => (
    
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

        <Card titulo="#13 - Mega sena " color=" #ec5416 ">
          <Megasena qtde={10}></Megasena>
        </Card>

        <Card titulo="#12 - Contador " color="#ccc">
          <Contador numeroIni={10}></Contador>
        </Card>
        <Card titulo="#11 - Forms controls" color=" #dc7633  ">
           <Forms></Forms>
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="  #6c8023  ">
           <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 - Comunicação direta" color=" #3d0714 ">
            <DiretaPai ></DiretaPai>
        </Card>

        <Card titulo="#08 - Desafio Par ou Impar" color="#730099">
            <ParOuImpar numero={20}/>
            <Usuarioinfo usuario={{nome : "Mardonis"}}/>
        </Card>

        <Card titulo="#07 - Desafio repeticao  Produtos" color="#09d393">
            <TabelaProdutos />
        </Card>

        <Card titulo="#o6 - Lista de Alunos" color="#009024">
            <ListaAlunos />        
        </Card>
        <Card titulo="#05 - Componente com Filhos" color="#07c">
            <Familia sobrenome="Alves">

                <FamiliaMenbro nome="Mardonis" />
                <FamiliaMenbro nome="Natanael" />
            </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatorio" color="#dc7633">
            <ComPoAleatotio min={1} max={1000}></ComPoAleatotio>
        </Card>

        <Card titulo="#03 - Fragmento" color="#c0392b ">
            <Fragmento></Fragmento>
        </Card>

        <Card titulo="#02 - Com parametro" color="#d4ac0d ">
            <ComParametro titulo="Situação do Aluno"
            aluno="Pedro" nota={9.3}>
        </ComParametro>
        </Card>
        
        <Card titulo="#01 - Primeiro card" color="#1b4f72 ">
        <Primeiro></Primeiro>
        </Card>
        </div>
        
        
        
        
 </div> 
)



