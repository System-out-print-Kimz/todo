import React from 'react';
import {v4 as uuidv4} from 'uuid';

function TodoForm({input, setInput, todos, setTodos}) {
  const handleChange = change => {
        setInput(change.target.value);
    }

  const handleSubmit = s => {
        s.preventDefault();

        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
        setInput('');
    }  

  return (
    <div className='header'>
        <h1>Stuff for today</h1>
        <form className='todo-form'onSubmit={handleSubmit}>
            <input 
                className='todo-txt'
                placeholder='What to do' 
                type='text' 
                name='text' 
                value={input}
                required
                onChange={handleChange}
                />
            <button className='todo-btn' type='submit'>Add item</button>
        </form>
    </div>
  );
}

export default TodoForm;