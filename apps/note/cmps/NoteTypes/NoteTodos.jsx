const { useState } = React

export function NoteTodos({ info }) {
    const [todos, setTodos] = useState(info.todos)
    
    function onToggleTodo(idx) {
        const newTodos = [...todos]
        newTodos[idx].doneAt = newTodos[idx].doneAt ? null : Date.now()
        setTodos(newTodos)
    }

    return (
        <section className="note-todos">
            <ul>
                {info.todos.map((todo, idx) => (
                    <li key={idx}>
                        <input type="checkbox" onChange={() => onToggleTodo(idx)} defaultChecked={todo.doneAt} /> {todo.txt}
                    </li>
                ))}
            </ul>
        </section>
    )
}
