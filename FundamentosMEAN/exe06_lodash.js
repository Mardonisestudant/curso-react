const _ = require('lodash')

const alunos =[{
    nome: 'Mardonis',
    nota: 8.0
},{
    nome: "Ana",
    nota: 8.9
},{
    nome:"Joe",
    nota: 6.7
}]


const media = _.sumBy(alunos , 'nota') / alunos.length
console.log(media)