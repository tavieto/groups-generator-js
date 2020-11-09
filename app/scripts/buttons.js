function abreNovosGrupos() {
    document.querySelector('#conteiner').style.visibility = 'visible';
    document.querySelector('#conteiner').style.opacity = '1';
    document.querySelector('#tela-transparente').style.width = "100vw"
    document.querySelector('#tela-transparente').style.height = "100vh"
    document.querySelector('#tela-transparente').style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    document.querySelector('#tela-transparente').setAttribute('onclick', 'fechaNovosGrupos()')
}

function fechaNovosGrupos() {
    document.querySelector('#conteiner').style.visibility = 'hidden';
    document.querySelector('#conteiner').style.opacity = '0';
    document.querySelector('#tela-transparente').style.width = "0"
    document.querySelector('#tela-transparente').style.height = "0"
    document.querySelector('#tela-transparente').style.backgroundColor = "rgba(0, 0, 0, 0)"
}