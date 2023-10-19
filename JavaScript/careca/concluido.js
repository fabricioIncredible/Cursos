function vareis() {
    var cliente = {
        nome: document.getElementById('nome').value,
        sexo: document.getElementById('sexo').value,
        datanasc: document.getElementById('datanasc').value,
        cpf: document.getElementById('CPF').value,
        idade: Number(document.getElementById('idade').value),
        seguro: document.getElementById('seguro').value
    }
    window.location.href = 'https://corretor.sulamericaseguros.com.br/area-logada/#/'

    setTimeout(function() {abrir()}, 10000)
}

function preencher() {
    document.getElementById('nome').value = 'Fabrício Matheus Ferreira Brandão'
    document.getElementById('datanasc').value = '29/07/2003'
    document.getElementById('CPF').value = '172.390.097-42'
    document.getElementById('idade').value = 20
    document.getElementById('seguro').checked = true
    
}

function abrir() {
    var vida = document.getElementsByClassName('corretor-trigger sas-card-content cotadores')[0]
    if (vida) {
        vida.click()
    } else {
        window.alert('elemento não encontrado')
    }
}