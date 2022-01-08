import html from '../core.js'
import header from './header.js'
import toDoList from './TodoList.js'
import footer from './footer.js'
import { connect } from '../store.js'

function app({todos}) {

    return html`
        <section class="todoapp">
            ${header()}
            ${todos.length > 0 && toDoList()}
            ${todos.length > 0 && footer()}
        </section>
    `
}

export default connect()(app)