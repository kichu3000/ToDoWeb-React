import React from 'react'
import './TodoApp.css';
function TodoApp() {
  return (
    <div className='container'>
        <header className='header'>Todo List</header>
        <div className="todo-list">
          {/* Map todos here */}
        </div>
        <form action="">
          <p>Add a new todo...</p>
          <input className='input' type="text" name="todo" id="" />
          <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default TodoApp
