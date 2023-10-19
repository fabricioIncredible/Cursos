var idade = 65
console.log(`Sua idade é ${idade}`)
if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18 || idade > 64) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigratório')
} 