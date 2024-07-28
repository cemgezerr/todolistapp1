import React, { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import "./App.css"
import TodoList from './components/TodoList'

const App = () => {

    const [todos, setTodos] = useState([])

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const removeTodo = (todoId) => {
        setTodos([...todos.filter((todo) => todo.id !== todoId)])
    }
    const updateTodo = (newTodo) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id !== newTodo.id) {
                return todo;
            }
            return newTodo;
        })
        setTodos([...updatedTodos]);
    }



    return (
        <div className='App'>
            <div>
                <TodoCreate onCreateTodo={createTodo} />
                <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
            </div>
        </div>

    )
}

export default App;