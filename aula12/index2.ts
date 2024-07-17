//faça um contador que va de 10 até zero usando for. a cada ´segundo´  ou  melhor, a cada iteração, o código deve verificar se o ´i´ é par ou impar.
//se for par, imprime no console a palavra ´tic´.
//se for impar, imprime no console a palavra ´tac´.
//quando chegar a zero, imprime no console a palavra ´´booooooom!´

for (let i:number = 10; i > 0; i --) {
    if (i % 2 === 0) {
        console.log(`tic`)
    }
    else{
        console.log(`tac`)
    }
}

console.log(`boooom!`)

for (let i:number = 10; i >= 0; i--) {
    if (i === 0) {
        console.log(`boooom!`)
    } else if (i % 2 === 0) {
        console.log(`tic`)
    } else {
        console.log(`tac`)
    }
}