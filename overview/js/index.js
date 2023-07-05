// Overview de JavaScript



// console
console.log('Texto dentro de um log.')
console.warn('Isso é um alerta.')
console.error('Essa é uma mensagem de erro.')
// console é um objeto e log(), warn() e error() são métodos ou funções



// variáveis

// escopo global
let x = 10
if(true){
    // escopo local
    let x = 20
    console.log(this.x)
}
// é incorreto utilizar var depois do EC6



// tipos de dados

// string
const name = 'Victor'
console.log(name)
console.log(typeof name)

// number
let n = 10
console.log(n)
console.log(typeof n)
n = 15.99
console.log(n)
console.log(typeof n)

// bool
const isOpen = 0
console.log(isOpen)
console.log(typeof isOpen)

// null
const a = null
console.log(a)
console.log(typeof a)

// undefined 
let nada
console.log(nada)
console.log(typeof nada)
// deve-se evitar ter dados nessa configuração

// array
const linguagens = ['C++', 50, 'Python', 'JS']
console.log(linguagens[1])
console.log(typeof linguagens[1])

// object literals
// são usados quando a necessidade é de representar alguma entidade, como usuário, pessoa, produto
// possuem notação específica, similar à do JSON
const user = { 
    username:['vrc','outro nome'], 
    password:'123', 
    name:'Victor',
    age:31
}
console.log(user)
console.log(typeof user)



// métodos de string

const text = 'qualquer um'
// length para retornar o tamanho de uma string; obs.: length é um atributo, e não um método
console.log(text.length)
// split() para quebrar texto em um determinado conjunto de caracteres
const textToArray = text.split('quer')
console.log(textToArray[1])
// toUpperCase() para transformar todos os caracteres em maiúsculo
console.log(text.toUpperCase())
// indexOf() para procurar algo dentro de uma string
console.log(text.indexOf('abc'))
// charAt() para encontrar um char em uma posição específica dentro do vetor de caracteres que uma string é
console.log(text.charAt(0))
// slice() para encontrar um conjunto de caracteres num determinado intervalo do vetor da string
console.log(text.slice(2,10))



// mais sobre arrays
// podem ser heterogêneos, ou seja, ter dados de tipos diferentes
const chars = ['A', 'B', 'C', 'D', 88]
// length em um array retorna quantos dados estão lá dentro
console.log(chars.length)
// para chegar na última posição, tamanho-1 como índice
console.log(chars[chars.length-1])
// mesmo que seja declarado como const, dá pra manipular os conteúdos de um array, inserindo e excluindo dados
chars[5] = 'F'
console.log(chars)
// pop para excluir do fim do array; shift para excluir do início do array
chars.pop()
chars.pop()
chars.pop()
// push para inserir no fim do array; unshift para inserir no início do array 
chars.push('B')
console.log(chars)

// Desafio: desenvolva uma calculadora para as 4 operações básicas usando const com os dados vindo de um formulário.

function calculator(){
    const formData = new FormData(document.querySelector('form'))
    const n1 = parseInt(formData.get('n1'))
    const n2 = parseInt(formData.get('n2'))
    console.log(n1+n2)
}



// object literal
// objetos literais são utilizados para representar endidades como pessoas, produtos, usuários...

const product = {
    productName: 'Camiseta',
    price: 29.99,
    inStock: true,
    size: ['p', 'm', 'g'],
    'main color': 'red'
}

console.log(product.size[product.size.length-1])
console.log(product.price)
// a propriedade 'main color' não pode ser chamada via sintaxe de orientação a objetos; precisa ser utilizada a sintaxe de vetor em virtude do nome composto como propriedade do objeto product
console.log(product['main color'])

// destructuring - desestruturação
// é uma técnica muito utilizada para armazenar dados de estruturas em variáveis

// desestruturando o objeto product para duas variáveis
// os nomes precisam ser idênticos aos das propriedades do objeto
let { size, price } = product
console.log(price)
price = 30.49
console.log(price)
console.log(product.price)


