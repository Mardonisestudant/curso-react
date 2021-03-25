const pessoa = {
    saudacao : 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const FalarPessoa = pessoa.falar.bind(pessoa)
FalarPessoa()

function Pessoa(){
  
    this.idade =0
    
    const self = this  
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}

new Pessoa()