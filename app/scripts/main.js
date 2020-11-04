const promise = () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", "http://localhost:3000/generate-groups");
        xhr.send();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            resolve(JSON.parse(xhr.response))
            }
        }
    })
}

promise()
    .then((array_conjuntos) => {

        console.log(array_conjuntos)

        var id = 1

        for (conjunto of array_conjuntos) {
            const main_div_conjunto = document.querySelector('#conjuntos')
    
            let div_conjunto = document.createElement('div')
                div_conjunto.setAttribute('id', `conjunto-${id}`)
                div_conjunto.setAttribute('class', 'conjunto')

            let div_conjunto_img = document.createElement('div')
                div_conjunto_img.setAttribute('class', 'conjunto-img')
                div_conjunto_img.style.backgroundColor = conjunto.colors[0]

                let img = document.createElement('img')

                let link_opcoes = document.createElement('a')
                    link_opcoes.setAttribute('href', 'javascript:void(0)')

                    let img_opcoes = document.createElement('img')
                        img_opcoes.setAttribute('src', '../images/seta-opcoes.svg')
                        img_opcoes.setAttribute('class', 'opt')

            link_opcoes.appendChild(img_opcoes)
            div_conjunto_img.appendChild(img)
            div_conjunto_img.appendChild(link_opcoes)
            div_conjunto.appendChild(div_conjunto_img)


            // CORPO
            let div_conjunto_corpo = document.createElement('div')
                div_conjunto_corpo.setAttribute('class', 'conjunto-corpo')
                div_conjunto_corpo.style.backgroundColor = conjunto.colors[1]

                // CORPO-HEADER
                let div_conjunto_corpo_header = document.createElement('div')
                    div_conjunto_corpo_header.setAttribute('class', 'conjunto-corpo-header')

                    let div_conjunto_corpo_header_titulo = document.createElement('div')
                        div_conjunto_corpo_header_titulo.setAttribute('class', 'titulo')

                        let text_div_conjunto_corpo_header_titulo = document.createTextNode(`${conjunto.title}`)
                        div_conjunto_corpo_header_titulo.appendChild(text_div_conjunto_corpo_header_titulo)

                    let div_conjunto_corpo_header_subtitulo = document.createElement('div')
                        div_conjunto_corpo_header_subtitulo.setAttribute('class', 'subtitulo')

                        let text_div_conjunto_corpo_header_subtitulo = document.createTextNode(`${conjunto.groups.all_groups} grupos`)
                        div_conjunto_corpo_header_subtitulo.appendChild(text_div_conjunto_corpo_header_subtitulo)

                div_conjunto_corpo_header.appendChild(div_conjunto_corpo_header_titulo)
                div_conjunto_corpo_header.appendChild(div_conjunto_corpo_header_subtitulo)

                // CORPO-RODAPE
                let div_conjunto_corpo_rodape = document.createElement('div')
                    div_conjunto_corpo_rodape.setAttribute('class', 'conjunto-corpo-rodape')

                    let div_conjunto_corpo_rodape_prof_mat = document.createElement('div')
                        div_conjunto_corpo_rodape_prof_mat.setAttribute('class', 'prof-mat')

                        let text_div_conjunto_corpo_rodape_prof_mat = document.createTextNode(`${conjunto.author.name} - ${conjunto.author.discipline}`)
                        div_conjunto_corpo_rodape_prof_mat.appendChild(text_div_conjunto_corpo_rodape_prof_mat)

                    let div_conjunto_corpo_rodape_turno_sala = document.createElement('div')
                        div_conjunto_corpo_rodape_turno_sala.setAttribute('class', 'turno-sala')

                        let text_div_conjunto_corpo_rodape_turno_sala = document.createTextNode(`${conjunto.list.shift} - ${conjunto.list.title}`)
                        div_conjunto_corpo_rodape_turno_sala.appendChild(text_div_conjunto_corpo_rodape_turno_sala)

                div_conjunto_corpo_rodape.appendChild(div_conjunto_corpo_rodape_prof_mat)
                div_conjunto_corpo_rodape.appendChild(div_conjunto_corpo_rodape_turno_sala)
                    
            div_conjunto_corpo.appendChild(div_conjunto_corpo_header)
            div_conjunto_corpo.appendChild(div_conjunto_corpo_rodape)

            div_conjunto.appendChild(div_conjunto_corpo)

            main_div_conjunto.appendChild(div_conjunto)

            id++
        }
        
    })
    .catch()