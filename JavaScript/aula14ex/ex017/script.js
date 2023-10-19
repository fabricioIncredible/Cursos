function gerar() {
    var numero = document.getElementById('num')
    if (numero.value.length == 0) {
        window.alert('Digite um número')
    } else {
        numero = Number(numero.value)
        tabuada = ''
        document.getElementById('2').innerHTML = ''
        for (let i = 1;i <=10;i++) {
            var mult = numero * i
            let item = document.createElement('option')
            item.innerHTML = `<p>${numero} x ${i} = <strong>${mult}</strong></p>`
            document.getElementById('2').appendChild(item)
        }
    }
}