import html from '../core.js'
import toDoItem from './TodoItem.js'
import { connect } from '../store.js'
const connector = connect()

function toDoList({todos, filter, filters}) {
    return html`
    <section class="main">
        <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox"
        onchange="dispatch('toggleAll', this.checked)"
        ${todos.every(filters.completed) && 'checked'}
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            ${todos.map((todo , index) => {
                if(filters[filter](todo))
                    return toDoItem({todo, index})
            })}
        </ul>
    </section>
    `
}
export default connector(toDoList)