const vector = [3,7,2,45,99]
// desestruturando um vetor
let [ v1, v2, ...otherVector ] = vector
console.log(otherVector)



// JSON - JavaScript Object Notation
// é uma notação, ou seja, uma forma de escrever com regras específicas, como o XML, por exemplo
// todo JSON é composto por texto, ou seja, interpretado como string, mas possuindo regras de sintaxe específicas

// criando o objeto cachorro
const dog = {
    name: 'Scooby',
    age: 10
}
console.log(dog)
// transformando o objeto em JSON
const dogJson = JSON.stringify(dog)
console.log(dogJson)
// transoformando o JSON em objeto literal
const dogObject = JSON.parse(dogJson)
console.log(dogObject)

// caso haja algum erro na sintaxe, não pode ser considerado um JSON válido
// const jsonErrado = '{'primeiro':'dado1','segundo':222,'terceiro':'dado3'}'
// const jsonErradoObject = JSON.parse(jsonErrado)

// Desafio 1: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const vetor = [5,7,3,9,10]
const objetoVetor = {
    n1:vetor[0],
    n2:vetor[1],
    n3:vetor[2],
    n4:vetor[3],
    n5:vetor[4]
}
const { n1, n2, n3, n4, n5 } = objetoVetor 
console.log(JSON.stringify({n1,n2,n3,n4,n5}))

// Desafio 2: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

const variavel1 = 10, variavel2 = 15
const objetoCalculadora = {
    sum: variavel1+variavel2,
    sub: variavel1-variavel2,
    mult: variavel1*variavel2,
    div: variavel1/variavel2
}
console.log(JSON.stringify(objetoCalculadora))



// estruturas

// seleção
const num = 100
if(n > 10){ // operadores relacionais: > < >= <= == !=
    console.log('Teste de entrada no if.')
}
const texto = '0'
if(texto === 0) // o operador de tríplice igualdade compara o valor e o tipo dos conteúdos
    console.log("Os dados são iguais.")
else if(true) 
    console.log('Segundo if - if aninhado.')
else
    console.log('Saída...') // erro na hora de pensar o código...

// operador ternário
const resultado =  n > 20 ? true : false
console.log(resultado)
console.log(typeof resultado)

// repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle

let contador = 0
const lista = [1, 7, 3, 64, 2, 0]
while(contador < lista.length){
    console.log('O \'elemento\' da\n\n vez é ' + lista[contador] + '.')
    contador++ // contador = contador + 1
}

const outraLista = ['a', 'b', 'd', 'e', 'c']
for(let contador = 0; contador < outraLista.length; contador++)
    console.log(`O elemento da
vez é ${outraLista[contador]}.`) //template literais, ou template strings: conteúdo entre crases; a quebra de linha no editor de cógidos gera quebra de linha no navegador.

// Desafio relâmpago: escreva o que aparece no log abaixo como template literals.
const var1 = 5
const var2 = 10
const sumLiteral = `Quinze é ${(var1+var2)},
 e não ${(2*var1+var2)}.`
console.log(sumLiteral)



// métodos de arrays
// os métodos de arrays esperam funções anônimas como argumentos para responder aos parâmetros

const names = ['Victor','Alexandre','Mariana','Paulo']

// forEach percorre um vetor
// os métodos para vetores precisam de funções anônimas para auxiliarem na resolução das suas funcionalidades
names.forEach(function(name){
    console.log(name)
})

// map percorre o vetor e permite fazer alterações nos conteúdos mapeados, retornando a alteração como resultado
const modifiedNames = names.map(function(name){
    if(name == 'Paulo')
        return ('Paulo Sampaio')
    else    
        return name
})
modifiedNames.forEach(function(name){
    console.log(name)
})

// filter permite realizar uma filtragem em um vetor, retornando o resultado
const numArray = [90,-4,6,22,0,36,1,4].filter(function(num){
    return num < 10
})
numArray.forEach(function(num){
    console.log(num)
})
console.log(numArray)

