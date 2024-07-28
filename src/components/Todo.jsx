import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
    const { id, content } = todo;

    const [editTable, setEditTable] = useState(false)
    const [newTodo, setNewTodo] = useState(content)

    const removeTodo = () => {
        onRemoveTodo(id)
    }

    const updatedTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request)
        setEditTable(false)
    }

    return (
        <div style={{ width: "400px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div key={id}>
                {editTable ? <input value={newTodo} onChange={e => setNewTodo(e.target.value)} className='input' type='text' /> :
                    content
                }
            </div>
            <div>
                <IoIosRemoveCircle onClick={removeTodo} style={{ paddingRight: "8px" }} />
                {editTable ? <FaCheck onClick={updatedTodo} /> : <FaEdit onClick={() => setEditTable(true)} />}
            </div>

        </div>
    )
}

export default Todo