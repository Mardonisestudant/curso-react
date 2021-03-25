// função sem retorno , retornar underfined
function func1() {}  


// armazenar em variavel 
const func2 = function(){}

// armazenar função em um array
a = 3
b = 8
const array = [function(a , b) {return a + b} , func1]
console.log(array[0](2,3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}
run(function() {console.log('Executando ...')})

// Uma função pode retornar/conter uma função
function soma(a , b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2,8)(8)


