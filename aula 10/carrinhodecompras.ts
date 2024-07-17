// Instanciando o sistema de compras e iniciando o programa

import { Produtos, Eletrodomestico, Eletronico, Alimento, Limpeza, Ferramentas } from "../backend";



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