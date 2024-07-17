//comando para instalar typescript (npm install -g typescript)
//"a grande diferença do typescript pro javascript é que no typescript a gente coloca o tipo de tudo"

//para rodar o projeto é necessario primeiro transpilar o código para javascript (npx tsc arquivo.ts). depois o arquivo deve ser rodado como qualquer outro código em javascript (node arquivoscript.js)
let nome:string = `isadoara`
let idade:number = 16
let souestudante:boolean = true
console.log(`meu nome é ${nome}, tenho ${idade} anos e eu sou estudante? ${souestudante}.`)//

//crie uma função que pede nome, idade, e se tem carteira de motorista 

//readline-sync

let nome1:string = `isadora`
let idade1:number = 16
let temcarteira:boolean = false

console.log(`meu nome é ${nome}, tenho ${idade} anos e eu tenho carteira de motorista? ${temcarteira}`)

function boasvindas (nome) {
    console.log(`seja muito bem vindo ${nome}`)
}
boasvindas(89)

//variaveis
//string
let nome2:string = `isadora`

//number
let idade2:number = 16

//boolean
let gameover:boolean = true

//array
let array:number [] = [1,2,3,4]

//function
function soma (num1:number,num2:number):number {
    return num1 + num2
}

function  frase1 (nome:string):string {
    return `olá ${nome}, tudo bem?` 
}

function chamaalgo(nome:string):void {
    console.log(`e ai ${nome}!`)
}

function  frase (nome?:string):void {
    console.log (`hello ${nome} world`)
}

frase(`maria`)

function desconto (preco:number, desconto:number = 0.05):number {
    return preco * (1 - desconto)
}
console.log(desconto(5))

function nome3(nome3:string = `joao`, idade:number = 40):void {
    console.log(`olá ${nome3}, voce tem ${idade} anos.`)
}
console.log(`olá ${nome}, voce tem ${idade} anos.`)

//estou criando um "molde" para objetos do tipo cachorro 
//classe
class cachorro {
   nome:string
   peso:number
   pelagem:string
   raca:string

   constructor(dognome:string, dogpeso:number, dogpelagem:string) {
    this.nome = dognome
    this.peso = dogpeso
    this.pelagem = dogpelagem
    this.raca = `golden`
   }

latir():void {
    console.log(`au au`)
}

correr():void {
    console.log(`o cachorro esta correndo`)
}

comer():void {
    console.log(`o cachorro esta comendo`)
}
}

//instanciando meus objetos
const meucachorro:cachorro = new cachorro('nala', 13,'amarela')
const meuoutrocachorro:cachorro = new cachorro('margot', 18, 'preta')

//assim chamamos um atributo
console.log(meucachorro.nome) //nala

//assim chamamos o metodo 
meucachorro.latir()
meuoutrocachorro.latir()

//ciem uma classe coruja
//3 atraibutos
//3 metodos 
//não esqueça do contructor 
//depois de criarem a classe, instancie dois objetos a coruja e chame os metodos 

class coruja {
    //atributos
    nome:string
    peso:number
    pelagem:string

    //constructor
    constructor(corujanome:string, corujapeso:number, corujapelagem:string) {
        this.nome = corujanome
        this.peso = corujapeso
        this.pelagem = corujapelagem
    }

    //metodos
    vigiar():void {
        console.log(`a ${this.nome} esta vijiando`)
    }
    comer():void {
        console.log(`a ${this.nome} esta comendo`)
    }
    dormir():void {
        console.log(`a ${this.nome} esta dormindo`)
    }
}

//instancie os objetivos 
const minhacoruja:coruja = new coruja('megan', 330, 'marron') 
const minhaoutracoruja:coruja = new coruja('meive', 573, 'preta')

//chamando dois metodos 
minhacoruja.vigiar()
minhaoutracoruja.vigiar()


class Guerreiro {
    nome: string;
    tipo: string;
    forca: number;
    saude: number;

    constructor(nome: string, tipo: string, forca: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
        this.saude = 100;
    }


    atacarMonstro(monstro: Monstro):void {
        console.log(`${this.nome} ataca ${monstro.nome}!`);
        monstro.receberDano(this.forca);
    }

