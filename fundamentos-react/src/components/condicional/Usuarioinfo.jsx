import Reacr from 'react'

import If from './If'
export default props => {

const usuario = props.usuario || {}
	return (

			<div>
				<If test={usuario && usuario.nome }>
				Sejam bem vindo <strong>{props.usuario.nome}</strong>
				</If>
				
			</div>
		)

}