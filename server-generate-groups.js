const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/generate-groups', (req, res) => {
    res.send(JSON.stringify(getValue()))
})

app.listen(3000)

function getValue() {
    let all_groups = 6
    let all_students = 40

    let resultado = {
        total_alunos: all_students,
        total_grupos: all_groups,
        grupos: []
    }

    let students_per_group = separetedPerGroup(40, 6)

    let random_numbers = embaralhar(all_students)

    return division(all_groups, students_per_group, random_numbers, resultado)
}

function separetedPerGroup(all_students, all_groups) {

    let students_in_each_group = []
    const excess = all_students % all_groups

    if (excess == 0) {
        const students_this_group = all_students / all_groups

        let count = 0

        while (count < all_groups) {
            students_in_each_group.push(students_this_group)
            count++
        }
        
    } else {
        const students_this_group = (all_students - excess) / all_groups

        let count = 0
        while (count <= all_groups) {
            students_in_each_group.push(students_this_group)
            count++
        }

        let add_one_in_a_group = 0
        let how_many_was_add = 0

        
        while (add_one_in_a_group < all_groups) {
            if(how_many_was_add < excess) {
                students_in_each_group[add_one_in_a_group] += 1
                how_many_was_add++
            }
            add_one_in_a_group++
        }
    }

    return students_in_each_group
}

function embaralhar(all_students) {

    let array = [
        "Alana Maqueise Silva Cruz",
        "Allexia Santos Macedo",
        "Ananda Gabryella Oliveira Araujo",
        "Andre Gabriel Santana Mendonca Santos",
        "Anna Karoline Alcantara Pinheiro",
        "Arthur De Sousa Guimaraes",
        "Daniel Batista Alves",
        "Davi Nery Souza Camboim",
        "Debora Pena Silva",
        "Eduarda Moreira Oliveira Santos",
        "Emanoel Victor Martins Pinto",
        "Giovanna Jaminy De Freitas Gomes",
        "Helen Santos Sousa",
        "Iago Oliveira Alves",
        "Isabella Alves Dos Santos",
        "Janson Ferreira Limeira Fernandes",
        "Julia Aguiar Dos Anjos",
        "Laura Da Silva Bomfim",
        "Lavinia Macedo Torquato",
        "Leticia Santos Sant'Anna",
        "Luanna Vitoria Neres Silva",
        "Lucas Silva Santos",
        "Luiz Felipe Goncalves Carvalhal",
        "Marcela Lima Da Silva",
        "Marcos Haryel Miranda Barreto Santos",
        "Marcos Paulo Teixeira Cordeiro",
        "Maria Julia Rodrigues Barreto Souza",
        "Mira Almeida De Oliveira",
        "Nathalia Cruz Dos Santos",
        "Nicolas Albano Santos",
        "Otavio Gabriel Silva Moreira",
        "Pedro Affonso Silva Marques",
        "Rayllan Barbosa Dos Santos",
        "Samara Silva De Melo",
        "Samuel Ribeiro Chagas",
        "Thais Vitoria Silva Neves",
        "Victor Oliveira Lima",
        "Victoria Quelen Ramos Dos Santos",
        "Vitor De Jesus Santos",
        "Walter Dos Santos Silva Neto"
    ]
    /*let count = 1

    while(count <= all_students) {
        array.push(count)
        count++
    }*/

    var indice_atual = array.length, valor_temporario, indice_aleatorio;
 
    while (0 !== indice_atual) {
 
        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;
 
        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
    }
 
    return array;
}

function division(allGroups, studentsPerGroup, randomNumbers, resultado) {
    var wasPresented = 0
    var counterGroups = 0
   
    while(counterGroups < allGroups) {

        let objeto_de_grupo = {
            id: counterGroups,
            num_alunos: studentsPerGroup[counterGroups],
            num_sorteado: []
        }     
        var counterElement = 0
        while(counterElement < studentsPerGroup[counterGroups]) {        
            objeto_de_grupo.num_sorteado.push(randomNumbers[wasPresented])
            
            counterElement++
            wasPresented++
        }
        resultado.grupos.push(objeto_de_grupo)

        counterGroups++
    }

    return resultado
}
