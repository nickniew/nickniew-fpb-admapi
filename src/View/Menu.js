import React, { useState } from 'react';
import '../App.css';

function Menu() {
  const [buttons, setButtons] = useState([]);
  const [newButtonName, setNewButtonName] = useState('');

  const handleAddButton = () => {
    if (newButtonName.trim() !== '') {
      setButtons(prevButtons => [...prevButtons, newButtonName]);
      setNewButtonName('');
    }
  };

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <div className="button-list">
        {buttons.map((button, index) => (
          <button key={index} className="menu-button">{button}</button>
        ))}
      </div>
      <div className="add-button">
        <input
          type="text"
          value={newButtonName}
          onChange={e => setNewButtonName(e.target.value)}
          placeholder="Novo botão"
        />
        <button onClick={handleAddButton}>Adicionar botão</button>
      </div>
    </div>
  );
}

export default Menu;