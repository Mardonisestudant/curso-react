import './TabelaProduto.css'
import React from 'react'


import produtos from '../../data/produtos'

export default props => {

function getLinhas(){
return produtos.map((produtos , i) => {

		return (

			<tr key={produtos.id} className={i % 2 === 0 ? 'Par' : 'Impa'}>
				<td>{produtos.id}</td>
				<td>{produtos.nome}</td>
				<td>{produtos.preco}</td>
			</tr>
		)

})

}
	
	return (

		<div className="Tabelaprodutos">
			<table border='0'>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Preço</th>
					</tr>
				</thead>
				<tbody>
					{ getLinhas() }
				</tbody>
			</table>
		</div>
	)
}