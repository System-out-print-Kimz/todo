import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div>
        <TodoForm 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
      />
      </div>
      <div>
        <TodoList
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
