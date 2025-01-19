// import React, { useState } from 'react'
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { MdDelete } from "react-icons/md";
// import './todo.css'
// function Todo() {
//   const [input, setInput] =useState('')
//   const [todo, setTodo] = useState([])
//   function handleOnChange(e) {
//     setInput(e.target.value)
//   }
//   function todoApp() {
//     if (input !== '') {
//       setTodo([...todo, input])
//       setInput('')
//     }
//   }
//   return (
//     <div className='container'>
//       <div className='input'>
//         <input onChange={handleOnChange} value={input} type="text" placeholder='Enter your todo' />
//         <button onClick={() => todoApp()} type='submit' className='add-btn'><IoMdAddCircleOutline /></button>
//       </div>
//       {
//   todo.length > 0 && todo.map((data, i) => (
//     <div className="list-container" key={i}>
//       <div className="list-item">{data}</div>
//       <div
//         className="dlt-btn"
//         onClick={() => setTodo(todo.filter((_, index) => index !== i))}
//       >
//         <MdDelete />
//       </div>
//     </div>
//   ))
// }


//     </div>
//   )
// }

// export default Todo

import React, { useState, useEffect, useRef } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import './todo.css';

function Todo() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null); // useRef hook ka istamaal

  // Component mount hone par localStorage se data load karein
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodo(savedTodos);
  }, []);

  // Todos change hone par localStorage update karein
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim()) {
      setTodo([...todo, input.trim()]);
      setInput('');
      inputRef.current.focus(); // Input field par focus wapas set karein
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  };

  return (
    <div className="container">
      <div className="input">
        <input
          ref={inputRef} // Input field ko reference de rahe hain
          onChange={handleOnChange}
          value={input}
          type="text"
          placeholder="Enter your todo"
        />
        <button onClick={addTodo} type="button" className="add-btn">
          <IoMdAddCircleOutline />
        </button>
      </div>

      {todo.length > 0 &&
        todo.map((item, index) => (
          <div className="list-container" key={index}>
            <div className="list-item">{item}</div>
            <div className="dlt-btn" onClick={() => deleteTodo(index)}>
              <MdDelete />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Todo;
