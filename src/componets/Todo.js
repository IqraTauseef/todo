import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import './todo.css'
function Todo() {
  const [input, setInput] =useState('')
  const [todo, setTodo] = useState([])
  function handleOnChange(e) {
    setInput(e.target.value)
  }
  function todoApp() {
    if (input !== '') {
      setTodo([...todo, input])
      setInput('')
    }
  }
  return (
    <div className='container'>
      <div className='input'>
        <input onChange={handleOnChange} value={input} type="text" placeholder='Enter your todo' />
        <button onClick={() => todoApp()} type='submit' className='add-btn'><IoMdAddCircleOutline /></button>
      </div>
      {
  todo.length > 0 && todo.map((data, i) => (
    <div className="list-container" key={i}>
      <div className="list-item">{data}</div>
      <div
        className="dlt-btn"
        onClick={() => setTodo(todo.filter((_, index) => index !== i))}
      >
        <MdDelete />
      </div>
    </div>
  ))
}


    </div>
  )
}

export default Todo