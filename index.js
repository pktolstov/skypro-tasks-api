import { renderTasks } from './modules/renderTasks.js'
import { tasks, updateTasks } from './modules/tasks.js'

fetch('https://wedev-api.sky.pro/api/todos', {
    method: 'GET',
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateTasks(data.todos)
        //console.log(tasks);
        renderTasks()
    })

const button = document.getElementById('add')
const input = document.getElementById('field')

button.addEventListener('click', () => {
    input.classList.remove('error')

    if (input.value === '') {
        input.classList.add('error')
        return
    }

    const newTask = {
        text: input.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
    }
    fetch('https://wedev-api.sky.pro/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTask),
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateTasks(data.todos)
            renderTasks()
        })

    input.value = ''
})
