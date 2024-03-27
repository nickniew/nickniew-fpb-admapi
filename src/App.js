import logo from './Images/Feedplaybackpng.png';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [trail, setTrail] = useState([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const trailElement = document.createElement('div');
    trailElement.className = 'login-trail';
    trailElement.style.left = `${clientX}px`;
    trailElement.style.top = `${clientY}px`;
    document.body.appendChild(trailElement);
    setTrail((prevTrail) => [...prevTrail, trailElement]);
  };

  useEffect(() => {
    const handleCleanup = () => {
      trail.forEach((element) => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      handleCleanup();
    };
  }, [trail]);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className='login-logo-container'>
          <img src={logo} alt="Logo" className="login-logo" />
        </div>
        <form className="login-form">
          <input type="text" placeholder="Nome de usuário" className="login-input" />
          <input type="password" placeholder="Senha" className="login-input" />
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;