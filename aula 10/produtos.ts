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
