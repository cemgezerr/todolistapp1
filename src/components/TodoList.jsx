import React from 'react'
import Todo from './Todo'




const TodoList = ({ todos, onRemoveTodo, onUpdateTodo }) => {
    return (
        <div style={{ width: "100%" }}>
            {todos && todos.map((todo) => (
                <Todo todo={todo} onRemoveTodo={onRemoveTodo}
                    onUpdateTodo={onUpdateTodo} />
            ))}

        </div>
    )
}

export default TodoList