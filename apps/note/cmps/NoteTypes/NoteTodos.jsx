export function NoteTodos({ info }) {
    return (
        <ul>
            {info.todos.map((todo, idx) => (
                <li key={idx}>
                    <input type="checkbox" checked={todo.doneAt} /> {todo.txt}
                </li>
            ))}
        </ul>
    )
}
