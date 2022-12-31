import React from 'react';
import {RiCloseCircleFill} from 'react-icons/ri';
import {AiFillCheckCircle} from 'react-icons/ai';

function TodoList({todos, setTodos}) {
  const handleComplete = (todo) => {
    setTodos(
        todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item;
        })
    );
  }

  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  console.log(todos);
    
  return (
    <div>
        <div>
            {todos.map((todo) => (
                <li className='todo-item' key={todo.id}>
                    {/* <input
                        type='text'
                        value={todo.title}
                        className={'list ${todo.completed ? "complete" : ""}'}
                        onChange={(c) => c.preventDefault()}
                    /> */}
                    {todo.title}
                    <button className='delete-btn' onClick={() => handleDelete(todo)}><RiCloseCircleFill/></button>
                    <button className='complete-btn' onClick={() => handleComplete(todo)}><AiFillCheckCircle/></button>
                </li>
            ))}
        </div>
    </div>
  );
}

export default TodoList;