    receberDano(dano: number):void {
        this.saude -= dano;
        console.log(`${this.nome} recebe ${dano} de dano.`);
        if (this.saude <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }

    info():void {
        console.log(`O guerreiro ${this.nome} do tipo ${this.tipo} tem ${this.saude}.`)
    }
}


class Monstro {
    nome: string;
    forca: number;
    saude: number;

    constructor(nome: string) {
        this.nome = nome;
        this.forca = 50;
        this.saude = 10;
    }

   
    atacarGuerreiro(guerreiro: Guerreiro):void {
        console.log(`${this.nome} ataca ${guerreiro.nome}!`);
        guerreiro.receberDano(this.forca);
    }

 
    receberDano(dano: number):void {
        this.saude -= dano;
        console.log(`${this.nome} recebe ${dano} de dano.`);
        if (this.saude <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }

    info():void {
        console.log(`O monstro ${this.nome} tem ${this.saude} de saude.`)
    }
}


let meuGuerreiro = new Guerreiro("Conan", "Bárbaro", 100);
let monstro = new Monstro("Dragão")


meuGuerreiro.atacarMonstro(monstro)
monstro.info()

class Carro {
    private velocidade: number

    constructor(velocidade: number) {
        this.velocidade = velocidade
    }

    //Mostrar o valor de velocidade
    //getter - pegar / obter / mostrar
    getVelocidade():number{
        return this.velocidade
    }

    //Setar o valor de velocidade
    //setter  - setar  /  definir  / modificar
    setVelocidade(novaVelocidade:number):number | string{
        if (this.velocidade > 0){
           return this.velocidade = novaVelocidade
        } else {
            return "A velocidade não pode ser 0 ou negativa."
        }

    }

}

const carro = new Carro(100)
console.log(carro.getVelocidade())//100
carro.setVelocidade(150)
console.log(carro.getVelocidade())//150

























export interface Produtos {
    
    price:number;
    name: string;
    weight: number;
    startEngine(): void;
    CalcularValorTotal():void

}

export class Alimento implements Produtos  { 
    price:number;
    name: string;
    weight: number;
    constructor(price:number, name:string, weight:number,){
     this.price = price
     this.name = name
     this.weight = weight

    }
    

    startEngine(): void {
        console.log(`The ${this.name} is am loja`)
    }

    comprarProduto(quantity: number):void{
        console.log(`you purchased this product ${this.name}` + quantity);
    }

    eat(quantity: number):void{
        console.log(`The animal has eating `  + quantity);
    }

    CalcularValorTotal():number{
        return this.price * 0.4
     }
}



export class Eletronico implements Produtos { 
    price:number;
    name: string;
    weight: number;
    constructor(price:number, name:string, weight:number){
     this.price = price
     this.name = name
     this.weight = weight
    }
    startEngine(): void {
        console.log(`The ${this.name} is am loja`)
    }
    
    ligarEletronico():void{
        console.log(`connect electronic ${this.name}`)
    }
    comprarProduto(quantity: number):void{
        console.log(`you purchased this product ${this.name}` + quantity);
    }

    CalcularValorTotal():number{
        return this.price * 0.9
     }
}

export class Eletrodomestico implements Produtos { 
    price:number;
    name: string;
    weight: number;
    constructor(price:number, name:string, weight:number){
     this.price = price
     this.name = name
     this.weight = weight
    }
    startEngine(): void {
        console.log(`The ${this.name} is am loja`)
    }

    usarEletrodimestico():void{
        console.log(`Open is ${this.name}`)
    }

    comprarProduto(quantity: number):void{
        console.log(`you purchased this product ${this.name}` + quantity);
    }

    CalcularValorTotal():number{
        return this.price * 0.7
     }

   
}

export class Limpeza implements Produtos { 
    price:number;
    name: string;
    weight: number;
    constructor(price:number, name:string, weight:number){
     this.price = price
     this.name = name
     this.weight = weight
    }
    startEngine(): void {
        console.log(`The ${this.name} is am loja`)
    }
    
    ligarEletronico():void{
        console.log(`connect electronic ${this.name}`)
    }
    comprarProduto(quantity: number):void{
        console.log(`you purchased this product ${this.name}` + quantity);
    }

