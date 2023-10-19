var sexo = document.getElementById('formPropostaVida:sexoSegurado')
var cpf = document.getElementsByName('formPropostaVida:CPFSegurado')[0]
var peso = document.getElementById('formPropostaVida:peso')
var altura = document.getElementById('formPropostaVida:altura')
var cep = document.getElementById('formPropostaVida:CEP')
var foraCep = document.getElementById('formPropostaVida:logradouroLabel')
var numero = document.getElementById('formPropostaVida:numero')
var rua = document.getElementById('formPropostaVida:logradouro')
var bairro = document.getElementById('formPropostaVida:bairro')
var ddd = document.getElementById('formPropostaVida:DDDCelular')
var celular = document.getElementById('formPropostaVida:telefoneCelular')
var email = document.getElementById('formPropostaVida:email')
var selects = document.getElementsByClassName('ui-selectonemenu-label ui-inputfield ui-corner-all')
var opcoes = document.getElementsByClassName('ui-selectonemenu-item ui-selectonemenu-list-item ui-corner-all')
var uf = selects[0]
var rj = opcoes[19]
var checks = document.getElementsByClassName('ui-chkbox-box ui-widget ui-corner-all ui-state-default')
var sms = document.getElementsByClassName('ui-chkbox-box ui-widget ui-corner-all ui-state-default')[1]
var declaro = document.getElementsByClassName('ui-chkbox-box ui-widget ui-corner-all ui-state-default')[4]
var benefSim = document.getElementsByClassName('ui-radiobutton-box ui-widget ui-corner-all ui-state-default')[0]
var assinar = document.getElementById('formPropostaVida:concluirComAssinaturaDigital')
var confirmar = document.getElementById('formPropostaVida:btnSim')


cpf.value = window.prompt('Cole o CPF')
if (sexo.innerText == 'Masculino') {
    peso.value = '78'
    altura.value = '1.70'
} else {
    peso.value = '64'
    altura.value = '1.60'
}
cep.value = '26215-220'
rua.value = 'RUA DOM WALMOR'
numero.value = 192
bairro.value = 'CENTRO'
email.value = 'sifazseguros@gmail.com'
ddd.value = 21
celular.value = '96719-6521'
uf.click()
rj.click()
benefSim.click()
declaro.click()

function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function realizarAcoesComPausas() {
    await esperar(1500)
    selects[1].click() //municipio
    opcoes[219].click() //nova iguaçu
    sms.click()
    selects[2].click() //forma de pagamento
    opcoes[29].click() //opção de boleto
    await esperar(5000)
    selects[3].click() //dia de vencimento
    opcoes[354].click() //dia 25
    assinar.click()
}
realizarAcoesComPausas()
  

