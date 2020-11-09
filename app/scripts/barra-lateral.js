function abreNav() {
    document.querySelector('aside').style.width = "350px";
    document.querySelector('#tela-transparente').style.width = "100vw"
    document.querySelector('#tela-transparente').style.height = "100vh"
    document.querySelector('#tela-transparente').setAttribute('onclick', 'fechaNav()')
}

function fechaNav() {
    document.querySelector('aside').style.width = "0"
    document.querySelector('#tela-transparente').style.width = "0"
    document.querySelector('#tela-transparente').style.height = "0"
}