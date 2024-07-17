//crie uma classe chamada pizza que vai ter os parametros sabor,tamanho e preço. crie nesta classe um metodo chamado descrição que retorna uma string contendo a descrição da pizza no formato "pizza[sabor], tamanho: [tamanho], preço:R$ [preco]".

export class Pizza {
    sabor:string
    tamanho:string
    preco:number

    constructor(sabor:string, tamanho:string, preco:number) {
        this.sabor = sabor
        this.tamanho = tamanho
        this.preco = preco
    }

    descricao():void {
        console.log(`pizza ${this.sabor} tamanho ${this.tamanho} e preco R$${this.preco}`)
    }
}