    CalcularValorTotal():number{
       return this.price * 0.5
    }
}

export class Ferramentas implements Produtos { 
    price:number;
    name: string;
    weight: number;
    constructor(price:number, name:string, weight:number){
     this.price = price
     this.name = name
     this.weight = weight
    }
    startEngine(): void {
        console.log(`The ${this.name} is am loja`)
    }
    
    ligarEletronico():void{
        console.log(`connect electronic ${this.name}`)
    }
    comprarProduto(quantity: number):void{
        console.log(`you purchased this product ${this.name}` + quantity);
    }

    CalcularValorTotal():number{
        return this.price * 0.5
     }
}


   
       
   

// Instanciando o sistema de compras e iniciando o programa

class CarrinhoDeCompras {
    private produtos: Produtos[] = [];

    adicionarProduto(produto: Produtos): void {
        this.produtos.push(produto);
        console.log(`Produto ${produto.name} adicionado ao carrinho.`);
    }

    verCarrinho(): void {
        console.log("Carrinho de Compras:");
        this.produtos.forEach((produto) => {
            console.log(`${produto.name}: ${produto.CalcularValorTotal()}`);
        });
    }

    

}

function person() {
    const carrinho = new CarrinhoDeCompras();
    

    console.log("Bem-vindo ao sistema de compras!");

    while (true) {
        console.log("\nMenu Principal:");
        console.log("1. Comprar Produto");
        console.log("2. Ver Carrinho");
        console.log("3. Pagar");
        console.log("4. Sair");

        let escolha = parseInt(prompt("Escolha uma opção: ") || '0');

        switch (escolha) {
            case 1:
                // Simulação de compra de produtos
                let eletrodomestico = new Eletrodomestico(50.0, "Sofá", 2);
                carrinho.adicionarProduto(eletrodomestico);
                let eletronico = new Eletronico(1500.0, "Smartphone", 2);
                carrinho.adicionarProduto(eletronico);
                let alimento = new Alimento(50.0, "Chocolate", 2);
                carrinho.adicionarProduto(alimento);
                let limpeza = new Limpeza(10.0, "Sabão em pó", 2);
                carrinho.adicionarProduto(limpeza);
                let ferramentas = new Ferramentas(100.0, "Machado", 22);
                carrinho.adicionarProduto(ferramentas);
                break;
            case 2:
                carrinho.verCarrinho();
                break;
            case 3:
                
                this.Pagar()
                break;
            case 4:
                console.log("Saindo do programa. Obrigado!");
                return;
            default:
                console.log("Opção inválida. Por favor, escolha novamente.");
                break;
        }
    }
}

//
export interface MetodosDePagamento {
    pix:number;
    dinheiro: Number;
    cartao: number;
    startEngine(): void;
    pagar(): void;
}

export class pix implements MetodosDePagamento  { 
    pix:number;
    dinheiro: number;
    cartao: number;
    constructor(pix:number, dinheiro:number, cartao:number,){
     this.pix = pix
     this.dinheiro = dinheiro
     this.cartao = cartao
    }
    startEngine(): void{
        console.log(`Escolha o método de pagamento`)
    }

    pagar():void{
        console.log(`você pagou o produto com ${this.pix} `)
    }
}

export class Dinheiro implements MetodosDePagamento  { 
    pix:number;
    dinheiro: number;
    cartao: number;
    constructor(pix:number, dinheiro:number, cartao:number,){
     this.pix = pix
     this.dinheiro = dinheiro
     this.cartao = cartao
    }
    startEngine(): void{
        console.log(`Escolha o método de pagamento`)
    }

    pagar():void{
        console.log(`você pagou o produto com ${this.dinheiro} `)
    }
}

export class Cartao implements MetodosDePagamento  { 
    pix:number;
    dinheiro: number;
    cartao: number;
    constructor(pix:number, dinheiro:number, cartao:number,){
     this.pix = pix
     this.dinheiro = dinheiro
     this.cartao = cartao
    }
    startEngine(): void{
        console.log(`Escolha o método de pagamento`)
    }

    pagar():void{
        console.log(`você pagou o produto com ${this.cartao} `)
    }
}
