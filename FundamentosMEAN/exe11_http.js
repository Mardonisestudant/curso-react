const http = require('http')
const server = http.createServer(function(req, res){
    res.writeHead(200 , {"Content-type" : "text/html"})
    res.end('<h1>Acho que é melhor usar o Express , não ?</h1>')
})

const porta = 2322
server.listen(porta , function(){
    console.log(`Escutando a ${porta}`)
})