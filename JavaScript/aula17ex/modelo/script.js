    //select
    let sel = document.getElementById('add')

    //input number
    let txtnum = document.getElementById('num')

    //array que vai receber os números adicionados
    let todos = []

    //parágrafos de resultado
    let p = [document.getElementById('1'), document.getElementById('2'),document.getElementById('3'), document.getElementById('4'), document.getElementById('5')]

function adicionar() {
    numero = Number(txtnum.value)
    if (numero == 0) {
        window.alert('Digite um número!')
    } else {
        
        if (todos.indexOf(numero) == -1) {
            for (let i in p) {
                p[i].innerText = ''
            }

            let item = document.createElement('option')
            item.text = `O valor ${numero} foi adicionado.`
            sel.appendChild(item)
            
            todos.push(numero)
            txtnum.value = ''
            txtnum.focus()
            sel.size = todos.length+1
            
        } else {
            window.alert(`O número ${numero} já foi adicionado!`)
        }
    }
}

function finalizar() {
    if (todos.length == 0) {
        window.alert('Tabela vazia!')    
    } else if (todos.length == 1) {
        window.alert('Adicione mais um número para finalizar!')
    } else {
        todos.sort()
        var somaTodos = 0
        for (let i in todos)  {
            somaTodos += todos[i]
        }
        media = somaTodos / todos.length

        p[0].innerHTML = `Ao todo, temos <strong>${todos.length}</strong> números cadastrados.` 
        p[1].innerHTML = `O maior valor informado foi <strong>${todos[todos.length-1]}</strong>.`
        p[2].innerHTML = `O menor valor informado foi <strong>${todos[0]}</strong>.`
        p[3].innerHTML = `Somando todos os valores, temos <strong>${somaTodos}</strong>.`
        p[4].innerHTML = `A média dos valores é <strong>${media}</strong>.`
    }
}
