//faça um contador que va de 10 até zero usando for. a cada ´segundo´  ou  melhor, a cada iteração, o código deve verificar se o ´i´ é par ou impar.
//se for par, imprime no console a palavra ´tic´.
//se for impar, imprime no console a palavra ´tac´.
//quando chegar a zero, imprime no console a palavra ´´booooooom!´
for (var i = 10; i > 0; i--) {
    if (i % 2 === 0) {
        console.log("tic");
    }
    else {
        console.log("tac");
    }
}
console.log("boooom!");
for (var i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("boooom!");
    }
    else if (i % 2 === 0) {
        console.log("tic");
    }
    else {
        console.log("tac");
    }
}
for (var i = "a"; i !== "abababa"; i == "ba") {
    console.log(i);
}
//definindo um objeto representando os livros de ficção com seus livros
var ficcao = {
    "fundação": "isaac asimow",
    "duna": "franf herbert"
};
//iterando sobre os livros de ficção e exibindo os autores
for (var livro in ficcao) {
    console.log("autor do livro ".concat(livro, ": ").concat(ficcao[livro]));
}
var meuobjeto = {
    nome1: "valor1",
    nome2: "valor2",
    nome3: "valor3",
    nome4: "valor4",
    nome5: "valor5",
};
console.log(Object.keys(meuobjeto[0]));
//para cada elemento em meuobjeto
for (var elemento in meuobjeto) {
    console.log("o elemento ".concat(elemento, " tem valor ").concat(meuobjeto[elemento]));
}
//arrray representando os titulos dos livros na prateleira
var meuslivros = ["fundação", "duna", "orgulho e preconceito"];
//iterando sobre os titulos dos livros e exibindo-os
for (var _i = 0, meuslivros_1 = meuslivros; _i < meuslivros_1.length; _i++) {
    var livro = meuslivros_1[_i];
    console.log(livro);
}
var listadefrutas = ["pera", "ma\u00E7\u00E3", "maracuja"];
for (var _a = 0, listadefrutas_1 = listadefrutas; _a < listadefrutas_1.length; _a++) {
    var fruta = listadefrutas_1[_a];
    console.log(fruta);
}
