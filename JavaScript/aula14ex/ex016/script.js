function calcular() {
    var primeiro = document.getElementById('primeiro').value
    var ultimo = document.getElementById('ultimo').value
    var intervalo = document.getElementById('intervalo').value
    var pResult = document.getElementById('resultado')
    var pTotal = document.getElementById('total')
    var total = 2
    var resultado = primeiro
    var i = Number(primeiro)

    //======================================================== 
    //======================================================== 

    if (primeiro == '' || ultimo == '' || intervalo == '') {
        alert('Preencha todos os campos')
    } else { 
        if (Number(primeiro) < Number(ultimo)) {
            for (i += Number(intervalo);i < Number(ultimo); i += Number(intervalo)) {
                resultado += ` -> ${i}`
                total++
            }
            
        } else if (Number(primeiro) > Number(ultimo)) {
            for (i -= Number(intervalo);i > Number(ultimo); i -= Number(intervalo)) {
                resultado += ` -> ${i}`
                total++
            }
        }
        pResult.innerHTML = `<strong>Resultado:</strong> ` + (resultado += ` -> <strong>${Number(ultimo)}</strong>`)
        pTotal.innerHTML = `<strong>O Total de números foi: ${total++}</strong>`
    }
}
