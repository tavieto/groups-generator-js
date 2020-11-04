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

    //return resultado

    return joints = [
        {
            create_date: "2020-10-07",
            create_time: "17:52",
            colors: ["#C8E6C9", "#A5D6A7"],
            title: "Governos populistas",

            author: {
                name: "Rafael Monteiro",
                discipline: "História"
            },

            list: {
                title: "Sala 3",
                shift: "Matutino",
                all_students: 40,
                names: [
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
            },

            groups: {
                all_groups: 6,
                list: [
                    {
                        id: 0,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Laura Da Silva Bomfim",
                            "Debora Pena Silva",
                            "Marcela Lima Da Silva",
                            "Victoria Quelen Ramos Dos Santos",
                            "Daniel Batista Alves",
                            "Samuel Ribeiro Chagas",
                            "Samara Silva De Melo"
                        ]
                    },
                    {
                        id: 1,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Emanoel Victor Martins Pinto",
                            "Thais Vitoria Silva Neves",
                            "Iago Oliveira Alves",
                            "Mira Almeida De Oliveira",
                            "Helen Santos Sousa",
                            "Walter Dos Santos Silva Neto",
                            "Davi Nery Souza Camboim"
                        ]
                    },
                    {
                        id: 2,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Giovanna Jaminy De Freitas Gomes",
                            "Lavinia Macedo Torquato",
                            "Ananda Gabryella Oliveira Araujo",
                            "Marcos Paulo Teixeira Cordeiro",
                            "Arthur De Sousa Guimaraes",
                            "Alana Maqueise Silva Cruz",
                            "Anna Karoline Alcantara Pinheiro"
                        ]
                    },
                    {
                        id: 3,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Nicolas Albano Santos",
                            "Maria Julia Rodrigues Barreto Souza",
                            "Victor Oliveira Lima",
                            "Luiz Felipe Goncalves Carvalhal",
                            "Vitor De Jesus Santos",
                            "Lucas Silva Santos",
                            "Marcos Haryel Miranda Barreto Santos"
                        ]
                    },
                    {
                        id: 4,
                        title: "",
                        num_alunos: 6,
                        random_list: [
                            "Otavio Gabriel Silva Moreira",
                            "Andre Gabriel Santana Mendonca Santos",
                            "Luanna Vitoria Neres Silva",
                            "Eduarda Moreira Oliveira Santos",
                            "Pedro Affonso Silva Marques",
                            "Nathalia Cruz Dos Santos"
                        ]
                    },
                    {
                        id: 5,
                        title: "",
                        num_alunos: 6,
                        random_list: [
                            "Rayllan Barbosa Dos Santos",
                            "Allexia Santos Macedo",
                            "Janson Ferreira Limeira Fernandes",
                            "Isabella Alves Dos Santos",
                            "Julia Aguiar Dos Anjos",
                            "Leticia Santos Sant'Anna"
                        ]
                    }
                ]
            }
        },
        {
            create_date: "2020-10-07",
            create_time: "17:52",
            colors: ["#D7CCC8", "#A1887F"],
            title: "Reino monera",

            author: {
                name: "Ângela Silva",
                discipline: "Biologia"
            },

            list: {
                title: "Sala 8",
                shift: "Matutino",
                all_students: 40,
                names: [
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
            },
   
            groups: {
                all_groups: 8,
                list: [
                    {
                        id: 0,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Laura Da Silva Bomfim",
                            "Debora Pena Silva",
                            "Marcela Lima Da Silva",
                            "Victoria Quelen Ramos Dos Santos",
                            "Daniel Batista Alves",
                            "Samuel Ribeiro Chagas",
                            "Samara Silva De Melo"
                        ]
                    },
                    {
                        id: 1,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Emanoel Victor Martins Pinto",
                            "Thais Vitoria Silva Neves",
                            "Iago Oliveira Alves",
                            "Mira Almeida De Oliveira",
                            "Helen Santos Sousa",
                            "Walter Dos Santos Silva Neto",
                            "Davi Nery Souza Camboim"
                        ]
                    },
                    {
                        id: 2,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Giovanna Jaminy De Freitas Gomes",
                            "Lavinia Macedo Torquato",
                            "Ananda Gabryella Oliveira Araujo",
                            "Marcos Paulo Teixeira Cordeiro",
                            "Arthur De Sousa Guimaraes",
                            "Alana Maqueise Silva Cruz",
                            "Anna Karoline Alcantara Pinheiro"
                        ]
                    },
                    {
                        id: 3,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Nicolas Albano Santos",
                            "Maria Julia Rodrigues Barreto Souza",
                            "Victor Oliveira Lima",
                            "Luiz Felipe Goncalves Carvalhal",
                            "Vitor De Jesus Santos",
                            "Lucas Silva Santos",
                            "Marcos Haryel Miranda Barreto Santos"
                        ]
                    },
                    {
                        id: 4,
                        title: "",
                        num_alunos: 6,
                        random_list: [
                            "Otavio Gabriel Silva Moreira",
                            "Andre Gabriel Santana Mendonca Santos",
                            "Luanna Vitoria Neres Silva",
                            "Eduarda Moreira Oliveira Santos",
                            "Pedro Affonso Silva Marques",
                            "Nathalia Cruz Dos Santos"
                        ]
                    },
                    {
                        id: 5,
                        title: "",
                        num_alunos: 6,
                        random_list: [
                            "Rayllan Barbosa Dos Santos",
                            "Allexia Santos Macedo",
                            "Janson Ferreira Limeira Fernandes",
                            "Isabella Alves Dos Santos",
                            "Julia Aguiar Dos Anjos",
                            "Leticia Santos Sant'Anna"
                        ]
                    }
                ]
            }
        },
        {
            create_date: "2020-10-07",
            create_time: "17:52",
            colors: ["#EF9A9A", "#E57373"],
            title: "Eletrostática",

            author: {
                name: "Itamar Amaral",
                discipline: "Física"
            },

            list: {
                title: "Sala 5",
                shift: "Vespertino",
                all_students: 40,
                names: [
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
            },
       
            groups: {
                all_groups: 5,
                list: [
                    {
                        id: 0,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Laura Da Silva Bomfim",
                            "Debora Pena Silva",
                            "Marcela Lima Da Silva",
                            "Victoria Quelen Ramos Dos Santos",
                            "Daniel Batista Alves",
                            "Samuel Ribeiro Chagas",
                            "Samara Silva De Melo"
                        ]
                    },
                    {
                        id: 1,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Emanoel Victor Martins Pinto",
                            "Thais Vitoria Silva Neves",
                            "Iago Oliveira Alves",
                            "Mira Almeida De Oliveira",
                            "Helen Santos Sousa",
                            "Walter Dos Santos Silva Neto",
                            "Davi Nery Souza Camboim"
                        ]
                    },
                    {
                        id: 2,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Giovanna Jaminy De Freitas Gomes",
                            "Lavinia Macedo Torquato",
                            "Ananda Gabryella Oliveira Araujo",
                            "Marcos Paulo Teixeira Cordeiro",
                            "Arthur De Sousa Guimaraes",
                            "Alana Maqueise Silva Cruz",
                            "Anna Karoline Alcantara Pinheiro"
                        ]
                    },
                    {
                        id: 3,
                        title: "",
                        num_alunos: 7,
                        random_list: [
                            "Nicolas Albano Santos",
                            "Maria Julia Rodrigues Barreto Souza",
                            "Victor Oliveira Lima",
                            "Luiz Felipe Goncalves Carvalhal",
                            "Vitor De Jesus Santos",
                            "Lucas Silva Santos",
                            "Marcos Haryel Miranda Barreto Santos"
                        ]
                    },
                    {
                        id: 4,
                        title: "",
                        num_alunos: 6,
                        random_list: [
                            "Otavio Gabriel Silva Moreira",
                            "Andre Gabriel Santana Mendonca Santos",
                            "Luanna Vitoria Neres Silva",
                            "Eduarda Moreira Oliveira Santos",
                            "Pedro Affonso Silva Marques",
                            "Nathalia Cruz Dos Santos"
                        ]
                    },
                    {
                        id: 5,
                        title: "",
                        num_alunos: 6,
                        random_list: [
                            "Rayllan Barbosa Dos Santos",
                            "Allexia Santos Macedo",
                            "Janson Ferreira Limeira Fernandes",
                            "Isabella Alves Dos Santos",
                            "Julia Aguiar Dos Anjos",
                            "Leticia Santos Sant'Anna"
                        ]
                    }
                ]
            }
        }
    ]
}
