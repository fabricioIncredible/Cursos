let num = [5, 8, 2, 9, 3]
num.push(6)
num.sort()
console.log(`Nosso vetor tem o tamanho de ${num.length} posições.`)

for (var valor = 0;valor < 10;valor ++) {
    if (num.indexOf(valor) == -1 ){
        console.log(`O valor ${valor} não foi encontrado.`)
    } else {
        console.log(`O valor ${valor} está na posição ${num.indexOf(valor)}.`)
    } 
}