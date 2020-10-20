function barraLateral() {
    let tela_transparente = document.querySelector('#tela-transparente')
    tela_transparente.setAttribute('visibility', 'visible')
    tela_transparente.setAttribute('z-index', '10')

    let barra_lateral = document.querySelector('aside')
    barra_lateral.setAttribute('visibility', 'visible')
    barra_lateral.setAttribute('z-index', '9')

    console.log(tela_transparente)
    console.log(barra_lateral)
}