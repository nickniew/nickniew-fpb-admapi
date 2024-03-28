import logo from '../Images/Feedplaybackpng.png';
import React, { useState, useEffect } from 'react';
import '../App.css';
import Menu from '../View/Menu';

function Login() {
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

    const [showMenu, setShowMenu] = useState(false);

    const handleLogin = () => {
        setShowMenu(true);
    };

    return (
        <div className="login-container" style={{ backgroundImage: 'url("https://media.giphy.com/media/UNHplVba2fweBfkLHv/giphy.gif")', backgroundSize: 'cover' }}>
            {!showMenu ? (
                <div className="login-box">
                    <div className='login-logo-container'>
                        <img src={logo} alt="Logo" className="login-logo" />
                    </div>
                    <form className="login-form">
                        <input type="text" placeholder="Nome de usuário" className="login-input" />
                        <input type="password" placeholder="Senha" className="login-input" />
                        <button type="submit" className="login-button" onClick={handleLogin}>Entrar</button>
                    </form>
                </div>
            ) : (
                <Menu />
            )}
        </div>
    );
}

export default Login;