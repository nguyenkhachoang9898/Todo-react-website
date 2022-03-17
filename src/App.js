import React, { useState,useEffect } from 'react';
import './App.css';
//import components
import From from './components/From';
import TodoList from './components/TodoList';

function App() {
  //State stuff
  const [inputText,setInputText] = useState(""); //set State ban dau` bang` rong~
  const [todos,setTodos] = useState([]); //set State ban dau` la` 1 mang? rong~
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //chi? chay. ham` 1 lan khi web start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //UseEffect
  useEffect(() => {
    //Function
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    //Save Local
    const saveLocalTodos = () => {
    
      localStorage.setItem('todos', JSON.stringify(todos));
      
    };


    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Save Local
  // const saveLocalTodos = () => {
    
  //   localStorage.setItem('todos', JSON.stringify(todos));
    
  // };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null)
    {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>

      <From 
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={ setInputText }
        setStatus={setStatus}
      />

      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;


//truyen` du~ lieu. qua From bang` Props su? dung. setInputText