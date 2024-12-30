import { renderTasks } from './renderTasks.js'
import { tasks, updateTasks } from './tasks.js'

export const initDeleteListeners = () => {
    const deleteElements = document.querySelectorAll('.delete')

    for (const deleteElement of deleteElements) {
        deleteElement.addEventListener('click', (event) => {
            event.stopPropagation()
            const id = tasks[deleteElement.dataset.index].id
            fetch(`https://wedev-api.sky.pro/api/todos/${id}`, {
                method: 'DELETE',
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    updateTasks(data.todos)
                    renderTasks()
                })
            renderTasks()
        })
    }
}
