import React, { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import "./App.css"
import TodoList from './components/TodoList'

const App = () => {

    const [todos, setTodos] = useState([])
    const [searchTerm, setSearchTerm] = useState('');


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
    const filteredTodos = todos.filter(todo => {
        return todo.content.toLowerCase().includes(searchTerm.toLowerCase());
    });




    return (
        <div className='App'>
            <div>
                <TodoCreate onCreateTodo={createTodo} />
                <input
                    type="text"
                    placeholder="Todo ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='search-input'
                />
                <TodoList todos={filteredTodos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
            </div>
        </div>

    )
}

export default App;