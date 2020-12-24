export function NoteTodos({ note }) {

    return (<section className="note-todos">
        <h3>{note.info.label}</h3>
        <ul className="list-todos">
            {note.info.todos.map((todo,idx) =>
                <li className="todo-item" key={idx} >
                    <h4>{todo.txt}</h4>
                </li>
            )}
        </ul>
    </section>
    )
}