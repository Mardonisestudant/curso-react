import './aluno.css'
import React from 'react'

import alunos from '../../data/aluno'

export default props => {

const lis = alunos.map((aluno) => {
    return (
        <li key={aluno.id}>
            {aluno.id} - {aluno.nome}  - {aluno.nota} 
        </li>
    )
})
    return (
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
}