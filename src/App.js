import React, { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  //helper funcs

  function addItem() { 

    if(!newItem) {
      alert('Enter an Item!');
      return
    }
    
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item])

    setNewItem("");
  }

  function clearList() {
    setItems([]);
  }
  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="App">
      <h1 id="title">To-do List!</h1>

      {/* <button id='dark-mode' onClick={() => }>🌙</button> */}

      <div>
      <button onClick={clearList} id="clear-button">clear list</button>
      </div>

      <input 
      type='text' 
      placeholder='type in here...'
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()} id='add-button'>add</button>

        {items.map(item => {
          return(
            <div id='list-elem' key={item.id}>{item.value}<button id='x-button' onClick={() => deleteItem(item.id)}>X</button></div>
          )
        }
          )}
    </div>
  );
}

export default App;
