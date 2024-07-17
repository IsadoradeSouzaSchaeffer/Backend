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