// reduce permite aplicar operações matemáticas para reduzir o vetor a um resultado
const sumArray = numArray.reduce(function(num1, num2){
    return num1+num2
})
console.log(sumArray)



// funções

function myFunction(name, surname){
    return `O nome completo é ${name} ${surname}.`
}

console.log(myFunction('Paulo', 'Sampaio'))

// arrow function === função anônima
// function(data){ return 0; } é uma função anônima, ou seja, uma função que não possui nome na sua assinatura

// arrow functions geralmente são atribuídas a variáveis que passam a ser funções ou são parte dos parâmetros ou argumentos de uma chamada de função.
const myArrowFunction = (a,b) => a+b
console.log(myArrowFunction(5,2))

//Desafio: Transforme a função a seguir em uma arrow function.

/*
function out(){
    let x = 7
    function sumXand5(){
        return x+5
    }
    return sumXand5()
}
*/



// reduzindo o formato de escrita; quando tempos apenas uma propriedade de um objeto sendo utilizada na função anônima, podemos escrever o parâmetro como object literal especificando a propriedade do objeto que será trabalhada e utilizá-la sem que seja necessário escrever o nome do objeto
const namesLength = names.map( ({length}) => length )
console.log(namesLength)


// closures
// significa fechamento
// trata-se de mais um escopo possível, considerando que uma função conheçe o escopo de onde foi declarada e pode usar as variáveis contidas nele, não sendo, nesse caso, nem escopo global, nem escopo local
let varX = 50
function out(){
    let varX = 35
    function sumXand5(){
        let varX = 10
        return varX+5
    }
     return sumXand5()
}
console.log(out())

// Desafio A+: Fazer esquema em que um código declara uma variável (let) e uma função faz a soma do valor da variável com um valor estático (5, por exemplo) como retorno. Outro código importa o primeiro e declara uma variável com o mesmo nome e outro valor. Em seguida, chama a função do primeiro código. Qual valor será exibido?
// Utilizar o artigo disponível no endereço https://www.horadecodar.com.br/2020/08/13/como-incluir-um-arquivo-de-javascript-em-outro/



// orientação a objetos

// classes contém atributos e métodos
class Product{
    // em JavaScript, os atributos costumam ser especificados via contrutor
    // o método constructor será chamado toda vez que um objeto de Product for criado (instanciado)
    constructor(name, price){
        // a palavra reservada this indica que o dado que está sendo referenciado está fora do escopo atual, ou seja, this é um apontamento para quem está na classe Product, nesse caso
        // mesmo que não tenha sido explicitamente definido no código, name e price são atributos (propriedades) da classe Product, pois estão sendo trabalhados dentro do método especial constructor
        this.name = name
        this.price = price            
    }
    // método sem parâmetro e com retorno
    // utilizar retorno é mais interessante, pois torna os métodos mais úteis para diferentes cenários (armazenar no banco, exibir na tela, atribuir para uma variável...)
    productDetails(){
        return `O nome do produto é ${this.name} e o preco é ${this.price}.`
    }
    // métodos estáticos não precisam de objetos para serem invocados (chamados)
    static test(){
        console.log('testando método estático...')
    }
}

// herança

// Tenis é subclasse (filha) e Product é superclasse (pai), ou seja, Tenis herda tudo que Product possui (atributos e métodos)
class Tenis extends Product{
    constructor(name, price, size){
        // a inicialização dos atributos que já existiam na superclasse é feita através da chamada do método especial super
        super(name, price) 
        this.size = size           
    }
    showNumber(){
        return `O tamanho do ${this.name} é ${this.size}.`
    }
    // productDetails reescreve o método da superclasse para todo objeto da subclasse
    productDetails(){
        return `O nome do produto é ${this.name} e no tamanho ${this.size} o preço é ${this.price}.`
    }
}

