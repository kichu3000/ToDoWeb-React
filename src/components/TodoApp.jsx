import React, { useState } from 'react'
import './TodoApp.css';
function TodoApp() {

  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: input,
      status : false

    }
    setTodos([...todos,newTodo]);
    setInput('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='container'>
        <header className='header'>Todo List</header>
        {todos.length > 0 && (
          <div className="todo-list">
            {todos.map(todo => (
              <div key={todo.id} className="todo-item">
                <input
                className='checkbox'
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => {
                    setTodos(
                      todos.map(t =>
                        t.id === todo.id ? { ...t, status: !t.status } : t
                      )
                    );
                  }}
                />
                <li style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>
                  {todo.text}
                </li>
                <button className='delete' onClick={() => handleDelete(todo.id)}>🗑️</button>
              </div>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <p>Add a new todo...</p>
          <input
            className='input'
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className='submit' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default TodoApp
