import React from 'react';
import './App.css';
import Todo from './componets/Todo';

function App() {
  return (
    <div className="App">
     <h1 style={{textAlign:"center", marginTop:"50px", color: "#0f0017", fontSize:"45px"} }>Todo List</h1>
     <Todo />
    </div>
  );
}

export default App;
