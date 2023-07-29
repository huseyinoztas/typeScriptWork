import React, { useState } from 'react';
import './App.css';
import Input from './componenets/input'
import { Todos } from './types/Type';
import Message from './componenets/Message';

//FC functional Component
const App:React.FC = () =>  {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todos[]>([])


  const addMessage = () => {
    if(todo) setTodos([...todos,{message:todo, id: todos.length + 1}])
    setTodo('');
  }

  const deleteMessage = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  return (
    <div className="App">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
      <Message deleteMessage={deleteMessage} todos={todos} />
    </div>
  );
}

export default App;
