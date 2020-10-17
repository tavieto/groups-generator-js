const express = require('express')
const app = express()

app.get('/generate-groups', (req, res) => {
    res.send(getValue())
})

app.listen(3000)

function getValue() {
    let all_groups = 4      // document.getElementById('txt-grp').value
    let all_students = 20   // document.getElementById('txt-std').value

    let resultado = {
        total_alunos: all_students,
        total_grupos: all_groups,
        grupos: []
    }

    let students_per_group = separetedPerGroup(all_students, all_groups)

    let random_numbers = embaralhar(all_students)

    return JSON.stringify(division(all_groups, students_per_group, random_numbers, resultado))
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
        while (count < all_groups) {
            students_in_each_group.push(students_this_group)
            count++
        }

        let add_one = 0
        let was_add = 0

        while (add_one < all_groups) {
            if(was_add < excess) {
                students_in_each_group[add_one] = students_in_each_group[add_one] + 1
                was_add++
            }
            add_one++
        }
    }

    return students_in_each_group
}

function embaralhar(all_students) {

    let array = []
    let count = 1

    while(count <= all_students) {
        array.push(count)
        count++
    }

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
