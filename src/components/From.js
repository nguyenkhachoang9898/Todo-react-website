import React from "react";

// state props 
const From = ({inputText,setInputText,todos,setTodos,setStatus}) => {
    //nhan. Props tu` App.js
    const inputTextHandle = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    }; //ham` lay' du~ lieu. tu` OnChange duoi' input, sau do' thay doi? Props

    const submitTodoHandle = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text : inputText, completed : false, id : Math.random() *1000},
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return(
        <form>
            <input value={inputText} onChange={inputTextHandle} type="text" className="todo-input" />
            <button onClick={submitTodoHandle} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default From;