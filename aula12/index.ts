
 for (let i:string = `a`; i !== `abababa`; i == `ba`) {
    console.log(i)
 }

//definindo um objeto representando os livros de ficção com seus livros
let ficcao = {
    "fundação": "isaac asimow",
    "duna": "franf herbert"
};

//iterando sobre os livros de ficção e exibindo os autores
for (let livro in ficcao) {
    console.log(`autor do livro ${livro}: ${ficcao[livro]}`);
}

let meuobjeto:Object = {
    nome1: `valor1`,
    nome2: `valor2`,
    nome3: `valor3`,
    nome4: `valor4`,
    nome5: `valor5`,
}

console.log(Object.keys(meuobjeto[0]))

//para cada elemento em meuobjeto
for (let elemento in meuobjeto) {
    console.log(`o elemento ${elemento} tem valor ${meuobjeto[elemento]}`)
}

//arrray representando os titulos dos livros na prateleira
let meuslivros = ["fundação", "duna", "orgulho e preconceito"];

//iterando sobre os titulos dos livros e exibindo-os
for (let livro of meuslivros) {
    console.log(livro);
}

let listadefrutas = [`pera`, `maçã`, `maracuja`]

for (let fruta of listadefrutas) {
    console.log(fruta)
}

let tolkienlivros = [`senhor dso aneis`, `o mobbit`, `contso inacabados`];
tolkienlivros.forEach(livro => {
    console.log(`eu ja li ${livro}`);
})

let tolkienlivros1 =  [`senhor dso aneis`, `o mobbit`, `contso inacabados`];
tolkienlivros1.forEach(function(livro){
    console.log(`eu ja li ${livro}`)
});

const arr = [`carro`, `moto`, `bicicleta`];

arr.forEach((Element, index, array) => {
    console.log(`elemento ${Element} no indiece ${index}`);
    console.log(`array original:`, array);
});