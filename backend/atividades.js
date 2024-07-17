//1.Número Positivo ou Negativo: Solicite um número do usuário e, em seguida, determine se o número é positivo, negativo ou igual a zero. Exiba a mensagem correspondente.

let leitor = require(`readline-sync`)
let number = leitor.question(`insira um numero`)

if (number > 0) {
    console.log(`o valor ${number} é positivo`);
} else if (number < 0) {
    console.log(`o valor ${number} é negativo`)
} else if (number ==0) {
    console.log(`o valor ${number} é zero`)
} else {
    console.log(`valor é inexistente`)
}

//2.Login Simples: Crie uma variável com uma senha (por exemplo, "1234"). Solicite ao usuário que insira uma senha e verifique se a senha inserida corresponde à senha armazenada. Exiba uma mensagem de "Login bem-sucedido" ou "Senha incorreta".

let senha = loeitor.question(`insira a senha correta`)
let senhacorreta = "1234"
 
if (senha == senhacorreta) {
    console.log(`login bem incorreta.`)
}

//3.Calculadora Básica: Solicite ao usuário dois números e uma operação (por exemplo, +, -, *, /). Use if e else para executar a operação escolhida e exibir o resultado.

let valorum = leitor.question(`insira o segundo valor`)
let valordois = leitor.question(`insira o segundo valor`)
let operacao = leitor.question(`digite o simbolo da operação desejada +,-,*,/`)

if (operacao == "+") {
    console.log(`a soma é ${valorum + valordois}`)
} else if (operacao == "-") { 
    console.log(`a subtração é ${valorum - valordois}`);
} else if (operacao == "*") {
    console.log(`a mutiplição é ${valorum * valordois}`);
} else if (operacao == "/") {
    console.log(`a divisão é, ${valorum / valordois}`);
} else {
    console.log(`operação enexistente, tente novamente`);
}

//4.Maior de Três Números: Peça ao usuário para inserir três números e use if e else para determinar qual é o maior dos três. Em seguida, exiba o número maior.

let v1 = leitor.questionFloat(`insira o primeiro valor`)
let v2 = leitor.questionFloat(`insira o segundovalor`)
let v3 = leitor.questionFloat(`insira o terceiro valor`)
 
if (v1 > v2 && v1 > v3) {
    console.log(`o ${v1} é o maior numero`)
} else if (v2 > v1 && v2 > v3) {
    console.log(`o ${v2} é o maior numero`)
} else if (v3 > v1 && v3 > v2) {
    console.log(`o ${v3} é o maior numero`)
} else {
    console.log(`os valores são iguais ou incorretos.`);
}