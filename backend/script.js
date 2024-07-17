//string
const nome1 = 'isadora'
let sobrenome = 'de Souza'
//console.log('meu nome é', nome, sobrenome, ',e tenho ', idade, 'anos.')
//console.log('meu nome é $(nome) $(sobrenome), e tenho $(idade) anos.')//
var idade1 = 16

//number
const mes = 7
const pemperatura = '-10,50'

const num2 = 10
const num3 = 15
const soma1 = num2 + num3

console.log(num2 + num3)

//booleans
let souestudante1 = true 
let souprofessor1 = false

//crie uma variavel com o nome, a idade e uma variavel dizendo se é estudante


const nome = 'isadora'
const idade = 16
const souestudante3 = true 
const souprofessor4 = false
 
//console.log('meu nome é', nome ,', tenho', idade, 'anos e eu sou estudante?', souestudante3)

//passamos string para number 
const num5 = '2'
const num6 = '5'
const numstring1 = Number(num5)
const numstring2 = Number(num6)
const soma = numstring1 + numstring2

console.log(soma)

//passando number para satring
const num7 = 4
//console.log(typeof num7)

//readlinesync
// npm installl readlinesync
const readlinesync = require('readline-sync')//
const num8 = Number(readlineSync.question('amira'))
const num9 = Number(readlineSync.question('aaa'))
//console.log(num8 + num9)


//operadores aritimeticos
//soma +
//subtração -
//multiplicação *
//divisão /

//faça 3perguntas ao usuario, pedindo 3 notas 
//calculem a media destas notas.

//10 + 5 + 10 e divide por 5 calculando media 

const num10 = Number(readlineSync.question('insira uma nota'))
const num11 = Number(readlineSync.question('insira uma nota'))
const num12 = Number(readlineSync.question('insira uma nota'))

const media = (num10 + num11 + num12) /3

console.log('sua nota é', media)

//comparadores
//maior ou igual >=
//menor <
//menor ou igual 

const valor1 = 5
const valor2 = 10

console.log(valor1 === valor2) //false
console.log(valor1 !== valor2) //true
console.log(valor1 > valor2) //false
console.log(valor1 >= valor2) //false
console.log(valor1 < valor2) //true
console.log(valor1 <= valor2) //true

//peça para o usuario inserir dois numeros. compara estes numeros, e verifique se o primeiro numero é maior, menor, igual, etc do que o segundo.

const num13 = Number(readlineSync.question('insira um numero'))
const num14 = Number(readlineSync.question('insira um numero'))

console.log('${num13} é igual a ${num14}?', num13 === num14)
console.log('${num13} é diferente a ${num14}?', num13 !== num14)
console.log('${num13} é maior a ${num14}?', num13 > num14)
console.log('${num13} é maior ou igual a ${num14}?', num13 >= num14)
console.log('${num13} é igual a ${num14}?', num13 < num14)
console.log('${num13} é igual a ${num14}?', num13 <= num14)

// .lenght
const meunome = "isadora de souza schaeffer"
console.log(meunome.lenght)//17

//charAT()
console.log('isadora'.charAT(0))//n

//indexOF()
console.log('isadora'.indexOf('o'))//2

//toUpperCase() e toLowerCase()

console.log('isadora'.toUpperCase)//ISADORA
console.log('isadora'.toLowerCase)//isadora

//slice()
let frase = "mergulhando em tecnologia"
console.log(frase.slice(0,11))//mergulhando

//replace()
let comunicacao = "olá, sr, nomeusuario!.";
console.log(comunicacao.replace("nomeusuario", "isadora")); //olá douglas

//concat()
let novastring = "programe nas principais linguagens de plataformas: ";
console.log(novastring.concat("javascript,").concat('python,').concat(" e C#."))
//programe nas principais linguagens e plataformas: javascript, python, c#

//split()
let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arraylinguagens = linguagens.split(";");
console.log(arraylinguagens)//}[javascript,java,c#]

//trim()
let login = "isadora@emailteste.com";
let loginsemespaco = login.trim();
console.log(loginsemespaco);//isadora@emailteste.com

const valor3 = true 
const valor4 = false
const valor5 = true 
//verifica se o valor 3 e o 4 são true 
//se um deles for false, o resultado é false
console.log(valor3 && valor4 && valor5)//false

//verifica se o valor3 ou 4 valer são true 
//se um deles for true, o resultado é true 
console.log(valor3 || valor4 || valor5)//true

const valor6 = 3 < 14 //true
const valor7 = 6 > 29 //false
const valor8 = 3 <- 1 //false

console.log(valor6 && valor7 && valor8)

const listadecompras = ["carne","leite","pão"]
console.log(listadecompras[0])//carne
console.log(listadecompras[1])//leite
console.log(listadecompras[2])//pão

const racadecao = ["shih tzu","rottweller","pug.","golden retriever", "pastor alemão."]
const indice = Number(readlineSync.question('insira um numero de 0 a 4'))
const cachorroescolhido = cachorro[indice]

console.log(`você escolheu o cachorro de raça ${cachorroescolhido}`)

//ter 18 ou mais 
//ter uma carteira de motorista 
//ter um carro 
//if. um inglês quer dizer

const idade1 = 18 
const temcarteira = true 
const temcarro = true

if(18 && temcarteira === true && temcarro === true) {
    console.log("você pode dirigir")
}

