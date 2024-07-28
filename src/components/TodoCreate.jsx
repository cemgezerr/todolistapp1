import React, { useState } from 'react'
import "../App.css"

const TodoCreate = ({ onCreateTodo }) => {

    const [newTodo, setNewTodo] = useState("")

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        onCreateTodo(request)
        setNewTodo("")

    }

    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={e => setNewTodo(e.target.value)} className='input' type='text' placeholder='todo giriniz' />
            <button onClick={createTodo} className='button'>Todo Ekle</button>
        </div>
    )
}

export default TodoCreate