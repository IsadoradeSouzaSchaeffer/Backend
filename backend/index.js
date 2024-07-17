"use strict";
//comando para instalar typescript (npm install -g typescript)
//"a grande diferença do typescript pro javascript é que no typescript a gente coloca o tipo de tudo"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartao = exports.Dinheiro = exports.pix = exports.Ferramentas = exports.Limpeza = exports.Eletrodomestico = exports.Eletronico = exports.Alimento = void 0;
//para rodar o projeto é necessario primeiro transpilar o código para javascript (npx tsc arquivo.ts). depois o arquivo deve ser rodado como qualquer outro código em javascript (node arquivoscript.js)
var nome = "isadoara";
var idade = 16;
var souestudante = true;
console.log("meu nome \u00E9 ".concat(nome, ", tenho ").concat(idade, " anos e eu sou estudante? ").concat(souestudante, ".")); //
//crie uma função que pede nome, idade, e se tem carteira de motorista 
//readline-sync
var nome1 = "isadora";
var idade1 = 16;
var temcarteira = false;
console.log("meu nome \u00E9 ".concat(nome, ", tenho ").concat(idade, " anos e eu tenho carteira de motorista? ").concat(temcarteira));
function boasvindas(nome) {
    console.log("seja muito bem vindo ".concat(nome));
}
boasvindas(89);
//variaveis
//string
var nome2 = "isadora";
//number
var idade2 = 16;
//boolean
var gameover = true;
//array
var array = [1, 2, 3, 4];
//function
function soma(num1, num2) {
    return num1 + num2;
}
function frase1(nome) {
    return "ol\u00E1 ".concat(nome, ", tudo bem?");
}
function chamaalgo(nome) {
    console.log("e ai ".concat(nome, "!"));
}
function frase(nome) {
    console.log("hello ".concat(nome, " world"));
}
frase("maria");
function desconto(preco, desconto) {
    if (desconto === void 0) { desconto = 0.05; }
    return preco * (1 - desconto);
}
console.log(desconto(5));
function nome3(nome3, idade) {
    if (nome3 === void 0) { nome3 = "joao"; }
    if (idade === void 0) { idade = 40; }
    console.log("ol\u00E1 ".concat(nome3, ", voce tem ").concat(idade, " anos."));
}
console.log("ol\u00E1 ".concat(nome, ", voce tem ").concat(idade, " anos."));
//estou criando um "molde" para objetos do tipo cachorro 
//classe
var cachorro = /** @class */ (function () {
    function cachorro(dognome, dogpeso, dogpelagem) {
        this.nome = dognome;
        this.peso = dogpeso;
        this.pelagem = dogpelagem;
        this.raca = "golden";
    }
    cachorro.prototype.latir = function () {
        console.log("au au");
    };
    cachorro.prototype.correr = function () {
        console.log("o cachorro esta correndo");
    };
    cachorro.prototype.comer = function () {
        console.log("o cachorro esta comendo");
    };
    return cachorro;
}());
//instanciando meus objetos
var meucachorro = new cachorro('nala', 13, 'amarela');
var meuoutrocachorro = new cachorro('margot', 18, 'preta');
//assim chamamos um atributo
console.log(meucachorro.nome); //nala
//assim chamamos o metodo 
meucachorro.latir();
meuoutrocachorro.latir();
//ciem uma classe coruja
//3 atraibutos
//3 metodos 
//não esqueça do contructor 
//depois de criarem a classe, instancie dois objetos a coruja e chame os metodos 
var coruja = /** @class */ (function () {
    //constructor
    function coruja(corujanome, corujapeso, corujapelagem) {
        this.nome = corujanome;
        this.peso = corujapeso;
        this.pelagem = corujapelagem;
    }
    //metodos
    coruja.prototype.vigiar = function () {
        console.log("a ".concat(this.nome, " esta vijiando"));
    };
    coruja.prototype.comer = function () {
        console.log("a ".concat(this.nome, " esta comendo"));
    };
    coruja.prototype.dormir = function () {
        console.log("a ".concat(this.nome, " esta dormindo"));
    };
    return coruja;
}());
//instancie os objetivos 
var minhacoruja = new coruja('megan', 330, 'marron');
var minhaoutracoruja = new coruja('meive', 573, 'preta');
//chamando dois metodos 
minhacoruja.vigiar();
minhaoutracoruja.vigiar();
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome, tipo, forca) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
        this.saude = 100;
    }
    Guerreiro.prototype.atacarMonstro = function (monstro) {
        console.log("".concat(this.nome, " ataca ").concat(monstro.nome, "!"));
        monstro.receberDano(this.forca);
    };
    Guerreiro.prototype.receberDano = function (dano) {
        this.saude -= dano;
        console.log("".concat(this.nome, " recebe ").concat(dano, " de dano."));
        if (this.saude <= 0) {
            console.log("".concat(this.nome, " foi derrotado!"));
        }
    };
    Guerreiro.prototype.info = function () {
        console.log("O guerreiro ".concat(this.nome, " do tipo ").concat(this.tipo, " tem ").concat(this.saude, "."));
    };
    return Guerreiro;
}());
var Monstro = /** @class */ (function () {
    function Monstro(nome) {
        this.nome = nome;
        this.forca = 50;
        this.saude = 10;
    }
    Monstro.prototype.atacarGuerreiro = function (guerreiro) {
        console.log("".concat(this.nome, " ataca ").concat(guerreiro.nome, "!"));
        guerreiro.receberDano(this.forca);
    };
    Monstro.prototype.receberDano = function (dano) {
        this.saude -= dano;
        console.log("".concat(this.nome, " recebe ").concat(dano, " de dano."));
        if (this.saude <= 0) {
            console.log("".concat(this.nome, " foi derrotado!"));
        }
    };
    Monstro.prototype.info = function () {
        console.log("O monstro ".concat(this.nome, " tem ").concat(this.saude, " de saude."));
    };
    return Monstro;
}());
var meuGuerreiro = new Guerreiro("Conan", "Bárbaro", 100);
var monstro = new Monstro("Dragão");
meuGuerreiro.atacarMonstro(monstro);
monstro.info();
var Carro = /** @class */ (function () {
    function Carro(velocidade) {
        this.velocidade = velocidade;
    }
    //Mostrar o valor de velocidade
    //getter - pegar / obter / mostrar
    Carro.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    //Setar o valor de velocidade
    //setter  - setar  /  definir  / modificar
    Carro.prototype.setVelocidade = function (novaVelocidade) {
        if (this.velocidade > 0) {
            return this.velocidade = novaVelocidade;
        }
        else {
            return "A velocidade não pode ser 0 ou negativa.";
        }
    };
    return Carro;
}());
var carro = new Carro(100);
console.log(carro.getVelocidade()); //100
carro.setVelocidade(150);
console.log(carro.getVelocidade()); //150
var Alimento = /** @class */ (function () {
    function Alimento(price, name, weight) {
        this.price = price;
        this.name = name;
        this.weight = weight;
    }
    Alimento.prototype.startEngine = function () {
        console.log("The ".concat(this.name, " is am loja"));
    };
    Alimento.prototype.comprarProduto = function (quantity) {
        console.log("you purchased this product ".concat(this.name) + quantity);
    };
    Alimento.prototype.eat = function (quantity) {
        console.log("The animal has eating " + quantity);
    };
    Alimento.prototype.CalcularValorTotal = function () {
        return this.price * 0.4;
    };
    return Alimento;
}());
exports.Alimento = Alimento;
var Eletronico = /** @class */ (function () {
    function Eletronico(price, name, weight) {
        this.price = price;
        this.name = name;
        this.weight = weight;
    }
    Eletronico.prototype.startEngine = function () {
        console.log("The ".concat(this.name, " is am loja"));
    };
    Eletronico.prototype.ligarEletronico = function () {
        console.log("connect electronic ".concat(this.name));
    };
    Eletronico.prototype.comprarProduto = function (quantity) {
        console.log("you purchased this product ".concat(this.name) + quantity);
    };
    Eletronico.prototype.CalcularValorTotal = function () {
        return this.price * 0.9;
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
var Eletrodomestico = /** @class */ (function () {
    function Eletrodomestico(price, name, weight) {
        this.price = price;
        this.name = name;
        this.weight = weight;
    }
    Eletrodomestico.prototype.startEngine = function () {
        console.log("The ".concat(this.name, " is am loja"));
    };
    Eletrodomestico.prototype.usarEletrodimestico = function () {
        console.log("Open is ".concat(this.name));
    };
    Eletrodomestico.prototype.comprarProduto = function (quantity) {
        console.log("you purchased this product ".concat(this.name) + quantity);
    };
    Eletrodomestico.prototype.CalcularValorTotal = function () {
        return this.price * 0.7;
    };
    return Eletrodomestico;
}());
exports.Eletrodomestico = Eletrodomestico;
var Limpeza = /** @class */ (function () {
    function Limpeza(price, name, weight) {
        this.price = price;
        this.name = name;
        this.weight = weight;
    }
    Limpeza.prototype.startEngine = function () {
        console.log("The ".concat(this.name, " is am loja"));
    };
    Limpeza.prototype.ligarEletronico = function () {
        console.log("connect electronic ".concat(this.name));
    };
    Limpeza.prototype.comprarProduto = function (quantity) {
        console.log("you purchased this product ".concat(this.name) + quantity);
    };
    Limpeza.prototype.CalcularValorTotal = function () {
        return this.price * 0.5;
    };
    return Limpeza;
}());
exports.Limpeza = Limpeza;
var Ferramentas = /** @class */ (function () {
    function Ferramentas(price, name, weight) {
        this.price = price;
        this.name = name;
        this.weight = weight;
    }
    Ferramentas.prototype.startEngine = function () {
        console.log("The ".concat(this.name, " is am loja"));
    };
    Ferramentas.prototype.ligarEletronico = function () {
        console.log("connect electronic ".concat(this.name));
    };
    Ferramentas.prototype.comprarProduto = function (quantity) {
        console.log("you purchased this product ".concat(this.name) + quantity);
    };
    Ferramentas.prototype.CalcularValorTotal = function () {
        return this.price * 0.5;
    };
    return Ferramentas;
}());
exports.Ferramentas = Ferramentas;
// Instanciando o sistema de compras e iniciando o programa
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
        console.log("Produto ".concat(produto.name, " adicionado ao carrinho."));
    };
    CarrinhoDeCompras.prototype.verCarrinho = function () {
        console.log("Carrinho de Compras:");
        this.produtos.forEach(function (produto) {
            console.log("".concat(produto.name, ": ").concat(produto.CalcularValorTotal()));
        });
    };
    return CarrinhoDeCompras;
}());
function person() {
    var carrinho = new CarrinhoDeCompras();
    console.log("Bem-vindo ao sistema de compras!");
    while (true) {
        console.log("\nMenu Principal:");
        console.log("1. Comprar Produto");
        console.log("2. Ver Carrinho");
        console.log("3. Pagar");
        console.log("4. Sair");
        var escolha = parseInt(prompt("Escolha uma opção: ") || '0');
        switch (escolha) {
            case 1:
                // Simulação de compra de produtos
                var eletrodomestico = new Eletrodomestico(50.0, "Sofá", 2);
                carrinho.adicionarProduto(eletrodomestico);
                var eletronico = new Eletronico(1500.0, "Smartphone", 2);
                carrinho.adicionarProduto(eletronico);
                var alimento = new Alimento(50.0, "Chocolate", 2);
                carrinho.adicionarProduto(alimento);
                var limpeza = new Limpeza(10.0, "Sabão em pó", 2);
                carrinho.adicionarProduto(limpeza);
                var ferramentas = new Ferramentas(100.0, "Machado", 22);
                carrinho.adicionarProduto(ferramentas);
                break;
            case 2:
                carrinho.verCarrinho();
                break;
            case 3:
                this.Pagar();
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
var pix = /** @class */ (function () {
    function pix(pix, dinheiro, cartao) {
        this.pix = pix;
        this.dinheiro = dinheiro;
        this.cartao = cartao;
    }
    pix.prototype.startEngine = function () {
        console.log("Escolha o m\u00E9todo de pagamento");
    };
    pix.prototype.pagar = function () {
        console.log("voc\u00EA pagou o produto com ".concat(this.pix, " "));
    };
    return pix;
}());
exports.pix = pix;
var Dinheiro = /** @class */ (function () {
    function Dinheiro(pix, dinheiro, cartao) {
        this.pix = pix;
        this.dinheiro = dinheiro;
        this.cartao = cartao;
    }
    Dinheiro.prototype.startEngine = function () {
        console.log("Escolha o m\u00E9todo de pagamento");
    };
    Dinheiro.prototype.pagar = function () {
        console.log("voc\u00EA pagou o produto com ".concat(this.dinheiro, " "));
    };
    return Dinheiro;
}());
exports.Dinheiro = Dinheiro;
var Cartao = /** @class */ (function () {
    function Cartao(pix, dinheiro, cartao) {
        this.pix = pix;
        this.dinheiro = dinheiro;
        this.cartao = cartao;
    }
    Cartao.prototype.startEngine = function () {
        console.log("Escolha o m\u00E9todo de pagamento");
    };
    Cartao.prototype.pagar = function () {
        console.log("voc\u00EA pagou o produto com ".concat(this.cartao, " "));
    };
    return Cartao;
}());
exports.Cartao = Cartao;