// instanciando (criando) um objeto Product
const shirt = new Product('Camisa branca', 19.99)
// chamando um método da classe Product a partir do objeto
console.log(shirt.productDetails())
const sock = new Product('Meia cinza', 12.49)
console.log(sock.productDetails())
// chamando um método estático sem a necessidade de especificar um objeto
Product.test()
const tenis = new Tenis('tenis Nike Jordan', 12000.00, '42')
console.log(tenis.showNumber())
tenis.name = 'tenis Jordan'



// DOM - Document Object Model
// cria uma árvore que representa a estrutura do documento HTML, indicando qual elemento está dentro de qual outro elemento
// através do objeto nativo document, é possível executar métodos que permitem obter e manipular o HTML

// seleciona elemento pelo id; pouco recomendado fazer dessa forma
console.log(document.getElementById('titulo'))

// seleciona vários elementos pelo nome da classe e cria um array
const texts = document.querySelectorAll('.text')
console.log(typeof(texts))

texts.forEach((data) => console.log(data))

// manipula o conteúdo de um elemento
texts[0].textContent = 'Estou alterando o título...'

// insere conteúdo (string que pode descrever um HTML) em um elemento
texts[0].innerHTML = '<span>Testando uma alteração...</span>'

// altera propriedades do css inline do elemento
texts[1].style.backgroundColor = 'red'

// remove o elemento
texts[2].remove()

// adicionando evento
// seleciona um elemento pelo id, armazenando em uma variável
const button = document.querySelector('#btn')
// rotina para a execução de alteração no estilo de um elemento a partir do clique
button.addEventListener('click',()=>(texts[0].style.backgroundColor='orange'))

// teste de código assíncrono

setTimeout(() => { console.log('esperando 5 segundos para aparecer...') } , 5000)

console.log('quando isso aparece?')



// Desafio 04: utilize a classe nativa Date para, dentro de uma função, exibir via console uma string com o dia, mês e ano atual. Em outras palavras: crie uma função sem parâmetros, crie um objeto do tipo Date dentro dela e utilize os métodos getHours, getMinutes e getSeconds para montar uma string com a hora, minuto e segundo. Após a função, acrescente o código setTimeout(nomeDaFuncao, 5000) três vezes. Teste com o comando node ./nomedoarquivo.js via terminal. Perguntas retóricas: o que acontece? Qual o motivo disso acontecer? Agora, utilize o método setInterval apenas uma vez no lugar de setTimeout e responda às mesmas perguntas.


// Desafio: Crie um documento HTML com apenas um elemento ul, ou seja, uma lista não ordenada. Em seguida, crie um documento em JavaScript, utilize fetch (é uma API nativa do ES6 para requisições HTTP através de Promises) para pegar o conteúdo da página http://jsonplaceholder.typicode.com/users. Em seguida, dentro do fetch, utilize um then para converter o conteúdo da página para um objeto JSON e outro then para mapear o vetor com os dados do objeto JSON, puxando o nome e email de cada dado para a lista no HTML. Trate também o erro, quando houver. Inicie suas pesquisas para resolver o problema em https://www.devmedia.com.br/javascript-fetch/41206. Métodos do objeto document que podem ser úteis: createElement, textContent, innerHTML, appendChild, querySelector.Métodos de vetor que podem ser úteis: forEach, map

fetch('http://jsonplaceholder.typicode.com/users') // Objeto do JavaScript (ES6) que funciona como uma Promise e trabalha requisições e respostas HTTP.
    .then((resp) => resp.json()) // Recebendo os dados e convertendo para um JSON.
    .then(function(dado){ // Recebendo os dados em um Array.
        return dado.map(function(item){ // Conseguimos varrer o array com o método map.
            const li = document.createElement('li') // Criando um elemento li.
            li.innerHTML = `Nome: ${item.name} | Sobrenome: ${item.username}` // Inserindo o elemento no HTML.
            document.getElementById('nomes').appendChild(li) // Inserindo um nó do tipo li na estrutura do DOM.
        })
    })
    .catch((error) => {
        console.log('Algo não deu certo: ' + error)
    })
