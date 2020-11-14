function abreNovosGrupos() {
    document.querySelector('#criar-conjunto').style.visibility = 'visible';
    document.querySelector('#criar-conjunto').style.opacity = '1';
    document.querySelector('#tela-transparente').style.width = "100vw"
    document.querySelector('#tela-transparente').style.height = "100vh"
    document.querySelector('#tela-transparente').style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    document.querySelector('#tela-transparente').setAttribute('onclick', 'fechaNovosGrupos()')
}

function fechaNovosGrupos() {
    document.querySelector('#criar-conjunto').style.visibility = 'hidden';
    document.querySelector('#criar-conjunto').style.opacity = '0';
    document.querySelector('#tela-transparente').style.width = "0"
    document.querySelector('#tela-transparente').style.height = "0"
    document.querySelector('#tela-transparente').style.backgroundColor = "rgba(0, 0, 0, 0)"
}

function abreAddList() {
    document.querySelector('#add-list').style.visibility = 'visible';
    document.querySelector('#add-list').style.opacity = '1';
    document.querySelector('#tela-transparente').style.width = "100vw"
    document.querySelector('#tela-transparente').style.height = "100vh"
    document.querySelector('#tela-transparente').style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    document.querySelector('#tela-transparente').setAttribute('onclick', 'fechaAddList()')
}

function fechaAddList() {
    document.querySelector('#add-list').style.visibility = 'hidden';
    document.querySelector('#add-list').style.opacity = '0';
    document.querySelector('#tela-transparente').style.width = "0"
    document.querySelector('#tela-transparente').style.height = "0"
    document.querySelector('#tela-transparente').style.backgroundColor = "rgba(0, 0, 0, 0)"
}